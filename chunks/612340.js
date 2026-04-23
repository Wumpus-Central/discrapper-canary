n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(780964),
    l = n(858897),
    s = n(926466),
    o = n(652215),
    d = n(985018),
    u = n(72692);
class c extends r.PureComponent {
    render() {
        return (0, i.jsx)(s.A, {
            guild: this.props.guild,
            onClick: () => (0, l.openUserSettings)(a.X.ACCOUNT_PANEL),
            message: d.intl.format(d.t["oCd+at"], {}),
            cta: d.intl.string(d.t["8dCrV9"]),
            trackingSource: o.kZU.GUILD_MFA_WARNING,
            type: o.n5X.MFA_WARNING,
            image: u,
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
let A = c;
