n.d(t, {
    Z: function () {
        return s;
    }
});
var l = n(192379),
    i = n(924826),
    a = n(442837),
    r = n(607070);
function s(e, t, n) {
    let s = (0, a.e7)([r.Z], () => r.Z.keyboardModeEnabled),
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
    return (0, i.ZP)({
        id: e,
        isEnabled: s,
        setFocus: o,
        scrollToStart: c,
        scrollToEnd: u,
        orientation: null == n ? void 0 : n.orientation
    });
}
