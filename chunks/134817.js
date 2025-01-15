t.r(n);
var s = t(200651),
    i = t(192379),
    a = t(512722),
    c = t.n(a),
    l = t(442837),
    r = t(233787),
    o = t(594174),
    d = t(74538),
    u = t(388032);
class g extends i.Component {
    render() {
        let { user: e, transitionState: n, onClose: t } = this.props;
        return (0, s.jsxs)(r.Z, {
            transitionState: n,
            'aria-label': u.intl.string(u.t.BNg1io),
            children: [
                (0, s.jsx)(r.Z.Header, {
                    onClose: () => t(!1),
                    children: u.intl.string(u.t.BNg1io)
                }),
                (0, s.jsx)(r.Z.Content, {
                    type: r.Z.Types.UPGRADE,
                    children: d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e) ? u.intl.string(u.t.mKA9OD) : u.intl.string(u.t.sqSlm5)
                }),
                (0, s.jsx)(r.Z.Footer, {
                    primary: {
                        onClick: () => t(!0),
                        label: u.intl.string(u.t.P3etAg)
                    }
                })
            ]
        });
    }
}
n.default = l.ZP.connectStores([o.default], () => {
    let e = o.default.getCurrentUser();
    return c()(null != e, 'PremiumRequiredModal: user cannot be null'), { user: e };
})(g);
