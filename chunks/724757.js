n.d(t, { Z: () => o });
var r = n(73800),
    i = n(924826),
    l = n(442837),
    a = n(607070);
function o(e, t, n) {
    let o = (0, l.e7)([a.Z], () => a.Z.keyboardModeEnabled),
        s = r.useCallback(
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
        c = r.useCallback(
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
        u = r.useCallback(
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
        isEnabled: o,
        setFocus: s,
        scrollToStart: c,
        scrollToEnd: u,
        orientation: null == n ? void 0 : n.orientation
    });
}
