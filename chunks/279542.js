(n.d(t, {
    ZP: () => k,
    fp: () => Z,
    k0: () => R
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(230711),
    u = n(497321),
    m = n(470734),
    g = n(688465),
    p = n(241559),
    h = n(601964),
    f = n(496675),
    x = n(246946),
    b = n(594174),
    j = n(63063),
    v = n(78451),
    _ = n(434404),
    O = n(999382),
    y = n(181339),
    C = n(403170),
    N = n(193544),
    I = n(981631),
    E = n(388032),
    S = n(576583);
function T(e) {
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
function P(e, t) {
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
function w(e) {
    let { guild: t } = e,
        n = (0, o.e7)([f.Z], () => null != t && f.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        l = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    (await _.Z.saveGuild(t.id, { verificationLevel: n }), _.Z.updateGuild({ verificationLevel: n }));
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(E.intl.string(E.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t]
        ),
        a = i.useMemo(() => {
            let e = (0, v.IF)(null == t ? void 0 : t.features.has(I.oNc.COMMUNITY)).map((e) => P(T({}, e), { tooltipPosition: 'left' }));
            return (0, v.LJ)(e);
        }, [t]),
        s = i.useMemo(() => a.find((e) => e.value === (null == t ? void 0 : t.verificationLevel)), [t, a]);
    return (0, r.jsxs)('div', {
        className: S.setupContainer,
        children: [
            (0, r.jsxs)('div', {
                className: S.switchItemTextContent,
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
                value: null == s ? void 0 : s.value,
                options: a,
                disabled: !n,
                onChange: l
            })
        ]
    });
}
function R(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        s = (0, m.pn)('GuildExplicitContentFilter'),
        d = (0, o.e7)([f.Z], () => null != t && f.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        u = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    (await _.Z.saveGuild(t.id, { explicitContentFilter: n }), _.Z.updateGuild({ explicitContentFilter: n }));
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(E.intl.string(E.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t.id]
        ),
        g = i.useMemo(() => {
            let e = (0, v.MF)(null == t ? void 0 : t.features.has(I.oNc.COMMUNITY)).map((e) => P(T({}, e), { tooltipPosition: 'left' }));
            return (0, v.LJ)(e);
        }, [t]),
        p = i.useMemo(() => g.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, g]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l && (0, r.jsx)(c.$i$, { className: S.divider }),
            (0, r.jsxs)('div', {
                className: a()(S.setupContainer, n),
                children: [
                    (0, r.jsxs)('div', {
                        className: S.switchItemTextContent,
                        children: [
                            (0, r.jsx)(c.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                children: s ? E.intl.string(E.t.bPgfJy) : E.intl.string(E.t.Kd6OQU)
                            }),
                            (0, r.jsx)(c.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: E.intl.format(s ? E.t.BI4ukJ : E.t.zOmxND, { helpdeskArticle: j.Z.getArticleURL(I.BhN.SAFE_DIRECT_MESSAGING) })
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
async function Z(e, t) {
    if (e.features.has(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return (t ? n.add(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await _.Z.saveGuild(e.id, { features: n }));
}
function D(e) {
    let { guild: t } = e,
        n = (0, o.e7)([f.Z], () => null != t && f.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        l = t.features.has(I.oNc.COMMUNITY),
        a = (0, p.n2)(t.id),
        [s, d] = i.useState(t.features.has(I.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        u = i.useCallback(
            async (e) => {
                (d(e), await Z(t, e));
            },
            [t]
        );
    return l || !a
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: S.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: s,
                              onChange: u,
                              className: S.switchItem,
                              disabled: !n,
                              hideBorder: !0,
                              children: (0, r.jsxs)('div', {
                                  className: S.switchItemTextContent,
                                  children: [
                                      (0, r.jsxs)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: [E.intl.string(E.t.jDarm5), (0, r.jsx)(g.Z, { className: S.betaTag })]
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
                  (0, r.jsx)(c.$i$, { className: S.divider })
              ]
          });
}
function A(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.e7)([f.Z], () => null != t && f.Z.can(I.Plq.MANAGE_GUILD, t), [t]),
        a = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        { isGuildOwnerWithMFA: u, showMFAUserTooltip: m } = i.useMemo(
            () =>
                null == a
                    ? {
                          canChangeMFALevel: !1,
                          showMFAUserTooltip: !1
                      }
                    : {
                          isGuildOwnerWithMFA: (0, h.yn)(t, a),
                          showMFAUserTooltip: !a.mfaEnabled && (0, h.eM)(t, a)
                      },
            [a, t]
        ),
        g = n === I.BpS.ELEVATED,
        p = (0, s.throttle)(async (e) => {
            u &&
                (m ||
                    (await _.Z.updateMFALevel({
                        guildId: t.id,
                        level: e ? I.BpS.ELEVATED : I.BpS.NONE,
                        isEnabled: !e
                    })));
        }, 1000);
    return l
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.$i$, { className: S.divider }),
                  (0, r.jsxs)('div', {
                      className: S.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: g,
                              onChange: p,
                              className: S.switchItem,
                              disabled: !u,
                              hideBorder: !0,
                              children: (0, r.jsxs)('div', {
                                  className: S.switchItemTextContent,
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
function k() {
    let { guild: e, mfaLevel: t } = (0, o.cj)([O.Z], () => O.Z.getProps(), []),
        n = (0, o.e7)([x.Z], () => x.Z.enabled, []);
    return null == e
        ? null
        : n
          ? (0, r.jsx)(u.Z, {})
          : (0, r.jsxs)(c.hjN, {
                title: E.intl.string(E.t['suhY+f']),
                tag: c.RB0.H1,
                titleClassName: S.headerContainer,
                children: [
                    (0, r.jsx)(C.z, { guild: e }),
                    (0, r.jsx)(D, { guild: e }),
                    (0, r.jsx)(w, { guild: e }),
                    (0, r.jsx)(A, {
                        guild: e,
                        mfaLevel: t
                    }),
                    (0, r.jsx)(R, { guild: e }),
                    (0, r.jsx)(c.$i$, { className: S.divider }),
                    (0, r.jsx)('div', {
                        className: S.setupContainer,
                        children: (0, r.jsx)(y.w, { guild: e })
                    })
                ]
            });
}
