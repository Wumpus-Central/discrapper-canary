a.d(l, { A: () => z });
var s = a(477900),
    n = a(582128),
    i = a(503698),
    t = a.n(i),
    r = a(17928),
    d = a(297264),
    c = a(866665),
    o = a(408278),
    u = a(95635),
    x = a(366605),
    m = a(364522),
    j = a(683438),
    h = a(939249),
    p = a(152367),
    b = a(834730),
    g = a(525113),
    k = a(574790),
    C = a(380654),
    v = a(434279),
    N = a(972013),
    f = a(220859),
    A = a(111582),
    y = a(101766),
    D = a(248675),
    I = a(105292),
    w = a(5127);
function z(e) {
    let { selectedProjectId: l, workspaceGuildId: a, onNavigate: i } = e,
        [z, P] = n.useState(""),
        E = n.useId(),
        S = (0, y.A)("sidebar"),
        U = n.useCallback((e) => i(e.id), [i]),
        q = n.useCallback(
            (e) => {
                let l = (0, v.wu)(e) ?? a;
                return null != l ? (0, s.jsx)(C.S, { project: e, guildId: l }) : null;
            },
            [a],
        ),
        G = n.useCallback(
            (e, l) => {
                let s = (0, v.wu)(l) ?? a;
                null != s && (0, C.V)(e, l, s);
            },
            [a],
        ),
        K = (0, A.A)(a, i),
        _ = (0, r.bG)([N.A], () => N.A.isPinned()),
        H = I.intl.string(D.default.tx8Azx),
        J = I.intl.string(D.default["DE7U+m"]),
        W = null == l;
    return (0, s.jsxs)("nav", {
        className: w.pz,
        "aria-label": I.intl.string(D.default.uk6jhJ),
        children: [
            (0, s.jsxs)("header", {
                className: w.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: w.DD,
                        children: [
                            (0, s.jsx)(d.D, {
                                variant: "display-sm",
                                color: "text-strong",
                                className: w.Ss,
                                children: I.intl.string(D.default.uk6jhJ),
                            }),
                            (0, s.jsx)(g.A, { className: w.vr }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: w.$s,
                        children: [
                            (0, s.jsx)(c.m, {
                                text: H,
                                position: "bottom",
                                asContainer: !0,
                                ariaHidden: !0,
                                children: (0, s.jsx)(o.K, {
                                    icon: u.UploadIcon,
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-label": H,
                                    loading: K.importing,
                                    disabled: null == a,
                                    onClick: K.open,
                                }),
                            }),
                            _
                                ? null
                                : (0, s.jsx)(c.m, {
                                      text: J,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, s.jsx)(o.K, {
                                          icon: x.t,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": J,
                                          onClick: f._,
                                      }),
                                  }),
                            K.input,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(m.Ip, {
                ref: S,
                className: w.XG,
                fade: !0,
                children: [
                    (0, s.jsx)("div", {
                        className: w.$P,
                        children: (0, s.jsx)(j.I, {
                            query: z,
                            onChange: P,
                            onClear: () => P(""),
                            size: "sm",
                            placeholder: I.intl.string(D.default["2y8sUh"]),
                            "aria-label": I.intl.string(D.default.u0kEN9),
                        }),
                    }),
                    (0, s.jsxs)(h.D, {
                        className: t()(w.ap, w.QI, { [w.Xw]: W }),
                        "aria-current": W ? "page" : void 0,
                        onClick: () => i(null),
                        children: [
                            (0, s.jsx)("span", {
                                className: w.DW,
                                children: (0, s.jsx)(p.D, { size: "md", color: "currentColor" }),
                            }),
                            (0, s.jsx)(b.E, {
                                variant: "text-md/medium",
                                color: "none",
                                children: I.intl.string(D.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, s.jsxs)("section", {
                        "aria-labelledby": E,
                        className: w.uW,
                        children: [
                            (0, s.jsx)(b.E, {
                                id: E,
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: w.Gf,
                                role: "heading",
                                "aria-level": 3,
                                children: I.intl.string(D.default.lqroiy),
                            }),
                            (0, s.jsx)(k.A, {
                                query: z,
                                onSelect: U,
                                selectedProjectId: l,
                                renderProjectActions: q,
                                onProjectContextMenu: G,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
