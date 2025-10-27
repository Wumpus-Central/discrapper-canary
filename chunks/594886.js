n.d(t, {
    b: () => c,
    j: () => u,
});
var r = n(910196),
    i = n(302996),
    a = n(647438);
let o = a.createContext(null);
function s(e) {
    let { locale: t, children: n } = e,
        i = a.useMemo(
            () => ({
                locale: t,
                direction: (0, r.d)(t) ? "rtl" : "ltr",
            }),
            [t],
        );
    return a.createElement(o.Provider, { value: i }, n);
}
function l(e) {
    let { children: t } = e,
        n = (0, i.R)();
    return a.createElement(o.Provider, { value: n }, t);
}
function c(e) {
    let { locale: t, children: n } = e;
    return t
        ? a.createElement(s, {
              locale: t,
              children: n,
          })
        : a.createElement(l, { children: n });
}
function u() {
    let e = (0, i.R)();
    return (0, a.useContext)(o) || e;
}
