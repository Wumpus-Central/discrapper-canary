n.d(t, {
    M: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(286379),
    a = n(442837),
    s = n(481060),
    o = n(87051),
    c = n(194359),
    d = n(661824),
    u = n(797614),
    h = n(922611),
    p = n(681678),
    m = n(699516),
    f = n(9156),
    g = n(621600),
    C = n(378298),
    x = n(359119),
    v = n(473092),
    _ = n(177342),
    I = n(134612),
    E = n(981631),
    b = n(388032),
    Z = n(771860);
function S(e) {
    let { senderId: t, channelId: n, warningId: r } = e,
        { isIgnored: d } = (0, a.cj)([m.Z], () => ({ isIgnored: m.Z.isIgnored(t) }), [t]),
        u = (0, h.Do)({ location: 'web_stranger_danger_more' }),
        C = (0, a.e7)([f.ZP], () => f.ZP.isChannelMuted(null, n)),
        _ = l.useCallback(() => {
            (0, v.qc)({
                channelId: n,
                warningId: r,
                senderId: t,
                warningType: x.pj.STRANGER_DANGER,
                cta: v.NM.USER_MODAL_IGNORE
            }),
                c.Z.ignoreUser(t, 'web_stranger_danger_more', n);
        }, [n, r, t]),
        I = l.useCallback(() => {
            (0, v.qc)({
                channelId: n,
                warningId: r,
                senderId: t,
                warningType: x.pj.STRANGER_DANGER,
                cta: v.NM.USER_MODAL_UNIGNORE
            }),
                c.Z.unignoreUser(t, 'web_stranger_danger_more', n);
        }, [n, r, t]);
    return u
        ? (0, i.jsxs)('div', {
              className: Z.safetyAction,
              children: [
                  (0, i.jsxs)('div', {
                      className: Z.safetyActionText,
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: b.intl.string(b.t.avyV7O)
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              children: b.intl.string(b.t.naWE6e)
                          })
                      ]
                  }),
                  (0, i.jsx)(s.Button, {
                      size: s.Button.Sizes.SMALL,
                      color: s.Button.Colors.PRIMARY,
                      'aria-label': d ? b.intl.string(b.t['3SrzRU']) : b.intl.string(b.t.avyV7O),
                      onClick: d ? I : _,
                      children: d ? b.intl.string(b.t['3SrzRU']) : b.intl.string(b.t.avyV7O)
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: Z.safetyAction,
              children: [
                  (0, i.jsxs)('div', {
                      className: Z.safetyActionText,
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: b.intl.string(b.t['UVp+4+'])
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: 'text-xs/medium',
                              color: 'header-secondary',
                              children: b.intl.string(b.t.VS47BA)
                          })
                      ]
                  }),
                  (0, i.jsx)(s.Button, {
                      size: s.Button.Sizes.SMALL,
                      color: s.Button.Colors.PRIMARY,
                      'aria-label': C ? b.intl.string(b.t['6QK4Hx']) : b.intl.string(b.t['UVp+4+']),
                      onClick: C
                          ? () => {
                                o.Z.updateChannelOverrideSettings(null, n, { muted: !1 }, g.ZB.Unmuted),
                                    p.Z.showUnmuteSuccessToast(t, n),
                                    (0, v.qc)({
                                        channelId: n,
                                        warningId: r,
                                        senderId: t,
                                        warningType: x.pj.STRANGER_DANGER,
                                        cta: v.NM.USER_MODAL_UNMUTE
                                    });
                            }
                          : () => {
                                o.Z.updateChannelOverrideSettings(null, n, { muted: !0 }, g.ZB.Muted),
                                    p.Z.showMuteSuccessToast(t, n),
                                    (0, v.qc)({
                                        channelId: n,
                                        warningId: r,
                                        senderId: t,
                                        warningType: x.pj.STRANGER_DANGER,
                                        cta: v.NM.USER_MODAL_MUTE
                                    });
                            },
                      children: C ? b.intl.string(b.t['6QK4Hx']) : b.intl.string(b.t['UVp+4+'])
                  })
              ]
          });
}
function N(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)('div', {
        className: Z.safetyAction,
        children: [
            (0, i.jsxs)('div', {
                className: Z.safetyActionText,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: b.intl.string(b.t['5QYPOz'])
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: b.intl.string(b.t.G08MKi)
                    })
                ]
            }),
            (0, i.jsx)(s.Button, {
                size: s.Button.Sizes.SMALL,
                color: s.Button.Colors.RED,
                'aria-label': b.intl.string(b.t.ie0QdH),
                onClick: t,
                children: b.intl.string(b.t.ie0QdH)
            })
        ]
    });
}
function T(e) {
    let { channelId: t, warningId: o, senderId: h } = e,
        { isBlocked: p } = (0, a.cj)([m.Z], () => ({ isBlocked: m.Z.isBlocked(h) }), [h]),
        f = l.useCallback(() => {
            (0, C.T)(t, [o]);
        }, [t, o]),
        g = (0, I.C2)(),
        Z = l.useCallback(
            (e) => () => {
                c.Z.addRelationship({
                    userId: h,
                    context: { location: I.zr },
                    type: E.OGo.BLOCKED
                }),
                    f(),
                    (0, v.qc)({
                        channelId: t,
                        warningId: o,
                        senderId: h,
                        warningType: x.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [f, t, o, h]
        );
    l.useEffect(() => {
        (0, v.MC)(E.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: o,
            senderId: h,
            warningType: x.pj.STRANGER_DANGER
        }),
            u.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
    }, [t, o, h]);
    let T = () => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: l, onClose: r } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: r,
                        channelId: t,
                        warningId: o,
                        senderId: h,
                        description: b.intl.string(b.t.DJMZX1),
                        safetyTips: g.map((e, t) =>
                            (0, i.jsx)(
                                s.Text,
                                {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: e
                                },
                                t
                            )
                        ),
                        actions: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(S, {
                                    senderId: h,
                                    channelId: t,
                                    warningId: o
                                }),
                                (0, i.jsx)(d.Z, {}),
                                (0, i.jsx)(N, {
                                    onClick: () => {
                                        r(), j(v.NM.USER_MODAL_BLOCK_CONFIRM, v.NM.USER_MODAL_BLOCK_CANCEL, T);
                                    }
                                })
                            ]
                        })
                    });
                };
            });
        },
        j = (e, l, r) => {
            (0, s.openModalLazy)(async () => {
                let { default: a } = await n.e('68747').then(n.bind(n, 744373));
                return (n) =>
                    (0, i.jsx)(a, {
                        ...n,
                        userId: h,
                        confirmBlock: Z(e),
                        onCancel: () => {
                            null == r || r(),
                                (0, v.qc)({
                                    channelId: t,
                                    warningId: o,
                                    senderId: h,
                                    warningType: x.pj.STRANGER_DANGER,
                                    cta: l
                                });
                        }
                    });
            });
        };
    return (0, i.jsx)(_.Q, {
        channelId: t,
        warningId: o,
        senderId: h,
        warningType: x.pj.STRANGER_DANGER,
        header: b.intl.string(b.t.iOkDpK),
        description: b.intl.string(b.t.ISUbcH),
        onDismiss: f,
        buttons: [
            {
                text: b.intl.string(b.t['Qk/c4+']),
                color: s.Button.Colors.BRAND,
                onclick: () => {
                    T(),
                        (0, v.qc)({
                            channelId: t,
                            warningId: o,
                            senderId: h,
                            warningType: x.pj.STRANGER_DANGER,
                            cta: v.NM.OPEN_MORE_TIPS
                        });
                }
            },
            ...(p
                ? []
                : [
                      {
                          text: b.intl.string(b.t.ie0QdH),
                          color: s.Button.Colors.RED,
                          onclick: () => j(v.NM.USER_BANNER_BLOCK_CONFIRM, v.NM.USER_BANNER_BLOCK_CANCEL)
                      }
                  ])
        ]
    });
}
