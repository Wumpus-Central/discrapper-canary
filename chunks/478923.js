n.d(t, { Z: () => S });
var i = n(200651),
    r = n(192379),
    a = n(990547),
    s = n(442837),
    o = n(481060),
    l = n(194359),
    u = n(843931),
    c = n(1596),
    d = n(681678),
    f = n(138201),
    _ = n(699516),
    p = n(626135),
    h = n(63063),
    m = n(5192),
    g = n(922611),
    E = n(240515),
    v = n(858380),
    y = n(981631),
    I = n(388032),
    T = n(294794);
function b(e) {
    let { user: t, onBlock: n, onIgnore: r, location: a, disallowIgnore: l, guildId: d, channelId: b } = e,
        S = (0, g.Do)({ location: 'confirm_block_modal_body' }),
        A = (0, s.e7)([_.Z], () => _.Z.isIgnored(t.id));
    return S
        ? (0, i.jsxs)('div', {
              className: T.container,
              children: [
                  (0, i.jsxs)('div', {
                      className: T.confirmationHeader,
                      children: [
                          (0, i.jsxs)('div', {
                              className: T.iconContainer,
                              children: [
                                  (0, i.jsx)(o.qEK, {
                                      size: o.EFr.SIZE_56,
                                      src: t.getAvatarURL(void 0, 64),
                                      'aria-hidden': !0
                                  }),
                                  (0, i.jsx)('div', {
                                      className: T.icon,
                                      children: (0, i.jsx)(o.t6m, {})
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.X6q, {
                                      variant: 'heading-xl/bold',
                                      color: 'header-primary',
                                      children: I.intl.format(I.t.CIbzHR, { username: m.ZP.getName(d, b, t) })
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-secondary',
                                      children: I.intl.string(I.t.S70joq)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)(c.Z, {}),
                  l || A
                      ? null
                      : (0, i.jsxs)('div', {
                            className: T.otherOptions,
                            children: [
                                (0, i.jsx)(f.rT, {
                                    title: I.intl.string(I.t['+BJTcH']),
                                    children: (0, i.jsx)(f.ZP, {
                                        title: I.intl.string(I.t.hC8tcX),
                                        description: I.intl.string(I.t.If89rK),
                                        titleVariant: 'text-md/medium',
                                        descriptionVariant: 'text-xs/medium',
                                        buttonText: I.intl.string(I.t.mxJOd3),
                                        buttonColor: o.Ttl.PRIMARY,
                                        onButtonPress: () => {
                                            p.default.track(y.rMx.USER_REMEDIATION_ACTION, {
                                                action: v.l.GOTO_IGNORE,
                                                location: a
                                            }),
                                                (0, o.pTH)(),
                                                (0, o.h7j)((e) =>
                                                    (0, i.jsx)(E.Z, {
                                                        ...e,
                                                        user: t,
                                                        guildId: d,
                                                        channelId: b,
                                                        onIgnore: r,
                                                        onBlock: n,
                                                        location: a
                                                    })
                                                );
                                        }
                                    })
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    className: T.featureGuide,
                                    children: I.intl.format(I.t.DJN6eX, { articleLink: h.Z.getArticleURL(y.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                                })
                            ]
                        })
              ]
          })
        : (0, u.cC)({ location: 'confirm_block_modal' })
          ? (0, i.jsx)(c.Z, {})
          : (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                children: I.intl.format(I.t.pegItL, { name: t.username })
            });
}
function S(e) {
    let { user: t, onBlock: n, onCancel: s, onIgnore: u, location: c = 'ContextMenu', disallowIgnore: f, guildId: _, channelId: h, ...m } = e,
        E = (0, g.Do)({ location: 'block-confirm-modal' }),
        T = () => {
            p.default.track(y.rMx.USER_REMEDIATION_ACTION, {
                action: v.l.CANCEL_BLOCK,
                location: c
            }),
                null == s || s();
        };
    return (
        r.useLayoutEffect(
            () => () => {
                p.default.track(y.rMx.USER_REMEDIATION_ACTION, {
                    action: v.l.DISMISS_BLOCK,
                    location: c
                });
            },
            [c]
        ),
        (0, i.jsx)(o.ConfirmModal, {
            header: E ? null : I.intl.formatToPlainString(I.t.x5pOn5, { name: t.username }),
            confirmText: I.intl.string(I.t.l4EmaW),
            cancelText: E ? I.intl.string(I.t['ETE/oK']) : I.intl.string(I.t['eN6+rK']),
            onCancel: T,
            onConfirm: () => {
                null == n || n(),
                    l.Z.addRelationship({
                        userId: t.id,
                        context: { location: c },
                        type: y.OGo.BLOCKED
                    }),
                    p.default.track(y.rMx.BLOCK_USER_CONFIRMED),
                    d.Z.showBlockSuccessToast(t.id, null != h ? h : void 0);
            },
            impression: { impressionName: a.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...m,
            children: (0, i.jsx)(b, {
                user: t,
                guildId: _,
                channelId: h,
                onBlock: n,
                onIgnore: u,
                disallowIgnore: f
            })
        })
    );
}
