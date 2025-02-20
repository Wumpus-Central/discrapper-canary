n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(230711),
    o = n(324262),
    a = n(981631),
    s = n(388032),
    c = n(510342);
class u extends i.PureComponent {
    render() {
        return (0, r.jsx)(o.Z, {
            guild: this.props.guild,
            onClick: () => l.Z.open(a.oAB.ACCOUNT),
            message: s.NW.format(s.t['oCd+am'], {}),
            cta: s.NW.string(s.t['8dCrV1']),
            trackingSource: a.PsQ.GUILD_MFA_WARNING,
            type: a.vID.MFA_WARNING,
            image: c,
            imageMarginX: 54,
            undismissable: !0
        });
    }
}
let d = u;
