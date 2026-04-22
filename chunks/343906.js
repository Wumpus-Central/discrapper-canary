l.d(t, { A: () => $, O: () => J });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(284009),
    d = l.n(r),
    c = l(417597),
    u = l(843282),
    o = l(192308),
    x = l(939249),
    h = l(885574),
    m = l(691540),
    g = l(857250),
    j = l(97483),
    A = l(834730),
    v = l(289873),
    f = l(39623),
    E = l(778712),
    N = l(331322),
    p = l(954571),
    T = l(661191),
    S = l(695515),
    y = l(923531),
    C = l(294433),
    _ = l(10005),
    I = l(400641),
    b = l(438732),
    R = l(500470),
    L = l(153739),
    D = l(834981),
    k = l(607822),
    M = l(254847),
    U = l(436805),
    w = l(773349),
    O = l(283900),
    G = l(475833),
    P = l(469696),
    V = l(400553),
    F = l(191627),
    H = l(652215),
    z = l(602339),
    Z = l(985018),
    B = l(990021),
    q = l(453287);
function Y() {
    let e = i.useCallback(() => {
        (0, o.openModalLazy)(async () => {
            let { default: e } = await l.e("59276").then(l.bind(l, 549223));
            return (t) => (0, n.jsx)(e, { ...t });
        });
    }, []);
    return (0, n.jsx)(x.D, {
        className: B.YL,
        onClick: e,
        children: (0, n.jsx)(h.m, { size: "custom", color: "currentColor", className: B.Kk, width: 15, height: 15 }),
    });
}
function K(e) {
    let { displayType: t } = e,
        l = i.useCallback(() => {
            (0, m.P0)((0, g.o)(Z.intl.string(z.default.Wu8BK2), j.Ck.FAILURE));
        }, []),
        s = (0, b.A)(),
        r = (0, I._w)(t),
        c = (0, I.Gn)(t),
        u = (0, I.Ju)(t),
        { loadMore: o, isMoreLoading: h } = (0, _.A)({ onError: l }),
        f = (0, y.kN)().get(t),
        [E, N] = i.useState(F.PH),
        p = i.useCallback(() => {
            N((e) => e + F.PH), o(t);
        }, [t, o]);
    d()(f, `No text for action type: ${t}`);
    let C = t === F.NV.PURCHASES && null != u ? f.sectionHeader(u) : f.sectionHeader(c),
        R = i.useCallback(
            (e) => {
                let { row: t } = e,
                    l = r[t];
                if ((0, y.aq)(l)) {
                    let e = T.default.extractTimestamp(l.event_id),
                        t = (0, y.i6)(e, f.timestampFormatter);
                    return (0, n.jsx)(w.A, { userId: l.entity_id, subText: t }, l.event_id);
                }
                if ((0, y.Is)(l)) return (0, n.jsx)(M.A, { guildId: l.entity_id }, l.event_id);
                if ((0, y.u7)(l)) {
                    let e = S.A.getPurchaseInfo(l.entity_id);
                    return null == e
                        ? null
                        : (0, n.jsx)(
                              U.A,
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
            [r, f.timestampFormatter],
        ),
        L = i.useCallback(
            () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(A.E, { className: B.bV, variant: "text-md/semibold", children: C }),
                        void 0 !== f.sectionDescription
                            ? (0, n.jsx)(A.E, {
                                  className: B.yV,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: f.sectionDescription(s ?? !1),
                              })
                            : null,
                    ],
                }),
            [C, f, s],
        );
    if (0 === r.length) return null;
    let D = r.slice(0, E);
    return (0, n.jsxs)("div", {
        className: B.A2,
        children: [
            L(),
            (0, n.jsx)("div", {
                className: B.o1,
                style: { maxHeight: 65 * D.length },
                children: D.map((e, t) => R({ row: t })),
            }),
            D.length < c
                ? (0, n.jsx)(x.D, {
                      className: a()(B.FQ, { [B.r9]: h }),
                      onClick: p,
                      role: "button",
                      "aria-disabled": h,
                      children: h
                          ? (0, n.jsx)(v.y, { type: v.y.Type.PULSING_ELLIPSIS, className: B.u1 })
                          : (0, n.jsx)(A.E, {
                                className: B.UX,
                                variant: "text-sm/bold",
                                children: Z.intl.format(z.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - D.length, F.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let X = () => {
        let e = (0, b.A)(),
            t = (0, D.vx)(),
            l = (0, C.y)(
                Z.intl.formatToPlainString(z.default["7hqFl9"], { activeLinks: t.length }),
                Z.intl.string(z.default["Q/D/0Q"]),
            ),
            i = (0, y.cV)(!!e),
            s = (0, D.v4)(i);
        return e && t.length > 1
            ? (0, n.jsx)(A.E, { variant: "eyebrow", children: s })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      e ? null : (0, n.jsx)(f.b, { size: "xs", color: "currentColor", className: B.Kk }),
                      (0, n.jsx)(A.E, { variant: "eyebrow", children: l }),
                  ],
              });
    },
    J = i.memo((e) => {
        let { userId: t, subText: l, avatarSize: i = E._3.SIZE_40, hideUserTag: s = !1 } = e,
            a = (0, L.F7)(t);
        return void 0 === a
            ? null
            : (0, n.jsxs)("div", {
                  className: B.iO,
                  children: [
                      (0, n.jsx)(O.H, { user: a, avatarSize: i }),
                      (0, n.jsxs)("div", {
                          className: B.TK,
                          children: [
                              (0, n.jsx)(G.A, { user: a, hideUserTag: s }),
                              void 0 !== l
                                  ? (0, n.jsx)(A.E, { variant: "text-sm/medium", color: "text-muted", children: l })
                                  : null,
                          ],
                      }),
                  ],
              });
    });
J.displayName = "FamilyCenterActivityCardAccountRow";
let W = () => {
        let e = (0, D.GR)(),
            t = (0, c.bG)([S.A], () => S.A.getSelectedTeenId()),
            { selectTeenUser: l } = (0, _.A)({}),
            s = e.map((e) => ({ label: e.id, value: e.id })),
            a = i.useCallback((e) => (0, n.jsx)(J, { userId: e.value, avatarSize: E._3.SIZE_24 }), []);
        return (0, n.jsx)(u.Pw, {
            className: B.Lt,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                l(e), p.default.track(H.HAw.FAMILY_CENTER_ACTION, { action: F.qb.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: s,
            "data-migration-pending": !0,
        });
    },
    Q = () => {
        let e = (0, R.k)(),
            t = (0, b.A)(),
            l = (0, D.vx)(),
            i = (0, y.cV)(!!t),
            s = (0, D.v4)(i);
        return null === e ? null : t && 1 !== l.length ? (0, n.jsx)(W, {}) : (0, n.jsx)(J, { userId: e, subText: s });
    },
    $ = () => {
        let e = (0, y.Mo)(),
            t = (0, I.lI)(),
            l = (0, y.jp)(),
            i = (0, D.v4)(l);
        return (0, n.jsxs)("div", {
            className: B.kL,
            children: [
                (0, n.jsxs)("div", { className: B.vF, children: [(0, n.jsx)(X, {}), (0, n.jsx)(Y, {})] }),
                (0, n.jsxs)("div", {
                    className: q.a,
                    children: [
                        (0, n.jsx)("div", { className: B.wx, children: (0, n.jsx)(Q, {}) }),
                        (0, n.jsxs)(N.B, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, n.jsx)("div", {
                                    className: B.O2,
                                    children: e.map((e) => {
                                        let [t, l] = e;
                                        return (0, n.jsx)(
                                            k.A,
                                            { displayType: t, header: l.tooltipHeader() },
                                            `counter-${t}`,
                                        );
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: B.RJ,
                                    children: [
                                        (0, n.jsx)(V.A, {}),
                                        t
                                            ? e.map((e) => {
                                                  let [t] = e;
                                                  return (0, n.jsx)(K, { displayType: t }, `${t}-list`);
                                              })
                                            : (0, n.jsx)(P.A, { className: B.RL, text: i ?? "" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
