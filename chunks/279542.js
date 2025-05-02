n.d(t, {
    ZP: () => Z,
    fp: () => P,
    k0: () => T
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(442837),
    c = n(481060),
    u = n(230711),
    d = n(497321),
    m = n(688465),
    g = n(241559),
    p = n(496675),
    f = n(246946),
    h = n(594174),
    x = n(63063),
    b = n(78451),
    j = n(434404),
    _ = n(999382),
    v = n(181339),
    O = n(193544),
    C = n(981631),
    y = n(388032),
    N = n(576583);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e, t) {
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
function S(e) {
    let { guild: t } = e,
        n = (0, o.e7)([p.Z], () => null != t && p.Z.can(C.Plq.MANAGE_GUILD, t), [t]),
        l = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await j.Z.saveGuild(t.id, { verificationLevel: n }), j.Z.updateGuild({ verificationLevel: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(y.intl.string(y.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t]
        ),
        s = i.useMemo(() => {
            let e = (0, b.IF)(null == t ? void 0 : t.hasFeature(C.oNc.COMMUNITY)).map((e) => E(I({}, e), { tooltipPosition: 'left' }));
            return (0, b.LJ)(e);
        }, [t]),
        a = i.useMemo(() => s.find((e) => e.value === (null == t ? void 0 : t.verificationLevel)), [t, s]);
    return (0, r.jsxs)('div', {
        className: N.setupContainer,
        children: [
            (0, r.jsxs)('div', {
                className: N.switchItemTextContent,
                children: [
                    (0, r.jsx)(c.Text, {
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: y.intl.string(y.t.DpRdYG)
                    }),
                    (0, r.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: y.intl.format(y.t.iuRk2t, {})
                    })
                ]
            }),
            (0, r.jsx)(O.Z, {
                changeTitle: y.intl.string(y.t.TxESJC),
                value: null == a ? void 0 : a.value,
                options: s,
                disabled: !n,
                onChange: l
            })
        ]
    });
}
function T(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        a = (0, o.e7)([p.Z], () => null != t && p.Z.can(C.Plq.MANAGE_GUILD, t), [t]),
        u = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await j.Z.saveGuild(t.id, { explicitContentFilter: n }), j.Z.updateGuild({ explicitContentFilter: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(y.intl.string(y.t['46Rs3t']), c.ToastType.FAILURE));
                }
            },
            [t.id]
        ),
        d = i.useMemo(() => {
            let e = (0, b.MF)(null == t ? void 0 : t.hasFeature(C.oNc.COMMUNITY)).map((e) => E(I({}, e), { tooltipPosition: 'left' }));
            return (0, b.LJ)(e);
        }, [t]),
        m = i.useMemo(() => d.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, d]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l && (0, r.jsx)(c.$i$, { className: N.divider }),
            (0, r.jsxs)('div', {
                className: s()(N.setupContainer, n),
                children: [
                    (0, r.jsxs)('div', {
                        className: N.switchItemTextContent,
                        children: [
                            (0, r.jsx)(c.Text, {
                                color: 'header-primary',
                                variant: 'text-md/semibold',
                                children: y.intl.string(y.t.Kd6OQU)
                            }),
                            (0, r.jsx)(c.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: y.intl.format(y.t.zOmxND, { helpdeskArticle: x.Z.getArticleURL(C.BhN.SAFE_DIRECT_MESSAGING) })
                            })
                        ]
                    }),
                    (0, r.jsx)(O.Z, {
                        changeTitle: y.intl.string(y.t['eBd+Ul']),
                        value: null == m ? void 0 : m.value,
                        options: d,
                        disabled: !a,
                        onChange: u
                    })
                ]
            })
        ]
    });
}
async function P(e, t) {
    if (e.hasFeature(C.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return t ? n.add(C.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : n.delete(C.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await j.Z.saveGuild(e.id, { features: n });
}
function w(e) {
    let { guild: t } = e,
        n = (0, o.e7)([p.Z], () => null != t && p.Z.can(C.Plq.MANAGE_GUILD, t), [t]),
        l = t.hasFeature(C.oNc.COMMUNITY),
        s = (0, g.n2)(t.id),
        [a, u] = i.useState(t.hasFeature(C.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        d = i.useCallback(
            async (e) => {
                u(e), await P(t, e);
            },
            [t]
        );
    return l || !s
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: N.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: a,
                              onChange: d,
                              className: N.switchItem,
                              disabled: !n,
                              hideBorder: !0,
                              children: (0, r.jsxs)('div', {
                                  className: N.switchItemTextContent,
                                  children: [
                                      (0, r.jsxs)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: [y.intl.string(y.t.jDarm5), (0, r.jsx)(m.Z, { className: N.betaTag })]
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: y.intl.string(y.t['/ee7yM'])
                                      })
                                  ]
                              })
                          }),
                          (0, r.jsx)(c.Wn, {
                              messageType: c.QYI.INFO,
                              textVariant: 'text-xs/normal',
                              children: y.intl.string(y.t.JxO639)
                          })
                      ]
                  }),
                  (0, r.jsx)(c.$i$, { className: N.divider })
              ]
          });
}
function R(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.e7)([p.Z], () => null != t && p.Z.can(C.Plq.MANAGE_GUILD, t), [t]),
        s = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        { isGuildOwnerWithMFA: d, showMFAUserTooltip: m } = i.useMemo(
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
        g = n === C.BpS.ELEVATED,
        f = (0, a.throttle)(async (e) => {
            d &&
                (m ||
                    (await j.Z.updateMFALevel({
                        guildId: t.id,
                        level: e ? C.BpS.ELEVATED : C.BpS.NONE,
                        isEnabled: !e
                    })));
        }, 1000);
    return l
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.$i$, { className: N.divider }),
                  (0, r.jsxs)('div', {
                      className: N.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: g,
                              onChange: f,
                              className: N.switchItem,
                              disabled: !d,
                              hideBorder: !0,
                              children: (0, r.jsxs)('div', {
                                  className: N.switchItemTextContent,
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          children: y.intl.string(y.t.lbBfER)
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: y.intl.string(y.t.REr5AA)
                                      })
                                  ]
                              })
                          }),
                          m &&
                              (0, r.jsx)(c.Wn, {
                                  messageType: c.QYI.INFO,
                                  textVariant: 'text-xs/normal',
                                  children: y.intl.format(y.t.Xz1O0d, {
                                      onClick: function () {
                                          u.Z.open(C.oAB.ACCOUNT);
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
    let { guild: e, mfaLevel: t } = (0, o.cj)([_.Z], () => _.Z.getProps(), []),
        n = (0, o.e7)([f.Z], () => f.Z.enabled, []);
    return null == e
        ? null
        : n
          ? (0, r.jsx)(d.Z, {})
          : (0, r.jsxs)(c.hjN, {
                title: y.intl.string(y.t['suhY+f']),
                tag: c.RB0.H1,
                titleClassName: N.headerContainer,
                children: [
                    (0, r.jsx)(w, { guild: e }),
                    (0, r.jsx)(S, { guild: e }),
                    (0, r.jsx)(R, {
                        guild: e,
                        mfaLevel: t
                    }),
                    (0, r.jsx)(T, { guild: e }),
                    (0, r.jsx)(c.$i$, { className: N.divider }),
                    (0, r.jsx)('div', {
                        className: N.setupContainer,
                        children: (0, r.jsx)(v.w, { guild: e })
                    })
                ]
            });
}
