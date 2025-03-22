n.d(t, { Z: () => Z }), n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
    l = n(952265),
    o = n(24124),
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
    O = n(620954),
    v = n(987650),
    y = n(981631),
    E = n(602091),
    b = n(701488),
    j = n(388032),
    x = n(563797),
    I = n(101646);
function S(e) {
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
function N(e, t) {
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
function C(e) {
    let { game: t } = e,
        n = (0, c.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(u.f, {
              src: n.getIconURL(b.Si.LARGE),
              size: 40
          });
}
function Z(e, t) {
    let { trackView: c, trackClick: u } = (0, O.R)(v.n0.WelcomeNudge, {
            notif_type: v.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => v.nc[e.type])
        }),
        b = {};
    for (let r of t)
        switch (r.type) {
            case v.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? p.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? p.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, s.Z)(t, y.xjy.JOIN) &&
                    ((b.cancelText = j.NW.string(j.t['6F9ivr'])),
                    (b.onCancelClick = (e, n) => {
                        u('unlock'), a.Z.updateNotificationStatus(n), a.Z.setInputLocked(!1, (0, h.getPID)()), (0, o.h7)(t, !1, y.IlC.POPOUT);
                    }));
                break;
            }
            case v.nc.GO_LIVE_VOICE:
            case v.nc.GO_LIVE_NON_VOICE:
                (b.confirmText = j.NW.string(j.t.U76Ft7)),
                    (b.onConfirmClick = (e, t) => {
                        u('unlock'),
                            a.Z.updateNotificationStatus(t),
                            a.Z.setInputLocked(!1, (0, h.getPID)()),
                            (0, l.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('46746'), n.e('28965')]).then(n.bind(n, 60594));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            N(S({}, t), {
                                                selectSource: !1,
                                                sourcePID: (0, h.getPID)(),
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
                (0, f.Rb)('welcomeNotification').allowActivityWidget &&
                    ((b.renderFooter = () =>
                        (0, i.jsx)(m.lX, {
                            gamingId: null == e ? void 0 : e.id,
                            maxUserShowCount: 5,
                            className: I.container
                        })),
                    (b.onNotificationShow = () => {
                        a.Z.track(y.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: r.entries.map((e) => e.author_id),
                            entry_ids: r.entries.map((e) => e.id)
                        });
                    }));
        }
    let Z = (0, d.un)(r.z.OVERLAY_OOP_WELCOME_NUX),
        w = Z ? j.NW.string(j.t.KWDIrq) : j.NW.string(j.t['prl+ra']),
        P = Z ? void 0 : j.NW.string(j.t.R3CpPT),
        _ =
            null != e
                ? (0, i.jsx)(C, { game: e })
                : (0, i.jsx)('img', {
                      src: n(328756),
                      className: x.icon,
                      alt: ''
                  });
    return N(
        S(
            {
                icon: _,
                title: w,
                body: P,
                hint: () => (0, g.Q)((0, O.P)(), j.t['z8/sgI'], j.NW.string(j.t.jZkzVF)),
                confirmText: Z ? void 0 : j.NW.string(j.t.TxyTbm),
                onConfirmClick: Z
                    ? void 0
                    : () => {
                          u('unlock'), a.Z.setInputLocked(!1, (0, h.getPID)()), Z || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX);
                      }
            },
            b
        ),
        {
            onNotificationShow: (e) => {
                var t;
                c(), Z || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX), null === (t = b.onNotificationShow) || void 0 === t || t.call(b, e);
            },
            onNotificationClick: (e, t) => {
                var n;
                u('unlock'), a.Z.setInputLocked(!1, (0, h.getPID)()), Z || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX), null === (n = b.onNotificationClick) || void 0 === n || n.call(b, e, t);
            },
            onDismissClick: (e, t) => {
                var n;
                u('dismiss'), Z || (0, d.EW)(r.z.OVERLAY_OOP_WELCOME_NUX), null === (n = b.onDismissClick) || void 0 === n || n.call(b, e, t);
            }
        }
    );
}
