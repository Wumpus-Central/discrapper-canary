(n.d(t, {
    ZP: () => L,
    fp: () => R,
    k0: () => w
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(230711),
    u = n(497321),
    m = n(470734),
    g = n(688465),
    p = n(241559),
    f = n(496675),
    h = n(246946),
    x = n(594174),
    b = n(63063),
    j = n(78451),
    _ = n(434404),
    v = n(999382),
    O = n(181339),
    C = n(193544),
    y = n(981631),
    N = n(388032),
    I = n(130883),
    E = n(576583);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { guild: t } = e,
        n = (0, o.e7)([f.Z], () => null != t && f.Z.can(y.Plq.MANAGE_GUILD, t), [t]),
        l = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    (await _.Z.saveGuild(t.id, { verificationLevel: n }), _.Z.updateGuild({ verificationLevel: n }));
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(N.intl.string(N.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t]
        ),
        s = i.useMemo(() => {
            let e = (0, j.IF)(null == t ? void 0 : t.hasFeature(y.oNc.COMMUNITY)).map((e) => T(S({}, e), { tooltipPosition: 'left' }));
            return (0, j.LJ)(e);
        }, [t]),
        a = i.useMemo(() => s.find((e) => e.value === (null == t ? void 0 : t.verificationLevel)), [t, s]);
    return (0, r.jsxs)('div', {
        className: E.setupContainer,
        children: [
            (0, r.jsxs)('div', {
                className: E.switchItemTextContent,
                children: [
                    (0, r.jsx)(c.Text, {
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: N.intl.string(N.t.DpRdYG)
                    }),
                    (0, r.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: N.intl.format(N.t.iuRk2t, {})
                    })
                ]
            }),
            (0, r.jsx)(C.Z, {
                changeTitle: N.intl.string(N.t.TxESJC),
                value: null == a ? void 0 : a.value,
                options: s,
                disabled: !n,
                onChange: l
            })
        ]
    });
}
function w(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        a = (0, m.pn)('GuildExplicitContentFilter'),
        d = (0, o.e7)([f.Z], () => null != t && f.Z.can(y.Plq.MANAGE_GUILD, t), [t]),
        u = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    (await _.Z.saveGuild(t.id, { explicitContentFilter: n }), _.Z.updateGuild({ explicitContentFilter: n }));
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(N.intl.string(N.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t.id]
        ),
        g = i.useMemo(() => {
            let e = (0, j.MF)(null == t ? void 0 : t.hasFeature(y.oNc.COMMUNITY)).map((e) => T(S({}, e), { tooltipPosition: 'left' }));
            return (0, j.LJ)(e);
        }, [t]),
        p = i.useMemo(() => g.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, g]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l && (0, r.jsx)(c.$i$, { className: E.divider }),
            (0, r.jsxs)('div', {
                className: s()(E.setupContainer, n),
                children: [
                    (0, r.jsxs)('div', {
                        className: E.switchItemTextContent,
                        children: [
                            (0, r.jsx)(c.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                children: a ? N.intl.string(N.t.bPgfJy) : N.intl.string(N.t.Kd6OQU)
                            }),
                            (0, r.jsx)(c.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: N.intl.format(a ? N.t.BI4ukJ : N.t.zOmxND, { helpdeskArticle: b.Z.getArticleURL(y.BhN.SAFE_DIRECT_MESSAGING) })
                            })
                        ]
                    }),
                    (0, r.jsx)(C.Z, {
                        changeTitle: N.intl.string(N.t['eBd+Ul']),
                        value: null == p ? void 0 : p.value,
                        options: g,
                        disabled: !d,
                        onChange: u
                    })
                ]
            })
        ]
    });
}
async function R(e, t) {
    if (e.hasFeature(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return (t ? n.add(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await _.Z.saveGuild(e.id, { features: n }));
}
async function Z(e, t) {
    return await _.Z.saveGuild(e.id, { moderatorReportingEnabled: t });
}
function D(e) {
    let { guild: t } = e,
        n = (0, o.e7)([f.Z], () => null != t && f.Z.can(y.Plq.MANAGE_GUILD, t), [t]),
        l = t.hasFeature(y.oNc.COMMUNITY),
        s = (0, p.n2)(t.id),
        [a, d] = i.useState(t.hasFeature(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        u = i.useCallback(
            async (e) => {
                (d(e), await R(t, e));
            },
            [t]
        );
    return l || !s
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: E.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: a,
                              onChange: u,
                              className: E.switchItem,
                              disabled: !n,
                              hideBorder: !0,
                              children: (0, r.jsxs)('div', {
                                  className: E.switchItemTextContent,
                                  children: [
                                      (0, r.jsxs)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: [N.intl.string(N.t.jDarm5), (0, r.jsx)(g.Z, { className: E.betaTag })]
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: N.intl.string(N.t['/ee7yM'])
                                      })
                                  ]
                              })
                          }),
                          (0, r.jsx)(c.Wn, {
                              messageType: c.QYI.INFO,
                              textVariant: 'text-xs/normal',
                              children: N.intl.string(N.t.JxO639)
                          })
                      ]
                  }),
                  (0, r.jsx)(c.$i$, { className: E.divider })
              ]
          });
}
function k(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.e7)([f.Z], () => null != t && f.Z.can(y.Plq.MANAGE_GUILD, t), [t]),
        s = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
        { isGuildOwnerWithMFA: u, showMFAUserTooltip: m } = i.useMemo(
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
        g = n === y.BpS.ELEVATED,
        p = (0, a.throttle)(async (e) => {
            u &&
                (m ||
                    (await _.Z.updateMFALevel({
                        guildId: t.id,
                        level: e ? y.BpS.ELEVATED : y.BpS.NONE,
                        isEnabled: !e
                    })));
        }, 1000);
    return l
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.$i$, { className: E.divider }),
                  (0, r.jsxs)('div', {
                      className: E.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: g,
                              onChange: p,
                              className: E.switchItem,
                              disabled: !u,
                              hideBorder: !0,
                              children: (0, r.jsxs)('div', {
                                  className: E.switchItemTextContent,
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: N.intl.string(N.t.lbBfER)
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: N.intl.string(N.t.REr5AA)
                                      })
                                  ]
                              })
                          }),
                          m &&
                              (0, r.jsx)(c.Wn, {
                                  messageType: c.QYI.INFO,
                                  textVariant: 'text-xs/normal',
                                  children: N.intl.format(N.t.Xz1O0d, {
                                      onClick: function () {
                                          d.Z.open(y.oAB.ACCOUNT);
                                      }
                                  })
                              })
                      ]
                  })
              ]
          })
        : null;
}
function A(e) {
    let { guild: t } = e,
        n = (0, o.e7)([f.Z], () => null != t && f.Z.can(y.Plq.MANAGE_GUILD, t), [t]),
        l = t.hasFeature(y.oNc.REPORT_TO_MOD_PILOT),
        [s, a] = i.useState(t.getModeratorReportingEnabled() && l),
        d = i.useCallback(
            async (e) => {
                (a(e), await Z(t, e));
            },
            [t]
        );
    return l && n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      className: E.setupContainer,
                      children: (0, r.jsx)(c.j7V, {
                          value: s,
                          onChange: d,
                          className: E.switchItem,
                          disabled: !n,
                          hideBorder: !0,
                          children: (0, r.jsxs)('div', {
                              className: E.switchItemTextContent,
                              children: [
                                  (0, r.jsxs)(c.Text, {
                                      color: 'header-primary',
                                      variant: 'text-md/semibold',
                                      children: [N.intl.string(I.default['/xIz7O']), (0, r.jsx)(g.Z, { className: E.betaTag })]
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: N.intl.string(I.default.uUMXys)
                                  })
                              ]
                          })
                      })
                  }),
                  (0, r.jsx)(c.$i$, { className: E.divider })
              ]
          })
        : null;
}
function L() {
    let { guild: e, mfaLevel: t } = (0, o.cj)([v.Z], () => v.Z.getProps(), []),
        n = (0, o.e7)([h.Z], () => h.Z.enabled, []);
    return null == e
        ? null
        : n
          ? (0, r.jsx)(u.Z, {})
          : (0, r.jsxs)(c.hjN, {
                title: N.intl.string(N.t['suhY+f']),
                tag: c.RB0.H1,
                titleClassName: E.headerContainer,
                children: [
                    (0, r.jsx)(A, { guild: e }),
                    (0, r.jsx)(D, { guild: e }),
                    (0, r.jsx)(P, { guild: e }),
                    (0, r.jsx)(k, {
                        guild: e,
                        mfaLevel: t
                    }),
                    (0, r.jsx)(w, { guild: e }),
                    (0, r.jsx)(c.$i$, { className: E.divider }),
                    (0, r.jsx)('div', {
                        className: E.setupContainer,
                        children: (0, r.jsx)(O.w, { guild: e })
                    })
                ]
            });
}
