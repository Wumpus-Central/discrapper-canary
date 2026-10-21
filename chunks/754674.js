function l(e, n) {
    return e.position.order - n.position.order;
}
function a(e) {
    return [
        e
            .filter((e) => {
                let { position: n } = e;
                return 1 !== n.column;
            })
            .sort(l),
        e
            .filter((e) => {
                let { position: n } = e;
                return 1 === n.column;
            })
            .sort(l),
    ];
}
function r(e) {
    return e.flatMap((e, n) =>
        e.map((e, t) =>
            e.position.column === n && e.position.order === t ? e : { ...e, position: { column: n, order: t } },
        ),
    );
}
function i(e) {
    return r(a(e));
}
function s(e, n, t) {
    let l = a(e),
        i = l[+(t?.column === 1)],
        s = t?.index ?? i.length;
    return (i.splice(Math.max(0, Math.min(s, i.length)), 0, n), r(l));
}
function o(e, n, t, l) {
    let a =
            null == l
                ? e
                : e.filter((e) => {
                      let { id: n } = e;
                      return n !== l;
                  }),
        r = (
            null == l
                ? n
                : n.filter((e) => {
                      let { id: n } = e;
                      return n !== l;
                  })
        )[t];
    if (null == r) return a.length;
    let i = a.findIndex((e) => {
        let { id: n } = e;
        return n === r.id;
    });
    return -1 === i ? a.length : i;
}
function u(e, n, t, l) {
    let i = e.find((e) => {
        let { id: t } = e;
        return t === n;
    });
    if (null == i) return null;
    let s = a(e),
        o = [
            s[0].filter((e) => {
                let { id: t } = e;
                return t !== n;
            }),
            s[1].filter((e) => {
                let { id: t } = e;
                return t !== n;
            }),
        ],
        u = o[+(1 === t)];
    return (u.splice(Math.max(0, Math.min(l, u.length)), 0, i), r(o));
}
t.d(n, { Gm: () => u, O6: () => o, QD: () => s, Rl: () => a, W$: () => i });
