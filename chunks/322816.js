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
    f = n(496675),
    m = n(594174),
    b = n(626135),
    p = n(233608),
    h = n(700785),
    x = n(84058),
    j = n(631969),
    v = n(95242),
    O = n(420966),
    C = n(275296),
    y = n(203377),
    N = n(981631),
    E = n(388032),
    I = n(183950),
    S = n(536673);
function _(e) {
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
        a = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        u = i.useMemo(
            () =>
                h.uB({
                    user: a,
                    context: t,
                }),
            [a, t],
        ),
        g = i.useMemo(() => ({ [n.id]: T(_({}, n), { permissions: h.Hn }) }), [n]),
        f = i.useMemo(
            () =>
                h.uB({
                    user: a,
                    context: t,
                    roles: g,
                }),
            [a, t, g],
        ),
        b = !s.fS(u, f);
    return (0, r.jsx)(c.u, {
        text: b ? E.intl.string(E.t["IQ/6Sg"]) : null,
        position: "top",
        children: (0, r.jsx)("div", {
            className: I.clearButtonWrapper,
            children: (0, r.jsx)(d.Avr, {
                variant: "primary",
                textVariant: "text-sm/semibold",
                onClick: () => (0, x.TY)(n.id),
                disabled: s.fS(n.permissions, h.Hn) || b || l,
                text: E.intl.string(E.t["UYq7+O"]),
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
            className: I.noResultsContainer,
            children: [
                (0, r.jsx)(j.Z, { className: I.noResults }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: E.intl.string(E.t.DEBGqA),
                }),
            ],
        });
    function o(e) {
        return f.Z.can(e, t)
            ? !f.Z.can(e, t, null, { [n.id]: T(_({}, n), { permissions: s.Od(n.permissions, e) }) }) &&
                  E.intl.string(E.t["K+D+GF"])
            : E.intl.string(E.t.nOtPMM);
    }
    return (0, r.jsxs)("div", {
        className: I.permissionsWrapper,
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
                        className: I.permissionsForm,
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
            .useMemo(() => p.Z.generateGuildPermissionSpec(t), [t])
            .map((e) =>
                T(_({}, e), {
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
        { headerHeight: f, headerRef: m } = (0, v.Z)(0),
        { scrolledToTop: h, handleScroll: x } = (0, O.V)(),
        j = i.useRef(!1);
    return (
        i.useEffect(() => {
            j.current ||
                "" === c.trimStart() ||
                (b.default.track(N.rMx.SEARCH_STARTED, { search_type: "Permissions" }), (j.current = !0));
        }, [c]),
        (0, r.jsx)(d.yWw, {
            className: I.scroller,
            style: { scrollPaddingTop: f },
            onScroll: x,
            children: (0, r.jsxs)("div", {
                className: S.contentWidth,
                children: [
                    (0, r.jsxs)("div", {
                        className: a()(S.header, S.stickyHeader, { [S.stickyHeaderElevated]: !h }),
                        ref: m,
                        children: [
                            (0, r.jsx)(O.Z, {
                                guild: t,
                                role: n,
                                selectedSection: y.ZI.PERMISSIONS,
                                setSelectedSection: s,
                            }),
                            (0, r.jsx)("div", {
                                className: I.noticeContainer,
                                children: (0, r.jsx)(C.Z, { role: n }),
                            }),
                            (0, r.jsx)("div", {
                                className: I.searchContainer,
                                children: (0, r.jsx)(d.E1j, {
                                    query: c,
                                    onChange: u,
                                    onClear: () => u(""),
                                    placeholder: E.intl.string(E.t.OLJAk3),
                                    "aria-label": E.intl.string(E.t.OLJAk3),
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
