(n.r(t), n.d(t, { default: () => H }));
var l = n(477900),
    s = n(582128),
    r = n(806163),
    a = n(97005),
    i = n(16619),
    c = n(751841),
    o = n(381991),
    d = n(503698),
    u = n.n(d),
    j = n(17928),
    m = n(297264),
    x = n(866665),
    p = n(408278),
    h = n(366605),
    k = n(364522),
    g = n(683438),
    C = n(939249),
    f = n(152367),
    b = n(834730),
    v = n(525113),
    A = n(441935),
    N = n(260498),
    y = n(741907);
function P(e) {
    let t = (0, y.A)(),
        n = (0, j.bG)([N.Ay], () => N.Ay.getOwnedProjectsFetchState()),
        l = e.trim().toLocaleLowerCase(),
        r = s.useMemo(() => ("" === l ? t : t.filter((e) => e.name.toLocaleLowerCase().includes(l))), [t, l]);
    return r.length > 0
        ? { kind: "projects", projects: r }
        : t.length > 0
          ? { kind: "no_match" }
          : "error" === n
            ? { kind: "error" }
            : "success" !== n
              ? { kind: "loading" }
              : { kind: "empty" };
}
var w = n(821609),
    I = n(289873),
    D = n(371169),
    E = n(186340),
    S = n(809526),
    _ = n(105292),
    z = n(655074);
function U(e) {
    let {
            onSelect: t,
            query: n = "",
            selectedProjectId: s = null,
            renderProjectActions: r,
            onProjectContextMenu: a,
        } = e,
        i = P(n);
    return "projects" === i.kind
        ? (0, l.jsx)(E.A, {
              projects: i.projects,
              onSelect: t,
              selectedProjectId: s,
              renderProjectActions: r,
              onProjectContextMenu: a,
          })
        : "no_match" === i.kind
          ? (0, l.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: z.I,
                children: _.intl.string(S.default.X37fkR),
            })
          : "error" === i.kind
            ? (0, l.jsxs)("div", {
                  className: z.E,
                  children: [
                      (0, l.jsx)(b.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: _.intl.string(S.default.DJAPMO),
                      }),
                      (0, l.jsx)(w.$, {
                          variant: "secondary",
                          size: "sm",
                          text: _.intl.string(S.default["WFJ/vb"]),
                          onClick: () => (0, D.listProjects)(),
                      }),
                  ],
              })
            : "loading" === i.kind
              ? (0, l.jsx)("div", { className: z.E, children: (0, l.jsx)(I.y, {}) })
              : null;
}
var W = n(602991),
    G = n(919485),
    J = n(588359),
    L = n(434279),
    M = n(972013),
    X = n(927731),
    q = n(111582),
    $ = n(101766),
    F = n(5127);
function K(e) {
    let { selectedProjectId: t, workspaceGuildId: n, onNavigate: r } = e,
        [a, i] = s.useState(""),
        c = (0, $.A)("sidebar"),
        o = "empty" === P(a).kind,
        d = s.useCallback((e) => r(e.id, "project_list"), [r]),
        N = s.useCallback(
            (e) => {
                let t = (0, L.wu)(e) ?? n;
                return null != t ? (0, l.jsx)(W.S, { project: e, guildId: t }) : null;
            },
            [n],
        ),
        y = s.useCallback(
            (e, t) => {
                let l = (0, L.wu)(t) ?? n;
                null != l && (0, W.V)(e, t, l);
            },
            [n],
        ),
        w = s.useCallback((e) => r(e, "create"), [r]),
        I = (0, q.A)(n, w),
        D = (0, j.bG)([M.A], () => M.A.isPinned()),
        E = _.intl.string(S.default["DE7U+m"]),
        z = null == t;
    return (0, l.jsxs)("nav", {
        className: F.pz,
        "aria-label": _.intl.string(S.default.uk6jhJ),
        children: [
            (0, l.jsxs)("header", {
                className: F.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: F.DD,
                        children: [
                            (0, l.jsx)(m.D, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                className: F.UU,
                                children: _.intl.string(S.default.uk6jhJ),
                            }),
                            (0, l.jsx)(v.A, { className: F.vr }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: F.$s,
                        children: [
                            (0, l.jsx)(A.A, { importing: I.importing, disabled: null == n, onClick: I.open }),
                            D
                                ? null
                                : (0, l.jsx)(x.m, {
                                      text: E,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, l.jsx)(p.K, {
                                          icon: h.t,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": E,
                                          onClick: X._,
                                      }),
                                  }),
                            I.input,
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(k.Ip, {
                ref: c,
                className: F.XG,
                fade: !0,
                children: [
                    (0, l.jsx)("div", {
                        className: F.$P,
                        children: (0, l.jsx)(g.I, {
                            query: a,
                            onChange: i,
                            onClear: () => i(""),
                            size: "sm",
                            placeholder: _.intl.string(S.default["2y8sUh"]),
                            "aria-label": _.intl.string(S.default.u0kEN9),
                        }),
                    }),
                    (0, l.jsxs)(C.D, {
                        className: u()(F.ap, F.QI, { [F.Xw]: z }),
                        "aria-current": z ? "page" : void 0,
                        onClick: () => r(null),
                        children: [
                            (0, l.jsx)("span", {
                                className: F.DW,
                                children: (0, l.jsx)(f.D, { size: "md", color: "currentColor" }),
                            }),
                            (0, l.jsx)(b.E, {
                                variant: "text-md/medium",
                                color: "none",
                                children: _.intl.string(S.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, l.jsx)(G.A, {
                        title: _.intl.string(S.default.lqroiy),
                        className: F.uW,
                        children: (0, l.jsx)(U, {
                            query: a,
                            onSelect: d,
                            selectedProjectId: t,
                            renderProjectActions: N,
                            onProjectContextMenu: y,
                        }),
                    }),
                ],
            }),
            o ? (0, l.jsx)(J.A, {}) : null,
        ],
    });
}
function O() {
    let e = (0, r.W5)({ path: c._g, exact: !0 }),
        t = (0, i.rX)("ConjureAppSidebar");
    return (0, l.jsx)(K, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: t, onNavigate: o.Ay });
}
function H() {
    return (0, a.TW)("ConjureAppSidebar") ? (0, l.jsx)(O, {}) : null;
}
