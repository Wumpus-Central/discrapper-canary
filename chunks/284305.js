t.d(n, {
    Hd: () => N.H,
    yw: () => I.y,
    Nk: () => ec,
    KT: () => eg,
    _x: () => e7,
    F1: () => d,
    gy: () => e8,
    DT: () => e5,
    um: () => i.um,
    ZF: () => h.Z,
    Dq: () => o.D,
    RI: () => c,
    GH: () => _,
    oM: () => S,
    yf: () => e3,
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
class p extends m.Ay.PersistedStore {
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
let E = new p(g.h, {
    PINOT_MEMBER_NOTICE_ACK: function (e) {
        let { channelId: n } = e;
        if (x.has(n)) return !1;
        x = new Set([...x, n]);
    },
});
var j = t(542744),
    b = t(84877),
    y = t(885902),
    v = t(56919);
let A = { visible: !1 };
function _(e, n) {
    let t = (0, y.F)(e, n),
        l = (0, a.Hg)(null != t ? e?.guild_id : null, n),
        i = (0, b.Z)(e),
        r = (0, v.m)(e, n),
        s = l && i && !r ? t : null,
        u = (0, m.bG)([E], () => null != s && E.isHidden(s), [s]),
        d = f.useCallback(() => {
            null != s && (0, j.G)(s);
        }, [s]);
    return f.useMemo(() => (null == s || u ? A : { visible: !0, dismiss: d }), [s, u, d]);
}
function S() {
    return (0, m.bG)([l.A], () => l.A.getOpenFeatureKey());
}
var N = t(464075),
    I = t(698940),
    C = t(477900),
    T = t(503698),
    M = t.n(T),
    R = t(939249),
    B = t(646514),
    O = t(834730),
    k = t(658675),
    D = t(331322),
    w = t(408278),
    P = t(477155),
    F = t(534514),
    L = t(123292),
    z = t(683438),
    G = t(404778),
    H = t(975571),
    U = t(391523),
    W = t(210470),
    K = t(22464),
    V = t(713654);
function $(e) {
    let { channel: n, ...t } = e,
        l = (0, V.gU)(n);
    return null == l ? null : (0, C.jsx)(l, { ...t, "aria-hidden": !0 });
}
let X = { [K.y.CHANNEL_SUMMARIES]: r.default["+ELXr0"], [K.y.CHANNEL_MESSAGES]: r.default.HvBP0Z },
    q = { [K.y.CHANNEL_SUMMARIES]: r.default.uImIFo, [K.y.CHANNEL_MESSAGES]: r.default.nHVK4t };
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
let ei = { [K.y.CHANNEL_SUMMARIES]: r.default["vgmc/d"], [K.y.CHANNEL_MESSAGES]: r.default.MFxb27 };
function ea(e) {
    let { channel: n, name: t, checked: l, disabled: i, onToggle: a } = e;
    return (0, C.jsxs)(R.D, {
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": i,
        className: M()(el.WG, { [el.GC]: i }),
        onClick: i ? void 0 : () => a(n.id, !l),
        children: [
            (0, C.jsx)($, { channel: n, size: "xs", color: B.A.colors.ICON_SUBTLE }),
            (0, C.jsx)(O.E, {
                variant: "body-md/medium",
                color: "text-default",
                lineClamp: 1,
                className: el.HA,
                children: t,
            }),
            (0, C.jsx)(k.P, { checked: l, disabled: i }),
        ],
    });
}
function er() {
    (0, i.lF)(null);
}
function es(e) {
    let { featureTitle: n } = e;
    return (0, C.jsxs)(D.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        children: [
            (0, C.jsx)(w.K, {
                icon: P.ArrowSmallLeftIcon,
                "aria-label": s.intl.string(s.t["13/7kX"]),
                variant: "icon-only",
                size: "sm",
                onClick: er,
            }),
            (0, C.jsx)("nav", {
                "aria-label": s.intl.string(s.t["bM+M/m"]),
                className: el.m7,
                children: (0, C.jsxs)(D.B, {
                    as: "ol",
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    role: "list",
                    className: el.jD,
                    children: [
                        (0, C.jsxs)(D.B, {
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
                                    children: (0, C.jsx)(O.E, {
                                        variant: "body-md/normal",
                                        color: "none",
                                        lineClamp: 1,
                                        children: s.intl.string(r.default.tdhddn),
                                    }),
                                }),
                                (0, C.jsx)(O.E, {
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
                            children: (0, C.jsx)(O.E, {
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
        (0, C.jsxs)(D.B, {
            gap: 4,
            children: [
                (0, C.jsx)(F.D, { ref: l, variant: "heading-lg/medium", children: t }),
                (0, C.jsx)(O.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: s.intl.format(q[n], { learnMoreURL: H.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN) }),
                }),
            ],
        })
    );
}
function ed(e) {
    let { guildId: n, featureKey: t, feature: l, draft: a, disabled: u } = e,
        [d, c] = f.useState(""),
        o = f.useId(),
        h = en(f.useMemo(() => (0, W.Dq)(l), [l])),
        m = a.includedChannelIds,
        g = h.map((e) => {
            let { channel: n } = e;
            return n.id;
        }),
        x = g.filter((e) => m.has(e)).length,
        p = g.length > 0 && x === g.length,
        E = d.trim().toLocaleLowerCase(),
        j = h.filter((e) => {
            let { name: n } = e;
            return n.toLocaleLowerCase().includes(E);
        });
    function b(e, l) {
        let a = new Set(m);
        for (let n of e) l ? a.add(n) : a.delete(n);
        (0, i.lv)(n, t, { includedChannelIds: a });
    }
    return (0, C.jsxs)(D.B, {
        gap: 16,
        children: [
            (0, C.jsxs)(D.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, C.jsx)(O.E, {
                        id: o,
                        variant: "body-md/medium",
                        color: "text-default",
                        children: s.intl.string(ei[t]),
                    }),
                    g.length > 0
                        ? (0, C.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, C.jsx)("span", {
                                      "aria-live": "polite",
                                      "aria-atomic": "true",
                                      children: (0, C.jsx)(O.E, {
                                          tag: "span",
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: s.intl.format(r.default.KaAdWl, { count: x }),
                                      }),
                                  }),
                                  (0, C.jsx)(O.E, {
                                      tag: "span",
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": "true",
                                      children: "\u2022",
                                  }),
                                  (0, C.jsx)(L.Q, {
                                      text: s.intl.string(p ? r.default.MECJZo : s.t.l4rqaz),
                                      textVariant: "body-sm/semibold",
                                      onClick: () => b(g, !p),
                                      disabled: u,
                                      "aria-describedby": o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            g.length > 0
                ? (0, C.jsxs)(D.B, {
                      gap: 8,
                      children: [
                          (0, C.jsx)(z.I, {
                              query: d,
                              onChange: c,
                              onClear: () => c(""),
                              placeholder: s.intl.string(s.t.wM7uRI),
                              "aria-label": s.intl.string(s.t.wM7uRI),
                          }),
                          (0, C.jsxs)("div", {
                              children: [
                                  j.length > 0
                                      ? (0, C.jsx)("div", {
                                            role: "group",
                                            "aria-labelledby": o,
                                            className: el.o5,
                                            children: j.map((e, n) => {
                                                let { channel: t, name: l } = e;
                                                return (0, C.jsxs)(
                                                    f.Fragment,
                                                    {
                                                        children: [
                                                            n > 0 ? (0, C.jsx)(G.c, {}) : null,
                                                            (0, C.jsx)(ea, {
                                                                channel: t,
                                                                name: l,
                                                                checked: m.has(t.id),
                                                                disabled: u,
                                                                onToggle: (e, n) => b([e], n),
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
                                          0 === j.length
                                              ? (0, C.jsx)(O.E, {
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
    let c = s.intl.string(X[t]);
    return (0, C.jsxs)(D.B, {
        gap: 48,
        children: [
            (0, C.jsx)(es, { featureTitle: c }),
            (0, C.jsxs)(D.B, {
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
                (0, C.jsx)(O.E, {
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
                    children: (0, C.jsx)(w.K, {
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
    ep = t(805251);
t(321073);
var eE = t(3666),
    ej = t(143129),
    eb = t(881636),
    ey = t(405597);
let ev = [];
function eA(e) {
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
                          O.E,
                          { variant: "body-sm/medium", color: "none", className: ey.dX, children: [", ", e] },
                          e,
                      )
                    : (0, C.jsxs)(
                          O.E,
                          {
                              variant: "body-sm/medium",
                              color: "none",
                              className: ey.ph,
                              children: [
                                  e.key !== l ? ", " : null,
                                  (0, C.jsx)($, {
                                      channel: e.channel,
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                      color: "currentColor",
                                      className: ey.p,
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
        ? (0, C.jsx)(O.E, { variant: "body-sm/medium", color: "none", children: s.intl.string(s.t.PoWNfe) })
        : (0, C.jsx)(eE.ZV, { className: ey.yQ, items: t, renderItem: i, renderOverflow: a, maxLines: 1 });
}
function e_(e) {
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
            () => (null != u && null != d ? (0, W.Dq)(u).filter((e) => d.includedChannelIds.has(e)) : ev),
            [u, d],
        ),
    );
    if (null == u || null == d) return null;
    let h = s.intl.string(X[t]),
        g = o.length;
    return (0, C.jsxs)(D.B, {
        gap: 12,
        children: [
            (0, C.jsxs)(D.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 24,
                children: [
                    (0, C.jsxs)(D.B, {
                        gap: 4,
                        className: ey.oo,
                        "data-disabled": a,
                        children: [
                            (0, C.jsx)(O.E, { variant: "body-md/medium", children: h }),
                            (0, C.jsx)(O.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: s.intl.format(q[t], {
                                    learnMoreURL: H.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN),
                                }),
                            }),
                        ],
                    }),
                    (0, C.jsx)(ej.d, {
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
                      className: ey.ag,
                      "aria-label": s.intl.formatToPlainString(r.default["7iIGZ2"], { featureTitle: h, count: g }),
                      onClick: () => (0, i.lF)(t),
                      children: [
                          (0, C.jsx)(O.E, {
                              variant: "body-sm/medium",
                              color: "none",
                              className: ey.Ao,
                              children: s.intl.string(r.default["ZS+NM3"]),
                          }),
                          (0, C.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              gap: 12,
                              fullWidth: !1,
                              className: ey.$n,
                              children: [
                                  (0, C.jsx)(eA, { channels: o }),
                                  (0, C.jsx)(eb.ChevronLargeRightIcon, { size: "refresh_sm", color: "currentColor" }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var eS = t(536637),
    eN = t.n(eS),
    eI = t(620632),
    eC = t(778492),
    eT = t(276293),
    eM = t(509434),
    eR = t(241326),
    eB = t(821609),
    eO = t(673185),
    ek = t(265872),
    eD = t(165862),
    ew = t(477782),
    eP = t(847374),
    eF = t(972213),
    eL = t(192308),
    ez = t(95477),
    eG = t(691885),
    eH = t(732159),
    eU = t(683071),
    eW = t(224640),
    eK = t(565645),
    eV = t(603013);
(t(323874), t(14289), t(35956));
var e$ = t(998218);
function eX(e) {
    return /^[1-9]\d{0,18}$/.test(e) && (e.length < 19 || e <= "9223372036854775807");
}
var eq = t(237793);
let eY = {
    off: [r.default.fWZps3, r.default.oLMk33],
    not_live: [r.default["4lktoq"], r.default["KkxX+6"]],
    empty: [r.default.EQjhnD, r.default["9wh4rG"]],
    unavailable: [r.default.drfoPg, r.default["2Oa6D/"]],
};
async function eZ(e) {
    try {
        return (await eI.Bo.get({ url: eV.j.SUMMARIES(e), rejectWithError: !0 })).body;
    } catch {
        return { state: "unavailable", summaries: [], public_status: null };
    }
}
function eQ(e) {
    let { summary: n, disabled: t, onRemove: l, preview: i = !1, lookup: a = !1 } = e,
        u = (0, m.bG)([Z.A], () => Z.A.getChannel(n.channel.id), [n.channel.id]),
        d = (0, Y.Ay)(u) ?? s.intl.string(s.t["/YzI63"]),
        c = u?.type === et.rbe.GUILD_ANNOUNCEMENT ? eC.AnnouncementsIcon : eT.TextIcon,
        o = s.intl.formatToPlainString(r.default.BINkaq, { title: n.title }),
        h =
            n.key_points?.filter((e) => {
                let { point: n } = e;
                return n.trim().length > 0;
            }) ?? [];
    return (0, C.jsxs)(D.B, {
        gap: 8,
        padding: i ? 0 : { top: 16, bottom: 20 },
        className: i ? eq.tq : eq.z,
        role: i ? void 0 : "listitem",
        children: [
            (0, C.jsxs)(D.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 8,
                children: [
                    (0, C.jsxs)(D.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        wrap: !0,
                        className: eq.Qs,
                        children: [
                            (0, C.jsx)(c, { size: "xs", color: B.A.colors.TEXT_SUBTLE }),
                            (0, C.jsx)(O.E, { variant: "body-sm/semibold", color: "text-subtle", children: d }),
                            (0, C.jsxs)(O.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: [
                                    " \xb7 ",
                                    s.intl.formatToPlainString(r.default["31AOSO"], {
                                        people: n.activity.user_count,
                                        date: eN()(n.activity.ended_at).fromNow(),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i
                        ? null
                        : (0, C.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              fullWidth: !1,
                              className: eq.kC,
                              children: [
                                  (0, C.jsx)(eh.m, {
                                      text: s.intl.string(r.default["6vB9E2"]),
                                      children: (0, C.jsx)(eo.Anchor, {
                                          href: n.detail_url,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          "aria-label": s.intl.string(r.default["6vB9E2"]),
                                          className: eq.Dl,
                                          children: (0, C.jsx)(eM.LinkExternalSmallIcon, {
                                              size: "sm",
                                              color: "currentColor",
                                          }),
                                      }),
                                  }),
                                  a
                                      ? null
                                      : (0, C.jsx)(eh.m, {
                                            text: o,
                                            children: (0, C.jsx)(w.K, {
                                                icon: eR.TrashIcon,
                                                "aria-label": o,
                                                variant: "icon-only",
                                                size: "sm",
                                                disabled: t,
                                                onClick: () => l?.(n),
                                            }),
                                        }),
                              ],
                          }),
                ],
            }),
            (0, C.jsx)(F.D, { variant: "heading-sm/semibold", children: n.title }),
            (0, C.jsx)("ul", {
                className: eq.WR,
                children: (h.length > 0
                    ? h.map((e) => {
                          let { point: n } = e;
                          return n;
                      })
                    : [n.brief_summary]
                ).map((e, n) =>
                    (0, C.jsx)("li", { children: (0, C.jsx)(O.E, { variant: "body-md/normal", children: e }) }, n),
                ),
            }),
            null != n.reactions && n.reactions.length > 0
                ? (0, C.jsx)(D.B, {
                      direction: "horizontal",
                      gap: 8,
                      wrap: !0,
                      children: n.reactions.map((e) => {
                          let { emoji: n, count: t } = e;
                          return (0, C.jsxs)(
                              D.B,
                              {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 4,
                                  padding: { left: "xs", right: "xs", top: "xxs", bottom: "xxs" },
                                  fullWidth: !1,
                                  className: eq.mJ,
                                  children: [
                                      (0, C.jsx)(eK.A, {
                                          emojiId: n.id,
                                          emojiName: n.name,
                                          animated: n.animated,
                                          size: "reaction",
                                      }),
                                      (0, C.jsx)(O.E, { variant: "body-xs/medium", children: t }),
                                  ],
                              },
                              n.id ?? n.name,
                          );
                      }),
                  })
                : null,
            a
                ? (0, C.jsx)(eB.$, {
                      text: s.intl.string(r.default.LGCOmh),
                      variant: "critical-primary",
                      disabled: t,
                      onClick: () => l?.(n),
                  })
                : null,
            i
                ? null
                : (0, C.jsx)(D.B, {
                      direction: "horizontal",
                      justify: "end",
                      padding: { top: 8 },
                      className: eq.Eb,
                      children: (0, C.jsx)(O.E, {
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
function eJ(e) {
    let { channelId: n, selected: t, onSelect: l } = e,
        i = (0, m.bG)([Z.A], () => Z.A.getChannel(n), [n]),
        a = (0, Y.Ay)(i) ?? s.intl.string(s.t["/YzI63"]);
    return (0, C.jsx)(D.B, {
        gap: 0,
        className: t ? `${eq.Ix} ${eq.rM}` : eq.Ix,
        children: (0, C.jsx)(eB.$, {
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
function e0(e) {
    let {
            result: n,
            disabled: t,
            onRemove: l,
            contentRef: i,
            onClose: a,
            children: u,
            lookupPanel: d,
            lookupActive: c,
            onLookup: o,
            onBrowse: h,
        } = e,
        m = f.useRef(null),
        [g, x] = f.useState(null),
        p = f.useMemo(
            () =>
                [...(n?.summaries ?? [])].sort(
                    (e, n) => Date.parse(n.activity.ended_at) - Date.parse(e.activity.ended_at),
                ),
            [n],
        ),
        E = f.useMemo(() => [...new Set(p.map((e) => e.channel.id))], [p]),
        j = null != g && E.includes(g) ? g : null;
    return (0, C.jsxs)("div", {
        className: eq.T,
        children: [
            (0, C.jsxs)(D.B, {
                gap: 0,
                className: eq.pz,
                children: [
                    (0, C.jsx)(D.B, {
                        padding: { left: 24, right: 12 },
                        justify: "center",
                        className: eq.ZO,
                        children: (0, C.jsx)(F.D, {
                            variant: "heading-sm/semibold",
                            children: s.intl.string(r.default["+ELXr0"]),
                        }),
                    }),
                    (0, C.jsxs)(D.B, {
                        as: "nav",
                        padding: { top: 20, bottom: 20, left: 8, right: 8 },
                        gap: 4,
                        className: eq.BM,
                        "aria-label": s.intl.string(r.default["+ELXr0"]),
                        children: [
                            (0, C.jsx)(D.B, {
                                gap: 0,
                                className: c || null != j ? eq.Ix : `${eq.Ix} ${eq.rM}`,
                                children: (0, C.jsx)(eB.$, {
                                    fullWidth: !0,
                                    text: s.intl.string(r.default.kGOOse),
                                    icon: eO.ChannelListIcon,
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-pressed": !c && null == j,
                                    onClick: () => {
                                        (x(null), h());
                                    },
                                }),
                            }),
                            E.map((e) =>
                                (0, C.jsx)(
                                    eJ,
                                    {
                                        channelId: e,
                                        selected: !c && e === j,
                                        onSelect: () => {
                                            (x(e), h());
                                        },
                                    },
                                    e,
                                ),
                            ),
                        ],
                    }),
                    (0, C.jsxs)(D.B, {
                        gap: 12,
                        padding: 16,
                        className: eq.SZ,
                        children: [
                            (0, C.jsx)(F.D, {
                                variant: "heading-xs/semibold",
                                children: s.intl.string(r.default.pvuST8),
                            }),
                            (0, C.jsx)(eB.$, {
                                text: s.intl.string(r.default.SncNRE),
                                variant: "secondary",
                                size: "sm",
                                "aria-pressed": c,
                                onClick: o,
                            }),
                        ],
                    }),
                ],
            }),
            (0, C.jsxs)(D.B, {
                gap: 0,
                className: eq.dT,
                children: [
                    (0, C.jsxs)(D.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        padding: { left: 24, right: 8 },
                        className: eq.KE,
                        children: [
                            c
                                ? (0, C.jsx)(F.D, {
                                      variant: "heading-xs/semibold",
                                      children: s.intl.string(r.default.pvuST8),
                                  })
                                : (0, C.jsx)(ek.Y, {
                                      targetElementRef: m,
                                      position: "bottom",
                                      align: "left",
                                      renderPopout: (e) => {
                                          let { closePopout: n } = e;
                                          return (0, C.jsx)(eD.W, {
                                              navId: "pinot-summary-sort",
                                              "aria-label": s.intl.string(r.default.WSGINd),
                                              onClose: n,
                                              onSelect: n,
                                              children: (0, C.jsx)(ew.iD, {
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
                                          return (0, C.jsx)(eB.$, {
                                              onClick: n,
                                              onMouseDown: t,
                                              "aria-controls": a,
                                              onKeyDown: l,
                                              "aria-expanded": i,
                                              "aria-haspopup": "menu",
                                              buttonRef: m,
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
                                children: (0, C.jsx)(w.K, {
                                    icon: eF.XLargeIcon,
                                    "aria-label": s.intl.string(s.t.cpT0Cq),
                                    variant: "icon-only",
                                    size: "sm",
                                    onClick: a,
                                }),
                            }),
                        ],
                    }),
                    (0, C.jsxs)(D.B, {
                        gap: 12,
                        padding: { top: 8, right: 24, bottom: 24, left: 24 },
                        className: eq.v2,
                        tabIndex: -1,
                        ref: i,
                        children: [
                            c ? d : u,
                            c || n?.state !== "live"
                                ? null
                                : (0, C.jsx)(ex.F, {
                                      children: (0, C.jsx)(D.B, {
                                          gap: 0,
                                          role: "list",
                                          "aria-label": s.intl.string(r.default["+ELXr0"]),
                                          children: p
                                              .filter((e) => null == j || e.channel.id === j)
                                              .map((e) =>
                                                  (0, C.jsx)(eQ, { summary: e, disabled: t, onRemove: l }, e.id),
                                              ),
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e1(e) {
    return (0, a.Mx)(e.guildId, "guild_settings_summary_management") ? (0, C.jsx)(e2, { ...e }) : null;
}
function e2(e) {
    let n = f.useRef(null);
    return (0, C.jsx)(ex.F, {
        children: (0, C.jsxs)(D.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: 16,
            as: "section",
            children: [
                (0, C.jsxs)(D.B, {
                    gap: 4,
                    className: eq.Qs,
                    children: [
                        (0, C.jsx)(F.D, { variant: "heading-sm/medium", children: s.intl.string(r.default.Bz71mg) }),
                        (0, C.jsx)(O.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: s.intl.string(r.default["49TARv"]),
                        }),
                    ],
                }),
                (0, C.jsx)(eB.$, {
                    text: s.intl.string(r.default["+dSZbK"]),
                    buttonRef: n,
                    variant: "secondary",
                    size: "sm",
                    onClick: () => (0, eL.qf)((t) => (0, C.jsx)(e6, { ...e, ...t, returnRef: n })),
                }),
            ],
        }),
    });
}
function e4(e) {
    let { guildId: n, channels: t, disabled: l, onRemove: i, success: a } = e,
        [u, d] = f.useState(""),
        [c, o] = f.useState(null),
        [h, m] = f.useState(null),
        [g, x] = f.useState(null),
        [p, E] = f.useState(!1),
        [j, b] = f.useState(a),
        y = f.useRef(null),
        v = f.useRef(0),
        A = en(
            f.useMemo(
                () =>
                    t.map((e) => {
                        let { channelId: n } = e;
                        return n;
                    }),
                [t],
            ),
        ),
        _ = f.useMemo(
            () =>
                A.map((e) => {
                    let { channel: n, name: t } = e;
                    return { id: n.id, value: n.id, label: t.length > 0 ? t : n.id };
                }),
            [A],
        ),
        S = /^\d+$/.test(u.trim());
    function N() {
        ((v.current += 1), E(!1), m(null), x(null), b(!1));
    }
    async function I() {
        let e = ++v.current;
        (m(null), x(null), b(!1));
        let t = (function (e, n) {
            let t = e.trim();
            if (eX(t)) return null == n ? null : { conversationId: t, channelId: n };
            try {
                let e = t.startsWith("/topics/") ? new URL(t, "https://discord.com") : new URL(t),
                    n = e.pathname.match(/^\/topics\/([1-9]\d{0,18})\/([1-9]\d{0,18})\/?$/);
                if (
                    null != n &&
                    "https:" === e.protocol &&
                    e$.A.isDiscordHostname(e.hostname) &&
                    "" === e.port &&
                    "" === e.username &&
                    "" === e.password &&
                    eX(n[1]) &&
                    eX(n[2])
                )
                    return { conversationId: n[2], channelId: n[1] };
            } catch {}
            return null;
        })(u, c);
        if (null == t) return void x(s.intl.string(r.default["/L1Zem"]));
        E(!0);
        try {
            let l = await (async function (e, n, t) {
                return (await eI.Bo.get({ url: eV.j.SUMMARY(e, t), query: { channel_id: n }, rejectWithError: !0 }))
                    .body;
            })(n, t.channelId, t.conversationId);
            if (e !== v.current) return;
            (m(l.summary),
                "found" !== l.state && x(s.intl.string("removed" === l.state ? r.default.zWelAV : r.default.PlmztH)));
        } catch (t) {
            if (e !== v.current) return;
            let n = t.status;
            x(s.intl.string(404 === n ? r.default.rMTw10 : 400 === n ? r.default["/L1Zem"] : r.default.g307sl));
        } finally {
            e === v.current && E(!1);
        }
    }
    return (
        f.useEffect(() => {
            y.current?.focus();
        }, []),
        f.useEffect(
            () => () => {
                v.current += 1;
            },
            [n],
        ),
        (0, C.jsxs)(D.B, {
            gap: 16,
            children: [
                (0, C.jsx)(O.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: s.intl.string(r.default.Ai3shX),
                }),
                j
                    ? (0, C.jsx)(D.B, {
                          gap: 0,
                          role: "status",
                          "aria-live": "polite",
                          children: (0, C.jsx)(O.E, {
                              variant: "body-md/medium",
                              children: s.intl.string(r.default["1mJqX+"]),
                          }),
                      })
                    : null,
                (0, C.jsx)(ez.k, {
                    label: s.intl.string(r.default["Huen+/"]),
                    inputRef: y,
                    error: g,
                    value: u,
                    disabled: l,
                    onChange: (e) => {
                        (N(), d(e));
                    },
                    onKeyDown: (e) => {
                        "Enter" !== e.key || p || l || (e.preventDefault(), I());
                    },
                }),
                S
                    ? (0, C.jsx)(eG.l, {
                          label: s.intl.string(r.default.QYyKH7),
                          selectionMode: "single",
                          clearable: !0,
                          value: c,
                          options: _,
                          onSelectionChange: (e) => {
                              (N(), o(e));
                          },
                          disabled: l,
                      })
                    : null,
                (0, C.jsx)(eB.$, {
                    text: s.intl.string(r.default.bToMNg),
                    variant: "secondary",
                    disabled: l || p,
                    onClick: I,
                }),
                (0, C.jsx)(D.B, {
                    gap: 0,
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": p,
                    children: p
                        ? (0, C.jsx)(O.E, { variant: "body-sm/normal", children: s.intl.string(r.default.FXzsGB) })
                        : null,
                }),
                null != h
                    ? (0, C.jsx)(D.B, {
                          gap: 0,
                          role: "list",
                          "aria-label": s.intl.string(r.default.rPS02g),
                          children: (0, C.jsx)(eQ, { summary: h, disabled: l, onRemove: i, lookup: !0 }),
                      })
                    : null,
            ],
        })
    );
}
function e6(e) {
    let { guildId: n, disabled: t, savedFeatures: l, ...i } = e,
        [a, u] = f.useState(null),
        [d, c] = f.useState(0),
        [o, h] = f.useState(!1),
        [m, g] = f.useState(!1),
        x = f.useRef(0),
        p = f.useRef(null),
        E = f.useCallback(async () => {
            let e = ++x.current,
                t = await eZ(n);
            e === x.current && u(t);
        }, [n]);
    function j(e) {
        let t = !1;
        (0, eL.qf)(
            (l) =>
                (0, C.jsx)(eH.u, {
                    ...l,
                    returnRef: p,
                    title: s.intl.string(r.default.YbNQ4h),
                    subtitle: s.intl.string(r.default.DEN16e),
                    preview: (0, C.jsx)(ex.F, {
                        children: (0, C.jsxs)(D.B, {
                            gap: 8,
                            children: [
                                (0, C.jsx)(O.E, {
                                    variant: "body-sm/medium",
                                    children: s.intl.string(r.default.rPS02g),
                                }),
                                (0, C.jsx)("div", {
                                    className: eq.VH,
                                    children: (0, C.jsx)(eQ, { summary: e, preview: !0 }),
                                }),
                            ],
                        }),
                    }),
                    confirmText: s.intl.string(r.default["Gt2OY/"]),
                    onCloseCallback: () => {
                        t && p.current?.focus({ preventScroll: !0 });
                    },
                    onConfirm: async () => {
                        (await (async function (e, n) {
                            await eI.Bo.post({
                                url: eV.j.REMOVE_SUMMARY(e, n.id),
                                body: { channel_id: n.channel.id },
                                rejectWithError: !0,
                            });
                        })(n, e),
                            await E(),
                            g(!0),
                            c((e) => e + 1),
                            (t = !0));
                    },
                }),
            { stackingBehavior: "stack" },
        );
    }
    f.useEffect(() => {
        let e = !0,
            t = ++x.current;
        return (
            !(async function () {
                let l = await eZ(n);
                e && t === x.current && u(l);
            })(),
            () => {
                ((e = !1), (x.current += 1));
            }
        );
    }, [n, l]);
    let b = null != a && "live" !== a.state ? eY[a.state] : null,
        y =
            a?.public_status === "not_live_yet"
                ? r.default.CfhSPp
                : a?.public_status === "disabled"
                  ? r.default.KedXb5
                  : null,
        v = (0, C.jsxs)(e0, {
            result: a,
            lookupActive: o,
            onLookup: () => {
                (g(!1), c((e) => e + 1), h(!0));
            },
            onBrowse: () => h(!1),
            lookupPanel: (0, C.jsx)(
                e4,
                { guildId: n, channels: l.channel_summaries.channels, success: m, disabled: t, onRemove: j },
                d,
            ),
            disabled: t,
            onRemove: j,
            contentRef: p,
            onClose: i.onClose,
            children: [
                m
                    ? (0, C.jsx)(D.B, {
                          gap: 0,
                          role: "status",
                          "aria-live": "polite",
                          children: (0, C.jsx)(O.E, {
                              variant: "body-md/medium",
                              children: s.intl.string(r.default["1mJqX+"]),
                          }),
                      })
                    : null,
                a?.state !== "live"
                    ? (0, C.jsx)(D.B, {
                          gap: 12,
                          role: "status",
                          "aria-live": "polite",
                          children:
                              null == a
                                  ? (0, C.jsx)(O.E, {
                                        variant: "body-sm/normal",
                                        children: s.intl.string(r.default.FXzsGB),
                                    })
                                  : null != b
                                    ? (0, C.jsxs)(D.B, {
                                          gap: 8,
                                          padding: 16,
                                          children: [
                                              (0, C.jsx)(O.E, {
                                                  variant: "body-md/medium",
                                                  children: s.intl.string(b[0]),
                                              }),
                                              (0, C.jsx)(O.E, {
                                                  variant: "body-sm/normal",
                                                  color: "text-subtle",
                                                  children: s.intl.string(b[1]),
                                              }),
                                              "unavailable" === a.state
                                                  ? (0, C.jsx)(eB.$, {
                                                        text: s.intl.string(r.default.D2f6wh),
                                                        variant: "secondary",
                                                        onClick: E,
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                      })
                    : null,
                a?.state === "live" && null != y
                    ? (0, C.jsx)(eU.w, { type: "info", role: "status", message: s.intl.format(y, {}) })
                    : null,
            ],
        });
    return (0, C.jsx)(eW.d, {
        ...i,
        size: "xl",
        maxHeight: "viewport",
        "aria-label": s.intl.string(r.default["+ELXr0"]),
        children: v,
    });
}
function e7(e) {
    let { guildId: n, disabled: t } = e,
        u = (0, a.C)(n, "guild_settings"),
        { features: d, saving: c } = (0, m.cf)([l.A], () => ({ features: l.A.getFeatures(n), saving: l.A.isSaving() }));
    f.useEffect(() => {
        u && (0, i.FD)(n);
    }, [u, n]);
    let o = f.useRef(null);
    return (f.useEffect(() => {
        if (u && null != d && o.current !== n && ((o.current = n), null == l.A.getFocusReturnFeatureKey()))
            for (let e of K.P) (0, U.Dv)(n, "section", e, d[e], l.A.getDraft(n, e));
    }, [u, d, n]),
    u && null != d)
        ? (0, C.jsxs)(C.Fragment, {
              children: [
                  (0, C.jsx)(G.c, {}),
                  (0, C.jsxs)(D.B, {
                      gap: 32,
                      children: [
                          (0, C.jsxs)(D.B, {
                              gap: 4,
                              children: [
                                  (0, C.jsxs)(D.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, C.jsx)(ex.F, {
                                              children: (0, C.jsx)(F.D, {
                                                  variant: "heading-sm/medium",
                                                  children: s.intl.string(r.default.OLNu03),
                                              }),
                                          }),
                                          (0, C.jsx)(ep.E, { type: "new", variant: "primary" }),
                                      ],
                                  }),
                                  (0, C.jsx)(O.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      children: s.intl.string(r.default.yTP3YK),
                                  }),
                              ],
                          }),
                          K.P.map((e) => (0, C.jsx)(e_, { guildId: n, featureKey: e, disabled: t || c }, e)),
                          (0, C.jsx)(e1, { guildId: n, disabled: t || c, savedFeatures: d }, n),
                      ],
                  }),
              ],
          })
        : null;
}
function e3() {
    let { submitting: e, saveFailed: n } = (0, m.cf)([l.A], () => ({
        submitting: l.A.isSaving(),
        saveFailed: l.A.saveFailed(),
    }));
    return { submitting: e, errorMessage: n ? s.intl.string(s.t.MDtgYB) : void 0 };
}
let e5 = [l.A];
function e8(e) {
    return l.A.hasChanges(e);
}
