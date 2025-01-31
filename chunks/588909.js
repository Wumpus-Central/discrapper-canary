i.d(e, { Z: () => O }), i(47120);
var n = i(200651);
i(192379);
var l = i(952265),
    s = i(24124),
    o = i(13245),
    r = i(620662),
    a = i(835473),
    d = i(442550),
    u = i(293273),
    c = i(145597),
    h = i(603618),
    E = i(380736),
    p = i(620954),
    S = i(987650),
    f = i(981631),
    g = i(602091),
    _ = i(701488),
    m = i(388032),
    v = i(176463),
    I = i(802334);
function Z(t) {
    let { game: e } = t,
        i = (0, a.q)(e.id);
    return null == i
        ? null
        : (0, n.jsx)(d.f, {
              src: i.getIconURL(_.Si.LARGE),
              size: 40
          });
}
function O(t, e) {
    let { trackView: a, trackClick: d } = (0, p.R)(S.n0.WelcomeNudge, { notif_type: S.n0.WelcomeNudge }),
        _ = {};
    for (let a of e)
        switch (a.type) {
            case S.nc.WELCOME: {
                let e = (null == t ? void 0 : t.altId) != null ? u.Z.getApplicationActivity(t.altId) : (null == t ? void 0 : t.id) != null ? u.Z.getApplicationActivity(t.id) : null;
                null != e &&
                    (0, r.Z)(e, f.xjy.JOIN) &&
                    ((_.cancelText = m.intl.string(m.t['6F9ivr'])),
                    (_.onCancelClick = (t, i) => {
                        d('unlock'), o.Z.updateNotificationStatus(i), o.Z.setInputLocked(!1, (0, c.QF)()), (0, s.h7)(e, !1, f.IlC.POPOUT);
                    }));
                break;
            }
            case S.nc.GO_LIVE_VOICE:
            case S.nc.GO_LIVE_NON_VOICE:
                (_.confirmText = m.intl.string(m.t.U76Ft7)),
                    (_.onConfirmClick = (t, e) => {
                        d('unlock'),
                            o.Z.updateNotificationStatus(e),
                            o.Z.setInputLocked(!1, (0, c.QF)()),
                            (0, l.ZD)(
                                async () => {
                                    let { default: t } = await Promise.all([i.e('93382'), i.e('79477'), i.e('53424')]).then(i.bind(i, 60594));
                                    return (e) =>
                                        (0, n.jsx)(t, {
                                            ...e,
                                            selectSource: !1,
                                            guildId: a.type === S.nc.GO_LIVE_VOICE ? a.voiceGuild.id : void 0,
                                            selectGuild: a.type === S.nc.GO_LIVE_NON_VOICE,
                                            analyticsLocation: f.Sbl.OVERLAY_NUDGE
                                        });
                                },
                                { contextKey: g.u1 }
                            );
                    });
                break;
            case S.nc.CONTENT_INVENTORY:
                (_.renderFooter = () =>
                    (0, n.jsx)('div', {
                        className: I.container,
                        children: (0, n.jsx)(h.i, { entries: a.entries })
                    })),
                    (_.onNotificationShow = () => {
                        o.Z.track(f.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
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
            a(), null === (e = _.onNotificationShow) || void 0 === e || e.call(_, t);
        },
        onNotificationClick: () => {
            d('unlock'), o.Z.setInputLocked(!1, (0, c.QF)());
        },
        onDismissClick: () => {
            d('dismiss');
        },
        ..._
    };
}
