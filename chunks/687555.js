s.d(t, {
    ZP: () => T,
    d: () => q,
    ih: () => k,
}),
    s(388685),
    s(953529),
    s(539854);
var r = s(255367),
    n = s(73800),
    a = s(120356),
    i = s.n(a),
    l = s(512722),
    c = s.n(l),
    d = s(597312),
    o = s(442837),
    u = s(755721),
    h = s(481060),
    m = s(232567),
    f = s(794433),
    x = s(480466),
    g = s(434650),
    j = s(210887),
    p = s(51144),
    v = s(281494),
    N = s(276444),
    S = s(955839),
    b = s(514020),
    w = s(529840),
    Z = s(388032),
    y = s(236237),
    P = s(724531),
    R = s(99713),
    E = s(334202),
    C = s(7234);
function I(e) {
    let { numOfSelectedUsers: t, anySelected: s } = e,
        n = (0, b.Z)({
            numNewSelected: t,
            anySelected: s,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: y.title,
                children: [
                    (0, r.jsx)(O, { className: y.titleImage }),
                    (0, r.jsx)(h.X6q, {
                        variant: "heading-xl/bold",
                        children: Z.intl.string(Z.t.Lm2nFR),
                    }),
                ],
            }),
            (0, r.jsx)(h.Text, {
                className: y.description,
                variant: "text-md/medium",
                color: "header-secondary",
                children: n,
            }),
        ],
    });
}
function k() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: y.title,
                children: (0, r.jsx)(h.X6q, {
                    variant: "heading-xl/bold",
                    children: Z.intl.string(Z.t["PFp+aG"]),
                }),
            }),
            (0, r.jsx)(h.Text, {
                className: y.description,
                variant: "text-md/medium",
                color: "header-secondary",
                children: Z.intl.string(Z.t.eBIGBw),
            }),
        ],
    });
}
function q() {
    return (0, r.jsx)("div", {
        className: y.erroredContent,
        children: (0, r.jsx)(h.Eep, {
            src: E,
            width: 225,
            height: 160,
        }),
    });
}
function F(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)("div", {
        className: y.erroredContainer,
        children: [
            (0, r.jsxs)("div", {
                className: i()(y.erroredHeader, y.headerSeparator),
                children: [
                    (0, r.jsx)("div", {
                        className: y.title,
                        children: (0, r.jsx)(h.X6q, {
                            variant: "heading-xl/bold",
                            children: Z.intl.string(Z.t.a9HOKi),
                        }),
                    }),
                    (0, r.jsx)(h.Text, {
                        className: y.description,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: Z.intl.string(Z.t.JjjeZW),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: y.erroredContent,
                children: (0, r.jsx)(h.Eep, {
                    src: R,
                    width: 178,
                    height: 190,
                }),
            }),
            (0, r.jsx)("div", {
                className: i()(y.footer, y.footerSeparator),
                children: (0, r.jsx)(u.zx, {
                    className: y.submit,
                    onClick: () => t(),
                    children: Z.intl.string(Z.t.wpSqAQ),
                }),
            }),
        ],
    });
}
function M(e) {
    let { onShare: t } = e,
        s = (0, o.e7)([N.Z], () => N.Z.getRecipientStatus()),
        [a, l] = n.useState([]),
        [c, d] = n.useState(new Set()),
        [f, x] = n.useState(!1);
    return (
        n.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, r] of s)
                    if (r === v.Fe.PENDING) {
                        let s = await (0, m.PR)(t);
                        e.push(s);
                    }
                l(e);
            })();
        }, [s]),
        (0, r.jsxs)("div", {
            className: y.remindContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: i()(y.remindHeader, y.headerSeparator),
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.title,
                            children: [
                                (0, r.jsx)(O, { className: y.titleImage }),
                                (0, r.jsx)(h.X6q, {
                                    variant: "heading-xl/bold",
                                    children: Z.intl.string(Z.t.SY9tyM),
                                }),
                            ],
                        }),
                        (0, r.jsx)(h.Text, {
                            className: y.description,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: Z.intl.string(Z.t.mPmPrq),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: y.list,
                    children: a.map((e) =>
                        (0, r.jsx)(
                            w.Z,
                            {
                                user: e,
                                checked: c.has(e),
                                onChange: (e, t) => {
                                    d((s) => {
                                        let r = new Set(s);
                                        return t ? r.add(e) : r.delete(e), r;
                                    });
                                },
                            },
                            e.id,
                        ),
                    ),
                }),
                (0, r.jsx)("div", {
                    className: i()(y.footer, y.footerSeparator),
                    children: (0, r.jsx)(u.zx, {
                        className: y.submit,
                        disabled: f,
                        onClick: async () => {
                            x(!0), await t([...c.values()]), x(!1);
                        },
                        children: Z.intl.string(Z.t.ItpQxs),
                    }),
                }),
            ],
        })
    );
}
function O(e) {
    let { className: t } = e;
    return "light" === (0, o.e7)([j.Z], () => j.Z.theme)
        ? (0, r.jsx)(h.Eep, {
              className: t,
              src: P,
              width: 55,
              height: 38,
          })
        : (0, r.jsx)(h.Eep, {
              className: t,
              src: C,
              width: 55,
              height: 38,
          });
}
let T = function (e) {
    let { onClose: t, onShare: s } = e,
        a = (0, o.e7)([N.Z], () => N.Z.getReferralsRemaining()),
        [l, m] = n.useState(""),
        j = (0, x.Z)(l, 400),
        [v, b] = n.useState(new Map()),
        [P, R] = n.useState(!1),
        {
            eligibleUsers: E,
            fetchUsers: C,
            hasError: O,
            isFetching: T,
            resendUsers: z,
        } = (0, S.q)({
            searchQuery: j,
            selectedUsers: v,
        }),
        G = n.useMemo(() => [...v.keys()].filter((e) => !z.has(e)), [v, z]);
    c()(null != a, "Referrals remaining should not be null");
    let Q = (0, g.O)((e) => {
        e && !T && C();
    });
    if (O) return (0, r.jsx)(F, { onClose: t });
    if (0 === a) return (0, r.jsx)(M, { onShare: s });
    let D = j.length > 0 && 0 === E.length;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: i()(y.header, y.headerSeparator),
                children: [
                    D
                        ? (0, r.jsx)(k, {})
                        : (0, r.jsx)(I, {
                              numOfSelectedUsers: G.length,
                              anySelected: v.size > 0,
                          }),
                    (0, r.jsx)(f.Z, {
                        className: y.searchbar,
                        size: f.Z.Sizes.MEDIUM,
                        tags: [...v.values()].map((e) => p.ZP.getName(e)),
                        placeholder: Z.intl.string(Z.t.Kd5RaG),
                        query: l,
                        onRemoveTag: (e) => {
                            b((t) => {
                                let s = [...t.values()][e],
                                    r = new Map(t);
                                return r.delete(s.id), r;
                            });
                        },
                        onQueryChange: m,
                    }),
                ],
            }),
            D
                ? (0, r.jsx)(q, {})
                : (0, r.jsxs)(d.w0, {
                      className: y.list,
                      children: [
                          E.map((e) =>
                              (0, r.jsx)(
                                  w.Z,
                                  {
                                      disabled:
                                          [...v.values()].filter((e) => !z.has(e.id)).length >= a &&
                                          !v.has(e.id) &&
                                          !z.has(e.id),
                                      checked: v.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          b((s) => {
                                              let r = new Map(s);
                                              return t ? r.set(e.id, e) : r.delete(e.id), r;
                                          });
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                          T && (0, r.jsx)(h.$jN, {}),
                          (0, r.jsx)("div", { ref: Q }),
                      ],
                  }),
            (0, r.jsx)("div", {
                className: i()(y.footer, y.footerSeparator),
                children: (0, r.jsx)(u.zx, {
                    className: y.submit,
                    disabled: (0 === v.size && !D) || P,
                    onClick: async () => {
                        if (D) return void t();
                        R(!0), await s([...v.values()]), R(!1);
                    },
                    children: D ? Z.intl.string(Z.t.wpSqAQ) : Z.intl.string(Z.t.ItpQxs),
                }),
            }),
        ],
    });
};
