(n.d(t, { A: () => Q }), n(801541));
var s = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    l = n(889137),
    o = n(744593),
    c = n(534514),
    d = n(123292),
    u = n(834730),
    h = n(821609),
    m = n(707554),
    x = n(180662),
    w = n(77692),
    p = n(438437),
    g = n(306417),
    A = n(792996),
    y = n(588466);
function f(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, s.jsxs)("div", {
        className: y.AA,
        children: [
            t && (0, s.jsx)(w.s, { children: A.intl.string(A.t["8DAM+5"]) }),
            (0, s.jsxs)(u.E, { variant: "body-md/semibold", color: "none", children: [i, "%"] }),
            (0, s.jsx)(u.E, { variant: "body-xs/semibold", color: "none", children: n }),
        ],
    });
}
function j(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: a } = e,
        l = !0 === t.isSelected,
        o = !0 === t.didSelfVote,
        c = !0 === t.isVictor;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(g.Dt, {
                attachmentClassName: r()(y.oh, { [y.Wx]: a }),
                emojiClassName: y.Zg,
                media: t.pollMedia,
                fallback: (0, s.jsx)("div", { className: r()(y.oh, y.nb) }),
            }),
            l && (0, s.jsx)(g.Vx, { size: 40, isVictor: c, isExpired: n, className: y.Dt }),
            a &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(f, {
                            didSelfVote: o,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: o ? i : void 0,
                        }),
                        ((!n && o) || c) && (0, s.jsx)(g.Vx, { size: 18, isVictor: c, isExpired: n, className: y.Po }),
                    ],
                }),
        ],
    });
}
function b(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: a, ...l } = e;
    return (0, s.jsx)(g.Fh, {
        className: y.ry,
        answerClassName: r()(y.ZF, { [y.EK]: i !== p.CQ.LIST }),
        myAvatarUrl: n,
        answersInteraction: i,
        renderAnswerContent: (e) =>
            (0, s.jsx)(j, { answer: e, isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: a }),
        ...l,
    });
}
var S = n(290794),
    v = n(789646),
    C = n(736819),
    N = n(615300),
    E = n(866665),
    I = n(717421),
    T = n(915089),
    _ = n(956703),
    V = n(969632),
    k = n(259218);
function L(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: r } = e,
        l = (0, T.GV)(),
        { channelId: o, messageId: c } = (0, S.Tu)(),
        [h, m] = i.useState(""),
        [p, g] = i.useState(!1),
        A = "" !== h && p,
        y = i.useCallback(() => {
            m((0, V.$m)(c, o, r));
        }, [c, o, r]),
        f = i.useCallback(() => {
            (y(), g(!0));
        }, [y]),
        j = i.useCallback(() => {
            g(!1);
        }, []),
        b = i.useCallback(() => {
            (0, x.e)({ channelId: o, messageId: c, answerId: r });
        }, [o, c, r]);
    return (
        i.useEffect(() => {
            if (p)
                return (
                    _.A.addReactChangeListener(y),
                    () => {
                        _.A.removeReactChangeListener(y);
                    }
                );
        }, [p, y]),
        (0, s.jsxs)("div", {
            className: k.AA,
            children: [
                a
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              "" !== h
                                  ? (0, s.jsx)(E.m, {
                                        __unsupportedReactNodeAsText: (0, s.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: h,
                                        }),
                                        forceOpen: A,
                                        "aria-label": !1,
                                        children: (0, s.jsx)(d.Q, {
                                            onMouseEnter: f,
                                            onMouseLeave: j,
                                            onFocus: f,
                                            onBlur: j,
                                            onClick: b,
                                            "aria-describedby": A ? l : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "body-xs/semibold",
                                        }),
                                    })
                                  : (0, s.jsx)(d.Q, {
                                        onMouseEnter: f,
                                        onMouseLeave: j,
                                        onFocus: f,
                                        onBlur: j,
                                        onClick: b,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "body-xs/semibold",
                                    }),
                              A && (0, s.jsx)(w.s, { id: l, children: h }),
                          ],
                      })
                    : (0, s.jsx)(u.E, {
                          variant: "body-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, s.jsxs)(u.E, {
                    variant: "body-md/semibold",
                    color: "none",
                    scaleFontToUserSetting: !0,
                    children: [t, "%"],
                }),
            ],
        })
    );
}
function M(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, I.z)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: N.A.Easing.inOut(N.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, s.jsx)(C.animated.span, { className: k.an, style: i, "aria-hidden": !0 });
}
function R(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: a, isExpired: r, className: o } = e;
    return (0, l.YW)({ answersInteraction: t, didSelfVote: i })
        .with({ answersInteraction: p.CQ.RADIO_BUTTONS }, () =>
            (0, s.jsx)(g.k$, { isSelected: n, size: 24, className: o }),
        )
        .with({ answersInteraction: p.CQ.CHECKBOXES }, () =>
            (0, s.jsx)(g.e5, { isSelected: n, size: 20, className: o }),
        )
        .with({ answersInteraction: p.CQ.LIST, didSelfVote: !0 }, () =>
            (0, s.jsx)(g.Vx, { isVictor: a, isExpired: r, size: 24, className: o }),
        )
        .otherwise(() => null);
}
function F(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: a, canShowVoterDetails: l } = e,
        o = !0 === t.isSelected,
        c = !0 === t.didSelfVote,
        d = !0 === t.isVictor,
        h = t.shouldAnimateTransition;
    return (0, s.jsxs)("div", {
        className: r()(k.Fk, { [k.EK]: i !== p.CQ.LIST, [k.wH]: o }),
        children: [
            a ? (0, s.jsx)(M, { percentage: t.votesPercentage, shouldAnimate: h }) : null,
            null != t.pollMedia.emoji && (0, s.jsx)(g.Fb, { className: k.Zg, emoji: t.pollMedia.emoji }),
            (0, s.jsx)(u.E, {
                className: k.Pf,
                variant: "body-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, s.jsx)(w.s, { children: A.intl.string(A.t["8DAM+5"]) }),
            a &&
                (0, s.jsx)(L, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: l,
                    answerId: t.answerId,
                }),
            (0, s.jsx)(R, {
                answersInteraction: i,
                isSelected: o,
                didSelfVote: c,
                isVictor: d,
                isExpired: n,
                className: k.ck,
            }),
        ],
    });
}
function U(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: a, ...r } = e;
    return (0, s.jsx)(g.Fh, {
        className: k.ry,
        answerClassName: k.ZF,
        answersInteraction: n,
        canTapAnswers: a,
        renderAnswerContent: (e) =>
            (0, s.jsx)(F, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: i,
                canShowVoterDetails: a,
            }),
        ...r,
    });
}
var B = n(984778);
function O(e) {
    let { media: t } = e;
    return (0, s.jsx)(c.D, {
        variant: "body-md/medium",
        className: B.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}
function D(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: a, className: l } = e;
    return (0, s.jsxs)("div", {
        className: r()(B.ez, l),
        children: [
            a
                ? (0, s.jsx)(d.Q, { text: t, onClick: i, variant: "secondary", textVariant: "body-sm/medium" })
                : (0, s.jsx)(u.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      scaleFontToUserSetting: !0,
                      children: t,
                  }),
            null != n &&
                (0, s.jsx)(u.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
        ],
    });
}
function W(e) {
    let { action: t, channelId: n, messageId: a, isInteractive: r, className: l } = e,
        { actionButtonRef: o, manageFocusOnAction: c } = (0, v.Mg)(),
        u = i.useCallback(async () => {
            t?.type != null &&
                (await x.A.handlePollActionTapped({ channelId: n, messageId: a, type: t.type }), c(t.type));
        }, [t?.type, n, a, c]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, s.jsx)(
                h.$,
                {
                    buttonRef: o,
                    onClick: u,
                    disabled: !t.enabled,
                    variant: "secondaryButton" === t.presentation ? "secondary" : "primary",
                    size: "sm",
                    text: t.label,
                },
                t.presentation,
            )
          : "textButton" === t.presentation
            ? (0, s.jsx)(d.Q, {
                  buttonRef: o,
                  onClick: u,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "body-sm/medium",
              })
            : (0, s.jsx)(D, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: u,
                  isInteractive: r,
                  className: l,
              });
}
function P(e) {
    let t,
        { message: n, poll: i, className: a } = e,
        c = (0, S.hd)(i.containerStyle),
        d =
            ((t = {
                answers: i.answers,
                answersInteraction: i.answersInteraction,
                answerTapAccessibilityLabel: i.answerTapAccessibilityLabel,
                isExpired: i.isExpired,
                canTapAnswers: i.canTapAnswers,
                hasSelectedAnyAnswer: i.hasSelectedAnswer,
                myAvatarUrl: i.myAvatarUrl,
                canShowVoteCounts: i.canShowVoteCounts,
            }),
            (0, l.YW)(i.layoutType)
                .with(o.Z.DEFAULT, () => (0, s.jsx)(U, { ...t }))
                .with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, s.jsx)(b, { ...t }))
                .otherwise(() => null));
    return null == d
        ? null
        : (0, s.jsx)("div", {
              className: r()(B.kL, c, a),
              children: (0, s.jsxs)(m.F, {
                  children: [
                      (0, s.jsxs)("div", {
                          className: B.wx,
                          children: [
                              (0, s.jsx)(O, { media: i.question }),
                              null != i.promptLabel &&
                                  (0, s.jsx)(u.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      className: B.J1,
                                      scaleFontToUserSetting: !0,
                                      children: i.promptLabel,
                                  }),
                          ],
                      }),
                      d,
                      (0, s.jsxs)("div", {
                          className: B.pR,
                          children: [
                              (0, s.jsx)(W, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.secondaryAction,
                                  className: B.Dc,
                                  isInteractive: i.isInteractive,
                              }),
                              (0, s.jsx)(W, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.tertiaryAction,
                                  className: B.vD,
                              }),
                              (0, s.jsx)(W, { channelId: n.getChannelId(), messageId: n.id, action: i.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function Q(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, s.jsx)(S.y5, {
        message: t,
        poll: n,
        children: (0, s.jsx)(v.RZ, { children: (0, s.jsx)(P, { message: t, poll: n, className: i }) }),
    });
}
