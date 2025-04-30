n.d(t, { ZP: () => P }), n(415506), n(388685), n(539338), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(149765),
    o = n(442837),
    c = n(481060),
    u = n(144991),
    d = n(496675),
    m = n(594174),
    g = n(626135),
    p = n(233608),
    h = n(700785),
    f = n(764260),
    x = n(631969),
    b = n(95242),
    j = n(420966),
    _ = n(275296),
    v = n(203377),
    O = n(981631),
    C = n(388032),
    y = n(96878),
    N = n(877248);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { guild: t, role: n, locked: l } = e,
        s = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        u = i.useMemo(
            () =>
                h.uB({
                    user: s,
                    context: t
                }),
            [s, t]
        ),
        d = i.useMemo(() => ({ [n.id]: E(I({}, n), { permissions: h.Hn }) }), [n]),
        g = i.useMemo(
            () =>
                h.uB({
                    user: s,
                    context: t,
                    roles: d
                }),
            [s, t, d]
        ),
        p = !a.fS(u, g);
    return (0, r.jsx)('div', {
        className: y.clearButtonWrapper,
        children: (0, r.jsx)(c.ua7, {
            text: p ? C.intl.string(C.t['IQ/6Sk']) : null,
            position: 'top',
            color: c.ua7.Colors.RED,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: i } = e;
                return (0, r.jsx)(c.zxk, {
                    className: y.clearButton,
                    size: c.zxk.Sizes.TINY,
                    look: c.zxk.Looks.LINK,
                    color: c.zxk.Colors.LINK,
                    onClick: () => (0, f.TY)(n.id),
                    onMouseEnter: t,
                    onMouseLeave: i,
                    disabled: a.fS(n.permissions, h.Hn) || p || l,
                    children: C.intl.string(C.t['UYq7+P'])
                });
            }
        })
    });
}
function T(e) {
    let { guild: t, role: n, specs: i, locked: l } = e;
    if (0 === i.length)
        return (0, r.jsxs)('div', {
            className: y.noResultsContainer,
            children: [
                (0, r.jsx)(x.Z, { className: y.noResults }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: C.intl.string(C.t.DEBGqK)
                })
            ]
        });
    function s(e) {
        return d.Z.can(e, t) ? !d.Z.can(e, t, null, { [n.id]: E(I({}, n), { permissions: a.Od(n.permissions, e) }) }) && C.intl.string(C.t['K+D+GB']) : C.intl.string(C.t.nOtPMD);
    }
    return (0, r.jsxs)('div', {
        className: y.permissionsWrapper,
        children: [
            (0, r.jsx)(S, {
                guild: t,
                role: n,
                locked: l
            }),
            i.map((e, t) =>
                (0, r.jsx)(
                    u.Z,
                    {
                        className: y.permissionsForm,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ('string' == typeof t) throw Error('Unexpected string `allow`');
                            (0, f.lO)(n.id, e, t);
                        },
                        permissionRender: s
                    },
                    t
                )
            )
        ]
    });
}
function P(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, initialSearchQuery: o } = e,
        [u, d] = i.useState(null != o ? o : ''),
        m = i
            .useMemo(() => p.Z.generateGuildPermissionSpec(t), [t])
            .map((e) =>
                E(I({}, e), {
                    permissions: e.permissions.filter((e) => {
                        let t = u.trimStart().toLowerCase();
                        return e.title.toLowerCase().includes(t) || (null != e.description && e.description.toString().toLowerCase().includes(t));
                    })
                })
            )
            .filter((e) => e.permissions.length > 0),
        { headerHeight: h, headerRef: f } = (0, b.Z)(0),
        { scrolledToTop: x, handleScroll: S } = (0, j.V)(),
        P = i.useRef(!1);
    return (
        i.useEffect(() => {
            P.current || '' === u.trimStart() || (g.default.track(O.rMx.SEARCH_STARTED, { search_type: 'Permissions' }), (P.current = !0));
        }, [u]),
        (0, r.jsx)(c.yWw, {
            className: y.scroller,
            style: { scrollPaddingTop: h },
            onScroll: S,
            children: (0, r.jsxs)('div', {
                className: N.contentWidth,
                children: [
                    (0, r.jsxs)('div', {
                        className: s()(N.header, N.stickyHeader, { [N.stickyHeaderElevated]: !x }),
                        ref: f,
                        children: [
                            (0, r.jsx)(j.Z, {
                                guild: t,
                                role: n,
                                selectedSection: v.ZI.PERMISSIONS,
                                setSelectedSection: a
                            }),
                            (0, r.jsx)('div', {
                                className: y.noticeContainer,
                                children: (0, r.jsx)(_.Z, { role: n })
                            }),
                            (0, r.jsx)('div', {
                                className: y.searchContainer,
                                children: (0, r.jsx)(c.E1j, {
                                    size: c.E1j.Sizes.MEDIUM,
                                    query: u,
                                    onChange: d,
                                    onClear: () => d(''),
                                    placeholder: C.intl.string(C.t.OLJAk5),
                                    'aria-label': C.intl.string(C.t.OLJAk5)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(T, {
                        guild: t,
                        role: n,
                        specs: m,
                        locked: l
                    })
                ]
            })
        })
    );
}
