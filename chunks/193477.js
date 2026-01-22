n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(582754),
    a = n(397927),
    c = n(544028),
    o = n(71393),
    d = n(555337),
    u = n(199940),
    f = n(132514),
    g = n(399056),
    b = n(914191),
    m = n(803064),
    p = n(435732),
    x = n(429526),
    h = n(758023),
    j = n(985018),
    O = n(659233),
    y = n(87906),
    v = n(467069),
    A = n(544351),
    E = n(361776);

function N(e) {
    let { guild: t, saveOnClose: n } = e,
        [o, d] = i.useState("new"),
        N = i.useMemo(
            () => [
                {
                    value: "new",
                    name: j.intl.string(j.t["4e5u3l"]),
                },
                {
                    value: "existing",
                    name: j.intl.string(j.t.cmkOsU),
                },
            ],
            [],
        ),
        _ = (0, l.bG)([c.A], () => c.A.theme);
    i.useEffect(
        () => () => {
            let e = f.A.getSettings();
            (0, u.W5)(t.id, e);
        },
        [n, t.id],
    );
    let S = i.useMemo(() => ((0, s.qB)(_) ? ("existing" === o ? v : E) : "existing" === o ? y : A), [o, _]);
    return (0, r.jsxs)("div", {
        className: O.MY,
        children: [
            (0, r.jsxs)("div", {
                className: O.Cd,
                children: [
                    (0, r.jsx)(a.Heading, {
                        className: O.wx,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t.tbUZVr),
                    }),
                    (0, r.jsx)("div", {
                        className: O.eg,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t.DvHCq5),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: O.uW,
                        children: (0, r.jsx)(h.A, {
                            guildId: t.id,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: O.DY,
                    }),
                    (0, r.jsx)(a.Heading, {
                        className: O.wx,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t["roY/wu"]),
                    }),
                    (0, r.jsx)("div", {
                        className: O.eg,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.format(j.t["/lWYYS"], {}),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: O.uW,
                        children: (0, r.jsx)(b.A, {}),
                    }),
                    (0, r.jsx)(g.A, {
                        guildId: t.id,
                    }),
                    (0, r.jsx)("div", {
                        className: O.DY,
                    }),
                    (0, r.jsx)(a.Heading, {
                        className: O.wx,
                        variant: "heading-lg/extrabold",
                        children: j.intl.string(j.t.hEjHyH),
                    }),
                    (0, r.jsxs)("div", {
                        className: O.eg,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: j.intl.string(j.t.YnvKVE),
                            }),
                            (0, r.jsxs)("ul", {
                                className: O.fF,
                                children: [
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: j.intl.string(j.t["6jEvRU"]),
                                        }),
                                    }),
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-default",
                                            children: j.intl.string(j.t["Fq+UsH"]),
                                        }),
                                    }),
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(a.Text, {
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
                    (0, r.jsxs)("div", {
                        className: O.uW,
                        children: [
                            (0, r.jsx)(x.A, {
                                guildId: t.id,
                            }),
                            (0, r.jsx)(p.A, {
                                guildId: t.id,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: O.DY,
                    }),
                    (0, r.jsx)(m.A, {
                        guild: t,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: O.DK,
                children: [
                    (0, r.jsx)("div", {
                        className: O.YB,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t.EVV6uZ),
                        }),
                    }),
                    (0, r.jsx)("img", {
                        className: O.oz,
                        src: S,
                        alt: j.intl.string(j.t.ST4UOy),
                    }),
                    (0, r.jsx)(a.IzF, {
                        options: N,
                        value: o,
                        onChange: (e) => d(e.value),
                        look: "pill",
                    }),
                ],
            }),
        ],
    });
}

function _(e) {
    let { saveOnClose: t } = e,
        n = (0, l.bG)([d.A, o.A], () => {
            let e = d.A.getGuildId();
            return o.A.getGuild(e);
        });
    return null == n
        ? null
        : (0, r.jsx)(N, {
              guild: n,
              saveOnClose: t,
          });
}
