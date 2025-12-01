n.d(t, { m: () => E }), n(388685), n(415506), n(704826), n(35282), n(781311), n(539854), n(49124);
var r = n(579092),
    i = n(490029),
    a = n(511405),
    o = n(145597),
    s = n(951806),
    l = n(981631);
let c = new r.Yd("LegacyOverlayLogger"),
    u = null,
    d = !1,
    f = null,
    p = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
    },
    _ = 0,
    m = 3;
async function h(e, t) {
    if (!__OVERLAY__) return void c.warn("sendLegacyOverlayLog called from main app context, logging locally instead");
    if (_ > 10) return;
    let { level: n, message: r, context: s } = e,
        u = null;
    if (null != s)
        try {
            u = (0, a.G)(s);
        } catch (e) {
            try {
                u = {
                    _error: "Failed to serialize context",
                    _type: Object.prototype.toString.call(s),
                };
            } catch (e) {
                u = { _error: "Context not serializable" };
            }
        }
    let d = {
        type: l.BmY.LOG_MESSAGES,
        token: t,
        pid: (0, o.getPID)(),
        payload: {
            level: n,
            message: r,
            timestamp: Date.now(),
            context: u,
        },
    };
    try {
        await i.lW(d), (_ = 0);
    } catch (e) {
        ++_ <= m &&
            (c.error("Failed to send log to main app (failure ".concat(_, "):"), e),
            _ === m && c.error("Too many RPC send failures, suppressing further error logs"));
    }
}
function g(e) {
    return {
        log: (t, n) =>
            h(
                {
                    level: "log",
                    message: t,
                    context: n,
                },
                e,
            ),
        info: (t, n) =>
            h(
                {
                    level: "info",
                    message: t,
                    context: n,
                },
                e,
            ),
        warn: (t, n) =>
            h(
                {
                    level: "warn",
                    message: t,
                    context: n,
                },
                e,
            ),
        error: (t, n) =>
            h(
                {
                    level: "error",
                    message: t,
                    context: n,
                },
                e,
            ),
        crash: (t, n) =>
            h(
                {
                    level: "crash",
                    message: t,
                    context: n,
                },
                e,
            ),
    };
}
function E(e) {
    if (__OVERLAY__) {
        if (d) return void p.warn("Overlay logger already set up, skipping duplicate setup");
        (u = g(e)),
            (d = !0),
            u.info("Overlay logger initialized"),
            (console.log = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((p.log(...t), null != u))
                    try {
                        let e = b(t)
                            .map((e) => y(e))
                            .join(" ");
                        u.log(e);
                    } catch (e) {
                        p.error("[Logger Error]", e);
                    }
            }),
            (console.info = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((p.info(...t), null != u))
                    try {
                        let e = b(t)
                            .map((e) => y(e))
                            .join(" ");
                        u.info(e);
                    } catch (e) {
                        p.error("[Logger Error]", e);
                    }
            }),
            (console.warn = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((p.warn(...t), null != u))
                    try {
                        let e = b(t)
                            .map((e) => y(e))
                            .join(" ");
                        u.warn(e);
                    } catch (e) {
                        p.error("[Logger Error]", e);
                    }
            }),
            (console.error = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if ((p.error(...t), null != u))
                    try {
                        let e = b(t)
                            .map((e) => y(e))
                            .join(" ");
                        u.error(e);
                    } catch (e) {}
            }),
            window.addEventListener(
                "error",
                (e) => {
                    if (null != u)
                        try {
                            if (null != e.target && e.target !== window) {
                                let t = e.target;
                                u.error("Resource failed to load: ".concat(t.src || t.href || "unknown"), {
                                    type: "resource_error",
                                    tagName: t.tagName,
                                    src: t.src,
                                    href: t.href,
                                });
                            } else
                                u.crash("Uncaught error: ".concat(e.message), {
                                    message: e.message,
                                    filename: e.filename,
                                    lineno: e.lineno,
                                    colno: e.colno,
                                    error: e.error
                                        ? {
                                              name: e.error.name,
                                              message: e.error.message,
                                              stack: e.error.stack,
                                          }
                                        : null,
                                });
                        } catch (t) {
                            p.error("[Failed to log error]", t, e);
                        }
                },
                !0,
            ),
            window.addEventListener("unhandledrejection", (e) => {
                if (null != u)
                    try {
                        let t = "Unhandled promise rejection",
                            n = {};
                        e.reason instanceof Error
                            ? ((t = "Unhandled promise rejection: ".concat(e.reason.message)),
                              (n = {
                                  name: e.reason.name,
                                  message: e.reason.message,
                                  stack: e.reason.stack,
                              }))
                            : ("string" == typeof e.reason && (t = "Unhandled promise rejection: ".concat(e.reason)),
                              (n = { reason: e.reason })),
                            u.crash(t, n);
                    } catch (t) {
                        p.error("[Failed to log rejection]", t, e);
                    }
            }),
            window.addEventListener("securitypolicyviolation", (e) => {
                if (null != u)
                    try {
                        u.error("Security policy violation", {
                            violatedDirective: e.violatedDirective,
                            effectiveDirective: e.effectiveDirective,
                            blockedURI: e.blockedURI,
                            sourceFile: e.sourceFile,
                            lineNumber: e.lineNumber,
                            columnNumber: e.columnNumber,
                        });
                    } catch (t) {
                        p.error("[Failed to log security violation]", t, e);
                    }
            }),
            window.addEventListener("beforeunload", () => {
                null != u && u.info("Overlay unloading"), null != f && clearInterval(f);
            }),
            (f = window.setInterval(() => {
                if (null != u)
                    try {
                        u.log(s.F0, {
                            timestamp: Date.now(),
                            memory: performance.memory
                                ? {
                                      usedJSHeapSize: performance.memory.usedJSHeapSize,
                                      totalJSHeapSize: performance.memory.totalJSHeapSize,
                                  }
                                : void 0,
                        });
                    } catch (e) {
                        p.error("[Heartbeat Error]", e);
                    }
            }, s.bk)),
            p.log("Overlay error handlers and console interception set up");
    }
}
function b(e) {
    if (0 === e.length) return e;
    let t = [],
        n = !1;
    for (let i = 0; i < e.length; i++) {
        if (n) {
            n = !1;
            continue;
        }
        let a = e[i];
        if ("string" == typeof a && a.includes("%c")) {
            var r;
            let e = a.replace(/%c/g, "");
            "" !== e.trim() && t.push(e), (i += (null != (r = a.match(/%c/g)) ? r : []).length);
            continue;
        }
        ("string" == typeof a && /^\s*(font-weight|color|background|padding|margin|border)/.test(a)) || t.push(a);
    }
    return t;
}
function y(e) {
    if (null === e) return "null";
    if (void 0 === e) return "undefined";
    if ("string" == typeof e) return e;
    if ("number" == typeof e || "boolean" == typeof e) return String(e);
    if ("function" == typeof e) return "[Function: ".concat(e.name || "anonymous", "]");
    if (e instanceof Error) return "".concat(e.name, ": ").concat(e.message);
    try {
        let t = new WeakSet();
        return JSON.stringify(e, (e, n) => {
            if ("object" == typeof n && null !== n) {
                if (t.has(n)) return "[Circular]";
                t.add(n);
            }
            return "function" == typeof n
                ? "[Function: ".concat(n.name || "anonymous", "]")
                : "symbol" == typeof n
                  ? "[Symbol: ".concat(n.toString(), "]")
                  : n;
        });
    } catch (t) {
        try {
            return "[".concat(Object.prototype.toString.call(e), "]");
        } catch (e) {
            return "[Unserializable]";
        }
    }
}
