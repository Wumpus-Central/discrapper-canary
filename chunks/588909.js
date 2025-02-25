n.d(t, { Z: () => Z }), n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
    o = n(952265),
    l = n(24124),
    s = n(13245),
    a = n(620662),
    u = n(835473),
    c = n(442550),
    d = n(605236),
    p = n(293273),
    h = n(145597),
    f = n(32300),
    m = n(603618),
    g = n(380736),
    O = n(620954),
    v = n(987650),
    y = n(981631),
    E = n(602091),
    b = n(701488),
    x = n(388032),
    j = n(825499),
    S = n(361777);
function I(e) {
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
function C(e) {
    let { game: t } = e,
        n = (0, u.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(c.f, {
              src: n.getIconURL(b.Si.LARGE),
              size: 40
          });
}
function Z(e, t) {
    let { trackView: u, trackClick: c } = (0, O.R)(v.n0.WelcomeNudge, {
            notif_type: v.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => v.nc[e.type])
        }),
        b = {};
    for (let r of t)
        switch (r.type) {
            case v.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? p.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? p.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, a.Z)(t, y.xjy.JOIN) &&
                    ((b.cancelText = x.NW.string(x.t['6F9ivr'])),
                    (b.onCancelClick = (e, n) => {
                        c('unlock'), s.Z.updateNotificationStatus(n), s.Z.setInputLocked(!1, (0, h.QF)()), (0, l.h7)(t, !1, y.IlC.POPOUT);
                    }));
                break;
            }
            case v.nc.GO_LIVE_VOICE:
            case v.nc.GO_LIVE_NON_VOICE:
                (b.confirmText = x.NW.string(x.t.U76Ft7)),
                    (b.onConfirmClick = (e, t) => {
                        c('unlock'),
                            s.Z.updateNotificationStatus(t),
                            s.Z.setInputLocked(!1, (0, h.QF)()),
                            (0, o.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('79477'), n.e('53175')]).then(n.bind(n, 60594));
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
                                            })(I({}, t), {
                                                selectSource: !1,
                                                sourcePID: (0, h.QF)(),
                                                guildId: r.type === v.nc.GO_LIVE_VOICE ? r.voiceGuild.id : void 0,
                                                selectGuild: r.type === v.nc.GO_LIVE_NON_VOICE,
                                                analyticsLocation: y.Sbl.OVERLAY_NUDGE
                                            })
                                        );
                                },
                                { contextKey: E.u1 }
                            );
                    });
                break;
            case v.nc.CONTENT_INVENTORY:
                if ((0, f.Rb)('welcomeNotification').allowActivityWidget) {
                    b.renderFooter = () =>
                        (0, i.jsx)('div', {
                            className: S.container,
                            children: (0, i.jsx)(m.lX, {
                                gamingId: null == e ? void 0 : e.id,
                                maxUserShowCount: 5
                            })
                        });
                    let t = b.onNotificationShow;
                    b.onNotificationShow = (e) => {
                        s.Z.track(y.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: r.entries.map((e) => e.author_id),
                            entry_ids: r.entries.map((e) => e.id)
                        }),
                            null == t || t(e);
                    };
                }
        }
    let Z = (0, d.un)(r.z.OVERLAY_OOP_WELCOME_NUX),
        N = null != e ? x.NW.format(x.t.bJ1QAQ, { gameName: e.name }) : x.NW.string(x.t.KWDIrq),
        w = null != e ? void 0 : x.NW.string(x.t.y7BLbm),
        _ = Z ? N : x.NW.string(x.t['prl+ra']),
        P = Z ? w : x.NW.string(x.t.R3CpPT);
    return I(
        {
            icon:
                null != e
                    ? (0, i.jsx)(C, { game: e })
                    : (0, i.jsx)('img', {
                          src: n(328756),
                          className: j.icon,
                          alt: ''
                      }),
            title: null != e && Z ? e.name : _,
            body: P,
            hint: () => (0, g.QR)((0, O.P)(), x.t.e6giBQ, x.NW.string(x.t.jZkzVF)),
            confirmText: Z ? void 0 : x.NW.string(x.t.TxyTbm),
            onConfirmClick: Z
                ? void 0
                : () => {
                      c('unlock'), s.Z.setInputLocked(!1, (0, h.QF)());
                  },
            onNotificationShow: (e) => {
                var t;
                u(), null === (t = b.onNotificationShow) || void 0 === t || t.call(b, e), Z || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX);
            },
            onNotificationClick: () => {
                c('unlock'), s.Z.setInputLocked(!1, (0, h.QF)());
            },
            onDismissClick: () => {
                c('dismiss');
            }
        },
        b
    );
}
