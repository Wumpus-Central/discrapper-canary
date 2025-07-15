(r.d(t, { Z: () => A }), r(388685), r(953529), r(539854));
var a = r(255367),
    s = r(73800),
    i = r(120356),
    n = r.n(i),
    l = r(512722),
    o = r.n(l),
    d = r(597312),
    C = r(442837),
    c = r(755721),
    u = r(481060),
    p = r(232567),
    h = r(794433),
    f = r(480466),
    x = r(434650),
    g = r(210887),
    m = r(51144),
    _ = r(281494),
    j = r(276444),
    y = r(955839),
    L = r(514020),
    v = r(529840),
    b = r(388032),
    S = r(236237),
    R = r(724531),
    E = r(99713),
    w = r(334202),
    N = r(7234);
function O(e) {
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
                    (0, a.jsx)(U, { className: S.titleImage }),
                    (0, a.jsx)(u.X6q, {
                        variant: 'heading-xl/bold',
                        children: b.intl.string(b.t.Lm2nFR)
                    })
                ]
            }),
            (0, a.jsx)(u.Text, {
                className: S.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: s
            })
        ]
    });
}
function Z() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: S.title,
                children: (0, a.jsx)(u.X6q, {
                    variant: 'heading-xl/bold',
                    children: b.intl.string(b.t['PFp+aG'])
                })
            }),
            (0, a.jsx)(u.Text, {
                className: S.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: b.intl.string(b.t.eBIGBw)
            })
        ]
    });
}
function F() {
    return (0, a.jsx)('div', {
        className: S.erroredContent,
        children: (0, a.jsx)(u.Eep, {
            src: w,
            width: 225,
            height: 160
        })
    });
}
function P(e) {
    let { onClose: t } = e;
    return (0, a.jsxs)('div', {
        className: S.erroredContainer,
        children: [
            (0, a.jsxs)('div', {
                className: n()(S.erroredHeader, S.headerSeparator),
                children: [
                    (0, a.jsx)('div', {
                        className: S.title,
                        children: (0, a.jsx)(u.X6q, {
                            variant: 'heading-xl/bold',
                            children: b.intl.string(b.t.a9HOKi)
                        })
                    }),
                    (0, a.jsx)(u.Text, {
                        className: S.description,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: b.intl.string(b.t.JjjeZW)
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: S.erroredContent,
                children: (0, a.jsx)(u.Eep, {
                    src: E,
                    width: 178,
                    height: 190
                })
            }),
            (0, a.jsx)('div', {
                className: n()(S.footer, S.footerSeparator),
                children: (0, a.jsx)(c.zx, {
                    className: S.submit,
                    onClick: () => t(),
                    children: b.intl.string(b.t.wpSqAQ)
                })
            })
        ]
    });
}
function M(e) {
    let { onShare: t } = e,
        r = (0, C.e7)([j.Z], () => j.Z.getRecipientStatus()),
        [i, l] = s.useState([]),
        [o, d] = s.useState(new Set()),
        [h, f] = s.useState(!1);
    return (
        s.useEffect(() => {
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
        (0, a.jsxs)('div', {
            className: S.remindContainer,
            children: [
                (0, a.jsxs)('div', {
                    className: n()(S.remindHeader, S.headerSeparator),
                    children: [
                        (0, a.jsxs)('div', {
                            className: S.title,
                            children: [
                                (0, a.jsx)(U, { className: S.titleImage }),
                                (0, a.jsx)(u.X6q, {
                                    variant: 'heading-xl/bold',
                                    children: b.intl.string(b.t.SY9tyM)
                                })
                            ]
                        }),
                        (0, a.jsx)(u.Text, {
                            className: S.description,
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: b.intl.string(b.t.mPmPrq)
                        })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: S.list,
                    children: i.map((e) =>
                        (0, a.jsx)(
                            v.Z,
                            {
                                user: e,
                                checked: o.has(e),
                                onChange: (e, t) => {
                                    d((r) => {
                                        let a = new Set(r);
                                        return (t ? a.add(e) : a.delete(e), a);
                                    });
                                }
                            },
                            e.id
                        )
                    )
                }),
                (0, a.jsx)('div', {
                    className: n()(S.footer, S.footerSeparator),
                    children: (0, a.jsx)(c.zx, {
                        className: S.submit,
                        disabled: h,
                        onClick: async () => {
                            (f(!0), await t([...o.values()]), f(!1));
                        },
                        children: b.intl.string(b.t.ItpQxs)
                    })
                })
            ]
        })
    );
}
function U(e) {
    let { className: t } = e;
    return 'light' === (0, C.e7)([g.Z], () => g.Z.theme)
        ? (0, a.jsx)(u.Eep, {
              className: t,
              src: R,
              width: 55,
              height: 38
          })
        : (0, a.jsx)(u.Eep, {
              className: t,
              src: N,
              width: 55,
              height: 38
          });
}
let A = function (e) {
    let { onClose: t, onShare: r } = e,
        i = (0, C.e7)([j.Z], () => j.Z.getReferralsRemaining()),
        [l, p] = s.useState(''),
        g = (0, f.Z)(l, 400),
        [_, L] = s.useState(new Map()),
        [R, E] = s.useState(!1),
        {
            eligibleUsers: w,
            fetchUsers: N,
            hasError: U,
            isFetching: A,
            resendUsers: k
        } = (0, y.q)({
            searchQuery: g,
            selectedUsers: _
        }),
        D = s.useMemo(() => [..._.keys()].filter((e) => !k.has(e)), [_, k]);
    o()(null != i, 'Referrals remaining should not be null');
    let B = (0, x.O)((e) => {
        e && !A && N();
    });
    if (U) return (0, a.jsx)(P, { onClose: t });
    if (0 === i) return (0, a.jsx)(M, { onShare: r });
    let I = g.length > 0 && 0 === w.length;
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)('div', {
                className: n()(S.header, S.headerSeparator),
                children: [
                    I
                        ? (0, a.jsx)(Z, {})
                        : (0, a.jsx)(O, {
                              numOfSelectedUsers: D.length,
                              anySelected: _.size > 0
                          }),
                    (0, a.jsx)(h.Z, {
                        className: S.searchbar,
                        size: h.Z.Sizes.MEDIUM,
                        tags: [..._.values()].map((e) => m.ZP.getName(e)),
                        placeholder: b.intl.string(b.t.Kd5RaG),
                        query: l,
                        onRemoveTag: (e) => {
                            L((t) => {
                                let r = [...t.values()][e],
                                    a = new Map(t);
                                return (a.delete(r.id), a);
                            });
                        },
                        onQueryChange: p
                    })
                ]
            }),
            I
                ? (0, a.jsx)(F, {})
                : (0, a.jsxs)(d.w0, {
                      className: S.list,
                      children: [
                          w.map((e) =>
                              (0, a.jsx)(
                                  v.Z,
                                  {
                                      disabled: [..._.values()].filter((e) => !k.has(e.id)).length >= i && !_.has(e.id) && !k.has(e.id),
                                      checked: _.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          L((r) => {
                                              let a = new Map(r);
                                              return (t ? a.set(e.id, e) : a.delete(e.id), a);
                                          });
                                      }
                                  },
                                  e.id
                              )
                          ),
                          A && (0, a.jsx)(u.$jN, {}),
                          (0, a.jsx)('div', { ref: B })
                      ]
                  }),
            (0, a.jsx)('div', {
                className: n()(S.footer, S.footerSeparator),
                children: (0, a.jsx)(c.zx, {
                    className: S.submit,
                    disabled: (0 === _.size && !I) || R,
                    onClick: async () => {
                        if (I) return void t();
                        (E(!0), await r([..._.values()]), E(!1));
                    },
                    children: I ? b.intl.string(b.t.wpSqAQ) : b.intl.string(b.t.ItpQxs)
                })
            })
        ]
    });
};
