n.d(t, { Z: () => i });
var r = n(192379),
    a = n(924826);
function i(e) {
    let { listRef: t, padding: n, channel: i, isEnabled: l } = e,
        s = r.useCallback(
            (e) => {
                let r = t.current,
                    a = document.querySelector(e);
                null != a &&
                    (null == r ||
                        r.scrollIntoViewNode({
                            node: a,
                            padding: n,
                            callback: () => {
                                var t;
                                null == (t = document.querySelector(e)) || t.focus({ preventScroll: !0 });
                            }
                        }));
            },
            [n, t]
        ),
        o = r.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToTop({ callback: () => requestAnimationFrame(e) });
                }),
            [t]
        ),
        c = r.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToBottom({ callback: () => requestAnimationFrame(e) });
                }),
            [t]
        );
    return (0, a.ZP)({
        id: 'forum-channel-list-'.concat(i.id),
        isEnabled: l,
        scrollToStart: o,
        scrollToEnd: c,
        setFocus: s
    });
}
