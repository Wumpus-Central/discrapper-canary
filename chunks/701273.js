"use strict";
n.d(t, { A: () => m });
var r = n(481613),
    i = n.n(r),
    a = n(400253),
    s = n(49485),
    o = n(80703),
    l = n(803306),
    u = n(976860),
    c = n(961350),
    d = n(650048),
    _ = n(954571),
    f = n(877062),
    p = n(652215);
async function h(e) {
    let t = i().os?.family;
    if ("Android" === t || "iOS" === t) {
        let t = c.default.getFingerprint() ?? c.default.getId(),
            n = (0, s.I_)();
        if (null == t && c.default.isAuthenticated())
            try {
                await (0, l.rQ)(), (t = c.default.getId());
            } catch {}
        return (0, s.Ay)((0, a.BH)(), { utmSource: e, fingerprint: t, attemptId: n });
    }
    return "discord://";
}
async function m(e) {
    let t = await h(e),
        n = (0, s.X7)(t);
    null != n &&
        _.default.track(p.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, o.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        f.A.launch(t, (e) => {
            e || (0, u.bG)(d.A.fallbackRoute);
        });
}
