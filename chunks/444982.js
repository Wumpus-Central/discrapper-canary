n.d(t, { Z: () => I });
var i = n(200651),
    r = n(239091),
    o = n(482798),
    l = n(32300),
    a = n(603618),
    s = n(926086),
    c = n(353038),
    u = n(878939),
    d = n(761374),
    p = n(340101),
    h = n(273816),
    f = n(2923),
    m = n(586742),
    g = n(243487),
    y = n(430561),
    O = n(134849),
    v = n(501787),
    b = n(981631),
    _ = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function x(e, t) {
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
let I = {
    [b.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: o, borderWidth: l, showEmpty: a } = e;
            return (0, i.jsx)(m.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === r.height ? 0 : r.height - 2 * o - 2 * l,
                width: 'auto' === r.width ? 0 : r.width - 2 * o - 2 * l,
                showEmpty: a
            });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: _.NW.string(_.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.ls, {
                        onClick: (o) => {
                            (0, p.js)(e) &&
                                (0, r.jW)(o, async () => {
                                    let { default: r } = await n.e('26775').then(n.bind(n, 740579));
                                    return (
                                        t(!0),
                                        (n) =>
                                            (0, i.jsx)(
                                                r,
                                                x(E({}, n), {
                                                    widget: e,
                                                    onClose: () => t(!1)
                                                })
                                            )
                                    );
                                });
                        }
                    }),
                    (0, i.jsx)(y.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: r } = e;
            return (0, p.js)(t)
                ? 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                    ? {
                          width: Math.max(n.width, v.vZ),
                          height: Math.min(n.height, 2 * v.mo + 2 * i + 2 * r)
                      }
                    : {
                          height: Math.max(n.height, v.vZ),
                          width: Math.min(n.width, 2 * v.mo + 2 * i + 2 * r)
                      }
                : n;
        }
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
                      showEmpty: l
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: _.NW.string(_.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e('32382').then(n.bind(n, 955280));
                                return t(!0), (n) => (0, i.jsx)(e, x(E({}, n), { onClose: () => t(!1) }));
                            });
                        }
                    }),
                    (0, i.jsx)(y.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [b.Odu.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(s.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: 'Click Zone Tester' }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e('38813').then(n.bind(n, 541501));
                                return t(!0), (n) => (0, i.jsx)(e, x(E({}, n), { onClose: () => t(!1) }));
                            });
                        }
                    }),
                    (0, i.jsx)(y.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [b.Odu.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(h.Z, {
                id: t.id,
                anchorLeft: r,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: 'Overlay Performance' }),
        renderButtons: (e) =>
            (0, i.jsx)(y.RT, {
                id: e.id,
                pinned: e.pinned
            })
    },
    [b.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let { widget: n, locked: r, size: o, dragStart: l, anchorTop: a, anchorLeft: s, showEmpty: c } = e;
            return (0, p.ZL)(n)
                ? (0, i.jsx)(d.Z, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: o,
                      anchorTop: a,
                      anchorLeft: s,
                      widget: b.Odu.GO_LIVE,
                      isPreviewingInGame: !1,
                      dragStart: l,
                      horizontal: null != (t = n.meta.horizontal) && t,
                      padding: 8,
                      borderWidth: 2,
                      showEmpty: c
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: _.NW.string(_.t['386XRk']) }),
        renderButtons(e, t) {
            var o;
            return (0, p.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(y.ls, {
                              onClick: (o) => {
                                  (0, p.ZL)(e) &&
                                      (0, r.jW)(o, async () => {
                                          let { default: r } = await n.e('34684').then(n.bind(n, 68738));
                                          return (
                                              t(!0),
                                              (n) =>
                                                  (0, i.jsx)(
                                                      r,
                                                      x(E({}, n), {
                                                          widget: e,
                                                          onClose: () => t(!1)
                                                      })
                                                  )
                                          );
                                      });
                              }
                          }),
                          (0, i.jsx)(y.GY, {
                              widgetId: e.id,
                              showAllStreams: null == (o = e.meta.showAllStreams) || o
                          }),
                          (0, i.jsx)(y.RT, {
                              id: e.id,
                              pinned: e.pinned
                          })
                      ]
                  })
                : null;
        },
        resizeValidation(e) {
            let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: o, containerSpecs: l } = e,
                a = 2 * r + 2 * o,
                s = i.width - a,
                u = i.height - a,
                d = s / u,
                p = u / s,
                h = (() => {
                    switch (t) {
                        case c.B.RESIZE_NORTH:
                        case c.B.RESIZE_SOUTH:
                            return {
                                height: n.height,
                                width: Math.round((n.height - a) * d + a)
                            };
                        default:
                            return {
                                width: n.width,
                                height: Math.round((n.width - a) * p + a)
                            };
                    }
                })();
            return h.width > l.maxX && ((h.width = l.maxX), (h.height = (l.maxX - a) * p + a)), h.height > l.maxY && ((h.height = l.maxY), (h.width = (l.maxY - a) * d + a)), h;
        }
    },
    [b.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(f.Z, { locked: t });
        }
    },
    [b.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n } = e;
            return (0, i.jsx)(O.Z, {
                locked: t,
                showEmpty: n
            });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: _.NW.string(_.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(y.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e('94706').then(n.bind(n, 168133));
                                return t(!0), (n) => (0, i.jsx)(e, x(E({}, n), { onClose: () => t(!1) }));
                            });
                        }
                    }),
                    (0, i.jsx)(y.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [b.Odu.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(a.ZP, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: _.NW.string(_.t['6gwSFR']) }),
        renderButtons: () => null,
        predicate: () => (0, l.Rb)('ActivityPopout').allowActivityWidget && !(0, o.X)('FriendsPopout')
    },
    [b.Odu.FRIENDS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(u.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(y.PI, { children: _.NW.string(_.t.TdEu5e) }),
        renderButtons: () => null,
        predicate: () => (0, o.X)('FriendsPopout')
    }
};
