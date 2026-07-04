"use strict";
n.d(t, { op: () => c });
var i = n(64700),
    r = n(17928),
    s = n(785401),
    a = n(102609),
    o = n(620233),
    l = n(710195),
    u = n(375441);
function d(e) {
    return { id: e, label: `Variant ${e}`, shortLabel: `Variant ${e}`, type: s.FZ.UNSPECIFIED };
}
function c() {
    (0, i.useEffect)(() => {
        (0, o.sD)(s.Um.APP);
    }, []);
    let e = (0, r.bG)([l.A], () => l.A.getExperimentsMetadata()),
        t = (0, r.bG)([l.A], () => l.A.getRegisteredExperiments()),
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
                            s = new Set(e.map((e) => e.id)),
                            o = t[i],
                            l =
                                null != o
                                    ? Object.keys(o.variations)
                                          .map((e) => Number(e))
                                          .filter((e) => !s.has(e))
                                          .map(d)
                                    : [];
                        n[i] = {
                            system: a.l5.APEX,
                            kind: u.ag[r.unitType],
                            name: r.name,
                            title: r.title,
                            variants: [...e, ...l].sort((e, t) => e.id - t.id),
                        };
                    }
                    for (let [e, i] of Object.entries(t))
                        null == n[e] &&
                            (n[e] = {
                                system: a.l5.APEX,
                                kind: i.kind,
                                name: i.name,
                                title: i.name,
                                variants: Object.keys(i.variations).map((e) => d(Number(e))),
                            });
                    return n;
                })(e, t),
            [e, t],
        ),
        c = (0, r.bG)([l.A], () => l.A.getClientOverrides());
    return {
        experiments: n,
        overridesInfo: (0, i.useMemo)(
            () =>
                (function (e) {
                    let t = {};
                    for (let [n, i] of Object.entries(e))
                        t[n] = { experimentId: n, variantId: i.variantId, originalDescriptor: i };
                    return t;
                })(c),
            [c],
        ),
    };
}
