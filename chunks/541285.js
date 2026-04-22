n.d(t, { Ay: () => D });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(136722),
    o = n(311907),
    d = n(990078),
    c = n(123292),
    u = n(834730),
    m = n(599319),
    g = n(892547),
    h = n(942234),
    x = n(576705),
    _ = n(287809),
    p = n(954571),
    A = n(558393),
    E = n(488926),
    f = n(636042),
    j = n(526855),
    N = n(785312),
    I = n(316506),
    C = n(631103),
    b = n(927573),
    v = n(652215),
    S = n(985018),
    T = n(138984),
    y = n(838719);
function R(e) {
    let { guild: t, role: n, locked: s } = e,
        r = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        u = l.useMemo(() => E.cc({ user: r, context: t }), [r, t]),
        m = l.useMemo(() => ({ [n.id]: { ...n, permissions: E.x3 } }), [n]),
        g = l.useMemo(() => E.cc({ user: r, context: t, roles: m }), [r, t, m]),
        h = !a.aI(u, g);
    return (0, i.jsx)(d.m, {
        text: h ? S.intl.string(S.t["IQ/6Sg"]) : null,
        position: "top",
        children: (0, i.jsx)("div", {
            className: T.FS,
            children: (0, i.jsx)(c.Q, {
                variant: "primary",
                textVariant: "text-sm/semibold",
                onClick: () => (0, f.Y_)(n.id),
                disabled: a.aI(n.permissions, E.x3) || h || s,
                text: S.intl.string(S.t["UYq7+O"]),
            }),
        }),
    });
}
function L(e) {
    let { guild: t, role: n, specs: l, locked: s } = e;
    if (0 === l.length)
        return (0, i.jsxs)("div", {
            className: T.pb,
            children: [
                (0, i.jsx)(j.A, { className: T.wV }),
                (0, i.jsx)(u.E, { variant: "text-sm/normal", children: S.intl.string(S.t.DEBGqA) }),
            ],
        });
    function r(e) {
        return x.A.can(e, t)
            ? !x.A.can(e, t, null, { [n.id]: { ...n, permissions: a.TF(n.permissions, e) } }) &&
                  S.intl.string(S.t["K+D+GF"])
            : S.intl.string(S.t.nOtPMM);
    }
    return (0, i.jsxs)("div", {
        className: T.eZ,
        children: [
            (0, i.jsx)(R, { guild: t, role: n, locked: s }),
            l.map((e, t) =>
                (0, i.jsx)(
                    h.A,
                    {
                        className: T.p2,
                        spec: e,
                        permissions: n.permissions,
                        locked: s,
                        onChange: (e, t) => {
                            if ("string" == typeof t) throw Error("Unexpected string `allow`");
                            (0, f.Ul)(n.id, e, t);
                        },
                        permissionRender: r,
                    },
                    t,
                ),
            ),
        ],
    });
}
function D(e) {
    let { guild: t, role: n, locked: s, setSelectedSection: a, initialSearchQuery: o } = e,
        [d, c] = l.useState(o ?? ""),
        u = l
            .useMemo(() => A.A.generateGuildPermissionSpec(t), [t])
            .map((e) => ({
                ...e,
                permissions: e.permissions.filter((e) => {
                    let t = d.trimStart().toLowerCase();
                    return (
                        e.title.toLowerCase().includes(t) ||
                        (null != e.description && e.description.toString().toLowerCase().includes(t))
                    );
                }),
            }))
            .filter((e) => e.permissions.length > 0),
        { headerHeight: h, headerRef: x } = (0, N.A)(0),
        { scrolledToTop: _, handleScroll: E } = (0, I.u)(),
        f = l.useRef(!1);
    return (
        l.useEffect(() => {
            f.current ||
                "" === d.trimStart() ||
                (p.default.track(v.HAw.SEARCH_STARTED, { search_type: "Permissions" }), (f.current = !0));
        }, [d]),
        (0, i.jsx)(m.Gt, {
            className: T.XG,
            style: { scrollPaddingTop: h },
            onScroll: E,
            children: (0, i.jsxs)("div", {
                className: y.Q,
                children: [
                    (0, i.jsxs)("div", {
                        className: r()(y.wx, y.ln, { [y.l6]: !_ }),
                        ref: x,
                        children: [
                            (0, i.jsx)(I.A, {
                                guild: t,
                                role: n,
                                selectedSection: b.T$.PERMISSIONS,
                                setSelectedSection: a,
                            }),
                            (0, i.jsx)("div", { className: T.U9, children: (0, i.jsx)(C.A, { role: n }) }),
                            (0, i.jsx)("div", {
                                className: T.MT,
                                children: (0, i.jsx)(g.I, {
                                    query: d,
                                    onChange: c,
                                    onClear: () => c(""),
                                    placeholder: S.intl.string(S.t.OLJAk3),
                                    "aria-label": S.intl.string(S.t.OLJAk3),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(L, { guild: t, role: n, specs: u, locked: s }),
                ],
            }),
        })
    );
}
