"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(684013),
    a = n(793574),
    r = n(833551),
    o = n(287809),
    d = n(9302),
    c = n(684748),
    u = n(672396),
    h = n(985018),
    p = n(821700);
function A() {
    return (0, i.jsx)("div", {
        className: p.q,
        children: (0, i.jsx)(s.Button, {
            variant: "active",
            size: "sm",
            text: h.intl.string(h.t.U76Ft2),
            fullWidth: !0,
        }),
    });
}
function f(e) {
    switch (e.type) {
        case u.Jr.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: p } = e,
                { trackView: f, trackClick: g } = (0, c.Y)(u.KS.GoLiveNudge, { notif_type: u.KS.GoLiveNudge });
            return {
                icon: n(334260),
                title: null,
                body: h.intl.formatToPlainString(h.t.z9znpa, { game: t.name, server: p.name }),
                hint: () => (0, i.jsx)(A, {}),
                renderFooter: () => (0, i.jsx)(A, {}),
                onNotificationShow: () => {
                    f();
                },
                onNotificationClick: (e, t) => {
                    g("unlock");
                    let c = (0, d.getPID)();
                    l.A.updateNotificationStatus(t);
                    let u = r.default.isOverlayOOPEnabledForPid(c);
                    if ((u ? l.A.setInputLocked(!1, c) : l.A.setInstanceLocked(!1), null == o.default.getCurrentUser()))
                        return;
                    let h = u ? { contextKey: s.KX8 } : void 0;
                    (0, s.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("96811"), n.e("13337")]).then(n.bind(n, 648230));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                sourcePID: c,
                                selectSource: !1,
                                analyticsLocations: [a.A.OVERLAY_NUDGE],
                            });
                    }, h);
                },
                onDismissClick: () => {
                    g("dismiss");
                },
            };
        }
        case u.Jr.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: o, trackClick: p } = (0, c.Y)(u.KS.GoLiveNonVoiceNudge, {
                    notif_type: u.KS.GoLiveNonVoiceNudge,
                });
            return {
                icon: n(334260),
                title: null,
                body: h.intl.formatToPlainString(h.t["0SVWgF"], { game: t.name }),
                hint: () => (0, i.jsx)(A, {}),
                renderFooter: () => (0, i.jsx)(A, {}),
                onNotificationShow: () => {
                    o();
                },
                onNotificationClick: (e, t) => {
                    p("unlock");
                    let o = (0, d.getPID)();
                    l.A.updateNotificationStatus(t);
                    let c = r.default.isOverlayOOPEnabledForPid(o);
                    c ? l.A.setInputLocked(!1, o) : l.A.setInstanceLocked(!1);
                    let u = c ? { contextKey: s.KX8 } : void 0;
                    (0, s.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("96811"), n.e("13337")]).then(n.bind(n, 648230));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                sourcePID: o,
                                selectSource: !1,
                                analyticsLocations: [a.A.OVERLAY_NUDGE],
                            });
                    }, u);
                },
                onDismissClick: () => {
                    p("dismiss");
                },
            };
        }
    }
}
