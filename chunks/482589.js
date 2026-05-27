i.d(t, { j: () => d });
var r = i(64700),
    l = i(554146),
    a = i(558845),
    n = i(367727),
    s = i(366505),
    o = i(49999);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { programReward: t } = (0, s.F)(),
        i = t?.last_granted_reward ?? null;
    r.useEffect(() => {
        e ||
            (0, a.dD)(l.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) ||
            (null != i && (0, n.qr)(l.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, i, { dismissAction: o.i.INDIRECT_ACTION }));
    }, [e, i]);
}
