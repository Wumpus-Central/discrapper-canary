n.d(t, {
    A: () => F,
    O: () => V,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(417597),
    d = n(843282),
    u = n(397927),
    _ = n(954571),
    p = n(661191),
    m = n(695515),
    g = n(923531),
    A = n(294433),
    f = n(10005),
    h = n(400641),
    b = n(438732),
    E = n(500470),
    x = n(153739),
    O = n(834981),
    C = n(607822),
    I = n(254847),
    T = n(436805),
    S = n(773349),
    j = n(283900),
    v = n(475833),
    N = n(469696),
    y = n(400553),
    P = n(191627),
    R = n(652215),
    D = n(842130),
    w = n(985018),
    L = n(976744),
    M = n(896498);

function U() {
    let e = i.useCallback(() => {
        (0, u.mMO)(async () => {
            let { default: e } = await n.e("59276").then(n.bind(n, 549223));
            return (t) =>
                (0, r.jsx)(
                    e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, t),
                );
        });
    }, []);
    return (0, r.jsx)(u.DUT, {
        className: L.YL,
        onClick: e,
        children: (0, r.jsx)(u.mir, {
            size: "custom",
            color: "currentColor",
            className: L.Kk,
            width: 15,
            height: 15,
        }),
    });
}

function G(e) {
    let { displayType: t } = e,
        n = i.useCallback(() => {
            (0, u.showToast)((0, u.createToast)(w.intl.string(D.default.Wu8BK2), u.ToastType.FAILURE));
        }, []),
        l = (0, b.A)(),
        a = (0, h._w)(t),
        c = (0, h.Gn)(t),
        d = (0, h.Ju)(t),
        { loadMore: _, isMoreLoading: A } = (0, f.A)({
            onError: n,
        }),
        E = (0, g.kN)().get(t),
        [x, O] = i.useState(P.PH),
        C = i.useCallback(() => {
            O((e) => e + P.PH), _(t);
        }, [t, _]);
    o()(E, "No text for action type: ".concat(t));
    let j = t === P.NV.PURCHASES && null != d ? E.sectionHeader(d) : E.sectionHeader(c),
        v = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = a[t];
                if ((0, g.aq)(n)) {
                    let e = p.default.extractTimestamp(n.event_id),
                        t = (0, g.i6)(e, E.timestampFormatter);
                    return (0, r.jsx)(
                        S.A,
                        {
                            userId: n.entity_id,
                            subText: t,
                        },
                        n.event_id,
                    );
                }
                if ((0, g.Is)(n))
                    return (0, r.jsx)(
                        I.A,
                        {
                            guildId: n.entity_id,
                        },
                        n.event_id,
                    );
                if ((0, g.u7)(n)) {
                    let e = m.A.getPurchaseInfo(n.entity_id);
                    return null == e
                        ? null
                        : (0, r.jsx)(
                              T.A,
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
            [a, E.timestampFormatter],
        ),
        N = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: L.bV,
                            variant: "text-md/semibold",
                            children: j,
                        }),
                        void 0 !== E.sectionDescription
                            ? (0, r.jsx)(u.Text, {
                                  className: L.yV,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: E.sectionDescription(null != l && l),
                              })
                            : null,
                    ],
                }),
            [j, E, l],
        );
    if (0 === a.length) return null;
    let y = a.slice(0, x);
    return (0, r.jsxs)("div", {
        className: L.A2,
        children: [
            N(),
            (0, r.jsx)("div", {
                className: L.o1,
                style: {
                    maxHeight: 65 * y.length,
                },
                children: y.map((e, t) =>
                    v({
                        row: t,
                    }),
                ),
            }),
            y.length < c
                ? (0, r.jsx)(u.DUT, {
                      className: s()(L.FQ, {
                          [L.r9]: A,
                      }),
                      onClick: C,
                      role: "button",
                      "aria-disabled": A,
                      children: A
                          ? (0, r.jsx)(u.y$y, {
                                type: u.y$y.Type.PULSING_ELLIPSIS,
                                className: L.u1,
                            })
                          : (0, r.jsx)(u.Text, {
                                className: L.UX,
                                variant: "text-sm/bold",
                                children: w.intl.format(D.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - y.length, P.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let k = () => {
        let e = (0, b.A)(),
            t = (0, O.vx)(),
            n = (0, A.y)(
                w.intl.formatToPlainString(D.default["7hqFl9"], {
                    activeLinks: t.length,
                }),
                w.intl.string(D.default["Q/D/0Q"]),
            ),
            i = (0, g.cV)(!!e),
            l = (0, O.v4)(i);
        return e && t.length > 1
            ? (0, r.jsx)(u.Text, {
                  variant: "eyebrow",
                  children: l,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, r.jsx)(u.bMW, {
                                size: "xs",
                                color: "currentColor",
                                className: L.Kk,
                            }),
                      (0, r.jsx)(u.Text, {
                          variant: "eyebrow",
                          children: n,
                      }),
                  ],
              });
    },
    V = i.memo((e) => {
        let { userId: t, subText: n, avatarSize: i = u._3J.SIZE_40, hideUserTag: l = !1 } = e,
            s = (0, x.F7)(t);
        return void 0 === s
            ? null
            : (0, r.jsxs)("div", {
                  className: L.iO,
                  children: [
                      (0, r.jsx)(j.H, {
                          user: s,
                          avatarSize: i,
                      }),
                      (0, r.jsxs)("div", {
                          className: L.TK,
                          children: [
                              (0, r.jsx)(v.A, {
                                  user: s,
                                  hideUserTag: l,
                              }),
                              void 0 !== n
                                  ? (0, r.jsx)(u.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: n,
                                    })
                                  : null,
                          ],
                      }),
                  ],
              });
    });
V.displayName = "FamilyCenterActivityCardAccountRow";
let H = () => {
        let e = (0, O.GR)(),
            t = (0, c.bG)([m.A], () => m.A.getSelectedTeenId()),
            { selectTeenUser: n } = (0, f.A)({}),
            l = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            s = i.useCallback(
                (e) =>
                    (0, r.jsx)(V, {
                        userId: e.value,
                        avatarSize: u._3J.SIZE_24,
                    }),
                [],
            );
        return (0, r.jsx)(d.Pw, {
            className: L.Lt,
            renderOptionLabel: s,
            renderOptionValue: (e) => {
                let [t] = e;
                return s(t);
            },
            serialize: (e) => e,
            select: (e) => {
                n(e),
                    _.default.track(R.HAw.FAMILY_CENTER_ACTION, {
                        action: P.qb.SelectTeen,
                    });
            },
            isSelected: (e) => e === t,
            options: l,
            "data-migration-pending": !0,
        });
    },
    B = () => {
        let e = (0, E.k)(),
            t = (0, b.A)(),
            n = (0, O.vx)(),
            i = (0, g.cV)(!!t),
            l = (0, O.v4)(i);
        return null === e
            ? null
            : t && 1 !== n.length
              ? (0, r.jsx)(H, {})
              : (0, r.jsx)(V, {
                    userId: e,
                    subText: l,
                });
    },
    F = () => {
        let e = (0, g.Mo)(),
            t = (0, h.lI)(),
            n = (0, g.jp)(),
            i = (0, O.v4)(n);
        return (0, r.jsxs)("div", {
            className: L.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: L.vF,
                    children: [(0, r.jsx)(k, {}), (0, r.jsx)(U, {})],
                }),
                (0, r.jsxs)("div", {
                    className: M.a,
                    children: [
                        (0, r.jsx)("div", {
                            className: L.wx,
                            children: (0, r.jsx)(B, {}),
                        }),
                        (0, r.jsxs)(u.BJc, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, r.jsx)("div", {
                                    className: L.O2,
                                    children: e.map((e) => {
                                        let [t, n] = e;
                                        return (0, r.jsx)(
                                            C.A,
                                            {
                                                displayType: t,
                                                header: n.tooltipHeader(),
                                            },
                                            "counter-".concat(t),
                                        );
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: L.RJ,
                                    children: [
                                        (0, r.jsx)(y.A, {}),
                                        t
                                            ? e.map((e) => {
                                                  let [t] = e;
                                                  return (0, r.jsx)(
                                                      G,
                                                      {
                                                          displayType: t,
                                                      },
                                                      "".concat(t, "-list"),
                                                  );
                                              })
                                            : (0, r.jsx)(N.A, {
                                                  className: L.RL,
                                                  text: null != i ? i : "",
                                              }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
