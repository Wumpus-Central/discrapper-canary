r.d(t, { Z: () => B }), r(47120), r(266796), r(653041);
var a = r(200651),
    s = r(192379),
    i = r(120356),
    n = r.n(i),
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
    N = r(388032),
    v = r(236237),
    S = r(724531),
    w = r(99713),
    b = r(334202),
    Z = r(7234);
function F(e) {
    let { numOfSelectedUsers: t, anySelected: r } = e,
        s = (0, L.Z)({
            numNewSelected: t,
            anySelected: r
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: v.title,
                children: [
                    (0, a.jsx)(M, { className: v.titleImage }),
                    (0, a.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        children: N.NW.string(N.t.Lm2nFR)
                    })
                ]
            }),
            (0, a.jsx)(c.Text, {
                className: v.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: s
            })
        ]
    });
}
function E() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: v.title,
                children: (0, a.jsx)(c.X6q, {
                    variant: 'heading-xl/bold',
                    children: N.NW.string(N.t['PFp+aG'])
                })
            }),
            (0, a.jsx)(c.Text, {
                className: v.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: N.NW.string(N.t.eBIGBw)
            })
        ]
    });
}
function O() {
    return (0, a.jsx)('div', {
        className: v.erroredContent,
        children: (0, a.jsx)(c.Eep, {
            src: b,
            width: 225,
            height: 160
        })
    });
}
function R(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)('div', {
        className: v.erroredContainer,
        children: [
            (0, a.jsxs)('div', {
                className: n()(v.erroredHeader, v.headerSeparator),
                children: [
                    (0, a.jsx)('div', {
                        className: v.title,
                        children: (0, a.jsx)(c.X6q, {
                            variant: 'heading-xl/bold',
                            children: N.NW.string(N.t.a9HOKi)
                        })
                    }),
                    (0, a.jsx)(c.Text, {
                        className: v.description,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: N.NW.string(N.t.JjjeZW)
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: v.erroredContent,
                children: (0, a.jsx)(c.Eep, {
                    src: w,
                    width: 178,
                    height: 190
                })
            }),
            (0, a.jsx)('div', {
                className: n()(v.footer, v.footerSeparator),
                children: (0, a.jsx)(c.zxk, {
                    className: v.submit,
                    onClick: () => t(),
                    children: N.NW.string(N.t.wpSqAQ)
                })
            })
        ]
    });
}
function U(e) {
    let { onShare: t } = e,
        r = (0, d.e7)([_.Z], () => _.Z.getRecipientStatus()),
        [i, l] = s.useState([]),
        [o, C] = s.useState(new Set()),
        [f, p] = s.useState(!1);
    return (
        s.useEffect(() => {
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
            className: v.remindContainer,
            children: [
                (0, a.jsxs)('div', {
                    className: n()(v.remindHeader, v.headerSeparator),
                    children: [
                        (0, a.jsxs)('div', {
                            className: v.title,
                            children: [
                                (0, a.jsx)(M, { className: v.titleImage }),
                                (0, a.jsx)(c.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: N.NW.string(N.t.SY9tyM)
                                })
                            ]
                        }),
                        (0, a.jsx)(c.Text, {
                            className: v.description,
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: N.NW.string(N.t.mPmPrq)
                        })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: v.list,
                    children: i.map((e) =>
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
                    className: n()(v.footer, v.footerSeparator),
                    children: (0, a.jsx)(c.zxk, {
                        className: v.submit,
                        disabled: f,
                        onClick: async () => {
                            p(!0), await t([...o.values()]), p(!1);
                        },
                        children: N.NW.string(N.t.ItpQxs)
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
              src: S,
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
        i = (0, d.e7)([_.Z], () => _.Z.getReferralsRemaining()),
        [l, x] = s.useState(''),
        h = (0, p.Z)(l, 400),
        [j, L] = s.useState(new Map()),
        [S, w] = s.useState(!1),
        {
            eligibleUsers: b,
            fetchUsers: Z,
            hasError: M,
            isFetching: B,
            resendUsers: k
        } = (0, g.q)({
            searchQuery: h,
            selectedUsers: j
        }),
        A = s.useMemo(() => [...j.keys()].filter((e) => !k.has(e)), [j, k]);
    o()(null != i, 'Referrals remaining should not be null');
    let P = (0, u.O)((e) => {
        e && !B && Z();
    });
    if (M) return (0, a.jsx)(R, { onClose: t });
    if (0 === i) return (0, a.jsx)(U, { onShare: r });
    let G = h.length > 0 && 0 === b.length;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)('div', {
                className: n()(v.header, v.headerSeparator),
                children: [
                    G
                        ? (0, a.jsx)(E, {})
                        : (0, a.jsx)(F, {
                              numOfSelectedUsers: A.length,
                              anySelected: j.size > 0
                          }),
                    (0, a.jsx)(f.ZP, {
                        className: v.searchbar,
                        size: f.ZP.Sizes.MEDIUM,
                        tags: [...j.values()].map((e) => m.ZP.getName(e)),
                        placeholder: N.NW.string(N.t.Kd5RaG),
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
                      className: v.list,
                      children: [
                          b.map((e) =>
                              (0, a.jsx)(
                                  y.Z,
                                  {
                                      disabled: [...j.values()].filter((e) => !k.has(e.id)).length >= i && !j.has(e.id) && !k.has(e.id),
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
                className: n()(v.footer, v.footerSeparator),
                children: (0, a.jsx)(c.zxk, {
                    className: v.submit,
                    disabled: (0 === j.size && !G) || S,
                    onClick: async () => {
                        if (G) return void t();
                        w(!0), await r([...j.values()]), w(!1);
                    },
                    children: G ? N.NW.string(N.t.wpSqAQ) : N.NW.string(N.t.ItpQxs)
                })
            })
        ]
    });
};
