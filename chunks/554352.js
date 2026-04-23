"use strict";
n.d(t, { $$: () => s, kr: () => i, mS: () => a });
var r = n(64700),
    i = r.createContext(),
    s = r.createContext();
function a(e) {
    var t = e.children,
        n = r.useState(null),
        a = n[0],
        o = n[1],
        l = r.useRef(!1);
    r.useEffect(function () {
        return function () {
            l.current = !0;
        };
    }, []);
    var u = r.useCallback(function (e) {
        l.current || o(e);
    }, []);
    return r.createElement(i.Provider, { value: a }, r.createElement(s.Provider, { value: u }, t));
}
