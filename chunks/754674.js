i.d(t, { FT: () => n, Gm: () => c, QD: () => u, Rl: () => r, W$: () => d, yM: () => l }), i(321073);
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
function d(e) {
    return s(r(e));
}
function u(e, t) {
    let i = r(e);
    return i[n].push(t), s(i);
}
function c(e, t, i, a) {
    let d = e.find((e) => {
        let { id: i } = e;
        return i === t;
    });
    if (null == d) return null;
    let u = r(e),
        c = [
            u[n].filter((e) => {
                let { id: i } = e;
                return i !== t;
            }),
            u[l].filter((e) => {
                let { id: i } = e;
                return i !== t;
            }),
        ],
        o = c[i === l ? l : n];
    return o.splice(Math.max(0, Math.min(a, o.length)), 0, d), s(c);
}
