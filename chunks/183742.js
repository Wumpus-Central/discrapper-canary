r.d(t, {
    default: () => d,
});
var n = r(627968),
    c = r(64700),
    i = r(284009),
    l = r.n(i),
    a = r(311907),
    o = r(885377),
    s = r(287809),
    p = r(927578),
    u = r(985018);
class b extends c.Component {
    render() {
        let { user: e, transitionState: t, onClose: r } = this.props;
        return (0, n.jsx)(o.A, {
            transitionState: t,
            onClose: async () => {
                await r(!1);
            },
            "aria-label": u.intl.string(u.t.BNg1ir),
            title: u.intl.string(u.t.BNg1ir),
            premiumModalType: o.A.Types.UPGRADE,
            primary: {
                onClick: () => r(!0),
                label: u.intl.string(u.t.P3etAv),
            },
            children:
                p.Ay.isPremium(e) && !p.Ay.canInstallPremiumApplications(e)
                    ? u.intl.string(u.t.mKA9OJ)
                    : u.intl.string(u.t.sqSlm4),
        });
    }
}
let d = a.Ay.connectStores([s.default], () => {
    let e = s.default.getCurrentUser();
    return (
        l()(null != e, "PremiumRequiredModal: user cannot be null"),
        {
            user: e,
        }
    );
})(b);
