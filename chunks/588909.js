n.d(t, { Z: () => O }), n(47120);
var i = n(200651);
n(192379);
var l = n(704215),
    r = n(952265),
    o = n(24124),
    a = n(13245),
    s = n(620662),
    d = n(835473),
    u = n(442550),
    c = n(605236),
    h = n(293273),
    _ = n(145597),
    p = n(32300),
    f = n(603618),
    m = n(380736),
    g = n(620954),
    v = n(987650),
    E = n(981631),
    x = n(602091),
    I = n(701488),
    C = n(388032),
    S = n(837449),
    Z = n(725083);
function y(e) {
    let { game: t } = e,
        n = (0, d.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(u.f, {
              src: n.getIconURL(I.Si.LARGE),
              size: 40
          });
}
function O(e, t) {
    let { trackView: d, trackClick: u } = (0, g.R)(v.n0.WelcomeNudge, {
            notif_type: v.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => v.nc[e.type])
        }),
        I = {};
    for (let l of t)
        switch (l.type) {
            case v.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? h.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? h.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, s.Z)(t, E.xjy.JOIN) &&
                    ((I.cancelText = C.intl.string(C.t['6F9ivr'])),
                    (I.onCancelClick = (e, n) => {
                        u('unlock'), a.Z.updateNotificationStatus(n), a.Z.setInputLocked(!1, (0, _.QF)()), (0, o.h7)(t, !1, E.IlC.POPOUT);
                    }));
                break;
            }
            case v.nc.GO_LIVE_VOICE:
            case v.nc.GO_LIVE_NON_VOICE:
                (I.confirmText = C.intl.string(C.t.U76Ft7)),
                    (I.onConfirmClick = (e, t) => {
                        u('unlock'),
                            a.Z.updateNotificationStatus(t),
                            a.Z.setInputLocked(!1, (0, _.QF)()),
                            (0, r.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('79477'), n.e('68723')]).then(n.bind(n, 60594));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            selectSource: !1,
                                            guildId: l.type === v.nc.GO_LIVE_VOICE ? l.voiceGuild.id : void 0,
                                            selectGuild: l.type === v.nc.GO_LIVE_NON_VOICE,
                                            analyticsLocation: E.Sbl.OVERLAY_NUDGE
                                        });
                                },
                                { contextKey: x.u1 }
                            );
                    });
                break;
            case v.nc.CONTENT_INVENTORY:
                (0, p.Rb)('welcomeNotification').allowActivityWidget &&
                    ((I.renderFooter = () =>
                        (0, i.jsx)('div', {
                            className: Z.container,
                            children: (0, i.jsx)(f.lX, {
                                gamingId: null == e ? void 0 : e.id,
                                maxUserShowCount: 5
                            })
                        })),
                    (I.onNotificationShow = () => {
                        a.Z.track(E.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: l.entries.map((e) => e.author_id),
                            entry_ids: l.entries.map((e) => e.id)
                        });
                    }));
        }
    let O = (0, c.un)(l.z.OVERLAY_OOP_WELCOME_NUX),
        N = null != e ? C.intl.format(C.t.bJ1QAQ, { gameName: e.name }) : C.intl.string(C.t.KWDIrq),
        b = null != e ? void 0 : C.intl.string(C.t.y7BLbm),
        T = O ? N : C.intl.string(C.t['prl+ra']),
        w = O ? b : C.intl.string(C.t.R3CpPT);
    return {
        icon:
            null != e
                ? (0, i.jsx)(y, { game: e })
                : (0, i.jsx)('img', {
                      src: n(328756),
                      className: S.icon,
                      alt: ''
                  }),
        title: null != e && O ? e.name : T,
        body: w,
        hint: () => (0, m.QR)((0, g.P)(), C.t.e6giBQ, C.intl.string(C.t.jZkzVF)),
        confirmText: O ? void 0 : C.intl.string(C.t.TxyTbm),
        onConfirmClick: O
            ? void 0
            : () => {
                  u('unlock'), a.Z.setInputLocked(!1, (0, _.QF)());
              },
        onNotificationShow: (e) => {
            var t;
            d(), null === (t = I.onNotificationShow) || void 0 === t || t.call(I, e), O || (0, c.EW)(l.z.OVERLAY_OOP_WELCOME_NUX);
        },
        onNotificationClick: () => {
            u('unlock'), a.Z.setInputLocked(!1, (0, _.QF)());
        },
        onDismissClick: () => {
            u('dismiss');
        },
        ...I
    };
}
