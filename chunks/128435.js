n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(627341);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(278074),
    s = n(263568),
    c = n(481060),
    u = n(203143),
    d = n(365206),
    m = n(294608),
    h = n(65145),
    f = n(920557),
    p = n(823671);
function _(e) {
    let { media: t } = e;
    return (0, i.jsx)(c.Heading, {
        variant: 'text-md/medium',
        className: p.question,
        scaleFontToUserSetting: !0,
        children: t.text
    });
}
function g(e) {
    let { children: t, onClick: n, variant: r = 'text-sm/medium', color: l = 'interactive-active', className: o, buttonRef: s } = e;
    return (0, i.jsx)(c.Button, {
        onClick: n,
        className: a()(p.__invalid_textButton, o),
        look: c.Button.Looks.BLANK,
        size: c.Button.Sizes.NONE,
        buttonRef: s,
        children: (0, i.jsx)(c.Text, {
            variant: r,
            color: l,
            scaleFontToUserSetting: !0,
            children: t
        })
    });
}
function E(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: r, isInteractive: l, className: o } = e;
    return (0, i.jsxs)('div', {
        className: a()(p.detailsText, o),
        children: [
            l
                ? (0, i.jsx)(g, {
                      onClick: r,
                      variant: 'text-sm/normal',
                      color: 'none',
                      className: a()(p.detailsTextButton, p.interactive),
                      children: t
                  })
                : (0, i.jsx)(c.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-muted',
                      scaleFontToUserSetting: !0,
                      children: t
                  }),
            null != n &&
                (0, i.jsx)(c.Text, {
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
        { actionButtonRef: d, manageFocusOnAction: m } = (0, h.dv)(),
        f = r.useCallback(async () => {
            if ((null == t ? void 0 : t.type) != null)
                await u.Z.handlePollActionTapped({
                    channelId: n,
                    messageId: l,
                    type: t.type
                }),
                    m(t.type);
        }, [null == t ? void 0 : t.type, n, l, m]);
    return null == t
        ? null
        : 'button' === t.presentation || 'secondaryButton' === t.presentation
          ? (0, i.jsx)(
                c.Button,
                {
                    buttonRef: d,
                    onClick: f,
                    disabled: !t.enabled,
                    color: 'secondaryButton' === t.presentation ? c.Button.Colors.CUSTOM : c.Button.Colors.BRAND,
                    size: c.Button.Sizes.SMALL,
                    className: a()(s, p.buttonPresentation, 'secondaryButton' === t.presentation && p.secondaryButtonPresentation),
                    children: (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'none',
                        scaleFontToUserSetting: !0,
                        children: t.label
                    })
                },
                t.presentation
            )
          : 'textButton' === t.presentation
            ? (0, i.jsx)(g, {
                  buttonRef: d,
                  onClick: f,
                  className: s,
                  children: t.label
              })
            : (0, i.jsx)(E, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: f,
                  isInteractive: o,
                  className: s
              });
}
function I(e) {
    let { message: t, poll: n, className: r } = e,
        l = (0, m.$B)(n.containerStyle),
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
                .with(s.C.DEFAULT, () => (0, i.jsx)(f.K, { ...n }))
                .with(s.C.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(d.Z, { ...n }))
                .otherwise(() => null);
        })(0, n);
    return null == u
        ? null
        : (0, i.jsx)('div', {
              className: a()(p.container, l, r),
              children: (0, i.jsxs)(c.HeadingLevel, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: p.header,
                          children: [
                              (0, i.jsx)(_, { media: n.question }),
                              null != n.promptLabel &&
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      className: p.prompt,
                                      scaleFontToUserSetting: !0,
                                      children: n.promptLabel
                                  })
                          ]
                      }),
                      u,
                      (0, i.jsxs)('div', {
                          className: p.bottomBar,
                          children: [
                              (0, i.jsx)(C, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.secondaryAction,
                                  className: p.secondaryAction,
                                  isInteractive: n.isInteractive
                              }),
                              (0, i.jsx)(C, {
                                  channelId: t.getChannelId(),
                                  messageId: t.id,
                                  action: n.tertiaryAction,
                                  className: p.tertiaryAction
                              }),
                              (0, i.jsx)(C, {
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
    let { message: t, poll: n, className: r } = e;
    return (0, i.jsx)(m.XL, {
        message: t,
        poll: n,
        children: (0, i.jsx)(h.Pk, {
            children: (0, i.jsx)(I, {
                message: t,
                poll: n,
                className: r
            })
        })
    });
}
