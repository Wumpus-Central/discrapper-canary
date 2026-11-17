var r = n(477900),
    i = n(582128);
let o = i.createContext(!1);
n.d(
    e,
    {},
    {
        P: function (t) {
            let { isGifting: e, children: n } = t;
            return e ? (0, r.jsx)(o.Provider, { value: !0, children: n }) : n;
        },
        b: function () {
            return i.useContext(o);
        },
    },
);
