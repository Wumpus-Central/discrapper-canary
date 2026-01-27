n.d(t, {
    A: () => v,
}),
    n(801541);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(889137),
    o = n(966974),
    c = n(397927),
    u = n(180662),
    d = n(570766),
    p = n(290794),
    m = n(789646),
    f = n(431174),
    g = n(744180);

function h(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function _(e) {
    let { media: t } = e;
    return (0, r.jsx)(c.Heading, {
        variant: "text-md/medium",
        className: g.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}

function b(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: l, className: s } = e;
    return (0, r.jsxs)("div", {
        className: a()(g.ez, s),
        children: [
            l
                ? (0, r.jsx)(c.QWc, {
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

function A(e) {
    let { action: t, channelId: n, messageId: l, isInteractive: a, className: s } = e,
        { actionButtonRef: o, manageFocusOnAction: d } = (0, m.Mg)(),
        p = i.useCallback(async () => {
            (null == t ? void 0 : t.type) != null &&
                (await u.A.handlePollActionTapped({
                    channelId: n,
                    messageId: l,
                    type: t.type,
                }),
                d(t.type));
        }, [null == t ? void 0 : t.type, n, l, d]);
    return null == t
        ? null
        : "button" === t.presentation || "secondaryButton" === t.presentation
          ? (0, r.jsx)(
                c.Button,
                {
                    buttonRef: o,
                    onClick: p,
                    disabled: !t.enabled,
                    variant: "secondaryButton" === t.presentation ? "secondary" : "primary",
                    size: "sm",
                    text: t.label,
                },
                t.presentation,
            )
          : "textButton" === t.presentation
            ? (0, r.jsx)(c.QWc, {
                  buttonRef: o,
                  onClick: p,
                  text: t.label,
                  variant: "secondary",
                  textVariant: "text-sm/medium",
              })
            : (0, r.jsx)(b, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: p,
                  isInteractive: a,
                  className: s,
              });
}

function y(e) {
    let t,
        { message: n, poll: i, className: l } = e,
        u = (0, p.hd)(i.containerStyle),
        m =
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
            (0, s.YW)(i.layoutType)
                .with(o.Z.DEFAULT, () => (0, r.jsx)(f.j, h({}, t)))
                .with(o.Z.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(d.A, h({}, t)))
                .otherwise(() => null));
    return null == m
        ? null
        : (0, r.jsx)("div", {
              className: a()(g.kL, u, l),
              children: (0, r.jsxs)(c.Fmo, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: g.wx,
                          children: [
                              (0, r.jsx)(_, {
                                  media: i.question,
                              }),
                              null != i.promptLabel &&
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: g.J1,
                                      scaleFontToUserSetting: !0,
                                      children: i.promptLabel,
                                  }),
                          ],
                      }),
                      m,
                      (0, r.jsxs)("div", {
                          className: g.pR,
                          children: [
                              (0, r.jsx)(A, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.secondaryAction,
                                  className: g.Dc,
                                  isInteractive: i.isInteractive,
                              }),
                              (0, r.jsx)(A, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.tertiaryAction,
                                  className: g.vD,
                              }),
                              (0, r.jsx)(A, {
                                  channelId: n.getChannelId(),
                                  messageId: n.id,
                                  action: i.primaryAction,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}

function v(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, r.jsx)(p.y5, {
        message: t,
        poll: n,
        children: (0, r.jsx)(m.RZ, {
            children: (0, r.jsx)(y, {
                message: t,
                poll: n,
                className: i,
            }),
        }),
    });
}
