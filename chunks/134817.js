n.d(s, { default: () => m });
var t = n(200651),
    i = n(192379),
    a = n(512722),
    l = n.n(a),
    r = n(442837),
    o = n(233787),
    c = n(594174),
    d = n(74538),
    u = n(388032);
class g extends i.Component {
    render() {
        let { user: e, transitionState: s, onClose: n } = this.props;
        return (0, t.jsxs)(o.Z, {
            transitionState: s,
            'aria-label': u.intl.string(u.t.BNg1io),
            children: [
                (0, t.jsx)(o.Z.Header, {
                    onClose: () => n(!1),
                    children: u.intl.string(u.t.BNg1io)
                }),
                (0, t.jsx)(o.Z.Content, {
                    type: o.Z.Types.UPGRADE,
                    children: d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e) ? u.intl.string(u.t.mKA9OD) : u.intl.string(u.t.sqSlm5)
                }),
                (0, t.jsx)(o.Z.Footer, {
                    primary: {
                        onClick: () => n(!0),
                        label: u.intl.string(u.t.P3etAg)
                    }
                })
            ]
        });
    }
}
let m = r.ZP.connectStores([c.default], () => {
    let e = c.default.getCurrentUser();
    return l()(null != e, 'PremiumRequiredModal: user cannot be null'), { user: e };
})(g);
