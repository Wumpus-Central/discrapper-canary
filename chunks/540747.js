var i = n(582128),
    l = n(652215);
let s = i.createContext({ hidden: !1, setHidden: l.tEg });
n.d(
    t,
    {},
    {
        F: s,
        Y: function () {
            let { setHidden: e } = i.useContext(s);
            i.useEffect(() => (e(!0), () => e(!1)), [e]);
        },
    },
);
