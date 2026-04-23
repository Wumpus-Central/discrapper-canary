n.d(t, { A: () => v });
var i = n(627968),
    r = n(442433),
    a = n(383501),
    s = n(1193),
    l = n(589051),
    o = n(547463),
    d = n(620851),
    c = n(646881),
    u = n(97548),
    h = n(324093),
    m = n(897720),
    p = n(888987),
    g = n(218670),
    f = n(709747),
    _ = n(479207),
    x = n(393172),
    A = n(968898),
    E = n(196295);
n(392164);
var S = n(652215),
    I = n(985018);
let v = {
    [S.uss.VIDEO]: {
        streamerModeLabel: () => I.intl.string(I.t.UPvOia),
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: a, borderWidth: s, showEmpty: l } = e;
            return (0, m.cv)(t)
                ? (0, i.jsx)(_.A, {
                      id: t.id,
                      locked: n,
                      widget: t,
                      height: "auto" === r.height ? 0 : r.height - 2 * a - 2 * s,
                      width: "auto" === r.width ? 0 : r.width - 2 * a - 2 * s,
                      showEmpty: l,
                      padding: a,
                      borderWidth: s,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(A.Pl, { children: I.intl.string(I.t.UPvOia) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.CS, {
                        onClick: (t) => {
                            (0, m.cv)(e) &&
                                (0, r.L3)(t, async () => {
                                    let { default: t } = await n.e("78238").then(n.bind(n, 440173));
                                    return (n) => (0, i.jsx)(t, { ...n, widget: e });
                                });
                        },
                    }),
                    (0, i.jsx)(A.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
        resizeValidation: _.r,
    },
    [S.uss.VOICE_V3]: {
        streamerModeLabel: () => I.intl.string(I.t.nFv3Gb),
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: r, showEmpty: a } = e;
            return (0, m.ZO)(t)
                ? (0, i.jsx)(x.Ay, {
                      anchorLeft: n,
                      id: t.id,
                      locked: r,
                      pinned: t.pinned,
                      widget: S.uss.VOICE_V3,
                      maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                      isPreviewingInGame: !1,
                      showEmpty: a,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(A.Pl, { children: I.intl.string(I.t.nFv3Gb) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.CS, {
                        onClick: (e) => {
                            (0, r.L3)(e, async () => {
                                let { default: e } = await n.e("34901").then(n.bind(n, 51444));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(A.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [S.uss.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(d.A, { id: t.id, locked: n, pinned: t.pinned });
        },
        renderTitle: () => (0, i.jsx)(A.Pl, { children: "Click Zone Tester" }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.CS, {
                        onClick: (e) => {
                            (0, r.L3)(e, async () => {
                                let { default: e } = await n.e("49170").then(n.bind(n, 508457));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(A.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [S.uss.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(p.A, { id: t.id, anchorLeft: r, locked: n, pinned: t.pinned });
        },
        renderTitle: () => (0, i.jsx)(A.Pl, { children: "Overlay Performance" }),
        renderButtons: (e) => (0, i.jsx)(A.O0, { id: e.id, pinned: e.pinned }),
    },
    [S.uss.GO_LIVE]: {
        streamerModeLabel: () => I.intl.string(I.t["386XRo"]),
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                size: r,
                dragStart: a,
                anchorTop: s,
                anchorLeft: l,
                showEmpty: o,
                padding: d,
                borderWidth: c,
            } = e;
            return (0, m.dO)(t)
                ? (0, i.jsx)(u.A, {
                      id: t.id,
                      locked: n,
                      pinned: t.pinned,
                      opacity: t.opacity,
                      size: r,
                      anchorTop: s,
                      anchorLeft: l,
                      widget: t,
                      isPreviewingInGame: !1,
                      dragStart: a,
                      horizontal: t.meta.horizontal ?? !1,
                      padding: d,
                      borderWidth: c,
                      showEmpty: o,
                  })
                : null;
        },
        renderTitle: (e) => (0, i.jsx)(A.we, { widgetId: e.id, children: I.intl.string(I.t["386XRo"]) }),
        renderButtons: (e) =>
            (0, m.dO)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(A.CS, {
                              onClick: (t) => {
                                  (0, m.dO)(e) &&
                                      (0, r.L3)(t, async () => {
                                          let { default: t } = await n.e("21289").then(n.bind(n, 543824));
                                          return (n) => (0, i.jsx)(t, { ...n, widget: e });
                                      });
                              },
                          }),
                          (0, i.jsx)(A.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                          (0, i.jsx)(A.O0, { id: e.id, pinned: e.pinned }),
                      ],
                  })
                : null,
        resizeValidation: h.OL,
    },
    [S.uss.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(g.A, { locked: t });
        },
    },
    [S.uss.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n, widget: r } = e;
            return (0, i.jsx)(E.A, { pinned: r.pinned, locked: t, showEmpty: n });
        },
        renderTitle: () => (0, i.jsx)(A.Pl, { children: I.intl.string(I.t.gnKWdS) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.CS, {
                        onClick: (e) => {
                            (0, r.L3)(e, async () => {
                                let { default: e } = await n.e("51607").then(n.bind(n, 320490));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(A.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [S.uss.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(o.Ay, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(A.Pl, { children: I.intl.string(I.t["6gwSFY"]) }),
        renderButtons: () => null,
        predicate: () => !(0, l.NI)("WidgetRenderConfig").hasFriendList,
    },
    [S.uss.FRIENDS]: {
        streamerModeLabel: () => I.intl.string(I.t.TdEu5X),
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(c.A, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(A.Pl, { children: I.intl.string(I.t.TdEu5X) }),
        renderButtons: () => null,
        predicate: () => (0, l.NI)("WidgetRenderConfig").hasFriendList,
    },
    [S.uss.TEXT_CHAT_V3]: {
        streamerModeLabel: () => I.intl.string(I.t["/VQax8"]),
        renderWidget(e) {
            let { locked: t, dragStart: n, dragging: r } = e;
            return (0, i.jsx)(f.A, { locked: t, dragStart: n, dragging: r });
        },
        renderTitle: () => (0, i.jsx)(A.Pl, { children: I.intl.string(I.t["/VQax8"]) }),
        renderButtons: () => null,
        predicate: () => (0, l.NI)("WidgetRenderConfig").hasChat,
        containerRenderGate: {
            stores: [a.A, s.A],
            shouldRender(e) {
                let { locked: t } = e;
                if (t) return !1;
                let n = a.A.getChannelId() ?? null,
                    [i] = s.A.getSessionEntries(),
                    r = i.length > 0;
                return null != n || r;
            },
        },
    },
};
