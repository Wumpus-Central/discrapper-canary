n.d(t, { j: () => S }), n(801541);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(126031),
    o = n(490249),
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
    E = n(70086);
function I(e) {
    let { percentage: t, label: n, canShowVoterDetails: l, answerId: a } = e,
        o = (0, m.GV)(),
        { channelId: d, messageId: c } = (0, f.Tu)(),
        [A, x] = r.useState(""),
        [C, I] = r.useState(!1),
        b = "" !== A && C,
        T = r.useCallback(() => {
            x((0, g.$m)(c, d, a));
        }, [c, d, a]),
        v = r.useCallback(() => {
            T(), I(!0);
        }, [T]),
        S = r.useCallback(() => {
            I(!1);
        }, []),
        y = r.useCallback(() => {
            (0, p.e)({ channelId: d, messageId: c, answerId: a });
        }, [d, c, a]);
    return (
        r.useEffect(() => {
            if (C)
                return (
                    h.A.addReactChangeListener(T),
                    () => {
                        h.A.removeReactChangeListener(T);
                    }
                );
        }, [C, T]),
        (0, i.jsxs)("div", {
            className: E.AA,
            children: [
                l
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
                                            onMouseEnter: v,
                                            onMouseLeave: S,
                                            onFocus: v,
                                            onBlur: S,
                                            onClick: y,
                                            "aria-describedby": b ? o : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, i.jsx)(_.QWc, {
                                        onMouseEnter: v,
                                        onMouseLeave: S,
                                        onFocus: v,
                                        onBlur: S,
                                        onClick: y,
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
        r = (0, _.zhh)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: c.A.Easing.inOut(c.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, i.jsx)(o.animated.span, { className: E.an, style: r, "aria-hidden": !0 });
}
function T(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: r, isVictor: l, isExpired: a, className: s } = e;
    return (0, d.YW)({ answersInteraction: t, didSelfVote: r })
        .with({ answersInteraction: A.CQ.RADIO_BUTTONS }, () =>
            (0, i.jsx)(x.k$, { isSelected: n, size: 24, className: s }),
        )
        .with({ answersInteraction: A.CQ.CHECKBOXES }, () =>
            (0, i.jsx)(x.e5, { isSelected: n, size: 20, className: s }),
        )
        .with({ answersInteraction: A.CQ.LIST, didSelfVote: !0 }, () =>
            (0, i.jsx)(x.Vx, { isVictor: l, isExpired: a, size: 24, className: s }),
        )
        .otherwise(() => null);
}
function v(e) {
    let { answer: t, isExpired: n, answersInteraction: r, canShowVoteCounts: l, canShowVoterDetails: o } = e,
        d = !0 === t.isSelected,
        c = !0 === t.didSelfVote,
        u = !0 === t.isVictor,
        m = t.shouldAnimateTransition;
    return (0, i.jsxs)("div", {
        className: a()(E.Fk, { [E.EK]: r !== A.CQ.LIST, [E.wH]: d }),
        children: [
            l ? (0, i.jsx)(b, { percentage: t.votesPercentage, shouldAnimate: m }) : null,
            null != t.pollMedia.emoji && (0, i.jsx)(x.Fb, { className: E.Zg, emoji: t.pollMedia.emoji }),
            (0, i.jsx)(_.Text, {
                className: E.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, i.jsx)(s.s, { children: C.intl.string(C.t["8DAM+5"]) }),
            l &&
                (0, i.jsx)(I, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: o,
                    answerId: t.answerId,
                }),
            (0, i.jsx)(T, {
                answersInteraction: r,
                isSelected: d,
                didSelfVote: c,
                isVictor: u,
                isExpired: n,
                className: E.ck,
            }),
        ],
    });
}
function S(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: r, canTapAnswers: l, ...a } = e;
    return (0, i.jsx)(x.Fh, {
        className: E.ry,
        answerClassName: E.ZF,
        answersInteraction: n,
        canTapAnswers: l,
        renderAnswerContent: (e) =>
            (0, i.jsx)(v, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: r,
                canShowVoterDetails: l,
            }),
        ...a,
    });
}
