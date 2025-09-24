r.d(t, { ZP: () => k }), r(388685), r(953529), r(539854);
var a = r(951288),
    i = r(647438),
    s = r(120356),
    n = r.n(s),
    l = r(512722),
    o = r.n(l),
    C = r(793030),
    d = r(442837),
    c = r(755721),
    x = r(481060),
    p = r(232567),
    h = r(794433),
    f = r(480466),
    u = r(434650),
    m = r(210887),
    j = r(51144),
    _ = r(281494),
    g = r(276444),
    L = r(955839),
    y = r(514020),
    v = r(529840),
    S = r(388032),
    b = r(107785),
    w = r(724531),
    N = r(99713),
    Z = r(334202),
    F = r(7234);
function O(e) {
    let { numOfSelectedUsers: t, anySelected: r } = e,
        i = (0, y.Z)({
            numNewSelected: t,
            anySelected: r,
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: b.title,
                children: [
                    (0, a.jsx)(B, { className: b.titleImage }),
                    (0, a.jsx)(x.X6q, {
                        variant: "heading-xl/bold",
                        children: S.intl.string(S.t.Lm2nFR),
                    }),
                ],
            }),
            (0, a.jsx)(x.Text, {
                className: b.description,
                variant: "text-md/medium",
                color: "header-secondary",
                children: i,
            }),
        ],
    });
}
function E() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: b.title,
                children: (0, a.jsx)(x.X6q, {
                    variant: "heading-xl/bold",
                    children: S.intl.string(S.t["PFp+aG"]),
                }),
            }),
            (0, a.jsx)(x.Text, {
                className: b.description,
                variant: "text-md/medium",
                color: "header-secondary",
                children: S.intl.string(S.t.eBIGBw),
            }),
        ],
    });
}
function U() {
    return (0, a.jsx)("div", {
        className: b.erroredContent,
        children: (0, a.jsx)(x.Eep, {
            src: Z,
            width: 225,
            height: 160,
        }),
    });
}
function R(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)("div", {
        className: b.erroredContainer,
        children: [
            (0, a.jsxs)("div", {
                className: n()(b.erroredHeader, b.headerSeparator),
                children: [
                    (0, a.jsx)("div", {
                        className: b.title,
                        children: (0, a.jsx)(x.X6q, {
                            variant: "heading-xl/bold",
                            children: S.intl.string(S.t.a9HOKi),
                        }),
                    }),
                    (0, a.jsx)(x.Text, {
                        className: b.description,
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: S.intl.string(S.t.JjjeZW),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: b.erroredContent,
                children: (0, a.jsx)(x.Eep, {
                    src: N,
                    width: 178,
                    height: 190,
                }),
            }),
            (0, a.jsx)("div", {
                className: n()(b.footer, b.footerSeparator),
                children: (0, a.jsx)(c.zx, {
                    "data-migration-pending": !0,
                    className: b.submit,
                    onClick: () => t(),
                    children: S.intl.string(S.t.wpSqAQ),
                }),
            }),
        ],
    });
}
function M(e) {
    let { onShare: t } = e,
        r = (0, d.e7)([g.Z], () => g.Z.getRecipientStatus()),
        [s, l] = i.useState([]),
        [o, C] = i.useState(new Set()),
        [h, f] = i.useState(!1);
    return (
        i.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, a] of r)
                    if (a === _.Fe.PENDING) {
                        let r = await (0, p.PR)(t);
                        e.push(r);
                    }
                l(e);
            })();
        }, [r]),
        (0, a.jsxs)("div", {
            className: b.remindContainer,
            children: [
                (0, a.jsxs)("div", {
                    className: n()(b.remindHeader, b.headerSeparator),
                    children: [
                        (0, a.jsxs)("div", {
                            className: b.title,
                            children: [
                                (0, a.jsx)(B, { className: b.titleImage }),
                                (0, a.jsx)(x.X6q, {
                                    variant: "heading-xl/bold",
                                    children: S.intl.string(S.t.SY9tyM),
                                }),
                            ],
                        }),
                        (0, a.jsx)(x.Text, {
                            className: b.description,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: S.intl.string(S.t.mPmPrq),
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: b.list,
                    children: s.map((e) =>
                        (0, a.jsx)(
                            v.Z,
                            {
                                user: e,
                                checked: o.has(e),
                                onChange: (e, t) => {
                                    C((r) => {
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
                    className: n()(b.footer, b.footerSeparator),
                    children: (0, a.jsx)(c.zx, {
                        "data-migration-pending": !0,
                        className: b.submit,
                        disabled: h,
                        onClick: async () => {
                            f(!0), await t([...o.values()]), f(!1);
                        },
                        children: S.intl.string(S.t.ItpQxs),
                    }),
                }),
            ],
        })
    );
}
function B(e) {
    let { className: t } = e;
    return "light" === (0, d.e7)([m.Z], () => m.Z.theme)
        ? (0, a.jsx)(x.Eep, {
              className: t,
              src: w,
              width: 55,
              height: 38,
          })
        : (0, a.jsx)(x.Eep, {
              className: t,
              src: F,
              width: 55,
              height: 38,
          });
}
let k = function (e) {
    let { onClose: t, onShare: r } = e,
        s = (0, d.e7)([g.Z], () => g.Z.getReferralsRemaining()),
        [l, p] = i.useState(""),
        m = (0, f.Z)(l, 400),
        [_, y] = i.useState(new Map()),
        [w, N] = i.useState(!1),
        {
            eligibleUsers: Z,
            fetchUsers: F,
            hasError: B,
            isFetching: k,
            resendUsers: A,
        } = (0, L.q)({
            searchQuery: m,
            selectedUsers: _,
        }),
        P = i.useMemo(() => [..._.keys()].filter((e) => !A.has(e)), [_, A]);
    o()(null != s, "Referrals remaining should not be null");
    let G = (0, u.O)((e) => {
        e && !k && F();
    });
    if (B) return (0, a.jsx)(R, { onClose: t });
    if (0 === s) return (0, a.jsx)(M, { onShare: r });
    let I = m.length > 0 && 0 === Z.length;
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)("div", {
                className: n()(b.header, b.headerSeparator),
                children: [
                    I
                        ? (0, a.jsx)(E, {})
                        : (0, a.jsx)(O, {
                              numOfSelectedUsers: P.length,
                              anySelected: _.size > 0,
                          }),
                    (0, a.jsx)(h.Z, {
                        className: b.searchbar,
                        size: h.Z.Sizes.MEDIUM,
                        tags: [..._.values()].map((e) => j.ZP.getName(e)),
                        placeholder: S.intl.string(S.t.Kd5RaG),
                        query: l,
                        onRemoveTag: (e) => {
                            y((t) => {
                                let r = [...t.values()][e],
                                    a = new Map(t);
                                return a.delete(r.id), a;
                            });
                        },
                        onQueryChange: p,
                    }),
                ],
            }),
            I
                ? (0, a.jsx)(U, {})
                : (0, a.jsxs)(C.w0Z, {
                      className: b.list,
                      children: [
                          Z.map((e) =>
                              (0, a.jsx)(
                                  v.Z,
                                  {
                                      disabled:
                                          [..._.values()].filter((e) => !A.has(e.id)).length >= s &&
                                          !_.has(e.id) &&
                                          !A.has(e.id),
                                      checked: _.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          y((r) => {
                                              let a = new Map(r);
                                              return t ? a.set(e.id, e) : a.delete(e.id), a;
                                          });
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                          k && (0, a.jsx)(x.$jN, {}),
                          (0, a.jsx)("div", { ref: G }),
                      ],
                  }),
            (0, a.jsx)("div", {
                className: n()(b.footer, b.footerSeparator),
                children: (0, a.jsx)(c.zx, {
                    "data-migration-pending": !0,
                    className: b.submit,
                    disabled: (0 === _.size && !I) || w,
                    onClick: async () => {
                        if (I) return void t();
                        N(!0), await r([..._.values()]), N(!1);
                    },
                    children: I ? S.intl.string(S.t.wpSqAQ) : S.intl.string(S.t.ItpQxs),
                }),
            }),
        ],
    });
};
