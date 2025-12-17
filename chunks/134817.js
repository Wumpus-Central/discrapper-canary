r.d(t, { default: () => p });
var n = r(54381),
    i = r(473749),
    a = r(512722),
    l = r.n(a),
    o = r(442837),
    c = r(233787),
    s = r(594174),
    d = r(74538),
    u = r(388032);
class m extends i.Component {
    render() {
        let { user: e, transitionState: t, onClose: r } = this.props;
        return (0, n.jsx)(c.C, {
            transitionState: t,
            onClose: async () => {
                await r(!1);
            },
            "aria-label": u.intl.string(u.t.BNg1ir),
            title: u.intl.string(u.t.BNg1ir),
            premiumModalType: c.C.Types.UPGRADE,
            primary: {
                onClick: () => r(!0),
                label: u.intl.string(u.t.P3etAv),
            },
            children:
                d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e)
                    ? u.intl.string(u.t.mKA9OJ)
                    : u.intl.string(u.t.sqSlm4),
        });
    }
}
let p = o.ZP.connectStores([s.default], () => {
    let e = s.default.getCurrentUser();
    return l()(null != e, "PremiumRequiredModal: user cannot be null"), { user: e };
})(m);
