n.d(t, { Z: () => s });
var l = n(192379),
    r = n(924826),
    i = n(442837),
    a = n(607070);
function s(e, t, n) {
    let s = (0, i.e7)([a.Z], () => a.Z.keyboardModeEnabled),
        o = l.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    l = t.current;
                null != n &&
                    null != l &&
                    (n.focus(),
                    l.scrollIntoViewNode({
                        node: n,
                        padding: 80
                    }));
            },
            [t]
        ),
        c = l.useCallback(
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
        u = l.useCallback(
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
