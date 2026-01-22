n.d(t, {
    A: () => a,
});
var l = n(64700),
    r = n(884362);

function a(e) {
    let { listRef: t, padding: n, channel: a, isEnabled: i } = e,
        s = l.useCallback(
            (e) => {
                let l = t.current,
                    r = document.querySelector(e);
                null != r &&
                    (null == l ||
                        l.scrollIntoViewNode({
                            node: r,
                            padding: n,
                            callback: () => {
                                var t;
                                null == (t = document.querySelector(e)) ||
                                    t.focus({
                                        preventScroll: !0,
                                    });
                            },
                        }));
            },
            [n, t],
        ),
        c = l.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n ||
                        n.scrollToTop({
                            callback: () => requestAnimationFrame(e),
                        });
                }),
            [t],
        ),
        o = l.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n ||
                        n.scrollToBottom({
                            callback: () => requestAnimationFrame(e),
                        });
                }),
            [t],
        );
    return (0, r.Ay)({
        id: "forum-channel-list-".concat(a.id),
        isEnabled: i,
        scrollToStart: c,
        scrollToEnd: o,
        setFocus: s,
    });
}
