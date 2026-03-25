"use strict";
n.d(t, { Ay: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(136722),
    o = n(311907),
    d = n(990078),
    c = n(397927),
    u = n(942234),
    m = n(576705),
    g = n(287809),
    x = n(954571),
    h = n(558393),
    _ = n(488926),
    p = n(636042),
    A = n(526855),
    f = n(785312),
    j = n(316506),
    N = n(631103),
    E = n(927573),
    b = n(652215),
    C = n(985018),
    T = n(276317),
    I = n(483604);
function v(e) {
    let { guild: t, role: n, locked: l } = e,
        r = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        u = s.useMemo(() => _.cc({ user: r, context: t }), [r, t]),
        m = s.useMemo(() => ({ [n.id]: { ...n, permissions: _.x3 } }), [n]),
        x = s.useMemo(() => _.cc({ user: r, context: t, roles: m }), [r, t, m]),
        h = !a.aI(u, x);
    return (0, i.jsx)(d.m, {
        text: h ? C.intl.string(C.t["IQ/6Sg"]) : null,
        position: "top",
        children: (0, i.jsx)("div", {
            className: T.FS,
            children: (0, i.jsx)(c.QWc, {
                variant: "primary",
                textVariant: "text-sm/semibold",
                onClick: () => (0, p.Y_)(n.id),
                disabled: a.aI(n.permissions, _.x3) || h || l,
                text: C.intl.string(C.t["UYq7+O"]),
            }),
        }),
    });
}
function S(e) {
    let { guild: t, role: n, specs: s, locked: l } = e;
    if (0 === s.length)
        return (0, i.jsxs)("div", {
            className: T.pb,
            children: [
                (0, i.jsx)(A.A, { className: T.wV }),
                (0, i.jsx)(c.Text, { variant: "text-sm/normal", children: C.intl.string(C.t.DEBGqA) }),
            ],
        });
    function r(e) {
        return m.A.can(e, t)
            ? !m.A.can(e, t, null, { [n.id]: { ...n, permissions: a.TF(n.permissions, e) } }) &&
                  C.intl.string(C.t["K+D+GF"])
            : C.intl.string(C.t.nOtPMM);
    }
    return (0, i.jsxs)("div", {
        className: T.eZ,
        children: [
            (0, i.jsx)(v, { guild: t, role: n, locked: l }),
            s.map((e, t) =>
                (0, i.jsx)(
                    u.A,
                    {
                        className: T.p2,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ("string" == typeof t) throw Error("Unexpected string `allow`");
                            (0, p.Ul)(n.id, e, t);
                        },
                        permissionRender: r,
                    },
                    t,
                ),
            ),
        ],
    });
}
function y(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, initialSearchQuery: o } = e,
        [d, u] = s.useState(o ?? ""),
        m = s
            .useMemo(() => h.A.generateGuildPermissionSpec(t), [t])
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
        { headerHeight: g, headerRef: _ } = (0, f.A)(0),
        { scrolledToTop: p, handleScroll: A } = (0, j.u)(),
        v = s.useRef(!1);
    return (
        s.useEffect(() => {
            v.current ||
                "" === d.trimStart() ||
                (x.default.track(b.HAw.SEARCH_STARTED, { search_type: "Permissions" }), (v.current = !0));
        }, [d]),
        (0, i.jsx)(c.GtU, {
            className: T.XG,
            style: { scrollPaddingTop: g },
            onScroll: A,
            children: (0, i.jsxs)("div", {
                className: I.Q,
                children: [
                    (0, i.jsxs)("div", {
                        className: r()(I.wx, I.ln, { [I.l6]: !p }),
                        ref: _,
                        children: [
                            (0, i.jsx)(j.A, {
                                guild: t,
                                role: n,
                                selectedSection: E.T$.PERMISSIONS,
                                setSelectedSection: a,
                            }),
                            (0, i.jsx)("div", { className: T.U9, children: (0, i.jsx)(N.A, { role: n }) }),
                            (0, i.jsx)("div", {
                                className: T.MT,
                                children: (0, i.jsx)(c.IWV, {
                                    query: d,
                                    onChange: u,
                                    onClear: () => u(""),
                                    placeholder: C.intl.string(C.t.OLJAk3),
                                    "aria-label": C.intl.string(C.t.OLJAk3),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(S, { guild: t, role: n, specs: m, locked: l }),
                ],
            }),
        })
    );
}
