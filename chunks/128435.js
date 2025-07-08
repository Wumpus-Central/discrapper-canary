(n.d(t, { Z: () => x }), n(314940));
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
function _(e) {
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
function h(e) {
    let { media: t } = e;
    return (0, r.jsx)(c.X6q, {
        variant: 'text-md/medium',
        className: g.question,
        scaleFontToUserSetting: !0,
        children: t.text
    });
}
function b(e) {
    let { children: t, onClick: n, variant: i = 'text-sm/medium', color: l = 'interactive-active', className: o, buttonRef: s } = e;
    return (0, r.jsx)(c.zxk, {
        onClick: n,
        className: a()(g.__invalid_textButton, o),
        look: c.zxk.Looks.BLANK,
        size: c.zxk.Sizes.NONE,
        buttonRef: s,
        children: (0, r.jsx)(c.Text, {
            variant: i,
            color: l,
            scaleFontToUserSetting: !0,
            children: t
        })
    });
}
function E(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: i, isInteractive: l, className: o } = e;
    return (0, r.jsxs)('div', {
        className: a()(g.detailsText, o),
        children: [
            l
                ? (0, r.jsx)(b, {
                      onClick: i,
                      variant: 'text-sm/normal',
                      color: 'none',
                      className: a()(g.detailsTextButton, g.interactive),
                      children: t
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
function y(e) {
    let { action: t, channelId: n, messageId: l, isInteractive: o, className: s } = e,
        { actionButtonRef: d, manageFocusOnAction: p } = (0, m.dv)(),
        f = i.useCallback(async () => {
            (null == t ? void 0 : t.type) != null &&
                (await u.Z.handlePollActionTapped({
                    channelId: n,
                    messageId: l,
                    type: t.type
                }),
                p(t.type));
        }, [null == t ? void 0 : t.type, n, l, p]);
    return null == t
        ? null
        : 'button' === t.presentation || 'secondaryButton' === t.presentation
          ? (0, r.jsx)(
                c.zxk,
                {
                    buttonRef: d,
                    onClick: f,
                    disabled: !t.enabled,
                    color: 'secondaryButton' === t.presentation ? c.zxk.Colors.CUSTOM : c.zxk.Colors.BRAND,
                    size: c.zxk.Sizes.SMALL,
                    className: a()(s, g.buttonPresentation, 'secondaryButton' === t.presentation && g.secondaryButtonPresentation),
                    children: (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'none',
                        scaleFontToUserSetting: !0,
                        children: t.label
                    })
                },
                t.presentation
            )
          : 'textButton' === t.presentation
            ? (0, r.jsx)(b, {
                  buttonRef: d,
                  onClick: f,
                  className: s,
                  children: t.label
              })
            : (0, r.jsx)(E, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: f,
                  isInteractive: o,
                  className: s
              });
}
function C(e) {
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
                .with(s.C.DEFAULT, () => (0, r.jsx)(f.K, _({}, n)))
                .with(s.C.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(d.Z, _({}, n)))
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
                              (0, r.jsx)(h, { media: n.question }),
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
                              (0, r.jsx)(y, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.secondaryAction,
                                  className: g.secondaryAction,
                                  isInteractive: n.isInteractive
                              }),
                              (0, r.jsx)(y, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.tertiaryAction,
                                  className: g.tertiaryAction
                              }),
                              (0, r.jsx)(y, {
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
function x(e) {
    let { message: t, poll: n, className: i } = e;
    return (0, r.jsx)(p.XL, {
        message: t,
        poll: n,
        children: (0, r.jsx)(m.Pk, {
            children: (0, r.jsx)(C, {
                message: t,
                poll: n,
                className: i
            })
        })
    });
}
