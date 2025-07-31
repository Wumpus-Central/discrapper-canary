(n.d(t, { ZP: () => w }), n(415506), n(388685), n(539338), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(149765),
    o = n(442837),
    c = n(481060),
    d = n(144991),
    u = n(190263),
    m = n(496675),
    g = n(594174),
    p = n(626135),
    h = n(233608),
    f = n(700785),
    x = n(764260),
    b = n(631969),
    j = n(95242),
    v = n(420966),
    _ = n(275296),
    O = n(203377),
    y = n(981631),
    C = n(388032),
    N = n(96878),
    I = n(877248);
function E(e) {
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
function S(e, t) {
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
function T(e) {
    let { guild: t, role: n, locked: l } = e,
        a = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        d = i.useMemo(
            () =>
                f.uB({
                    user: a,
                    context: t
                }),
            [a, t]
        ),
        u = i.useMemo(() => ({ [n.id]: S(E({}, n), { permissions: f.Hn }) }), [n]),
        m = i.useMemo(
            () =>
                f.uB({
                    user: a,
                    context: t,
                    roles: u
                }),
            [a, t, u]
        ),
        p = !s.fS(d, m);
    return (0, r.jsx)(c.ua7, {
        text: p ? C.intl.string(C.t['IQ/6Sk']) : null,
        position: 'top',
        color: c.ua7.Colors.RED,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: i } = e;
            return (0, r.jsx)('div', {
                onMouseEnter: t,
                onMouseLeave: i,
                className: N.clearButtonWrapper,
                children: (0, r.jsx)(c.Avr, {
                    variant: 'primary',
                    textVariant: 'text-sm/semibold',
                    onClick: () => (0, x.TY)(n.id),
                    disabled: s.fS(n.permissions, f.Hn) || p || l,
                    text: C.intl.string(C.t['UYq7+P'])
                })
            });
        }
    });
}
function P(e) {
    let { guild: t, role: n, specs: i, locked: l } = e,
        a = u.D.useExperiment({
            guildId: t.id,
            location: 'PermissionsList'
        }).enabled;
    if (0 === i.length)
        return (0, r.jsxs)('div', {
            className: N.noResultsContainer,
            children: [
                (0, r.jsx)(b.Z, { className: N.noResults }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: C.intl.string(C.t.DEBGqK)
                })
            ]
        });
    function o(e) {
        return m.Z.can(e, t) ? !m.Z.can(e, t, null, { [n.id]: S(E({}, n), { permissions: s.Od(n.permissions, e) }) }) && C.intl.string(C.t['K+D+GB']) : C.intl.string(C.t.nOtPMD);
    }
    return (0, r.jsxs)('div', {
        className: N.permissionsWrapper,
        children: [
            (0, r.jsx)(T, {
                guild: t,
                role: n,
                locked: l
            }),
            i.map((e, t) =>
                (0, r.jsx)(
                    d.Z,
                    {
                        className: N.permissionsForm,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ('string' == typeof t) throw Error('Unexpected string `allow`');
                            (0, x.lO)(n.id, e, t);
                        },
                        permissionRender: o,
                        inPinPermissionExperiment: a
                    },
                    t
                )
            )
        ]
    });
}
function w(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: s, initialSearchQuery: o } = e,
        [d, u] = i.useState(null != o ? o : ''),
        m = i
            .useMemo(() => h.Z.generateGuildPermissionSpec(t), [t])
            .map((e) =>
                S(E({}, e), {
                    permissions: e.permissions.filter((e) => {
                        let t = d.trimStart().toLowerCase();
                        return e.title.toLowerCase().includes(t) || (null != e.description && e.description.toString().toLowerCase().includes(t));
                    })
                })
            )
            .filter((e) => e.permissions.length > 0),
        { headerHeight: g, headerRef: f } = (0, j.Z)(0),
        { scrolledToTop: x, handleScroll: b } = (0, v.V)(),
        T = i.useRef(!1);
    return (
        i.useEffect(() => {
            T.current || '' === d.trimStart() || (p.default.track(y.rMx.SEARCH_STARTED, { search_type: 'Permissions' }), (T.current = !0));
        }, [d]),
        (0, r.jsx)(c.yWw, {
            className: N.scroller,
            style: { scrollPaddingTop: g },
            onScroll: b,
            children: (0, r.jsxs)('div', {
                className: I.contentWidth,
                children: [
                    (0, r.jsxs)('div', {
                        className: a()(I.header, I.stickyHeader, { [I.stickyHeaderElevated]: !x }),
                        ref: f,
                        children: [
                            (0, r.jsx)(v.Z, {
                                guild: t,
                                role: n,
                                selectedSection: O.ZI.PERMISSIONS,
                                setSelectedSection: s
                            }),
                            (0, r.jsx)('div', {
                                className: N.noticeContainer,
                                children: (0, r.jsx)(_.Z, { role: n })
                            }),
                            (0, r.jsx)('div', {
                                className: N.searchContainer,
                                children: (0, r.jsx)(c.E1j, {
                                    query: d,
                                    onChange: u,
                                    onClear: () => u(''),
                                    placeholder: C.intl.string(C.t.OLJAk5),
                                    'aria-label': C.intl.string(C.t.OLJAk5)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(P, {
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
