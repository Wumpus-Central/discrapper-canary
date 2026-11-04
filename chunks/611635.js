var i = n(582128);
let r = i.createContext({ lang: "", style: "", className: "", focused: !1 });
n.d(
    t,
    {},
    {
        q: r,
        x: function () {
            let e = i.useContext(r);
            if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
            return e;
        },
    },
);
