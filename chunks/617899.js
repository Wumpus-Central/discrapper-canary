n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(904245),
    o = n(340541),
    s = n(944486),
    c = n(324262),
    u = n(981631),
    d = n(921944),
    p = n(388032),
    h = n(589148);
function f(e, t, n) {
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
class g extends i.PureComponent {
    getInviteText() {
        return (0, o.jW)({ location: 'invite_notice' }) ? p.NW.string(p.t.Sd8Ix8) : p.NW.string(p.t.BN75l5);
    }
    render() {
        let e = ''.concat(p.NW.string(p.t.VWqWZW), '\n').concat(p.NW.string(p.t['0Lgb/P'])),
            t = this.getInviteText();
        return (0, r.jsx)(c.Z, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: t,
            trackingSource: u.PsQ.INVITE_NOTICE,
            type: u.vID.INVITE,
            image: h,
            imageMarginX: 46
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'handleInvite', () => {
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
                                            f(e, t, n[t]);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l =
                                {
                                    guild: e,
                                    source: u.t4x.INVITE_NOTICE
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
            f(this, 'handleClose', () => {
                let e = s.Z.getChannelId(),
                    t = p.NW.formatToPlainString(p.t.DEn7np, { invitePeople: this.getInviteText() });
                this.props.markAsDismissed(d.L.UNKNOWN), null != e && a.Z.sendBotMessage(e, t);
            });
    }
}
let m = g;
