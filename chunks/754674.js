function i(e, t) {
    return e.position.order - t.position.order;
}
function r(e) {
    return [
        e
            .filter((e) => {
                let { position: t } = e;
                return 1 !== t.column;
            })
            .sort(i),
        e
            .filter((e) => {
                let { position: t } = e;
                return 1 === t.column;
            })
            .sort(i),
    ];
}
function a(e) {
    return e.flatMap((e, t) =>
        e.map((e, n) =>
            e.position.column === t && e.position.order === n ? e : { ...e, position: { column: t, order: n } },
        ),
    );
}
n.d(
    t,
    {},
    {
        Gm: function (e, t, n, i) {
            let l = e.find((e) => {
                let { id: n } = e;
                return n === t;
            });
            if (null == l) return null;
            let s = r(e),
                d = [
                    s[0].filter((e) => {
                        let { id: n } = e;
                        return n !== t;
                    }),
                    s[1].filter((e) => {
                        let { id: n } = e;
                        return n !== t;
                    }),
                ],
                u = d[+(1 === n)];
            return (u.splice(Math.max(0, Math.min(i, u.length)), 0, l), a(d));
        },
        O6: function (e, t, n, i) {
            let r =
                    null == i
                        ? e
                        : e.filter((e) => {
                              let { id: t } = e;
                              return t !== i;
                          }),
                a = (
                    null == i
                        ? t
                        : t.filter((e) => {
                              let { id: t } = e;
                              return t !== i;
                          })
                )[n];
            if (null == a) return r.length;
            let l = r.findIndex((e) => {
                let { id: t } = e;
                return t === a.id;
            });
            return -1 === l ? r.length : l;
        },
        QD: function (e, t, n) {
            let i = r(e),
                l = i[+(n?.column === 1)],
                s = n?.index ?? l.length;
            return (l.splice(Math.max(0, Math.min(s, l.length)), 0, t), a(i));
        },
        Rl: r,
        W$: function (e) {
            return a(r(e));
        },
    },
);
