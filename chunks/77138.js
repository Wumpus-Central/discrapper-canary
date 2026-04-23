"use strict";
n.d(t, { a: () => R });
var i = n(636537),
    r = n(306173),
    s = n(845584),
    a = n(626584),
    o = n(969341),
    l = n(453771),
    d = n(77729),
    _ = n(652215);
let u = new a.A("uploadRtcLogFiles");
async function c(e, t) {
    let n;
    if (null == d.A.fileManager.readLogFiles) throw new s._(s.ct.GENERAL);
    let r = [];
    try {
        r = (r = await d.A.fileManager.readLogFiles(e)).map((e) => (0, l.ww)(e, "application/octet-stream"));
    } catch (e) {
        throw (u.error(`uploadDebugFiles: read error '${e}'`), new s._(s.ct.READ));
    }
    if (0 === r.length) throw new s._(s.ct.NO_FILE);
    let a = { extraInfo: t, mediaEngineState: o.Ay.getState() },
        c = [
            ...r.map((e) => ({ name: e.name, file: e, filename: e.name })),
            {
                name: "media_engine_state.json",
                filename: "media_engine_state.json",
                file: new Blob([JSON.stringify(a, void 0, 2)]),
            },
        ],
        E = new Set();
    try {
        n = await i.Bo.post({
            url: _.Rsh.DEBUG_LOGS(_.Umv.RTC),
            attachments: [
                ...c.map((e) => {
                    let t = (function (e, t) {
                        let n = t.split("."),
                            i = n.length > 1 ? n.pop() : "",
                            r = n.join("."),
                            s = `${r}.${i}`,
                            a = 1;
                        for (; e.has(s); ) (s = `${r}_${a}.${i}`), (a += 1);
                        return e.add(s), s;
                    })(E, e.name);
                    return { name: t, file: e.file, filename: t };
                }),
            ],
            rejectWithError: !1,
        });
    } catch (e) {
        if (429 === e.status) throw new s._(s.ct.PROGRESS);
        throw (u.error(`Debug log upload error: status: ${e.status}, message: ${e.message}`), new s._(s.ct.UPLOAD));
    }
    if ("success_count" in n.body && n.body.success_count !== c.length)
        throw (
            (u.error(`Debug log upload: stored files ${n.body.success_count} !== ${c.length}`), new s._(s.ct.GENERAL))
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
            new s._(s.ct.GENERAL))
        );
}
var E = n(487329);
n(627968), n(64700);
let h = {};
function m(e, t) {
    let n = e.length > t ? t : e.length;
    return e.substring(0, n).padEnd(t, " ");
}
var f = n(734057),
    g = n(53943);
n(321073);
var p = n(735438),
    A = n.n(p),
    I = n(61090),
    T = n(707539);
function S(e) {
    let t = null == e.tag ? e.label : `${e.label} ${e.tag}`;
    return (
        t.includes("_START") && (t = "Start " + t.replace("_START", "")),
        t.includes("_END") && (t = "Finish " + t.replace("_END", "")),
        t
    );
}
var N = n(506774);
let C = new a.A("DebugUploadManager");
async function R(e, t) {
    try {
        await O(e), await c(0xe00000, t);
    } catch (t) {
        let e;
        throw (
            (t instanceof s._ &&
                (e = (function (e) {
                    switch (e.code) {
                        case s.ct.GENERAL:
                            return E.B6.UploadErrorGeneral;
                        case s.ct.NO_FILE:
                            return E.B6.UploadErrorNoFile;
                        case s.ct.PROGRESS:
                            return E.B6.UploadErrorProgress;
                        case s.ct.UPLOAD:
                            return E.B6.UploadErrorUpload;
                        case s.ct.READ:
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
        let t, n, s, a;
        try {
            t = g.As();
        } catch (e) {
            t = `Logs failed: ${e}`;
        }
        try {
            n = "";
        } catch (e) {
            n = `System Logs failed ${e}`;
        }
        try {
            s = await Promise.resolve([]).then((e) =>
                (function (e, t) {
                    if (0 === e.length) return "No logs";
                    let n = N.w.get(_.Xlh),
                        i = N.w.get(_.Ahp),
                        r = null != n ? `Device Token: ${n}` : "",
                        s = null != i ? `Device Voip Token: ${i}` : "",
                        a = e
                            .map((e) => {
                                let n = e.silent ? "Silent" : "Displayed",
                                    i = t ? `${e.channelId} - ${e.messageId}` : `${e.title} - ${e.content}`;
                                return `${new Date(e.receivedTimestamp).toISOString()} [${e.type}] ${n} - ${i}`;
                            })
                            .join("\n");
                    return `${r}
${s}

${a}`;
                })(e, !0),
            );
        } catch (e) {
            s = `Push logs failed: ${e}`;
        }
        try {
            a = (0, r.G1)() ?? "";
        } catch (e) {
            a = `LibDiscore logs failed: ${e}`;
        }
        let o = t.length + n.length + s.length + a.length;
        if (o > 9437184) {
            let e = 1 - 9437184 / o;
            (t = t.slice(t.length - Math.floor(t.length * e))),
                (n = n.slice(n.length - Math.floor(n.length * e))),
                (s = s.slice(s.length - Math.floor(s.length * e))),
                (a = a.slice(a.length - Math.floor(a.length * e)));
        }
        let l = `
    ${(function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return I.A.logGroups
            .map((i) => {
                var r, s, a, o, l, d;
                let _,
                    u,
                    c,
                    E,
                    h,
                    m,
                    f,
                    { index: g, timestamp: p, logs: I, nativeLogs: N, serverTrace: C } = i,
                    R = 0 === g ? (A().find(I, (e) => e.log.indexOf("Logger loaded") >= 0)?.timestamp ?? e) : p,
                    O =
                        ((l =
                            ((r = I),
                            (s = N),
                            (a = t),
                            (o = n),
                            (r = r.slice()),
                            (_ = new Set(s.map(S))),
                            (u = ""),
                            (c = []),
                            s.forEach((e) => {
                                let t = S(e),
                                    n = 0,
                                    i = a || !e.autoGenerated,
                                    s =
                                        t.startsWith("Start ") &&
                                        !t.includes("RUN_JS_BUNDLE") &&
                                        _.has(t.replace("Start ", "Finish "));
                                if (
                                    t.startsWith("Finish ") &&
                                    !t.includes("RUN_JS_BUNDLE") &&
                                    _.has(t.replace("Finish ", "Start "))
                                ) {
                                    var o;
                                    u = u.substring(2);
                                    let r = c.pop();
                                    null != r &&
                                        ((n = e.timestamp - r.timestamp),
                                        (i =
                                            i ||
                                            (n > 5 &&
                                                ((o = t),
                                                !["GET_CONSTANTS", "CONVERT_CONSTANTS"].some((e) => o.includes(e))))),
                                        (r.shouldKeep = r.shouldKeep || i));
                                }
                                let l = {
                                    emoji: "☕",
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
                                })(r, l),
                                    s && ((u += "| "), c.push(l));
                            }),
                            (E = !1),
                            r.filter(
                                (e) =>
                                    !(E && e.log.includes("↪")) &&
                                    !(E = (!o && e.emoji === `🎨`) || !1 === e.shouldKeep),
                            ))),
                        (d = R),
                        (h = (function (e) {
                            let t = [];
                            for (let n = 0; n < e.length; n++) {
                                let i = e[n],
                                    r = e[n + 1];
                                null != r && r.log === i.log.replace("Start ", "Finish ")
                                    ? ((r.log = r.log.replace("Finish ", "")), t.push(r), n++)
                                    : t.push(i);
                            }
                            return t;
                        })(l).map((e) => ({
                            totalTime: null == e.timestamp ? "" : ((e.timestamp - d) / 1e3).toFixed(3),
                            deltaTime: null == e.delta ? "" : String(Math.round(e.delta)),
                            log: `${e.emoji.length > 0 ? `${e.emoji} ` : ""}${e.prefix}${e.log}
`,
                        }))),
                        (m = A().max(h.map((e) => e.totalTime.length)) ?? 0),
                        (f = A().max(h.map((e) => e.deltaTime.length)) ?? 0),
                        h
                            .map((e) => {
                                let { totalTime: t, deltaTime: n, log: i } = e;
                                return `${A().padStart(t, m)} ${A().padStart(n, f)} ${i}`;
                            })
                            .join("")),
                    y = `Trace #${g + 1} started ${(0, T.aK)(p)}
${O}`;
                return (
                    null != C &&
                        (y += `
 Server trace for trace #${g + 1}${C}`),
                    y
                );
            })
            .join("\n\n");
    })(null)}

    ${(function () {
        if (0 === Object.keys(h).length) return "";
        let e = `Component Render Stats (microseconds):
`,
            t = `|${m("id", 20)}|${m("Mounts", 8)}|${m("Mount Mean", 20)}|${m("Updates", 8)}|${m("Update Mean", 20)}|${m("Nested", 8)}|${m("Nested Mean", 20)}|
`;
        return (
            e +
            t +
            Object.entries(h).map((e) => {
                let [t, n] = e;
                return `|${m(t, 20)}|${m(n.mount.count.toString(), 8)}|${m(n.mount.mean.toString(), 20)}|${m(n.update.count.toString(), 8)}|${m(n.update.mean.toString(), 20)}|${m(n.nestedUpdate.count.toString(), 8)}|${m(n.nestedUpdate.mean.toString(), 20)}|
`;
            })
        );
    })()}

    Metadata:
    ${JSON.stringify({ logsUploaded: new Date().toISOString(), releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL, buildNumber: "534148", versionHash: "b9cd5f8a3120f3477fa7bdf83b487928662f0d4b" }, void 0, 2)}

    ChannelStore:
    ${JSON.stringify(f.A.getDebugInfo(), void 0, 2)}

    Logs:
    ${t}

    System logs:
    ${n}

    LibDiscore logs:
    ${a}

    Push Notifications:
    ${s}
    `;
        g.IU();
        let d = _.Rsh.DEBUG_LOG(e, "discord_app_logs");
        await i.Bo.post({
            url: d,
            body: l,
            retries: 3,
            headers: { "Content-Type": "text/plain" },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    } catch (e) {
        C.error(`uploadAppLogFiles: upload app log files error ${e.message}`);
    }
}
