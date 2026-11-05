var r = n(477900),
    i = n(582128);
let s = i.createContext(null);
function c() {
    return i.useContext(s);
}
n.d(
    t,
    {},
    {
        Ar: c,
        dB: function (e) {
            let { newValue: t, children: n } = e,
                o = c(),
                l = i.useMemo(() => ({ ...o, ...t }), [o, t]);
            return (0, r.jsx)(s.Provider, { value: l, children: n });
        },
    },
);
