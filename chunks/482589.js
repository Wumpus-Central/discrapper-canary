s.d(t, { j: () => o });
var a = s(64700),
    r = s(554146),
    l = s(558845),
    i = s(281678),
    n = s(366505),
    d = s(49999);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { programReward: t } = (0, n.F)(),
        s = t?.last_granted_reward ?? null;
    a.useEffect(() => {
        e ||
            (0, l.dD)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) ||
            (null != s && (0, i.qr)(r.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, s, { dismissAction: d.i.INDIRECT_ACTION }));
    }, [e, s]);
}
