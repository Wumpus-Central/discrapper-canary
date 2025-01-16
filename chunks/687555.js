r(47120), r(653041);
var i = r(200651),
    s = r(192379),
    a = r(120356),
    n = r.n(a),
    l = r(512722),
    o = r.n(l),
    C = r(597312),
    d = r(442837),
    c = r(481060),
    x = r(232567),
    f = r(461745),
    h = r(480466),
    p = r(434650),
    u = r(210887),
    m = r(51144),
    _ = r(281494),
    j = r(276444),
    g = r(955839),
    L = r(514020),
    S = r(529840),
    y = r(388032),
    v = r(854540),
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: v.title,
                children: [
                    (0, i.jsx)(B, { className: v.titleImage }),
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        children: y.intl.string(y.t.Lm2nFR)
                    })
                ]
            }),
            (0, i.jsx)(c.Text, {
                className: v.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: s
            })
        ]
    });
}
function M() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: v.title,
                children: (0, i.jsx)(c.Heading, {
                    variant: 'heading-xl/bold',
                    children: y.intl.string(y.t['PFp+aG'])
                })
            }),
            (0, i.jsx)(c.Text, {
                className: v.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: y.intl.string(y.t.eBIGBw)
            })
        ]
    });
}
function U() {
    return (0, i.jsx)('div', {
        className: v.erroredContent,
        children: (0, i.jsx)(c.Image, {
            src: w,
            width: 225,
            height: 160
        })
    });
}
function E(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)('div', {
        className: v.erroredContainer,
        children: [
            (0, i.jsxs)('div', {
                className: n()(v.erroredHeader, v.headerSeparator),
                children: [
                    (0, i.jsx)('div', {
                        className: v.title,
                        children: (0, i.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            children: y.intl.string(y.t.a9HOKi)
                        })
                    }),
                    (0, i.jsx)(c.Text, {
                        className: v.description,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: y.intl.string(y.t.JjjeZW)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: v.erroredContent,
                children: (0, i.jsx)(c.Image, {
                    src: Z,
                    width: 178,
                    height: 190
                })
            }),
            (0, i.jsx)('div', {
                className: n()(v.footer, v.footerSeparator),
                children: (0, i.jsx)(c.Button, {
                    className: v.submit,
                    onClick: () => t(),
                    children: y.intl.string(y.t.wpSqAQ)
                })
            })
        ]
    });
}
function A(e) {
    let { onShare: t } = e,
        r = (0, d.e7)([j.Z], () => j.Z.getRecipientStatus()),
        [a, l] = s.useState([]),
        [o, C] = s.useState(new Set());
    return (
        s.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, i] of r)
                    if (i === _.Fe.PENDING) {
                        let r = await (0, x.PR)(t);
                        e.push(r);
                    }
                l(e);
            })();
        }, [r]),
        (0, i.jsxs)('div', {
            className: v.remindContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: n()(v.remindHeader, v.headerSeparator),
                    children: [
                        (0, i.jsxs)('div', {
                            className: v.title,
                            children: [
                                (0, i.jsx)(B, { className: v.titleImage }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xl/bold',
                                    children: y.intl.string(y.t.SY9tyM)
                                })
                            ]
                        }),
                        (0, i.jsx)(c.Text, {
                            className: v.description,
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: y.intl.string(y.t.mPmPrq)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: v.list,
                    children: a.map((e) =>
                        (0, i.jsx)(
                            S.Z,
                            {
                                user: e,
                                checked: o.has(e),
                                onChange: (e, t) => {
                                    C((r) => {
                                        let i = new Set(r);
                                        return t ? i.add(e) : i.delete(e), i;
                                    });
                                }
                            },
                            e.id
                        )
                    )
                }),
                (0, i.jsx)('div', {
                    className: n()(v.footer, v.footerSeparator),
                    children: (0, i.jsx)(c.Button, {
                        className: v.submit,
                        onClick: () => t([...o.values()]),
                        children: y.intl.string(y.t.ItpQxs)
                    })
                })
            ]
        })
    );
}
function B(e) {
    let { className: t } = e;
    return 'light' === (0, d.e7)([u.Z], () => u.Z.theme)
        ? (0, i.jsx)(c.Image, {
              className: t,
              src: N,
              width: 55,
              height: 38
          })
        : (0, i.jsx)(c.Image, {
              className: t,
              src: F,
              width: 55,
              height: 38
          });
}
t.Z = function (e) {
    let { onClose: t, onShare: r } = e,
        a = (0, d.e7)([j.Z], () => j.Z.getReferralsRemaining()),
        [l, x] = s.useState(''),
        u = (0, h.Z)(l, 400),
        [_, L] = s.useState(new Map()),
        {
            eligibleUsers: N,
            fetchUsers: Z,
            hasError: w,
            isFetching: F,
            resendUsers: B
        } = (0, g.q)({
            searchQuery: u,
            selectedUsers: _
        }),
        I = s.useMemo(() => [..._.keys()].filter((e) => !B.has(e)), [_, B]);
    o()(null != a, 'Referrals remaining should not be null');
    let b = (0, p.O)((e) => {
        e && !F && Z();
    });
    if (w) return (0, i.jsx)(E, { onClose: t });
    if (0 === a) return (0, i.jsx)(A, { onShare: r });
    let k = u.length > 0 && 0 === N.length;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: n()(v.header, v.headerSeparator),
                children: [
                    k
                        ? (0, i.jsx)(M, {})
                        : (0, i.jsx)(R, {
                              numOfSelectedUsers: I.length,
                              anySelected: _.size > 0
                          }),
                    (0, i.jsx)(f.ZP, {
                        className: v.searchbar,
                        size: f.ZP.Sizes.MEDIUM,
                        tags: [..._.values()].map((e) => m.ZP.getName(e)),
                        placeholder: y.intl.string(y.t.Kd5RaG),
                        query: l,
                        onRemoveTag: (e) => {
                            L((t) => {
                                let r = [...t.values()][e],
                                    i = new Map(t);
                                return i.delete(r.id), i;
                            });
                        },
                        onQueryChange: x,
                        onClear: () => x('')
                    })
                ]
            }),
            k
                ? (0, i.jsx)(U, {})
                : (0, i.jsxs)(C.w0, {
                      className: v.list,
                      children: [
                          N.map((e) =>
                              (0, i.jsx)(
                                  S.Z,
                                  {
                                      disabled: [..._.values()].filter((e) => !B.has(e.id)).length >= a && !_.has(e.id) && !B.has(e.id),
                                      checked: _.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          L((r) => {
                                              let i = new Map(r);
                                              return t ? i.set(e.id, e) : i.delete(e.id), i;
                                          });
                                      }
                                  },
                                  e.id
                              )
                          ),
                          F && (0, i.jsx)(c.Spinner, {}),
                          (0, i.jsx)('div', { ref: b })
                      ]
                  }),
            (0, i.jsx)('div', {
                className: n()(v.footer, v.footerSeparator),
                children: (0, i.jsx)(c.Button, {
                    className: v.submit,
                    disabled: 0 === _.size && !k,
                    onClick: () => {
                        if (k) {
                            t();
                            return;
                        }
                        r([..._.values()]);
                    },
                    children: k ? y.intl.string(y.t.wpSqAQ) : y.intl.string(y.t.ItpQxs)
                })
            })
        ]
    });
};
