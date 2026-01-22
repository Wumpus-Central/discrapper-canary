n.d(t, {
    A: () => K,
    O: () => H,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(417597),
    u = n(843282),
    d = n(397927),
    f = n(954571),
    p = n(661191),
    _ = n(695515),
    h = n(923531),
    m = n(294433),
    g = n(10005),
    E = n(400641),
    b = n(500470),
    y = n(153739),
    O = n(945276),
    A = n(834981),
    v = n(607822),
    S = n(254847),
    I = n(436805),
    T = n(773349),
    C = n(283900),
    N = n(475833),
    R = n(469696),
    w = n(400553),
    P = n(191627),
    D = n(652215),
    x = n(842130),
    L = n(985018),
    j = n(976744),
    M = n(896498);

function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
let G = 65;

function V() {
    let e = i.useCallback(() => {
        (0, d.mMO)(async () => {
            let { default: e } = await n.e("59276").then(n.bind(n, 549223));
            return (t) => (0, r.jsx)(e, U({}, t));
        });
    }, []);
    return (0, r.jsx)(d.DUT, {
        className: j.YL,
        onClick: e,
        children: (0, r.jsx)(d.mir, {
            size: "custom",
            color: "currentColor",
            className: j.Kk,
            width: 15,
            height: 15,
        }),
    });
}

function F(e) {
    let { displayType: t } = e,
        n = i.useCallback(() => {
            (0, d.showToast)((0, d.createToast)(L.intl.string(x.default.Wu8BK2), d.ToastType.FAILURE));
        }, []),
        a = (0, O.A)(),
        o = (0, E._w)(t),
        c = (0, E.Gn)(t),
        u = (0, E.Ju)(t),
        { loadMore: f, isMoreLoading: m } = (0, g.A)({
            onError: n,
        }),
        b = (0, h.kN)().get(t),
        [y, A] = i.useState(P.PH),
        v = i.useCallback(() => {
            A((e) => e + P.PH), f(t);
        }, [t, f]);
    l()(b, "No text for action type: ".concat(t));
    let C = t === P.NV.PURCHASES && null != u ? b.sectionHeader(u) : b.sectionHeader(c),
        N = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = o[t];
                if ((0, h.aq)(n)) {
                    let e = p.default.extractTimestamp(n.event_id),
                        t = (0, h.i6)(e, b.timestampFormatter);
                    return (0, r.jsx)(
                        T.A,
                        {
                            userId: n.entity_id,
                            subText: t,
                        },
                        n.event_id,
                    );
                }
                if ((0, h.Is)(n))
                    return (0, r.jsx)(
                        S.A,
                        {
                            guildId: n.entity_id,
                        },
                        n.event_id,
                    );
                if ((0, h.u7)(n)) {
                    let e = _.A.getPurchaseInfo(n.entity_id);
                    return null == e
                        ? null
                        : (0, r.jsx)(
                              I.A,
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
            [o, b.timestampFormatter],
        ),
        R = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.Text, {
                            className: j.bV,
                            variant: "text-md/semibold",
                            children: C,
                        }),
                        void 0 !== b.sectionDescription
                            ? (0, r.jsx)(d.Text, {
                                  className: j.yV,
                                  variant: "text-md/medium",
                                  color: "text-muted",
                                  children: b.sectionDescription(null != a && a),
                              })
                            : null,
                    ],
                }),
            [C, b, a],
        );
    if (0 === o.length) return null;
    let w = o.slice(0, y);
    return (0, r.jsxs)("div", {
        className: j.A2,
        children: [
            R(),
            (0, r.jsx)("div", {
                className: j.o1,
                style: {
                    maxHeight: w.length * G,
                },
                children: w.map((e, t) =>
                    N({
                        row: t,
                    }),
                ),
            }),
            w.length < c
                ? (0, r.jsx)(d.DUT, {
                      className: s()(j.FQ, {
                          [j.r9]: m,
                      }),
                      onClick: v,
                      role: "button",
                      "aria-disabled": m,
                      children: m
                          ? (0, r.jsx)(d.y$y, {
                                type: d.y$y.Type.PULSING_ELLIPSIS,
                                className: j.u1,
                            })
                          : (0, r.jsx)(d.Text, {
                                className: j.UX,
                                variant: "text-sm/bold",
                                children: L.intl.format(x.default["7dMmJY"], {
                                    pageSize: Math.max(1, Math.min(c - w.length, P.PH)),
                                }),
                            }),
                  })
                : null,
        ],
    });
}
let B = () => {
        let e = (0, O.A)(),
            t = (0, A.vx)(),
            n = (0, m.y)(
                L.intl.formatToPlainString(x.default["7hqFl9"], {
                    activeLinks: t.length,
                }),
                L.intl.string(x.default["Q/D/0Q"]),
            ),
            i = (0, h.cV)(!!e),
            a = (0, A.v4)(i);
        return e && t.length > 1
            ? (0, r.jsx)(d.Text, {
                  variant: "eyebrow",
                  children: a,
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, r.jsx)(d.bMW, {
                                size: "xs",
                                color: "currentColor",
                                className: j.Kk,
                            }),
                      (0, r.jsx)(d.Text, {
                          variant: "eyebrow",
                          children: n,
                      }),
                  ],
              });
    },
    H = i.memo((e) => {
        let { userId: t, subText: n, avatarSize: i = d._3J.SIZE_40, hideUserTag: a = !1 } = e,
            s = (0, y.F7)(t);
        return void 0 === s
            ? null
            : (0, r.jsxs)("div", {
                  className: j.iO,
                  children: [
                      (0, r.jsx)(C.H, {
                          user: s,
                          avatarSize: i,
                      }),
                      (0, r.jsxs)("div", {
                          className: j.TK,
                          children: [
                              (0, r.jsx)(N.A, {
                                  user: s,
                                  hideUserTag: a,
                              }),
                              void 0 !== n
                                  ? (0, r.jsx)(d.Text, {
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
H.displayName = "FamilyCenterActivityCardAccountRow";
let Y = () => {
        let e = (0, A.GR)(),
            t = (0, c.bG)([_.A], () => _.A.getSelectedTeenId()),
            { selectTeenUser: n } = (0, g.A)({}),
            a = (e) => {
                n(e),
                    f.default.track(D.HAw.FAMILY_CENTER_ACTION, {
                        action: P.qb.SelectTeen,
                    });
            },
            s = e.map((e) => ({
                label: e.id,
                value: e.id,
            })),
            o = i.useCallback(
                (e) =>
                    (0, r.jsx)(H, {
                        userId: e.value,
                        avatarSize: d._3J.SIZE_24,
                    }),
                [],
            );
        return (0, r.jsx)(u.Pw, {
            className: j.Lt,
            renderOptionLabel: o,
            renderOptionValue: (e) => {
                let [t] = e;
                return o(t);
            },
            serialize: (e) => e,
            select: a,
            isSelected: (e) => e === t,
            options: s,
            "data-migration-pending": !0,
        });
    },
    W = () => {
        let e = (0, b.k)(),
            t = (0, O.A)(),
            n = (0, A.vx)(),
            i = (0, h.cV)(!!t),
            a = (0, A.v4)(i);
        return null === e
            ? null
            : t && 1 !== n.length
              ? (0, r.jsx)(Y, {})
              : (0, r.jsx)(H, {
                    userId: e,
                    subText: a,
                });
    },
    K = () => {
        let e = (0, h.Mo)(),
            t = (0, E.lI)(),
            n = (0, h.jp)(),
            i = (0, A.v4)(n);
        return (0, r.jsxs)("div", {
            className: j.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: j.vF,
                    children: [(0, r.jsx)(B, {}), (0, r.jsx)(V, {})],
                }),
                (0, r.jsxs)("div", {
                    className: M.a,
                    children: [
                        (0, r.jsx)("div", {
                            className: j.wx,
                            children: (0, r.jsx)(W, {}),
                        }),
                        (0, r.jsxs)(d.BJc, {
                            gap: 32,
                            padding: 32,
                            fullWidth: !1,
                            children: [
                                (0, r.jsx)("div", {
                                    className: j.O2,
                                    children: e.map((e) => {
                                        let [t, n] = e;
                                        return (0, r.jsx)(
                                            v.A,
                                            {
                                                displayType: t,
                                                header: n.tooltipHeader(),
                                            },
                                            "counter-".concat(t),
                                        );
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: j.RJ,
                                    children: [
                                        (0, r.jsx)(w.A, {}),
                                        t
                                            ? e.map((e) => {
                                                  let [t] = e;
                                                  return (0, r.jsx)(
                                                      F,
                                                      {
                                                          displayType: t,
                                                      },
                                                      "".concat(t, "-list"),
                                                  );
                                              })
                                            : (0, r.jsx)(R.A, {
                                                  className: j.RL,
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
