n.d(t, {
    e: () => j,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(731738),
    a = n(311907),
    s = n(397927),
    o = n(49229),
    c = n(831062),
    u = n(754302),
    d = n(632738),
    f = n(994500),
    p = n(544231),
    h = n(349435),
    b = n(665909),
    g = n(576045),
    m = n(327337),
    A = n(652215),
    y = n(985018);

function O(e) {
    let { senderId: t, channelId: n, warningId: i } = e,
        { isIgnored: s } = (0, a.cf)(
            [f.A],
            () => ({
                isIgnored: f.A.isIgnored(t),
            }),
            [t],
        ),
        c = l.useCallback(() => {
            (0, b._$)({
                channelId: n,
                warningId: i,
                senderId: t,
                warningType: h._j.STRANGER_DANGER,
                cta: b.Wm.USER_MODAL_IGNORE,
            }),
                o.A.ignoreUser(t, "web_stranger_danger_more", n);
        }, [n, i, t]),
        u = l.useCallback(() => {
            (0, b._$)({
                channelId: n,
                warningId: i,
                senderId: t,
                warningType: h._j.STRANGER_DANGER,
                cta: b.Wm.USER_MODAL_UNIGNORE,
            }),
                o.A.unignoreUser(t, "web_stranger_danger_more", n);
        }, [n, i, t]);
    return (0, r.jsx)(d.PQ, {
        title: y.intl.string(y.t.avyV7P),
        description: y.intl.string(y.t.naWE6W),
        buttonText: s ? y.intl.string(y.t["3SrzRT"]) : y.intl.string(y.t.avyV7P),
        onButtonPress: s ? u : c,
    });
}

function j(e) {
    let { channelId: t, warningId: j, senderId: v } = e,
        { isBlocked: x } = (0, a.cf)(
            [f.A],
            () => ({
                isBlocked: f.A.isBlocked(v),
            }),
            [v],
        ),
        E = l.useCallback(() => {
            (0, p.xi)(t, [j]);
        }, [t, j]),
        _ = (0, m.eT)(),
        C = l.useCallback(
            (e) => () => {
                o.A.blockUser(v, {
                    location: m.Rx,
                }).then(() => {
                    E();
                }),
                    (0, b._$)({
                        channelId: t,
                        warningId: j,
                        senderId: v,
                        warningType: h._j.STRANGER_DANGER,
                        cta: e,
                    });
            },
            [E, t, j, v],
        );
    l.useEffect(() => {
        (0, b.mO)(A.HAw.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: j,
            senderId: v,
            warningType: h._j.STRANGER_DANGER,
        }),
            c.A.increment({
                name: i.K.SAFETY_WARNING_VIEW,
            });
    }, [t, j, v]);
    let S = () => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("8546").then(n.bind(n, 63865));
                return (n) => {
                    let { transitionState: l, onClose: i } = n;
                    return (0, r.jsx)(e, {
                        transitionState: l,
                        onClose: i,
                        channelId: t,
                        warningId: j,
                        senderId: v,
                        description: y.intl.string(y.t.DJMZX6),
                        safetyTipRows: _.map((e, t) =>
                            (0, r.jsx)(
                                u.B,
                                {
                                    index: t,
                                    listType: "numbered",
                                    title: e,
                                },
                                t,
                            ),
                        ),
                        actionRows: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    O,
                                    {
                                        senderId: v,
                                        channelId: t,
                                        warningId: j,
                                    },
                                    "more-tips-button",
                                ),
                                (0, r.jsx)(
                                    d.PQ,
                                    {
                                        title: y.intl.string(y.t["5QYPO2"]),
                                        description: y.intl.string(y.t.G08MKu),
                                        buttonText: y.intl.string(y.t["5QYPO2"]),
                                        buttonVariant: "critical-primary",
                                        onButtonPress: () => {
                                            i(), I(b.Wm.USER_MODAL_BLOCK_CONFIRM, b.Wm.USER_MODAL_BLOCK_CANCEL, S);
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
        I = (e, l, i) => {
            (0, s.mMO)(async () => {
                let { default: a } = await Promise.all([n.e("28969"), n.e("4309")]).then(n.bind(n, 219801));
                return (n) => {
                    var s, o;
                    return (0, r.jsx)(
                        a,
                        ((s = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (o = o =
                            {
                                userId: v,
                                confirmBlock: C(e),
                                onCancel: () => {
                                    null == i || i(),
                                        (0, b._$)({
                                            channelId: t,
                                            warningId: j,
                                            senderId: v,
                                            warningType: h._j.STRANGER_DANGER,
                                            cta: l,
                                        });
                                },
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        s),
                    );
                };
            });
        };
    return (0, r.jsx)(g.N, {
        channelId: t,
        warningId: j,
        senderId: v,
        warningType: h._j.STRANGER_DANGER,
        header: y.intl.string(y.t.iOkDpM),
        description: y.intl.string(y.t.ISUbcM),
        onDismiss: E,
        buttons: [
            {
                text: y.intl.string(y.t["Qk/c48"]),
                variant: "primary",
                onClick: () => {
                    S(),
                        (0, b._$)({
                            channelId: t,
                            warningId: j,
                            senderId: v,
                            warningType: h._j.STRANGER_DANGER,
                            cta: b.Wm.OPEN_MORE_TIPS,
                        });
                },
            },
            ...(x
                ? []
                : [
                      {
                          text: y.intl.string(y.t.ie0QdN),
                          variant: "critical-primary",
                          onClick: () => I(b.Wm.USER_BANNER_BLOCK_CONFIRM, b.Wm.USER_BANNER_BLOCK_CANCEL),
                      },
                  ]),
        ],
    });
}
