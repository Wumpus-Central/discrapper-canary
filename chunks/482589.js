i.d(t, { j: () => d });
var r = i(64700),
    s = i(554146),
    n = i(558845),
    l = i(367727),
    a = i(366505),
    o = i(49999);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { programReward: t } = (0, a.F)(),
        i = t?.last_granted_reward ?? null;
    r.useEffect(() => {
        e ||
            (0, n.dD)(s.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) ||
            (null != i && (0, l.qr)(s.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, i, { dismissAction: o.i.INDIRECT_ACTION }));
    }, [e, i]);
}
