n.d(t, { ZP: () => P }), n(415506), n(388685), n(539338), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(149765),
    o = n(442837),
    c = n(481060),
    d = n(144991),
    u = n(496675),
    m = n(594174),
    g = n(626135),
    p = n(233608),
    f = n(700785),
    h = n(84058),
    x = n(631969),
    b = n(95242),
    j = n(420966),
    v = n(275296),
    _ = n(203377),
    O = n(981631),
    y = n(388032),
    C = n(426507),
    N = n(10083);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e, t) {
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
        d = i.useMemo(
            () =>
                f.uB({
                    user: s,
                    context: t,
                }),
            [s, t],
        ),
        u = i.useMemo(() => ({ [n.id]: I(E({}, n), { permissions: f.Hn }) }), [n]),
        g = i.useMemo(
            () =>
                f.uB({
                    user: s,
                    context: t,
                    roles: u,
                }),
            [s, t, u],
        ),
        p = !a.fS(d, g);
    return (0, r.jsx)(c.ua7, {
        text: p ? y.intl.string(y.t["IQ/6Sk"]) : null,
        position: "top",
        color: c.ua7.Colors.RED,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: i } = e;
            return (0, r.jsx)("div", {
                onMouseEnter: t,
                onMouseLeave: i,
                className: C.clearButtonWrapper,
                children: (0, r.jsx)(c.Avr, {
                    variant: "primary",
                    textVariant: "text-sm/semibold",
                    onClick: () => (0, h.TY)(n.id),
                    disabled: a.fS(n.permissions, f.Hn) || p || l,
                    text: y.intl.string(y.t["UYq7+P"]),
                }),
            });
        },
    });
}
function T(e) {
    let { guild: t, role: n, specs: i, locked: l } = e;
    if (0 === i.length)
        return (0, r.jsxs)("div", {
            className: C.noResultsContainer,
            children: [
                (0, r.jsx)(x.Z, { className: C.noResults }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: y.intl.string(y.t.DEBGqK),
                }),
            ],
        });
    function s(e) {
        return u.Z.can(e, t)
            ? !u.Z.can(e, t, null, { [n.id]: I(E({}, n), { permissions: a.Od(n.permissions, e) }) }) &&
                  y.intl.string(y.t["K+D+GB"])
            : y.intl.string(y.t.nOtPMD);
    }
    return (0, r.jsxs)("div", {
        className: C.permissionsWrapper,
        children: [
            (0, r.jsx)(S, {
                guild: t,
                role: n,
                locked: l,
            }),
            i.map((e, t) =>
                (0, r.jsx)(
                    d.Z,
                    {
                        className: C.permissionsForm,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ("string" == typeof t) throw Error("Unexpected string `allow`");
                            (0, h.lO)(n.id, e, t);
                        },
                        permissionRender: s,
                    },
                    t,
                ),
            ),
        ],
    });
}
function P(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, initialSearchQuery: o } = e,
        [d, u] = i.useState(null != o ? o : ""),
        m = i
            .useMemo(() => p.Z.generateGuildPermissionSpec(t), [t])
            .map((e) =>
                I(E({}, e), {
                    permissions: e.permissions.filter((e) => {
                        let t = d.trimStart().toLowerCase();
                        return (
                            e.title.toLowerCase().includes(t) ||
                            (null != e.description && e.description.toString().toLowerCase().includes(t))
                        );
                    }),
                }),
            )
            .filter((e) => e.permissions.length > 0),
        { headerHeight: f, headerRef: h } = (0, b.Z)(0),
        { scrolledToTop: x, handleScroll: S } = (0, j.V)(),
        P = i.useRef(!1);
    return (
        i.useEffect(() => {
            P.current ||
                "" === d.trimStart() ||
                (g.default.track(O.rMx.SEARCH_STARTED, { search_type: "Permissions" }), (P.current = !0));
        }, [d]),
        (0, r.jsx)(c.yWw, {
            className: C.scroller,
            style: { scrollPaddingTop: f },
            onScroll: S,
            children: (0, r.jsxs)("div", {
                className: N.contentWidth,
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(N.header, N.stickyHeader, { [N.stickyHeaderElevated]: !x }),
                        ref: h,
                        children: [
                            (0, r.jsx)(j.Z, {
                                guild: t,
                                role: n,
                                selectedSection: _.ZI.PERMISSIONS,
                                setSelectedSection: a,
                            }),
                            (0, r.jsx)("div", {
                                className: C.noticeContainer,
                                children: (0, r.jsx)(v.Z, { role: n }),
                            }),
                            (0, r.jsx)("div", {
                                className: C.searchContainer,
                                children: (0, r.jsx)(c.E1j, {
                                    query: d,
                                    onChange: u,
                                    onClear: () => u(""),
                                    placeholder: y.intl.string(y.t.OLJAk5),
                                    "aria-label": y.intl.string(y.t.OLJAk5),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(T, {
                        guild: t,
                        role: n,
                        specs: m,
                        locked: l,
                    }),
                ],
            }),
        })
    );
}
