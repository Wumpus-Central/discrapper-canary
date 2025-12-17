n.d(t, { M: () => x }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(286379),
    a = n(442837),
    o = n(481060),
    s = n(194359),
    c = n(797614),
    u = n(819557),
    d = n(138201),
    p = n(699516),
    f = n(378298),
    h = n(359119),
    m = n(473092),
    g = n(177342),
    b = n(134612),
    C = n(981631),
    y = n(388032);
function v(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        { isIgnored: o } = (0, a.cj)([p.Z], () => ({ isIgnored: p.Z.isIgnored(t) }), [t]),
        c = r.useCallback(() => {
            (0, m.qc)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: h.pj.STRANGER_DANGER,
                cta: m.NM.USER_MODAL_IGNORE,
            }),
                s.Z.ignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]),
        u = r.useCallback(() => {
            (0, m.qc)({
                channelId: n,
                warningId: l,
                senderId: t,
                warningType: h.pj.STRANGER_DANGER,
                cta: m.NM.USER_MODAL_UNIGNORE,
            }),
                s.Z.unignoreUser(t, "web_stranger_danger_more", n);
        }, [n, l, t]);
    return (0, i.jsx)(d.JZ, {
        title: y.intl.string(y.t.avyV7P),
        description: y.intl.string(y.t.naWE6W),
        buttonText: o ? y.intl.string(y.t["3SrzRT"]) : y.intl.string(y.t.avyV7P),
        onButtonPress: o ? u : c,
    });
}
function x(e) {
    let { channelId: t, warningId: x, senderId: O } = e,
        { isBlocked: E } = (0, a.cj)([p.Z], () => ({ isBlocked: p.Z.isBlocked(O) }), [O]),
        j = r.useCallback(() => {
            (0, f.T)(t, [x]);
        }, [t, x]),
        S = (0, b.C2)(),
        _ = r.useCallback(
            (e) => () => {
                s.Z.blockUser(O, { location: b.zr }).then(() => {
                    j();
                }),
                    (0, m.qc)({
                        channelId: t,
                        warningId: x,
                        senderId: O,
                        warningType: h.pj.STRANGER_DANGER,
                        cta: e,
                    });
            },
            [j, t, x, O],
        );
    r.useEffect(() => {
        (0, m.MC)(C.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: x,
            senderId: O,
            warningType: h.pj.STRANGER_DANGER,
        }),
            c.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, [t, x, O]);
    let P = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("59385").then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: r, onClose: l } = n;
                    return (0, i.jsx)(e, {
                        transitionState: r,
                        onClose: l,
                        channelId: t,
                        warningId: x,
                        senderId: O,
                        description: y.intl.string(y.t.DJMZX6),
                        safetyTipRows: S.map((e, t) =>
                            (0, i.jsx)(
                                u.q,
                                {
                                    index: t,
                                    listType: "numbered",
                                    title: e,
                                },
                                t,
                            ),
                        ),
                        actionRows: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(
                                    v,
                                    {
                                        senderId: O,
                                        channelId: t,
                                        warningId: x,
                                    },
                                    "more-tips-button",
                                ),
                                (0, i.jsx)(
                                    d.JZ,
                                    {
                                        title: y.intl.string(y.t["5QYPO2"]),
                                        description: y.intl.string(y.t.G08MKu),
                                        buttonText: y.intl.string(y.t["5QYPO2"]),
                                        buttonVariant: "critical-primary",
                                        onButtonPress: () => {
                                            l(), I(m.NM.USER_MODAL_BLOCK_CONFIRM, m.NM.USER_MODAL_BLOCK_CANCEL, P);
                                        },
                                    },
                                    "block-button",
                                ),
                            ],
                        }),
                    });
                };
            });
        },
        I = (e, r, l) => {
            (0, o.ZDy)(async () => {
                let { default: a } = await Promise.all([n.e("97652"), n.e("31834")]).then(n.bind(n, 744373));
                return (n) => {
                    var o, s;
                    return (0, i.jsx)(
                        a,
                        ((o = (function (e) {
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
                        })({}, n)),
                        (s = s =
                            {
                                userId: O,
                                confirmBlock: _(e),
                                onCancel: () => {
                                    null == l || l(),
                                        (0, m.qc)({
                                            channelId: t,
                                            warningId: x,
                                            senderId: O,
                                            warningType: h.pj.STRANGER_DANGER,
                                            cta: r,
                                        });
                                },
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        o),
                    );
                };
            });
        };
    return (0, i.jsx)(g.Q, {
        channelId: t,
        warningId: x,
        senderId: O,
        warningType: h.pj.STRANGER_DANGER,
        header: y.intl.string(y.t.iOkDpM),
        description: y.intl.string(y.t.ISUbcM),
        onDismiss: j,
        buttons: [
            {
                text: y.intl.string(y.t["Qk/c48"]),
                variant: "primary",
                onClick: () => {
                    P(),
                        (0, m.qc)({
                            channelId: t,
                            warningId: x,
                            senderId: O,
                            warningType: h.pj.STRANGER_DANGER,
                            cta: m.NM.OPEN_MORE_TIPS,
                        });
                },
            },
            ...(E
                ? []
                : [
                      {
                          text: y.intl.string(y.t.ie0QdN),
                          variant: "critical-primary",
                          onClick: () => I(m.NM.USER_BANNER_BLOCK_CONFIRM, m.NM.USER_BANNER_BLOCK_CANCEL),
                      },
                  ]),
        ],
    });
}
