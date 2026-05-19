"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    r = n(64700),
    s = n(91871),
    a = n.n(s),
    o = n(477782),
    l = n(691540),
    u = n(97483),
    c = n(241326),
    d = n(583650),
    _ = n(100392),
    f = n(102609),
    h = n(386976),
    p = n(32523),
    E = n(769054),
    m = n(957565),
    g = n(96919),
    A = n(375708);
function I(e) {
    let { id: t, experiment: n, currentBucket: r, system: s } = e,
        a = (0, E.h)(n);
    return (0, i.jsxs)(
        o.Dr,
        {
            id: t.replaceAll("--", "__"),
            label: n.title,
            action: () => (0, f.t$)(s, t, null),
            children: [
                a.map((e) =>
                    (0, i.jsx)(
                        o.sL,
                        {
                            id: `${e.id}`,
                            label: e.label,
                            checked: e.id === r?.variantId,
                            action: () => (0, f.t$)(s, t, e.id),
                        },
                        `${e.id}`,
                    ),
                ),
                (0, i.jsxs)(o.rX, {
                    children: [
                        m.p5 &&
                            (0, i.jsx)(o.Dr, {
                                id: "copy-link",
                                label: "Copy Link",
                                action: () => {
                                    let e = (0, _.yA)(t);
                                    (0, m.C)(e, () => {
                                        (0, l.P0)({
                                            id: "experiment-link-copied",
                                            message: "Copied experiment link",
                                            type: u.Ck.SUCCESS,
                                        });
                                    });
                                },
                            }),
                        null != r &&
                            (0, i.jsx)(o.Dr, {
                                id: "clear-override",
                                label: "Clear Override",
                                color: "danger",
                                icon: c.u,
                                action: () => (0, f.t$)(s, t, null),
                            }),
                    ],
                }),
            ],
        },
        t,
    );
}
function T() {
    let { experiments: e, overridesInfo: t } = (0, p.hI)(),
        { experiments: n, overridesInfo: s } = (0, h.op)(),
        l = r.useMemo(() => {
            let i = { ...e, ...n },
                r = { ...t, ...s };
            return (0, g.R3)((0, g.Fm)(i), r).map((e) => {
                let { id: t, experiment: n } = e;
                return { id: t, experiment: n, currentBucket: r[t], system: n.system };
            });
        }, [e, t, n, s]),
        [u, c] = r.useState(""),
        [_, f] = r.useState([]);
    r.useEffect(() => {
        0 === u.trim().length ? f(l) : f(l.filter((e) => a()(u, e.experiment.title.toLowerCase())));
    }, [l, u]);
    let E = r.useMemo(
            () =>
                l.filter((e) => {
                    let { currentBucket: t } = e;
                    return null != t;
                }),
            [l],
        ),
        m = r.useMemo(
            () =>
                _.filter((e) => {
                    let { currentBucket: t } = e;
                    return null == t;
                }),
            [_],
        ),
        T = r.useMemo(() => E.map(I), [E]),
        S = r.useMemo(() => m.map(I), [m]),
        N = (0, i.jsx)(
            o.aK,
            {
                id: "experiments-search",
                control: (e, t) =>
                    (0, i.jsx)(d.V, { ...e, query: u, onChange: c, ref: t, placeholder: A.intl.string(A.t["5h0QOP"]) }),
            },
            "experiments-search",
        );
    return T.length > 0
        ? [
              (0, i.jsx)(o.rX, { label: "Overridden Experiments", children: T }, "overridden-group"),
              (0, i.jsx)(o.bX, {}, "separator-2"),
              (0, i.jsxs)(
                  o.Dr,
                  { id: "other-experiments", label: "Other Experiments", children: [N, S] },
                  "other-experiments",
              ),
          ]
        : [N, ...S];
}
