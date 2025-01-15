n.d(t, {
    ZP: function () {
        return Z;
    },
    fp: function () {
        return R;
    },
    k0: function () {
        return S;
    }
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
    f = n(63063),
    C = n(78451),
    v = n(434404),
    I = n(999382),
    N = n(181339),
    _ = n(193544),
    T = n(981631),
    j = n(388032),
    b = n(858935);
function E(e) {
    let { guild: t } = e,
        n = (0, o.e7)([g.Z], () => null != t && g.Z.can(T.Plq.MANAGE_GUILD, t), [t]),
        l = r.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await v.Z.saveGuild(t.id, { verificationLevel: n }), v.Z.updateGuild({ verificationLevel: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(j.intl.string(j.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t]
        ),
        s = r.useMemo(() => {
            let e = (0, C.IF)(null == t ? void 0 : t.hasFeature(T.oNc.COMMUNITY)).map((e) => ({
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
                        children: j.intl.string(j.t.DpRdYG)
                    }),
                    (0, i.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: j.intl.format(j.t.iuRk2t, {})
                    })
                ]
            }),
            (0, i.jsx)(_.Z, {
                changeTitle: j.intl.string(j.t.TxESJC),
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
        a = (0, o.e7)([g.Z], () => null != t && g.Z.can(T.Plq.MANAGE_GUILD, t), [t]),
        d = r.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await v.Z.saveGuild(t.id, { explicitContentFilter: n }), v.Z.updateGuild({ explicitContentFilter: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(j.intl.string(j.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t.id]
        ),
        u = r.useMemo(() => {
            let e = (0, C.MF)(null == t ? void 0 : t.hasFeature(T.oNc.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: 'left'
            }));
            return (0, C.LJ)(e);
        }, [t]),
        m = r.useMemo(() => u.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, u]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l && (0, i.jsx)(c.FormDivider, { className: b.divider }),
            (0, i.jsxs)('div', {
                className: s()(b.setupContainer, n),
                children: [
                    (0, i.jsxs)('div', {
                        className: b.switchItemTextContent,
                        children: [
                            (0, i.jsx)(c.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                children: j.intl.string(j.t.Kd6OQU)
                            }),
                            (0, i.jsx)(c.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: j.intl.format(j.t.zOmxND, { helpdeskArticle: f.Z.getArticleURL(T.BhN.SAFE_DIRECT_MESSAGING) })
                            })
                        ]
                    }),
                    (0, i.jsx)(_.Z, {
                        changeTitle: j.intl.string(j.t['eBd+Ul']),
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
    if (e.hasFeature(T.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return t ? n.add(T.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(T.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await v.Z.saveGuild(e.id, { features: n });
}
function y(e) {
    let { guild: t } = e,
        n = (0, o.e7)([g.Z], () => null != t && g.Z.can(T.Plq.MANAGE_GUILD, t), [t]),
        l = t.hasFeature(T.oNc.COMMUNITY),
        s = (0, h.n2)(t.id),
        [a, d] = r.useState(t.hasFeature(T.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
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
                          (0, i.jsx)(c.FormSwitch, {
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
                                          children: [j.intl.string(j.t.jDarm5), (0, i.jsx)(m.Z, { className: b.betaTag })]
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: j.intl.string(j.t['/ee7yM'])
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsx)(c.HelpMessage, {
                              messageType: c.HelpMessageTypes.INFO,
                              textVariant: 'text-xs/normal',
                              children: j.intl.string(j.t.JxO639)
                          })
                      ]
                  }),
                  (0, i.jsx)(c.FormDivider, { className: b.divider })
              ]
          });
}
function A(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.e7)([g.Z], () => null != t && g.Z.can(T.Plq.MANAGE_GUILD, t), [t]),
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
        h = n === T.BpS.ELEVATED,
        x = (0, a.throttle)(async (e) => {
            if (!!u && !m)
                await v.Z.updateMFALevel({
                    guildId: t.id,
                    level: e ? T.BpS.ELEVATED : T.BpS.NONE,
                    isEnabled: !e
                });
        }, 1000);
    return l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.FormDivider, { className: b.divider }),
                  (0, i.jsxs)('div', {
                      className: b.setupContainer,
                      children: [
                          (0, i.jsx)(c.FormSwitch, {
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
                                          children: j.intl.string(j.t.lbBfER)
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: j.intl.string(j.t.REr5AA)
                                      })
                                  ]
                              })
                          }),
                          m &&
                              (0, i.jsx)(c.HelpMessage, {
                                  messageType: c.HelpMessageTypes.INFO,
                                  textVariant: 'text-xs/normal',
                                  children: j.intl.format(j.t.Xz1O0d, {
                                      onClick: function () {
                                          d.Z.open(T.oAB.ACCOUNT);
                                      }
                                  })
                              })
                      ]
                  })
              ]
          })
        : null;
}
function Z() {
    let { guild: e, mfaLevel: t } = (0, o.cj)([I.Z], () => I.Z.getProps(), []),
        n = (0, o.e7)([x.Z], () => x.Z.enabled, []);
    return null == e
        ? null
        : n
          ? (0, i.jsx)(u.Z, {})
          : (0, i.jsxs)(c.FormSection, {
                title: j.intl.string(j.t['suhY+f']),
                tag: c.FormTitleTags.H1,
                titleClassName: b.headerContainer,
                children: [
                    (0, i.jsx)(y, { guild: e }),
                    (0, i.jsx)(E, { guild: e }),
                    (0, i.jsx)(A, {
                        guild: e,
                        mfaLevel: t
                    }),
                    (0, i.jsx)(S, { guild: e }),
                    (0, i.jsx)(c.FormDivider, { className: b.divider }),
                    (0, i.jsx)('div', {
                        className: s()(b.setupContainer),
                        children: (0, i.jsx)(N.w, { guild: e })
                    })
                ]
            });
}
