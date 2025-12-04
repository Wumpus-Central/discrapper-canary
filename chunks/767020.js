r.d(t, {
    Eg: () => m,
    Jd: () => P,
    S1: () => L,
    jp: () => g,
    lA: () => y,
    nV: () => C,
});
var n = r(721890),
    a = r(209260),
    i = r(976155),
    o = r(688560),
    _ = r(932205),
    s = r(509440),
    c = r(771560),
    E = r(250962),
    l = r(98076),
    u = r(635196),
    d = r(521257),
    I = r(106260),
    p = r(157119),
    R = r(549040),
    T = r(889929),
    A = r(848576),
    N = r(941200),
    f = r(382792),
    O = r(844880),
    h = r(495600),
    D = r(202829),
    S = r(235387);
function C(e) {
    return [(0, n.S)(), (0, a.C)(), (0, N.t)(), (0, A.f)(), (0, f.k)(), (0, h.O)(), (0, i.R)(), (0, O.s)()];
}
function L(e = {}) {
    let t = (function (e = {}) {
        let t = {
            defaultIntegrations: C(),
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
                r = e[t],
                n = r && r.runtime && r.runtime.id,
                a = (T.m9.location && T.m9.location.href) || "",
                i =
                    !!n &&
                    T.m9 === T.m9.top &&
                    ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some(
                        (e) => a.startsWith(`${e}//`),
                    ),
                o = void 0 !== e.nw;
            return !!n && !i && !o;
        })()
    )
        return void (0, l.Cf)(() => {
            console.error(
                "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
            );
        });
    R.X &&
        !(0, u.Ak)() &&
        l.kg.warn(
            "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
        );
    let r = {
            ...t,
            stackParser: (0, d.Sq)(t.stackParser || D.Dt),
            integrations: (0, o.m8)(t),
            transport: t.transport || S.f,
        },
        n = (0, _.M)(p.R, r);
    return (
        t.autoSessionTracking &&
            (function () {
                if (void 0 === T.m9.document) {
                    R.X &&
                        l.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                    return;
                }
                (0, c.yj)({ ignoreDuration: !0 }),
                    (0, c.cg)(),
                    (0, I.a)(({ from: e, to: t }) => {
                        void 0 !== e && e !== t && ((0, c.yj)({ ignoreDuration: !0 }), (0, c.cg)());
                    });
            })(),
        n
    );
}
function g(e = {}) {
    if (!T.m9.document) {
        R.X && l.kg.error("Global document not defined in showReportDialog call");
        return;
    }
    let t = (0, s.nZ)(),
        r = t.getClient(),
        n = r && r.getDsn();
    if (!n) {
        R.X && l.kg.error("DSN not configured for showReportDialog call");
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
    let a = T.m9.document.createElement("script");
    (a.async = !0), (a.crossOrigin = "anonymous"), (a.src = (0, E.h)(n, e)), e.onLoad && (a.onload = e.onLoad);
    let { onClose: i } = e;
    if (i) {
        let e = (t) => {
            if ("__sentry_reportdialog_closed__" === t.data)
                try {
                    i();
                } finally {
                    T.m9.removeEventListener("message", e);
                }
        };
        T.m9.addEventListener("message", e);
    }
    let o = T.m9.document.head || T.m9.document.body;
    o ? o.appendChild(a) : R.X && l.kg.error("Not injecting report dialog. No injection point found in HTML");
}
function m() {}
function y(e) {
    e();
}
function P(e) {
    let t = (0, s.s3)();
    t && t.captureUserFeedback(e);
}
