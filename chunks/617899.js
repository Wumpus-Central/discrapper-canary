n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(904245),
    s = n(944486),
    o = n(82950),
    c = n(981631),
    u = n(921944),
    d = n(388032),
    p = n(589148);
function f(e, t, n) {
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
    render() {
        let e = "".concat(d.intl.string(d.t.VWqWZQ), "\n").concat(d.intl.string(d.t["0Lgb/K"]));
        return (0, r.jsx)(o.Z, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: d.intl.string(d.t.Sd8Ixw),
            trackingSource: c.PsQ.INVITE_NOTICE,
            type: c.vID.INVITE,
            image: p,
            imageMarginX: 46,
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "handleInvite", () => {
                let { guild: e } = this.props;
                (0, l.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
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
                                                f(e, t, n[t]);
                                            });
                                    }
                                    return e;
                                })({}, n),
                                {
                                    guild: e,
                                    source: c.t4x.INVITE_NOTICE,
                                },
                            ),
                        );
                });
            }),
            f(this, "handleClose", () => {
                let e = s.Z.getChannelId(),
                    t = d.intl.formatToPlainString(d.t.DEn7nu, { invitePeople: d.intl.string(d.t.Sd8Ixw) });
                this.props.markAsDismissed(u.L.UNKNOWN), null != e && a.Z.sendBotMessage(e, t);
            });
    }
}
let h = g;
