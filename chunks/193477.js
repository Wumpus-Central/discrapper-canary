n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    r = n(462887),
    a = n(534514),
    o = n(834730),
    d = n(629584),
    c = n(544028),
    u = n(71393),
    m = n(555337),
    g = n(199940),
    h = n(132514),
    x = n(399056),
    _ = n(914191),
    p = n(803064),
    A = n(213351),
    E = n(429526),
    f = n(758023),
    j = n(985018),
    N = n(327084),
    I = n(87906),
    C = n(467069),
    b = n(544351),
    v = n(361776);
function S(e) {
    let { guild: t, saveOnClose: n } = e,
        [u, m] = l.useState("new"),
        S = l.useMemo(
            () => [
                { value: "new", name: j.intl.string(j.t["4e5u3l"]) },
                { value: "existing", name: j.intl.string(j.t.cmkOsU) },
            ],
            [],
        ),
        T = (0, s.bG)([c.A], () => c.A.theme);
    l.useEffect(
        () => () => {
            let e = h.A.getSettings();
            (0, g.W5)(t.id, e);
        },
        [n, t.id],
    );
    let y = l.useMemo(() => ((0, r.q)(T) ? ("existing" === u ? C : v) : "existing" === u ? I : b), [u, T]);
    return (0, i.jsxs)("div", {
        className: N.MY,
        children: [
            (0, i.jsxs)("div", {
                className: N.Cd,
                children: [
                    (0, i.jsx)(a.D, {
                        className: N.wx,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t.tbUZVr),
                    }),
                    (0, i.jsx)("div", {
                        className: N.eg,
                        children: (0, i.jsx)(o.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t.DvHCq5),
                        }),
                    }),
                    (0, i.jsx)("div", { className: N.uW, children: (0, i.jsx)(f.A, { guildId: t.id }) }),
                    (0, i.jsx)("div", { className: N.DY }),
                    (0, i.jsx)(a.D, {
                        className: N.wx,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t["roY/wu"]),
                    }),
                    (0, i.jsx)("div", {
                        className: N.eg,
                        children: (0, i.jsx)(o.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/lWYYS"], {}),
                        }),
                    }),
                    (0, i.jsx)("div", { className: N.uW, children: (0, i.jsx)(_.A, {}) }),
                    (0, i.jsx)(x.A, { guildId: t.id }),
                    (0, i.jsx)("div", { className: N.DY }),
                    (0, i.jsx)(a.D, {
                        className: N.wx,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t.hEjHyH),
                    }),
                    (0, i.jsxs)("div", {
                        className: N.eg,
                        children: [
                            (0, i.jsx)(o.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: j.intl.string(j.t.YnvKVE),
                            }),
                            (0, i.jsxs)("ul", {
                                className: N.fF,
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: j.intl.string(j.t["6jEvRU"]),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: j.intl.string(j.t["Fq+UsH"]),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: j.intl.string(j.t.LeEPoH),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: N.uW,
                        children: [(0, i.jsx)(E.A, { guildId: t.id }), (0, i.jsx)(A.A, { guildId: t.id })],
                    }),
                    (0, i.jsx)("div", { className: N.DY }),
                    (0, i.jsx)(p.A, { guild: t }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: N.DK,
                children: [
                    (0, i.jsx)("div", {
                        className: N.YB,
                        children: (0, i.jsx)(o.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t.EVV6uZ),
                        }),
                    }),
                    (0, i.jsx)("img", { className: N.oz, src: y, alt: j.intl.string(j.t.ST4UOy) }),
                    (0, i.jsx)(d.I, { options: S, value: u, onChange: (e) => m(e.value), look: "pill" }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { saveOnClose: t } = e,
        n = (0, s.bG)([m.A, u.A], () => {
            let e = m.A.getGuildId();
            return u.A.getGuild(e);
        });
    return null == n ? null : (0, i.jsx)(S, { guild: n, saveOnClose: t });
}
