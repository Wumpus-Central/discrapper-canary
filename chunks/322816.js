n.d(t, { ZP: () => Z }), n(415506), n(388685), n(539338), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(149765),
    o = n(442837),
    c = n(28664),
    d = n(481060),
    u = n(409513),
    g = n(722252),
    m = n(496675),
    p = n(594174),
    f = n(626135),
    h = n(233608),
    b = n(700785),
    x = n(84058),
    j = n(631969),
    _ = n(95242),
    v = n(420966),
    O = n(275296),
    C = n(203377),
    y = n(981631),
    N = n(388032),
    E = n(561646),
    I = n(21321);
function S(e) {
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
        a = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        u = i.useMemo(
            () =>
                b.uB({
                    user: a,
                    context: t,
                }),
            [a, t],
        ),
        g = i.useMemo(() => ({ [n.id]: T(S({}, n), { permissions: b.Hn }) }), [n]),
        m = i.useMemo(
            () =>
                b.uB({
                    user: a,
                    context: t,
                    roles: g,
                }),
            [a, t, g],
        ),
        f = !s.fS(u, m);
    return (0, r.jsx)(c.u, {
        text: f ? N.intl.string(N.t["IQ/6Sg"]) : null,
        position: "top",
        children: (0, r.jsx)("div", {
            className: E.clearButtonWrapper,
            children: (0, r.jsx)(d.Avr, {
                variant: "primary",
                textVariant: "text-sm/semibold",
                onClick: () => (0, x.TY)(n.id),
                disabled: s.fS(n.permissions, b.Hn) || f || l,
                text: N.intl.string(N.t["UYq7+O"]),
            }),
        }),
    });
}
function w(e) {
    let { guild: t, role: n, specs: i, locked: l } = e,
        { enabled: a } = u.Z.useExperiment({
            location: "PermissionsList",
            guildId: t.id,
        });
    if (0 === i.length)
        return (0, r.jsxs)("div", {
            className: E.noResultsContainer,
            children: [
                (0, r.jsx)(j.Z, { className: E.noResults }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: N.intl.string(N.t.DEBGqA),
                }),
            ],
        });
    function o(e) {
        return m.Z.can(e, t)
            ? !m.Z.can(e, t, null, { [n.id]: T(S({}, n), { permissions: s.Od(n.permissions, e) }) }) &&
                  N.intl.string(N.t["K+D+GF"])
            : N.intl.string(N.t.nOtPMM);
    }
    return (0, r.jsxs)("div", {
        className: E.permissionsWrapper,
        children: [
            (0, r.jsx)(P, {
                guild: t,
                role: n,
                locked: l,
            }),
            i.map((e, t) =>
                (0, r.jsx)(
                    g.Z,
                    {
                        className: E.permissionsForm,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ("string" == typeof t) throw Error("Unexpected string `allow`");
                            (0, x.lO)(n.id, e, t);
                        },
                        permissionRender: o,
                        hasBypassSlowmodePermission: a,
                    },
                    t,
                ),
            ),
        ],
    });
}
function Z(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: s, initialSearchQuery: o } = e,
        [c, u] = i.useState(null != o ? o : ""),
        g = i
            .useMemo(() => h.Z.generateGuildPermissionSpec(t), [t])
            .map((e) =>
                T(S({}, e), {
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
        { headerHeight: m, headerRef: p } = (0, _.Z)(0),
        { scrolledToTop: b, handleScroll: x } = (0, v.V)(),
        j = i.useRef(!1);
    return (
        i.useEffect(() => {
            j.current ||
                "" === c.trimStart() ||
                (f.default.track(y.rMx.SEARCH_STARTED, { search_type: "Permissions" }), (j.current = !0));
        }, [c]),
        (0, r.jsx)(d.yWw, {
            className: E.scroller,
            style: { scrollPaddingTop: m },
            onScroll: x,
            children: (0, r.jsxs)("div", {
                className: I.contentWidth,
                children: [
                    (0, r.jsxs)("div", {
                        className: a()(I.header, I.stickyHeader, { [I.stickyHeaderElevated]: !b }),
                        ref: p,
                        children: [
                            (0, r.jsx)(v.Z, {
                                guild: t,
                                role: n,
                                selectedSection: C.ZI.PERMISSIONS,
                                setSelectedSection: s,
                            }),
                            (0, r.jsx)("div", {
                                className: E.noticeContainer,
                                children: (0, r.jsx)(O.Z, { role: n }),
                            }),
                            (0, r.jsx)("div", {
                                className: E.searchContainer,
                                children: (0, r.jsx)(d.E1j, {
                                    query: c,
                                    onChange: u,
                                    onClear: () => u(""),
                                    placeholder: N.intl.string(N.t.OLJAk3),
                                    "aria-label": N.intl.string(N.t.OLJAk3),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(w, {
                        guild: t,
                        role: n,
                        specs: g,
                        locked: l,
                    }),
                ],
            }),
        })
    );
}
