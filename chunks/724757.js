n.d(t, { Z: () => r });
var a = n(192379),
    l = n(924826),
    i = n(442837),
    s = n(607070);
function r(e, t, n) {
    let r = (0, i.e7)([s.Z], () => s.Z.keyboardModeEnabled),
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
        d = a.useCallback(
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
    return (0, l.ZP)({
        id: e,
        isEnabled: r,
        setFocus: o,
        scrollToStart: c,
        scrollToEnd: d,
        orientation: null == n ? void 0 : n.orientation
    });
}
