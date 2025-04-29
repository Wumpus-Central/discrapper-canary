n.r(t),
    n.d(t, {
        useCallback: () => l,
        useCallbackOne: () => o,
        useMemo: () => s,
        useMemoOne: () => a
    });
var r = n(73800);
function i(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
}
function a(e, t) {
    var n = (0, r.useState)(function () {
            return {
                inputs: t,
                result: e()
            };
        })[0],
        a = (0, r.useRef)(!0),
        o = (0, r.useRef)(n),
        s =
            a.current || (t && o.current.inputs && i(t, o.current.inputs))
                ? o.current
                : {
                      inputs: t,
                      result: e()
                  };
    return (
        (0, r.useEffect)(
            function () {
                (a.current = !1), (o.current = s);
            },
            [s]
        ),
        s.result
    );
}
function o(e, t) {
    return a(function () {
        return e;
    }, t);
}
var s = a,
    l = o;
