n.d(t, { p: () => lF, A: () => lM });
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
    T = n(915089),
    b = n(742589),
    I = n(413599),
    S = n(253932),
    _ = n(669067),
    C = n(899847),
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
                (C.Ay.selectTab(e), k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.TabChange, tab: e }));
            },
        };
    };
var M = n(834981),
    O = n(843282),
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
    Q = n(661191),
    J = n(536637),
    $ = n.n(J),
    ee = n(580630),
    et = n(564382),
    en = n(792996);
function el(e) {
    return new Intl.DateTimeFormat(en.intl.currentLocale, { month: "short", day: "numeric" }).format($()(e).toDate());
}
var ei = n(923531),
    er = n(294433);
function es(e) {
    return (0, d.bG)([L.A], () => L.A.getTotalForDisplayType(e));
}
function ea(e) {
    let t = es(e) ?? 0;
    if (e === D.NV.TOTAL_VOICE_MINUTES) return (0, ei.hO)(t);
    if (e === D.NV.PURCHASES) {
        let e = L.A.getTotalSpendAmount(),
            n = L.A.getTotalSpendCurrency();
        return null != e && null != n ? (0, ee.RS)(e, n) : t;
    }
    if (e === D.NV.GIFTS) {
        let e = L.A.getTotalGiftValue();
        if (null != e) return (0, ee.RS)(e.amount, e.currency);
    }
    return t;
}
var ed = n(500470),
    ec = n(707554),
    eo = n(902546);
let eu = function (e) {
    let { header: t, displayType: n } = e,
        i = es(n),
        r = ea(n);
    return (0, l.jsxs)("div", {
        className: eo.hJ,
        children: [
            (0, l.jsx)(z.D, {
                variant: "heading-xxl/medium",
                color: i > 0 ? "text-brand" : "text-muted",
                children: (0, l.jsx)(ec.F, { children: r }),
            }),
            (0, l.jsx)(x.E, { variant: "body-sm/semibold", className: eo.io, children: t }),
        ],
    });
};
var em = n(821701),
    ex = n(427262),
    eh = n(575593),
    ef = n(898461),
    ej = n(203632),
    eg = n(486020),
    eA = n(682901);
function ev(e, t) {
    let n,
        l,
        i = null != t;
    if (null != e)
        ((n = e.name),
            (l = (function (e) {
                switch (e) {
                    case eh.R.AVATAR_DECORATION:
                        return en.intl.string(et.default.obi47v);
                    case eh.R.PROFILE_EFFECT:
                        return en.intl.string(et.default.RX8BMR);
                    case eh.R.NAMEPLATE:
                        return en.intl.string(et.default.nNGEHk);
                    case eh.R.BUNDLE:
                        return en.intl.string(et.default.VS1fKo);
                    case eh.R.PROFILE_FRAME:
                        return en.intl.string(et.default.JiIY1l);
                    default:
                        return "";
                }
            })(e.type)));
    else if (i && null != t) {
        let e = eA.hd[t];
        n = e?.name;
    }
    return { displayName: n, typeName: l, isSubscription: i };
}
var eE = n(34188),
    eN = n(104510),
    ep = n(403581),
    ey = n(253292),
    eT = n(780898),
    eb = n(287727),
    eI = n(665411),
    eS = n(740523);
function e_(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, ef.T)(t) ? (0, eg.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eS._P });
}
function eC(e) {
    let { displayName: t, nameplateData: n } = e,
        { staticImageUrl: i } = (0, ey.K)(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eS.M4 });
}
function eL(e) {
    let { displayName: t, product: n } = e,
        i = (function (e) {
            if (0 === e.items.length) return null;
            let t = e.items[0];
            return (0, ej.C3)(t) ? t.thumbnailPreviewSrc : null;
        })(n);
    return null == i ? null : (0, l.jsx)("img", { src: i, alt: t, className: eS._P });
}
function eR(e) {
    let { product: t } = e,
        n = (0, eb.A)(t.skuId);
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: eS.pI,
              children: (0, l.jsx)("div", { className: eS.ZS, children: (0, l.jsx)(eI.A, { frame: n }) }),
          });
}
function ek(e) {
    let { subscriptionPlanId: t } = e;
    if (null == t) return (0, l.jsx)("div", { className: eS.T8, children: (0, l.jsx)(eE.ShopIcon, {}) });
    let n = (function (e) {
        if (null == e) return !1;
        let t = eA.hd[e];
        return t?.skuId === eA.pe.GUILD;
    })(t);
    return (0, l.jsx)("div", {
        className: eS.T8,
        children: n
            ? (0, l.jsx)(eN.BoostGemIcon, { size: "custom", width: 20, height: 20 })
            : (0, l.jsx)(ep.NitroWheelIcon, { size: "custom", width: 20, height: 20 }),
    });
}
function eD(e) {
    let { displayName: t, product: n } = e;
    if (null == n) return (0, l.jsx)("div", { className: eS.T8, children: (0, l.jsx)(eE.ShopIcon, {}) });
    switch (n.type) {
        case eh.R.AVATAR_DECORATION:
            return (0, l.jsx)(e_, { displayName: t, product: n });
        case eh.R.NAMEPLATE:
            let i = (0, eT.EQ)(n);
            return null != i ? (0, l.jsx)(eC, { displayName: t, nameplateData: i }) : null;
        case eh.R.PROFILE_EFFECT:
            return (0, l.jsx)(eL, { displayName: t, product: n });
        case eh.R.PROFILE_FRAME:
            return (0, l.jsx)(eR, { product: n });
        default:
            return (0, l.jsx)("div", { className: eS.T8, children: (0, l.jsx)(eE.ShopIcon, {}) });
    }
}
let eU = function (e) {
    let { displayName: t, isSubscription: n, product: i, subscriptionPlanId: r } = e;
    return n ? (0, l.jsx)(ek, { subscriptionPlanId: r }) : (0, l.jsx)(eD, { displayName: t, product: i });
};
var eP = n(271308);
let eF = i.memo((e) => {
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
        { product: u } = (0, em.A)(t),
        m = (0, B.F7)(r),
        { displayName: h, isSubscription: f } = ev(u ?? null, n);
    if ((null != t && !f && null == u) || null == h) return null;
    let j = (function (e) {
        let { claimed: t, price: n, gifterName: l, offeredAt: i, claimedAt: r } = e,
            s = null != n ? (0, ee.$g)(n.amount, n.currency) : null,
            a = null;
        return (
            null != s && null != l
                ? (a = en.intl.formatToPlainString(et.default["o44n/1"], { price: s, username: l }))
                : null != s && (a = s),
            [
                a,
                t
                    ? en.intl.formatToPlainString(et.default.kDyllq, { date: el(r ?? i) })
                    : en.intl.formatToPlainString(et.default.gAG45y, { date: el(i) }),
            ]
                .filter(Boolean)
                .join(" \u2022 ")
        );
    })({ claimed: a, price: i, gifterName: null != m ? ex.Ay.getName(m) : null, offeredAt: d, claimedAt: c });
    return (0, l.jsxs)("div", {
        className: s()(eP.k, o),
        children: [
            (0, l.jsx)(eU, { displayName: h, isSubscription: f, product: u ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(x.E, { variant: "body-md/semibold", children: h }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", children: j }),
                ],
            }),
        ],
    });
});
eF.displayName = "FamilyCenterActivityGiftRow";
var eM = n(664343),
    eO = n(714991),
    eG = n(23339),
    eV = n(97808),
    ew = n(260509),
    ez = n(601360);
let eH = [18, 18, 16, 16, 14, 12, 10],
    eB = function (e) {
        let { guildId: t } = e,
            n = (0, d.bG)([L.A], () => L.A.getGuild(t));
        if (void 0 === n) return null;
        let { name: i } = n,
            r = (0, ew.Iv)(n, 40, !0),
            s = null,
            a = 10;
        return (
            null == n.icon && null != i && (a = eH[(s = (0, eG.oN)(i)).length - 1] ?? eH[eH.length - 1]),
            (0, l.jsx)("div", {
                className: ez.k,
                children: (0, l.jsxs)("div", {
                    style: { fontSize: a },
                    children: [
                        null != s ? (0, l.jsx)("div", { className: ez.X, "aria-hidden": !0, children: s }) : null,
                        null != r ? (0, l.jsx)(eV.eu, { src: r, size: G._3.SIZE_40, "aria-hidden": !0 }) : null,
                    ],
                }),
            })
        );
    };
var eY = n(85909);
let eq = i.memo((e) => {
    let { guildId: t, className: n, customSubtext: i } = e,
        r = (0, d.bG)([L.A], () => L.A.getGuild(t));
    if (void 0 === r) return null;
    let a = r.features.has(U.GuildFeatures.VERIFIED) || r.features.has(U.GuildFeatures.PARTNERED),
        { name: c } = r;
    return (0, l.jsxs)("div", {
        className: s()(eY.kL, n),
        children: [
            (0, l.jsx)(eB, { guildId: t }),
            (0, l.jsxs)("div", {
                className: eY.$z,
                children: [
                    (0, l.jsxs)("div", {
                        className: eY.wx,
                        children: [
                            a
                                ? (0, l.jsx)(eO.A, {
                                      guild: r,
                                      tooltipPosition: "bottom",
                                      tooltipColor: eM.ST.Colors.PRIMARY,
                                      className: eY.n2,
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
                                  ? en.intl.format(et.default["5JmNgg"], { members: r.approximateMemberCount })
                                  : null,
                    }),
                ],
            }),
        ],
    });
});
eq.displayName = "FamilyCenterActivityGuildRow";
var eZ = n(748695);
let eK = i.memo((e) => {
    let { skuId: t, subscriptionPlanId: n, total: i, currency: r, className: a } = e,
        { product: d } = (0, em.A)(t),
        { displayName: c, typeName: o, isSubscription: u } = ev(d ?? null, n);
    if ((null != t && !u && null == d) || null == c) return null;
    let m = (0, ee.$g)(i, r);
    return (0, l.jsxs)("div", {
        className: s()(eZ.k, a),
        children: [
            (0, l.jsx)(eU, { displayName: c, isSubscription: u, product: d ?? null, subscriptionPlanId: n }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(x.E, { variant: "body-md/semibold", children: null != o ? `${c} \u{2022} ${o}` : c }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", children: m }),
                ],
            }),
        ],
    });
});
eK.displayName = "FamilyCenterActivityPurchaseRow";
var eW = n(287809),
    eX = n(283900),
    eQ = n(467719);
let eJ = i.memo((e) => {
    let { userId: t, subText: n, className: i } = e,
        r = (0, d.bG)([eW.default], () => eW.default.getUser(t));
    return void 0 === r
        ? null
        : (0, l.jsxs)("div", {
              className: s()(eQ.k, i),
              children: [
                  (0, l.jsx)(eX.H, { user: r, avatarSize: G._3.SIZE_40 }),
                  (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                          className: eQ.$,
                          children: [
                              (0, l.jsx)(x.E, {
                                  variant: "body-md/semibold",
                                  color: "interactive-text-active",
                                  children: ex.Ay.getName(r),
                              }),
                              null != n &&
                                  (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", children: n }),
                          ],
                      }),
                  }),
              ],
          });
});
eJ.displayName = "FamilyCenterActivityUserRow";
var e$ = n(475833),
    e0 = n(584144),
    e3 = n(221851);
let e1 = function (e) {
    let { text: t, className: n } = e;
    return (0, l.jsxs)("div", {
        className: s()(n, e0.I),
        children: [
            (0, l.jsx)("img", { className: e0.S, src: "/assets/f47ef22a8aeff32a.svg", alt: "" }),
            (0, l.jsx)(x.E, { className: e3.Ot, variant: "body-sm/medium", color: "text-muted", children: t }),
        ],
    });
};
var e2 = n(683063),
    e9 = n(372777);
let e8 = function (e) {
    let { userId: t, dmsSent: n, callCount: i } = e,
        r = (0, d.bG)([eW.default], () => eW.default.getUser(t));
    return void 0 === r
        ? null
        : (0, l.jsx)(e2.u, {
              title: r.username,
              body: (0, ei.fq)(n, i),
              asContainer: !0,
              children: (0, l.jsx)("div", {
                  className: e9.k,
                  children: (0, l.jsx)(eX.H, { user: r, avatarSize: G._3.SIZE_40 }),
              }),
          });
};
var e5 = n(326851);
let e6 = function () {
    let e = (0, d.bG)([L.A], () => L.A.getTopUserActivities()),
        t = (0, d.bG)([L.A], () => L.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: e5.kL,
              children: [
                  e.length > 0 &&
                      (0, l.jsxs)("div", {
                          className: e5.A2,
                          children: [
                              (0, l.jsx)(z.D, {
                                  variant: "body-md/medium",
                                  className: e5.bV,
                                  children: en.intl.string(et.default.BxbvS7),
                              }),
                              (0, l.jsx)("div", {
                                  className: e5.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, l.jsx)(eJ, {
                                                userId: e[0].user_id,
                                                subText: (0, ei.fq)(e[0].dms_sent, e[0].call_count),
                                                className: e5.q3,
                                            })
                                          : e.map((e) =>
                                                (0, l.jsx)(
                                                    e8,
                                                    { userId: e.user_id, dmsSent: e.dms_sent, callCount: e.call_count },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, l.jsxs)("div", {
                          className: e5.A2,
                          children: [
                              (0, l.jsx)(z.D, {
                                  variant: "body-md/medium",
                                  className: e5.bV,
                                  children: en.intl.string(et.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, l.jsx)(eq, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, ei.fq)(t[0].messages_sent, t[0].call_count),
                                        className: e5._S,
                                    })
                                  : (0, l.jsx)("div", {
                                        className: e5.Ce,
                                        children: t.map((e) => {
                                            let t = L.A.getGuild(e.guild_id),
                                                n = t?.name ?? "Unknown Server";
                                            return (0, l.jsx)(
                                                e2.u,
                                                {
                                                    title: n,
                                                    body: (0, ei.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, l.jsx)(eB, { guildId: e?.guild_id }),
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
    e4 = n(238304);
function te() {
    let e = (0, er.y)(en.intl.string(et.default.q3IRal), en.intl.string(et.default.JNLpDZ)),
        t = i.useCallback(() => {
            (0, Z.mM)(async () => {
                let { default: e } = await Promise.all([n.e(166894), n.e(10622), n.e(907410)]).then(n.bind(n, 606377));
                return (t) => (0, l.jsx)(e, { ...t });
            });
        }, []);
    return (0, l.jsx)(V.D, {
        className: e7.YL,
        onClick: t,
        "aria-label": e,
        children: (0, l.jsx)(K.CircleInformationIcon, {
            size: "custom",
            color: "currentColor",
            className: e7.Kk,
            width: 15,
            height: 15,
        }),
    });
}
function tt(e) {
    let { displayType: t } = e,
        n = i.useCallback(() => {
            (0, W.P0)({ text: en.intl.string(et.default.Wu8BK2), variant: "critical" });
        }, []),
        r = (0, R.A)(),
        a = (0, d.yK)([L.A], () => L.A.getActionsForDisplayType(t)),
        c = es(t),
        o = ea(t),
        { loadMore: m, isMoreLoading: h } = (0, H.A)({ onError: n }),
        f = (0, ei.kN)().get(t),
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
                if ((0, ei.aq)(n)) {
                    let e = Q.default.extractTimestamp(n.event_id),
                        t = (0, ei.i6)(e, f.timestampFormatter);
                    return (0, l.jsx)(eJ, { userId: n.entity_id, subText: t }, n.event_id);
                }
                if ((0, ei.Is)(n)) return (0, l.jsx)(eq, { guildId: n.entity_id }, n.event_id);
                if ((0, ei.u7)(n)) {
                    let e = L.A.getPurchaseInfo(n.entity_id);
                    return null == e
                        ? null
                        : (0, l.jsx)(
                              eK,
                              {
                                  skuId: e.sku_id,
                                  subscriptionPlanId: e.subscription_plan_id,
                                  total: e.total,
                                  currency: e.currency,
                              },
                              n.event_id,
                          );
                }
                if ((0, ei.FT)(n)) {
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
                        eF,
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
                        (0, l.jsx)(x.E, { className: e7.bV, variant: "body-md/semibold", children: v }),
                        void 0 !== f.sectionDescription
                            ? (0, l.jsx)(x.E, {
                                  className: e7.yV,
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
        className: e7.A2,
        children: [
            N(),
            (0, l.jsx)("div", {
                className: e7.o1,
                style: { maxHeight: 65 * p.length },
                children: p.map((e, t) => E({ row: t })),
            }),
            p.length < c
                ? (0, l.jsx)(V.D, {
                      className: s()(e7.FQ, { [e7.r9]: h }),
                      onClick: A,
                      role: "button",
                      "aria-disabled": h,
                      children: h
                          ? (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, className: e7.u1 })
                          : (0, l.jsx)(x.E, {
                                className: e7.UX,
                                variant: "body-sm/semibold",
                                children: en.intl.format(et.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - p.length, 4)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
function tn() {
    let e = (0, R.A)(),
        t = (0, M.vx)(),
        n = (0, er.y)(
            en.intl.formatToPlainString(et.default["7hqFl9"], { activeLinks: t.length }),
            en.intl.string(et.default["Q/D/0Q"]),
        ),
        i = (0, ei.cV)(!!e),
        r = (0, M.v4)(i);
    return e && t.length > 1
        ? (0, l.jsx)(x.E, { variant: "body-sm/medium", children: r })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  e ? null : (0, l.jsx)(X.EyeIcon, { size: "xs", color: "currentColor", className: e7.Kk }),
                  (0, l.jsx)(x.E, { variant: "body-sm/medium", children: n }),
              ],
          });
}
let tl = i.memo((e) => {
    let { userId: t, subText: n, avatarSize: i = G._3.SIZE_40, hideUserTag: r = !1 } = e,
        s = (0, B.F7)(t);
    return void 0 === s
        ? null
        : (0, l.jsxs)("div", {
              className: e7.iO,
              children: [
                  (0, l.jsx)(eX.H, { user: s, avatarSize: i }),
                  (0, l.jsxs)("div", {
                      className: e7.TK,
                      children: [
                          (0, l.jsx)(e$.A, { user: s, hideUserTag: r }),
                          void 0 !== n
                              ? (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: n })
                              : null,
                      ],
                  }),
              ],
          });
});
function ti() {
    let e = (0, M.GR)(),
        t = (0, d.bG)([L.A], () => L.A.getSelectedTeenId()),
        { selectTeenUser: n } = (0, H.A)({}),
        r = e.map((e) => ({ label: e.id, value: e.id })),
        s = i.useCallback((e) => (0, l.jsx)(tl, { userId: e.value, avatarSize: G._3.SIZE_24 }), []);
    return (0, l.jsx)(O.Pw, {
        className: e7.Lt,
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
function tr() {
    let e = (0, ed.k)(),
        t = (0, R.A)(),
        n = (0, M.vx)(),
        i = (0, ei.cV)(!!t),
        r = (0, M.v4)(i);
    return null === e ? null : t && 1 !== n.length ? (0, l.jsx)(ti, {}) : (0, l.jsx)(tl, { userId: e, subText: r });
}
tl.displayName = "FamilyCenterActivityCardAccountRow";
let ts = function () {
    let e = (0, ei.Mo)(),
        t = (0, d.bG)([L.A], () => Object.values(D.NV).some((e) => L.A.getTotalForDisplayType(e) > 0)),
        n = (0, ei.jp)(),
        i = (0, M.v4)(n);
    return (0, l.jsxs)("div", {
        className: e7.kL,
        children: [
            (0, l.jsxs)("div", { className: e7.vF, children: [(0, l.jsx)(tn, {}), (0, l.jsx)(te, {})] }),
            (0, l.jsxs)("div", {
                className: e4.a,
                children: [
                    (0, l.jsx)("div", { className: e7.wx, children: (0, l.jsx)(tr, {}) }),
                    (0, l.jsxs)(o.B, {
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
                                    (0, l.jsx)(e6, {}),
                                    t
                                        ? e.map((e) => {
                                              let [t] = e;
                                              return (0, l.jsx)(tt, { displayType: t }, `${t}-list`);
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
var ta = n(373554);
function td() {
    let e = (0, M.vx)(),
        t = (0, B.y3)(),
        { selectTeenUser: n } = (0, H.A)({}),
        r = e.map((e) => ({ label: e, value: e })),
        a = i.useCallback((e) => (0, l.jsx)(tl, { userId: e.value, avatarSize: G._3.SIZE_24, hideUserTag: !0 }), []);
    return 0 === e.length
        ? null
        : (0, l.jsx)("div", {
              className: s()(ta.Gq, { [ta.wS]: e.length > 1 }),
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
                      : (0, l.jsx)(tl, { userId: e[0], avatarSize: G._3.SIZE_24, hideUserTag: !0 }),
          });
}
function tc() {
    let { selectedTab: e, handleTabChange: t } = F(),
        n = i.useCallback(() => {
            t(D.u9.ACTIVITY);
        }, [t]);
    return (0, l.jsxs)(o.B, {
        gap: 32,
        children: [
            (0, l.jsxs)(V.D, {
                className: ta.Gv,
                onClick: n,
                "aria-label": en.intl.string(en.t.ybUZql),
                children: [
                    (0, l.jsx)(w.ArrowLargeLeftIcon, { size: "sm", color: c.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    (0, l.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: en.intl.string(en.t["13/7kX"]),
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
                        className: ta.gn,
                        children: [
                            (0, l.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                children: en.intl.string(et.default.RZqaJn),
                            }),
                            (0, l.jsx)(z.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: en.intl.string(e === D.u9.CONTENT_AND_SOCIAL ? en.t["+o1pDZ"] : en.t.OAuOHD),
                            }),
                        ],
                    }),
                    (0, l.jsx)(td, {}),
                ],
            }),
        ],
    });
}
var to = n(300538);
function tu(e) {
    let { children: t } = e,
        n = (0, ed.k)() ?? void 0,
        { handleTabChange: i } = F(),
        r = (0, to.A)(n, () => {
            (i(D.u9.ACTIVITY), C.Ay.showTeenSettingsLoadErrorToast());
        });
    return null == n || r ? t : (0, l.jsx)(o.B, { align: "center", children: (0, l.jsx)(u.y, {}) });
}
var tm = n(404778),
    tx = n(110057);
let th = function (e) {
    let { children: t, title: n, description: i } = e;
    return (0, l.jsxs)("div", {
        className: tx.L1,
        children: [
            (null != n || null != i) &&
                (0, l.jsxs)("div", {
                    className: tx.Km,
                    children: [
                        null != n &&
                            (0, l.jsx)(z.D, { variant: "heading-lg/semibold", color: "text-strong", children: n }),
                        null != i && (0, l.jsx)(x.E, { variant: "body-sm/normal", color: "text-default", children: i }),
                    ],
                }),
            (0, l.jsx)("div", { className: tx.Yq, children: t }),
            (0, l.jsx)(tm.c, { className: tx.yj }),
        ],
    });
};
var tf = n(280668);
function tj(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: tf.y, children: t });
}
var tg = n(389462),
    tA = n(464946),
    tv = n(750994),
    tE = n(620432),
    tN = n(171316);
function tp() {
    let e = (0, tN.KK)(),
        t = (0, ed.k)() ?? void 0,
        n = (0, tN.NZ)();
    return (0, l.jsx)(tA.h, {
        children: (0, l.jsx)(tv.Ay, {
            title: n ? en.intl.string(en.t.PMsfcH) : en.intl.string(en.t.RAQUSN),
            note: n ? en.intl.string(en.t.XXGmuB) : en.intl.string(en.t.wbYDfT),
            value: !e,
            onChange: function (e) {
                (0, tE._)(tg.yr.updateControlledSetting(t, !e));
            },
        }),
    });
}
var ty = n(871309),
    tT = n(171576),
    tb = n(953298),
    tI = n(975571);
function tS() {
    let e = (0, ed.k)() ?? void 0,
        t = (0, tN.KK)(),
        n = tg.ES.useControlledSetting(e);
    return (0, l.jsx)(tA.h, {
        children: (0, l.jsx)(tv.Ay, {
            title: en.intl.string(en.t["3o2ojh"]),
            value: !t && !n,
            onChange: (t) => {
                !t && (0, tb.w)()
                    ? ty.A.showAgeVerificationGetStartedModal({ entryPoint: tT.q1.MESSAGE_REQUESTS_SETTINGS })
                    : (0, tE._)(tg.ES.updateControlledSetting(e, !t));
            },
            disabled: t,
            note: en.intl.format(en.t.IoztJ0, { helpdeskArticle: tI.A.getArticleURL(U.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
var t_ = n(665260),
    tC = n(115063);
function tL() {
    let e = (0, ed.k)() ?? void 0,
        t = tg.up.useControlledSetting(e),
        n = i.useMemo(() => (0, tC.Lx)(t), [t]);
    return null == e
        ? null
        : (0, l.jsxs)(tj, {
              children: [
                  (0, l.jsx)(tA.h, {
                      children: (0, l.jsx)(tv.Ay, {
                          title: en.intl.string(en.t["7x9dyE"]),
                          value: n.all,
                          onChange: (t) =>
                              (0, tE._)(tg.up.updateControlledSetting(e, t ? 14 : 14 & ~U.dzt.NO_RELATION)),
                      }),
                  }),
                  (0, l.jsx)(tA.h, {
                      children: (0, l.jsx)(tv.Ay, {
                          title: en.intl.string(en.t.NfeuZ3),
                          value: n.all || n.mutualFriends,
                          onChange: (n) =>
                              (0, tE._)(
                                  tg.up.updateControlledSetting(
                                      e,
                                      n
                                          ? t_.UI(t, U.dzt.MUTUAL_FRIENDS)
                                          : t_.iE(t, U.dzt.MUTUAL_FRIENDS, U.dzt.NO_RELATION),
                                  ),
                              ),
                      }),
                  }),
                  (0, l.jsx)(tA.h, {
                      children: (0, l.jsx)(tv.Ay, {
                          title: en.intl.string(en.t.qsMfsH),
                          value: n.all || n.mutualGuilds,
                          onChange: (n) =>
                              (0, tE._)(
                                  tg.up.updateControlledSetting(
                                      e,
                                      n
                                          ? t_.UI(t, U.dzt.MUTUAL_GUILDS)
                                          : t_.iE(t, U.dzt.MUTUAL_GUILDS, U.dzt.NO_RELATION),
                                  ),
                              ),
                      }),
                  }),
              ],
          });
}
var tR = n(444802),
    tk = n(875162),
    tD = n(873298),
    tU = n(389737),
    tP = n(523009),
    tF = n(704724);
function tM() {
    let e = (0, ed.k)(),
        t = (0, tN.xs)(),
        n = [
            { value: tD.TO.BLUR, label: en.intl.string(en.t.S49Uad) },
            { value: tD.TO.BLOCK, label: en.intl.string(en.t["D/157Y"]) },
        ];
    if (null == t || null == e) return null;
    function i(t) {
        null != e && (0, tF.Jz)(e, t);
    }
    let { explicitContentFriendDm: r, explicitContentNonFriendDm: s } = t;
    return (0, l.jsxs)(tU.E, {
        description: en.intl.string(en.t.Wnojv1),
        children: [
            (0, l.jsx)(tP.A, {
                title: en.intl.string(en.t["+uI23H"]),
                value: r,
                onChange: (e) => i({ explicitContentFriendDm: e }),
                options: n,
            }),
            (0, l.jsx)(tP.A, {
                title: en.intl.string(en.t["Yh+HX1"]),
                value: s,
                onChange: (e) => i({ explicitContentNonFriendDm: e }),
                options: n,
            }),
        ],
    });
}
function tO() {
    let e = (0, ed.k)(),
        t = (0, tN.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: i } = t;
    function r(t) {
        null != e && (0, tF.qY)(e, t);
    }
    let s = [
        { value: tD.TO.BLUR, label: en.intl.string(en.t.S49Uad) },
        { value: tD.TO.BLOCK, label: en.intl.string(en.t["D/157Y"]) },
    ];
    return (0, l.jsxs)(tU.E, {
        description: en.intl.string(en.t.XgH9eh),
        children: [
            (0, l.jsx)(tP.A, {
                title: en.intl.string(en.t["+uI23H"]),
                value: n,
                onChange: (e) => r({ goreContentFriendDm: e }),
                options: s,
            }),
            (0, l.jsx)(tP.A, {
                title: en.intl.string(en.t["Yh+HX1"]),
                value: i,
                onChange: (e) => r({ goreContentNonFriendDm: e }),
                options: s,
            }),
        ],
    });
}
var tG = n(309318);
function tV() {
    let e = (0, tR.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: en.intl.string(en.t.GYpoAq),
                component: () => (0, l.jsx)(tM, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: en.intl.string(en.t["16/3Bi"]),
                component: () => (0, l.jsx)(tO, {}),
                orientation: "vertical",
            },
        ];
    return (0, l.jsxs)(tA.h, {
        children: [
            (0, l.jsx)(tA._, {
                header: en.intl.string(en.t["Hj/But"]),
                description: en.intl.format(en.t["H/Icz+"], { learnMoreLink: tI.A.getArticleURL(e) }),
            }),
            (0, l.jsx)(tk.A, { tabs: t, orientation: "vertical", tabsClassName: tG.v }),
        ],
    });
}
let tw = function () {
    return (0, l.jsxs)(o.B, {
        gap: 32,
        children: [
            (0, l.jsx)(tc, {}),
            (0, l.jsx)(tu, {
                children: (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(th, { title: en.intl.string(en.t.xVRG4P), children: (0, l.jsx)(tV, {}) }),
                        (0, l.jsx)(th, {
                            title: en.intl.string(en.t["y62Z/d"]),
                            children: (0, l.jsxs)(tj, { children: [(0, l.jsx)(tp, {}), (0, l.jsx)(tS, {})] }),
                        }),
                        (0, l.jsx)(th, { title: en.intl.string(en.t["1Qn8iV"]), children: (0, l.jsx)(tL, {}) }),
                    ],
                }),
            }),
        ],
    });
};
function tz() {
    let { hasConsented: e, updateConsent: t } = (0, tN.lH)(U.YAq.PERSONALIZATION);
    return (0, l.jsx)(tA.h, {
        children: (0, l.jsx)(tv.Ay, {
            title: en.intl.string(et.default.XMPqUx),
            note: en.intl.format(et.default.Imp6Ns, {
                helpdeskArticle: tI.A.getArticleURL(U.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
function tH() {
    let e = (0, ed.k)() ?? void 0,
        t = tg.yH.useControlledSetting(e),
        n = tg.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, l.jsx)(tA.h, {
              children: (0, l.jsx)(tv.Ay, {
                  title: en.intl.string(en.t.CyLYKZ),
                  note: en.intl.format(et.default["6mK5Pz"], {
                      helpdeskArticle: tI.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => (0, tE._)(tg.yH.updateControlledSetting(e, !t)),
                  disabled: n,
              }),
          });
}
function tB() {
    let e = (0, ed.k)() ?? void 0,
        t = tg.kf.useControlledSetting(e);
    return (0, l.jsx)(tA.h, {
        children: (0, l.jsx)(tv.Ay, {
            title: en.intl.string(et.default.ZhaNu8),
            note: en.intl.format(et.default.cnCK6b, {
                helpdeskArticle: tI.A.getArticleURL(U.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => (0, tE._)(tg.kf.updateControlledSetting(e, !t)),
        }),
    });
}
function tY() {
    let { hasConsented: e, updateConsent: t } = (0, tN.lH)(U.YAq.USAGE_STATISTICS);
    return (0, l.jsx)(tA.h, {
        children: (0, l.jsx)(tv.Ay, {
            title: en.intl.string(et.default.HjstRR),
            note: en.intl.format(et.default.Z5yJZy, {
                helpdeskArticle: tI.A.getArticleURL(U.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: e,
            onChange: t,
        }),
    });
}
let tq = function () {
    return (0, l.jsxs)(o.B, {
        gap: 32,
        children: [
            (0, l.jsx)(tc, {}),
            (0, l.jsx)(tu, {
                children: (0, l.jsx)("div", {
                    children: (0, l.jsxs)(th, {
                        title: en.intl.string(en.t.SRZyHg),
                        children: [(0, l.jsx)(tY, {}), (0, l.jsx)(tB, {}), (0, l.jsx)(tH, {}), (0, l.jsx)(tz, {})],
                    }),
                }),
            }),
        ],
    });
};
var tZ = n(582394),
    tK = n(141006),
    tW = n(855986),
    tX = n(173936),
    tQ = n(964486),
    tJ = n(957565),
    t$ = n(765548),
    t0 = n(647219);
function t3() {
    return (0, M.xr)() ? null : (0, l.jsx)(t1, {});
}
function t1() {
    let e,
        t = i.useCallback(() => {
            (0, W.P0)({ text: en.intl.string(et.default.Wu8BK2), variant: "critical" });
        }, []),
        { getLinkCode: r } = (0, H.A)(),
        s = (0, M.VE)(),
        a = (0, tW.bG)([L.A], () => L.A.getLinkCodeExpiresAt());
    ((0, tQ.Ay)(() => {
        r();
    }),
        (e = (0, t$.A)(r)),
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
                    n.e(836233),
                    n.e(525989),
                    n.e(813036),
                    n.e(735611),
                ]).then(n.bind(n, 207049));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        onLoadError: t,
                        title: en.intl.string(et.default.aCUVfL),
                        body: en.intl.format(et.default["2O6ltn"], {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    });
            }),
                k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.ShowQRCodeModal }));
        }, [t]),
        c = i.useCallback(() => {
            null != s &&
                (k.default.track(U.HAw.FAMILY_CENTER_ACTION, { action: D.qb.CopyLink }),
                (0, tJ.C)(s, () => (0, W.P0)({ text: en.intl.string(en.t["L/PwZf"]), variant: "success" })));
        }, [s]);
    return (0, l.jsxs)("div", {
        className: t0.U,
        children: [
            (0, l.jsx)(h.$, {
                icon: tK.QrCodeIcon,
                variant: "primary",
                text: en.intl.string(et.default["m/3urB"]),
                onClick: d,
            }),
            (0, l.jsx)(h.$, {
                icon: tX.LinkIcon,
                variant: "secondary",
                text: en.intl.string(en.t.WqhZss),
                disabled: null == s,
                onClick: c,
            }),
        ],
    });
}
var t2 = n(769062);
function t9() {
    let e = (0, M.Li)(),
        t = (0, R.A)(),
        { handleTabChange: n } = F();
    return (0, M.xr)() || (t && e)
        ? null
        : (0, l.jsx)("div", {
              className: t2.x6,
              children: t
                  ? (0, l.jsx)(h.$, {
                        variant: "primary",
                        text: en.intl.string(en.t.LhlgY9),
                        onClick: () => n(D.u9.REQUESTS),
                    })
                  : (0, l.jsx)(t3, {}),
          });
}
let t8 = function () {
    let e = (0, R.A)(),
        t = (0, er.y)(en.intl.string(et.default["T7GyW+"]), en.intl.string(et.default.goKE2b)),
        n = (0, er.y)(
            en.intl.format(et.default.MXjDSv, {
                articleLink: "https://support.discord.com/hc/articles/14155060633623",
            }),
            en.intl.format(et.default.EMCf6j, {
                articleLink: "https://support.discord.com/hc/articles/14155043715735",
            }),
        );
    return (0, l.jsxs)("div", {
        className: s()(t2.kL, e4.a),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)("div", {
                        children: (0, l.jsxs)("div", {
                            className: t2.TK,
                            children: [
                                (0, l.jsx)(z.D, {
                                    variant: "heading-xl/medium",
                                    children: (0, l.jsx)(ec.F, { children: t }),
                                }),
                                (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: n }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(t9, {}),
                ],
            }),
            (0, l.jsx)("div", {
                className: t2.F0,
                children: (0, l.jsx)("img", {
                    src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                    alt: en.intl.string(et.default.ffg6xd),
                }),
            }),
        ],
    });
};
var t5 = n(299628),
    t6 = n(324149);
let t7 = function (e) {
    let { icon: t, iconClassName: n, header: i, description: r } = e;
    return (0, l.jsxs)("div", {
        className: s()(t6.kL, e4.a),
        children: [
            (0, l.jsx)("div", {
                className: t6.n1,
                children: (0, l.jsx)(t, {
                    className: s()(t6.Kk, n),
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
                        className: t6.wx,
                        children: (0, l.jsx)(ec.F, { children: i }),
                    }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: r }),
                ],
            }),
        ],
    });
};
var t4 = n(28863),
    ne = n(683071),
    nt = n(987197),
    nn = n(822585);
function nl() {
    (0, en.useSyncMessages)(et.messagesLoader);
    let e = (0, nt.f)(),
        t = (0, nn.L)()?.daysRemaining ?? null;
    if (!e || null == t || t < 0) return null;
    function n(e, t) {
        return (0, l.jsx)(
            t4.Anchor,
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
        children: (0, l.jsx)(ne.w, {
            type: "warning",
            message:
                0 === t
                    ? en.intl.format(et.default.S5kmfO, { learnMoreHook: n })
                    : en.intl.format(et.default["5jm+T3"], { count: t, learnMoreHook: n }),
            role: "none",
        }),
    });
}
var ni = n(847374),
    nr = n(922529),
    ns = n(780964),
    na = n(830543),
    nd = n(766075),
    nc = n(219893),
    no = n(465323),
    nu = n(617617),
    nm = n(361157);
function nx(e) {
    let t = (0, tW.bG)([L.A], () => L.A.getMonthlyPurchases());
    return (function (e, t) {
        if (null == e) return { kind: "off" };
        if (0 === e.amount) return { kind: "blocked" };
        let n = e.currency,
            l = (0, ee.CE)((0, ee.$g)(e.amount, n), eA.WT.MONTH, 1);
        if (t >= e.amount) return { kind: "spent", monthlyText: l };
        let i = no.yR[e.currency] ?? 2,
            r = e.amount - t;
        return r <= 10 * 10 ** i
            ? {
                  kind: "close-to-limit",
                  monthlyText: l,
                  remainingText: en.intl.formatToPlainString(et.default["+Q+bU1"], { amount: (0, ee.$g)(r, n) }),
              }
            : { kind: "on", monthlyText: l };
    })(e, t?.total_amount ?? 0);
}
var nh = n(534654),
    nf = n(327919),
    nj = n(165862),
    ng = n(477782),
    nA = n(943255),
    nv = n(265872),
    nE = n(408278),
    nN = n(365199),
    np = n(143129),
    ny = n(95396),
    nT = n(585634);
function nb(e) {
    let { closePopout: t, onEdit: n, onDelete: i } = e;
    return (0, l.jsxs)(nj.W, {
        "data-menu-migrated": !0,
        "aria-label": en.intl.string(en.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, l.jsx)(ng.Dr, { id: "edit", label: en.intl.string(et.default.b3DPqg), action: n }),
            (0, l.jsx)(ng.Dr, { id: "delete", label: en.intl.string(et.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function nI(e) {
    let { rule: t, teenId: r, readOnly: s = !1 } = e,
        a = i.useRef(null),
        d = t?.enabled ?? !0,
        c = (0, nc.li)(t),
        u = (0, nc.n1)(t.days);
    function m() {
        (0, Z.mM)(async () => {
            let { default: e } = await Promise.all([n.e(58008), n.e(777848), n.e(386135)]).then(n.bind(n, 362890));
            return (n) => (0, l.jsx)(e, { ...n, teenId: r, rule: t });
        });
    }
    async function h() {
        try {
            await (0, ny.CS)(r, t.ruleId);
        } catch {
            (0, W.P0)({ text: en.intl.string(et.default.Wu8BK2), variant: "critical" });
        }
    }
    return (0, l.jsxs)(o.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        children: [
            (0, l.jsx)("div", { className: nT.X, children: (0, l.jsx)(nA.ThemeDarkIcon, { size: "md" }) }),
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
                        (0, l.jsx)(nv.Y, {
                            targetElementRef: a,
                            renderPopout: (e) => (0, l.jsx)(nb, { ...e, onEdit: m, onDelete: h }),
                            position: "bottom",
                            align: "right",
                            animation: nv.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, l.jsx)(nE.K, {
                                    buttonRef: a,
                                    size: "sm",
                                    icon: nN.MoreHorizontalIcon,
                                    variant: "icon-only",
                                    "aria-label": en.intl.string(en.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        (e.stopPropagation(), t(e));
                                    },
                                });
                            },
                        }),
                    (0, l.jsx)("div", {
                        className: nT.m,
                        children: (0, l.jsx)(np.d, {
                            checked: d,
                            label: en.intl.string(et.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: async function () {
                                try {
                                    await (0, ny.Um)(r, t.ruleId, { enabled: !d });
                                } catch {
                                    (0, W.P0)({ text: en.intl.string(et.default.Wu8BK2), variant: "critical" });
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
var nS = n(12350);
function n_(e) {
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
                className: s ? nS.nh : void 0,
                children: (0, l.jsx)(h.$, { text: i, onClick: r, variant: "secondary", size: "sm", disabled: s }),
            }),
        ],
    });
}
function nC(e, t, i) {
    return (0, l.jsx)(n_, {
        title: en.intl.string(et.default.gMeekL),
        subtitle:
            null != t
                ? (function (e) {
                      switch (e.kind) {
                          case "off":
                              return en.intl.string(et.default.YEnpaj);
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
                                          children: en.intl.string(et.default.Q2msVQ),
                                      }),
                                  ],
                              });
                          case "blocked":
                              return (0, l.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  tag: "span",
                                  children: en.intl.string(et.default.FUu2b0),
                              });
                      }
                  })(t)
                : void 0,
        buttonText: en.intl.string(en.t.bt75uw),
        onButtonPress: () => {
            (0, Z.mM)(async () => {
                let { default: t } = await Promise.all([n.e(781173), n.e(760064)]).then(n.bind(n, 270915));
                return (n) => (0, l.jsx)(t, { ...n, teenId: e });
            });
        },
        readOnly: i,
    });
}
function nL(e) {
    let { teenId: t } = e;
    return nC(
        t,
        nx(
            (0, tW.bG)(
                [nu.A],
                () => {
                    let e = nu.A.settings.safetySettings?.spendingLimitSettings?.oneTimePurchaseLimit;
                    return null == e ? null : { amount: Number(e.amount), currency: e.currency };
                },
                void 0,
                nm.Ky,
            ),
        ),
        !0,
    );
}
function nR(e) {
    let { teenId: t } = e,
        n = nx(tg.fD.useControlledSetting(t)),
        l = (0, B.Vt)(t);
    return nC(t, l ? n : null);
}
function nk(e) {
    let { teenId: t, readOnly: r = !1 } = e,
        s = (0, B.y3)(),
        a = s?.restrictedSchedule?.rules ?? [],
        d = (0, nc.I2)(a),
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
        ? (0, l.jsx)(n_, {
              title: en.intl.string(et.default["1Op+NP"]),
              buttonText: en.intl.string(et.default.OwFF4o),
              onButtonPress: m,
              readOnly: r,
          })
        : (0, l.jsxs)(o.B, {
              direction: "vertical",
              gap: 0,
              children: [
                  (0, l.jsxs)(V.D, {
                      className: nS.dV,
                      onClick: () => u((e) => !e),
                      "aria-expanded": c,
                      children: [
                          (0, l.jsx)("div", {
                              className: nS.WB,
                              children: (0, l.jsxs)(o.B, {
                                  direction: "vertical",
                                  gap: 4,
                                  children: [
                                      (0, l.jsx)(x.E, {
                                          variant: "body-md/medium",
                                          children: en.intl.string(et.default["1Op+NP"]),
                                      }),
                                      (0, l.jsx)(x.E, {
                                          variant: "body-sm/normal",
                                          color: "text-muted",
                                          children: en.intl.formatToPlainString(et.default.XfwcpX, { count: d.length }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, l.jsx)("div", {
                              className: nS.pt,
                              children: (0, l.jsx)(ni.ChevronSmallDownIcon, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: `${nS.ai} ${c ? nS.hg : ""}`,
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
                                  children: d.map((e) => (0, l.jsx)(nI, { rule: e, teenId: t, readOnly: r }, e.ruleId)),
                              }),
                              (0, l.jsx)("div", {
                                  className: r ? nS.nh : void 0,
                                  children: (0, l.jsx)(h.$, {
                                      text: en.intl.string(et.default.OwFF4o),
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
function nD() {
    let e = (0, M.vx)(),
        t = (0, B.y3)();
    function n() {
        (0, nd.openUserSettings)(ns.X.MESSAGING_PERMISSIONS_PANEL);
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
                                children: en.intl.string(et.default.ahKIJO),
                            }),
                            (0, l.jsx)(x.E, {
                                variant: "body-md/medium",
                                color: "text-muted",
                                children: en.intl.format(et.default.X9rW0j, {
                                    openSettingsHook: (e, t) => (0, l.jsx)(t4.Anchor, { onClick: n, children: e }, t),
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(h.$, {
                        text: en.intl.formatToPlainString(et.default.ggcjPR, { count: e.length }),
                        onClick: function () {
                            (0, nf.A)(e, na.default, () =>
                                (0, W.P0)({
                                    text: en.intl.formatToPlainString(et.default.D1BwNC, { count: e.length }),
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
                        (0, l.jsx)(nr.A, { className: nS.yF }),
                        (0, l.jsx)(nL, { teenId: t.id }),
                        (0, l.jsx)(nr.A, { className: nS.yF }),
                        (0, l.jsx)(nk, { teenId: t.id, readOnly: !0 }),
                    ],
                }),
        ],
    });
}
function nU() {
    let e = (0, B.y3)(),
        t = (0, B.tl)(),
        { handleTabChange: n } = F();
    return (
        i.useEffect(() => {
            e?.id != null && t && C.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(o.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, l.jsx)(x.E, { variant: "body-sm/semibold", children: en.intl.string(et.default.ahKIJO) }),
                        (0, l.jsx)(x.E, {
                            variant: "body-md/medium",
                            color: "text-muted",
                            children: en.intl.string(et.default.Sv236e),
                        }),
                    ],
                }),
                (0, l.jsx)(n_, {
                    title: en.intl.string(en.t["+o1pDZ"]),
                    buttonText: en.intl.string(en.t.bt75uw),
                    onButtonPress: () => {
                        n(D.u9.CONTENT_AND_SOCIAL);
                    },
                }),
                (0, l.jsx)(nr.A, { className: nS.yF }),
                (0, l.jsx)(n_, {
                    title: en.intl.string(en.t.OAuOHD),
                    buttonText: en.intl.string(en.t.bt75uw),
                    onButtonPress: () => {
                        n(D.u9.DATA_AND_PRIVACY);
                    },
                }),
                e?.id != null &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(nr.A, { className: nS.yF }),
                            (0, l.jsx)(nR, { teenId: e.id }),
                            (0, l.jsx)(nr.A, { className: nS.yF }),
                            (0, l.jsx)(nk, { teenId: e.id }),
                        ],
                    }),
            ],
        })
    );
}
function nP() {
    let e = (0, nh.A)();
    return 0 === (0, M.vx)().length
        ? null
        : (0, l.jsx)("div", { className: nS.kL, children: e ? (0, l.jsx)(nD, {}) : (0, l.jsx)(nU, {}) });
}
var nF = n(768775);
let nM = function () {
    let e = (0, M.vx)().length > 0,
        t = (0, d.bG)([eW.default], () => eW.default.getCurrentUser()),
        n = (0, er.y)(en.intl.string(et.default["5RZ8Tq"]), en.intl.string(et.default.bmhCnL)),
        i = (0, er.y)(en.intl.string(et.default.XKnFFq), en.intl.string(et.default["68zfxD"])),
        r = (0, er.y)(en.intl.string(et.default["Rm/6a0"]), en.intl.string(et.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, l.jsxs)("div", {
              className: nF.kL,
              children: [
                  (0, l.jsx)(nl, {}),
                  e
                      ? null
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", { className: nF.vK, children: (0, l.jsx)(t8, {}) }),
                                (0, l.jsxs)("div", {
                                    className: nF.yk,
                                    children: [
                                        (0, l.jsx)(t7, {
                                            icon: tZ.ChatCheckIcon,
                                            header: en.intl.string(et.default["001l3m"]),
                                            description: n,
                                        }),
                                        (0, l.jsx)(t7, {
                                            icon: X.EyeIcon,
                                            header: en.intl.string(et.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, l.jsx)(t7, {
                                            icon: tK.QrCodeIcon,
                                            header: en.intl.string(et.default.hhOuMe),
                                            description: r,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, l.jsx)(ts, {}) : (0, l.jsx)(t5.A, { showSectionDescriptions: !0 }),
                  (0, l.jsx)(nP, {}),
              ],
          });
};
n(801541);
var nO = n(889137),
    nG = n(837381),
    nV = n(62617);
function nw(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: s, width: a, height: d, className: c, style: o } = e,
        u = i.useMemo(
            () => (0, nV.H)({ width: a, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: o }),
            [a, d, o],
        );
    return (0, l.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/bb4093f4ae937ad09bc359b162988c3cbb7d49d924073fee7d66a763e738fc67.svg",
        className: (0, nV.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: s ?? "img",
    });
}
var nz = n(475825),
    nH = n(260762),
    nB = n(485947),
    nY = n(426190),
    nq = n(789645),
    nZ = n(866665),
    nK = n(883005);
function nW(e) {
    let { icon: t, tooltip: n, onClick: i, className: r } = e;
    return (0, l.jsx)(nZ.m, {
        text: n,
        children: (0, l.jsx)(V.D, {
            "aria-label": n,
            onClick: function (e) {
                (e.preventDefault(), e.stopPropagation(), i(e));
            },
            className: s()(nK.hP, r),
            children: (0, l.jsx)(t, { className: nK.Kk, color: "currentColor" }),
        }),
    });
}
var nX = n(854627),
    nQ = n(253400),
    nJ = n(218750);
let n$ = nQ.Ay.getEnableHardwareAcceleration() ? eV.Js : eV.eu;
function n0(e) {
    let { otherUser: t, status: n } = e,
        i = (0, M.XC)(t.id, n),
        {
            avatarSrc: r,
            avatarDecorationSrc: s,
            eventHandlers: a,
        } = (0, nX.A)({ userId: t.id, size: G._3.SIZE_40, animateOnHover: !0 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ...a,
                children: (0, l.jsx)(n$, {
                    className: nJ.my,
                    src: r,
                    avatarDecoration: s,
                    size: G._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, l.jsxs)("div", {
                className: nJ.yt,
                children: [
                    (0, l.jsx)("div", { className: nJ.Vx, children: (0, l.jsx)(e$.A, { user: t }) }),
                    (0, l.jsx)(x.E, { color: "text-muted", variant: "body-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var n3 = n(856087);
function n1(e) {
    let { user: t } = e,
        r = (0, d.bG)([eW.default], () => eW.default.getCurrentUser()),
        s = i.useCallback(() => {
            (q()(void 0 !== r, "User must be logged in to accept a link request"),
                (0, Z.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(321855), n.e(943139)]).then(n.bind(n, 179950));
                    return (n) => (0, l.jsx)(e, { ...n, currentUser: r, otherUser: t });
                }));
        }, [r, t]);
    return (0, l.jsxs)("div", {
        className: n3.kL,
        children: [
            (0, l.jsx)("div", { className: n3.zH, children: (0, l.jsx)(n0, { otherUser: t, status: D.Ef.ACTIVE }) }),
            (0, l.jsx)("div", {
                className: n3.o1,
                children: (0, l.jsx)(nW, {
                    icon: nq.XSmallIcon,
                    tooltip: en.intl.string(et.default.l20ZZp),
                    onClick: s,
                }),
            }),
        ],
    });
}
var n2 = n(933832);
function n9(e) {
    let { user: t } = e,
        r = (0, R.A)(),
        s = (0, M.xr)(),
        a = (0, d.bG)([eW.default], () => eW.default.getCurrentUser()),
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
        className: n3.kL,
        children: [
            (0, l.jsx)("div", { className: n3.zH, children: (0, l.jsx)(n0, { otherUser: t, status: D.Ef.PENDING }) }),
            (0, l.jsx)("div", {
                className: n3.o1,
                children: r
                    ? (0, l.jsx)(nW, { icon: nq.XSmallIcon, tooltip: en.intl.string(et.default.e5iHmZ), onClick: u })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              s
                                  ? null
                                  : (0, l.jsx)(nW, {
                                        icon: n2.CheckmarkLargeIcon,
                                        tooltip: en.intl.string(et.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, l.jsx)(nW, {
                                  icon: nq.XSmallIcon,
                                  tooltip: en.intl.string(et.default.bBDeNI),
                                  onClick: o,
                              }),
                          ],
                      }),
            }),
        ],
    });
}
var n8 = n(615300),
    n5 = n(559106),
    n6 = n(100663),
    n7 = n(487565);
let n4 = function (e) {
    let { userId: t, children: n, isLast: r, className: a } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: o } = (0, p.Ay)(),
        u = i.useCallback(() => {
            (0, n6.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: o });
        }, [t, o]);
    function m() {
        c(!0);
    }
    function x() {
        c(!1);
    }
    return (0, l.jsx)(nG.tG, {
        id: t,
        children: (e) =>
            (0, l.jsx)(n5.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(n8.A.div, {
                    style: { opacity: 1 },
                    className: s()(n7.KG, a, { [n7.HV]: r, [n7.vu]: d }),
                    onMouseEnter: m,
                    onMouseLeave: x,
                    onClick: u,
                    ...e,
                    children: n(d),
                }),
            }),
    });
};
var le = n(327337),
    lt = n(375980);
function ln(e) {
    let { header: t, description: n, stepNumber: i } = e;
    return (0, l.jsxs)("div", {
        className: lt.PM,
        children: [
            (0, l.jsx)("div", {
                className: lt.CD,
                children: (0, l.jsx)(z.D, {
                    variant: "heading-sm/semibold",
                    color: "text-brand",
                    children: (0, l.jsx)(ec.F, { children: i }),
                }),
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.D, { variant: "heading-xs/semibold", children: (0, l.jsx)(ec.F, { children: t }) }),
                    (0, l.jsx)(x.E, { variant: "body-sm/medium", color: "text-muted", children: n }),
                ],
            }),
        ],
    });
}
function ll() {
    return (0, l.jsxs)("div", {
        className: s()(lt.aP, e4.a, lt.dO, lt.p2),
        children: [
            (0, l.jsxs)("div", {
                className: lt.Np,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(z.D, {
                                className: e3.QB,
                                variant: "heading-xl/medium",
                                children: (0, l.jsx)(ec.F, { children: en.intl.string(et.default.pHEnV5) }),
                            }),
                            (0, l.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                className: e3.SX,
                                children: en.intl.string(et.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, l.jsx)(nw, { alt: "", ariaHidden: !0, width: 224, className: lt._u }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: lt.Ci,
                children: [
                    (0, l.jsx)(ln, {
                        header: en.intl.string(et.default["7xxAni"]),
                        description: en.intl.string(et.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, l.jsx)(ln, {
                        header: en.intl.string(et.default["AXgx+a"]),
                        description: en.intl.string(et.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, l.jsx)(ln, {
                        header: en.intl.string(et.default.MZn1tG),
                        description: en.intl.string(et.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function li() {
    let e = (0, M.xr)();
    return (0, l.jsxs)("div", {
        className: s()(lt.aP, e4.a, lt.dO),
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(z.D, {
                        className: e3.QB,
                        variant: "heading-xl/medium",
                        children: (0, l.jsx)(ec.F, { children: en.intl.string(et.default.zUCWEL) }),
                    }),
                    (0, l.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        className: e3.SX,
                        children: en.intl.format(et.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, l.jsx)(t3, {}),
                ],
            }),
            (0, l.jsx)(nw, { alt: "", ariaHidden: !0, width: 224, className: lt._u }),
        ],
    });
}
function lr(e) {
    let { sectionType: t, sectionTitle: n, requests: r } = e,
        s = i.useRef(null),
        a = `${t}-list`,
        d = (0, nH.A)(a),
        c = i.useCallback(
            (e) => {
                let { row: n, listIndex: i } = e,
                    s = r[n],
                    a = i === r.length;
                return null == s
                    ? null
                    : (0, l.jsx)(
                          n4,
                          {
                              userId: s.id,
                              isLast: a,
                              children: () =>
                                  t === D.Ef.ACTIVE ? (0, l.jsx)(n1, { user: s }) : (0, l.jsx)(n9, { user: s }),
                          },
                          s.id,
                      );
            },
            [r, t],
        ),
        o = i.useCallback(
            () =>
                (0, l.jsx)(
                    nB.A,
                    {
                        children: (0, l.jsx)(x.E, {
                            className: e3.QB,
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
        children: (0, l.jsx)(nG.hD, {
            navigator: d,
            children: (0, l.jsx)(nG.PR, {
                children: (e) => {
                    let { ref: t, role: i, ...d } = e;
                    return (0, l.jsx)(
                        nz.OZ,
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
function ls() {
    let e = (0, R.A)(),
        t = (0, M.GR)(),
        n = { count: t.length, max: e ? 8 : 3 },
        i = (0, er.y)(
            en.intl.formatToPlainString(et.default["+tnO34"], n),
            en.intl.formatToPlainString(et.default["pu6/U0"], n),
        );
    return t.length > 0
        ? (0, l.jsx)(lr, { sectionType: D.Ef.ACTIVE, sectionTitle: i, requests: t })
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(x.E, { className: e3.QB, variant: "body-sm/medium", color: "text-default", children: i }),
                  (0, l.jsx)("div", {
                      className: lt.aP,
                      children: (0, l.jsx)(x.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          children: en.intl.string(et.default.C4ScLD),
                      }),
                  }),
              ],
          });
}
function la() {
    let e = (0, M.xr)(),
        t = (0, R.A)() ? 8 : 3,
        n = (0, er.y)(
            en.intl.formatToPlainString(et.default["1/PzIj"], { maxConnections: t }),
            en.intl.formatToPlainString(et.default.RcTgiE, { maxConnections: t }),
        );
    return e
        ? (0, l.jsx)("div", {
              className: lt.rv,
              children: (0, l.jsx)(x.E, { variant: "footnote/medium", color: "text-muted", children: n }),
          })
        : null;
}
function ld() {
    let e = (0, nY.N)(),
        t = (0, nY.z)(),
        n = (0, nO.YW)({ helpline: e, throughline: t })
            .with({ helpline: !0 }, () =>
                en.intl.format(et.default["KOwsf/"], {
                    helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                }),
            )
            .with({ throughline: !0 }, () => en.intl.format(et.default["6tsC8u"], { helpLink: le.CL }))
            .otherwise(() => null);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(z.D, {
                      className: lt.rH,
                      variant: "heading-xs/semibold",
                      children: (0, l.jsx)(ec.F, { children: en.intl.string(et.default["7/tVhv"]) }),
                  }),
                  (0, l.jsx)(x.E, { variant: "body-xs/medium", color: "text-muted", children: n }),
              ],
          });
}
function lc() {
    let e = (0, M.xk)(D.Ef.PENDING),
        t = (0, er.y)(
            en.intl.formatToPlainString(et.default.IkAgkG, { count: e.length }),
            en.intl.formatToPlainString(et.default.Q8XnAa, { count: e.length }),
        );
    return 0 === e.length ? null : (0, l.jsx)(lr, { sectionType: D.Ef.PENDING, sectionTitle: t, requests: e });
}
let lo = function () {
    let e = (0, R.A)();
    return (0, l.jsxs)("div", {
        className: lt.kL,
        children: [
            (0, l.jsx)(nl, {}),
            e ? (0, l.jsx)(ll, {}) : (0, l.jsx)(li, {}),
            (0, l.jsx)(ls, {}),
            (0, l.jsx)(lc, {}),
            (0, l.jsx)(la, {}),
            (0, l.jsx)(ld, {}),
        ],
    });
};
var lu = n(561028),
    lm = n(946015),
    lx = n(270003),
    lh = n(993077),
    lf = n(935286),
    lj = n(840559),
    lg = n(997187),
    lA = n(723923),
    lv = n(629143);
let lE = function () {
    let e = S.dm.useSetting(),
        { categories: t, initialized: n } = (0, tW.cf)([lg.A], () => lg.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == n && (0, lj.cR)();
        }, [n]),
        (0, l.jsx)("div", {
            className: lv.kL,
            children: (0, l.jsxs)(lx.n, {
                label: en.intl.string(et.default.USIXU7),
                children: [
                    (0, l.jsx)(np.d, {
                        checked: e,
                        description: en.intl.string(et.default["5MdB3j"]),
                        onChange: S.dm.updateSetting,
                        label: en.intl.string(et.default.zkEceS),
                    }),
                    e
                        ? (0, l.jsx)(lh.Z, {
                              className: lv.MT,
                              type: lh.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, l.jsxs)(lm.s, {
                                  justify: lm.s.Justify.END,
                                  children: [
                                      (0, l.jsx)(lm.s.Child, {
                                          children: (0, l.jsx)(x.E, {
                                              variant: "body-sm/semibold",
                                              color: "text-default",
                                              children: en.intl.string(et.default.xAVm7K),
                                          }),
                                      }),
                                      (0, l.jsx)(n5.vN, {
                                          children: (0, l.jsx)(lu.N_, {
                                              onClick: na.default,
                                              to: { pathname: U.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: en.intl.string(et.default.cUIXFY),
                                          }),
                                      }),
                                      (0, l.jsx)(j.fk, {
                                          icon: lf.ArrowSmallRightIcon,
                                          className: lv.UE,
                                          disableColor: !0,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    (0, l.jsx)(np.d, {
                        checked: !!t[lA.HO.FAMILY_CENTER_DIGEST],
                        description: en.intl.string(et.default.y34S46),
                        onChange: function (e) {
                            (0, lj.CA)(lA.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: en.intl.string(et.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
var lN = n(731738),
    lp = n(612200),
    ly = n(913379),
    lT = n(210714);
let lb = new (n(611599).Vy)("useRefetchWhenSelectedTeenMissing");
var lI = n(33666),
    lS = n(204925);
function l_(e) {
    let { location: t, onMountEffect: n } = e,
        l = (0, lI.A)(),
        r = (0, M.W1)(),
        {
            familyCenterInitialized: s,
            isLoading: a,
            hasLoadFailed: c,
        } = (0, d.cf)([L.A], () => ({
            familyCenterInitialized: L.A.getIsInitialized(),
            isLoading: L.A.isLoading(),
            hasLoadFailed: L.A.hasInitialLoadFailed(),
        })),
        o = (0, ed.k)(),
        { selectedTab: u, handleTabChange: m } = F(),
        x = eW.default.getCurrentUser(),
        h = null != l,
        f = s && null != x && !h;
    ((0, tQ.Ay)(() => {
        ((0, lT.d0)("family-center"), null != n && n());
    }),
        (function () {
            let {
                    isInitialized: e,
                    isLoading: t,
                    selectedTeenId: n,
                } = (0, tW.cf)([L.A], () => ({
                    isInitialized: L.A.getIsInitialized(),
                    isLoading: L.A.isLoading(),
                    selectedTeenId: L.A.getSelectedTeenId(),
                })),
                l = (0, M.Li)(),
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
                            await C.Ay.initialPageLoad({ showLoading: !1 });
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
                    ly.A.increment({ name: lN.K.FAMILY_CENTER_VIEW }));
            }
        }, [s, h, t]),
        i.useEffect(() => {
            f && !L.A.isLoading() && (0, lp.yO)(lS.w_.FAMILY_CENTER);
        }, [f, a]),
        { isLoading: a, hasLoadFailed: c, selectedTab: u, handleTabChange: m, showAgeGateModal: f }
    );
}
var lC = n(220330);
let lL = {
        [D.u9.REQUESTS]: lo,
        [D.u9.ACTIVITY]: nM,
        [D.u9.SETTINGS]: lE,
        [D.u9.CONTENT_AND_SOCIAL]: tw,
        [D.u9.DATA_AND_PRIVACY]: tq,
        [D.u9.SCREEN_TIME_CONTROLS]: lE,
    },
    lR = { [D.u9.REQUESTS]: lo, [D.u9.ACTIVITY]: nM, [D.u9.CONTENT_AND_SOCIAL]: tw, [D.u9.DATA_AND_PRIVACY]: tq };
function lk() {
    return (0, l.jsx)(o.B, { justify: "center", align: "center", className: lC.g4, children: (0, l.jsx)(u.y, {}) });
}
function lD(e) {
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
                        children: en.intl.string(et.default.nGX8Co),
                    }),
                ],
            }),
            (0, l.jsx)(h.$, {
                variant: "primary",
                text: en.intl.string(en.t["7NqTJn"]),
                onClick: () => C.Ay.initialPageLoad(),
            }),
        ],
    });
}
function lU(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, M.VT)(),
        r = (0, R.A)();
    return [D.u9.CONTENT_AND_SOCIAL, D.u9.DATA_AND_PRIVACY, D.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, l.jsxs)(f.V, {
              className: lC.c5,
              "aria-label": en.intl.string(et.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, l.jsx)(f.V.Item, {
                      className: lC.jA,
                      id: D.u9.ACTIVITY,
                      children: en.intl.string(et.default.bdBmqy),
                  }),
                  (0, l.jsxs)(f.V.Item, {
                      className: lC.jA,
                      id: D.u9.REQUESTS,
                      "aria-label": en.intl.string(et.default["gVWG+6"]),
                      children: [
                          en.intl.string(et.default["gVWG+6"]),
                          i > 0 ? (0, l.jsx)(j.hV, { className: lC.qS, count: i }) : null,
                      ],
                  }),
                  r
                      ? (0, l.jsx)(f.V.Item, {
                            className: lC.jA,
                            id: D.u9.SETTINGS,
                            children: en.intl.string(en.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function lP(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        r = (0, T.GV)(),
        d = (0, M.VT)();
    return (0, l.jsx)(g.N, {
        theme: t,
        children: (e) =>
            (0, l.jsxs)(b.A, {
                className: s()(e, lC.ZB),
                scrollable: a.Fr,
                role: "navigation",
                "aria-labelledby": r,
                toolbar: !0,
                children: [
                    (0, l.jsx)(b.A.Icon, { icon: A.GroupIcon, "aria-hidden": !0 }),
                    (0, l.jsx)(b.A.Title, { id: r, children: en.intl.string(et.default.RZqaJn) }),
                    (0, l.jsx)(b.A.Divider, {}),
                    (0, l.jsxs)(f.V, {
                        "aria-label": en.intl.string(et.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, l.jsx)(f.V.Item, {
                                id: D.u9.ACTIVITY,
                                className: lC.AS,
                                children: en.intl.string(et.default.bdBmqy),
                            }),
                            (0, l.jsxs)(f.V.Item, {
                                id: D.u9.REQUESTS,
                                className: lC.AS,
                                "aria-label": en.intl.string(et.default["gVWG+6"]),
                                children: [
                                    en.intl.string(et.default["gVWG+6"]),
                                    d > 0 ? (0, l.jsx)(j.hV, { className: lC.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function lF() {
    let e = (0, T.GV)(),
        {
            isLoading: t,
            hasLoadFailed: n,
            selectedTab: r,
            handleTabChange: s,
            showAgeGateModal: a,
        } = l_({
            location: D.MH.SETTINGS,
            onMountEffect: () => {
                C.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, _._)(P[r]);
        }, [r]),
        a)
    )
        return null;
    let d = lL[r];
    return (0, l.jsxs)("main", {
        className: lC.kL,
        "aria-label": en.intl.string(et.default.RZqaJn),
        children: [
            (0, l.jsx)(y.HI, { location: en.intl.string(et.default.RZqaJn) }),
            (0, l.jsx)(lU, {
                section: r,
                handleItemSelect: function (e) {
                    s(e);
                },
            }),
            (0, l.jsx)(f.V.Panel, {
                id: r,
                "aria-labelledby": e,
                className: lC.Us,
                children: n ? (0, l.jsx)(lD, {}) : t ? (0, l.jsx)(lk, {}) : (0, l.jsx)(d, {}),
            }),
        ],
    });
}
function lM() {
    let { analyticsLocations: e } = (0, p.Ay)(N.A.FAMILY_CENTER),
        t = (0, R.A)(),
        n = (0, d.bG)([L.A], () => L.A.getIsInitialized()),
        r = (0, d.bG)([I.A], () => I.A.theme),
        a = (0, T.GV)(),
        {
            isLoading: c,
            hasLoadFailed: o,
            selectedTab: u,
            handleTabChange: m,
            showAgeGateModal: x,
        } = l_({
            location: D.MH.SIDENAV,
            onMountEffect: () => {
                (E.I(U.BVt.FAMILY_CENTER), !L.A.isLoading() && L.A.canRefetch() && C.Ay.initialPageLoad());
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
        j = lR[h];
    return (0, l.jsx)(p.f5, {
        value: e,
        children: (0, l.jsxs)("main", {
            className: s()(lC.kL, lC.ei),
            "aria-label": en.intl.string(et.default.RZqaJn),
            children: [
                (0, l.jsx)(y.HI, { location: en.intl.string(et.default.RZqaJn) }),
                (0, l.jsx)(lP, {
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
                        ? (0, l.jsx)(lD, { fillPanel: !0 })
                        : (0, l.jsx)(v.Ip, {
                              children: (0, l.jsx)("div", {
                                  className: lC.O4,
                                  children: c ? (0, l.jsx)(lk, {}) : (0, l.jsx)(j, {}),
                              }),
                          }),
                }),
            ],
        }),
    });
}
