n.d(t, {
    ZP: () => A,
    fp: () => R,
    k0: () => S
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(230711),
    u = n(497321),
    m = n(688465),
    h = n(241559),
    g = n(496675),
    x = n(246946),
    p = n(594174),
    _ = n(63063),
    C = n(78451),
    f = n(434404),
    v = n(999382),
    N = n(181339),
    j = n(193544),
    I = n(981631),
    E = n(388032),
    b = n(150512);
function T(e) {
    let { guild: t } = e,
        n = (0, o.e7)([g.Z], () => null != t && g.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        l = r.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await f.Z.saveGuild(t.id, { verificationLevel: n }), f.Z.updateGuild({ verificationLevel: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(E.intl.string(E.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t]
        ),
        s = r.useMemo(() => {
            let e = (0, C.IF)(null == t ? void 0 : t.hasFeature(I.oNc.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: 'left'
            }));
            return (0, C.LJ)(e);
        }, [t]),
        a = r.useMemo(() => s.find((e) => e.value === (null == t ? void 0 : t.verificationLevel)), [t, s]);
    return (0, i.jsxs)('div', {
        className: b.setupContainer,
        children: [
            (0, i.jsxs)('div', {
                className: b.switchItemTextContent,
                children: [
                    (0, i.jsx)(c.Text, {
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: E.intl.string(E.t.DpRdYG)
                    }),
                    (0, i.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: E.intl.format(E.t.iuRk2t, {})
                    })
                ]
            }),
            (0, i.jsx)(j.Z, {
                changeTitle: E.intl.string(E.t.TxESJC),
                value: null == a ? void 0 : a.value,
                options: s,
                disabled: !n,
                onChange: l
            })
        ]
    });
}
function S(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        a = (0, o.e7)([g.Z], () => null != t && g.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        d = r.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await f.Z.saveGuild(t.id, { explicitContentFilter: n }), f.Z.updateGuild({ explicitContentFilter: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(E.intl.string(E.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t.id]
        ),
        u = r.useMemo(() => {
            let e = (0, C.MF)(null == t ? void 0 : t.hasFeature(I.oNc.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: 'left'
            }));
            return (0, C.LJ)(e);
        }, [t]),
        m = r.useMemo(() => u.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, u]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l && (0, i.jsx)(c.$i$, { className: b.divider }),
            (0, i.jsxs)('div', {
                className: s()(b.setupContainer, n),
                children: [
                    (0, i.jsxs)('div', {
                        className: b.switchItemTextContent,
                        children: [
                            (0, i.jsx)(c.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                children: E.intl.string(E.t.Kd6OQU)
                            }),
                            (0, i.jsx)(c.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: E.intl.format(E.t.zOmxND, { helpdeskArticle: _.Z.getArticleURL(I.BhN.SAFE_DIRECT_MESSAGING) })
                            })
                        ]
                    }),
                    (0, i.jsx)(j.Z, {
                        changeTitle: E.intl.string(E.t['eBd+Ul']),
                        value: null == m ? void 0 : m.value,
                        options: u,
                        disabled: !a,
                        onChange: d
                    })
                ]
            })
        ]
    });
}
async function R(e, t) {
    if (e.hasFeature(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return t ? n.add(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await f.Z.saveGuild(e.id, { features: n });
}
function Z(e) {
    let { guild: t } = e,
        n = (0, o.e7)([g.Z], () => null != t && g.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        l = t.hasFeature(I.oNc.COMMUNITY),
        s = (0, h.n2)(t.id),
        [a, d] = r.useState(t.hasFeature(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        u = r.useCallback(
            async (e) => {
                d(e), await R(t, e);
            },
            [t]
        );
    return l || !s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: b.setupContainer,
                      children: [
                          (0, i.jsx)(c.j7V, {
                              value: a,
                              onChange: u,
                              className: b.switchItem,
                              disabled: !n,
                              hideBorder: !0,
                              children: (0, i.jsxs)('div', {
                                  className: b.switchItemTextContent,
                                  children: [
                                      (0, i.jsxs)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: [E.intl.string(E.t.jDarm5), (0, i.jsx)(m.Z, { className: b.betaTag })]
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: E.intl.string(E.t['/ee7yM'])
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsx)(c.Wn, {
                              messageType: c.QYI.INFO,
                              textVariant: 'text-xs/normal',
                              children: E.intl.string(E.t.JxO639)
                          })
                      ]
                  }),
                  (0, i.jsx)(c.$i$, { className: b.divider })
              ]
          });
}
function y(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.e7)([g.Z], () => null != t && g.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        s = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        { isGuildOwnerWithMFA: u, showMFAUserTooltip: m } = r.useMemo(
            () =>
                null == s
                    ? {
                          canChangeMFALevel: !1,
                          showMFAUserTooltip: !1
                      }
                    : {
                          isGuildOwnerWithMFA: t.isOwnerWithRequiredMfaLevel(s),
                          showMFAUserTooltip: !s.mfaEnabled && t.isOwner(s)
                      },
            [s, t]
        ),
        h = n === I.BpS.ELEVATED,
        x = (0, a.throttle)(async (e) => {
            u &&
                !m &&
                (await f.Z.updateMFALevel({
                    guildId: t.id,
                    level: e ? I.BpS.ELEVATED : I.BpS.NONE,
                    isEnabled: !e
                }));
        }, 1000);
    return l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.$i$, { className: b.divider }),
                  (0, i.jsxs)('div', {
                      className: b.setupContainer,
                      children: [
                          (0, i.jsx)(c.j7V, {
                              value: h,
                              onChange: x,
                              className: b.switchItem,
                              disabled: !u,
                              hideBorder: !0,
                              children: (0, i.jsxs)('div', {
                                  className: b.switchItemTextContent,
                                  children: [
                                      (0, i.jsx)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: E.intl.string(E.t.lbBfER)
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: E.intl.string(E.t.REr5AA)
                                      })
                                  ]
                              })
                          }),
                          m &&
                              (0, i.jsx)(c.Wn, {
                                  messageType: c.QYI.INFO,
                                  textVariant: 'text-xs/normal',
                                  children: E.intl.format(E.t.Xz1O0d, {
                                      onClick: function () {
                                          d.Z.open(I.oAB.ACCOUNT);
                                      }
                                  })
                              })
                      ]
                  })
              ]
          })
        : null;
}
function A() {
    let { guild: e, mfaLevel: t } = (0, o.cj)([v.Z], () => v.Z.getProps(), []),
        n = (0, o.e7)([x.Z], () => x.Z.enabled, []);
    return null == e
        ? null
        : n
          ? (0, i.jsx)(u.Z, {})
          : (0, i.jsxs)(c.hjN, {
                title: E.intl.string(E.t['suhY+f']),
                tag: c.RB0.H1,
                titleClassName: b.headerContainer,
                children: [
                    (0, i.jsx)(Z, { guild: e }),
                    (0, i.jsx)(T, { guild: e }),
                    (0, i.jsx)(y, {
                        guild: e,
                        mfaLevel: t
                    }),
                    (0, i.jsx)(S, { guild: e }),
                    (0, i.jsx)(c.$i$, { className: b.divider }),
                    (0, i.jsx)('div', {
                        className: s()(b.setupContainer),
                        children: (0, i.jsx)(N.w, { guild: e })
                    })
                ]
            });
}
