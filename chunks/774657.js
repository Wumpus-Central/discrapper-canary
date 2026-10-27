(n.r(l), n.d(l, { default: () => S }));
var t = n(477900),
    r = n(582128),
    i = n(806163),
    s = n(837381),
    a = n(862328),
    d = n(812993),
    o = n(67811),
    c = n(152367),
    u = n(442433),
    j = n(941971),
    h = n(900848),
    x = n(550591),
    p = n(771640),
    b = n(855793),
    k = n(751841),
    A = n(381991),
    C = n(575577),
    g = n(111582),
    f = n(16619),
    w = n(656788),
    m = n(980707),
    v = n(477782),
    y = n(220859),
    D = n(248675),
    z = n(105292);
function I(e) {
    let { onImport: l, importDisabled: n } = e;
    return (0, t.jsxs)(m.W, {
        navId: "conjure-rail",
        onClose: u.Z_,
        onSelect: u.Z_,
        "aria-label": z.intl.string(D.default.uk6jhJ),
        children: [
            (0, t.jsxs)(v.rX, {
                children: [
                    (0, t.jsx)(v.Dr, { id: "new-project", label: z.intl.string(D.default["34+ZcS"]), action: A.o3 }),
                    (0, t.jsx)(v.Dr, { id: "import", label: z.intl.string(D.default.tx8Azx), disabled: n, action: l }),
                ],
            }),
            (0, t.jsx)(v.rX, {
                children: (0, t.jsx)(v.Dr, { id: "unpin", label: z.intl.string(D.default.dFMslg), action: y.l }),
            }),
        ],
    });
}
var M = n(698603);
function S() {
    let e = (0, i.zy)();
    (0, C.A)(e);
    let l = (0, k.tb)(e.pathname),
        [n, m] = r.useState(!1),
        v = (0, s.Vd)("conjure"),
        { status: y, unreadProjectCount: S } = (0, w.A)(),
        _ = y?.kind === "working",
        B = (0, f.rX)("ConjureRailButton"),
        N = (0, g.A)(B, A.Ay),
        { open: X } = N,
        Z = z.intl.string(D.default.uk6jhJ),
        J = r.useCallback(() => (0, A.Ay)(l ? null : void 0), [l]),
        L = r.useCallback((e) => (0, u.jA)(e, () => (0, t.jsx)(I, { onImport: X, importDisabled: null == B })), [X, B]);
    return (0, t.jsxs)(h.c, {
        children: [
            (0, t.jsx)(j.A, { overlay: !0, selected: l, hovered: n }),
            (0, t.jsx)(x.A, {
                hideOnClick: !0,
                text: Z,
                selected: l,
                children: (0, t.jsx)(a.Q, {
                    selected: !0,
                    lowerBadge: S > 0 ? (0, p.wN)(S) : null,
                    lowerBadgeSize: { width: (0, d.o6)(S) },
                    children: (0, t.jsxs)(o.j, {
                        ...v,
                        ariaLabel: Z,
                        "aria-selected": l,
                        selected: (l || n) && !_,
                        className: M.A,
                        onClick: J,
                        onContextMenu: L,
                        onMouseEnter: () => m(!0),
                        onMouseLeave: () => m(!1),
                        children: [
                            (0, t.jsx)(b.Ay, { projectId: _ ? y.projectId : null }),
                            (0, t.jsx)(c.D, { size: "md", color: "currentColor", className: M.K }),
                        ],
                    }),
                }),
            }),
            N.input,
        ],
    });
}
