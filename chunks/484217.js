s.d(t, { Ay: () => k }), s(321073);
var i = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    n = s(284009),
    C = s.n(n),
    d = s(172218),
    o = s(158954),
    c = s(311907),
    x = s(397927),
    h = s(803306),
    p = s(718213),
    f = s(544028),
    _ = s(427262),
    u = s(326084),
    j = s(851746),
    m = s(972007),
    g = s(509870),
    L = s(211145),
    y = s(985018),
    v = s(558837),
    A = s(131265),
    S = s(556011),
    w = s(469961),
    N = s(172944);
function F(e) {
    let { numOfSelectedUsers: t, anySelected: s } = e,
        a = (0, g.A)({ numNewSelected: t, anySelected: s });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: v.DD,
                children: [
                    (0, i.jsx)(R, { className: v.oc }),
                    (0, i.jsx)(x.Heading, { variant: "heading-xl/bold", children: y.intl.string(y.t.Lm2nFc) }),
                ],
            }),
            (0, i.jsx)(x.Text, { className: v.h_, variant: "text-md/medium", color: "text-default", children: a }),
        ],
    });
}
function U() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: v.DD,
                children: (0, i.jsx)(x.Heading, { variant: "heading-xl/bold", children: y.intl.string(y.t["PFp+aJ"]) }),
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
function b() {
    return (0, i.jsx)("div", { className: v.JM, children: (0, i.jsx)(x._V3, { src: w, width: 225, height: 160 }) });
}
function E(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)("div", {
        className: v.LK,
        children: [
            (0, i.jsxs)("div", {
                className: l()(v.tU, v.HE),
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
            (0, i.jsx)("div", { className: v.JM, children: (0, i.jsx)(x._V3, { src: S, width: 178, height: 190 }) }),
            (0, i.jsx)("div", {
                className: l()(v.qr, v.h0),
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
function M(e) {
    let { onShare: t } = e,
        s = (0, c.bG)([j.A], () => j.A.getRecipientStatus()),
        [r, n] = a.useState([]),
        [C, d] = a.useState(new Set()),
        [p, f] = a.useState(!1);
    return (
        a.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, i] of s)
                    if (i === u.aK.PENDING) {
                        let s = await (0, h.wz)(t);
                        e.push(s);
                    }
                n(e);
            })();
        }, [s]),
        (0, i.jsxs)("div", {
            className: v.Dy,
            children: [
                (0, i.jsxs)("div", {
                    className: l()(v.hi, v.HE),
                    children: [
                        (0, i.jsxs)("div", {
                            className: v.DD,
                            children: [
                                (0, i.jsx)(R, { className: v.oc }),
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
                    children: r.map((e) =>
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
                    className: l()(v.qr, v.h0),
                    children: (0, i.jsx)("div", {
                        className: v.tA,
                        children: (0, i.jsx)(o.$nd, {
                            text: y.intl.string(y.t.ItpQxk),
                            fullWidth: !0,
                            variant: "primary",
                            disabled: p,
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
function R(e) {
    let { className: t } = e;
    return "light" === (0, c.bG)([f.A], () => f.A.theme)
        ? (0, i.jsx)(x._V3, { className: t, src: A, width: 55, height: 38 })
        : (0, i.jsx)(x._V3, { className: t, src: N, width: 55, height: 38 });
}
let k = function (e) {
    let { onClose: t, onShare: s } = e,
        r = (0, c.bG)([j.A], () => j.A.getReferralsRemaining()),
        [n, h] = a.useState(""),
        f = (0, p.A)(n, 400),
        [u, g] = a.useState(new Map()),
        [A, S] = a.useState(!1),
        {
            eligibleUsers: w,
            fetchUsers: N,
            hasError: R,
            isFetching: k,
            resendUsers: B,
        } = (0, m.i)({ searchQuery: f, selectedUsers: u }),
        O = a.useMemo(() => [...u.keys()].filter((e) => !B.has(e)), [u, B]);
    C()(null != r, "Referrals remaining should not be null");
    let G = (0, d.K)((e) => {
        e && !k && N();
    });
    if (R) return (0, i.jsx)(E, { onClose: t });
    if (0 === r) return (0, i.jsx)(M, { onShare: s });
    let D = f.length > 0 && 0 === w.length;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: l()(v.wx, v.HE),
                children: [
                    D ? (0, i.jsx)(U, {}) : (0, i.jsx)(F, { numOfSelectedUsers: O.length, anySelected: u.size > 0 }),
                    (0, i.jsx)(x.iS7, {
                        selectionMode: "multiple",
                        value: Array.from(u.values()),
                        options: w,
                        formatOption: (e) => ({ id: e.id, value: e, label: _.Ay.getName(e) }),
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
                                placeholder: 0 === u.size ? y.intl.string(y.t.Kd5RaI) : "",
                                onQueryChange: (e) => {
                                    h(e.target.value);
                                },
                            }),
                        }),
                    }),
                ],
            }),
            D
                ? (0, i.jsx)(b, {})
                : (0, i.jsxs)(o.ArX, {
                      className: v.p_,
                      children: [
                          w.map((e) =>
                              (0, i.jsx)(
                                  L.A,
                                  {
                                      disabled:
                                          [...u.values()].filter((e) => !B.has(e.id)).length >= r &&
                                          !u.has(e.id) &&
                                          !B.has(e.id),
                                      checked: u.has(e.id),
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
                          (0, i.jsx)("div", { ref: G }),
                      ],
                  }),
            (0, i.jsx)("div", {
                className: l()(v.qr, v.h0),
                children: (0, i.jsx)("div", {
                    className: v.tA,
                    children: (0, i.jsx)(o.$nd, {
                        variant: "primary",
                        fullWidth: !0,
                        text: D ? y.intl.string(y.t.wpSqAW) : y.intl.string(y.t.ItpQxk),
                        disabled: (0 === u.size && !D) || A,
                        onClick: async () => {
                            D ? t() : (S(!0), await s([...u.values()]), S(!1));
                        },
                    }),
                }),
            }),
        ],
    });
};
