n.d(t, { Z: () => I }), n(47120);
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
    h = n(603618),
    _ = n(380736),
    p = n(620954),
    g = n(987650),
    f = n(981631),
    m = n(602091),
    v = n(701488),
    x = n(388032),
    E = n(176463),
    Z = n(802334);
function C(e) {
    let { game: t } = e,
        n = (0, s.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(d.f, {
              src: n.getIconURL(v.Si.LARGE),
              size: 40
          });
}
function I(e, t) {
    let { trackView: s, trackClick: d } = (0, p.R)(g.n0.WelcomeNudge, { notif_type: g.n0.WelcomeNudge }),
        v = {};
    for (let s of t)
        switch (s.type) {
            case g.nc.WELCOME: {
                let t = (null == e ? void 0 : e.altId) != null ? c.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? c.Z.getApplicationActivity(e.id) : null;
                null != t &&
                    (0, a.Z)(t, f.xjy.JOIN) &&
                    ((v.cancelText = x.intl.string(x.t['6F9ivr'])),
                    (v.onCancelClick = (e, n) => {
                        d('unlock'), o.Z.updateNotificationStatus(n), o.Z.setInputLocked(!1, (0, u.QF)()), (0, r.h7)(t, !1, f.IlC.POPOUT);
                    }));
                break;
            }
            case g.nc.GO_LIVE_VOICE:
            case g.nc.GO_LIVE_NON_VOICE:
                (v.confirmText = x.intl.string(x.t.U76Ft7)),
                    (v.onConfirmClick = (e, t) => {
                        d('unlock'),
                            o.Z.updateNotificationStatus(t),
                            o.Z.setInputLocked(!1, (0, u.QF)()),
                            (0, l.ZD)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('79477'), n.e('73554')]).then(n.bind(n, 60594));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            selectSource: !1,
                                            guildId: s.type === g.nc.GO_LIVE_VOICE ? s.voiceGuild.id : void 0,
                                            selectGuild: s.type === g.nc.GO_LIVE_NON_VOICE,
                                            analyticsLocation: f.Sbl.OVERLAY_NUDGE
                                        });
                                },
                                { contextKey: m.u1 }
                            );
                    });
                break;
            case g.nc.CONTENT_INVENTORY:
                (v.renderFooter = () =>
                    (0, i.jsx)('div', {
                        className: Z.container,
                        children: (0, i.jsx)(h.i, { entries: s.entries })
                    })),
                    (v.onNotificationShow = () => {
                        o.Z.track(f.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                            user_ids: s.entries.map((e) => e.author_id),
                            entry_ids: s.entries.map((e) => e.id)
                        });
                    });
        }
    return {
        icon:
            null != e
                ? (0, i.jsx)(C, { game: e })
                : (0, i.jsx)('img', {
                      src: n(328756),
                      className: E.icon,
                      alt: ''
                  }),
        title: null != e ? e.name : x.intl.string(x.t.pkXAeH),
        body: null,
        hint: () => (0, _.QR)((0, p.P)(), x.t.e6giBQ, x.intl.string(x.t.jZkzVF)),
        onNotificationShow: (e) => {
            var t;
            s(), null === (t = v.onNotificationShow) || void 0 === t || t.call(v, e);
        },
        onNotificationClick: () => {
            d('unlock'), o.Z.setInputLocked(!1, (0, u.QF)());
        },
        onDismissClick: () => {
            d('dismiss');
        },
        ...v
    };
}
