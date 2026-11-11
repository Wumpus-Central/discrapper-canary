var l = n(477900),
    s = n(582128),
    a = n(435558),
    i = n(444927),
    r = n(143461),
    o = n(792996);
let c = [
    r.default.bKvkzB,
    r.default["U+7iha"],
    r.default.fwKulM,
    r.default.KqfZhk,
    r.default.amuakh,
    r.default["5txfu7"],
    r.default.SxlobC,
    r.default.bnJVgJ,
    r.default.Z4b7dI,
    r.default.M6igKM,
    r.default.qozQ5X,
    r.default.tu6vgS,
    r.default["w/OnRT"],
    r.default["+EMTB/"],
    r.default.Ib3xUj,
    r.default["7DZ2Fj"],
    r.default.cChmCO,
    r.default["H0zY/q"],
    r.default["+Bo7fD"],
    r.default["o/+isu"],
    r.default.MzFZoP,
    r.default["NKZY+Z"],
    r.default["SM4C+M"],
    r.default.rsvVIs,
    r.default["kmA+p3"],
    r.default["S+ZC67"],
];
function u() {
    return (0, a.sampleSize)(c, 7).map((e) => o.intl.string(e));
}
let d = s.createContext(null);
n.d(
    t,
    {},
    {
        S: function () {
            let e = s.useContext(d);
            if (null == e)
                throw Error(
                    "useCollectiblesSearchSuggestions must be used within CollectiblesSearchSuggestionsProvider",
                );
            return e;
        },
        Y: (e) => {
            let { children: t } = e,
                n = (0, i.A)(u),
                [a, r] = s.useState(0),
                o = s.useMemo(() => ({ searchSuggestions: n, placeholderIndex: a, setPlaceholderIndex: r }), [n, a]);
            return (0, l.jsx)(d.Provider, { value: o, children: t });
        },
    },
);
