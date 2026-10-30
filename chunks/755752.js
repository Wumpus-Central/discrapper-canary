t.d(n, {
    F1: () => d,
    ZF: () => f.Z,
    yf: () => eb,
    Hd: () => j.H,
    KT: () => eg,
    DT: () => ej,
    RI: () => c,
    gy: () => ev,
    _x: () => eI,
    Nk: () => ec,
    Dq: () => o.D,
    oM: () => b,
    GH: () => I,
    um: () => i.um,
    yw: () => v.y,
});
var l = t(131904),
    i = t(41034),
    a = t(677166),
    r = t(502209),
    u = t(105292);
function s(e) {
    return "" !== e ? e : null;
}
function d(e) {
    return (0, a.fk)(e, "guild_settings") ? s(u.intl.string(r.default.tdhddn)) : null;
}
function c(e) {
    if (!(0, a.C)(e, "guild_settings")) return null;
    let n = s(u.intl.string(r.default.tdhddn)),
        t = s(u.intl.string(r.default.pOYEzT));
    return null != n && null != t ? { title: n, description: t } : null;
}
var o = t(667320),
    f = t(96787),
    h = t(582128),
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
var S = t(542744),
    x = t(84877),
    N = t(885902),
    C = t(397306);
let p = { visible: !1 };
function I(e, n) {
    let t = (0, N.F)(e, n),
        l = (0, a.Hg)(null != t ? e?.guild_id : null, n),
        i = (0, x.Z)(e),
        r = (0, C.m)(e, n),
        u = l && i && !r ? t : null,
        s = (0, g.bG)([_], () => null != u && _.isHidden(u), [u]),
        d = h.useCallback(() => {
            null != u && (0, S.G)(u);
        }, [u]);
    return h.useMemo(() => (null == u || s ? p : { visible: !0, dismiss: d }), [u, s, d]);
}
function b() {
    return (0, g.bG)([l.A], () => l.A.getOpenFeatureKey());
}
var j = t(888996),
    v = t(390495),
    T = t(477900),
    y = t(503698),
    M = t.n(y),
    O = t(939249),
    D = t(661531),
    R = t(834730),
    P = t(658675),
    L = t(331322),
    F = t(408278),
    k = t(477155),
    H = t(297264),
    B = t(123292),
    G = t(683438),
    U = t(404778),
    w = t(975571),
    W = t(391523),
    z = t(210470),
    K = t(22464),
    V = t(713654);
function Z(e) {
    let { channel: n, ...t } = e,
        l = (0, V.gU)(n);
    return null == l ? null : (0, T.jsx)(l, { ...t, "aria-hidden": !0 });
}
let q = { [K.y.CHANNEL_SUMMARIES]: r.default["+ELXr0"], [K.y.CHANNEL_MESSAGES]: r.default.HvBP0Z },
    X = { [K.y.CHANNEL_SUMMARIES]: r.default.uImIFo, [K.y.CHANNEL_MESSAGES]: r.default.nHVK4t };
var Y = t(47167),
    Q = t(734057),
    $ = t(994500),
    J = t(287809),
    ee = t(403362);
function en(e) {
    let n = (0, g.yK)([Q.A], () => e.map((e) => Q.A.getChannel(e)).filter(ee.Vq), [e]),
        t = (0, g.yK)([J.default, $.A], () => n.map((e) => (0, Y.m1)(e, J.default, $.A)), [n]);
    return h.useMemo(() => n.map((e, n) => ({ channel: e, name: t[n] })), [n, t]);
}
var et = t(652215),
    el = t(217494);
let ei = { [K.y.CHANNEL_SUMMARIES]: r.default["vgmc/d"], [K.y.CHANNEL_MESSAGES]: r.default.MFxb27 };
function ea(e) {
    let { channel: n, name: t, checked: l, disabled: i, onToggle: a } = e;
    return (0, T.jsxs)(O.D, {
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": i,
        className: M()(el.WG, { [el.GC]: i }),
        onClick: i ? void 0 : () => a(n.id, !l),
        children: [
            (0, T.jsx)(Z, { channel: n, size: "xs", color: D.A.colors.ICON_SUBTLE }),
            (0, T.jsx)(R.E, {
                variant: "text-md/medium",
                color: "text-default",
                lineClamp: 1,
                className: el.HA,
                children: t,
            }),
            (0, T.jsx)(P.P, { checked: l, disabled: i }),
        ],
    });
}
function er() {
    (0, i.lF)(null);
}
function eu(e) {
    let { featureTitle: n } = e;
    return (0, T.jsxs)(L.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        children: [
            (0, T.jsx)(F.K, {
                icon: k.r,
                "aria-label": u.intl.string(u.t["13/7kX"]),
                variant: "icon-only",
                size: "sm",
                onClick: er,
            }),
            (0, T.jsx)("nav", {
                "aria-label": u.intl.string(u.t["bM+M/m"]),
                className: el.m7,
                children: (0, T.jsxs)(L.B, {
                    as: "ol",
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    role: "list",
                    className: el.jD,
                    children: [
                        (0, T.jsxs)(L.B, {
                            as: "li",
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            className: el.QF,
                            children: [
                                (0, T.jsx)(O.D, {
                                    onClick: er,
                                    className: el.WU,
                                    children: (0, T.jsx)(R.E, {
                                        variant: "text-md/normal",
                                        color: "none",
                                        lineClamp: 1,
                                        children: u.intl.string(r.default.tdhddn),
                                    }),
                                }),
                                (0, T.jsx)(R.E, {
                                    variant: "text-md/normal",
                                    color: "interactive-text-default",
                                    "aria-hidden": !0,
                                    children: "/",
                                }),
                            ],
                        }),
                        (0, T.jsx)("li", {
                            "aria-current": "page",
                            className: el.RF,
                            children: (0, T.jsx)(R.E, {
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
        l = h.useRef(null);
    return (
        h.useEffect(() => {
            let e = l.current;
            null != e && ((e.tabIndex = -1), e.focus());
        }, [l, n]),
        (0, T.jsxs)(L.B, {
            gap: 4,
            children: [
                (0, T.jsx)(H.D, { ref: l, variant: "heading-lg/medium", children: t }),
                (0, T.jsx)(R.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: u.intl.format(X[n], { learnMoreURL: w.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN) }),
                }),
            ],
        })
    );
}
function ed(e) {
    let { guildId: n, featureKey: t, feature: l, draft: a, disabled: s } = e,
        [d, c] = h.useState(""),
        o = h.useId(),
        f = en(h.useMemo(() => (0, z.Dq)(l), [l])),
        g = a.includedChannelIds,
        E = f.map((e) => {
            let { channel: n } = e;
            return n.id;
        }),
        A = E.filter((e) => g.has(e)).length,
        m = E.length > 0 && A === E.length,
        _ = d.trim().toLocaleLowerCase(),
        S = f.filter((e) => {
            let { name: n } = e;
            return n.toLocaleLowerCase().includes(_);
        });
    function x(e, l) {
        let a = new Set(g);
        for (let n of e) l ? a.add(n) : a.delete(n);
        (0, i.lv)(n, t, { includedChannelIds: a });
    }
    return (0, T.jsxs)(L.B, {
        gap: 16,
        children: [
            (0, T.jsxs)(L.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, T.jsx)(R.E, {
                        id: o,
                        variant: "text-md/medium",
                        color: "text-default",
                        children: u.intl.string(ei[t]),
                    }),
                    E.length > 0
                        ? (0, T.jsxs)(L.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, T.jsx)("span", {
                                      "aria-live": "polite",
                                      "aria-atomic": "true",
                                      children: (0, T.jsx)(R.E, {
                                          tag: "span",
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: u.intl.format(r.default.KaAdWl, { count: A }),
                                      }),
                                  }),
                                  (0, T.jsx)(R.E, {
                                      tag: "span",
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": "true",
                                      children: "\u2022",
                                  }),
                                  (0, T.jsx)(B.Q, {
                                      text: u.intl.string(m ? r.default.MECJZo : u.t.l4rqaz),
                                      textVariant: "text-sm/semibold",
                                      onClick: () => x(E, !m),
                                      disabled: s,
                                      "aria-describedby": o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            E.length > 0
                ? (0, T.jsxs)(L.B, {
                      gap: 8,
                      children: [
                          (0, T.jsx)(G.I, {
                              query: d,
                              onChange: c,
                              onClear: () => c(""),
                              placeholder: u.intl.string(u.t.wM7uRI),
                              "aria-label": u.intl.string(u.t.wM7uRI),
                          }),
                          (0, T.jsxs)("div", {
                              children: [
                                  S.length > 0
                                      ? (0, T.jsx)("div", {
                                            role: "group",
                                            "aria-labelledby": o,
                                            className: el.o5,
                                            children: S.map((e, n) => {
                                                let { channel: t, name: l } = e;
                                                return (0, T.jsxs)(
                                                    h.Fragment,
                                                    {
                                                        children: [
                                                            n > 0 ? (0, T.jsx)(U.c, {}) : null,
                                                            (0, T.jsx)(ea, {
                                                                channel: t,
                                                                name: l,
                                                                checked: g.has(t.id),
                                                                disabled: s,
                                                                onToggle: (e, n) => x([e], n),
                                                            }),
                                                        ],
                                                    },
                                                    t.id,
                                                );
                                            }),
                                        })
                                      : null,
                                  (0, T.jsx)("div", {
                                      "aria-live": "polite",
                                      children:
                                          0 === S.length
                                              ? (0, T.jsx)(R.E, {
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
function ec(e) {
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
        d = h.useRef(null);
    h.useEffect(() => {
        null != a && null != r && d.current !== t && ((d.current = t), (0, W.Dv)(n, "channel_list", t, a, r));
    }, [n, t, a, r]);
    let c = u.intl.string(q[t]);
    return (0, T.jsxs)(L.B, {
        gap: 48,
        children: [
            (0, T.jsx)(eu, { featureTitle: c }),
            (0, T.jsxs)(L.B, {
                gap: 24,
                children: [
                    (0, T.jsx)(es, { featureKey: t, featureTitle: c }),
                    null != a && null != r
                        ? (0, T.jsx)(ed, { guildId: n, featureKey: t, feature: a, draft: r, disabled: i || s })
                        : null,
                ],
            }),
        ],
    });
}
var eo = t(866665),
    ef = t(789645),
    eh = t(26005);
function eg(e) {
    let { onDismiss: n } = e,
        t = u.intl.string(u.t.WAI6xu);
    return (0, T.jsxs)("div", {
        className: eh.M0,
        children: [
            (0, T.jsx)("span", { className: eh.UE, "aria-hidden": !0 }),
            (0, T.jsx)(R.E, {
                variant: "text-sm/normal",
                color: "text-default",
                className: eh.Qq,
                children: u.intl.format(r.default.XRu92R, { learnMoreURL: w.A.getArticleURL(et.MVz.SERVER_WEB_PAGES) }),
            }),
            (0, T.jsx)(eo.m, {
                text: t,
                asContainer: !0,
                children: (0, T.jsx)(F.K, {
                    "aria-label": t,
                    icon: ef.P,
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
    eS = t(881636),
    ex = t(405597);
let eN = [];
function eC(e) {
    let { channels: n } = e,
        t = h.useMemo(() => {
            let e = n.slice(0, 3).map((e) => ({ ...e, key: e.channel.id }));
            return (n.length > 3 && e.push(u.intl.formatToPlainString(u.t.F6iMs4, { count: n.length - 3 })), e);
        }, [n]),
        l = n[0]?.channel.id,
        i = h.useCallback(
            (e) =>
                "string" == typeof e
                    ? (0, T.jsxs)(
                          R.E,
                          { variant: "text-sm/medium", color: "none", className: ex.dX, children: [", ", e] },
                          e,
                      )
                    : (0, T.jsxs)(
                          R.E,
                          {
                              variant: "text-sm/medium",
                              color: "none",
                              className: ex.ph,
                              children: [
                                  e.key !== l ? ", " : null,
                                  (0, T.jsx)(Z, {
                                      channel: e.channel,
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                      color: "currentColor",
                                      className: ex.p,
                                  }),
                                  e.name,
                              ],
                          },
                          e.key,
                      ),
            [l],
        ),
        a = h.useCallback(
            (e) => i(u.intl.formatToPlainString(u.t.F6iMs4, { count: n.length - t.length + e.length })),
            [i, n.length, t.length],
        );
    return 0 === t.length
        ? (0, T.jsx)(R.E, { variant: "text-sm/medium", color: "none", children: u.intl.string(u.t.PoWNfe) })
        : (0, T.jsx)(em.ZV, { className: ex.yQ, items: t, renderItem: i, renderOverflow: a, maxLines: 1 });
}
function ep(e) {
    let { guildId: n, featureKey: t, disabled: a } = e,
        { feature: s, draft: d } = (0, g.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
        })),
        c = h.useRef(null);
    h.useEffect(() => {
        l.A.getFocusReturnFeatureKey() === t && c.current?.focus();
    }, [t]);
    let o = en(
        h.useMemo(
            () => (null != s && null != d ? (0, z.Dq)(s).filter((e) => d.includedChannelIds.has(e)) : eN),
            [s, d],
        ),
    );
    if (null == s || null == d) return null;
    let f = u.intl.string(q[t]),
        E = o.length;
    return (0, T.jsxs)(L.B, {
        gap: 12,
        children: [
            (0, T.jsxs)(L.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 24,
                children: [
                    (0, T.jsxs)(L.B, {
                        gap: 4,
                        className: ex.oo,
                        "data-disabled": a,
                        children: [
                            (0, T.jsx)(R.E, { variant: "text-md/medium", children: f }),
                            (0, T.jsx)(R.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: u.intl.format(X[t], {
                                    learnMoreURL: w.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN),
                                }),
                            }),
                        ],
                    }),
                    (0, T.jsx)(e_.d, {
                        label: f,
                        hideLabel: !0,
                        checked: d.enabled,
                        disabled: a,
                        onChange: (e) => (0, i.lv)(n, t, { enabled: e }),
                    }),
                ],
            }),
            d.enabled
                ? (0, T.jsxs)(O.D, {
                      innerRef: c,
                      className: ex.ag,
                      "aria-label": u.intl.formatToPlainString(r.default["7iIGZ2"], { featureTitle: f, count: E }),
                      onClick: () => (0, i.lF)(t),
                      children: [
                          (0, T.jsx)(R.E, {
                              variant: "text-sm/medium",
                              color: "none",
                              className: ex.Ao,
                              children: u.intl.string(r.default["ZS+NM3"]),
                          }),
                          (0, T.jsxs)(L.B, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              gap: 12,
                              fullWidth: !1,
                              className: ex.$n,
                              children: [
                                  (0, T.jsx)(eC, { channels: o }),
                                  (0, T.jsx)(eS.u, { size: "refresh_sm", color: "currentColor" }),
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
        { features: d, saving: c } = (0, g.cf)([l.A], () => ({ features: l.A.getFeatures(n), saving: l.A.isSaving() }));
    h.useEffect(() => {
        s && (0, i.FD)(n);
    }, [s, n]);
    let o = h.useRef(null);
    return (h.useEffect(() => {
        if (s && null != d && o.current !== n && ((o.current = n), null == l.A.getFocusReturnFeatureKey()))
            for (let e of K.P) (0, W.Dv)(n, "section", e, d[e], l.A.getDraft(n, e));
    }, [s, d, n]),
    s && null != d)
        ? (0, T.jsxs)(T.Fragment, {
              children: [
                  (0, T.jsx)(U.c, {}),
                  (0, T.jsxs)(L.B, {
                      gap: 32,
                      children: [
                          (0, T.jsxs)(L.B, {
                              gap: 4,
                              children: [
                                  (0, T.jsxs)(L.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, T.jsx)(eE.F, {
                                              children: (0, T.jsx)(H.D, {
                                                  variant: "heading-md/medium",
                                                  children: u.intl.string(r.default.OLNu03),
                                              }),
                                          }),
                                          (0, T.jsx)(eA.E, { type: "new", variant: "primary" }),
                                      ],
                                  }),
                                  (0, T.jsx)(R.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: u.intl.string(r.default.yTP3YK),
                                  }),
                              ],
                          }),
                          K.P.map((e) => (0, T.jsx)(ep, { guildId: n, featureKey: e, disabled: t || c }, e)),
                      ],
                  }),
              ],
          })
        : null;
}
function eb() {
    let { submitting: e, saveFailed: n } = (0, g.cf)([l.A], () => ({
        submitting: l.A.isSaving(),
        saveFailed: l.A.saveFailed(),
    }));
    return { submitting: e, errorMessage: n ? u.intl.string(u.t.MDtgYB) : void 0 };
}
let ej = [l.A];
function ev(e) {
    return l.A.hasChanges(e);
}
