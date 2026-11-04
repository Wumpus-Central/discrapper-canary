var s = n(582128);
let i = s.createContext(null);
n.d(
    e,
    {},
    {
        c: function (t) {
            let { onMenuOpen: e, onMenuClose: n } = t,
                i = s.useRef(!1);
            return s.useMemo(
                () => ({
                    onMenuOpen: e,
                    onMenuClose: n,
                    setAutoOpen: (t) => {
                        i.current = t;
                    },
                    getAutoOpen: () => i.current,
                }),
                [e, n],
            );
        },
        q: i,
    },
);
