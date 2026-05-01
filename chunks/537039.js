n.d(t, { A: () => F }), n(801541);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(889137),
    o = n(966974),
    d = n(534514),
    c = n(123292),
    u = n(834730),
    m = n(821609),
    h = n(707554),
    g = n(962514),
    A = n(126031),
    p = n(438437),
    x = n(306417),
    f = n(985018),
    C = n(233271);
function E(e) {
    let { didSelfVote: t, label: n, percentage: l } = e;
    return (0, i.jsxs)("div", {
        className: C.AA,
        children: [
            t && (0, i.jsx)(A.s, { children: f.intl.string(f.t["8DAM+5"]) }),
            (0, i.jsxs)(u.E, { variant: "text-md/semibold", color: "none", children: [l, "%"] }),
            (0, i.jsx)(u.E, { variant: "text-xs/semibold", color: "none", children: n }),
        ],
    });
}
function v(e) {
    let { answer: t, isExpired: n, myAvatarUrl: l, canShowVoteCounts: s } = e,
        r = !0 === t.isSelected,
        o = !0 === t.didSelfVote,
        d = !0 === t.isVictor;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.Dt, {
                attachmentClassName: a()(C.oh, { [C.Wx]: s }),
                emojiClassName: C.Zg,
                media: t.pollMedia,
                fallback: (0, i.jsx)("div", { className: a()(C.oh, C.nb) }),
            }),
            r && (0, i.jsx)(x.Vx, { size: 40, isVictor: d, isExpired: n, className: C.Dt }),
            s &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(E, {
                            didSelfVote: o,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: o ? l : void 0,
                        }),
                        ((!n && o) || d) && (0, i.jsx)(x.Vx, { size: 18, isVictor: d, isExpired: n, className: C.Po }),
                    ],
                }),
        ],
    });
}
function I(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: l, canShowVoteCounts: s, ...r } = e;
    return (0, i.jsx)(x.Fh, {
        className: C.ry,
        answerClassName: a()(C.ZF, { [C.EK]: l !== p.CQ.LIST }),
        myAvatarUrl: n,
        answersInteraction: l,
        renderAnswerContent: (e) =>
            (0, i.jsx)(v, { answer: e, isExpired: t, myAvatarUrl: n, answersInteraction: l, canShowVoteCounts: s }),
        ...r,
    });
}
var _ = n(290794),
    j = n(789646),
    N = n(925747),
    T = n(615300),
    y = n(990078),
    S = n(717421),
    b = n(915089),
    k = n(956703),
    L = n(969632),
    R = n(140957);
function P(e) {
    let { percentage: t, label: n, canShowVoterDetails: s, answerId: a } = e,
        r = (0, b.GV)(),
        { channelId: o, messageId: d } = (0, _.Tu)(),
        [m, h] = l.useState(""),
        [p, x] = l.useState(!1),
        f = "" !== m && p,
        C = l.useCallback(() => {
            h((0, L.$m)(d, o, a));
        }, [d, o, a]),
        E = l.useCallback(() => {
            C(), x(!0);
        }, [C]),
        v = l.useCallback(() => {
            x(!1);
        }, []),
        I = l.useCallback(() => {
            (0, g.e)({ channelId: o, messageId: d, answerId: a });
        }, [o, d, a]);
    return (
        l.useEffect(() => {
            if (p)
                return (
                    k.A.addReactChangeListener(C),
                    () => {
                        k.A.removeReactChangeListener(C);
                    }
                );
        }, [p, C]),
        (0, i.jsxs)("div", {
            className: R.AA,
            children: [
                s
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              "" !== m
                                  ? (0, i.jsx)(y.m, {
                                        __unsupportedReactNodeAsText: (0, i.jsx)(u.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: m,
                                        }),
                                        forceOpen: f,
                                        "aria-label": !1,
                                        children: (0, i.jsx)(c.Q, {
                                            onMouseEnter: E,
                                            onMouseLeave: v,
                                            onFocus: E,
                                            onBlur: v,
                                            onClick: I,
                                            "aria-describedby": f ? r : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, i.jsx)(c.Q, {
                                        onMouseEnter: E,
                                        onMouseLeave: v,
                                        onFocus: E,
                                        onBlur: v,
                                        onClick: I,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              f && (0, i.jsx)(A.s, { id: r, children: m }),
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
function M(e) {
    let { percentage: t, shouldAnimate: n } = e,
        l = (0, S.z)(
            {
                from: { width: n ? "0%" : `${t}%` },
                to: { width: `${t}%` },
                config: { duration: 1200, easing: T.A.Easing.inOut(T.A.Easing.ease) },
            },
            "animate-always",
        );
    return (0, i.jsx)(N.animated.span, { className: R.an, style: l, "aria-hidden": !0 });
}
function D(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: l, isVictor: s, isExpired: a, className: o } = e;
    return (0, r.YW)({ answersInteraction: t, didSelfVote: l })
        .with({ answersInteraction: p.CQ.RADIO_BUTTONS }, () =>
            (0, i.jsx)(x.k$, { isSelected: n, size: 24, className: o }),
        )
        .with({ answersInteraction: p.CQ.CHECKBOXES }, () =>
            (0, i.jsx)(x.e5, { isSelected: n, size: 20, className: o }),
        )
        .with({ answersInteraction: p.CQ.LIST, didSelfVote: !0 }, () =>
            (0, i.jsx)(x.Vx, { isVictor: s, isExpired: a, size: 24, className: o }),
        )
        .otherwise(() => null);
}
function w(e) {
    let { answer: t, isExpired: n, answersInteraction: l, canShowVoteCounts: s, canShowVoterDetails: r } = e,
        o = !0 === t.isSelected,
        d = !0 === t.didSelfVote,
        c = !0 === t.isVictor,
        m = t.shouldAnimateTransition;
    return (0, i.jsxs)("div", {
        className: a()(R.Fk, { [R.EK]: l !== p.CQ.LIST, [R.wH]: o }),
        children: [
            s ? (0, i.jsx)(M, { percentage: t.votesPercentage, shouldAnimate: m }) : null,
            null != t.pollMedia.emoji && (0, i.jsx)(x.Fb, { className: R.Zg, emoji: t.pollMedia.emoji }),
            (0, i.jsx)(u.E, {
                className: R.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote && (0, i.jsx)(A.s, { children: f.intl.string(f.t["8DAM+5"]) }),
            s &&
                (0, i.jsx)(P, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: r,
                    answerId: t.answerId,
                }),
            (0, i.jsx)(D, {
                answersInteraction: l,
                isSelected: o,
                didSelfVote: d,
                isVictor: c,
                isExpired: n,
                className: R.ck,
            }),
        ],
    });
}
function O(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: l, canTapAnswers: s, ...a } = e;
    return (0, i.jsx)(x.Fh, {
        className: R.ry,
        answerClassName: R.ZF,
        answersInteraction: n,
        canTapAnswers: s,
        renderAnswerContent: (e) =>
            (0, i.jsx)(w, {
                answer: e,
                isExpired: t,
                answersInteraction: n,
                canShowVoteCounts: l,
                canShowVoterDetails: s,
            }),
        ...a,
    });
}
var U = n(2445);
function G(e) {
    let { media: t } = e;
    return (0, i.jsx)(d.D, {
        variant: "text-md/medium",
        className: U.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}
function V(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: l, isInteractive: s, className: r } = e;
    return (0, i.jsxs)("div", {
        className: a()(U.ez, r),
        children: [
            s
                ? (0, i.jsx)(c.Q, { text: t, onClick: l, variant: "secondary", textVariant: "text-sm/medium" })
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
function B(e) {
    let { action: t, channelId: n, messageId: s, isInteractive: a, className: r } = e,
        { actionButtonRef: o, manageFocusOnAction: d } = (0, j.Mg)(),
        u = l.useCallback(async () => {
            t?.type != null &&
                (await g.A.handlePollActionTapped({ channelId: n, messageId: s, type: t.type }), d(t.type));
        }, [t?.type, n, s, d]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, i.jsx)(
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
            ? (0, i.jsx)(c.Q, {
                  buttonRef: o,
                  onClick: u,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "text-sm/medium",
              })
            : (0, i.jsx)(V, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: u,
                  isInteractive: a,
                  className: r,
              });
}
function H(e) {
    let t,
        { message: n, poll: l, className: s } = e,
        d = (0, _.hd)(l.containerStyle),
        c =
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
            (0, r.YW)(l.layoutType)
                .with(o.Z.DEFAULT, () => (0, i.jsx)(O, { ...t }))
                .with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(I, { ...t }))
                .otherwise(() => null));
    return null == c
        ? null
        : (0, i.jsx)("div", {
              className: a()(U.kL, d, s),
              children: (0, i.jsxs)(h.F, {
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
                      c,
                      (0, i.jsxs)("div", {
                          className: U.pR,
                          children: [
                              (0, i.jsx)(B, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: l.secondaryAction,
                                  className: U.Dc,
                                  isInteractive: l.isInteractive,
                              }),
                              (0, i.jsx)(B, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: l.tertiaryAction,
                                  className: U.vD,
                              }),
                              (0, i.jsx)(B, { channelId: n.getChannelId(), messageId: n.id, action: l.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function F(e) {
    let { message: t, poll: n, className: l } = e;
    return (0, i.jsx)(_.y5, {
        message: t,
        poll: n,
        children: (0, i.jsx)(j.RZ, { children: (0, i.jsx)(H, { message: t, poll: n, className: l }) }),
    });
}
