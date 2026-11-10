var r = n(477900),
    i = n(582128);
let s = i.createContext(null);
n.d(
    t,
    {},
    {
        Mk: function () {
            return i.useContext(s);
        },
        iM: function (e) {
            let { tab: t, children: n } = e,
                a = i.useMemo(() => ({ tab: t }), [t]);
            return (0, r.jsx)(s.Provider, { value: a, children: n });
        },
    },
);
