"use strict";
n.r(t), n.d(t, { useCallback: () => s, useCallbackOne: () => a, useMemo: () => o, useMemoOne: () => i });
var r = n(582128);
function i(e, t) {
    var n = (0, r.useState)(function () {
            return { inputs: t, result: e() };
        })[0],
        i = (0, r.useRef)(!0),
        a = (0, r.useRef)(n),
        o =
            i.current ||
            (t &&
                a.current.inputs &&
                (function (e, t) {
                    if (e.length !== t.length) return !1;
                    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                    return !0;
                })(t, a.current.inputs))
                ? a.current
                : { inputs: t, result: e() };
    return (
        (0, r.useEffect)(
            function () {
                (i.current = !1), (a.current = o);
            },
            [o],
        ),
        o.result
    );
}
function a(e, t) {
    return i(function () {
        return e;
    }, t);
}
var o = i,
    s = a;
