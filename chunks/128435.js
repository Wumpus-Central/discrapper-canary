n.d(t, { Z: () => S }), n(314940);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(263568),
    c = n(481060),
    u = n(203143),
    d = n(365206),
    f = n(294608),
    p = n(65145),
    _ = n(920557),
    m = n(856597);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e) {
    let { media: t } = e;
    return (0, r.jsx)(c.Heading, {
        variant: "text-md/medium",
        className: m.question,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}
function b(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: a, className: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(m.detailsText, s),
        children: [
            a
                ? (0, r.jsx)(c.Avr, {
                      text: t,
                      onClick: i,
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                  })
                : (0, r.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      scaleFontToUserSetting: !0,
                      children: t,
                  }),
            null != n &&
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    scaleFontToUserSetting: !0,
                    children: n,
                }),
        ],
    });
}
function y(e, t) {
    let n = {
        answers: t.answers,
        answersInteraction: t.answersInteraction,
        answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
        isExpired: t.isExpired,
        canTapAnswers: t.canTapAnswers,
        hasSelectedAnyAnswer: t.hasSelectedAnswer,
        myAvatarUrl: t.myAvatarUrl,
        canShowVoteCounts: t.canShowVoteCounts,
    };
    return (0, s.EQ)(t.layoutType)
        .with(l.C.DEFAULT, () => (0, r.jsx)(_.K, g({}, n)))
        .with(l.C.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(d.Z, g({}, n)))
        .otherwise(() => null);
}
function O(e) {
    let { action: t, channelId: n, messageId: a, isInteractive: o, className: s } = e,
        { actionButtonRef: l, manageFocusOnAction: d } = (0, p.dv)(),
        f = i.useCallback(async () => {
            (null == t ? void 0 : t.type) != null &&
                (await u.Z.handlePollActionTapped({
                    channelId: n,
                    messageId: a,
                    type: t.type,
                }),
                d(t.type));
        }, [null == t ? void 0 : t.type, n, a, d]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, r.jsx)(
                c.Button,
                {
                    buttonRef: l,
                    onClick: f,
                    disabled: !t.enabled,
                    variant: "secondaryButton" === t.presentation ? "secondary" : "primary",
                    size: "sm",
                    text: t.label,
                },
                t.presentation,
            )
          : "textButton" === t.presentation
            ? (0, r.jsx)(c.Avr, {
                  buttonRef: l,
                  onClick: f,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "text-sm/medium",
              })
            : (0, r.jsx)(b, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: f,
                  isInteractive: o,
                  className: s,
              });
}
function v(e) {
    let { message: t, poll: n, className: i } = e,
        a = (0, f.$B)(n.containerStyle),
        s = y(t, n);
    return null == s
        ? null
        : (0, r.jsx)("div", {
              className: o()(m.container, a, i),
              children: (0, r.jsxs)(c.y5t, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: m.header,
                          children: [
                              (0, r.jsx)(E, { media: n.question }),
                              null != n.promptLabel &&
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: m.prompt,
                                      scaleFontToUserSetting: !0,
                                      children: n.promptLabel,
                                  }),
                          ],
                      }),
                      s,
                      (0, r.jsxs)("div", {
                          className: m.bottomBar,
                          children: [
                              (0, r.jsx)(O, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.secondaryAction,
                                  className: m.secondaryAction,
                                  isInteractive: n.isInteractive,
                              }),
                              (0, r.jsx)(O, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.tertiaryAction,
                                  className: m.tertiaryAction,
                              }),
                              (0, r.jsx)(O, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.primaryAction,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
function S(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, r.jsx)(f.XL, {
        message: t,
        poll: n,
        children: (0, r.jsx)(p.Pk, {
            children: (0, r.jsx)(v, {
                message: t,
                poll: n,
                className: i,
            }),
        }),
    });
}
