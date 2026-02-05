"use strict";
n.r(t), n.d(t, { useCallback: () => l, useCallbackOne: () => s, useMemo: () => o, useMemoOne: () => a });
var r = n(64700);
function i(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
}
function a(e, t) {
    var n = (0, r.useState)(function () {
            return { inputs: t, result: e() };
        })[0],
        a = (0, r.useRef)(!0),
        s = (0, r.useRef)(n),
        o = a.current || (t && s.current.inputs && i(t, s.current.inputs)) ? s.current : { inputs: t, result: e() };
    return (
        (0, r.useEffect)(
            function () {
                (a.current = !1), (s.current = o);
            },
            [o],
        ),
        o.result
    );
}
function s(e, t) {
    return a(function () {
        return e;
    }, t);
}
var o = a,
    l = s;
