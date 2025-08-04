(n.d(t, {
    ZP: () => A,
    fp: () => R,
    k0: () => w
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
    m = n(688465),
    g = n(241559),
    p = n(601964),
    h = n(496675),
    f = n(246946),
    x = n(594174),
    b = n(63063),
    j = n(78451),
    v = n(434404),
    _ = n(999382),
    O = n(181339),
    y = n(403170),
    C = n(193544),
    N = n(981631),
    I = n(388032),
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
        n = (0, o.e7)([h.Z], () => null != t && h.Z.can(N.Plq.MANAGE_GUILD, t), [t]),
        l = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    (await v.Z.saveGuild(t.id, { verificationLevel: n }), v.Z.updateGuild({ verificationLevel: n }));
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(I.intl.string(I.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t]
        ),
        a = i.useMemo(() => {
            let e = (0, j.IF)(null == t ? void 0 : t.features.has(N.oNc.COMMUNITY)).map((e) => T(S({}, e), { tooltipPosition: 'left' }));
            return (0, j.LJ)(e);
        }, [t]),
        s = i.useMemo(() => a.find((e) => e.value === (null == t ? void 0 : t.verificationLevel)), [t, a]);
    return (0, r.jsxs)('div', {
        className: E.setupContainer,
        children: [
            (0, r.jsxs)('div', {
                className: E.switchItemTextContent,
                children: [
                    (0, r.jsx)(c.Text, {
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: I.intl.string(I.t.DpRdYG)
                    }),
                    (0, r.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: I.intl.format(I.t.iuRk2t, {})
                    })
                ]
            }),
            (0, r.jsx)(C.Z, {
                changeTitle: I.intl.string(I.t.TxESJC),
                value: null == s ? void 0 : s.value,
                options: a,
                disabled: !n,
                onChange: l
            })
        ]
    });
}
function w(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        s = (0, o.e7)([h.Z], () => null != t && h.Z.can(N.Plq.MANAGE_GUILD, t), [t]),
        d = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    (await v.Z.saveGuild(t.id, { explicitContentFilter: n }), v.Z.updateGuild({ explicitContentFilter: n }));
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(I.intl.string(I.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t.id]
        ),
        u = i.useMemo(() => {
            let e = (0, j.MF)(null == t ? void 0 : t.features.has(N.oNc.COMMUNITY)).map((e) => T(S({}, e), { tooltipPosition: 'left' }));
            return (0, j.LJ)(e);
        }, [t]),
        m = i.useMemo(() => u.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, u]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l && (0, r.jsx)(c.$i$, { className: E.divider }),
            (0, r.jsxs)('div', {
                className: a()(E.setupContainer, n),
                children: [
                    (0, r.jsxs)('div', {
                        className: E.switchItemTextContent,
                        children: [
                            (0, r.jsx)(c.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                children: I.intl.string(I.t.bPgfJy)
                            }),
                            (0, r.jsx)(c.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: I.intl.format(I.t.BI4ukJ, { helpdeskArticle: b.Z.getArticleURL(N.BhN.SAFE_DIRECT_MESSAGING) })
                            })
                        ]
                    }),
                    (0, r.jsx)(C.Z, {
                        changeTitle: I.intl.string(I.t['eBd+Ul']),
                        value: null == m ? void 0 : m.value,
                        options: u,
                        disabled: !s,
                        onChange: d
                    })
                ]
            })
        ]
    });
}
async function R(e, t) {
    if (e.features.has(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return (t ? n.add(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await v.Z.saveGuild(e.id, { features: n }));
}
function Z(e) {
    let { guild: t } = e,
        n = (0, o.e7)([h.Z], () => null != t && h.Z.can(N.Plq.MANAGE_GUILD, t), [t]),
        l = t.features.has(N.oNc.COMMUNITY),
        a = (0, g.n2)(t.id),
        [s, d] = i.useState(t.features.has(N.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        u = i.useCallback(
            async (e) => {
                (d(e), await R(t, e));
            },
            [t]
        );
    return l || !a
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: E.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: s,
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
                                          children: [I.intl.string(I.t.jDarm5), (0, r.jsx)(m.Z, { className: E.betaTag })]
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: I.intl.string(I.t['/ee7yM'])
                                      })
                                  ]
                              })
                          }),
                          (0, r.jsx)(c.Wn, {
                              messageType: c.QYI.INFO,
                              textVariant: 'text-xs/normal',
                              children: I.intl.string(I.t.JxO639)
                          })
                      ]
                  }),
                  (0, r.jsx)(c.$i$, { className: E.divider })
              ]
          });
}
function D(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.e7)([h.Z], () => null != t && h.Z.can(N.Plq.MANAGE_GUILD, t), [t]),
        a = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
        { isGuildOwnerWithMFA: u, showMFAUserTooltip: m } = i.useMemo(
            () =>
                null == a
                    ? {
                          canChangeMFALevel: !1,
                          showMFAUserTooltip: !1
                      }
                    : {
                          isGuildOwnerWithMFA: (0, p.yn)(t, a),
                          showMFAUserTooltip: !a.mfaEnabled && (0, p.eM)(t, a)
                      },
            [a, t]
        ),
        g = n === N.BpS.ELEVATED,
        f = (0, s.throttle)(async (e) => {
            u &&
                (m ||
                    (await v.Z.updateMFALevel({
                        guildId: t.id,
                        level: e ? N.BpS.ELEVATED : N.BpS.NONE,
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
                              onChange: f,
                              className: E.switchItem,
                              disabled: !u,
                              hideBorder: !0,
                              children: (0, r.jsxs)('div', {
                                  className: E.switchItemTextContent,
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: I.intl.string(I.t.lbBfER)
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: I.intl.string(I.t.REr5AA)
                                      })
                                  ]
                              })
                          }),
                          m &&
                              (0, r.jsx)(c.Wn, {
                                  messageType: c.QYI.INFO,
                                  textVariant: 'text-xs/normal',
                                  children: I.intl.format(I.t.Xz1O0d, {
                                      onClick: function () {
                                          d.Z.open(N.oAB.ACCOUNT);
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
    let { guild: e, mfaLevel: t } = (0, o.cj)([_.Z], () => _.Z.getProps(), []),
        n = (0, o.e7)([f.Z], () => f.Z.enabled, []);
    return null == e
        ? null
        : n
          ? (0, r.jsx)(u.Z, {})
          : (0, r.jsxs)(c.hjN, {
                title: I.intl.string(I.t['suhY+f']),
                tag: c.RB0.H1,
                titleClassName: E.headerContainer,
                children: [
                    (0, r.jsx)(y.z, { guild: e }),
                    (0, r.jsx)(Z, { guild: e }),
                    (0, r.jsx)(P, { guild: e }),
                    (0, r.jsx)(D, {
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
