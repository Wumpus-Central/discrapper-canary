(a.r(l), a.d(l, { default: () => _ }));
var n = a(477900),
    s = a(582128),
    i = a(806163),
    t = a(97005),
    r = a(16619),
    d = a(751841),
    c = a(381991),
    o = a(503698),
    u = a.n(o),
    x = a(17928),
    j = a(297264),
    m = a(866665),
    p = a(408278),
    h = a(95635),
    b = a(366605),
    g = a(364522),
    C = a(683438),
    f = a(939249),
    k = a(152367),
    v = a(834730),
    N = a(525113),
    A = a(919229),
    I = a(380654),
    y = a(434279),
    w = a(972013),
    D = a(927731),
    z = a(111582),
    P = a(101766),
    S = a(248675),
    E = a(105292),
    G = a(5127);
function U(e) {
    let { selectedProjectId: l, workspaceGuildId: a, onNavigate: i } = e,
        [t, r] = s.useState(""),
        d = s.useId(),
        c = (0, P.A)("sidebar"),
        o = s.useCallback((e) => i(e.id), [i]),
        U = s.useCallback(
            (e) => {
                let l = (0, y.wu)(e) ?? a;
                return null != l ? (0, n.jsx)(I.S, { project: e, guildId: l }) : null;
            },
            [a],
        ),
        W = s.useCallback(
            (e, l) => {
                let n = (0, y.wu)(l) ?? a;
                null != n && (0, I.V)(e, l, n);
            },
            [a],
        ),
        _ = (0, z.A)(a, i),
        q = (0, x.bG)([w.A], () => w.A.isPinned()),
        K = E.intl.string(S.default.tx8Azx),
        X = E.intl.string(S.default["DE7U+m"]),
        H = null == l;
    return (0, n.jsxs)("nav", {
        className: G.pz,
        "aria-label": E.intl.string(S.default.uk6jhJ),
        children: [
            (0, n.jsxs)("header", {
                className: G.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: G.DD,
                        children: [
                            (0, n.jsx)(j.D, {
                                variant: "display-sm",
                                color: "text-strong",
                                className: G.Ss,
                                children: E.intl.string(S.default.uk6jhJ),
                            }),
                            (0, n.jsx)(N.A, { className: G.vr }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: G.$s,
                        children: [
                            (0, n.jsx)(m.m, {
                                text: K,
                                position: "bottom",
                                asContainer: !0,
                                ariaHidden: !0,
                                children: (0, n.jsx)(p.K, {
                                    icon: h.UploadIcon,
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": K,
                                    loading: _.importing,
                                    disabled: null == a,
                                    onClick: _.open,
                                }),
                            }),
                            q
                                ? null
                                : (0, n.jsx)(m.m, {
                                      text: X,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, n.jsx)(p.K, {
                                          icon: b.t,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": X,
                                          onClick: D._,
                                      }),
                                  }),
                            _.input,
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)(g.Ip, {
                ref: c,
                className: G.XG,
                fade: !0,
                children: [
                    (0, n.jsx)("div", {
                        className: G.$P,
                        children: (0, n.jsx)(C.I, {
                            query: t,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                            placeholder: E.intl.string(S.default["2y8sUh"]),
                            "aria-label": E.intl.string(S.default.u0kEN9),
                        }),
                    }),
                    (0, n.jsxs)(f.D, {
                        className: u()(G.ap, G.QI, { [G.Xw]: H }),
                        "aria-current": H ? "page" : void 0,
                        onClick: () => i(null),
                        children: [
                            (0, n.jsx)("span", {
                                className: G.DW,
                                children: (0, n.jsx)(k.D, { size: "md", color: "currentColor" }),
                            }),
                            (0, n.jsx)(v.E, {
                                variant: "text-md/medium",
                                color: "none",
                                children: E.intl.string(S.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("section", {
                        "aria-labelledby": d,
                        className: G.uW,
                        children: [
                            (0, n.jsx)(v.E, {
                                id: d,
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: G.Gf,
                                role: "heading",
                                "aria-level": 3,
                                children: E.intl.string(S.default.lqroiy),
                            }),
                            (0, n.jsx)(A.A, {
                                query: t,
                                onSelect: o,
                                selectedProjectId: l,
                                renderProjectActions: U,
                                onProjectContextMenu: W,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function W() {
    let e = (0, i.W5)({ path: d._g, exact: !0 }),
        l = (0, r.rX)("ConjureAppSidebar");
    return (0, n.jsx)(U, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: l, onNavigate: c.A });
}
function _() {
    return (0, t.TW)("ConjureAppSidebar") ? (0, n.jsx)(W, {}) : null;
}
