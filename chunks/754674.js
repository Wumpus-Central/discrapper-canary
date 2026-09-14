(l.d(t, { FT: () => i, Gm: () => u, QD: () => d, Rl: () => s, W$: () => c, yM: () => n }), l(321073));
let i = 0,
    n = 1;
function a(e, t) {
    return e.position.order - t.position.order;
}
function s(e) {
    return [
        e
            .filter((e) => {
                let { position: t } = e;
                return t.column !== n;
            })
            .sort(a),
        e
            .filter((e) => {
                let { position: t } = e;
                return t.column === n;
            })
            .sort(a),
    ];
}
function r(e) {
    return e.flatMap((e, t) =>
        e.map((e, l) =>
            e.position.column === t && e.position.order === l ? e : { ...e, position: { column: t, order: l } },
        ),
    );
}
function c(e) {
    return r(s(e));
}
function d(e, t) {
    let l = s(e);
    return (l[i].push(t), r(l));
}
function u(e, t, l, a) {
    let c = e.find((e) => {
        let { id: l } = e;
        return l === t;
    });
    if (null == c) return null;
    let d = s(e),
        u = [
            d[i].filter((e) => {
                let { id: l } = e;
                return l !== t;
            }),
            d[n].filter((e) => {
                let { id: l } = e;
                return l !== t;
            }),
        ],
        o = u[l === n ? n : i];
    return (o.splice(Math.max(0, Math.min(a, o.length)), 0, c), r(u));
}
