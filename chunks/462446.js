var l = n(582128),
    i = n(435558),
    r = n(579974);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = l.useMemo(() => {
                let t, n, l;
                return (
                    (t = null),
                    (n = (0, i.debounce)((t) => {
                        null != e && t.length > 0 && (0, r.m)(e, t);
                    }, 500)),
                    ((l = (e) => {
                        let l = e.join(",");
                        l !== t && ((t = l), n(e));
                    }).cancel = () => {
                        ((t = null), n.cancel());
                    }),
                    l
                );
            }, [e]);
            return (l.useEffect(() => () => t.cancel(), [t]), t);
        },
    },
);
