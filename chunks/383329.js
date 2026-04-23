"use strict";
n.d(t, { R: () => u });
var i = n(64700),
    a = n(735438),
    r = n.n(a),
    s = n(17928),
    l = n(735321),
    o = n(760751),
    c = n(282435);
function d(e) {
    return c.Bf.get(e) ?? 0;
}
function u() {
    let e = (0, s.bG)([o.A], () => o.A.games),
        t = i.useMemo(
            () =>
                r()(e)
                    .filter((e) => (0, l.XX)(e))
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
