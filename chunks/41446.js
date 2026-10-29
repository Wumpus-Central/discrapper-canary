n.d(t, { A: () => lD, p: () => lk });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(607399),
    d = n(702841),
    c = n(661531),
    u = n(331322),
    o = n(289873),
    x = n(695366),
    m = n(834730),
    h = n(821609),
    f = n(761508),
    j = n(812993);
if (221552 == n.j) var g = n(43990);
if (221552 == n.j) var v = n(177953);
if (221552 == n.j) var A = n(364522);
var E = n(944791),
    p = n(793574),
    N = n(688810),
    T = n(726249),
    S = n(915089),
    I = n(742589),
    y = n(363195),
    b = n(253932),
    _ = n(669067),
    C = n(899847),
    L = n(695515),
    R = n(438732),
    k = n(174459),
    D = n(191627),
    P = n(652215);
let U = {
        [D.u9.ACTIVITY]: "family_center_activity_tab",
        [D.u9.REQUESTS]: "family_center_requests_tab",
        [D.u9.SETTINGS]: "family_center_settings_tab",
        [D.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [D.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [D.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    M = function () {
        return {
            selectedTab: (0, d.bG)([L.A], () => L.A.getSelectedTab()),
            handleTabChange: function (e) {
                (C.Ay.selectTab(e), k.default.track(P.HAw.FAMILY_CENTER_ACTION, { action: D.qb.TabChange, tab: e }));
            },
        };
    };
var F = n(834981),
    O = n(843282),
    G = n(778712),
    w = n(939249),
    V = n(548411),
    z = n(297264),
    H = n(10005),
    B = n(153739),
    Y = n(284009),
    q = n.n(Y),
    Z = n(192308),
    K = n(885574),
    W = n(858899),
    X = n(39623),
    Q = n(935208),
    J = n(864202),
    $ = n(580630),
    ee = n(513687),
    et = n(105292);
function en(e) {
    return new Intl.DateTimeFormat(et.intl.currentLocale, { month: "short", day: "numeric" }).format((0, J.default)(e));
}
var el = n(923531),
    ei = n(294433);
function er(e) {
    return (0, d.bG)([L.A], () => L.A.getTotalForDisplayType(e));
}
function es(e) {
    let t = er(e) ?? 0;
    if (e === D.NV.TOTAL_VOICE_MINUTES) return (0, el.hO)(t);
    if (e === D.NV.PURCHASES) {
        let e = L.A.getTotalSpendAmount(),
            n = L.A.getTotalSpendCurrency();
        return null != e && null != n ? (0, $.RS)(e, n) : t;
    }
    if (e === D.NV.GIFTS) {
        let e = L.A.getTotalGiftValue();
        if (null != e) return (0, $.RS)(e.amount, e.currency);
    }
    return t;
}
var ea = n(500470),
    ed = n(707554),
    ec = n(902546);
let eu = function (e) {
    let { header: t, displayType: n } = e,
        i = er(n),
        r = es(n);
    return (0, l.jsxs)("div", {
        className: ec.hJ,
        children: [
            (0, l.jsx)(z.D, {
                variant: "heading-xxl/medium",
                color: i > 0 ? "text-brand" : "text-muted",
                children: (0, l.jsx)(ed.F, { children: r }),
            }),
            (0, l.jsx)(m.E, { variant: "text-sm/semibold", className: ec.io, children: t }),
        ],
    });
};
var eo = n(821701),
    ex = n(427262),
    em = n(575593),
    eh = n(898461),
    ef = n(203632),
    ej = n(486020),
    eg = n(202541);
function ev(e, t) {
    let n,
        l,
        i = null != t;
    if (null != e)
        ((n = e.name),
            (l = (function (e) {
                switch (e) {
                    case em.R.AVATAR_DECORATION:
                        return et.intl.string(ee.default.obi47v);
                    case em.R.PROFILE_EFFECT:
                        return et.intl.string(ee.default.RX8BMR);
                    case em.R.NAMEPLATE:
                        return et.intl.string(ee.default.nNGEHk);
                    case em.R.BUNDLE:
                        return et.intl.string(ee.default.VS1fKo);
                    case em.R.PROFILE_FRAME:
                        return et.intl.string(ee.default.JiIY1l);
                    default:
                        return "";
                }
            })(e.type)));
    else if (i && null != t) {
        let e = eg.hd[t];
        n = e?.name;
    }
    return { displayName: n, typeName: l, isSubscription: i };
}
var eA = n(34188),
    eE = n(104510),
    ep = n(403581),
    eN = n(253292),
    eT = n(780898),
    eS = n(372320),
    eI = n(665411),
    ey = n(740523);
function eb(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, eh.T)(t) ? (0, ej.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: ey._P });
}
function e_(e) {
    let { displayName: t, nameplateData: n } = e,
        { staticImageUrl: i } = (0, eN.K)(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: ey.M4 });
}
function eC(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, ef.C3)(t) ? t.thumbnailPreviewSrc : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: ey._P });
}
function eL(e) {
    let { product: t } = e,
        n = (0, eS.A)(t.skuId);
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: ey.pI,
              children: (0, l.jsx)("div", { className: ey.ZS, children: (0, l.jsx)(eI.A, { frame: n }) }),
          });
}
function eR(e) {
    let { subscriptionPlanId: t } = e;
    if (null == t) return (0, l.jsx)("div", { className: ey.T8, children: (0, l.jsx)(eA.U, {}) });
    let n = (function (e) {
        if (null == e) return !1;
        let t = eg.hd[e];
        return t?.skuId === eg.pe.GUILD;
    })(t);
    return (0, l.jsx)("div", {
        className: ey.T8,
        children: n
            ? (0, l.jsx)(eE._, { size: "custom", width: 20, height: 20 })
            : (0, l.jsx)(ep.t, { size: "custom", width: 20, height: 20 }),
    });
}
function ek(e) {
    let { displayName: t, product: n } = e;
    if (null == n) return (0, l.jsx)("div", { className: ey.T8, children: (0, l.jsx)(eA.U, {}) });
    switch (n.type) {
        case em.R.AVATAR_DECORATION:
            return (0, l.jsx)(eb, { displayName: t, product: n });
        case em.R.NAMEPLATE:
            let i = (0, eT.EQ)(n);
            return null != i ? (0, l.jsx)(e_, { displayName: t, nameplateData: i }) : null;
        case em.R.PROFILE_EFFECT:
            return (0, l.jsx)(eC, { displayName: t, product: n });
        case em.R.PROFILE_FRAME:
            return (0, l.jsx)(eL, { product: n });
        default:
            return (0, l.jsx)("div", { className: ey.T8, children: (0, l.jsx)(eA.U, {}) });
    }
}
let eD = function (e) {
    let { displayName: t, isSubscription: n, product: i, subscriptionPlanId: r } = e;
    return n ? (0, l.jsx)(eR, { subscriptionPlanId: r }) : (0, l.jsx)(ek, { displayName: t, product: i });
};
var eP = n(271308);
let eU = i.memo((e) => {
    let {
            skuId: t,
            subscriptionPlanId: n,
            price: i,
            gifterUserId: r,
            claimed: a,
            offeredAt: d,
            claimedAt: c,
            className: u,
        } = e,
        { product: o } = (0, eo.A)(t),
        x = (0, B.F7)(r),
        { displayName: h, isSubscription: f } = ev(o ?? null, n);
    if ((null != t && !f && null == o) || null == h) return null;
    let j = (function (e) {
        let { claimed: t, price: n, gifterName: l, offeredAt: i, claimedAt: r } = e,
            s = null != n ? (0, $.$g)(n.amount, n.currency) : null,
            a = null;
        return (
            null != s && null != l
                ? (a = et.intl.formatToPlainString(ee.default["o44n/1"], { price: s, username: l }))
                : null != s && (a = s),
            [
                a,
                t
                    ? et.intl.formatToPlainString(ee.default.kDyllq, { date: en(r ?? i) })
                    : et.intl.formatToPlainString(ee.default.gAG45y, { date: en(i) }),
            ]
                .filter(Boolean)
                .join(" \u2022 ")
        );
    })({ claimed: a, price: i, gifterName: null != x ? ex.Ay.getName(x) : null, offeredAt: d, claimedAt: c });
    return (0, l.jsxs)("div", {
        className: s()(eP.k, u),
        children: [
            (0, l.jsx)(eD, { displayName: h, isSubscription: f, product: o ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(m.E, { variant: "text-md/semibold", children: h }),
                    (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-subtle", children: j }),
                ],
            }),
        ],
    });
});
eU.displayName = "FamilyCenterActivityGiftRow";
var eM = n(900002),
    eF = n(714991),
    eO = n(23339),
    eG = n(97808),
    ew = n(260509),
    eV = n(601360);
let ez = [18, 18, 16, 16, 14, 12, 10],
    eH = function (e) {
        let { guildId: t } = e,
            n = (0, d.bG)([L.A], () => L.A.getGuild(t));
        if (void 0 === n) return null;
        let { name: i } = n,
            r = (0, ew.Iv)(n, 40, !0),
            s = null,
            a = 10;
        return (
            null == n.icon && null != i && (a = ez[(s = (0, eO.oN)(i)).length - 1] ?? ez[ez.length - 1]),
            (0, l.jsx)("div", {
                className: eV.k,
                children: (0, l.jsxs)("div", {
                    style: { fontSize: a },
                    children: [
                        null != s ? (0, l.jsx)("div", { className: eV.X, "aria-hidden": !0, children: s }) : null,
                        null != r ? (0, l.jsx)(eG.eu, { src: r, size: G._3.SIZE_40, "aria-hidden": !0 }) : null,
                    ],
                }),
            })
        );
    };
var eB = n(85909);
let eY = i.memo((e) => {
    let { guildId: t, className: n, customSubtext: i } = e,
        r = (0, d.bG)([L.A], () => L.A.getGuild(t));
    if (void 0 === r) return null;
    let a = r.features.has(P.GuildFeatures.VERIFIED) || r.features.has(P.GuildFeatures.PARTNERED),
        { name: c } = r;
    return (0, l.jsxs)("div", {
        className: s()(eB.kL, n),
        children: [
            (0, l.jsx)(eH, { guildId: t }),
            (0, l.jsxs)("div", {
                className: eB.$z,
                children: [
                    (0, l.jsxs)("div", {
                        className: eB.wx,
                        children: [
                            a
                                ? (0, l.jsx)(eF.A, {
                                      guild: r,
                                      tooltipPosition: "bottom",
                                      tooltipColor: eM.ST.Colors.PRIMARY,
                                      className: eB.n2,
                                  })
                                : null,
                            (0, l.jsx)(m.E, { variant: "text-md/semibold", children: c }),
                        ],
                    }),
                    (0, l.jsx)(m.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children:
                            null != i
                                ? i
                                : void 0 !== r.approximateMemberCount
                                  ? et.intl.format(ee.default["5JmNgg"], { members: r.approximateMemberCount })
                                  : null,
                    }),
                ],
            }),
        ],
    });
});
eY.displayName = "FamilyCenterActivityGuildRow";
var eq = n(748695);
let eZ = i.memo((e) => {
    let { skuId: t, subscriptionPlanId: n, total: i, currency: r, className: a } = e,
        { product: d } = (0, eo.A)(t),
        { displayName: c, typeName: u, isSubscription: o } = ev(d ?? null, n);
    if ((null != t && !o && null == d) || null == c) return null;
    let x = (0, $.$g)(i, r);
    return (0, l.jsxs)("div", {
        className: s()(eq.k, a),
        children: [
            (0, l.jsx)(eD, { displayName: c, isSubscription: o, product: d ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(m.E, { variant: "text-md/semibold", children: null != u ? `${c} \u{2022} ${u}` : c }),
                    (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-subtle", children: x }),
                ],
            }),
        ],
    });
});
eZ.displayName = "FamilyCenterActivityPurchaseRow";
var eK = n(287809),
    eW = n(283900),
    eX = n(467719);
let eQ = i.memo((e) => {
    let { userId: t, subText: n, className: i } = e,
        r = (0, d.bG)([eK.default], () => eK.default.getUser(t));
    return void 0 === r
        ? null
        : (0, l.jsxs)("div", {
              className: s()(eX.k, i),
              children: [
                  (0, l.jsx)(eW.H, { user: r, avatarSize: G._3.SIZE_40 }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: eX.$,
                          children: [
                              (0, l.jsx)(m.E, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: ex.Ay.getName(r),
                              }),
                              null != n &&
                                  (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                          ],
                      }),
                  }),
              ],
          });
});
eQ.displayName = "FamilyCenterActivityUserRow";
var eJ = n(475833),
    e$ = n(584144),
    e0 = n(221851);
let e1 = function (e) {
    let { text: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: s()(n, e$.I),
        children: [
            (0, l.jsx)("img", { className: e$.S, src: "/assets/f47ef22a8aeff32a.svg", alt: "" }),
            (0, l.jsx)(m.E, { className: e0.Ot, variant: "text-sm/medium", color: "text-muted", children: t }),
        ],
    });
};
var e3 = n(683063),
    e2 = n(372777);
let e9 = function (e) {
    let { userId: t, dmsSent: n, callCount: i } = e,
        r = (0, d.bG)([eK.default], () => eK.default.getUser(t));
    return void 0 === r
        ? null
        : (0, l.jsx)(e3.u, {
              title: r.username,
              body: (0, el.fq)(n, i),
              asContainer: !0,
              children: (0, l.jsx)("div", {
                  className: e2.k,
                  children: (0, l.jsx)(eW.H, { user: r, avatarSize: G._3.SIZE_40 }),
              }),
          });
};
var e8 = n(326851);
let e5 = function () {
    let e = (0, d.bG)([L.A], () => L.A.getTopUserActivities()),
        t = (0, d.bG)([L.A], () => L.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: e8.kL,
              children: [
                  e.length > 0 &&
                      (0, l.jsxs)("div", {
                          className: e8.A2,
                          children: [
                              (0, l.jsx)(z.D, {
                                  variant: "text-md/medium",
                                  className: e8.bV,
                                  children: et.intl.string(ee.default.BxbvS7),
                              }),
                              (0, l.jsx)("div", {
                                  className: e8.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, l.jsx)(eQ, {
                                                userId: e[0].user_id,
                                                subText: (0, el.fq)(e[0].dms_sent, e[0].call_count),
                                                className: e8.q3,
                                            })
                                          : e.map((e) =>
                                                (0, l.jsx)(
                                                    e9,
                                                    { userId: e.user_id, dmsSent: e.dms_sent, callCount: e.call_count },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, l.jsxs)("div", {
                          className: e8.A2,
                          children: [
                              (0, l.jsx)(z.D, {
                                  variant: "text-md/medium",
                                  className: e8.bV,
                                  children: et.intl.string(ee.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, l.jsx)(eY, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, el.fq)(t[0].messages_sent, t[0].call_count),
                                        className: e8._S,
                                    })
                                  : (0, l.jsx)("div", {
                                        className: e8.Ce,
                                        children: t.map((e) => {
                                            let t = L.A.getGuild(e.guild_id),
                                                n = t?.name ?? "Unknown Server";
                                            return (0, l.jsx)(
                                                e3.u,
                                                {
                                                    title: n,
                                                    body: (0, el.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, l.jsx)(eH, { guildId: e?.guild_id }),
                                                },
                                                e.guild_id,
                                            );
                                        }),
                                    }),
                          ],
                      }),
              ],
          });
};
var e7 = n(700582),
    e6 = n(238304);
function e4() {
    let e = i.useCallback(() => {
        (0, Z.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("166894"), n.e("160106")]).then(n.bind(n, 853809));
            return (t) => (0, l.jsx)(e, { ...t });
        });
    }, []);
    return (0, l.jsx)(w.D, {
        className: e7.YL,
        onClick: e,
        children: (0, l.jsx)(K.CircleInformationIcon, {
            size: "custom",
            color: "currentColor",
            className: e7.Kk,
            width: 15,
            height: 15,
        }),
    });
}
function te(e) {
    let { displayType: t } = e,
        n = i.useCallback(() => {
            (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
        }, []),
        r = (0, R.A)(),
        a = (0, d.yK)([L.A], () => L.A.getActionsForDisplayType(t)),
        c = er(t),
        u = es(t),
        { loadMore: x, isMoreLoading: h } = (0, H.A)({ onError: n }),
        f = (0, el.kN)().get(t),
        [j, g] = i.useState(D.PH),
        v = i.useCallback(() => {
            (g((e) => e + D.PH), x(t));
        }, [t, x]);
    q()(null != f, `No text for action type: ${t}`);
    let A = (t === D.NV.PURCHASES || t === D.NV.GIFTS) && null != u ? f.sectionHeader(u) : f.sectionHeader(c),
        E = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = a[t];
                if ((0, el.aq)(n)) {
                    let e = Q.default.extractTimestamp(n.event_id),
                        t = (0, el.i6)(e, f.timestampFormatter);
                    return (0, l.jsx)(eQ, { userId: n.entity_id, subText: t }, n.event_id);
                }
                if ((0, el.Is)(n)) return (0, l.jsx)(eY, { guildId: n.entity_id }, n.event_id);
                if ((0, el.u7)(n)) {
                    let e = L.A.getPurchaseInfo(n.entity_id);
                    return null == e
                        ? null
                        : (0, l.jsx)(
                              eZ,
                              {
                                  skuId: e.sku_id,
                                  subscriptionPlanId: e.subscription_plan_id,
                                  total: e.total,
                                  currency: e.currency,
                              },
                              n.event_id,
                          );
                }
                if ((0, el.FT)(n)) {
                    let e = L.A.getGiftInfo(n.entity_id);
                    if (null == e) return null;
                    let {
                        skuId: t,
                        subscriptionPlanId: i,
                        price: r,
                        gifterUserId: s,
                        claimed: a,
                        offeredAt: d,
                        claimedAt: c,
                    } = {
                        skuId: e.sku_id,
                        subscriptionPlanId: e.subscription_plan_id,
                        price: e.price,
                        gifterUserId: e.gifter_user_id,
                        claimed: e.claimed,
                        offeredAt: e.offered_at,
                        claimedAt: e.claimed_at,
                    };
                    return (0, l.jsx)(
                        eU,
                        {
                            skuId: t,
                            subscriptionPlanId: i,
                            price: r,
                            gifterUserId: s,
                            claimed: a,
                            offeredAt: d,
                            claimedAt: c,
                        },
                        n.event_id,
                    );
                }
                return null;
            },
            [a, f.timestampFormatter],
        ),
        p = i.useCallback(
            () =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(m.E, { className: e7.bV, variant: "text-md/semibold", children: A }),
                        void 0 !== f.sectionDescription
                            ? (0, l.jsx)(m.E, {
                                  className: e7.yV,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: f.sectionDescription(r ?? !1),
                              })
                            : null,
                    ],
                }),
            [A, f, r],
        );
    if (0 === a.length) return null;
    let N = a.slice(0, j);
    return (0, l.jsxs)("div", {
        className: e7.A2,
        children: [
            p(),
            (0, l.jsx)("div", {
                className: e7.o1,
                style: { maxHeight: 65 * N.length },
                children: N.map((e, t) => E({ row: t })),
            }),
            N.length < c
                ? (0, l.jsx)(w.D, {
                      className: s()(e7.FQ, { [e7.r9]: h }),
                      onClick: v,
                      role: "button",
                      "aria-disabled": h,
                      children: h
                          ? (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: e7.u1 })
                          : (0, l.jsx)(m.E, {
                                className: e7.UX,
                                variant: "text-sm/bold",
                                children: et.intl.format(ee.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - N.length, D.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
function tt() {
    let e = (0, R.A)(),
        t = (0, F.vx)(),
        n = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["7hqFl9"], { activeLinks: t.length }),
            et.intl.string(ee.default["Q/D/0Q"]),
        ),
        i = (0, el.cV)(!!e),
        r = (0, F.v4)(i);
    return e && t.length > 1
        ? (0, l.jsx)(m.E, { variant: "eyebrow", children: r })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  e ? null : (0, l.jsx)(X.EyeIcon, { size: "xs", color: "currentColor", className: e7.Kk }),
                  (0, l.jsx)(m.E, { variant: "eyebrow", children: n }),
              ],
          });
}
let tn = i.memo((e) => {
    let { userId: t, subText: n, avatarSize: i = G._3.SIZE_40, hideUserTag: r = !1 } = e,
        s = (0, B.F7)(t);
    return void 0 === s
        ? null
        : (0, l.jsxs)("div", {
              className: e7.iO,
              children: [
                  (0, l.jsx)(eW.H, { user: s, avatarSize: i }),
                  (0, l.jsxs)("div", {
                      className: e7.TK,
                      children: [
                          (0, l.jsx)(eJ.A, { user: s, hideUserTag: r }),
                          void 0 !== n
                              ? (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-muted", children: n })
                              : null,
                      ],
                  }),
              ],
          });
});
function tl() {
    let e = (0, F.GR)(),
        t = (0, d.bG)([L.A], () => L.A.getSelectedTeenId()),
        { selectTeenUser: n } = (0, H.A)({}),
        r = e.map((e) => ({ label: e.id, value: e.id })),
        s = i.useCallback((e) => (0, l.jsx)(tn, { userId: e.value, avatarSize: G._3.SIZE_24 }), []);
    return (0, l.jsx)(O.Pw, {
        className: e7.Lt,
        renderOptionLabel: s,
        renderOptionValue: (e) => {
            let [t] = e;
            return s(t);
        },
        serialize: (e) => e,
        select: function (e) {
            (n(e), k.default.track(P.HAw.FAMILY_CENTER_ACTION, { action: D.qb.SelectTeen }));
        },
        isSelected: (e) => e === t,
        options: r,
        "data-migration-pending": !0,
    });
}
function ti() {
    let e = (0, ea.k)(),
        t = (0, R.A)(),
        n = (0, F.vx)(),
        i = (0, el.cV)(!!t),
        r = (0, F.v4)(i);
    return null === e ? null : t && 1 !== n.length ? (0, l.jsx)(tl, {}) : (0, l.jsx)(tn, { userId: e, subText: r });
}
tn.displayName = "FamilyCenterActivityCardAccountRow";
let tr = function () {
    let e = (0, el.Mo)(),
        t = (0, d.bG)([L.A], () => Object.values(D.NV).some((e) => L.A.getTotalForDisplayType(e) > 0)),
        n = (0, el.jp)(),
        i = (0, F.v4)(n);
    return (0, l.jsxs)("div", {
        className: e7.kL,
        children: [
            (0, l.jsxs)("div", { className: e7.vF, children: [(0, l.jsx)(tt, {}), (0, l.jsx)(e4, {})] }),
            (0, l.jsxs)("div", {
                className: e6.a,
                children: [
                    (0, l.jsx)("div", { className: e7.wx, children: (0, l.jsx)(ti, {}) }),
                    (0, l.jsxs)(u.B, {
                        gap: 32,
                        padding: 32,
                        fullWidth: !1,
                        children: [
                            (0, l.jsx)("div", {
                                className: e7.O2,
                                children: e
                                    .filter((e) => {
                                        let [t] = e;
                                        return t !== D.NV.GIFTS;
                                    })
                                    .map((e) => {
                                        let [t, n] = e;
                                        return (0, l.jsx)(
                                            eu,
                                            { displayType: t, header: n.tooltipHeader() },
                                            `counter-${t}`,
                                        );
                                    }),
                            }),
                            (0, l.jsxs)("div", {
                                className: e7.RJ,
                                children: [
                                    (0, l.jsx)(e5, {}),
                                    t
                                        ? e.map((e) => {
                                              let [t] = e;
                                              return (0, l.jsx)(te, { displayType: t }, `${t}-list`);
                                          })
                                        : (0, l.jsx)(e1, { className: e7.RL, text: i ?? "" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var ts = n(373554);
function ta() {
    let e = (0, F.vx)(),
        t = (0, B.y3)(),
        { selectTeenUser: n } = (0, H.A)({}),
        r = e.map((e) => ({ label: e, value: e })),
        a = i.useCallback((e) => (0, l.jsx)(tn, { userId: e.value, avatarSize: G._3.SIZE_24, hideUserTag: !0 }), []);
    return 0 === e.length
        ? null
        : (0, l.jsx)("div", {
              className: s()(ts.Gq, { [ts.wS]: e.length > 1 }),
              children:
                  e.length > 1
                      ? (0, l.jsx)(O.Pw, {
                            renderOptionLabel: a,
                            renderOptionValue: (e) => {
                                let [t] = e;
                                return a(t);
                            },
                            serialize: (e) => e,
                            select: function (e) {
                                n(e);
                            },
                            isSelected: (e) => e === t?.id,
                            options: r,
                            "data-migration-pending": !0,
                        })
                      : (0, l.jsx)(tn, { userId: e[0], avatarSize: G._3.SIZE_24, hideUserTag: !0 }),
          });
}
function td() {
    let { selectedTab: e, handleTabChange: t } = M(),
        n = i.useCallback(() => {
            t(D.u9.ACTIVITY);
        }, [t]);
    return (0, l.jsxs)(u.B, {
        gap: 32,
        children: [
            (0, l.jsxs)(w.D, {
                className: ts.Gv,
                onClick: n,
                "aria-label": et.intl.string(et.t.ybUZql),
                children: [
                    (0, l.jsx)(V.Z, { size: "sm", color: c.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    (0, l.jsx)(m.E, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: et.intl.string(et.t["13/7kX"]),
                    }),
                ],
            }),
            (0, l.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, l.jsxs)(u.B, {
                        gap: 4,
                        className: ts.gn,
                        children: [
                            (0, l.jsx)(m.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: et.intl.string(ee.default.RZqaJn),
                            }),
                            (0, l.jsx)(z.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: et.intl.string(e === D.u9.CONTENT_AND_SOCIAL ? et.t["+o1pDZ"] : et.t.OAuOHD),
                            }),
                        ],
                    }),
                    (0, l.jsx)(ta, {}),
                ],
            }),
        ],
    });
}
var tc = n(404778),
    tu = n(110057);
let to = function (e) {
    let { children: t, title: n, description: i } = e;
    return (0, l.jsxs)("div", {
        className: tu.L1,
        children: [
            (null != n || null != i) &&
                (0, l.jsxs)("div", {
                    className: tu.Km,
                    children: [
                        null != n &&
                            (0, l.jsx)(z.D, { variant: "heading-lg/semibold", color: "text-strong", children: n }),
                        null != i && (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                    ],
                }),
            (0, l.jsx)("div", { className: tu.Yq, children: t }),
            (0, l.jsx)(tc.c, { className: tu.yj }),
        ],
    });
};
var tx = n(280668);
function tm(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: tx.y, children: t });
}
var th = n(389462),
    tf = n(464946),
    tj = n(750994),
    tg = n(171316);
function tv() {
    let e = (0, tg.KK)(),
        t = (0, ea.k)() ?? void 0,
        n = (0, tg.NZ)();
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: n ? et.intl.string(et.t.PMsfcH) : et.intl.string(et.t.RAQUSN),
            note: n ? et.intl.string(et.t.XXGmuB) : et.intl.string(et.t.wbYDfT),
            value: !e,
            onChange: function (e) {
                th.yr.updateControlledSetting(t, !e);
            },
        }),
    });
}
var tA = n(379257),
    tE = n(306537),
    tp = n(953298),
    tN = n(975571);
function tT() {
    let e = (0, ea.k)() ?? void 0,
        t = (0, tg.KK)(),
        n = th.ES.useControlledSetting(e);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(et.t["3o2ojh"]),
            value: !t && !n,
            onChange: (t) => {
                !t && (0, tp.w)()
                    ? tA.A.showAgeVerificationGetStartedModal({ entryPoint: tE.q1.MESSAGE_REQUESTS_SETTINGS })
                    : th.ES.updateControlledSetting(e, !t);
            },
            disabled: t,
            note: et.intl.format(et.t.IoztJ0, { helpdeskArticle: tN.A.getArticleURL(P.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
var tS = n(665260),
    tI = n(115063);
function ty() {
    let e = (0, ea.k)() ?? void 0,
        t = th.up.useControlledSetting(e),
        n = i.useMemo(() => (0, tI.Lx)(t), [t]);
    return null == e
        ? null
        : (0, l.jsxs)(tm, {
              children: [
                  (0, l.jsx)(tf.h, {
                      children: (0, l.jsx)(tj.Ay, {
                          title: et.intl.string(et.t["7x9dyE"]),
                          value: n.all,
                          onChange: (t) => th.up.updateControlledSetting(e, t ? P.yKI : P.yKI & ~P.dzt.NO_RELATION),
                      }),
                  }),
                  (0, l.jsx)(tf.h, {
                      children: (0, l.jsx)(tj.Ay, {
                          title: et.intl.string(et.t.NfeuZ3),
                          value: n.all || n.mutualFriends,
                          onChange: (n) =>
                              th.up.updateControlledSetting(
                                  e,
                                  n
                                      ? tS.UI(t, P.dzt.MUTUAL_FRIENDS)
                                      : tS.iE(t, P.dzt.MUTUAL_FRIENDS, P.dzt.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, l.jsx)(tf.h, {
                      children: (0, l.jsx)(tj.Ay, {
                          title: et.intl.string(et.t.qsMfsH),
                          value: n.all || n.mutualGuilds,
                          onChange: (n) =>
                              th.up.updateControlledSetting(
                                  e,
                                  n ? tS.UI(t, P.dzt.MUTUAL_GUILDS) : tS.iE(t, P.dzt.MUTUAL_GUILDS, P.dzt.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
var tb = n(444802),
    t_ = n(875162),
    tC = n(873298),
    tL = n(389737),
    tR = n(566769),
    tk = n(704724);
function tD() {
    let e = (0, ea.k)(),
        t = (0, tg.xs)(),
        n = [
            { value: tC.TO.BLUR, label: et.intl.string(et.t.S49Uad) },
            { value: tC.TO.BLOCK, label: et.intl.string(et.t["D/157Y"]) },
        ];
    if (null == t || null == e) return null;
    function i(t) {
        null != e && (0, tk.Jz)(e, t);
    }
    let { explicitContentFriendDm: r, explicitContentNonFriendDm: s } = t;
    return (0, l.jsxs)(tL.E, {
        description: et.intl.string(et.t.Wnojv1),
        children: [
            (0, l.jsx)(tR.A, {
                title: et.intl.string(et.t["+uI23H"]),
                value: r,
                onChange: (e) => i({ explicitContentFriendDm: e }),
                options: n,
            }),
            (0, l.jsx)(tR.A, {
                title: et.intl.string(et.t["Yh+HX1"]),
                value: s,
                onChange: (e) => i({ explicitContentNonFriendDm: e }),
                options: n,
            }),
        ],
    });
}
function tP() {
    let e = (0, ea.k)(),
        t = (0, tg.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: i } = t;
    function r(t) {
        null != e && (0, tk.qY)(e, t);
    }
    let s = [
        { value: tC.TO.BLUR, label: et.intl.string(et.t.S49Uad) },
        { value: tC.TO.BLOCK, label: et.intl.string(et.t["D/157Y"]) },
    ];
    return (0, l.jsxs)(tL.E, {
        description: et.intl.string(et.t.XgH9eh),
        children: [
            (0, l.jsx)(tR.A, {
                title: et.intl.string(et.t["+uI23H"]),
                value: n,
                onChange: (e) => r({ goreContentFriendDm: e }),
                options: s,
            }),
            (0, l.jsx)(tR.A, {
                title: et.intl.string(et.t["Yh+HX1"]),
                value: i,
                onChange: (e) => r({ goreContentNonFriendDm: e }),
                options: s,
            }),
        ],
    });
}
var tU = n(309318);
function tM() {
    let e = (0, tb.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: et.intl.string(et.t.GYpoAq),
                component: () => (0, l.jsx)(tD, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: et.intl.string(et.t["16/3Bi"]),
                component: () => (0, l.jsx)(tP, {}),
                orientation: "vertical",
            },
        ];
    return (0, l.jsxs)(tf.h, {
        children: [
            (0, l.jsx)(tf._, {
                header: et.intl.string(et.t["Hj/But"]),
                description: et.intl.format(et.t["H/Icz+"], { learnMoreLink: tN.A.getArticleURL(e) }),
            }),
            (0, l.jsx)(t_.A, { tabs: t, orientation: "vertical", tabsClassName: tU.v }),
        ],
    });
}
let tF = function () {
    return (0, l.jsxs)(u.B, {
        gap: 32,
        children: [
            (0, l.jsx)(td, {}),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(to, { title: et.intl.string(et.t.xVRG4P), children: (0, l.jsx)(tM, {}) }),
                    (0, l.jsx)(to, {
                        title: et.intl.string(et.t["y62Z/d"]),
                        children: (0, l.jsxs)(tm, { children: [(0, l.jsx)(tv, {}), (0, l.jsx)(tT, {})] }),
                    }),
                    (0, l.jsx)(to, { title: et.intl.string(et.t["1Qn8iV"]), children: (0, l.jsx)(ty, {}) }),
                ],
            }),
        ],
    });
};
function tO() {
    let { hasConsented: e, updateConsent: t } = (0, tg.lH)(P.YAq.PERSONALIZATION);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(ee.default.XMPqUx),
            note: et.intl.format(ee.default.Imp6Ns, {
                helpdeskArticle: tN.A.getArticleURL(P.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
function tG() {
    let e = (0, ea.k)() ?? void 0,
        t = th.yH.useControlledSetting(e),
        n = th.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, l.jsx)(tf.h, {
              children: (0, l.jsx)(tj.Ay, {
                  title: et.intl.string(et.t.CyLYKZ),
                  note: et.intl.format(ee.default["6mK5Pz"], {
                      helpdeskArticle: tN.A.getArticleURL(P.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => th.yH.updateControlledSetting(e, !t),
                  disabled: n,
              }),
          });
}
function tw() {
    let e = (0, ea.k)() ?? void 0,
        t = th.kf.useControlledSetting(e);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(ee.default.ZhaNu8),
            note: et.intl.format(ee.default.cnCK6b, {
                helpdeskArticle: tN.A.getArticleURL(P.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => th.kf.updateControlledSetting(e, !t),
        }),
    });
}
function tV() {
    let { hasConsented: e, updateConsent: t } = (0, tg.lH)(P.YAq.USAGE_STATISTICS);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(ee.default.HjstRR),
            note: et.intl.format(ee.default.Z5yJZy, {
                helpdeskArticle: tN.A.getArticleURL(P.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: e,
            onChange: t,
        }),
    });
}
let tz = function () {
    return (0, l.jsxs)(u.B, {
        gap: 32,
        children: [
            (0, l.jsx)(td, {}),
            (0, l.jsx)("div", {
                children: (0, l.jsxs)(to, {
                    title: et.intl.string(et.t.SRZyHg),
                    children: [(0, l.jsx)(tV, {}), (0, l.jsx)(tw, {}), (0, l.jsx)(tG, {}), (0, l.jsx)(tO, {})],
                }),
            }),
        ],
    });
};
var tH = n(582394),
    tB = n(141006),
    tY = n(17928),
    tq = n(173936),
    tZ = n(964486),
    tK = n(957565),
    tW = n(765548),
    tX = n(647219);
function tQ() {
    return (0, F.xr)() ? null : (0, l.jsx)(tJ, {});
}
function tJ() {
    let e,
        t = i.useCallback(() => {
            (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
        }, []),
        { getLinkCode: r } = (0, H.A)(),
        s = (0, F.VE)(),
        a = (0, tY.bG)([L.A], () => L.A.getLinkCodeExpiresAt());
    ((0, tZ.Ay)(() => {
        r();
    }),
        (e = (0, tW.A)(r)),
        i.useEffect(() => {
            if (null == a) return;
            let t = a - Date.now();
            if (t <= 0) return void e();
            let n = setTimeout(e, t);
            return () => clearTimeout(n);
        }, [a, e]));
    let d = i.useCallback(() => {
            ((0, Z.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("262546"),
                    n.e("776915"),
                    n.e("595429"),
                    n.e("816075"),
                    n.e("748370"),
                    n.e("689419"),
                    n.e("94570"),
                ]).then(n.bind(n, 414833));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        onLoadError: t,
                        title: et.intl.string(ee.default.aCUVfL),
                        body: et.intl.format(ee.default["2O6ltn"], {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    });
            }),
                k.default.track(P.HAw.FAMILY_CENTER_ACTION, { action: D.qb.ShowQRCodeModal }));
        }, [t]),
        c = i.useCallback(() => {
            null != s &&
                (k.default.track(P.HAw.FAMILY_CENTER_ACTION, { action: D.qb.CopyLink }),
                (0, tK.C)(s, () => (0, W.P0)({ text: et.intl.string(et.t["L/PwZf"]), variant: "success" })));
        }, [s]);
    return (0, l.jsxs)("div", {
        className: tX.U,
        children: [
            (0, l.jsx)(h.$, { icon: tB.y, variant: "primary", text: et.intl.string(ee.default["m/3urB"]), onClick: d }),
            (0, l.jsx)(h.$, {
                icon: tq.LinkIcon,
                variant: "secondary",
                text: et.intl.string(et.t.WqhZss),
                disabled: null == s,
                onClick: c,
            }),
        ],
    });
}
var t$ = n(769062);
function t0() {
    let e = (0, F.Li)(),
        t = (0, R.A)(),
        { handleTabChange: n } = M();
    return (0, F.xr)() || (t && e)
        ? null
        : (0, l.jsx)("div", {
              className: t$.x6,
              children: t
                  ? (0, l.jsx)(h.$, {
                        variant: "primary",
                        text: et.intl.string(et.t.LhlgY9),
                        onClick: () => n(D.u9.REQUESTS),
                    })
                  : (0, l.jsx)(tQ, {}),
          });
}
let t1 = function () {
    let e = (0, R.A)(),
        t = (0, ei.y)(et.intl.string(ee.default["T7GyW+"]), et.intl.string(ee.default.goKE2b)),
        n = (0, ei.y)(
            et.intl.format(ee.default.MXjDSv, {
                articleLink: "https://support.discord.com/hc/articles/14155060633623",
            }),
            et.intl.format(ee.default.EMCf6j, {
                articleLink: "https://support.discord.com/hc/articles/14155043715735",
            }),
        );
    return (0, l.jsxs)("div", {
        className: s()(t$.kL, e6.a),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", {
                        children: (0, l.jsxs)("div", {
                            className: t$.TK,
                            children: [
                                (0, l.jsx)(z.D, {
                                    variant: "heading-xl/medium",
                                    children: (0, l.jsx)(ed.F, { children: t }),
                                }),
                                (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(t0, {}),
                ],
            }),
            (0, l.jsx)("div", {
                className: t$.F0,
                children: (0, l.jsx)("img", {
                    src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                    alt: et.intl.string(ee.default.ffg6xd),
                }),
            }),
        ],
    });
};
var t3 = n(299628),
    t2 = n(324149);
let t9 = function (e) {
    let { icon: t, iconClassName: n, header: i, description: r } = e;
    return (0, l.jsxs)("div", {
        className: s()(t2.kL, e6.a),
        children: [
            (0, l.jsx)("div", {
                className: t2.n1,
                children: (0, l.jsx)(t, {
                    className: s()(t2.Kk, n),
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.D, {
                        variant: "heading-md/bold",
                        className: t2.wx,
                        children: (0, l.jsx)(ed.F, { children: i }),
                    }),
                    (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-muted", children: r }),
                ],
            }),
        ],
    });
};
var t8 = n(28863),
    t5 = n(683071),
    t7 = n(987197),
    t6 = n(822585);
function t4() {
    (0, et.useSyncMessages)(ee.messagesLoader);
    let e = (0, t7.f)(),
        t = (0, t6.L)()?.daysRemaining ?? null;
    if (!e || null == t || t < 0) return null;
    function n(e, t) {
        return (0, l.jsx)(
            t8.Anchor,
            {
                href: "https://support.discord.com/hc/articles/14155060633623",
                target: "_blank",
                rel: "noreferrer noopener",
                children: e,
            },
            t,
        );
    }
    return (0, l.jsx)("div", {
        "data-parental-consent-notice": !0,
        children: (0, l.jsx)(t5.w, {
            type: "warning",
            message:
                0 === t
                    ? et.intl.format(ee.default.S5kmfO, { learnMoreHook: n })
                    : et.intl.format(ee.default["5jm+T3"], { count: t, learnMoreHook: n }),
            role: "none",
        }),
    });
}
var ne = n(847374),
    nt = n(922529),
    nn = n(780964),
    nl = n(830543),
    ni = n(766075),
    nr = n(219893),
    ns = n(465323),
    na = n(617617),
    nd = n(361157);
function nc(e) {
    let t = (0, tY.bG)([L.A], () => L.A.getMonthlyPurchases());
    return (function (e, t) {
        if (null == e) return { kind: "off" };
        if (0 === e.amount) return { kind: "blocked" };
        let n = e.currency,
            l = (0, $.CE)((0, $.$g)(e.amount, n), eg.WT.MONTH, 1);
        if (t >= e.amount) return { kind: "spent", monthlyText: l };
        let i = ns.yR[e.currency] ?? 2,
            r = e.amount - t;
        return r <= 10 * 10 ** i
            ? {
                  kind: "close-to-limit",
                  monthlyText: l,
                  remainingText: et.intl.formatToPlainString(ee.default["+Q+bU1"], { amount: (0, $.$g)(r, n) }),
              }
            : { kind: "on", monthlyText: l };
    })(e, t?.total_amount ?? 0);
}
var nu = n(534654),
    no = n(327919),
    nx = n(980707),
    nm = n(477782),
    nh = n(943255),
    nf = n(265872),
    nj = n(408278),
    ng = n(365199),
    nv = n(193249),
    nA = n(95396),
    nE = n(585634);
function np(e) {
    let { closePopout: t, onEdit: n, onDelete: i } = e;
    return (0, l.jsxs)(nx.W, {
        "data-menu-migrated": !0,
        "aria-label": et.intl.string(et.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, l.jsx)(nm.Dr, { id: "edit", label: et.intl.string(ee.default.b3DPqg), action: n }),
            (0, l.jsx)(nm.Dr, { id: "delete", label: et.intl.string(ee.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function nN(e) {
    let { rule: t, teenId: r, readOnly: s = !1 } = e,
        a = i.useRef(null),
        d = t?.enabled ?? !0;
    async function c() {
        try {
            await (0, nA.Um)(r, t.ruleId, { enabled: !d });
        } catch {
            (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
        }
    }
    let o = (0, nr.li)(t),
        x = (0, nr.n1)(t.days);
    function h() {
        (0, Z.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("58008"), n.e("777848"), n.e("639231")]).then(
                n.bind(n, 154434),
            );
            return (n) => (0, l.jsx)(e, { ...n, teenId: r, rule: t });
        });
    }
    async function f() {
        try {
            await (0, nA.CS)(r, t.ruleId);
        } catch {
            (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
        }
    }
    return (0, l.jsxs)(u.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        children: [
            (0, l.jsx)("div", { className: nE.X, children: (0, l.jsx)(nh.Z, { size: "md" }) }),
            (0, l.jsxs)(u.B, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, l.jsx)(m.E, { variant: "text-md/medium", children: o }),
                    (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", children: x }),
                ],
            }),
            (0, l.jsxs)(u.B, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !s &&
                        (0, l.jsx)(nf.Y, {
                            targetElementRef: a,
                            renderPopout: (e) => (0, l.jsx)(np, { ...e, onEdit: h, onDelete: f }),
                            position: "bottom",
                            align: "right",
                            animation: nf.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, l.jsx)(nj.K, {
                                    buttonRef: a,
                                    size: "sm",
                                    icon: ng.MoreHorizontalIcon,
                                    variant: "icon-only",
                                    "aria-label": et.intl.string(et.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        (e.stopPropagation(), t(e));
                                    },
                                });
                            },
                        }),
                    (0, l.jsx)("div", {
                        className: nE.m,
                        children: (0, l.jsx)(nv.d, {
                            checked: d,
                            label: et.intl.string(ee.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: c,
                            hasIcon: !0,
                            disabled: s,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var nT = n(12350);
function nS(e) {
    let { title: t, subtitle: n, buttonText: i, onButtonPress: r, readOnly: s = !1 } = e;
    return (0, l.jsxs)(u.B, {
        padding: { top: 12, bottom: 12 },
        justify: "space-between",
        direction: "horizontal",
        align: "center",
        gap: 32,
        children: [
            (0, l.jsxs)(u.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, l.jsx)(m.E, { variant: "text-md/medium", children: t }),
                    null != n && (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? nT.nh : void 0,
                children: (0, l.jsx)(h.$, { text: i, onClick: r, variant: "secondary", size: "sm", disabled: s }),
            }),
        ],
    });
}
function nI(e, t, i) {
    return (0, l.jsx)(nS, {
        title: et.intl.string(ee.default.gMeekL),
        subtitle: (function (e) {
            switch (e.kind) {
                case "off":
                    return et.intl.string(ee.default.YEnpaj);
                case "on":
                    return e.monthlyText;
                case "close-to-limit":
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            e.monthlyText,
                            " \xb7 ",
                            (0, l.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-warning",
                                tag: "span",
                                children: e.remainingText,
                            }),
                        ],
                    });
                case "spent":
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            e.monthlyText,
                            " \xb7 ",
                            (0, l.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                tag: "span",
                                children: et.intl.string(ee.default.Q2msVQ),
                            }),
                        ],
                    });
                case "blocked":
                    return (0, l.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        tag: "span",
                        children: et.intl.string(ee.default.FUu2b0),
                    });
            }
        })(t),
        buttonText: et.intl.string(et.t.bt75uw),
        onButtonPress: () => {
            (0, Z.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("781173"), n.e("387096")]).then(n.bind(n, 638155));
                return (n) => (0, l.jsx)(t, { ...n, teenId: e });
            });
        },
        readOnly: i,
    });
}
function ny(e) {
    let { teenId: t } = e;
    return nI(
        t,
        nc(
            (0, tY.bG)(
                [na.A],
                () => {
                    let e = na.A.settings.safetySettings?.spendingLimitSettings?.oneTimePurchaseLimit;
                    return null == e ? null : { amount: Number(e.amount), currency: e.currency };
                },
                void 0,
                nd.Ky,
            ),
        ),
        !0,
    );
}
function nb(e) {
    let { teenId: t } = e,
        n = th.fD.useControlledSetting(t);
    return nI(t, nc(n));
}
function n_(e) {
    let { teenId: t, readOnly: r = !1 } = e,
        s = (0, B.y3)(),
        a = s?.restrictedSchedule?.rules ?? [],
        d = (0, nr.I2)(a),
        [c, o] = i.useState(d.length > 0);
    function x() {
        (0, Z.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("58008"), n.e("777848"), n.e("639231")]).then(
                n.bind(n, 154434),
            );
            return (n) => (0, l.jsx)(e, { ...n, teenId: t });
        });
    }
    return (i.useEffect(() => {
        d.length > 0 && o(!0);
    }, [d.length]),
    0 === d.length)
        ? (0, l.jsx)(nS, {
              title: et.intl.string(ee.default["1Op+NP"]),
              buttonText: et.intl.string(ee.default.OwFF4o),
              onButtonPress: x,
              readOnly: r,
          })
        : (0, l.jsxs)(u.B, {
              direction: "vertical",
              gap: 0,
              children: [
                  (0, l.jsxs)(w.D, {
                      className: nT.dV,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, l.jsx)("div", {
                              className: nT.WB,
                              children: (0, l.jsxs)(u.B, {
                                  direction: "vertical",
                                  gap: 4,
                                  children: [
                                      (0, l.jsx)(m.E, {
                                          variant: "text-md/medium",
                                          children: et.intl.string(ee.default["1Op+NP"]),
                                      }),
                                      (0, l.jsx)(m.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: et.intl.formatToPlainString(ee.default.XfwcpX, { count: d.length }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: nT.pt,
                              children: (0, l.jsx)(ne.a, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: `${nT.ai} ${c ? nT.hg : ""}`,
                              }),
                          }),
                      ],
                  }),
                  c &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(u.B, {
                                  direction: "vertical",
                                  gap: 16,
                                  padding: { top: 24, bottom: 24 },
                                  children: d.map((e) => (0, l.jsx)(nN, { rule: e, teenId: t, readOnly: r }, e.ruleId)),
                              }),
                              (0, l.jsx)("div", {
                                  className: r ? nT.nh : void 0,
                                  children: (0, l.jsx)(h.$, {
                                      text: et.intl.string(ee.default.OwFF4o),
                                      onClick: x,
                                      variant: "secondary",
                                      size: "sm",
                                      disabled: r,
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
function nC() {
    let e = (0, F.vx)(),
        t = (0, B.y3)();
    function n() {
        (0, ni.openUserSettings)(nn.X.MESSAGING_PERMISSIONS_PANEL);
    }
    return (0, l.jsxs)(u.B, {
        direction: "vertical",
        gap: 0,
        children: [
            (0, l.jsxs)(u.B, {
                padding: { bottom: 12 },
                justify: "space-between",
                direction: "horizontal",
                align: "center",
                gap: 32,
                children: [
                    (0, l.jsxs)(u.B, {
                        direction: "vertical",
                        gap: 4,
                        children: [
                            (0, l.jsx)(m.E, {
                                variant: "text-sm/semibold",
                                children: et.intl.string(ee.default.ahKIJO),
                            }),
                            (0, l.jsx)(m.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children: et.intl.format(ee.default.X9rW0j, {
                                    openSettingsHook: (e, t) => (0, l.jsx)(t8.Anchor, { onClick: n, children: e }, t),
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(h.$, {
                        text: et.intl.formatToPlainString(ee.default.ggcjPR, { count: e.length }),
                        onClick: function () {
                            (0, no.A)(e, nl.default, () =>
                                (0, W.P0)({
                                    text: et.intl.formatToPlainString(ee.default.D1BwNC, { count: e.length }),
                                    variant: "critical",
                                }),
                            );
                        },
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            t?.id != null &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(nt.A, { className: nT.yF }),
                        (0, l.jsx)(ny, { teenId: t.id }),
                        (0, l.jsx)(nt.A, { className: nT.yF }),
                        (0, l.jsx)(n_, { teenId: t.id, readOnly: !0 }),
                    ],
                }),
        ],
    });
}
function nL() {
    let e = (0, B.y3)(),
        t = (0, B.tl)(),
        { handleTabChange: n } = M();
    return (
        i.useEffect(() => {
            e?.id != null && t && C.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(u.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, l.jsx)(m.E, { variant: "text-sm/semibold", children: et.intl.string(ee.default.ahKIJO) }),
                        (0, l.jsx)(m.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: et.intl.string(ee.default.Sv236e),
                        }),
                    ],
                }),
                (0, l.jsx)(nS, {
                    title: et.intl.string(et.t["+o1pDZ"]),
                    buttonText: et.intl.string(et.t.bt75uw),
                    onButtonPress: () => {
                        n(D.u9.CONTENT_AND_SOCIAL);
                    },
                }),
                (0, l.jsx)(nt.A, { className: nT.yF }),
                (0, l.jsx)(nS, {
                    title: et.intl.string(et.t.OAuOHD),
                    buttonText: et.intl.string(et.t.bt75uw),
                    onButtonPress: () => {
                        n(D.u9.DATA_AND_PRIVACY);
                    },
                }),
                e?.id != null &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(nt.A, { className: nT.yF }),
                            (0, l.jsx)(nb, { teenId: e.id }),
                            (0, l.jsx)(nt.A, { className: nT.yF }),
                            (0, l.jsx)(n_, { teenId: e.id }),
                        ],
                    }),
            ],
        })
    );
}
function nR() {
    let e = (0, nu.A)();
    return 0 === (0, F.vx)().length
        ? null
        : (0, l.jsx)("div", { className: nT.kL, children: e ? (0, l.jsx)(nC, {}) : (0, l.jsx)(nL, {}) });
}
var nk = n(768775);
let nD = function () {
    let e = (0, F.vx)().length > 0,
        t = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        n = (0, ei.y)(et.intl.string(ee.default["5RZ8Tq"]), et.intl.string(ee.default.bmhCnL)),
        i = (0, ei.y)(et.intl.string(ee.default.XKnFFq), et.intl.string(ee.default["68zfxD"])),
        r = (0, ei.y)(et.intl.string(ee.default["Rm/6a0"]), et.intl.string(ee.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, l.jsxs)("div", {
              className: nk.kL,
              children: [
                  (0, l.jsx)(t4, {}),
                  e
                      ? null
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { className: nk.vK, children: (0, l.jsx)(t1, {}) }),
                                (0, l.jsxs)("div", {
                                    className: nk.yk,
                                    children: [
                                        (0, l.jsx)(t9, {
                                            icon: tH.M,
                                            header: et.intl.string(ee.default["001l3m"]),
                                            description: n,
                                        }),
                                        (0, l.jsx)(t9, {
                                            icon: X.EyeIcon,
                                            header: et.intl.string(ee.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, l.jsx)(t9, {
                                            icon: tB.y,
                                            header: et.intl.string(ee.default.hhOuMe),
                                            description: r,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, l.jsx)(tr, {}) : (0, l.jsx)(t3.A, { showSectionDescriptions: !0 }),
                  (0, l.jsx)(nR, {}),
              ],
          });
};
n(801541);
var nP = n(889137),
    nU = n(837381),
    nM = n(62617);
function nF(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: s, width: a, height: d, className: c, style: u } = e,
        o = i.useMemo(
            () => (0, nM.H)({ width: a, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [a, d, u],
        );
    return (0, l.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/bb4093f4ae937ad09bc359b162988c3cbb7d49d924073fee7d66a763e738fc67.svg",
        className: (0, nM.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: s ?? "img",
    });
}
var nO = n(475825),
    nG = n(260762),
    nw = n(485947),
    nV = n(426190),
    nz = n(789645),
    nH = n(866665),
    nB = n(883005);
function nY(e) {
    let { icon: t, tooltip: n, onClick: i, className: r } = e;
    return (0, l.jsx)(nH.m, {
        text: n,
        children: (0, l.jsx)(w.D, {
            "aria-label": n,
            onClick: function (e) {
                (e.preventDefault(), e.stopPropagation(), i(e));
            },
            className: s()(nB.hP, r),
            children: (0, l.jsx)(t, { className: nB.Kk, color: "currentColor" }),
        }),
    });
}
var nq = n(854627),
    nZ = n(19575),
    nK = n(218750);
let nW = nZ.Ay.getEnableHardwareAcceleration() ? eG.Js : eG.eu;
function nX(e) {
    let { otherUser: t, status: n } = e,
        i = (0, F.XC)(t.id, n),
        {
            avatarSrc: r,
            avatarDecorationSrc: s,
            eventHandlers: a,
        } = (0, nq.A)({ userId: t.id, size: G._3.SIZE_40, animateOnHover: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ...a,
                children: (0, l.jsx)(nW, {
                    className: nK.my,
                    src: r,
                    avatarDecoration: s,
                    size: G._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, l.jsxs)("div", {
                className: nK.yt,
                children: [
                    (0, l.jsx)("div", { className: nK.Vx, children: (0, l.jsx)(eJ.A, { user: t }) }),
                    (0, l.jsx)(m.E, { color: "text-muted", variant: "text-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var nQ = n(856087);
function nJ(e) {
    let { user: t } = e,
        r = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        s = i.useCallback(() => {
            (q()(void 0 !== r, "User must be logged in to accept a link request"),
                (0, Z.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("321855"), n.e("943139")]).then(n.bind(n, 179950));
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: r, otherUser: t });
                }));
        }, [r, t]);
    return (0, l.jsxs)("div", {
        className: nQ.kL,
        children: [
            (0, l.jsx)("div", { className: nQ.zH, children: (0, l.jsx)(nX, { otherUser: t, status: D.Ef.ACTIVE }) }),
            (0, l.jsx)("div", {
                className: nQ.o1,
                children: (0, l.jsx)(nY, { icon: nz.P, tooltip: et.intl.string(ee.default.l20ZZp), onClick: s }),
            }),
        ],
    });
}
var n$ = n(933832);
function n0(e) {
    let { user: t } = e,
        r = (0, R.A)(),
        s = (0, F.xr)(),
        a = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        c = i.useCallback(() => {
            (q()(void 0 !== a, "User must be logged in to accept a link request"),
                (0, Z.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("916131"), n.e("155738"), n.e("331385")]).then(
                        n.bind(n, 58144),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]),
        u = i.useCallback(() => {
            (q()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Z.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("916131"), n.e("155738"), n.e("384811")]).then(
                        n.bind(n, 389094),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]),
        o = i.useCallback(() => {
            (q()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Z.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("916131"), n.e("155738"), n.e("817219")]).then(
                        n.bind(n, 187278),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]);
    return (0, l.jsxs)("div", {
        className: nQ.kL,
        children: [
            (0, l.jsx)("div", { className: nQ.zH, children: (0, l.jsx)(nX, { otherUser: t, status: D.Ef.PENDING }) }),
            (0, l.jsx)("div", {
                className: nQ.o1,
                children: r
                    ? (0, l.jsx)(nY, { icon: nz.P, tooltip: et.intl.string(ee.default.e5iHmZ), onClick: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              s
                                  ? null
                                  : (0, l.jsx)(nY, {
                                        icon: n$.CheckmarkLargeIcon,
                                        tooltip: et.intl.string(ee.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, l.jsx)(nY, { icon: nz.P, tooltip: et.intl.string(ee.default.bBDeNI), onClick: u }),
                          ],
                      }),
            }),
        ],
    });
}
var n1 = n(615300),
    n3 = n(559106),
    n2 = n(402860),
    n9 = n(487565);
let n8 = function (e) {
    let { userId: t, children: n, isLast: r, className: a } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: u } = (0, N.Ay)(),
        o = i.useCallback(() => {
            (0, n2.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u });
        }, [t, u]);
    function x() {
        c(!0);
    }
    function m() {
        c(!1);
    }
    return (0, l.jsx)(nU.tG, {
        id: t,
        children: (e) =>
            (0, l.jsx)(n3.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(n1.A.div, {
                    style: { opacity: 1 },
                    className: s()(n9.KG, a, { [n9.HV]: r, [n9.vu]: d }),
                    onMouseEnter: x,
                    onMouseLeave: m,
                    onClick: o,
                    ...e,
                    children: n(d),
                }),
            }),
    });
};
var n5 = n(327337),
    n7 = n(375980);
function n6(e) {
    let { header: t, description: n, stepNumber: i } = e;
    return (0, l.jsxs)("div", {
        className: n7.PM,
        children: [
            (0, l.jsx)("div", {
                className: n7.CD,
                children: (0, l.jsx)(z.D, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, l.jsx)(ed.F, { children: i }),
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.D, { variant: "heading-sm/bold", children: (0, l.jsx)(ed.F, { children: t }) }),
                    (0, l.jsx)(m.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                ],
            }),
        ],
    });
}
function n4() {
    return (0, l.jsxs)("div", {
        className: s()(n7.aP, e6.a, n7.dO, n7.p2),
        children: [
            (0, l.jsxs)("div", {
                className: n7.Np,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(z.D, {
                                className: e0.QB,
                                variant: "heading-xl/medium",
                                children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default.pHEnV5) }),
                            }),
                            (0, l.jsx)(m.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: e0.SX,
                                children: et.intl.string(ee.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)(nF, { alt: "", ariaHidden: !0, width: 224, className: n7._u }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: n7.Ci,
                children: [
                    (0, l.jsx)(n6, {
                        header: et.intl.string(ee.default["7xxAni"]),
                        description: et.intl.string(ee.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, l.jsx)(n6, {
                        header: et.intl.string(ee.default["AXgx+a"]),
                        description: et.intl.string(ee.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, l.jsx)(n6, {
                        header: et.intl.string(ee.default.MZn1tG),
                        description: et.intl.string(ee.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function le() {
    let e = (0, F.xr)();
    return (0, l.jsxs)("div", {
        className: s()(n7.aP, e6.a, n7.dO),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.D, {
                        className: e0.QB,
                        variant: "heading-xl/medium",
                        children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default.zUCWEL) }),
                    }),
                    (0, l.jsx)(m.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: e0.SX,
                        children: et.intl.format(ee.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, l.jsx)(tQ, {}),
                ],
            }),
            (0, l.jsx)(nF, { alt: "", ariaHidden: !0, width: 224, className: n7._u }),
        ],
    });
}
function lt(e) {
    let { sectionType: t, sectionTitle: n, requests: r } = e,
        s = i.useRef(null),
        a = `${t}-list`,
        d = (0, nG.A)(a),
        c = i.useCallback(
            (e) => {
                let { row: n, listIndex: i } = e,
                    s = r[n],
                    a = i === r.length;
                return null == s
                    ? null
                    : (0, l.jsx)(
                          n8,
                          {
                              userId: s.id,
                              isLast: a,
                              children: () =>
                                  t === D.Ef.ACTIVE ? (0, l.jsx)(nJ, { user: s }) : (0, l.jsx)(n0, { user: s }),
                          },
                          s.id,
                      );
            },
            [r, t],
        ),
        u = i.useCallback(
            () =>
                (0, l.jsx)(
                    nw.A,
                    {
                        children: (0, l.jsx)(m.E, {
                            className: e0.QB,
                            variant: "eyebrow",
                            color: "text-default",
                            children: n,
                        }),
                    },
                    "title",
                ),
            [n],
        );
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(nU.hD, {
            navigator: d,
            children: (0, l.jsx)(nU.PR, {
                children: (e) => {
                    let { ref: t, role: i, ...d } = e;
                    return (0, l.jsx)(
                        nO.OZ,
                        {
                            innerRole: i,
                            innerAriaLabel: n,
                            ref: (e) => {
                                ((s.current = e), (t.current = e?.getScrollerNode() ?? null));
                            },
                            sectionHeight: D.h4,
                            rowHeight: D.Gg,
                            renderSection: u,
                            renderRow: c,
                            sections: [r.length],
                            chunkSize: 30,
                            fade: !0,
                            ...d,
                        },
                        a,
                    );
                },
            }),
        }),
    });
}
function ln() {
    let e = (0, R.A)(),
        t = (0, F.GR)(),
        n = e ? D.Y7 : D.kp,
        i = { count: t.length, max: n },
        r = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["+tnO34"], i),
            et.intl.formatToPlainString(ee.default["pu6/U0"], i),
        );
    return t.length > 0
        ? (0, l.jsx)(lt, { sectionType: D.Ef.ACTIVE, sectionTitle: r, requests: t })
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(m.E, { className: e0.QB, variant: "eyebrow", color: "text-default", children: r }),
                  (0, l.jsx)("div", {
                      className: n7.aP,
                      children: (0, l.jsx)(m.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          children: et.intl.string(ee.default.C4ScLD),
                      }),
                  }),
              ],
          });
}
function ll() {
    let e = (0, F.xr)(),
        t = (0, R.A)() ? D.Y7 : D.kp,
        n = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["1/PzIj"], { maxConnections: t }),
            et.intl.formatToPlainString(ee.default.RcTgiE, { maxConnections: t }),
        );
    return e
        ? (0, l.jsx)("div", {
              className: n7.rv,
              children: (0, l.jsx)(m.E, { variant: "text-xxs/medium", color: "text-muted", children: n }),
          })
        : null;
}
function li() {
    let e = (0, nV.N)(),
        t = (0, nV.z)(),
        n = (0, nP.YW)({ helpline: e, throughline: t })
            .with({ helpline: !0 }, () =>
                et.intl.format(ee.default["KOwsf/"], {
                    helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                }),
            )
            .with({ throughline: !0 }, () => et.intl.format(ee.default["6tsC8u"], { helpLink: n5.CL }))
            .otherwise(() => null);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(z.D, {
                      className: n7.rH,
                      variant: "heading-sm/semibold",
                      children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default["7/tVhv"]) }),
                  }),
                  (0, l.jsx)(m.E, { variant: "text-xs/medium", color: "text-muted", children: n }),
              ],
          });
}
function lr() {
    let e = (0, F.xk)(D.Ef.PENDING),
        t = (0, ei.y)(
            et.intl.formatToPlainString(ee.default.IkAgkG, { count: e.length }),
            et.intl.formatToPlainString(ee.default.Q8XnAa, { count: e.length }),
        );
    return 0 === e.length ? null : (0, l.jsx)(lt, { sectionType: D.Ef.PENDING, sectionTitle: t, requests: e });
}
let ls = function () {
    let e = (0, R.A)();
    return (0, l.jsxs)("div", {
        className: n7.kL,
        children: [
            (0, l.jsx)(t4, {}),
            e ? (0, l.jsx)(n4, {}) : (0, l.jsx)(le, {}),
            (0, l.jsx)(ln, {}),
            (0, l.jsx)(lr, {}),
            (0, l.jsx)(ll, {}),
            (0, l.jsx)(li, {}),
        ],
    });
};
var la = n(561028),
    ld = n(946015),
    lc = n(270003),
    lu = n(993077),
    lo = n(935286),
    lx = n(840559),
    lm = n(997187),
    lh = n(723923),
    lf = n(629143);
let lj = function () {
    let e = b.dm.useSetting(),
        { categories: t, initialized: n } = (0, tY.cf)([lm.A], () => lm.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == n && (0, lx.cR)();
        }, [n]),
        (0, l.jsx)("div", {
            className: lf.kL,
            children: (0, l.jsxs)(lc.n, {
                label: et.intl.string(ee.default.USIXU7),
                children: [
                    (0, l.jsx)(nv.d, {
                        checked: e,
                        description: et.intl.string(ee.default["5MdB3j"]),
                        onChange: b.dm.updateSetting,
                        label: et.intl.string(ee.default.zkEceS),
                    }),
                    e
                        ? (0, l.jsx)(lu.Z, {
                              className: lf.MT,
                              type: lu.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, l.jsxs)(ld.s, {
                                  justify: ld.s.Justify.END,
                                  children: [
                                      (0, l.jsx)(ld.s.Child, {
                                          children: (0, l.jsx)(m.E, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: et.intl.string(ee.default.xAVm7K),
                                          }),
                                      }),
                                      (0, l.jsx)(w.D, {
                                          children: (0, l.jsx)(la.N_, {
                                              onClick: nl.default,
                                              to: { pathname: P.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: et.intl.string(ee.default.cUIXFY),
                                          }),
                                      }),
                                      (0, l.jsx)(j.fk, { icon: lo.E, className: lf.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, l.jsx)(nv.d, {
                        checked: !!t[lh.HO.FAMILY_CENTER_DIGEST],
                        description: et.intl.string(ee.default.y34S46),
                        onChange: function (e) {
                            (0, lx.CA)(lh.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: et.intl.string(ee.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
var lg = n(731738),
    lv = n(612200),
    lA = n(807393),
    lE = n(210714);
let lp = new (n(941426).Vy)("useRefetchWhenSelectedTeenMissing");
var lN = n(33666),
    lT = n(204925);
function lS(e) {
    let { location: t, onMountEffect: n } = e,
        l = (0, lN.A)(),
        r = (0, F.W1)(),
        {
            familyCenterInitialized: s,
            isLoading: a,
            hasLoadFailed: c,
        } = (0, d.cf)([L.A], () => ({
            familyCenterInitialized: L.A.getIsInitialized(),
            isLoading: L.A.isLoading(),
            hasLoadFailed: L.A.hasInitialLoadFailed(),
        })),
        u = (0, ea.k)(),
        { selectedTab: o, handleTabChange: x } = M(),
        m = eK.default.getCurrentUser(),
        h = null != l,
        f = s && null != m && !h;
    ((0, tZ.Ay)(() => {
        ((0, lE.d0)("family-center"), null != n && n());
    }),
        (function () {
            let {
                    isInitialized: e,
                    isLoading: t,
                    selectedTeenId: n,
                } = (0, tY.cf)([L.A], () => ({
                    isInitialized: L.A.getIsInitialized(),
                    isLoading: L.A.isLoading(),
                    selectedTeenId: L.A.getSelectedTeenId(),
                })),
                l = (0, F.Li)(),
                r = i.useRef(!1);
            i.useEffect(() => {
                if (!l) {
                    r.current = !1;
                    return;
                }
                async function t() {
                    try {
                        await C.Ay.initialPageLoad({ showLoading: !1 });
                    } catch (e) {
                        lp.error("Failed to refetch Family Center for a missing selected teen", e);
                    }
                }
                !e || L.A.isLoading() || null != n || r.current || ((r.current = !0), t());
            }, [e, t, n, l]);
        })());
    let j = { isConsideredAdult: "adult" === l, numOfAcceptedRequests: r, selectedTab: o, selectedTeenId: u },
        g = i.useRef(j);
    return (
        i.useEffect(() => {
            g.current = j;
        }),
        i.useEffect(() => {
            if (s && h) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: l, selectedTeenId: i } = g.current;
                (k.default.track(P.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: i,
                    initial_page: D.zu[l],
                    source: D.iN[t],
                }),
                    lA.A.increment({ name: lg.K.FAMILY_CENTER_VIEW }));
            }
        }, [s, h, t]),
        i.useEffect(() => {
            f && !L.A.isLoading() && (0, lv.yO)(lT.w_.FAMILY_CENTER);
        }, [f, a]),
        { isLoading: a, hasLoadFailed: c, selectedTab: o, handleTabChange: x, showAgeGateModal: f }
    );
}
var lI = n(220330);
let ly = {
        [D.u9.REQUESTS]: ls,
        [D.u9.ACTIVITY]: nD,
        [D.u9.SETTINGS]: lj,
        [D.u9.CONTENT_AND_SOCIAL]: tF,
        [D.u9.DATA_AND_PRIVACY]: tz,
        [D.u9.SCREEN_TIME_CONTROLS]: lj,
    },
    lb = { [D.u9.REQUESTS]: ls, [D.u9.ACTIVITY]: nD, [D.u9.CONTENT_AND_SOCIAL]: tF, [D.u9.DATA_AND_PRIVACY]: tz };
function l_() {
    return (0, l.jsx)(u.B, { justify: "center", align: "center", className: lI.g4, children: (0, l.jsx)(o.y, {}) });
}
function lC(e) {
    let { fillPanel: t = !1 } = e;
    return (0, l.jsxs)(u.B, {
        justify: "center",
        align: "center",
        gap: 24,
        padding: t ? 24 : { top: 96, bottom: 96 },
        className: s()(lI._I, { [lI.TP]: t }),
        role: "alert",
        children: [
            (0, l.jsxs)(u.B, {
                align: "center",
                gap: 12,
                children: [
                    (0, l.jsx)(x.E, { size: "lg", color: c.A.colors.ICON_FEEDBACK_CRITICAL, "aria-hidden": !0 }),
                    (0, l.jsx)(m.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: et.intl.string(ee.default.nGX8Co),
                    }),
                ],
            }),
            (0, l.jsx)(h.$, {
                variant: "primary",
                text: et.intl.string(et.t["7NqTJn"]),
                onClick: () => C.Ay.initialPageLoad(),
            }),
        ],
    });
}
function lL(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, F.VT)(),
        r = (0, R.A)();
    return [D.u9.CONTENT_AND_SOCIAL, D.u9.DATA_AND_PRIVACY, D.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, l.jsxs)(f.V, {
              className: lI.c5,
              "aria-label": et.intl.string(ee.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, l.jsx)(f.V.Item, {
                      className: lI.jA,
                      id: D.u9.ACTIVITY,
                      children: et.intl.string(ee.default.bdBmqy),
                  }),
                  (0, l.jsxs)(f.V.Item, {
                      className: lI.jA,
                      id: D.u9.REQUESTS,
                      "aria-label": et.intl.string(ee.default["gVWG+6"]),
                      children: [
                          et.intl.string(ee.default["gVWG+6"]),
                          i > 0 ? (0, l.jsx)(j.hV, { className: lI.qS, count: i }) : null,
                      ],
                  }),
                  r
                      ? (0, l.jsx)(f.V.Item, {
                            className: lI.jA,
                            id: D.u9.SETTINGS,
                            children: et.intl.string(et.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function lR(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        r = (0, S.GV)(),
        d = (0, F.VT)();
    return (0, l.jsx)(g.N, {
        theme: t,
        children: (e) =>
            (0, l.jsxs)(I.A, {
                className: s()(e, lI.ZB),
                scrollable: a.Fr,
                role: "navigation",
                "aria-labelledby": r,
                toolbar: !0,
                children: [
                    (0, l.jsx)(I.A.Icon, { icon: v.n, "aria-hidden": !0 }),
                    (0, l.jsx)(I.A.Title, { id: r, children: et.intl.string(ee.default.RZqaJn) }),
                    (0, l.jsx)(I.A.Divider, {}),
                    (0, l.jsxs)(f.V, {
                        "aria-label": et.intl.string(ee.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, l.jsx)(f.V.Item, {
                                id: D.u9.ACTIVITY,
                                className: lI.AS,
                                children: et.intl.string(ee.default.bdBmqy),
                            }),
                            (0, l.jsxs)(f.V.Item, {
                                id: D.u9.REQUESTS,
                                className: lI.AS,
                                "aria-label": et.intl.string(ee.default["gVWG+6"]),
                                children: [
                                    et.intl.string(ee.default["gVWG+6"]),
                                    d > 0 ? (0, l.jsx)(j.hV, { className: lI.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function lk() {
    let e = (0, S.GV)(),
        {
            isLoading: t,
            hasLoadFailed: n,
            selectedTab: r,
            handleTabChange: s,
            showAgeGateModal: a,
        } = lS({
            location: D.MH.SETTINGS,
            onMountEffect: () => {
                C.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, _._)(U[r]);
        }, [r]),
        a)
    )
        return null;
    let d = ly[r];
    return (0, l.jsxs)("main", {
        className: lI.kL,
        "aria-label": et.intl.string(ee.default.RZqaJn),
        children: [
            (0, l.jsx)(T.HI, { location: et.intl.string(ee.default.RZqaJn) }),
            (0, l.jsx)(lL, {
                section: r,
                handleItemSelect: function (e) {
                    s(e);
                },
            }),
            (0, l.jsx)(f.V.Panel, {
                id: r,
                "aria-labelledby": e,
                className: lI.Us,
                children: n ? (0, l.jsx)(lC, {}) : t ? (0, l.jsx)(l_, {}) : (0, l.jsx)(d, {}),
            }),
        ],
    });
}
function lD() {
    let { analyticsLocations: e } = (0, N.Ay)(p.A.FAMILY_CENTER),
        t = (0, R.A)(),
        n = (0, d.bG)([L.A], () => L.A.getIsInitialized()),
        r = (0, d.bG)([y.A], () => y.A.theme),
        a = (0, S.GV)(),
        {
            isLoading: c,
            hasLoadFailed: u,
            selectedTab: o,
            handleTabChange: x,
            showAgeGateModal: m,
        } = lS({
            location: D.MH.SIDENAV,
            onMountEffect: () => {
                (E.I(P.BVt.FAMILY_CENTER), !L.A.isLoading() && L.A.canRefetch() && C.Ay.initialPageLoad());
            },
        });
    if (
        (i.useEffect(() => {
            let e = b.dm.getSetting();
            n && t && void 0 === e && b.dm.updateSetting(!0);
        }, [n, t]),
        m)
    )
        return null;
    let h = o !== D.u9.SETTINGS && o !== D.u9.SCREEN_TIME_CONTROLS ? o : D.u9.ACTIVITY,
        j = lb[h];
    return (0, l.jsx)(N.f5, {
        value: e,
        children: (0, l.jsxs)("main", {
            className: s()(lI.kL, lI.ei),
            "aria-label": et.intl.string(ee.default.RZqaJn),
            children: [
                (0, l.jsx)(T.HI, { location: et.intl.string(ee.default.RZqaJn) }),
                (0, l.jsx)(lR, {
                    theme: r,
                    section: h,
                    handleItemSelect: function (e) {
                        x(e);
                    },
                }),
                (0, l.jsx)(f.V.Panel, {
                    id: h,
                    "aria-labelledby": a,
                    className: lI.Om,
                    children: u
                        ? (0, l.jsx)(lC, { fillPanel: !0 })
                        : (0, l.jsx)(A.Ip, {
                              children: (0, l.jsx)("div", {
                                  className: lI.O4,
                                  children: c ? (0, l.jsx)(l_, {}) : (0, l.jsx)(j, {}),
                              }),
                          }),
                }),
            ],
        }),
    });
}
