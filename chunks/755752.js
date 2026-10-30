t.d(n, {
    F1: () => c,
    ZF: () => h.Z,
    yf: () => eT,
    Hd: () => j.H,
    KT: () => eg,
    DT: () => ej,
    RI: () => d,
    gy: () => ey,
    _x: () => eI,
    Nk: () => ed,
    Dq: () => o.D,
    oM: () => T,
    GH: () => I,
    um: () => i.um,
    yw: () => y.y,
});
var l = t(131904),
    i = t(41034),
    a = t(677166),
    r = t(502209),
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
    h = t(96787),
    f = t(582128),
    g = t(17928),
    E = t(73153);
let A = new Set();
class m extends g.Ay.PersistedStore {
    static displayName = "PinotMemberNoticeAckStore";
    static persistKey = "PinotMemberNoticeAckStore";
    initialize(e) {
        A = new Set(e?.ackedChannelIds ?? []);
    }
    getState() {
        return { ackedChannelIds: Array.from(A) };
    }
    isHidden(e) {
        return A.has(e) || A.size >= 2;
    }
}
let _ = new m(E.h, {
    PINOT_MEMBER_NOTICE_ACK: function (e) {
        let { channelId: n } = e;
        if (A.has(n)) return !1;
        A = new Set([...A, n]);
    },
});
var x = t(542744),
    N = t(84877),
    S = t(885902),
    p = t(397306);
let C = { visible: !1 };
function I(e, n) {
    let t = (0, S.F)(e, n),
        l = (0, a.Hg)(null != t ? e?.guild_id : null, n),
        i = (0, N.Z)(e),
        r = (0, p.m)(e, n),
        u = l && i && !r ? t : null,
        s = (0, g.bG)([_], () => null != u && _.isHidden(u), [u]),
        c = f.useCallback(() => {
            null != u && (0, x.G)(u);
        }, [u]);
    return f.useMemo(() => (null == u || s ? C : { visible: !0, dismiss: c }), [u, s, c]);
}
function T() {
    return (0, g.bG)([l.A], () => l.A.getOpenFeatureKey());
}
var j = t(888996),
    y = t(390495),
    b = t(477900),
    v = t(503698),
    M = t.n(v),
    O = t(939249),
    R = t(661531),
    F = t(834730),
    P = t(658675),
    D = t(331322),
    L = t(408278),
    k = t(477155),
    B = t(297264),
    H = t(123292),
    G = t(683438),
    U = t(404778),
    w = t(975571),
    K = t(391523),
    z = t(210470),
    V = t(22464),
    W = t(713654);
function Z(e) {
    let { channel: n, ...t } = e,
        l = (0, W.gU)(n);
    return null == l ? null : (0, b.jsx)(l, { ...t, "aria-hidden": !0 });
}
let q = { [V.y.CHANNEL_SUMMARIES]: r.default["+ELXr0"], [V.y.CHANNEL_MESSAGES]: r.default.HvBP0Z },
    X = { [V.y.CHANNEL_SUMMARIES]: r.default.uImIFo, [V.y.CHANNEL_MESSAGES]: r.default.nHVK4t };
var Y = t(47167),
    Q = t(734057),
    $ = t(994500),
    J = t(287809),
    ee = t(403362);
function en(e) {
    let n = (0, g.yK)([Q.A], () => e.map((e) => Q.A.getChannel(e)).filter(ee.Vq), [e]),
        t = (0, g.yK)([J.default, $.A], () => n.map((e) => (0, Y.m1)(e, J.default, $.A)), [n]);
    return f.useMemo(() => n.map((e, n) => ({ channel: e, name: t[n] })), [n, t]);
}
var et = t(652215),
    el = t(217494);
let ei = { [V.y.CHANNEL_SUMMARIES]: r.default["vgmc/d"], [V.y.CHANNEL_MESSAGES]: r.default.MFxb27 };
function ea(e) {
    let { channel: n, name: t, checked: l, disabled: i, onToggle: a } = e;
    return (0, b.jsxs)(O.D, {
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": i,
        className: M()(el.WG, { [el.GC]: i }),
        onClick: i ? void 0 : () => a(n.id, !l),
        children: [
            (0, b.jsx)(Z, { channel: n, size: "xs", color: R.A.colors.ICON_SUBTLE }),
            (0, b.jsx)(F.E, {
                variant: "text-md/medium",
                color: "text-default",
                lineClamp: 1,
                className: el.HA,
                children: t,
            }),
            (0, b.jsx)(P.P, { checked: l, disabled: i }),
        ],
    });
}
function er() {
    (0, i.lF)(null);
}
function eu(e) {
    let { featureTitle: n } = e;
    return (0, b.jsxs)(D.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        children: [
            (0, b.jsx)(L.K, {
                icon: k.r,
                "aria-label": u.intl.string(u.t["13/7kX"]),
                variant: "icon-only",
                size: "sm",
                onClick: er,
            }),
            (0, b.jsx)("nav", {
                "aria-label": u.intl.string(u.t["bM+M/m"]),
                className: el.m7,
                children: (0, b.jsxs)(D.B, {
                    as: "ol",
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    role: "list",
                    className: el.jD,
                    children: [
                        (0, b.jsxs)(D.B, {
                            as: "li",
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            className: el.QF,
                            children: [
                                (0, b.jsx)(O.D, {
                                    onClick: er,
                                    className: el.WU,
                                    children: (0, b.jsx)(F.E, {
                                        variant: "text-md/normal",
                                        color: "none",
                                        lineClamp: 1,
                                        children: u.intl.string(r.default.tdhddn),
                                    }),
                                }),
                                (0, b.jsx)(F.E, {
                                    variant: "text-md/normal",
                                    color: "interactive-text-default",
                                    "aria-hidden": !0,
                                    children: "/",
                                }),
                            ],
                        }),
                        (0, b.jsx)("li", {
                            "aria-current": "page",
                            className: el.RF,
                            children: (0, b.jsx)(F.E, {
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
function es(e) {
    let { featureKey: n, featureTitle: t } = e,
        l = f.useRef(null);
    return (
        f.useEffect(() => {
            let e = l.current;
            null != e && ((e.tabIndex = -1), e.focus());
        }, [l, n]),
        (0, b.jsxs)(D.B, {
            gap: 4,
            children: [
                (0, b.jsx)(B.D, { ref: l, variant: "heading-lg/medium", children: t }),
                (0, b.jsx)(F.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: u.intl.format(X[n], { learnMoreURL: w.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN) }),
                }),
            ],
        })
    );
}
function ec(e) {
    let { guildId: n, featureKey: t, feature: l, draft: a, disabled: s } = e,
        [c, d] = f.useState(""),
        o = f.useId(),
        h = en(f.useMemo(() => (0, z.Dq)(l), [l])),
        g = a.includedChannelIds,
        E = h.map((e) => {
            let { channel: n } = e;
            return n.id;
        }),
        A = E.filter((e) => g.has(e)).length,
        m = E.length > 0 && A === E.length,
        _ = c.trim().toLocaleLowerCase(),
        x = h.filter((e) => {
            let { name: n } = e;
            return n.toLocaleLowerCase().includes(_);
        });
    function N(e, l) {
        let a = new Set(g);
        for (let n of e) l ? a.add(n) : a.delete(n);
        (0, i.lv)(n, t, { includedChannelIds: a });
    }
    return (0, b.jsxs)(D.B, {
        gap: 16,
        children: [
            (0, b.jsxs)(D.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, b.jsx)(F.E, {
                        id: o,
                        variant: "text-md/medium",
                        color: "text-default",
                        children: u.intl.string(ei[t]),
                    }),
                    E.length > 0
                        ? (0, b.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, b.jsx)("span", {
                                      "aria-live": "polite",
                                      "aria-atomic": "true",
                                      children: (0, b.jsx)(F.E, {
                                          tag: "span",
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: u.intl.format(r.default.KaAdWl, { count: A }),
                                      }),
                                  }),
                                  (0, b.jsx)(F.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": "true",
                                      children: "\u2022",
                                  }),
                                  (0, b.jsx)(H.Q, {
                                      text: u.intl.string(m ? r.default.MECJZo : u.t.l4rqaz),
                                      textVariant: "text-sm/semibold",
                                      onClick: () => N(E, !m),
                                      disabled: s,
                                      "aria-describedby": o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            E.length > 0
                ? (0, b.jsxs)(D.B, {
                      gap: 8,
                      children: [
                          (0, b.jsx)(G.I, {
                              query: c,
                              onChange: d,
                              onClear: () => d(""),
                              placeholder: u.intl.string(u.t.wM7uRI),
                              "aria-label": u.intl.string(u.t.wM7uRI),
                          }),
                          (0, b.jsxs)("div", {
                              children: [
                                  x.length > 0
                                      ? (0, b.jsx)("div", {
                                            role: "group",
                                            "aria-labelledby": o,
                                            className: el.o5,
                                            children: x.map((e, n) => {
                                                let { channel: t, name: l } = e;
                                                return (0, b.jsxs)(
                                                    f.Fragment,
                                                    {
                                                        children: [
                                                            n > 0 ? (0, b.jsx)(U.c, {}) : null,
                                                            (0, b.jsx)(ea, {
                                                                channel: t,
                                                                name: l,
                                                                checked: g.has(t.id),
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
                                  (0, b.jsx)("div", {
                                      "aria-live": "polite",
                                      children:
                                          0 === x.length
                                              ? (0, b.jsx)(F.E, {
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
function ed(e) {
    let { guildId: n, featureKey: t, disabled: i } = e,
        {
            feature: a,
            draft: r,
            saving: s,
        } = (0, g.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
            saving: l.A.isSaving(),
        })),
        c = f.useRef(null);
    f.useEffect(() => {
        null != a && null != r && c.current !== t && ((c.current = t), (0, K.Dv)(n, "channel_list", t, a, r));
    }, [n, t, a, r]);
    let d = u.intl.string(q[t]);
    return (0, b.jsxs)(D.B, {
        gap: 48,
        children: [
            (0, b.jsx)(eu, { featureTitle: d }),
            (0, b.jsxs)(D.B, {
                gap: 24,
                children: [
                    (0, b.jsx)(es, { featureKey: t, featureTitle: d }),
                    null != a && null != r
                        ? (0, b.jsx)(ec, { guildId: n, featureKey: t, feature: a, draft: r, disabled: i || s })
                        : null,
                ],
            }),
        ],
    });
}
var eo = t(866665),
    eh = t(789645),
    ef = t(26005);
function eg(e) {
    let { onDismiss: n } = e,
        t = u.intl.string(u.t.WAI6xu);
    return (0, b.jsxs)("div", {
        className: ef.M0,
        children: [
            (0, b.jsx)("span", { className: ef.UE, "aria-hidden": !0 }),
            (0, b.jsx)(F.E, {
                variant: "text-sm/normal",
                color: "text-default",
                className: ef.Qq,
                children: u.intl.format(r.default.XRu92R, {
                    learnMoreURL: w.A.getArticleURL(et.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                }),
            }),
            (0, b.jsx)(eo.m, {
                text: t,
                asContainer: !0,
                children: (0, b.jsx)(L.K, {
                    "aria-label": t,
                    icon: eh.P,
                    variant: "icon-only",
                    size: "sm",
                    onClick: n,
                }),
            }),
        ],
    });
}
var eE = t(707554),
    eA = t(62010);
t(321073);
var em = t(3666),
    e_ = t(193249),
    ex = t(881636),
    eN = t(405597);
let eS = [];
function ep(e) {
    let { channels: n } = e,
        t = f.useMemo(() => {
            let e = n.slice(0, 3).map((e) => ({ ...e, key: e.channel.id }));
            return (n.length > 3 && e.push(u.intl.formatToPlainString(u.t.F6iMs4, { count: n.length - 3 })), e);
        }, [n]),
        l = n[0]?.channel.id,
        i = f.useCallback(
            (e) =>
                "string" == typeof e
                    ? (0, b.jsxs)(
                          F.E,
                          { variant: "text-sm/medium", color: "none", className: eN.dX, children: [", ", e] },
                          e,
                      )
                    : (0, b.jsxs)(
                          F.E,
                          {
                              variant: "text-sm/medium",
                              color: "none",
                              className: eN.ph,
                              children: [
                                  e.key !== l ? ", " : null,
                                  (0, b.jsx)(Z, {
                                      channel: e.channel,
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                      color: "currentColor",
                                      className: eN.p,
                                  }),
                                  e.name,
                              ],
                          },
                          e.key,
                      ),
            [l],
        ),
        a = f.useCallback(
            (e) => i(u.intl.formatToPlainString(u.t.F6iMs4, { count: n.length - t.length + e.length })),
            [i, n.length, t.length],
        );
    return 0 === t.length
        ? (0, b.jsx)(F.E, { variant: "text-sm/medium", color: "none", children: u.intl.string(u.t.PoWNfe) })
        : (0, b.jsx)(em.ZV, { className: eN.yQ, items: t, renderItem: i, renderOverflow: a, maxLines: 1 });
}
function eC(e) {
    let { guildId: n, featureKey: t, disabled: a } = e,
        { feature: s, draft: c } = (0, g.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
        })),
        d = f.useRef(null);
    f.useEffect(() => {
        l.A.getFocusReturnFeatureKey() === t && d.current?.focus();
    }, [t]);
    let o = en(
        f.useMemo(
            () => (null != s && null != c ? (0, z.Dq)(s).filter((e) => c.includedChannelIds.has(e)) : eS),
            [s, c],
        ),
    );
    if (null == s || null == c) return null;
    let h = u.intl.string(q[t]),
        E = o.length;
    return (0, b.jsxs)(D.B, {
        gap: 12,
        children: [
            (0, b.jsxs)(D.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 24,
                children: [
                    (0, b.jsxs)(D.B, {
                        gap: 4,
                        className: eN.oo,
                        "data-disabled": a,
                        children: [
                            (0, b.jsx)(F.E, { variant: "text-md/medium", children: h }),
                            (0, b.jsx)(F.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.intl.format(X[t], {
                                    learnMoreURL: w.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN),
                                }),
                            }),
                        ],
                    }),
                    (0, b.jsx)(e_.d, {
                        label: h,
                        hideLabel: !0,
                        checked: c.enabled,
                        disabled: a,
                        onChange: (e) => (0, i.lv)(n, t, { enabled: e }),
                    }),
                ],
            }),
            c.enabled
                ? (0, b.jsxs)(O.D, {
                      innerRef: d,
                      className: eN.ag,
                      "aria-label": u.intl.formatToPlainString(r.default["7iIGZ2"], { featureTitle: h, count: E }),
                      onClick: () => (0, i.lF)(t),
                      children: [
                          (0, b.jsx)(F.E, {
                              variant: "text-sm/medium",
                              color: "none",
                              className: eN.Ao,
                              children: u.intl.string(r.default["ZS+NM3"]),
                          }),
                          (0, b.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              gap: 12,
                              fullWidth: !1,
                              className: eN.$n,
                              children: [
                                  (0, b.jsx)(ep, { channels: o }),
                                  (0, b.jsx)(ex.u, { size: "refresh_sm", color: "currentColor" }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eI(e) {
    let { guildId: n, disabled: t } = e,
        s = (0, a.C)(n, "guild_settings"),
        { features: c, saving: d } = (0, g.cf)([l.A], () => ({ features: l.A.getFeatures(n), saving: l.A.isSaving() }));
    f.useEffect(() => {
        s && (0, i.FD)(n);
    }, [s, n]);
    let o = f.useRef(null);
    return (f.useEffect(() => {
        if (s && null != c && o.current !== n && ((o.current = n), null == l.A.getFocusReturnFeatureKey()))
            for (let e of V.P) (0, K.Dv)(n, "section", e, c[e], l.A.getDraft(n, e));
    }, [s, c, n]),
    s && null != c)
        ? (0, b.jsxs)(b.Fragment, {
              children: [
                  (0, b.jsx)(U.c, {}),
                  (0, b.jsxs)(D.B, {
                      gap: 32,
                      children: [
                          (0, b.jsxs)(D.B, {
                              gap: 4,
                              children: [
                                  (0, b.jsxs)(D.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, b.jsx)(eE.F, {
                                              children: (0, b.jsx)(B.D, {
                                                  variant: "heading-md/medium",
                                                  children: u.intl.string(r.default.OLNu03),
                                              }),
                                          }),
                                          (0, b.jsx)(eA.E, { type: "new", variant: "primary" }),
                                      ],
                                  }),
                                  (0, b.jsx)(F.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: u.intl.string(r.default.yTP3YK),
                                  }),
                              ],
                          }),
                          V.P.map((e) => (0, b.jsx)(eC, { guildId: n, featureKey: e, disabled: t || d }, e)),
                      ],
                  }),
              ],
          })
        : null;
}
function eT() {
    let { submitting: e, saveFailed: n } = (0, g.cf)([l.A], () => ({
        submitting: l.A.isSaving(),
        saveFailed: l.A.saveFailed(),
    }));
    return { submitting: e, errorMessage: n ? u.intl.string(u.t.MDtgYB) : void 0 };
}
let ej = [l.A];
function ey(e) {
    return l.A.hasChanges(e);
}
