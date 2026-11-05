var l = t(477900),
    r = t(582128);
let a = r.createContext(null);
t.d(
    n,
    {},
    {
        N: function (e) {
            let { children: n, ...t } = e;
            return (0, l.jsx)(a.Provider, { value: t, children: n });
        },
        X: function () {
            let e = r.useContext(a);
            if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
            return e;
        },
    },
);
