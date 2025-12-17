n.d(t, { Z: () => i });
var a = n(473749),
    r = n(924826);
function i(e) {
    let { listRef: t, padding: n, channel: i, isEnabled: l } = e,
        s = a.useCallback(
            (e) => {
                let a = t.current,
                    r = document.querySelector(e);
                null != r &&
                    (null == a ||
                        a.scrollIntoViewNode({
                            node: r,
                            padding: n,
                            callback: () => {
                                var t;
                                null == (t = document.querySelector(e)) || t.focus({ preventScroll: !0 });
                            },
                        }));
            },
            [n, t],
        ),
        o = a.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToTop({ callback: () => requestAnimationFrame(e) });
                }),
            [t],
        ),
        c = a.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToBottom({ callback: () => requestAnimationFrame(e) });
                }),
            [t],
        );
    return (0, r.ZP)({
        id: "forum-channel-list-".concat(i.id),
        isEnabled: l,
        scrollToStart: o,
        scrollToEnd: c,
        setFocus: s,
    });
}
