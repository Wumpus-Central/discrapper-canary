r.d(t, { j: () => c });
var n = r(64700),
    a = r(311907),
    l = r(554146),
    s = r(771781),
    i = r(367727),
    d = r(895944),
    u = r(649032),
    o = r(49999);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (0, a.bG)([d.A], () => {
            let e = d.A.getRewardForProgram(u.W.NITRO);
            return e?.last_granted_reward ?? null;
        });
    n.useEffect(() => {
        e ||
            (0, s.dD)(l.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) ||
            (null != t && (0, i.qr)(l.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, t, { dismissAction: o.i.INDIRECT_ACTION }));
    }, [e, t]);
}
