n.d(t, {
    I: function () {
        return s;
    },
    N: function () {
        return a;
    }
}),
    n(411104);
var i = n(200651),
    r = n(192379);
let l = r.createContext(void 0);
function a() {
    let e = r.useContext(l);
    if (null == e) throw Error('No edit state; are you missing an <EditStateContextProvider />?');
    return e;
}
function s(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)(l.Provider, {
        value: n,
        children: t
    });
}
