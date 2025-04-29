n.d(t, {
    C8: () => i,
    dK: () => a,
    mq: () => o
});
var r = n(192379),
    i = r.createContext(),
    o = r.createContext();
function a(e) {
    var t = e.children,
        n = r.useState(null),
        a = n[0],
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
    return r.createElement(i.Provider, { value: a }, r.createElement(o.Provider, { value: c }, t));
}
