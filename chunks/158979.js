n.d(t, { Z: () => O });
var i = n(255367);
n(73800);
var r = n(755721),
    o = n(481060),
    l = n(13245),
    s = n(371651),
    a = n(594174),
    c = n(145597),
    d = n(312839),
    u = n(981631),
    h = n(987650),
    p = n(388032),
    f = n(926046);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function m(e, t) {
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
function y() {
    return (0, i.jsx)('div', {
        className: f.footer,
        children: (0, i.jsx)(r.zx, {
            color: r.zx.Colors.GREEN,
            size: r.zx.Sizes.SMALL,
            className: f.ctaButton,
            children: p.intl.string(p.t.U76Ft7)
        })
    });
}
function O(e) {
    switch (e.type) {
        case h.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: r } = e,
                { trackView: f, trackClick: O } = (0, d.R)(h.n0.GoLiveNudge, { notif_type: h.n0.GoLiveNudge });
            return {
                icon: n(847881),
                title: null,
                body: p.intl.formatToPlainString(p.t.z9znpa, {
                    game: t.name,
                    server: r.name
                }),
                hint: () => (0, i.jsx)(y, {}),
                renderFooter: () => (0, i.jsx)(y, {}),
                onNotificationShow: () => {
                    f();
                },
                onNotificationClick: (e, t) => {
                    (O('unlock'), l.Z.updateNotificationStatus(t));
                    let d = s.default.isOverlayOOPEnabledForPid((0, c.getPID)());
                    if ((d ? l.Z.setInputLocked(!1, (0, c.getPID)()) : l.Z.setInstanceLocked(!1), null == a.default.getCurrentUser())) return;
                    let h = d ? { contextKey: o.u1M } : void 0;
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                m(g({}, t), {
                                    sourcePID: (0, c.getPID)(),
                                    selectSource: !1,
                                    guildId: r.id,
                                    analyticsLocation: u.Sbl.OVERLAY_NUDGE
                                })
                            );
                    }, h);
                },
                onDismissClick: () => {
                    O('dismiss');
                }
            };
        }
        case h.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: r, trackClick: a } = (0, d.R)(h.n0.GoLiveNonVoiceNudge, { notif_type: h.n0.GoLiveNonVoiceNudge });
            return {
                icon: n(847881),
                title: null,
                body: p.intl.formatToPlainString(p.t['0SVWgI'], { game: t.name }),
                hint: () => (0, i.jsx)(y, {}),
                renderFooter: () => (0, i.jsx)(y, {}),
                onNotificationShow: () => {
                    r();
                },
                onNotificationClick: (e, t) => {
                    (a('unlock'), l.Z.updateNotificationStatus(t));
                    let r = s.default.isOverlayOOPEnabledForPid((0, c.getPID)());
                    r ? l.Z.setInputLocked(!1, (0, c.getPID)()) : l.Z.setInstanceLocked(!1);
                    let d = r ? { contextKey: o.u1M } : void 0;
                    (0, o.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                m(g({}, t), {
                                    sourcePID: (0, c.getPID)(),
                                    selectSource: !1,
                                    selectGuild: !0,
                                    analyticsLocation: u.Sbl.OVERLAY_NUDGE
                                })
                            );
                    }, d);
                },
                onDismissClick: () => {
                    a('dismiss');
                }
            };
        }
    }
}
