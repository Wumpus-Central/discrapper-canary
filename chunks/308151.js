"use strict";
n.d(t, { A: () => s });
var r = n(64700);
let i = Symbol();
function s(e, t) {
    let n = r.useRef(i),
        s = r.useRef(t);
    return r.useSyncExternalStore(
        r.useCallback(
            (t) =>
                e(() => {
                    (n.current = i), t();
                }),
            [e],
        ),
        r.useCallback(
            () => (
                s.current !== t && ((s.current = t), (n.current = i)), n.current === i && (n.current = t()), n.current
            ),
            [t],
        ),
    );
}
