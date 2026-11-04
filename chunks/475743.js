var i = n(582128);
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let t = (0, i.useRef)(null);
            return (
                (0, i.useEffect)(() => {
                    t.current = e;
                }, [e]),
                t.current
            );
        },
        p0: function (e) {
            let { value: t, shouldUpdate: n } = e,
                r = (0, i.useRef)(null);
            return (
                (0, i.useEffect)(() => {
                    n && (r.current = t);
                }, [t, n]),
                n ? t : r.current
            );
        },
    },
);
