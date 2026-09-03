r.r(t), r.d(t, { useCallback: () => s, useCallbackOne: () => o, useMemo: () => a, useMemoOne: () => i });
var n = r(582128);
function i(e, t) {
    var r = (0, n.useState)(function () {
            return { inputs: t, result: e() };
        })[0],
        i = (0, n.useRef)(!0),
        o = (0, n.useRef)(r),
        a =
            i.current ||
            (t &&
                o.current.inputs &&
                (function (e, t) {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
                    return !0;
                })(t, o.current.inputs))
                ? o.current
                : { inputs: t, result: e() };
    return (
        (0, n.useEffect)(
            function () {
                (i.current = !1), (o.current = a);
            },
            [a],
        ),
        a.result
    );
}
function o(e, t) {
    return i(function () {
        return e;
    }, t);
}
var a = i,
    s = o;
