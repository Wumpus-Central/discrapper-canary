function l(e, t) {
    return e.position.order - t.position.order;
}
function a(e) {
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
function r(e) {
    return e.flatMap((e, t) =>
        e.map((e, n) =>
            e.position.column === t && e.position.order === n ? e : { ...e, position: { column: t, order: n } },
        ),
    );
}
function i(e) {
    return r(a(e));
}
function s(e, t, n) {
    let l = a(e),
        i = l[+(n?.column === 1)],
        s = n?.index ?? i.length;
    return (i.splice(Math.max(0, Math.min(s, i.length)), 0, t), r(l));
}
function o(e, t, n, l) {
    let a =
            null == l
                ? e
                : e.filter((e) => {
                      let { id: t } = e;
                      return t !== l;
                  }),
        r = (
            null == l
                ? t
                : t.filter((e) => {
                      let { id: t } = e;
                      return t !== l;
                  })
        )[n];
    if (null == r) return a.length;
    let i = a.findIndex((e) => {
        let { id: t } = e;
        return t === r.id;
    });
    return -1 === i ? a.length : i;
}
function u(e, t, n, l) {
    let i = e.find((e) => {
        let { id: n } = e;
        return n === t;
    });
    if (null == i) return null;
    let s = a(e),
        o = [
            s[0].filter((e) => {
                let { id: n } = e;
                return n !== t;
            }),
            s[1].filter((e) => {
                let { id: n } = e;
                return n !== t;
            }),
        ],
        u = o[+(1 === n)];
    return (u.splice(Math.max(0, Math.min(l, u.length)), 0, i), r(o));
}
n.d(t, { Gm: () => u, O6: () => o, QD: () => s, Rl: () => a, W$: () => i });
