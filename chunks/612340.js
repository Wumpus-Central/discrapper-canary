n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(780964),
    l = n(840065),
    s = n(64983),
    o = n(652215),
    d = n(985018),
    c = n(72692);
class u extends r.PureComponent {
    render() {
        return (0, i.jsx)(s.A, {
            guild: this.props.guild,
            onClick: () => (0, l.openUserSettings)(a.X.ACCOUNT_PANEL, { section: o.nc_.ACCOUNT }),
            message: d.intl.format(d.t["oCd+at"], {}),
            cta: d.intl.string(d.t["8dCrV9"]),
            trackingSource: o.kZU.GUILD_MFA_WARNING,
            type: o.n5X.MFA_WARNING,
            image: c,
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
let A = u;
