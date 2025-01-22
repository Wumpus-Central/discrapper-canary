r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(990547),
    s = r(442837),
    l = r(481060),
    u = r(194359),
    c = r(843931),
    d = r(1596),
    f = r(681678),
    p = r(138201),
    h = r(699516),
    _ = r(626135),
    m = r(63063),
    g = r(5192),
    E = r(922611),
    v = r(240515),
    y = r(858380),
    b = r(981631),
    I = r(388032),
    T = r(294794);
function S(e) {
    let { user: n, onBlock: r, onIgnore: a, location: o, disallowIgnore: u, guildId: f, channelId: S } = e,
        A = (0, E.Do)({ location: 'confirm_block_modal_body' }),
        C = (0, s.e7)([h.Z], () => h.Z.isIgnored(n.id));
    return A
        ? (0, i.jsxs)('div', {
              className: T.container,
              children: [
                  (0, i.jsxs)('div', {
                      className: T.confirmationHeader,
                      children: [
                          (0, i.jsxs)('div', {
                              className: T.iconContainer,
                              children: [
                                  (0, i.jsx)(l.Avatar, {
                                      size: l.AvatarSizes.SIZE_56,
                                      src: n.getAvatarURL(void 0, 64),
                                      'aria-hidden': !0
                                  }),
                                  (0, i.jsx)('div', {
                                      className: T.icon,
                                      children: (0, i.jsx)(l.DenyIcon, {})
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(l.Heading, {
                                      variant: 'heading-xl/bold',
                                      color: 'header-primary',
                                      children: I.intl.format(I.t.CIbzHR, { username: g.ZP.getName(f, S, n) })
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-secondary',
                                      children: I.intl.string(I.t.S70joq)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)(d.Z, {}),
                  u || C
                      ? null
                      : (0, i.jsxs)('div', {
                            className: T.otherOptions,
                            children: [
                                (0, i.jsx)(p.rT, {
                                    title: I.intl.string(I.t['+BJTcH']),
                                    children: (0, i.jsx)(p.ZP, {
                                        title: I.intl.string(I.t.hC8tcX),
                                        description: I.intl.string(I.t.If89rK),
                                        titleVariant: 'text-md/medium',
                                        descriptionVariant: 'text-xs/medium',
                                        buttonText: I.intl.string(I.t.mxJOd3),
                                        buttonColor: l.ButtonColors.PRIMARY,
                                        onButtonPress: () => {
                                            _.default.track(b.rMx.USER_REMEDIATION_ACTION, {
                                                action: y.l.GOTO_IGNORE,
                                                location: o
                                            }),
                                                (0, l.closeAllModals)(),
                                                (0, l.openModal)((e) =>
                                                    (0, i.jsx)(v.Z, {
                                                        ...e,
                                                        user: n,
                                                        guildId: f,
                                                        channelId: S,
                                                        onIgnore: a,
                                                        onBlock: r,
                                                        location: o
                                                    })
                                                );
                                        }
                                    })
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    className: T.featureGuide,
                                    children: I.intl.format(I.t.DJN6eX, { articleLink: m.Z.getArticleURL(b.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                                })
                            ]
                        })
              ]
          })
        : (0, c.cC)({ location: 'confirm_block_modal' })
          ? (0, i.jsx)(d.Z, {})
          : (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: I.intl.format(I.t.pegItL, { name: n.username })
            });
}
function A(e) {
    let { user: n, onBlock: r, onCancel: s, onIgnore: c, location: d = 'ContextMenu', disallowIgnore: p, guildId: h, channelId: m, ...g } = e,
        v = (0, E.Do)({ location: 'block-confirm-modal' }),
        T = () => {
            _.default.track(b.rMx.USER_REMEDIATION_ACTION, {
                action: y.l.CANCEL_BLOCK,
                location: d
            }),
                null == s || s();
        };
    return (
        a.useLayoutEffect(
            () => () => {
                _.default.track(b.rMx.USER_REMEDIATION_ACTION, {
                    action: y.l.DISMISS_BLOCK,
                    location: d
                });
            },
            [d]
        ),
        (0, i.jsx)(l.ConfirmModal, {
            header: v ? null : I.intl.formatToPlainString(I.t.x5pOn5, { name: n.username }),
            confirmText: I.intl.string(I.t.l4EmaW),
            cancelText: v ? I.intl.string(I.t['ETE/oK']) : I.intl.string(I.t['eN6+rK']),
            onCancel: T,
            onConfirm: () => {
                null == r || r(),
                    u.Z.addRelationship({
                        userId: n.id,
                        context: { location: d },
                        type: b.OGo.BLOCKED
                    }),
                    _.default.track(b.rMx.BLOCK_USER_CONFIRMED),
                    f.Z.showBlockSuccessToast(n.id, null != m ? m : void 0);
            },
            impression: { impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...g,
            children: (0, i.jsx)(S, {
                user: n,
                guildId: h,
                channelId: m,
                onBlock: r,
                onIgnore: c,
                disallowIgnore: p
            })
        })
    );
}
