"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(582754),
    a = n(397927),
    o = n(544028),
    d = n(71393),
    c = n(555337),
    u = n(199940),
    m = n(132514),
    g = n(399056),
    x = n(914191),
    h = n(803064),
    _ = n(435732),
    A = n(429526),
    p = n(758023),
    f = n(985018),
    j = n(659233),
    N = n(87906),
    E = n(467069),
    b = n(544351),
    T = n(361776);
function C(e) {
    let { guild: t, saveOnClose: n } = e,
        [d, c] = s.useState("new"),
        C = s.useMemo(
            () => [
                { value: "new", name: f.intl.string(f.t["4e5u3l"]) },
                { value: "existing", name: f.intl.string(f.t.cmkOsU) },
            ],
            [],
        ),
        I = (0, l.bG)([o.A], () => o.A.theme);
    s.useEffect(
        () => () => {
            let e = m.A.getSettings();
            (0, u.W5)(t.id, e);
        },
        [n, t.id],
    );
    let v = s.useMemo(() => ((0, r.qB)(I) ? ("existing" === d ? E : T) : "existing" === d ? N : b), [d, I]);
    return (0, i.jsxs)("div", {
        className: j.MY,
        children: [
            (0, i.jsxs)("div", {
                className: j.Cd,
                children: [
                    (0, i.jsx)(a.Heading, {
                        className: j.wx,
                        variant: "heading-lg/extrabold",
                        children: f.intl.string(f.t.tbUZVr),
                    }),
                    (0, i.jsx)("div", {
                        className: j.eg,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: f.intl.string(f.t.DvHCq5),
                        }),
                    }),
                    (0, i.jsx)("div", { className: j.uW, children: (0, i.jsx)(p.A, { guildId: t.id }) }),
                    (0, i.jsx)("div", { className: j.DY }),
                    (0, i.jsx)(a.Heading, {
                        className: j.wx,
                        variant: "heading-lg/extrabold",
                        children: f.intl.string(f.t["roY/wu"]),
                    }),
                    (0, i.jsx)("div", {
                        className: j.eg,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: f.intl.format(f.t["/lWYYS"], {}),
                        }),
                    }),
                    (0, i.jsx)("div", { className: j.uW, children: (0, i.jsx)(x.A, {}) }),
                    (0, i.jsx)(g.A, { guildId: t.id }),
                    (0, i.jsx)("div", { className: j.DY }),
                    (0, i.jsx)(a.Heading, {
                        className: j.wx,
                        variant: "heading-lg/extrabold",
                        children: f.intl.string(f.t.hEjHyH),
                    }),
                    (0, i.jsxs)("div", {
                        className: j.eg,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: f.intl.string(f.t.YnvKVE),
                            }),
                            (0, i.jsxs)("ul", {
                                className: j.fF,
                                children: [
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: f.intl.string(f.t["6jEvRU"]),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: f.intl.string(f.t["Fq+UsH"]),
                                        }),
                                    }),
                                    (0, i.jsx)("li", {
                                        children: (0, i.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: f.intl.string(f.t.LeEPoH),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: j.uW,
                        children: [(0, i.jsx)(A.A, { guildId: t.id }), (0, i.jsx)(_.A, { guildId: t.id })],
                    }),
                    (0, i.jsx)("div", { className: j.DY }),
                    (0, i.jsx)(h.A, { guild: t }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: j.DK,
                children: [
                    (0, i.jsx)("div", {
                        className: j.YB,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: f.intl.string(f.t.EVV6uZ),
                        }),
                    }),
                    (0, i.jsx)("img", { className: j.oz, src: v, alt: f.intl.string(f.t.ST4UOy) }),
                    (0, i.jsx)(a.IzF, { options: C, value: d, onChange: (e) => c(e.value), look: "pill" }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { saveOnClose: t } = e,
        n = (0, l.bG)([c.A, d.A], () => {
            let e = c.A.getGuildId();
            return d.A.getGuild(e);
        });
    return null == n ? null : (0, i.jsx)(C, { guild: n, saveOnClose: t });
}
