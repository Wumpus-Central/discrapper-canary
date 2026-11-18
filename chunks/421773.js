var i = n(582128),
    r = n(451988);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let [n, a] = i.useState(!1),
                l = i.useRef(new r.J_(t, () => a(!1))),
                d = i.useRef(new r.J_(e, () => a(!0))),
                s = i.useCallback(() => {
                    (l.current.cancel(), d.current.cancel());
                }, []);
            i.useEffect(() => s, [s]);
            let u = i.useCallback(() => {
                (s(), l.current.delay());
            }, [s]);
            return {
                isHovered: n,
                setIsHovered: a,
                onMouseEnter: i.useCallback(() => {
                    (s(), d.current.delay());
                }, [s]),
                onMouseLeave: u,
                cancelTimers: s,
            };
        },
    },
);
