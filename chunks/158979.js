n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var s = n(481060),
    l = n(13245),
    r = n(371651),
    o = n(145597),
    a = n(312839),
    d = n(981631),
    c = n(987650),
    u = n(388032),
    h = n(114057);
function p() {
    return (0, i.jsx)('div', {
        className: h.footer,
        children: (0, i.jsx)(s.zxk, {
            color: s.zxk.Colors.GREEN,
            size: s.zxk.Sizes.SMALL,
            className: h.ctaButton,
            children: u.intl.string(u.t.U76Ft7)
        })
    });
}
function g(e) {
    switch (e.type) {
        case c.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: h } = e,
                { trackView: g, trackClick: f } = (0, a.R)(c.n0.GoLiveNudge, { notif_type: c.n0.GoLiveNudge });
            return {
                icon: n(847881),
                title: null,
                body: u.intl.formatToPlainString(u.t.z9znpa, {
                    game: t.name,
                    server: h.toString()
                }),
                hint: () => (0, i.jsx)(p, {}),
                renderFooter: () => (0, i.jsx)(p, {}),
                onNotificationShow: () => {
                    g();
                },
                onNotificationClick: (e, t) => {
                    f('unlock'),
                        l.Z.updateNotificationStatus(t),
                        r.Z.isOverlayOOPEnabledForPid((0, o.QF)()) ? l.Z.setInputLocked(!1, (0, o.QF)()) : l.Z.setInstanceLocked(!1),
                        (0, s.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('56877')]).then(n.bind(n, 60594));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    selectSource: !1,
                                    guildId: h.id,
                                    analyticsLocation: d.Sbl.OVERLAY_NUDGE
                                });
                        });
                },
                onDismissClick: () => {
                    f('dismiss');
                }
            };
        }
        case c.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: h, trackClick: g } = (0, a.R)(c.n0.GoLiveNonVoiceNudge, { notif_type: c.n0.GoLiveNonVoiceNudge });
            return {
                icon: n(847881),
                title: null,
                body: u.intl.formatToPlainString(u.t['0SVWgI'], { game: t.name }),
                hint: () => (0, i.jsx)(p, {}),
                renderFooter: () => (0, i.jsx)(p, {}),
                onNotificationShow: () => {
                    h();
                },
                onNotificationClick: (e, t) => {
                    g('unlock'),
                        l.Z.updateNotificationStatus(t),
                        r.Z.isOverlayOOPEnabledForPid((0, o.QF)()) ? l.Z.setInputLocked(!1, (0, o.QF)()) : l.Z.setInstanceLocked(!1),
                        (0, s.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('56877')]).then(n.bind(n, 60594));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    selectSource: !1,
                                    selectGuild: !0,
                                    analyticsLocation: d.Sbl.OVERLAY_NUDGE
                                });
                        });
                },
                onDismissClick: () => {
                    g('dismiss');
                }
            };
        }
    }
}
