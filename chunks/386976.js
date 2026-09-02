"use strict";
n.d(t, { op: () => u });
var i = n(582128),
    r = n(17928),
    a = n(87965),
    s = n(102609),
    l = n(620233),
    o = n(710195),
    d = n(375441);
function c(e) {
    return { id: e, label: `Variant ${e}`, shortLabel: `Variant ${e}`, type: a.FZ.UNSPECIFIED };
}
function u() {
    (0, i.useEffect)(() => {
        (0, l.sD)(a.Um.APP);
    }, []);
    let e = (0, r.bG)([o.A], () => o.A.getExperimentsMetadata()),
        t = (0, r.bG)([o.A], () => o.A.getRegisteredExperiments()),
        n = (0, i.useMemo)(
            () =>
                (function (e, t) {
                    let n = {};
                    for (let [i, r] of Object.entries(e)) {
                        let e = r.variants.map((e) => ({
                                id: e.id,
                                label: `Variant ${e.id}: ${e.label}`,
                                shortLabel: `Variant ${e.id}`,
                                type: e.type,
                            })),
                            a = new Set(e.map((e) => e.id)),
                            l = t[i],
                            o =
                                null != l
                                    ? Object.keys(l.variations)
                                          .map((e) => Number(e))
                                          .filter((e) => !a.has(e))
                                          .map(c)
                                    : [];
                        n[i] = {
                            system: s.l5.APEX,
                            kind: d.ag[r.unitType],
                            name: r.name,
                            title: r.title,
                            variants: [...e, ...o].sort((e, t) => e.id - t.id),
                        };
                    }
                    for (let [e, i] of Object.entries(t))
                        null == n[e] &&
                            (n[e] = {
                                system: s.l5.APEX,
                                kind: i.kind,
                                name: i.name,
                                title: i.name,
                                variants: Object.keys(i.variations).map((e) => c(Number(e))),
                            });
                    return n;
                })(e, t),
            [e, t],
        ),
        u = (0, r.bG)([o.A], () => o.A.getClientOverrides());
    return {
        experiments: n,
        overridesInfo: (0, i.useMemo)(
            () =>
                (function (e) {
                    let t = {};
                    for (let [n, i] of Object.entries(e))
                        t[n] = { experimentId: n, variantId: i.variantId, originalDescriptor: i };
                    return t;
                })(u),
            [u],
        ),
    };
}
