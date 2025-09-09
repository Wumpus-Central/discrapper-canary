n.d(t, { R: () => s });
var r = n(951288),
    i = n(680018),
    a = n(453591),
    o = n(388032);
let s = () => {
    let { redeemReward: e, isLoading: t } = (0, a.h)(),
        n = async () => {
            await e();
        };
    return (0, r.jsx)(i.z, {
        text: o.intl.string(o.t["8g3ANT"]),
        onClick: n,
        fullWidth: !0,
        loading: t,
    });
};
