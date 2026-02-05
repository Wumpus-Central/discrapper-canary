n.d(t, { A: () => E }), n(801541);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(889137),
    o = n(966974),
    d = n(397927),
    c = n(180662),
    u = n(570766),
    m = n(290794),
    _ = n(789646),
    h = n(431174),
    p = n(744180);
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
    let { buttonLabel: t, secondaryLabel: n, handleClick: l, isInteractive: a, className: s } = e;
    return (0, i.jsxs)("div", {
        className: r()(p.ez, s),
        children: [
            a
                ? (0, i.jsx)(d.QWc, { text: t, onClick: l, variant: "secondary", textVariant: "text-sm/medium" })
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
function f(e) {
    let { action: t, channelId: n, messageId: a, isInteractive: r, className: s } = e,
        { actionButtonRef: o, manageFocusOnAction: u } = (0, _.Mg)(),
        m = l.useCallback(async () => {
            t?.type != null &&
                (await c.A.handlePollActionTapped({ channelId: n, messageId: a, type: t.type }), u(t.type));
        }, [t?.type, n, a, u]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, i.jsx)(
                d.Button,
                {
                    buttonRef: o,
                    onClick: m,
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
                  onClick: m,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "text-sm/medium",
              })
            : (0, i.jsx)(A, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: m,
                  isInteractive: r,
                  className: s,
              });
}
function x(e) {
    let t,
        { message: n, poll: l, className: a } = e,
        c = (0, m.hd)(l.containerStyle),
        _ =
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
                .with(o.Z.DEFAULT, () => (0, i.jsx)(h.j, { ...t }))
                .with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(u.A, { ...t }))
                .otherwise(() => null));
    return null == _
        ? null
        : (0, i.jsx)("div", {
              className: r()(p.kL, c, a),
              children: (0, i.jsxs)(d.Fmo, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: p.wx,
                          children: [
                              (0, i.jsx)(g, { media: l.question }),
                              null != l.promptLabel &&
                                  (0, i.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: p.J1,
                                      scaleFontToUserSetting: !0,
                                      children: l.promptLabel,
                                  }),
                          ],
                      }),
                      _,
                      (0, i.jsxs)("div", {
                          className: p.pR,
                          children: [
                              (0, i.jsx)(f, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: l.secondaryAction,
                                  className: p.Dc,
                                  isInteractive: l.isInteractive,
                              }),
                              (0, i.jsx)(f, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: l.tertiaryAction,
                                  className: p.vD,
                              }),
                              (0, i.jsx)(f, { channelId: n.getChannelId(), messageId: n.id, action: l.primaryAction }),
                          ],
                      }),
                  ],
              }),
          });
}
function E(e) {
    let { message: t, poll: n, className: l } = e;
    return (0, i.jsx)(m.y5, {
        message: t,
        poll: n,
        children: (0, i.jsx)(_.RZ, { children: (0, i.jsx)(x, { message: t, poll: n, className: l }) }),
    });
}
