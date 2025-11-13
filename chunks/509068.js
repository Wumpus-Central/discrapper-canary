a.d(e, {
    Eg: () => S,
    Jd: () => v,
    S1: () => D,
    jp: () => g,
    lA: () => m,
    nV: () => C,
});
var r = a(636361),
    _ = a(502990),
    n = a(907765),
    o = a(151122),
    i = a(511906),
    E = a(263449),
    c = a(233517),
    s = a(510529),
    l = a(622916),
    I = a(694043),
    R = a(688838),
    u = a(393523),
    A = a(833772),
    N = a(454463),
    T = a(163162),
    d = a(408720),
    f = a(515737),
    L = a(804410),
    p = a(376457),
    O = a(42367),
    h = a(297117),
    P = a(387486);
function C(t) {
    return [(0, r.S)(), (0, _.C)(), (0, f.t)(), (0, d.f)(), (0, L.k)(), (0, O.O)(), (0, n.R)(), (0, p.s)()];
}
function D(t = {}) {
    let e = (function (t = {}) {
        return {
            ...{
                defaultIntegrations: C(),
                release:
                    "string" == typeof __SENTRY_RELEASE__
                        ? __SENTRY_RELEASE__
                        : T.m9.SENTRY_RELEASE && T.m9.SENTRY_RELEASE.id
                          ? T.m9.SENTRY_RELEASE.id
                          : void 0,
                autoSessionTracking: !0,
                sendClientReports: !0,
            },
            ...t,
        };
    })(t);
    if (
        (function () {
            let t = T.m9,
                e = t.chrome ? "chrome" : "browser",
                a = t[e],
                r = a && a.runtime && a.runtime.id,
                _ = (T.m9.location && T.m9.location.href) || "",
                n =
                    !!r &&
                    T.m9 === T.m9.top &&
                    ["chrome-extension:", "moz-extension:", "ms-browser-extension:"].some((t) =>
                        _.startsWith(`${t}//`),
                    ),
                o = void 0 !== t.nw;
            return !!r && !n && !o;
        })()
    )
        return void (0, l.Cf)(() => {
            console.error(
                "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
            );
        });
    N.X &&
        !(0, I.Ak)() &&
        l.kg.warn(
            "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
        );
    let a = {
            ...e,
            stackParser: (0, R.Sq)(e.stackParser || h.Dt),
            integrations: (0, o.m8)(e),
            transport: e.transport || P.f,
        },
        r = (0, i.M)(A.R, a);
    return (
        e.autoSessionTracking &&
            (function () {
                if (void 0 === T.m9.document) {
                    N.X &&
                        l.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                    return;
                }
                (0, c.yj)({ ignoreDuration: !0 }),
                    (0, c.cg)(),
                    (0, u.a)(({ from: t, to: e }) => {
                        void 0 !== t && t !== e && ((0, c.yj)({ ignoreDuration: !0 }), (0, c.cg)());
                    });
            })(),
        r
    );
}
function g(t = {}) {
    if (!T.m9.document) {
        N.X && l.kg.error("Global document not defined in showReportDialog call");
        return;
    }
    let e = (0, E.nZ)(),
        a = e.getClient(),
        r = a && a.getDsn();
    if (!r) {
        N.X && l.kg.error("DSN not configured for showReportDialog call");
        return;
    }
    if (
        (e &&
            (t.user = {
                ...e.getUser(),
                ...t.user,
            }),
        !t.eventId)
    ) {
        let e = (0, c.eW)();
        e && (t.eventId = e);
    }
    let _ = T.m9.document.createElement("script");
    (_.async = !0), (_.crossOrigin = "anonymous"), (_.src = (0, s.h)(r, t)), t.onLoad && (_.onload = t.onLoad);
    let { onClose: n } = t;
    if (n) {
        let t = (e) => {
            if ("__sentry_reportdialog_closed__" === e.data)
                try {
                    n();
                } finally {
                    T.m9.removeEventListener("message", t);
                }
        };
        T.m9.addEventListener("message", t);
    }
    let o = T.m9.document.head || T.m9.document.body;
    o ? o.appendChild(_) : N.X && l.kg.error("Not injecting report dialog. No injection point found in HTML");
}
function S() {}
function m(t) {
    t();
}
function v(t) {
    let e = (0, E.s3)();
    e && e.captureUserFeedback(t);
}
