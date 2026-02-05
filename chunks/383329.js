"use strict";
n.d(t, { R: () => u });
var i = n(64700),
    s = n(735438),
    l = n.n(s),
    r = n(311907),
    a = n(735321),
    o = n(760751),
    d = n(282435);
function c(e) {
    return d.Bf.get(e) ?? 0;
}
function u() {
    let e = (0, r.bG)([o.A], () => o.A.games),
        t = i.useMemo(
            () =>
                l()(e)
                    .filter((e) => (0, a.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: t } = e;
                        return c(t);
                    })
                    .reverse()
                    .value(),
            [e],
        ),
        n = i.useCallback((e, t) => c(t.item.value) - c(e.item.value), []);
    return { options: t, matchSorterOptions: i.useMemo(() => ({ baseSort: n, keys: ["label"] }), [n]) };
}
