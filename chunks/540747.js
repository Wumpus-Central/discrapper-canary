n.d(t, { F: () => s, Y: () => r });
var i = n(582128),
    l = n(652215);
let s = i.createContext({ hidden: !1, setHidden: l.tEg });
function r() {
    let { setHidden: e } = i.useContext(s);
    i.useEffect(() => (e(!0), () => e(!1)), [e]);
}
