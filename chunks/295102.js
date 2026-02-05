n.d(t, { A: () => T });
var i = n(627968),
    l = n(442433),
    a = n(383501),
    s = n(589051),
    r = n(547463),
    o = n(620851),
    d = n(646881),
    u = n(97548),
    c = n(324093),
    h = n(897720),
    A = n(888987),
    m = n(218670),
    g = n(709747),
    p = n(479207),
    f = n(393172),
    _ = n(968898),
    E = n(196295),
    x = n(187667);
n(392164);
var S = n(652215),
    I = n(985018);
let T = {
    [S.uss.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: l, padding: a, borderWidth: s, showEmpty: r } = e;
            return (0, h.cv)(t)
                ? (0, i.jsx)(p.A, {
                      id: t.id,
                      locked: n,
                      widget: t,
                      height: "auto" === l.height ? 0 : l.height - 2 * a - 2 * s,
                      width: "auto" === l.width ? 0 : l.width - 2 * a - 2 * s,
                      showEmpty: r,
                      padding: a,
                      borderWidth: s,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(_.Pl, { children: I.intl.string(I.t.UPvOia) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_.CS, {
                        onClick: (t) => {
                            (0, h.cv)(e) &&
                                (0, l.L3)(t, async () => {
                                    let { default: t } = await n.e("78238").then(n.bind(n, 440173));
                                    return (n) => (0, i.jsx)(t, { ...n, widget: e });
                                });
                        },
                    }),
                    (0, i.jsx)(_.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
        resizeValidation: p.r,
    },
    [S.uss.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: l, showEmpty: a } = e;
            return (0, h.ZO)(t)
                ? (0, i.jsx)(f.Ay, {
                      anchorLeft: n,
                      id: t.id,
                      locked: l,
                      pinned: t.pinned,
                      widget: S.uss.VOICE_V3,
                      maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                      isPreviewingInGame: !1,
                      showEmpty: a,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(_.Pl, { children: I.intl.string(I.t.nFv3Gb) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_.CS, {
                        onClick: (e) => {
                            (0, l.L3)(e, async () => {
                                let { default: e } = await n.e("34901").then(n.bind(n, 51444));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(_.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [S.uss.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(o.A, { id: t.id, locked: n, pinned: t.pinned });
        },
        renderTitle: () => (0, i.jsx)(_.Pl, { children: "Click Zone Tester" }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_.CS, {
                        onClick: (e) => {
                            (0, l.L3)(e, async () => {
                                let { default: e } = await n.e("49170").then(n.bind(n, 508457));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(_.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [S.uss.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: l } = e;
            return (0, i.jsx)(A.A, { id: t.id, anchorLeft: l, locked: n, pinned: t.pinned });
        },
        renderTitle: () => (0, i.jsx)(_.Pl, { children: "Overlay Performance" }),
        renderButtons: (e) => (0, i.jsx)(_.O0, { id: e.id, pinned: e.pinned }),
    },
    [S.uss.GO_LIVE]: {
        renderWidget(e) {
            let {
                widget: t,
                locked: n,
                size: l,
                dragStart: a,
                anchorTop: s,
                anchorLeft: r,
                showEmpty: o,
                padding: d,
                borderWidth: c,
            } = e;
            return (0, h.dO)(t)
                ? (0, i.jsx)(u.A, {
                      id: t.id,
                      locked: n,
                      pinned: t.pinned,
                      opacity: t.opacity,
                      size: l,
                      anchorTop: s,
                      anchorLeft: r,
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
        renderTitle: (e) => (0, i.jsx)(_.we, { widgetId: e.id, children: I.intl.string(I.t["386XRo"]) }),
        renderButtons: (e) =>
            (0, h.dO)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(_.CS, {
                              onClick: (t) => {
                                  (0, h.dO)(e) &&
                                      (0, l.L3)(t, async () => {
                                          let { default: t } = await n.e("21289").then(n.bind(n, 543824));
                                          return (n) => (0, i.jsx)(t, { ...n, widget: e });
                                      });
                              },
                          }),
                          (0, i.jsx)(_.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                          (0, i.jsx)(_.O0, { id: e.id, pinned: e.pinned }),
                      ],
                  })
                : null,
        resizeValidation: c.OL,
    },
    [S.uss.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(m.A, { locked: t });
        },
    },
    [S.uss.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n, widget: l } = e;
            return (0, i.jsx)(E.A, { pinned: l.pinned, locked: t, showEmpty: n });
        },
        renderTitle: () => (0, i.jsx)(_.Pl, { children: I.intl.string(I.t.gnKWdS) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_.CS, {
                        onClick: (e) => {
                            (0, l.L3)(e, async () => {
                                let { default: e } = await n.e("51607").then(n.bind(n, 320490));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                        },
                    }),
                    (0, i.jsx)(_.O0, { id: e.id, pinned: e.pinned }),
                ],
            }),
    },
    [S.uss.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(r.Ay, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(_.Pl, { children: I.intl.string(I.t["6gwSFY"]) }),
        renderButtons: () => null,
        predicate: () => !(0, s.NI)("WidgetRenderConfig").hasFriendList,
    },
    [S.uss.FRIENDS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(d.A, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(_.Pl, { children: I.intl.string(I.t.TdEu5X) }),
        renderButtons: () => null,
        predicate: () => (0, s.NI)("WidgetRenderConfig").hasFriendList,
    },
    [S.uss.TEXT_CHAT_V3]: {
        renderWidget(e) {
            let { locked: t, dragStart: n, dragging: l } = e;
            return (0, i.jsx)(g.A, { locked: t, dragStart: n, dragging: l });
        },
        renderTitle: () => (0, i.jsx)(_.Pl, { children: I.intl.string(I.t["/VQax8"]) }),
        renderButtons: () => null,
        predicate: () => (0, s.NI)("WidgetRenderConfig").hasChat,
        containerRenderGate: {
            stores: [a.A, x.A],
            shouldRender(e) {
                let { locked: t } = e;
                if (t) return !1;
                let n = a.A.getChannelId() ?? null,
                    [i] = x.A.getSessionEntries(),
                    l = i.length > 0;
                return null != n || l;
            },
        },
    },
};
