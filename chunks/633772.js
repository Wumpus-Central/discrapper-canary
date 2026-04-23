i.d(a, { default: () => u });
var n = i(627968),
    t = i(64700),
    l = i(284009),
    r = i.n(l),
    s = i(17928),
    d = i(287809),
    m = i(927578),
    c = i(885377),
    g = i(985018);
class o extends t.Component {
    render() {
        let { user: e, transitionState: a, onClose: i } = this.props;
        return (0, n.jsx)(c.A, {
            transitionState: a,
            onClose: async () => {
                await i(!1);
            },
            "aria-label": g.intl.string(g.t.BNg1ir),
            title: g.intl.string(g.t.BNg1ir),
            premiumModalType: c.A.Types.UPGRADE,
            primary: { onClick: () => i(!0), label: g.intl.string(g.t.P3etAv) },
            children:
                m.Ay.isPremium(e) && !m.Ay.canInstallPremiumApplications(e)
                    ? g.intl.string(g.t.mKA9OJ)
                    : g.intl.string(g.t.sqSlm4),
        });
    }
}
let u = s.Ay.connectStores([d.default], () => {
    let e = d.default.getCurrentUser();
    return r()(null != e, "PremiumRequiredModal: user cannot be null"), { user: e };
})(o);
