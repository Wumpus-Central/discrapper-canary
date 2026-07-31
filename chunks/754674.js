function n(e, t) {
    return e.position.order - t.position.order;
}
function l(e) {
    return [
        e
            .filter((e) => {
                let { position: t } = e;
                return 1 !== t.column;
            })
            .sort(n),
        e
            .filter((e) => {
                let { position: t } = e;
                return 1 === t.column;
            })
            .sort(n),
    ];
}
function r(e) {
    return e.flatMap((e, t) =>
        e.map((e, i) =>
            e.position.column === t && e.position.order === i ? e : { ...e, position: { column: t, order: i } },
        ),
    );
}
function s(e) {
    return r(l(e));
}
function a(e, t, i, n) {
    let s = e.find((e) => {
        let { id: i } = e;
        return i === t;
    });
    if (null == s) return null;
    let a = l(e),
        d = [
            a[0].filter((e) => {
                let { id: i } = e;
                return i !== t;
            }),
            a[1].filter((e) => {
                let { id: i } = e;
                return i !== t;
            }),
        ],
        c = d[+(1 === i)];
    return c.splice(Math.max(0, Math.min(n, c.length)), 0, s), r(d);
}
i.d(t, { Gm: () => a, Rl: () => l, W$: () => s });
