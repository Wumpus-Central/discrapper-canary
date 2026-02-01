n.d(t, {
    A: () => x,
});
var i = n(627968),
    r = n(442433),
    l = n(589051),
    a = n(547463),
    s = n(620851),
    o = n(646881),
    u = n(97548),
    c = n(324093),
    d = n(897720),
    h = n(888987),
    p = n(218670),
    f = n(709747),
    g = n(479207),
    m = n(393172),
    y = n(968898),
    A = n(196295);
n(392164);
var v = n(652215),
    b = n(985018);

function E(e) {
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

function O(e, t) {
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
let x = {
    [v.uss.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: l, borderWidth: a, showEmpty: s } = e;
            return (0, d.cv)(t)
                ? (0, i.jsx)(g.A, {
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
            (0, i.jsx)(y.Pl, {
                children: b.intl.string(b.t.UPvOia),
            }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.CS, {
                        onClick: (t) => {
                            (0, d.cv)(e) &&
                                (0, r.L3)(t, async () => {
                                    let { default: t } = await n.e("78238").then(n.bind(n, 440173));
                                    return (n) =>
                                        (0, i.jsx)(
                                            t,
                                            O(E({}, n), {
                                                widget: e,
                                            }),
                                        );
                                });
                        },
                    }),
                    (0, i.jsx)(y.O0, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
        resizeValidation: g.r,
    },
    [v.uss.VOICE_V3]: {
        renderWidget(e) {
            var t;
            let { widget: n, anchorLeft: r, locked: l, showEmpty: a } = e;
            return (0, d.ZO)(n)
                ? (0, i.jsx)(m.Ay, {
                      anchorLeft: r,
                      id: n.id,
                      locked: l,
                      pinned: n.pinned,
                      widget: v.uss.VOICE_V3,
                      maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : 8,
                      isPreviewingInGame: !1,
                      showEmpty: a,
                  })
                : null;
        },
        renderTitle: () =>
            (0, i.jsx)(y.Pl, {
                children: b.intl.string(b.t.nFv3Gb),
            }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.CS, {
                        onClick: (e) => {
                            (0, r.L3)(e, async () => {
                                let { default: e } = await n.e("34901").then(n.bind(n, 51444));
                                return (t) => (0, i.jsx)(e, E({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(y.O0, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [v.uss.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(s.A, {
                id: t.id,
                locked: n,
                pinned: t.pinned,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(y.Pl, {
                children: "Click Zone Tester",
            }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.CS, {
                        onClick: (e) => {
                            (0, r.L3)(e, async () => {
                                let { default: e } = await n.e("49170").then(n.bind(n, 508457));
                                return (t) => (0, i.jsx)(e, E({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(y.O0, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [v.uss.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(h.A, {
                id: t.id,
                anchorLeft: r,
                locked: n,
                pinned: t.pinned,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(y.Pl, {
                children: "Overlay Performance",
            }),
        renderButtons: (e) =>
            (0, i.jsx)(y.O0, {
                id: e.id,
                pinned: e.pinned,
            }),
    },
    [v.uss.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let {
                widget: n,
                locked: r,
                size: l,
                dragStart: a,
                anchorTop: s,
                anchorLeft: o,
                showEmpty: c,
                padding: h,
                borderWidth: p,
            } = e;
            return (0, d.dO)(n)
                ? (0, i.jsx)(u.A, {
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
                      padding: h,
                      borderWidth: p,
                      showEmpty: c,
                  })
                : null;
        },
        renderTitle: (e) =>
            (0, i.jsx)(y.we, {
                widgetId: e.id,
                children: b.intl.string(b.t["386XRo"]),
            }),
        renderButtons(e) {
            var t;
            return (0, d.dO)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(y.CS, {
                              onClick: (t) => {
                                  (0, d.dO)(e) &&
                                      (0, r.L3)(t, async () => {
                                          let { default: t } = await n.e("21289").then(n.bind(n, 543824));
                                          return (n) =>
                                              (0, i.jsx)(
                                                  t,
                                                  O(E({}, n), {
                                                      widget: e,
                                                  }),
                                              );
                                      });
                              },
                          }),
                          (0, i.jsx)(y.GQ, {
                              widgetId: e.id,
                              showAllStreams: null == (t = e.meta.showAllStreams) || t,
                          }),
                          (0, i.jsx)(y.O0, {
                              id: e.id,
                              pinned: e.pinned,
                          }),
                      ],
                  })
                : null;
        },
        resizeValidation: c.OL,
    },
    [v.uss.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(p.A, {
                locked: t,
            });
        },
    },
    [v.uss.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n, widget: r } = e;
            return (0, i.jsx)(A.A, {
                pinned: r.pinned,
                locked: t,
                showEmpty: n,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(y.Pl, {
                children: b.intl.string(b.t.gnKWdS),
            }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.CS, {
                        onClick: (e) => {
                            (0, r.L3)(e, async () => {
                                let { default: e } = await n.e("51607").then(n.bind(n, 320490));
                                return (t) => (0, i.jsx)(e, E({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(y.O0, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [v.uss.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(a.Ay, {
                locked: t,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(y.Pl, {
                children: b.intl.string(b.t["6gwSFY"]),
            }),
        renderButtons: () => null,
        predicate: () => !(0, l.NI)("WidgetRenderConfig").hasFriendList,
    },
    [v.uss.FRIENDS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(o.A, {
                locked: t,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(y.Pl, {
                children: b.intl.string(b.t.TdEu5X),
            }),
        renderButtons: () => null,
        predicate: () => (0, l.NI)("WidgetRenderConfig").hasFriendList,
    },
    [v.uss.TEXT_CHAT_V3]: {
        renderWidget(e) {
            let { locked: t, dragStart: n, dragging: r } = e;
            return (0, i.jsx)(f.A, {
                locked: t,
                dragStart: n,
                dragging: r,
            });
        },
        renderTitle: () =>
            (0, i.jsx)(y.Pl, {
                children: b.intl.string(b.t["/VQax8"]),
            }),
        renderButtons: () => null,
        predicate: () => (0, l.NI)("WidgetRenderConfig").hasChat,
    },
};
