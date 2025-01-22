r.d(n, {
    C8: function () {
        return a;
    },
    dK: function () {
        return s;
    },
    mq: function () {
        return o;
    }
});
var i = r(192379),
    a = i.createContext(),
    o = i.createContext();
function s(e) {
    var n = e.children,
        r = i.useState(null),
        s = r[0],
        l = r[1],
        u = i.useRef(!1);
    i.useEffect(function () {
        return function () {
            u.current = !0;
        };
    }, []);
    var c = i.useCallback(function (e) {
        !u.current && l(e);
    }, []);
    return i.createElement(a.Provider, { value: s }, i.createElement(o.Provider, { value: c }, n));
}
