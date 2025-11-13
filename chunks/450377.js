n.d(t, {
    ZP: () => A,
    fp: () => Z,
    k0: () => w,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(497321),
    u = n(241559),
    g = n(313789),
    m = n(518596),
    p = n(601964),
    f = n(496675),
    h = n(246946),
    b = n(594174),
    x = n(63063),
    j = n(78451),
    _ = n(434404),
    v = n(999382),
    O = n(723136),
    C = n(532804),
    y = n(181339),
    N = n(981631),
    E = n(388032),
    I = n(776853);
function S(e) {
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
        n = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]),
        l = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await _.Z.saveGuild(t.id, { verificationLevel: n }), _.Z.updateGuild({ verificationLevel: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE));
                }
            },
            [t],
        ),
        a = i.useMemo(() => {
            let e = (0, j.IF)(null == t ? void 0 : t.features.has(N.GuildFeatures.COMMUNITY)).map((e) =>
                T(S({}, e), { tooltipPosition: "left" }),
            );
            return (0, j.LJ)(e);
        }, [t]),
        s = i.useMemo(() => a.find((e) => e.value === (null == t ? void 0 : t.verificationLevel)), [t, a]);
    return (0, r.jsxs)("div", {
        className: I.setupContainer,
        children: [
            (0, r.jsxs)("div", {
                className: I.switchItemTextContent,
                children: [
                    (0, r.jsx)(c.Text, {
                        color: "header-primary",
                        variant: "text-md/semibold",
                        children: E.intl.string(E.t.DpRdYK),
                    }),
                    (0, r.jsx)(c.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: E.intl.format(E.t.iuRk2j, {}),
                    }),
                ],
            }),
            (0, r.jsx)(C.Z, {
                changeTitle: E.intl.string(E.t.TxESJG),
                value: null == s ? void 0 : s.value,
                options: a,
                disabled: !n,
                onChange: l,
            }),
        ],
    });
}
function w(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        s = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]),
        d = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await _.Z.saveGuild(t.id, { explicitContentFilter: n }),
                        _.Z.updateGuild({ explicitContentFilter: n });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE));
                }
            },
            [t.id],
        ),
        u = i.useMemo(() => {
            let e = (0, j.MF)(null == t ? void 0 : t.features.has(N.GuildFeatures.COMMUNITY)).map((e) =>
                T(S({}, e), { tooltipPosition: "left" }),
            );
            return (0, j.LJ)(e);
        }, [t]),
        g = i.useMemo(() => u.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, u]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l && (0, r.jsx)(c.izJ, { className: I.divider }),
            (0, r.jsxs)("div", {
                className: a()(I.setupContainer, n),
                children: [
                    (0, r.jsxs)("div", {
                        className: I.switchItemTextContent,
                        children: [
                            (0, r.jsx)(c.Text, {
                                color: "header-primary",
                                variant: "text-md/semibold",
                                children: E.intl.string(E.t.bPgfJz),
                            }),
                            (0, r.jsx)(c.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: E.intl.format(E.t.BI4ukC, {
                                    helpdeskArticle: x.Z.getArticleURL(N.BhN.SAFE_DIRECT_MESSAGING),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(C.Z, {
                        changeTitle: E.intl.string(E.t["eBd+Uv"]),
                        value: null == g ? void 0 : g.value,
                        options: u,
                        disabled: !s,
                        onChange: d,
                    }),
                ],
            }),
        ],
    });
}
async function Z(e, t) {
    if (e.features.has(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return (
        t
            ? n.add(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            : n.delete(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        await _.Z.saveGuild(e.id, { features: n })
    );
}
function R(e) {
    let { guild: t } = e,
        n = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]),
        l = t.features.has(N.GuildFeatures.COMMUNITY),
        a = (0, u.n2)(t.id),
        [s, d] = i.useState(t.features.has(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        g = i.useCallback(
            async (e) => {
                d(e), await Z(t, e);
            },
            [t],
        );
    return l || !a
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: I.setupContainer,
                      children: [
                          (0, r.jsx)(c.rsf, {
                              label: E.intl.string(E.t.jDarmy),
                              description: E.intl.string(E.t["/ee7yK"]),
                              badge: "beta",
                              checked: s,
                              onChange: g,
                              disabled: !n,
                          }),
                          (0, r.jsx)(c.Wn, {
                              messageType: c.QYI.INFO,
                              textVariant: "text-xs/normal",
                              children: E.intl.string(E.t.JxO63z),
                          }),
                      ],
                  }),
                  (0, r.jsx)(c.izJ, { className: I.divider }),
              ],
          });
}
function D(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.e7)([f.Z], () => null != t && f.Z.can(N.Plq.MANAGE_GUILD, t), [t]),
        a = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        { isGuildOwnerWithMFA: d, showMFAUserTooltip: u } = i.useMemo(
            () =>
                null == a
                    ? {
                          canChangeMFALevel: !1,
                          showMFAUserTooltip: !1,
                      }
                    : {
                          isGuildOwnerWithMFA: (0, p.yn)(t, a),
                          showMFAUserTooltip: !a.mfaEnabled && (0, p.eM)(t, a),
                      },
            [a, t],
        ),
        h = n === N.BpS.ELEVATED,
        x = (0, s.throttle)(async (e) => {
            d &&
                (u ||
                    (await _.Z.updateMFALevel({
                        guildId: t.id,
                        level: e ? N.BpS.ELEVATED : N.BpS.NONE,
                        isEnabled: !e,
                    })));
        }, 1000);
    return l
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.izJ, { className: I.divider }),
                  (0, r.jsxs)("div", {
                      className: I.setupContainer,
                      children: [
                          (0, r.jsx)(c.rsf, {
                              label: E.intl.string(E.t.lbBfEQ),
                              description: E.intl.string(E.t.REr5AI),
                              checked: h,
                              onChange: x,
                              disabled: !d,
                          }),
                          u &&
                              (0, r.jsx)(c.Wn, {
                                  messageType: c.QYI.INFO,
                                  textVariant: "text-xs/normal",
                                  children: E.intl.format(E.t.Xz1O0W, {
                                      onClick: function () {
                                          (0, m.openUserSettings)(g.n.ACCOUNT_PANEL, { section: N.oAB.ACCOUNT });
                                      },
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
function A() {
    let { guild: e, mfaLevel: t } = (0, o.cj)([v.Z], () => v.Z.getProps(), []),
        n = (0, o.e7)([h.Z], () => h.Z.enabled, []);
    return null == e
        ? null
        : n
          ? (0, r.jsx)(d.Z, {})
          : (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(c.Heading, {
                        className: I.headerContainer,
                        variant: "heading-lg/semibold",
                        children: E.intl.string(E.t["suhY+Y"]),
                    }),
                    (0, r.jsx)(O.z, { guild: e }),
                    (0, r.jsx)(R, { guild: e }),
                    (0, r.jsx)(P, { guild: e }),
                    (0, r.jsx)(D, {
                        guild: e,
                        mfaLevel: t,
                    }),
                    (0, r.jsx)(w, { guild: e }),
                    (0, r.jsx)(c.izJ, { className: I.divider }),
                    (0, r.jsx)("div", {
                        className: I.setupContainer,
                        children: (0, r.jsx)(y.w, { guild: e }),
                    }),
                ],
            });
}
