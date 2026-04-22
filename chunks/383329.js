"use strict";
n.d(t, { R: () => _ });
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    l = n(311907),
    s = n(735321),
    o = n(760751),
    c = n(282435);
function d(e) {
    return c.Bf.get(e) ?? 0;
}
function _() {
    let e = (0, l.bG)([o.A], () => o.A.games),
        t = i.useMemo(
            () =>
                a()(e)
                    .filter((e) => (0, s.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: t } = e;
                        return d(t);
                    })
                    .reverse()
                    .value(),
            [e],
        ),
        n = i.useCallback((e, t) => d(t.item.value) - d(e.item.value), []);
    return { options: t, matchSorterOptions: i.useMemo(() => ({ baseSort: n, keys: ["label"] }), [n]) };
}
