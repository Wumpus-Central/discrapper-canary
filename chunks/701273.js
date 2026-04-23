"use strict";
n.d(t, { A: () => p });
var i = n(481613),
    s = n.n(i),
    r = n(400253),
    l = n(49485),
    a = n(80703),
    o = n(803306),
    c = n(976860),
    d = n(961350),
    u = n(650048),
    _ = n(954571),
    h = n(877062),
    m = n(652215);
async function g(e) {
    let t = s().os?.family;
    if ("Android" === t || "iOS" === t) {
        let t = d.default.getFingerprint() ?? d.default.getId(),
            n = (0, l.I_)();
        if (null == t && d.default.isAuthenticated())
            try {
                await (0, o.rQ)(), (t = d.default.getId());
            } catch {}
        return (0, l.Ay)((0, r.BH)(), { utmSource: e, fingerprint: t, attemptId: n });
    }
    return "discord://";
}
async function p(e) {
    let t = await g(e),
        n = (0, l.X7)(t);
    null != n &&
        _.default.track(m.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, a.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        h.A.launch(t, (e) => {
            e || (0, c.bG)(u.A.fallbackRoute);
        });
}
