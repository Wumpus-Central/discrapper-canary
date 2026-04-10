n.d(t, { A: () => T });
var i = n(627968),
    l = n(442433),
    r = n(383501),
    s = n(1193),
    a = n(589051),
    o = n(547463),
    u = n(620851),
    d = n(646881),
    c = n(97548),
    h = n(324093),
    g = n(897720),
    m = n(888987),
    f = n(218670),
    A = n(709747),
    I = n(479207),
    E = n(393172),
    p = n(968898),
    _ = n(196295);
n(392164);
var S = n(652215),
    x = n(985018);
let T = {
    [S.uss.VIDEO]: {
        streamerModeLabel: () => x.intl.string(x.t.UPvOia),
        renderWidget(e) {
            let { widget: t, locked: n, size: l, padding: r, borderWidth: s, showEmpty: a } = e;
            return (0, g.cv)(t)
                ? (0, i.jsx)(I.A, {
                      id: t.id,
                      locked: n,
                      widget: t,
                      height: "auto" === l.height ? 0 : l.height - 2 * r - 2 * s,
                      width: "auto" === l.width ? 0 : l.width - 2 * r - 2 * s,
                      showEmpty: a,
                      padding: r,
                      borderWidth: s,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(p.Pl, { children: x.intl.string(x.t.UPvOia) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.CS, {
                        onClick: (t) => {
                            (0, g.cv)(e) &&
                                (0, l.L3)(t, async () => {
                                    let { default: t } = await n.e("78238").then(n.bind(n, 440173));
                                    return (n) => (0, i.jsx)(t, { ...n, widget: e });
                                });
                        },
                    }),
                    (0, i.jsx)(p.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
        resizeValidation: I.r,
    },
    [S.uss.VOICE_V3]: {
        streamerModeLabel: () => x.intl.string(x.t.nFv3Gb),
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: l, showEmpty: r } = e;
            return (0, g.ZO)(t)
                ? (0, i.jsx)(E.Ay, {
                      anchorLeft: n,
                      id: t.id,
                      locked: l,
                      pinned: t.pinned,
                      widget: S.uss.VOICE_V3,
                      maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                      isPreviewingInGame: !1,
                      showEmpty: r,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(p.Pl, { children: x.intl.string(x.t.nFv3Gb) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.CS, {
                        onClick: (e) => {
                            (0, l.L3)(e, async () => {
                                let { default: e } = await n.e("34901").then(n.bind(n, 51444));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(p.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [S.uss.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(u.A, { id: t.id, locked: n, pinned: t.pinned });
        },
        renderTitle: () => (0, i.jsx)(p.Pl, { children: "Click Zone Tester" }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.CS, {
                        onClick: (e) => {
                            (0, l.L3)(e, async () => {
                                let { default: e } = await n.e("49170").then(n.bind(n, 508457));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(p.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [S.uss.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: l } = e;
            return (0, i.jsx)(m.A, { id: t.id, anchorLeft: l, locked: n, pinned: t.pinned });
        },
        renderTitle: () => (0, i.jsx)(p.Pl, { children: "Overlay Performance" }),
        renderButtons: (e) => (0, i.jsx)(p.O0, { id: e.id, pinned: e.pinned }),
    },
    [S.uss.GO_LIVE]: {
        streamerModeLabel: () => x.intl.string(x.t["386XRo"]),
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                size: l,
                dragStart: r,
                anchorTop: s,
                anchorLeft: a,
                showEmpty: o,
                padding: u,
                borderWidth: d,
            } = e;
            return (0, g.dO)(t)
                ? (0, i.jsx)(c.A, {
                      id: t.id,
                      locked: n,
                      pinned: t.pinned,
                      opacity: t.opacity,
                      size: l,
                      anchorTop: s,
                      anchorLeft: a,
                      widget: t,
                      isPreviewingInGame: !1,
                      dragStart: r,
                      horizontal: t.meta.horizontal ?? !1,
                      padding: u,
                      borderWidth: d,
                      showEmpty: o,
                  })
                : null;
        },
        renderTitle: (e) => (0, i.jsx)(p.we, { widgetId: e.id, children: x.intl.string(x.t["386XRo"]) }),
        renderButtons: (e) =>
            (0, g.dO)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(p.CS, {
                              onClick: (t) => {
                                  (0, g.dO)(e) &&
                                      (0, l.L3)(t, async () => {
                                          let { default: t } = await n.e("21289").then(n.bind(n, 543824));
                                          return (n) => (0, i.jsx)(t, { ...n, widget: e });
                                      });
                              },
                          }),
                          (0, i.jsx)(p.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                          (0, i.jsx)(p.O0, { id: e.id, pinned: e.pinned }),
                      ],
                  })
                : null,
        resizeValidation: h.OL,
    },
    [S.uss.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(f.A, { locked: t });
        },
    },
    [S.uss.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n, widget: l } = e;
            return (0, i.jsx)(_.A, { pinned: l.pinned, locked: t, showEmpty: n });
        },
        renderTitle: () => (0, i.jsx)(p.Pl, { children: x.intl.string(x.t.gnKWdS) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.CS, {
                        onClick: (e) => {
                            (0, l.L3)(e, async () => {
                                let { default: e } = await n.e("51607").then(n.bind(n, 320490));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(p.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [S.uss.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(o.Ay, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(p.Pl, { children: x.intl.string(x.t["6gwSFY"]) }),
        renderButtons: () => null,
        predicate: () => !(0, a.NI)("WidgetRenderConfig").hasFriendList,
    },
    [S.uss.FRIENDS]: {
        streamerModeLabel: () => x.intl.string(x.t.TdEu5X),
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(d.A, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(p.Pl, { children: x.intl.string(x.t.TdEu5X) }),
        renderButtons: () => null,
        predicate: () => (0, a.NI)("WidgetRenderConfig").hasFriendList,
    },
    [S.uss.TEXT_CHAT_V3]: {
        streamerModeLabel: () => x.intl.string(x.t["/VQax8"]),
        renderWidget(e) {
            let { locked: t, dragStart: n, dragging: l } = e;
            return (0, i.jsx)(A.A, { locked: t, dragStart: n, dragging: l });
        },
        renderTitle: () => (0, i.jsx)(p.Pl, { children: x.intl.string(x.t["/VQax8"]) }),
        renderButtons: () => null,
        predicate: () => (0, a.NI)("WidgetRenderConfig").hasChat,
        containerRenderGate: {
            stores: [r.A, s.A],
            shouldRender(e) {
                let { locked: t } = e;
                if (t) return !1;
                let n = r.A.getChannelId() ?? null,
                    [i] = s.A.getSessionEntries(),
                    l = i.length > 0;
                return null != n || l;
            },
        },
    },
};
