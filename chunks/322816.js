(n.d(t, { ZP: () => R }), n(415506), n(388685), n(539338), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(149765),
    o = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(144991),
    m = n(190263),
    g = n(496675),
    p = n(594174),
    f = n(626135),
    h = n(233608),
    x = n(700785),
    b = n(764260),
    j = n(631969),
    _ = n(95242),
    v = n(420966),
    O = n(275296),
    C = n(203377),
    y = n(981631),
    N = n(388032),
    I = n(96878),
    E = n(877248);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function T(e, t) {
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
function P(e) {
    let { guild: t, role: n, locked: l } = e,
        s = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        u = i.useMemo(
            () =>
                x.uB({
                    user: s,
                    context: t
                }),
            [s, t]
        ),
        m = i.useMemo(() => ({ [n.id]: T(S({}, n), { permissions: x.Hn }) }), [n]),
        g = i.useMemo(
            () =>
                x.uB({
                    user: s,
                    context: t,
                    roles: m
                }),
            [s, t, m]
        ),
        f = !a.fS(u, g);
    return (0, r.jsx)('div', {
        className: I.clearButtonWrapper,
        children: (0, r.jsx)(d.ua7, {
            text: f ? N.intl.string(N.t['IQ/6Sk']) : null,
            position: 'top',
            color: d.ua7.Colors.RED,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: i } = e;
                return (0, r.jsx)(c.zx, {
                    className: I.clearButton,
                    size: c.zx.Sizes.TINY,
                    look: c.zx.Looks.LINK,
                    color: c.zx.Colors.LINK,
                    onClick: () => (0, b.TY)(n.id),
                    onMouseEnter: t,
                    onMouseLeave: i,
                    disabled: a.fS(n.permissions, x.Hn) || f || l,
                    children: N.intl.string(N.t['UYq7+P'])
                });
            }
        })
    });
}
function w(e) {
    let { guild: t, role: n, specs: i, locked: l } = e,
        s = m.D.useExperiment({
            guildId: t.id,
            location: 'PermissionsList'
        }).enabled;
    if (0 === i.length)
        return (0, r.jsxs)('div', {
            className: I.noResultsContainer,
            children: [
                (0, r.jsx)(j.Z, { className: I.noResults }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: N.intl.string(N.t.DEBGqK)
                })
            ]
        });
    function o(e) {
        return g.Z.can(e, t) ? !g.Z.can(e, t, null, { [n.id]: T(S({}, n), { permissions: a.Od(n.permissions, e) }) }) && N.intl.string(N.t['K+D+GB']) : N.intl.string(N.t.nOtPMD);
    }
    return (0, r.jsxs)('div', {
        className: I.permissionsWrapper,
        children: [
            (0, r.jsx)(P, {
                guild: t,
                role: n,
                locked: l
            }),
            i.map((e, t) =>
                (0, r.jsx)(
                    u.Z,
                    {
                        className: I.permissionsForm,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ('string' == typeof t) throw Error('Unexpected string `allow`');
                            (0, b.lO)(n.id, e, t);
                        },
                        permissionRender: o,
                        inPinPermissionExperiment: s
                    },
                    t
                )
            )
        ]
    });
}
function R(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, initialSearchQuery: o } = e,
        [c, u] = i.useState(null != o ? o : ''),
        m = i
            .useMemo(() => h.Z.generateGuildPermissionSpec(t), [t])
            .map((e) =>
                T(S({}, e), {
                    permissions: e.permissions.filter((e) => {
                        let t = c.trimStart().toLowerCase();
                        return e.title.toLowerCase().includes(t) || (null != e.description && e.description.toString().toLowerCase().includes(t));
                    })
                })
            )
            .filter((e) => e.permissions.length > 0),
        { headerHeight: g, headerRef: p } = (0, _.Z)(0),
        { scrolledToTop: x, handleScroll: b } = (0, v.V)(),
        j = i.useRef(!1);
    return (
        i.useEffect(() => {
            j.current || '' === c.trimStart() || (f.default.track(y.rMx.SEARCH_STARTED, { search_type: 'Permissions' }), (j.current = !0));
        }, [c]),
        (0, r.jsx)(d.yWw, {
            className: I.scroller,
            style: { scrollPaddingTop: g },
            onScroll: b,
            children: (0, r.jsxs)('div', {
                className: E.contentWidth,
                children: [
                    (0, r.jsxs)('div', {
                        className: s()(E.header, E.stickyHeader, { [E.stickyHeaderElevated]: !x }),
                        ref: p,
                        children: [
                            (0, r.jsx)(v.Z, {
                                guild: t,
                                role: n,
                                selectedSection: C.ZI.PERMISSIONS,
                                setSelectedSection: a
                            }),
                            (0, r.jsx)('div', {
                                className: I.noticeContainer,
                                children: (0, r.jsx)(O.Z, { role: n })
                            }),
                            (0, r.jsx)('div', {
                                className: I.searchContainer,
                                children: (0, r.jsx)(d.E1j, {
                                    size: d.E1j.Sizes.MEDIUM,
                                    query: c,
                                    onChange: u,
                                    onClear: () => u(''),
                                    placeholder: N.intl.string(N.t.OLJAk5),
                                    'aria-label': N.intl.string(N.t.OLJAk5)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(w, {
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
