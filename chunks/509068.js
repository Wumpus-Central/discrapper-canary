a.d(e, {
    Eg: () => m,
    Jd: () => y,
    S1: () => D,
    jp: () => C,
    lA: () => v,
    nV: () => g
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
    u = a(694043),
    I = a(688838),
    R = a(393523),
    d = a(833772),
    N = a(454463),
    f = a(163162),
    A = a(408720),
    T = a(515737),
    p = a(804410),
    L = a(376457),
    h = a(42367),
    O = a(297117),
    P = a(387486);
function g(t) {
    return [(0, r.S)(), (0, _.C)(), (0, T.t)(), (0, A.f)(), (0, p.k)(), (0, h.O)(), (0, n.R)(), (0, L.s)()];
}
function D(t = {}) {
    let e = (function (t = {}) {
        return {
            ...{
                defaultIntegrations: g(),
                release: 'string' == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : f.m9.SENTRY_RELEASE && f.m9.SENTRY_RELEASE.id ? f.m9.SENTRY_RELEASE.id : void 0,
                autoSessionTracking: !0,
                sendClientReports: !0
            },
            ...t
        };
    })(t);
    if (
        (function () {
            let t = f.m9,
                e = t.chrome ? 'chrome' : 'browser',
                a = t[e],
                r = a && a.runtime && a.runtime.id,
                _ = (f.m9.location && f.m9.location.href) || '',
                n = !!r && f.m9 === f.m9.top && ['chrome-extension:', 'moz-extension:', 'ms-browser-extension:'].some((t) => _.startsWith(`${t}//`)),
                o = void 0 !== t.nw;
            return !!r && !n && !o;
        })()
    )
        return void (0, l.Cf)(() => {
            console.error('[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/');
        });
    N.X && !(0, u.Ak)() && l.kg.warn('No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.');
    let a = {
            ...e,
            stackParser: (0, I.Sq)(e.stackParser || O.Dt),
            integrations: (0, o.m8)(e),
            transport: e.transport || P.f
        },
        r = (0, i.M)(d.R, a);
    return (
        e.autoSessionTracking &&
            (function () {
                if (void 0 === f.m9.document) {
                    N.X && l.kg.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
                    return;
                }
                ((0, E.yj)({ ignoreDuration: !0 }),
                    (0, E.cg)(),
                    (0, R.a)(({ from: t, to: e }) => {
                        void 0 !== t && t !== e && ((0, E.yj)({ ignoreDuration: !0 }), (0, E.cg)());
                    }));
            })(),
        r
    );
}
function C(t = {}) {
    if (!f.m9.document) {
        N.X && l.kg.error('Global document not defined in showReportDialog call');
        return;
    }
    let e = (0, c.nZ)(),
        a = e.getClient(),
        r = a && a.getDsn();
    if (!r) {
        N.X && l.kg.error('DSN not configured for showReportDialog call');
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
    let _ = f.m9.document.createElement('script');
    ((_.async = !0), (_.crossOrigin = 'anonymous'), (_.src = (0, s.h)(r, t)), t.onLoad && (_.onload = t.onLoad));
    let { onClose: n } = t;
    if (n) {
        let t = (e) => {
            if ('__sentry_reportdialog_closed__' === e.data)
                try {
                    n();
                } finally {
                    f.m9.removeEventListener('message', t);
                }
        };
        f.m9.addEventListener('message', t);
    }
    let o = f.m9.document.head || f.m9.document.body;
    o ? o.appendChild(_) : N.X && l.kg.error('Not injecting report dialog. No injection point found in HTML');
}
function m() {}
function v(t) {
    t();
}
function y(t) {
    let e = (0, c.s3)();
    e && e.captureUserFeedback(t);
}
