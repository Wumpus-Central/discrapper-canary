var e = n(582128),
    a = n(853555);
n.d(
    l,
    {},
    {
        A: function (t) {
            e.useEffect(() => {
                let l = new Set();
                function n() {
                    let n = (0, a.UJ)(t);
                    null == n || n.inert || ((n.inert = !0), l.add(n));
                }
                n();
                let e = setInterval(n, 250);
                return () => {
                    for (let t of (clearInterval(e), l)) t.inert = !1;
                };
            }, [t]);
        },
    },
);
