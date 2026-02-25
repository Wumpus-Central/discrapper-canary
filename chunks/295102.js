n.d(t, { A: () => v });
var i = n(627968),
    s = n(442433),
    l = n(383501),
    r = n(1193),
    a = n(589051),
    o = n(547463),
    d = n(620851),
    u = n(646881),
    c = n(97548),
    h = n(324093),
    g = n(897720),
    m = n(888987),
    p = n(218670),
    A = n(932128),
    x = n(479207),
    E = n(393172),
    f = n(968898),
    S = n(196295);
n(392164);
var I = n(652215),
    T = n(985018);
let v = {
    [I.uss.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: s, padding: l, borderWidth: r, showEmpty: a } = e;
            return (0, g.cv)(t)
                ? (0, i.jsx)(x.A, {
                      id: t.id,
                      locked: n,
                      widget: t,
                      height: "auto" === s.height ? 0 : s.height - 2 * l - 2 * r,
                      width: "auto" === s.width ? 0 : s.width - 2 * l - 2 * r,
                      showEmpty: a,
                      padding: l,
                      borderWidth: r,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(f.Pl, { children: T.intl.string(T.t.UPvOia) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.CS, {
                        onClick: (t) => {
                            (0, g.cv)(e) &&
                                (0, s.L3)(t, async () => {
                                    let { default: t } = await n.e("78238").then(n.bind(n, 440173));
                                    return (n) => (0, i.jsx)(t, { ...n, widget: e });
                                });
                        },
                    }),
                    (0, i.jsx)(f.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
        resizeValidation: x.r,
    },
    [I.uss.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: s, showEmpty: l } = e;
            return (0, g.ZO)(t)
                ? (0, i.jsx)(E.Ay, {
                      anchorLeft: n,
                      id: t.id,
                      locked: s,
                      pinned: t.pinned,
                      widget: I.uss.VOICE_V3,
                      maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                      isPreviewingInGame: !1,
                      showEmpty: l,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(f.Pl, { children: T.intl.string(T.t.nFv3Gb) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.CS, {
                        onClick: (e) => {
                            (0, s.L3)(e, async () => {
                                let { default: e } = await n.e("34901").then(n.bind(n, 51444));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(f.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [I.uss.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(d.A, { id: t.id, locked: n, pinned: t.pinned });
        },
        renderTitle: () => (0, i.jsx)(f.Pl, { children: "Click Zone Tester" }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.CS, {
                        onClick: (e) => {
                            (0, s.L3)(e, async () => {
                                let { default: e } = await n.e("49170").then(n.bind(n, 508457));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(f.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [I.uss.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: s } = e;
            return (0, i.jsx)(m.A, { id: t.id, anchorLeft: s, locked: n, pinned: t.pinned });
        },
        renderTitle: () => (0, i.jsx)(f.Pl, { children: "Overlay Performance" }),
        renderButtons: (e) => (0, i.jsx)(f.O0, { id: e.id, pinned: e.pinned }),
    },
    [I.uss.GO_LIVE]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                size: s,
                dragStart: l,
                anchorTop: r,
                anchorLeft: a,
                showEmpty: o,
                padding: d,
                borderWidth: u,
            } = e;
            return (0, g.dO)(t)
                ? (0, i.jsx)(c.A, {
                      id: t.id,
                      locked: n,
                      pinned: t.pinned,
                      opacity: t.opacity,
                      size: s,
                      anchorTop: r,
                      anchorLeft: a,
                      widget: t,
                      isPreviewingInGame: !1,
                      dragStart: l,
                      horizontal: t.meta.horizontal ?? !1,
                      padding: d,
                      borderWidth: u,
                      showEmpty: o,
                  })
                : null;
        },
        renderTitle: (e) => (0, i.jsx)(f.we, { widgetId: e.id, children: T.intl.string(T.t["386XRo"]) }),
        renderButtons: (e) =>
            (0, g.dO)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.CS, {
                              onClick: (t) => {
                                  (0, g.dO)(e) &&
                                      (0, s.L3)(t, async () => {
                                          let { default: t } = await n.e("21289").then(n.bind(n, 543824));
                                          return (n) => (0, i.jsx)(t, { ...n, widget: e });
                                      });
                              },
                          }),
                          (0, i.jsx)(f.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                          (0, i.jsx)(f.O0, { id: e.id, pinned: e.pinned }),
                      ],
                  })
                : null,
        resizeValidation: h.OL,
    },
    [I.uss.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(p.A, { locked: t });
        },
    },
    [I.uss.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n, widget: s } = e;
            return (0, i.jsx)(S.A, { pinned: s.pinned, locked: t, showEmpty: n });
        },
        renderTitle: () => (0, i.jsx)(f.Pl, { children: T.intl.string(T.t.gnKWdS) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.CS, {
                        onClick: (e) => {
                            (0, s.L3)(e, async () => {
                                let { default: e } = await n.e("51607").then(n.bind(n, 320490));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(f.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [I.uss.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(o.Ay, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(f.Pl, { children: T.intl.string(T.t["6gwSFY"]) }),
        renderButtons: () => null,
        predicate: () => !(0, a.NI)("WidgetRenderConfig").hasFriendList,
    },
    [I.uss.FRIENDS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(u.A, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(f.Pl, { children: T.intl.string(T.t.TdEu5X) }),
        renderButtons: () => null,
        predicate: () => (0, a.NI)("WidgetRenderConfig").hasFriendList,
    },
    [I.uss.TEXT_CHAT_V3]: {
        renderWidget(e) {
            let { locked: t, dragStart: n, dragging: s } = e;
            return (0, i.jsx)(A.A, { locked: t, dragStart: n, dragging: s });
        },
        renderTitle: () => (0, i.jsx)(f.Pl, { children: T.intl.string(T.t["/VQax8"]) }),
        renderButtons: () => null,
        predicate: () => (0, a.NI)("WidgetRenderConfig").hasChat,
        containerRenderGate: {
            stores: [l.A, r.A],
            shouldRender(e) {
                let { locked: t } = e;
                if (t) return !1;
                let n = l.A.getChannelId() ?? null,
                    [i] = r.A.getSessionEntries(),
                    s = i.length > 0;
                return null != n || s;
            },
        },
    },
};
