t.d(n, {
    Hd: () => S.H,
    yw: () => I.y,
    Nk: () => ec,
    KT: () => eg,
    _x: () => eQ,
    F1: () => d,
    gy: () => e1,
    DT: () => e0,
    um: () => i.um,
    ZF: () => h.Z,
    Dq: () => o.D,
    RI: () => c,
    GH: () => N,
    oM: () => v,
    yf: () => eJ,
});
var l = t(131904),
    i = t(726362),
    a = t(677166),
    r = t(137005),
    s = t(792996);
function u(e) {
    return "" !== e ? e : null;
}
function d(e) {
    return (0, a.fk)(e, "guild_settings") ? u(s.intl.string(r.default.tdhddn)) : null;
}
function c(e) {
    if (!(0, a.C)(e, "guild_settings")) return null;
    let n = u(s.intl.string(r.default.tdhddn)),
        t = u(s.intl.string(r.default.pOYEzT));
    return null != n && null != t ? { title: n, description: t } : null;
}
var o = t(396022),
    h = t(96787),
    f = t(582128),
    m = t(855986),
    g = t(73153);
let x = new Set();
class E extends m.Ay.PersistedStore {
    static displayName = "PinotMemberNoticeAckStore";
    static persistKey = "PinotMemberNoticeAckStore";
    initialize(e) {
        x = new Set(e?.ackedChannelIds ?? []);
    }
    getState() {
        return { ackedChannelIds: Array.from(x) };
    }
    isHidden(e) {
        return x.has(e) || x.size >= 2;
    }
}
let p = new E(g.h, {
    PINOT_MEMBER_NOTICE_ACK: function (e) {
        let { channelId: n } = e;
        if (x.has(n)) return !1;
        x = new Set([...x, n]);
    },
});
var b = t(542744),
    j = t(84877),
    A = t(885902),
    y = t(56919);
let _ = { visible: !1 };
function N(e, n) {
    let t = (0, A.F)(e, n),
        l = (0, a.Hg)(null != t ? e?.guild_id : null, n),
        i = (0, j.Z)(e),
        r = (0, y.m)(e, n),
        s = l && i && !r ? t : null,
        u = (0, m.bG)([p], () => null != s && p.isHidden(s), [s]),
        d = f.useCallback(() => {
            null != s && (0, b.G)(s);
        }, [s]);
    return f.useMemo(() => (null == s || u ? _ : { visible: !0, dismiss: d }), [s, u, d]);
}
function v() {
    return (0, m.bG)([l.A], () => l.A.getOpenFeatureKey());
}
var S = t(464075),
    I = t(698940),
    C = t(477900),
    T = t(503698),
    M = t.n(T),
    R = t(939249),
    O = t(646514),
    B = t(834730),
    D = t(658675),
    k = t(331322),
    P = t(408278),
    F = t(477155),
    w = t(534514),
    L = t(123292),
    G = t(683438),
    z = t(404778),
    H = t(975571),
    U = t(391523),
    K = t(210470),
    W = t(22464),
    V = t(713654);
function X(e) {
    let { channel: n, ...t } = e,
        l = (0, V.gU)(n);
    return null == l ? null : (0, C.jsx)(l, { ...t, "aria-hidden": !0 });
}
let q = { [W.y.CHANNEL_SUMMARIES]: r.default["+ELXr0"], [W.y.CHANNEL_MESSAGES]: r.default.HvBP0Z },
    $ = { [W.y.CHANNEL_SUMMARIES]: r.default.uImIFo, [W.y.CHANNEL_MESSAGES]: r.default.nHVK4t };
var Y = t(47167),
    Z = t(734057),
    Q = t(994500),
    J = t(287809),
    ee = t(403362);
function en(e) {
    let n = (0, m.yK)([Z.A], () => e.map((e) => Z.A.getChannel(e)).filter(ee.Vq), [e]),
        t = (0, m.yK)([J.default, Q.A], () => n.map((e) => (0, Y.m1)(e, J.default, Q.A)), [n]);
    return f.useMemo(() => n.map((e, n) => ({ channel: e, name: t[n] })), [n, t]);
}
var et = t(652215),
    el = t(217494);
let ei = { [W.y.CHANNEL_SUMMARIES]: r.default["vgmc/d"], [W.y.CHANNEL_MESSAGES]: r.default.MFxb27 };
function ea(e) {
    let { channel: n, name: t, checked: l, disabled: i, onToggle: a } = e;
    return (0, C.jsxs)(R.D, {
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": i,
        className: M()(el.WG, { [el.GC]: i }),
        onClick: i ? void 0 : () => a(n.id, !l),
        children: [
            (0, C.jsx)(X, { channel: n, size: "xs", color: O.A.colors.ICON_SUBTLE }),
            (0, C.jsx)(B.E, {
                variant: "body-md/medium",
                color: "text-default",
                lineClamp: 1,
                className: el.HA,
                children: t,
            }),
            (0, C.jsx)(D.P, { checked: l, disabled: i }),
        ],
    });
}
function er() {
    (0, i.lF)(null);
}
function es(e) {
    let { featureTitle: n } = e;
    return (0, C.jsxs)(k.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        children: [
            (0, C.jsx)(P.K, {
                icon: F.ArrowSmallLeftIcon,
                "aria-label": s.intl.string(s.t["13/7kX"]),
                variant: "icon-only",
                size: "sm",
                onClick: er,
            }),
            (0, C.jsx)("nav", {
                "aria-label": s.intl.string(s.t["bM+M/m"]),
                className: el.m7,
                children: (0, C.jsxs)(k.B, {
                    as: "ol",
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    role: "list",
                    className: el.jD,
                    children: [
                        (0, C.jsxs)(k.B, {
                            as: "li",
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            className: el.QF,
                            children: [
                                (0, C.jsx)(R.D, {
                                    onClick: er,
                                    className: el.WU,
                                    children: (0, C.jsx)(B.E, {
                                        variant: "body-md/normal",
                                        color: "none",
                                        lineClamp: 1,
                                        children: s.intl.string(r.default.tdhddn),
                                    }),
                                }),
                                (0, C.jsx)(B.E, {
                                    variant: "body-md/normal",
                                    color: "interactive-text-default",
                                    "aria-hidden": !0,
                                    children: "/",
                                }),
                            ],
                        }),
                        (0, C.jsx)("li", {
                            "aria-current": "page",
                            className: el.RF,
                            children: (0, C.jsx)(B.E, {
                                variant: "body-md/medium",
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
function eu(e) {
    let { featureKey: n, featureTitle: t } = e,
        l = f.useRef(null);
    return (
        f.useEffect(() => {
            let e = l.current;
            null != e && ((e.tabIndex = -1), e.focus());
        }, [l, n]),
        (0, C.jsxs)(k.B, {
            gap: 4,
            children: [
                (0, C.jsx)(w.D, { ref: l, variant: "heading-lg/medium", children: t }),
                (0, C.jsx)(B.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: s.intl.format($[n], { learnMoreURL: H.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN) }),
                }),
            ],
        })
    );
}
function ed(e) {
    let { guildId: n, featureKey: t, feature: l, draft: a, disabled: u } = e,
        [d, c] = f.useState(""),
        o = f.useId(),
        h = en(f.useMemo(() => (0, K.Dq)(l), [l])),
        m = a.includedChannelIds,
        g = h.map((e) => {
            let { channel: n } = e;
            return n.id;
        }),
        x = g.filter((e) => m.has(e)).length,
        E = g.length > 0 && x === g.length,
        p = d.trim().toLocaleLowerCase(),
        b = h.filter((e) => {
            let { name: n } = e;
            return n.toLocaleLowerCase().includes(p);
        });
    function j(e, l) {
        let a = new Set(m);
        for (let n of e) l ? a.add(n) : a.delete(n);
        (0, i.lv)(n, t, { includedChannelIds: a });
    }
    return (0, C.jsxs)(k.B, {
        gap: 16,
        children: [
            (0, C.jsxs)(k.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, C.jsx)(B.E, {
                        id: o,
                        variant: "body-md/medium",
                        color: "text-default",
                        children: s.intl.string(ei[t]),
                    }),
                    g.length > 0
                        ? (0, C.jsxs)(k.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, C.jsx)("span", {
                                      "aria-live": "polite",
                                      "aria-atomic": "true",
                                      children: (0, C.jsx)(B.E, {
                                          tag: "span",
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: s.intl.format(r.default.KaAdWl, { count: x }),
                                      }),
                                  }),
                                  (0, C.jsx)(B.E, {
                                      tag: "span",
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": "true",
                                      children: "\u2022",
                                  }),
                                  (0, C.jsx)(L.Q, {
                                      text: s.intl.string(E ? r.default.MECJZo : s.t.l4rqaz),
                                      textVariant: "body-sm/semibold",
                                      onClick: () => j(g, !E),
                                      disabled: u,
                                      "aria-describedby": o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            g.length > 0
                ? (0, C.jsxs)(k.B, {
                      gap: 8,
                      children: [
                          (0, C.jsx)(G.I, {
                              query: d,
                              onChange: c,
                              onClear: () => c(""),
                              placeholder: s.intl.string(s.t.wM7uRI),
                              "aria-label": s.intl.string(s.t.wM7uRI),
                          }),
                          (0, C.jsxs)("div", {
                              children: [
                                  b.length > 0
                                      ? (0, C.jsx)("div", {
                                            role: "group",
                                            "aria-labelledby": o,
                                            className: el.o5,
                                            children: b.map((e, n) => {
                                                let { channel: t, name: l } = e;
                                                return (0, C.jsxs)(
                                                    f.Fragment,
                                                    {
                                                        children: [
                                                            n > 0 ? (0, C.jsx)(z.c, {}) : null,
                                                            (0, C.jsx)(ea, {
                                                                channel: t,
                                                                name: l,
                                                                checked: m.has(t.id),
                                                                disabled: u,
                                                                onToggle: (e, n) => j([e], n),
                                                            }),
                                                        ],
                                                    },
                                                    t.id,
                                                );
                                            }),
                                        })
                                      : null,
                                  (0, C.jsx)("div", {
                                      "aria-live": "polite",
                                      children:
                                          0 === b.length
                                              ? (0, C.jsx)(B.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    children: s.intl.string(s.t.f5cMAg),
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
            saving: u,
        } = (0, m.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
            saving: l.A.isSaving(),
        })),
        d = f.useRef(null);
    f.useEffect(() => {
        null != a && null != r && d.current !== t && ((d.current = t), (0, U.Dv)(n, "channel_list", t, a, r));
    }, [n, t, a, r]);
    let c = s.intl.string(q[t]);
    return (0, C.jsxs)(k.B, {
        gap: 48,
        children: [
            (0, C.jsx)(es, { featureTitle: c }),
            (0, C.jsxs)(k.B, {
                gap: 24,
                children: [
                    (0, C.jsx)(eu, { featureKey: t, featureTitle: c }),
                    null != a && null != r
                        ? (0, C.jsx)(ed, { guildId: n, featureKey: t, feature: a, draft: r, disabled: i || u })
                        : null,
                ],
            }),
        ],
    });
}
var eo = t(28863),
    eh = t(866665),
    ef = t(789645),
    em = t(26005);
function eg(e) {
    let { channel: n, onDismiss: t } = e,
        l = s.intl.string(s.t.WAI6xu);
    return (
        f.useEffect(() => {
            (0, U.Ws)({ noticeType: "member_channel", channel: n });
        }, [n.id]),
        (0, C.jsxs)("div", {
            className: em.M0,
            children: [
                (0, C.jsx)("span", { className: em.UE, "aria-hidden": !0 }),
                (0, C.jsx)(B.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    className: em.Qq,
                    children: s.intl.format(r.default.XRu92R, {
                        learnMoreHook: (e, t) =>
                            (0, C.jsx)(
                                eo.Anchor,
                                {
                                    href: H.A.getArticleURL(et.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                                    onClick: () =>
                                        (0, U.Yy)({ noticeType: "member_channel", channel: n }, "learn_more"),
                                    children: e,
                                },
                                t,
                            ),
                    }),
                }),
                (0, C.jsx)(eh.m, {
                    text: l,
                    asContainer: !0,
                    children: (0, C.jsx)(P.K, {
                        "aria-label": l,
                        icon: ef.XSmallIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: function () {
                            ((0, U.Yy)({ noticeType: "member_channel", channel: n }, "dismiss"), t());
                        },
                    }),
                }),
            ],
        })
    );
}
var ex = t(707554),
    eE = t(805251);
t(321073);
var ep = t(3666),
    eb = t(143129),
    ej = t(881636),
    eA = t(405597);
let ey = [];
function e_(e) {
    let { channels: n } = e,
        t = f.useMemo(() => {
            let e = n.slice(0, 3).map((e) => ({ ...e, key: e.channel.id }));
            return (n.length > 3 && e.push(s.intl.formatToPlainString(s.t.F6iMs4, { count: n.length - 3 })), e);
        }, [n]),
        l = n[0]?.channel.id,
        i = f.useCallback(
            (e) =>
                "string" == typeof e
                    ? (0, C.jsxs)(
                          B.E,
                          { variant: "body-sm/medium", color: "none", className: eA.dX, children: [", ", e] },
                          e,
                      )
                    : (0, C.jsxs)(
                          B.E,
                          {
                              variant: "body-sm/medium",
                              color: "none",
                              className: eA.ph,
                              children: [
                                  e.key !== l ? ", " : null,
                                  (0, C.jsx)(X, {
                                      channel: e.channel,
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                      color: "currentColor",
                                      className: eA.p,
                                  }),
                                  e.name,
                              ],
                          },
                          e.key,
                      ),
            [l],
        ),
        a = f.useCallback(
            (e) => i(s.intl.formatToPlainString(s.t.F6iMs4, { count: n.length - t.length + e.length })),
            [i, n.length, t.length],
        );
    return 0 === t.length
        ? (0, C.jsx)(B.E, { variant: "body-sm/medium", color: "none", children: s.intl.string(s.t.PoWNfe) })
        : (0, C.jsx)(ep.ZV, { className: eA.yQ, items: t, renderItem: i, renderOverflow: a, maxLines: 1 });
}
function eN(e) {
    let { guildId: n, featureKey: t, disabled: a } = e,
        { feature: u, draft: d } = (0, m.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
        })),
        c = f.useRef(null);
    f.useEffect(() => {
        l.A.getFocusReturnFeatureKey() === t && c.current?.focus();
    }, [t]);
    let o = en(
        f.useMemo(
            () => (null != u && null != d ? (0, K.Dq)(u).filter((e) => d.includedChannelIds.has(e)) : ey),
            [u, d],
        ),
    );
    if (null == u || null == d) return null;
    let h = s.intl.string(q[t]),
        g = o.length;
    return (0, C.jsxs)(k.B, {
        gap: 12,
        children: [
            (0, C.jsxs)(k.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 24,
                children: [
                    (0, C.jsxs)(k.B, {
                        gap: 4,
                        className: eA.oo,
                        "data-disabled": a,
                        children: [
                            (0, C.jsx)(B.E, { variant: "body-md/medium", children: h }),
                            (0, C.jsx)(B.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: s.intl.format($[t], {
                                    learnMoreURL: H.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN),
                                }),
                            }),
                        ],
                    }),
                    (0, C.jsx)(eb.d, {
                        label: h,
                        hideLabel: !0,
                        checked: d.enabled,
                        disabled: a,
                        onChange: (e) => (0, i.lv)(n, t, { enabled: e }),
                    }),
                ],
            }),
            d.enabled
                ? (0, C.jsxs)(R.D, {
                      innerRef: c,
                      className: eA.ag,
                      "aria-label": s.intl.formatToPlainString(r.default["7iIGZ2"], { featureTitle: h, count: g }),
                      onClick: () => (0, i.lF)(t),
                      children: [
                          (0, C.jsx)(B.E, {
                              variant: "body-sm/medium",
                              color: "none",
                              className: eA.Ao,
                              children: s.intl.string(r.default["ZS+NM3"]),
                          }),
                          (0, C.jsxs)(k.B, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              gap: 12,
                              fullWidth: !1,
                              className: eA.$n,
                              children: [
                                  (0, C.jsx)(e_, { channels: o }),
                                  (0, C.jsx)(ej.ChevronLargeRightIcon, { size: "refresh_sm", color: "currentColor" }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ev = t(536637),
    eS = t.n(ev),
    eI = t(620632),
    eC = t(778492),
    eT = t(276293),
    eM = t(241326),
    eR = t(821609),
    eO = t(673185),
    eB = t(265872),
    eD = t(165862),
    ek = t(477782),
    eP = t(847374),
    eF = t(972213),
    ew = t(192308),
    eL = t(732159),
    eG = t(683071),
    ez = t(224640),
    eH = t(603013),
    eU = t(237793);
let eK = {
    off: [r.default.fWZps3, r.default.oLMk33],
    not_live: [r.default["4lktoq"], r.default["KkxX+6"]],
    empty: [r.default.EQjhnD, r.default["9wh4rG"]],
    unavailable: [r.default.drfoPg, r.default["2Oa6D/"]],
};
async function eW(e) {
    try {
        return (await eI.Bo.get({ url: eH.j.SUMMARIES(e), rejectWithError: !0 })).body;
    } catch {
        return { state: "unavailable", summaries: [], public_status: null };
    }
}
function eV(e) {
    let { summary: n, disabled: t, onRemove: l, preview: i = !1 } = e,
        a = (0, m.bG)([Z.A], () => Z.A.getChannel(n.channel.id), [n.channel.id]),
        u = (0, Y.Ay)(a) ?? s.intl.string(s.t["/YzI63"]),
        d = a?.type === et.rbe.GUILD_ANNOUNCEMENT ? eC.AnnouncementsIcon : eT.TextIcon,
        c = s.intl.formatToPlainString(r.default.BINkaq, { title: n.title }),
        o =
            n.key_points?.filter((e) => {
                let { point: n } = e;
                return n.trim().length > 0;
            }) ?? [];
    return (0, C.jsxs)(k.B, {
        gap: 8,
        padding: i ? 0 : { top: 16, bottom: 20 },
        className: i ? eU.tq : eU.z,
        role: i ? void 0 : "listitem",
        children: [
            (0, C.jsxs)(k.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 8,
                children: [
                    (0, C.jsxs)(k.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        wrap: !0,
                        className: eU.Qs,
                        children: [
                            (0, C.jsx)(d, { size: "xs", color: O.A.colors.TEXT_SUBTLE }),
                            (0, C.jsx)(B.E, { variant: "body-sm/semibold", color: "text-subtle", children: u }),
                            (0, C.jsxs)(B.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: [
                                    " \xb7 ",
                                    s.intl.formatToPlainString(r.default["31AOSO"], {
                                        people: n.activity.user_count,
                                        date: eS()(n.activity.ended_at).fromNow(),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i
                        ? null
                        : (0, C.jsx)(eh.m, {
                              text: c,
                              children: (0, C.jsx)(P.K, {
                                  icon: eM.TrashIcon,
                                  "aria-label": c,
                                  variant: "icon-only",
                                  size: "sm",
                                  disabled: t,
                                  onClick: () => l?.(n),
                              }),
                          }),
                ],
            }),
            (0, C.jsx)(w.D, { variant: "heading-sm/semibold", children: n.title }),
            (0, C.jsx)("ul", {
                className: eU.WR,
                children: (o.length > 0
                    ? o.map((e) => {
                          let { point: n } = e;
                          return n;
                      })
                    : [n.brief_summary]
                ).map((e, n) =>
                    (0, C.jsx)("li", { children: (0, C.jsx)(B.E, { variant: "body-md/normal", children: e }) }, n),
                ),
            }),
            i
                ? null
                : (0, C.jsx)(k.B, {
                      direction: "horizontal",
                      justify: "end",
                      padding: { top: 8 },
                      className: eU.Eb,
                      children: (0, C.jsx)(B.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: s.intl.formatToPlainString(r.default["dvpl/w"], {
                              messages: n.activity.message_count,
                          }),
                      }),
                  }),
        ],
    });
}
function eX(e) {
    let { channelId: n, selected: t, onSelect: l } = e,
        i = (0, m.bG)([Z.A], () => Z.A.getChannel(n), [n]),
        a = (0, Y.Ay)(i) ?? s.intl.string(s.t["/YzI63"]);
    return (0, C.jsx)(k.B, {
        gap: 0,
        className: t ? `${eU.Ix} ${eU.rM}` : eU.Ix,
        children: (0, C.jsx)(eR.$, {
            fullWidth: !0,
            text: a,
            icon: i?.type === et.rbe.GUILD_ANNOUNCEMENT ? eC.AnnouncementsIcon : eT.TextIcon,
            size: "sm",
            variant: "icon-only",
            "aria-pressed": t,
            onClick: l,
        }),
    });
}
function eq(e) {
    let { result: n, disabled: t, onRemove: l, contentRef: i, onClose: a, children: u } = e,
        d = f.useRef(null),
        [c, o] = f.useState(null),
        h = f.useMemo(
            () =>
                [...(n?.summaries ?? [])].sort(
                    (e, n) => Date.parse(n.activity.ended_at) - Date.parse(e.activity.ended_at),
                ),
            [n],
        ),
        m = f.useMemo(() => [...new Set(h.map((e) => e.channel.id))], [h]),
        g = null != c && m.includes(c) ? c : null;
    return (0, C.jsxs)("div", {
        className: eU.T,
        children: [
            (0, C.jsxs)(k.B, {
                gap: 0,
                className: eU.pz,
                children: [
                    (0, C.jsx)(k.B, {
                        padding: { left: 24, right: 12 },
                        justify: "center",
                        className: eU.ZO,
                        children: (0, C.jsx)(w.D, {
                            variant: "heading-sm/semibold",
                            children: s.intl.string(r.default["+ELXr0"]),
                        }),
                    }),
                    (0, C.jsxs)(k.B, {
                        as: "nav",
                        padding: { top: 20, bottom: 20, left: 8, right: 8 },
                        gap: 4,
                        className: eU.BM,
                        "aria-label": s.intl.string(r.default["+ELXr0"]),
                        children: [
                            (0, C.jsx)(k.B, {
                                gap: 0,
                                className: null == g ? `${eU.Ix} ${eU.rM}` : eU.Ix,
                                children: (0, C.jsx)(eR.$, {
                                    fullWidth: !0,
                                    text: s.intl.string(r.default.kGOOse),
                                    icon: eO.ChannelListIcon,
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-pressed": null == g,
                                    onClick: () => o(null),
                                }),
                            }),
                            m.map((e) => (0, C.jsx)(eX, { channelId: e, selected: e === g, onSelect: () => o(e) }, e)),
                        ],
                    }),
                ],
            }),
            (0, C.jsxs)(k.B, {
                gap: 0,
                className: eU.dT,
                children: [
                    (0, C.jsxs)(k.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        padding: { left: 24, right: 8 },
                        className: eU.KE,
                        children: [
                            (0, C.jsx)(eB.Y, {
                                targetElementRef: d,
                                position: "bottom",
                                align: "left",
                                renderPopout: (e) => {
                                    let { closePopout: n } = e;
                                    return (0, C.jsx)(eD.W, {
                                        navId: "pinot-summary-sort",
                                        "aria-label": s.intl.string(r.default.WSGINd),
                                        onClose: n,
                                        onSelect: n,
                                        children: (0, C.jsx)(ek.iD, {
                                            id: "recent",
                                            label: s.intl.string(r.default.WSGINd),
                                            group: "sort",
                                            checked: !0,
                                            action: n,
                                        }),
                                    });
                                },
                                children: (e) => {
                                    let {
                                        onClick: n,
                                        onMouseDown: t,
                                        onKeyDown: l,
                                        "aria-expanded": i,
                                        "aria-controls": a,
                                    } = e;
                                    return (0, C.jsx)(eR.$, {
                                        onClick: n,
                                        onMouseDown: t,
                                        "aria-controls": a,
                                        onKeyDown: l,
                                        "aria-expanded": i,
                                        "aria-haspopup": "menu",
                                        buttonRef: d,
                                        text: s.intl.string(r.default.WSGINd),
                                        icon: eP.ChevronSmallDownIcon,
                                        iconPosition: "end",
                                        variant: "icon-only",
                                        size: "sm",
                                    });
                                },
                            }),
                            (0, C.jsx)(eh.m, {
                                text: s.intl.string(s.t.cpT0Cq),
                                children: (0, C.jsx)(P.K, {
                                    icon: eF.XLargeIcon,
                                    "aria-label": s.intl.string(s.t.cpT0Cq),
                                    variant: "icon-only",
                                    size: "sm",
                                    onClick: a,
                                }),
                            }),
                        ],
                    }),
                    (0, C.jsxs)(k.B, {
                        gap: 12,
                        padding: { top: 8, right: 24, bottom: 24, left: 24 },
                        className: eU.v2,
                        tabIndex: -1,
                        ref: i,
                        children: [
                            u,
                            n?.state === "live"
                                ? (0, C.jsx)(ex.F, {
                                      children: (0, C.jsx)(k.B, {
                                          gap: 0,
                                          role: "list",
                                          "aria-label": s.intl.string(r.default["+ELXr0"]),
                                          children: h
                                              .filter((e) => null == g || e.channel.id === g)
                                              .map((e) =>
                                                  (0, C.jsx)(eV, { summary: e, disabled: t, onRemove: l }, e.id),
                                              ),
                                      }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e$(e) {
    return (0, a.Mx)(e.guildId, "guild_settings_summary_management") ? (0, C.jsx)(eY, { ...e }) : null;
}
function eY(e) {
    let n = f.useRef(null);
    return (0, C.jsx)(ex.F, {
        children: (0, C.jsxs)(k.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: 16,
            as: "section",
            children: [
                (0, C.jsxs)(k.B, {
                    gap: 4,
                    className: eU.Qs,
                    children: [
                        (0, C.jsx)(w.D, { variant: "heading-sm/medium", children: s.intl.string(r.default.Bz71mg) }),
                        (0, C.jsx)(B.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: s.intl.string(r.default["49TARv"]),
                        }),
                    ],
                }),
                (0, C.jsx)(eR.$, {
                    text: s.intl.string(r.default["+dSZbK"]),
                    buttonRef: n,
                    variant: "secondary",
                    size: "sm",
                    onClick: () => (0, ew.qf)((t) => (0, C.jsx)(eZ, { ...e, ...t, returnRef: n })),
                }),
            ],
        }),
    });
}
function eZ(e) {
    let { guildId: n, disabled: t, savedFeatures: l, ...i } = e,
        [a, u] = f.useState(null),
        d = f.useRef(0),
        c = f.useRef(null),
        o = f.useCallback(async () => {
            let e = ++d.current,
                t = await eW(n);
            e === d.current && u(t);
        }, [n]);
    f.useEffect(() => {
        let e = !0,
            t = ++d.current;
        return (
            !(async function () {
                let l = await eW(n);
                e && t === d.current && u(l);
            })(),
            () => {
                ((e = !1), (d.current += 1));
            }
        );
    }, [n, l]);
    let h = null != a && "live" !== a.state ? eK[a.state] : null,
        m =
            a?.public_status === "not_live_yet"
                ? r.default.CfhSPp
                : a?.public_status === "disabled"
                  ? r.default.KedXb5
                  : null,
        g = (0, C.jsxs)(eq, {
            result: a,
            disabled: t,
            onRemove: function (e) {
                let t = !1;
                (0, ew.qf)(
                    (l) =>
                        (0, C.jsx)(eL.u, {
                            ...l,
                            returnRef: c,
                            title: s.intl.string(r.default.YbNQ4h),
                            subtitle: s.intl.string(r.default.DEN16e),
                            preview: (0, C.jsx)(ex.F, {
                                children: (0, C.jsxs)(k.B, {
                                    gap: 8,
                                    children: [
                                        (0, C.jsx)(B.E, {
                                            variant: "body-sm/medium",
                                            children: s.intl.string(r.default.rPS02g),
                                        }),
                                        (0, C.jsx)("div", {
                                            className: eU.VH,
                                            children: (0, C.jsx)(eV, { summary: e, preview: !0 }),
                                        }),
                                    ],
                                }),
                            }),
                            confirmText: s.intl.string(r.default["Gt2OY/"]),
                            onCloseCallback: () => {
                                t && c.current?.focus({ preventScroll: !0 });
                            },
                            onConfirm: async () => {
                                (await eI.Bo.post({
                                    url: eH.j.REMOVE_SUMMARY(n, e.id),
                                    body: { channel_id: e.channel.id },
                                    rejectWithError: !0,
                                }),
                                    await o(),
                                    (t = !0));
                            },
                        }),
                    { stackingBehavior: "stack" },
                );
            },
            contentRef: c,
            onClose: i.onClose,
            children: [
                a?.state !== "live"
                    ? (0, C.jsx)(k.B, {
                          gap: 12,
                          role: "status",
                          "aria-live": "polite",
                          children:
                              null == a
                                  ? (0, C.jsx)(B.E, {
                                        variant: "body-sm/normal",
                                        children: s.intl.string(r.default.FXzsGB),
                                    })
                                  : null != h
                                    ? (0, C.jsxs)(k.B, {
                                          gap: 8,
                                          padding: 16,
                                          children: [
                                              (0, C.jsx)(B.E, {
                                                  variant: "body-md/medium",
                                                  children: s.intl.string(h[0]),
                                              }),
                                              (0, C.jsx)(B.E, {
                                                  variant: "body-sm/normal",
                                                  color: "text-subtle",
                                                  children: s.intl.string(h[1]),
                                              }),
                                              "unavailable" === a.state
                                                  ? (0, C.jsx)(eR.$, {
                                                        text: s.intl.string(r.default.D2f6wh),
                                                        variant: "secondary",
                                                        onClick: o,
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                      })
                    : null,
                a?.state === "live" && null != m
                    ? (0, C.jsx)(eG.w, { type: "info", role: "status", message: s.intl.format(m, {}) })
                    : null,
            ],
        });
    return (0, C.jsx)(ez.d, {
        ...i,
        size: "xl",
        maxHeight: "viewport",
        "aria-label": s.intl.string(r.default["+ELXr0"]),
        children: g,
    });
}
function eQ(e) {
    let { guildId: n, disabled: t } = e,
        u = (0, a.C)(n, "guild_settings"),
        { features: d, saving: c } = (0, m.cf)([l.A], () => ({ features: l.A.getFeatures(n), saving: l.A.isSaving() }));
    f.useEffect(() => {
        u && (0, i.FD)(n);
    }, [u, n]);
    let o = f.useRef(null);
    return (f.useEffect(() => {
        if (u && null != d && o.current !== n && ((o.current = n), null == l.A.getFocusReturnFeatureKey()))
            for (let e of W.P) (0, U.Dv)(n, "section", e, d[e], l.A.getDraft(n, e));
    }, [u, d, n]),
    u && null != d)
        ? (0, C.jsxs)(C.Fragment, {
              children: [
                  (0, C.jsx)(z.c, {}),
                  (0, C.jsxs)(k.B, {
                      gap: 32,
                      children: [
                          (0, C.jsxs)(k.B, {
                              gap: 4,
                              children: [
                                  (0, C.jsxs)(k.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, C.jsx)(ex.F, {
                                              children: (0, C.jsx)(w.D, {
                                                  variant: "heading-sm/medium",
                                                  children: s.intl.string(r.default.OLNu03),
                                              }),
                                          }),
                                          (0, C.jsx)(eE.E, { type: "new", variant: "primary" }),
                                      ],
                                  }),
                                  (0, C.jsx)(B.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      children: s.intl.string(r.default.yTP3YK),
                                  }),
                              ],
                          }),
                          W.P.map((e) => (0, C.jsx)(eN, { guildId: n, featureKey: e, disabled: t || c }, e)),
                          (0, C.jsx)(e$, { guildId: n, disabled: t || c, savedFeatures: d }, n),
                      ],
                  }),
              ],
          })
        : null;
}
function eJ() {
    let { submitting: e, saveFailed: n } = (0, m.cf)([l.A], () => ({
        submitting: l.A.isSaving(),
        saveFailed: l.A.saveFailed(),
    }));
    return { submitting: e, errorMessage: n ? s.intl.string(s.t.MDtgYB) : void 0 };
}
let e0 = [l.A];
function e1(e) {
    return l.A.hasChanges(e);
}
