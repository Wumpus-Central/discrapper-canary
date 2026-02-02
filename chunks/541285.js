n.d(t, {
    Ay: () => P,
}),
    n(65821),
    n(896048),
    n(867070),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(136722),
    o = n(311907),
    c = n(990078),
    d = n(397927),
    u = n(942234),
    g = n(576705),
    m = n(287809),
    p = n(954571),
    f = n(558393),
    h = n(488926),
    b = n(636042),
    x = n(526855),
    j = n(785312),
    _ = n(316506),
    O = n(631103),
    v = n(927573),
    y = n(652215),
    A = n(985018),
    E = n(276317),
    N = n(261223);

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

function I(e, t) {
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

function C(e) {
    let { guild: t, role: n, locked: l } = e,
        s = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        u = i.useMemo(
            () =>
                h.cc({
                    user: s,
                    context: t,
                }),
            [s, t],
        ),
        g = i.useMemo(
            () => ({
                [n.id]: I(S({}, n), {
                    permissions: h.x3,
                }),
            }),
            [n],
        ),
        p = i.useMemo(
            () =>
                h.cc({
                    user: s,
                    context: t,
                    roles: g,
                }),
            [s, t, g],
        ),
        f = !a.aI(u, p);
    return (0, r.jsx)(c.m, {
        text: f ? A.intl.string(A.t["IQ/6Sg"]) : null,
        position: "top",
        children: (0, r.jsx)("div", {
            className: E.FS,
            children: (0, r.jsx)(d.QWc, {
                variant: "primary",
                textVariant: "text-sm/semibold",
                onClick: () => (0, b.Y_)(n.id),
                disabled: a.aI(n.permissions, h.x3) || f || l,
                text: A.intl.string(A.t["UYq7+O"]),
            }),
        }),
    });
}

function T(e) {
    let { guild: t, role: n, specs: i, locked: l } = e;
    if (0 === i.length)
        return (0, r.jsxs)("div", {
            className: E.pb,
            children: [
                (0, r.jsx)(x.A, {
                    className: E.wV,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: A.intl.string(A.t.DEBGqA),
                }),
            ],
        });

    function s(e) {
        return g.A.can(e, t)
            ? !g.A.can(e, t, null, {
                  [n.id]: I(S({}, n), {
                      permissions: a.TF(n.permissions, e),
                  }),
              }) && A.intl.string(A.t["K+D+GF"])
            : A.intl.string(A.t.nOtPMM);
    }
    return (0, r.jsxs)("div", {
        className: E.eZ,
        children: [
            (0, r.jsx)(C, {
                guild: t,
                role: n,
                locked: l,
            }),
            i.map((e, i) =>
                (0, r.jsx)(
                    u.A,
                    {
                        className: E.p2,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ("string" == typeof t) throw Error("Unexpected string `allow`");
                            (0, b.Ul)(n.id, e, t);
                        },
                        permissionRender: s,
                        guildId: t.id,
                    },
                    i,
                ),
            ),
        ],
    });
}

function P(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, initialSearchQuery: o } = e,
        [c, u] = i.useState(null != o ? o : ""),
        g = i
            .useMemo(() => f.A.generateGuildPermissionSpec(t), [t])
            .map((e) =>
                I(S({}, e), {
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
        { headerHeight: m, headerRef: h } = (0, j.A)(0),
        { scrolledToTop: b, handleScroll: x } = (0, _.u)(),
        C = i.useRef(!1);
    return (
        i.useEffect(() => {
            C.current ||
                "" === c.trimStart() ||
                (p.default.track(y.HAw.SEARCH_STARTED, {
                    search_type: "Permissions",
                }),
                (C.current = !0));
        }, [c]),
        (0, r.jsx)(d.GtU, {
            className: E.XG,
            style: {
                scrollPaddingTop: m,
            },
            onScroll: x,
            children: (0, r.jsxs)("div", {
                className: N.Q,
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(N.wx, N.ln, {
                            [N.l6]: !b,
                        }),
                        ref: h,
                        children: [
                            (0, r.jsx)(_.A, {
                                guild: t,
                                role: n,
                                selectedSection: v.T$.PERMISSIONS,
                                setSelectedSection: a,
                            }),
                            (0, r.jsx)("div", {
                                className: E.U9,
                                children: (0, r.jsx)(O.A, {
                                    role: n,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: E.MT,
                                children: (0, r.jsx)(d.IWV, {
                                    query: c,
                                    onChange: u,
                                    onClear: () => u(""),
                                    placeholder: A.intl.string(A.t.OLJAk3),
                                    "aria-label": A.intl.string(A.t.OLJAk3),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(T, {
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
