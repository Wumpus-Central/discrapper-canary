n.d(t, { ZP: () => P }), n(411104), n(47120), n(595690), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(149765),
    o = n(442837),
    c = n(481060),
    d = n(144991),
    u = n(496675),
    m = n(594174),
    g = n(626135),
    p = n(233608),
    h = n(700785),
    f = n(764260),
    b = n(631969),
    x = n(95242),
    j = n(420966),
    N = n(275296),
    _ = n(203377),
    v = n(981631),
    C = n(388032),
    O = n(96878),
    y = n(877248);
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
    let { guild: t, role: n, locked: s } = e,
        a = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        d = i.useMemo(
            () =>
                h.uB({
                    user: a,
                    context: t
                }),
            [a, t]
        ),
        u = i.useMemo(() => ({ [n.id]: E(I({}, n), { permissions: h.Hn }) }), [n]),
        g = i.useMemo(
            () =>
                h.uB({
                    user: a,
                    context: t,
                    roles: u
                }),
            [a, t, u]
        ),
        p = !l.fS(d, g);
    return (0, r.jsx)('div', {
        className: O.clearButtonWrapper,
        children: (0, r.jsx)(c.ua7, {
            text: p ? C.NW.string(C.t['IQ/6Sk']) : null,
            position: 'top',
            color: c.ua7.Colors.RED,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: i } = e;
                return (0, r.jsx)(c.zxk, {
                    className: O.clearButton,
                    size: c.zxk.Sizes.TINY,
                    look: c.zxk.Looks.LINK,
                    color: c.zxk.Colors.LINK,
                    onClick: () => (0, f.TY)(n.id),
                    onMouseEnter: t,
                    onMouseLeave: i,
                    disabled: l.fS(n.permissions, h.Hn) || p || s,
                    children: C.NW.string(C.t['UYq7+P'])
                });
            }
        })
    });
}
function T(e) {
    let { guild: t, role: n, specs: i, locked: s } = e;
    if (0 === i.length)
        return (0, r.jsxs)('div', {
            className: O.noResultsContainer,
            children: [
                (0, r.jsx)(b.Z, { className: O.noResults }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: C.NW.string(C.t.DEBGqK)
                })
            ]
        });
    function a(e) {
        return u.Z.can(e, t) ? !u.Z.can(e, t, null, { [n.id]: E(I({}, n), { permissions: l.Od(n.permissions, e) }) }) && C.NW.string(C.t['K+D+GB']) : C.NW.string(C.t.nOtPMD);
    }
    return (0, r.jsxs)('div', {
        className: O.permissionsWrapper,
        children: [
            (0, r.jsx)(S, {
                guild: t,
                role: n,
                locked: s
            }),
            i.map((e, t) =>
                (0, r.jsx)(
                    d.Z,
                    {
                        className: O.permissionsForm,
                        spec: e,
                        permissions: n.permissions,
                        locked: s,
                        onChange: (e, t) => {
                            if ('string' == typeof t) throw Error('Unexpected string `allow`');
                            (0, f.lO)(n.id, e, t);
                        },
                        permissionRender: a
                    },
                    t
                )
            )
        ]
    });
}
function P(e) {
    let { guild: t, role: n, locked: s, setSelectedSection: l, initialSearchQuery: o } = e,
        [d, u] = i.useState(null != o ? o : ''),
        m = i
            .useMemo(() => p.Z.generateGuildPermissionSpec(t), [t])
            .map((e) =>
                E(I({}, e), {
                    permissions: e.permissions.filter((e) => {
                        let t = d.trimStart().toLowerCase();
                        return e.title.toLowerCase().includes(t) || (null != e.description && e.description.toString().toLowerCase().includes(t));
                    })
                })
            )
            .filter((e) => e.permissions.length > 0),
        { headerHeight: h, headerRef: f } = (0, x.Z)(0),
        { scrolledToTop: b, handleScroll: S } = (0, j.V)(),
        P = i.useRef(!1);
    return (
        i.useEffect(() => {
            P.current || '' === d.trimStart() || (g.default.track(v.rMx.SEARCH_STARTED, { search_type: 'Permissions' }), (P.current = !0));
        }, [d]),
        (0, r.jsx)(c.yWw, {
            className: O.scroller,
            style: { scrollPaddingTop: h },
            onScroll: S,
            children: (0, r.jsxs)('div', {
                className: y.contentWidth,
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(y.header, y.stickyHeader, { [y.stickyHeaderElevated]: !b }),
                        ref: f,
                        children: [
                            (0, r.jsx)(j.Z, {
                                guild: t,
                                role: n,
                                selectedSection: _.ZI.PERMISSIONS,
                                setSelectedSection: l
                            }),
                            (0, r.jsx)('div', {
                                className: O.noticeContainer,
                                children: (0, r.jsx)(N.Z, { role: n })
                            }),
                            (0, r.jsx)('div', {
                                className: O.searchContainer,
                                children: (0, r.jsx)(c.E1j, {
                                    size: c.E1j.Sizes.MEDIUM,
                                    query: d,
                                    onChange: u,
                                    onClear: () => u(''),
                                    placeholder: C.NW.string(C.t.OLJAk5),
                                    'aria-label': C.NW.string(C.t.OLJAk5)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(T, {
                        guild: t,
                        role: n,
                        specs: m,
                        locked: s
                    })
                ]
            })
        })
    );
}
