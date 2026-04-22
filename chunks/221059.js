n.d(t, { e: () => x });
var i = n(627968),
    l = n(64700),
    a = n(731738),
    s = n(311907),
    r = n(192308),
    o = n(49229),
    c = n(831062),
    d = n(754302),
    u = n(632738),
    h = n(994500),
    m = n(544231),
    A = n(349435),
    g = n(665909),
    p = n(576045),
    _ = n(327337),
    f = n(652215),
    E = n(985018);
function C(e) {
    let { senderId: t, channelId: n, warningId: a } = e,
        { isIgnored: r } = (0, s.cf)([h.A], () => ({ isIgnored: h.A.isIgnored(t) }), [t]),
        c = l.useCallback(() => {
            (0, g._$)({
                channelId: n,
                warningId: a,
                senderId: t,
                warningType: A._j.STRANGER_DANGER,
                cta: g.Wm.USER_MODAL_IGNORE,
            }),
                o.A.ignoreUser(t, "web_stranger_danger_more", n);
        }, [n, a, t]),
        d = l.useCallback(() => {
            (0, g._$)({
                channelId: n,
                warningId: a,
                senderId: t,
                warningType: A._j.STRANGER_DANGER,
                cta: g.Wm.USER_MODAL_UNIGNORE,
            }),
                o.A.unignoreUser(t, "web_stranger_danger_more", n);
        }, [n, a, t]);
    return (0, i.jsx)(u.PQ, {
        title: E.intl.string(E.t.avyV7P),
        description: E.intl.string(E.t.naWE6W),
        buttonText: r ? E.intl.string(E.t["3SrzRT"]) : E.intl.string(E.t.avyV7P),
        onButtonPress: r ? d : c,
    });
}
function x(e) {
    let { channelId: t, warningId: x, senderId: S } = e,
        { isBlocked: I } = (0, s.cf)([h.A], () => ({ isBlocked: h.A.isBlocked(S) }), [S]),
        N = l.useCallback(() => {
            (0, m.xi)(t, [x]);
        }, [t, x]),
        v = (0, _.eT)(),
        T = l.useCallback(
            (e) => () => {
                o.A.blockUser(S, { location: _.Rx }).then(() => {
                    N();
                }),
                    (0, g._$)({ channelId: t, warningId: x, senderId: S, warningType: A._j.STRANGER_DANGER, cta: e });
            },
            [N, t, x, S],
        );
    l.useEffect(() => {
        (0, g.mO)(f.HAw.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: x,
            senderId: S,
            warningType: A._j.STRANGER_DANGER,
        }),
            c.A.increment({ name: a.K.SAFETY_WARNING_VIEW });
    }, [t, x, S]);
    let y = () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("8546").then(n.bind(n, 63865));
                return (n) => {
                    let { transitionState: l, onClose: a } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: a,
                        channelId: t,
                        warningId: x,
                        senderId: S,
                        description: E.intl.string(E.t.DJMZX6),
                        safetyTipRows: v.map((e, t) =>
                            (0, i.jsx)(d.B, { index: t, listType: "numbered", title: e }, t),
                        ),
                        actionRows: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(C, { senderId: S, channelId: t, warningId: x }, "more-tips-button"),
                                (0, i.jsx)(
                                    u.PQ,
                                    {
                                        title: E.intl.string(E.t["5QYPO2"]),
                                        description: E.intl.string(E.t.G08MKu),
                                        buttonText: E.intl.string(E.t["5QYPO2"]),
                                        buttonVariant: "critical-primary",
                                        onButtonPress: () => {
                                            a(), b(g.Wm.USER_MODAL_BLOCK_CONFIRM, g.Wm.USER_MODAL_BLOCK_CANCEL, y);
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
        b = (e, l, a) => {
            (0, r.openModalLazy)(async () => {
                let { default: s } = await n.e("67554").then(n.bind(n, 219801));
                return (n) =>
                    (0, i.jsx)(s, {
                        ...n,
                        userId: S,
                        confirmBlock: T(e),
                        onCancel: () => {
                            a?.(),
                                (0, g._$)({
                                    channelId: t,
                                    warningId: x,
                                    senderId: S,
                                    warningType: A._j.STRANGER_DANGER,
                                    cta: l,
                                });
                        },
                    });
            });
        };
    return (0, i.jsx)(p.N, {
        channelId: t,
        warningId: x,
        senderId: S,
        warningType: A._j.STRANGER_DANGER,
        header: E.intl.string(E.t.iOkDpM),
        description: E.intl.string(E.t.ISUbcM),
        onDismiss: N,
        buttons: [
            {
                text: E.intl.string(E.t["Qk/c48"]),
                variant: "primary",
                onClick: () => {
                    y(),
                        (0, g._$)({
                            channelId: t,
                            warningId: x,
                            senderId: S,
                            warningType: A._j.STRANGER_DANGER,
                            cta: g.Wm.OPEN_MORE_TIPS,
                        });
                },
            },
            ...(I
                ? []
                : [
                      {
                          text: E.intl.string(E.t.ie0QdN),
                          variant: "critical-primary",
                          onClick: () => b(g.Wm.USER_BANNER_BLOCK_CONFIRM, g.Wm.USER_BANNER_BLOCK_CANCEL),
                      },
                  ]),
        ],
    });
}
