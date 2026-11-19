var l = n(582128),
    i = n(738604);
n.d(
    e,
    {},
    {
        A: function (t, e, n) {
            let a = l.useContext(i.bI),
                r = n ?? a;
            return l.useCallback(
                (n) => {
                    null == t || null == e || null == r || e.disabled || e.run(n);
                },
                [t, e, r],
            );
        },
    },
);
