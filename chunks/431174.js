n.d(t, { j: () => y }), n(801541);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(126031),
    o = n(687498),
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
    E = n(79606);
function I(e) {
    let { percentage: t, label: n, canShowVoterDetails: s, answerId: r } = e,
        o = (0, m.GV)(),
        { channelId: d, messageId: c } = (0, f.Tu)(),
        [A, x] = l.useState(""),
        [C, I] = l.useState(!1),
        v = "" !== A && C,
        b = l.useCallback(() => {
            x((0, g.$m)(c, d, r));
        }, [c, d, r]),
        T = l.useCallback(() => {
            b(), I(!0);
        }, [b]),
        y = l.useCallback(() => {
            I(!1);
        }, []),
        N = l.useCallback(() => {
            (0, p.e)({ channelId: d, messageId: c, answerId: r });
        }, [d, c, r]);
    return (
        l.useEffect(() => {
            if (C)
                return (
                    h.A.addReactChangeListener(b),
                    () => {
                        h.A.removeReactChangeListener(b);
                    }
                );
        }, [C, b]),
        (0, i.jsxs)("div", {
            className: E.AA,
            children: [
                s
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
                                        forceOpen: v,
                                        "aria-label": !1,
                                        children: (0, i.jsx)(_.QWc, {
                                            onMouseEnter: T,
                                            onMouseLeave: y,
                                            onFocus: T,
                                            onBlur: y,
                                            onClick: N,
                                            "aria-describedby": v ? o : void 0,
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
                                        onClick: N,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              v && (0, i.jsx)(a.s, { id: o, children: A }),
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
function v(e) {
    let { percentage: t, shouldAnimate: n } = e,
        l = (0, _.zhh)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: c.A.Easing.inOut(c.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, i.jsx)(o.animated.span, { className: E.an, style: l, "aria-hidden": !0 });
}
function b(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: l, isVictor: s, isExpired: r, className: a } = e;
    return (0, d.YW)({ answersInteraction: t, didSelfVote: l })
        .with({ answersInteraction: A.CQ.RADIO_BUTTONS }, () =>
            (0, i.jsx)(x.k$, { isSelected: n, size: 24, className: a }),
        )
        .with({ answersInteraction: A.CQ.CHECKBOXES }, () =>
            (0, i.jsx)(x.e5, { isSelected: n, size: 20, className: a }),
        )
        .with({ answersInteraction: A.CQ.LIST, didSelfVote: !0 }, () =>
            (0, i.jsx)(x.Vx, { isVictor: s, isExpired: r, size: 24, className: a }),
        )
        .otherwise(() => null);
}
function T(e) {
    let { answer: t, isExpired: n, answersInteraction: l, canShowVoteCounts: s, canShowVoterDetails: o } = e,
        d = !0 === t.isSelected,
        c = !0 === t.didSelfVote,
        u = !0 === t.isVictor,
        m = t.shouldAnimateTransition;
    return (0, i.jsxs)("div", {
        className: r()(E.Fk, { [E.EK]: l !== A.CQ.LIST, [E.wH]: d }),
        children: [
            s ? (0, i.jsx)(v, { percentage: t.votesPercentage, shouldAnimate: m }) : null,
            null != t.pollMedia.emoji && (0, i.jsx)(x.Fb, { className: E.Zg, emoji: t.pollMedia.emoji }),
            (0, i.jsx)(_.Text, {
                className: E.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, i.jsx)(a.s, { children: C.intl.string(C.t["8DAM+5"]) }),
            s &&
                (0, i.jsx)(I, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: o,
                    answerId: t.answerId,
                }),
            (0, i.jsx)(b, {
                answersInteraction: l,
                isSelected: d,
                didSelfVote: c,
                isVictor: u,
                isExpired: n,
                className: E.ck,
            }),
        ],
    });
}
function y(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: l, canTapAnswers: s, ...r } = e;
    return (0, i.jsx)(x.Fh, {
        className: E.ry,
        answerClassName: E.ZF,
        answersInteraction: n,
        canTapAnswers: s,
        renderAnswerContent: (e) =>
            (0, i.jsx)(T, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: l,
                canShowVoterDetails: s,
            }),
        ...r,
    });
}
