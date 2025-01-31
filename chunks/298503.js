n.d(t, {
    C8: () => r,
    dK: () => s,
    mq: () => a
});
var i = n(192379),
    r = i.createContext(),
    a = i.createContext();
function s(e) {
    var t = e.children,
        n = i.useState(null),
        s = n[0],
        o = n[1],
        l = i.useRef(!1);
    i.useEffect(function () {
        return function () {
            l.current = !0;
        };
    }, []);
    var u = i.useCallback(function (e) {
        l.current || o(e);
    }, []);
    return i.createElement(r.Provider, { value: s }, i.createElement(a.Provider, { value: u }, t));
}
