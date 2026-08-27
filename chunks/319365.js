n.d(t, { D7: () => r, h1: () => a });
var l = n(477900),
    i = n(582128);
let s = i.createContext({ isFocused: !1, isFocusedRef: { current: !1 }, setIsFocused: () => {} });
function a(e) {
    let { children: t } = e,
        [n, a] = i.useState(!1),
        r = i.useRef(n),
        o = i.useCallback((e) => {
            (r.current = e), a(e);
        }, []),
        c = i.useMemo(() => ({ isFocused: n, isFocusedRef: r, setIsFocused: o }), [n, o]);
    return (0, l.jsx)(s.Provider, { value: c, children: t });
}
function r() {
    return i.useContext(s);
}
