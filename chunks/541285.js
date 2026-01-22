n.d(t, { Ay: () => w }), n(65821), n(896048), n(867070), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(136722),
    c = n(311907),
    o = n(990078),
    d = n(397927),
    u = n(386849),
    f = n(942234),
    g = n(576705),
    b = n(287809),
    m = n(954571),
    p = n(558393),
    x = n(488926),
    h = n(636042),
    j = n(526855),
    O = n(785312),
    y = n(316506),
    v = n(631103),
    A = n(927573),
    E = n(652215),
    N = n(985018),
    _ = n(276317),
    S = n(261223);
function T(e) {
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
        s = (0, c.bG)([b.default], () => b.default.getCurrentUser()),
        u = i.useMemo(
            () =>
                x.cc({
                    user: s,
                    context: t,
                }),
            [s, t],
        ),
        f = i.useMemo(() => ({ [n.id]: I(T({}, n), { permissions: x.x3 }) }), [n]),
        g = i.useMemo(
            () =>
                x.cc({
                    user: s,
                    context: t,
                    roles: f,
                }),
            [s, t, f],
        ),
        m = !a.aI(u, g);
    return (0, r.jsx)(o.m, {
        text: m ? N.intl.string(N.t["IQ/6Sg"]) : null,
        position: "top",
        children: (0, r.jsx)("div", {
            className: _.FS,
            children: (0, r.jsx)(d.QWc, {
                variant: "primary",
                textVariant: "text-sm/semibold",
                onClick: () => (0, h.Y_)(n.id),
                disabled: a.aI(n.permissions, x.x3) || m || l,
                text: N.intl.string(N.t["UYq7+O"]),
            }),
        }),
    });
}
function P(e) {
    let { guild: t, role: n, specs: i, locked: l } = e,
        { enabled: s } = u.A.useExperiment({
            location: "PermissionsList",
            guildId: t.id,
        });
    if (0 === i.length)
        return (0, r.jsxs)("div", {
            className: _.pb,
            children: [
                (0, r.jsx)(j.A, { className: _.wV }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: N.intl.string(N.t.DEBGqA),
                }),
            ],
        });
    function c(e) {
        return g.A.can(e, t)
            ? !g.A.can(e, t, null, { [n.id]: I(T({}, n), { permissions: a.TF(n.permissions, e) }) }) &&
                  N.intl.string(N.t["K+D+GF"])
            : N.intl.string(N.t.nOtPMM);
    }
    return (0, r.jsxs)("div", {
        className: _.eZ,
        children: [
            (0, r.jsx)(C, {
                guild: t,
                role: n,
                locked: l,
            }),
            i.map((e, i) =>
                (0, r.jsx)(
                    f.A,
                    {
                        className: _.p2,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ("string" == typeof t) throw Error("Unexpected string `allow`");
                            (0, h.Ul)(n.id, e, t);
                        },
                        permissionRender: c,
                        hasBypassSlowmodePermission: s,
                        guildId: t.id,
                    },
                    i,
                ),
            ),
        ],
    });
}
function w(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, initialSearchQuery: c } = e,
        [o, u] = i.useState(null != c ? c : ""),
        f = i
            .useMemo(() => p.A.generateGuildPermissionSpec(t), [t])
            .map((e) =>
                I(T({}, e), {
                    permissions: e.permissions.filter((e) => {
                        let t = o.trimStart().toLowerCase();
                        return (
                            e.title.toLowerCase().includes(t) ||
                            (null != e.description && e.description.toString().toLowerCase().includes(t))
                        );
                    }),
                }),
            )
            .filter((e) => e.permissions.length > 0),
        { headerHeight: g, headerRef: b } = (0, O.A)(0),
        { scrolledToTop: x, handleScroll: h } = (0, y.u)(),
        j = i.useRef(!1);
    return (
        i.useEffect(() => {
            j.current ||
                "" === o.trimStart() ||
                (m.default.track(E.HAw.SEARCH_STARTED, { search_type: "Permissions" }), (j.current = !0));
        }, [o]),
        (0, r.jsx)(d.GtU, {
            className: _.XG,
            style: { scrollPaddingTop: g },
            onScroll: h,
            children: (0, r.jsxs)("div", {
                className: S.Q,
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(S.wx, S.ln, { [S.l6]: !x }),
                        ref: b,
                        children: [
                            (0, r.jsx)(y.A, {
                                guild: t,
                                role: n,
                                selectedSection: A.T$.PERMISSIONS,
                                setSelectedSection: a,
                            }),
                            (0, r.jsx)("div", {
                                className: _.U9,
                                children: (0, r.jsx)(v.A, { role: n }),
                            }),
                            (0, r.jsx)("div", {
                                className: _.MT,
                                children: (0, r.jsx)(d.IWV, {
                                    query: o,
                                    onChange: u,
                                    onClear: () => u(""),
                                    placeholder: N.intl.string(N.t.OLJAk3),
                                    "aria-label": N.intl.string(N.t.OLJAk3),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(P, {
                        guild: t,
                        role: n,
                        specs: f,
                        locked: l,
                    }),
                ],
            }),
        })
    );
}
