i.d(a, { default: () => u });
var n = i(627968),
    t = i(64700),
    l = i(284009),
    r = i.n(l),
    s = i(311907),
    d = i(885377),
    m = i(287809),
    c = i(927578),
    g = i(985018);
class o extends t.Component {
    render() {
        let { user: e, transitionState: a, onClose: i } = this.props;
        return (0, n.jsx)(d.A, {
            transitionState: a,
            onClose: async () => {
                await i(!1);
            },
            "aria-label": g.intl.string(g.t.BNg1ir),
            title: g.intl.string(g.t.BNg1ir),
            premiumModalType: d.A.Types.UPGRADE,
            primary: { onClick: () => i(!0), label: g.intl.string(g.t.P3etAv) },
            children:
                c.Ay.isPremium(e) && !c.Ay.canInstallPremiumApplications(e)
                    ? g.intl.string(g.t.mKA9OJ)
                    : g.intl.string(g.t.sqSlm4),
        });
    }
}
let u = s.Ay.connectStores([m.default], () => {
    let e = m.default.getCurrentUser();
    return r()(null != e, "PremiumRequiredModal: user cannot be null"), { user: e };
})(o);
