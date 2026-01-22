n.d(t, {
    A: () => v,
}),
    n(801541);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(889137),
    l = n(966974),
    c = n(397927),
    u = n(180662),
    d = n(570766),
    f = n(290794),
    p = n(789646),
    _ = n(431174),
    h = n(744180);

function m(e, t, n) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e) {
    let { media: t } = e;
    return (0, r.jsx)(c.Heading, {
        variant: "text-md/medium",
        className: h.b1,
        scaleFontToUserSetting: !0,
        children: t.text,
    });
}

function b(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: a, className: o } = e;
    return (0, r.jsxs)("div", {
        className: s()(h.ez, o),
        children: [
            a
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
    return (0, o.YW)(t.layoutType)
        .with(l.Z.DEFAULT, () => (0, r.jsx)(_.j, g({}, n)))
        .with(l.Z.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(d.A, g({}, n)))
        .otherwise(() => null);
}

function O(e) {
    let { action: t, channelId: n, messageId: a, isInteractive: s, className: o } = e,
        { actionButtonRef: l, manageFocusOnAction: d } = (0, p.Mg)(),
        f = i.useCallback(async () => {
            (null == t ? void 0 : t.type) != null &&
                (await u.A.handlePollActionTapped({
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
            ? (0, r.jsx)(c.QWc, {
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
                  isInteractive: s,
                  className: o,
              });
}

function A(e) {
    let { message: t, poll: n, className: i } = e,
        a = (0, f.hd)(n.containerStyle),
        o = y(t, n);
    return null == o
        ? null
        : (0, r.jsx)("div", {
              className: s()(h.kL, a, i),
              children: (0, r.jsxs)(c.Fmo, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: h.wx,
                          children: [
                              (0, r.jsx)(E, {
                                  media: n.question,
                              }),
                              null != n.promptLabel &&
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: h.J1,
                                      scaleFontToUserSetting: !0,
                                      children: n.promptLabel,
                                  }),
                          ],
                      }),
                      o,
                      (0, r.jsxs)("div", {
                          className: h.pR,
                          children: [
                              (0, r.jsx)(O, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.secondaryAction,
                                  className: h.Dc,
                                  isInteractive: n.isInteractive,
                              }),
                              (0, r.jsx)(O, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.tertiaryAction,
                                  className: h.vD,
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

function v(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, r.jsx)(f.y5, {
        message: t,
        poll: n,
        children: (0, r.jsx)(p.RZ, {
            children: (0, r.jsx)(A, {
                message: t,
                poll: n,
                className: i,
            }),
        }),
    });
}
