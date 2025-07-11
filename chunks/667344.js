(n.d(t, { Q: () => u }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(588486),
    o = n(492435),
    s = n(872780),
    l = n(633289),
    c = n(508825);
function u() {
    (0, r.useEffect)(() => {
        (0, s.e)(a.dR.APP);
    }, []);
    let e = (0, i.e7)([l.Z], () => l.Z.getExperimentsMetadata()),
        t = (0, i.e7)([l.Z], () => l.Z.getRegisteredExperiments()),
        n = (0, r.useMemo)(() => {
            let n = {};
            for (let [t, r] of Object.entries(e))
                n[t] = {
                    system: o.I.APEX,
                    kind: r.unitType === c.Cm.User ? 'user' : 'guild',
                    name: r.name,
                    title: r.title,
                    variants: r.variants.map((e) => ({
                        id: e.id,
                        label: 'Variant '.concat(e.id, ': ').concat(e.label),
                        shortLabel: 'Variant '.concat(e.id),
                        type: e.type
                    }))
                };
            for (let [e, r] of Object.entries(t))
                null == n[e] &&
                    (n[e] = {
                        system: o.I.APEX,
                        kind: r.kind,
                        name: r.name,
                        title: r.name,
                        variants: Object.entries(r.variations).map((e) => {
                            let [t, n] = e;
                            return {
                                id: Number(t),
                                label: 'Variant '.concat(t),
                                shortLabel: 'Variant '.concat(t),
                                type: a.k3.UNSPECIFIED
                            };
                        })
                    });
            return n;
        }, [e, t]),
        u = (0, i.e7)([l.Z], () => l.Z.getClientOverrides());
    return {
        experiments: n,
        overridesInfo: (0, r.useMemo)(() => {
            let e = {};
            for (let [t, n] of Object.entries(u))
                e[t] = {
                    experimentId: t,
                    variantId: n.variantId,
                    originalDescriptor: n
                };
            return e;
        }, [u])
    };
}
