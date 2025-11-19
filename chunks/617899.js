n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(904245),
    s = n(340541),
    o = n(944486),
    c = n(82950),
    u = n(981631),
    d = n(921944),
    p = n(388032),
    f = n(589148);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class g extends i.PureComponent {
    getInviteText() {
        return (0, s.LK)({ location: "invite_notice" }).isGuildEntrypointEnabled
            ? p.intl.string(p.t.Sd8Ixw)
            : p.intl.string(p.t.BN75l9);
    }
    render() {
        let e = "".concat(p.intl.string(p.t.VWqWZQ), "\n").concat(p.intl.string(p.t["0Lgb/K"])),
            t = this.getInviteText();
        return (0, r.jsx)(c.Z, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: t,
            trackingSource: u.PsQ.INVITE_NOTICE,
            type: u.vID.INVITE,
            image: f,
            imageMarginX: 46,
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "handleInvite", () => {
                let { guild: e } = this.props;
                (0, l.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e("7654"), n.e("28297")]).then(n.bind(n, 560114));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            (function (e, t) {
                                return (
                                    (t = null != t ? t : {}),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(t)).forEach(function (n) {
                                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                          }),
                                    e
                                );
                            })(
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                h(e, t, n[t]);
                                            });
                                    }
                                    return e;
                                })({}, n),
                                {
                                    guild: e,
                                    source: u.t4x.INVITE_NOTICE,
                                },
                            ),
                        );
                });
            }),
            h(this, "handleClose", () => {
                let e = o.Z.getChannelId(),
                    t = p.intl.formatToPlainString(p.t.DEn7nu, { invitePeople: this.getInviteText() });
                this.props.markAsDismissed(d.L.UNKNOWN), null != e && a.Z.sendBotMessage(e, t);
            });
    }
}
let m = g;
