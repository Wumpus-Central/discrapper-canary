t.d(n, {
    yw: () => m.y,
    yf: () => eo,
    DT: () => eh,
    RI: () => d,
    gy: () => ef,
    _x: () => ed,
    F1: () => c,
    Nk: () => ee,
    Dq: () => o.D,
    oM: () => g,
    um: () => i.um,
    ZF: () => h.Z,
    Hd: () => E.H,
});
var l = t(131904),
    i = t(41034),
    a = t(677166),
    r = t(573436),
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
    h = t(22680),
    f = t(17928);
function g() {
    return (0, f.bG)([l.A], () => l.A.getOpenFeatureKey());
}
var E = t(888996),
    m = t(506777),
    A = t(477900),
    _ = t(582128),
    S = t(503698),
    x = t.n(S),
    N = t(939249),
    I = t(661531),
    p = t(834730),
    C = t(658675),
    j = t(331322),
    y = t(408278),
    b = t(477155),
    T = t(297264),
    v = t(123292),
    D = t(683438),
    M = t(404778),
    F = t(975571),
    L = t(391523),
    P = t(210470),
    O = t(22464),
    R = t(713654);
function U(e) {
    let { channel: n, ...t } = e,
        l = (0, R.gU)(n);
    return null == l ? null : (0, A.jsx)(l, { ...t, "aria-hidden": !0 });
}
let B = { [O.y.CHANNEL_SUMMARIES]: r.default["+ELXr0"], [O.y.CHANNEL_MESSAGES]: r.default.HvBP0Z },
    H = { [O.y.CHANNEL_SUMMARIES]: r.default.uImIFo, [O.y.CHANNEL_MESSAGES]: r.default.nHVK4t };
var k = t(47167),
    w = t(734057),
    G = t(994500),
    W = t(287809),
    z = t(403362);
function V(e) {
    let n = (0, f.yK)([w.A], () => e.map((e) => w.A.getChannel(e)).filter(z.Vq), [e]),
        t = (0, f.yK)([W.default, G.A], () => n.map((e) => (0, k.m1)(e, W.default, G.A)), [n]);
    return _.useMemo(() => n.map((e, n) => ({ channel: e, name: t[n] })), [n, t]);
}
var K = t(652215),
    q = t(217494);
let X = { [O.y.CHANNEL_SUMMARIES]: r.default["vgmc/d"], [O.y.CHANNEL_MESSAGES]: r.default.MFxb27 };
function Z(e) {
    let { channel: n, name: t, checked: l, disabled: i, onToggle: a } = e;
    return (0, A.jsxs)(N.D, {
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": i,
        className: x()(q.WG, { [q.GC]: i }),
        onClick: i ? void 0 : () => a(n.id, !l),
        children: [
            (0, A.jsx)(U, { channel: n, size: "xs", color: I.A.colors.ICON_SUBTLE }),
            (0, A.jsx)(p.E, {
                variant: "text-md/medium",
                color: "text-default",
                lineClamp: 1,
                className: q.HA,
                children: t,
            }),
            (0, A.jsx)(C.P, { checked: l, disabled: i }),
        ],
    });
}
function Y() {
    (0, i.lF)(null);
}
function Q(e) {
    let { featureTitle: n } = e;
    return (0, A.jsxs)(j.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        children: [
            (0, A.jsx)(y.K, {
                icon: b.r,
                "aria-label": u.intl.string(u.t["13/7kX"]),
                variant: "icon-only",
                size: "sm",
                onClick: Y,
            }),
            (0, A.jsx)("nav", {
                "aria-label": u.intl.string(u.t["bM+M/m"]),
                className: q.m7,
                children: (0, A.jsxs)(j.B, {
                    as: "ol",
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    role: "list",
                    className: q.jD,
                    children: [
                        (0, A.jsxs)(j.B, {
                            as: "li",
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            className: q.QF,
                            children: [
                                (0, A.jsx)(N.D, {
                                    onClick: Y,
                                    className: q.WU,
                                    children: (0, A.jsx)(p.E, {
                                        variant: "text-md/normal",
                                        color: "none",
                                        lineClamp: 1,
                                        children: u.intl.string(r.default.tdhddn),
                                    }),
                                }),
                                (0, A.jsx)(p.E, {
                                    variant: "text-md/normal",
                                    color: "interactive-text-default",
                                    "aria-hidden": !0,
                                    children: "/",
                                }),
                            ],
                        }),
                        (0, A.jsx)("li", {
                            "aria-current": "page",
                            className: q.RF,
                            children: (0, A.jsx)(p.E, {
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
function $(e) {
    let { featureKey: n, featureTitle: t } = e,
        l = _.useRef(null);
    return (
        _.useEffect(() => {
            let e = l.current;
            null != e && ((e.tabIndex = -1), e.focus());
        }, [l, n]),
        (0, A.jsxs)(j.B, {
            gap: 4,
            children: [
                (0, A.jsx)(T.D, { ref: l, variant: "heading-lg/medium", children: t }),
                (0, A.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: u.intl.format(H[n], { learnMoreURL: F.A.getArticleURL(K.MVz.SERVER_WEB_PAGES_ADMIN) }),
                }),
            ],
        })
    );
}
function J(e) {
    let { guildId: n, featureKey: t, feature: l, draft: a, disabled: s } = e,
        [c, d] = _.useState(""),
        o = _.useId(),
        h = V(_.useMemo(() => (0, P.Dq)(l), [l])),
        f = a.includedChannelIds,
        g = h.map((e) => {
            let { channel: n } = e;
            return n.id;
        }),
        E = g.filter((e) => f.has(e)).length,
        m = g.length > 0 && E === g.length,
        S = c.trim().toLocaleLowerCase(),
        x = h.filter((e) => {
            let { name: n } = e;
            return n.toLocaleLowerCase().includes(S);
        });
    function N(e, l) {
        let a = new Set(f);
        for (let n of e) l ? a.add(n) : a.delete(n);
        (0, i.lv)(n, t, { includedChannelIds: a });
    }
    return (0, A.jsxs)(j.B, {
        gap: 16,
        children: [
            (0, A.jsxs)(j.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, A.jsx)(p.E, {
                        id: o,
                        variant: "text-md/medium",
                        color: "text-default",
                        children: u.intl.string(X[t]),
                    }),
                    g.length > 0
                        ? (0, A.jsxs)(j.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, A.jsx)("span", {
                                      "aria-live": "polite",
                                      "aria-atomic": "true",
                                      children: (0, A.jsx)(p.E, {
                                          tag: "span",
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: u.intl.format(r.default.KaAdWl, { count: E }),
                                      }),
                                  }),
                                  (0, A.jsx)(p.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": "true",
                                      children: "\u2022",
                                  }),
                                  (0, A.jsx)(v.Q, {
                                      text: u.intl.string(m ? r.default.MECJZo : u.t.l4rqaz),
                                      textVariant: "text-sm/semibold",
                                      onClick: () => N(g, !m),
                                      disabled: s,
                                      "aria-describedby": o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            g.length > 0
                ? (0, A.jsxs)(j.B, {
                      gap: 8,
                      children: [
                          (0, A.jsx)(D.I, {
                              query: c,
                              onChange: d,
                              onClear: () => d(""),
                              placeholder: u.intl.string(u.t.wM7uRI),
                              "aria-label": u.intl.string(u.t.wM7uRI),
                          }),
                          (0, A.jsxs)("div", {
                              children: [
                                  x.length > 0
                                      ? (0, A.jsx)("div", {
                                            role: "group",
                                            "aria-labelledby": o,
                                            className: q.o5,
                                            children: x.map((e, n) => {
                                                let { channel: t, name: l } = e;
                                                return (0, A.jsxs)(
                                                    _.Fragment,
                                                    {
                                                        children: [
                                                            n > 0 ? (0, A.jsx)(M.c, {}) : null,
                                                            (0, A.jsx)(Z, {
                                                                channel: t,
                                                                name: l,
                                                                checked: f.has(t.id),
                                                                disabled: s,
                                                                onToggle: (e, n) => N([e], n),
                                                            }),
                                                        ],
                                                    },
                                                    t.id,
                                                );
                                            }),
                                        })
                                      : null,
                                  (0, A.jsx)("div", {
                                      "aria-live": "polite",
                                      children:
                                          0 === x.length
                                              ? (0, A.jsx)(p.E, {
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
function ee(e) {
    let { guildId: n, featureKey: t, disabled: i } = e,
        {
            feature: a,
            draft: r,
            saving: s,
        } = (0, f.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
            saving: l.A.isSaving(),
        })),
        c = _.useRef(null);
    _.useEffect(() => {
        null != a && null != r && c.current !== t && ((c.current = t), (0, L.Dv)(n, "channel_list", t, a, r));
    }, [n, t, a, r]);
    let d = u.intl.string(B[t]);
    return (0, A.jsxs)(j.B, {
        gap: 48,
        children: [
            (0, A.jsx)(Q, { featureTitle: d }),
            (0, A.jsxs)(j.B, {
                gap: 24,
                children: [
                    (0, A.jsx)($, { featureKey: t, featureTitle: d }),
                    null != a && null != r
                        ? (0, A.jsx)(J, { guildId: n, featureKey: t, feature: a, draft: r, disabled: i || s })
                        : null,
                ],
            }),
        ],
    });
}
var en = t(707554),
    et = t(62010);
t(321073);
var el = t(3666),
    ei = t(193249),
    ea = t(881636),
    er = t(405597);
let eu = [];
function es(e) {
    let { channels: n } = e,
        t = _.useMemo(() => {
            let e = n.slice(0, 3).map((e) => ({ ...e, key: e.channel.id }));
            return (n.length > 3 && e.push(u.intl.formatToPlainString(u.t.F6iMs4, { count: n.length - 3 })), e);
        }, [n]),
        l = n[0]?.channel.id,
        i = _.useCallback(
            (e) =>
                "string" == typeof e
                    ? (0, A.jsxs)(
                          p.E,
                          { variant: "text-sm/medium", color: "none", className: er.dX, children: [", ", e] },
                          e,
                      )
                    : (0, A.jsxs)(
                          p.E,
                          {
                              variant: "text-sm/medium",
                              color: "none",
                              className: er.ph,
                              children: [
                                  e.key !== l ? ", " : null,
                                  (0, A.jsx)(U, {
                                      channel: e.channel,
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                      color: "currentColor",
                                      className: er.p,
                                  }),
                                  e.name,
                              ],
                          },
                          e.key,
                      ),
            [l],
        ),
        a = _.useCallback(
            (e) => i(u.intl.formatToPlainString(u.t.F6iMs4, { count: n.length - t.length + e.length })),
            [i, n.length, t.length],
        );
    return 0 === t.length
        ? (0, A.jsx)(p.E, { variant: "text-sm/medium", color: "none", children: u.intl.string(u.t.PoWNfe) })
        : (0, A.jsx)(el.ZV, { className: er.yQ, items: t, renderItem: i, renderOverflow: a, maxLines: 1 });
}
function ec(e) {
    let { guildId: n, featureKey: t, disabled: a } = e,
        { feature: s, draft: c } = (0, f.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
        })),
        d = _.useRef(null);
    _.useEffect(() => {
        l.A.getFocusReturnFeatureKey() === t && d.current?.focus();
    }, [t]);
    let o = V(
        _.useMemo(
            () => (null != s && null != c ? (0, P.Dq)(s).filter((e) => c.includedChannelIds.has(e)) : eu),
            [s, c],
        ),
    );
    if (null == s || null == c) return null;
    let h = u.intl.string(B[t]),
        g = o.length;
    return (0, A.jsxs)(j.B, {
        gap: 12,
        children: [
            (0, A.jsxs)(j.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 24,
                children: [
                    (0, A.jsxs)(j.B, {
                        gap: 4,
                        className: er.oo,
                        "data-disabled": a,
                        children: [
                            (0, A.jsx)(p.E, { variant: "text-md/medium", children: h }),
                            (0, A.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.intl.format(H[t], {
                                    learnMoreURL: F.A.getArticleURL(K.MVz.SERVER_WEB_PAGES_ADMIN),
                                }),
                            }),
                        ],
                    }),
                    (0, A.jsx)(ei.d, {
                        label: h,
                        hideLabel: !0,
                        checked: c.enabled,
                        disabled: a,
                        onChange: (e) => (0, i.lv)(n, t, { enabled: e }),
                    }),
                ],
            }),
            c.enabled
                ? (0, A.jsxs)(N.D, {
                      innerRef: d,
                      className: er.ag,
                      "aria-label": u.intl.formatToPlainString(r.default["7iIGZ2"], { featureTitle: h, count: g }),
                      onClick: () => (0, i.lF)(t),
                      children: [
                          (0, A.jsx)(p.E, {
                              variant: "text-sm/medium",
                              color: "none",
                              className: er.Ao,
                              children: u.intl.string(r.default["ZS+NM3"]),
                          }),
                          (0, A.jsxs)(j.B, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              gap: 12,
                              fullWidth: !1,
                              className: er.$n,
                              children: [
                                  (0, A.jsx)(es, { channels: o }),
                                  (0, A.jsx)(ea.u, { size: "refresh_sm", color: "currentColor" }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ed(e) {
    let { guildId: n, disabled: t } = e,
        s = (0, a.C)(n, "guild_settings"),
        { features: c, saving: d } = (0, f.cf)([l.A], () => ({ features: l.A.getFeatures(n), saving: l.A.isSaving() }));
    _.useEffect(() => {
        s && (0, i.FD)(n);
    }, [s, n]);
    let o = _.useRef(null);
    return (_.useEffect(() => {
        if (s && null != c && o.current !== n && ((o.current = n), null == l.A.getFocusReturnFeatureKey()))
            for (let e of O.P) (0, L.Dv)(n, "section", e, c[e], l.A.getDraft(n, e));
    }, [s, c, n]),
    s && null != c)
        ? (0, A.jsxs)(A.Fragment, {
              children: [
                  (0, A.jsx)(M.c, {}),
                  (0, A.jsxs)(j.B, {
                      gap: 32,
                      children: [
                          (0, A.jsxs)(j.B, {
                              gap: 4,
                              children: [
                                  (0, A.jsxs)(j.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, A.jsx)(en.F, {
                                              children: (0, A.jsx)(T.D, {
                                                  variant: "heading-md/medium",
                                                  children: u.intl.string(r.default.OLNu03),
                                              }),
                                          }),
                                          (0, A.jsx)(et.E, { type: "new", variant: "primary" }),
                                      ],
                                  }),
                                  (0, A.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: u.intl.string(r.default.yTP3YK),
                                  }),
                              ],
                          }),
                          O.P.map((e) => (0, A.jsx)(ec, { guildId: n, featureKey: e, disabled: t || d }, e)),
                      ],
                  }),
              ],
          })
        : null;
}
function eo() {
    let { submitting: e, saveFailed: n } = (0, f.cf)([l.A], () => ({
        submitting: l.A.isSaving(),
        saveFailed: l.A.saveFailed(),
    }));
    return { submitting: e, errorMessage: n ? u.intl.string(u.t.MDtgYB) : void 0 };
}
let eh = [l.A];
function ef(e) {
    return l.A.hasChanges(e);
}
