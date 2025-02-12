n.d(t, { Z: () => S }), n(47120);
var i = n(200651);
n(192379);
var o = n(952265),
    r = n(24124),
    l = n(13245),
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
    x = n(701488),
    E = n(388032),
    C = n(837449),
    Z = n(725083);
function I(e) {
    let { game: t } = e,
        n = (0, s.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(d.f, {
              src: n.getIconURL(x.Si.LARGE),
              size: 40
          });
}
function S(e, t) {
    let { trackView: s, trackClick: d } = (0, f.R)(g.n0.WelcomeNudge, {
            notif_type: g.n0.WelcomeNudge,
            secondary_notif_types: t.map((e) => g.nc[e.type])
        }),
        x = {};
    for (let s of t)
        switch (s.type) {
            case g.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? c.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? c.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, a.Z)(t, m.xjy.JOIN) &&
                    ((x.cancelText = E.intl.string(E.t['6F9ivr'])),
                    (x.onCancelClick = (e, n) => {
                        d('unlock'), l.Z.updateNotificationStatus(n), l.Z.setInputLocked(!1, (0, u.QF)()), (0, r.h7)(t, !1, m.IlC.POPOUT);
                    }));
                break;
            }
            case g.nc.GO_LIVE_VOICE:
            case g.nc.GO_LIVE_NON_VOICE:
                (x.confirmText = E.intl.string(E.t.U76Ft7)),
                    (x.onConfirmClick = (e, t) => {
                        d('unlock'),
                            l.Z.updateNotificationStatus(t),
                            l.Z.setInputLocked(!1, (0, u.QF)()),
                            (0, o.ZD)(
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
                    ((x.renderFooter = () =>
                        (0, i.jsx)('div', {
                            className: Z.container,
                            children: (0, i.jsx)(_.i, { entries: s.entries })
                        })),
                    (x.onNotificationShow = () => {
                        l.Z.track(m.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: s.entries.map((e) => e.author_id),
                            entry_ids: s.entries.map((e) => e.id)
                        });
                    }));
        }
    return {
        icon:
            null != e
                ? (0, i.jsx)(I, { game: e })
                : (0, i.jsx)('img', {
                      src: n(328756),
                      className: C.icon,
                      alt: ''
                  }),
        title: null != e ? e.name : E.intl.string(E.t.pkXAeH),
        body: null,
        hint: () => (0, p.QR)((0, f.P)(), E.t.e6giBQ, E.intl.string(E.t.jZkzVF)),
        onNotificationShow: (e) => {
            var t;
            s(), null === (t = x.onNotificationShow) || void 0 === t || t.call(x, e);
        },
        onNotificationClick: () => {
            d('unlock'), l.Z.setInputLocked(!1, (0, u.QF)());
        },
        onDismissClick: () => {
            d('dismiss');
        },
        ...x
    };
}
