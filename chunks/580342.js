var n = t(582128),
    i = t(853555);
t.d(
    l,
    {},
    {
        A: function (e) {
            n.useEffect(() => {
                let l = new Set();
                function t() {
                    let t = (0, i.UJ)(e);
                    null == t || t.inert || ((t.inert = !0), l.add(t));
                }
                t();
                let n = setInterval(t, 250);
                return () => {
                    for (let e of (clearInterval(n), l)) e.inert = !1;
                };
            }, [e]);
        },
    },
);
