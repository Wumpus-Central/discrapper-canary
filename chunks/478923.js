e.d(t, { default: () => T });
var i = e(200651),
    r = e(192379),
    o = e(990547),
    l = e(442837),
    a = e(481060),
    s = e(194359),
    c = e(1596),
    d = e(681678),
    x = e(138201),
    u = e(699516),
    m = e(626135),
    f = e(63063),
    h = e(5192),
    j = e(922611),
    N = e(240515),
    _ = e(858380),
    I = e(981631),
    C = e(388032),
    E = e(829566);
function v(n) {
    let { user: t, onBlock: e, onIgnore: r, location: o, disallowIgnore: s, guildId: d, channelId: v } = n,
        T = (0, j.Do)({ location: 'confirm_block_modal_body' }),
        g = (0, l.e7)([u.Z], () => u.Z.isIgnored(t.id));
    return T
        ? (0, i.jsxs)('div', {
              className: E.container,
              children: [
                  (0, i.jsxs)('div', {
                      className: E.confirmationHeader,
                      children: [
                          (0, i.jsxs)('div', {
                              className: E.iconContainer,
                              children: [
                                  (0, i.jsx)(a.qEK, {
                                      size: a.EFr.SIZE_56,
                                      src: t.getAvatarURL(void 0, 64),
                                      'aria-hidden': !0
                                  }),
                                  (0, i.jsx)('div', {
                                      className: E.icon,
                                      children: (0, i.jsx)(a.t6m, {})
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(a.X6q, {
                                      variant: 'heading-xl/bold',
                                      color: 'header-primary',
                                      children: C.intl.format(C.t.CIbzHR, { username: h.ZP.getName(d, v, t) })
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-md/medium',
                                      color: 'header-secondary',
                                      children: C.intl.string(C.t.S70joq)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)(c.Z, {}),
                  s || g
                      ? null
                      : (0, i.jsxs)('div', {
                            className: E.otherOptions,
                            children: [
                                (0, i.jsx)(x.rT, {
                                    title: C.intl.string(C.t['+BJTcH']),
                                    children: (0, i.jsx)(x.ZP, {
                                        title: C.intl.string(C.t.hC8tcX),
                                        description: C.intl.string(C.t.If89rK),
                                        titleVariant: 'text-md/medium',
                                        descriptionVariant: 'text-xs/medium',
                                        buttonText: C.intl.string(C.t.mxJOd3),
                                        buttonColor: a.Ttl.PRIMARY,
                                        onButtonPress: () => {
                                            m.default.track(I.rMx.USER_REMEDIATION_ACTION, {
                                                action: _.l.GOTO_IGNORE,
                                                location: o
                                            }),
                                                (0, a.pTH)(),
                                                (0, a.h7j)((n) =>
                                                    (0, i.jsx)(N.default, {
                                                        ...n,
                                                        user: t,
                                                        guildId: d,
                                                        channelId: v,
                                                        onIgnore: r,
                                                        onBlock: e,
                                                        location: o
                                                    })
                                                );
                                        }
                                    })
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    className: E.featureGuide,
                                    children: C.intl.format(C.t.DJN6eX, { articleLink: f.Z.getArticleURL(I.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE) })
                                })
                            ]
                        })
              ]
          })
        : (0, i.jsx)(c.Z, {});
}
function T(n) {
    let { user: t, onBlock: e, onCancel: l, onIgnore: c, location: x = 'ContextMenu', disallowIgnore: u, guildId: f, channelId: h, ...N } = n,
        E = (0, j.Do)({ location: 'block-confirm-modal' });
    return (
        r.useLayoutEffect(
            () => () => {
                m.default.track(I.rMx.USER_REMEDIATION_ACTION, {
                    action: _.l.DISMISS_BLOCK,
                    location: x
                });
            },
            [x]
        ),
        (0, i.jsx)(a.ConfirmModal, {
            header: E ? null : C.intl.formatToPlainString(C.t.x5pOn5, { name: t.username }),
            confirmText: C.intl.string(C.t.l4EmaW),
            cancelText: E ? C.intl.string(C.t['ETE/oK']) : C.intl.string(C.t['eN6+rK']),
            onCancel: () => {
                m.default.track(I.rMx.USER_REMEDIATION_ACTION, {
                    action: _.l.CANCEL_BLOCK,
                    location: x
                }),
                    null == l || l();
            },
            onConfirm: () => {
                null == e || e(),
                    s.Z.addRelationship({
                        userId: t.id,
                        context: { location: x },
                        type: I.OGo.BLOCKED
                    }),
                    m.default.track(I.rMx.BLOCK_USER_CONFIRMED),
                    d.Z.showBlockSuccessToast(t.id, null != h ? h : void 0);
            },
            impression: { impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...N,
            children: (0, i.jsx)(v, {
                user: t,
                guildId: f,
                channelId: h,
                onBlock: e,
                onIgnore: c,
                disallowIgnore: u
            })
        })
    );
}
