var i = n(582128),
    r = n(451988);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let [n, a] = i.useState(!1),
                l = i.useRef(new r.J_(t, () => a(!1))),
                s = i.useRef(new r.J_(e, () => a(!0))),
                d = i.useCallback(() => {
                    (l.current.cancel(), s.current.cancel());
                }, []);
            i.useEffect(() => d, [d]);
            let u = i.useCallback(() => {
                (d(), l.current.delay());
            }, [d]);
            return {
                isHovered: n,
                setIsHovered: a,
                onMouseEnter: i.useCallback(() => {
                    (d(), s.current.delay());
                }, [d]),
                onMouseLeave: u,
                cancelTimers: d,
            };
        },
    },
);
