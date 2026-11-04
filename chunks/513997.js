l.d(n, {
    Hd: () => I.H,
    yw: () => T.y,
    Nk: () => ec,
    KT: () => eE,
    _x: () => eC,
    F1: () => d,
    gy: () => ej,
    DT: () => eT,
    um: () => i.um,
    ZF: () => h.Z,
    Dq: () => o.D,
    RI: () => c,
    GH: () => x,
    oM: () => C,
    yf: () => eI,
});
var t = l(131904),
    i = l(865785),
    a = l(677166),
    r = l(137005),
    u = l(792996);
function s(e) {
    return "" !== e ? e : null;
}
function d(e) {
    return (0, a.fk)(e, "guild_settings") ? s(u.intl.string(r.default.tdhddn)) : null;
}
function c(e) {
    if (!(0, a.C)(e, "guild_settings")) return null;
    let n = s(u.intl.string(r.default.tdhddn)),
        l = s(u.intl.string(r.default.pOYEzT));
    return null != n && null != l ? { title: n, description: l } : null;
}
var o = l(396022),
    h = l(96787),
    f = l(582128),
    g = l(855986),
    E = l(73153);
let m = new Set();
class A extends g.Ay.PersistedStore {
    static displayName = "PinotMemberNoticeAckStore";
    static persistKey = "PinotMemberNoticeAckStore";
    initialize(e) {
        m = new Set(e?.ackedChannelIds ?? []);
    }
    getState() {
        return { ackedChannelIds: Array.from(m) };
    }
    isHidden(e) {
        return m.has(e) || m.size >= 2;
    }
}
let _ = new A(E.h, {
    PINOT_MEMBER_NOTICE_ACK: function (e) {
        let { channelId: n } = e;
        if (m.has(n)) return !1;
        m = new Set([...m, n]);
    },
});
var p = l(542744),
    N = l(84877),
    y = l(885902),
    S = l(56919);
let b = { visible: !1 };
function x(e, n) {
    let l = (0, y.F)(e, n),
        t = (0, a.Hg)(null != l ? e?.guild_id : null, n),
        i = (0, N.Z)(e),
        r = (0, S.m)(e, n),
        u = t && i && !r ? l : null,
        s = (0, g.bG)([_], () => null != u && _.isHidden(u), [u]),
        d = f.useCallback(() => {
            null != u && (0, p.G)(u);
        }, [u]);
    return f.useMemo(() => (null == u || s ? b : { visible: !0, dismiss: d }), [u, s, d]);
}
function C() {
    return (0, g.bG)([t.A], () => t.A.getOpenFeatureKey());
}
var I = l(464075),
    T = l(698940),
    j = l(477900),
    v = l(503698),
    M = l.n(v),
    O = l(939249),
    R = l(646514),
    F = l(834730),
    P = l(658675),
    D = l(331322),
    k = l(408278),
    L = l(477155),
    B = l(534514),
    H = l(123292),
    G = l(683438),
    w = l(404778),
    U = l(975571),
    K = l(391523),
    z = l(210470),
    V = l(22464),
    W = l(713654);
function Z(e) {
    let { channel: n, ...l } = e,
        t = (0, W.gU)(n);
    return null == t ? null : (0, j.jsx)(t, { ...l, "aria-hidden": !0 });
}
let q = { [V.y.CHANNEL_SUMMARIES]: r.default["+ELXr0"], [V.y.CHANNEL_MESSAGES]: r.default.HvBP0Z },
    X = { [V.y.CHANNEL_SUMMARIES]: r.default.uImIFo, [V.y.CHANNEL_MESSAGES]: r.default.nHVK4t };
var Y = l(47167),
    Q = l(734057),
    $ = l(994500),
    J = l(287809),
    ee = l(403362);
function en(e) {
    let n = (0, g.yK)([Q.A], () => e.map((e) => Q.A.getChannel(e)).filter(ee.Vq), [e]),
        l = (0, g.yK)([J.default, $.A], () => n.map((e) => (0, Y.m1)(e, J.default, $.A)), [n]);
    return f.useMemo(() => n.map((e, n) => ({ channel: e, name: l[n] })), [n, l]);
}
var el = l(652215),
    et = l(217494);
let ei = { [V.y.CHANNEL_SUMMARIES]: r.default["vgmc/d"], [V.y.CHANNEL_MESSAGES]: r.default.MFxb27 };
function ea(e) {
    let { channel: n, name: l, checked: t, disabled: i, onToggle: a } = e;
    return (0, j.jsxs)(O.D, {
        role: "checkbox",
        "aria-checked": t,
        "aria-disabled": i,
        className: M()(et.WG, { [et.GC]: i }),
        onClick: i ? void 0 : () => a(n.id, !t),
        children: [
            (0, j.jsx)(Z, { channel: n, size: "xs", color: R.A.colors.ICON_SUBTLE }),
            (0, j.jsx)(F.E, {
                variant: "body-md/medium",
                color: "text-default",
                lineClamp: 1,
                className: et.HA,
                children: l,
            }),
            (0, j.jsx)(P.P, { checked: t, disabled: i }),
        ],
    });
}
function er() {
    (0, i.lF)(null);
}
function eu(e) {
    let { featureTitle: n } = e;
    return (0, j.jsxs)(D.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        children: [
            (0, j.jsx)(k.K, {
                icon: L.r,
                "aria-label": u.intl.string(u.t["13/7kX"]),
                variant: "icon-only",
                size: "sm",
                onClick: er,
            }),
            (0, j.jsx)("nav", {
                "aria-label": u.intl.string(u.t["bM+M/m"]),
                className: et.m7,
                children: (0, j.jsxs)(D.B, {
                    as: "ol",
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    role: "list",
                    className: et.jD,
                    children: [
                        (0, j.jsxs)(D.B, {
                            as: "li",
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            className: et.QF,
                            children: [
                                (0, j.jsx)(O.D, {
                                    onClick: er,
                                    className: et.WU,
                                    children: (0, j.jsx)(F.E, {
                                        variant: "body-md/normal",
                                        color: "none",
                                        lineClamp: 1,
                                        children: u.intl.string(r.default.tdhddn),
                                    }),
                                }),
                                (0, j.jsx)(F.E, {
                                    variant: "body-md/normal",
                                    color: "interactive-text-default",
                                    "aria-hidden": !0,
                                    children: "/",
                                }),
                            ],
                        }),
                        (0, j.jsx)("li", {
                            "aria-current": "page",
                            className: et.RF,
                            children: (0, j.jsx)(F.E, {
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
function es(e) {
    let { featureKey: n, featureTitle: l } = e,
        t = f.useRef(null);
    return (
        f.useEffect(() => {
            let e = t.current;
            null != e && ((e.tabIndex = -1), e.focus());
        }, [t, n]),
        (0, j.jsxs)(D.B, {
            gap: 4,
            children: [
                (0, j.jsx)(B.D, { ref: t, variant: "heading-lg/medium", children: l }),
                (0, j.jsx)(F.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: u.intl.format(X[n], { learnMoreURL: U.A.getArticleURL(el.MVz.SERVER_WEB_PAGES_ADMIN) }),
                }),
            ],
        })
    );
}
function ed(e) {
    let { guildId: n, featureKey: l, feature: t, draft: a, disabled: s } = e,
        [d, c] = f.useState(""),
        o = f.useId(),
        h = en(f.useMemo(() => (0, z.Dq)(t), [t])),
        g = a.includedChannelIds,
        E = h.map((e) => {
            let { channel: n } = e;
            return n.id;
        }),
        m = E.filter((e) => g.has(e)).length,
        A = E.length > 0 && m === E.length,
        _ = d.trim().toLocaleLowerCase(),
        p = h.filter((e) => {
            let { name: n } = e;
            return n.toLocaleLowerCase().includes(_);
        });
    function N(e, t) {
        let a = new Set(g);
        for (let n of e) t ? a.add(n) : a.delete(n);
        (0, i.lv)(n, l, { includedChannelIds: a });
    }
    return (0, j.jsxs)(D.B, {
        gap: 16,
        children: [
            (0, j.jsxs)(D.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, j.jsx)(F.E, {
                        id: o,
                        variant: "body-md/medium",
                        color: "text-default",
                        children: u.intl.string(ei[l]),
                    }),
                    E.length > 0
                        ? (0, j.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, j.jsx)("span", {
                                      "aria-live": "polite",
                                      "aria-atomic": "true",
                                      children: (0, j.jsx)(F.E, {
                                          tag: "span",
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: u.intl.format(r.default.KaAdWl, { count: m }),
                                      }),
                                  }),
                                  (0, j.jsx)(F.E, {
                                      tag: "span",
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": "true",
                                      children: "\u2022",
                                  }),
                                  (0, j.jsx)(H.Q, {
                                      text: u.intl.string(A ? r.default.MECJZo : u.t.l4rqaz),
                                      textVariant: "body-sm/semibold",
                                      onClick: () => N(E, !A),
                                      disabled: s,
                                      "aria-describedby": o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            E.length > 0
                ? (0, j.jsxs)(D.B, {
                      gap: 8,
                      children: [
                          (0, j.jsx)(G.I, {
                              query: d,
                              onChange: c,
                              onClear: () => c(""),
                              placeholder: u.intl.string(u.t.wM7uRI),
                              "aria-label": u.intl.string(u.t.wM7uRI),
                          }),
                          (0, j.jsxs)("div", {
                              children: [
                                  p.length > 0
                                      ? (0, j.jsx)("div", {
                                            role: "group",
                                            "aria-labelledby": o,
                                            className: et.o5,
                                            children: p.map((e, n) => {
                                                let { channel: l, name: t } = e;
                                                return (0, j.jsxs)(
                                                    f.Fragment,
                                                    {
                                                        children: [
                                                            n > 0 ? (0, j.jsx)(w.c, {}) : null,
                                                            (0, j.jsx)(ea, {
                                                                channel: l,
                                                                name: t,
                                                                checked: g.has(l.id),
                                                                disabled: s,
                                                                onToggle: (e, n) => N([e], n),
                                                            }),
                                                        ],
                                                    },
                                                    l.id,
                                                );
                                            }),
                                        })
                                      : null,
                                  (0, j.jsx)("div", {
                                      "aria-live": "polite",
                                      children:
                                          0 === p.length
                                              ? (0, j.jsx)(F.E, {
                                                    variant: "body-sm/normal",
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
    let { guildId: n, featureKey: l, disabled: i } = e,
        {
            feature: a,
            draft: r,
            saving: s,
        } = (0, g.cf)([t.A], () => ({
            feature: t.A.getFeatures(n)?.[l] ?? null,
            draft: t.A.getDraft(n, l),
            saving: t.A.isSaving(),
        })),
        d = f.useRef(null);
    f.useEffect(() => {
        null != a && null != r && d.current !== l && ((d.current = l), (0, K.Dv)(n, "channel_list", l, a, r));
    }, [n, l, a, r]);
    let c = u.intl.string(q[l]);
    return (0, j.jsxs)(D.B, {
        gap: 48,
        children: [
            (0, j.jsx)(eu, { featureTitle: c }),
            (0, j.jsxs)(D.B, {
                gap: 24,
                children: [
                    (0, j.jsx)(es, { featureKey: l, featureTitle: c }),
                    null != a && null != r
                        ? (0, j.jsx)(ed, { guildId: n, featureKey: l, feature: a, draft: r, disabled: i || s })
                        : null,
                ],
            }),
        ],
    });
}
var eo = l(28863),
    eh = l(866665),
    ef = l(789645),
    eg = l(26005);
function eE(e) {
    let { channel: n, onDismiss: l } = e,
        t = u.intl.string(u.t.WAI6xu);
    return (
        f.useEffect(() => {
            (0, K.Ws)({ noticeType: "member_channel", channel: n });
        }, [n.id]),
        (0, j.jsxs)("div", {
            className: eg.M0,
            children: [
                (0, j.jsx)("span", { className: eg.UE, "aria-hidden": !0 }),
                (0, j.jsx)(F.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    className: eg.Qq,
                    children: u.intl.format(r.default.XRu92R, {
                        learnMoreHook: (e, l) =>
                            (0, j.jsx)(
                                eo.Anchor,
                                {
                                    href: U.A.getArticleURL(el.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                                    onClick: () =>
                                        (0, K.Yy)({ noticeType: "member_channel", channel: n }, "learn_more"),
                                    children: e,
                                },
                                l,
                            ),
                    }),
                }),
                (0, j.jsx)(eh.m, {
                    text: t,
                    asContainer: !0,
                    children: (0, j.jsx)(k.K, {
                        "aria-label": t,
                        icon: ef.P,
                        variant: "icon-only",
                        size: "sm",
                        onClick: function () {
                            ((0, K.Yy)({ noticeType: "member_channel", channel: n }, "dismiss"), l());
                        },
                    }),
                }),
            ],
        })
    );
}
var em = l(707554),
    eA = l(805251);
l(321073);
var e_ = l(3666),
    ep = l(143129),
    eN = l(881636),
    ey = l(405597);
let eS = [];
function eb(e) {
    let { channels: n } = e,
        l = f.useMemo(() => {
            let e = n.slice(0, 3).map((e) => ({ ...e, key: e.channel.id }));
            return (n.length > 3 && e.push(u.intl.formatToPlainString(u.t.F6iMs4, { count: n.length - 3 })), e);
        }, [n]),
        t = n[0]?.channel.id,
        i = f.useCallback(
            (e) =>
                "string" == typeof e
                    ? (0, j.jsxs)(
                          F.E,
                          { variant: "body-sm/medium", color: "none", className: ey.dX, children: [", ", e] },
                          e,
                      )
                    : (0, j.jsxs)(
                          F.E,
                          {
                              variant: "body-sm/medium",
                              color: "none",
                              className: ey.ph,
                              children: [
                                  e.key !== t ? ", " : null,
                                  (0, j.jsx)(Z, {
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
            [t],
        ),
        a = f.useCallback(
            (e) => i(u.intl.formatToPlainString(u.t.F6iMs4, { count: n.length - l.length + e.length })),
            [i, n.length, l.length],
        );
    return 0 === l.length
        ? (0, j.jsx)(F.E, { variant: "body-sm/medium", color: "none", children: u.intl.string(u.t.PoWNfe) })
        : (0, j.jsx)(e_.ZV, { className: ey.yQ, items: l, renderItem: i, renderOverflow: a, maxLines: 1 });
}
function ex(e) {
    let { guildId: n, featureKey: l, disabled: a } = e,
        { feature: s, draft: d } = (0, g.cf)([t.A], () => ({
            feature: t.A.getFeatures(n)?.[l] ?? null,
            draft: t.A.getDraft(n, l),
        })),
        c = f.useRef(null);
    f.useEffect(() => {
        t.A.getFocusReturnFeatureKey() === l && c.current?.focus();
    }, [l]);
    let o = en(
        f.useMemo(
            () => (null != s && null != d ? (0, z.Dq)(s).filter((e) => d.includedChannelIds.has(e)) : eS),
            [s, d],
        ),
    );
    if (null == s || null == d) return null;
    let h = u.intl.string(q[l]),
        E = o.length;
    return (0, j.jsxs)(D.B, {
        gap: 12,
        children: [
            (0, j.jsxs)(D.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 24,
                children: [
                    (0, j.jsxs)(D.B, {
                        gap: 4,
                        className: ey.oo,
                        "data-disabled": a,
                        children: [
                            (0, j.jsx)(F.E, { variant: "body-md/medium", children: h }),
                            (0, j.jsx)(F.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: u.intl.format(X[l], {
                                    learnMoreURL: U.A.getArticleURL(el.MVz.SERVER_WEB_PAGES_ADMIN),
                                }),
                            }),
                        ],
                    }),
                    (0, j.jsx)(ep.d, {
                        label: h,
                        hideLabel: !0,
                        checked: d.enabled,
                        disabled: a,
                        onChange: (e) => (0, i.lv)(n, l, { enabled: e }),
                    }),
                ],
            }),
            d.enabled
                ? (0, j.jsxs)(O.D, {
                      innerRef: c,
                      className: ey.ag,
                      "aria-label": u.intl.formatToPlainString(r.default["7iIGZ2"], { featureTitle: h, count: E }),
                      onClick: () => (0, i.lF)(l),
                      children: [
                          (0, j.jsx)(F.E, {
                              variant: "body-sm/medium",
                              color: "none",
                              className: ey.Ao,
                              children: u.intl.string(r.default["ZS+NM3"]),
                          }),
                          (0, j.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              gap: 12,
                              fullWidth: !1,
                              className: ey.$n,
                              children: [
                                  (0, j.jsx)(eb, { channels: o }),
                                  (0, j.jsx)(eN.u, { size: "refresh_sm", color: "currentColor" }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eC(e) {
    let { guildId: n, disabled: l } = e,
        s = (0, a.C)(n, "guild_settings"),
        { features: d, saving: c } = (0, g.cf)([t.A], () => ({ features: t.A.getFeatures(n), saving: t.A.isSaving() }));
    f.useEffect(() => {
        s && (0, i.FD)(n);
    }, [s, n]);
    let o = f.useRef(null);
    return (f.useEffect(() => {
        if (s && null != d && o.current !== n && ((o.current = n), null == t.A.getFocusReturnFeatureKey()))
            for (let e of V.P) (0, K.Dv)(n, "section", e, d[e], t.A.getDraft(n, e));
    }, [s, d, n]),
    s && null != d)
        ? (0, j.jsxs)(j.Fragment, {
              children: [
                  (0, j.jsx)(w.c, {}),
                  (0, j.jsxs)(D.B, {
                      gap: 32,
                      children: [
                          (0, j.jsxs)(D.B, {
                              gap: 4,
                              children: [
                                  (0, j.jsxs)(D.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, j.jsx)(em.F, {
                                              children: (0, j.jsx)(B.D, {
                                                  variant: "heading-sm/medium",
                                                  children: u.intl.string(r.default.OLNu03),
                                              }),
                                          }),
                                          (0, j.jsx)(eA.E, { type: "new", variant: "primary" }),
                                      ],
                                  }),
                                  (0, j.jsx)(F.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      children: u.intl.string(r.default.yTP3YK),
                                  }),
                              ],
                          }),
                          V.P.map((e) => (0, j.jsx)(ex, { guildId: n, featureKey: e, disabled: l || c }, e)),
                      ],
                  }),
              ],
          })
        : null;
}
function eI() {
    let { submitting: e, saveFailed: n } = (0, g.cf)([t.A], () => ({
        submitting: t.A.isSaving(),
        saveFailed: t.A.saveFailed(),
    }));
    return { submitting: e, errorMessage: n ? u.intl.string(u.t.MDtgYB) : void 0 };
}
let eT = [t.A];
function ej(e) {
    return t.A.hasChanges(e);
}
