n.d(t, {
    ZP: () => L,
    fp: () => D,
    k0: () => R,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(497321),
    u = n(688465),
    m = n(241559),
    g = n(313789),
    p = n(518596),
    f = n(601964),
    h = n(496675),
    x = n(246946),
    b = n(594174),
    j = n(63063),
    v = n(78451),
    _ = n(434404),
    O = n(999382),
    y = n(723136),
    C = n(532804),
    N = n(181339),
    E = n(981631),
    I = n(388032),
    S = n(776853);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
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
        n = (0, o.e7)([h.Z], () => null != t && h.Z.can(E.Plq.MANAGE_GUILD, t), [t]),
        l = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await _.Z.saveGuild(t.id, { verificationLevel: n }), _.Z.updateGuild({ verificationLevel: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(I.intl.string(I.t["46Rs3t"]), c.ToastType.FAILURE));
                }
            },
            [t],
        ),
        s = i.useMemo(() => {
            let e = (0, v.IF)(null == t ? void 0 : t.features.has(E.oNc.COMMUNITY)).map((e) =>
                P(T({}, e), { tooltipPosition: "left" }),
            );
            return (0, v.LJ)(e);
        }, [t]),
        a = i.useMemo(() => s.find((e) => e.value === (null == t ? void 0 : t.verificationLevel)), [t, s]);
    return (0, r.jsxs)("div", {
        className: S.setupContainer,
        children: [
            (0, r.jsxs)("div", {
                className: S.switchItemTextContent,
                children: [
                    (0, r.jsx)(c.Text, {
                        color: "header-primary",
                        variant: "text-md/semibold",
                        children: I.intl.string(I.t.DpRdYG),
                    }),
                    (0, r.jsx)(c.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: I.intl.format(I.t.iuRk2t, {}),
                    }),
                ],
            }),
            (0, r.jsx)(C.Z, {
                changeTitle: I.intl.string(I.t.TxESJC),
                value: null == a ? void 0 : a.value,
                options: s,
                disabled: !n,
                onChange: l,
            }),
        ],
    });
}
function R(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        a = (0, o.e7)([h.Z], () => null != t && h.Z.can(E.Plq.MANAGE_GUILD, t), [t]),
        d = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await _.Z.saveGuild(t.id, { explicitContentFilter: n }),
                        _.Z.updateGuild({ explicitContentFilter: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(I.intl.string(I.t["46Rs3t"]), c.ToastType.FAILURE));
                }
            },
            [t.id],
        ),
        u = i.useMemo(() => {
            let e = (0, v.MF)(null == t ? void 0 : t.features.has(E.oNc.COMMUNITY)).map((e) =>
                P(T({}, e), { tooltipPosition: "left" }),
            );
            return (0, v.LJ)(e);
        }, [t]),
        m = i.useMemo(() => u.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, u]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l && (0, r.jsx)(c.$i$, { className: S.divider }),
            (0, r.jsxs)("div", {
                className: s()(S.setupContainer, n),
                children: [
                    (0, r.jsxs)("div", {
                        className: S.switchItemTextContent,
                        children: [
                            (0, r.jsx)(c.Text, {
                                color: "header-primary",
                                variant: "text-md/semibold",
                                children: I.intl.string(I.t.bPgfJy),
                            }),
                            (0, r.jsx)(c.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: I.intl.format(I.t.BI4ukJ, {
                                    helpdeskArticle: j.Z.getArticleURL(E.BhN.SAFE_DIRECT_MESSAGING),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(C.Z, {
                        changeTitle: I.intl.string(I.t["eBd+Ul"]),
                        value: null == m ? void 0 : m.value,
                        options: u,
                        disabled: !a,
                        onChange: d,
                    }),
                ],
            }),
        ],
    });
}
async function D(e, t) {
    if (e.features.has(E.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return (
        t
            ? n.add(E.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            : n.delete(E.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        await _.Z.saveGuild(e.id, { features: n })
    );
}
function Z(e) {
    let { guild: t } = e,
        n = (0, o.e7)([h.Z], () => null != t && h.Z.can(E.Plq.MANAGE_GUILD, t), [t]),
        l = t.features.has(E.oNc.COMMUNITY),
        s = (0, m.n2)(t.id),
        [a, d] = i.useState(t.features.has(E.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        g = i.useCallback(
            async (e) => {
                d(e), await D(t, e);
            },
            [t],
        );
    return l || !s
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: S.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: a,
                              onChange: g,
                              className: S.switchItem,
                              disabled: !n,
                              hideBorder: !0,
                              children: (0, r.jsxs)("div", {
                                  className: S.switchItemTextContent,
                                  children: [
                                      (0, r.jsxs)(c.Text, {
                                          color: "header-primary",
                                          variant: "text-md/semibold",
                                          children: [
                                              I.intl.string(I.t.jDarm5),
                                              (0, r.jsx)(u.Z, { className: S.betaTag }),
                                          ],
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          color: "header-secondary",
                                          variant: "text-sm/normal",
                                          children: I.intl.string(I.t["/ee7yM"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, r.jsx)(c.Wn, {
                              messageType: c.QYI.INFO,
                              textVariant: "text-xs/normal",
                              children: I.intl.string(I.t.JxO639),
                          }),
                      ],
                  }),
                  (0, r.jsx)(c.$i$, { className: S.divider }),
              ],
          });
}
function A(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.e7)([h.Z], () => null != t && h.Z.can(E.Plq.MANAGE_GUILD, t), [t]),
        s = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        { isGuildOwnerWithMFA: d, showMFAUserTooltip: u } = i.useMemo(
            () =>
                null == s
                    ? {
                          canChangeMFALevel: !1,
                          showMFAUserTooltip: !1,
                      }
                    : {
                          isGuildOwnerWithMFA: (0, f.yn)(t, s),
                          showMFAUserTooltip: !s.mfaEnabled && (0, f.eM)(t, s),
                      },
            [s, t],
        ),
        m = n === E.BpS.ELEVATED,
        x = (0, a.throttle)(async (e) => {
            d &&
                (u ||
                    (await _.Z.updateMFALevel({
                        guildId: t.id,
                        level: e ? E.BpS.ELEVATED : E.BpS.NONE,
                        isEnabled: !e,
                    })));
        }, 1000);
    return l
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.$i$, { className: S.divider }),
                  (0, r.jsxs)("div", {
                      className: S.setupContainer,
                      children: [
                          (0, r.jsx)(c.j7V, {
                              value: m,
                              onChange: x,
                              className: S.switchItem,
                              disabled: !d,
                              hideBorder: !0,
                              children: (0, r.jsxs)("div", {
                                  className: S.switchItemTextContent,
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          color: "header-primary",
                                          variant: "text-md/semibold",
                                          children: I.intl.string(I.t.lbBfER),
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          color: "header-secondary",
                                          variant: "text-sm/normal",
                                          children: I.intl.string(I.t.REr5AA),
                                      }),
                                  ],
                              }),
                          }),
                          u &&
                              (0, r.jsx)(c.Wn, {
                                  messageType: c.QYI.INFO,
                                  textVariant: "text-xs/normal",
                                  children: I.intl.format(I.t.Xz1O0d, {
                                      onClick: function () {
                                          (0, p.openUserSettings)(g.n.ACCOUNT_PANEL, { section: E.oAB.ACCOUNT });
                                      },
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
function L() {
    let { guild: e, mfaLevel: t } = (0, o.cj)([O.Z], () => O.Z.getProps(), []),
        n = (0, o.e7)([x.Z], () => x.Z.enabled, []);
    return null == e
        ? null
        : n
          ? (0, r.jsx)(d.Z, {})
          : (0, r.jsxs)(c.hjN, {
                title: I.intl.string(I.t["suhY+f"]),
                tag: c.RB0.H1,
                titleClassName: S.headerContainer,
                children: [
                    (0, r.jsx)(y.z, { guild: e }),
                    (0, r.jsx)(Z, { guild: e }),
                    (0, r.jsx)(w, { guild: e }),
                    (0, r.jsx)(A, {
                        guild: e,
                        mfaLevel: t,
                    }),
                    (0, r.jsx)(R, { guild: e }),
                    (0, r.jsx)(c.$i$, { className: S.divider }),
                    (0, r.jsx)("div", {
                        className: S.setupContainer,
                        children: (0, r.jsx)(N.w, { guild: e }),
                    }),
                ],
            });
}
