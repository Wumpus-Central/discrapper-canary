var l = n(582128),
    i = n(451988);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let [n, r] = l.useState(!1),
                a = l.useRef(new i.J_(t, () => r(!1))),
                s = l.useRef(new i.J_(e, () => r(!0))),
                o = l.useCallback(() => {
                    (a.current.cancel(), s.current.cancel());
                }, []);
            l.useEffect(() => o, [o]);
            let u = l.useCallback(() => {
                (o(), a.current.delay());
            }, [o]);
            return {
                isHovered: n,
                setIsHovered: r,
                onMouseEnter: l.useCallback(() => {
                    (o(), s.current.delay());
                }, [o]),
                onMouseLeave: u,
                cancelTimers: o,
            };
        },
    },
);
