n.d(t, { p: () => lP, A: () => lF });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(607399),
    d = n(164636),
    c = n(646514),
    o = n(331322),
    u = n(289873),
    m = n(695366),
    x = n(834730),
    h = n(821609),
    f = n(761508),
    j = n(812993);
if (221552 == n.j) var g = n(43990);
if (221552 == n.j) var A = n(177953);
if (221552 == n.j) var v = n(95362);
var E = n(944791),
    N = n(793574),
    p = n(688810),
    y = n(726249),
    b = n(915089),
    T = n(742589),
    I = n(413599),
    S = n(253932),
    C = n(669067),
    _ = n(899847),
    L = n(695515),
    R = n(438732),
    k = n(129230),
    D = n(191627),
    U = n(652215);
let P = {
        [D.u9.ACTIVITY]: "family_center_activity_tab",
        [D.u9.REQUESTS]: "family_center_requests_tab",
        [D.u9.SETTINGS]: "family_center_settings_tab",
        [D.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [D.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [D.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    F = function () {
        return {
            selectedTab: (0, d.bG)([L.A], () => L.A.getSelectedTab()),
            handleTabChange: function (e) {
                (_.Ay.selectTab(e), k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.TabChange, tab: e }));
            },
        };
    };
var O = n(834981),
    M = n(843282),
    G = n(778712),
    V = n(939249),
    w = n(548411),
    z = n(534514),
    H = n(10005),
    B = n(153739),
    Y = n(284009),
    q = n.n(Y),
    Z = n(192308),
    K = n(885574),
    W = n(858899),
    X = n(39623),
    Q = n(811091),
    J = n(864202),
    $ = n(580630),
    ee = n(665956),
    et = n(792996);
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
let eo = function (e) {
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
            (0, l.jsx)(x.E, { variant: "body-sm/semibold", className: ec.io, children: t }),
        ],
    });
};
var eu = n(821701),
    em = n(427262),
    ex = n(575593),
    eh = n(898461),
    ef = n(203632),
    ej = n(486020),
    eg = n(682901);
function eA(e, t) {
    let n,
        l,
        i = null != t;
    if (null != e)
        ((n = e.name),
            (l = (function (e) {
                switch (e) {
                    case ex.R.AVATAR_DECORATION:
                        return et.intl.string(ee.default.obi47v);
                    case ex.R.PROFILE_EFFECT:
                        return et.intl.string(ee.default.RX8BMR);
                    case ex.R.NAMEPLATE:
                        return et.intl.string(ee.default.nNGEHk);
                    case ex.R.BUNDLE:
                        return et.intl.string(ee.default.VS1fKo);
                    case ex.R.PROFILE_FRAME:
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
var ev = n(34188),
    eE = n(104510),
    eN = n(403581),
    ep = n(253292),
    ey = n(780898),
    eb = n(287727),
    eT = n(665411),
    eI = n(740523);
function eS(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, eh.T)(t) ? (0, ej.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eI._P });
}
function eC(e) {
    let { displayName: t, nameplateData: n } = e,
        { staticImageUrl: i } = (0, ep.K)(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eI.M4 });
}
function e_(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, ef.C3)(t) ? t.thumbnailPreviewSrc : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eI._P });
}
function eL(e) {
    let { product: t } = e,
        n = (0, eb.A)(t.skuId);
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: eI.pI,
              children: (0, l.jsx)("div", { className: eI.ZS, children: (0, l.jsx)(eT.A, { frame: n }) }),
          });
}
function eR(e) {
    let { subscriptionPlanId: t } = e;
    if (null == t) return (0, l.jsx)("div", { className: eI.T8, children: (0, l.jsx)(ev.ShopIcon, {}) });
    let n = (function (e) {
        if (null == e) return !1;
        let t = eg.hd[e];
        return t?.skuId === eg.pe.GUILD;
    })(t);
    return (0, l.jsx)("div", {
        className: eI.T8,
        children: n
            ? (0, l.jsx)(eE.BoostGemIcon, { size: "custom", width: 20, height: 20 })
            : (0, l.jsx)(eN.NitroWheelIcon, { size: "custom", width: 20, height: 20 }),
    });
}
function ek(e) {
    let { displayName: t, product: n } = e;
    if (null == n) return (0, l.jsx)("div", { className: eI.T8, children: (0, l.jsx)(ev.ShopIcon, {}) });
    switch (n.type) {
        case ex.R.AVATAR_DECORATION:
            return (0, l.jsx)(eS, { displayName: t, product: n });
        case ex.R.NAMEPLATE:
            let i = (0, ey.EQ)(n);
            return null != i ? (0, l.jsx)(eC, { displayName: t, nameplateData: i }) : null;
        case ex.R.PROFILE_EFFECT:
            return (0, l.jsx)(e_, { displayName: t, product: n });
        case ex.R.PROFILE_FRAME:
            return (0, l.jsx)(eL, { product: n });
        default:
            return (0, l.jsx)("div", { className: eI.T8, children: (0, l.jsx)(ev.ShopIcon, {}) });
    }
}
let eD = function (e) {
    let { displayName: t, isSubscription: n, product: i, subscriptionPlanId: r } = e;
    return n ? (0, l.jsx)(eR, { subscriptionPlanId: r }) : (0, l.jsx)(ek, { displayName: t, product: i });
};
var eU = n(271308);
let eP = i.memo((e) => {
    let {
            skuId: t,
            subscriptionPlanId: n,
            price: i,
            gifterUserId: r,
            claimed: a,
            offeredAt: d,
            claimedAt: c,
            className: o,
        } = e,
        { product: u } = (0, eu.A)(t),
        m = (0, B.F7)(r),
        { displayName: h, isSubscription: f } = eA(u ?? null, n);
    if ((null != t && !f && null == u) || null == h) return null;
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
    })({ claimed: a, price: i, gifterName: null != m ? em.Ay.getName(m) : null, offeredAt: d, claimedAt: c });
    return (0, l.jsxs)("div", {
        className: s()(eU.k, o),
        children: [
            (0, l.jsx)(eD, { displayName: h, isSubscription: f, product: u ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(x.E, { variant: "body-md/semibold", children: h }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", children: j }),
                ],
            }),
        ],
    });
});
eP.displayName = "FamilyCenterActivityGiftRow";
var eF = n(664343),
    eO = n(714991),
    eM = n(23339),
    eG = n(97808),
    eV = n(260509),
    ew = n(601360);
let ez = [18, 18, 16, 16, 14, 12, 10],
    eH = function (e) {
        let { guildId: t } = e,
            n = (0, d.bG)([L.A], () => L.A.getGuild(t));
        if (void 0 === n) return null;
        let { name: i } = n,
            r = (0, eV.Iv)(n, 40, !0),
            s = null,
            a = 10;
        return (
            null == n.icon && null != i && (a = ez[(s = (0, eM.oN)(i)).length - 1] ?? ez[ez.length - 1]),
            (0, l.jsx)("div", {
                className: ew.k,
                children: (0, l.jsxs)("div", {
                    style: { fontSize: a },
                    children: [
                        null != s ? (0, l.jsx)("div", { className: ew.X, "aria-hidden": !0, children: s }) : null,
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
    let a = r.features.has(U.GuildFeatures.VERIFIED) || r.features.has(U.GuildFeatures.PARTNERED),
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
                                ? (0, l.jsx)(eO.A, {
                                      guild: r,
                                      tooltipPosition: "bottom",
                                      tooltipColor: eF.ST.Colors.PRIMARY,
                                      className: eB.n2,
                                  })
                                : null,
                            (0, l.jsx)(x.E, { variant: "body-md/semibold", children: c }),
                        ],
                    }),
                    (0, l.jsx)(x.E, {
                        variant: "body-sm/medium",
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
        { product: d } = (0, eu.A)(t),
        { displayName: c, typeName: o, isSubscription: u } = eA(d ?? null, n);
    if ((null != t && !u && null == d) || null == c) return null;
    let m = (0, $.$g)(i, r);
    return (0, l.jsxs)("div", {
        className: s()(eq.k, a),
        children: [
            (0, l.jsx)(eD, { displayName: c, isSubscription: u, product: d ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(x.E, { variant: "body-md/semibold", children: null != o ? `${c} \u{2022} ${o}` : c }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", children: m }),
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
                              (0, l.jsx)(x.E, {
                                  variant: "body-md/semibold",
                                  color: "interactive-text-active",
                                  children: em.Ay.getName(r),
                              }),
                              null != n &&
                                  (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", children: n }),
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
            (0, l.jsx)(x.E, { className: e0.Ot, variant: "body-sm/medium", color: "text-muted", children: t }),
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
                                  variant: "body-md/medium",
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
                                  variant: "body-md/medium",
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
var e6 = n(700582),
    e7 = n(238304);
function e4() {
    let e = (0, ei.y)(et.intl.string(ee.default.q3IRal), et.intl.string(ee.default.JNLpDZ)),
        t = i.useCallback(() => {
            (0, Z.mM)(async () => {
                let { default: e } = await Promise.all([n.e(166894), n.e(10622), n.e(907410)]).then(n.bind(n, 606377));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        }, []);
    return (0, l.jsx)(V.D, {
        className: e6.YL,
        onClick: t,
        "aria-label": e,
        children: (0, l.jsx)(K.CircleInformationIcon, {
            size: "custom",
            color: "currentColor",
            className: e6.Kk,
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
        o = es(t),
        { loadMore: m, isMoreLoading: h } = (0, H.A)({ onError: n }),
        f = (0, el.kN)().get(t),
        [j, g] = i.useState(4),
        A = i.useCallback(() => {
            (g((e) => e + 4), m(t));
        }, [t, m]);
    q()(null != f, `No text for action type: ${t}`);
    let v = (t === D.NV.PURCHASES || t === D.NV.GIFTS) && null != o ? f.sectionHeader(o) : f.sectionHeader(c),
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
            [a, f.timestampFormatter],
        ),
        N = i.useCallback(
            () =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(x.E, { className: e6.bV, variant: "body-md/semibold", children: v }),
                        void 0 !== f.sectionDescription
                            ? (0, l.jsx)(x.E, {
                                  className: e6.yV,
                                  variant: "body-md/medium",
                                  color: "text-muted",
                                  children: f.sectionDescription(r ?? !1),
                              })
                            : null,
                    ],
                }),
            [v, f, r],
        );
    if (0 === a.length) return null;
    let p = a.slice(0, j);
    return (0, l.jsxs)("div", {
        className: e6.A2,
        children: [
            N(),
            (0, l.jsx)("div", {
                className: e6.o1,
                style: { maxHeight: 65 * p.length },
                children: p.map((e, t) => E({ row: t })),
            }),
            p.length < c
                ? (0, l.jsx)(V.D, {
                      className: s()(e6.FQ, { [e6.r9]: h }),
                      onClick: A,
                      role: "button",
                      "aria-disabled": h,
                      children: h
                          ? (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, className: e6.u1 })
                          : (0, l.jsx)(x.E, {
                                className: e6.UX,
                                variant: "body-sm/semibold",
                                children: et.intl.format(ee.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - p.length, 4)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
function tt() {
    let e = (0, R.A)(),
        t = (0, O.vx)(),
        n = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["7hqFl9"], { activeLinks: t.length }),
            et.intl.string(ee.default["Q/D/0Q"]),
        ),
        i = (0, el.cV)(!!e),
        r = (0, O.v4)(i);
    return e && t.length > 1
        ? (0, l.jsx)(x.E, { variant: "body-sm/medium", children: r })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  e ? null : (0, l.jsx)(X.EyeIcon, { size: "xs", color: "currentColor", className: e6.Kk }),
                  (0, l.jsx)(x.E, { variant: "body-sm/medium", children: n }),
              ],
          });
}
let tn = i.memo((e) => {
    let { userId: t, subText: n, avatarSize: i = G._3.SIZE_40, hideUserTag: r = !1 } = e,
        s = (0, B.F7)(t);
    return void 0 === s
        ? null
        : (0, l.jsxs)("div", {
              className: e6.iO,
              children: [
                  (0, l.jsx)(eW.H, { user: s, avatarSize: i }),
                  (0, l.jsxs)("div", {
                      className: e6.TK,
                      children: [
                          (0, l.jsx)(eJ.A, { user: s, hideUserTag: r }),
                          void 0 !== n
                              ? (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: n })
                              : null,
                      ],
                  }),
              ],
          });
});
function tl() {
    let e = (0, O.GR)(),
        t = (0, d.bG)([L.A], () => L.A.getSelectedTeenId()),
        { selectTeenUser: n } = (0, H.A)({}),
        r = e.map((e) => ({ label: e.id, value: e.id })),
        s = i.useCallback((e) => (0, l.jsx)(tn, { userId: e.value, avatarSize: G._3.SIZE_24 }), []);
    return (0, l.jsx)(M.Pw, {
        className: e6.Lt,
        renderOptionLabel: s,
        renderOptionValue: (e) => {
            let [t] = e;
            return s(t);
        },
        serialize: (e) => e,
        select: function (e) {
            (n(e), k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.SelectTeen }));
        },
        isSelected: (e) => e === t,
        options: r,
        "data-migration-pending": !0,
    });
}
function ti() {
    let e = (0, ea.k)(),
        t = (0, R.A)(),
        n = (0, O.vx)(),
        i = (0, el.cV)(!!t),
        r = (0, O.v4)(i);
    return null === e ? null : t && 1 !== n.length ? (0, l.jsx)(tl, {}) : (0, l.jsx)(tn, { userId: e, subText: r });
}
tn.displayName = "FamilyCenterActivityCardAccountRow";
let tr = function () {
    let e = (0, el.Mo)(),
        t = (0, d.bG)([L.A], () => Object.values(D.NV).some((e) => L.A.getTotalForDisplayType(e) > 0)),
        n = (0, el.jp)(),
        i = (0, O.v4)(n);
    return (0, l.jsxs)("div", {
        className: e6.kL,
        children: [
            (0, l.jsxs)("div", { className: e6.vF, children: [(0, l.jsx)(tt, {}), (0, l.jsx)(e4, {})] }),
            (0, l.jsxs)("div", {
                className: e7.a,
                children: [
                    (0, l.jsx)("div", { className: e6.wx, children: (0, l.jsx)(ti, {}) }),
                    (0, l.jsxs)(o.B, {
                        gap: 32,
                        padding: 32,
                        fullWidth: !1,
                        children: [
                            (0, l.jsx)("div", {
                                className: e6.O2,
                                children: e
                                    .filter((e) => {
                                        let [t] = e;
                                        return t !== D.NV.GIFTS;
                                    })
                                    .map((e) => {
                                        let [t, n] = e;
                                        return (0, l.jsx)(
                                            eo,
                                            { displayType: t, header: n.tooltipHeader() },
                                            `counter-${t}`,
                                        );
                                    }),
                            }),
                            (0, l.jsxs)("div", {
                                className: e6.RJ,
                                children: [
                                    (0, l.jsx)(e5, {}),
                                    t
                                        ? e.map((e) => {
                                              let [t] = e;
                                              return (0, l.jsx)(te, { displayType: t }, `${t}-list`);
                                          })
                                        : (0, l.jsx)(e1, { className: e6.RL, text: i ?? "" }),
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
    let e = (0, O.vx)(),
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
                      ? (0, l.jsx)(M.Pw, {
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
    let { selectedTab: e, handleTabChange: t } = F(),
        n = i.useCallback(() => {
            t(D.u9.ACTIVITY);
        }, [t]);
    return (0, l.jsxs)(o.B, {
        gap: 32,
        children: [
            (0, l.jsxs)(V.D, {
                className: ts.Gv,
                onClick: n,
                "aria-label": et.intl.string(et.t.ybUZql),
                children: [
                    (0, l.jsx)(w.ArrowLargeLeftIcon, { size: "sm", color: c.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    (0, l.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: et.intl.string(et.t["13/7kX"]),
                    }),
                ],
            }),
            (0, l.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, l.jsxs)(o.B, {
                        gap: 4,
                        className: ts.gn,
                        children: [
                            (0, l.jsx)(x.E, {
                                variant: "body-sm/medium",
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
var tc = n(300538);
function to(e) {
    let { children: t } = e,
        n = (0, ea.k)() ?? void 0,
        { handleTabChange: i } = F(),
        r = (0, tc.A)(n, () => {
            (i(D.u9.ACTIVITY), _.Ay.showTeenSettingsLoadErrorToast());
        });
    return null == n || r ? t : (0, l.jsx)(o.B, { align: "center", children: (0, l.jsx)(u.y, {}) });
}
var tu = n(404778),
    tm = n(110057);
let tx = function (e) {
    let { children: t, title: n, description: i } = e;
    return (0, l.jsxs)("div", {
        className: tm.L1,
        children: [
            (null != n || null != i) &&
                (0, l.jsxs)("div", {
                    className: tm.Km,
                    children: [
                        null != n &&
                            (0, l.jsx)(z.D, { variant: "heading-lg/semibold", color: "text-strong", children: n }),
                        null != i && (0, l.jsx)(x.E, { variant: "body-sm/normal", color: "text-default", children: i }),
                    ],
                }),
            (0, l.jsx)("div", { className: tm.Yq, children: t }),
            (0, l.jsx)(tu.c, { className: tm.yj }),
        ],
    });
};
var th = n(280668);
function tf(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: th.y, children: t });
}
var tj = n(389462),
    tg = n(464946),
    tA = n(750994),
    tv = n(620432),
    tE = n(171316);
function tN() {
    let e = (0, tE.KK)(),
        t = (0, ea.k)() ?? void 0,
        n = (0, tE.NZ)();
    return (0, l.jsx)(tg.h, {
        children: (0, l.jsx)(tA.Ay, {
            title: n ? et.intl.string(et.t.PMsfcH) : et.intl.string(et.t.RAQUSN),
            note: n ? et.intl.string(et.t.XXGmuB) : et.intl.string(et.t.wbYDfT),
            value: !e,
            onChange: function (e) {
                (0, tv._)(tj.yr.updateControlledSetting(t, !e));
            },
        }),
    });
}
var tp = n(871309),
    ty = n(171576),
    tb = n(953298),
    tT = n(975571);
function tI() {
    let e = (0, ea.k)() ?? void 0,
        t = (0, tE.KK)(),
        n = tj.ES.useControlledSetting(e);
    return (0, l.jsx)(tg.h, {
        children: (0, l.jsx)(tA.Ay, {
            title: et.intl.string(et.t["3o2ojh"]),
            value: !t && !n,
            onChange: (t) => {
                !t && (0, tb.w)()
                    ? tp.A.showAgeVerificationGetStartedModal({ entryPoint: ty.q1.MESSAGE_REQUESTS_SETTINGS })
                    : (0, tv._)(tj.ES.updateControlledSetting(e, !t));
            },
            disabled: t,
            note: et.intl.format(et.t.IoztJ0, { helpdeskArticle: tT.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
var tS = n(665260),
    tC = n(115063);
function t_() {
    let e = (0, ea.k)() ?? void 0,
        t = tj.up.useControlledSetting(e),
        n = i.useMemo(() => (0, tC.Lx)(t), [t]);
    return null == e
        ? null
        : (0, l.jsxs)(tf, {
              children: [
                  (0, l.jsx)(tg.h, {
                      children: (0, l.jsx)(tA.Ay, {
                          title: et.intl.string(et.t["7x9dyE"]),
                          value: n.all,
                          onChange: (t) =>
                              (0, tv._)(tj.up.updateControlledSetting(e, t ? 14 : 14 & ~U.dzt.NO_RELATION)),
                      }),
                  }),
                  (0, l.jsx)(tg.h, {
                      children: (0, l.jsx)(tA.Ay, {
                          title: et.intl.string(et.t.NfeuZ3),
                          value: n.all || n.mutualFriends,
                          onChange: (n) =>
                              (0, tv._)(
                                  tj.up.updateControlledSetting(
                                      e,
                                      n
                                          ? tS.UI(t, U.dzt.MUTUAL_FRIENDS)
                                          : tS.iE(t, U.dzt.MUTUAL_FRIENDS, U.dzt.NO_RELATION),
                                  ),
                              ),
                      }),
                  }),
                  (0, l.jsx)(tg.h, {
                      children: (0, l.jsx)(tA.Ay, {
                          title: et.intl.string(et.t.qsMfsH),
                          value: n.all || n.mutualGuilds,
                          onChange: (n) =>
                              (0, tv._)(
                                  tj.up.updateControlledSetting(
                                      e,
                                      n
                                          ? tS.UI(t, U.dzt.MUTUAL_GUILDS)
                                          : tS.iE(t, U.dzt.MUTUAL_GUILDS, U.dzt.NO_RELATION),
                                  ),
                              ),
                      }),
                  }),
              ],
          });
}
var tL = n(444802),
    tR = n(875162),
    tk = n(873298),
    tD = n(389737),
    tU = n(523009),
    tP = n(704724);
function tF() {
    let e = (0, ea.k)(),
        t = (0, tE.xs)(),
        n = [
            { value: tk.TO.BLUR, label: et.intl.string(et.t.S49Uad) },
            { value: tk.TO.BLOCK, label: et.intl.string(et.t["D/157Y"]) },
        ];
    if (null == t || null == e) return null;
    function i(t) {
        null != e && (0, tP.Jz)(e, t);
    }
    let { explicitContentFriendDm: r, explicitContentNonFriendDm: s } = t;
    return (0, l.jsxs)(tD.E, {
        description: et.intl.string(et.t.Wnojv1),
        children: [
            (0, l.jsx)(tU.A, {
                title: et.intl.string(et.t["+uI23H"]),
                value: r,
                onChange: (e) => i({ explicitContentFriendDm: e }),
                options: n,
            }),
            (0, l.jsx)(tU.A, {
                title: et.intl.string(et.t["Yh+HX1"]),
                value: s,
                onChange: (e) => i({ explicitContentNonFriendDm: e }),
                options: n,
            }),
        ],
    });
}
function tO() {
    let e = (0, ea.k)(),
        t = (0, tE.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: i } = t;
    function r(t) {
        null != e && (0, tP.qY)(e, t);
    }
    let s = [
        { value: tk.TO.BLUR, label: et.intl.string(et.t.S49Uad) },
        { value: tk.TO.BLOCK, label: et.intl.string(et.t["D/157Y"]) },
    ];
    return (0, l.jsxs)(tD.E, {
        description: et.intl.string(et.t.XgH9eh),
        children: [
            (0, l.jsx)(tU.A, {
                title: et.intl.string(et.t["+uI23H"]),
                value: n,
                onChange: (e) => r({ goreContentFriendDm: e }),
                options: s,
            }),
            (0, l.jsx)(tU.A, {
                title: et.intl.string(et.t["Yh+HX1"]),
                value: i,
                onChange: (e) => r({ goreContentNonFriendDm: e }),
                options: s,
            }),
        ],
    });
}
var tM = n(309318);
function tG() {
    let e = (0, tL.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: et.intl.string(et.t.GYpoAq),
                component: () => (0, l.jsx)(tF, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: et.intl.string(et.t["16/3Bi"]),
                component: () => (0, l.jsx)(tO, {}),
                orientation: "vertical",
            },
        ];
    return (0, l.jsxs)(tg.h, {
        children: [
            (0, l.jsx)(tg._, {
                header: et.intl.string(et.t["Hj/But"]),
                description: et.intl.format(et.t["H/Icz+"], { learnMoreLink: tT.A.getArticleURL(e) }),
            }),
            (0, l.jsx)(tR.A, { tabs: t, orientation: "vertical", tabsClassName: tM.v }),
        ],
    });
}
let tV = function () {
    return (0, l.jsxs)(o.B, {
        gap: 32,
        children: [
            (0, l.jsx)(td, {}),
            (0, l.jsx)(to, {
                children: (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(tx, { title: et.intl.string(et.t.xVRG4P), children: (0, l.jsx)(tG, {}) }),
                        (0, l.jsx)(tx, {
                            title: et.intl.string(et.t["y62Z/d"]),
                            children: (0, l.jsxs)(tf, { children: [(0, l.jsx)(tN, {}), (0, l.jsx)(tI, {})] }),
                        }),
                        (0, l.jsx)(tx, { title: et.intl.string(et.t["1Qn8iV"]), children: (0, l.jsx)(t_, {}) }),
                    ],
                }),
            }),
        ],
    });
};
function tw() {
    let { hasConsented: e, updateConsent: t } = (0, tE.lH)(U.YAq.PERSONALIZATION);
    return (0, l.jsx)(tg.h, {
        children: (0, l.jsx)(tA.Ay, {
            title: et.intl.string(ee.default.XMPqUx),
            note: et.intl.format(ee.default.Imp6Ns, {
                helpdeskArticle: tT.A.getArticleURL(U.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
function tz() {
    let e = (0, ea.k)() ?? void 0,
        t = tj.yH.useControlledSetting(e),
        n = tj.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, l.jsx)(tg.h, {
              children: (0, l.jsx)(tA.Ay, {
                  title: et.intl.string(et.t.CyLYKZ),
                  note: et.intl.format(ee.default["6mK5Pz"], {
                      helpdeskArticle: tT.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => (0, tv._)(tj.yH.updateControlledSetting(e, !t)),
                  disabled: n,
              }),
          });
}
function tH() {
    let e = (0, ea.k)() ?? void 0,
        t = tj.kf.useControlledSetting(e);
    return (0, l.jsx)(tg.h, {
        children: (0, l.jsx)(tA.Ay, {
            title: et.intl.string(ee.default.ZhaNu8),
            note: et.intl.format(ee.default.cnCK6b, {
                helpdeskArticle: tT.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => (0, tv._)(tj.kf.updateControlledSetting(e, !t)),
        }),
    });
}
function tB() {
    let { hasConsented: e, updateConsent: t } = (0, tE.lH)(U.YAq.USAGE_STATISTICS);
    return (0, l.jsx)(tg.h, {
        children: (0, l.jsx)(tA.Ay, {
            title: et.intl.string(ee.default.HjstRR),
            note: et.intl.format(ee.default.Z5yJZy, {
                helpdeskArticle: tT.A.getArticleURL(U.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: e,
            onChange: t,
        }),
    });
}
let tY = function () {
    return (0, l.jsxs)(o.B, {
        gap: 32,
        children: [
            (0, l.jsx)(td, {}),
            (0, l.jsx)(to, {
                children: (0, l.jsx)("div", {
                    children: (0, l.jsxs)(tx, {
                        title: et.intl.string(et.t.SRZyHg),
                        children: [(0, l.jsx)(tB, {}), (0, l.jsx)(tH, {}), (0, l.jsx)(tz, {}), (0, l.jsx)(tw, {})],
                    }),
                }),
            }),
        ],
    });
};
var tq = n(582394),
    tZ = n(141006),
    tK = n(855986),
    tW = n(173936),
    tX = n(964486),
    tQ = n(957565),
    tJ = n(765548),
    t$ = n(647219);
function t0() {
    return (0, O.xr)() ? null : (0, l.jsx)(t1, {});
}
function t1() {
    let e,
        t = i.useCallback(() => {
            (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
        }, []),
        { getLinkCode: r } = (0, H.A)(),
        s = (0, O.VE)(),
        a = (0, tK.bG)([L.A], () => L.A.getLinkCodeExpiresAt());
    ((0, tX.Ay)(() => {
        r();
    }),
        (e = (0, tJ.A)(r)),
        i.useEffect(() => {
            if (null == a) return;
            let t = a - Date.now();
            if (t <= 0) return void e();
            let n = setTimeout(e, t);
            return () => clearTimeout(n);
        }, [a, e]));
    let d = i.useCallback(() => {
            ((0, Z.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(72338),
                    n.e(776915),
                    n.e(595429),
                    n.e(595948),
                    n.e(525989),
                    n.e(813036),
                    n.e(735611),
                ]).then(n.bind(n, 207049));
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
                k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.ShowQRCodeModal }));
        }, [t]),
        c = i.useCallback(() => {
            null != s &&
                (k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.CopyLink }),
                (0, tQ.C)(s, () => (0, W.P0)({ text: et.intl.string(et.t["L/PwZf"]), variant: "success" })));
        }, [s]);
    return (0, l.jsxs)("div", {
        className: t$.U,
        children: [
            (0, l.jsx)(h.$, {
                icon: tZ.QrCodeIcon,
                variant: "primary",
                text: et.intl.string(ee.default["m/3urB"]),
                onClick: d,
            }),
            (0, l.jsx)(h.$, {
                icon: tW.LinkIcon,
                variant: "secondary",
                text: et.intl.string(et.t.WqhZss),
                disabled: null == s,
                onClick: c,
            }),
        ],
    });
}
var t3 = n(769062);
function t2() {
    let e = (0, O.Li)(),
        t = (0, R.A)(),
        { handleTabChange: n } = F();
    return (0, O.xr)() || (t && e)
        ? null
        : (0, l.jsx)("div", {
              className: t3.x6,
              children: t
                  ? (0, l.jsx)(h.$, {
                        variant: "primary",
                        text: et.intl.string(et.t.LhlgY9),
                        onClick: () => n(D.u9.REQUESTS),
                    })
                  : (0, l.jsx)(t0, {}),
          });
}
let t9 = function () {
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
        className: s()(t3.kL, e7.a),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", {
                        children: (0, l.jsxs)("div", {
                            className: t3.TK,
                            children: [
                                (0, l.jsx)(z.D, {
                                    variant: "heading-xl/medium",
                                    children: (0, l.jsx)(ed.F, { children: t }),
                                }),
                                (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: n }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(t2, {}),
                ],
            }),
            (0, l.jsx)("div", {
                className: t3.F0,
                children: (0, l.jsx)("img", {
                    src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                    alt: et.intl.string(ee.default.ffg6xd),
                }),
            }),
        ],
    });
};
var t8 = n(299628),
    t5 = n(324149);
let t6 = function (e) {
    let { icon: t, iconClassName: n, header: i, description: r } = e;
    return (0, l.jsxs)("div", {
        className: s()(t5.kL, e7.a),
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
                    (0, l.jsx)(z.D, {
                        variant: "heading-sm/semibold",
                        className: t5.wx,
                        children: (0, l.jsx)(ed.F, { children: i }),
                    }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: r }),
                ],
            }),
        ],
    });
};
var t7 = n(28863),
    t4 = n(683071),
    ne = n(987197),
    nt = n(822585);
function nn() {
    (0, et.useSyncMessages)(ee.messagesLoader);
    let e = (0, ne.f)(),
        t = (0, nt.L)()?.daysRemaining ?? null;
    if (!e || null == t || t < 0) return null;
    function n(e, t) {
        return (0, l.jsx)(
            t7.Anchor,
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
        children: (0, l.jsx)(t4.w, {
            type: "warning",
            message:
                0 === t
                    ? et.intl.format(ee.default.S5kmfO, { learnMoreHook: n })
                    : et.intl.format(ee.default["5jm+T3"], { count: t, learnMoreHook: n }),
            role: "none",
        }),
    });
}
var nl = n(847374),
    ni = n(922529),
    nr = n(780964),
    ns = n(830543),
    na = n(766075),
    nd = n(219893),
    nc = n(465323),
    no = n(617617),
    nu = n(361157);
function nm(e) {
    let t = (0, tK.bG)([L.A], () => L.A.getMonthlyPurchases());
    return (function (e, t) {
        if (null == e) return { kind: "off" };
        if (0 === e.amount) return { kind: "blocked" };
        let n = e.currency,
            l = (0, $.CE)((0, $.$g)(e.amount, n), eg.WT.MONTH, 1);
        if (t >= e.amount) return { kind: "spent", monthlyText: l };
        let i = nc.yR[e.currency] ?? 2,
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
    nh = n(327919),
    nf = n(165862),
    nj = n(477782),
    ng = n(943255),
    nA = n(265872),
    nv = n(408278),
    nE = n(365199),
    nN = n(143129),
    np = n(95396),
    ny = n(585634);
function nb(e) {
    let { closePopout: t, onEdit: n, onDelete: i } = e;
    return (0, l.jsxs)(nf.W, {
        "data-menu-migrated": !0,
        "aria-label": et.intl.string(et.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, l.jsx)(nj.Dr, { id: "edit", label: et.intl.string(ee.default.b3DPqg), action: n }),
            (0, l.jsx)(nj.Dr, { id: "delete", label: et.intl.string(ee.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function nT(e) {
    let { rule: t, teenId: r, readOnly: s = !1 } = e,
        a = i.useRef(null),
        d = t?.enabled ?? !0,
        c = (0, nd.li)(t),
        u = (0, nd.n1)(t.days);
    function m() {
        (0, Z.mM)(async () => {
            let { default: e } = await Promise.all([n.e(58008), n.e(777848), n.e(386135)]).then(n.bind(n, 362890));
            return (n) => (0, l.jsx)(e, { ...n, teenId: r, rule: t });
        });
    }
    async function h() {
        try {
            await (0, np.CS)(r, t.ruleId);
        } catch {
            (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
        }
    }
    return (0, l.jsxs)(o.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        children: [
            (0, l.jsx)("div", { className: ny.X, children: (0, l.jsx)(ng.ThemeDarkIcon, { size: "md" }) }),
            (0, l.jsxs)(o.B, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, l.jsx)(x.E, { variant: "body-md/medium", children: c }),
                    (0, l.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: u }),
                ],
            }),
            (0, l.jsxs)(o.B, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !s &&
                        (0, l.jsx)(nA.Y, {
                            targetElementRef: a,
                            renderPopout: (e) => (0, l.jsx)(nb, { ...e, onEdit: m, onDelete: h }),
                            position: "bottom",
                            align: "right",
                            animation: nA.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, l.jsx)(nv.K, {
                                    buttonRef: a,
                                    size: "sm",
                                    icon: nE.MoreHorizontalIcon,
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
                        className: ny.m,
                        children: (0, l.jsx)(nN.d, {
                            checked: d,
                            label: et.intl.string(ee.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: async function () {
                                try {
                                    await (0, np.Um)(r, t.ruleId, { enabled: !d });
                                } catch {
                                    (0, W.P0)({ text: et.intl.string(ee.default.Wu8BK2), variant: "critical" });
                                }
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
var nI = n(12350);
function nS(e) {
    let { title: t, subtitle: n, buttonText: i, onButtonPress: r, readOnly: s = !1 } = e;
    return (0, l.jsxs)(o.B, {
        padding: { top: 12, bottom: 12 },
        justify: "space-between",
        direction: "horizontal",
        align: "center",
        gap: 32,
        children: [
            (0, l.jsxs)(o.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, l.jsx)(x.E, { variant: "body-md/medium", children: t }),
                    null != n && (0, l.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? nI.nh : void 0,
                children: (0, l.jsx)(h.$, { text: i, onClick: r, variant: "secondary", size: "sm", disabled: s }),
            }),
        ],
    });
}
function nC(e, t, i) {
    return (0, l.jsx)(nS, {
        title: et.intl.string(ee.default.gMeekL),
        subtitle:
            null != t
                ? (function (e) {
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
                                      (0, l.jsx)(x.E, {
                                          variant: "body-sm/normal",
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
                                      (0, l.jsx)(x.E, {
                                          variant: "body-sm/normal",
                                          color: "text-feedback-critical",
                                          tag: "span",
                                          children: et.intl.string(ee.default.Q2msVQ),
                                      }),
                                  ],
                              });
                          case "blocked":
                              return (0, l.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  tag: "span",
                                  children: et.intl.string(ee.default.FUu2b0),
                              });
                      }
                  })(t)
                : void 0,
        buttonText: et.intl.string(et.t.bt75uw),
        onButtonPress: () => {
            (0, Z.mM)(async () => {
                let { default: t } = await Promise.all([n.e(781173), n.e(760064)]).then(n.bind(n, 270915));
                return (n) => (0, l.jsx)(t, { ...n, teenId: e });
            });
        },
        readOnly: i,
    });
}
function n_(e) {
    let { teenId: t } = e;
    return nC(
        t,
        nm(
            (0, tK.bG)(
                [no.A],
                () => {
                    let e = no.A.settings.safetySettings?.spendingLimitSettings?.oneTimePurchaseLimit;
                    return null == e ? null : { amount: Number(e.amount), currency: e.currency };
                },
                void 0,
                nu.Ky,
            ),
        ),
        !0,
    );
}
function nL(e) {
    let { teenId: t } = e,
        n = nm(tj.fD.useControlledSetting(t)),
        l = (0, B.Vt)(t);
    return nC(t, l ? n : null);
}
function nR(e) {
    let { teenId: t, readOnly: r = !1 } = e,
        s = (0, B.y3)(),
        a = s?.restrictedSchedule?.rules ?? [],
        d = (0, nd.I2)(a),
        [c, u] = i.useState(d.length > 0);
    function m() {
        (0, Z.mM)(async () => {
            let { default: e } = await Promise.all([n.e(58008), n.e(777848), n.e(386135)]).then(n.bind(n, 362890));
            return (n) => (0, l.jsx)(e, { ...n, teenId: t });
        });
    }
    return (i.useEffect(() => {
        d.length > 0 && u(!0);
    }, [d.length]),
    0 === d.length)
        ? (0, l.jsx)(nS, {
              title: et.intl.string(ee.default["1Op+NP"]),
              buttonText: et.intl.string(ee.default.OwFF4o),
              onButtonPress: m,
              readOnly: r,
          })
        : (0, l.jsxs)(o.B, {
              direction: "vertical",
              gap: 0,
              children: [
                  (0, l.jsxs)(V.D, {
                      className: nI.dV,
                      onClick: () => u((e) => !e),
                      "aria-expanded": c,
                      children: [
                          (0, l.jsx)("div", {
                              className: nI.WB,
                              children: (0, l.jsxs)(o.B, {
                                  direction: "vertical",
                                  gap: 4,
                                  children: [
                                      (0, l.jsx)(x.E, {
                                          variant: "body-md/medium",
                                          children: et.intl.string(ee.default["1Op+NP"]),
                                      }),
                                      (0, l.jsx)(x.E, {
                                          variant: "body-sm/normal",
                                          color: "text-muted",
                                          children: et.intl.formatToPlainString(ee.default.XfwcpX, { count: d.length }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: nI.pt,
                              children: (0, l.jsx)(nl.ChevronSmallDownIcon, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: `${nI.ai} ${c ? nI.hg : ""}`,
                              }),
                          }),
                      ],
                  }),
                  c &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(o.B, {
                                  direction: "vertical",
                                  gap: 16,
                                  padding: { top: 24, bottom: 24 },
                                  children: d.map((e) => (0, l.jsx)(nT, { rule: e, teenId: t, readOnly: r }, e.ruleId)),
                              }),
                              (0, l.jsx)("div", {
                                  className: r ? nI.nh : void 0,
                                  children: (0, l.jsx)(h.$, {
                                      text: et.intl.string(ee.default.OwFF4o),
                                      onClick: m,
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
function nk() {
    let e = (0, O.vx)(),
        t = (0, B.y3)();
    function n() {
        (0, na.openUserSettings)(nr.X.MESSAGING_PERMISSIONS_PANEL);
    }
    return (0, l.jsxs)(o.B, {
        direction: "vertical",
        gap: 0,
        children: [
            (0, l.jsxs)(o.B, {
                padding: { bottom: 12 },
                justify: "space-between",
                direction: "horizontal",
                align: "center",
                gap: 32,
                children: [
                    (0, l.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 4,
                        children: [
                            (0, l.jsx)(x.E, {
                                variant: "body-sm/semibold",
                                children: et.intl.string(ee.default.ahKIJO),
                            }),
                            (0, l.jsx)(x.E, {
                                variant: "body-md/medium",
                                color: "text-muted",
                                children: et.intl.format(ee.default.X9rW0j, {
                                    openSettingsHook: (e, t) => (0, l.jsx)(t7.Anchor, { onClick: n, children: e }, t),
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(h.$, {
                        text: et.intl.formatToPlainString(ee.default.ggcjPR, { count: e.length }),
                        onClick: function () {
                            (0, nh.A)(e, ns.default, () =>
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
                        (0, l.jsx)(ni.A, { className: nI.yF }),
                        (0, l.jsx)(n_, { teenId: t.id }),
                        (0, l.jsx)(ni.A, { className: nI.yF }),
                        (0, l.jsx)(nR, { teenId: t.id, readOnly: !0 }),
                    ],
                }),
        ],
    });
}
function nD() {
    let e = (0, B.y3)(),
        t = (0, B.tl)(),
        { handleTabChange: n } = F();
    return (
        i.useEffect(() => {
            e?.id != null && t && _.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(o.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, l.jsx)(x.E, { variant: "body-sm/semibold", children: et.intl.string(ee.default.ahKIJO) }),
                        (0, l.jsx)(x.E, {
                            variant: "body-md/medium",
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
                (0, l.jsx)(ni.A, { className: nI.yF }),
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
                            (0, l.jsx)(ni.A, { className: nI.yF }),
                            (0, l.jsx)(nL, { teenId: e.id }),
                            (0, l.jsx)(ni.A, { className: nI.yF }),
                            (0, l.jsx)(nR, { teenId: e.id }),
                        ],
                    }),
            ],
        })
    );
}
function nU() {
    let e = (0, nx.A)();
    return 0 === (0, O.vx)().length
        ? null
        : (0, l.jsx)("div", { className: nI.kL, children: e ? (0, l.jsx)(nk, {}) : (0, l.jsx)(nD, {}) });
}
var nP = n(768775);
let nF = function () {
    let e = (0, O.vx)().length > 0,
        t = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        n = (0, ei.y)(et.intl.string(ee.default["5RZ8Tq"]), et.intl.string(ee.default.bmhCnL)),
        i = (0, ei.y)(et.intl.string(ee.default.XKnFFq), et.intl.string(ee.default["68zfxD"])),
        r = (0, ei.y)(et.intl.string(ee.default["Rm/6a0"]), et.intl.string(ee.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, l.jsxs)("div", {
              className: nP.kL,
              children: [
                  (0, l.jsx)(nn, {}),
                  e
                      ? null
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { className: nP.vK, children: (0, l.jsx)(t9, {}) }),
                                (0, l.jsxs)("div", {
                                    className: nP.yk,
                                    children: [
                                        (0, l.jsx)(t6, {
                                            icon: tq.ChatCheckIcon,
                                            header: et.intl.string(ee.default["001l3m"]),
                                            description: n,
                                        }),
                                        (0, l.jsx)(t6, {
                                            icon: X.EyeIcon,
                                            header: et.intl.string(ee.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, l.jsx)(t6, {
                                            icon: tZ.QrCodeIcon,
                                            header: et.intl.string(ee.default.hhOuMe),
                                            description: r,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, l.jsx)(tr, {}) : (0, l.jsx)(t8.A, { showSectionDescriptions: !0 }),
                  (0, l.jsx)(nU, {}),
              ],
          });
};
n(801541);
var nO = n(889137),
    nM = n(837381),
    nG = n(62617);
function nV(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: s, width: a, height: d, className: c, style: o } = e,
        u = i.useMemo(
            () => (0, nG.H)({ width: a, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: o }),
            [a, d, o],
        );
    return (0, l.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/bb4093f4ae937ad09bc359b162988c3cbb7d49d924073fee7d66a763e738fc67.svg",
        className: (0, nG.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: s ?? "img",
    });
}
var nw = n(475825),
    nz = n(260762),
    nH = n(485947),
    nB = n(426190),
    nY = n(789645),
    nq = n(866665),
    nZ = n(883005);
function nK(e) {
    let { icon: t, tooltip: n, onClick: i, className: r } = e;
    return (0, l.jsx)(nq.m, {
        text: n,
        children: (0, l.jsx)(V.D, {
            "aria-label": n,
            onClick: function (e) {
                (e.preventDefault(), e.stopPropagation(), i(e));
            },
            className: s()(nZ.hP, r),
            children: (0, l.jsx)(t, { className: nZ.Kk, color: "currentColor" }),
        }),
    });
}
var nW = n(854627),
    nX = n(253400),
    nQ = n(218750);
let nJ = nX.Ay.getEnableHardwareAcceleration() ? eG.Js : eG.eu;
function n$(e) {
    let { otherUser: t, status: n } = e,
        i = (0, O.XC)(t.id, n),
        {
            avatarSrc: r,
            avatarDecorationSrc: s,
            eventHandlers: a,
        } = (0, nW.A)({ userId: t.id, size: G._3.SIZE_40, animateOnHover: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ...a,
                children: (0, l.jsx)(nJ, {
                    className: nQ.my,
                    src: r,
                    avatarDecoration: s,
                    size: G._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, l.jsxs)("div", {
                className: nQ.yt,
                children: [
                    (0, l.jsx)("div", { className: nQ.Vx, children: (0, l.jsx)(eJ.A, { user: t }) }),
                    (0, l.jsx)(x.E, { color: "text-muted", variant: "body-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var n0 = n(856087);
function n1(e) {
    let { user: t } = e,
        r = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        s = i.useCallback(() => {
            (q()(void 0 !== r, "User must be logged in to accept a link request"),
                (0, Z.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(321855), n.e(943139)]).then(n.bind(n, 179950));
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: r, otherUser: t });
                }));
        }, [r, t]);
    return (0, l.jsxs)("div", {
        className: n0.kL,
        children: [
            (0, l.jsx)("div", { className: n0.zH, children: (0, l.jsx)(n$, { otherUser: t, status: D.Ef.ACTIVE }) }),
            (0, l.jsx)("div", {
                className: n0.o1,
                children: (0, l.jsx)(nK, {
                    icon: nY.XSmallIcon,
                    tooltip: et.intl.string(ee.default.l20ZZp),
                    onClick: s,
                }),
            }),
        ],
    });
}
var n3 = n(933832);
function n2(e) {
    let { user: t } = e,
        r = (0, R.A)(),
        s = (0, O.xr)(),
        a = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        c = i.useCallback(() => {
            (q()(void 0 !== a, "User must be logged in to accept a link request"),
                (0, Z.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(916131), n.e(155738), n.e(331385)]).then(
                        n.bind(n, 58144),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]),
        o = i.useCallback(() => {
            (q()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Z.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(916131), n.e(155738), n.e(384811)]).then(
                        n.bind(n, 389094),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]),
        u = i.useCallback(() => {
            (q()(void 0 !== a, "User must be logged in to decline a link request"),
                (0, Z.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(916131), n.e(155738), n.e(817219)]).then(
                        n.bind(n, 187278),
                    );
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: a, otherUser: t });
                }));
        }, [a, t]);
    return (0, l.jsxs)("div", {
        className: n0.kL,
        children: [
            (0, l.jsx)("div", { className: n0.zH, children: (0, l.jsx)(n$, { otherUser: t, status: D.Ef.PENDING }) }),
            (0, l.jsx)("div", {
                className: n0.o1,
                children: r
                    ? (0, l.jsx)(nK, { icon: nY.XSmallIcon, tooltip: et.intl.string(ee.default.e5iHmZ), onClick: u })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              s
                                  ? null
                                  : (0, l.jsx)(nK, {
                                        icon: n3.CheckmarkLargeIcon,
                                        tooltip: et.intl.string(ee.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, l.jsx)(nK, {
                                  icon: nY.XSmallIcon,
                                  tooltip: et.intl.string(ee.default.bBDeNI),
                                  onClick: o,
                              }),
                          ],
                      }),
            }),
        ],
    });
}
var n9 = n(615300),
    n8 = n(559106),
    n5 = n(702476),
    n6 = n(487565);
let n7 = function (e) {
    let { userId: t, children: n, isLast: r, className: a } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: o } = (0, p.Ay)(),
        u = i.useCallback(() => {
            (0, n5.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: o });
        }, [t, o]);
    function m() {
        c(!0);
    }
    function x() {
        c(!1);
    }
    return (0, l.jsx)(nM.tG, {
        id: t,
        children: (e) =>
            (0, l.jsx)(n8.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(n9.A.div, {
                    style: { opacity: 1 },
                    className: s()(n6.KG, a, { [n6.HV]: r, [n6.vu]: d }),
                    onMouseEnter: m,
                    onMouseLeave: x,
                    onClick: u,
                    ...e,
                    children: n(d),
                }),
            }),
    });
};
var n4 = n(327337),
    le = n(375980);
function lt(e) {
    let { header: t, description: n, stepNumber: i } = e;
    return (0, l.jsxs)("div", {
        className: le.PM,
        children: [
            (0, l.jsx)("div", {
                className: le.CD,
                children: (0, l.jsx)(z.D, {
                    variant: "heading-sm/semibold",
                    color: "text-brand",
                    children: (0, l.jsx)(ed.F, { children: i }),
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.D, { variant: "heading-xs/semibold", children: (0, l.jsx)(ed.F, { children: t }) }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: n }),
                ],
            }),
        ],
    });
}
function ln() {
    return (0, l.jsxs)("div", {
        className: s()(le.aP, e7.a, le.dO, le.p2),
        children: [
            (0, l.jsxs)("div", {
                className: le.Np,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(z.D, {
                                className: e0.QB,
                                variant: "heading-xl/medium",
                                children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default.pHEnV5) }),
                            }),
                            (0, l.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                className: e0.SX,
                                children: et.intl.string(ee.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)(nV, { alt: "", ariaHidden: !0, width: 224, className: le._u }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: le.Ci,
                children: [
                    (0, l.jsx)(lt, {
                        header: et.intl.string(ee.default["7xxAni"]),
                        description: et.intl.string(ee.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, l.jsx)(lt, {
                        header: et.intl.string(ee.default["AXgx+a"]),
                        description: et.intl.string(ee.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, l.jsx)(lt, {
                        header: et.intl.string(ee.default.MZn1tG),
                        description: et.intl.string(ee.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function ll() {
    let e = (0, O.xr)();
    return (0, l.jsxs)("div", {
        className: s()(le.aP, e7.a, le.dO),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.D, {
                        className: e0.QB,
                        variant: "heading-xl/medium",
                        children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default.zUCWEL) }),
                    }),
                    (0, l.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        className: e0.SX,
                        children: et.intl.format(ee.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, l.jsx)(t0, {}),
                ],
            }),
            (0, l.jsx)(nV, { alt: "", ariaHidden: !0, width: 224, className: le._u }),
        ],
    });
}
function li(e) {
    let { sectionType: t, sectionTitle: n, requests: r } = e,
        s = i.useRef(null),
        a = `${t}-list`,
        d = (0, nz.A)(a),
        c = i.useCallback(
            (e) => {
                let { row: n, listIndex: i } = e,
                    s = r[n],
                    a = i === r.length;
                return null == s
                    ? null
                    : (0, l.jsx)(
                          n7,
                          {
                              userId: s.id,
                              isLast: a,
                              children: () =>
                                  t === D.Ef.ACTIVE ? (0, l.jsx)(n1, { user: s }) : (0, l.jsx)(n2, { user: s }),
                          },
                          s.id,
                      );
            },
            [r, t],
        ),
        o = i.useCallback(
            () =>
                (0, l.jsx)(
                    nH.A,
                    {
                        children: (0, l.jsx)(x.E, {
                            className: e0.QB,
                            variant: "body-sm/medium",
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
                        nw.OZ,
                        {
                            innerRole: i,
                            innerAriaLabel: n,
                            ref: (e) => {
                                ((s.current = e), (t.current = e?.getScrollerNode() ?? null));
                            },
                            sectionHeight: 26,
                            rowHeight: 64,
                            renderSection: o,
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
function lr() {
    let e = (0, R.A)(),
        t = (0, O.GR)(),
        n = { count: t.length, max: e ? 8 : 3 },
        i = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["+tnO34"], n),
            et.intl.formatToPlainString(ee.default["pu6/U0"], n),
        );
    return t.length > 0
        ? (0, l.jsx)(li, { sectionType: D.Ef.ACTIVE, sectionTitle: i, requests: t })
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(x.E, { className: e0.QB, variant: "body-sm/medium", color: "text-default", children: i }),
                  (0, l.jsx)("div", {
                      className: le.aP,
                      children: (0, l.jsx)(x.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          children: et.intl.string(ee.default.C4ScLD),
                      }),
                  }),
              ],
          });
}
function ls() {
    let e = (0, O.xr)(),
        t = (0, R.A)() ? 8 : 3,
        n = (0, ei.y)(
            et.intl.formatToPlainString(ee.default["1/PzIj"], { maxConnections: t }),
            et.intl.formatToPlainString(ee.default.RcTgiE, { maxConnections: t }),
        );
    return e
        ? (0, l.jsx)("div", {
              className: le.rv,
              children: (0, l.jsx)(x.E, { variant: "footnote/medium", color: "text-muted", children: n }),
          })
        : null;
}
function la() {
    let e = (0, nB.N)(),
        t = (0, nB.z)(),
        n = (0, nO.YW)({ helpline: e, throughline: t })
            .with({ helpline: !0 }, () =>
                et.intl.format(ee.default["KOwsf/"], {
                    helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                }),
            )
            .with({ throughline: !0 }, () => et.intl.format(ee.default["6tsC8u"], { helpLink: n4.CL }))
            .otherwise(() => null);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(z.D, {
                      className: le.rH,
                      variant: "heading-xs/semibold",
                      children: (0, l.jsx)(ed.F, { children: et.intl.string(ee.default["7/tVhv"]) }),
                  }),
                  (0, l.jsx)(x.E, { variant: "body-xs/medium", color: "text-muted", children: n }),
              ],
          });
}
function ld() {
    let e = (0, O.xk)(D.Ef.PENDING),
        t = (0, ei.y)(
            et.intl.formatToPlainString(ee.default.IkAgkG, { count: e.length }),
            et.intl.formatToPlainString(ee.default.Q8XnAa, { count: e.length }),
        );
    return 0 === e.length ? null : (0, l.jsx)(li, { sectionType: D.Ef.PENDING, sectionTitle: t, requests: e });
}
let lc = function () {
    let e = (0, R.A)();
    return (0, l.jsxs)("div", {
        className: le.kL,
        children: [
            (0, l.jsx)(nn, {}),
            e ? (0, l.jsx)(ln, {}) : (0, l.jsx)(ll, {}),
            (0, l.jsx)(lr, {}),
            (0, l.jsx)(ld, {}),
            (0, l.jsx)(ls, {}),
            (0, l.jsx)(la, {}),
        ],
    });
};
var lo = n(561028),
    lu = n(946015),
    lm = n(270003),
    lx = n(993077),
    lh = n(935286),
    lf = n(840559),
    lj = n(997187),
    lg = n(723923),
    lA = n(629143);
let lv = function () {
    let e = S.dm.useSetting(),
        { categories: t, initialized: n } = (0, tK.cf)([lj.A], () => lj.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == n && (0, lf.cR)();
        }, [n]),
        (0, l.jsx)("div", {
            className: lA.kL,
            children: (0, l.jsxs)(lm.n, {
                label: et.intl.string(ee.default.USIXU7),
                children: [
                    (0, l.jsx)(nN.d, {
                        checked: e,
                        description: et.intl.string(ee.default["5MdB3j"]),
                        onChange: S.dm.updateSetting,
                        label: et.intl.string(ee.default.zkEceS),
                    }),
                    e
                        ? (0, l.jsx)(lx.Z, {
                              className: lA.MT,
                              type: lx.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, l.jsxs)(lu.s, {
                                  justify: lu.s.Justify.END,
                                  children: [
                                      (0, l.jsx)(lu.s.Child, {
                                          children: (0, l.jsx)(x.E, {
                                              variant: "body-sm/semibold",
                                              color: "text-default",
                                              children: et.intl.string(ee.default.xAVm7K),
                                          }),
                                      }),
                                      (0, l.jsx)(n8.vN, {
                                          children: (0, l.jsx)(lo.N_, {
                                              onClick: ns.default,
                                              to: { pathname: U.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: et.intl.string(ee.default.cUIXFY),
                                          }),
                                      }),
                                      (0, l.jsx)(j.fk, {
                                          icon: lh.ArrowSmallRightIcon,
                                          className: lA.UE,
                                          disableColor: !0,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    (0, l.jsx)(nN.d, {
                        checked: !!t[lg.HO.FAMILY_CENTER_DIGEST],
                        description: et.intl.string(ee.default.y34S46),
                        onChange: function (e) {
                            (0, lf.CA)(lg.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: et.intl.string(ee.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
var lE = n(731738),
    lN = n(612200),
    lp = n(913379),
    ly = n(210714);
let lb = new (n(611599).Vy)("useRefetchWhenSelectedTeenMissing");
var lT = n(33666),
    lI = n(204925);
function lS(e) {
    let { location: t, onMountEffect: n } = e,
        l = (0, lT.A)(),
        r = (0, O.W1)(),
        {
            familyCenterInitialized: s,
            isLoading: a,
            hasLoadFailed: c,
        } = (0, d.cf)([L.A], () => ({
            familyCenterInitialized: L.A.getIsInitialized(),
            isLoading: L.A.isLoading(),
            hasLoadFailed: L.A.hasInitialLoadFailed(),
        })),
        o = (0, ea.k)(),
        { selectedTab: u, handleTabChange: m } = F(),
        x = eK.default.getCurrentUser(),
        h = null != l,
        f = s && null != x && !h;
    ((0, tX.Ay)(() => {
        ((0, ly.d0)("family-center"), null != n && n());
    }),
        (function () {
            let {
                    isInitialized: e,
                    isLoading: t,
                    selectedTeenId: n,
                } = (0, tK.cf)([L.A], () => ({
                    isInitialized: L.A.getIsInitialized(),
                    isLoading: L.A.isLoading(),
                    selectedTeenId: L.A.getSelectedTeenId(),
                })),
                l = (0, O.Li)(),
                r = i.useRef(!1);
            i.useEffect(() => {
                if (!l || null != n) {
                    r.current = !1;
                    return;
                }
                !e ||
                    L.A.isLoading() ||
                    r.current ||
                    ((r.current = !0),
                    (async function () {
                        try {
                            await _.Ay.initialPageLoad({ showLoading: !1 });
                        } catch (e) {
                            lb.error("Failed to refetch Family Center for a missing selected teen", e);
                        }
                    })());
            }, [e, t, n, l]);
        })());
    let j = { isConsideredAdult: "adult" === l, numOfAcceptedRequests: r, selectedTab: u, selectedTeenId: o },
        g = i.useRef(j);
    return (
        i.useEffect(() => {
            g.current = j;
        }),
        i.useEffect(() => {
            if (s && h) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: l, selectedTeenId: i } = g.current;
                (k.default.track(U.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: i,
                    initial_page: D.zu[l],
                    source: D.iN[t],
                }),
                    lp.A.increment({ name: lE.K.FAMILY_CENTER_VIEW }));
            }
        }, [s, h, t]),
        i.useEffect(() => {
            f && !L.A.isLoading() && (0, lN.yO)(lI.w_.FAMILY_CENTER);
        }, [f, a]),
        { isLoading: a, hasLoadFailed: c, selectedTab: u, handleTabChange: m, showAgeGateModal: f }
    );
}
var lC = n(220330);
let l_ = {
        [D.u9.REQUESTS]: lc,
        [D.u9.ACTIVITY]: nF,
        [D.u9.SETTINGS]: lv,
        [D.u9.CONTENT_AND_SOCIAL]: tV,
        [D.u9.DATA_AND_PRIVACY]: tY,
        [D.u9.SCREEN_TIME_CONTROLS]: lv,
    },
    lL = { [D.u9.REQUESTS]: lc, [D.u9.ACTIVITY]: nF, [D.u9.CONTENT_AND_SOCIAL]: tV, [D.u9.DATA_AND_PRIVACY]: tY };
function lR() {
    return (0, l.jsx)(o.B, { justify: "center", align: "center", className: lC.g4, children: (0, l.jsx)(u.y, {}) });
}
function lk(e) {
    let { fillPanel: t = !1 } = e;
    return (0, l.jsxs)(o.B, {
        justify: "center",
        align: "center",
        gap: 24,
        padding: t ? 24 : { top: 96, bottom: 96 },
        className: s()(lC._I, { [lC.TP]: t }),
        role: "alert",
        children: [
            (0, l.jsxs)(o.B, {
                align: "center",
                gap: 12,
                children: [
                    (0, l.jsx)(m.CircleErrorIcon, {
                        size: "lg",
                        color: c.A.colors.ICON_FEEDBACK_CRITICAL,
                        "aria-hidden": !0,
                    }),
                    (0, l.jsx)(x.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        children: et.intl.string(ee.default.nGX8Co),
                    }),
                ],
            }),
            (0, l.jsx)(h.$, {
                variant: "primary",
                text: et.intl.string(et.t["7NqTJn"]),
                onClick: () => _.Ay.initialPageLoad(),
            }),
        ],
    });
}
function lD(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, O.VT)(),
        r = (0, R.A)();
    return [D.u9.CONTENT_AND_SOCIAL, D.u9.DATA_AND_PRIVACY, D.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, l.jsxs)(f.V, {
              className: lC.c5,
              "aria-label": et.intl.string(ee.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, l.jsx)(f.V.Item, {
                      className: lC.jA,
                      id: D.u9.ACTIVITY,
                      children: et.intl.string(ee.default.bdBmqy),
                  }),
                  (0, l.jsxs)(f.V.Item, {
                      className: lC.jA,
                      id: D.u9.REQUESTS,
                      "aria-label": et.intl.string(ee.default["gVWG+6"]),
                      children: [
                          et.intl.string(ee.default["gVWG+6"]),
                          i > 0 ? (0, l.jsx)(j.hV, { className: lC.qS, count: i }) : null,
                      ],
                  }),
                  r
                      ? (0, l.jsx)(f.V.Item, {
                            className: lC.jA,
                            id: D.u9.SETTINGS,
                            children: et.intl.string(et.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function lU(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        r = (0, b.GV)(),
        d = (0, O.VT)();
    return (0, l.jsx)(g.N, {
        theme: t,
        children: (e) =>
            (0, l.jsxs)(T.A, {
                className: s()(e, lC.ZB),
                scrollable: a.Fr,
                role: "navigation",
                "aria-labelledby": r,
                toolbar: !0,
                children: [
                    (0, l.jsx)(T.A.Icon, { icon: A.GroupIcon, "aria-hidden": !0 }),
                    (0, l.jsx)(T.A.Title, { id: r, children: et.intl.string(ee.default.RZqaJn) }),
                    (0, l.jsx)(T.A.Divider, {}),
                    (0, l.jsxs)(f.V, {
                        "aria-label": et.intl.string(ee.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, l.jsx)(f.V.Item, {
                                id: D.u9.ACTIVITY,
                                className: lC.AS,
                                children: et.intl.string(ee.default.bdBmqy),
                            }),
                            (0, l.jsxs)(f.V.Item, {
                                id: D.u9.REQUESTS,
                                className: lC.AS,
                                "aria-label": et.intl.string(ee.default["gVWG+6"]),
                                children: [
                                    et.intl.string(ee.default["gVWG+6"]),
                                    d > 0 ? (0, l.jsx)(j.hV, { className: lC.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function lP() {
    let e = (0, b.GV)(),
        {
            isLoading: t,
            hasLoadFailed: n,
            selectedTab: r,
            handleTabChange: s,
            showAgeGateModal: a,
        } = lS({
            location: D.MH.SETTINGS,
            onMountEffect: () => {
                _.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, C._)(P[r]);
        }, [r]),
        a)
    )
        return null;
    let d = l_[r];
    return (0, l.jsxs)("main", {
        className: lC.kL,
        "aria-label": et.intl.string(ee.default.RZqaJn),
        children: [
            (0, l.jsx)(y.HI, { location: et.intl.string(ee.default.RZqaJn) }),
            (0, l.jsx)(lD, {
                section: r,
                handleItemSelect: function (e) {
                    s(e);
                },
            }),
            (0, l.jsx)(f.V.Panel, {
                id: r,
                "aria-labelledby": e,
                className: lC.Us,
                children: n ? (0, l.jsx)(lk, {}) : t ? (0, l.jsx)(lR, {}) : (0, l.jsx)(d, {}),
            }),
        ],
    });
}
function lF() {
    let { analyticsLocations: e } = (0, p.Ay)(N.A.FAMILY_CENTER),
        t = (0, R.A)(),
        n = (0, d.bG)([L.A], () => L.A.getIsInitialized()),
        r = (0, d.bG)([I.A], () => I.A.theme),
        a = (0, b.GV)(),
        {
            isLoading: c,
            hasLoadFailed: o,
            selectedTab: u,
            handleTabChange: m,
            showAgeGateModal: x,
        } = lS({
            location: D.MH.SIDENAV,
            onMountEffect: () => {
                (E.I(U.BVt.FAMILY_CENTER), !L.A.isLoading() && L.A.canRefetch() && _.Ay.initialPageLoad());
            },
        });
    if (
        (i.useEffect(() => {
            let e = S.dm.getSetting();
            n && t && void 0 === e && S.dm.updateSetting(!0);
        }, [n, t]),
        x)
    )
        return null;
    let h = u !== D.u9.SETTINGS && u !== D.u9.SCREEN_TIME_CONTROLS ? u : D.u9.ACTIVITY,
        j = lL[h];
    return (0, l.jsx)(p.f5, {
        value: e,
        children: (0, l.jsxs)("main", {
            className: s()(lC.kL, lC.ei),
            "aria-label": et.intl.string(ee.default.RZqaJn),
            children: [
                (0, l.jsx)(y.HI, { location: et.intl.string(ee.default.RZqaJn) }),
                (0, l.jsx)(lU, {
                    theme: r,
                    section: h,
                    handleItemSelect: function (e) {
                        m(e);
                    },
                }),
                (0, l.jsx)(f.V.Panel, {
                    id: h,
                    "aria-labelledby": a,
                    className: lC.Om,
                    children: o
                        ? (0, l.jsx)(lk, { fillPanel: !0 })
                        : (0, l.jsx)(v.Ip, {
                              children: (0, l.jsx)("div", {
                                  className: lC.O4,
                                  children: c ? (0, l.jsx)(lR, {}) : (0, l.jsx)(j, {}),
                              }),
                          }),
                }),
            ],
        }),
    });
}
