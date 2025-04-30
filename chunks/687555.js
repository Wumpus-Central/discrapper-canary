r.d(t, { Z: () => B }), r(388685), r(953529), r(539854);
var a = r(200651),
    i = r(192379),
    s = r(120356),
    n = r.n(s),
    l = r(512722),
    o = r.n(l),
    C = r(597312),
    d = r(442837),
    c = r(481060),
    x = r(232567),
    f = r(461745),
    p = r(480466),
    u = r(434650),
    h = r(210887),
    m = r(51144),
    j = r(281494),
    _ = r(276444),
    g = r(955839),
    L = r(514020),
    y = r(529840),
    v = r(388032),
    S = r(236237),
    w = r(724531),
    b = r(99713),
    N = r(334202),
    Z = r(7234);
function F(e) {
    let { numOfSelectedUsers: t, anySelected: r } = e,
        i = (0, L.Z)({
            numNewSelected: t,
            anySelected: r
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: S.title,
                children: [
                    (0, a.jsx)(M, { className: S.titleImage }),
                    (0, a.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        children: v.intl.string(v.t.Lm2nFR)
                    })
                ]
            }),
            (0, a.jsx)(c.Text, {
                className: S.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: i
            })
        ]
    });
}
function E() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: S.title,
                children: (0, a.jsx)(c.X6q, {
                    variant: 'heading-xl/bold',
                    children: v.intl.string(v.t['PFp+aG'])
                })
            }),
            (0, a.jsx)(c.Text, {
                className: S.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: v.intl.string(v.t.eBIGBw)
            })
        ]
    });
}
function O() {
    return (0, a.jsx)('div', {
        className: S.erroredContent,
        children: (0, a.jsx)(c.Eep, {
            src: N,
            width: 225,
            height: 160
        })
    });
}
function R(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)('div', {
        className: S.erroredContainer,
        children: [
            (0, a.jsxs)('div', {
                className: n()(S.erroredHeader, S.headerSeparator),
                children: [
                    (0, a.jsx)('div', {
                        className: S.title,
                        children: (0, a.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            children: v.intl.string(v.t.a9HOKi)
                        })
                    }),
                    (0, a.jsx)(c.Text, {
                        className: S.description,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: v.intl.string(v.t.JjjeZW)
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: S.erroredContent,
                children: (0, a.jsx)(c.Eep, {
                    src: b,
                    width: 178,
                    height: 190
                })
            }),
            (0, a.jsx)('div', {
                className: n()(S.footer, S.footerSeparator),
                children: (0, a.jsx)(c.zxk, {
                    className: S.submit,
                    onClick: () => t(),
                    children: v.intl.string(v.t.wpSqAQ)
                })
            })
        ]
    });
}
function U(e) {
    let { onShare: t } = e,
        r = (0, d.e7)([_.Z], () => _.Z.getRecipientStatus()),
        [s, l] = i.useState([]),
        [o, C] = i.useState(new Set()),
        [f, p] = i.useState(!1);
    return (
        i.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, a] of r)
                    if (a === j.Fe.PENDING) {
                        let r = await (0, x.PR)(t);
                        e.push(r);
                    }
                l(e);
            })();
        }, [r]),
        (0, a.jsxs)('div', {
            className: S.remindContainer,
            children: [
                (0, a.jsxs)('div', {
                    className: n()(S.remindHeader, S.headerSeparator),
                    children: [
                        (0, a.jsxs)('div', {
                            className: S.title,
                            children: [
                                (0, a.jsx)(M, { className: S.titleImage }),
                                (0, a.jsx)(c.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: v.intl.string(v.t.SY9tyM)
                                })
                            ]
                        }),
                        (0, a.jsx)(c.Text, {
                            className: S.description,
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: v.intl.string(v.t.mPmPrq)
                        })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: S.list,
                    children: s.map((e) =>
                        (0, a.jsx)(
                            y.Z,
                            {
                                user: e,
                                checked: o.has(e),
                                onChange: (e, t) => {
                                    C((r) => {
                                        let a = new Set(r);
                                        return t ? a.add(e) : a.delete(e), a;
                                    });
                                }
                            },
                            e.id
                        )
                    )
                }),
                (0, a.jsx)('div', {
                    className: n()(S.footer, S.footerSeparator),
                    children: (0, a.jsx)(c.zxk, {
                        className: S.submit,
                        disabled: f,
                        onClick: async () => {
                            p(!0), await t([...o.values()]), p(!1);
                        },
                        children: v.intl.string(v.t.ItpQxs)
                    })
                })
            ]
        })
    );
}
function M(e) {
    let { className: t } = e;
    return 'light' === (0, d.e7)([h.Z], () => h.Z.theme)
        ? (0, a.jsx)(c.Eep, {
              className: t,
              src: w,
              width: 55,
              height: 38
          })
        : (0, a.jsx)(c.Eep, {
              className: t,
              src: Z,
              width: 55,
              height: 38
          });
}
let B = function (e) {
    let { onClose: t, onShare: r } = e,
        s = (0, d.e7)([_.Z], () => _.Z.getReferralsRemaining()),
        [l, x] = i.useState(''),
        h = (0, p.Z)(l, 400),
        [j, L] = i.useState(new Map()),
        [w, b] = i.useState(!1),
        {
            eligibleUsers: N,
            fetchUsers: Z,
            hasError: M,
            isFetching: B,
            resendUsers: k
        } = (0, g.q)({
            searchQuery: h,
            selectedUsers: j
        }),
        A = i.useMemo(() => [...j.keys()].filter((e) => !k.has(e)), [j, k]);
    o()(null != s, 'Referrals remaining should not be null');
    let P = (0, u.O)((e) => {
        e && !B && Z();
    });
    if (M) return (0, a.jsx)(R, { onClose: t });
    if (0 === s) return (0, a.jsx)(U, { onShare: r });
    let G = h.length > 0 && 0 === N.length;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)('div', {
                className: n()(S.header, S.headerSeparator),
                children: [
                    G
                        ? (0, a.jsx)(E, {})
                        : (0, a.jsx)(F, {
                              numOfSelectedUsers: A.length,
                              anySelected: j.size > 0
                          }),
                    (0, a.jsx)(f.ZP, {
                        className: S.searchbar,
                        size: f.ZP.Sizes.MEDIUM,
                        tags: [...j.values()].map((e) => m.ZP.getName(e)),
                        placeholder: v.intl.string(v.t.Kd5RaG),
                        query: l,
                        onRemoveTag: (e) => {
                            L((t) => {
                                let r = [...t.values()][e],
                                    a = new Map(t);
                                return a.delete(r.id), a;
                            });
                        },
                        onQueryChange: x,
                        onClear: () => x('')
                    })
                ]
            }),
            G
                ? (0, a.jsx)(O, {})
                : (0, a.jsxs)(C.w0, {
                      className: S.list,
                      children: [
                          N.map((e) =>
                              (0, a.jsx)(
                                  y.Z,
                                  {
                                      disabled: [...j.values()].filter((e) => !k.has(e.id)).length >= s && !j.has(e.id) && !k.has(e.id),
                                      checked: j.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          L((r) => {
                                              let a = new Map(r);
                                              return t ? a.set(e.id, e) : a.delete(e.id), a;
                                          });
                                      }
                                  },
                                  e.id
                              )
                          ),
                          B && (0, a.jsx)(c.$jN, {}),
                          (0, a.jsx)('div', { ref: P })
                      ]
                  }),
            (0, a.jsx)('div', {
                className: n()(S.footer, S.footerSeparator),
                children: (0, a.jsx)(c.zxk, {
                    className: S.submit,
                    disabled: (0 === j.size && !G) || w,
                    onClick: async () => {
                        if (G) return void t();
                        b(!0), await r([...j.values()]), b(!1);
                    },
                    children: G ? v.intl.string(v.t.wpSqAQ) : v.intl.string(v.t.ItpQxs)
                })
            })
        ]
    });
};
