var i = n(477900),
    r = n(582128);
let s = r.createContext(null);
function c() {
    return r.useContext(s);
}
n.d(
    t,
    {},
    {
        Ar: c,
        dB: function (e) {
            let { newValue: t, children: n } = e,
                u = c(),
                l = r.useMemo(() => ({ ...u, ...t }), [u, t]);
            return (0, i.jsx)(s.Provider, { value: l, children: n });
        },
    },
);
