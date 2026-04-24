"use strict";
n.d(t, { op: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(785401),
    a = n(102609),
    o = n(620233),
    l = n(710195),
    d = n(375441);
function _() {
    (0, i.useEffect)(() => {
        (0, o.sD)(s.Um.APP);
    }, []);
    let e = (0, r.bG)([l.A], () => l.A.getExperimentsMetadata()),
        t = (0, r.bG)([l.A], () => l.A.getRegisteredExperiments()),
        n = (0, i.useMemo)(
            () =>
                (function (e, t) {
                    let n = {};
                    for (let [t, i] of Object.entries(e))
                        n[t] = {
                            system: a.l5.APEX,
                            kind: d.ag[i.unitType],
                            name: i.name,
                            title: i.title,
                            variants: i.variants.map((e) => ({
                                id: e.id,
                                label: `Variant ${e.id}: ${e.label}`,
                                shortLabel: `Variant ${e.id}`,
                                type: e.type,
                            })),
                        };
                    for (let [e, i] of Object.entries(t))
                        null == n[e] &&
                            (n[e] = {
                                system: a.l5.APEX,
                                kind: i.kind,
                                name: i.name,
                                title: i.name,
                                variants: Object.entries(i.variations).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        id: Number(t),
                                        label: `Variant ${t}`,
                                        shortLabel: `Variant ${t}`,
                                        type: s.FZ.UNSPECIFIED,
                                    };
                                }),
                            });
                    return n;
                })(e, t),
            [e, t],
        ),
        _ = (0, r.bG)([l.A], () => l.A.getClientOverrides());
    return {
        experiments: n,
        overridesInfo: (0, i.useMemo)(
            () =>
                (function (e) {
                    let t = {};
                    for (let [n, i] of Object.entries(e))
                        t[n] = { experimentId: n, variantId: i.variantId, originalDescriptor: i };
                    return t;
                })(_),
            [_],
        ),
    };
}
