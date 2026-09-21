n.d(t, { A: () => lR, p: () => lL });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(607399),
    d = n(702841),
    c = n(331322),
    u = n(289873),
    o = n(761508),
    x = n(812993);
if (221552 == n.j) var m = n(43990);
if (221552 == n.j) var h = n(177953);
if (221552 == n.j) var f = n(364522);
var j = n(944791),
    g = n(793574),
    v = n(688810),
    A = n(726249),
    E = n(915089),
    p = n(742589),
    N = n(363195),
    T = n(885386),
    S = n(669067),
    I = n(899847),
    y = n(695515),
    _ = n(438732),
    b = n(174459),
    C = n(191627),
    L = n(652215);
let R = {
        [C.u9.ACTIVITY]: "family_center_activity_tab",
        [C.u9.REQUESTS]: "family_center_requests_tab",
        [C.u9.SETTINGS]: "family_center_settings_tab",
        [C.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [C.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [C.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    k = function () {
        return {
            selectedTab: (0, d.bG)([y.A], () => y.A.getSelectedTab()),
            handleTabChange: function (e) {
                (I.Ay.selectTab(e), b.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.TabChange, tab: e }));
            },
        };
    };
var U = n(834981),
    D = n(843282),
    P = n(778712),
    M = n(939249),
    O = n(548411),
    F = n(661531),
    G = n(834730),
    V = n(297264),
    w = n(10005),
    z = n(153739),
    H = n(284009),
    B = n.n(H),
    Y = n(192308),
    q = n(885574),
    Z = n(691540),
    K = n(857250),
    W = n(97483),
    X = n(39623),
    Q = n(935208),
    J = n(864202),
    $ = n(580630),
    ee = n(513687),
    et = n(375708);
function en(e) {
    return new Intl.DateTimeFormat(et.intl.currentLocale, { month: "short", day: "numeric" }).format((0, J.default)(e));
}
var el = n(923531),
    ei = n(294433);
function er(e) {
    return (0, d.bG)([y.A], () => y.A.getTotalForDisplayType(e));
}
function es(e) {
    let t = er(e) ?? 0;
    if (e === C.NV.TOTAL_VOICE_MINUTES) return (0, el.hO)(t);
    if (e === C.NV.PURCHASES) {
        let e = y.A.getTotalSpendAmount(),
            n = y.A.getTotalSpendCurrency();
        return null != e && null != n ? (0, $.RS)(e, n) : t;
    }
    if (e === C.NV.GIFTS) {
        let e = y.A.getTotalGiftValue();
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
            (0, l.jsx)(V.D, {
                variant: "heading-xxl/medium",
                color: i > 0 ? "text-brand" : "text-muted",
                children: (0, l.jsx)(ed.F, { children: r }),
            }),
            (0, l.jsx)(G.E, { variant: "text-sm/semibold", className: ec.io, children: t }),
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
function e_(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, eh.T)(t) ? (0, ej.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: ey._P });
}
function eb(e) {
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
            return (0, l.jsx)(e_, { displayName: t, product: n });
        case em.R.NAMEPLATE:
            let i = (0, eT.EQ)(n);
            return null != i ? (0, l.jsx)(eb, { displayName: t, nameplateData: i }) : null;
        case em.R.PROFILE_EFFECT:
            return (0, l.jsx)(eC, { displayName: t, product: n });
        case em.R.PROFILE_FRAME:
            return (0, l.jsx)(eL, { product: n });
        default:
            return (0, l.jsx)("div", { className: ey.T8, children: (0, l.jsx)(eA.U, {}) });
    }
}
let eU = function (e) {
    let { displayName: t, isSubscription: n, product: i, subscriptionPlanId: r } = e;
    return n ? (0, l.jsx)(eR, { subscriptionPlanId: r }) : (0, l.jsx)(ek, { displayName: t, product: i });
};
var eD = n(271308);
let eP = i.memo((e) => {
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
        x = (0, z.F7)(r),
        { displayName: m, isSubscription: h } = ev(o ?? null, n);
    if ((null != t && !h && null == o) || null == m) return null;
    let f = (function (e) {
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
        className: s()(eD.k, u),
        children: [
            (0, l.jsx)(eU, { displayName: m, isSubscription: h, product: o ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(G.E, { variant: "text-md/semibold", children: m }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: f }),
                ],
            }),
        ],
    });
});
eP.displayName = "FamilyCenterActivityGiftRow";
var eM = n(900002),
    eO = n(714991),
    eF = n(23339),
    eG = n(97808),
    eV = n(260509),
    ew = n(601360);
let ez = function (e) {
    let { guildId: t } = e,
        n = (0, d.bG)([y.A], () => y.A.getGuild(t));
    if (void 0 === n) return null;
    let { name: i } = n,
        r = (0, eV.Iv)(n, 40, !0),
        s = null,
        a = 10;
    return (
        null == n.icon && null != i && (a = eB[(s = (0, eF.oN)(i)).length - 1] ?? eB[eB.length - 1]),
        (0, l.jsx)("div", {
            className: ew.k,
            children: (0, l.jsxs)("div", {
                style: { fontSize: a },
                children: [
                    null != s ? (0, l.jsx)("div", { className: ew.X, "aria-hidden": !0, children: s }) : null,
                    null != r ? (0, l.jsx)(eG.eu, { src: r, size: P._3.SIZE_40, "aria-hidden": !0 }) : null,
                ],
            }),
        })
    );
};
var eH = n(85909);
let eB = [18, 18, 16, 16, 14, 12, 10],
    eY = i.memo((e) => {
        let { guildId: t, className: n, customSubtext: i } = e,
            r = (0, d.bG)([y.A], () => y.A.getGuild(t));
        if (void 0 === r) return null;
        let a = r.features.has(L.GuildFeatures.VERIFIED) || r.features.has(L.GuildFeatures.PARTNERED),
            { name: c } = r;
        return (0, l.jsxs)("div", {
            className: s()(eH.kL, n),
            children: [
                (0, l.jsx)(ez, { guildId: t }),
                (0, l.jsxs)("div", {
                    className: eH.$z,
                    children: [
                        (0, l.jsxs)("div", {
                            className: eH.wx,
                            children: [
                                a
                                    ? (0, l.jsx)(eO.A, {
                                          guild: r,
                                          tooltipPosition: "bottom",
                                          tooltipColor: eM.ST.Colors.PRIMARY,
                                          className: eH.n2,
                                      })
                                    : null,
                                (0, l.jsx)(G.E, { variant: "text-md/semibold", children: c }),
                            ],
                        }),
                        (0, l.jsx)(G.E, {
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
            (0, l.jsx)(eU, { displayName: c, isSubscription: o, product: d ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(G.E, { variant: "text-md/semibold", children: null != u ? `${c} \u{2022} ${u}` : c }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: x }),
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
                  (0, l.jsx)(eW.H, { user: r, avatarSize: P._3.SIZE_40 }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: eX.$,
                          children: [
                              (0, l.jsx)(G.E, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: ex.Ay.getName(r),
                              }),
                              null != n &&
                                  (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
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
            (0, l.jsx)(G.E, { className: e0.Ot, variant: "text-sm/medium", color: "text-muted", children: t }),
        ],
    });
};
var e3 = n(683063),
    e2 = n(372777);
let e5 = function (e) {
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
                  children: (0, l.jsx)(eW.H, { user: r, avatarSize: P._3.SIZE_40 }),
              }),
          });
};
var e8 = n(326851);
let e9 = function () {
    let e = (0, d.bG)([y.A], () => y.A.getTopUserActivities()),
        t = (0, d.bG)([y.A], () => y.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: e8.kL,
              children: [
                  e.length > 0 &&
                      (0, l.jsxs)("div", {
                          className: e8.A2,
                          children: [
                              (0, l.jsx)(V.D, {
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
                                                    e5,
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
                              (0, l.jsx)(V.D, {
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
                                            let t = y.A.getGuild(e.guild_id),
                                                n = t?.name ?? "Unknown Server";
                                            return (0, l.jsx)(
                                                e3.u,
                                                {
                                                    title: n,
                                                    body: (0, el.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, l.jsx)(ez, { guildId: e?.guild_id }),
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
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("166894"), n.e("160106")]).then(n.bind(n, 853809));
            return (t) => (0, l.jsx)(e, { ...t });
        });
    }, []);
    return (0, l.jsx)(M.D, {
        className: e7.YL,
        onClick: e,
        children: (0, l.jsx)(q.CircleInformationIcon, {
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
            (0, Z.P0)((0, K.o)(et.intl.string(ee.default.Wu8BK2), W.Ck.FAILURE));
        }, []),
        r = (0, _.A)(),
        a = (0, d.yK)([y.A], () => y.A.getActionsForDisplayType(t)),
        c = er(t),
        o = es(t),
        { loadMore: x, isMoreLoading: m } = (0, w.A)({ onError: n }),
        h = (0, el.kN)().get(t),
        [f, j] = i.useState(C.PH),
        g = i.useCallback(() => {
            (j((e) => e + C.PH), x(t));
        }, [t, x]);
    B()(null != h, `No text for action type: ${t}`);
    let v = (t === C.NV.PURCHASES || t === C.NV.GIFTS) && null != o ? h.sectionHeader(o) : h.sectionHeader(c),
        A = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = a[t];
                if ((0, el.aq)(n)) {
                    let e = Q.default.extractTimestamp(n.event_id),
                        t = (0, el.i6)(e, h.timestampFormatter);
                    return (0, l.jsx)(eQ, { userId: n.entity_id, subText: t }, n.event_id);
                }
                if ((0, el.Is)(n)) return (0, l.jsx)(eY, { guildId: n.entity_id }, n.event_id);
                if ((0, el.u7)(n)) {
                    let e = y.A.getPurchaseInfo(n.entity_id);
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
                    let e = y.A.getGiftInfo(n.entity_id);
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
                        eP,
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
            [a, h.timestampFormatter],
        ),
        E = i.useCallback(
            () =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(G.E, { className: e7.bV, variant: "text-md/semibold", children: v }),
                        void 0 !== h.sectionDescription
                            ? (0, l.jsx)(G.E, {
                                  className: e7.yV,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: h.sectionDescription(r ?? !1),
                              })
                            : null,
                    ],
                }),
            [v, h, r],
        );
    if (0 === a.length) return null;
    let p = a.slice(0, f);
    return (0, l.jsxs)("div", {
        className: e7.A2,
        children: [
            E(),
            (0, l.jsx)("div", {
                className: e7.o1,
                style: { maxHeight: 65 * p.length },
                children: p.map((e, t) => A({ row: t })),
            }),
            p.length < c
                ? (0, l.jsx)(M.D, {
                      className: s()(e7.FQ, { [e7.r9]: m }),
                      onClick: g,
                      role: "button",
                      "aria-disabled": m,
                      children: m
                          ? (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, className: e7.u1 })
                          : (0, l.jsx)(G.E, {
                                className: e7.UX,
                                variant: "text-sm/bold",
                                children: et.intl.format(ee.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - p.length, C.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
function tt() {
    let e = (0, _.A)(),
        t = (0, U.vx)(),
        n = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["7hqFl9"], { activeLinks: t.length }),
            et.intl.string(ee.default["Q/D/0Q"]),
        ),
        i = (0, el.cV)(!!e),
        r = (0, U.v4)(i);
    return e && t.length > 1
        ? (0, l.jsx)(G.E, { variant: "eyebrow", children: r })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  e ? null : (0, l.jsx)(X.EyeIcon, { size: "xs", color: "currentColor", className: e7.Kk }),
                  (0, l.jsx)(G.E, { variant: "eyebrow", children: n }),
              ],
          });
}
let tn = i.memo((e) => {
    let { userId: t, subText: n, avatarSize: i = P._3.SIZE_40, hideUserTag: r = !1 } = e,
        s = (0, z.F7)(t);
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
                              ? (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: n })
                              : null,
                      ],
                  }),
              ],
          });
});
function tl() {
    let e = (0, U.GR)(),
        t = (0, d.bG)([y.A], () => y.A.getSelectedTeenId()),
        { selectTeenUser: n } = (0, w.A)({}),
        r = e.map((e) => ({ label: e.id, value: e.id })),
        s = i.useCallback((e) => (0, l.jsx)(tn, { userId: e.value, avatarSize: P._3.SIZE_24 }), []);
    return (0, l.jsx)(D.Pw, {
        className: e7.Lt,
        renderOptionLabel: s,
        renderOptionValue: (e) => {
            let [t] = e;
            return s(t);
        },
        serialize: (e) => e,
        select: function (e) {
            (n(e), b.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.SelectTeen }));
        },
        isSelected: (e) => e === t,
        options: r,
        "data-migration-pending": !0,
    });
}
function ti() {
    let e = (0, ea.k)(),
        t = (0, _.A)(),
        n = (0, U.vx)(),
        i = (0, el.cV)(!!t),
        r = (0, U.v4)(i);
    return null === e ? null : t && 1 !== n.length ? (0, l.jsx)(tl, {}) : (0, l.jsx)(tn, { userId: e, subText: r });
}
tn.displayName = "FamilyCenterActivityCardAccountRow";
let tr = function () {
    let e = (0, el.Mo)(),
        t = (0, d.bG)([y.A], () => Object.values(C.NV).some((e) => y.A.getTotalForDisplayType(e) > 0)),
        n = (0, el.jp)(),
        i = (0, U.v4)(n);
    return (0, l.jsxs)("div", {
        className: e7.kL,
        children: [
            (0, l.jsxs)("div", { className: e7.vF, children: [(0, l.jsx)(tt, {}), (0, l.jsx)(e4, {})] }),
            (0, l.jsxs)("div", {
                className: e6.a,
                children: [
                    (0, l.jsx)("div", { className: e7.wx, children: (0, l.jsx)(ti, {}) }),
                    (0, l.jsxs)(c.B, {
                        gap: 32,
                        padding: 32,
                        fullWidth: !1,
                        children: [
                            (0, l.jsx)("div", {
                                className: e7.O2,
                                children: e
                                    .filter((e) => {
                                        let [t] = e;
                                        return t !== C.NV.GIFTS;
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
                                    (0, l.jsx)(e9, {}),
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
    let e = (0, U.vx)(),
        t = (0, z.y3)(),
        { selectTeenUser: n } = (0, w.A)({}),
        r = e.map((e) => ({ label: e, value: e })),
        a = i.useCallback((e) => (0, l.jsx)(tn, { userId: e.value, avatarSize: P._3.SIZE_24, hideUserTag: !0 }), []);
    return 0 === e.length
        ? null
        : (0, l.jsx)("div", {
              className: s()(ts.Gq, { [ts.wS]: e.length > 1 }),
              children:
                  e.length > 1
                      ? (0, l.jsx)(D.Pw, {
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
                      : (0, l.jsx)(tn, { userId: e[0], avatarSize: P._3.SIZE_24, hideUserTag: !0 }),
          });
}
function td() {
    let { selectedTab: e, handleTabChange: t } = k(),
        n = i.useCallback(() => {
            t(C.u9.ACTIVITY);
        }, [t]);
    return (0, l.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, l.jsxs)(M.D, {
                className: ts.Gv,
                onClick: n,
                "aria-label": et.intl.string(et.t.ybUZql),
                children: [
                    (0, l.jsx)(O.Z, { size: "sm", color: F.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    (0, l.jsx)(G.E, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: et.intl.string(et.t["13/7kX"]),
                    }),
                ],
            }),
            (0, l.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, l.jsxs)(c.B, {
                        gap: 4,
                        className: ts.gn,
                        children: [
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: et.intl.string(ee.default.RZqaJn),
                            }),
                            (0, l.jsx)(V.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: et.intl.string(e === C.u9.CONTENT_AND_SOCIAL ? et.t["+o1pDZ"] : et.t.OAuOHD),
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
                            (0, l.jsx)(V.D, { variant: "heading-lg/semibold", color: "text-strong", children: n }),
                        null != i && (0, l.jsx)(G.E, { variant: "text-sm/normal", color: "text-default", children: i }),
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
            note: et.intl.format(et.t.IoztJ0, { helpdeskArticle: tN.A.getArticleURL(L.MVz.MESSAGE_REQUESTS) }),
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
                          onChange: (t) => th.up.updateControlledSetting(e, t ? L.yKI : L.yKI & ~L.dzt.NO_RELATION),
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
                                      ? tS.UI(t, L.dzt.MUTUAL_FRIENDS)
                                      : tS.iE(t, L.dzt.MUTUAL_FRIENDS, L.dzt.NO_RELATION),
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
                                  n ? tS.UI(t, L.dzt.MUTUAL_GUILDS) : tS.iE(t, L.dzt.MUTUAL_GUILDS, L.dzt.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
var t_ = n(444802),
    tb = n(875162),
    tC = n(873298),
    tL = n(389737),
    tR = n(566769),
    tk = n(704724);
function tU() {
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
function tD() {
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
var tP = n(309318);
function tM() {
    let e = (0, t_.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: et.intl.string(et.t.GYpoAq),
                component: () => (0, l.jsx)(tU, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: et.intl.string(et.t["16/3Bi"]),
                component: () => (0, l.jsx)(tD, {}),
                orientation: "vertical",
            },
        ];
    return (0, l.jsxs)(tf.h, {
        children: [
            (0, l.jsx)(tf._, {
                header: et.intl.string(et.t["Hj/But"]),
                description: et.intl.format(et.t["H/Icz+"], { learnMoreLink: tN.A.getArticleURL(e) }),
            }),
            (0, l.jsx)(tb.A, { tabs: t, orientation: "vertical", tabsClassName: tP.v }),
        ],
    });
}
let tO = function () {
    return (0, l.jsxs)(c.B, {
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
function tF() {
    let { hasConsented: e, updateConsent: t } = (0, tg.lH)(L.YAq.PERSONALIZATION);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(ee.default.XMPqUx),
            note: et.intl.format(ee.default.Imp6Ns, {
                helpdeskArticle: tN.A.getArticleURL(L.MVz.DATA_USED_FOR_RECOMMENDED),
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
                      helpdeskArticle: tN.A.getArticleURL(L.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => th.yH.updateControlledSetting(e, !t),
                  disabled: n,
              }),
          });
}
function tV() {
    let e = (0, ea.k)() ?? void 0,
        t = th.kf.useControlledSetting(e);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(ee.default.ZhaNu8),
            note: et.intl.format(ee.default.cnCK6b, {
                helpdeskArticle: tN.A.getArticleURL(L.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => th.kf.updateControlledSetting(e, !t),
        }),
    });
}
function tw() {
    let { hasConsented: e, updateConsent: t } = (0, tg.lH)(L.YAq.USAGE_STATISTICS);
    return (0, l.jsx)(tf.h, {
        children: (0, l.jsx)(tj.Ay, {
            title: et.intl.string(ee.default.HjstRR),
            note: et.intl.format(ee.default.Z5yJZy, {
                helpdeskArticle: tN.A.getArticleURL(L.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: e,
            onChange: t,
        }),
    });
}
let tz = function () {
    return (0, l.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, l.jsx)(td, {}),
            (0, l.jsx)("div", {
                children: (0, l.jsxs)(to, {
                    title: et.intl.string(et.t.SRZyHg),
                    children: [(0, l.jsx)(tw, {}), (0, l.jsx)(tV, {}), (0, l.jsx)(tG, {}), (0, l.jsx)(tF, {})],
                }),
            }),
        ],
    });
};
var tH = n(582394),
    tB = n(141006),
    tY = n(821609),
    tq = n(17928),
    tZ = n(173936),
    tK = n(964486),
    tW = n(957565),
    tX = n(765548),
    tQ = n(647219);
function tJ() {
    return (0, U.xr)() ? null : (0, l.jsx)(t$, {});
}
function t$() {
    let e,
        t = i.useCallback(() => {
            (0, Z.P0)((0, K.o)(et.intl.string(ee.default.Wu8BK2), W.Ck.FAILURE));
        }, []),
        { getLinkCode: r } = (0, w.A)(),
        s = (0, U.VE)(),
        a = (0, tq.bG)([y.A], () => y.A.getLinkCodeExpiresAt());
    ((0, tK.Ay)(() => {
        r();
    }),
        (e = (0, tX.A)(r)),
        i.useEffect(() => {
            if (null == a) return;
            let t = a - Date.now();
            if (t <= 0) return void e();
            let n = setTimeout(e, t);
            return () => clearTimeout(n);
        }, [a, e]));
    let d = i.useCallback(() => {
            ((0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("262546"),
                    n.e("776915"),
                    n.e("595429"),
                    n.e("65407"),
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
                b.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.ShowQRCodeModal }));
        }, [t]),
        c = i.useCallback(() => {
            null != s &&
                (b.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.CopyLink }),
                (0, tW.C)(s, () => (0, Z.P0)((0, K.o)(et.intl.string(et.t["L/PwZf"]), W.Ck.SUCCESS))));
        }, [s]);
    return (0, l.jsxs)("div", {
        className: tQ.U,
        children: [
            (0, l.jsx)(tY.$, {
                icon: tB.y,
                variant: "primary",
                text: et.intl.string(ee.default["m/3urB"]),
                onClick: d,
            }),
            (0, l.jsx)(tY.$, {
                icon: tZ.LinkIcon,
                variant: "secondary",
                text: et.intl.string(et.t.WqhZss),
                disabled: null == s,
                onClick: c,
            }),
        ],
    });
}
var t0 = n(769062);
function t1() {
    let e = (0, U.Li)(),
        t = (0, _.A)(),
        { handleTabChange: n } = k();
    return (0, U.xr)() || (t && e)
        ? null
        : (0, l.jsx)("div", {
              className: t0.x6,
              children: t
                  ? (0, l.jsx)(tY.$, {
                        variant: "primary",
                        text: et.intl.string(et.t.LhlgY9),
                        onClick: () => n(C.u9.REQUESTS),
                    })
                  : (0, l.jsx)(tJ, {}),
          });
}
let t3 = function () {
    let e = (0, _.A)(),
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
        className: s()(t0.kL, e6.a),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", {
                        children: (0, l.jsxs)("div", {
                            className: t0.TK,
                            children: [
                                (0, l.jsx)(V.D, {
                                    variant: "heading-xl/medium",
                                    children: (0, l.jsx)(ed.F, { children: t }),
                                }),
                                (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(t1, {}),
                ],
            }),
            (0, l.jsx)("div", {
                className: t0.F0,
                children: (0, l.jsx)("img", {
                    src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                    alt: et.intl.string(ee.default.ffg6xd),
                }),
            }),
        ],
    });
};
var t2 = n(299628),
    t5 = n(324149);
let t8 = function (e) {
    let { icon: t, iconClassName: n, header: i, description: r } = e;
    return (0, l.jsxs)("div", {
        className: s()(t5.kL, e6.a),
        children: [
            (0, l.jsx)("div", {
                className: t5.n1,
                children: (0, l.jsx)(t, {
                    className: s()(t5.Kk, n),
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(V.D, {
                        variant: "heading-md/bold",
                        className: t5.wx,
                        children: (0, l.jsx)(ed.F, { children: i }),
                    }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: r }),
                ],
            }),
        ],
    });
};
var t9 = n(28863),
    t7 = n(683071),
    t6 = n(987197),
    t4 = n(822585);
function ne() {
    (0, et.useSyncMessages)(ee.messagesLoader);
    let e = (0, t6.f)(),
        t = (0, t4.L)()?.daysRemaining ?? null;
    if (!e || null == t || t < 0) return null;
    function n(e, t) {
        return (0, l.jsx)(
            t9.Anchor,
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
        children: (0, l.jsx)(t7.w, {
            type: "warning",
            children:
                0 === t
                    ? et.intl.format(ee.default.S5kmfO, { learnMoreHook: n })
                    : et.intl.format(ee.default["5jm+T3"], { count: t, learnMoreHook: n }),
        }),
    });
}
var nt = n(847374),
    nn = n(308528),
    nl = n(922529),
    ni = n(780964),
    nr = n(830543),
    ns = n(766075),
    na = n(219893),
    nd = n(465323),
    nc = n(617617),
    nu = n(361157);
function no(e) {
    let t = (0, tq.bG)([y.A], () => y.A.getMonthlyPurchases());
    return (function (e, t) {
        if (null == e) return { kind: "off" };
        if (0 === e.amount) return { kind: "blocked" };
        let n = e.currency,
            l = (0, $.CE)((0, $.$g)(e.amount, n), eg.WT.MONTH, 1);
        if (t >= e.amount) return { kind: "spent", monthlyText: l };
        let i = nd.yR[e.currency] ?? 2,
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
var nx = n(534654),
    nm = n(980707),
    nh = n(477782),
    nf = n(943255),
    nj = n(922016),
    ng = n(408278),
    nv = n(365199),
    nA = n(193249),
    nE = n(95396),
    np = n(585634);
function nN(e) {
    let { closePopout: t, onEdit: n, onDelete: i } = e;
    return (0, l.jsxs)(nm.W, {
        "data-menu-migrated": !0,
        "aria-label": et.intl.string(et.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, l.jsx)(nh.Dr, { id: "edit", label: et.intl.string(ee.default.b3DPqg), action: n }),
            (0, l.jsx)(nh.Dr, { id: "delete", label: et.intl.string(ee.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function nT(e) {
    let { rule: t, teenId: r, readOnly: s = !1 } = e,
        a = i.useRef(null),
        d = t?.enabled ?? !0,
        u = (0, na.li)(t),
        o = (0, na.n1)(t.days);
    function x() {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("58008"), n.e("639231")]).then(n.bind(n, 154434));
            return (n) => (0, l.jsx)(e, { ...n, teenId: r, rule: t });
        });
    }
    function m() {
        (0, nE.CS)(r, t.ruleId);
    }
    return (0, l.jsxs)(c.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        children: [
            (0, l.jsx)("div", { className: np.X, children: (0, l.jsx)(nf.Z, { size: "md" }) }),
            (0, l.jsxs)(c.B, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, l.jsx)(G.E, { variant: "text-md/medium", children: u }),
                    (0, l.jsx)(G.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
                ],
            }),
            (0, l.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !s &&
                        (0, l.jsx)(nj.Y, {
                            targetElementRef: a,
                            renderPopout: (e) => (0, l.jsx)(nN, { ...e, onEdit: x, onDelete: m }),
                            position: "bottom",
                            align: "right",
                            animation: nj.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, l.jsx)(ng.K, {
                                    buttonRef: a,
                                    size: "sm",
                                    icon: nv.MoreHorizontalIcon,
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
                        className: np.m,
                        children: (0, l.jsx)(nA.d, {
                            checked: d,
                            label: et.intl.string(ee.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: function () {
                                (0, nE.Um)(r, t.ruleId, { enabled: !d });
                            },
                            hasIcon: !0,
                            disabled: s,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var nS = n(12350);
function nI(e) {
    let { title: t, subtitle: n, buttonText: i, onButtonPress: r, readOnly: s = !1 } = e;
    return (0, l.jsxs)(c.B, {
        padding: { top: 12, bottom: 12 },
        justify: "space-between",
        direction: "horizontal",
        align: "center",
        gap: 32,
        children: [
            (0, l.jsxs)(c.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, l.jsx)(G.E, { variant: "text-md/medium", children: t }),
                    null != n && (0, l.jsx)(G.E, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? nS.nh : void 0,
                children: (0, l.jsx)(tY.$, { text: i, onClick: r, variant: "secondary", size: "sm", disabled: s }),
            }),
        ],
    });
}
function ny(e, t, i) {
    return (0, l.jsx)(nI, {
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
                            (0, l.jsx)(G.E, {
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
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                tag: "span",
                                children: et.intl.string(ee.default.Q2msVQ),
                            }),
                        ],
                    });
                case "blocked":
                    return (0, l.jsx)(G.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        tag: "span",
                        children: et.intl.string(ee.default.FUu2b0),
                    });
            }
        })(t),
        buttonText: et.intl.string(et.t.bt75uw),
        onButtonPress: () => {
            (0, Y.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("781173"), n.e("387096")]).then(n.bind(n, 638155));
                return (n) => (0, l.jsx)(t, { ...n, teenId: e });
            });
        },
        readOnly: i,
    });
}
function n_(e) {
    let { teenId: t } = e;
    return ny(
        t,
        no(
            (0, tq.bG)(
                [nc.A],
                () => {
                    let e = nc.A.settings.safetySettings?.spendingLimitSettings?.oneTimePurchaseLimit;
                    return null == e ? null : { amount: Number(e.amount), currency: e.currency };
                },
                void 0,
                nu.Ky,
            ),
        ),
        !0,
    );
}
function nb(e) {
    let { teenId: t } = e,
        n = th.fD.useControlledSetting(t);
    return ny(t, no(n));
}
function nC(e) {
    let { teenId: t, readOnly: r = !1 } = e,
        s = (0, z.y3)(),
        a = s?.restrictedSchedule?.rules ?? [],
        d = (0, na.I2)(a),
        [u, o] = i.useState(d.length > 0);
    function x() {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("58008"), n.e("639231")]).then(n.bind(n, 154434));
            return (n) => (0, l.jsx)(e, { ...n, teenId: t });
        });
    }
    return (i.useEffect(() => {
        d.length > 0 && o(!0);
    }, [d.length]),
    0 === d.length)
        ? (0, l.jsx)(nI, {
              title: et.intl.string(ee.default["1Op+NP"]),
              buttonText: et.intl.string(ee.default.OwFF4o),
              onButtonPress: x,
              readOnly: r,
          })
        : (0, l.jsxs)(c.B, {
              direction: "vertical",
              gap: 0,
              children: [
                  (0, l.jsxs)(M.D, {
                      className: nS.dV,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, l.jsx)("div", {
                              className: nS.WB,
                              children: (0, l.jsxs)(c.B, {
                                  direction: "vertical",
                                  gap: 4,
                                  children: [
                                      (0, l.jsx)(G.E, {
                                          variant: "text-md/medium",
                                          children: et.intl.string(ee.default["1Op+NP"]),
                                      }),
                                      (0, l.jsx)(G.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: et.intl.formatToPlainString(ee.default.XfwcpX, { count: d.length }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: nS.pt,
                              children: (0, l.jsx)(nt.a, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: `${nS.ai} ${u ? nS.hg : ""}`,
                              }),
                          }),
                      ],
                  }),
                  u &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(c.B, {
                                  direction: "vertical",
                                  gap: 16,
                                  padding: { top: 24, bottom: 24 },
                                  children: d.map((e) => (0, l.jsx)(nT, { rule: e, teenId: t, readOnly: r }, e.ruleId)),
                              }),
                              (0, l.jsx)("div", {
                                  className: r ? nS.nh : void 0,
                                  children: (0, l.jsx)(tY.$, {
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
function nL() {
    let e = (0, U.vx)(),
        t = (0, z.y3)();
    function n() {
        (0, ns.openUserSettings)(ni.X.MESSAGING_PERMISSIONS_PANEL);
    }
    return (0, l.jsxs)(c.B, {
        direction: "vertical",
        gap: 0,
        children: [
            (0, l.jsxs)(c.B, {
                padding: { bottom: 12 },
                justify: "space-between",
                direction: "horizontal",
                align: "center",
                gap: 32,
                children: [
                    (0, l.jsxs)(c.B, {
                        direction: "vertical",
                        gap: 4,
                        children: [
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/semibold",
                                children: et.intl.string(ee.default.ahKIJO),
                            }),
                            (0, l.jsx)(G.E, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children: et.intl.format(ee.default.X9rW0j, {
                                    openSettingsHook: (e, t) => (0, l.jsx)(t9.Anchor, { onClick: n, children: e }, t),
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(tY.$, {
                        text: et.intl.formatToPlainString(ee.default.ggcjPR, { count: e.length }),
                        onClick: function () {
                            ((0, nr.default)(), nn.A.openPrivateChannel({ recipientIds: e }));
                        },
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            t?.id != null &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(nl.A, { className: nS.yF }),
                        (0, l.jsx)(n_, { teenId: t.id }),
                        (0, l.jsx)(nl.A, { className: nS.yF }),
                        (0, l.jsx)(nC, { teenId: t.id, readOnly: !0 }),
                    ],
                }),
        ],
    });
}
function nR() {
    let e = (0, z.y3)(),
        t = (0, z.tl)(),
        { handleTabChange: n } = k();
    return (
        i.useEffect(() => {
            e?.id != null && t && I.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(c.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, l.jsx)(G.E, { variant: "text-sm/semibold", children: et.intl.string(ee.default.ahKIJO) }),
                        (0, l.jsx)(G.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: et.intl.string(ee.default.Sv236e),
                        }),
                    ],
                }),
                (0, l.jsx)(nI, {
                    title: et.intl.string(et.t["+o1pDZ"]),
                    buttonText: et.intl.string(et.t.bt75uw),
                    onButtonPress: () => {
                        n(C.u9.CONTENT_AND_SOCIAL);
                    },
                }),
                (0, l.jsx)(nl.A, { className: nS.yF }),
                (0, l.jsx)(nI, {
                    title: et.intl.string(et.t.OAuOHD),
                    buttonText: et.intl.string(et.t.bt75uw),
                    onButtonPress: () => {
                        n(C.u9.DATA_AND_PRIVACY);
                    },
                }),
                e?.id != null &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(nl.A, { className: nS.yF }),
                            (0, l.jsx)(nb, { teenId: e.id }),
                            (0, l.jsx)(nl.A, { className: nS.yF }),
                            (0, l.jsx)(nC, { teenId: e.id }),
                        ],
                    }),
            ],
        })
    );
}
function nk() {
    let e = (0, nx.A)();
    return 0 === (0, U.vx)().length
        ? null
        : (0, l.jsx)("div", { className: nS.kL, children: e ? (0, l.jsx)(nL, {}) : (0, l.jsx)(nR, {}) });
}
var nU = n(768775);
let nD = function () {
    let e = (0, U.vx)().length > 0,
        t = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        n = (0, ei.y)(et.intl.string(ee.default["5RZ8Tq"]), et.intl.string(ee.default.bmhCnL)),
        i = (0, ei.y)(et.intl.string(ee.default.XKnFFq), et.intl.string(ee.default["68zfxD"])),
        r = (0, ei.y)(et.intl.string(ee.default["Rm/6a0"]), et.intl.string(ee.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, l.jsxs)("div", {
              className: nU.kL,
              children: [
                  (0, l.jsx)(ne, {}),
                  e
                      ? null
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { className: nU.vK, children: (0, l.jsx)(t3, {}) }),
                                (0, l.jsxs)("div", {
                                    className: nU.yk,
                                    children: [
                                        (0, l.jsx)(t8, {
                                            icon: tH.M,
                                            header: et.intl.string(ee.default["001l3m"]),
                                            description: n,
                                        }),
                                        (0, l.jsx)(t8, {
                                            icon: X.EyeIcon,
                                            header: et.intl.string(ee.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, l.jsx)(t8, {
                                            icon: tB.y,
                                            header: et.intl.string(ee.default.hhOuMe),
                                            description: r,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, l.jsx)(tr, {}) : (0, l.jsx)(t2.A, { showSectionDescriptions: !0 }),
                  (0, l.jsx)(nk, {}),
              ],
          });
};
n(801541);
var nP = n(889137),
    nM = n(837381),
    nO = n(475825),
    nF = n(260762),
    nG = n(485947),
    nV = n(426190),
    nw = n(789645),
    nz = n(866665),
    nH = n(883005);
function nB(e) {
    let { icon: t, tooltip: n, onClick: i, className: r } = e;
    return (0, l.jsx)(nz.m, {
        text: n,
        children: (0, l.jsx)(M.D, {
            "aria-label": n,
            onClick: function (e) {
                (e.preventDefault(), e.stopPropagation(), i(e));
            },
            className: s()(nH.hP, r),
            children: (0, l.jsx)(t, { className: nH.Kk, color: "currentColor" }),
        }),
    });
}
var nY = n(854627),
    nq = n(19575),
    nZ = n(218750);
let nK = nq.Ay.getEnableHardwareAcceleration() ? eG.Js : eG.eu;
function nW(e) {
    let { otherUser: t, status: n } = e,
        i = (0, U.XC)(t.id, n),
        {
            avatarSrc: r,
            avatarDecorationSrc: s,
            eventHandlers: a,
        } = (0, nY.A)({ userId: t.id, size: P._3.SIZE_40, animateOnHover: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ...a,
                children: (0, l.jsx)(nK, {
                    className: nZ.my,
                    src: r,
                    avatarDecoration: s,
                    size: P._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, l.jsxs)("div", {
                className: nZ.yt,
                children: [
                    (0, l.jsx)("div", { className: nZ.Vx, children: (0, l.jsx)(eJ.A, { user: t }) }),
                    (0, l.jsx)(G.E, { color: "text-muted", variant: "text-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var nX = n(856087);
function nQ(e) {
    let { user: t } = e,
        r = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        s = i.useCallback(() => {
            (B()(void 0 !== r, "User must be logged in to accept a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("321855"), n.e("943139")]).then(n.bind(n, 179950));
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: r, otherUser: t });
                }));
        }, [r, t]);
    return (0, l.jsxs)("div", {
        className: nX.kL,
        children: [
            (0, l.jsx)("div", { className: nX.zH, children: (0, l.jsx)(nW, { otherUser: t, status: C.Ef.ACTIVE }) }),
            (0, l.jsx)("div", {
                className: nX.o1,
                children: (0, l.jsx)(nB, { icon: nw.P, tooltip: et.intl.string(ee.default.l20ZZp), onClick: s }),
            }),
        ],
    });
}
var nJ = n(933832);
function n$(e) {
    let { user: t } = e,
        r = (0, _.A)(),
        s = (0, U.xr)(),
        a = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        c = i.useCallback(() => {
            (B()(void 0 !== a, "User must be logged in to accept a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("916131"), n.e("155738"), n.e("331385")]).then(
                        n.bind(n, 58144),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]),
        u = i.useCallback(() => {
            (B()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("916131"), n.e("155738"), n.e("384811")]).then(
                        n.bind(n, 389094),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]),
        o = i.useCallback(() => {
            (B()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("916131"), n.e("155738"), n.e("817219")]).then(
                        n.bind(n, 187278),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]);
    return (0, l.jsxs)("div", {
        className: nX.kL,
        children: [
            (0, l.jsx)("div", { className: nX.zH, children: (0, l.jsx)(nW, { otherUser: t, status: C.Ef.PENDING }) }),
            (0, l.jsx)("div", {
                className: nX.o1,
                children: r
                    ? (0, l.jsx)(nB, { icon: nw.P, tooltip: et.intl.string(ee.default.e5iHmZ), onClick: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              s
                                  ? null
                                  : (0, l.jsx)(nB, {
                                        icon: nJ.CheckmarkLargeIcon,
                                        tooltip: et.intl.string(ee.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, l.jsx)(nB, { icon: nw.P, tooltip: et.intl.string(ee.default.bBDeNI), onClick: u }),
                          ],
                      }),
            }),
        ],
    });
}
var n0 = n(615300),
    n1 = n(559106),
    n3 = n(402860),
    n2 = n(487565);
let n5 = function (e) {
    let { userId: t, children: n, isLast: r, className: a } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: u } = (0, v.Ay)(),
        o = i.useCallback(() => {
            (0, n3.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u });
        }, [t, u]);
    function x() {
        c(!0);
    }
    function m() {
        c(!1);
    }
    return (0, l.jsx)(nM.tG, {
        id: t,
        children: (e) =>
            (0, l.jsx)(n1.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(n0.A.div, {
                    style: { opacity: 1 },
                    className: s()(n2.KG, a, { [n2.HV]: r, [n2.vu]: d }),
                    onMouseEnter: x,
                    onMouseLeave: m,
                    onClick: o,
                    ...e,
                    children: n(d),
                }),
            }),
    });
};
var n8 = n(327337),
    n9 = n(375980);
let n7 = "/assets/922a2ee66ef62b5b.svg";
function n6(e) {
    let { header: t, description: n, stepNumber: i } = e;
    return (0, l.jsxs)("div", {
        className: n9.PM,
        children: [
            (0, l.jsx)("div", {
                className: n9.CD,
                children: (0, l.jsx)(V.D, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, l.jsx)(ed.F, { children: i }),
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(V.D, { variant: "heading-sm/bold", children: (0, l.jsx)(ed.F, { children: t }) }),
                    (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
                ],
            }),
        ],
    });
}
function n4() {
    return (0, l.jsxs)("div", {
        className: s()(n9.aP, e6.a, n9.dO, n9.p2),
        children: [
            (0, l.jsxs)("div", {
                className: n9.Np,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(V.D, {
                                className: e0.QB,
                                variant: "heading-xl/medium",
                                children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default.pHEnV5) }),
                            }),
                            (0, l.jsx)(G.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: e0.SX,
                                children: et.intl.string(ee.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)("img", { className: n9._u, src: n7, alt: et.intl.string(ee.default["r+PDmu"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: n9.Ci,
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
    let e = (0, U.xr)();
    return (0, l.jsxs)("div", {
        className: s()(n9.aP, e6.a, n9.dO),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(V.D, {
                        className: e0.QB,
                        variant: "heading-xl/medium",
                        children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default.zUCWEL) }),
                    }),
                    (0, l.jsx)(G.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: e0.SX,
                        children: et.intl.format(ee.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, l.jsx)(tJ, {}),
                ],
            }),
            (0, l.jsx)("img", { className: n9._u, src: n7, alt: et.intl.string(ee.default["r+PDmu"]) }),
        ],
    });
}
function lt(e) {
    let { sectionType: t, sectionTitle: n, requests: r } = e,
        s = i.useRef(null),
        a = `${t}-list`,
        d = (0, nF.A)(a),
        c = i.useCallback(
            (e) => {
                let { row: n, listIndex: i } = e,
                    s = r[n],
                    a = i === r.length;
                return null == s
                    ? null
                    : (0, l.jsx)(
                          n5,
                          {
                              userId: s.id,
                              isLast: a,
                              children: () =>
                                  t === C.Ef.ACTIVE ? (0, l.jsx)(nQ, { user: s }) : (0, l.jsx)(n$, { user: s }),
                          },
                          s.id,
                      );
            },
            [r, t],
        ),
        u = i.useCallback(
            () =>
                (0, l.jsx)(
                    nG.A,
                    {
                        children: (0, l.jsx)(G.E, {
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
        children: (0, l.jsx)(nM.hD, {
            navigator: d,
            children: (0, l.jsx)(nM.PR, {
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
                            sectionHeight: C.h4,
                            rowHeight: C.Gg,
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
    let e = (0, _.A)(),
        t = (0, U.GR)(),
        n = e ? C.Y7 : C.kp,
        i = { count: t.length, max: n },
        r = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["+tnO34"], i),
            et.intl.formatToPlainString(ee.default["pu6/U0"], i),
        );
    return t.length > 0
        ? (0, l.jsx)(lt, { sectionType: C.Ef.ACTIVE, sectionTitle: r, requests: t })
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(G.E, { className: e0.QB, variant: "eyebrow", color: "text-default", children: r }),
                  (0, l.jsx)("div", {
                      className: n9.aP,
                      children: (0, l.jsx)(e1, { text: et.intl.string(ee.default.C4ScLD) }),
                  }),
              ],
          });
}
function ll() {
    let e = (0, U.xr)(),
        t = (0, _.A)() ? C.Y7 : C.kp,
        n = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["1/PzIj"], { maxConnections: t }),
            et.intl.formatToPlainString(ee.default.RcTgiE, { maxConnections: t }),
        );
    return e
        ? (0, l.jsx)("div", {
              className: n9.rv,
              children: (0, l.jsx)(G.E, { variant: "text-xxs/medium", color: "text-muted", children: n }),
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
            .with({ throughline: !0 }, () => et.intl.format(ee.default["6tsC8u"], { helpLink: n8.CL }))
            .otherwise(() => null);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(V.D, {
                      className: n9.rH,
                      variant: "heading-sm/semibold",
                      children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default["7/tVhv"]) }),
                  }),
                  (0, l.jsx)(G.E, { variant: "text-xs/medium", color: "text-muted", children: n }),
              ],
          });
}
function lr() {
    let e = (0, U.xk)(C.Ef.PENDING),
        t = (0, ei.y)(
            et.intl.formatToPlainString(ee.default.IkAgkG, { count: e.length }),
            et.intl.formatToPlainString(ee.default.Q8XnAa, { count: e.length }),
        );
    return 0 === e.length ? null : (0, l.jsx)(lt, { sectionType: C.Ef.PENDING, sectionTitle: t, requests: e });
}
let ls = function () {
    let e = (0, _.A)();
    return (0, l.jsxs)("div", {
        className: n9.kL,
        children: [
            (0, l.jsx)(ne, {}),
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
    let e = T.dm.useSetting(),
        { categories: t, initialized: n } = (0, tq.cf)([lm.A], () => lm.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == n && (0, lx.cR)();
        }, [n]),
        (0, l.jsx)("div", {
            className: lf.kL,
            children: (0, l.jsxs)(lc.n, {
                label: et.intl.string(ee.default.USIXU7),
                children: [
                    (0, l.jsx)(nA.d, {
                        checked: e,
                        description: et.intl.string(ee.default["5MdB3j"]),
                        onChange: T.dm.updateSetting,
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
                                          children: (0, l.jsx)(G.E, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: et.intl.string(ee.default.xAVm7K),
                                          }),
                                      }),
                                      (0, l.jsx)(M.D, {
                                          children: (0, l.jsx)(la.N_, {
                                              onClick: nr.default,
                                              to: { pathname: L.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: et.intl.string(ee.default.cUIXFY),
                                          }),
                                      }),
                                      (0, l.jsx)(x.fk, { icon: lo.E, className: lf.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, l.jsx)(nA.d, {
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
    lE = n(210714),
    lp = n(33666),
    lN = n(204925);
function lT(e) {
    let { location: t, onMountEffect: n } = e,
        l = (0, lp.A)(),
        r = (0, U.W1)(),
        { familyCenterInitialized: s, isLoading: a } = (0, d.cf)([y.A], () => ({
            familyCenterInitialized: y.A.getIsInitialized(),
            isLoading: y.A.isLoading(),
        })),
        c = (0, ea.k)(),
        { selectedTab: u, handleTabChange: o } = k(),
        x = eK.default.getCurrentUser(),
        m = null != l,
        h = s && null != x && !m;
    (0, tK.Ay)(() => {
        ((0, lE.d0)("family-center"), null != n && n());
    });
    let f = { isConsideredAdult: "adult" === l, numOfAcceptedRequests: r, selectedTab: u, selectedTeenId: c },
        j = i.useRef(f);
    return (
        i.useEffect(() => {
            j.current = f;
        }),
        i.useEffect(() => {
            if (s && m) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: l, selectedTeenId: i } = j.current;
                (b.default.track(L.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: i,
                    initial_page: C.zu[l],
                    source: C.iN[t],
                }),
                    lA.A.increment({ name: lg.K.FAMILY_CENTER_VIEW }));
            }
        }, [s, m, t]),
        i.useEffect(() => {
            h && (0, lv.yO)(lN.w_.FAMILY_CENTER);
        }, [h]),
        { isLoading: a, selectedTab: u, handleTabChange: o, showAgeGateModal: h }
    );
}
var lS = n(220330);
let lI = {
        [C.u9.REQUESTS]: ls,
        [C.u9.ACTIVITY]: nD,
        [C.u9.SETTINGS]: lj,
        [C.u9.CONTENT_AND_SOCIAL]: tO,
        [C.u9.DATA_AND_PRIVACY]: tz,
        [C.u9.SCREEN_TIME_CONTROLS]: lj,
    },
    ly = { [C.u9.REQUESTS]: ls, [C.u9.ACTIVITY]: nD, [C.u9.CONTENT_AND_SOCIAL]: tO, [C.u9.DATA_AND_PRIVACY]: tz };
function l_() {
    return (0, l.jsx)(c.B, { justify: "center", align: "center", className: lS.g4, children: (0, l.jsx)(u.y, {}) });
}
function lb(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, U.VT)(),
        r = (0, _.A)();
    return [C.u9.CONTENT_AND_SOCIAL, C.u9.DATA_AND_PRIVACY, C.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, l.jsxs)(o.V, {
              className: lS.c5,
              "aria-label": et.intl.string(ee.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, l.jsx)(o.V.Item, {
                      className: lS.jA,
                      id: C.u9.ACTIVITY,
                      children: et.intl.string(ee.default.bdBmqy),
                  }),
                  (0, l.jsxs)(o.V.Item, {
                      className: lS.jA,
                      id: C.u9.REQUESTS,
                      "aria-label": et.intl.string(ee.default["gVWG+6"]),
                      children: [
                          et.intl.string(ee.default["gVWG+6"]),
                          i > 0 ? (0, l.jsx)(x.hV, { className: lS.qS, count: i }) : null,
                      ],
                  }),
                  r
                      ? (0, l.jsx)(o.V.Item, {
                            className: lS.jA,
                            id: C.u9.SETTINGS,
                            children: et.intl.string(et.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function lC(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        r = (0, E.GV)(),
        d = (0, U.VT)();
    return (0, l.jsx)(m.N, {
        theme: t,
        children: (e) =>
            (0, l.jsxs)(p.A, {
                className: s()(e, lS.ZB),
                scrollable: a.Fr,
                role: "navigation",
                "aria-labelledby": r,
                toolbar: !0,
                children: [
                    (0, l.jsx)(p.A.Icon, { icon: h.n, "aria-hidden": !0 }),
                    (0, l.jsx)(p.A.Title, { id: r, children: et.intl.string(ee.default.RZqaJn) }),
                    (0, l.jsx)(p.A.Divider, {}),
                    (0, l.jsxs)(o.V, {
                        "aria-label": et.intl.string(ee.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, l.jsx)(o.V.Item, {
                                id: C.u9.ACTIVITY,
                                className: lS.AS,
                                children: et.intl.string(ee.default.bdBmqy),
                            }),
                            (0, l.jsxs)(o.V.Item, {
                                id: C.u9.REQUESTS,
                                className: lS.AS,
                                "aria-label": et.intl.string(ee.default["gVWG+6"]),
                                children: [
                                    et.intl.string(ee.default["gVWG+6"]),
                                    d > 0 ? (0, l.jsx)(x.hV, { className: lS.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function lL() {
    let e = (0, E.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: r,
            showAgeGateModal: s,
        } = lT({
            location: C.MH.SETTINGS,
            onMountEffect: () => {
                I.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, S._)(R[n]);
        }, [n]),
        s)
    )
        return null;
    let a = lI[n];
    return (0, l.jsxs)("main", {
        className: lS.kL,
        "aria-label": et.intl.string(ee.default.RZqaJn),
        children: [
            (0, l.jsx)(A.HI, { location: et.intl.string(ee.default.RZqaJn) }),
            (0, l.jsx)(lb, {
                section: n,
                handleItemSelect: function (e) {
                    r(e);
                },
            }),
            (0, l.jsx)(o.V.Panel, {
                id: n,
                "aria-labelledby": e,
                className: lS.Us,
                children: t ? (0, l.jsx)(l_, {}) : (0, l.jsx)(a, {}),
            }),
        ],
    });
}
function lR() {
    let { analyticsLocations: e } = (0, v.Ay)(g.A.FAMILY_CENTER),
        t = (0, _.A)(),
        n = (0, d.bG)([y.A], () => y.A.getIsInitialized()),
        r = (0, d.bG)([N.A], () => N.A.theme),
        a = (0, E.GV)(),
        {
            isLoading: c,
            selectedTab: u,
            handleTabChange: x,
            showAgeGateModal: m,
        } = lT({
            location: C.MH.SIDENAV,
            onMountEffect: () => {
                (j.I(L.BVt.FAMILY_CENTER), !y.A.isLoading() && y.A.canRefetch() && I.Ay.initialPageLoad());
            },
        });
    if (
        (i.useEffect(() => {
            let e = T.dm.getSetting();
            n && t && void 0 === e && T.dm.updateSetting(!0);
        }, [n, t]),
        m)
    )
        return null;
    let h = u !== C.u9.SETTINGS && u !== C.u9.SCREEN_TIME_CONTROLS ? u : C.u9.ACTIVITY,
        p = ly[h];
    return (0, l.jsx)(v.f5, {
        value: e,
        children: (0, l.jsxs)("main", {
            className: s()(lS.kL, lS.ei),
            "aria-label": et.intl.string(ee.default.RZqaJn),
            children: [
                (0, l.jsx)(A.HI, { location: et.intl.string(ee.default.RZqaJn) }),
                (0, l.jsx)(lC, {
                    theme: r,
                    section: h,
                    handleItemSelect: function (e) {
                        x(e);
                    },
                }),
                (0, l.jsx)(o.V.Panel, {
                    id: h,
                    "aria-labelledby": a,
                    className: lS.Om,
                    children: (0, l.jsx)(f.Ip, {
                        children: (0, l.jsx)("div", {
                            className: lS.O4,
                            children: c ? (0, l.jsx)(l_, {}) : (0, l.jsx)(p, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
