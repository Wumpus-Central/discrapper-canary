n.d(t, { ZP: () => w }), n(415506), n(388685), n(539338), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(149765),
    o = n(442837),
    c = n(28664),
    d = n(481060),
    u = n(144991),
    m = n(496675),
    g = n(594174),
    p = n(626135),
    f = n(233608),
    h = n(700785),
    x = n(84058),
    b = n(631969),
    j = n(95242),
    _ = n(420966),
    v = n(275296),
    C = n(203377),
    O = n(981631),
    y = n(388032),
    N = n(561646),
    E = n(21321);
function I(e) {
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
        s = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        u = i.useMemo(
            () =>
                h.uB({
                    user: s,
                    context: t,
                }),
            [s, t],
        ),
        m = i.useMemo(() => ({ [n.id]: S(I({}, n), { permissions: h.Hn }) }), [n]),
        p = i.useMemo(
            () =>
                h.uB({
                    user: s,
                    context: t,
                    roles: m,
                }),
            [s, t, m],
        ),
        f = !a.fS(u, p);
    return (0, r.jsx)(c.u, {
        text: f ? y.intl.string(y.t["IQ/6Sk"]) : null,
        position: "top",
        children: (0, r.jsx)("div", {
            className: N.clearButtonWrapper,
            children: (0, r.jsx)(d.Avr, {
                variant: "primary",
                textVariant: "text-sm/semibold",
                onClick: () => (0, x.TY)(n.id),
                disabled: a.fS(n.permissions, h.Hn) || f || l,
                text: y.intl.string(y.t["UYq7+P"]),
            }),
        }),
    });
}
function P(e) {
    let { guild: t, role: n, specs: i, locked: l } = e;
    if (0 === i.length)
        return (0, r.jsxs)("div", {
            className: N.noResultsContainer,
            children: [
                (0, r.jsx)(b.Z, { className: N.noResults }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: y.intl.string(y.t.DEBGqK),
                }),
            ],
        });
    function s(e) {
        return m.Z.can(e, t)
            ? !m.Z.can(e, t, null, { [n.id]: S(I({}, n), { permissions: a.Od(n.permissions, e) }) }) &&
                  y.intl.string(y.t["K+D+GB"])
            : y.intl.string(y.t.nOtPMD);
    }
    return (0, r.jsxs)("div", {
        className: N.permissionsWrapper,
        children: [
            (0, r.jsx)(T, {
                guild: t,
                role: n,
                locked: l,
            }),
            i.map((e, t) =>
                (0, r.jsx)(
                    u.Z,
                    {
                        className: N.permissionsForm,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ("string" == typeof t) throw Error("Unexpected string `allow`");
                            (0, x.lO)(n.id, e, t);
                        },
                        permissionRender: s,
                    },
                    t,
                ),
            ),
        ],
    });
}
function w(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, initialSearchQuery: o } = e,
        [c, u] = i.useState(null != o ? o : ""),
        m = i
            .useMemo(() => f.Z.generateGuildPermissionSpec(t), [t])
            .map((e) =>
                S(I({}, e), {
                    permissions: e.permissions.filter((e) => {
                        let t = c.trimStart().toLowerCase();
                        return (
                            e.title.toLowerCase().includes(t) ||
                            (null != e.description && e.description.toString().toLowerCase().includes(t))
                        );
                    }),
                }),
            )
            .filter((e) => e.permissions.length > 0),
        { headerHeight: g, headerRef: h } = (0, j.Z)(0),
        { scrolledToTop: x, handleScroll: b } = (0, _.V)(),
        T = i.useRef(!1);
    return (
        i.useEffect(() => {
            T.current ||
                "" === c.trimStart() ||
                (p.default.track(O.rMx.SEARCH_STARTED, { search_type: "Permissions" }), (T.current = !0));
        }, [c]),
        (0, r.jsx)(d.yWw, {
            className: N.scroller,
            style: { scrollPaddingTop: g },
            onScroll: b,
            children: (0, r.jsxs)("div", {
                className: E.contentWidth,
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(E.header, E.stickyHeader, { [E.stickyHeaderElevated]: !x }),
                        ref: h,
                        children: [
                            (0, r.jsx)(_.Z, {
                                guild: t,
                                role: n,
                                selectedSection: C.ZI.PERMISSIONS,
                                setSelectedSection: a,
                            }),
                            (0, r.jsx)("div", {
                                className: N.noticeContainer,
                                children: (0, r.jsx)(v.Z, { role: n }),
                            }),
                            (0, r.jsx)("div", {
                                className: N.searchContainer,
                                children: (0, r.jsx)(d.E1j, {
                                    query: c,
                                    onChange: u,
                                    onClear: () => u(""),
                                    placeholder: y.intl.string(y.t.OLJAk5),
                                    "aria-label": y.intl.string(y.t.OLJAk5),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(P, {
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
