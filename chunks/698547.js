var l = n(582128),
    i = n(855986),
    r = n(210608);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let { onClick: n, onDoubleClick: s, onMouseDown: a } = t,
                o = (0, i.bG)([r.A], () => null != e && r.A.getActiveStreamKey() === e);
            return l.useMemo(
                () => ({
                    onClick: (e) => {
                        o ? e.stopPropagation() : n?.(e);
                    },
                    onDoubleClick: (e) => {
                        o ? e.stopPropagation() : s?.(e);
                    },
                    onMouseDown: (e) => {
                        o ? e.stopPropagation() : a?.(e);
                    },
                }),
                [o, n, s, a],
            );
        },
    },
);
