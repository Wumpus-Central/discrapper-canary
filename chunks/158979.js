n.d(t, { Z: () => y });
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(13245),
    o = n(371651),
    a = n(594174),
    l = n(145597),
    c = n(312839),
    d = n(981631),
    u = n(987650),
    h = n(388032),
    p = n(600554);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
    return (0, i.jsx)('div', {
        className: p.footer,
        children: (0, i.jsx)(r.zxk, {
            color: r.zxk.Colors.GREEN,
            size: r.zxk.Sizes.SMALL,
            className: p.ctaButton,
            children: h.NW.string(h.t.U76Ft7)
        })
    });
}
function y(e) {
    switch (e.type) {
        case u.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: p } = e,
                { trackView: y, trackClick: v } = (0, c.R)(u.n0.GoLiveNudge, { notif_type: u.n0.GoLiveNudge });
            return {
                icon: n(847881),
                title: null,
                body: h.NW.formatToPlainString(h.t.z9znpa, {
                    game: t.name,
                    server: p.toString()
                }),
                hint: () => (0, i.jsx)(m, {}),
                renderFooter: () => (0, i.jsx)(m, {}),
                onNotificationShow: () => {
                    y();
                },
                onNotificationClick: (e, t) => {
                    v('unlock'), s.Z.updateNotificationStatus(t);
                    let c = o.default.isOverlayOOPEnabledForPid((0, l.getPID)());
                    if ((c ? s.Z.setInputLocked(!1, (0, l.getPID)()) : s.Z.setInstanceLocked(!1), null == a.default.getCurrentUser())) return;
                    let u = c ? { contextKey: r.u1M } : void 0;
                    (0, r.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                g(f({}, t), {
                                    sourcePID: (0, l.getPID)(),
                                    selectSource: !1,
                                    guildId: p.id,
                                    analyticsLocation: d.Sbl.OVERLAY_NUDGE
                                })
                            );
                    }, u);
                },
                onDismissClick: () => {
                    v('dismiss');
                }
            };
        }
        case u.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: a, trackClick: p } = (0, c.R)(u.n0.GoLiveNonVoiceNudge, { notif_type: u.n0.GoLiveNonVoiceNudge });
            return {
                icon: n(847881),
                title: null,
                body: h.NW.formatToPlainString(h.t['0SVWgI'], { game: t.name }),
                hint: () => (0, i.jsx)(m, {}),
                renderFooter: () => (0, i.jsx)(m, {}),
                onNotificationShow: () => {
                    a();
                },
                onNotificationClick: (e, t) => {
                    p('unlock'), s.Z.updateNotificationStatus(t);
                    let a = o.default.isOverlayOOPEnabledForPid((0, l.getPID)());
                    a ? s.Z.setInputLocked(!1, (0, l.getPID)()) : s.Z.setInstanceLocked(!1);
                    let c = a ? { contextKey: r.u1M } : void 0;
                    (0, r.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                g(f({}, t), {
                                    sourcePID: (0, l.getPID)(),
                                    selectSource: !1,
                                    selectGuild: !0,
                                    analyticsLocation: d.Sbl.OVERLAY_NUDGE
                                })
                            );
                    }, c);
                },
                onDismissClick: () => {
                    p('dismiss');
                }
            };
        }
    }
}
