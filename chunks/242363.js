"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(821609),
    l = n(231723),
    a = n(192308),
    r = n(684013),
    o = n(793574),
    d = n(833551),
    c = n(287809),
    u = n(9302),
    h = n(684748),
    p = n(672396),
    A = n(985018),
    f = n(277888);
function _() {
    return (0, i.jsx)("div", {
        className: f.q,
        children: (0, i.jsx)(s.$, { variant: "active", size: "sm", text: A.intl.string(A.t.U76Ft2), fullWidth: !0 }),
    });
}
function g(e) {
    switch (e.type) {
        case p.Jr.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: s } = e,
                { trackView: f, trackClick: g } = (0, h.Y)(p.KS.GoLiveNudge, { notif_type: p.KS.GoLiveNudge });
            return {
                icon: n(334260),
                title: null,
                body: A.intl.formatToPlainString(A.t.z9znpa, { game: t.name, server: s.name }),
                hint: () => (0, i.jsx)(_, {}),
                renderFooter: () => (0, i.jsx)(_, {}),
                onNotificationShow: () => {
                    f();
                },
                onNotificationClick: (e, t) => {
                    g("unlock");
                    let s = (0, u.getPID)();
                    r.A.updateNotificationStatus(t);
                    let h = d.default.isOverlayOOPEnabledForPid(s);
                    if ((h ? r.A.setInputLocked(!1, s) : r.A.setInstanceLocked(!1), null == c.default.getCurrentUser()))
                        return;
                    let p = h ? { contextKey: l.KX } : void 0;
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("96811"), n.e("45150")]).then(n.bind(n, 648230));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                sourcePID: s,
                                selectSource: !1,
                                analyticsLocations: [o.A.OVERLAY_NUDGE],
                            });
                    }, p);
                },
                onDismissClick: () => {
                    g("dismiss");
                },
            };
        }
        case p.Jr.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: s, trackClick: c } = (0, h.Y)(p.KS.GoLiveNonVoiceNudge, {
                    notif_type: p.KS.GoLiveNonVoiceNudge,
                });
            return {
                icon: n(334260),
                title: null,
                body: A.intl.formatToPlainString(A.t["0SVWgF"], { game: t.name }),
                hint: () => (0, i.jsx)(_, {}),
                renderFooter: () => (0, i.jsx)(_, {}),
                onNotificationShow: () => {
                    s();
                },
                onNotificationClick: (e, t) => {
                    c("unlock");
                    let s = (0, u.getPID)();
                    r.A.updateNotificationStatus(t);
                    let h = d.default.isOverlayOOPEnabledForPid(s);
                    h ? r.A.setInputLocked(!1, s) : r.A.setInstanceLocked(!1);
                    let p = h ? { contextKey: l.KX } : void 0;
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("96811"), n.e("45150")]).then(n.bind(n, 648230));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                sourcePID: s,
                                selectSource: !1,
                                analyticsLocations: [o.A.OVERLAY_NUDGE],
                            });
                    }, p);
                },
                onDismissClick: () => {
                    c("dismiss");
                },
            };
        }
    }
}
