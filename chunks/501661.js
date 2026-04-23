"use strict";
n.d(t, { Ts: () => C, kF: () => M, lo: () => O, mn: () => T, nI: () => x, w7: () => I });
var r = n(550601),
    i = n(76005),
    o = n(453614),
    a = n(272469),
    s = n(366781),
    l = n(968072),
    c = n(688331),
    u = n(779949),
    d = n(630449),
    p = n(871186),
    h = n(555625),
    f = n(567475),
    m = n(607423),
    g = n(804524),
    _ = n(56833),
    y = n(972130),
    v = n(973913),
    b = n(774099),
    w = n(416626),
    S = n(833708),
    E = n(719736),
    k = n(195588);
function x(e) {
    let t = [(0, r.D)(), (0, i.Z)(), (0, y.G)(), (0, _.F)(), (0, b.L)(), (0, S.p)(), (0, o.s)(), (0, w.M)()];
    return !1 !== e.autoSessionTracking && t.push((0, v.p)()), t;
}
function C(e = {}) {
    let t = (function (e = {}) {
        let t = {
            defaultIntegrations: x(e),
            release:
                "string" == typeof __SENTRY_RELEASE__
                    ? __SENTRY_RELEASE__
                    : g.jf.SENTRY_RELEASE && g.jf.SENTRY_RELEASE.id
                      ? g.jf.SENTRY_RELEASE.id
                      : void 0,
            autoSessionTracking: !0,
            sendClientReports: !0,
        };
        return null == e.defaultIntegrations && delete e.defaultIntegrations, { ...t, ...e };
    })(e);
    if (
        !t.skipBrowserExtensionCheck &&
        (function () {
            let e = void 0 !== g.jf.window && g.jf;
            if (!e) return !1;
            let t = e.chrome ? "chrome" : "browser",
                n = e[t],
                r = n && n.runtime && n.runtime.id,
                i = (g.jf.location && g.jf.location.href) || "",
                o =
                    !!r &&
                    g.jf === g.jf.top &&
                    ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some(
                        (e) => i.startsWith(`${e}//`),
                    ),
                a = void 0 !== e.nw;
            return !!r && !o && !a;
        })()
    )
        return void (0, a.pq)(() => {
            console.error(
                "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
            );
        });
    m.T &&
        !(0, s.vm)() &&
        a.vF.warn(
            "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
        );
    let n = {
        ...t,
        stackParser: (0, l.vk)(t.stackParser || E.lG),
        integrations: (0, c.mH)(t),
        transport: t.transport || k._,
    };
    return (0, u.J)(f.y, n);
}
function T(e = {}) {
    if (!g.jf.document) {
        m.T && a.vF.error("Global document not defined in showReportDialog call");
        return;
    }
    let t = (0, d.o5)(),
        n = t.getClient(),
        r = n && n.getDsn();
    if (!r) {
        m.T && a.vF.error("DSN not configured for showReportDialog call");
        return;
    }
    if ((t && (e.user = { ...t.getUser(), ...e.user }), !e.eventId)) {
        let t = (0, p.Q)();
        t && (e.eventId = t);
    }
    let i = g.jf.document.createElement("script");
    (i.async = !0), (i.crossOrigin = "anonymous"), (i.src = (0, h.k)(r, e)), e.onLoad && (i.onload = e.onLoad);
    let { onClose: o } = e;
    if (o) {
        let e = (t) => {
            if ("__sentry_reportdialog_closed__" === t.data)
                try {
                    o();
                } finally {
                    g.jf.removeEventListener("message", e);
                }
        };
        g.jf.addEventListener("message", e);
    }
    let s = g.jf.document.head || g.jf.document.body;
    s ? s.appendChild(i) : m.T && a.vF.error("Not injecting report dialog. No injection point found in HTML");
}
function I() {}
function M(e) {
    e();
}
function O(e) {
    let t = (0, d.KU)();
    t && t.captureUserFeedback(e);
}
