n.d(t, { A: () => C }), n(801541);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(889137),
    o = n(966974),
    d = n(397927),
    c = n(180662),
    u = n(570766),
    _ = n(290794),
    m = n(789646),
    h = n(431174),
    p = n(2445);
function g(e) {
    let { media: t } = e;
    return (0, i.jsx)(d.Heading, {
        variant: "text-md/medium",
        className: p.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}
function A(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: a, isInteractive: l, className: r } = e;
    return (0, i.jsxs)("div", {
        className: s()(p.ez, r),
        children: [
            l
                ? (0, i.jsx)(d.QWc, { text: t, onClick: a, variant: "secondary", textVariant: "text-sm/medium" })
                : (0, i.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      scaleFontToUserSetting: !0,
                      children: t,
                  }),
            null != n &&
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
        ],
    });
}
function x(e) {
    let { action: t, channelId: n, messageId: l, isInteractive: s, className: r } = e,
        { actionButtonRef: o, manageFocusOnAction: u } = (0, m.Mg)(),
        _ = a.useCallback(async () => {
            t?.type != null &&
                (await c.A.handlePollActionTapped({ channelId: n, messageId: l, type: t.type }), u(t.type));
        }, [t?.type, n, l, u]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, i.jsx)(
                d.Button,
                {
                    buttonRef: o,
                    onClick: _,
                    disabled: !t.enabled,
                    variant: "secondaryButton" === t.presentation ? "secondary" : "primary",
                    size: "sm",
                    text: t.label,
                },
                t.presentation,
            )
          : "textButton" === t.presentation
            ? (0, i.jsx)(d.QWc, {
                  buttonRef: o,
                  onClick: _,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "text-sm/medium",
              })
            : (0, i.jsx)(A, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: _,
                  isInteractive: s,
                  className: r,
              });
}
function f(e) {
    let t,
        { message: n, poll: a, className: l } = e,
        c = (0, _.hd)(a.containerStyle),
        m =
            ((t = {
                answers: a.answers,
                answersInteraction: a.answersInteraction,
                answerTapAccessibilityLabel: a.answerTapAccessibilityLabel,
                isExpired: a.isExpired,
                canTapAnswers: a.canTapAnswers,
                hasSelectedAnyAnswer: a.hasSelectedAnswer,
                myAvatarUrl: a.myAvatarUrl,
                canShowVoteCounts: a.canShowVoteCounts,
            }),
            (0, r.YW)(a.layoutType)
                .with(o.Z.DEFAULT, () => (0, i.jsx)(h.j, { ...t }))
                .with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(u.A, { ...t }))
                .otherwise(() => null));
    return null == m
        ? null
        : (0, i.jsx)("div", {
              className: s()(p.kL, c, l),
              children: (0, i.jsxs)(d.Fmo, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: p.wx,
                          children: [
                              (0, i.jsx)(g, { media: a.question }),
                              null != a.promptLabel &&
                                  (0, i.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: p.J1,
                                      scaleFontToUserSetting: !0,
                                      children: a.promptLabel,
                                  }),
                          ],
                      }),
                      m,
                      (0, i.jsxs)("div", {
                          className: p.pR,
                          children: [
                              (0, i.jsx)(x, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: a.secondaryAction,
                                  className: p.Dc,
                                  isInteractive: a.isInteractive,
                              }),
                              (0, i.jsx)(x, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: a.tertiaryAction,
                                  className: p.vD,
                              }),
                              (0, i.jsx)(x, { channelId: n.getChannelId(), messageId: n.id, action: a.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function C(e) {
    let { message: t, poll: n, className: a } = e;
    return (0, i.jsx)(_.y5, {
        message: t,
        poll: n,
        children: (0, i.jsx)(m.RZ, { children: (0, i.jsx)(f, { message: t, poll: n, className: a }) }),
    });
}
