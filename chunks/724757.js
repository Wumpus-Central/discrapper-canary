n.d(t, { Z: () => l });
var r = n(73800),
    i = n(924826),
    o = n(442837),
    a = n(607070);
function l(e, t, n) {
    let l = (0, o.e7)([a.Z], () => a.Z.keyboardModeEnabled),
        c = r.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    r = t.current;
                null != n &&
                    null != r &&
                    (n.focus(),
                    r.scrollIntoViewNode({
                        node: n,
                        padding: 80
                    }));
            },
            [t]
        ),
        u = r.useCallback(
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
        d = r.useCallback(
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
    return (0, i.ZP)({
        id: e,
        isEnabled: l,
        setFocus: c,
        scrollToStart: u,
        scrollToEnd: d,
        orientation: null == n ? void 0 : n.orientation
    });
}
