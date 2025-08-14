n.d(t, { Z: () => p });
var i = n(525654),
    r = n.n(i),
    l = n(39612),
    a = n(271579),
    s = n(756647),
    o = n(232567),
    c = n(703656),
    d = n(314897),
    u = n(896797),
    m = n(626135),
    f = n(954824),
    g = n(981631);
async function h(e) {
    var t, n;
    let i = null == (t = r().os) ? void 0 : t.family;
    if ("Android" === i || "iOS" === i) {
        let t = null != (n = d.default.getFingerprint()) ? n : d.default.getId(),
            i = (0, a.WS)();
        if (null == t && d.default.isAuthenticated())
            try {
                await (0, o.k)(), (t = d.default.getId());
            } catch (e) {}
        return (0, a.ZP)((0, l.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: i,
        });
    }
    return "discord://";
}
async function p(e) {
    let t = await h(e),
        n = (0, a.zS)(t);
    null != n &&
        m.default.track(g.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        f.Z.launch(t, (e) => {
            e || (0, c.dL)(u.Z.fallbackRoute);
        });
}
