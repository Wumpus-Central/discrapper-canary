n.d(t, { Z: () => h });
var r = n(525654),
    i = n.n(r),
    a = n(39612),
    o = n(271579),
    s = n(756647),
    l = n(232567),
    c = n(703656),
    u = n(314897),
    d = n(896797),
    f = n(626135),
    p = n(954824),
    _ = n(981631);
async function m(e) {
    var t, n;
    let r = null == (t = i().os) ? void 0 : t.family;
    if ("Android" === r || "iOS" === r) {
        let t = null != (n = u.default.getFingerprint()) ? n : u.default.getId(),
            r = (0, o.WS)();
        if (null == t && u.default.isAuthenticated())
            try {
                await (0, l.k)(), (t = u.default.getId());
            } catch (e) {}
        return (0, o.ZP)((0, a.Gk)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r,
        });
    }
    return "discord://";
}
async function h(e) {
    let t = await m(e),
        n = (0, o.zS)(t);
    null != n &&
        f.default.track(_.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, s.K)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.Z.launch(t, (e) => {
            e || (0, c.dL)(d.Z.fallbackRoute);
        });
}
