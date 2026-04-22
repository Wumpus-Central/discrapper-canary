n.d(t, { A: () => b }), n(801541);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(889137),
    o = n(966974),
    d = n(534514),
    c = n(123292),
    u = n(834730),
    m = n(821609),
    _ = n(707554),
    h = n(180662),
    p = n(570766),
    g = n(290794),
    A = n(789646),
    f = n(431174),
    x = n(815437);
function C(e) {
    let { media: t } = e;
    return (0, i.jsx)(d.D, {
        variant: "text-md/medium",
        className: x.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}
function E(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: l, isInteractive: a, className: r } = e;
    return (0, i.jsxs)("div", {
        className: s()(x.ez, r),
        children: [
            a
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
function I(e) {
    let { action: t, channelId: n, messageId: a, isInteractive: s, className: r } = e,
        { actionButtonRef: o, manageFocusOnAction: d } = (0, A.Mg)(),
        u = l.useCallback(async () => {
            t?.type != null &&
                (await h.A.handlePollActionTapped({ channelId: n, messageId: a, type: t.type }), d(t.type));
        }, [t?.type, n, a, d]);
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
            : (0, i.jsx)(E, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: u,
                  isInteractive: s,
                  className: r,
              });
}
function v(e) {
    let t,
        { message: n, poll: l, className: a } = e,
        d = (0, g.hd)(l.containerStyle),
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
                .with(o.Z.DEFAULT, () => (0, i.jsx)(f.j, { ...t }))
                .with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(p.A, { ...t }))
                .otherwise(() => null));
    return null == c
        ? null
        : (0, i.jsx)("div", {
              className: s()(x.kL, d, a),
              children: (0, i.jsxs)(_.F, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: x.wx,
                          children: [
                              (0, i.jsx)(C, { media: l.question }),
                              null != l.promptLabel &&
                                  (0, i.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: x.J1,
                                      scaleFontToUserSetting: !0,
                                      children: l.promptLabel,
                                  }),
                          ],
                      }),
                      c,
                      (0, i.jsxs)("div", {
                          className: x.pR,
                          children: [
                              (0, i.jsx)(I, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: l.secondaryAction,
                                  className: x.Dc,
                                  isInteractive: l.isInteractive,
                              }),
                              (0, i.jsx)(I, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: l.tertiaryAction,
                                  className: x.vD,
                              }),
                              (0, i.jsx)(I, { channelId: n.getChannelId(), messageId: n.id, action: l.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function b(e) {
    let { message: t, poll: n, className: l } = e;
    return (0, i.jsx)(g.y5, {
        message: t,
        poll: n,
        children: (0, i.jsx)(A.RZ, { children: (0, i.jsx)(v, { message: t, poll: n, className: l }) }),
    });
}
