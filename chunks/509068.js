a.d(e, {
    Eg: () => y,
    Jd: () => v,
    S1: () => g,
    jp: () => C,
    lA: () => m,
    nV: () => P
});
var r = a(636361),
    _ = a(502990),
    n = a(907765),
    o = a(151122),
    i = a(511906),
    c = a(263449),
    E = a(233517),
    s = a(510529),
    l = a(622916),
    I = a(694043),
    u = a(688838),
    R = a(393523),
    A = a(833772),
    T = a(454463),
    N = a(163162),
    d = a(408720),
    L = a(515737),
    p = a(804410),
    f = a(376457),
    O = a(42367),
    h = a(297117),
    D = a(387486);
function P(t) {
    return [(0, r.S)(), (0, _.C)(), (0, L.t)(), (0, d.f)(), (0, p.k)(), (0, O.O)(), (0, n.R)(), (0, f.s)()];
}
function g(t = {}) {
    let e = (function (t = {}) {
        return {
            ...{
                defaultIntegrations: P(),
                release: 'string' == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : N.m9.SENTRY_RELEASE && N.m9.SENTRY_RELEASE.id ? N.m9.SENTRY_RELEASE.id : void 0,
                autoSessionTracking: !0,
                sendClientReports: !0
            },
            ...t
        };
    })(t);
    if (
        (function () {
            let t = N.m9,
                e = t.chrome ? 'chrome' : 'browser',
                a = t[e],
                r = a && a.runtime && a.runtime.id,
                _ = (N.m9.location && N.m9.location.href) || '',
                n = !!r && N.m9 === N.m9.top && ['chrome-extension:', 'moz-extension:', 'ms-browser-extension:'].some((t) => _.startsWith(`${t}//`)),
                o = void 0 !== t.nw;
            return !!r && !n && !o;
        })()
    )
        return void (0, l.Cf)(() => {
            console.error('[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/');
        });
    T.X && !(0, I.Ak)() && l.kg.warn('No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.');
    let a = {
            ...e,
            stackParser: (0, u.Sq)(e.stackParser || h.Dt),
            integrations: (0, o.m8)(e),
            transport: e.transport || D.f
        },
        r = (0, i.M)(A.R, a);
    return (
        e.autoSessionTracking &&
            (function () {
                if (void 0 === N.m9.document) {
                    T.X && l.kg.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
                    return;
                }
                (0, E.yj)({ ignoreDuration: !0 }),
                    (0, E.cg)(),
                    (0, R.a)(({ from: t, to: e }) => {
                        void 0 !== t && t !== e && ((0, E.yj)({ ignoreDuration: !0 }), (0, E.cg)());
                    });
            })(),
        r
    );
}
function C(t = {}) {
    if (!N.m9.document) {
        T.X && l.kg.error('Global document not defined in showReportDialog call');
        return;
    }
    let e = (0, c.nZ)(),
        a = e.getClient(),
        r = a && a.getDsn();
    if (!r) {
        T.X && l.kg.error('DSN not configured for showReportDialog call');
        return;
    }
    if (
        (e &&
            (t.user = {
                ...e.getUser(),
                ...t.user
            }),
        !t.eventId)
    ) {
        let e = (0, E.eW)();
        e && (t.eventId = e);
    }
    let _ = N.m9.document.createElement('script');
    (_.async = !0), (_.crossOrigin = 'anonymous'), (_.src = (0, s.h)(r, t)), t.onLoad && (_.onload = t.onLoad);
    let { onClose: n } = t;
    if (n) {
        let t = (e) => {
            if ('__sentry_reportdialog_closed__' === e.data)
                try {
                    n();
                } finally {
                    N.m9.removeEventListener('message', t);
                }
        };
        N.m9.addEventListener('message', t);
    }
    let o = N.m9.document.head || N.m9.document.body;
    o ? o.appendChild(_) : T.X && l.kg.error('Not injecting report dialog. No injection point found in HTML');
}
function y() {}
function m(t) {
    t();
}
function v(t) {
    let e = (0, c.s3)();
    e && e.captureUserFeedback(t);
}
