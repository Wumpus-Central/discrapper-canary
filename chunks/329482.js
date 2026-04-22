a.d(t, { A: () => y });
var n = a(627968);
a(64700);
var l = a(503698),
    i = a.n(l),
    s = a(136722),
    r = a(311907),
    o = a(933832),
    d = a(789645),
    c = a(834730),
    u = a(534514),
    m = a(47167),
    h = a(734057),
    p = a(71393),
    x = a(576705),
    g = a(309010),
    v = a(967198),
    b = a(558393),
    _ = a(737045),
    f = a(842681),
    j = a(505206);
function A(e) {
    let { title: t, can: a } = e,
        l = a ? o.A : d.P,
        s = (0, n.jsx)("div", { className: i()(f.v_, a ? f.uU : f.Ss), children: (0, n.jsx)(l, { className: f.Kk }) });
    return (0, n.jsxs)("div", {
        className: f.z8,
        children: [
            s,
            (0, n.jsx)("div", {
                className: f.rv,
                children: (0, n.jsx)(c.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function y() {
    let e = (0, r.bG)([g.A], () => g.A.getChannelId()),
        t = (0, r.bG)([v.A], () => v.A.getGuildId()),
        a = (0, r.bG)([h.A], () => h.A.getChannel(e)),
        l = (0, r.bG)([p.A], () => p.A.getGuild(t)),
        o = (0, r.bG)([x.A], () => x.A.computePermissions(a)),
        d = (0, r.bG)([x.A], () => x.A.computePermissions(l)),
        c = (0, m.Ay)(a, !0),
        y = null != a ? (0, _.mW)(a, !1) : null,
        C = null != l ? b.A.getGuildPermissionSpecMap(l) : null,
        E = Object.values(y ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                l = s.zy(o, a);
            return (0, n.jsx)(A, { title: t, can: l }, t);
        }),
        S = Object.values(C ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                l = s.zy(d, a);
            return (0, n.jsx)(A, { title: t, can: l }, t);
        });
    return (0, n.jsx)("div", {
        className: i()(j.nd, f.nd),
        children: (0, n.jsxs)("div", {
            className: f.l$,
            children: [
                (0, n.jsxs)("section", {
                    className: f.uW,
                    children: [
                        (0, n.jsx)(u.D, {
                            variant: "heading-md/semibold",
                            children: null != c ? `Permissions in ${c}` : "No channel selected",
                        }),
                        E,
                    ],
                }),
                (0, n.jsxs)("section", {
                    className: f.uW,
                    children: [
                        (0, n.jsx)(u.D, {
                            variant: "heading-md/semibold",
                            children: null != l ? `Permissions in ${l.name}` : "No guild selected",
                        }),
                        S,
                    ],
                }),
            ],
        }),
    });
}
