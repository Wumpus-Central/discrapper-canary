i.d(e, {
    Z: function () {
        return O;
    }
}),
    i(47120);
var n = i(200651);
i(192379);
var l = i(952265),
    o = i(24124),
    r = i(13245),
    s = i(620662),
    a = i(835473),
    u = i(442550),
    d = i(293273),
    c = i(145597),
    h = i(603618),
    E = i(380736),
    p = i(620954),
    f = i(987650),
    S = i(981631),
    _ = i(602091),
    g = i(701488),
    m = i(388032),
    v = i(176463),
    I = i(802334);
function Z(t) {
    let { game: e } = t,
        i = (0, a.q)(e.id);
    return null == i
        ? null
        : (0, n.jsx)(u.f, {
              src: i.getIconURL(g.Si.LARGE),
              size: 40
          });
}
function O(t, e) {
    let { trackView: a, trackClick: u } = (0, p.R)(f.n0.WelcomeNudge, { notif_type: f.n0.WelcomeNudge }),
        g = {};
    for (let a of e)
        switch (a.type) {
            case f.nc.WELCOME: {
                let e = (null == t ? void 0 : t.altId) != null ? d.Z.getApplicationActivity(t.altId) : (null == t ? void 0 : t.id) != null ? d.Z.getApplicationActivity(t.id) : null;
                null != e &&
                    (0, s.Z)(e, S.xjy.JOIN) &&
                    ((g.cancelText = m.intl.string(m.t['6F9ivr'])),
                    (g.onCancelClick = (t, i) => {
                        u('unlock'), r.Z.updateNotificationStatus(i), r.Z.setInputLocked(!1, (0, c.QF)()), (0, o.h7)(e, !1, S.IlC.POPOUT);
                    }));
                break;
            }
            case f.nc.GO_LIVE_VOICE:
            case f.nc.GO_LIVE_NON_VOICE:
                (g.confirmText = m.intl.string(m.t.U76Ft7)),
                    (g.onConfirmClick = (t, e) => {
                        u('unlock'),
                            r.Z.updateNotificationStatus(e),
                            r.Z.setInputLocked(!1, (0, c.QF)()),
                            (0, l.ZD)(
                                async () => {
                                    let { default: t } = await Promise.all([i.e('93382'), i.e('79477'), i.e('90242')]).then(i.bind(i, 60594));
                                    return (e) =>
                                        (0, n.jsx)(t, {
                                            ...e,
                                            selectSource: !1,
                                            guildId: a.type === f.nc.GO_LIVE_VOICE ? a.voiceGuild.id : void 0,
                                            selectGuild: a.type === f.nc.GO_LIVE_NON_VOICE,
                                            analyticsLocation: S.Sbl.OVERLAY_NUDGE
                                        });
                                },
                                { contextKey: _.u1 }
                            );
                    });
                break;
            case f.nc.CONTENT_INVENTORY:
                (g.renderFooter = () =>
                    (0, n.jsx)('div', {
                        className: I.container,
                        children: (0, n.jsx)(h.i, { entries: a.entries })
                    })),
                    (g.onNotificationShow = () => {
                        r.Z.track(S.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: a.entries.map((t) => t.author_id),
                            entry_ids: a.entries.map((t) => t.id)
                        });
                    });
        }
    return {
        icon:
            null != t
                ? (0, n.jsx)(Z, { game: t })
                : (0, n.jsx)('img', {
                      src: i(328756),
                      className: v.icon,
                      alt: ''
                  }),
        title: null != t ? t.name : m.intl.string(m.t.pkXAeH),
        body: null,
        hint: () => (0, E.QR)((0, p.P)(), m.t.e6giBQ, m.intl.string(m.t.jZkzVF)),
        onNotificationShow: (t) => {
            var e;
            a(), null === (e = g.onNotificationShow) || void 0 === e || e.call(g, t);
        },
        onNotificationClick: () => {
            u('unlock'), r.Z.setInputLocked(!1, (0, c.QF)());
        },
        onDismissClick: () => {
            u('dismiss');
        },
        ...g
    };
}
