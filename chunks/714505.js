"use strict";
n.d(t, { A: () => p });
var i = n(284009),
    s = n.n(i),
    r = n(481613),
    l = n.n(r),
    a = n(400253),
    o = n(49485),
    c = n(80703),
    d = n(976860),
    u = n(961350),
    _ = n(650048),
    h = n(954571),
    m = n(877062),
    g = n(652215);
function p(e) {
    let t = (function (e) {
            let t = l().os?.family;
            if ("Android" === t || "iOS" === t) {
                let t = u.default.getFingerprint(),
                    n = (0, o.I_)();
                return (
                    s()(null != e, "generateAppPath: guildId cannot be null"),
                    (0, o.Ay)((0, a.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                );
            }
            return "discord://";
        })(e),
        n = (0, o.X7)(t);
    null != n &&
        h.default.track(g.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, c.v)(n.fingerprint),
            attempt_id: n.attemptId,
            source: n.utmSource,
        }),
        m.A.launch(t, (e) => {
            e || (0, d.bG)(_.A.fallbackRoute);
        });
}
