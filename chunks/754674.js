(l.d(t, { FT: () => n, Gm: () => u, QD: () => c, Rl: () => s, W$: () => d, yM: () => i }), l(321073));
let n = 0,
    i = 1;
function a(e, t) {
    return e.position.order - t.position.order;
}
function s(e) {
    return [
        e
            .filter((e) => {
                let { position: t } = e;
                return t.column !== i;
            })
            .sort(a),
        e
            .filter((e) => {
                let { position: t } = e;
                return t.column === i;
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
function d(e) {
    return r(s(e));
}
function c(e, t) {
    let l = s(e);
    return (l[n].push(t), r(l));
}
function u(e, t, l, a) {
    let d = e.find((e) => {
        let { id: l } = e;
        return l === t;
    });
    if (null == d) return null;
    let c = s(e),
        u = [
            c[n].filter((e) => {
                let { id: l } = e;
                return l !== t;
            }),
            c[i].filter((e) => {
                let { id: l } = e;
                return l !== t;
            }),
        ],
        o = u[l === i ? i : n];
    return (o.splice(Math.max(0, Math.min(a, o.length)), 0, d), r(u));
}
