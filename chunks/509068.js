_.d(e, {
    Eg: () => g,
    Jd: () => m,
    S1: () => D,
    jp: () => S,
    lA: () => y,
    nV: () => h,
});
var a = _(636361),
    r = _(502990),
    n = _(907765),
    o = _(151122),
    E = _(511906),
    i = _(263449),
    c = _(233517),
    s = _(510529),
    l = _(622916),
    I = _(694043),
    R = _(688838),
    N = _(393523),
    A = _(833772),
    u = _(454463),
    T = _(163162),
    d = _(408720),
    f = _(515737),
    O = _(804410),
    L = _(376457),
    p = _(42367),
    C = _(297117),
    P = _(387486);
function h(t) {
    return [(0, a.S)(), (0, r.C)(), (0, f.t)(), (0, d.f)(), (0, O.k)(), (0, p.O)(), (0, n.R)(), (0, L.s)()];
}
function D(t = {}) {
    let e = (function (t = {}) {
        return {
            ...{
                defaultIntegrations: h(),
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
                _ = t[e],
                a = _ && _.runtime && _.runtime.id,
                r = (T.m9.location && T.m9.location.href) || "",
                n =
                    !!a &&
                    T.m9 === T.m9.top &&
                    ["chrome-extension:", "moz-extension:", "ms-browser-extension:"].some((t) =>
                        r.startsWith(`${t}//`),
                    ),
                o = void 0 !== t.nw;
            return !!a && !n && !o;
        })()
    )
        return void (0, l.Cf)(() => {
            console.error(
                "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
            );
        });
    u.X &&
        !(0, I.Ak)() &&
        l.kg.warn(
            "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
        );
    let _ = {
            ...e,
            stackParser: (0, R.Sq)(e.stackParser || C.Dt),
            integrations: (0, o.m8)(e),
            transport: e.transport || P.f,
        },
        a = (0, E.M)(A.R, _);
    return (
        e.autoSessionTracking &&
            (function () {
                if (void 0 === T.m9.document) {
                    u.X &&
                        l.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                    return;
                }
                (0, c.yj)({ ignoreDuration: !0 }),
                    (0, c.cg)(),
                    (0, N.a)(({ from: t, to: e }) => {
                        void 0 !== t && t !== e && ((0, c.yj)({ ignoreDuration: !0 }), (0, c.cg)());
                    });
            })(),
        a
    );
}
function S(t = {}) {
    if (!T.m9.document) {
        u.X && l.kg.error("Global document not defined in showReportDialog call");
        return;
    }
    let e = (0, i.nZ)(),
        _ = e.getClient(),
        a = _ && _.getDsn();
    if (!a) {
        u.X && l.kg.error("DSN not configured for showReportDialog call");
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
    let r = T.m9.document.createElement("script");
    (r.async = !0), (r.crossOrigin = "anonymous"), (r.src = (0, s.h)(a, t)), t.onLoad && (r.onload = t.onLoad);
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
    o ? o.appendChild(r) : u.X && l.kg.error("Not injecting report dialog. No injection point found in HTML");
}
function g() {}
function y(t) {
    t();
}
function m(t) {
    let e = (0, i.s3)();
    e && e.captureUserFeedback(t);
}
