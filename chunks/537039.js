n.d(t, { A: () => H }), n(801541);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(889137),
    o = n(966974),
    c = n(534514),
    d = n(123292),
    u = n(834730),
    _ = n(821609),
    m = n(707554),
    h = n(962514),
    p = n(126031),
    g = n(438437),
    f = n(306417),
    x = n(985018),
    A = n(233271);
function C(e) {
    let { didSelfVote: t, label: n, percentage: l } = e;
    return (0, i.jsxs)("div", {
        className: A.AA,
        children: [
            t && (0, i.jsx)(p.s, { children: x.intl.string(x.t["8DAM+5"]) }),
            (0, i.jsxs)(u.E, { variant: "text-md/semibold", color: "none", children: [l, "%"] }),
            (0, i.jsx)(u.E, { variant: "text-xs/semibold", color: "none", children: n }),
        ],
    });
}
function v(e) {
    let { answer: t, isExpired: n, myAvatarUrl: l, canShowVoteCounts: a } = e,
        s = !0 === t.isSelected,
        o = !0 === t.didSelfVote,
        c = !0 === t.isVictor;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.Dt, {
                attachmentClassName: r()(A.oh, { [A.Wx]: a }),
                emojiClassName: A.Zg,
                media: t.pollMedia,
                fallback: (0, i.jsx)("div", { className: r()(A.oh, A.nb) }),
            }),
            s && (0, i.jsx)(f.Vx, { size: 40, isVictor: c, isExpired: n, className: A.Dt }),
            a &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(C, {
                            didSelfVote: o,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: o ? l : void 0,
                        }),
                        ((!n && o) || c) && (0, i.jsx)(f.Vx, { size: 18, isVictor: c, isExpired: n, className: A.Po }),
                    ],
                }),
        ],
    });
}
function I(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: l, canShowVoteCounts: a, ...s } = e;
    return (0, i.jsx)(f.Fh, {
        className: A.ry,
        answerClassName: r()(A.ZF, { [A.EK]: l !== g.CQ.LIST }),
        myAvatarUrl: n,
        answersInteraction: l,
        renderAnswerContent: (e) =>
            (0, i.jsx)(v, { answer: e, isExpired: t, myAvatarUrl: n, answersInteraction: l, canShowVoteCounts: a }),
        ...s,
    });
}
var E = n(290794),
    b = n(789646),
    y = n(419354),
    T = n(615300),
    j = n(990078),
    N = n(717421),
    S = n(915089),
    k = n(956703),
    L = n(969632),
    R = n(140957);
function w(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: r } = e,
        s = (0, S.GV)(),
        { channelId: o, messageId: c } = (0, E.Tu)(),
        [_, m] = l.useState(""),
        [g, f] = l.useState(!1),
        x = "" !== _ && g,
        A = l.useCallback(() => {
            m((0, L.$m)(c, o, r));
        }, [c, o, r]),
        C = l.useCallback(() => {
            A(), f(!0);
        }, [A]),
        v = l.useCallback(() => {
            f(!1);
        }, []),
        I = l.useCallback(() => {
            (0, h.e)({ channelId: o, messageId: c, answerId: r });
        }, [o, c, r]);
    return (
        l.useEffect(() => {
            if (g)
                return (
                    k.A.addReactChangeListener(A),
                    () => {
                        k.A.removeReactChangeListener(A);
                    }
                );
        }, [g, A]),
        (0, i.jsxs)("div", {
            className: R.AA,
            children: [
                a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              "" !== _
                                  ? (0, i.jsx)(j.m, {
                                        __unsupportedReactNodeAsText: (0, i.jsx)(u.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: _,
                                        }),
                                        forceOpen: x,
                                        "aria-label": !1,
                                        children: (0, i.jsx)(d.Q, {
                                            onMouseEnter: C,
                                            onMouseLeave: v,
                                            onFocus: C,
                                            onBlur: v,
                                            onClick: I,
                                            "aria-describedby": x ? s : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, i.jsx)(d.Q, {
                                        onMouseEnter: C,
                                        onMouseLeave: v,
                                        onFocus: C,
                                        onBlur: v,
                                        onClick: I,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              x && (0, i.jsx)(p.s, { id: s, children: _ }),
                          ],
                      })
                    : (0, i.jsx)(u.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, i.jsxs)(u.E, {
                    variant: "text-md/bold",
                    color: "none",
                    scaleFontToUserSetting: !0,
                    children: [t, "%"],
                }),
            ],
        })
    );
}
function P(e) {
    let { percentage: t, shouldAnimate: n } = e,
        l = (0, N.z)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: T.A.Easing.inOut(T.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, i.jsx)(y.animated.span, { className: R.an, style: l, "aria-hidden": !0 });
}
function D(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: l, isVictor: a, isExpired: r, className: o } = e;
    return (0, s.YW)({ answersInteraction: t, didSelfVote: l })
        .with({ answersInteraction: g.CQ.RADIO_BUTTONS }, () =>
            (0, i.jsx)(f.k$, { isSelected: n, size: 24, className: o }),
        )
        .with({ answersInteraction: g.CQ.CHECKBOXES }, () =>
            (0, i.jsx)(f.e5, { isSelected: n, size: 20, className: o }),
        )
        .with({ answersInteraction: g.CQ.LIST, didSelfVote: !0 }, () =>
            (0, i.jsx)(f.Vx, { isVictor: a, isExpired: r, size: 24, className: o }),
        )
        .otherwise(() => null);
}
function M(e) {
    let { answer: t, isExpired: n, answersInteraction: l, canShowVoteCounts: a, canShowVoterDetails: s } = e,
        o = !0 === t.isSelected,
        c = !0 === t.didSelfVote,
        d = !0 === t.isVictor,
        _ = t.shouldAnimateTransition;
    return (0, i.jsxs)("div", {
        className: r()(R.Fk, { [R.EK]: l !== g.CQ.LIST, [R.wH]: o }),
        children: [
            a ? (0, i.jsx)(P, { percentage: t.votesPercentage, shouldAnimate: _ }) : null,
            null != t.pollMedia.emoji && (0, i.jsx)(f.Fb, { className: R.Zg, emoji: t.pollMedia.emoji }),
            (0, i.jsx)(u.E, {
                className: R.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, i.jsx)(p.s, { children: x.intl.string(x.t["8DAM+5"]) }),
            a &&
                (0, i.jsx)(w, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: s,
                    answerId: t.answerId,
                }),
            (0, i.jsx)(D, {
                answersInteraction: l,
                isSelected: o,
                didSelfVote: c,
                isVictor: d,
                isExpired: n,
                className: R.ck,
            }),
        ],
    });
}
function O(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: l, canTapAnswers: a, ...r } = e;
    return (0, i.jsx)(f.Fh, {
        className: R.ry,
        answerClassName: R.ZF,
        answersInteraction: n,
        canTapAnswers: a,
        renderAnswerContent: (e) =>
            (0, i.jsx)(M, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: l,
                canShowVoterDetails: a,
            }),
        ...r,
    });
}
var U = n(2445);
function G(e) {
    let { media: t } = e;
    return (0, i.jsx)(c.D, {
        variant: "text-md/medium",
        className: U.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}
function B(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: l, isInteractive: a, className: s } = e;
    return (0, i.jsxs)("div", {
        className: r()(U.ez, s),
        children: [
            a
                ? (0, i.jsx)(d.Q, { text: t, onClick: l, variant: "secondary", textVariant: "text-sm/medium" })
                : (0, i.jsx)(u.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      scaleFontToUserSetting: !0,
                      children: t,
                  }),
            null != n &&
                (0, i.jsx)(u.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
        ],
    });
}
function V(e) {
    let { action: t, channelId: n, messageId: a, isInteractive: r, className: s } = e,
        { actionButtonRef: o, manageFocusOnAction: c } = (0, b.Mg)(),
        u = l.useCallback(async () => {
            t?.type != null &&
                (await h.A.handlePollActionTapped({ channelId: n, messageId: a, type: t.type }), c(t.type));
        }, [t?.type, n, a, c]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, i.jsx)(
                _.$,
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
            ? (0, i.jsx)(d.Q, {
                  buttonRef: o,
                  onClick: u,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "text-sm/medium",
              })
            : (0, i.jsx)(B, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: u,
                  isInteractive: r,
                  className: s,
              });
}
function F(e) {
    let t,
        { message: n, poll: l, className: a } = e,
        c = (0, E.hd)(l.containerStyle),
        d =
            ((t = {
                answers: l.answers,
                answersInteraction: l.answersInteraction,
                answerTapAccessibilityLabel: l.answerTapAccessibilityLabel,
                isExpired: l.isExpired,
                canTapAnswers: l.canTapAnswers,
                hasSelectedAnyAnswer: l.hasSelectedAnswer,
                myAvatarUrl: l.myAvatarUrl,
                canShowVoteCounts: l.canShowVoteCounts,
            }),
            (0, s.YW)(l.layoutType)
                .with(o.Z.DEFAULT, () => (0, i.jsx)(O, { ...t }))
                .with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(I, { ...t }))
                .otherwise(() => null));
    return null == d
        ? null
        : (0, i.jsx)("div", {
              className: r()(U.kL, c, a),
              children: (0, i.jsxs)(m.F, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: U.wx,
                          children: [
                              (0, i.jsx)(G, { media: l.question }),
                              null != l.promptLabel &&
                                  (0, i.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: U.J1,
                                      scaleFontToUserSetting: !0,
                                      children: l.promptLabel,
                                  }),
                          ],
                      }),
                      d,
                      (0, i.jsxs)("div", {
                          className: U.pR,
                          children: [
                              (0, i.jsx)(V, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: l.secondaryAction,
                                  className: U.Dc,
                                  isInteractive: l.isInteractive,
                              }),
                              (0, i.jsx)(V, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: l.tertiaryAction,
                                  className: U.vD,
                              }),
                              (0, i.jsx)(V, { channelId: n.getChannelId(), messageId: n.id, action: l.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function H(e) {
    let { message: t, poll: n, className: l } = e;
    return (0, i.jsx)(E.y5, {
        message: t,
        poll: n,
        children: (0, i.jsx)(b.RZ, { children: (0, i.jsx)(F, { message: t, poll: n, className: l }) }),
    });
}
