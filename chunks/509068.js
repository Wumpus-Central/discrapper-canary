a.d(e, {
    Eg: () => y,
    Jd: () => C,
    S1: () => P,
    jp: () => m,
    lA: () => v,
    nV: () => g
});
var r = a(636361),
    n = a(502990),
    _ = a(907765),
    o = a(151122),
    i = a(511906),
    c = a(263449),
    s = a(233517),
    E = a(510529),
    l = a(622916),
    u = a(694043),
    I = a(688838),
    R = a(393523),
    d = a(833772),
    A = a(454463),
    f = a(163162),
    p = a(408720),
    N = a(515737),
    T = a(804410),
    L = a(376457),
    h = a(42367),
    O = a(297117),
    D = a(387486);
function g(t) {
    return [(0, r.S)(), (0, n.C)(), (0, N.t)(), (0, p.f)(), (0, T.k)(), (0, h.O)(), (0, _.R)(), (0, L.s)()];
}
function P(t = {}) {
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
                n = (f.m9.location && f.m9.location.href) || '',
                _ = !!r && f.m9 === f.m9.top && ['chrome-extension:', 'moz-extension:', 'ms-browser-extension:'].some((t) => n.startsWith(`${t}//`)),
                o = void 0 !== t.nw;
            return !!r && !_ && !o;
        })()
    )
        return void (0, l.Cf)(() => {
            console.error('[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/');
        });
    A.X && !(0, u.Ak)() && l.kg.warn('No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.');
    let a = {
            ...e,
            stackParser: (0, I.Sq)(e.stackParser || O.Dt),
            integrations: (0, o.m8)(e),
            transport: e.transport || D.f
        },
        r = (0, i.M)(d.R, a);
    return (
        e.autoSessionTracking &&
            (function () {
                if (void 0 === f.m9.document) {
                    A.X && l.kg.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
                    return;
                }
                (0, s.yj)({ ignoreDuration: !0 }),
                    (0, s.cg)(),
                    (0, R.a)(({ from: t, to: e }) => {
                        void 0 !== t && t !== e && ((0, s.yj)({ ignoreDuration: !0 }), (0, s.cg)());
                    });
            })(),
        r
    );
}
function m(t = {}) {
    if (!f.m9.document) {
        A.X && l.kg.error('Global document not defined in showReportDialog call');
        return;
    }
    let e = (0, c.nZ)(),
        a = e.getClient(),
        r = a && a.getDsn();
    if (!r) {
        A.X && l.kg.error('DSN not configured for showReportDialog call');
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
        let e = (0, s.eW)();
        e && (t.eventId = e);
    }
    let n = f.m9.document.createElement('script');
    (n.async = !0), (n.crossOrigin = 'anonymous'), (n.src = (0, E.h)(r, t)), t.onLoad && (n.onload = t.onLoad);
    let { onClose: _ } = t;
    if (_) {
        let t = (e) => {
            if ('__sentry_reportdialog_closed__' === e.data)
                try {
                    _();
                } finally {
                    f.m9.removeEventListener('message', t);
                }
        };
        f.m9.addEventListener('message', t);
    }
    let o = f.m9.document.head || f.m9.document.body;
    o ? o.appendChild(n) : A.X && l.kg.error('Not injecting report dialog. No injection point found in HTML');
}
function y() {}
function v(t) {
    t();
}
function C(t) {
    let e = (0, c.s3)();
    e && e.captureUserFeedback(t);
}
