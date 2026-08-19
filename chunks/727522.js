"use strict";
r.r(t), r.d(t, { useCallback: () => s, useCallbackOne: () => i, useMemo: () => a, useMemoOne: () => o });
var n = r(582128);
function o(e, t) {
    var r = (0, n.useState)(function () {
            return { inputs: t, result: e() };
        })[0],
        o = (0, n.useRef)(!0),
        i = (0, n.useRef)(r),
        a =
            o.current ||
            (t &&
                i.current.inputs &&
                (function (e, t) {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
                    return !0;
                })(t, i.current.inputs))
                ? i.current
                : { inputs: t, result: e() };
    return (
        (0, n.useEffect)(
            function () {
                (o.current = !1), (i.current = a);
            },
            [a],
        ),
        a.result
    );
}
function i(e, t) {
    return o(function () {
        return e;
    }, t);
}
var a = o,
    s = i;
