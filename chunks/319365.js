n.d(t, { D7: () => r, h1: () => a });
var l = n(627968),
    i = n(64700);
let s = i.createContext({ isFocused: !1, setIsFocused: () => {} });
function a(e) {
    let { children: t } = e,
        [n, a] = i.useState(!1),
        r = i.useMemo(() => ({ isFocused: n, setIsFocused: a }), [n, a]);
    return (0, l.jsx)(s.Provider, { value: r, children: t });
}
let r = () => i.useContext(s);
