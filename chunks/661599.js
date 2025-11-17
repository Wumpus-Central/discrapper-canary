n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(313789),
    a = n(518596),
    s = n(82950),
    o = n(981631),
    c = n(388032),
    u = n(510342);
class d extends i.PureComponent {
    render() {
        return (0, r.jsx)(s.Z, {
            guild: this.props.guild,
            onClick: () => (0, a.openUserSettings)(l.n.ACCOUNT_PANEL, { section: o.oAB.ACCOUNT }),
            message: c.intl.format(c.t["oCd+at"], {}),
            cta: c.intl.string(c.t["8dCrV9"]),
            trackingSource: o.PsQ.GUILD_MFA_WARNING,
            type: o.vID.MFA_WARNING,
            image: u,
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
let p = d;
