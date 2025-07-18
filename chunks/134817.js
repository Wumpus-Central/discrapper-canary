n.d(t, { default: () => p });
var r = n(255367),
    s = n(73800),
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    l = n(233787),
    c = n(594174),
    u = n(74538),
    d = n(388032);
class g extends s.Component {
    render() {
        let { user: e, transitionState: t, onClose: n } = this.props;
        return (0, r.jsxs)(l.Z, {
            transitionState: t,
            'aria-label': d.intl.string(d.t.BNg1io),
            children: [
                (0, r.jsx)(l.Z.Header, {
                    onClose: () => n(!1),
                    children: d.intl.string(d.t.BNg1io)
                }),
                (0, r.jsx)(l.Z.Content, {
                    type: l.Z.Types.UPGRADE,
                    children: u.ZP.isPremium(e) && !u.ZP.canInstallPremiumApplications(e) ? d.intl.string(d.t.mKA9OD) : d.intl.string(d.t.sqSlm5)
                }),
                (0, r.jsx)(l.Z.Footer, {
                    primary: {
                        onClick: () => n(!0),
                        label: d.intl.string(d.t.P3etAg)
                    }
                })
            ]
        });
    }
}
let p = o.ZP.connectStores([c.default], () => {
    let e = c.default.getCurrentUser();
    return (a()(null != e, 'PremiumRequiredModal: user cannot be null'), { user: e });
})(g);
