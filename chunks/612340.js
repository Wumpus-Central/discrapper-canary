n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    l = n(780964),
    a = n(840065),
    s = n(64983),
    o = n(652215),
    c = n(985018),
    u = n(72692);
class d extends i.PureComponent {
    render() {
        return (0, r.jsx)(s.A, {
            guild: this.props.guild,
            onClick: () =>
                (0, a.openUserSettings)(l.X.ACCOUNT_PANEL, {
                    section: o.nc_.ACCOUNT,
                }),
            message: c.intl.format(c.t["oCd+at"], {}),
            cta: c.intl.string(c.t["8dCrV9"]),
            trackingSource: o.kZU.GUILD_MFA_WARNING,
            type: o.n5X.MFA_WARNING,
            image: u,
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
let p = d;
