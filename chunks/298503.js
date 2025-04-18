n.d(t, {
    C8: () => i,
    dK: () => o,
    mq: () => a
});
var r = n(192379),
    i = r.createContext(),
    a = r.createContext();
function o(e) {
    var t = e.children,
        n = r.useState(null),
        o = n[0],
        s = n[1],
        l = r.useRef(!1);
    r.useEffect(function () {
        return function () {
            l.current = !0;
        };
    }, []);
    var c = r.useCallback(function (e) {
        l.current || s(e);
    }, []);
    return r.createElement(i.Provider, { value: o }, r.createElement(a.Provider, { value: c }, t));
}
