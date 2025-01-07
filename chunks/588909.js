i.d(t, {
    Z: function () {
        return O;
    }
}),
    i(47120);
var n = i(200651);
i(192379);
var l = i(952265),
    o = i(24124),
    s = i(13245),
    r = i(620662),
    a = i(835473),
    u = i(442550),
    d = i(293273),
    c = i(145597),
    h = i(603618),
    f = i(380736),
    p = i(620954),
    E = i(987650),
    m = i(981631),
    v = i(602091),
    g = i(701488),
    S = i(388032),
    _ = i(176463),
    Z = i(802334);
function C(e) {
    let { game: t } = e,
        i = (0, a.q)(t.id);
    return null == i
        ? null
        : (0, n.jsx)(u.f, {
              src: i.getIconURL(g.Si.LARGE),
              size: 40
          });
}
function O(e, t) {
    let { trackView: a, trackClick: u } = (0, p.R)(E.n0.WelcomeNudge, { notif_type: E.n0.WelcomeNudge }),
        g = {};
    for (let a of t)
        switch (a.type) {
            case E.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? d.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? d.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, r.Z)(t, m.xjy.JOIN) &&
                    ((g.cancelText = S.intl.string(S.t['6F9ivr'])),
                    (g.onCancelClick = (e, i) => {
                        u('unlock'), s.Z.updateNotificationStatus(i), s.Z.setInputLocked(!1, (0, c.QF)()), (0, o.h7)(t, !1, m.IlC.POPOUT);
                    }));
                break;
            }
            case E.nc.GO_LIVE_VOICE:
            case E.nc.GO_LIVE_NON_VOICE:
                (g.confirmText = S.intl.string(S.t.U76Ft7)),
                    (g.onConfirmClick = (e, t) => {
                        u('unlock'),
                            s.Z.updateNotificationStatus(t),
                            s.Z.setInputLocked(!1, (0, c.QF)()),
                            (0, l.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([i.e('93382'), i.e('79477'), i.e('32893')]).then(i.bind(i, 60594));
                                    return (t) =>
                                        (0, n.jsx)(e, {
                                            ...t,
                                            selectSource: !1,
                                            guildId: a.type === E.nc.GO_LIVE_VOICE ? a.voiceGuild.id : void 0,
                                            selectGuild: a.type === E.nc.GO_LIVE_NON_VOICE,
                                            analyticsLocation: m.Sbl.OVERLAY_NUDGE
                                        });
                                },
                                { contextKey: v.u1 }
                            );
                    });
                break;
            case E.nc.CONTENT_INVENTORY:
                (g.renderFooter = () =>
                    (0, n.jsx)('div', {
                        className: Z.container,
                        children: (0, n.jsx)(h.i, { entries: a.entries })
                    })),
                    (g.onNotificationShow = () => {
                        s.Z.track(m.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: a.entries.map((e) => e.author_id),
                            entry_ids: a.entries.map((e) => e.id)
                        });
                    });
        }
    return {
        icon:
            null != e
                ? (0, n.jsx)(C, { game: e })
                : (0, n.jsx)('img', {
                      src: i(328756),
                      className: _.icon,
                      alt: ''
                  }),
        title: null != e ? e.name : S.intl.string(S.t.pkXAeH),
        body: null,
        hint: () => (0, f.Q)((0, p.P)(), S.t.e6giBQ, S.intl.string(S.t.jZkzVF)),
        onNotificationShow: (e) => {
            var t;
            a(), null === (t = g.onNotificationShow) || void 0 === t || t.call(g, e);
        },
        onNotificationClick: () => {
            u('unlock'), s.Z.setInputLocked(!1, (0, c.QF)());
        },
        onDismissClick: () => {
            u('dismiss');
        },
        ...g
    };
}
