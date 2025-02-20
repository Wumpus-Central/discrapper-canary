n.d(t, { Z: () => s });
var a = n(192379),
    r = n(924826),
    l = n(442837),
    i = n(607070);
function s(e, t, n) {
    let s = (0, l.e7)([i.Z], () => i.Z.keyboardModeEnabled),
        o = a.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    a = t.current;
                null != n &&
                    null != a &&
                    (n.focus(),
                    a.scrollIntoViewNode({
                        node: n,
                        padding: 80
                    }));
            },
            [t]
        ),
        c = a.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({
                        to: 0,
                        callback: () => requestAnimationFrame(() => e())
                    });
                }),
            [t]
        ),
        u = a.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({
                        to: Number.MAX_SAFE_INTEGER,
                        callback: () => requestAnimationFrame(() => e())
                    });
                }),
            [t]
        );
    return (0, r.ZP)({
        id: e,
        isEnabled: s,
        setFocus: o,
        scrollToStart: c,
        scrollToEnd: u,
        orientation: null == n ? void 0 : n.orientation
    });
}
