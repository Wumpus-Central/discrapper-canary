n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(554146),
    l = n(397927),
    a = n(73153),
    s = n(272355),
    o = n(826673),
    c = n(367727),
    u = n(498642),
    d = n(71393),
    p = n(576705),
    f = n(853742),
    h = n(652215),
    A = n(49999);
class g extends s.A {
    _initialize() {
        a.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    _terminate() {
        a.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    handleChannelSelect(e) {
        var t;
        let a,
            s,
            g,
            m,
            b,
            { guildId: _ } = e;
        if (
            null == _ ||
            ((s = !!(null == (a = d.A.getGuild(_)) ? void 0 : a.features.has(h.GuildFeatures.COMMUNITY))),
            (g = p.A.can(h.xBc.MANAGE_CHANNELS, a)),
            (m = (0, o.k8)(i.M.FORUM_CHANNEL_UPSELL_MODAL)),
            (b = null != (t = u.A.getMemberCount(_)) ? t : 0),
            !s || !g || m || !(b >= 200))
        )
            return;
        (0, f.zd)(), (0, c.Vh)(i.M.FORUM_CHANNEL_UPSELL_MODAL);
        let E = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.i.DISMISS;
            (0, o.Dr)(i.M.FORUM_CHANNEL_UPSELL_MODAL, {
                dismissAction: e,
            });
        };
        (0, l.mMO)(
            async () => {
                let { default: e } = await n.e("7937").then(n.bind(n, 420472));
                return (t) => {
                    var n, i;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
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
                        })({}, t)),
                        (i = i =
                            {
                                onClose: (e) => {
                                    E(e), t.onClose();
                                },
                                guildId: _,
                                shouldUpsellCreation: !0,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n),
                    );
                };
            },
            {
                onCloseCallback: () =>
                    (0, o.Dr)(i.M.FORUM_CHANNEL_UPSELL_MODAL, {
                        dismissAction: A.i.DISMISS,
                    }),
                onCloseRequest: h.FXj,
            },
        );
    }
}
let m = new g();
