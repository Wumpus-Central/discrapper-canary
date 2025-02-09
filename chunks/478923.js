e.d(t, { default: () => b });
var i = e(200651),
    r = e(192379),
    o = e(990547),
    l = e(442837),
    s = e(481060),
    a = e(194359),
    c = e(843931),
    d = e(1596),
    x = e(681678),
    u = e(138201),
    m = e(699516),
    f = e(626135),
    h = e(63063),
    j = e(5192),
    _ = e(922611),
    C = e(240515),
    N = e(858380),
    g = e(981631),
    I = e(388032),
    E = e(829566);
function p(n) {
    let { user: t, onBlock: e, onIgnore: r, location: o, disallowIgnore: a, guildId: x, channelId: p } = n,
        b = (0, _.Do)({ location: 'confirm_block_modal_body' }),
        v = (0, l.e7)([m.Z], () => m.Z.isIgnored(t.id));
    return b
        ? (0, i.jsxs)('div', {
              className: E.container,
              children: [
                  (0, i.jsxs)('div', {
                      className: E.confirmationHeader,
                      children: [
                          (0, i.jsxs)('div', {
                              className: E.iconContainer,
                              children: [
                                  (0, i.jsx)(s.qEK, {
                                      size: s.EFr.SIZE_56,
                                      src: t.getAvatarURL(void 0, 64),
                                      'aria-hidden': !0
                                  }),
                                  (0, i.jsx)('div', {
                                      className: E.icon,
                                      children: (0, i.jsx)(s.t6m, {})
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(s.X6q, {
                                      variant: 'heading-xl/bold',
                                      color: 'header-primary',
                                      children: I.intl.format(I.t.CIbzHR, { username: j.ZP.getName(x, p, t) })
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-secondary',
                                      children: I.intl.string(I.t.S70joq)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)(d.Z, {}),
                  a || v
                      ? null
                      : (0, i.jsxs)('div', {
                            className: E.otherOptions,
                            children: [
                                (0, i.jsx)(u.rT, {
                                    title: I.intl.string(I.t['+BJTcH']),
                                    children: (0, i.jsx)(u.ZP, {
                                        title: I.intl.string(I.t.hC8tcX),
                                        description: I.intl.string(I.t.If89rK),
                                        titleVariant: 'text-md/medium',
                                        descriptionVariant: 'text-xs/medium',
                                        buttonText: I.intl.string(I.t.mxJOd3),
                                        buttonColor: s.Ttl.PRIMARY,
                                        onButtonPress: () => {
                                            f.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                                                action: N.l.GOTO_IGNORE,
                                                location: o
                                            }),
                                                (0, s.pTH)(),
                                                (0, s.h7j)((n) =>
                                                    (0, i.jsx)(C.default, {
                                                        ...n,
                                                        user: t,
                                                        guildId: x,
                                                        channelId: p,
                                                        onIgnore: r,
                                                        onBlock: e,
                                                        location: o
                                                    })
                                                );
                                        }
                                    })
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    className: E.featureGuide,
                                    children: I.intl.format(I.t.DJN6eX, { articleLink: h.Z.getArticleURL(g.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                                })
                            ]
                        })
              ]
          })
        : (0, c.cC)({ location: 'confirm_block_modal' })
          ? (0, i.jsx)(d.Z, {})
          : (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: I.intl.format(I.t.pegItL, { name: t.username })
            });
}
function b(n) {
    let { user: t, onBlock: e, onCancel: l, onIgnore: c, location: d = 'ContextMenu', disallowIgnore: u, guildId: m, channelId: h, ...j } = n,
        C = (0, _.Do)({ location: 'block-confirm-modal' });
    return (
        r.useLayoutEffect(
            () => () => {
                f.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                    action: N.l.DISMISS_BLOCK,
                    location: d
                });
            },
            [d]
        ),
        (0, i.jsx)(s.ConfirmModal, {
            header: C ? null : I.intl.formatToPlainString(I.t.x5pOn5, { name: t.username }),
            confirmText: I.intl.string(I.t.l4EmaW),
            cancelText: C ? I.intl.string(I.t['ETE/oK']) : I.intl.string(I.t['eN6+rK']),
            onCancel: () => {
                f.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                    action: N.l.CANCEL_BLOCK,
                    location: d
                }),
                    null == l || l();
            },
            onConfirm: () => {
                null == e || e(),
                    a.Z.addRelationship({
                        userId: t.id,
                        context: { location: d },
                        type: g.OGo.BLOCKED
                    }),
                    f.default.track(g.rMx.BLOCK_USER_CONFIRMED),
                    x.Z.showBlockSuccessToast(t.id, null != h ? h : void 0);
            },
            impression: { impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...j,
            children: (0, i.jsx)(p, {
                user: t,
                guildId: m,
                channelId: h,
                onBlock: e,
                onIgnore: c,
                disallowIgnore: u
            })
        })
    );
}
