i.d(t, { FT: () => n, Gm: () => u, QD: () => d, Rl: () => r, W$: () => c, yM: () => l }), i(321073);
let n = 0,
    l = 1;
function a(e, t) {
    return e.position.order - t.position.order;
}
function r(e) {
    return [
        e
            .filter((e) => {
                let { position: t } = e;
                return t.column !== l;
            })
            .sort(a),
        e
            .filter((e) => {
                let { position: t } = e;
                return t.column === l;
            })
            .sort(a),
    ];
}
function s(e) {
    return e.flatMap((e, t) =>
        e.map((e, i) =>
            e.position.column === t && e.position.order === i ? e : { ...e, position: { column: t, order: i } },
        ),
    );
}
function c(e) {
    return s(r(e));
}
function d(e, t) {
    let i = r(e);
    return i[n].push(t), s(i);
}
function u(e, t, i, a) {
    let c = e.find((e) => {
        let { id: i } = e;
        return i === t;
    });
    if (null == c) return null;
    let d = r(e),
        u = [
            d[n].filter((e) => {
                let { id: i } = e;
                return i !== t;
            }),
            d[l].filter((e) => {
                let { id: i } = e;
                return i !== t;
            }),
        ],
        o = u[i === l ? l : n];
    return o.splice(Math.max(0, Math.min(a, o.length)), 0, c), s(u);
}
