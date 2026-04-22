"use strict";
n.r(t), n.d(t, { useCallback: () => o, useCallbackOne: () => s, useMemo: () => a, useMemoOne: () => i });
var r = n(64700);
function i(e, t) {
    var n = (0, r.useState)(function () {
            return { inputs: t, result: e() };
        })[0],
        i = (0, r.useRef)(!0),
        s = (0, r.useRef)(n),
        a =
            i.current ||
            (t &&
                s.current.inputs &&
                (function (e, t) {
                    if (e.length !== t.length) return !1;
                    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
                    return !0;
                })(t, s.current.inputs))
                ? s.current
                : { inputs: t, result: e() };
    return (
        (0, r.useEffect)(
            function () {
                (i.current = !1), (s.current = a);
            },
            [a],
        ),
        a.result
    );
}
function s(e, t) {
    return i(function () {
        return e;
    }, t);
}
var a = i,
    o = s;
