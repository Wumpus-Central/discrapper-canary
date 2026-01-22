n.d(t, { A: () => m });
var r = n(481613),
    i = n.n(r),
    a = n(400253),
    s = n(49485),
    o = n(80703),
    l = n(803306),
    c = n(976860),
    u = n(961350),
    d = n(650048),
    f = n(954571),
    p = n(877062),
    _ = n(652215);
async function h(e) {
    var t, n;
    let r = null == (t = i().os) ? void 0 : t.family;
    if ("Android" === r || "iOS" === r) {
        let t = null != (n = u.default.getFingerprint()) ? n : u.default.getId(),
            r = (0, s.I_)();
        if (null == t && u.default.isAuthenticated())
            try {
                await (0, l.rQ)(), (t = u.default.getId());
            } catch (e) {}
        return (0, s.Ay)((0, a.BH)(), {
            utmSource: e,
            fingerprint: t,
            attemptId: r,
        });
    }
    return "discord://";
}
async function m(e) {
    let t = await h(e),
        n = (0, s.X7)(t);
    null != n &&
        f.default.track(_.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        p.A.launch(t, (e) => {
            e || (0, c.bG)(d.A.fallbackRoute);
        });
}
