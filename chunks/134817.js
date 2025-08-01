n.d(t, { default: () => g });
var r = n(255367),
    i = n(73800),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    c = n(233787),
    l = n(594174),
    u = n(74538),
    p = n(388032);
class d extends i.Component {
    render() {
        let { user: e, transitionState: t, onClose: n } = this.props;
        return (0, r.jsx)(c.C, {
            transitionState: t,
            onClose: async () => {
                await n(!1);
            },
            'aria-label': p.intl.string(p.t.BNg1io),
            title: p.intl.string(p.t.BNg1io),
            premiumModalType: c.C.Types.UPGRADE,
            primary: {
                onClick: () => n(!0),
                label: p.intl.string(p.t.P3etAg)
            },
            children: u.ZP.isPremium(e) && !u.ZP.canInstallPremiumApplications(e) ? p.intl.string(p.t.mKA9OD) : p.intl.string(p.t.sqSlm5)
        });
    }
}
let g = o.ZP.connectStores([l.default], () => {
    let e = l.default.getCurrentUser();
    return (s()(null != e, 'PremiumRequiredModal: user cannot be null'), { user: e });
})(d);
