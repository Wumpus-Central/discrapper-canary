n.d(t, { Z: () => y });
var i = n(54381);
n(473749);
var r = n(481060),
    o = n(13245),
    l = n(371651),
    s = n(594174),
    a = n(145597),
    c = n(312839),
    d = n(981631),
    u = n(987650),
    h = n(388032),
    p = n(599330);
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
        className: p.footer,
        children: (0, i.jsx)(r.Button, {
            variant: "active",
            size: "sm",
            text: h.intl.string(h.t.U76Ft2),
            fullWidth: !0,
        }),
    });
}
function y(e) {
    switch (e.type) {
        case u.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: p } = e,
                { trackView: y, trackClick: b } = (0, c.R)(u.n0.GoLiveNudge, { notif_type: u.n0.GoLiveNudge });
            return {
                icon: n(847881),
                title: null,
                body: h.intl.formatToPlainString(h.t.z9znpa, {
                    game: t.name,
                    server: p.name,
                }),
                hint: () => (0, i.jsx)(m, {}),
                renderFooter: () => (0, i.jsx)(m, {}),
                onNotificationShow: () => {
                    y();
                },
                onNotificationClick: (e, t) => {
                    b("unlock");
                    let c = (0, a.getPID)();
                    o.Z.updateNotificationStatus(t);
                    let u = l.default.isOverlayOOPEnabledForPid(c);
                    if ((u ? o.Z.setInputLocked(!1, c) : o.Z.setInstanceLocked(!1), null == s.default.getCurrentUser()))
                        return;
                    let h = u ? { contextKey: r.u1M } : void 0;
                    (0, r.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("4093"), n.e("33840"), n.e("33641")]).then(
                            n.bind(n, 60594),
                        );
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                g(f({}, t), {
                                    sourcePID: c,
                                    selectSource: !1,
                                    guildId: p.id,
                                    analyticsLocation: d.Sbl.OVERLAY_NUDGE,
                                }),
                            );
                    }, h);
                },
                onDismissClick: () => {
                    b("dismiss");
                },
            };
        }
        case u.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: s, trackClick: p } = (0, c.R)(u.n0.GoLiveNonVoiceNudge, {
                    notif_type: u.n0.GoLiveNonVoiceNudge,
                });
            return {
                icon: n(847881),
                title: null,
                body: h.intl.formatToPlainString(h.t["0SVWgF"], { game: t.name }),
                hint: () => (0, i.jsx)(m, {}),
                renderFooter: () => (0, i.jsx)(m, {}),
                onNotificationShow: () => {
                    s();
                },
                onNotificationClick: (e, t) => {
                    p("unlock");
                    let s = (0, a.getPID)();
                    o.Z.updateNotificationStatus(t);
                    let c = l.default.isOverlayOOPEnabledForPid(s);
                    c ? o.Z.setInputLocked(!1, s) : o.Z.setInstanceLocked(!1);
                    let u = c ? { contextKey: r.u1M } : void 0;
                    (0, r.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("4093"), n.e("33840"), n.e("33641")]).then(
                            n.bind(n, 60594),
                        );
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                g(f({}, t), {
                                    sourcePID: s,
                                    selectSource: !1,
                                    selectGuild: !0,
                                    analyticsLocation: d.Sbl.OVERLAY_NUDGE,
                                }),
                            );
                    }, u);
                },
                onDismissClick: () => {
                    p("dismiss");
                },
            };
        }
    }
}
