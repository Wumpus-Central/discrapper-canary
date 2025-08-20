n.d(t, {
    ZP: () => V,
    d: () => U,
    ih: () => k,
}),
    n(388685),
    n(953529),
    n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(597312),
    u = n(442837),
    d = n(755721),
    f = n(481060),
    _ = n(232567),
    p = n(794433),
    h = n(480466),
    m = n(434650),
    g = n(210887),
    E = n(51144),
    b = n(281494),
    y = n(276444),
    O = n(955839),
    v = n(514020),
    I = n(529840),
    T = n(388032),
    S = n(107785),
    A = n(724531),
    C = n(99713),
    N = n(334202),
    R = n(7234);
let P = 38,
    w = 55,
    D = 190,
    x = 178,
    L = 225,
    j = 160;
function M(e) {
    let { numOfSelectedUsers: t, anySelected: n } = e,
        i = (0, v.Z)({
            numNewSelected: t,
            anySelected: n,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.title,
                children: [
                    (0, r.jsx)(Z, { className: S.titleImage }),
                    (0, r.jsx)(f.X6q, {
                        variant: "heading-xl/bold",
                        children: T.intl.string(T.t.Lm2nFR),
                    }),
                ],
            }),
            (0, r.jsx)(f.Text, {
                className: S.description,
                variant: "text-md/medium",
                color: "header-secondary",
                children: i,
            }),
        ],
    });
}
function k() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: S.title,
                children: (0, r.jsx)(f.X6q, {
                    variant: "heading-xl/bold",
                    children: T.intl.string(T.t["PFp+aG"]),
                }),
            }),
            (0, r.jsx)(f.Text, {
                className: S.description,
                variant: "text-md/medium",
                color: "header-secondary",
                children: T.intl.string(T.t.eBIGBw),
            }),
        ],
    });
}
function U() {
    return (0, r.jsx)("div", {
        className: S.erroredContent,
        children: (0, r.jsx)(f.Eep, {
            src: N,
            width: L,
            height: j,
        }),
    });
}
function G(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)("div", {
        className: S.erroredContainer,
        children: [
            (0, r.jsxs)("div", {
                className: o()(S.erroredHeader, S.headerSeparator),
                children: [
                    (0, r.jsx)("div", {
                        className: S.title,
                        children: (0, r.jsx)(f.X6q, {
                            variant: "heading-xl/bold",
                            children: T.intl.string(T.t.a9HOKi),
                        }),
                    }),
                    (0, r.jsx)(f.Text, {
                        className: S.description,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: T.intl.string(T.t.JjjeZW),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: S.erroredContent,
                children: (0, r.jsx)(f.Eep, {
                    src: C,
                    width: x,
                    height: D,
                }),
            }),
            (0, r.jsx)("div", {
                className: o()(S.footer, S.footerSeparator),
                children: (0, r.jsx)(d.zx, {
                    "data-migration-pending": !0,
                    className: S.submit,
                    onClick: () => t(),
                    children: T.intl.string(T.t.wpSqAQ),
                }),
            }),
        ],
    });
}
function B(e) {
    let { onShare: t } = e,
        n = (0, u.e7)([y.Z], () => y.Z.getRecipientStatus()),
        [a, s] = i.useState([]),
        [l, c] = i.useState(new Set()),
        [p, h] = i.useState(!1);
    return (
        i.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, r] of n)
                    if (r === b.Fe.PENDING) {
                        let n = await (0, _.PR)(t);
                        e.push(n);
                    }
                s(e);
            })();
        }, [n]),
        (0, r.jsxs)("div", {
            className: S.remindContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: o()(S.remindHeader, S.headerSeparator),
                    children: [
                        (0, r.jsxs)("div", {
                            className: S.title,
                            children: [
                                (0, r.jsx)(Z, { className: S.titleImage }),
                                (0, r.jsx)(f.X6q, {
                                    variant: "heading-xl/bold",
                                    children: T.intl.string(T.t.SY9tyM),
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.Text, {
                            className: S.description,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: T.intl.string(T.t.mPmPrq),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: S.list,
                    children: a.map((e) =>
                        (0, r.jsx)(
                            I.Z,
                            {
                                user: e,
                                checked: l.has(e),
                                onChange: (e, t) => {
                                    c((n) => {
                                        let r = new Set(n);
                                        return t ? r.add(e) : r.delete(e), r;
                                    });
                                },
                            },
                            e.id,
                        ),
                    ),
                }),
                (0, r.jsx)("div", {
                    className: o()(S.footer, S.footerSeparator),
                    children: (0, r.jsx)(d.zx, {
                        "data-migration-pending": !0,
                        className: S.submit,
                        disabled: p,
                        onClick: async () => {
                            h(!0), await t([...l.values()]), h(!1);
                        },
                        children: T.intl.string(T.t.ItpQxs),
                    }),
                }),
            ],
        })
    );
}
function Z(e) {
    let { className: t } = e;
    return "light" === (0, u.e7)([g.Z], () => g.Z.theme)
        ? (0, r.jsx)(f.Eep, {
              className: t,
              src: A,
              width: w,
              height: P,
          })
        : (0, r.jsx)(f.Eep, {
              className: t,
              src: R,
              width: w,
              height: P,
          });
}
let V = function (e) {
    let { onClose: t, onShare: n } = e,
        a = (0, u.e7)([y.Z], () => y.Z.getReferralsRemaining()),
        [s, _] = i.useState(""),
        g = (0, h.Z)(s, 400),
        [b, v] = i.useState(new Map()),
        [A, C] = i.useState(!1),
        {
            eligibleUsers: N,
            fetchUsers: R,
            hasError: P,
            isFetching: w,
            resendUsers: D,
        } = (0, O.q)({
            searchQuery: g,
            selectedUsers: b,
        }),
        x = i.useMemo(() => [...b.keys()].filter((e) => !D.has(e)), [b, D]);
    l()(null != a, "Referrals remaining should not be null");
    let L = (0, m.O)((e) => {
        e && !w && R();
    });
    if (P) return (0, r.jsx)(G, { onClose: t });
    if (0 === a) return (0, r.jsx)(B, { onShare: n });
    let j = g.length > 0 && 0 === N.length;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: o()(S.header, S.headerSeparator),
                children: [
                    j
                        ? (0, r.jsx)(k, {})
                        : (0, r.jsx)(M, {
                              numOfSelectedUsers: x.length,
                              anySelected: b.size > 0,
                          }),
                    (0, r.jsx)(p.Z, {
                        className: S.searchbar,
                        size: p.Z.Sizes.MEDIUM,
                        tags: [...b.values()].map((e) => E.ZP.getName(e)),
                        placeholder: T.intl.string(T.t.Kd5RaG),
                        query: s,
                        onRemoveTag: (e) => {
                            v((t) => {
                                let n = [...t.values()][e],
                                    r = new Map(t);
                                return r.delete(n.id), r;
                            });
                        },
                        onQueryChange: _,
                    }),
                ],
            }),
            j
                ? (0, r.jsx)(U, {})
                : (0, r.jsxs)(c.w0, {
                      className: S.list,
                      children: [
                          N.map((e) =>
                              (0, r.jsx)(
                                  I.Z,
                                  {
                                      disabled:
                                          [...b.values()].filter((e) => !D.has(e.id)).length >= a &&
                                          !b.has(e.id) &&
                                          !D.has(e.id),
                                      checked: b.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          v((n) => {
                                              let r = new Map(n);
                                              return t ? r.set(e.id, e) : r.delete(e.id), r;
                                          });
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                          w && (0, r.jsx)(f.$jN, {}),
                          (0, r.jsx)("div", { ref: L }),
                      ],
                  }),
            (0, r.jsx)("div", {
                className: o()(S.footer, S.footerSeparator),
                children: (0, r.jsx)(d.zx, {
                    "data-migration-pending": !0,
                    className: S.submit,
                    disabled: (0 === b.size && !j) || A,
                    onClick: async () => {
                        if (j) return void t();
                        C(!0), await n([...b.values()]), C(!1);
                    },
                    children: j ? T.intl.string(T.t.wpSqAQ) : T.intl.string(T.t.ItpQxs),
                }),
            }),
        ],
    });
};
