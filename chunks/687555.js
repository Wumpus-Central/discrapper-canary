r.d(t, { Z: () => O }), r(47120), r(653041);
var a = r(200651),
    s = r(192379),
    i = r(120356),
    n = r.n(i),
    l = r(512722),
    C = r.n(l),
    o = r(597312),
    d = r(442837),
    c = r(481060),
    x = r(232567),
    h = r(461745),
    p = r(480466),
    f = r(434650),
    u = r(210887),
    m = r(51144),
    _ = r(281494),
    j = r(276444),
    g = r(955839),
    L = r(514020),
    y = r(529840),
    v = r(388032),
    S = r(667256),
    N = r(724531),
    Z = r(99713),
    w = r(334202),
    F = r(7234);
function R(e) {
    let { numOfSelectedUsers: t, anySelected: r } = e,
        s = (0, L.Z)({
            numNewSelected: t,
            anySelected: r
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: S.title,
                children: [
                    (0, a.jsx)(B, { className: S.titleImage }),
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
                children: s
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
function U() {
    return (0, a.jsx)('div', {
        className: S.erroredContent,
        children: (0, a.jsx)(c.Eep, {
            src: w,
            width: 225,
            height: 160
        })
    });
}
function b(e) {
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
                    src: Z,
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
function M(e) {
    let { onShare: t } = e,
        r = (0, d.e7)([j.Z], () => j.Z.getRecipientStatus()),
        [i, l] = s.useState([]),
        [C, o] = s.useState(new Set()),
        [h, p] = s.useState(!1);
    return (
        s.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, a] of r)
                    if (a === _.Fe.PENDING) {
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
                                (0, a.jsx)(B, { className: S.titleImage }),
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
                    children: i.map((e) =>
                        (0, a.jsx)(
                            y.Z,
                            {
                                user: e,
                                checked: C.has(e),
                                onChange: (e, t) => {
                                    o((r) => {
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
                        disabled: h,
                        onClick: async () => {
                            p(!0), await t([...C.values()]), p(!1);
                        },
                        children: v.intl.string(v.t.ItpQxs)
                    })
                })
            ]
        })
    );
}
function B(e) {
    let { className: t } = e;
    return 'light' === (0, d.e7)([u.Z], () => u.Z.theme)
        ? (0, a.jsx)(c.Eep, {
              className: t,
              src: N,
              width: 55,
              height: 38
          })
        : (0, a.jsx)(c.Eep, {
              className: t,
              src: F,
              width: 55,
              height: 38
          });
}
let O = function (e) {
    let { onClose: t, onShare: r } = e,
        i = (0, d.e7)([j.Z], () => j.Z.getReferralsRemaining()),
        [l, x] = s.useState(''),
        u = (0, p.Z)(l, 400),
        [_, L] = s.useState(new Map()),
        [N, Z] = s.useState(!1),
        {
            eligibleUsers: w,
            fetchUsers: F,
            hasError: B,
            isFetching: O,
            resendUsers: k
        } = (0, g.q)({
            searchQuery: u,
            selectedUsers: _
        }),
        A = s.useMemo(() => [..._.keys()].filter((e) => !k.has(e)), [_, k]);
    C()(null != i, 'Referrals remaining should not be null');
    let G = (0, f.O)((e) => {
        e && !O && F();
    });
    if (B) return (0, a.jsx)(b, { onClose: t });
    if (0 === i) return (0, a.jsx)(M, { onShare: r });
    let I = u.length > 0 && 0 === w.length;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)('div', {
                className: n()(S.header, S.headerSeparator),
                children: [
                    I
                        ? (0, a.jsx)(E, {})
                        : (0, a.jsx)(R, {
                              numOfSelectedUsers: A.length,
                              anySelected: _.size > 0
                          }),
                    (0, a.jsx)(h.ZP, {
                        className: S.searchbar,
                        size: h.ZP.Sizes.MEDIUM,
                        tags: [..._.values()].map((e) => m.ZP.getName(e)),
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
            I
                ? (0, a.jsx)(U, {})
                : (0, a.jsxs)(o.w0, {
                      className: S.list,
                      children: [
                          w.map((e) =>
                              (0, a.jsx)(
                                  y.Z,
                                  {
                                      disabled: [..._.values()].filter((e) => !k.has(e.id)).length >= i && !_.has(e.id) && !k.has(e.id),
                                      checked: _.has(e.id),
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
                          O && (0, a.jsx)(c.$jN, {}),
                          (0, a.jsx)('div', { ref: G })
                      ]
                  }),
            (0, a.jsx)('div', {
                className: n()(S.footer, S.footerSeparator),
                children: (0, a.jsx)(c.zxk, {
                    className: S.submit,
                    disabled: (0 === _.size && !I) || N,
                    onClick: async () => {
                        if (I) {
                            t();
                            return;
                        }
                        Z(!0), await r([..._.values()]), Z(!1);
                    },
                    children: I ? v.intl.string(v.t.wpSqAQ) : v.intl.string(v.t.ItpQxs)
                })
            })
        ]
    });
};
