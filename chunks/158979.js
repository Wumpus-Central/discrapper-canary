n.d(t, { Z: () => y });
var i = n(951288);
n(647438);
var r = n(481060),
    s = n(13245),
    o = n(371651),
    l = n(594174),
    a = n(145597),
    c = n(312839),
    d = n(981631),
    u = n(987650),
    p = n(388032),
    h = n(653773);
function f(e) {
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
function m() {
    return (0, i.jsx)("div", {
        className: h.footer,
        children: (0, i.jsx)(r.Button, {
            variant: "active",
            size: "sm",
            text: p.intl.string(p.t.U76Ft2),
            fullWidth: !0,
        }),
    });
}
function y(e) {
    switch (e.type) {
        case u.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: h } = e,
                { trackView: y, trackClick: _ } = (0, c.R)(u.n0.GoLiveNudge, { notif_type: u.n0.GoLiveNudge });
            return {
                icon: n(847881),
                title: null,
                body: p.intl.formatToPlainString(p.t.z9znpa, {
                    game: t.name,
                    server: h.name,
                }),
                hint: () => (0, i.jsx)(m, {}),
                renderFooter: () => (0, i.jsx)(m, {}),
                onNotificationShow: () => {
                    y();
                },
                onNotificationClick: (e, t) => {
                    _("unlock"), s.Z.updateNotificationStatus(t);
                    let c = o.default.isOverlayOOPEnabledForPid((0, a.getPID)());
                    if (
                        (c ? s.Z.setInputLocked(!1, (0, a.getPID)()) : s.Z.setInstanceLocked(!1),
                        null == l.default.getCurrentUser())
                    )
                        return;
                    let u = c ? { contextKey: r.u1M } : void 0;
                    (0, r.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("4093"), n.e("47863"), n.e("33641")]).then(
                            n.bind(n, 60594),
                        );
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                g(f({}, t), {
                                    sourcePID: (0, a.getPID)(),
                                    selectSource: !1,
                                    guildId: h.id,
                                    analyticsLocation: d.Sbl.OVERLAY_NUDGE,
                                }),
                            );
                    }, u);
                },
                onDismissClick: () => {
                    _("dismiss");
                },
            };
        }
        case u.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: l, trackClick: h } = (0, c.R)(u.n0.GoLiveNonVoiceNudge, {
                    notif_type: u.n0.GoLiveNonVoiceNudge,
                });
            return {
                icon: n(847881),
                title: null,
                body: p.intl.formatToPlainString(p.t["0SVWgF"], { game: t.name }),
                hint: () => (0, i.jsx)(m, {}),
                renderFooter: () => (0, i.jsx)(m, {}),
                onNotificationShow: () => {
                    l();
                },
                onNotificationClick: (e, t) => {
                    h("unlock"), s.Z.updateNotificationStatus(t);
                    let l = o.default.isOverlayOOPEnabledForPid((0, a.getPID)());
                    l ? s.Z.setInputLocked(!1, (0, a.getPID)()) : s.Z.setInstanceLocked(!1);
                    let c = l ? { contextKey: r.u1M } : void 0;
                    (0, r.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("4093"), n.e("47863"), n.e("33641")]).then(
                            n.bind(n, 60594),
                        );
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                g(f({}, t), {
                                    sourcePID: (0, a.getPID)(),
                                    selectSource: !1,
                                    selectGuild: !0,
                                    analyticsLocation: d.Sbl.OVERLAY_NUDGE,
                                }),
                            );
                    }, c);
                },
                onDismissClick: () => {
                    h("dismiss");
                },
            };
        }
    }
}
