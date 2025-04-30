n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(704215),
    l = n(481060),
    a = n(570140),
    o = n(317770),
    s = n(605236),
    c = n(650774),
    u = n(430824),
    d = n(496675),
    p = n(228392),
    h = n(981631),
    f = n(921944);
let g = (e) => {
    var t;
    let n = u.Z.getGuild(e),
        r = !!(null == n ? void 0 : n.hasFeature(h.oNc.COMMUNITY)),
        l = d.Z.can(h.Plq.MANAGE_CHANNELS, n),
        a = (0, s.un)(i.z.FORUM_CHANNEL_UPSELL_MODAL),
        o = null != (t = c.Z.getMemberCount(e)) ? t : 0;
    return r && l && !a && o >= 200;
};
class m extends o.Z {
    _initialize() {
        a.Z.subscribe('CHANNEL_SELECT', this.handleChannelSelect);
    }
    _terminate() {
        a.Z.unsubscribe('CHANNEL_SELECT', this.handleChannelSelect);
    }
    handleChannelSelect(e) {
        let { guildId: t } = e;
        if (null == t || !g(t)) return;
        (0, p.qz)(), (0, s.kk)(i.z.FORUM_CHANNEL_UPSELL_MODAL);
        let a = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.L.DISMISS;
            (0, s.EW)(i.z.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: e });
        };
        (0, l.ZDy)(
            async () => {
                let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
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
                                shouldUpsellCreation: !0
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
            },
            {
                onCloseCallback: () => (0, s.EW)(i.z.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: f.L.DISMISS }),
                onCloseRequest: h.VqG
            }
        );
    }
}
let b = new m();
