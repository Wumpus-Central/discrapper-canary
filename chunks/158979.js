n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var s = n(481060),
    l = n(13245),
    a = n(371651),
    r = n(594174),
    o = n(145597),
    d = n(312839),
    c = n(981631),
    u = n(987650),
    h = n(388032),
    p = n(820377);
function g() {
    return (0, i.jsx)('div', {
        className: p.footer,
        children: (0, i.jsx)(s.zxk, {
            color: s.zxk.Colors.GREEN,
            size: s.zxk.Sizes.SMALL,
            className: p.ctaButton,
            children: h.intl.string(h.t.U76Ft7)
        })
    });
}
function f(e) {
    switch (e.type) {
        case u.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: p } = e,
                { trackView: f, trackClick: m } = (0, d.R)(u.n0.GoLiveNudge, { notif_type: u.n0.GoLiveNudge });
            return {
                icon: n(847881),
                title: null,
                body: h.intl.formatToPlainString(h.t.z9znpa, {
                    game: t.name,
                    server: p.toString()
                }),
                hint: () => (0, i.jsx)(g, {}),
                renderFooter: () => (0, i.jsx)(g, {}),
                onNotificationShow: () => {
                    f();
                },
                onNotificationClick: (e, t) => {
                    m('unlock'), l.Z.updateNotificationStatus(t);
                    let d = a.default.isOverlayOOPEnabledForPid((0, o.QF)());
                    if ((d ? l.Z.setInputLocked(!1, (0, o.QF)()) : l.Z.setInstanceLocked(!1), null == r.default.getCurrentUser())) return;
                    let u = d ? { contextKey: s.u1M } : void 0;
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('38109')]).then(n.bind(n, 60594));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                selectSource: !1,
                                guildId: p.id,
                                analyticsLocation: c.Sbl.OVERLAY_NUDGE
                            });
                    }, u);
                },
                onDismissClick: () => {
                    m('dismiss');
                }
            };
        }
        case u.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: r, trackClick: p } = (0, d.R)(u.n0.GoLiveNonVoiceNudge, { notif_type: u.n0.GoLiveNonVoiceNudge });
            return {
                icon: n(847881),
                title: null,
                body: h.intl.formatToPlainString(h.t['0SVWgI'], { game: t.name }),
                hint: () => (0, i.jsx)(g, {}),
                renderFooter: () => (0, i.jsx)(g, {}),
                onNotificationShow: () => {
                    r();
                },
                onNotificationClick: (e, t) => {
                    p('unlock'), l.Z.updateNotificationStatus(t);
                    let r = a.default.isOverlayOOPEnabledForPid((0, o.QF)());
                    r ? l.Z.setInputLocked(!1, (0, o.QF)()) : l.Z.setInstanceLocked(!1);
                    let d = r ? { contextKey: s.u1M } : void 0;
                    (0, s.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('38109')]).then(n.bind(n, 60594));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                selectSource: !1,
                                selectGuild: !0,
                                analyticsLocation: c.Sbl.OVERLAY_NUDGE
                            });
                    }, d);
                },
                onDismissClick: () => {
                    p('dismiss');
                }
            };
        }
    }
}
