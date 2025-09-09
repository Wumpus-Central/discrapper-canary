n.d(t, { Z: () => x });
var i = n(951288),
    r = n(239091),
    o = n(482798),
    l = n(32300),
    a = n(603618),
    s = n(926086),
    c = n(878939),
    u = n(761374),
    d = n(68286),
    p = n(340101),
    h = n(273816),
    f = n(2923),
    m = n(586742),
    g = n(243487),
    y = n(430561),
    O = n(134849),
    v = n(501787),
    b = n(981631),
    E = n(388032);
function _(e) {
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
function S(e, t) {
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
    [b.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: o, borderWidth: l, showEmpty: a } = e;
            return (0, p.js)(t)
                ? (0, i.jsx)(m.Z, {
                      id: t.id,
                      locked: n,
                      widget: t,
                      height: "auto" === r.height ? 0 : r.height - 2 * o - 2 * l,
                      width: "auto" === r.width ? 0 : r.width - 2 * o - 2 * l,
                      showEmpty: a,
                      padding: o,
                      borderWidth: l,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: E.intl.string(E.t.UPvOiY) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.ls, {
                        onClick: (t) => {
                            (0, p.js)(e) &&
                                (0, r.jW)(t, async () => {
                                    let { default: t } = await n.e("26775").then(n.bind(n, 740579));
                                    return (n) => (0, i.jsx)(t, S(_({}, n), { widget: e }));
                                });
                        },
                    }),
                    (0, i.jsx)(y.RT, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
        resizeValidation: m.R,
    },
    [b.Odu.VOICE_V3]: {
        renderWidget(e) {
            var t;
            let { widget: n, anchorLeft: r, locked: o, showEmpty: l } = e;
            return (0, p.Aw)(n)
                ? (0, i.jsx)(g.ZP, {
                      anchorLeft: r,
                      id: n.id,
                      locked: o,
                      pinned: n.pinned,
                      widget: b.Odu.VOICE_V3,
                      maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : v.At,
                      isPreviewingInGame: !1,
                      showEmpty: l,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: E.intl.string(E.t.nFv3GR) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e("32382").then(n.bind(n, 955280));
                                return (t) => (0, i.jsx)(e, _({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(y.RT, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [b.Odu.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(s.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned,
            });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: "Click Zone Tester" }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e("38813").then(n.bind(n, 541501));
                                return (t) => (0, i.jsx)(e, _({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(y.RT, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [b.Odu.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(h.Z, {
                id: t.id,
                anchorLeft: r,
                locked: n,
                pinned: t.pinned,
            });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: "Overlay Performance" }),
        renderButtons: (e) =>
            (0, i.jsx)(y.RT, {
                id: e.id,
                pinned: e.pinned,
            }),
    },
    [b.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let {
                widget: n,
                locked: r,
                size: o,
                dragStart: l,
                anchorTop: a,
                anchorLeft: s,
                showEmpty: c,
                padding: d,
                borderWidth: h,
            } = e;
            return (0, p.ZL)(n)
                ? (0, i.jsx)(u.Z, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: o,
                      anchorTop: a,
                      anchorLeft: s,
                      widget: n,
                      isPreviewingInGame: !1,
                      dragStart: l,
                      horizontal: null != (t = n.meta.horizontal) && t,
                      padding: d,
                      borderWidth: h,
                      showEmpty: c,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: E.intl.string(E.t["386XRk"]) }),
        renderButtons(e) {
            var t;
            return (0, p.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(y.ls, {
                              onClick: (t) => {
                                  (0, p.ZL)(e) &&
                                      (0, r.jW)(t, async () => {
                                          let { default: t } = await n.e("34684").then(n.bind(n, 68738));
                                          return (n) => (0, i.jsx)(t, S(_({}, n), { widget: e }));
                                      });
                              },
                          }),
                          (0, i.jsx)(y.GY, {
                              widgetId: e.id,
                              showAllStreams: null == (t = e.meta.showAllStreams) || t,
                          }),
                          (0, i.jsx)(y.RT, {
                              id: e.id,
                              pinned: e.pinned,
                          }),
                      ],
                  })
                : null;
        },
        resizeValidation: d.wD,
    },
    [b.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(f.Z, { locked: t });
        },
    },
    [b.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n, widget: r } = e;
            return (0, i.jsx)(O.Z, {
                pinned: r.pinned,
                locked: t,
                showEmpty: n,
            });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: E.intl.string(E.t.gnKWdX) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e("94706").then(n.bind(n, 168133));
                                return (t) => (0, i.jsx)(e, _({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(y.RT, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [b.Odu.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(a.ZP, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: E.intl.string(E.t["6gwSFR"]) }),
        renderButtons: () => null,
        predicate: () =>
            (0, l.Rb)("ActivityPopout").allowActivityWidget && !(0, o.XU)("FriendsPopout").enableOverlayWidget,
    },
    [b.Odu.FRIENDS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(c.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: E.intl.string(E.t.TdEu5e) }),
        renderButtons: () => null,
        predicate: () => (0, o.XU)("FriendsPopout").enableOverlayWidget,
    },
};
