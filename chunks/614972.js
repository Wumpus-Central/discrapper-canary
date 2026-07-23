n.d(e, { c: () => o, q: () => i });
var s = n(64700);
let i = s.createContext(null);
function o(t) {
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
}
