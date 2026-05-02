"use strict";
n.d(t, { j: () => u });
var i = n(64700),
    r = n(554146),
    s = n(558845),
    a = n(281678),
    o = n(366505),
    l = n(49999);
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { programReward: t } = (0, o.F)(),
        n = t?.last_granted_reward ?? null;
    i.useEffect(() => {
        e ||
            (0, s.dD)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) ||
            (null != n && (0, a.qr)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, n, { dismissAction: l.i.INDIRECT_ACTION }));
    }, [e, n]);
}
