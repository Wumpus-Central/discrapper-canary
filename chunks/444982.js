n.d(t, { Z: () => x });
var i = n(54381),
    r = n(239091),
    l = n(482798),
    a = n(603618),
    o = n(926086),
    s = n(878939),
    u = n(761374),
    c = n(68286),
    d = n(340101),
    h = n(273816),
    p = n(2923),
    f = n(586742),
    m = n(243487),
    g = n(430561),
    y = n(134849),
    O = n(501787),
    E = n(981631),
    v = n(388032);
function S(e) {
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
function b(e, t) {
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
            let { widget: t, locked: n, size: r, padding: l, borderWidth: a, showEmpty: o } = e;
            return (0, d.js)(t)
                ? (0, i.jsx)(f.Z, {
                      id: t.id,
                      locked: n,
                      widget: t,
                      height: "auto" === r.height ? 0 : r.height - 2 * l - 2 * a,
                      width: "auto" === r.width ? 0 : r.width - 2 * l - 2 * a,
                      showEmpty: o,
                      padding: l,
                      borderWidth: a,
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
                                    return (n) => (0, i.jsx)(t, b(S({}, n), { widget: e }));
                                });
                        },
                    }),
                    (0, i.jsx)(g.RT, {
                        id: e.id,
                        pinned: e.pinned,
                    }),
                ],
            }),
        resizeValidation: f.R,
    },
    [E.Odu.VOICE_V3]: {
        renderWidget(e) {
            var t;
            let { widget: n, anchorLeft: r, locked: l, showEmpty: a } = e;
            return (0, d.Aw)(n)
                ? (0, i.jsx)(m.ZP, {
                      anchorLeft: r,
                      id: n.id,
                      locked: l,
                      pinned: n.pinned,
                      widget: E.Odu.VOICE_V3,
                      maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : O.At,
                      isPreviewingInGame: !1,
                      showEmpty: a,
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
                                return (t) => (0, i.jsx)(e, S({}, t));
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
    [E.Odu.CLICK_ZONE_DEBUG]: {
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
                                return (t) => (0, i.jsx)(e, S({}, t));
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
    [E.Odu.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(h.Z, {
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
    [E.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let {
                widget: n,
                locked: r,
                size: l,
                dragStart: a,
                anchorTop: o,
                anchorLeft: s,
                showEmpty: c,
                padding: h,
                borderWidth: p,
            } = e;
            return (0, d.ZL)(n)
                ? (0, i.jsx)(u.Z, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: l,
                      anchorTop: o,
                      anchorLeft: s,
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
                                          return (n) => (0, i.jsx)(t, b(S({}, n), { widget: e }));
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
        resizeValidation: c.wD,
    },
    [E.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(p.Z, { locked: t });
        },
    },
    [E.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n, widget: r } = e;
            return (0, i.jsx)(y.Z, {
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
                                return (t) => (0, i.jsx)(e, S({}, t));
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
    [E.Odu.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(a.ZP, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: v.intl.string(v.t["6gwSFY"]) }),
        renderButtons: () => null,
        predicate: () => !(0, l.XU)("FriendsPopout").enableOverlayWidget,
    },
    [E.Odu.FRIENDS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(s.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: v.intl.string(v.t.TdEu5X) }),
        renderButtons: () => null,
        predicate: () => (0, l.XU)("FriendsPopout").enableOverlayWidget,
    },
};
