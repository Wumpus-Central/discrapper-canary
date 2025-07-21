(n.d(t, { Z: () => v }), n(314940));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(278074),
    s = n(263568),
    c = n(481060),
    u = n(203143),
    d = n(365206),
    p = n(294608),
    m = n(65145),
    f = n(920557),
    g = n(484953);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function _(e) {
    let { media: t } = e;
    return (0, r.jsx)(c.X6q, {
        variant: 'text-md/medium',
        className: g.question,
        scaleFontToUserSetting: !0,
        children: t.text
    });
}
function b(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: l, className: o } = e;
    return (0, r.jsxs)('div', {
        className: a()(g.detailsText, o),
        children: [
            l
                ? (0, r.jsx)(c.Avr, {
                      text: t,
                      onClick: i,
                      variant: 'secondary',
                      textVariant: 'text-sm/medium'
                  })
                : (0, r.jsx)(c.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      scaleFontToUserSetting: !0,
                      children: t
                  }),
            null != n &&
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    scaleFontToUserSetting: !0,
                    children: n
                })
        ]
    });
}
function E(e) {
    let { action: t, channelId: n, messageId: l, isInteractive: a, className: o } = e,
        { actionButtonRef: s, manageFocusOnAction: d } = (0, m.dv)(),
        p = i.useCallback(async () => {
            (null == t ? void 0 : t.type) != null &&
                (await u.Z.handlePollActionTapped({
                    channelId: n,
                    messageId: l,
                    type: t.type
                }),
                d(t.type));
        }, [null == t ? void 0 : t.type, n, l, d]);
    return null == t
        ? null
        : 'button' === t.presentation || 'secondaryButton' === t.presentation
          ? (0, r.jsx)(
                c.zxk,
                {
                    buttonRef: s,
                    onClick: p,
                    disabled: !t.enabled,
                    variant: 'secondaryButton' === t.presentation ? 'secondary' : 'primary',
                    size: 'sm',
                    text: t.label
                },
                t.presentation
            )
          : 'textButton' === t.presentation
            ? (0, r.jsx)(c.Avr, {
                  buttonRef: s,
                  onClick: p,
                  text: t.label,
                  variant: 'secondary',
                  textVariant: 'text-sm/medium'
              })
            : (0, r.jsx)(b, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: p,
                  isInteractive: a,
                  className: o
              });
}
function x(e) {
    let { message: t, poll: n, className: i } = e,
        l = (0, p.$B)(n.containerStyle),
        u = (function (e, t) {
            let n = {
                answers: t.answers,
                answersInteraction: t.answersInteraction,
                answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
                isExpired: t.isExpired,
                canTapAnswers: t.canTapAnswers,
                hasSelectedAnyAnswer: t.hasSelectedAnswer,
                myAvatarUrl: t.myAvatarUrl,
                canShowVoteCounts: t.canShowVoteCounts
            };
            return (0, o.EQ)(t.layoutType)
                .with(s.C.DEFAULT, () => (0, r.jsx)(f.K, h({}, n)))
                .with(s.C.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(d.Z, h({}, n)))
                .otherwise(() => null);
        })(0, n);
    return null == u
        ? null
        : (0, r.jsx)('div', {
              className: a()(g.container, l, i),
              children: (0, r.jsxs)(c.y5t, {
                  children: [
                      (0, r.jsxs)('div', {
                          className: g.header,
                          children: [
                              (0, r.jsx)(_, { media: n.question }),
                              null != n.promptLabel &&
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      className: g.prompt,
                                      scaleFontToUserSetting: !0,
                                      children: n.promptLabel
                                  })
                          ]
                      }),
                      u,
                      (0, r.jsxs)('div', {
                          className: g.bottomBar,
                          children: [
                              (0, r.jsx)(E, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.secondaryAction,
                                  className: g.secondaryAction,
                                  isInteractive: n.isInteractive
                              }),
                              (0, r.jsx)(E, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.tertiaryAction,
                                  className: g.tertiaryAction
                              }),
                              (0, r.jsx)(E, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.primaryAction
                              })
                          ]
                      })
                  ]
              })
          });
}
function v(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, r.jsx)(p.XL, {
        message: t,
        poll: n,
        children: (0, r.jsx)(m.Pk, {
            children: (0, r.jsx)(x, {
                message: t,
                poll: n,
                className: i
            })
        })
    });
}
