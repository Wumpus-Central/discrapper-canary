var e = i(855986),
    l = i(469778);
i.d(
    n,
    {},
    {
        L: function (t) {
            return (0, e.bG)(
                [l.A],
                () => {
                    let n = l.A.getForSku(t);
                    if (null == n) return !1;
                    let i = 0;
                    for (let t of n) {
                        let n = t.endsAt?.getTime() ?? 1 / 0;
                        n >= i && (i = n);
                    }
                    return i > new Date().getTime();
                },
                [t],
            );
        },
    },
);
