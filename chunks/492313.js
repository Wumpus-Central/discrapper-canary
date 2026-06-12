"use strict";
n.d(t, { P: () => r });
var i = n(64700);
function r(e, t, n) {
    let [r, s] = (0, i.useState)(e || t),
        a = (0, i.useRef)(void 0 !== e),
        o = void 0 !== e;
    (0, i.useEffect)(() => {
        a.current, (a.current = o);
    }, [o]);
    let l = o ? e : r,
        u = (0, i.useCallback)(
            (e, ...t) => {
                let i = (e, ...t) => {
                    n && !Object.is(l, e) && n(e, ...t), o || (l = e);
                };
                "function" == typeof e
                    ? s((n, ...r) => {
                          let s = e(o ? l : n, ...r);
                          return (i(s, ...t), o) ? n : s;
                      })
                    : (o || s(e), i(e, ...t));
            },
            [o, l, n],
        );
    return [l, u];
}
