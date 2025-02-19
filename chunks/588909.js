n.d(t, { Z: () => j }), n(47120);
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
    f = n(145597),
    h = n(32300),
    g = n(603618),
    _ = n(380736),
    m = n(620954),
    v = n(987650),
    O = n(981631),
    b = n(602091),
    y = n(701488),
    E = n(388032),
    x = n(825499),
    S = n(361777);
function C(e) {
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
function I(e) {
    let { game: t } = e,
        n = (0, c.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(u.f, {
              src: n.getIconURL(y.Si.LARGE),
              size: 40
          });
}
function j(e, t) {
    let { trackView: c, trackClick: u } = (0, m.R)(v.n0.WelcomeNudge, {
            notif_type: v.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => v.nc[e.type])
        }),
        y = {};
    for (let r of t)
        switch (r.type) {
            case v.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? p.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? p.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, s.Z)(t, O.xjy.JOIN) &&
                    ((y.cancelText = E.NW.string(E.t['6F9ivr'])),
                    (y.onCancelClick = (e, n) => {
                        u('unlock'), a.Z.updateNotificationStatus(n), a.Z.setInputLocked(!1, (0, f.QF)()), (0, l.h7)(t, !1, O.IlC.POPOUT);
                    }));
                break;
            }
            case v.nc.GO_LIVE_VOICE:
            case v.nc.GO_LIVE_NON_VOICE:
                (y.confirmText = E.NW.string(E.t.U76Ft7)),
                    (y.onConfirmClick = (e, t) => {
                        u('unlock'),
                            a.Z.updateNotificationStatus(t),
                            a.Z.setInputLocked(!1, (0, f.QF)()),
                            (0, o.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('79477'), n.e('17923')]).then(n.bind(n, 60594));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            (function (e, t) {
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
                                            })(C({}, t), {
                                                selectSource: !1,
                                                guildId: r.type === v.nc.GO_LIVE_VOICE ? r.voiceGuild.id : void 0,
                                                selectGuild: r.type === v.nc.GO_LIVE_NON_VOICE,
                                                analyticsLocation: O.Sbl.OVERLAY_NUDGE
                                            })
                                        );
                                },
                                { contextKey: b.u1 }
                            );
                    });
                break;
            case v.nc.CONTENT_INVENTORY:
                if ((0, h.Rb)('welcomeNotification').allowActivityWidget) {
                    y.renderFooter = () =>
                        (0, i.jsx)('div', {
                            className: S.container,
                            children: (0, i.jsx)(g.lX, {
                                gamingId: null == e ? void 0 : e.id,
                                maxUserShowCount: 5
                            })
                        });
                    let t = y.onNotificationShow;
                    y.onNotificationShow = (e) => {
                        a.Z.track(O.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: r.entries.map((e) => e.author_id),
                            entry_ids: r.entries.map((e) => e.id)
                        }),
                            null == t || t(e);
                    };
                }
        }
    let j = (0, d.un)(r.z.OVERLAY_OOP_WELCOME_NUX),
        w = null != e ? E.NW.format(E.t.bJ1QAQ, { gameName: e.name }) : E.NW.string(E.t.KWDIrq),
        Z = null != e ? void 0 : E.NW.string(E.t.y7BLbm),
        N = j ? w : E.NW.string(E.t['prl+ra']),
        P = j ? Z : E.NW.string(E.t.R3CpPT);
    return C(
        {
            icon:
                null != e
                    ? (0, i.jsx)(I, { game: e })
                    : (0, i.jsx)('img', {
                          src: n(328756),
                          className: x.icon,
                          alt: ''
                      }),
            title: null != e && j ? e.name : N,
            body: P,
            hint: () => (0, _.QR)((0, m.P)(), E.t.e6giBQ, E.NW.string(E.t.jZkzVF)),
            confirmText: j ? void 0 : E.NW.string(E.t.TxyTbm),
            onConfirmClick: j
                ? void 0
                : () => {
                      u('unlock'), a.Z.setInputLocked(!1, (0, f.QF)());
                  },
            onNotificationShow: (e) => {
                var t;
                c(), null === (t = y.onNotificationShow) || void 0 === t || t.call(y, e), j || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX);
            },
            onNotificationClick: () => {
                u('unlock'), a.Z.setInputLocked(!1, (0, f.QF)());
            },
            onDismissClick: () => {
                u('dismiss');
            }
        },
        y
    );
}
