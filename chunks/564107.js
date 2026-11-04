var l = n(477900),
    r = n(582128);
let a = r.createContext(null);
n.d(
    t,
    {},
    {
        N: function (e) {
            let { children: t, ...n } = e;
            return (0, l.jsx)(a.Provider, { value: n, children: t });
        },
        X: function () {
            let e = r.useContext(a);
            if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
            return e;
        },
    },
);
