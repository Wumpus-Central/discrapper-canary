n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(13245),
    a = n(371651),
    o = n(145597),
    l = n(312839),
    d = n(981631),
    c = n(987650),
    u = n(388032),
    h = n(114057);
function p() {
    return (0, i.jsx)('div', {
        className: h.footer,
        children: (0, i.jsx)(s.Button, {
            color: s.Button.Colors.GREEN,
            size: s.Button.Sizes.SMALL,
            className: h.ctaButton,
            children: u.intl.string(u.t.U76Ft7)
        })
    });
}
function f(e) {
    switch (e.type) {
        case c.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: h } = e,
                { trackView: f, trackClick: g } = (0, l.R)(c.n0.GoLiveNudge, { notif_type: c.n0.GoLiveNudge });
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
                    f();
                },
                onNotificationClick: (e, t) => {
                    g('unlock'),
                        r.Z.updateNotificationStatus(t),
                        a.Z.isOverlayOOPEnabledForPid((0, o.QF)()) ? r.Z.setInputLocked(!1, (0, o.QF)()) : r.Z.setInstanceLocked(!1),
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('46298')]).then(n.bind(n, 60594));
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
                    g('dismiss');
                }
            };
        }
        case c.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: h, trackClick: f } = (0, l.R)(c.n0.GoLiveNonVoiceNudge, { notif_type: c.n0.GoLiveNonVoiceNudge });
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
                    f('unlock'),
                        r.Z.updateNotificationStatus(t),
                        a.Z.isOverlayOOPEnabledForPid((0, o.QF)()) ? r.Z.setInputLocked(!1, (0, o.QF)()) : r.Z.setInstanceLocked(!1),
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('46298')]).then(n.bind(n, 60594));
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
                    f('dismiss');
                }
            };
        }
    }
}
