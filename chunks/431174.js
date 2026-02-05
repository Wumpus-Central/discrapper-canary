n.d(t, { j: () => S }), n(801541);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(126031),
    o = n(563495),
    d = n(889137),
    c = n(615300),
    u = n(990078),
    m = n(397927),
    _ = n(915089),
    h = n(956703),
    p = n(180662),
    g = n(969632),
    A = n(438437),
    f = n(306417),
    x = n(290794),
    E = n(985018),
    C = n(121272);
function I(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: r } = e,
        o = (0, _.GV)(),
        { channelId: d, messageId: c } = (0, x.Tu)(),
        [A, f] = l.useState(""),
        [E, I] = l.useState(!1),
        T = "" !== A && E,
        v = l.useCallback(() => {
            f((0, g.$m)(c, d, r));
        }, [c, d, r]),
        N = l.useCallback(() => {
            v(), I(!0);
        }, [v]),
        S = l.useCallback(() => {
            I(!1);
        }, []),
        b = l.useCallback(() => {
            (0, p.e)({ channelId: d, messageId: c, answerId: r });
        }, [d, c, r]);
    return (
        l.useEffect(() => {
            if (E)
                return (
                    h.A.addReactChangeListener(v),
                    () => {
                        h.A.removeReactChangeListener(v);
                    }
                );
        }, [E, v]),
        (0, i.jsxs)("div", {
            className: C.AA,
            children: [
                a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              "" !== A
                                  ? (0, i.jsx)(u.m, {
                                        __unsupportedReactNodeAsText: (0, i.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: A,
                                        }),
                                        forceOpen: T,
                                        "aria-label": !1,
                                        children: (0, i.jsx)(m.QWc, {
                                            onMouseEnter: N,
                                            onMouseLeave: S,
                                            onFocus: N,
                                            onBlur: S,
                                            onClick: b,
                                            "aria-describedby": T ? o : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, i.jsx)(m.QWc, {
                                        onMouseEnter: N,
                                        onMouseLeave: S,
                                        onFocus: N,
                                        onBlur: S,
                                        onClick: b,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              T && (0, i.jsx)(s.s, { id: o, children: A }),
                          ],
                      })
                    : (0, i.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, i.jsxs)(m.Text, {
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
        l = (0, m.zhh)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: c.A.Easing.inOut(c.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, i.jsx)(o.animated.span, { className: C.an, style: l, "aria-hidden": !0 });
}
function v(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: l, isVictor: a, isExpired: r, className: s } = e;
    return (0, d.YW)({ answersInteraction: t, didSelfVote: l })
        .with({ answersInteraction: A.CQ.RADIO_BUTTONS }, () =>
            (0, i.jsx)(f.k$, { isSelected: n, size: 24, className: s }),
        )
        .with({ answersInteraction: A.CQ.CHECKBOXES }, () =>
            (0, i.jsx)(f.e5, { isSelected: n, size: 20, className: s }),
        )
        .with({ answersInteraction: A.CQ.LIST, didSelfVote: !0 }, () =>
            (0, i.jsx)(f.Vx, { isVictor: a, isExpired: r, size: 24, className: s }),
        )
        .otherwise(() => null);
}
function N(e) {
    let { answer: t, isExpired: n, answersInteraction: l, canShowVoteCounts: a, canShowVoterDetails: o } = e,
        d = !0 === t.isSelected,
        c = !0 === t.didSelfVote,
        u = !0 === t.isVictor,
        _ = t.shouldAnimateTransition;
    return (0, i.jsxs)("div", {
        className: r()(C.Fk, { [C.EK]: l !== A.CQ.LIST, [C.wH]: d }),
        children: [
            a ? (0, i.jsx)(T, { percentage: t.votesPercentage, shouldAnimate: _ }) : null,
            null != t.pollMedia.emoji && (0, i.jsx)(f.Fb, { className: C.Zg, emoji: t.pollMedia.emoji }),
            (0, i.jsx)(m.Text, {
                className: C.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, i.jsx)(s.s, { children: E.intl.string(E.t["8DAM+5"]) }),
            a &&
                (0, i.jsx)(I, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: o,
                    answerId: t.answerId,
                }),
            (0, i.jsx)(v, {
                answersInteraction: l,
                isSelected: d,
                didSelfVote: c,
                isVictor: u,
                isExpired: n,
                className: C.ck,
            }),
        ],
    });
}
function S(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: l, canTapAnswers: a, ...r } = e;
    return (0, i.jsx)(f.Fh, {
        className: C.ry,
        answerClassName: C.ZF,
        answersInteraction: n,
        canTapAnswers: a,
        renderAnswerContent: (e) =>
            (0, i.jsx)(N, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: l,
                canShowVoterDetails: a,
            }),
        ...r,
    });
}
