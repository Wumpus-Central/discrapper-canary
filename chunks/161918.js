var r = n(477900),
    i = n(582128);
let l = i.createContext(null);
n.d(
    t,
    {},
    {
        Mk: function () {
            return i.useContext(l);
        },
        iM: function (e) {
            let { tab: t, children: n } = e,
                s = i.useMemo(() => ({ tab: t }), [t]);
            return (0, r.jsx)(l.Provider, { value: s, children: n });
        },
    },
);
