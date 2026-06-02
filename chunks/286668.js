l.d(t, { A: () => nv, p: () => nf });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(607399),
    d = l(702841),
    c = l(331322),
    u = l(289873),
    o = l(761508),
    x = l(777666);
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
    C = l(695515),
    I = l(438732),
    b = l(174459),
    _ = l(191627),
    L = l(652215);
let R = {
        [_.u9.ACTIVITY]: "family_center_activity_tab",
        [_.u9.REQUESTS]: "family_center_requests_tab",
        [_.u9.SETTINGS]: "family_center_settings_tab",
        [_.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [_.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [_.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    k = () => ({
        selectedTab: (0, d.bG)([C.A], () => C.A.getSelectedTab()),
        handleTabChange: (e) => {
            S.Ay.selectTab(e), b.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: _.qb.TabChange, tab: e });
        },
    });
var D = l(834981),
    U = l(843282),
    M = l(778712),
    P = l(939249),
    O = l(548411),
    G = l(661531),
    F = l(834730),
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
    J = l(923531),
    $ = l(294433),
    ee = l(580630);
function et(e) {
    return (0, d.bG)([C.A], () => C.A.getTotalForDisplayType(e));
}
function el(e) {
    let t = et(e) ?? 0;
    if (e === _.NV.TOTAL_VOICE_MINUTES) return (0, J.hO)(t);
    if (e === _.NV.PURCHASES) {
        let e = C.A.getTotalSpendAmount(),
            t = C.A.getTotalSpendCurrency();
        if (null != e && null != t) return (0, ee.RS)(e, t);
    }
    return t;
}
var en = l(500470),
    ei = l(707554),
    es = l(474063);
let ea = (e) => {
    let { header: t, displayType: l } = e,
        i = et(l),
        s = el(l);
    return (0, n.jsxs)("div", {
        className: es.hJ,
        children: [
            (0, n.jsx)(w.D, {
                variant: "heading-xxl/medium",
                color: i > 0 ? "text-brand" : "text-muted",
                children: (0, n.jsx)(ei.F, { children: s }),
            }),
            (0, n.jsx)(F.E, { variant: "text-sm/semibold", className: es.io, children: t }),
        ],
    });
};
var er = l(781696),
    ed = l(714991),
    ec = l(23339),
    eu = l(97808),
    eo = l(260509),
    ex = l(904425);
let em = (e) => {
    let { guildId: t } = e,
        l = (0, d.bG)([C.A], () => C.A.getGuild(t));
    if (void 0 === l) return null;
    let { name: i } = l,
        s = (0, eo.Iv)(l, 40, !0),
        a = null,
        r = 10;
    return (
        null == l.icon && null != i && (r = ef[(a = (0, ec.oN)(i)).length - 1] ?? ef[ef.length - 1]),
        (0, n.jsx)("div", {
            className: ex.k,
            children: (0, n.jsxs)("div", {
                style: { fontSize: r },
                children: [
                    null != a ? (0, n.jsx)("div", { className: ex.X, "aria-hidden": !0, children: a }) : null,
                    null != s ? (0, n.jsx)(eu.eu, { src: s, size: M._3.SIZE_40, "aria-hidden": !0 }) : null,
                ],
            }),
        })
    );
};
var eh = l(602339),
    ej = l(375708),
    eg = l(751406);
let ef = [18, 18, 16, 16, 14, 12, 10],
    ev = i.memo((e) => {
        let { guildId: t, className: l, customSubtext: i } = e,
            s = (0, d.bG)([C.A], () => C.A.getGuild(t));
        if (void 0 === s) return null;
        let r = s.features.has(L.GuildFeatures.VERIFIED) || s.features.has(L.GuildFeatures.PARTNERED),
            { name: c } = s;
        return (0, n.jsxs)("div", {
            className: a()(eg.kL, l),
            children: [
                (0, n.jsx)(em, { guildId: t }),
                (0, n.jsxs)("div", {
                    className: eg.$z,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eg.wx,
                            children: [
                                r
                                    ? (0, n.jsx)(ed.A, {
                                          guild: s,
                                          tooltipPosition: "bottom",
                                          tooltipColor: er.ST.Colors.PRIMARY,
                                          className: eg.n2,
                                      })
                                    : null,
                                (0, n.jsx)(F.E, { variant: "text-md/semibold", children: c }),
                            ],
                        }),
                        (0, n.jsx)(F.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children:
                                null != i
                                    ? i
                                    : void 0 !== s.approximateMemberCount
                                      ? ej.intl.format(eh.default["5JmNgg"], { members: s.approximateMemberCount })
                                      : null,
                        }),
                    ],
                }),
            ],
        });
    });
ev.displayName = "FamilyCenterActivityGuildRow";
var eA = l(575593),
    eE = l(34188),
    eN = l(104510),
    ep = l(403581),
    eT = l(821701),
    ey = l(253292),
    eS = l(780898),
    eC = l(361628),
    eI = l(665411),
    eb = l(898461),
    e_ = l(203632),
    eL = l(486020),
    eR = l(788868),
    ek = l(893458);
let eD = (e) => {
        let { displayName: t, product: l } = e,
            i = ((e) => {
                if (0 === e.items.length) return null;
                let t = e.items[0];
                return (0, eb.T)(t)
                    ? (0, eL.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 })
                    : null;
            })(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: ek._P });
    },
    eU = (e) => {
        let { displayName: t, nameplateData: l } = e,
            { staticImageUrl: i } = (0, ey.K)(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: ek.M4 });
    },
    eM = (e) => {
        let { displayName: t, product: l } = e,
            i = ((e) => {
                if (0 === e.items.length) return null;
                let t = e.items[0];
                return (0, e_.C3)(t) ? t.thumbnailPreviewSrc : null;
            })(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: ek._P });
    },
    eP = (e) => {
        let { product: t } = e,
            l = (0, eC.A)(t.skuId, "FamilyCenterActivityPurchaseRow");
        return null == l
            ? null
            : (0, n.jsx)("div", {
                  className: ek.pI,
                  children: (0, n.jsx)("div", { className: ek.ZS, children: (0, n.jsx)(eI.A, { frame: l }) }),
              });
    },
    eO = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t) return (0, n.jsx)("div", { className: ek.T8, children: (0, n.jsx)(eE.U, {}) });
        let l = ((e) => {
            if (null == e) return !1;
            let t = eR.hd[e];
            return t?.skuId === eR.pe.GUILD;
        })(t);
        return (0, n.jsx)("div", {
            className: ek.T8,
            children: l
                ? (0, n.jsx)(eN._, { size: "custom", width: 20, height: 20 })
                : (0, n.jsx)(ep.t, { size: "custom", width: 20, height: 20 }),
        });
    },
    eG = (e) => {
        let { displayName: t, product: l } = e;
        if (null == l) return (0, n.jsx)("div", { className: ek.T8, children: (0, n.jsx)(eE.U, {}) });
        switch (l.type) {
            case eA.R.AVATAR_DECORATION:
                return (0, n.jsx)(eD, { displayName: t, product: l });
            case eA.R.NAMEPLATE:
                let i = (0, eS.EQ)(l);
                return null != i ? (0, n.jsx)(eU, { displayName: t, nameplateData: i }) : null;
            case eA.R.PROFILE_EFFECT:
                return (0, n.jsx)(eM, { displayName: t, product: l });
            case eA.R.PROFILE_FRAME:
                return (0, n.jsx)(eP, { product: l });
            default:
                return (0, n.jsx)("div", { className: ek.T8, children: (0, n.jsx)(eE.U, {}) });
        }
    },
    eF = i.memo((e) => {
        let { skuId: t, subscriptionPlanId: l, total: i, currency: s, className: r } = e,
            { product: d } = (0, eT.A)(t),
            {
                displayName: c,
                typeName: u,
                isSubscription: o,
            } = ((e, t) => {
                let l,
                    n,
                    i = null != t;
                if (null != e)
                    (l = e.name),
                        (n = ((e) => {
                            switch (e) {
                                case eA.R.AVATAR_DECORATION:
                                    return ej.intl.string(eh.default.obi47v);
                                case eA.R.PROFILE_EFFECT:
                                    return ej.intl.string(eh.default.RX8BMR);
                                case eA.R.NAMEPLATE:
                                    return ej.intl.string(eh.default.nNGEHk);
                                case eA.R.BUNDLE:
                                    return ej.intl.string(eh.default.VS1fKo);
                                case eA.R.PROFILE_FRAME:
                                    return ej.intl.string(eh.default.JiIY1l);
                                default:
                                    return "";
                            }
                        })(e.type));
                else if (i && null != t) {
                    let e = eR.hd[t];
                    l = e?.name;
                }
                return { displayName: l, typeName: n, isSubscription: i };
            })(d ?? null, l);
        if ((null != t && !o && null == d) || null == c) return null;
        let x = (0, ee.$g)(i, s);
        return (0, n.jsxs)("div", {
            className: a()(ek.kL, r),
            children: [
                o ? (0, n.jsx)(eO, { subscriptionPlanId: l }) : (0, n.jsx)(eG, { displayName: c, product: d ?? null }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(F.E, {
                            variant: "text-md/semibold",
                            children: null != u ? `${c} \u{2022} ${u}` : c,
                        }),
                        (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-subtle", children: x }),
                    ],
                }),
            ],
        });
    });
eF.displayName = "FamilyCenterActivityPurchaseRow";
var ew = l(287809),
    eV = l(427262),
    ez = l(283900),
    eH = l(914518);
let eB = i.memo((e) => {
    let { userId: t, subText: l, className: i } = e,
        s = (0, d.bG)([ew.default], () => ew.default.getUser(t));
    return void 0 === s
        ? null
        : (0, n.jsxs)("div", {
              className: a()(eH.k, i),
              children: [
                  (0, n.jsx)(ez.H, { user: s, avatarSize: M._3.SIZE_40 }),
                  (0, n.jsx)("div", {
                      children: (0, n.jsxs)("div", {
                          className: eH.$,
                          children: [
                              (0, n.jsx)(F.E, {
                                  variant: "text-md/semibold",
                                  color: "interactive-text-active",
                                  children: eV.Ay.getName(s),
                              }),
                              null != l &&
                                  (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                          ],
                      }),
                  }),
              ],
          });
});
eB.displayName = "FamilyCenterActivityUserRow";
var eY = l(475833),
    eq = l(768869),
    eZ = l(818050);
let eK = (e) => {
    let { text: t, className: l } = e;
    return (0, n.jsxs)("div", {
        className: a()(l, eq.I),
        children: [
            (0, n.jsx)("img", { className: eq.S, src: "/assets/f47ef22a8aeff32a.svg", alt: "" }),
            (0, n.jsx)(F.E, { className: eZ.Ot, variant: "text-sm/medium", color: "text-muted", children: t }),
        ],
    });
};
var eX = l(459192),
    eW = l(494596);
let eQ = (e) => {
    let { userId: t, dmsSent: l, callCount: i } = e,
        s = (0, d.bG)([ew.default], () => ew.default.getUser(t));
    return void 0 === s
        ? null
        : (0, n.jsx)(eX.u, {
              title: s.username,
              body: (0, J.fq)(l, i),
              asContainer: !0,
              children: (0, n.jsx)("div", {
                  className: eW.k,
                  children: (0, n.jsx)(ez.H, { user: s, avatarSize: M._3.SIZE_40 }),
              }),
          });
};
var eJ = l(833802);
let e$ = () => {
    let e = (0, d.bG)([C.A], () => C.A.getTopUserActivities()),
        t = (0, d.bG)([C.A], () => C.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, n.jsxs)("div", {
              className: eJ.kL,
              children: [
                  e.length > 0 &&
                      (0, n.jsxs)("div", {
                          className: eJ.A2,
                          children: [
                              (0, n.jsx)(w.D, {
                                  variant: "text-md/medium",
                                  className: eJ.bV,
                                  children: ej.intl.string(eh.default.BxbvS7),
                              }),
                              (0, n.jsx)("div", {
                                  className: eJ.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, n.jsx)(eB, {
                                                userId: e[0].user_id,
                                                subText: (0, J.fq)(e[0].dms_sent, e[0].call_count),
                                                className: eJ.q3,
                                            })
                                          : e.map((e) =>
                                                (0, n.jsx)(
                                                    eQ,
                                                    { userId: e.user_id, dmsSent: e.dms_sent, callCount: e.call_count },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, n.jsxs)("div", {
                          className: eJ.A2,
                          children: [
                              (0, n.jsx)(w.D, {
                                  variant: "text-md/medium",
                                  className: eJ.bV,
                                  children: ej.intl.string(eh.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, n.jsx)(ev, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, J.fq)(t[0].messages_sent, t[0].call_count),
                                        className: eJ._S,
                                    })
                                  : (0, n.jsx)("div", {
                                        className: eJ.Ce,
                                        children: t.map((e) => {
                                            let t = C.A.getGuild(e.guild_id),
                                                l = t?.name ?? "Unknown Server";
                                            return (0, n.jsx)(
                                                eX.u,
                                                {
                                                    title: l,
                                                    body: (0, J.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, n.jsx)(em, { guildId: e?.guild_id }),
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
var e0 = l(990021),
    e3 = l(453287);
function e1() {
    let e = i.useCallback(() => {
        (0, Y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([l.e("3083"), l.e("60106")]).then(l.bind(l, 853809));
            return (t) => (0, n.jsx)(e, { ...t });
        });
    }, []);
    return (0, n.jsx)(P.D, {
        className: e0.YL,
        onClick: e,
        children: (0, n.jsx)(q.m, { size: "custom", color: "currentColor", className: e0.Kk, width: 15, height: 15 }),
    });
}
function e2(e) {
    let { displayType: t } = e,
        l = i.useCallback(() => {
            (0, Z.P0)((0, K.o)(ej.intl.string(eh.default.Wu8BK2), X.Ck.FAILURE));
        }, []),
        s = (0, I.A)(),
        r = (0, d.yK)([C.A], () => C.A.getActionsForDisplayType(t)),
        c = et(t),
        o = el(t),
        { loadMore: x, isMoreLoading: m } = (0, V.A)({ onError: l }),
        h = (0, J.kN)().get(t),
        [j, g] = i.useState(_.PH),
        f = i.useCallback(() => {
            g((e) => e + _.PH), x(t);
        }, [t, x]);
    B()(h, `No text for action type: ${t}`);
    let v = t === _.NV.PURCHASES && null != o ? h.sectionHeader(o) : h.sectionHeader(c),
        A = i.useCallback(
            (e) => {
                let { row: t } = e,
                    l = r[t];
                if ((0, J.aq)(l)) {
                    let e = Q.default.extractTimestamp(l.event_id),
                        t = (0, J.i6)(e, h.timestampFormatter);
                    return (0, n.jsx)(eB, { userId: l.entity_id, subText: t }, l.event_id);
                }
                if ((0, J.Is)(l)) return (0, n.jsx)(ev, { guildId: l.entity_id }, l.event_id);
                if ((0, J.u7)(l)) {
                    let e = C.A.getPurchaseInfo(l.entity_id);
                    return null == e
                        ? null
                        : (0, n.jsx)(
                              eF,
                              {
                                  skuId: e.sku_id,
                                  subscriptionPlanId: e.subscription_plan_id,
                                  total: e.total,
                                  currency: e.currency,
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
                        (0, n.jsx)(F.E, { className: e0.bV, variant: "text-md/semibold", children: v }),
                        void 0 !== h.sectionDescription
                            ? (0, n.jsx)(F.E, {
                                  className: e0.yV,
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
        className: e0.A2,
        children: [
            E(),
            (0, n.jsx)("div", {
                className: e0.o1,
                style: { maxHeight: 65 * N.length },
                children: N.map((e, t) => A({ row: t })),
            }),
            N.length < c
                ? (0, n.jsx)(P.D, {
                      className: a()(e0.FQ, { [e0.r9]: m }),
                      onClick: f,
                      role: "button",
                      "aria-disabled": m,
                      children: m
                          ? (0, n.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS, className: e0.u1 })
                          : (0, n.jsx)(F.E, {
                                className: e0.UX,
                                variant: "text-sm/bold",
                                children: ej.intl.format(eh.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - N.length, _.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let e9 = () => {
        let e = (0, I.A)(),
            t = (0, D.vx)(),
            l = (0, $.y)(
                ej.intl.formatToPlainString(eh.default["7hqFl9"], { activeLinks: t.length }),
                ej.intl.string(eh.default["Q/D/0Q"]),
            ),
            i = (0, J.cV)(!!e),
            s = (0, D.v4)(i);
        return e && t.length > 1
            ? (0, n.jsx)(F.E, { variant: "eyebrow", children: s })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      e ? null : (0, n.jsx)(W.b, { size: "xs", color: "currentColor", className: e0.Kk }),
                      (0, n.jsx)(F.E, { variant: "eyebrow", children: l }),
                  ],
              });
    },
    e8 = i.memo((e) => {
        let { userId: t, subText: l, avatarSize: i = M._3.SIZE_40, hideUserTag: s = !1 } = e,
            a = (0, z.F7)(t);
        return void 0 === a
            ? null
            : (0, n.jsxs)("div", {
                  className: e0.iO,
                  children: [
                      (0, n.jsx)(ez.H, { user: a, avatarSize: i }),
                      (0, n.jsxs)("div", {
                          className: e0.TK,
                          children: [
                              (0, n.jsx)(eY.A, { user: a, hideUserTag: s }),
                              void 0 !== l
                                  ? (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-muted", children: l })
                                  : null,
                          ],
                      }),
                  ],
              });
    });
e8.displayName = "FamilyCenterActivityCardAccountRow";
let e5 = () => {
        let e = (0, D.GR)(),
            t = (0, d.bG)([C.A], () => C.A.getSelectedTeenId()),
            { selectTeenUser: l } = (0, V.A)({}),
            s = e.map((e) => ({ label: e.id, value: e.id })),
            a = i.useCallback((e) => (0, n.jsx)(e8, { userId: e.value, avatarSize: M._3.SIZE_24 }), []);
        return (0, n.jsx)(U.Pw, {
            className: e0.Lt,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                l(e), b.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: _.qb.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: s,
            "data-migration-pending": !0,
        });
    },
    e7 = () => {
        let e = (0, en.k)(),
            t = (0, I.A)(),
            l = (0, D.vx)(),
            i = (0, J.cV)(!!t),
            s = (0, D.v4)(i);
        return null === e ? null : t && 1 !== l.length ? (0, n.jsx)(e5, {}) : (0, n.jsx)(e8, { userId: e, subText: s });
    },
    e4 = () => {
        let e = (0, J.Mo)(),
            t = (0, d.bG)([C.A], () => Object.values(_.NV).some((e) => C.A.getTotalForDisplayType(e) > 0)),
            l = (0, J.jp)(),
            i = (0, D.v4)(l);
        return (0, n.jsxs)("div", {
            className: e0.kL,
            children: [
                (0, n.jsxs)("div", { className: e0.vF, children: [(0, n.jsx)(e9, {}), (0, n.jsx)(e1, {})] }),
                (0, n.jsxs)("div", {
                    className: e3.a,
                    children: [
                        (0, n.jsx)("div", { className: e0.wx, children: (0, n.jsx)(e7, {}) }),
                        (0, n.jsxs)(c.B, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, n.jsx)("div", {
                                    className: e0.O2,
                                    children: e.map((e) => {
                                        let [t, l] = e;
                                        return (0, n.jsx)(
                                            ea,
                                            { displayType: t, header: l.tooltipHeader() },
                                            `counter-${t}`,
                                        );
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: e0.RJ,
                                    children: [
                                        (0, n.jsx)(e$, {}),
                                        t
                                            ? e.map((e) => {
                                                  let [t] = e;
                                                  return (0, n.jsx)(e2, { displayType: t }, `${t}-list`);
                                              })
                                            : (0, n.jsx)(eK, { className: e0.RL, text: i ?? "" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
var e6 = l(336541);
let te = () => {
        let e = (0, D.vx)(),
            t = (0, z.y3)(),
            { selectTeenUser: l } = (0, V.A)({}),
            s = e.map((e) => ({ label: e, value: e })),
            r = i.useCallback(
                (e) => (0, n.jsx)(e8, { userId: e.value, avatarSize: M._3.SIZE_24, hideUserTag: !0 }),
                [],
            );
        return 0 === e.length
            ? null
            : (0, n.jsx)("div", {
                  className: a()(e6.Gq, { [e6.wS]: e.length > 1 }),
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
                          : (0, n.jsx)(e8, { userId: e[0], avatarSize: M._3.SIZE_24, hideUserTag: !0 }),
              });
    },
    tt = () => {
        let { selectedTab: e, handleTabChange: t } = k(),
            l = i.useCallback(() => {
                t(_.u9.ACTIVITY);
            }, [t]);
        return (0, n.jsxs)(c.B, {
            gap: 32,
            children: [
                (0, n.jsxs)(P.D, {
                    className: e6.Gv,
                    onClick: l,
                    "aria-label": ej.intl.string(ej.t.ybUZql),
                    children: [
                        (0, n.jsx)(O.Z, { size: "sm", color: G.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        (0, n.jsx)(F.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: ej.intl.string(ej.t["13/7kX"]),
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
                            className: e6.gn,
                            children: [
                                (0, n.jsx)(F.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: ej.intl.string(eh.default.RZqaJn),
                                }),
                                (0, n.jsx)(w.D, {
                                    variant: "heading-xl/semibold",
                                    color: "text-strong",
                                    children: ej.intl.string(
                                        e === _.u9.CONTENT_AND_SOCIAL ? ej.t["+o1pDZ"] : ej.t.OAuOHD,
                                    ),
                                }),
                            ],
                        }),
                        (0, n.jsx)(te, {}),
                    ],
                }),
            ],
        });
    };
var tl = l(404778),
    tn = l(628630);
let ti = function (e) {
    let { children: t, title: l, description: i } = e;
    return (0, n.jsxs)("div", {
        className: tn.L1,
        children: [
            (null != l || null != i) &&
                (0, n.jsxs)("div", {
                    className: tn.Km,
                    children: [
                        null != l &&
                            (0, n.jsx)(w.D, { variant: "heading-lg/semibold", color: "text-strong", children: l }),
                        null != i && (0, n.jsx)(F.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                    ],
                }),
            (0, n.jsx)("div", { className: tn.Yq, children: t }),
            (0, n.jsx)(tl.c, { className: tn.yj }),
        ],
    });
};
var ts = l(884307);
function ta(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: ts.y, children: t });
}
var tr = l(389462),
    td = l(464946),
    tc = l(750994),
    tu = l(171316);
function to() {
    let e = (0, tu.KK)(),
        t = (0, en.k)() ?? void 0,
        l = (0, tu.NZ)();
    return (0, n.jsx)(td.h, {
        children: (0, n.jsx)(tc.Ay, {
            title: l ? ej.intl.string(ej.t.PMsfcH) : ej.intl.string(ej.t.RAQUSN),
            note: l ? ej.intl.string(ej.t.XXGmuB) : ej.intl.string(ej.t.wbYDfT),
            value: !e,
            onChange: (e) => {
                tr.yr.updateControlledSetting(t, !e);
            },
        }),
    });
}
var tx = l(139716),
    tm = l(847599),
    th = l(953298),
    tj = l(975571);
function tg() {
    let e = (0, en.k)() ?? void 0,
        t = (0, tu.KK)(),
        l = tr.ES.useControlledSetting(e);
    return (0, n.jsx)(td.h, {
        children: (0, n.jsx)(tc.Ay, {
            title: ej.intl.string(ej.t["3o2ojh"]),
            value: !t && !l,
            onChange: (t) => {
                !t && (0, th.w)()
                    ? tx.A.showAgeVerificationGetStartedModal({ entryPoint: tm.q1.MESSAGE_REQUESTS_SETTINGS })
                    : tr.ES.updateControlledSetting(e, !t);
            },
            disabled: t,
            note: ej.intl.format(ej.t.IoztJ0, { helpdeskArticle: tj.A.getArticleURL(L.MVz.MESSAGE_REQUESTS) }),
        }),
    });
}
var tf = l(665260),
    tv = l(115063);
function tA() {
    let e = (0, en.k)() ?? void 0,
        t = tr.up.useControlledSetting(e),
        l = i.useMemo(() => (0, tv.Lx)(t), [t]);
    return null == e
        ? null
        : (0, n.jsxs)(ta, {
              children: [
                  (0, n.jsx)(td.h, {
                      children: (0, n.jsx)(tc.Ay, {
                          title: ej.intl.string(ej.t["7x9dyE"]),
                          value: l.all,
                          onChange: (t) => tr.up.updateControlledSetting(e, t ? L.yKI : L.yKI & ~L.dzt.NO_RELATION),
                      }),
                  }),
                  (0, n.jsx)(td.h, {
                      children: (0, n.jsx)(tc.Ay, {
                          title: ej.intl.string(ej.t.NfeuZ3),
                          value: l.all || l.mutualFriends,
                          onChange: (l) =>
                              tr.up.updateControlledSetting(
                                  e,
                                  l
                                      ? tf.UI(t, L.dzt.MUTUAL_FRIENDS)
                                      : tf.iE(t, L.dzt.MUTUAL_FRIENDS, L.dzt.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, n.jsx)(td.h, {
                      children: (0, n.jsx)(tc.Ay, {
                          title: ej.intl.string(ej.t.qsMfsH),
                          value: l.all || l.mutualGuilds,
                          onChange: (l) =>
                              tr.up.updateControlledSetting(
                                  e,
                                  l ? tf.UI(t, L.dzt.MUTUAL_GUILDS) : tf.iE(t, L.dzt.MUTUAL_GUILDS, L.dzt.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
var tE = l(444802),
    tN = l(875162),
    tp = l(873298),
    tT = l(389737),
    ty = l(566769),
    tS = l(704724);
function tC() {
    let e = (0, en.k)(),
        t = (0, tu.xs)(),
        l = [
            { value: tp.TO.BLUR, label: ej.intl.string(ej.t.S49Uad) },
            { value: tp.TO.BLOCK, label: ej.intl.string(ej.t["D/157Y"]) },
        ];
    if (null == t || null == e) return null;
    let i = (t) => {
            (0, tS.Jz)(e, t);
        },
        { explicitContentFriendDm: s, explicitContentNonFriendDm: a } = t;
    return (0, n.jsxs)(tT.E, {
        description: ej.intl.string(ej.t.Wnojv1),
        children: [
            (0, n.jsx)(ty.A, {
                title: ej.intl.string(ej.t["+uI23H"]),
                value: s,
                onChange: (e) => i({ explicitContentFriendDm: e }),
                options: l,
            }),
            (0, n.jsx)(ty.A, {
                title: ej.intl.string(ej.t["Yh+HX1"]),
                value: a,
                onChange: (e) => i({ explicitContentNonFriendDm: e }),
                options: l,
            }),
        ],
    });
}
function tI() {
    let e = (0, en.k)(),
        t = (0, tu.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: l, goreContentNonFriendDm: i } = t,
        s = (t) => {
            (0, tS.qY)(e, t);
        },
        a = [
            { value: tp.TO.BLUR, label: ej.intl.string(ej.t.S49Uad) },
            { value: tp.TO.BLOCK, label: ej.intl.string(ej.t["D/157Y"]) },
        ];
    return (0, n.jsxs)(tT.E, {
        description: ej.intl.string(ej.t.XgH9eh),
        children: [
            (0, n.jsx)(ty.A, {
                title: ej.intl.string(ej.t["+uI23H"]),
                value: l,
                onChange: (e) => s({ goreContentFriendDm: e }),
                options: a,
            }),
            (0, n.jsx)(ty.A, {
                title: ej.intl.string(ej.t["Yh+HX1"]),
                value: i,
                onChange: (e) => s({ goreContentNonFriendDm: e }),
                options: a,
            }),
        ],
    });
}
var tb = l(25191);
function t_() {
    let e = (0, tE.WX)(),
        t = [
            {
                id: "explicit-media-redaction",
                title: ej.intl.string(ej.t.GYpoAq),
                component: () => (0, n.jsx)(tC, {}),
                orientation: "vertical",
            },
            {
                id: "gore-media-redaction",
                title: ej.intl.string(ej.t["16/3Bi"]),
                component: () => (0, n.jsx)(tI, {}),
                orientation: "vertical",
            },
        ];
    return (0, n.jsxs)(td.h, {
        children: [
            (0, n.jsx)(td._, {
                header: ej.intl.string(ej.t["Hj/But"]),
                description: ej.intl.format(ej.t["H/Icz+"], { learnMoreLink: tj.A.getArticleURL(e) }),
            }),
            (0, n.jsx)(tN.A, { tabs: t, orientation: "vertical", tabsClassName: tb.v }),
        ],
    });
}
let tL = () =>
    (0, n.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, n.jsx)(tt, {}),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(ti, { title: ej.intl.string(ej.t.xVRG4P), children: (0, n.jsx)(t_, {}) }),
                    (0, n.jsx)(ti, {
                        title: ej.intl.string(ej.t["y62Z/d"]),
                        children: (0, n.jsxs)(ta, { children: [(0, n.jsx)(to, {}), (0, n.jsx)(tg, {})] }),
                    }),
                    (0, n.jsx)(ti, { title: ej.intl.string(ej.t["1Qn8iV"]), children: (0, n.jsx)(tA, {}) }),
                ],
            }),
        ],
    });
function tR() {
    let { hasConsented: e, updateConsent: t } = (0, tu.lH)(L.YAq.PERSONALIZATION);
    return (0, n.jsx)(td.h, {
        children: (0, n.jsx)(tc.Ay, {
            title: ej.intl.string(eh.default.XMPqUx),
            note: ej.intl.format(eh.default.Imp6Ns, {
                helpdeskArticle: tj.A.getArticleURL(L.MVz.DATA_USED_FOR_RECOMMENDED),
            }),
            value: e,
            onChange: t,
        }),
    });
}
function tk() {
    let e = (0, en.k)() ?? void 0,
        t = tr.yH.useControlledSetting(e),
        l = tr.kf.useControlledSetting(e);
    return null == e
        ? null
        : (0, n.jsx)(td.h, {
              children: (0, n.jsx)(tc.Ay, {
                  title: ej.intl.string(ej.t.CyLYKZ),
                  note: ej.intl.format(eh.default["6mK5Pz"], {
                      helpdeskArticle: tj.A.getArticleURL(L.MVz.QUESTS_PRIVACY_CONTROLS),
                  }),
                  value: !t,
                  onChange: (t) => tr.yH.updateControlledSetting(e, !t),
                  disabled: l,
              }),
          });
}
function tD() {
    let e = (0, en.k)() ?? void 0,
        t = tr.kf.useControlledSetting(e);
    return (0, n.jsx)(td.h, {
        children: (0, n.jsx)(tc.Ay, {
            title: ej.intl.string(eh.default.ZhaNu8),
            note: ej.intl.format(eh.default.cnCK6b, {
                helpdeskArticle: tj.A.getArticleURL(L.MVz.QUESTS_PRIVACY_CONTROLS),
            }),
            value: !t,
            onChange: (t) => tr.kf.updateControlledSetting(e, !t),
        }),
    });
}
function tU() {
    let { hasConsented: e, updateConsent: t } = (0, tu.lH)(L.YAq.USAGE_STATISTICS);
    return (0, n.jsx)(td.h, {
        children: (0, n.jsx)(tc.Ay, {
            title: ej.intl.string(eh.default.HjstRR),
            note: ej.intl.format(eh.default.Z5yJZy, {
                helpdeskArticle: tj.A.getArticleURL(L.MVz.DATA_PRIVACY_CONTROLS),
            }),
            value: e,
            onChange: t,
        }),
    });
}
let tM = () =>
    (0, n.jsxs)(c.B, {
        gap: 32,
        children: [
            (0, n.jsx)(tt, {}),
            (0, n.jsx)("div", {
                children: (0, n.jsxs)(ti, {
                    title: ej.intl.string(ej.t.SRZyHg),
                    children: [(0, n.jsx)(tU, {}), (0, n.jsx)(tD, {}), (0, n.jsx)(tk, {}), (0, n.jsx)(tR, {})],
                }),
            }),
        ],
    });
var tP = l(582394),
    tO = l(141006),
    tG = l(821609);
function tF() {
    let e = ej.intl.string(eh.default["8SLtqb"]);
    return (0, n.jsx)(tG.$, {
        icon: tO.y,
        variant: "primary",
        text: e,
        onClick: () => {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    l.e("847"),
                    l.e("30244"),
                    l.e("95429"),
                    l.e("88905"),
                    l.e("48370"),
                    l.e("72875"),
                ]).then(l.bind(l, 320742));
                return (t) => (0, n.jsx)(e, { ...t });
            }),
                b.default.track(L.HAw.FAMILY_CENTER_ACTION, { action: _.qb.ShowQRCodeModal });
        },
    });
}
var tw = l(555317);
let tV = () => {
        let e = (0, D.Li)(),
            t = (0, I.A)(),
            { handleTabChange: l } = k();
        return (0, D.xr)() || (t && e)
            ? null
            : (0, n.jsx)("div", {
                  className: tw.x6,
                  children: t
                      ? (0, n.jsx)(tG.$, {
                            variant: "primary",
                            text: ej.intl.string(ej.t.LhlgY9),
                            onClick: () => l(_.u9.REQUESTS),
                        })
                      : (0, n.jsx)(tF, {}),
              });
    },
    tz = () => {
        let e = (0, I.A)(),
            t = (0, $.y)(ej.intl.string(eh.default["T7GyW+"]), ej.intl.string(eh.default.goKE2b)),
            l = (0, $.y)(
                ej.intl.format(eh.default.MXjDSv, {
                    articleLink: "https://support.discord.com/hc/articles/14155060633623",
                }),
                ej.intl.format(eh.default.EMCf6j, {
                    articleLink: "https://support.discord.com/hc/articles/14155043715735",
                }),
            );
        return (0, n.jsxs)("div", {
            className: a()(tw.kL, e3.a),
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)("div", {
                            children: (0, n.jsxs)("div", {
                                className: tw.TK,
                                children: [
                                    (0, n.jsx)(w.D, {
                                        variant: "heading-xl/medium",
                                        children: (0, n.jsx)(ei.F, { children: t }),
                                    }),
                                    (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                                ],
                            }),
                        }),
                        (0, n.jsx)(tV, {}),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: tw.F0,
                    children: (0, n.jsx)("img", {
                        src: e ? "/assets/bc9100f5e54f39a8.svg" : "/assets/12ee06c12c73e78e.svg",
                        alt: ej.intl.string(eh.default.ffg6xd),
                    }),
                }),
            ],
        });
    };
var tH = l(299628),
    tB = l(119e3);
let tY = () => {
    let e = ej.intl.string(eh.default.tr8Gni),
        t = (0, $.y)(ej.intl.string(eh.default["3xKGSE"]), ej.intl.string(eh.default.XbgrG7));
    return (0, n.jsxs)(c.B, {
        className: a()(tB.k, e3.a),
        gap: 24,
        padding: 24,
        children: [
            (0, n.jsxs)(c.B, {
                gap: 8,
                children: [
                    (0, n.jsx)(w.D, { variant: "heading-md/bold", children: (0, n.jsx)(ei.F, { children: e }) }),
                    (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-muted", children: t }),
                ],
            }),
            (0, n.jsx)(tH.A, {}),
        ],
    });
};
var tq = l(445220);
let tZ = (e) => {
    let { icon: t, iconClassName: l, header: i, description: s } = e;
    return (0, n.jsxs)("div", {
        className: a()(tq.kL, e3.a),
        children: [
            (0, n.jsx)("div", {
                className: tq.n1,
                children: (0, n.jsx)(t, {
                    className: a()(tq.Kk, l),
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
                        className: tq.wx,
                        children: (0, n.jsx)(ei.F, { children: i }),
                    }),
                    (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
                ],
            }),
        ],
    });
};
var tK = l(847374),
    tX = l(349288),
    tW = l(308528),
    tQ = l(922529),
    tJ = l(780964),
    t$ = l(830543),
    t0 = l(766075),
    t3 = l(219893),
    t1 = l(936926),
    t2 = l(465323),
    t9 = l(17928),
    t8 = l(617617),
    t5 = l(583538);
function t7(e) {
    let t = (0, t9.bG)([C.A], () => C.A.getMonthlyPurchases());
    return (function (e, t) {
        if (null == e) return { kind: "off" };
        if (0 === e.amount) return { kind: "blocked" };
        let l = e.currency,
            n = (0, ee.CE)((0, ee.$g)(e.amount, l), eR.WT.MONTH, 1);
        if (t >= e.amount) return { kind: "spent", monthlyText: n };
        let i = t2.yR[e.currency] ?? 2,
            s = e.amount - t;
        return s <= 10 * 10 ** i
            ? {
                  kind: "close-to-limit",
                  monthlyText: n,
                  remainingText: ej.intl.formatToPlainString(eh.default["+Q+bU1"], { amount: (0, ee.$g)(s, l) }),
              }
            : { kind: "on", monthlyText: n };
    })(e, t?.total_amount ?? 0);
}
var t4 = l(534654),
    t6 = l(980707),
    le = l(477782),
    lt = l(943255),
    ll = l(922016),
    ln = l(408278),
    li = l(365199),
    ls = l(243721),
    la = l(95396),
    lr = l(624411);
function ld(e) {
    let { closePopout: t, onEdit: l, onDelete: i } = e;
    return (0, n.jsxs)(t6.W, {
        "data-menu-migrated": !0,
        "aria-label": ej.intl.string(ej.t["UKOtz+"]),
        navId: "schedule-actions",
        onClose: t,
        onSelect: t,
        children: [
            (0, n.jsx)(le.Dr, { id: "edit", label: ej.intl.string(eh.default.b3DPqg), action: l }),
            (0, n.jsx)(le.Dr, { id: "delete", label: ej.intl.string(eh.default.d8pizZ), color: "danger", action: i }),
        ],
    });
}
function lc(e) {
    let { rule: t, teenId: s, readOnly: a = !1 } = e,
        r = i.useRef(null),
        d = t?.enabled ?? !0,
        u = (0, t3.li)(t),
        o = (0, t3.n1)(t.days),
        x = () => {
            (0, Y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("76035"), l.e("39231")]).then(l.bind(l, 154434));
                return (l) => (0, n.jsx)(e, { ...l, teenId: s, rule: t });
            });
        },
        m = () => {
            (0, la.CS)(s, t.ruleId);
        };
    return (0, n.jsxs)(c.B, {
        direction: "horizontal",
        align: "center",
        gap: 12,
        children: [
            (0, n.jsx)("div", { className: lr.X, children: (0, n.jsx)(lt.Z, { size: "md" }) }),
            (0, n.jsxs)(c.B, {
                direction: "vertical",
                style: { flex: 1, minWidth: 0 },
                gap: 4,
                children: [
                    (0, n.jsx)(F.E, { variant: "text-md/medium", children: u }),
                    (0, n.jsx)(F.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
                ],
            }),
            (0, n.jsxs)(c.B, {
                direction: "horizontal",
                align: "center",
                gap: 8,
                fullWidth: !1,
                children: [
                    !a &&
                        (0, n.jsx)(ll.Y, {
                            targetElementRef: r,
                            renderPopout: (e) => (0, n.jsx)(ld, { ...e, onEdit: x, onDelete: m }),
                            position: "bottom",
                            align: "right",
                            animation: ll.Y.Animation.NONE,
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, n.jsx)(ln.K, {
                                    buttonRef: r,
                                    size: "sm",
                                    icon: li.j,
                                    variant: "icon-only",
                                    "aria-label": ej.intl.string(ej.t["UKOtz+"]),
                                    "aria-haspopup": "menu",
                                    onClick: (e) => {
                                        e.stopPropagation(), t(e);
                                    },
                                });
                            },
                        }),
                    (0, n.jsx)("div", {
                        className: lr.m,
                        children: (0, n.jsx)(ls.d, {
                            checked: d,
                            label: ej.intl.string(eh.default["30Owsd"]),
                            hideLabel: !0,
                            onChange: () => {
                                (0, la.Um)(s, t.ruleId, { enabled: !d });
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
var lu = l(587349);
let lo = (e) => {
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
                    (0, n.jsx)(F.E, { variant: "text-md/medium", children: t }),
                    null != l && (0, n.jsx)(F.E, { variant: "text-sm/normal", color: "text-muted", children: l }),
                ],
            }),
            (0, n.jsx)("div", {
                className: a ? lu.nh : void 0,
                children: (0, n.jsx)(tG.$, { text: i, onClick: s, variant: "secondary", size: "sm", disabled: a }),
            }),
        ],
    });
};
function lx(e, t, i) {
    return (0, n.jsx)(lo, {
        title: ej.intl.string(eh.default.gMeekL),
        subtitle: (function (e) {
            switch (e.kind) {
                case "off":
                    return ej.intl.string(eh.default.YEnpaj);
                case "on":
                    return e.monthlyText;
                case "close-to-limit":
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            e.monthlyText,
                            " \xb7 ",
                            (0, n.jsx)(F.E, {
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
                            (0, n.jsx)(F.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                tag: "span",
                                children: ej.intl.string(eh.default.Q2msVQ),
                            }),
                        ],
                    });
                case "blocked":
                    return (0, n.jsx)(F.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        tag: "span",
                        children: ej.intl.string(eh.default.FUu2b0),
                    });
            }
        })(t),
        buttonText: ej.intl.string(ej.t.bt75uw),
        onButtonPress: () => {
            (0, Y.openModalLazy)(async () => {
                let { default: t } = await Promise.all([l.e("47872"), l.e("87096")]).then(l.bind(l, 638155));
                return (l) => (0, n.jsx)(t, { ...l, teenId: e });
            });
        },
        readOnly: i,
    });
}
let lm = (e) => {
        let { teenId: t } = e;
        return lx(
            t,
            t7(
                (0, t9.bG)(
                    [t8.A],
                    () => {
                        let e = t8.A.settings.safetySettings?.spendingLimitSettings?.oneTimePurchaseLimit;
                        return null == e ? null : { amount: Number(e.amount), currency: e.currency };
                    },
                    void 0,
                    t5.Ky,
                ),
            ),
            !0,
        );
    },
    lh = (e) => {
        let { teenId: t } = e,
            l = tr.fD.useControlledSetting(t);
        return lx(t, t7(l));
    },
    lj = (e) => {
        let { teenId: t, readOnly: s = !1 } = e,
            a = (0, z.y3)(),
            r = a?.restrictedSchedule?.rules ?? [],
            d = (0, t3.I2)(r),
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
            ? (0, n.jsx)(lo, {
                  title: ej.intl.string(eh.default["1Op+NP"]),
                  buttonText: ej.intl.string(eh.default.OwFF4o),
                  onButtonPress: x,
                  readOnly: s,
              })
            : (0, n.jsxs)(c.B, {
                  direction: "vertical",
                  gap: 0,
                  children: [
                      (0, n.jsxs)(P.D, {
                          className: lu.dV,
                          onClick: () => o((e) => !e),
                          children: [
                              (0, n.jsx)("div", {
                                  className: lu.WB,
                                  children: (0, n.jsxs)(c.B, {
                                      direction: "vertical",
                                      gap: 4,
                                      children: [
                                          (0, n.jsx)(F.E, {
                                              variant: "text-md/medium",
                                              children: ej.intl.string(eh.default["1Op+NP"]),
                                          }),
                                          (0, n.jsx)(F.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: ej.intl.formatToPlainString(eh.default.XfwcpX, {
                                                  count: d.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: lu.pt,
                                  children: (0, n.jsx)(tK.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: `${lu.ai} ${u ? lu.hg : ""}`,
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
                                          (0, n.jsx)(lc, { rule: e, teenId: t, readOnly: s }, e.ruleId),
                                      ),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: s ? lu.nh : void 0,
                                      children: (0, n.jsx)(tG.$, {
                                          text: ej.intl.string(eh.default.OwFF4o),
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
    lg = () => {
        let e = (0, D.vx)(),
            t = (0, z.y3)(),
            l = (0, t1.Vh)({ location: "TimeControlsRow" }),
            i = () => {
                (0, t0.openUserSettings)(tJ.X.CONTENT_AND_SOCIAL_PANEL);
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
                                (0, n.jsx)(F.E, {
                                    variant: "text-sm/semibold",
                                    children: ej.intl.string(eh.default.ahKIJO),
                                }),
                                (0, n.jsx)(F.E, {
                                    variant: "text-md/medium",
                                    color: "text-muted",
                                    children: ej.intl.format(eh.default.X9rW0j, {
                                        openSettingsHook: (e, t) =>
                                            (0, n.jsx)(tX.Anchor, { onClick: i, children: e }, t),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(tG.$, {
                            text: ej.intl.formatToPlainString(eh.default.ggcjPR, { count: e.length }),
                            onClick: () => {
                                (0, t$.default)(), tW.A.openPrivateChannel({ recipientIds: e });
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
                            (0, n.jsx)(tQ.A, { className: lu.yF }),
                            (0, n.jsx)(lm, { teenId: t.id }),
                            (0, n.jsx)(tQ.A, { className: lu.yF }),
                            (0, n.jsx)(lj, { teenId: t.id, readOnly: !0 }),
                        ],
                    }),
            ],
        });
    },
    lf = () => {
        let e = (0, z.y3)(),
            t = (0, z.tl)(),
            { handleTabChange: l } = k(),
            s = (0, t1.Vh)({ location: "TimeControlsRow" });
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
                        (0, n.jsx)(F.E, { variant: "text-sm/semibold", children: ej.intl.string(eh.default.ahKIJO) }),
                        (0, n.jsx)(F.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: ej.intl.string(eh.default.Sv236e),
                        }),
                    ],
                }),
                (0, n.jsx)(lo, {
                    title: ej.intl.string(ej.t["+o1pDZ"]),
                    buttonText: ej.intl.string(ej.t.bt75uw),
                    onButtonPress: () => a(_.u9.CONTENT_AND_SOCIAL),
                }),
                (0, n.jsx)(tQ.A, { className: lu.yF }),
                (0, n.jsx)(lo, {
                    title: ej.intl.string(ej.t.OAuOHD),
                    buttonText: ej.intl.string(ej.t.bt75uw),
                    onButtonPress: () => a(_.u9.DATA_AND_PRIVACY),
                }),
                s &&
                    e?.id != null &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(tQ.A, { className: lu.yF }),
                            (0, n.jsx)(lh, { teenId: e.id }),
                            (0, n.jsx)(tQ.A, { className: lu.yF }),
                            (0, n.jsx)(lj, { teenId: e.id }),
                        ],
                    }),
            ],
        });
    },
    lv = () => {
        let e = (0, t4.A)();
        return 0 === (0, D.vx)().length
            ? null
            : (0, n.jsx)("div", { className: lu.kL, children: e ? (0, n.jsx)(lg, {}) : (0, n.jsx)(lf, {}) });
    };
var lA = l(175524);
let lE = () => {
    let e = (0, D.vx)().length > 0,
        t = (0, d.bG)([ew.default], () => ew.default.getCurrentUser()),
        l = (0, $.y)(ej.intl.string(eh.default["5RZ8Tq"]), ej.intl.string(eh.default.bmhCnL)),
        i = (0, $.y)(ej.intl.string(eh.default.XKnFFq), ej.intl.string(eh.default["68zfxD"])),
        s = (0, $.y)(ej.intl.string(eh.default["Rm/6a0"]), ej.intl.string(eh.default["1xPTwE"]));
    return void 0 === t
        ? null
        : (0, n.jsxs)("div", {
              className: lA.kL,
              children: [
                  e
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", { className: lA.vK, children: (0, n.jsx)(tz, {}) }),
                                (0, n.jsxs)("div", {
                                    className: lA.yk,
                                    children: [
                                        (0, n.jsx)(tZ, {
                                            icon: tP.M,
                                            header: ej.intl.string(eh.default["001l3m"]),
                                            description: l,
                                        }),
                                        (0, n.jsx)(tZ, {
                                            icon: W.b,
                                            header: ej.intl.string(eh.default.yipAeP),
                                            description: i,
                                        }),
                                        (0, n.jsx)(tZ, {
                                            icon: tO.y,
                                            header: ej.intl.string(eh.default.hhOuMe),
                                            description: s,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                  e ? (0, n.jsx)(e4, {}) : (0, n.jsx)(tY, {}),
                  (0, n.jsx)(lv, {}),
              ],
          });
};
l(801541);
var lN = l(889137),
    lp = l(837381),
    lT = l(475825),
    ly = l(260762),
    lS = l(485947),
    lC = l(426190),
    lI = l(789645),
    lb = l(990078),
    l_ = l(665566);
function lL(e) {
    let { icon: t, tooltip: l, onClick: i, className: s } = e;
    return (0, n.jsx)(lb.m, {
        text: l,
        children: (0, n.jsx)(P.D, {
            "aria-label": l,
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), i(e);
            },
            className: a()(l_.hP, s),
            children: (0, n.jsx)(t, { className: l_.Kk, color: "currentColor" }),
        }),
    });
}
var lR = l(854627),
    lk = l(19575),
    lD = l(486241);
let lU = lk.Ay.getEnableHardwareAcceleration() ? eu.Js : eu.eu;
function lM(e) {
    let { otherUser: t, status: l } = e,
        i = (0, D.XC)(t.id, l),
        {
            avatarSrc: s,
            avatarDecorationSrc: a,
            eventHandlers: r,
        } = (0, lR.A)({ userId: t.id, size: M._3.SIZE_40, animateOnHover: !0 });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ...r,
                children: (0, n.jsx)(lU, {
                    className: lD.my,
                    src: s,
                    avatarDecoration: a,
                    size: M._3.SIZE_40,
                    "aria-label": t.username,
                }),
            }),
            (0, n.jsxs)("div", {
                className: lD.yt,
                children: [
                    (0, n.jsx)("div", { className: lD.Vx, children: (0, n.jsx)(eY.A, { user: t }) }),
                    (0, n.jsx)(F.E, { color: "text-muted", variant: "text-xs/normal", children: i }),
                ],
            }),
        ],
    });
}
var lP = l(528218);
function lO(e) {
    let { user: t } = e,
        s = (0, d.bG)([ew.default], () => ew.default.getCurrentUser()),
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
        className: lP.kL,
        children: [
            (0, n.jsx)("div", { className: lP.zH, children: (0, n.jsx)(lM, { otherUser: t, status: _.Ef.ACTIVE }) }),
            (0, n.jsx)("div", {
                className: lP.o1,
                children: (0, n.jsx)(lL, { icon: lI.P, tooltip: ej.intl.string(eh.default.l20ZZp), onClick: a }),
            }),
        ],
    });
}
var lG = l(933832);
function lF(e) {
    let { user: t } = e,
        s = (0, I.A)(),
        a = (0, D.xr)(),
        r = (0, d.bG)([ew.default], () => ew.default.getCurrentUser()),
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
        className: lP.kL,
        children: [
            (0, n.jsx)("div", { className: lP.zH, children: (0, n.jsx)(lM, { otherUser: t, status: _.Ef.PENDING }) }),
            (0, n.jsx)("div", {
                className: lP.o1,
                children: s
                    ? (0, n.jsx)(lL, { icon: lI.P, tooltip: ej.intl.string(eh.default.e5iHmZ), onClick: o })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              a
                                  ? null
                                  : (0, n.jsx)(lL, {
                                        icon: lG.A,
                                        tooltip: ej.intl.string(eh.default.krWQZK),
                                        onClick: c,
                                    }),
                              (0, n.jsx)(lL, { icon: lI.P, tooltip: ej.intl.string(eh.default.bBDeNI), onClick: u }),
                          ],
                      }),
            }),
        ],
    });
}
var lw = l(615300),
    lV = l(187322),
    lz = l(975732),
    lH = l(789392);
let lB = (e) => {
    let { userId: t, children: l, isLast: s, className: r } = e,
        [d, c] = i.useState(!1),
        { analyticsLocations: u } = (0, v.Ay)(),
        o = i.useCallback(() => {
            (0, lz.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: u });
        }, [t, u]),
        x = () => {
            c(!0);
        },
        m = () => {
            c(!1);
        };
    return (0, n.jsx)(lp.tG, {
        id: t,
        children: (e) =>
            (0, n.jsx)(lV.vN, {
                offset: { left: -8, right: -8 },
                children: (0, n.jsx)(lw.A.div, {
                    style: { opacity: 1 },
                    className: a()(lH.KG, r, { [lH.HV]: s, [lH.vu]: d }),
                    onMouseEnter: x,
                    onMouseLeave: m,
                    onClick: o,
                    ...e,
                    children: l(d),
                }),
            }),
    });
};
var lY = l(327337),
    lq = l(19331);
let lZ = "/assets/922a2ee66ef62b5b.svg";
function lK(e) {
    let { header: t, description: l, stepNumber: i } = e;
    return (0, n.jsxs)("div", {
        className: lq.PM,
        children: [
            (0, n.jsx)("div", {
                className: lq.CD,
                children: (0, n.jsx)(w.D, {
                    variant: "heading-md/semibold",
                    color: "text-brand",
                    children: (0, n.jsx)(ei.F, { children: i }),
                }),
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(w.D, { variant: "heading-sm/bold", children: (0, n.jsx)(ei.F, { children: t }) }),
                    (0, n.jsx)(F.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                ],
            }),
        ],
    });
}
function lX() {
    return (0, n.jsxs)("div", {
        className: a()(lq.aP, e3.a, lq.dO, lq.p2),
        children: [
            (0, n.jsxs)("div", {
                className: lq.Np,
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(w.D, {
                                className: eZ.QB,
                                variant: "heading-xl/medium",
                                children: (0, n.jsx)(ei.F, { children: ej.intl.string(eh.default.pHEnV5) }),
                            }),
                            (0, n.jsx)(F.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: eZ.SX,
                                children: ej.intl.string(eh.default["1J/gZ4"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)("img", { className: lq._u, src: lZ, alt: ej.intl.string(eh.default["r+PDmu"]) }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lq.Ci,
                children: [
                    (0, n.jsx)(lK, {
                        header: ej.intl.string(eh.default["7xxAni"]),
                        description: ej.intl.string(eh.default["1M9So2"]),
                        stepNumber: 1,
                    }),
                    (0, n.jsx)(lK, {
                        header: ej.intl.string(eh.default["AXgx+a"]),
                        description: ej.intl.string(eh.default.GzMFnb),
                        stepNumber: 2,
                    }),
                    (0, n.jsx)(lK, {
                        header: ej.intl.string(eh.default.MZn1tG),
                        description: ej.intl.string(eh.default["8rLBxD"]),
                        stepNumber: 3,
                    }),
                ],
            }),
        ],
    });
}
function lW() {
    let e = (0, D.xr)();
    return (0, n.jsxs)("div", {
        className: a()(lq.aP, e3.a, lq.dO),
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(w.D, {
                        className: eZ.QB,
                        variant: "heading-xl/medium",
                        children: (0, n.jsx)(ei.F, { children: ej.intl.string(eh.default.zUCWEL) }),
                    }),
                    (0, n.jsx)(F.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: eZ.SX,
                        children: ej.intl.format(eh.default.yMnoDl, {
                            link: "https://support.discord.com/hc/articles/14155060633623",
                        }),
                    }),
                    e ? null : (0, n.jsx)(tF, {}),
                ],
            }),
            (0, n.jsx)("img", { className: lq._u, src: lZ, alt: ej.intl.string(eh.default["r+PDmu"]) }),
        ],
    });
}
function lQ(e) {
    let { sectionType: t, sectionTitle: l, requests: s } = e,
        a = i.useRef(null),
        r = `${t}-list`,
        d = (0, ly.A)(r),
        c = i.useCallback(
            (e) => {
                let { row: l, listIndex: i } = e,
                    a = s[l],
                    r = i === s.length;
                return null == a
                    ? null
                    : (0, n.jsx)(
                          lB,
                          {
                              userId: a.id,
                              isLast: r,
                              children: () =>
                                  t === _.Ef.ACTIVE ? (0, n.jsx)(lO, { user: a }) : (0, n.jsx)(lF, { user: a }),
                          },
                          a.id,
                      );
            },
            [s, t],
        ),
        u = i.useCallback(
            () =>
                (0, n.jsx)(
                    lS.A,
                    {
                        children: (0, n.jsx)(F.E, {
                            className: eZ.QB,
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
        className: lq.uW,
        children: (0, n.jsx)(lp.hD, {
            navigator: d,
            children: (0, n.jsx)(lp.PR, {
                children: (e) => {
                    let { ref: t, role: i, ...d } = e;
                    return (0, n.jsx)(
                        lT.OZ,
                        {
                            innerRole: i,
                            innerAriaLabel: l,
                            ref: (e) => {
                                (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            sectionHeight: _.h4,
                            rowHeight: _.Gg,
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
let lJ = () => {
        let e = (0, I.A)(),
            t = (0, D.GR)(),
            l = e ? _.Y7 : _.kp,
            i = { count: t.length, max: l },
            s = (0, $.y)(
                ej.intl.formatToPlainString(eh.default["+tnO34"], i),
                ej.intl.formatToPlainString(eh.default["pu6/U0"], i),
            );
        return t.length > 0
            ? (0, n.jsx)(lQ, { sectionType: _.Ef.ACTIVE, sectionTitle: s, requests: t })
            : (0, n.jsxs)("div", {
                  className: lq.uW,
                  children: [
                      (0, n.jsx)(F.E, { className: eZ.QB, variant: "eyebrow", color: "text-default", children: s }),
                      (0, n.jsx)("div", {
                          className: lq.aP,
                          children: (0, n.jsx)(eK, { text: ej.intl.string(eh.default.C4ScLD) }),
                      }),
                  ],
              });
    },
    l$ = () => {
        let e = (0, D.xr)(),
            t = (0, I.A)() ? _.Y7 : _.kp,
            l = (0, $.y)(
                ej.intl.formatToPlainString(eh.default["1/PzIj"], { maxConnections: t }),
                ej.intl.formatToPlainString(eh.default.RcTgiE, { maxConnections: t }),
            );
        return e
            ? (0, n.jsx)("div", {
                  className: lq.rv,
                  children: (0, n.jsx)(F.E, { variant: "text-xxs/medium", color: "text-muted", children: l }),
              })
            : null;
    },
    l0 = () => {
        let e = (0, lC.N)(),
            t = (0, lC.z)(),
            l = (0, lN.YW)({ helpline: e, throughline: t })
                .with({ helpline: !0 }, () =>
                    ej.intl.format(eh.default["KOwsf/"], {
                        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line",
                    }),
                )
                .with({ throughline: !0 }, () => ej.intl.format(eh.default["6tsC8u"], { helpLink: lY.CL }))
                .otherwise(() => null);
        return null == l
            ? null
            : (0, n.jsxs)("div", {
                  className: eZ.QX,
                  children: [
                      (0, n.jsx)(w.D, {
                          className: lq.rH,
                          variant: "heading-sm/semibold",
                          children: (0, n.jsx)(ei.F, { children: ej.intl.string(eh.default["7/tVhv"]) }),
                      }),
                      (0, n.jsx)(F.E, { variant: "text-xs/medium", color: "text-muted", children: l }),
                  ],
              });
    },
    l3 = () => {
        let e = (0, D.xk)(_.Ef.PENDING),
            t = (0, $.y)(
                ej.intl.formatToPlainString(eh.default.IkAgkG, { count: e.length }),
                ej.intl.formatToPlainString(eh.default.Q8XnAa, { count: e.length }),
            );
        return 0 === e.length ? null : (0, n.jsx)(lQ, { sectionType: _.Ef.PENDING, sectionTitle: t, requests: e });
    },
    l1 = () => {
        let e = (0, I.A)();
        return (0, n.jsxs)("div", {
            className: lq.kL,
            children: [
                e ? (0, n.jsx)(lX, {}) : (0, n.jsx)(lW, {}),
                (0, n.jsx)(lJ, {}),
                (0, n.jsx)(l3, {}),
                (0, n.jsx)(l$, {}),
                (0, n.jsx)(l0, {}),
            ],
        });
    };
var l2 = l(936504),
    l9 = l(946015),
    l8 = l(270003),
    l5 = l(359778),
    l7 = l(935286),
    l4 = l(840559),
    l6 = l(997187),
    ne = l(723923),
    nt = l(192280);
let nl = () => {
    let e = T.dm.useSetting(),
        { categories: t, initialized: l } = (0, t9.cf)([l6.A], () => l6.A.getEmailSettings());
    return (
        i.useEffect(() => {
            null == l && (0, l4.cR)();
        }, [l]),
        (0, n.jsx)("div", {
            className: nt.kL,
            children: (0, n.jsxs)(l8.n, {
                label: ej.intl.string(eh.default.USIXU7),
                children: [
                    (0, n.jsx)(ls.d, {
                        checked: e,
                        description: ej.intl.string(eh.default["5MdB3j"]),
                        onChange: T.dm.updateSetting,
                        label: ej.intl.string(eh.default.zkEceS),
                    }),
                    e
                        ? (0, n.jsx)(l5.Z, {
                              className: nt.MT,
                              type: l5.Z.Types.CUSTOM,
                              outline: !0,
                              children: (0, n.jsxs)(l9.s, {
                                  justify: l9.s.Justify.END,
                                  children: [
                                      (0, n.jsx)(l9.s.Child, {
                                          children: (0, n.jsx)(F.E, {
                                              variant: "text-sm/semibold",
                                              color: "text-default",
                                              children: ej.intl.string(eh.default.xAVm7K),
                                          }),
                                      }),
                                      (0, n.jsx)(P.D, {
                                          children: (0, n.jsx)(l2.N_, {
                                              onClick: t$.default,
                                              to: { pathname: L.BVt.FAMILY_CENTER, state: { scrollRestoration: !1 } },
                                              children: ej.intl.string(eh.default.cUIXFY),
                                          }),
                                      }),
                                      (0, n.jsx)(x.fk, { icon: l7.E, className: nt.UE, disableColor: !0 }),
                                  ],
                              }),
                          })
                        : null,
                    (0, n.jsx)(ls.d, {
                        checked: !!t[ne.HO.FAMILY_CENTER_DIGEST],
                        description: ej.intl.string(eh.default.y34S46),
                        onChange: function (e) {
                            (0, l4.CA)(ne.HO.FAMILY_CENTER_DIGEST, e);
                        },
                        label: ej.intl.string(eh.default.irvJKR),
                    }),
                ],
            }),
        })
    );
};
var nn = l(731738),
    ni = l(964486),
    ns = l(612200),
    na = l(807393),
    nr = l(210714),
    nd = l(33666),
    nc = l(204925);
function nu(e) {
    let { location: t, onMountEffect: l } = e,
        n = (0, nd.A)(),
        s = (0, D.W1)(),
        { familyCenterInitialized: a, isLoading: r } = (0, d.cf)([C.A], () => ({
            familyCenterInitialized: C.A.getIsInitialized(),
            isLoading: C.A.isLoading(),
        })),
        c = (0, en.k)(),
        { selectedTab: u, handleTabChange: o } = k(),
        x = ew.default.getCurrentUser(),
        m = null != n,
        h = a && null != x && !m;
    (0, ni.Ay)(() => {
        (0, nr.d)("family-center"), null != l && l();
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
                b.default.track(L.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: l,
                    selected_teen_id: i,
                    initial_page: _.zu[n],
                    source: _.iN[t],
                }),
                    na.A.increment({ name: nn.K.FAMILY_CENTER_VIEW });
            }
        }, [a, m, t]),
        i.useEffect(() => {
            h && (0, ns.yO)(nc.w_.FAMILY_CENTER);
        }, [h]),
        { isLoading: r, selectedTab: u, handleTabChange: o, showAgeGateModal: h }
    );
}
var no = l(556493);
let nx = {
        [_.u9.REQUESTS]: l1,
        [_.u9.ACTIVITY]: lE,
        [_.u9.SETTINGS]: nl,
        [_.u9.CONTENT_AND_SOCIAL]: tL,
        [_.u9.DATA_AND_PRIVACY]: tM,
        [_.u9.SCREEN_TIME_CONTROLS]: nl,
    },
    nm = { [_.u9.REQUESTS]: l1, [_.u9.ACTIVITY]: lE, [_.u9.CONTENT_AND_SOCIAL]: tL, [_.u9.DATA_AND_PRIVACY]: tM };
function nh() {
    return (0, n.jsx)(c.B, { justify: "center", align: "center", className: no.g4, children: (0, n.jsx)(u.y, {}) });
}
function nj(e) {
    let { section: t, handleItemSelect: l } = e,
        i = (0, D.VT)(),
        s = (0, I.A)();
    return [_.u9.CONTENT_AND_SOCIAL, _.u9.DATA_AND_PRIVACY, _.u9.SCREEN_TIME_CONTROLS].includes(t)
        ? null
        : (0, n.jsxs)(o.V, {
              className: no.c5,
              "aria-label": ej.intl.string(eh.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: l,
              children: [
                  (0, n.jsx)(o.V.Item, {
                      className: no.jA,
                      id: _.u9.ACTIVITY,
                      children: ej.intl.string(eh.default.bdBmqy),
                  }),
                  (0, n.jsxs)(o.V.Item, {
                      className: no.jA,
                      id: _.u9.REQUESTS,
                      "aria-label": ej.intl.string(eh.default["gVWG+6"]),
                      children: [
                          ej.intl.string(eh.default["gVWG+6"]),
                          i > 0 ? (0, n.jsx)(x.hV, { className: no.qS, count: i }) : null,
                      ],
                  }),
                  s
                      ? (0, n.jsx)(o.V.Item, {
                            className: no.jA,
                            id: _.u9.SETTINGS,
                            children: ej.intl.string(ej.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function ng(e) {
    let { theme: t, section: l, handleItemSelect: i } = e,
        s = (0, E.GV)(),
        d = (0, D.VT)();
    return (0, n.jsx)(m.N, {
        theme: t,
        children: (e) =>
            (0, n.jsxs)(N.A, {
                className: a()(e, no.ZB),
                scrollable: r.Fr,
                role: "navigation",
                "aria-labelledby": s,
                toolbar: !0,
                children: [
                    (0, n.jsx)(N.A.Icon, { icon: h.n, "aria-hidden": !0 }),
                    (0, n.jsx)(N.A.Title, { id: s, children: ej.intl.string(eh.default.RZqaJn) }),
                    (0, n.jsx)(N.A.Divider, {}),
                    (0, n.jsxs)(o.V, {
                        "aria-label": ej.intl.string(eh.default.RZqaJn),
                        selectedItem: l,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, n.jsx)(o.V.Item, {
                                id: _.u9.ACTIVITY,
                                className: no.AS,
                                children: ej.intl.string(eh.default.bdBmqy),
                            }),
                            (0, n.jsxs)(o.V.Item, {
                                id: _.u9.REQUESTS,
                                className: no.AS,
                                "aria-label": ej.intl.string(eh.default["gVWG+6"]),
                                children: [
                                    ej.intl.string(eh.default["gVWG+6"]),
                                    d > 0 ? (0, n.jsx)(x.hV, { className: no.qS, count: d }) : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function nf() {
    let e = (0, E.GV)(),
        {
            isLoading: t,
            selectedTab: l,
            handleTabChange: s,
            showAgeGateModal: a,
        } = nu({
            location: _.MH.SETTINGS,
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
    let r = nx[l];
    return (0, n.jsxs)("main", {
        className: no.kL,
        "aria-label": ej.intl.string(eh.default.RZqaJn),
        children: [
            (0, n.jsx)(A.HI, { location: ej.intl.string(eh.default.RZqaJn) }),
            (0, n.jsx)(nj, {
                section: l,
                handleItemSelect: (e) => {
                    s(e);
                },
            }),
            (0, n.jsx)(o.V.Panel, {
                id: l,
                "aria-labelledby": e,
                className: no.Us,
                children: t ? (0, n.jsx)(nh, {}) : (0, n.jsx)(r, {}),
            }),
        ],
    });
}
function nv() {
    let { analyticsLocations: e } = (0, v.Ay)(f.A.FAMILY_CENTER),
        t = (0, I.A)(),
        l = (0, d.bG)([C.A], () => C.A.getIsInitialized()),
        s = (0, d.bG)([p.A], () => p.A.theme),
        r = (0, E.GV)(),
        {
            isLoading: c,
            selectedTab: u,
            handleTabChange: x,
            showAgeGateModal: m,
        } = nu({
            location: _.MH.SIDENAV,
            onMountEffect: () => {
                g.I(L.BVt.FAMILY_CENTER), !C.A.isLoading() && C.A.canRefetch() && S.Ay.initialPageLoad();
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
    let h = u !== _.u9.SETTINGS && u !== _.u9.SCREEN_TIME_CONTROLS ? u : _.u9.ACTIVITY,
        N = nm[h];
    return (0, n.jsx)(v.f5, {
        value: e,
        children: (0, n.jsxs)("main", {
            className: a()(no.kL, no.ei),
            "aria-label": ej.intl.string(eh.default.RZqaJn),
            children: [
                (0, n.jsx)(A.HI, { location: ej.intl.string(eh.default.RZqaJn) }),
                (0, n.jsx)(ng, {
                    theme: s,
                    section: h,
                    handleItemSelect: (e) => {
                        x(e);
                    },
                }),
                (0, n.jsx)(o.V.Panel, {
                    id: h,
                    "aria-labelledby": r,
                    className: no.Om,
                    children: (0, n.jsx)(j.Ip, {
                        children: (0, n.jsx)("div", {
                            className: no.O4,
                            children: c ? (0, n.jsx)(nh, {}) : (0, n.jsx)(N, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
