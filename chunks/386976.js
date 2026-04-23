"use strict";
n.d(t, { op: () => c });
var r = n(64700),
    i = n(311907),
    s = n(949355),
    a = n(102609),
    o = n(620233),
    l = n(217222),
    u = n(375441);
function c() {
    (0, r.useEffect)(() => {
        (0, o.sD)(s.Um.APP);
    }, []);
    let e = (0, i.bG)([l.A], () => l.A.getExperimentsMetadata()),
        t = (0, i.bG)([l.A], () => l.A.getRegisteredExperiments()),
        n = (0, r.useMemo)(
            () =>
                (function (e, t) {
                    let n = {};
                    for (let [t, r] of Object.entries(e))
                        n[t] = {
                            system: a.l5.APEX,
                            kind: r.unitType === u.ni.User ? "user" : "guild",
                            name: r.name,
                            title: r.title,
                            variants: r.variants.map((e) => ({
                                id: e.id,
                                label: `Variant ${e.id}: ${e.label}`,
                                shortLabel: `Variant ${e.id}`,
                                type: e.type,
                            })),
                        };
                    for (let [e, r] of Object.entries(t))
                        null == n[e] &&
                            (n[e] = {
                                system: a.l5.APEX,
                                kind: r.kind,
                                name: r.name,
                                title: r.name,
                                variants: Object.entries(r.variations).map((e) => {
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
        c = (0, i.bG)([l.A], () => l.A.getClientOverrides());
    return {
        experiments: n,
        overridesInfo: (0, r.useMemo)(
            () =>
                (function (e) {
                    let t = {};
                    for (let [n, r] of Object.entries(e))
                        t[n] = { experimentId: n, variantId: r.variantId, originalDescriptor: r };
                    return t;
                })(c),
            [c],
        ),
    };
}
