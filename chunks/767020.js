n.d(t, {
    Eg: () => C,
    Jd: () => P,
    S1: () => m,
    jp: () => D,
    lA: () => y,
    nV: () => g,
});
var r = n(721890),
    i = n(209260),
    a = n(976155),
    o = n(688560),
    _ = n(932205),
    s = n(509440),
    c = n(771560),
    E = n(250962),
    l = n(98076),
    u = n(635196),
    d = n(521257),
    p = n(106260),
    f = n(157119),
    I = n(549040),
    T = n(889929),
    R = n(848576),
    A = n(941200),
    N = n(382792),
    h = n(844880),
    O = n(495600),
    S = n(202829),
    L = n(235387);
function g(e) {
    return [(0, r.S)(), (0, i.C)(), (0, A.t)(), (0, R.f)(), (0, N.k)(), (0, O.O)(), (0, a.R)(), (0, h.s)()];
}
function m(e = {}) {
    let t = (function (e = {}) {
        let t = {
            defaultIntegrations: g(),
            release:
                "string" == typeof __SENTRY_RELEASE__
                    ? __SENTRY_RELEASE__
                    : T.m9.SENTRY_RELEASE && T.m9.SENTRY_RELEASE.id
                      ? T.m9.SENTRY_RELEASE.id
                      : void 0,
            autoSessionTracking: !0,
            sendClientReports: !0,
        };
        return (
            null == e.defaultIntegrations && delete e.defaultIntegrations,
            {
                ...t,
                ...e,
            }
        );
    })(e);
    if (
        (function () {
            let e = void 0 !== T.m9.window && T.m9;
            if (!e) return !1;
            let t = e.chrome ? "chrome" : "browser",
                n = e[t],
                r = n && n.runtime && n.runtime.id,
                i = (T.m9.location && T.m9.location.href) || "",
                a =
                    !!r &&
                    T.m9 === T.m9.top &&
                    ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some(
                        (e) => i.startsWith(`${e}//`),
                    ),
                o = void 0 !== e.nw;
            return !!r && !a && !o;
        })()
    )
        return void (0, l.Cf)(() => {
            console.error(
                "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
            );
        });
    I.X &&
        !(0, u.Ak)() &&
        l.kg.warn(
            "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
        );
    let n = {
            ...t,
            stackParser: (0, d.Sq)(t.stackParser || S.Dt),
            integrations: (0, o.m8)(t),
            transport: t.transport || L.f,
        },
        r = (0, _.M)(f.R, n);
    return (
        t.autoSessionTracking &&
            (function () {
                if (void 0 === T.m9.document) {
                    I.X &&
                        l.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                    return;
                }
                (0, c.yj)({ ignoreDuration: !0 }),
                    (0, c.cg)(),
                    (0, p.a)(({ from: e, to: t }) => {
                        void 0 !== e && e !== t && ((0, c.yj)({ ignoreDuration: !0 }), (0, c.cg)());
                    });
            })(),
        r
    );
}
function D(e = {}) {
    if (!T.m9.document) {
        I.X && l.kg.error("Global document not defined in showReportDialog call");
        return;
    }
    let t = (0, s.nZ)(),
        n = t.getClient(),
        r = n && n.getDsn();
    if (!r) {
        I.X && l.kg.error("DSN not configured for showReportDialog call");
        return;
    }
    if (
        (t &&
            (e.user = {
                ...t.getUser(),
                ...e.user,
            }),
        !e.eventId)
    ) {
        let t = (0, c.eW)();
        t && (e.eventId = t);
    }
    let i = T.m9.document.createElement("script");
    (i.async = !0), (i.crossOrigin = "anonymous"), (i.src = (0, E.h)(r, e)), e.onLoad && (i.onload = e.onLoad);
    let { onClose: a } = e;
    if (a) {
        let e = (t) => {
            if ("__sentry_reportdialog_closed__" === t.data)
                try {
                    a();
                } finally {
                    T.m9.removeEventListener("message", e);
                }
        };
        T.m9.addEventListener("message", e);
    }
    let o = T.m9.document.head || T.m9.document.body;
    o ? o.appendChild(i) : I.X && l.kg.error("Not injecting report dialog. No injection point found in HTML");
}
function C() {}
function y(e) {
    e();
}
function P(e) {
    let t = (0, s.s3)();
    t && t.captureUserFeedback(e);
}
