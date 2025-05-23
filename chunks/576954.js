n.d(t, { M: () => y }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(286379),
    a = n(442837),
    o = n(481060),
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
    x = n(388032);
function C(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: o } = (0, a.cj)([p.Z], () => ({ isIgnored: p.Z.isIgnored(t) }), [t]),
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
        title: x.intl.string(x.t.avyV7O),
        description: x.intl.string(x.t.naWE6e),
        buttonText: o ? x.intl.string(x.t['3SrzRU']) : x.intl.string(x.t.avyV7O),
        onButtonPress: o ? u : c
    });
}
function y(e) {
    let { channelId: t, warningId: y, senderId: v } = e,
        { isBlocked: j } = (0, a.cj)([p.Z], () => ({ isBlocked: p.Z.isBlocked(v) }), [v]),
        O = i.useCallback(() => {
            (0, h.T)(t, [y]);
        }, [t, y]),
        E = (0, b.C2)(),
        I = i.useCallback(
            (e) => () => {
                s.Z.blockUser(v, { location: b.zr }).then(() => {
                    O();
                }),
                    (0, m.qc)({
                        channelId: t,
                        warningId: y,
                        senderId: v,
                        warningType: f.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [O, t, y, v]
        );
    i.useEffect(() => {
        (0, m.MC)(_.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: y,
            senderId: v,
            warningType: f.pj.STRANGER_DANGER
        }),
            c.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, [t, y, v]);
    let P = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onClose: l,
                        channelId: t,
                        warningId: y,
                        senderId: v,
                        description: x.intl.string(x.t.DJMZX1),
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
                                    C,
                                    {
                                        senderId: v,
                                        channelId: t,
                                        warningId: y
                                    },
                                    'more-tips-button'
                                ),
                                (0, r.jsx)(
                                    d.ZP,
                                    {
                                        title: x.intl.string(x.t['5QYPOz']),
                                        description: x.intl.string(x.t.G08MKi),
                                        buttonText: x.intl.string(x.t['5QYPOz']),
                                        buttonColor: o.zxk.Colors.RED,
                                        onButtonPress: () => {
                                            l(), S(m.NM.USER_MODAL_BLOCK_CONFIRM, m.NM.USER_MODAL_BLOCK_CANCEL, P);
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
        S = (e, i, l) => {
            (0, o.ZDy)(async () => {
                let { default: a } = await Promise.all([n.e('97652'), n.e('3078')]).then(n.bind(n, 744373));
                return (n) => {
                    var o, s;
                    return (0, r.jsx)(
                        a,
                        ((o = (function (e) {
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
                                confirmBlock: I(e),
                                onCancel: () => {
                                    null == l || l(),
                                        (0, m.qc)({
                                            channelId: t,
                                            warningId: y,
                                            senderId: v,
                                            warningType: f.pj.STRANGER_DANGER,
                                            cta: i
                                        });
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
    return (0, r.jsx)(g.Q, {
        channelId: t,
        warningId: y,
        senderId: v,
        warningType: f.pj.STRANGER_DANGER,
        header: x.intl.string(x.t.iOkDpK),
        description: x.intl.string(x.t.ISUbcH),
        onDismiss: O,
        buttons: [
            {
                text: x.intl.string(x.t['Qk/c4+']),
                color: o.zxk.Colors.BRAND,
                onclick: () => {
                    P(),
                        (0, m.qc)({
                            channelId: t,
                            warningId: y,
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
                          text: x.intl.string(x.t.ie0QdH),
                          color: o.zxk.Colors.RED,
                          onclick: () => S(m.NM.USER_BANNER_BLOCK_CONFIRM, m.NM.USER_BANNER_BLOCK_CANCEL)
                      }
                  ])
        ]
    });
}
