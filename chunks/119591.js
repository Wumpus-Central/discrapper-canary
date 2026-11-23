(n.d(t, { A: () => K }), n(801541));
var s = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    l = n(889137),
    o = n(744593),
    c = n(534514),
    d = n(123292),
    u = n(834730),
    m = n(821609),
    h = n(707554),
    x = n(180662),
    w = n(89999),
    p = n(77692),
    g = n(438437),
    A = n(306417),
    f = n(792996),
    y = n(588466);
function j(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, s.jsxs)("div", {
        className: y.AA,
        children: [
            t && (0, s.jsx)(p.s, { children: f.intl.string(f.t["8DAM+5"]) }),
            (0, s.jsxs)(u.E, { variant: "body-md/semibold", color: "none", children: [i, "%"] }),
            (0, s.jsx)(u.E, { variant: "body-xs/semibold", color: "none", children: n }),
        ],
    });
}
function b(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: a } = e,
        l = !0 === t.isSelected,
        o = !0 === t.didSelfVote,
        c = !0 === t.isVictor;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(A.Dt, {
                attachmentClassName: r()(y.oh, { [y.Wx]: a }),
                emojiClassName: y.Zg,
                media: t.pollMedia,
                fallback: (0, s.jsx)("div", { className: r()(y.oh, y.nb) }),
            }),
            l && (0, s.jsx)(A.Vx, { size: 40, isVictor: c, isExpired: n, className: y.Dt }),
            a &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(j, {
                            didSelfVote: o,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: o ? i : void 0,
                        }),
                        ((!n && o) || c) && (0, s.jsx)(A.Vx, { size: 18, isVictor: c, isExpired: n, className: y.Po }),
                    ],
                }),
        ],
    });
}
function v(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: a, ...l } = e;
    return (0, s.jsx)(A.Fh, {
        className: y.ry,
        answerClassName: r()(y.ZF, { [y.EK]: i !== g.CQ.LIST }),
        myAvatarUrl: n,
        answersInteraction: i,
        renderAnswerContent: (e) =>
            (0, s.jsx)(b, { answer: e, isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: a }),
        ...l,
    });
}
var S = n(290794),
    C = n(789646),
    N = n(156150),
    E = n(615300),
    I = n(866665),
    T = n(717421),
    _ = n(915089),
    V = n(956703),
    k = n(969632),
    M = n(259218);
function L(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: r } = e,
        l = (0, _.GV)(),
        { channelId: o, messageId: c } = (0, S.Tu)(),
        [m, h] = i.useState(""),
        [w, g] = i.useState(!1),
        A = "" !== m && w,
        f = i.useCallback(() => {
            h((0, k.$m)(c, o, r));
        }, [c, o, r]),
        y = i.useCallback(() => {
            (f(), g(!0));
        }, [f]),
        j = i.useCallback(() => {
            g(!1);
        }, []),
        b = i.useCallback(() => {
            (0, x.e)({ channelId: o, messageId: c, answerId: r });
        }, [o, c, r]);
    return (
        i.useEffect(() => {
            if (w)
                return (
                    V.A.addReactChangeListener(f),
                    () => {
                        V.A.removeReactChangeListener(f);
                    }
                );
        }, [w, f]),
        (0, s.jsxs)("div", {
            className: M.AA,
            children: [
                a
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              "" !== m
                                  ? (0, s.jsx)(I.m, {
                                        __unsupportedReactNodeAsText: (0, s.jsx)(u.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: m,
                                        }),
                                        forceOpen: A,
                                        "aria-label": !1,
                                        children: (0, s.jsx)(d.Q, {
                                            onMouseEnter: y,
                                            onMouseLeave: j,
                                            onFocus: y,
                                            onBlur: j,
                                            onClick: b,
                                            "aria-describedby": A ? l : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "body-xs/semibold",
                                        }),
                                    })
                                  : (0, s.jsx)(d.Q, {
                                        onMouseEnter: y,
                                        onMouseLeave: j,
                                        onFocus: y,
                                        onBlur: j,
                                        onClick: b,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "body-xs/semibold",
                                    }),
                              A && (0, s.jsx)(p.s, { id: l, children: m }),
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
function R(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, T.z)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: E.A.Easing.inOut(E.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, s.jsx)(N.animated.span, { className: M.an, style: i, "aria-hidden": !0 });
}
function F(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: a, isExpired: r, className: o } = e;
    return (0, l.YW)({ answersInteraction: t, didSelfVote: i })
        .with({ answersInteraction: g.CQ.RADIO_BUTTONS }, () =>
            (0, s.jsx)(A.k$, { isSelected: n, size: 24, className: o }),
        )
        .with({ answersInteraction: g.CQ.CHECKBOXES }, () =>
            (0, s.jsx)(A.e5, { isSelected: n, size: 20, className: o }),
        )
        .with({ answersInteraction: g.CQ.LIST, didSelfVote: !0 }, () =>
            (0, s.jsx)(A.Vx, { isVictor: a, isExpired: r, size: 24, className: o }),
        )
        .otherwise(() => null);
}
function U(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: a, canShowVoterDetails: l } = e,
        o = !0 === t.isSelected,
        c = !0 === t.didSelfVote,
        d = !0 === t.isVictor,
        m = t.shouldAnimateTransition;
    return (0, s.jsxs)("div", {
        className: r()(M.Fk, { [M.EK]: i !== g.CQ.LIST, [M.wH]: o }),
        children: [
            a ? (0, s.jsx)(R, { percentage: t.votesPercentage, shouldAnimate: m }) : null,
            null != t.pollMedia.emoji && (0, s.jsx)(A.Fb, { className: M.Zg, emoji: t.pollMedia.emoji }),
            (0, s.jsx)(u.E, {
                className: M.Pf,
                variant: "body-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: (0, s.jsx)(w.A, { text: t.pollMedia.text }),
            }),
            t.didSelfVote && (0, s.jsx)(p.s, { children: f.intl.string(f.t["8DAM+5"]) }),
            a &&
                (0, s.jsx)(L, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: l,
                    answerId: t.answerId,
                }),
            (0, s.jsx)(F, {
                answersInteraction: i,
                isSelected: o,
                didSelfVote: c,
                isVictor: d,
                isExpired: n,
                className: M.ck,
            }),
        ],
    });
}
function B(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: a, ...r } = e;
    return (0, s.jsx)(A.Fh, {
        className: M.ry,
        answerClassName: M.ZF,
        answersInteraction: n,
        canTapAnswers: a,
        renderAnswerContent: (e) =>
            (0, s.jsx)(U, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: i,
                canShowVoterDetails: a,
            }),
        ...r,
    });
}
var O = n(984778);
function D(e) {
    let { media: t } = e;
    return (0, s.jsx)(c.D, {
        variant: "body-md/medium",
        className: O.b1,
        scaleFontToUserSetting: !0,
        children: (0, s.jsx)(w.A, { text: t.text }),
    });
}
function P(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: a, className: l } = e;
    return (0, s.jsxs)("div", {
        className: r()(O.ez, l),
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
        { actionButtonRef: o, manageFocusOnAction: c } = (0, C.Mg)(),
        u = i.useCallback(async () => {
            t?.type != null &&
                (await x.A.handlePollActionTapped({ channelId: n, messageId: a, type: t.type }), c(t.type));
        }, [t?.type, n, a, c]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, s.jsx)(
                m.$,
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
            : (0, s.jsx)(P, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: u,
                  isInteractive: r,
                  className: l,
              });
}
function Q(e) {
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
                .with(o.Z.DEFAULT, () => (0, s.jsx)(B, { ...t }))
                .with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, s.jsx)(v, { ...t }))
                .otherwise(() => null));
    return null == d
        ? null
        : (0, s.jsx)("div", {
              className: r()(O.kL, c, a),
              children: (0, s.jsxs)(h.F, {
                  children: [
                      (0, s.jsxs)("div", {
                          className: O.wx,
                          children: [
                              (0, s.jsx)(D, { media: i.question }),
                              null != i.promptLabel &&
                                  (0, s.jsx)(u.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      className: O.J1,
                                      scaleFontToUserSetting: !0,
                                      children: i.promptLabel,
                                  }),
                          ],
                      }),
                      d,
                      (0, s.jsxs)("div", {
                          className: O.pR,
                          children: [
                              (0, s.jsx)(W, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.secondaryAction,
                                  className: O.Dc,
                                  isInteractive: i.isInteractive,
                              }),
                              (0, s.jsx)(W, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.tertiaryAction,
                                  className: O.vD,
                              }),
                              (0, s.jsx)(W, { channelId: n.getChannelId(), messageId: n.id, action: i.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function K(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, s.jsx)(S.y5, {
        message: t,
        poll: n,
        children: (0, s.jsx)(C.RZ, { children: (0, s.jsx)(Q, { message: t, poll: n, className: i }) }),
    });
}
