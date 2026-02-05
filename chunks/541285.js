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
    A = n(636042),
    p = n(526855),
    f = n(785312),
    j = n(316506),
    N = n(631103),
    E = n(927573),
    b = n(652215),
    T = n(985018),
    C = n(276317),
    I = n(261223);
function v(e) {
    let { guild: t, role: n, locked: l } = e,
        r = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        u = s.useMemo(() => _.cc({ user: r, context: t }), [r, t]),
        m = s.useMemo(() => ({ [n.id]: { ...n, permissions: _.x3 } }), [n]),
        x = s.useMemo(() => _.cc({ user: r, context: t, roles: m }), [r, t, m]),
        h = !a.aI(u, x);
    return (0, i.jsx)(d.m, {
        text: h ? T.intl.string(T.t["IQ/6Sg"]) : null,
        position: "top",
        children: (0, i.jsx)("div", {
            className: C.FS,
            children: (0, i.jsx)(c.QWc, {
                variant: "primary",
                textVariant: "text-sm/semibold",
                onClick: () => (0, A.Y_)(n.id),
                disabled: a.aI(n.permissions, _.x3) || h || l,
                text: T.intl.string(T.t["UYq7+O"]),
            }),
        }),
    });
}
function S(e) {
    let { guild: t, role: n, specs: s, locked: l } = e;
    if (0 === s.length)
        return (0, i.jsxs)("div", {
            className: C.pb,
            children: [
                (0, i.jsx)(p.A, { className: C.wV }),
                (0, i.jsx)(c.Text, { variant: "text-sm/normal", children: T.intl.string(T.t.DEBGqA) }),
            ],
        });
    function r(e) {
        return m.A.can(e, t)
            ? !m.A.can(e, t, null, { [n.id]: { ...n, permissions: a.TF(n.permissions, e) } }) &&
                  T.intl.string(T.t["K+D+GF"])
            : T.intl.string(T.t.nOtPMM);
    }
    return (0, i.jsxs)("div", {
        className: C.eZ,
        children: [
            (0, i.jsx)(v, { guild: t, role: n, locked: l }),
            s.map((e, s) =>
                (0, i.jsx)(
                    u.A,
                    {
                        className: C.p2,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ("string" == typeof t) throw Error("Unexpected string `allow`");
                            (0, A.Ul)(n.id, e, t);
                        },
                        permissionRender: r,
                        guildId: t.id,
                    },
                    s,
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
        { scrolledToTop: A, handleScroll: p } = (0, j.u)(),
        v = s.useRef(!1);
    return (
        s.useEffect(() => {
            v.current ||
                "" === d.trimStart() ||
                (x.default.track(b.HAw.SEARCH_STARTED, { search_type: "Permissions" }), (v.current = !0));
        }, [d]),
        (0, i.jsx)(c.GtU, {
            className: C.XG,
            style: { scrollPaddingTop: g },
            onScroll: p,
            children: (0, i.jsxs)("div", {
                className: I.Q,
                children: [
                    (0, i.jsxs)("div", {
                        className: r()(I.wx, I.ln, { [I.l6]: !A }),
                        ref: _,
                        children: [
                            (0, i.jsx)(j.A, {
                                guild: t,
                                role: n,
                                selectedSection: E.T$.PERMISSIONS,
                                setSelectedSection: a,
                            }),
                            (0, i.jsx)("div", { className: C.U9, children: (0, i.jsx)(N.A, { role: n }) }),
                            (0, i.jsx)("div", {
                                className: C.MT,
                                children: (0, i.jsx)(c.IWV, {
                                    query: d,
                                    onChange: u,
                                    onClear: () => u(""),
                                    placeholder: T.intl.string(T.t.OLJAk3),
                                    "aria-label": T.intl.string(T.t.OLJAk3),
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
