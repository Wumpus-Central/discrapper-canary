n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(704215),
    l = n(481060),
    a = n(570140),
    s = n(317770),
    o = n(266454),
    c = n(605236),
    u = n(650774),
    d = n(430824),
    p = n(496675),
    f = n(228392),
    h = n(981631),
    g = n(921944);
class m extends s.Z {
    _initialize() {
        a.Z.subscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    _terminate() {
        a.Z.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    handleChannelSelect(e) {
        let { guildId: t } = e;
        if (
            null == t ||
            !((e) => {
                var t;
                let n = d.Z.getGuild(e),
                    r = !!(null == n ? void 0 : n.features.has(h.GuildFeatures.COMMUNITY)),
                    l = p.Z.can(h.Plq.MANAGE_CHANNELS, n),
                    a = (0, o.zu)(i.z.FORUM_CHANNEL_UPSELL_MODAL),
                    s = null != (t = u.Z.getMemberCount(e)) ? t : 0;
                return r && l && !a && s >= 200;
            })(t)
        )
            return;
        (0, f.qz)(), (0, c.kk)(i.z.FORUM_CHANNEL_UPSELL_MODAL);
        let a = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.L.DISMISS;
            (0, o.Q3)(i.z.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: e });
        };
        (0, l.ZDy)(
            async () => {
                let { default: e } = await n.e("18417").then(n.bind(n, 740696));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                onClose: (e) => {
                                    a(e), n.onClose();
                                },
                                guildId: t,
                                shouldUpsellCreation: !0,
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
                        i),
                    );
                };
            },
            {
                onCloseCallback: () => (0, o.Q3)(i.z.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: g.L.DISMISS }),
                onCloseRequest: h.VqG,
            },
        );
    }
}
let _ = new m();
