n.d(t, { A: () => F, O: () => w });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(284009),
    o = n.n(l),
    c = n(417597),
    d = n(843282),
    u = n(397927),
    _ = n(954571),
    m = n(661191),
    A = n(695515),
    g = n(923531),
    E = n(294433),
    h = n(10005),
    p = n(400641),
    C = n(438732),
    x = n(500470),
    T = n(153739),
    I = n(834981),
    S = n(607822),
    f = n(254847),
    N = n(436805),
    b = n(773349),
    R = n(283900),
    v = n(475833),
    O = n(469696),
    j = n(400553),
    P = n(191627),
    y = n(652215),
    L = n(842130),
    D = n(985018),
    M = n(976744),
    G = n(896498);
function U() {
    let e = s.useCallback(() => {
        (0, u.mMO)(async () => {
            let { default: e } = await n.e("59276").then(n.bind(n, 549223));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }, []);
    return (0, i.jsx)(u.DUT, {
        className: M.YL,
        onClick: e,
        children: (0, i.jsx)(u.mir, { size: "custom", color: "currentColor", className: M.Kk, width: 15, height: 15 }),
    });
}
function k(e) {
    let { displayType: t } = e,
        n = s.useCallback(() => {
            (0, u.showToast)((0, u.createToast)(D.intl.string(L.default.Wu8BK2), u.ToastType.FAILURE));
        }, []),
        r = (0, C.A)(),
        l = (0, p._w)(t),
        c = (0, p.Gn)(t),
        d = (0, p.Ju)(t),
        { loadMore: _, isMoreLoading: E } = (0, h.A)({ onError: n }),
        x = (0, g.kN)().get(t),
        [T, I] = s.useState(P.PH),
        S = s.useCallback(() => {
            I((e) => e + P.PH), _(t);
        }, [t, _]);
    o()(x, `No text for action type: ${t}`);
    let R = t === P.NV.PURCHASES && null != d ? x.sectionHeader(d) : x.sectionHeader(c),
        v = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = l[t];
                if ((0, g.aq)(n)) {
                    let e = m.default.extractTimestamp(n.event_id),
                        t = (0, g.i6)(e, x.timestampFormatter);
                    return (0, i.jsx)(b.A, { userId: n.entity_id, subText: t }, n.event_id);
                }
                if ((0, g.Is)(n)) return (0, i.jsx)(f.A, { guildId: n.entity_id }, n.event_id);
                if ((0, g.u7)(n)) {
                    let e = A.A.getPurchaseInfo(n.entity_id);
                    return null == e
                        ? null
                        : (0, i.jsx)(
                              N.A,
                              {
                                  skuId: e.sku_id,
                                  subscriptionPlanId: e.subscription_plan_id,
                                  total: e.total,
                                  currency: e.currency,
                              },
                              n.event_id,
                          );
                }
                return null;
            },
            [l, x.timestampFormatter],
        ),
        O = s.useCallback(
            () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(u.Text, { className: M.bV, variant: "text-md/semibold", children: R }),
                        void 0 !== x.sectionDescription
                            ? (0, i.jsx)(u.Text, {
                                  className: M.yV,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: x.sectionDescription(r ?? !1),
                              })
                            : null,
                    ],
                }),
            [R, x, r],
        );
    if (0 === l.length) return null;
    let j = l.slice(0, T);
    return (0, i.jsxs)("div", {
        className: M.A2,
        children: [
            O(),
            (0, i.jsx)("div", {
                className: M.o1,
                style: { maxHeight: 65 * j.length },
                children: j.map((e, t) => v({ row: t })),
            }),
            j.length < c
                ? (0, i.jsx)(u.DUT, {
                      className: a()(M.FQ, { [M.r9]: E }),
                      onClick: S,
                      role: "button",
                      "aria-disabled": E,
                      children: E
                          ? (0, i.jsx)(u.y$y, { type: u.y$y.Type.PULSING_ELLIPSIS, className: M.u1 })
                          : (0, i.jsx)(u.Text, {
                                className: M.UX,
                                variant: "text-sm/bold",
                                children: D.intl.format(L.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - j.length, P.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let B = () => {
        let e = (0, C.A)(),
            t = (0, I.vx)(),
            n = (0, E.y)(
                D.intl.formatToPlainString(L.default["7hqFl9"], { activeLinks: t.length }),
                D.intl.string(L.default["Q/D/0Q"]),
            ),
            s = (0, g.cV)(!!e),
            r = (0, I.v4)(s);
        return e && t.length > 1
            ? (0, i.jsx)(u.Text, { variant: "eyebrow", children: r })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      e ? null : (0, i.jsx)(u.bMW, { size: "xs", color: "currentColor", className: M.Kk }),
                      (0, i.jsx)(u.Text, { variant: "eyebrow", children: n }),
                  ],
              });
    },
    w = s.memo((e) => {
        let { userId: t, subText: n, avatarSize: s = u._3J.SIZE_40, hideUserTag: r = !1 } = e,
            a = (0, T.F7)(t);
        return void 0 === a
            ? null
            : (0, i.jsxs)("div", {
                  className: M.iO,
                  children: [
                      (0, i.jsx)(R.H, { user: a, avatarSize: s }),
                      (0, i.jsxs)("div", {
                          className: M.TK,
                          children: [
                              (0, i.jsx)(v.A, { user: a, hideUserTag: r }),
                              void 0 !== n
                                  ? (0, i.jsx)(u.Text, { variant: "text-sm/medium", color: "text-muted", children: n })
                                  : null,
                          ],
                      }),
                  ],
              });
    });
w.displayName = "FamilyCenterActivityCardAccountRow";
let H = () => {
        let e = (0, I.GR)(),
            t = (0, c.bG)([A.A], () => A.A.getSelectedTeenId()),
            { selectTeenUser: n } = (0, h.A)({}),
            r = e.map((e) => ({ label: e.id, value: e.id })),
            a = s.useCallback((e) => (0, i.jsx)(w, { userId: e.value, avatarSize: u._3J.SIZE_24 }), []);
        return (0, i.jsx)(d.Pw, {
            className: M.Lt,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                n(e), _.default.track(y.HAw.FAMILY_CENTER_ACTION, { action: P.qb.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: r,
            "data-migration-pending": !0,
        });
    },
    V = () => {
        let e = (0, x.k)(),
            t = (0, C.A)(),
            n = (0, I.vx)(),
            s = (0, g.cV)(!!t),
            r = (0, I.v4)(s);
        return null === e ? null : t && 1 !== n.length ? (0, i.jsx)(H, {}) : (0, i.jsx)(w, { userId: e, subText: r });
    },
    F = () => {
        let e = (0, g.Mo)(),
            t = (0, p.lI)(),
            n = (0, g.jp)(),
            s = (0, I.v4)(n);
        return (0, i.jsxs)("div", {
            className: M.kL,
            children: [
                (0, i.jsxs)("div", { className: M.vF, children: [(0, i.jsx)(B, {}), (0, i.jsx)(U, {})] }),
                (0, i.jsxs)("div", {
                    className: G.a,
                    children: [
                        (0, i.jsx)("div", { className: M.wx, children: (0, i.jsx)(V, {}) }),
                        (0, i.jsxs)(u.BJc, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, i.jsx)("div", {
                                    className: M.O2,
                                    children: e.map((e) => {
                                        let [t, n] = e;
                                        return (0, i.jsx)(
                                            S.A,
                                            { displayType: t, header: n.tooltipHeader() },
                                            `counter-${t}`,
                                        );
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: M.RJ,
                                    children: [
                                        (0, i.jsx)(j.A, {}),
                                        t
                                            ? e.map((e) => {
                                                  let [t] = e;
                                                  return (0, i.jsx)(k, { displayType: t }, `${t}-list`);
                                              })
                                            : (0, i.jsx)(O.A, { className: M.RL, text: s ?? "" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
