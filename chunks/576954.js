(n.d(t, { M: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(286379),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    c = n(194359),
    u = n(797614),
    d = n(819557),
    p = n(138201),
    h = n(699516),
    f = n(378298),
    m = n(359119),
    g = n(473092),
    b = n(177342),
    _ = n(134612),
    y = n(981631),
    C = n(388032);
function x(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: o } = (0, a.cj)([h.Z], () => ({ isIgnored: h.Z.isIgnored(t) }), [t]),
        s = i.useCallback(() => {
            ((0, g.qc)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: m.pj.STRANGER_DANGER,
                cta: g.NM.USER_MODAL_IGNORE
            }),
                c.Z.ignoreUser(t, 'web_stranger_danger_more', n));
        }, [n, l, t]),
        u = i.useCallback(() => {
            ((0, g.qc)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: m.pj.STRANGER_DANGER,
                cta: g.NM.USER_MODAL_UNIGNORE
            }),
                c.Z.unignoreUser(t, 'web_stranger_danger_more', n));
        }, [n, l, t]);
    return (0, r.jsx)(p.ZP, {
        title: C.intl.string(C.t.avyV7O),
        description: C.intl.string(C.t.naWE6e),
        buttonText: o ? C.intl.string(C.t['3SrzRU']) : C.intl.string(C.t.avyV7O),
        onButtonPress: o ? u : s
    });
}
function v(e) {
    let { channelId: t, warningId: v, senderId: O } = e,
        { isBlocked: j } = (0, a.cj)([h.Z], () => ({ isBlocked: h.Z.isBlocked(O) }), [O]),
        E = i.useCallback(() => {
            (0, f.T)(t, [v]);
        }, [t, v]),
        S = (0, _.C2)(),
        I = i.useCallback(
            (e) => () => {
                (c.Z.blockUser(O, { location: _.zr }).then(() => {
                    E();
                }),
                    (0, g.qc)({
                        channelId: t,
                        warningId: v,
                        senderId: O,
                        warningType: m.pj.STRANGER_DANGER,
                        cta: e
                    }));
            },
            [E, t, v, O]
        );
    i.useEffect(() => {
        ((0, g.MC)(y.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: v,
            senderId: O,
            warningType: m.pj.STRANGER_DANGER
        }),
            u.Z.increment({ name: l.V.SAFETY_WARNING_VIEW }));
    }, [t, v, O]);
    let P = () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onClose: l,
                        channelId: t,
                        warningId: v,
                        senderId: O,
                        description: C.intl.string(C.t.DJMZX1),
                        safetyTipRows: S.map((e, t) =>
                            (0, r.jsx)(
                                d.q,
                                {
                                    index: t,
                                    listType: 'numbered',
                                    title: e
                                },
                                t
                            )
                        ),
                        actionRows: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    x,
                                    {
                                        senderId: O,
                                        channelId: t,
                                        warningId: v
                                    },
                                    'more-tips-button'
                                ),
                                (0, r.jsx)(
                                    p.ZP,
                                    {
                                        title: C.intl.string(C.t['5QYPOz']),
                                        description: C.intl.string(C.t.G08MKi),
                                        buttonText: C.intl.string(C.t['5QYPOz']),
                                        buttonColor: o.zx.Colors.RED,
                                        onButtonPress: () => {
                                            (l(), Z(g.NM.USER_MODAL_BLOCK_CONFIRM, g.NM.USER_MODAL_BLOCK_CANCEL, P));
                                        }
                                    },
                                    'block-button'
                                )
                            ]
                        })
                    });
                };
            });
        },
        Z = (e, i, l) => {
            (0, s.ZDy)(async () => {
                let { default: a } = await Promise.all([n.e('97652'), n.e('3078')]).then(n.bind(n, 744373));
                return (n) => {
                    var o, s;
                    return (0, r.jsx)(
                        a,
                        ((o = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, n)),
                        (s = s =
                            {
                                userId: O,
                                confirmBlock: I(e),
                                onCancel: () => {
                                    (null == l || l(),
                                        (0, g.qc)({
                                            channelId: t,
                                            warningId: v,
                                            senderId: O,
                                            warningType: m.pj.STRANGER_DANGER,
                                            cta: i
                                        }));
                                }
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        o)
                    );
                };
            });
        };
    return (0, r.jsx)(b.Q, {
        channelId: t,
        warningId: v,
        senderId: O,
        warningType: m.pj.STRANGER_DANGER,
        header: C.intl.string(C.t.iOkDpK),
        description: C.intl.string(C.t.ISUbcH),
        onDismiss: E,
        buttons: [
            {
                text: C.intl.string(C.t['Qk/c4+']),
                color: o.zx.Colors.BRAND,
                onclick: () => {
                    (P(),
                        (0, g.qc)({
                            channelId: t,
                            warningId: v,
                            senderId: O,
                            warningType: m.pj.STRANGER_DANGER,
                            cta: g.NM.OPEN_MORE_TIPS
                        }));
                }
            },
            ...(j
                ? []
                : [
                      {
                          text: C.intl.string(C.t.ie0QdH),
                          color: o.zx.Colors.RED,
                          onclick: () => Z(g.NM.USER_BANNER_BLOCK_CONFIRM, g.NM.USER_BANNER_BLOCK_CANCEL)
                      }
                  ])
        ]
    });
}
