a.d(t, { ZP: () => k }), a(388685), a(953529), a(539854);
var r = a(54381),
    i = a(473749),
    s = a(120356),
    n = a.n(s),
    l = a(512722),
    d = a.n(l),
    o = a(907331),
    C = a(793030),
    c = a(442837),
    x = a(481060),
    p = a(232567),
    f = a(480466),
    h = a(210887),
    u = a(51144),
    j = a(281494),
    m = a(276444),
    _ = a(955839),
    g = a(514020),
    L = a(529840),
    y = a(388032),
    v = a(639236),
    b = a(724531),
    S = a(99713),
    w = a(334202),
    N = a(7234);
function Z(e) {
    let { numOfSelectedUsers: t, anySelected: a } = e,
        i = (0, g.Z)({
            numNewSelected: t,
            anySelected: a,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: v.title,
                children: [
                    (0, r.jsx)(R, { className: v.titleImage }),
                    (0, r.jsx)(x.Heading, {
                        variant: "heading-xl/bold",
                        children: y.intl.string(y.t.Lm2nFc),
                    }),
                ],
            }),
            (0, r.jsx)(x.Text, {
                className: v.description,
                variant: "text-md/medium",
                color: "text-default",
                children: i,
            }),
        ],
    });
}
function F() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: v.title,
                children: (0, r.jsx)(x.Heading, {
                    variant: "heading-xl/bold",
                    children: y.intl.string(y.t["PFp+aJ"]),
                }),
            }),
            (0, r.jsx)(x.Text, {
                className: v.description,
                variant: "text-md/medium",
                color: "text-default",
                children: y.intl.string(y.t.eBIGB4),
            }),
        ],
    });
}
function O() {
    return (0, r.jsx)("div", {
        className: v.erroredContent,
        children: (0, r.jsx)(x.Eep, {
            src: w,
            width: 225,
            height: 160,
        }),
    });
}
function E(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)("div", {
        className: v.erroredContainer,
        children: [
            (0, r.jsxs)("div", {
                className: n()(v.erroredHeader, v.headerSeparator),
                children: [
                    (0, r.jsx)("div", {
                        className: v.title,
                        children: (0, r.jsx)(x.Heading, {
                            variant: "heading-xl/bold",
                            children: y.intl.string(y.t.a9HOKg),
                        }),
                    }),
                    (0, r.jsx)(x.Text, {
                        className: v.description,
                        variant: "text-md/medium",
                        color: "text-default",
                        children: y.intl.string(y.t.JjjeZb),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: v.erroredContent,
                children: (0, r.jsx)(x.Eep, {
                    src: S,
                    width: 178,
                    height: 190,
                }),
            }),
            (0, r.jsx)("div", {
                className: n()(v.footer, v.footerSeparator),
                children: (0, r.jsx)("div", {
                    className: v.submit,
                    children: (0, r.jsx)(C.zxk, {
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
        a = (0, c.e7)([m.Z], () => m.Z.getRecipientStatus()),
        [s, l] = i.useState([]),
        [d, o] = i.useState(new Set()),
        [f, h] = i.useState(!1);
    return (
        i.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, r] of a)
                    if (r === j.Fe.PENDING) {
                        let a = await (0, p.PR)(t);
                        e.push(a);
                    }
                l(e);
            })();
        }, [a]),
        (0, r.jsxs)("div", {
            className: v.remindContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: n()(v.remindHeader, v.headerSeparator),
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.title,
                            children: [
                                (0, r.jsx)(R, { className: v.titleImage }),
                                (0, r.jsx)(x.Heading, {
                                    variant: "heading-xl/bold",
                                    children: y.intl.string(y.t.SY9tyI),
                                }),
                            ],
                        }),
                        (0, r.jsx)(x.Text, {
                            className: v.description,
                            variant: "text-md/medium",
                            color: "text-default",
                            children: y.intl.string(y.t.mPmPri),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: v.list,
                    children: s.map((e) =>
                        (0, r.jsx)(
                            L.Z,
                            {
                                user: e,
                                checked: d.has(e),
                                onChange: (e, t) => {
                                    o((a) => {
                                        let r = new Set(a);
                                        return t ? r.add(e) : r.delete(e), r;
                                    });
                                },
                            },
                            e.id,
                        ),
                    ),
                }),
                (0, r.jsx)("div", {
                    className: n()(v.footer, v.footerSeparator),
                    children: (0, r.jsx)("div", {
                        className: v.submit,
                        children: (0, r.jsx)(C.zxk, {
                            text: y.intl.string(y.t.ItpQxk),
                            fullWidth: !0,
                            variant: "primary",
                            disabled: f,
                            onClick: async () => {
                                h(!0), await t([...d.values()]), h(!1);
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
    return "light" === (0, c.e7)([h.Z], () => h.Z.theme)
        ? (0, r.jsx)(x.Eep, {
              className: t,
              src: b,
              width: 55,
              height: 38,
          })
        : (0, r.jsx)(x.Eep, {
              className: t,
              src: N,
              width: 55,
              height: 38,
          });
}
let k = function (e) {
    let { onClose: t, onShare: a } = e,
        s = (0, c.e7)([m.Z], () => m.Z.getReferralsRemaining()),
        [l, p] = i.useState(""),
        h = (0, f.Z)(l, 400),
        [j, g] = i.useState(new Map()),
        [b, S] = i.useState(!1),
        {
            eligibleUsers: w,
            fetchUsers: N,
            hasError: R,
            isFetching: k,
            resendUsers: B,
        } = (0, _.q)({
            searchQuery: h,
            selectedUsers: j,
        }),
        M = i.useMemo(() => [...j.keys()].filter((e) => !B.has(e)), [j, B]);
    d()(null != s, "Referrals remaining should not be null");
    let A = (0, o.O)((e) => {
        e && !k && N();
    });
    if (R) return (0, r.jsx)(E, { onClose: t });
    if (0 === s) return (0, r.jsx)(U, { onShare: a });
    let P = h.length > 0 && 0 === w.length;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: n()(v.header, v.headerSeparator),
                children: [
                    P
                        ? (0, r.jsx)(F, {})
                        : (0, r.jsx)(Z, {
                              numOfSelectedUsers: M.length,
                              anySelected: j.size > 0,
                          }),
                    (0, r.jsx)(x.uzC, {
                        selectionMode: "multiple",
                        value: Array.from(j.values()),
                        options: w,
                        formatOption: (e) => ({
                            id: e.id,
                            value: e,
                            label: u.ZP.getName(e),
                        }),
                        onSelectionChange: (e) => {
                            let t = Array.isArray(e) ? e : [e],
                                a = new Map();
                            t.forEach((e) => {
                                null != e && a.set(e.id, e);
                            }),
                                g(a);
                        },
                        children: (0, r.jsx)("div", {
                            className: v.searchbar,
                            children: (0, r.jsx)(x.CtY, {
                                placeholder: 0 === j.size ? y.intl.string(y.t.Kd5RaI) : "",
                                onQueryChange: (e) => {
                                    p(e.target.value);
                                },
                            }),
                        }),
                    }),
                ],
            }),
            P
                ? (0, r.jsx)(O, {})
                : (0, r.jsxs)(C.w0Z, {
                      className: v.list,
                      children: [
                          w.map((e) =>
                              (0, r.jsx)(
                                  L.Z,
                                  {
                                      disabled:
                                          [...j.values()].filter((e) => !B.has(e.id)).length >= s &&
                                          !j.has(e.id) &&
                                          !B.has(e.id),
                                      checked: j.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          g((a) => {
                                              let r = new Map(a);
                                              return t ? r.set(e.id, e) : r.delete(e.id), r;
                                          });
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                          k && (0, r.jsx)(x.$jN, {}),
                          (0, r.jsx)("div", { ref: A }),
                      ],
                  }),
            (0, r.jsx)("div", {
                className: n()(v.footer, v.footerSeparator),
                children: (0, r.jsx)("div", {
                    className: v.submit,
                    children: (0, r.jsx)(C.zxk, {
                        variant: "primary",
                        fullWidth: !0,
                        text: P ? y.intl.string(y.t.wpSqAW) : y.intl.string(y.t.ItpQxk),
                        disabled: (0 === j.size && !P) || b,
                        onClick: async () => {
                            if (P) return void t();
                            S(!0), await a([...j.values()]), S(!1);
                        },
                    }),
                }),
            }),
        ],
    });
};
