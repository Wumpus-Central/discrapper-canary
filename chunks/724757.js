n.d(t, { Z: () => a });
var r = n(192379),
    i = n(924826),
    l = n(442837),
    o = n(607070);
function a(e, t, n) {
    let a = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        u = r.useCallback(
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
        s = r.useCallback(
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
        isEnabled: a,
        setFocus: u,
        scrollToStart: c,
        scrollToEnd: s,
        orientation: null == n ? void 0 : n.orientation
    });
}
