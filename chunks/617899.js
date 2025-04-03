n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(904245),
    o = n(944486),
    s = n(324262),
    c = n(981631),
    u = n(921944),
    d = n(388032),
    p = n(589148);
function h(e, t, n) {
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
class f extends i.PureComponent {
    render() {
        let e = ''.concat(d.NW.string(d.t.VWqWZW), '\n').concat(d.NW.string(d.t['0Lgb/P']));
        return (0, r.jsx)(s.Z, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: d.NW.string(d.t.BN75l5),
            trackingSource: c.PsQ.INVITE_NOTICE,
            type: c.vID.INVITE,
            image: p,
            imageMarginX: 46
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'handleInvite', () => {
                let { guild: e } = this.props;
                (0, l.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            t,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            h(e, t, n[t]);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l =
                                {
                                    guild: e,
                                    source: c.t4x.INVITE_NOTICE
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i)
                        );
                    };
                });
            }),
            h(this, 'handleClose', () => {
                let e = o.Z.getChannelId();
                this.props.markAsDismissed(u.L.UNKNOWN), null != e && a.Z.sendBotMessage(e, d.NW.formatToPlainString(d.t.DEn7np, { invitePeople: d.NW.string(d.t.BN75l5) }));
            });
    }
}
let g = f;
