s.d(t, { j: () => o });
var n = s(64700),
    a = s(554146),
    r = s(771781),
    l = s(367727),
    i = s(320118),
    d = s(49999);
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { programReward: t } = (0, i.F)(),
        s = t?.last_granted_reward ?? null;
    n.useEffect(() => {
        e ||
            (0, r.dD)(a.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) ||
            (null != s && (0, l.qr)(a.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, s, { dismissAction: d.i.INDIRECT_ACTION }));
    }, [e, s]);
}
