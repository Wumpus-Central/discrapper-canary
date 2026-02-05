"use strict";
n.d(t, { j: () => d });
var r = n(64700),
    i = n(311907),
    a = n(554146),
    s = n(771781),
    o = n(367727),
    l = n(895944),
    u = n(649032),
    c = n(49999);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, i.bG)([l.A], () => {
            let e = l.A.getRewardForProgram(u.W.NITRO);
            return e?.last_granted_reward ?? null;
        });
    r.useEffect(() => {
        e ||
            (0, s.dD)(a.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) ||
            (null != t && (0, o.qr)(a.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, t, { dismissAction: c.i.INDIRECT_ACTION }));
    }, [e, t]);
}
