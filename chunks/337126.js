"use strict";
n.r(t), n.d(t, { useCallback: () => o, useCallbackOne: () => s, useMemo: () => a, useMemoOne: () => r });
var i = n(64700);
function r(e, t) {
    var n = (0, i.useState)(function () {
            return { inputs: t, result: e() };
        })[0],
        r = (0, i.useRef)(!0),
        s = (0, i.useRef)(n),
        a =
            r.current ||
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
        (0, i.useEffect)(
            function () {
                (r.current = !1), (s.current = a);
            },
            [a],
        ),
        a.result
    );
}
function s(e, t) {
    return r(function () {
        return e;
    }, t);
}
var a = r,
    o = s;
