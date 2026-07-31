i.d(t, { FT: () => n, Gm: () => c, QD: () => d, Rl: () => r, W$: () => a }), i(321073);
let n = 0;
function l(e, t) {
    return e.position.order - t.position.order;
}
function r(e) {
    return [
        e
            .filter((e) => {
                let { position: t } = e;
                return 1 !== t.column;
            })
            .sort(l),
        e
            .filter((e) => {
                let { position: t } = e;
                return 1 === t.column;
            })
            .sort(l),
    ];
}
function s(e) {
    return e.flatMap((e, t) =>
        e.map((e, i) =>
            e.position.column === t && e.position.order === i ? e : { ...e, position: { column: t, order: i } },
        ),
    );
}
function a(e) {
    return s(r(e));
}
function d(e, t) {
    let i = r(e);
    return i[n].push(t), s(i);
}
function c(e, t, i, l) {
    let a = e.find((e) => {
        let { id: i } = e;
        return i === t;
    });
    if (null == a) return null;
    let d = r(e),
        c = [
            d[n].filter((e) => {
                let { id: i } = e;
                return i !== t;
            }),
            d[1].filter((e) => {
                let { id: i } = e;
                return i !== t;
            }),
        ],
        o = c[1 === i ? 1 : n];
    return o.splice(Math.max(0, Math.min(l, o.length)), 0, a), s(c);
}
