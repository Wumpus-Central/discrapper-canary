t.d(n, {
    DT: () => ed,
    RI: () => d,
    gy: () => eo,
    _x: () => es,
    F1: () => c,
    Nk: () => $,
    Dq: () => o.D,
    oM: () => f,
    um: () => i.um,
    yf: () => ec,
    Hd: () => g.H,
});
var l = t(131904),
    i = t(41034),
    a = t(677166),
    r = t(804422),
    u = t(105292);
function s(e) {
    return "" !== e ? e : null;
}
function c(e) {
    return (0, a.fk)(e, "guild_settings") ? s(u.intl.string(r.default.tdhddn)) : null;
}
function d(e) {
    if (!(0, a.C)(e, "guild_settings")) return null;
    let n = s(u.intl.string(r.default.tdhddn)),
        t = s(u.intl.string(r.default.pOYEzT));
    return null != n && null != t ? { title: n, description: t } : null;
}
var o = t(667320),
    h = t(17928);
function f() {
    return (0, h.bG)([l.A], () => l.A.getOpenFeatureKey());
}
var g = t(888996),
    m = t(477900),
    E = t(582128),
    x = t(503698),
    A = t.n(x),
    _ = t(939249),
    S = t(661531),
    N = t(834730),
    p = t(658675),
    I = t(331322),
    j = t(408278),
    C = t(477155),
    y = t(297264),
    T = t(123292),
    b = t(683438),
    v = t(404778),
    F = t(975571),
    M = t(391523),
    O = t(210470),
    D = t(22464),
    P = t(713654);
function R(e) {
    let { channel: n, ...t } = e,
        l = (0, P.gU)(n);
    return null == l ? null : (0, m.jsx)(l, { ...t, "aria-hidden": !0 });
}
let L = { [D.y.CHANNEL_SUMMARIES]: r.default["+ELXr0"], [D.y.CHANNEL_MESSAGES]: r.default.HvBP0Z },
    U = { [D.y.CHANNEL_SUMMARIES]: r.default.uImIFo, [D.y.CHANNEL_MESSAGES]: r.default.nHVK4t };
var k = t(47167),
    B = t(734057),
    H = t(994500),
    w = t(287809),
    G = t(403362);
function V(e) {
    let n = (0, h.yK)([B.A], () => e.map((e) => B.A.getChannel(e)).filter(G.Vq), [e]),
        t = (0, h.yK)([w.default, H.A], () => n.map((e) => (0, k.m1)(e, w.default, H.A)), [n]);
    return E.useMemo(() => n.map((e, n) => ({ channel: e, name: t[n] })), [n, t]);
}
var z = t(652215),
    W = t(217494);
let K = { [D.y.CHANNEL_SUMMARIES]: r.default["vgmc/d"], [D.y.CHANNEL_MESSAGES]: r.default.MFxb27 };
function q(e) {
    let { channel: n, name: t, checked: l, disabled: i, onToggle: a } = e;
    return (0, m.jsxs)(_.D, {
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": i,
        className: A()(W.WG, { [W.GC]: i }),
        onClick: i ? void 0 : () => a(n.id, !l),
        children: [
            (0, m.jsx)(R, { channel: n, size: "xs", color: S.A.colors.ICON_SUBTLE }),
            (0, m.jsx)(N.E, {
                variant: "text-md/medium",
                color: "text-default",
                lineClamp: 1,
                className: W.HA,
                children: t,
            }),
            (0, m.jsx)(p.P, { checked: l, disabled: i }),
        ],
    });
}
function X() {
    (0, i.lF)(null);
}
function Z(e) {
    let { featureTitle: n } = e;
    return (0, m.jsxs)(I.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        children: [
            (0, m.jsx)(j.K, {
                icon: C.r,
                "aria-label": u.intl.string(u.t["13/7kX"]),
                variant: "icon-only",
                size: "sm",
                onClick: X,
            }),
            (0, m.jsx)("nav", {
                "aria-label": u.intl.string(u.t["bM+M/m"]),
                className: W.m7,
                children: (0, m.jsxs)(I.B, {
                    as: "ol",
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    role: "list",
                    className: W.jD,
                    children: [
                        (0, m.jsxs)(I.B, {
                            as: "li",
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            className: W.QF,
                            children: [
                                (0, m.jsx)(_.D, {
                                    onClick: X,
                                    className: W.WU,
                                    children: (0, m.jsx)(N.E, {
                                        variant: "text-md/normal",
                                        color: "none",
                                        lineClamp: 1,
                                        children: u.intl.string(r.default.tdhddn),
                                    }),
                                }),
                                (0, m.jsx)(N.E, {
                                    variant: "text-md/normal",
                                    color: "interactive-text-default",
                                    "aria-hidden": !0,
                                    children: "/",
                                }),
                            ],
                        }),
                        (0, m.jsx)("li", {
                            "aria-current": "page",
                            className: W.RF,
                            children: (0, m.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: n,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function Y(e) {
    let { featureKey: n, featureTitle: t } = e,
        l = E.useRef(null);
    return (
        E.useEffect(() => {
            let e = l.current;
            null != e && ((e.tabIndex = -1), e.focus());
        }, [l, n]),
        (0, m.jsxs)(I.B, {
            gap: 4,
            children: [
                (0, m.jsx)(y.D, { ref: l, variant: "heading-lg/medium", children: t }),
                (0, m.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: u.intl.format(U[n], { learnMoreURL: F.A.getArticleURL(z.MVz.SERVER_WEB_PAGES_ADMIN) }),
                }),
            ],
        })
    );
}
function Q(e) {
    let { guildId: n, featureKey: t, feature: l, draft: a, disabled: s } = e,
        [c, d] = E.useState(""),
        o = E.useId(),
        h = V(E.useMemo(() => (0, O.Dq)(l), [l])),
        f = a.includedChannelIds,
        g = h.map((e) => {
            let { channel: n } = e;
            return n.id;
        }),
        x = g.filter((e) => f.has(e)).length,
        A = g.length > 0 && x === g.length,
        _ = c.trim().toLocaleLowerCase(),
        S = h.filter((e) => {
            let { name: n } = e;
            return n.toLocaleLowerCase().includes(_);
        });
    function p(e, l) {
        let a = new Set(f);
        for (let n of e) l ? a.add(n) : a.delete(n);
        (0, i.lv)(n, t, { includedChannelIds: a });
    }
    return (0, m.jsxs)(I.B, {
        gap: 16,
        children: [
            (0, m.jsxs)(I.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, m.jsx)(N.E, {
                        id: o,
                        variant: "text-md/medium",
                        color: "text-default",
                        children: u.intl.string(K[t]),
                    }),
                    g.length > 0
                        ? (0, m.jsxs)(I.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, m.jsx)("span", {
                                      "aria-live": "polite",
                                      "aria-atomic": "true",
                                      children: (0, m.jsx)(N.E, {
                                          tag: "span",
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: u.intl.format(r.default.KaAdWl, { count: x }),
                                      }),
                                  }),
                                  (0, m.jsx)(N.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": "true",
                                      children: "\u2022",
                                  }),
                                  (0, m.jsx)(T.Q, {
                                      text: u.intl.string(A ? r.default.MECJZo : u.t.l4rqaz),
                                      textVariant: "text-sm/semibold",
                                      onClick: () => p(g, !A),
                                      disabled: s,
                                      "aria-describedby": o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            g.length > 0
                ? (0, m.jsxs)(I.B, {
                      gap: 8,
                      children: [
                          (0, m.jsx)(b.I, {
                              query: c,
                              onChange: d,
                              onClear: () => d(""),
                              placeholder: u.intl.string(u.t.wM7uRI),
                              "aria-label": u.intl.string(u.t.wM7uRI),
                          }),
                          (0, m.jsxs)("div", {
                              children: [
                                  S.length > 0
                                      ? (0, m.jsx)("div", {
                                            role: "group",
                                            "aria-labelledby": o,
                                            className: W.o5,
                                            children: S.map((e, n) => {
                                                let { channel: t, name: l } = e;
                                                return (0, m.jsxs)(
                                                    E.Fragment,
                                                    {
                                                        children: [
                                                            n > 0 ? (0, m.jsx)(v.c, {}) : null,
                                                            (0, m.jsx)(q, {
                                                                channel: t,
                                                                name: l,
                                                                checked: f.has(t.id),
                                                                disabled: s,
                                                                onToggle: (e, n) => p([e], n),
                                                            }),
                                                        ],
                                                    },
                                                    t.id,
                                                );
                                            }),
                                        })
                                      : null,
                                  (0, m.jsx)("div", {
                                      "aria-live": "polite",
                                      children:
                                          0 === S.length
                                              ? (0, m.jsx)(N.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: u.intl.string(u.t.f5cMAg),
                                                })
                                              : null,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function $(e) {
    let { guildId: n, featureKey: t, disabled: i } = e,
        {
            feature: a,
            draft: r,
            saving: s,
        } = (0, h.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
            saving: l.A.isSaving(),
        })),
        c = E.useRef(null);
    E.useEffect(() => {
        null != a && null != r && c.current !== t && ((c.current = t), (0, M.Dv)(n, "channel_list", t, a, r));
    }, [n, t, a, r]);
    let d = u.intl.string(L[t]);
    return (0, m.jsxs)(I.B, {
        gap: 48,
        children: [
            (0, m.jsx)(Z, { featureTitle: d }),
            (0, m.jsxs)(I.B, {
                gap: 24,
                children: [
                    (0, m.jsx)(Y, { featureKey: t, featureTitle: d }),
                    null != a && null != r
                        ? (0, m.jsx)(Q, { guildId: n, featureKey: t, feature: a, draft: r, disabled: i || s })
                        : null,
                ],
            }),
        ],
    });
}
var J = t(707554),
    ee = t(62010);
t(321073);
var en = t(3666),
    et = t(193249),
    el = t(881636),
    ei = t(405597);
let ea = [];
function er(e) {
    let { channels: n } = e,
        t = E.useMemo(() => {
            let e = n.slice(0, 3).map((e) => ({ ...e, key: e.channel.id }));
            return (n.length > 3 && e.push(u.intl.formatToPlainString(u.t.F6iMs4, { count: n.length - 3 })), e);
        }, [n]),
        l = n[0]?.channel.id,
        i = E.useCallback(
            (e) =>
                "string" == typeof e
                    ? (0, m.jsxs)(
                          N.E,
                          { variant: "text-sm/medium", color: "none", className: ei.dX, children: [", ", e] },
                          e,
                      )
                    : (0, m.jsxs)(
                          N.E,
                          {
                              variant: "text-sm/medium",
                              color: "none",
                              className: ei.ph,
                              children: [
                                  e.key !== l ? ", " : null,
                                  (0, m.jsx)(R, {
                                      channel: e.channel,
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                      color: "currentColor",
                                      className: ei.p,
                                  }),
                                  e.name,
                              ],
                          },
                          e.key,
                      ),
            [l],
        ),
        a = E.useCallback(
            (e) => i(u.intl.formatToPlainString(u.t.F6iMs4, { count: n.length - t.length + e.length })),
            [i, n.length, t.length],
        );
    return 0 === t.length
        ? (0, m.jsx)(N.E, { variant: "text-sm/medium", color: "none", children: u.intl.string(u.t.PoWNfe) })
        : (0, m.jsx)(en.ZV, { className: ei.yQ, items: t, renderItem: i, renderOverflow: a, maxLines: 1 });
}
function eu(e) {
    let { guildId: n, featureKey: t, disabled: a } = e,
        { feature: s, draft: c } = (0, h.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
        })),
        d = E.useRef(null);
    E.useEffect(() => {
        l.A.getFocusReturnFeatureKey() === t && d.current?.focus();
    }, [t]);
    let o = V(
        E.useMemo(
            () => (null != s && null != c ? (0, O.Dq)(s).filter((e) => c.includedChannelIds.has(e)) : ea),
            [s, c],
        ),
    );
    if (null == s || null == c) return null;
    let f = u.intl.string(L[t]),
        g = o.length;
    return (0, m.jsxs)(I.B, {
        gap: 12,
        children: [
            (0, m.jsxs)(I.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 24,
                children: [
                    (0, m.jsxs)(I.B, {
                        gap: 4,
                        className: ei.oo,
                        "data-disabled": a,
                        children: [
                            (0, m.jsx)(N.E, { variant: "text-md/medium", children: f }),
                            (0, m.jsx)(N.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.intl.format(U[t], {
                                    learnMoreURL: F.A.getArticleURL(z.MVz.SERVER_WEB_PAGES_ADMIN),
                                }),
                            }),
                        ],
                    }),
                    (0, m.jsx)(et.d, {
                        label: f,
                        hideLabel: !0,
                        checked: c.enabled,
                        disabled: a,
                        onChange: (e) => (0, i.lv)(n, t, { enabled: e }),
                    }),
                ],
            }),
            c.enabled
                ? (0, m.jsxs)(_.D, {
                      innerRef: d,
                      className: ei.ag,
                      "aria-label": u.intl.formatToPlainString(r.default["7iIGZ2"], { featureTitle: f, count: g }),
                      onClick: () => (0, i.lF)(t),
                      children: [
                          (0, m.jsx)(N.E, {
                              variant: "text-sm/medium",
                              color: "none",
                              className: ei.Ao,
                              children: u.intl.string(r.default["ZS+NM3"]),
                          }),
                          (0, m.jsxs)(I.B, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              gap: 12,
                              fullWidth: !1,
                              className: ei.$n,
                              children: [
                                  (0, m.jsx)(er, { channels: o }),
                                  (0, m.jsx)(el.u, { size: "refresh_sm", color: "currentColor" }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function es(e) {
    let { guildId: n, disabled: t } = e,
        s = (0, a.C)(n, "guild_settings"),
        { features: c, saving: d } = (0, h.cf)([l.A], () => ({ features: l.A.getFeatures(n), saving: l.A.isSaving() }));
    E.useEffect(() => {
        s && (0, i.FD)(n);
    }, [s, n]);
    let o = E.useRef(null);
    return (E.useEffect(() => {
        if (s && null != c && o.current !== n && ((o.current = n), null == l.A.getFocusReturnFeatureKey()))
            for (let e of D.P) (0, M.Dv)(n, "section", e, c[e], l.A.getDraft(n, e));
    }, [s, c, n]),
    s && null != c)
        ? (0, m.jsxs)(m.Fragment, {
              children: [
                  (0, m.jsx)(v.c, {}),
                  (0, m.jsxs)(I.B, {
                      gap: 32,
                      children: [
                          (0, m.jsxs)(I.B, {
                              gap: 4,
                              children: [
                                  (0, m.jsxs)(I.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, m.jsx)(J.F, {
                                              children: (0, m.jsx)(y.D, {
                                                  variant: "heading-md/medium",
                                                  children: u.intl.string(r.default.OLNu03),
                                              }),
                                          }),
                                          (0, m.jsx)(ee.E, { type: "new", variant: "primary" }),
                                      ],
                                  }),
                                  (0, m.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: u.intl.string(r.default.yTP3YK),
                                  }),
                              ],
                          }),
                          D.P.map((e) => (0, m.jsx)(eu, { guildId: n, featureKey: e, disabled: t || d }, e)),
                      ],
                  }),
              ],
          })
        : null;
}
function ec() {
    let { submitting: e, saveFailed: n } = (0, h.cf)([l.A], () => ({
        submitting: l.A.isSaving(),
        saveFailed: l.A.saveFailed(),
    }));
    return { submitting: e, errorMessage: n ? u.intl.string(u.t.MDtgYB) : void 0 };
}
let ed = [l.A];
function eo(e) {
    return l.A.hasChanges(e);
}
