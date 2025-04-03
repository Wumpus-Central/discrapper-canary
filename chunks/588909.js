n.d(t, { Z: () => N }), n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
    o = n(952265),
    l = n(24124),
    a = n(13245),
    s = n(620662),
    c = n(835473),
    u = n(442550),
    d = n(605236),
    p = n(293273),
    h = n(145597),
    f = n(32300),
    m = n(603618),
    g = n(618373),
    y = n(620954),
    O = n(987650),
    v = n(981631),
    b = n(602091),
    _ = n(701488),
    E = n(388032),
    x = n(560226),
    I = n(19782);
function j(e) {
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
function C(e, t) {
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
function S(e) {
    let { game: t } = e,
        n = (0, c.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(u.f, {
              src: n.getIconURL(_.Si.LARGE),
              size: 40
          });
}
function N(e, t) {
    let { trackView: c, trackClick: u } = (0, y.R)(O.n0.WelcomeNudge, {
            notif_type: O.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => O.nc[e.type])
        }),
        _ = {};
    for (let r of t)
        switch (r.type) {
            case O.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? p.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? p.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, s.Z)(t, v.xjy.JOIN) &&
                    ((_.cancelText = E.NW.string(E.t['6F9ivr'])),
                    (_.onCancelClick = (e, n) => {
                        u('unlock'), a.Z.updateNotificationStatus(n), a.Z.setInputLocked(!1, (0, h.getPID)()), (0, l.h7)(t, !1, v.IlC.POPOUT);
                    }));
                break;
            }
            case O.nc.GO_LIVE_VOICE:
            case O.nc.GO_LIVE_NON_VOICE:
                (_.confirmText = E.NW.string(E.t.U76Ft7)),
                    (_.onConfirmClick = (e, t) => {
                        u('unlock'),
                            a.Z.updateNotificationStatus(t),
                            a.Z.setInputLocked(!1, (0, h.getPID)()),
                            (0, o.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('46746'), n.e('28965')]).then(n.bind(n, 60594));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            C(j({}, t), {
                                                selectSource: !1,
                                                sourcePID: (0, h.getPID)(),
                                                guildId: r.type === O.nc.GO_LIVE_VOICE ? r.voiceGuild.id : void 0,
                                                selectGuild: r.type === O.nc.GO_LIVE_NON_VOICE,
                                                analyticsLocation: v.Sbl.OVERLAY_NUDGE
                                            })
                                        );
                                },
                                { contextKey: b.u1 }
                            );
                    });
                break;
            case O.nc.CONTENT_INVENTORY:
                (0, f.Rb)('welcomeNotification').allowActivityWidget &&
                    ((_.renderFooter = () =>
                        (0, i.jsx)(m.lX, {
                            gamingId: null == e ? void 0 : e.id,
                            maxUserShowCount: 5,
                            className: I.container
                        })),
                    (_.onNotificationShow = () => {
                        a.Z.track(v.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: r.entries.map((e) => e.author_id),
                            entry_ids: r.entries.map((e) => e.id)
                        });
                    }));
        }
    let N = (0, d.un)(r.z.OVERLAY_OOP_WELCOME_NUX),
        Z = N ? E.NW.string(E.t.KWDIrq) : E.NW.string(E.t['prl+ra']),
        w = N ? void 0 : E.NW.string(E.t.R3CpPT),
        P =
            null != e
                ? (0, i.jsx)(S, { game: e })
                : (0, i.jsx)('img', {
                      src: n(328756),
                      className: x.icon,
                      alt: ''
                  });
    return C(
        j(
            {
                icon: P,
                title: Z,
                body: w,
                hint: () => (0, g.Q)((0, y.P)(), E.t['z8/sgI'], E.NW.string(E.t.jZkzVF), !0),
                confirmText: N ? void 0 : E.NW.string(E.t.TxyTbm),
                onConfirmClick: N
                    ? void 0
                    : () => {
                          u('unlock'), a.Z.setInputLocked(!1, (0, h.getPID)()), N || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX);
                      }
            },
            _
        ),
        {
            onNotificationShow: (e) => {
                var t;
                c(), N || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (t = _.onNotificationShow) || t.call(_, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                u('unlock'), a.Z.setInputLocked(!1, (0, h.getPID)()), N || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (n = _.onNotificationClick) || n.call(_, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                u('dismiss'), N || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (n = _.onDismissClick) || n.call(_, e, t);
            }
        }
    );
}
