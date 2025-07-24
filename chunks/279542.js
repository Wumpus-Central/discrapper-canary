(n.d(t, {
    ZP: () => G,
    fp: () => D,
    k0: () => Z
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
    f = n(953252),
    h = n(601964),
    x = n(496675),
    b = n(246946),
    j = n(594174),
    v = n(63063),
    _ = n(78451),
    O = n(434404),
    y = n(999382),
    C = n(181339),
    N = n(193544),
    I = n(981631),
    E = n(388032),
    S = n(130883),
    T = n(576583);
function P(e) {
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
function w(e, t) {
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
function R(e) {
    let { guild: t } = e,
        n = (0, o.e7)([x.Z], () => null != t && x.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        l = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    (await O.Z.saveGuild(t.id, { verificationLevel: n }), O.Z.updateGuild({ verificationLevel: n }));
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(E.intl.string(E.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t]
        ),
        s = i.useMemo(() => {
            let e = (0, _.IF)(null == t ? void 0 : t.features.has(I.oNc.COMMUNITY)).map((e) => w(P({}, e), { tooltipPosition: 'left' }));
            return (0, _.LJ)(e);
        }, [t]),
        a = i.useMemo(() => s.find((e) => e.value === (null == t ? void 0 : t.verificationLevel)), [t, s]);
    return (0, r.jsxs)('div', {
        className: T.setupContainer,
        children: [
            (0, r.jsxs)('div', {
                className: T.switchItemTextContent,
                children: [
                    (0, r.jsx)(c.Text, {
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: E.intl.string(E.t.DpRdYG)
                    }),
                    (0, r.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: E.intl.format(E.t.iuRk2t, {})
                    })
                ]
            }),
            (0, r.jsx)(N.Z, {
                changeTitle: E.intl.string(E.t.TxESJC),
                value: null == a ? void 0 : a.value,
                options: s,
                disabled: !n,
                onChange: l
            })
        ]
    });
}
function Z(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        a = (0, m.pn)('GuildExplicitContentFilter'),
        d = (0, o.e7)([x.Z], () => null != t && x.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        u = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    (await O.Z.saveGuild(t.id, { explicitContentFilter: n }), O.Z.updateGuild({ explicitContentFilter: n }));
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(E.intl.string(E.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t.id]
        ),
        g = i.useMemo(() => {
            let e = (0, _.MF)(null == t ? void 0 : t.features.has(I.oNc.COMMUNITY)).map((e) => w(P({}, e), { tooltipPosition: 'left' }));
            return (0, _.LJ)(e);
        }, [t]),
        p = i.useMemo(() => g.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, g]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l && (0, r.jsx)(c.$i$, { className: T.divider }),
            (0, r.jsxs)('div', {
                className: s()(T.setupContainer, n),
                children: [
                    (0, r.jsxs)('div', {
                        className: T.switchItemTextContent,
                        children: [
                            (0, r.jsx)(c.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                children: a ? E.intl.string(E.t.bPgfJy) : E.intl.string(E.t.Kd6OQU)
                            }),
                            (0, r.jsx)(c.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: E.intl.format(a ? E.t.BI4ukJ : E.t.zOmxND, { helpdeskArticle: v.Z.getArticleURL(I.BhN.SAFE_DIRECT_MESSAGING) })
                            })
                        ]
                    }),
                    (0, r.jsx)(N.Z, {
                        changeTitle: E.intl.string(E.t['eBd+Ul']),
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
async function D(e, t) {
    if (e.features.has(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return (t ? n.add(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await O.Z.saveGuild(e.id, { features: n }));
}
async function A(e, t) {
    return await O.Z.saveGuild(e.id, { moderatorReportingEnabled: t });
}
function L(e) {
    let { guild: t } = e,
        n = (0, o.e7)([x.Z], () => null != t && x.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        l = t.features.has(I.oNc.COMMUNITY),
        s = (0, p.n2)(t.id),
        [a, d] = i.useState(t.features.has(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        u = i.useCallback(
            async (e) => {
                (d(e), await D(t, e));
            },
            [t]
        );
    return l || !s
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: T.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: a,
                              onChange: u,
                              className: T.switchItem,
                              disabled: !n,
                              hideBorder: !0,
                              children: (0, r.jsxs)('div', {
                                  className: T.switchItemTextContent,
                                  children: [
                                      (0, r.jsxs)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: [E.intl.string(E.t.jDarm5), (0, r.jsx)(g.Z, { className: T.betaTag })]
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: E.intl.string(E.t['/ee7yM'])
                                      })
                                  ]
                              })
                          }),
                          (0, r.jsx)(c.Wn, {
                              messageType: c.QYI.INFO,
                              textVariant: 'text-xs/normal',
                              children: E.intl.string(E.t.JxO639)
                          })
                      ]
                  }),
                  (0, r.jsx)(c.$i$, { className: T.divider })
              ]
          });
}
function k(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.e7)([x.Z], () => null != t && x.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        s = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
        { isGuildOwnerWithMFA: u, showMFAUserTooltip: m } = i.useMemo(
            () =>
                null == s
                    ? {
                          canChangeMFALevel: !1,
                          showMFAUserTooltip: !1
                      }
                    : {
                          isGuildOwnerWithMFA: (0, h.yn)(t, s),
                          showMFAUserTooltip: !s.mfaEnabled && (0, h.eM)(t, s)
                      },
            [s, t]
        ),
        g = n === I.BpS.ELEVATED,
        p = (0, a.throttle)(async (e) => {
            u &&
                (m ||
                    (await O.Z.updateMFALevel({
                        guildId: t.id,
                        level: e ? I.BpS.ELEVATED : I.BpS.NONE,
                        isEnabled: !e
                    })));
        }, 1000);
    return l
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.$i$, { className: T.divider }),
                  (0, r.jsxs)('div', {
                      className: T.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: g,
                              onChange: p,
                              className: T.switchItem,
                              disabled: !u,
                              hideBorder: !0,
                              children: (0, r.jsxs)('div', {
                                  className: T.switchItemTextContent,
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: E.intl.string(E.t.lbBfER)
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: E.intl.string(E.t.REr5AA)
                                      })
                                  ]
                              })
                          }),
                          m &&
                              (0, r.jsx)(c.Wn, {
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
function M(e) {
    let { guild: t } = e,
        n = (0, o.e7)([x.Z], () => null != t && x.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        l = t.features.has(I.oNc.REPORT_TO_MOD_PILOT),
        [s, a] = i.useState((0, f.Z)(t) && l),
        d = i.useCallback(
            async (e) => {
                (a(e), await A(t, e));
            },
            [t]
        );
    return l && n
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      className: T.setupContainer,
                      children: (0, r.jsx)(c.j7V, {
                          value: s,
                          onChange: d,
                          className: T.switchItem,
                          disabled: !n,
                          hideBorder: !0,
                          children: (0, r.jsxs)('div', {
                              className: T.switchItemTextContent,
                              children: [
                                  (0, r.jsxs)(c.Text, {
                                      color: 'header-primary',
                                      variant: 'text-md/semibold',
                                      children: [E.intl.string(S.default['/xIz7O']), (0, r.jsx)(g.Z, { className: T.betaTag })]
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: E.intl.string(S.default.uUMXys)
                                  })
                              ]
                          })
                      })
                  }),
                  (0, r.jsx)(c.$i$, { className: T.divider })
              ]
          })
        : null;
}
function G() {
    let { guild: e, mfaLevel: t } = (0, o.cj)([y.Z], () => y.Z.getProps(), []),
        n = (0, o.e7)([b.Z], () => b.Z.enabled, []);
    return null == e
        ? null
        : n
          ? (0, r.jsx)(u.Z, {})
          : (0, r.jsxs)(c.hjN, {
                title: E.intl.string(E.t['suhY+f']),
                tag: c.RB0.H1,
                titleClassName: T.headerContainer,
                children: [
                    (0, r.jsx)(M, { guild: e }),
                    (0, r.jsx)(L, { guild: e }),
                    (0, r.jsx)(R, { guild: e }),
                    (0, r.jsx)(k, {
                        guild: e,
                        mfaLevel: t
                    }),
                    (0, r.jsx)(Z, { guild: e }),
                    (0, r.jsx)(c.$i$, { className: T.divider }),
                    (0, r.jsx)('div', {
                        className: T.setupContainer,
                        children: (0, r.jsx)(C.w, { guild: e })
                    })
                ]
            });
}
