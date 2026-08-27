i.d(e, { FT: () => n, Gm: () => u, QD: () => d, Rl: () => r, W$: () => c, yM: () => l }), i(321073);
let n = 0,
    l = 1;
function a(t, e) {
    return t.position.order - e.position.order;
}
function r(t) {
    return [
        t
            .filter((t) => {
                let { position: e } = t;
                return e.column !== l;
            })
            .sort(a),
        t
            .filter((t) => {
                let { position: e } = t;
                return e.column === l;
            })
            .sort(a),
    ];
}
function s(t) {
    return t.flatMap((t, e) =>
        t.map((t, i) =>
            t.position.column === e && t.position.order === i ? t : { ...t, position: { column: e, order: i } },
        ),
    );
}
function c(t) {
    return s(r(t));
}
function d(t, e) {
    let i = r(t);
    return i[n].push(e), s(i);
}
function u(t, e, i, a) {
    let c = t.find((t) => {
        let { id: i } = t;
        return i === e;
    });
    if (null == c) return null;
    let d = r(t),
        u = [
            d[n].filter((t) => {
                let { id: i } = t;
                return i !== e;
            }),
            d[l].filter((t) => {
                let { id: i } = t;
                return i !== e;
            }),
        ],
        o = u[i === l ? l : n];
    return o.splice(Math.max(0, Math.min(a, o.length)), 0, c), s(u);
}
