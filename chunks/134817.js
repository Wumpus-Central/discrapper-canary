r.d(t, { default: () => b });
var n = r(200651),
    s = r(192379),
    i = r(512722),
    a = r.n(i),
    o = r(442837),
    l = r(233787),
    c = r(594174),
    u = r(74538),
    d = r(388032);
class g extends s.Component {
    render() {
        let { user: e, transitionState: t, onClose: r } = this.props;
        return (0, n.jsxs)(l.Z, {
            transitionState: t,
            'aria-label': d.NW.string(d.t.BNg1io),
            children: [
                (0, n.jsx)(l.Z.Header, {
                    onClose: () => r(!1),
                    children: d.NW.string(d.t.BNg1io)
                }),
                (0, n.jsx)(l.Z.Content, {
                    type: l.Z.Types.UPGRADE,
                    children: u.ZP.isPremium(e) && !u.ZP.canInstallPremiumApplications(e) ? d.NW.string(d.t.mKA9OD) : d.NW.string(d.t.sqSlm5)
                }),
                (0, n.jsx)(l.Z.Footer, {
                    primary: {
                        onClick: () => r(!0),
                        label: d.NW.string(d.t.P3etAg)
                    }
                })
            ]
        });
    }
}
let b = o.ZP.connectStores([c.default], () => {
    let e = c.default.getCurrentUser();
    return a()(null != e, 'PremiumRequiredModal: user cannot be null'), { user: e };
})(g);
