n.d(t, {
    A: () => S,
}),
    n(896048);
var i = n(627968),
    r = n(442433),
    l = n(383501),
    a = n(589051),
    s = n(547463),
    o = n(620851),
    u = n(646881),
    c = n(97548),
    d = n(324093),
    h = n(897720),
    p = n(888987),
    f = n(218670),
    g = n(709747),
    m = n(479207),
    y = n(393172),
    A = n(968898),
    v = n(196295),
    b = n(187667);
n(392164);
var E = n(652215),
    O = n(985018);

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = {
    [E.uss.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: l, borderWidth: a, showEmpty: s } = e;
            return (0, h.cv)(t)
                ? (0, i.jsx)(m.A, {
                      id: t.id,
                      locked: n,
                      widget: t,
                      height: "auto" === r.height ? 0 : r.height - 2 * l - 2 * a,
                      width: "auto" === r.width ? 0 : r.width - 2 * l - 2 * a,
                      showEmpty: s,
                      padding: l,
                      borderWidth: a,
                  })
                : null;
        },
        renderTitle: () =>
            (0, i.jsx)(A.Pl, {
                children: O.intl.string(O.t.UPvOia),
            }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.CS, {
                        onClick: (t) => {
                            (0, h.cv)(e) &&
                                (0, r.L3)(t, async () => {
                                    let { default: t } = await n.e("78238").then(n.bind(n, 440173));
                                    return (n) =>
                                        (0, i.jsx)(
                                            t,
                                            _(x({}, n), {
                                                widget: e,
                                            }),
                                        );
                                });
                        },
                    }),
                    (0, i.jsx)(A.O0, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
        resizeValidation: m.r,
    },
    [E.uss.VOICE_V3]: {
        renderWidget(e) {
            var t;
            let { widget: n, anchorLeft: r, locked: l, showEmpty: a } = e;
            return (0, h.ZO)(n)
                ? (0, i.jsx)(y.Ay, {
                      anchorLeft: r,
                      id: n.id,
                      locked: l,
                      pinned: n.pinned,
                      widget: E.uss.VOICE_V3,
                      maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : 8,
                      isPreviewingInGame: !1,
                      showEmpty: a,
                  })
                : null;
        },
        renderTitle: () =>
            (0, i.jsx)(A.Pl, {
                children: O.intl.string(O.t.nFv3Gb),
            }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.CS, {
                        onClick: (e) => {
                            (0, r.L3)(e, async () => {
                                let { default: e } = await n.e("34901").then(n.bind(n, 51444));
                                return (t) => (0, i.jsx)(e, x({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(A.O0, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [E.uss.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(o.A, {
                id: t.id,
                locked: n,
                pinned: t.pinned,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(A.Pl, {
                children: "Click Zone Tester",
            }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.CS, {
                        onClick: (e) => {
                            (0, r.L3)(e, async () => {
                                let { default: e } = await n.e("49170").then(n.bind(n, 508457));
                                return (t) => (0, i.jsx)(e, x({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(A.O0, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [E.uss.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(p.A, {
                id: t.id,
                anchorLeft: r,
                locked: n,
                pinned: t.pinned,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(A.Pl, {
                children: "Overlay Performance",
            }),
        renderButtons: (e) =>
            (0, i.jsx)(A.O0, {
                id: e.id,
                pinned: e.pinned,
            }),
    },
    [E.uss.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let {
                widget: n,
                locked: r,
                size: l,
                dragStart: a,
                anchorTop: s,
                anchorLeft: o,
                showEmpty: u,
                padding: d,
                borderWidth: p,
            } = e;
            return (0, h.dO)(n)
                ? (0, i.jsx)(c.A, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: l,
                      anchorTop: s,
                      anchorLeft: o,
                      widget: n,
                      isPreviewingInGame: !1,
                      dragStart: a,
                      horizontal: null != (t = n.meta.horizontal) && t,
                      padding: d,
                      borderWidth: p,
                      showEmpty: u,
                  })
                : null;
        },
        renderTitle: (e) =>
            (0, i.jsx)(A.we, {
                widgetId: e.id,
                children: O.intl.string(O.t["386XRo"]),
            }),
        renderButtons(e) {
            var t;
            return (0, h.dO)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(A.CS, {
                              onClick: (t) => {
                                  (0, h.dO)(e) &&
                                      (0, r.L3)(t, async () => {
                                          let { default: t } = await n.e("21289").then(n.bind(n, 543824));
                                          return (n) =>
                                              (0, i.jsx)(
                                                  t,
                                                  _(x({}, n), {
                                                      widget: e,
                                                  }),
                                              );
                                      });
                              },
                          }),
                          (0, i.jsx)(A.GQ, {
                              widgetId: e.id,
                              showAllStreams: null == (t = e.meta.showAllStreams) || t,
                          }),
                          (0, i.jsx)(A.O0, {
                              id: e.id,
                              pinned: e.pinned,
                          }),
                      ],
                  })
                : null;
        },
        resizeValidation: d.OL,
    },
    [E.uss.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(f.A, {
                locked: t,
            });
        },
    },
    [E.uss.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n, widget: r } = e;
            return (0, i.jsx)(v.A, {
                pinned: r.pinned,
                locked: t,
                showEmpty: n,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(A.Pl, {
                children: O.intl.string(O.t.gnKWdS),
            }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.CS, {
                        onClick: (e) => {
                            (0, r.L3)(e, async () => {
                                let { default: e } = await n.e("51607").then(n.bind(n, 320490));
                                return (t) => (0, i.jsx)(e, x({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(A.O0, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [E.uss.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(s.Ay, {
                locked: t,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(A.Pl, {
                children: O.intl.string(O.t["6gwSFY"]),
            }),
        renderButtons: () => null,
        predicate: () => !(0, a.NI)("WidgetRenderConfig").hasFriendList,
    },
    [E.uss.FRIENDS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(u.A, {
                locked: t,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(A.Pl, {
                children: O.intl.string(O.t.TdEu5X),
            }),
        renderButtons: () => null,
        predicate: () => (0, a.NI)("WidgetRenderConfig").hasFriendList,
    },
    [E.uss.TEXT_CHAT_V3]: {
        renderWidget(e) {
            let { locked: t, dragStart: n, dragging: r } = e;
            return (0, i.jsx)(g.A, {
                locked: t,
                dragStart: n,
                dragging: r,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(A.Pl, {
                children: O.intl.string(O.t["/VQax8"]),
            }),
        renderButtons: () => null,
        predicate: () => (0, a.NI)("WidgetRenderConfig").hasChat,
        containerRenderGate: {
            stores: [l.A, b.A],
            shouldRender(e) {
                var t;
                let { locked: n } = e;
                if (n) return !1;
                let i = null != (t = l.A.getChannelId()) ? t : null,
                    [r] = b.A.getSessionEntries(),
                    a = r.length > 0;
                return null != i || a;
            },
        },
    },
};
