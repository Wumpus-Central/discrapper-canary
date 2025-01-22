t.d(e, {
    Z: function () {
        return g;
    }
});
var i = t(525654),
    l = t.n(i),
    r = t(39612),
    a = t(271579),
    o = t(756647),
    s = t(232567),
    u = t(703656),
    c = t(314897),
    d = t(896797),
    m = t(626135),
    f = t(954824),
    h = t(981631);
async function p(n) {
    var e, t;
    let i = null === (e = l().os) || void 0 === e ? void 0 : e.family;
    if ('Android' === i || 'iOS' === i) {
        let e = null !== (t = c.default.getFingerprint()) && void 0 !== t ? t : c.default.getId(),
            i = (0, a.WS)();
        if (null == e && c.default.isAuthenticated())
            try {
                await (0, s.k)(), (e = c.default.getId());
            } catch {}
        return (0, a.ZP)((0, r.Gk)(), {
            utmSource: n,
            fingerprint: e,
            attemptId: i
        });
    }
    return 'discord://';
}
async function g(n) {
    let e = await p(n),
        t = (0, a.zS)(e);
    null != t &&
        m.default.track(h.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(t.fingerprint),
            attempt_id: t.attemptId,
            source: t.utmSource
        }),
        f.Z.launch(e, (n) => {
            !n && (0, u.dL)(d.Z.fallbackRoute);
        });
}
