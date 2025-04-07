n.d(t, { Z: () => l });
var a = n(192379),
    r = n(924826),
    i = n(442837),
    o = n(607070);
function l(e, t, n) {
    let l = (0, i.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        c = a.useCallback(
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
        s = a.useCallback(
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
        isEnabled: l,
        setFocus: c,
        scrollToStart: s,
        scrollToEnd: u,
        orientation: null == n ? void 0 : n.orientation
    });
}
