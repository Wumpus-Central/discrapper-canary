n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    r = n(230711),
    a = n(324262),
    s = n(981631),
    o = n(388032),
    d = n(510342);
class c extends l.PureComponent {
    render() {
        return (0, i.jsx)(a.Z, {
            guild: this.props.guild,
            onClick: () => r.Z.open(s.oAB.ACCOUNT),
            message: o.intl.format(o.t['oCd+am'], {}),
            cta: o.intl.string(o.t['8dCrV1']),
            trackingSource: s.PsQ.GUILD_MFA_WARNING,
            type: s.vID.MFA_WARNING,
            image: d,
            imageMarginX: 54,
            undismissable: !0
        });
    }
}
let u = c;
