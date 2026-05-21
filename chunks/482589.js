l.d(t, { j: () => d });
var i = l(64700),
    r = l(554146),
    a = l(558845),
    s = l(367727),
    n = l(366505),
    o = l(49999);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { programReward: t } = (0, n.F)(),
        l = t?.last_granted_reward ?? null;
    i.useEffect(() => {
        e ||
            (0, a.dD)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) ||
            (null != l && (0, s.qr)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, l, { dismissAction: o.i.INDIRECT_ACTION }));
    }, [e, l]);
}
