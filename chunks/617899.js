n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(904245),
    s = n(944486),
    o = n(324262),
    c = n(981631),
    d = n(921944),
    u = n(388032),
    h = n(589148);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class p extends r.PureComponent {
    render() {
        let e = ''.concat(u.intl.string(u.t.VWqWZW), '\n').concat(u.intl.string(u.t['0Lgb/P']));
        return (0, i.jsx)(o.Z, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: u.intl.string(u.t.BN75l5),
            trackingSource: c.PsQ.INVITE_NOTICE,
            type: c.vID.INVITE,
            image: h,
            imageMarginX: 46
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'handleInvite', () => {
                let { guild: e } = this.props;
                (0, l.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([n.e('7654'), n.e('54655')]).then(n.bind(n, 560114));
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            guild: e,
                            source: c.t4x.INVITE_NOTICE
                        });
                });
            }),
            m(this, 'handleClose', () => {
                let e = s.Z.getChannelId();
                this.props.markAsDismissed(d.L.UNKNOWN), null != e && a.Z.sendBotMessage(e, u.intl.formatToPlainString(u.t.DEn7np, { invitePeople: u.intl.string(u.t.BN75l5) }));
            });
    }
}
t.Z = p;
