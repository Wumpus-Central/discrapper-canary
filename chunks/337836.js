var i = n(477900),
    r = n(582128),
    a = n(286615);
let s = "popover-portal",
    l = r.createContext(null);
n.d(
    t,
    {},
    {
        Jh: function (e) {
            let { children: t, enabled: n = !0 } = e,
                [a, s] = r.useState(null),
                o = r.useMemo(() => ({ enabled: n, target: a, registerTarget: s }), [n, a]);
            return (0, i.jsx)(l.Provider, { value: o, children: t });
        },
        P: function () {
            let e = r.useContext(l);
            return (0, i.jsx)("div", { id: null == e ? s : void 0, ref: e?.registerTarget });
        },
        sM: function (e) {
            let { ownerDocument: t = document, ...n } = e,
                o = r.useContext(l);
            if (o?.enabled === !0 && null == o.target) return null;
            let d = o?.enabled === !0 ? o.target : t.getElementById(s);
            return (0, i.jsx)(a.XF, { ...n, root: d });
        },
    },
);
