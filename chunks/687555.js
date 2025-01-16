r(47120), r(653041);
var s = r(200651),
    i = r(192379),
    a = r(120356),
    n = r.n(a),
    l = r(512722),
    C = r.n(l),
    o = r(597312),
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
        i = (0, L.Z)({
            numNewSelected: t,
            anySelected: r
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)('div', {
                className: v.title,
                children: [
                    (0, s.jsx)(B, { className: v.titleImage }),
                    (0, s.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        children: y.intl.string(y.t.Lm2nFR)
                    })
                ]
            }),
            (0, s.jsx)(c.Text, {
                className: v.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: i
            })
        ]
    });
}
function M() {
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)('div', {
                className: v.title,
                children: (0, s.jsx)(c.Heading, {
                    variant: 'heading-xl/bold',
                    children: y.intl.string(y.t['PFp+aG'])
                })
            }),
            (0, s.jsx)(c.Text, {
                className: v.description,
                variant: 'text-md/medium',
                color: 'header-secondary',
                children: y.intl.string(y.t.eBIGBw)
            })
        ]
    });
}
function U() {
    return (0, s.jsx)('div', {
        className: v.erroredContent,
        children: (0, s.jsx)(c.Image, {
            src: w,
            width: 225,
            height: 160
        })
    });
}
function E(e) {
    let { onClose: t } = e;
    return (0, s.jsxs)('div', {
        className: v.erroredContainer,
        children: [
            (0, s.jsxs)('div', {
                className: n()(v.erroredHeader, v.headerSeparator),
                children: [
                    (0, s.jsx)('div', {
                        className: v.title,
                        children: (0, s.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            children: y.intl.string(y.t.a9HOKi)
                        })
                    }),
                    (0, s.jsx)(c.Text, {
                        className: v.description,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: y.intl.string(y.t.JjjeZW)
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: v.erroredContent,
                children: (0, s.jsx)(c.Image, {
                    src: Z,
                    width: 178,
                    height: 190
                })
            }),
            (0, s.jsx)('div', {
                className: n()(v.footer, v.footerSeparator),
                children: (0, s.jsx)(c.Button, {
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
        [a, l] = i.useState([]),
        [C, o] = i.useState(new Set()),
        [f, h] = i.useState(!1);
    return (
        i.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, s] of r)
                    if (s === _.Fe.PENDING) {
                        let r = await (0, x.PR)(t);
                        e.push(r);
                    }
                l(e);
            })();
        }, [r]),
        (0, s.jsxs)('div', {
            className: v.remindContainer,
            children: [
                (0, s.jsxs)('div', {
                    className: n()(v.remindHeader, v.headerSeparator),
                    children: [
                        (0, s.jsxs)('div', {
                            className: v.title,
                            children: [
                                (0, s.jsx)(B, { className: v.titleImage }),
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xl/bold',
                                    children: y.intl.string(y.t.SY9tyM)
                                })
                            ]
                        }),
                        (0, s.jsx)(c.Text, {
                            className: v.description,
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: y.intl.string(y.t.mPmPrq)
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: v.list,
                    children: a.map((e) =>
                        (0, s.jsx)(
                            S.Z,
                            {
                                user: e,
                                checked: C.has(e),
                                onChange: (e, t) => {
                                    o((r) => {
                                        let s = new Set(r);
                                        return t ? s.add(e) : s.delete(e), s;
                                    });
                                }
                            },
                            e.id
                        )
                    )
                }),
                (0, s.jsx)('div', {
                    className: n()(v.footer, v.footerSeparator),
                    children: (0, s.jsx)(c.Button, {
                        className: v.submit,
                        disabled: f,
                        onClick: async () => {
                            h(!0), await t([...C.values()]), h(!1);
                        },
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
        ? (0, s.jsx)(c.Image, {
              className: t,
              src: N,
              width: 55,
              height: 38
          })
        : (0, s.jsx)(c.Image, {
              className: t,
              src: F,
              width: 55,
              height: 38
          });
}
t.Z = function (e) {
    let { onClose: t, onShare: r } = e,
        a = (0, d.e7)([j.Z], () => j.Z.getReferralsRemaining()),
        [l, x] = i.useState(''),
        u = (0, h.Z)(l, 400),
        [_, L] = i.useState(new Map()),
        [N, Z] = i.useState(!1),
        {
            eligibleUsers: w,
            fetchUsers: F,
            hasError: B,
            isFetching: O,
            resendUsers: I
        } = (0, g.q)({
            searchQuery: u,
            selectedUsers: _
        }),
        b = i.useMemo(() => [..._.keys()].filter((e) => !I.has(e)), [_, I]);
    C()(null != a, 'Referrals remaining should not be null');
    let k = (0, p.O)((e) => {
        e && !O && F();
    });
    if (B) return (0, s.jsx)(E, { onClose: t });
    if (0 === a) return (0, s.jsx)(A, { onShare: r });
    let G = u.length > 0 && 0 === w.length;
    return (0, s.jsxs)('div', {
        children: [
            (0, s.jsxs)('div', {
                className: n()(v.header, v.headerSeparator),
                children: [
                    G
                        ? (0, s.jsx)(M, {})
                        : (0, s.jsx)(R, {
                              numOfSelectedUsers: b.length,
                              anySelected: _.size > 0
                          }),
                    (0, s.jsx)(f.ZP, {
                        className: v.searchbar,
                        size: f.ZP.Sizes.MEDIUM,
                        tags: [..._.values()].map((e) => m.ZP.getName(e)),
                        placeholder: y.intl.string(y.t.Kd5RaG),
                        query: l,
                        onRemoveTag: (e) => {
                            L((t) => {
                                let r = [...t.values()][e],
                                    s = new Map(t);
                                return s.delete(r.id), s;
                            });
                        },
                        onQueryChange: x,
                        onClear: () => x('')
                    })
                ]
            }),
            G
                ? (0, s.jsx)(U, {})
                : (0, s.jsxs)(o.w0, {
                      className: v.list,
                      children: [
                          w.map((e) =>
                              (0, s.jsx)(
                                  S.Z,
                                  {
                                      disabled: [..._.values()].filter((e) => !I.has(e.id)).length >= a && !_.has(e.id) && !I.has(e.id),
                                      checked: _.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          L((r) => {
                                              let s = new Map(r);
                                              return t ? s.set(e.id, e) : s.delete(e.id), s;
                                          });
                                      }
                                  },
                                  e.id
                              )
                          ),
                          O && (0, s.jsx)(c.Spinner, {}),
                          (0, s.jsx)('div', { ref: k })
                      ]
                  }),
            (0, s.jsx)('div', {
                className: n()(v.footer, v.footerSeparator),
                children: (0, s.jsx)(c.Button, {
                    className: v.submit,
                    disabled: (0 === _.size && !G) || N,
                    onClick: async () => {
                        if (G) {
                            t();
                            return;
                        }
                        Z(!0), await r([..._.values()]), Z(!1);
                    },
                    children: G ? y.intl.string(y.t.wpSqAQ) : y.intl.string(y.t.ItpQxs)
                })
            })
        ]
    });
};
