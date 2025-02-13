n.d(t, { Z: () => E }), n(627341);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(278074),
    o = n(263568),
    c = n(481060),
    d = n(203143),
    u = n(365206),
    m = n(294608),
    _ = n(65145),
    h = n(920557),
    p = n(379969);
function g(e) {
    let { media: t } = e;
    return (0, i.jsx)(c.X6q, {
        variant: 'text-md/medium',
        className: p.question,
        scaleFontToUserSetting: !0,
        children: t.text
    });
}
function f(e) {
    let { children: t, onClick: n, variant: l = 'text-sm/medium', color: a = 'interactive-active', className: s, buttonRef: o } = e;
    return (0, i.jsx)(c.zxk, {
        onClick: n,
        className: r()(p.__invalid_textButton, s),
        look: c.zxk.Looks.BLANK,
        size: c.zxk.Sizes.NONE,
        buttonRef: o,
        children: (0, i.jsx)(c.Text, {
            variant: l,
            color: a,
            scaleFontToUserSetting: !0,
            children: t
        })
    });
}
function x(e) {
    let { buttonLabel: t, secondaryLabel: n, handleClick: l, isInteractive: a, className: s } = e;
    return (0, i.jsxs)('div', {
        className: r()(p.detailsText, s),
        children: [
            a
                ? (0, i.jsx)(f, {
                      onClick: l,
                      variant: 'text-sm/normal',
                      color: 'none',
                      className: r()(p.detailsTextButton, p.interactive),
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
    let { action: t, channelId: n, messageId: a, isInteractive: s, className: o } = e,
        { actionButtonRef: u, manageFocusOnAction: m } = (0, _.dv)(),
        h = l.useCallback(async () => {
            (null == t ? void 0 : t.type) != null &&
                (await d.Z.handlePollActionTapped({
                    channelId: n,
                    messageId: a,
                    type: t.type
                }),
                m(t.type));
        }, [null == t ? void 0 : t.type, n, a, m]);
    return null == t
        ? null
        : 'button' === t.presentation || 'secondaryButton' === t.presentation
          ? (0, i.jsx)(
                c.zxk,
                {
                    buttonRef: u,
                    onClick: h,
                    disabled: !t.enabled,
                    color: 'secondaryButton' === t.presentation ? c.zxk.Colors.CUSTOM : c.zxk.Colors.BRAND,
                    size: c.zxk.Sizes.SMALL,
                    className: r()(o, p.buttonPresentation, 'secondaryButton' === t.presentation && p.secondaryButtonPresentation),
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
            ? (0, i.jsx)(f, {
                  buttonRef: u,
                  onClick: h,
                  className: o,
                  children: t.label
              })
            : (0, i.jsx)(x, {
                  buttonLabel: t.label,
                  secondaryLabel: t.secondaryLabel,
                  handleClick: h,
                  isInteractive: s,
                  className: o
              });
}
function v(e) {
    let { message: t, poll: n, className: l } = e,
        a = (0, m.$B)(n.containerStyle),
        d = (function (e, t) {
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
            return (0, s.EQ)(t.layoutType)
                .with(o.C.DEFAULT, () => (0, i.jsx)(h.K, { ...n }))
                .with(o.C.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(u.Z, { ...n }))
                .otherwise(() => null);
        })(0, n);
    return null == d
        ? null
        : (0, i.jsx)('div', {
              className: r()(p.container, a, l),
              children: (0, i.jsxs)(c.y5t, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: p.header,
                          children: [
                              (0, i.jsx)(g, { media: n.question }),
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
                      d,
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
function E(e) {
    let { message: t, poll: n, className: l } = e;
    return (0, i.jsx)(m.XL, {
        message: t,
        poll: n,
        children: (0, i.jsx)(_.Pk, {
            children: (0, i.jsx)(v, {
                message: t,
                poll: n,
                className: l
            })
        })
    });
}
