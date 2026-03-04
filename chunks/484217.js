s.d(t, { Ay: () => B }), s(321073);
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
    _ = s(994500),
    u = s(427262),
    j = s(326084),
    m = s(851746),
    g = s(972007),
    L = s(509870),
    y = s(211145),
    v = s(985018),
    A = s(558837),
    S = s(131265),
    w = s(556011),
    N = s(469961),
    F = s(172944);
function U(e) {
    let { numOfSelectedUsers: t, anySelected: s } = e,
        a = (0, L.A)({ numNewSelected: t, anySelected: s });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: A.DD,
                children: [
                    (0, i.jsx)(R, { className: A.oc }),
                    (0, i.jsx)(x.Heading, { variant: "heading-xl/bold", children: v.intl.string(v.t.Lm2nFc) }),
                ],
            }),
            (0, i.jsx)(x.Text, { className: A.h_, variant: "text-md/medium", color: "text-default", children: a }),
        ],
    });
}
function b() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: A.DD,
                children: (0, i.jsx)(x.Heading, { variant: "heading-xl/bold", children: v.intl.string(v.t["PFp+aJ"]) }),
            }),
            (0, i.jsx)(x.Text, {
                className: A.h_,
                variant: "text-md/medium",
                color: "text-default",
                children: v.intl.string(v.t.eBIGB4),
            }),
        ],
    });
}
function E() {
    return (0, i.jsx)("div", { className: A.JM, children: (0, i.jsx)(x._V3, { src: N, width: 225, height: 160 }) });
}
function M(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)("div", {
        className: A.LK,
        children: [
            (0, i.jsxs)("div", {
                className: l()(A.tU, A.HE),
                children: [
                    (0, i.jsx)("div", {
                        className: A.DD,
                        children: (0, i.jsx)(x.Heading, {
                            variant: "heading-xl/bold",
                            children: v.intl.string(v.t.a9HOKg),
                        }),
                    }),
                    (0, i.jsx)(x.Text, {
                        className: A.h_,
                        variant: "text-md/medium",
                        color: "text-default",
                        children: v.intl.string(v.t.JjjeZb),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: A.JM, children: (0, i.jsx)(x._V3, { src: w, width: 178, height: 190 }) }),
            (0, i.jsx)("div", {
                className: l()(A.qr, A.h0),
                children: (0, i.jsx)("div", {
                    className: A.tA,
                    children: (0, i.jsx)(o.$nd, {
                        variant: "primary",
                        fullWidth: !0,
                        text: v.intl.string(v.t.wpSqAW),
                        onClick: () => t(),
                    }),
                }),
            }),
        ],
    });
}
function k(e) {
    let { onShare: t } = e,
        s = (0, c.bG)([m.A], () => m.A.getRecipientStatus()),
        [r, n] = a.useState([]),
        [C, d] = a.useState(new Set()),
        [p, f] = a.useState(!1);
    return (
        a.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, i] of s)
                    if (!_.A.isBlockedOrIgnored(t) && i === j.aK.PENDING) {
                        let s = await (0, h.wz)(t);
                        e.push(s);
                    }
                n(e);
            })();
        }, [s]),
        (0, i.jsxs)("div", {
            className: A.Dy,
            children: [
                (0, i.jsxs)("div", {
                    className: l()(A.hi, A.HE),
                    children: [
                        (0, i.jsxs)("div", {
                            className: A.DD,
                            children: [
                                (0, i.jsx)(R, { className: A.oc }),
                                (0, i.jsx)(x.Heading, {
                                    variant: "heading-xl/bold",
                                    children: v.intl.string(v.t.SY9tyI),
                                }),
                            ],
                        }),
                        (0, i.jsx)(x.Text, {
                            className: A.h_,
                            variant: "text-md/medium",
                            color: "text-default",
                            children: v.intl.string(v.t.mPmPri),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: A.p_,
                    children: r.map((e) =>
                        (0, i.jsx)(
                            y.A,
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
                    className: l()(A.qr, A.h0),
                    children: (0, i.jsx)("div", {
                        className: A.tA,
                        children: (0, i.jsx)(o.$nd, {
                            text: v.intl.string(v.t.ItpQxk),
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
        ? (0, i.jsx)(x._V3, { className: t, src: S, width: 55, height: 38 })
        : (0, i.jsx)(x._V3, { className: t, src: F, width: 55, height: 38 });
}
let B = function (e) {
    let { onClose: t, onShare: s } = e,
        r = (0, c.bG)([m.A], () => m.A.getReferralsRemaining()),
        [n, h] = a.useState(""),
        f = (0, p.A)(n, 400),
        [_, j] = a.useState(new Map()),
        [L, S] = a.useState(!1),
        {
            eligibleUsers: w,
            fetchUsers: N,
            hasError: F,
            isFetching: R,
            resendUsers: B,
        } = (0, g.i)({ searchQuery: f, selectedUsers: _ }),
        O = a.useMemo(() => [..._.keys()].filter((e) => !B.has(e)), [_, B]);
    C()(null != r, "Referrals remaining should not be null");
    let G = (0, d.K)((e) => {
        e && !R && N();
    });
    if (F) return (0, i.jsx)(M, { onClose: t });
    if (0 === r) return (0, i.jsx)(k, { onShare: s });
    let D = f.length > 0 && 0 === w.length;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: l()(A.wx, A.HE),
                children: [
                    D ? (0, i.jsx)(b, {}) : (0, i.jsx)(U, { numOfSelectedUsers: O.length, anySelected: _.size > 0 }),
                    (0, i.jsx)(x.iS7, {
                        selectionMode: "multiple",
                        value: Array.from(_.values()),
                        options: w,
                        formatOption: (e) => ({ id: e.id, value: e, label: u.Ay.getName(e) }),
                        onSelectionChange: (e) => {
                            let t = Array.isArray(e) ? e : [e],
                                s = new Map();
                            t.forEach((e) => {
                                null != e && s.set(e.id, e);
                            }),
                                j(s);
                        },
                        children: (0, i.jsx)("div", {
                            className: A.c,
                            children: (0, i.jsx)(x.a32, {
                                placeholder: 0 === _.size ? v.intl.string(v.t.Kd5RaI) : "",
                                onQueryChange: (e) => {
                                    h(e.target.value);
                                },
                            }),
                        }),
                    }),
                ],
            }),
            D
                ? (0, i.jsx)(E, {})
                : (0, i.jsxs)(o.ArX, {
                      className: A.p_,
                      children: [
                          w.map((e) =>
                              (0, i.jsx)(
                                  y.A,
                                  {
                                      disabled:
                                          [..._.values()].filter((e) => !B.has(e.id)).length >= r &&
                                          !_.has(e.id) &&
                                          !B.has(e.id),
                                      checked: _.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          j((s) => {
                                              let i = new Map(s);
                                              return t ? i.set(e.id, e) : i.delete(e.id), i;
                                          });
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                          R && (0, i.jsx)(x.y$y, {}),
                          (0, i.jsx)("div", { ref: G }),
                      ],
                  }),
            (0, i.jsx)("div", {
                className: l()(A.qr, A.h0),
                children: (0, i.jsx)("div", {
                    className: A.tA,
                    children: (0, i.jsx)(o.$nd, {
                        variant: "primary",
                        fullWidth: !0,
                        text: D ? v.intl.string(v.t.wpSqAW) : v.intl.string(v.t.ItpQxk),
                        disabled: (0 === _.size && !D) || L,
                        onClick: async () => {
                            D ? t() : (S(!0), await s([..._.values()]), S(!1));
                        },
                    }),
                }),
            }),
        ],
    });
};
