n.d(t, { Z: () => x });
var i = n(54381),
    r = n(239091),
    l = n(482798),
    o = n(32300),
    a = n(603618),
    s = n(926086),
    c = n(878939),
    u = n(761374),
    d = n(68286),
    h = n(340101),
    p = n(273816),
    f = n(2923),
    m = n(586742),
    g = n(243487),
    y = n(430561),
    O = n(134849),
    v = n(501787),
    E = n(981631),
    b = n(388032);
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
    [E.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: l, borderWidth: o, showEmpty: a } = e;
            return (0, h.js)(t)
                ? (0, i.jsx)(m.Z, {
                      id: t.id,
                      locked: n,
                      widget: t,
                      height: "auto" === r.height ? 0 : r.height - 2 * l - 2 * o,
                      width: "auto" === r.width ? 0 : r.width - 2 * l - 2 * o,
                      showEmpty: a,
                      padding: l,
                      borderWidth: o,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: b.intl.string(b.t.UPvOia) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.ls, {
                        onClick: (t) => {
                            (0, h.js)(e) &&
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
    [E.Odu.VOICE_V3]: {
        renderWidget(e) {
            var t;
            let { widget: n, anchorLeft: r, locked: l, showEmpty: o } = e;
            return (0, h.Aw)(n)
                ? (0, i.jsx)(g.ZP, {
                      anchorLeft: r,
                      id: n.id,
                      locked: l,
                      pinned: n.pinned,
                      widget: E.Odu.VOICE_V3,
                      maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : v.At,
                      isPreviewingInGame: !1,
                      showEmpty: o,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: b.intl.string(b.t.nFv3Gb) }),
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
    [E.Odu.CLICK_ZONE_DEBUG]: {
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
    [E.Odu.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(p.Z, {
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
    [E.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let {
                widget: n,
                locked: r,
                size: l,
                dragStart: o,
                anchorTop: a,
                anchorLeft: s,
                showEmpty: c,
                padding: d,
                borderWidth: p,
            } = e;
            return (0, h.ZL)(n)
                ? (0, i.jsx)(u.Z, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: l,
                      anchorTop: a,
                      anchorLeft: s,
                      widget: n,
                      isPreviewingInGame: !1,
                      dragStart: o,
                      horizontal: null != (t = n.meta.horizontal) && t,
                      padding: d,
                      borderWidth: p,
                      showEmpty: c,
                  })
                : null;
        },
        renderTitle: (e) =>
            (0, i.jsx)(y.XM, {
                widgetId: e.id,
                children: b.intl.string(b.t["386XRo"]),
            }),
        renderButtons(e) {
            var t;
            return (0, h.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(y.ls, {
                              onClick: (t) => {
                                  (0, h.ZL)(e) &&
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
    [E.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(f.Z, { locked: t });
        },
    },
    [E.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n, widget: r } = e;
            return (0, i.jsx)(O.Z, {
                pinned: r.pinned,
                locked: t,
                showEmpty: n,
            });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: b.intl.string(b.t.gnKWdS) }),
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
    [E.Odu.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(a.ZP, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: b.intl.string(b.t["6gwSFY"]) }),
        renderButtons: () => null,
        predicate: () =>
            (0, o.Rb)("ActivityPopout").allowActivityWidget && !(0, l.XU)("FriendsPopout").enableOverlayWidget,
    },
    [E.Odu.FRIENDS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(c.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: b.intl.string(b.t.TdEu5X) }),
        renderButtons: () => null,
        predicate: () => (0, l.XU)("FriendsPopout").enableOverlayWidget,
    },
};
