"use strict";
n.d(t, { A: () => g });
var i = n(477900),
    r = n(582128),
    a = n(91871),
    s = n.n(a),
    l = n(477782),
    o = n(691540),
    d = n(97483),
    c = n(241326),
    u = n(583650),
    _ = n(100392),
    E = n(102609),
    A = n(386976),
    h = n(32523),
    I = n(769054),
    f = n(957565),
    p = n(96919),
    T = n(375708);
function m(e) {
    let { id: t, experiment: n, currentBucket: r, system: a } = e,
        s = (0, I.h)(n);
    return (0, i.jsxs)(
        l.Dr,
        {
            id: t.replaceAll("--", "__"),
            label: n.title,
            action: () => (0, E.t$)(a, t, null),
            children: [
                s.map((e) =>
                    (0, i.jsx)(
                        l.sL,
                        {
                            id: `${e.id}`,
                            label: e.label,
                            checked: e.id === r?.variantId,
                            action: () => (0, E.t$)(a, t, e.id),
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
                                    let e = (0, _.yA)(t);
                                    (0, f.C)(e, () => {
                                        (0, o.P0)({
                                            id: "experiment-link-copied",
                                            message: "Copied experiment link",
                                            type: d.Ck.SUCCESS,
                                        });
                                    });
                                },
                            }),
                        null != r &&
                            (0, i.jsx)(l.Dr, {
                                id: "clear-override",
                                label: "Clear Override",
                                color: "danger",
                                icon: c.TrashIcon,
                                action: () => (0, E.t$)(a, t, null),
                            }),
                    ],
                }),
            ],
        },
        t,
    );
}
function g() {
    let { experiments: e, overridesInfo: t } = (0, h.hI)(),
        { experiments: n, overridesInfo: a } = (0, A.op)(),
        o = r.useMemo(() => {
            let i = { ...e, ...n },
                r = { ...t, ...a };
            return (0, p.R3)((0, p.Fm)(i), r).map((e) => {
                let { id: t, experiment: n } = e;
                return { id: t, experiment: n, currentBucket: r[t], system: n.system };
            });
        }, [e, t, n, a]),
        [d, c] = r.useState(""),
        [_, E] = r.useState([]);
    r.useEffect(() => {
        0 === d.trim().length ? E(o) : E(o.filter((e) => s()(d, e.experiment.title.toLowerCase())));
    }, [o, d]);
    let I = r.useMemo(
            () =>
                o.filter((e) => {
                    let { currentBucket: t } = e;
                    return null != t;
                }),
            [o],
        ),
        f = r.useMemo(
            () =>
                _.filter((e) => {
                    let { currentBucket: t } = e;
                    return null == t;
                }),
            [_],
        ),
        g = r.useMemo(() => I.map(m), [I]),
        S = r.useMemo(() => f.map(m), [f]),
        N = (0, i.jsx)(
            l.aK,
            {
                id: "experiments-search",
                control: (e, t) =>
                    (0, i.jsx)(u.V, { ...e, query: d, onChange: c, ref: t, placeholder: T.intl.string(T.t["5h0QOP"]) }),
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
