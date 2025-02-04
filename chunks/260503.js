n.d(t, { Z: () => l });
var i = n(192379),
    r = n(924826);
function l(e) {
    let { listRef: t, padding: n, channel: l, isEnabled: a } = e,
        s = i.useCallback(
            (e) => {
                let i = t.current,
                    r = document.querySelector(e);
                null != r &&
                    (null == i ||
                        i.scrollIntoViewNode({
                            node: r,
                            padding: n,
                            callback: () => {
                                var t;
                                null === (t = document.querySelector(e)) || void 0 === t || t.focus({ preventScroll: !0 });
                            }
                        }));
            },
            [n, t]
        ),
        o = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToTop({ callback: () => requestAnimationFrame(e) });
                }),
            [t]
        ),
        c = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToBottom({ callback: () => requestAnimationFrame(e) });
                }),
            [t]
        );
    return (0, r.ZP)({
        id: 'forum-channel-list-'.concat(l.id),
        isEnabled: a,
        scrollToStart: o,
        scrollToEnd: c,
        setFocus: s
    });
}
