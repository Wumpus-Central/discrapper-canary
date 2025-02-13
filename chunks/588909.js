n.d(t, { Z: () => Z }), n(47120);
var i = n(200651);
n(192379);
var l = n(952265),
    r = n(24124),
    o = n(13245),
    a = n(620662),
    s = n(835473),
    d = n(442550),
    c = n(293273),
    u = n(145597),
    h = n(32300),
    _ = n(603618),
    p = n(380736),
    f = n(620954),
    g = n(987650),
    m = n(981631),
    v = n(602091),
    E = n(701488),
    I = n(388032),
    x = n(837449),
    C = n(725083);
function S(e) {
    let { game: t } = e,
        n = (0, s.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(d.f, {
              src: n.getIconURL(E.Si.LARGE),
              size: 40
          });
}
function Z(e, t) {
    let { trackView: s, trackClick: d } = (0, f.R)(g.n0.WelcomeNudge, {
            notif_type: g.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => g.nc[e.type])
        }),
        E = {};
    for (let s of t)
        switch (s.type) {
            case g.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? c.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? c.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, a.Z)(t, m.xjy.JOIN) &&
                    ((E.cancelText = I.intl.string(I.t['6F9ivr'])),
                    (E.onCancelClick = (e, n) => {
                        d('unlock'), o.Z.updateNotificationStatus(n), o.Z.setInputLocked(!1, (0, u.QF)()), (0, r.h7)(t, !1, m.IlC.POPOUT);
                    }));
                break;
            }
            case g.nc.GO_LIVE_VOICE:
            case g.nc.GO_LIVE_NON_VOICE:
                (E.confirmText = I.intl.string(I.t.U76Ft7)),
                    (E.onConfirmClick = (e, t) => {
                        d('unlock'),
                            o.Z.updateNotificationStatus(t),
                            o.Z.setInputLocked(!1, (0, u.QF)()),
                            (0, l.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('79477'), n.e('67266')]).then(n.bind(n, 60594));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            selectSource: !1,
                                            guildId: s.type === g.nc.GO_LIVE_VOICE ? s.voiceGuild.id : void 0,
                                            selectGuild: s.type === g.nc.GO_LIVE_NON_VOICE,
                                            analyticsLocation: m.Sbl.OVERLAY_NUDGE
                                        });
                                },
                                { contextKey: v.u1 }
                            );
                    });
                break;
            case g.nc.CONTENT_INVENTORY:
                (0, h.Rb)('welcomeNotification').allowActivityWidget &&
                    ((E.renderFooter = () =>
                        (0, i.jsx)('div', {
                            className: C.container,
                            children: (0, i.jsx)(_.lX, { gamingId: null == e ? void 0 : e.id })
                        })),
                    (E.onNotificationShow = () => {
                        o.Z.track(m.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: s.entries.map((e) => e.author_id),
                            entry_ids: s.entries.map((e) => e.id)
                        });
                    }));
        }
    return {
        icon:
            null != e
                ? (0, i.jsx)(S, { game: e })
                : (0, i.jsx)('img', {
                      src: n(328756),
                      className: x.icon,
                      alt: ''
                  }),
        title: null != e ? e.name : I.intl.string(I.t.pkXAeH),
        body: null,
        hint: () => (0, p.QR)((0, f.P)(), I.t.e6giBQ, I.intl.string(I.t.jZkzVF)),
        onNotificationShow: (e) => {
            var t;
            s(), null === (t = E.onNotificationShow) || void 0 === t || t.call(E, e);
        },
        onNotificationClick: () => {
            d('unlock'), o.Z.setInputLocked(!1, (0, u.QF)());
        },
        onDismissClick: () => {
            d('dismiss');
        },
        ...E
    };
}
