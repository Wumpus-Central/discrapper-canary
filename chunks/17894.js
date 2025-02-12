n.d(t, { Z: () => g });
var i = n(525654),
    l = n.n(i),
    a = n(39612),
    r = n(271579),
    s = n(756647),
    o = n(232567),
    c = n(703656),
    d = n(314897),
    u = n(896797),
    m = n(626135),
    _ = n(954824),
    h = n(981631);
async function p(e) {
    var t, n;
    let i = null === (t = l().os) || void 0 === t ? void 0 : t.family;
    if ('Android' === i || 'iOS' === i) {
        let t = null !== (n = d.default.getFingerprint()) && void 0 !== n ? n : d.default.getId(),
            i = (0, r.WS)();
        if (null == t && d.default.isAuthenticated())
            try {
                await (0, o.k)(), (t = d.default.getId());
            } catch {}
        return (0, r.ZP)((0, a.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: i
        });
    }
    return 'discord://';
}
async function g(e) {
    let t = await p(e),
        n = (0, r.zS)(t);
    null != n &&
        m.default.track(h.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        _.Z.launch(t, (e) => {
            e || (0, c.dL)(u.Z.fallbackRoute);
        });
}
