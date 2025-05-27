n.d(t, { Z: () => g });
var r = n(525654),
    i = n.n(r),
    a = n(39612),
    o = n(271579),
    l = n(756647),
    s = n(232567),
    c = n(703656),
    d = n(314897),
    u = n(896797),
    _ = n(626135),
    m = n(954824),
    f = n(981631);
async function p(e) {
    var t, n;
    let r = null == (t = i().os) ? void 0 : t.family;
    if ('Android' === r || 'iOS' === r) {
        let t = null != (n = d.default.getFingerprint()) ? n : d.default.getId(),
            r = (0, o.WS)();
        if (null == t && d.default.isAuthenticated())
            try {
                await (0, s.k)(), (t = d.default.getId());
            } catch (e) {}
        return (0, o.ZP)((0, a.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r
        });
    }
    return 'discord://';
}
async function g(e) {
    let t = await p(e),
        n = (0, o.zS)(t);
    null != n &&
        _.default.track(f.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        m.Z.launch(t, (e) => {
            e || (0, c.dL)(u.Z.fallbackRoute);
        });
}
