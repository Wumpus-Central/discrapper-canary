l.d(t, { A: () => nS, p: () => ny });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(607399),
    d = l(702841),
    c = l(331322),
    u = l(289873),
    o = l(761508),
    x = l(812993);
if (21552 == l.j) var m = l(43990);
if (21552 == l.j) var h = l(177953);
if (21552 == l.j) var j = l(364522);
var g = l(944791),
    f = l(793574),
    v = l(688810),
    A = l(726249),
    E = l(915089),
    N = l(742589),
    p = l(363195),
    T = l(885386),
    y = l(669067),
    S = l(899847),
    I = l(695515),
    b = l(438732),
    _ = l(174459),
    C = l(191627),
    L = l(652215);
let R = {
        [C.u9.ACTIVITY]: "family_center_activity_tab",
        [C.u9.REQUESTS]: "family_center_requests_tab",
        [C.u9.SETTINGS]: "family_center_settings_tab",
        [C.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [C.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [C.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    k = () => ({
        selectedTab: (0, d.bG)([I.A], () => I.A.getSelectedTab()),
        handleTabChange: (e) => {
            S.Ay.selectTab(e), _.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.TabChange, tab: e });
        },
    });
var D = l(834981),
    U = l(843282),
    P = l(778712),
    M = l(939249),
    O = l(548411),
    F = l(661531),
    G = l(834730),
    w = l(534514),
    V = l(10005),
    z = l(153739),
    H = l(284009),
    B = l.n(H),
    Y = l(192308),
    q = l(885574),
    Z = l(691540),
    K = l(857250),
    X = l(97483),
    W = l(39623),
    Q = l(935208),
    J = l(864202),
    $ = l(580630),
    ee = l(602339),
    et = l(375708);
let el = (e) =>
    new Intl.DateTimeFormat(et.intl.currentLocale, { month: "short", day: "numeric" }).format((0, J.default)(e));
var en = l(923531),
    ei = l(294433);
function es(e) {
    return (0, d.bG)([I.A], () => I.A.getTotalForDisplayType(e));
}
function ea(e) {
    let t = es(e) ?? 0;
    if (e === C.NV.TOTAL_VOICE_MINUTES) return (0, en.hO)(t);
    if (e === C.NV.PURCHASES) {
        let e = I.A.getTotalSpendAmount(),
            t = I.A.getTotalSpendCurrency();
        if (null != e && null != t) return (0, $.RS)(e, t);
    }
    return t;
}
var er = l(500470),
    ed = l(707554),
    ec = l(474063);
let eu = (e) => {
    let { header: t, displayType: l } = e,
        i = es(l),
        s = ea(l);
    return (0, n.jsxs)("div", {
        className: ec.hJ,
        children: [
            (0, n.jsx)(w.D, {
                variant: "heading-xxl/medium",
                color: i > 0 ? "text-brand" : "text-muted",
                children: (0, n.jsx)(ed.F, { children: s }),
            }),
            (0, n.jsx)(G.E, { variant: "text-sm/semibold", className: ec.io, children: t }),
        ],
    });
};
var eo = l(821701),
    ex = l(427262),
    em = l(575593),
    eh = l(898461),
    ej = l(203632),
    eg = l(486020),
    ef = l(788868);
let ev = (e, t) => {
    let l,
        n,
        i = null != t;
    if (null != e)
        (l = e.name),
            (n = ((e) => {
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
            })(e.type));
    else if (i && null != t) {
        let e = ef.hd[t];
        l = e?.name;
    }
    return { displayName: l, typeName: n, isSubscription: i };
};
var eA = l(34188),
    eE = l(104510),
    eN = l(403581),
    ep = l(253292),
    eT = l(780898),
    ey = l(361628),
    eS = l(665411),
    eI = l(215006);
let eb = (e) => {
        let { displayName: t, product: l } = e,
            i = ((e) => {
                if (0 === e.items.length) return null;
                let t = e.items[0];
                return (0, eh.T)(t)
                    ? (0, eg.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 })
                    : null;
            })(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: eI._P });
    },
    e_ = (e) => {
        let { displayName: t, nameplateData: l } = e,
            { staticImageUrl: i } = (0, ep.K)(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: eI.M4 });
    },
    eC = (e) => {
        let { displayName: t, product: l } = e,
            i = ((e) => {
                if (0 === e.items.length) return null;
                let t = e.items[0];
                return (0, ej.C3)(t) ? t.thumbnailPreviewSrc : null;
            })(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: eI._P });
    },
    eL = (e) => {
        let { product: t } = e,
            l = (0, ey.A)(t.skuId, "FamilyCenterActivityItemPreview");
        return null == l
            ? null
            : (0, n.jsx)("div", {
                  className: eI.pI,
                  children: (0, n.jsx)("div", { className: eI.ZS, children: (0, n.jsx)(eS.A, { frame: l }) }),
              });
    },
    eR = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t) return (0, n.jsx)("div", { className: eI.T8, children: (0, n.jsx)(eA.U, {}) });
        let l = ((e) => {
            if (null == e) return !1;
            let t = ef.hd[e];
            return t?.skuId === ef.pe.GUILD;
        })(t);
        return (0, n.jsx)("div", {
            className: eI.T8,
            children: l
                ? (0, n.jsx)(eE._, { size: "custom", width: 20, height: 20 })
                : (0, n.jsx)(eN.t, { size: "custom", width: 20, height: 20 }),
        });
    },
    ek = (e) => {
        let { displayName: t, product: l } = e;
        if (null == l) return (0, n.jsx)("div", { className: eI.T8, children: (0, n.jsx)(eA.U, {}) });
        switch (l.type) {
            case em.R.AVATAR_DECORATION:
                return (0, n.jsx)(eb, { displayName: t, product: l });
            case em.R.NAMEPLATE:
                let i = (0, eT.EQ)(l);
                return null != i ? (0, n.jsx)(e_, { displayName: t, nameplateData: i }) : null;
            case em.R.PROFILE_EFFECT:
                return (0, n.jsx)(eC, { displayName: t, product: l });
            case em.R.PROFILE_FRAME:
                return (0, n.jsx)(eL, { product: l });
            default:
                return (0, n.jsx)("div", { className: eI.T8, children: (0, n.jsx)(eA.U, {}) });
        }
    },
    eD = (e) => {
        let { displayName: t, isSubscription: l, product: i, subscriptionPlanId: s } = e;
        return l ? (0, n.jsx)(eR, { subscriptionPlanId: s }) : (0, n.jsx)(ek, { displayName: t, product: i });
    };
var eU = l(284809);
let eP = i.memo((e) => {
    let {
            skuId: t,
            subscriptionPlanId: l,
            price: i,
            gifterUserId: s,
            claimed: r,
            offeredAt: d,
            claimedAt: c,
            className: u,
        } = e,
        { product: o } = (0, eo.A)(t),
        x = (0, z.F7)(s),
        { displayName: m, isSubscription: h } = ev(o ?? null, l);
    if ((null != t && !h && null == o) || null == m) return null;
    let j = ((e) => {
        let { claimed: t, price: l, gifterName: n, offeredAt: i, claimedAt: s } = e,
            a = null != l ? (0, $.$g)(l.amount, l.currency) : null,
            r = null;
        return (
            null != a && null != n
                ? (r = et.intl.formatToPlainString(ee.default["o44n/1"], { price: a, username: n }))
                : null != a && (r = a),
            [
                r,
                t
                    ? et.intl.formatToPlainString(ee.default.kDyllq, { date: el(s ?? i) })
                    : et.intl.formatToPlainString(ee.default.gAG45y, { date: el(i) }),
            ]
                .filter(Boolean)
                .join(" \u2022 ")
        );
    })({ claimed: r, price: i, gifterName: null != x ? ex.Ay.getName(x) : null, offeredAt: d, claimedAt: c });
    return (0, n.jsxs)("div", {
        className: a()(eU.k, u),
        children: [
            (0, n.jsx)(eD, { displayName: m, isSubscription: h, product: o ?? null, subscriptionPlanId: l }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(G.E, { variant: "text-md/semibold", children: m }),
                    (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: j }),
                ],
            }),
        ],
    });
});
eP.displayName = "FamilyCenterActivityGiftRow";
var eM = l(781696),
    eO = l(714991),
    eF = l(23339),
    eG = l(97808),
    ew = l(260509),
    eV = l(904425);
let ez = (e) => {
    let { guildId: t } = e,
        l = (0, d.bG)([I.A], () => I.A.getGuild(t));
    if (void 0 === l) return null;
    let { name: i } = l,
        s = (0, ew.Iv)(l, 40, !0),
        a = null,
        r = 10;
    return (
        null == l.icon && null != i && (r = eB[(a = (0, eF.oN)(i)).length - 1] ?? eB[eB.length - 1]),
        (0, n.jsx)("div", {
            className: eV.k,
            children: (0, n.jsxs)("div", {
                style: { fontSize: r },
                children: [
                    null != a ? (0, n.jsx)("div", { className: eV.X, "aria-hidden": !0, children: a }) : null,
                    null != s ? (0, n.jsx)(eG.eu, { src: s, size: P._3.SIZE_40, "aria-hidden": !0 }) : null,
                ],
            }),
        })
    );
};
var eH = l(751406);
let eB = [18, 18, 16, 16, 14, 12, 10],
    eY = i.memo((e) => {
        let { guildId: t, className: l, customSubtext: i } = e,
            s = (0, d.bG)([I.A], () => I.A.getGuild(t));
        if (void 0 === s) return null;
        let r = s.features.has(L.GuildFeatures.VERIFIED) || s.features.has(L.GuildFeatures.PARTNERED),
            { name: c } = s;
        return (0, n.jsxs)("div", {
            className: a()(eH.kL, l),
            children: [
                (0, n.jsx)(ez, { guildId: t }),
                (0, n.jsxs)("div", {
                    className: eH.$z,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eH.wx,
                            children: [
                                r
                                    ? (0, n.jsx)(eO.A, {
                                          guild: s,
                                          tooltipPosition: "bottom",
                                          tooltipColor: eM.ST.Colors.PRIMARY,
                                          className: eH.n2,
                                      })
                                    : null,
                                (0, n.jsx)(G.E, { variant: "text-md/semibold", children: c }),
                            ],
                        }),
                        (0, n.jsx)(G.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children:
                                null != i
                                    ? i
                                    : void 0 !== s.approximateMemberCount
                                      ? et.intl.format(ee.default["5JmNgg"], { members: s.approximateMemberCount })
                                      : null,
                        }),
                    ],
                }),
            ],
        });
    });
eY.displayName = "FamilyCenterActivityGuildRow";
var eq = l(893458);
let eZ = i.memo((e) => {
    let { skuId: t, subscriptionPlanId: l, total: i, currency: s, className: r } = e,
        { product: d } = (0, eo.A)(t),
        { displayName: c, typeName: u, isSubscription: o } = ev(d ?? null, l);
    if ((null != t && !o && null == d) || null == c) return null;
    let x = (0, $.$g)(i, s);
    return (0, n.jsxs)("div", {
        className: a()(eq.k, r),
        children: [
            (0, n.jsx)(eD, { displayName: c, isSubscription: o, product: d ?? null, subscriptionPlanId: l }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(G.E, { variant: "text-md/semibold", children: null != u ? `${c} \u{2022} ${u}` : c }),
                    (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: x }),
                ],
            }),
        ],
    });
});
eZ.displayName = "FamilyCenterActivityPurchaseRow";
var eK = l(287809),
    eX = l(283900),
    eW = l(914518);
let eQ = i.memo((e) => {
    let { userId: t, subText: l, className: i } = e,
        s = (0, d.bG)([eK.default], () => eK.default.getUser(t));
    return void 0 === s
        ? null
        : (0, n.jsxs)("div", {
              className: a()(eW.k, i),
              children: [
                  (0, n.jsx)(eX.H, { user: s, avatarSize: P._3.SIZE_40 }),
                  (0, n.jsx)("div", {
                      children: (0, n.jsxs)("div", {
                          className: eW.$,
                          children: [
                              (0, n.jsx)(G.E, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: ex.Ay.getName(s),
                              }),
                              null != l &&
                                  (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                          ],
                      }),
                  }),
              ],
          });
});
eQ.displayName = "FamilyCenterActivityUserRow";
var eJ = l(475833),
    e$ = l(768869),
    e0 = l(818050);
let e3 = (e) => {
    let { text: t, className: l } = e;
    return (0, n.jsxs)("div", {
        className: a()(l, e$.I),
        children: [
            (0, n.jsx)("img", { className: e$.S, src: "/assets/f47ef22a8aeff32a.svg", alt: "" }),
            (0, n.jsx)(G.E, { className: e0.Ot, variant: "text-sm/medium", color: "text-muted", children: t }),
        ],
    });
};
var e1 = l(459192),
    e2 = l(494596);
let e9 = (e) => {
    let { userId: t, dmsSent: l, callCount: i } = e,
        s = (0, d.bG)([eK.default], () => eK.default.getUser(t));
    return void 0 === s
        ? null
        : (0, n.jsx)(e1.u, {
              title: s.username,
              body: (0, en.fq)(l, i),
              asContainer: !0,
              children: (0, n.jsx)("div", {
                  className: e2.k,
                  children: (0, n.jsx)(eX.H, { user: s, avatarSize: P._3.SIZE_40 }),
              }),
          });
};
var e8 = l(833802);
let e5 = () => {
    let e = (0, d.bG)([I.A], () => I.A.getTopUserActivities()),
        t = (0, d.bG)([I.A], () => I.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, n.jsxs)("div", {
              className: e8.kL,
              children: [
                  e.length > 0 &&
                      (0, n.jsxs)("div", {
                          className: e8.A2,
                          children: [
                              (0, n.jsx)(w.D, {
                                  variant: "text-md/medium",
                                  className: e8.bV,
                                  children: et.intl.string(ee.default.BxbvS7),
                              }),
                              (0, n.jsx)("div", {
                                  className: e8.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, n.jsx)(eQ, {
                                                userId: e[0].user_id,
                                                subText: (0, en.fq)(e[0].dms_sent, e[0].call_count),
                                                className: e8.q3,
                                            })
                                          : e.map((e) =>
                                                (0, n.jsx)(
                                                    e9,
                                                    { userId: e.user_id, dmsSent: e.dms_sent, callCount: e.call_count },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, n.jsxs)("div", {
                          className: e8.A2,
                          children: [
                              (0, n.jsx)(w.D, {
                                  variant: "text-md/medium",
                                  className: e8.bV,
                                  children: et.intl.string(ee.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, n.jsx)(eY, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, en.fq)(t[0].messages_sent, t[0].call_count),
                                        className: e8._S,
                                    })
                                  : (0, n.jsx)("div", {
                                        className: e8.Ce,
                                        children: t.map((e) => {
                                            let t = I.A.getGuild(e.guild_id),
                                                l = t?.name ?? "Unknown Server";
                                            return (0, n.jsx)(
                                                e1.u,
                                                {
                                                    title: l,
                                                    body: (0, en.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, n.jsx)(ez, { guildId: e?.guild_id }),
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
var e4 = l(990021),
    e7 = l(453287);
function e6() {
    let e = i.useCallback(() => {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([l.e("3083"), l.e("60106")]).then(l.bind(l, 853809));
            return (t) => (0, n.jsx)(e, { ...t });
        });
    }, []);
    return (0, n.jsx)(M.D, {
        className: e4.YL,
        onClick: e,
        children: (0, n.jsx)(q.m, { size: "custom", color: "currentColor", className: e4.Kk, width: 15, height: 15 }),
    });
}
function te(e) {
    let { displayType: t } = e,
        l = i.useCallback(() => {
            (0, Z.P0)((0, K.o)(et.intl.string(ee.default.Wu8BK2), X.Ck.FAILURE));
        }, []),
        s = (0, b.A)(),
        r = (0, d.yK)([I.A], () => I.A.getActionsForDisplayType(t)),
        c = es(t),
        o = ea(t),
        { loadMore: x, isMoreLoading: m } = (0, V.A)({ onError: l }),
        h = (0, en.kN)().get(t),
        [j, g] = i.useState(C.PH),
        f = i.useCallback(() => {
            g((e) => e + C.PH), x(t);
        }, [t, x]);
    B()(h, `No text for action type: ${t}`);
    let v = t === C.NV.PURCHASES && null != o ? h.sectionHeader(o) : h.sectionHeader(c),
        A = i.useCallback(
            (e) => {
                let { row: t } = e,
                    l = r[t];
                if ((0, en.aq)(l)) {
                    let e = Q.default.extractTimestamp(l.event_id),
                        t = (0, en.i6)(e, h.timestampFormatter);
                    return (0, n.jsx)(eQ, { userId: l.entity_id, subText: t }, l.event_id);
                }
                if ((0, en.Is)(l)) return (0, n.jsx)(eY, { guildId: l.entity_id }, l.event_id);
                if ((0, en.u7)(l)) {
                    let e = I.A.getPurchaseInfo(l.entity_id);
                    return null == e
                        ? null
                        : (0, n.jsx)(
                              eZ,
                              {
                                  skuId: e.sku_id,
                                  subscriptionPlanId: e.subscription_plan_id,
                                  total: e.total,
                                  currency: e.currency,
                              },
                              l.event_id,
                          );
                }
                if ((0, en.FT)(l)) {
                    let e = I.A.getGiftInfo(l.entity_id);
                    if (null == e) return null;
                    let {
                        skuId: t,
                        subscriptionPlanId: i,
                        price: s,
                        gifterUserId: a,
                        claimed: r,
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
                    return (0, n.jsx)(
                        eP,
                        {
                            skuId: t,
                            subscriptionPlanId: i,
                            price: s,
                            gifterUserId: a,
                            claimed: r,
                            offeredAt: d,
                            claimedAt: c,
                        },
                        l.event_id,
                    );
                }
                return null;
            },
            [r, h.timestampFormatter],
        ),
        E = i.useCallback(
            () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(G.E, { className: e4.bV, variant: "text-md/semibold", children: v }),
                        void 0 !== h.sectionDescription
                            ? (0, n.jsx)(G.E, {
                                  className: e4.yV,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: h.sectionDescription(s ?? !1),
                              })
                            : null,
                    ],
                }),
            [v, h, s],
        );
    if (0 === r.length) return null;
    let N = r.slice(0, j);
    return (0, n.jsxs)("div", {
        className: e4.A2,
        children: [
            E(),
            (0, n.jsx)("div", {
                className: e4.o1,
                style: { maxHeight: 65 * N.length },
                children: N.map((e, t) => A({ row: t })),
            }),
            N.length < c
                ? (0, n.jsx)(M.D, {
                      className: a()(e4.FQ, { [e4.r9]: m }),
                      onClick: f,
                      role: "button",
                      "aria-disabled": m,
                      children: m
                          ? (0, n.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, className: e4.u1 })
                          : (0, n.jsx)(G.E, {
                                className: e4.UX,
                                variant: "text-sm/bold",
                                children: et.intl.format(ee.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - N.length, C.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let tt = () => {
        let e = (0, b.A)(),
            t = (0, D.vx)(),
            l = (0, ei.y)(
                et.intl.formatToPlainString(ee.default["7hqFl9"], { activeLinks: t.length }),
                et.intl.string(ee.default["Q/D/0Q"]),
            ),
            i = (0, en.cV)(!!e),
            s = (0, D.v4)(i);
        return e && t.length > 1
            ? (0, n.jsx)(G.E, { variant: "eyebrow", children: s })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      e ? null : (0, n.jsx)(W.b, { size: "xs", color: "currentColor", className: e4.Kk }),
                      (0, n.jsx)(G.E, { variant: "eyebrow", children: l }),
                  ],
              });
    },
    tl = i.memo((e) => {
        let { userId: t, subText: l, avatarSize: i = P._3.SIZE_40, hideUserTag: s = !1 } = e,
            a = (0, z.F7)(t);
        return void 0 === a
            ? null
            : (0, n.jsxs)("div", {
                  className: e4.iO,
                  children: [
                      (0, n.jsx)(eX.H, { user: a, avatarSize: i }),
                      (0, n.jsxs)("div", {
                          className: e4.TK,
                          children: [
                              (0, n.jsx)(eJ.A, { user: a, hideUserTag: s }),
                              void 0 !== l
                                  ? (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: l })
                                  : null,
                          ],
                      }),
                  ],
              });
    });
tl.displayName = "FamilyCenterActivityCardAccountRow";
let tn = () => {
        let e = (0, D.GR)(),
            t = (0, d.bG)([I.A], () => I.A.getSelectedTeenId()),
            { selectTeenUser: l } = (0, V.A)({}),
            s = e.map((e) => ({ label: e.id, value: e.id })),
            a = i.useCallback((e) => (0, n.jsx)(tl, { userId: e.value, avatarSize: P._3.SIZE_24 }), []);
        return (0, n.jsx)(U.Pw, {
            className: e4.Lt,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                l(e), _.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: s,
            "data-migration-pending": !0,
        });
    },
    ti = () => {
        let e = (0, er.k)(),
            t = (0, b.A)(),
            l = (0, D.vx)(),
            i = (0, en.cV)(!!t),
            s = (0, D.v4)(i);
        return null === e ? null : t && 1 !== l.length ? (0, n.jsx)(tn, {}) : (0, n.jsx)(tl, { userId: e, subText: s });
    },
    ts = () => {
        let e = (0, en.Mo)(),
            t = (0, d.bG)([I.A], () => Object.values(C.NV).some((e) => I.A.getTotalForDisplayType(e) > 0)),
            l = (0, en.jp)(),
            i = (0, D.v4)(l);
        return (0, n.jsxs)("div", {
            className: e4.kL,
            children: [
                (0, n.jsxs)("div", { className: e4.vF, children: [(0, n.jsx)(tt, {}), (0, n.jsx)(e6, {})] }),
                (0, n.jsxs)("div", {
                    className: e7.a,
                    children: [
                        (0, n.jsx)("div", { className: e4.wx, children: (0, n.jsx)(ti, {}) }),
                        (0, n.jsxs)(c.B, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, n.jsx)("div", {
                                    className: e4.O2,
                                    children: e
                                        .filter((e) => {
                                            let [t] = e;
                                            return t !== C.NV.GIFTS;
                                        })
                                        .map((e) => {
                                            let [t, l] = e;
                                            return (0, n.jsx)(
                                                eu,
                                                { displayType: t, header: l.tooltipHeader() },
                                                `counter-${t}`,
                                            );
                                        }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: e4.RJ,
                                    children: [
                                        (0, n.jsx)(e5, {}),
                                        t
                                            ? e.map((e) => {
                                                  let [t] = e;
                                                  return (0, n.jsx)(te, { displayType: t }, `${t}-list`);
                                              })
                                            : (0, n.jsx)(e3, { className: e4.RL, text: i ?? "" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
var ta = l(336541);
let tr = () => {
        let e = (0, D.vx)(),
            t = (0, z.y3)(),
            { selectTeenUser: l } = (0, V.A)({}),
            s = e.map((e) => ({ label: e, value: e })),
            r = i.useCallback(
                (e) => (0, n.jsx)(tl, { userId: e.value, avatarSize: P._3.SIZE_24, hideUserTag: !0 }),
                [],
            );
        return 0 === e.length
            ? null
            : (0, n.jsx)("div", {
                  className: a()(ta.Gq, { [ta.wS]: e.length > 1 }),
                  children:
                      e.length > 1
                          ? (0, n.jsx)(U.Pw, {
                                renderOptionLabel: r,
                                renderOptionValue: (e) => {
                                    let [t] = e;
                                    return r(t);
                                },
                                serialize: (e) => e,
                                select: (e) => {
                                    l(e);
                                },
                                isSelected: (e) => e === t?.id,
                                options: s,
                                "data-migration-pending": !0,
                            })
                          : (0, n.jsx)(tl, { userId: e[0], avatarSize: P._3.SIZE_24, hideUserTag: !0 }),
              });
    },
    td = () => {
        let { selectedTab: e, handleTabChange: t } = k(),
            l = i.useCallback(() => {
                t(C.u9.ACTIVITY);
            }, [t]);
        return (0, n.jsxs)(c.B, {
            gap: 32,
            children: [
                (0, n.jsxs)(M.D, {
                    className: ta.Gv,
                    onClick: l,
                    "aria-label": et.intl.string(et.t.ybUZql),
                    children: [
                        (0, n.jsx)(O.Z, { size: "sm", color: F.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        (0, n.jsx)(G.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: et.intl.string(et.t["13/7kX"]),
                        }),
                    ],
                }),
                (0, n.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    children: [
                        (0, n.jsxs)(c.B, {
                            gap: 4,
                            className: ta.gn,
                            children: [
                                (0, n.jsx)(G.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: et.intl.string(ee.default.RZqaJn),
                                }),
                                (0, n.jsx)(w.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: et.intl.string(
                                        e === C.u9.CONTENT_AND_SOCIAL ? et.t["+o1pDZ"] : et.t.OAuOHD,
                                    ),
                                }),
                            ],
                        }),
                        (0, n.jsx)(tr, {}),
                    ],
                }),
            ],
        });
    };
var tc = l(404778),
    tu = l(628630);
let to = function (e) {
    let { children: t, title: l, description: i } = e;
    return (0, n.jsxs)("div", {
        className: tu.L1,
        children: [
            (null != l || null != i) &&
                (0, n.jsxs)("div", {
                    className: tu.Km,
                    children: [
                        null != l &&
                            (0, n.jsx)(w.D, { variant: "heading-lg/semibold", color: "text-strong", children: l }),
                        null != i && (0, n.jsx)(G.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                    ],
                }),
            (0, n.jsx)("div", { className: tu.Yq, children: t }),
            (0, n.jsx)(tc.c, { className: tu.yj }),
        ],
    });
};
var tx = l(884307);
function tm(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: tx.y, children: t });
}
var th = l(389462),
    tj = l(464946),
    tg = l(750994),
    tf = l(171316);
function tv() {
    let e = (0, tf.KK)(),
        t = (0, er.k)() ?? void 0,
        l = (0, tf.NZ)();
    return (0, n.jsx)(tj.h, {
        children: (0, n.jsx)(tg.Ay, {
            title: l ? et.intl.string(et.t.PMsfcH) : et.intl.string(et.t.RAQUSN),
            note: l ? et.intl.string(et.t.XXGmuB) : et.intl.string(et.t.wbYDfT),
            value: !e,
            onChange: (e) => {
                th.yr.updateControlledSetting(t, !e);
            },
        }),
    });
}
var tA = l(139716),
    tE = l(847599),
    tN = l(953298),
    tp = l(975571);
function tT() {
    let e = (0, er.k)() ?? void 0,
        t = (0, tf.KK)(),
        l = th.ES.useControlledSetting(e);
    return (0, n.jsx)(tj.h, {
        children: (0, n.jsx)(tg.Ay, {
            title: et.intl.string(et.t["3o2ojh"]),
            value: !t && !l,
            onChange: (t) => {
                !t && (0, tN.w)()
                    ? tA.A.showAgeVerificationGetStartedModal({ entryPoint: tE.q1.MESSAGE_REQUESTS_SETTINGS })
                    : th.ES.updateControlledSetting(e, !t);
            },
            disabled: t,
            note: et.intl.format(et.t.IoztJ0, { helpdeskArticle: tp.A.getArticleURL(L.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
var ty = l(665260),
    tS = l(115063);
function tI() {
    let e = (0, er.k)() ?? void 0,
        t = th.up.useControlledSetting(e),
        l = i.useMemo(() => (0, tS.Lx)(t), [t]);
    return null == e
        ? null
        : (0, n.jsxs)(tm, {
              children: [
                  (0, n.jsx)(tj.h, {
                      children: (0, n.jsx)(tg.Ay, {
                          title: et.intl.string(et.t["7x9dyE"]),
                          value: l.all,
                          onChange: (t) => th.up.updateControlledSetting(e, t ? L.yKI : L.yKI & ~L.dzt.NO_RELATION),
                      }),
                  }),
                  (0, n.jsx)(tj.h, {
                      children: (0, n.jsx)(tg.Ay, {
                          title: et.intl.string(et.t.NfeuZ3),
                          value: l.all || l.mutualFriends,
                          onChange: (l) =>
                              th.up.updateControlledSetting(
                                  e,
                                  l
                                      ? ty.UI(t, L.dzt.MUTUAL_FRIENDS)
                                      : ty.iE(t, L.dzt.MUTUAL_FRIENDS, L.dzt.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, n.jsx)(tj.h, {
                      children: (0, n.jsx)(tg.Ay, {
                          title: et.intl.string(et.t.qsMfsH),
                          value: l.all || l.mutualGuilds,
                          onChange: (l) =>
                              th.up.updateControlledSetting(
                                  e,
                                  l ? ty.UI(t, L.dzt.MUTUAL_GUILDS) : ty.iE(t, L.dzt.MUTUAL_GUILDS, L.dzt.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
var tb = l(444802),
    t_ = l(875162),
    tC = l(873298),
    tL = l(389737),
    tR = l(566769),
    tk = l(704724);
function tD() {
    let e = (0, er.k)(),
        t = (0, tf.xs)(),
        l = [
            { value: tC.TO.BLUR, label: et.intl.string(et.t.S49Uad) },
            { value: tC.TO.BLOCK, label: et.intl.string(et.t["D/157Y"]) },
        ];
    if (null == t || null == e) return null;
    let i = (t) => {
            (0, tk.Jz)(e, t);
        },
        { explicitContentFriendDm: s, explicitContentNonFriendDm: a } = t;
    return (0, n.jsxs)(tL.E, {
        description: et.intl.string(et.t.Wnojv1),
        children: [
            (0, n.jsx)(tR.A, {
                title: et.intl.string(et.t["+uI23H"]),
                value: s,
                onChange: (e) => i({ explicitContentFriendDm: e }),
                options: l,
            }),
            (0, n.jsx)(tR.A, {
                title: et.intl.string(et.t["Yh+HX1"]),
                value: a,
                onChange: (e) => i({ explicitContentNonFriendDm: e }),
                options: l,
            }),
        ],
    });
}
function tU() {
    let e = (0, er.k)(),
        t = (0, tf.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: l, goreContentNonFriendDm: i } = t,
        s = (t) => {
            (0, tk.qY)(e, t);
        },
        a = [
            { value: tC.TO.BLUR, label: et.intl.string(et.t.S49Uad) },
            { value: tC.TO.BLOCK, label: et.intl.string(et.t["D/157Y"]) },
        ];
    return (0, n.jsxs)(tL.E, {
        description: et.intl.string(et.t.XgH9eh),
        children: [
            (0, n.jsx)(tR.A, {
                title: et.intl.string(et.t["+uI23H"]),
                value: l,
                onChange: (e) => s({ goreContentFriendDm: e }),
                options: a,
            }),
            (0, n.jsx)(tR.A, {
                title: et.intl.string(et.t["Yh+HX1"]),
                value: i,
                onChange: (e) => s({ goreContentNonFriendDm: e }),
                options: a,
            }),
        ],
    });
}
var tP = l(25191);
function tM() {
    let e = (0, tb.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: et.intl.string(et.t.GYpoAq),
                component: () => (0, n.jsx)(tD, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: et.intl.string(et.t["16/3Bi"]),
                component: () => (0, n.jsx)(tU, {}),
                orientation: "vertical",
            },
        ];
    return (0, n.jsxs)(tj.h, {
        children: [
            (0, n.jsx)(tj._, {
                header: et.intl.string(et.t["Hj/But"]),
                description: et.intl.format(et.t["H/Icz+"], { learnMoreLink: tp.A.getArticleURL(e) }),
            }),
            (0, n.jsx)(t_.A, { tabs: t, orientation: "vertical", tabsClassName: tP.v }),
        ],
    });
}
let tO = () =>
    (0, n.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, n.jsx)(td, {}),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(to, { title: et.intl.string(et.t.xVRG4P), children: (0, n.jsx)(tM, {}) }),
                    (0, n.jsx)(to, {
                        title: et.intl.string(et.t["y62Z/d"]),
                        children: (0, n.jsxs)(tm, { children: [(0, n.jsx)(tv, {}), (0, n.jsx)(tT, {})] }),
                    }),
                    (0, n.jsx)(to, { title: et.intl.string(et.t["1Qn8iV"]), children: (0, n.jsx)(tI, {}) }),
                ],
            }),
        ],
    });
function tF() {
    let { hasConsented: e, updateConsent: t } = (0, tf.lH)(L.YAq.PERSONALIZATION);
    return (0, n.jsx)(tj.h, {
        children: (0, n.jsx)(tg.Ay, {
            title: et.intl.string(ee.default.XMPqUx),
            note: et.intl.format(ee.default.Imp6Ns, {
                helpdeskArticle: tp.A.getArticleURL(L.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
function tG() {
    let e = (0, er.k)() ?? void 0,
        t = th.yH.useControlledSetting(e),
        l = th.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, n.jsx)(tj.h, {
              children: (0, n.jsx)(tg.Ay, {
                  title: et.intl.string(et.t.CyLYKZ),
                  note: et.intl.format(ee.default["6mK5Pz"], {
                      helpdeskArticle: tp.A.getArticleURL(L.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => th.yH.updateControlledSetting(e, !t),
                  disabled: l,
              }),
          });
}
function tw() {
    let e = (0, er.k)() ?? void 0,
        t = th.kf.useControlledSetting(e);
    return (0, n.jsx)(tj.h, {
        children: (0, n.jsx)(tg.Ay, {
            title: et.intl.string(ee.default.ZhaNu8),
            note: et.intl.format(ee.default.cnCK6b, {
                helpdeskArticle: tp.A.getArticleURL(L.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => th.kf.updateControlledSetting(e, !t),
        }),
    });
}
function tV() {
    let { hasConsented: e, updateConsent: t } = (0, tf.lH)(L.YAq.USAGE_STATISTICS);
    return (0, n.jsx)(tj.h, {
        children: (0, n.jsx)(tg.Ay, {
            title: et.intl.string(ee.default.HjstRR),
            note: et.intl.format(ee.default.Z5yJZy, {
                helpdeskArticle: tp.A.getArticleURL(L.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: e,
            onChange: t,
        }),
    });
}
let tz = () =>
    (0, n.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, n.jsx)(td, {}),
            (0, n.jsx)("div", {
                children: (0, n.jsxs)(to, {
                    title: et.intl.string(et.t.SRZyHg),
                    children: [(0, n.jsx)(tV, {}), (0, n.jsx)(tw, {}), (0, n.jsx)(tG, {}), (0, n.jsx)(tF, {})],
                }),
            }),
        ],
    });
var tH = l(582394),
    tB = l(141006),
    tY = l(821609);
function tq() {
    let e = et.intl.string(ee.default["8SLtqb"]);
    return (0, n.jsx)(tY.$, {
        icon: tB.y,
        variant: "primary",
        text: e,
        onClick: () => {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    l.e("40859"),
                    l.e("95429"),
                    l.e("88905"),
                    l.e("48370"),
                    l.e("72875"),
                ]).then(l.bind(l, 320742));
                return (t) => (0, n.jsx)(e, { ...t });
            }),
                _.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: C.qb.ShowQRCodeModal });
        },
    });
}
var tZ = l(555317);
let tK = () => {
        let e = (0, D.Li)(),
            t = (0, b.A)(),
            { handleTabChange: l } = k();
        return (0, D.xr)() || (t && e)
            ? null
            : (0, n.jsx)("div", {
                  className: tZ.x6,
                  children: t
                      ? (0, n.jsx)(tY.$, {
                            variant: "primary",
                            text: et.intl.string(et.t.LhlgY9),
                            onClick: () => l(C.u9.REQUESTS),
                        })
                      : (0, n.jsx)(tq, {}),
              });
    },
    tX = () => {
        let e = (0, b.A)(),
            t = (0, ei.y)(et.intl.string(ee.default["T7GyW+"]), et.intl.string(ee.default.goKE2b)),
            l = (0, ei.y)(
                et.intl.format(ee.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                et.intl.format(ee.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, n.jsxs)("div", {
            className: a()(tZ.kL, e7.a),
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)("div", {
                            children: (0, n.jsxs)("div", {
                                className: tZ.TK,
                                children: [
                                    (0, n.jsx)(w.D, {
                                        variant: "heading-xl/medium",
                                        children: (0, n.jsx)(ed.F, { children: t }),
                                    }),
                                    (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                                ],
                            }),
                        }),
                        (0, n.jsx)(tK, {}),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: tZ.F0,
                    children: (0, n.jsx)("img", {
                        src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                        alt: et.intl.string(ee.default.ffg6xd),
                    }),
                }),
            ],
        });
    };
var tW = l(299628),
    tQ = l(119e3);
let tJ = () => {
    let e = et.intl.string(ee.default.tr8Gni),
        t = (0, ei.y)(et.intl.string(ee.default["3xKGSE"]), et.intl.string(ee.default.XbgrG7));
    return (0, n.jsxs)(c.B, {
        className: a()(tQ.k, e7.a),
        gap: 24,
        padding: 24,
        children: [
            (0, n.jsxs)(c.B, {
                gap: 8,
                children: [
                    (0, n.jsx)(w.D, { variant: "heading-md/bold", children: (0, n.jsx)(ed.F, { children: e }) }),
                    (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: t }),
                ],
            }),
            (0, n.jsx)(tW.A, {}),
        ],
    });
};
var t$ = l(445220);
let t0 = (e) => {
    let { icon: t, iconClassName: l, header: i, description: s } = e;
    return (0, n.jsxs)("div", {
        className: a()(t$.kL, e7.a),
        children: [
            (0, n.jsx)("div", {
                className: t$.n1,
                children: (0, n.jsx)(t, {
                    className: a()(t$.Kk, l),
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                }),
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(w.D, {
                        variant: "heading-md/bold",
                        className: t$.wx,
                        children: (0, n.jsx)(ed.F, { children: i }),
                    }),
                    (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
                ],
            }),
        ],
    });
};
var t3 = l(847374),
    t1 = l(349288),
    t2 = l(308528),
    t9 = l(922529),
    t8 = l(780964),
    t5 = l(830543),
    t4 = l(766075),
    t7 = l(219893),
    t6 = l(936926),
    le = l(465323),
    lt = l(17928),
    ll = l(617617),
    ln = l(361157);
function li(e) {
    let t = (0, lt.bG)([I.A], () => I.A.getMonthlyPurchases());
    return (function (e, t) {
        if (null == e) return { kind: "off" };
        if (0 === e.amount) return { kind: "blocked" };
        let l = e.currency,
            n = (0, $.CE)((0, $.$g)(e.amount, l), ef.WT.MONTH, 1);
        if (t >= e.amount) return { kind: "spent", monthlyText: n };
        let i = le.yR[e.currency] ?? 2,
            s = e.amount - t;
        return s <= 10 * 10 ** i
            ? {
                  kind: "close-to-limit",
                  monthlyText: n,
                  remainingText: et.intl.formatToPlainString(ee.default["+Q+bU1"], { amount: (0, $.$g)(s, l) }),
              }
            : { kind: "on", monthlyText: n };
    })(e, t?.total_amount ?? 0);
}
var ls = l(534654),
    la = l(980707),
    lr = l(477782),
    ld = l(943255),
    lc = l(922016),
    lu = l(408278),
    lo = l(365199),
    lx = l(243721),
    lm = l(95396),
    lh = l(624411);
function lj(e) {
    let { closePopout: t, onEdit: l, onDelete: i } = e;
    return (0, n.jsxs)(la.W, {
        "data-menu-migrated": !0,
        "aria-label": et.intl.string(et.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, n.jsx)(lr.Dr, { id: "edit", label: et.intl.string(ee.default.b3DPqg), action: l }),
            (0, n.jsx)(lr.Dr, { id: "delete", label: et.intl.string(ee.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function lg(e) {
    let { rule: t, teenId: s, readOnly: a = !1 } = e,
        r = i.useRef(null),
        d = t?.enabled ?? !0,
        u = (0, t7.li)(t),
        o = (0, t7.n1)(t.days),
        x = () => {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("76035"), l.e("39231")]).then(l.bind(l, 154434));
                return (l) => (0, n.jsx)(e, { ...l, teenId: s, rule: t });
            });
        },
        m = () => {
            (0, lm.CS)(s, t.ruleId);
        };
    return (0, n.jsxs)(c.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        children: [
            (0, n.jsx)("div", { className: lh.X, children: (0, n.jsx)(ld.Z, { size: "md" }) }),
            (0, n.jsxs)(c.B, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, n.jsx)(G.E, { variant: "text-md/medium", children: u }),
                    (0, n.jsx)(G.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
                ],
            }),
            (0, n.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !a &&
                        (0, n.jsx)(lc.Y, {
                            targetElementRef: r,
                            renderPopout: (e) => (0, n.jsx)(lj, { ...e, onEdit: x, onDelete: m }),
                            position: "bottom",
                            align: "right",
                            animation: lc.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, n.jsx)(lu.K, {
                                    buttonRef: r,
                                    size: "sm",
                                    icon: lo.j,
                                    variant: "icon-only",
                                    "aria-label": et.intl.string(et.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        e.stopPropagation(), t(e);
                                    },
                                });
                            },
                        }),
                    (0, n.jsx)("div", {
                        className: lh.m,
                        children: (0, n.jsx)(lx.d, {
                            checked: d,
                            label: et.intl.string(ee.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: () => {
                                (0, lm.Um)(s, t.ruleId, { enabled: !d });
                            },
                            hasIcon: !0,
                            disabled: a,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var lf = l(587349);
let lv = (e) => {
    let { title: t, subtitle: l, buttonText: i, onButtonPress: s, readOnly: a = !1 } = e;
    return (0, n.jsxs)(c.B, {
        padding: { top: 12, bottom: 12 },
        justify: "space-between",
        direction: "horizontal",
        align: "center",
        gap: 32,
        children: [
            (0, n.jsxs)(c.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, n.jsx)(G.E, { variant: "text-md/medium", children: t }),
                    null != l && (0, n.jsx)(G.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            (0, n.jsx)("div", {
                className: a ? lf.nh : void 0,
                children: (0, n.jsx)(tY.$, { text: i, onClick: s, variant: "secondary", size: "sm", disabled: a }),
            }),
        ],
    });
};
function lA(e, t, i) {
    return (0, n.jsx)(lv, {
        title: et.intl.string(ee.default.gMeekL),
        subtitle: (function (e) {
            switch (e.kind) {
                case "off":
                    return et.intl.string(ee.default.YEnpaj);
                case "on":
                    return e.monthlyText;
                case "close-to-limit":
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            e.monthlyText,
                            " \xb7 ",
                            (0, n.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-warning",
                                tag: "span",
                                children: e.remainingText,
                            }),
                        ],
                    });
                case "spent":
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            e.monthlyText,
                            " \xb7 ",
                            (0, n.jsx)(G.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                tag: "span",
                                children: et.intl.string(ee.default.Q2msVQ),
                            }),
                        ],
                    });
                case "blocked":
                    return (0, n.jsx)(G.E, {
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
                let { default: t } = await Promise.all([l.e("47872"), l.e("87096")]).then(l.bind(l, 638155));
                return (l) => (0, n.jsx)(t, { ...l, teenId: e });
            });
        },
        readOnly: i,
    });
}
let lE = (e) => {
        let { teenId: t } = e;
        return lA(
            t,
            li(
                (0, lt.bG)(
                    [ll.A],
                    () => {
                        let e = ll.A.settings.safetySettings?.spendingLimitSettings?.oneTimePurchaseLimit;
                        return null == e ? null : { amount: Number(e.amount), currency: e.currency };
                    },
                    void 0,
                    ln.Ky,
                ),
            ),
            !0,
        );
    },
    lN = (e) => {
        let { teenId: t } = e,
            l = th.fD.useControlledSetting(t);
        return lA(t, li(l));
    },
    lp = (e) => {
        let { teenId: t, readOnly: s = !1 } = e,
            a = (0, z.y3)(),
            r = a?.restrictedSchedule?.rules ?? [],
            d = (0, t7.I2)(r),
            [u, o] = i.useState(d.length > 0);
        i.useEffect(() => {
            d.length > 0 && o(!0);
        }, [d.length]);
        let x = () => {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("76035"), l.e("39231")]).then(l.bind(l, 154434));
                return (l) => (0, n.jsx)(e, { ...l, teenId: t });
            });
        };
        return 0 === d.length
            ? (0, n.jsx)(lv, {
                  title: et.intl.string(ee.default["1Op+NP"]),
                  buttonText: et.intl.string(ee.default.OwFF4o),
                  onButtonPress: x,
                  readOnly: s,
              })
            : (0, n.jsxs)(c.B, {
                  direction: "vertical",
                  gap: 0,
                  children: [
                      (0, n.jsxs)(M.D, {
                          className: lf.dV,
                          onClick: () => o((e) => !e),
                          children: [
                              (0, n.jsx)("div", {
                                  className: lf.WB,
                                  children: (0, n.jsxs)(c.B, {
                                      direction: "vertical",
                                      gap: 4,
                                      children: [
                                          (0, n.jsx)(G.E, {
                                              variant: "text-md/medium",
                                              children: et.intl.string(ee.default["1Op+NP"]),
                                          }),
                                          (0, n.jsx)(G.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: et.intl.formatToPlainString(ee.default.XfwcpX, {
                                                  count: d.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: lf.pt,
                                  children: (0, n.jsx)(t3.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: `${lf.ai} ${u ? lf.hg : ""}`,
                                  }),
                              }),
                          ],
                      }),
                      u &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(c.B, {
                                      direction: "vertical",
                                      gap: 16,
                                      padding: { top: 24, bottom: 24 },
                                      children: d.map((e) =>
                                          (0, n.jsx)(lg, { rule: e, teenId: t, readOnly: s }, e.ruleId),
                                      ),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: s ? lf.nh : void 0,
                                      children: (0, n.jsx)(tY.$, {
                                          text: et.intl.string(ee.default.OwFF4o),
                                          onClick: x,
                                          variant: "secondary",
                                          size: "sm",
                                          disabled: s,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              });
    },
    lT = () => {
        let e = (0, D.vx)(),
            t = (0, z.y3)(),
            l = (0, t6.Vh)({ location: "TimeControlsRow" }),
            i = () => {
                (0, t4.openUserSettings)(t8.X.CONTENT_AND_SOCIAL_PANEL);
            };
        return (0, n.jsxs)(c.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, n.jsxs)(c.B, {
                    padding: { bottom: 12 },
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    gap: 32,
                    children: [
                        (0, n.jsxs)(c.B, {
                            direction: "vertical",
                            gap: 4,
                            children: [
                                (0, n.jsx)(G.E, {
                                    variant: "text-sm/semibold",
                                    children: et.intl.string(ee.default.ahKIJO),
                                }),
                                (0, n.jsx)(G.E, {
                                    variant: "text-md/medium",
                                    color: "text-muted",
                                    children: et.intl.format(ee.default.X9rW0j, {
                                        openSettingsHook: (e, t) =>
                                            (0, n.jsx)(t1.Anchor, { onClick: i, children: e }, t),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(tY.$, {
                            text: et.intl.formatToPlainString(ee.default.ggcjPR, { count: e.length }),
                            onClick: () => {
                                (0, t5.default)(), t2.A.openPrivateChannel({ recipientIds: e });
                            },
                            variant: "secondary",
                            size: "sm",
                        }),
                    ],
                }),
                l &&
                    t?.id != null &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(t9.A, { className: lf.yF }),
                            (0, n.jsx)(lE, { teenId: t.id }),
                            (0, n.jsx)(t9.A, { className: lf.yF }),
                            (0, n.jsx)(lp, { teenId: t.id, readOnly: !0 }),
                        ],
                    }),
            ],
        });
    },
    ly = () => {
        let e = (0, z.y3)(),
            t = (0, z.tl)(),
            { handleTabChange: l } = k(),
            s = (0, t6.Vh)({ location: "TimeControlsRow" });
        i.useEffect(() => {
            e?.id != null && t && S.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]);
        let a = (e) => {
            l(e);
        };
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(c.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(G.E, { variant: "text-sm/semibold", children: et.intl.string(ee.default.ahKIJO) }),
                        (0, n.jsx)(G.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: et.intl.string(ee.default.Sv236e),
                        }),
                    ],
                }),
                (0, n.jsx)(lv, {
                    title: et.intl.string(et.t["+o1pDZ"]),
                    buttonText: et.intl.string(et.t.bt75uw),
                    onButtonPress: () => a(C.u9.CONTENT_AND_SOCIAL),
                }),
                (0, n.jsx)(t9.A, { className: lf.yF }),
                (0, n.jsx)(lv, {
                    title: et.intl.string(et.t.OAuOHD),
                    buttonText: et.intl.string(et.t.bt75uw),
                    onButtonPress: () => a(C.u9.DATA_AND_PRIVACY),
                }),
                s &&
                    e?.id != null &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(t9.A, { className: lf.yF }),
                            (0, n.jsx)(lN, { teenId: e.id }),
                            (0, n.jsx)(t9.A, { className: lf.yF }),
                            (0, n.jsx)(lp, { teenId: e.id }),
                        ],
                    }),
            ],
        });
    },
    lS = () => {
        let e = (0, ls.A)();
        return 0 === (0, D.vx)().length
            ? null
            : (0, n.jsx)("div", { className: lf.kL, children: e ? (0, n.jsx)(lT, {}) : (0, n.jsx)(ly, {}) });
    };
var lI = l(175524);
let lb = () => {
    let e = (0, D.vx)().length > 0,
        t = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        l = (0, ei.y)(et.intl.string(ee.default["5RZ8Tq"]), et.intl.string(ee.default.bmhCnL)),
        i = (0, ei.y)(et.intl.string(ee.default.XKnFFq), et.intl.string(ee.default["68zfxD"])),
        s = (0, ei.y)(et.intl.string(ee.default["Rm/6a0"]), et.intl.string(ee.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, n.jsxs)("div", {
              className: lI.kL,
              children: [
                  e
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", { className: lI.vK, children: (0, n.jsx)(tX, {}) }),
                                (0, n.jsxs)("div", {
                                    className: lI.yk,
                                    children: [
                                        (0, n.jsx)(t0, {
                                            icon: tH.M,
                                            header: et.intl.string(ee.default["001l3m"]),
                                            description: l,
                                        }),
                                        (0, n.jsx)(t0, {
                                            icon: W.b,
                                            header: et.intl.string(ee.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, n.jsx)(t0, {
                                            icon: tB.y,
                                            header: et.intl.string(ee.default.hhOuMe),
                                            description: s,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, n.jsx)(ts, {}) : (0, n.jsx)(tJ, {}),
                  (0, n.jsx)(lS, {}),
              ],
          });
};
l(801541);
var l_ = l(889137),
    lC = l(837381),
    lL = l(475825),
    lR = l(260762),
    lk = l(485947),
    lD = l(426190),
    lU = l(789645),
    lP = l(990078),
    lM = l(665566);
function lO(e) {
    let { icon: t, tooltip: l, onClick: i, className: s } = e;
    return (0, n.jsx)(lP.m, {
        text: l,
        children: (0, n.jsx)(M.D, {
            "aria-label": l,
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i(e);
            },
            className: a()(lM.hP, s),
            children: (0, n.jsx)(t, { className: lM.Kk, color: "currentColor" }),
        }),
    });
}
var lF = l(854627),
    lG = l(19575),
    lw = l(486241);
let lV = lG.Ay.getEnableHardwareAcceleration() ? eG.Js : eG.eu;
function lz(e) {
    let { otherUser: t, status: l } = e,
        i = (0, D.XC)(t.id, l),
        {
            avatarSrc: s,
            avatarDecorationSrc: a,
            eventHandlers: r,
        } = (0, lF.A)({ userId: t.id, size: P._3.SIZE_40, animateOnHover: !0 });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ...r,
                children: (0, n.jsx)(lV, {
                    className: lw.my,
                    src: s,
                    avatarDecoration: a,
                    size: P._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, n.jsxs)("div", {
                className: lw.yt,
                children: [
                    (0, n.jsx)("div", { className: lw.Vx, children: (0, n.jsx)(eJ.A, { user: t }) }),
                    (0, n.jsx)(G.E, { color: "text-muted", variant: "text-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var lH = l(528218);
function lB(e) {
    let { user: t } = e,
        s = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        a = i.useCallback(() => {
            B()(void 0 !== s, "User must be logged in to accept a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([l.e("53385"), l.e("55738"), l.e("43139")]).then(
                        l.bind(l, 179950),
                    );
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: s, otherUser: t });
                });
        }, [s, t]);
    return (0, n.jsxs)("div", {
        className: lH.kL,
        children: [
            (0, n.jsx)("div", { className: lH.zH, children: (0, n.jsx)(lz, { otherUser: t, status: C.Ef.ACTIVE }) }),
            (0, n.jsx)("div", {
                className: lH.o1,
                children: (0, n.jsx)(lO, { icon: lU.P, tooltip: et.intl.string(ee.default.l20ZZp), onClick: a }),
            }),
        ],
    });
}
var lY = l(933832);
function lq(e) {
    let { user: t } = e,
        s = (0, b.A)(),
        a = (0, D.xr)(),
        r = (0, d.bG)([eK.default], () => eK.default.getCurrentUser()),
        c = i.useCallback(() => {
            B()(void 0 !== r, "User must be logged in to accept a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([l.e("53385"), l.e("55738"), l.e("31385")]).then(
                        l.bind(l, 58144),
                    );
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: r, otherUser: t });
                });
        }, [r, t]),
        u = i.useCallback(() => {
            B()(void 0 !== r, "User must be logged in to decline a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([l.e("53385"), l.e("55738"), l.e("84811")]).then(
                        l.bind(l, 389094),
                    );
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: r, otherUser: t });
                });
        }, [r, t]),
        o = i.useCallback(() => {
            B()(void 0 !== r, "User must be logged in to decline a link request"),
                (0, Y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([l.e("53385"), l.e("55738"), l.e("17219")]).then(
                        l.bind(l, 187278),
                    );
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: r, otherUser: t });
                });
        }, [r, t]);
    return (0, n.jsxs)("div", {
        className: lH.kL,
        children: [
            (0, n.jsx)("div", { className: lH.zH, children: (0, n.jsx)(lz, { otherUser: t, status: C.Ef.PENDING }) }),
            (0, n.jsx)("div", {
                className: lH.o1,
                children: s
                    ? (0, n.jsx)(lO, { icon: lU.P, tooltip: et.intl.string(ee.default.e5iHmZ), onClick: o })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              a
                                  ? null
                                  : (0, n.jsx)(lO, {
                                        icon: lY.A,
                                        tooltip: et.intl.string(ee.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, n.jsx)(lO, { icon: lU.P, tooltip: et.intl.string(ee.default.bBDeNI), onClick: u }),
                          ],
                      }),
            }),
        ],
    });
}
var lZ = l(615300),
    lK = l(187322),
    lX = l(975732),
    lW = l(789392);
let lQ = (e) => {
    let { userId: t, children: l, isLast: s, className: r } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: u } = (0, v.Ay)(),
        o = i.useCallback(() => {
            (0, lX.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u });
        }, [t, u]),
        x = () => {
            c(!0);
        },
        m = () => {
            c(!1);
        };
    return (0, n.jsx)(lC.tG, {
        id: t,
        children: (e) =>
            (0, n.jsx)(lK.vN, {
                offset: { left: -8, right: -8 },
                children: (0, n.jsx)(lZ.A.div, {
                    style: { opacity: 1 },
                    className: a()(lW.KG, r, { [lW.HV]: s, [lW.vu]: d }),
                    onMouseEnter: x,
                    onMouseLeave: m,
                    onClick: o,
                    ...e,
                    children: l(d),
                }),
            }),
    });
};
var lJ = l(327337),
    l$ = l(19331);
let l0 = "/assets/922a2ee66ef62b5b.svg";
function l3(e) {
    let { header: t, description: l, stepNumber: i } = e;
    return (0, n.jsxs)("div", {
        className: l$.PM,
        children: [
            (0, n.jsx)("div", {
                className: l$.CD,
                children: (0, n.jsx)(w.D, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, n.jsx)(ed.F, { children: i }),
                }),
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(w.D, { variant: "heading-sm/bold", children: (0, n.jsx)(ed.F, { children: t }) }),
                    (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                ],
            }),
        ],
    });
}
function l1() {
    return (0, n.jsxs)("div", {
        className: a()(l$.aP, e7.a, l$.dO, l$.p2),
        children: [
            (0, n.jsxs)("div", {
                className: l$.Np,
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(w.D, {
                                className: e0.QB,
                                variant: "heading-xl/medium",
                                children: (0, n.jsx)(ed.F, { children: et.intl.string(ee.default.pHEnV5) }),
                            }),
                            (0, n.jsx)(G.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: e0.SX,
                                children: et.intl.string(ee.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)("img", { className: l$._u, src: l0, alt: et.intl.string(ee.default["r+PDmu"]) }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: l$.Ci,
                children: [
                    (0, n.jsx)(l3, {
                        header: et.intl.string(ee.default["7xxAni"]),
                        description: et.intl.string(ee.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, n.jsx)(l3, {
                        header: et.intl.string(ee.default["AXgx+a"]),
                        description: et.intl.string(ee.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, n.jsx)(l3, {
                        header: et.intl.string(ee.default.MZn1tG),
                        description: et.intl.string(ee.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function l2() {
    let e = (0, D.xr)();
    return (0, n.jsxs)("div", {
        className: a()(l$.aP, e7.a, l$.dO),
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(w.D, {
                        className: e0.QB,
                        variant: "heading-xl/medium",
                        children: (0, n.jsx)(ed.F, { children: et.intl.string(ee.default.zUCWEL) }),
                    }),
                    (0, n.jsx)(G.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: e0.SX,
                        children: et.intl.format(ee.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, n.jsx)(tq, {}),
                ],
            }),
            (0, n.jsx)("img", { className: l$._u, src: l0, alt: et.intl.string(ee.default["r+PDmu"]) }),
        ],
    });
}
function l9(e) {
    let { sectionType: t, sectionTitle: l, requests: s } = e,
        a = i.useRef(null),
        r = `${t}-list`,
        d = (0, lR.A)(r),
        c = i.useCallback(
            (e) => {
                let { row: l, listIndex: i } = e,
                    a = s[l],
                    r = i === s.length;
                return null == a
                    ? null
                    : (0, n.jsx)(
                          lQ,
                          {
                              userId: a.id,
                              isLast: r,
                              children: () =>
                                  t === C.Ef.ACTIVE ? (0, n.jsx)(lB, { user: a }) : (0, n.jsx)(lq, { user: a }),
                          },
                          a.id,
                      );
            },
            [s, t],
        ),
        u = i.useCallback(
            () =>
                (0, n.jsx)(
                    lk.A,
                    {
                        children: (0, n.jsx)(G.E, {
                            className: e0.QB,
                            variant: "eyebrow",
                            color: "text-default",
                            children: l,
                        }),
                    },
                    "title",
                ),
            [l],
        );
    return (0, n.jsx)("div", {
        className: l$.uW,
        children: (0, n.jsx)(lC.hD, {
            navigator: d,
            children: (0, n.jsx)(lC.PR, {
                children: (e) => {
                    let { ref: t, role: i, ...d } = e;
                    return (0, n.jsx)(
                        lL.OZ,
                        {
                            innerRole: i,
                            innerAriaLabel: l,
                            ref: (e) => {
                                (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            sectionHeight: C.h4,
                            rowHeight: C.Gg,
                            renderSection: u,
                            renderRow: c,
                            sections: [s.length],
                            chunkSize: 30,
                            fade: !0,
                            ...d,
                        },
                        r,
                    );
                },
            }),
        }),
    });
}
let l8 = () => {
        let e = (0, b.A)(),
            t = (0, D.GR)(),
            l = e ? C.Y7 : C.kp,
            i = { count: t.length, max: l },
            s = (0, ei.y)(
                et.intl.formatToPlainString(ee.default["+tnO34"], i),
                et.intl.formatToPlainString(ee.default["pu6/U0"], i),
            );
        return t.length > 0
            ? (0, n.jsx)(l9, { sectionType: C.Ef.ACTIVE, sectionTitle: s, requests: t })
            : (0, n.jsxs)("div", {
                  className: l$.uW,
                  children: [
                      (0, n.jsx)(G.E, { className: e0.QB, variant: "eyebrow", color: "text-default", children: s }),
                      (0, n.jsx)("div", {
                          className: l$.aP,
                          children: (0, n.jsx)(e3, { text: et.intl.string(ee.default.C4ScLD) }),
                      }),
                  ],
              });
    },
    l5 = () => {
        let e = (0, D.xr)(),
            t = (0, b.A)() ? C.Y7 : C.kp,
            l = (0, ei.y)(
                et.intl.formatToPlainString(ee.default["1/PzIj"], { maxConnections: t }),
                et.intl.formatToPlainString(ee.default.RcTgiE, { maxConnections: t }),
            );
        return e
            ? (0, n.jsx)("div", {
                  className: l$.rv,
                  children: (0, n.jsx)(G.E, { variant: "text-xxs/medium", color: "text-muted", children: l }),
              })
            : null;
    },
    l4 = () => {
        let e = (0, lD.N)(),
            t = (0, lD.z)(),
            l = (0, l_.YW)({ helpline: e, throughline: t })
                .with({ helpline: !0 }, () =>
                    et.intl.format(ee.default["KOwsf/"], {
                        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                    }),
                )
                .with({ throughline: !0 }, () => et.intl.format(ee.default["6tsC8u"], { helpLink: lJ.CL }))
                .otherwise(() => null);
        return null == l
            ? null
            : (0, n.jsxs)("div", {
                  className: e0.QX,
                  children: [
                      (0, n.jsx)(w.D, {
                          className: l$.rH,
                          variant: "heading-sm/semibold",
                          children: (0, n.jsx)(ed.F, { children: et.intl.string(ee.default["7/tVhv"]) }),
                      }),
                      (0, n.jsx)(G.E, { variant: "text-xs/medium", color: "text-muted", children: l }),
                  ],
              });
    },
    l7 = () => {
        let e = (0, D.xk)(C.Ef.PENDING),
            t = (0, ei.y)(
                et.intl.formatToPlainString(ee.default.IkAgkG, { count: e.length }),
                et.intl.formatToPlainString(ee.default.Q8XnAa, { count: e.length }),
            );
        return 0 === e.length ? null : (0, n.jsx)(l9, { sectionType: C.Ef.PENDING, sectionTitle: t, requests: e });
    },
    l6 = () => {
        let e = (0, b.A)();
        return (0, n.jsxs)("div", {
            className: l$.kL,
            children: [
                e ? (0, n.jsx)(l1, {}) : (0, n.jsx)(l2, {}),
                (0, n.jsx)(l8, {}),
                (0, n.jsx)(l7, {}),
                (0, n.jsx)(l5, {}),
                (0, n.jsx)(l4, {}),
            ],
        });
    };
var ne = l(936504),
    nt = l(946015),
    nl = l(270003),
    nn = l(993077),
    ni = l(935286),
    ns = l(840559),
    na = l(997187),
    nr = l(723923),
    nd = l(192280);
let nc = () => {
    let e = T.dm.useSetting(),
        { categories: t, initialized: l } = (0, lt.cf)([na.A], () => na.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == l && (0, ns.cR)();
        }, [l]),
        (0, n.jsx)("div", {
            className: nd.kL,
            children: (0, n.jsxs)(nl.n, {
                label: et.intl.string(ee.default.USIXU7),
                children: [
                    (0, n.jsx)(lx.d, {
                        checked: e,
                        description: et.intl.string(ee.default["5MdB3j"]),
                        onChange: T.dm.updateSetting,
                        label: et.intl.string(ee.default.zkEceS),
                    }),
                    e
                        ? (0, n.jsx)(nn.Z, {
                              className: nd.MT,
                              type: nn.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, n.jsxs)(nt.s, {
                                  justify: nt.s.Justify.END,
                                  children: [
                                      (0, n.jsx)(nt.s.Child, {
                                          children: (0, n.jsx)(G.E, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: et.intl.string(ee.default.xAVm7K),
                                          }),
                                      }),
                                      (0, n.jsx)(M.D, {
                                          children: (0, n.jsx)(ne.N_, {
                                              onClick: t5.default,
                                              to: { pathname: L.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: et.intl.string(ee.default.cUIXFY),
                                          }),
                                      }),
                                      (0, n.jsx)(x.fk, { icon: ni.E, className: nd.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, n.jsx)(lx.d, {
                        checked: !!t[nr.HO.FAMILY_CENTER_DIGEST],
                        description: et.intl.string(ee.default.y34S46),
                        onChange: function (e) {
                            (0, ns.CA)(nr.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: et.intl.string(ee.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
var nu = l(731738),
    no = l(964486),
    nx = l(612200),
    nm = l(807393),
    nh = l(210714),
    nj = l(33666),
    ng = l(204925);
function nf(e) {
    let { location: t, onMountEffect: l } = e,
        n = (0, nj.A)(),
        s = (0, D.W1)(),
        { familyCenterInitialized: a, isLoading: r } = (0, d.cf)([I.A], () => ({
            familyCenterInitialized: I.A.getIsInitialized(),
            isLoading: I.A.isLoading(),
        })),
        c = (0, er.k)(),
        { selectedTab: u, handleTabChange: o } = k(),
        x = eK.default.getCurrentUser(),
        m = null != n,
        h = a && null != x && !m;
    (0, no.Ay)(() => {
        (0, nh.d)("family-center"), null != l && l();
    });
    let j = { isConsideredAdult: "adult" === n, numOfAcceptedRequests: s, selectedTab: u, selectedTeenId: c },
        g = i.useRef(j);
    return (
        i.useEffect(() => {
            g.current = j;
        }),
        i.useEffect(() => {
            if (a && m) {
                let { isConsideredAdult: e, numOfAcceptedRequests: l, selectedTab: n, selectedTeenId: i } = g.current;
                _.default.track(L.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: l,
                    selected_teen_id: i,
                    initial_page: C.zu[n],
                    source: C.iN[t],
                }),
                    nm.A.increment({ name: nu.K.FAMILY_CENTER_VIEW });
            }
        }, [a, m, t]),
        i.useEffect(() => {
            h && (0, nx.yO)(ng.w_.FAMILY_CENTER);
        }, [h]),
        { isLoading: r, selectedTab: u, handleTabChange: o, showAgeGateModal: h }
    );
}
var nv = l(556493);
let nA = {
        [C.u9.REQUESTS]: l6,
        [C.u9.ACTIVITY]: lb,
        [C.u9.SETTINGS]: nc,
        [C.u9.CONTENT_AND_SOCIAL]: tO,
        [C.u9.DATA_AND_PRIVACY]: tz,
        [C.u9.SCREEN_TIME_CONTROLS]: nc,
    },
    nE = { [C.u9.REQUESTS]: l6, [C.u9.ACTIVITY]: lb, [C.u9.CONTENT_AND_SOCIAL]: tO, [C.u9.DATA_AND_PRIVACY]: tz };
function nN() {
    return (0, n.jsx)(c.B, { justify: "center", align: "center", className: nv.g4, children: (0, n.jsx)(u.y, {}) });
}
function np(e) {
    let { section: t, handleItemSelect: l } = e,
        i = (0, D.VT)(),
        s = (0, b.A)();
    return [C.u9.CONTENT_AND_SOCIAL, C.u9.DATA_AND_PRIVACY, C.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, n.jsxs)(o.V, {
              className: nv.c5,
              "aria-label": et.intl.string(ee.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: l,
              children: [
                  (0, n.jsx)(o.V.Item, {
                      className: nv.jA,
                      id: C.u9.ACTIVITY,
                      children: et.intl.string(ee.default.bdBmqy),
                  }),
                  (0, n.jsxs)(o.V.Item, {
                      className: nv.jA,
                      id: C.u9.REQUESTS,
                      "aria-label": et.intl.string(ee.default["gVWG+6"]),
                      children: [
                          et.intl.string(ee.default["gVWG+6"]),
                          i > 0 ? (0, n.jsx)(x.hV, { className: nv.qS, count: i }) : null,
                      ],
                  }),
                  s
                      ? (0, n.jsx)(o.V.Item, {
                            className: nv.jA,
                            id: C.u9.SETTINGS,
                            children: et.intl.string(et.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function nT(e) {
    let { theme: t, section: l, handleItemSelect: i } = e,
        s = (0, E.GV)(),
        d = (0, D.VT)();
    return (0, n.jsx)(m.N, {
        theme: t,
        children: (e) =>
            (0, n.jsxs)(N.A, {
                className: a()(e, nv.ZB),
                scrollable: r.Fr,
                role: "navigation",
                "aria-labelledby": s,
                toolbar: !0,
                children: [
                    (0, n.jsx)(N.A.Icon, { icon: h.n, "aria-hidden": !0 }),
                    (0, n.jsx)(N.A.Title, { id: s, children: et.intl.string(ee.default.RZqaJn) }),
                    (0, n.jsx)(N.A.Divider, {}),
                    (0, n.jsxs)(o.V, {
                        "aria-label": et.intl.string(ee.default.RZqaJn),
                        selectedItem: l,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, n.jsx)(o.V.Item, {
                                id: C.u9.ACTIVITY,
                                className: nv.AS,
                                children: et.intl.string(ee.default.bdBmqy),
                            }),
                            (0, n.jsxs)(o.V.Item, {
                                id: C.u9.REQUESTS,
                                className: nv.AS,
                                "aria-label": et.intl.string(ee.default["gVWG+6"]),
                                children: [
                                    et.intl.string(ee.default["gVWG+6"]),
                                    d > 0 ? (0, n.jsx)(x.hV, { className: nv.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function ny() {
    let e = (0, E.GV)(),
        {
            isLoading: t,
            selectedTab: l,
            handleTabChange: s,
            showAgeGateModal: a,
        } = nf({
            location: C.MH.SETTINGS,
            onMountEffect: () => {
                S.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            (0, y._)(R[l]);
        }, [l]),
        a)
    )
        return null;
    let r = nA[l];
    return (0, n.jsxs)("main", {
        className: nv.kL,
        "aria-label": et.intl.string(ee.default.RZqaJn),
        children: [
            (0, n.jsx)(A.HI, { location: et.intl.string(ee.default.RZqaJn) }),
            (0, n.jsx)(np, {
                section: l,
                handleItemSelect: (e) => {
                    s(e);
                },
            }),
            (0, n.jsx)(o.V.Panel, {
                id: l,
                "aria-labelledby": e,
                className: nv.Us,
                children: t ? (0, n.jsx)(nN, {}) : (0, n.jsx)(r, {}),
            }),
        ],
    });
}
function nS() {
    let { analyticsLocations: e } = (0, v.Ay)(f.A.FAMILY_CENTER),
        t = (0, b.A)(),
        l = (0, d.bG)([I.A], () => I.A.getIsInitialized()),
        s = (0, d.bG)([p.A], () => p.A.theme),
        r = (0, E.GV)(),
        {
            isLoading: c,
            selectedTab: u,
            handleTabChange: x,
            showAgeGateModal: m,
        } = nf({
            location: C.MH.SIDENAV,
            onMountEffect: () => {
                g.I(L.BVt.FAMILY_CENTER), !I.A.isLoading() && I.A.canRefetch() && S.Ay.initialPageLoad();
            },
        });
    if (
        (i.useEffect(() => {
            let e = T.dm.getSetting();
            l && t && void 0 === e && T.dm.updateSetting(!0);
        }, [l, t]),
        m)
    )
        return null;
    let h = u !== C.u9.SETTINGS && u !== C.u9.SCREEN_TIME_CONTROLS ? u : C.u9.ACTIVITY,
        N = nE[h];
    return (0, n.jsx)(v.f5, {
        value: e,
        children: (0, n.jsxs)("main", {
            className: a()(nv.kL, nv.ei),
            "aria-label": et.intl.string(ee.default.RZqaJn),
            children: [
                (0, n.jsx)(A.HI, { location: et.intl.string(ee.default.RZqaJn) }),
                (0, n.jsx)(nT, {
                    theme: s,
                    section: h,
                    handleItemSelect: (e) => {
                        x(e);
                    },
                }),
                (0, n.jsx)(o.V.Panel, {
                    id: h,
                    "aria-labelledby": r,
                    className: nv.Om,
                    children: (0, n.jsx)(j.Ip, {
                        children: (0, n.jsx)("div", {
                            className: nv.O4,
                            children: c ? (0, n.jsx)(nN, {}) : (0, n.jsx)(N, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
