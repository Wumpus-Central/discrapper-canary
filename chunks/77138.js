"use strict";
n.d(t, { a: () => R });
var i = n(636537),
    r = n(306173),
    a = n(913122),
    s = n(626584),
    l = n(451409),
    o = n(453771),
    d = n(77729),
    c = n(652215);
let u = new s.A("uploadRtcLogFiles");
async function _(e, t) {
    let n;
    if (null == d.A.fileManager.readLogFiles) throw new a._(a.ct.GENERAL);
    let r = [];
    try {
        r = (r = await d.A.fileManager.readLogFiles(e)).map((e) => (0, o.ww)(e, "application/octet-stream"));
    } catch (e) {
        throw (u.error(`uploadDebugFiles: read error '${e}'`), new a._(a.ct.READ));
    }
    if (0 === r.length) throw new a._(a.ct.NO_FILE);
    let s = { extraInfo: t, mediaEngineState: l.Ay.getState() },
        _ = [
            ...r.map((e) => ({ name: e.name, file: e, filename: e.name })),
            {
                name: "media_engine_state.json",
                filename: "media_engine_state.json",
                file: new Blob([JSON.stringify(s, void 0, 2)]),
            },
        ],
        E = new Set();
    try {
        n = await i.Bo.post({
            url: c.Rsh.DEBUG_LOGS(c.Umv.RTC),
            attachments: [
                ..._.map((e) => {
                    let t = (function (e, t) {
                        let n = t.split("."),
                            i = n.length > 1 ? n.pop() : "",
                            r = n.join("."),
                            a = `${r}.${i}`,
                            s = 1;
                        for (; e.has(a); ) (a = `${r}_${s}.${i}`), (s += 1);
                        return e.add(a), a;
                    })(E, e.name);
                    return { name: t, file: e.file, filename: t };
                }),
            ],
            rejectWithError: !1,
        });
    } catch (e) {
        if (429 === e.status) throw new a._(a.ct.PROGRESS);
        throw (u.error(`Debug log upload error: status: ${e.status}, message: ${e.message}`), new a._(a.ct.UPLOAD));
    }
    if ("success_count" in n.body && n.body.success_count !== _.length)
        throw (
            (u.error(`Debug log upload: stored files ${n.body.success_count} !== ${_.length}`), new a._(a.ct.GENERAL))
        );
    if (
        ("store_success" in n.body && !n.body.store_success) ||
        ("id_match" in n.body && !n.body.id_match) ||
        ("all_success" in n.body && !n.body.all_success)
    )
        throw (
            (u.error(
                `Debug log upload: store_success: ${n.body.store_success} / id_match: ${n.body.id_match} / all_success: ${n.body.all_success}`,
            ),
            new a._(a.ct.GENERAL))
        );
}
var E = n(487329);
n(627968), n(64700);
let A = {};
function h(e, t) {
    let n = e.length > t ? t : e.length;
    return e.substring(0, n).padEnd(t, " ");
}
var I = n(734057),
    f = n(53943);
n(321073);
var p = n(735438),
    T = n.n(p),
    m = n(61090),
    g = n(707539);
function S(e) {
    let t = null == e.tag ? e.label : `${e.label} ${e.tag}`;
    return (
        t.includes("_START") && (t = "Start " + t.replace("_START", "")),
        t.includes("_END") && (t = "Finish " + t.replace("_END", "")),
        t
    );
}
var N = n(506774);
let C = new s.A("DebugUploadManager");
async function R(e, t) {
    try {
        await O(e), await _(0xe00000, t);
    } catch (t) {
        let e;
        throw (
            (t instanceof a._ &&
                (e = (function (e) {
                    switch (e.code) {
                        case a.ct.GENERAL:
                            return E.B6.UploadErrorGeneral;
                        case a.ct.NO_FILE:
                            return E.B6.UploadErrorNoFile;
                        case a.ct.PROGRESS:
                            return E.B6.UploadErrorProgress;
                        case a.ct.UPLOAD:
                            return E.B6.UploadErrorUpload;
                        case a.ct.READ:
                            return E.B6.UploadErrorRead;
                        default:
                            return;
                    }
                })(t)),
            (0, E.QW)({ type: E.iy.DEBUG_LOG_UPLOAD_FAILED, underlyingError: e, errorMessage: t.message }),
            t)
        );
    }
}
async function O(e) {
    try {
        let t, n, a, s;
        try {
            t = f.As();
        } catch (e) {
            t = `Logs failed: ${e}`;
        }
        try {
            n = "";
        } catch (e) {
            n = `System Logs failed ${e}`;
        }
        try {
            a = await Promise.resolve([]).then((e) =>
                (function (e, t) {
                    if (0 === e.length) return "No logs";
                    let n = N.w.get(c.Xlh),
                        i = N.w.get(c.Ahp),
                        r = null != n ? `Device Token: ${n}` : "",
                        a = null != i ? `Device Voip Token: ${i}` : "",
                        s = e
                            .map((e) => {
                                let n = e.silent ? "Silent" : "Displayed",
                                    i = t ? `${e.channelId} - ${e.messageId}` : `${e.title} - ${e.content}`;
                                return `${new Date(e.receivedTimestamp).toISOString()} [${e.type}] ${n} - ${i}`;
                            })
                            .join("\n");
                    return `${r}
${a}

${s}`;
                })(e, !0),
            );
        } catch (e) {
            a = `Push logs failed: ${e}`;
        }
        try {
            s = (0, r.G1)() ?? "";
        } catch (e) {
            s = `LibDiscore logs failed: ${e}`;
        }
        let l = t.length + n.length + a.length + s.length;
        if (l > 9437184) {
            let e = 1 - 9437184 / l;
            (t = t.slice(t.length - Math.floor(t.length * e))),
                (n = n.slice(n.length - Math.floor(n.length * e))),
                (a = a.slice(a.length - Math.floor(a.length * e))),
                (s = s.slice(s.length - Math.floor(s.length * e)));
        }
        let o = `
    ${(function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return m.A.logGroups
            .map((i) => {
                var r, a, s, l, o, d;
                let c,
                    u,
                    _,
                    E,
                    A,
                    h,
                    I,
                    { index: f, timestamp: p, logs: m, nativeLogs: N, serverTrace: C } = i,
                    R = 0 === f ? (T().find(m, (e) => e.log.indexOf("Logger loaded") >= 0)?.timestamp ?? e) : p,
                    O =
                        ((o =
                            ((r = m),
                            (a = N),
                            (s = t),
                            (l = n),
                            (r = r.slice()),
                            (c = new Set(a.map(S))),
                            (u = ""),
                            (_ = []),
                            a.forEach((e) => {
                                let t = S(e),
                                    n = 0,
                                    i = s || !e.autoGenerated,
                                    a =
                                        t.startsWith("Start ") &&
                                        !t.includes("RUN_JS_BUNDLE") &&
                                        c.has(t.replace("Start ", "Finish "));
                                if (
                                    t.startsWith("Finish ") &&
                                    !t.includes("RUN_JS_BUNDLE") &&
                                    c.has(t.replace("Finish ", "Start "))
                                ) {
                                    var l;
                                    u = u.substring(2);
                                    let r = _.pop();
                                    null != r &&
                                        ((n = e.timestamp - r.timestamp),
                                        (i =
                                            i ||
                                            (n > 5 &&
                                                ((l = t),
                                                !["GET_CONSTANTS", "CONVERT_CONSTANTS"].some((e) => l.includes(e))))),
                                        (r.shouldKeep = r.shouldKeep || i));
                                }
                                let o = {
                                    emoji: "\u2615",
                                    timestamp: e.timestamp,
                                    delta: n > 0 ? n : void 0,
                                    prefix: u,
                                    log: t,
                                    shouldKeep: i,
                                };
                                (function (e, t) {
                                    let n = 0;
                                    for (; n < e.length; n++) {
                                        let { timestamp: i } = e[n];
                                        if (null != i && i > t.timestamp) break;
                                    }
                                    e.splice(n, 0, t);
                                })(r, o),
                                    a && ((u += "| "), _.push(o));
                            }),
                            (E = !1),
                            r.filter(
                                (e) =>
                                    !(E && e.log.includes("\u21AA")) &&
                                    !(E = (!l && e.emoji === `\u{1F3A8}`) || !1 === e.shouldKeep),
                            ))),
                        (d = R),
                        (A = (function (e) {
                            let t = [];
                            for (let n = 0; n < e.length; n++) {
                                let i = e[n],
                                    r = e[n + 1];
                                null != r && r.log === i.log.replace("Start ", "Finish ")
                                    ? ((r.log = r.log.replace("Finish ", "")), t.push(r), n++)
                                    : t.push(i);
                            }
                            return t;
                        })(o).map((e) => ({
                            totalTime: null == e.timestamp ? "" : ((e.timestamp - d) / 1e3).toFixed(3),
                            deltaTime: null == e.delta ? "" : String(Math.round(e.delta)),
                            log: `${e.emoji.length > 0 ? `${e.emoji} ` : ""}${e.prefix}${e.log}
`,
                        }))),
                        (h = T().max(A.map((e) => e.totalTime.length)) ?? 0),
                        (I = T().max(A.map((e) => e.deltaTime.length)) ?? 0),
                        A.map((e) => {
                            let { totalTime: t, deltaTime: n, log: i } = e;
                            return `${T().padStart(t, h)} ${T().padStart(n, I)} ${i}`;
                        }).join("")),
                    L = `Trace #${f + 1} started ${(0, g.aK)(p)}
${O}`;
                return (
                    null != C &&
                        (L += `
 Server trace for trace #${f + 1}${C}`),
                    L
                );
            })
            .join("\n\n");
    })(null)}

    ${(function () {
        if (0 === Object.keys(A).length) return "";
        let e = `Component Render Stats (microseconds):
`,
            t = `|${h("id", 20)}|${h("Mounts", 8)}|${h("Mount Mean", 20)}|${h("Updates", 8)}|${h("Update Mean", 20)}|${h("Nested", 8)}|${h("Nested Mean", 20)}|
`;
        return (
            e +
            t +
            Object.entries(A).map((e) => {
                let [t, n] = e;
                return `|${h(t, 20)}|${h(n.mount.count.toString(), 8)}|${h(n.mount.mean.toString(), 20)}|${h(n.update.count.toString(), 8)}|${h(n.update.mean.toString(), 20)}|${h(n.nestedUpdate.count.toString(), 8)}|${h(n.nestedUpdate.mean.toString(), 20)}|
`;
            })
        );
    })()}

    Metadata:
    ${JSON.stringify({ logsUploaded: new Date().toISOString(), releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL, buildNumber: "574859", versionHash: "2b3cb1c01c77d876353e0aa508158adefc6110cb" }, void 0, 2)}

    ChannelStore:
    ${JSON.stringify(I.A.getDebugInfo(), void 0, 2)}

    Logs:
    ${t}

    System logs:
    ${n}

    LibDiscore logs:
    ${s}

    Push Notifications:
    ${a}
    `;
        f.IU();
        let d = c.Rsh.DEBUG_LOG(e, "discord_app_logs");
        await i.Bo.post({
            url: d,
            body: o,
            retries: 3,
            headers: { "Content-Type": "text/plain" },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    } catch (e) {
        C.error(`uploadAppLogFiles: upload app log files error ${e.message}`);
    }
}
