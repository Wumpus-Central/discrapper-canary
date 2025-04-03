n.d(t, { M: () => x }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(286379),
    o = n(442837),
    a = n(481060),
    s = n(194359),
    c = n(797614),
    u = n(819557),
    d = n(138201),
    p = n(699516),
    h = n(378298),
    f = n(359119),
    m = n(473092),
    g = n(177342),
    b = n(134612),
    _ = n(981631),
    C = n(388032);
function y(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: a } = (0, o.cj)([p.Z], () => ({ isIgnored: p.Z.isIgnored(t) }), [t]),
        c = i.useCallback(() => {
            (0, m.qc)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: f.pj.STRANGER_DANGER,
                cta: m.NM.USER_MODAL_IGNORE
            }),
                s.Z.ignoreUser(t, 'web_stranger_danger_more', n);
        }, [n, l, t]),
        u = i.useCallback(() => {
            (0, m.qc)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: f.pj.STRANGER_DANGER,
                cta: m.NM.USER_MODAL_UNIGNORE
            }),
                s.Z.unignoreUser(t, 'web_stranger_danger_more', n);
        }, [n, l, t]);
    return (0, r.jsx)(d.ZP, {
        title: C.NW.string(C.t.avyV7O),
        description: C.NW.string(C.t.naWE6e),
        buttonText: a ? C.NW.string(C.t['3SrzRU']) : C.NW.string(C.t.avyV7O),
        onButtonPress: a ? u : c
    });
}
function x(e) {
    let { channelId: t, warningId: x, senderId: v } = e,
        { isBlocked: j } = (0, o.cj)([p.Z], () => ({ isBlocked: p.Z.isBlocked(v) }), [v]),
        O = i.useCallback(() => {
            (0, h.T)(t, [x]);
        }, [t, x]),
        E = (0, b.C2)(),
        N = i.useCallback(
            (e) => () => {
                s.Z.blockUser(v, { location: b.zr }).then(() => {
                    O();
                }),
                    (0, m.qc)({
                        channelId: t,
                        warningId: x,
                        senderId: v,
                        warningType: f.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [O, t, x, v]
        );
    i.useEffect(() => {
        (0, m.MC)(_.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: x,
            senderId: v,
            warningType: f.pj.STRANGER_DANGER
        }),
            c.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, [t, x, v]);
    let I = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onClose: l,
                        channelId: t,
                        warningId: x,
                        senderId: v,
                        description: C.NW.string(C.t.DJMZX1),
                        safetyTipRows: E.map((e, t) =>
                            (0, r.jsx)(
                                u.q,
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
                                    y,
                                    {
                                        senderId: v,
                                        channelId: t,
                                        warningId: x
                                    },
                                    'more-tips-button'
                                ),
                                (0, r.jsx)(
                                    d.ZP,
                                    {
                                        title: C.NW.string(C.t['5QYPOz']),
                                        description: C.NW.string(C.t.G08MKi),
                                        buttonText: C.NW.string(C.t['5QYPOz']),
                                        buttonColor: a.zxk.Colors.RED,
                                        onButtonPress: () => {
                                            l(), P(m.NM.USER_MODAL_BLOCK_CONFIRM, m.NM.USER_MODAL_BLOCK_CANCEL, I);
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
        P = (e, i, l) => {
            (0, a.ZDy)(async () => {
                let { default: o } = await Promise.all([n.e('97652'), n.e('3078')]).then(n.bind(n, 744373));
                return (n) => {
                    var a, s;
                    return (0, r.jsx)(
                        o,
                        ((a = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (s = s =
                            {
                                userId: v,
                                confirmBlock: N(e),
                                onCancel: () => {
                                    null == l || l(),
                                        (0, m.qc)({
                                            channelId: t,
                                            warningId: x,
                                            senderId: v,
                                            warningType: f.pj.STRANGER_DANGER,
                                            cta: i
                                        });
                                }
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        a)
                    );
                };
            });
        };
    return (0, r.jsx)(g.Q, {
        channelId: t,
        warningId: x,
        senderId: v,
        warningType: f.pj.STRANGER_DANGER,
        header: C.NW.string(C.t.iOkDpK),
        description: C.NW.string(C.t.ISUbcH),
        onDismiss: O,
        buttons: [
            {
                text: C.NW.string(C.t['Qk/c4+']),
                color: a.zxk.Colors.BRAND,
                onclick: () => {
                    I(),
                        (0, m.qc)({
                            channelId: t,
                            warningId: x,
                            senderId: v,
                            warningType: f.pj.STRANGER_DANGER,
                            cta: m.NM.OPEN_MORE_TIPS
                        });
                }
            },
            ...(j
                ? []
                : [
                      {
                          text: C.NW.string(C.t.ie0QdH),
                          color: a.zxk.Colors.RED,
                          onclick: () => P(m.NM.USER_BANNER_BLOCK_CONFIRM, m.NM.USER_BANNER_BLOCK_CANCEL)
                      }
                  ])
        ]
    });
}
