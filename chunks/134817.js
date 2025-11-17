r.d(t, { default: () => d });
var n = r(54381),
    i = r(473749),
    a = r(512722),
    l = r.n(a),
    o = r(442837),
    c = r(233787),
    s = r(594174),
    u = r(74538),
    m = r(388032);
class p extends i.Component {
    render() {
        let { user: e, transitionState: t, onClose: r } = this.props;
        return (0, n.jsx)(c.C, {
            transitionState: t,
            onClose: async () => {
                await r(!1);
            },
            "aria-label": m.intl.string(m.t.BNg1ir),
            title: m.intl.string(m.t.BNg1ir),
            premiumModalType: c.C.Types.UPGRADE,
            primary: {
                onClick: () => r(!0),
                label: m.intl.string(m.t.P3etAv),
            },
            children:
                u.ZP.isPremium(e) && !u.ZP.canInstallPremiumApplications(e)
                    ? m.intl.string(m.t.mKA9OJ)
                    : m.intl.string(m.t.sqSlm4),
        });
    }
}
let d = o.ZP.connectStores([s.default], () => {
    let e = s.default.getCurrentUser();
    return l()(null != e, "PremiumRequiredModal: user cannot be null"), { user: e };
})(p);
