n.d(t, { j: () => y }), n(801541);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(126031),
    o = n(382222),
    d = n(889137),
    c = n(615300),
    u = n(990078),
    _ = n(397927),
    m = n(915089),
    h = n(956703),
    p = n(180662),
    g = n(969632),
    A = n(438437),
    x = n(306417),
    f = n(290794),
    C = n(985018),
    I = n(79606);
function E(e) {
    let { percentage: t, label: n, canShowVoterDetails: r, answerId: l } = e,
        o = (0, m.GV)(),
        { channelId: d, messageId: c } = (0, f.Tu)(),
        [A, x] = a.useState(""),
        [C, E] = a.useState(!1),
        b = "" !== A && C,
        v = a.useCallback(() => {
            x((0, g.$m)(c, d, l));
        }, [c, d, l]),
        T = a.useCallback(() => {
            v(), E(!0);
        }, [v]),
        y = a.useCallback(() => {
            E(!1);
        }, []),
        S = a.useCallback(() => {
            (0, p.e)({ channelId: d, messageId: c, answerId: l });
        }, [d, c, l]);
    return (
        a.useEffect(() => {
            if (C)
                return (
                    h.A.addReactChangeListener(v),
                    () => {
                        h.A.removeReactChangeListener(v);
                    }
                );
        }, [C, v]),
        (0, i.jsxs)("div", {
            className: I.AA,
            children: [
                r
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              "" !== A
                                  ? (0, i.jsx)(u.m, {
                                        __unsupportedReactNodeAsText: (0, i.jsx)(_.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: A,
                                        }),
                                        forceOpen: b,
                                        "aria-label": !1,
                                        children: (0, i.jsx)(_.QWc, {
                                            onMouseEnter: T,
                                            onMouseLeave: y,
                                            onFocus: T,
                                            onBlur: y,
                                            onClick: S,
                                            "aria-describedby": b ? o : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, i.jsx)(_.QWc, {
                                        onMouseEnter: T,
                                        onMouseLeave: y,
                                        onFocus: T,
                                        onBlur: y,
                                        onClick: S,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              b && (0, i.jsx)(s.s, { id: o, children: A }),
                          ],
                      })
                    : (0, i.jsx)(_.Text, {
                          variant: "text-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, i.jsxs)(_.Text, {
                    variant: "text-md/bold",
                    color: "none",
                    scaleFontToUserSetting: !0,
                    children: [t, "%"],
                }),
            ],
        })
    );
}
function b(e) {
    let { percentage: t, shouldAnimate: n } = e,
        a = (0, _.zhh)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: c.A.Easing.inOut(c.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, i.jsx)(o.animated.span, { className: I.an, style: a, "aria-hidden": !0 });
}
function v(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: a, isVictor: r, isExpired: l, className: s } = e;
    return (0, d.YW)({ answersInteraction: t, didSelfVote: a })
        .with({ answersInteraction: A.CQ.RADIO_BUTTONS }, () =>
            (0, i.jsx)(x.k$, { isSelected: n, size: 24, className: s }),
        )
        .with({ answersInteraction: A.CQ.CHECKBOXES }, () =>
            (0, i.jsx)(x.e5, { isSelected: n, size: 20, className: s }),
        )
        .with({ answersInteraction: A.CQ.LIST, didSelfVote: !0 }, () =>
            (0, i.jsx)(x.Vx, { isVictor: r, isExpired: l, size: 24, className: s }),
        )
        .otherwise(() => null);
}
function T(e) {
    let { answer: t, isExpired: n, answersInteraction: a, canShowVoteCounts: r, canShowVoterDetails: o } = e,
        d = !0 === t.isSelected,
        c = !0 === t.didSelfVote,
        u = !0 === t.isVictor,
        m = t.shouldAnimateTransition;
    return (0, i.jsxs)("div", {
        className: l()(I.Fk, { [I.EK]: a !== A.CQ.LIST, [I.wH]: d }),
        children: [
            r ? (0, i.jsx)(b, { percentage: t.votesPercentage, shouldAnimate: m }) : null,
            null != t.pollMedia.emoji && (0, i.jsx)(x.Fb, { className: I.Zg, emoji: t.pollMedia.emoji }),
            (0, i.jsx)(_.Text, {
                className: I.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, i.jsx)(s.s, { children: C.intl.string(C.t["8DAM+5"]) }),
            r &&
                (0, i.jsx)(E, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: o,
                    answerId: t.answerId,
                }),
            (0, i.jsx)(v, {
                answersInteraction: a,
                isSelected: d,
                didSelfVote: c,
                isVictor: u,
                isExpired: n,
                className: I.ck,
            }),
        ],
    });
}
function y(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: a, canTapAnswers: r, ...l } = e;
    return (0, i.jsx)(x.Fh, {
        className: I.ry,
        answerClassName: I.ZF,
        answersInteraction: n,
        canTapAnswers: r,
        renderAnswerContent: (e) =>
            (0, i.jsx)(T, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: a,
                canShowVoterDetails: r,
            }),
        ...l,
    });
}
