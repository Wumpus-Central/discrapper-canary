n.d(t, { A: () => j });
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(136722),
    s = n(311907),
    o = n(397927),
    c = n(47167),
    d = n(734057),
    u = n(71393),
    m = n(576705),
    p = n(309010),
    h = n(967198),
    f = n(558393),
    x = n(737045),
    b = n(574068),
    g = n(661251);
function v(e) {
    let { title: t, can: n } = e,
        l = n ? o.A9s : o.PGe,
        r = (0, a.jsx)("div", {
            className: i()(b.v_, n ? b.uU : b.Ss),
            children: (0, a.jsx)(l, { className: b.Kk }),
        });
    return (0, a.jsxs)("div", {
        className: b.z8,
        children: [
            r,
            (0, a.jsx)("div", {
                className: b.rv,
                children: (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: t,
                }),
            }),
        ],
    });
}
function j() {
    let e = (0, s.bG)([p.A], () => p.A.getChannelId()),
        t = (0, s.bG)([h.A], () => h.A.getGuildId()),
        n = (0, s.bG)([d.A], () => d.A.getChannel(e)),
        l = (0, s.bG)([u.A], () => u.A.getGuild(t)),
        j = (0, s.bG)([m.A], () => m.A.computePermissions(n)),
        y = (0, s.bG)([m.A], () => m.A.computePermissions(l)),
        _ = (0, c.Ay)(n, !0),
        A = null != n ? (0, x.mW)(n, !1) : null,
        C = null != l ? f.A.getGuildPermissionSpecMap(l) : null,
        S = Object.values(null != A ? A : {}).map((e) => {
            let { title: t, flag: n } = e,
                l = r.zy(j, n);
            return (0, a.jsx)(
                v,
                {
                    title: t,
                    can: l,
                },
                t,
            );
        }),
        O = Object.values(null != C ? C : {}).map((e) => {
            let { title: t, flag: n } = e,
                l = r.zy(y, n);
            return (0, a.jsx)(
                v,
                {
                    title: t,
                    can: l,
                },
                t,
            );
        });
    return (0, a.jsx)("div", {
        className: i()(g.nd, b.nd),
        children: (0, a.jsxs)("div", {
            className: b.l$,
            children: [
                (0, a.jsxs)("section", {
                    className: b.uW,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: null != _ ? "Permissions in ".concat(_) : "No channel selected",
                        }),
                        S,
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: b.uW,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: null != l ? "Permissions in ".concat(l.name) : "No guild selected",
                        }),
                        O,
                    ],
                }),
            ],
        }),
    });
}
