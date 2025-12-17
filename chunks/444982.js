n.d(t, { Z: () => x });
var i = n(54381),
    r = n(239091),
    a = n(482798),
    l = n(603618),
    o = n(926086),
    s = n(878939),
    c = n(761374),
    u = n(68286),
    d = n(340101),
    f = n(273816),
    h = n(2923),
    p = n(586742),
    m = n(243487),
    g = n(430561),
    b = n(134849),
    y = n(501787),
    O = n(981631),
    v = n(388032);
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
    [O.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: a, borderWidth: l, showEmpty: o } = e;
            return (0, d.js)(t)
                ? (0, i.jsx)(p.Z, {
                      id: t.id,
                      locked: n,
                      widget: t,
                      height: "auto" === r.height ? 0 : r.height - 2 * a - 2 * l,
                      width: "auto" === r.width ? 0 : r.width - 2 * a - 2 * l,
                      showEmpty: o,
                      padding: a,
                      borderWidth: l,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: v.intl.string(v.t.UPvOia) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.ls, {
                        onClick: (t) => {
                            (0, d.js)(e) &&
                                (0, r.jW)(t, async () => {
                                    let { default: t } = await n.e("26775").then(n.bind(n, 740579));
                                    return (n) => (0, i.jsx)(t, S(E({}, n), { widget: e }));
                                });
                        },
                    }),
                    (0, i.jsx)(g.RT, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
        resizeValidation: p.R,
    },
    [O.Odu.VOICE_V3]: {
        renderWidget(e) {
            var t;
            let { widget: n, anchorLeft: r, locked: a, showEmpty: l } = e;
            return (0, d.Aw)(n)
                ? (0, i.jsx)(m.ZP, {
                      anchorLeft: r,
                      id: n.id,
                      locked: a,
                      pinned: n.pinned,
                      widget: O.Odu.VOICE_V3,
                      maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : y.At,
                      isPreviewingInGame: !1,
                      showEmpty: l,
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: v.intl.string(v.t.nFv3Gb) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e("32382").then(n.bind(n, 955280));
                                return (t) => (0, i.jsx)(e, E({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(g.RT, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [O.Odu.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(o.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned,
            });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: "Click Zone Tester" }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e("38813").then(n.bind(n, 541501));
                                return (t) => (0, i.jsx)(e, E({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(g.RT, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [O.Odu.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(f.Z, {
                id: t.id,
                anchorLeft: r,
                locked: n,
                pinned: t.pinned,
            });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: "Overlay Performance" }),
        renderButtons: (e) =>
            (0, i.jsx)(g.RT, {
                id: e.id,
                pinned: e.pinned,
            }),
    },
    [O.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let {
                widget: n,
                locked: r,
                size: a,
                dragStart: l,
                anchorTop: o,
                anchorLeft: s,
                showEmpty: u,
                padding: f,
                borderWidth: h,
            } = e;
            return (0, d.ZL)(n)
                ? (0, i.jsx)(c.Z, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: a,
                      anchorTop: o,
                      anchorLeft: s,
                      widget: n,
                      isPreviewingInGame: !1,
                      dragStart: l,
                      horizontal: null != (t = n.meta.horizontal) && t,
                      padding: f,
                      borderWidth: h,
                      showEmpty: u,
                  })
                : null;
        },
        renderTitle: (e) =>
            (0, i.jsx)(g.XM, {
                widgetId: e.id,
                children: v.intl.string(v.t["386XRo"]),
            }),
        renderButtons(e) {
            var t;
            return (0, d.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.ls, {
                              onClick: (t) => {
                                  (0, d.ZL)(e) &&
                                      (0, r.jW)(t, async () => {
                                          let { default: t } = await n.e("34684").then(n.bind(n, 68738));
                                          return (n) => (0, i.jsx)(t, S(E({}, n), { widget: e }));
                                      });
                              },
                          }),
                          (0, i.jsx)(g.GY, {
                              widgetId: e.id,
                              showAllStreams: null == (t = e.meta.showAllStreams) || t,
                          }),
                          (0, i.jsx)(g.RT, {
                              id: e.id,
                              pinned: e.pinned,
                          }),
                      ],
                  })
                : null;
        },
        resizeValidation: u.wD,
    },
    [O.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(h.Z, { locked: t });
        },
    },
    [O.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n, widget: r } = e;
            return (0, i.jsx)(b.Z, {
                pinned: r.pinned,
                locked: t,
                showEmpty: n,
            });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: v.intl.string(v.t.gnKWdS) }),
        renderButtons: (e) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e("94706").then(n.bind(n, 168133));
                                return (t) => (0, i.jsx)(e, E({}, t));
                            });
                        },
                    }),
                    (0, i.jsx)(g.RT, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
    },
    [O.Odu.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(l.ZP, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: v.intl.string(v.t["6gwSFY"]) }),
        renderButtons: () => null,
        predicate: () => !(0, a.XU)("FriendsPopout").enableOverlayWidget,
    },
    [O.Odu.FRIENDS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(s.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: v.intl.string(v.t.TdEu5X) }),
        renderButtons: () => null,
        predicate: () => (0, a.XU)("FriendsPopout").enableOverlayWidget,
    },
};
