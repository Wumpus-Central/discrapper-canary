r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(990547),
    o = r(442837),
    l = r(481060),
    u = r(194359),
    c = r(843931),
    d = r(1596),
    f = r(681678),
    _ = r(138201),
    h = r(699516),
    p = r(626135),
    m = r(63063),
    g = r(5192),
    E = r(922611),
    v = r(240515),
    I = r(858380),
    T = r(981631),
    b = r(388032),
    y = r(294794);
function S(e) {
    let { user: n, onBlock: r, onIgnore: a, location: s, disallowIgnore: u, guildId: f, channelId: S } = e,
        A = (0, E.Do)({ location: 'confirm_block_modal_body' }),
        N = (0, o.e7)([h.Z], () => h.Z.isIgnored(n.id));
    return A
        ? (0, i.jsxs)('div', {
              className: y.container,
              children: [
                  (0, i.jsxs)('div', {
                      className: y.confirmationHeader,
                      children: [
                          (0, i.jsxs)('div', {
                              className: y.iconContainer,
                              children: [
                                  (0, i.jsx)(l.Avatar, {
                                      size: l.AvatarSizes.SIZE_56,
                                      src: n.getAvatarURL(void 0, 64),
                                      'aria-hidden': !0
                                  }),
                                  (0, i.jsx)('div', {
                                      className: y.icon,
                                      children: (0, i.jsx)(l.DenyIcon, {})
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(l.Heading, {
                                      variant: 'heading-xl/bold',
                                      color: 'header-primary',
                                      children: b.intl.format(b.t.CIbzHR, { username: g.ZP.getName(f, S, n) })
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-secondary',
                                      children: b.intl.string(b.t.S70joq)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)(d.Z, {}),
                  u || N
                      ? null
                      : (0, i.jsxs)('div', {
                            className: y.otherOptions,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-secondary',
                                    children: b.intl.string(b.t['+BJTcH'])
                                }),
                                (0, i.jsx)('div', {
                                    className: y.row,
                                    children: (0, i.jsx)(_.Z, {
                                        title: b.intl.string(b.t.hC8tcX),
                                        description: b.intl.string(b.t.If89rK),
                                        titleVariant: 'text-md/medium',
                                        descriptionVariant: 'text-xs/medium',
                                        buttonText: b.intl.string(b.t.mxJOd3),
                                        buttonColor: l.ButtonColors.PRIMARY,
                                        onButtonPress: () => {
                                            p.default.track(T.rMx.USER_REMEDIATION_ACTION, {
                                                action: I.l.GOTO_IGNORE,
                                                location: s
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
                                                        location: s
                                                    })
                                                );
                                        }
                                    })
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    className: y.featureGuide,
                                    children: b.intl.format(b.t.DJN6eX, { articleLink: m.Z.getArticleURL(T.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                                })
                            ]
                        })
              ]
          })
        : (0, c.cC)({ location: 'confirm_block_modal' })
          ? (0, i.jsx)(d.Z, {})
          : (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: b.intl.format(b.t.pegItL, { name: n.username })
            });
}
function A(e) {
    let { user: n, onBlock: r, onCancel: o, onIgnore: c, location: d = 'ContextMenu', disallowIgnore: _, guildId: h, channelId: m, ...g } = e,
        v = (0, E.Do)({ location: 'block-confirm-modal' }),
        y = () => {
            p.default.track(T.rMx.USER_REMEDIATION_ACTION, {
                action: I.l.CANCEL_BLOCK,
                location: d
            }),
                null == o || o();
        };
    return (
        a.useLayoutEffect(
            () => () => {
                p.default.track(T.rMx.USER_REMEDIATION_ACTION, {
                    action: I.l.DISMISS_BLOCK,
                    location: d
                });
            },
            [d]
        ),
        (0, i.jsx)(l.ConfirmModal, {
            header: v ? null : b.intl.formatToPlainString(b.t.x5pOn5, { name: n.username }),
            confirmText: b.intl.string(b.t.l4EmaW),
            cancelText: v ? b.intl.string(b.t['ETE/oK']) : b.intl.string(b.t['eN6+rK']),
            onCancel: y,
            onConfirm: () => {
                null == r || r(),
                    u.Z.addRelationship({
                        userId: n.id,
                        context: { location: d },
                        type: T.OGo.BLOCKED
                    }),
                    p.default.track(T.rMx.BLOCK_USER_CONFIRMED),
                    f.Z.showBlockSuccessToast(n.id, null != m ? m : void 0);
            },
            impression: { impressionName: s.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...g,
            children: (0, i.jsx)(S, {
                user: n,
                guildId: h,
                channelId: m,
                onBlock: r,
                onIgnore: c,
                disallowIgnore: _
            })
        })
    );
}
