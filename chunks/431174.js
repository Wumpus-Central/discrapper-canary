n.d(t, { j: () => N }), n(801541);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(126031),
    o = n(419354),
    d = n(889137),
    c = n(615300),
    u = n(990078),
    m = n(834730),
    _ = n(123292),
    h = n(717421),
    p = n(915089),
    g = n(956703),
    A = n(180662),
    f = n(969632),
    x = n(438437),
    C = n(306417),
    E = n(290794),
    I = n(985018),
    v = n(140957);
function b(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: s } = e,
        o = (0, p.GV)(),
        { channelId: d, messageId: c } = (0, E.Tu)(),
        [h, x] = l.useState(""),
        [C, I] = l.useState(!1),
        b = "" !== h && C,
        T = l.useCallback(() => {
            x((0, f.$m)(c, d, s));
        }, [c, d, s]),
        S = l.useCallback(() => {
            T(), I(!0);
        }, [T]),
        y = l.useCallback(() => {
            I(!1);
        }, []),
        N = l.useCallback(() => {
            (0, A.e)({ channelId: d, messageId: c, answerId: s });
        }, [d, c, s]);
    return (
        l.useEffect(() => {
            if (C)
                return (
                    g.A.addReactChangeListener(T),
                    () => {
                        g.A.removeReactChangeListener(T);
                    }
                );
        }, [C, T]),
        (0, i.jsxs)("div", {
            className: v.AA,
            children: [
                a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              "" !== h
                                  ? (0, i.jsx)(u.m, {
                                        __unsupportedReactNodeAsText: (0, i.jsx)(m.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: h,
                                        }),
                                        forceOpen: b,
                                        "aria-label": !1,
                                        children: (0, i.jsx)(_.Q, {
                                            onMouseEnter: S,
                                            onMouseLeave: y,
                                            onFocus: S,
                                            onBlur: y,
                                            onClick: N,
                                            "aria-describedby": b ? o : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, i.jsx)(_.Q, {
                                        onMouseEnter: S,
                                        onMouseLeave: y,
                                        onFocus: S,
                                        onBlur: y,
                                        onClick: N,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              b && (0, i.jsx)(r.s, { id: o, children: h }),
                          ],
                      })
                    : (0, i.jsx)(m.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, i.jsxs)(m.E, {
                    variant: "text-md/bold",
                    color: "none",
                    scaleFontToUserSetting: !0,
                    children: [t, "%"],
                }),
            ],
        })
    );
}
function T(e) {
    let { percentage: t, shouldAnimate: n } = e,
        l = (0, h.z)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: c.A.Easing.inOut(c.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, i.jsx)(o.animated.span, { className: v.an, style: l, "aria-hidden": !0 });
}
function S(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: l, isVictor: a, isExpired: s, className: r } = e;
    return (0, d.YW)({ answersInteraction: t, didSelfVote: l })
        .with({ answersInteraction: x.CQ.RADIO_BUTTONS }, () =>
            (0, i.jsx)(C.k$, { isSelected: n, size: 24, className: r }),
        )
        .with({ answersInteraction: x.CQ.CHECKBOXES }, () =>
            (0, i.jsx)(C.e5, { isSelected: n, size: 20, className: r }),
        )
        .with({ answersInteraction: x.CQ.LIST, didSelfVote: !0 }, () =>
            (0, i.jsx)(C.Vx, { isVictor: a, isExpired: s, size: 24, className: r }),
        )
        .otherwise(() => null);
}
function y(e) {
    let { answer: t, isExpired: n, answersInteraction: l, canShowVoteCounts: a, canShowVoterDetails: o } = e,
        d = !0 === t.isSelected,
        c = !0 === t.didSelfVote,
        u = !0 === t.isVictor,
        _ = t.shouldAnimateTransition;
    return (0, i.jsxs)("div", {
        className: s()(v.Fk, { [v.EK]: l !== x.CQ.LIST, [v.wH]: d }),
        children: [
            a ? (0, i.jsx)(T, { percentage: t.votesPercentage, shouldAnimate: _ }) : null,
            null != t.pollMedia.emoji && (0, i.jsx)(C.Fb, { className: v.Zg, emoji: t.pollMedia.emoji }),
            (0, i.jsx)(m.E, {
                className: v.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, i.jsx)(r.s, { children: I.intl.string(I.t["8DAM+5"]) }),
            a &&
                (0, i.jsx)(b, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: o,
                    answerId: t.answerId,
                }),
            (0, i.jsx)(S, {
                answersInteraction: l,
                isSelected: d,
                didSelfVote: c,
                isVictor: u,
                isExpired: n,
                className: v.ck,
            }),
        ],
    });
}
function N(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: l, canTapAnswers: a, ...s } = e;
    return (0, i.jsx)(C.Fh, {
        className: v.ry,
        answerClassName: v.ZF,
        answersInteraction: n,
        canTapAnswers: a,
        renderAnswerContent: (e) =>
            (0, i.jsx)(y, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: l,
                canShowVoterDetails: a,
            }),
        ...s,
    });
}
