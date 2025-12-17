n.d(t, { Z: () => m });
var i = n(54381);
n(473749);
var r = n(481060),
    a = n(13245),
    s = n(371651),
    o = n(594174),
    l = n(145597),
    c = n(312839),
    d = n(981631),
    u = n(987650),
    f = n(388032),
    h = n(433461);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b() {
    return (0, i.jsx)("div", {
        className: h.footer,
        children: (0, i.jsx)(r.Button, {
            variant: "active",
            size: "sm",
            text: f.intl.string(f.t.U76Ft2),
            fullWidth: !0,
        }),
    });
}
function m(e) {
    switch (e.type) {
        case u.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: h } = e,
                { trackView: m, trackClick: y } = (0, c.R)(u.n0.GoLiveNudge, { notif_type: u.n0.GoLiveNudge });
            return {
                icon: n(847881),
                title: null,
                body: f.intl.formatToPlainString(f.t.z9znpa, {
                    game: t.name,
                    server: h.name,
                }),
                hint: () => (0, i.jsx)(b, {}),
                renderFooter: () => (0, i.jsx)(b, {}),
                onNotificationShow: () => {
                    m();
                },
                onNotificationClick: (e, t) => {
                    y("unlock");
                    let c = (0, l.getPID)();
                    a.Z.updateNotificationStatus(t);
                    let u = s.default.isOverlayOOPEnabledForPid(c);
                    if ((u ? a.Z.setInputLocked(!1, c) : a.Z.setInstanceLocked(!1), null == o.default.getCurrentUser()))
                        return;
                    let f = u ? { contextKey: r.u1M } : void 0;
                    (0, r.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("4093"), n.e("44183"), n.e("50442")]).then(
                            n.bind(n, 60594),
                        );
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                g(p({}, t), {
                                    sourcePID: c,
                                    selectSource: !1,
                                    guildId: h.id,
                                    analyticsLocation: d.Sbl.OVERLAY_NUDGE,
                                }),
                            );
                    }, f);
                },
                onDismissClick: () => {
                    y("dismiss");
                },
            };
        }
        case u.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: o, trackClick: h } = (0, c.R)(u.n0.GoLiveNonVoiceNudge, {
                    notif_type: u.n0.GoLiveNonVoiceNudge,
                });
            return {
                icon: n(847881),
                title: null,
                body: f.intl.formatToPlainString(f.t["0SVWgF"], { game: t.name }),
                hint: () => (0, i.jsx)(b, {}),
                renderFooter: () => (0, i.jsx)(b, {}),
                onNotificationShow: () => {
                    o();
                },
                onNotificationClick: (e, t) => {
                    h("unlock");
                    let o = (0, l.getPID)();
                    a.Z.updateNotificationStatus(t);
                    let c = s.default.isOverlayOOPEnabledForPid(o);
                    c ? a.Z.setInputLocked(!1, o) : a.Z.setInstanceLocked(!1);
                    let u = c ? { contextKey: r.u1M } : void 0;
                    (0, r.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("4093"), n.e("44183"), n.e("50442")]).then(
                            n.bind(n, 60594),
                        );
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                g(p({}, t), {
                                    sourcePID: o,
                                    selectSource: !1,
                                    selectGuild: !0,
                                    analyticsLocation: d.Sbl.OVERLAY_NUDGE,
                                }),
                            );
                    }, u);
                },
                onDismissClick: () => {
                    h("dismiss");
                },
            };
        }
    }
}
