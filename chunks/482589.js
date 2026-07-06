s.d(_, { j: () => a });
var i = s(64700),
    t = s(554146),
    d = s(558845),
    e = s(367727),
    n = s(366505),
    O = s(49999);
function a() {
    let R = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { programReward: _ } = (0, n.F)(),
        s = _?.last_granted_reward ?? null;
    i.useEffect(() => {
        R ||
            (0, d.dD)(t.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER) ||
            (null != s && (0, e.qr)(t.M.PREMIUM_ORBS_REWARDS_DROP_POPOVER, s, { dismissAction: O.i.INDIRECT_ACTION }));
    }, [R, s]);
}
