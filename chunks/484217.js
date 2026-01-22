s.d(t, {
    Ay: () => k,
}),
    s(896048),
    s(228524),
    s(321073);
var i = s(627968),
    a = s(64700),
    l = s(503698),
    r = s.n(l),
    n = s(284009),
    C = s.n(n),
    d = s(172218),
    o = s(158954),
    c = s(311907),
    x = s(397927),
    p = s(803306),
    h = s(718213),
    f = s(544028),
    u = s(427262),
    j = s(326084),
    _ = s(851746),
    m = s(972007),
    g = s(509870),
    L = s(211145),
    y = s(985018),
    v = s(558837),
    b = s(131265),
    A = s(556011),
    S = s(469961),
    w = s(172944);

function O(e) {
    let { numOfSelectedUsers: t, anySelected: s } = e,
        a = (0, g.A)({
            numNewSelected: t,
            anySelected: s,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: v.DD,
                children: [
                    (0, i.jsx)(M, {
                        className: v.oc,
                    }),
                    (0, i.jsx)(x.Heading, {
                        variant: "heading-xl/bold",
                        children: y.intl.string(y.t.Lm2nFc),
                    }),
                ],
            }),
            (0, i.jsx)(x.Text, {
                className: v.h_,
                variant: "text-md/medium",
                color: "text-default",
                children: a,
            }),
        ],
    });
}

function N() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: v.DD,
                children: (0, i.jsx)(x.Heading, {
                    variant: "heading-xl/bold",
                    children: y.intl.string(y.t["PFp+aJ"]),
                }),
            }),
            (0, i.jsx)(x.Text, {
                className: v.h_,
                variant: "text-md/medium",
                color: "text-default",
                children: y.intl.string(y.t.eBIGB4),
            }),
        ],
    });
}

function F() {
    return (0, i.jsx)("div", {
        className: v.JM,
        children: (0, i.jsx)(x._V3, {
            src: S,
            width: 225,
            height: 160,
        }),
    });
}

function E(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)("div", {
        className: v.LK,
        children: [
            (0, i.jsxs)("div", {
                className: r()(v.tU, v.HE),
                children: [
                    (0, i.jsx)("div", {
                        className: v.DD,
                        children: (0, i.jsx)(x.Heading, {
                            variant: "heading-xl/bold",
                            children: y.intl.string(y.t.a9HOKg),
                        }),
                    }),
                    (0, i.jsx)(x.Text, {
                        className: v.h_,
                        variant: "text-md/medium",
                        color: "text-default",
                        children: y.intl.string(y.t.JjjeZb),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: v.JM,
                children: (0, i.jsx)(x._V3, {
                    src: A,
                    width: 178,
                    height: 190,
                }),
            }),
            (0, i.jsx)("div", {
                className: r()(v.qr, v.h0),
                children: (0, i.jsx)("div", {
                    className: v.tA,
                    children: (0, i.jsx)(o.$nd, {
                        variant: "primary",
                        fullWidth: !0,
                        text: y.intl.string(y.t.wpSqAW),
                        onClick: () => t(),
                    }),
                }),
            }),
        ],
    });
}

function U(e) {
    let { onShare: t } = e,
        s = (0, c.bG)([_.A], () => _.A.getRecipientStatus()),
        [l, n] = a.useState([]),
        [C, d] = a.useState(new Set()),
        [h, f] = a.useState(!1);
    return (
        a.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, i] of s)
                    if (i === j.aK.PENDING) {
                        let s = await (0, p.wz)(t);
                        e.push(s);
                    }
                n(e);
            })();
        }, [s]),
        (0, i.jsxs)("div", {
            className: v.Dy,
            children: [
                (0, i.jsxs)("div", {
                    className: r()(v.hi, v.HE),
                    children: [
                        (0, i.jsxs)("div", {
                            className: v.DD,
                            children: [
                                (0, i.jsx)(M, {
                                    className: v.oc,
                                }),
                                (0, i.jsx)(x.Heading, {
                                    variant: "heading-xl/bold",
                                    children: y.intl.string(y.t.SY9tyI),
                                }),
                            ],
                        }),
                        (0, i.jsx)(x.Text, {
                            className: v.h_,
                            variant: "text-md/medium",
                            color: "text-default",
                            children: y.intl.string(y.t.mPmPri),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: v.p_,
                    children: l.map((e) =>
                        (0, i.jsx)(
                            L.A,
                            {
                                user: e,
                                checked: C.has(e),
                                onChange: (e, t) => {
                                    d((s) => {
                                        let i = new Set(s);
                                        return t ? i.add(e) : i.delete(e), i;
                                    });
                                },
                            },
                            e.id,
                        ),
                    ),
                }),
                (0, i.jsx)("div", {
                    className: r()(v.qr, v.h0),
                    children: (0, i.jsx)("div", {
                        className: v.tA,
                        children: (0, i.jsx)(o.$nd, {
                            text: y.intl.string(y.t.ItpQxk),
                            fullWidth: !0,
                            variant: "primary",
                            disabled: h,
                            onClick: async () => {
                                f(!0), await t([...C.values()]), f(!1);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}

function M(e) {
    let { className: t } = e;
    return "light" === (0, c.bG)([f.A], () => f.A.theme)
        ? (0, i.jsx)(x._V3, {
              className: t,
              src: b,
              width: 55,
              height: 38,
          })
        : (0, i.jsx)(x._V3, {
              className: t,
              src: w,
              width: 55,
              height: 38,
          });
}
let k = function (e) {
    let { onClose: t, onShare: s } = e,
        l = (0, c.bG)([_.A], () => _.A.getReferralsRemaining()),
        [n, p] = a.useState(""),
        f = (0, h.A)(n, 400),
        [j, g] = a.useState(new Map()),
        [b, A] = a.useState(!1),
        {
            eligibleUsers: S,
            fetchUsers: w,
            hasError: M,
            isFetching: k,
            resendUsers: R,
        } = (0, m.i)({
            searchQuery: f,
            selectedUsers: j,
        }),
        B = a.useMemo(() => [...j.keys()].filter((e) => !R.has(e)), [j, R]);
    C()(null != l, "Referrals remaining should not be null");
    let G = (0, d.K)((e) => {
        e && !k && w();
    });
    if (M)
        return (0, i.jsx)(E, {
            onClose: t,
        });
    if (0 === l)
        return (0, i.jsx)(U, {
            onShare: s,
        });
    let D = f.length > 0 && 0 === S.length;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: r()(v.wx, v.HE),
                children: [
                    D
                        ? (0, i.jsx)(N, {})
                        : (0, i.jsx)(O, {
                              numOfSelectedUsers: B.length,
                              anySelected: j.size > 0,
                          }),
                    (0, i.jsx)(x.iS7, {
                        selectionMode: "multiple",
                        value: Array.from(j.values()),
                        options: S,
                        formatOption: (e) => ({
                            id: e.id,
                            value: e,
                            label: u.Ay.getName(e),
                        }),
                        onSelectionChange: (e) => {
                            let t = Array.isArray(e) ? e : [e],
                                s = new Map();
                            t.forEach((e) => {
                                null != e && s.set(e.id, e);
                            }),
                                g(s);
                        },
                        children: (0, i.jsx)("div", {
                            className: v.c,
                            children: (0, i.jsx)(x.a32, {
                                placeholder: 0 === j.size ? y.intl.string(y.t.Kd5RaI) : "",
                                onQueryChange: (e) => {
                                    p(e.target.value);
                                },
                            }),
                        }),
                    }),
                ],
            }),
            D
                ? (0, i.jsx)(F, {})
                : (0, i.jsxs)(o.ArX, {
                      className: v.p_,
                      children: [
                          S.map((e) =>
                              (0, i.jsx)(
                                  L.A,
                                  {
                                      disabled:
                                          [...j.values()].filter((e) => !R.has(e.id)).length >= l &&
                                          !j.has(e.id) &&
                                          !R.has(e.id),
                                      checked: j.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          g((s) => {
                                              let i = new Map(s);
                                              return t ? i.set(e.id, e) : i.delete(e.id), i;
                                          });
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                          k && (0, i.jsx)(x.y$y, {}),
                          (0, i.jsx)("div", {
                              ref: G,
                          }),
                      ],
                  }),
            (0, i.jsx)("div", {
                className: r()(v.qr, v.h0),
                children: (0, i.jsx)("div", {
                    className: v.tA,
                    children: (0, i.jsx)(o.$nd, {
                        variant: "primary",
                        fullWidth: !0,
                        text: D ? y.intl.string(y.t.wpSqAW) : y.intl.string(y.t.ItpQxk),
                        disabled: (0 === j.size && !D) || b,
                        onClick: async () => {
                            D ? t() : (A(!0), await s([...j.values()]), A(!1));
                        },
                    }),
                }),
            }),
        ],
    });
};
