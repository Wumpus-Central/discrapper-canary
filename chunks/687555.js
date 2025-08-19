r.d(t, {
    ZP: () => T,
    d: () => I,
    ih: () => M,
}),
    r(388685),
    r(953529),
    r(539854);
var a = r(951288),
    s = r(647438),
    n = r(120356),
    i = r.n(n),
    l = r(512722),
    c = r.n(l),
    d = r(597312),
    o = r(442837),
    u = r(755721),
    m = r(481060),
    h = r(232567),
    f = r(794433),
    x = r(480466),
    g = r(434650),
    p = r(210887),
    j = r(51144),
    v = r(281494),
    N = r(276444),
    R = r(955839),
    b = r(514020),
    E = r(529840),
    S = r(388032),
    y = r(107785),
    Z = r(724531),
    w = r(99713),
    C = r(334202),
    P = r(7234);
function O(e) {
    let { numOfSelectedUsers: t, anySelected: r } = e,
        s = (0, b.Z)({
            numNewSelected: t,
            anySelected: r,
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: y.title,
                children: [
                    (0, a.jsx)(F, { className: y.titleImage }),
                    (0, a.jsx)(m.X6q, {
                        variant: "heading-xl/bold",
                        children: S.intl.string(S.t.Lm2nFR),
                    }),
                ],
            }),
            (0, a.jsx)(m.Text, {
                className: y.description,
                variant: "text-md/medium",
                color: "header-secondary",
                children: s,
            }),
        ],
    });
}
function M() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: y.title,
                children: (0, a.jsx)(m.X6q, {
                    variant: "heading-xl/bold",
                    children: S.intl.string(S.t["PFp+aG"]),
                }),
            }),
            (0, a.jsx)(m.Text, {
                className: y.description,
                variant: "text-md/medium",
                color: "header-secondary",
                children: S.intl.string(S.t.eBIGBw),
            }),
        ],
    });
}
function I() {
    return (0, a.jsx)("div", {
        className: y.erroredContent,
        children: (0, a.jsx)(m.Eep, {
            src: C,
            width: 225,
            height: 160,
        }),
    });
}
function z(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)("div", {
        className: y.erroredContainer,
        children: [
            (0, a.jsxs)("div", {
                className: i()(y.erroredHeader, y.headerSeparator),
                children: [
                    (0, a.jsx)("div", {
                        className: y.title,
                        children: (0, a.jsx)(m.X6q, {
                            variant: "heading-xl/bold",
                            children: S.intl.string(S.t.a9HOKi),
                        }),
                    }),
                    (0, a.jsx)(m.Text, {
                        className: y.description,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: S.intl.string(S.t.JjjeZW),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: y.erroredContent,
                children: (0, a.jsx)(m.Eep, {
                    src: w,
                    width: 178,
                    height: 190,
                }),
            }),
            (0, a.jsx)("div", {
                className: i()(y.footer, y.footerSeparator),
                children: (0, a.jsx)(u.zx, {
                    "data-migration-pending": !0,
                    className: y.submit,
                    onClick: () => t(),
                    children: S.intl.string(S.t.wpSqAQ),
                }),
            }),
        ],
    });
}
function A(e) {
    let { onShare: t } = e,
        r = (0, o.e7)([N.Z], () => N.Z.getRecipientStatus()),
        [n, l] = s.useState([]),
        [c, d] = s.useState(new Set()),
        [f, x] = s.useState(!1);
    return (
        s.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, a] of r)
                    if (a === v.Fe.PENDING) {
                        let r = await (0, h.PR)(t);
                        e.push(r);
                    }
                l(e);
            })();
        }, [r]),
        (0, a.jsxs)("div", {
            className: y.remindContainer,
            children: [
                (0, a.jsxs)("div", {
                    className: i()(y.remindHeader, y.headerSeparator),
                    children: [
                        (0, a.jsxs)("div", {
                            className: y.title,
                            children: [
                                (0, a.jsx)(F, { className: y.titleImage }),
                                (0, a.jsx)(m.X6q, {
                                    variant: "heading-xl/bold",
                                    children: S.intl.string(S.t.SY9tyM),
                                }),
                            ],
                        }),
                        (0, a.jsx)(m.Text, {
                            className: y.description,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: S.intl.string(S.t.mPmPrq),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: y.list,
                    children: n.map((e) =>
                        (0, a.jsx)(
                            E.Z,
                            {
                                user: e,
                                checked: c.has(e),
                                onChange: (e, t) => {
                                    d((r) => {
                                        let a = new Set(r);
                                        return t ? a.add(e) : a.delete(e), a;
                                    });
                                },
                            },
                            e.id,
                        ),
                    ),
                }),
                (0, a.jsx)("div", {
                    className: i()(y.footer, y.footerSeparator),
                    children: (0, a.jsx)(u.zx, {
                        "data-migration-pending": !0,
                        className: y.submit,
                        disabled: f,
                        onClick: async () => {
                            x(!0), await t([...c.values()]), x(!1);
                        },
                        children: S.intl.string(S.t.ItpQxs),
                    }),
                }),
            ],
        })
    );
}
function F(e) {
    let { className: t } = e;
    return "light" === (0, o.e7)([p.Z], () => p.Z.theme)
        ? (0, a.jsx)(m.Eep, {
              className: t,
              src: Z,
              width: 55,
              height: 38,
          })
        : (0, a.jsx)(m.Eep, {
              className: t,
              src: P,
              width: 55,
              height: 38,
          });
}
let T = function (e) {
    let { onClose: t, onShare: r } = e,
        n = (0, o.e7)([N.Z], () => N.Z.getReferralsRemaining()),
        [l, h] = s.useState(""),
        p = (0, x.Z)(l, 400),
        [v, b] = s.useState(new Map()),
        [Z, w] = s.useState(!1),
        {
            eligibleUsers: C,
            fetchUsers: P,
            hasError: F,
            isFetching: T,
            resendUsers: k,
        } = (0, R.q)({
            searchQuery: p,
            selectedUsers: v,
        }),
        D = s.useMemo(() => [...v.keys()].filter((e) => !k.has(e)), [v, k]);
    c()(null != n, "Referrals remaining should not be null");
    let _ = (0, g.O)((e) => {
        e && !T && P();
    });
    if (F) return (0, a.jsx)(z, { onClose: t });
    if (0 === n) return (0, a.jsx)(A, { onShare: r });
    let q = p.length > 0 && 0 === C.length;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)("div", {
                className: i()(y.header, y.headerSeparator),
                children: [
                    q
                        ? (0, a.jsx)(M, {})
                        : (0, a.jsx)(O, {
                              numOfSelectedUsers: D.length,
                              anySelected: v.size > 0,
                          }),
                    (0, a.jsx)(f.Z, {
                        className: y.searchbar,
                        size: f.Z.Sizes.MEDIUM,
                        tags: [...v.values()].map((e) => j.ZP.getName(e)),
                        placeholder: S.intl.string(S.t.Kd5RaG),
                        query: l,
                        onRemoveTag: (e) => {
                            b((t) => {
                                let r = [...t.values()][e],
                                    a = new Map(t);
                                return a.delete(r.id), a;
                            });
                        },
                        onQueryChange: h,
                    }),
                ],
            }),
            q
                ? (0, a.jsx)(I, {})
                : (0, a.jsxs)(d.w0, {
                      className: y.list,
                      children: [
                          C.map((e) =>
                              (0, a.jsx)(
                                  E.Z,
                                  {
                                      disabled:
                                          [...v.values()].filter((e) => !k.has(e.id)).length >= n &&
                                          !v.has(e.id) &&
                                          !k.has(e.id),
                                      checked: v.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          b((r) => {
                                              let a = new Map(r);
                                              return t ? a.set(e.id, e) : a.delete(e.id), a;
                                          });
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                          T && (0, a.jsx)(m.$jN, {}),
                          (0, a.jsx)("div", { ref: _ }),
                      ],
                  }),
            (0, a.jsx)("div", {
                className: i()(y.footer, y.footerSeparator),
                children: (0, a.jsx)(u.zx, {
                    "data-migration-pending": !0,
                    className: y.submit,
                    disabled: (0 === v.size && !q) || Z,
                    onClick: async () => {
                        if (q) return void t();
                        w(!0), await r([...v.values()]), w(!1);
                    },
                    children: q ? S.intl.string(S.t.wpSqAQ) : S.intl.string(S.t.ItpQxs),
                }),
            }),
        ],
    });
};
