"use strict";
n.d(t, { a: () => C });
var i = n(636537),
    r = n(306173),
    s = n(913122),
    a = n(626584),
    o = n(235058),
    l = n(453771),
    u = n(77729),
    c = n(652215);
let d = new a.A("uploadRtcLogFiles");
async function _(e, t) {
    let n;
    if (null == u.A.fileManager.readLogFiles) throw new s._(s.ct.GENERAL);
    let r = [];
    try {
        r = (r = await u.A.fileManager.readLogFiles(e)).map((e) => (0, l.ww)(e, "application/octet-stream"));
    } catch (e) {
        throw (d.error(`uploadDebugFiles: read error '${e}'`), new s._(s.ct.READ));
    }
    if (0 === r.length) throw new s._(s.ct.NO_FILE);
    let a = { extraInfo: t, mediaEngineState: o.Ay.getState() },
        _ = [
            ...r.map((e) => ({ name: e.name, file: e, filename: e.name })),
            {
                name: "media_engine_state.json",
                filename: "media_engine_state.json",
                file: new Blob([JSON.stringify(a, void 0, 2)]),
            },
        ],
        f = new Set();
    try {
        n = await i.Bo.post({
            url: c.Rsh.DEBUG_LOGS(c.Umv.RTC),
            attachments: [
                ..._.map((e) => {
                    let t = (function (e, t) {
                        let n = t.split("."),
                            i = n.length > 1 ? n.pop() : "",
                            r = n.join("."),
                            s = `${r}.${i}`,
                            a = 1;
                        for (; e.has(s); ) (s = `${r}_${a}.${i}`), (a += 1);
                        return e.add(s), s;
                    })(f, e.name);
                    return { name: t, file: e.file, filename: t };
                }),
            ],
            rejectWithError: !1,
        });
    } catch (e) {
        if (429 === e.status) throw new s._(s.ct.PROGRESS);
        throw (d.error(`Debug log upload error: status: ${e.status}, message: ${e.message}`), new s._(s.ct.UPLOAD));
    }
    if ("success_count" in n.body && n.body.success_count !== _.length)
        throw (
            (d.error(`Debug log upload: stored files ${n.body.success_count} !== ${_.length}`), new s._(s.ct.GENERAL))
        );
    if (
        ("store_success" in n.body && !n.body.store_success) ||
        ("id_match" in n.body && !n.body.id_match) ||
        ("all_success" in n.body && !n.body.all_success)
    )
        throw (
            (d.error(
                `Debug log upload: store_success: ${n.body.store_success} / id_match: ${n.body.id_match} / all_success: ${n.body.all_success}`,
            ),
            new s._(s.ct.GENERAL))
        );
}
var f = n(487329);
n(627968), n(64700);
let h = {};
function p(e, t) {
    let n = e.length > t ? t : e.length;
    return e.substring(0, n).padEnd(t, " ");
}
var E = n(734057),
    m = n(53943);
n(321073);
var g = n(735438),
    A = n.n(g),
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
let y = new a.A("DebugUploadManager");
async function C(e, t) {
    try {
        await v(e), await _(0xe00000, t);
    } catch (t) {
        let e;
        throw (
            (t instanceof s._ &&
                (e = (function (e) {
                    switch (e.code) {
                        case s.ct.GENERAL:
                            return f.B6.UploadErrorGeneral;
                        case s.ct.NO_FILE:
                            return f.B6.UploadErrorNoFile;
                        case s.ct.PROGRESS:
                            return f.B6.UploadErrorProgress;
                        case s.ct.UPLOAD:
                            return f.B6.UploadErrorUpload;
                        case s.ct.READ:
                            return f.B6.UploadErrorRead;
                        default:
                            return;
                    }
                })(t)),
            (0, f.QW)({ type: f.iy.DEBUG_LOG_UPLOAD_FAILED, underlyingError: e, errorMessage: t.message }),
            t)
        );
    }
}
async function v(e) {
    try {
        let t, n, s, a;
        try {
            t = m.As();
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
                    let n = N.w.get(c.Xlh),
                        i = N.w.get(c.Ahp),
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
                var r, s, a, o, l, u;
                let c,
                    d,
                    _,
                    f,
                    h,
                    p,
                    E,
                    { index: m, timestamp: g, logs: I, nativeLogs: N, serverTrace: y } = i,
                    C = 0 === m ? (A().find(I, (e) => e.log.indexOf("Logger loaded") >= 0)?.timestamp ?? e) : g,
                    v =
                        ((l =
                            ((r = I),
                            (s = N),
                            (a = t),
                            (o = n),
                            (r = r.slice()),
                            (c = new Set(s.map(S))),
                            (d = ""),
                            (_ = []),
                            s.forEach((e) => {
                                let t = S(e),
                                    n = 0,
                                    i = a || !e.autoGenerated,
                                    s =
                                        t.startsWith("Start ") &&
                                        !t.includes("RUN_JS_BUNDLE") &&
                                        c.has(t.replace("Start ", "Finish "));
                                if (
                                    t.startsWith("Finish ") &&
                                    !t.includes("RUN_JS_BUNDLE") &&
                                    c.has(t.replace("Finish ", "Start "))
                                ) {
                                    var o;
                                    d = d.substring(2);
                                    let r = _.pop();
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
                                    emoji: "\u2615",
                                    timestamp: e.timestamp,
                                    delta: n > 0 ? n : void 0,
                                    prefix: d,
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
                                    s && ((d += "| "), _.push(l));
                            }),
                            (f = !1),
                            r.filter(
                                (e) =>
                                    !(f && e.log.includes("\u21AA")) &&
                                    !(f = (!o && e.emoji === `\u{1F3A8}`) || !1 === e.shouldKeep),
                            ))),
                        (u = C),
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
                            totalTime: null == e.timestamp ? "" : ((e.timestamp - u) / 1e3).toFixed(3),
                            deltaTime: null == e.delta ? "" : String(Math.round(e.delta)),
                            log: `${e.emoji.length > 0 ? `${e.emoji} ` : ""}${e.prefix}${e.log}
`,
                        }))),
                        (p = A().max(h.map((e) => e.totalTime.length)) ?? 0),
                        (E = A().max(h.map((e) => e.deltaTime.length)) ?? 0),
                        h
                            .map((e) => {
                                let { totalTime: t, deltaTime: n, log: i } = e;
                                return `${A().padStart(t, p)} ${A().padStart(n, E)} ${i}`;
                            })
                            .join("")),
                    O = `Trace #${m + 1} started ${(0, T.aK)(g)}
${v}`;
                return (
                    null != y &&
                        (O += `
 Server trace for trace #${m + 1}${y}`),
                    O
                );
            })
            .join("\n\n");
    })(null)}

    ${(function () {
        if (0 === Object.keys(h).length) return "";
        let e = `Component Render Stats (microseconds):
`,
            t = `|${p("id", 20)}|${p("Mounts", 8)}|${p("Mount Mean", 20)}|${p("Updates", 8)}|${p("Update Mean", 20)}|${p("Nested", 8)}|${p("Nested Mean", 20)}|
`;
        return (
            e +
            t +
            Object.entries(h).map((e) => {
                let [t, n] = e;
                return `|${p(t, 20)}|${p(n.mount.count.toString(), 8)}|${p(n.mount.mean.toString(), 20)}|${p(n.update.count.toString(), 8)}|${p(n.update.mean.toString(), 20)}|${p(n.nestedUpdate.count.toString(), 8)}|${p(n.nestedUpdate.mean.toString(), 20)}|
`;
            })
        );
    })()}

    Metadata:
    ${JSON.stringify({ logsUploaded: new Date().toISOString(), releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL, buildNumber: "544572", versionHash: "36b5954180f0973d867ab66d7c765d52d064d5f5" }, void 0, 2)}

    ChannelStore:
    ${JSON.stringify(E.A.getDebugInfo(), void 0, 2)}

    Logs:
    ${t}

    System logs:
    ${n}

    LibDiscore logs:
    ${a}

    Push Notifications:
    ${s}
    `;
        m.IU();
        let u = c.Rsh.DEBUG_LOG(e, "discord_app_logs");
        await i.Bo.post({
            url: u,
            body: l,
            retries: 3,
            headers: { "Content-Type": "text/plain" },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    } catch (e) {
        y.error(`uploadAppLogFiles: upload app log files error ${e.message}`);
    }
}
