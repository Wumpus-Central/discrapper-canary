(n.d(t, { M: () => A }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(286379),
    o = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(194359),
    u = n(797614),
    d = n(819557),
    f = n(138201),
    _ = n(699516),
    p = n(378298),
    h = n(359119),
    m = n(473092),
    g = n(177342),
    E = n(134612),
    b = n(981631),
    y = n(388032);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { senderId: t, channelId: n, warningId: a } = e,
        { isIgnored: s } = (0, o.cj)([_.Z], () => ({ isIgnored: _.Z.isIgnored(t) }), [t]),
        l = i.useCallback(() => {
            ((0, m.qc)({
                channelId: n,
                warningId: a,
                senderId: t,
                warningType: h.pj.STRANGER_DANGER,
                cta: m.NM.USER_MODAL_IGNORE
            }),
                c.Z.ignoreUser(t, 'web_stranger_danger_more', n));
        }, [n, a, t]),
        u = i.useCallback(() => {
            ((0, m.qc)({
                channelId: n,
                warningId: a,
                senderId: t,
                warningType: h.pj.STRANGER_DANGER,
                cta: m.NM.USER_MODAL_UNIGNORE
            }),
                c.Z.unignoreUser(t, 'web_stranger_danger_more', n));
        }, [n, a, t]);
    return (0, r.jsx)(f.ZP, {
        title: y.intl.string(y.t.avyV7O),
        description: y.intl.string(y.t.naWE6e),
        buttonText: s ? y.intl.string(y.t['3SrzRU']) : y.intl.string(y.t.avyV7O),
        onButtonPress: s ? u : l
    });
}
function A(e) {
    let { channelId: t, warningId: O, senderId: I } = e,
        { isBlocked: A } = (0, o.cj)([_.Z], () => ({ isBlocked: _.Z.isBlocked(I) }), [I]),
        N = i.useCallback(() => {
            (0, p.T)(t, [O]);
        }, [t, O]),
        C = (0, E.C2)(),
        w = i.useCallback(
            (e) => () => {
                (c.Z.blockUser(I, { location: E.zr }).then(() => {
                    N();
                }),
                    (0, m.qc)({
                        channelId: t,
                        warningId: O,
                        senderId: I,
                        warningType: h.pj.STRANGER_DANGER,
                        cta: e
                    }));
            },
            [N, t, O, I]
        );
    i.useEffect(() => {
        ((0, m.MC)(b.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: O,
            senderId: I,
            warningType: h.pj.STRANGER_DANGER
        }),
            u.Z.increment({ name: a.V.SAFETY_WARNING_VIEW }));
    }, [t, O, I]);
    let R = () => {
            (P(),
                (0, m.qc)({
                    channelId: t,
                    warningId: O,
                    senderId: I,
                    warningType: h.pj.STRANGER_DANGER,
                    cta: m.NM.OPEN_MORE_TIPS
                }));
        },
        P = () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: i, onClose: a } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onClose: a,
                        channelId: t,
                        warningId: O,
                        senderId: I,
                        description: y.intl.string(y.t.DJMZX1),
                        safetyTipRows: C.map((e, t) =>
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
                                    S,
                                    {
                                        senderId: I,
                                        channelId: t,
                                        warningId: O
                                    },
                                    'more-tips-button'
                                ),
                                (0, r.jsx)(
                                    f.ZP,
                                    {
                                        title: y.intl.string(y.t['5QYPOz']),
                                        description: y.intl.string(y.t.G08MKi),
                                        buttonText: y.intl.string(y.t['5QYPOz']),
                                        buttonColor: s.zx.Colors.RED,
                                        onButtonPress: () => {
                                            (a(), D(m.NM.USER_MODAL_BLOCK_CONFIRM, m.NM.USER_MODAL_BLOCK_CANCEL, P));
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
        D = (e, i, a) => {
            (0, l.ZDy)(async () => {
                let { default: o } = await Promise.all([n.e('97652'), n.e('3078')]).then(n.bind(n, 744373));
                return (n) =>
                    (0, r.jsx)(
                        o,
                        T(v({}, n), {
                            userId: I,
                            confirmBlock: w(e),
                            onCancel: () => {
                                (null == a || a(),
                                    (0, m.qc)({
                                        channelId: t,
                                        warningId: O,
                                        senderId: I,
                                        warningType: h.pj.STRANGER_DANGER,
                                        cta: i
                                    }));
                            }
                        })
                    );
            });
        };
    return (0, r.jsx)(g.Q, {
        channelId: t,
        warningId: O,
        senderId: I,
        warningType: h.pj.STRANGER_DANGER,
        header: y.intl.string(y.t.iOkDpK),
        description: y.intl.string(y.t.ISUbcH),
        onDismiss: N,
        buttons: [
            {
                text: y.intl.string(y.t['Qk/c4+']),
                variant: 'primary',
                onClick: R
            },
            ...(A
                ? []
                : [
                      {
                          text: y.intl.string(y.t.ie0QdH),
                          variant: 'critical-primary',
                          onClick: () => D(m.NM.USER_BANNER_BLOCK_CONFIRM, m.NM.USER_BANNER_BLOCK_CANCEL)
                      }
                  ])
        ]
    });
}
