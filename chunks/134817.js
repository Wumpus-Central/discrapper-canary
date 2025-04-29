n.d(t, { default: () => b });
var r = n(255367),
    s = n(73800),
    i = n(512722),
    l = n.n(i),
    a = n(442837),
    o = n(233787),
    c = n(594174),
    u = n(74538),
    d = n(388032);
class g extends s.Component {
    render() {
        let { user: e, transitionState: t, onClose: n } = this.props;
        return (0, r.jsxs)(o.Z, {
            transitionState: t,
            'aria-label': d.intl.string(d.t.BNg1io),
            children: [
                (0, r.jsx)(o.Z.Header, {
                    onClose: () => n(!1),
                    children: d.intl.string(d.t.BNg1io)
                }),
                (0, r.jsx)(o.Z.Content, {
                    type: o.Z.Types.UPGRADE,
                    children: u.ZP.isPremium(e) && !u.ZP.canInstallPremiumApplications(e) ? d.intl.string(d.t.mKA9OD) : d.intl.string(d.t.sqSlm5)
                }),
                (0, r.jsx)(o.Z.Footer, {
                    primary: {
                        onClick: () => n(!0),
                        label: d.intl.string(d.t.P3etAg)
                    }
                })
            ]
        });
    }
}
let b = a.ZP.connectStores([c.default], () => {
    let e = c.default.getCurrentUser();
    return l()(null != e, 'PremiumRequiredModal: user cannot be null'), { user: e };
})(g);
