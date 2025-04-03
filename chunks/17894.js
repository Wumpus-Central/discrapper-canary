n.d(t, { Z: () => h });
var r = n(525654),
    i = n.n(r),
    l = n(39612),
    a = n(271579),
    o = n(756647),
    s = n(232567),
    c = n(703656),
    u = n(314897),
    d = n(896797),
    m = n(626135),
    f = n(954824),
    p = n(981631);
async function b(e) {
    var t, n;
    let r = null == (t = i().os) ? void 0 : t.family;
    if ('Android' === r || 'iOS' === r) {
        let t = null != (n = u.default.getFingerprint()) ? n : u.default.getId(),
            r = (0, a.WS)();
        if (null == t && u.default.isAuthenticated())
            try {
                await (0, s.k)(), (t = u.default.getId());
            } catch (e) {}
        return (0, a.ZP)((0, l.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r
        });
    }
    return 'discord://';
}
async function h(e) {
    let t = await b(e),
        n = (0, a.zS)(t);
    null != n &&
        m.default.track(p.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource
        }),
        f.Z.launch(t, (e) => {
            e || (0, c.dL)(d.Z.fallbackRoute);
        });
}
