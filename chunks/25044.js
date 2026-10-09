n.d(t, { A: () => m });
var i = n(477900),
    r = n(582128),
    a = n(91871),
    s = n.n(a),
    l = n(477782),
    o = n(858899),
    d = n(241326),
    c = n(583650),
    u = n(100392),
    _ = n(102609),
    E = n(386976),
    A = n(32523),
    h = n(769054),
    f = n(957565),
    I = n(96919),
    p = n(660183);
function T(e) {
    let { id: t, experiment: n, currentBucket: r, system: a } = e,
        s = (0, h.h)(n);
    return (0, i.jsxs)(
        l.Dr,
        {
            id: t.replaceAll("--", "__"),
            label: n.title,
            action: () => (0, _.t$)(a, t, null),
            children: [
                s.map((e) =>
                    (0, i.jsx)(
                        l.sL,
                        {
                            id: `${e.id}`,
                            label: e.label,
                            checked: e.id === r?.variantId,
                            action: () => (0, _.t$)(a, t, e.id),
                        },
                        `${e.id}`,
                    ),
                ),
                (0, i.jsxs)(l.rX, {
                    children: [
                        f.p5 &&
                            (0, i.jsx)(l.Dr, {
                                id: "copy-link",
                                label: "Copy Link",
                                action: () => {
                                    let e = (0, u.yA)(t);
                                    (0, f.C)(e, () => {
                                        (0, o.P0)({ text: "Copied experiment link", variant: "success" });
                                    });
                                },
                            }),
                        null != r &&
                            (0, i.jsx)(l.Dr, {
                                id: "clear-override",
                                label: "Clear Override",
                                color: "danger",
                                icon: d.TrashIcon,
                                action: () => (0, _.t$)(a, t, null),
                            }),
                    ],
                }),
            ],
        },
        t,
    );
}
function m() {
    let { experiments: e, overridesInfo: t } = (0, A.hI)(),
        { experiments: n, overridesInfo: a } = (0, E.op)(),
        o = r.useMemo(() => {
            let i = { ...e, ...n },
                r = { ...t, ...a };
            return (0, I.R3)((0, I.Fm)(i), r).map((e) => {
                let { id: t, experiment: n } = e;
                return { id: t, experiment: n, currentBucket: r[t], system: n.system };
            });
        }, [e, t, n, a]),
        [d, u] = r.useState(""),
        [_, h] = r.useState([]);
    r.useEffect(() => {
        0 === d.trim().length ? h(o) : h(o.filter((e) => s()(d, e.experiment.title.toLowerCase())));
    }, [o, d]);
    let f = r.useMemo(
            () =>
                o.filter((e) => {
                    let { currentBucket: t } = e;
                    return null != t;
                }),
            [o],
        ),
        m = r.useMemo(
            () =>
                _.filter((e) => {
                    let { currentBucket: t } = e;
                    return null == t;
                }),
            [_],
        ),
        g = r.useMemo(() => f.map(T), [f]),
        S = r.useMemo(() => m.map(T), [m]),
        N = (0, i.jsx)(
            l.aK,
            {
                id: "experiments-search",
                control: (e, t) =>
                    (0, i.jsx)(c.V, { ...e, query: d, onChange: u, ref: t, placeholder: p.intl.string(p.t["5h0QOP"]) }),
            },
            "experiments-search",
        );
    return g.length > 0
        ? [
              (0, i.jsx)(l.rX, { label: "Overridden Experiments", children: g }, "overridden-group"),
              (0, i.jsx)(l.bX, {}, "separator-2"),
              (0, i.jsxs)(
                  l.Dr,
                  { id: "other-experiments", label: "Other Experiments", children: [N, S] },
                  "other-experiments",
              ),
          ]
        : [N, ...S];
}
