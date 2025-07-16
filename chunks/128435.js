(n.d(t, { Z: () => v }), n(314940));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(278074),
    s = n(263568),
    c = n(755721),
    u = n(481060),
    d = n(203143),
    p = n(365206),
    m = n(294608),
    f = n(65145),
    _ = n(920557),
    h = n(484953);
function g(e) {
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
function b(e) {
    let { media: t } = e;
    return (0, r.jsx)(u.X6q, {
        variant: 'text-md/medium',
        className: h.question,
        scaleFontToUserSetting: !0,
        children: t.text
    });
}
function E(e) {
    let { children: t, onClick: n, variant: i = 'text-sm/medium', color: l = 'interactive-active', className: o, buttonRef: s } = e;
    return (0, r.jsx)(c.zx, {
        onClick: n,
        className: a()(h.__invalid_textButton, o),
        look: c.zx.Looks.BLANK,
        size: c.zx.Sizes.NONE,
        buttonRef: s,
        children: (0, r.jsx)(u.Text, {
            variant: i,
            color: l,
            scaleFontToUserSetting: !0,
            children: t
        })
    });
}
function y(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: l, className: o } = e;
    return (0, r.jsxs)('div', {
        className: a()(h.detailsText, o),
        children: [
            l
                ? (0, r.jsx)(E, {
                      onClick: i,
                      variant: 'text-sm/normal',
                      color: 'none',
                      className: a()(h.detailsTextButton, h.interactive),
                      children: t
                  })
                : (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      scaleFontToUserSetting: !0,
                      children: t
                  }),
            null != n &&
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    scaleFontToUserSetting: !0,
                    children: n
                })
        ]
    });
}
function C(e) {
    let { action: t, channelId: n, messageId: l, isInteractive: o, className: s } = e,
        { actionButtonRef: p, manageFocusOnAction: m } = (0, f.dv)(),
        _ = i.useCallback(async () => {
            (null == t ? void 0 : t.type) != null &&
                (await d.Z.handlePollActionTapped({
                    channelId: n,
                    messageId: l,
                    type: t.type
                }),
                m(t.type));
        }, [null == t ? void 0 : t.type, n, l, m]);
    return null == t
        ? null
        : 'button' === t.presentation || 'secondaryButton' === t.presentation
          ? (0, r.jsx)(
                c.zx,
                {
                    buttonRef: p,
                    onClick: _,
                    disabled: !t.enabled,
                    color: 'secondaryButton' === t.presentation ? c.zx.Colors.CUSTOM : c.zx.Colors.BRAND,
                    size: c.zx.Sizes.SMALL,
                    className: a()(s, h.buttonPresentation, 'secondaryButton' === t.presentation && h.secondaryButtonPresentation),
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        color: 'none',
                        scaleFontToUserSetting: !0,
                        children: t.label
                    })
                },
                t.presentation
            )
          : 'textButton' === t.presentation
            ? (0, r.jsx)(E, {
                  buttonRef: p,
                  onClick: _,
                  className: s,
                  children: t.label
              })
            : (0, r.jsx)(y, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: _,
                  isInteractive: o,
                  className: s
              });
}
function x(e) {
    let { message: t, poll: n, className: i } = e,
        l = (0, m.$B)(n.containerStyle),
        c = (function (e, t) {
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
                .with(s.C.DEFAULT, () => (0, r.jsx)(_.K, g({}, n)))
                .with(s.C.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(p.Z, g({}, n)))
                .otherwise(() => null);
        })(0, n);
    return null == c
        ? null
        : (0, r.jsx)('div', {
              className: a()(h.container, l, i),
              children: (0, r.jsxs)(u.y5t, {
                  children: [
                      (0, r.jsxs)('div', {
                          className: h.header,
                          children: [
                              (0, r.jsx)(b, { media: n.question }),
                              null != n.promptLabel &&
                                  (0, r.jsx)(u.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      className: h.prompt,
                                      scaleFontToUserSetting: !0,
                                      children: n.promptLabel
                                  })
                          ]
                      }),
                      c,
                      (0, r.jsxs)('div', {
                          className: h.bottomBar,
                          children: [
                              (0, r.jsx)(C, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.secondaryAction,
                                  className: h.secondaryAction,
                                  isInteractive: n.isInteractive
                              }),
                              (0, r.jsx)(C, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.tertiaryAction,
                                  className: h.tertiaryAction
                              }),
                              (0, r.jsx)(C, {
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
    return (0, r.jsx)(m.XL, {
        message: t,
        poll: n,
        children: (0, r.jsx)(f.Pk, {
            children: (0, r.jsx)(x, {
                message: t,
                poll: n,
                className: i
            })
        })
    });
}
