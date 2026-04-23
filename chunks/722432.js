n.d(t, { A: () => u });
var i = n(64700),
    l = n(884362),
    a = n(765548),
    s = n(234320),
    r = n(203982),
    o = n(375901),
    c = n(381941),
    d = n(652215);
function u(e) {
    let { scrollerRef: t, ...n } = e,
        u = (0, a.A)(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                  });
        }),
        h = (0, a.A)(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                  });
        }),
        m = i.useCallback(
            (e) => {
                if (!n.keyboardModeEnabled) return;
                let i = t.current?.getScrollerNode()?.ownerDocument,
                    l = i?.querySelector(e);
                null != l && t.current?.scrollIntoViewNode({ node: l, padding: 4 * c.mZ, callback: () => l?.focus() });
            },
            [n.keyboardModeEnabled, t],
        ),
        A = i.useCallback(() => {
            n.hasMoreAfter || r._.dispatchToLastSubscribed(d.jej.TEXTAREA_FOCUS);
        }, [n.hasMoreAfter]),
        g = (0, l.Ay)({
            id: o.D,
            preserveFocusPosition: !1,
            setFocus: m,
            isEnabled: n.keyboardModeEnabled && !n.isEditing,
            scrollToStart: h,
            scrollToEnd: u,
            onNavigateNextAtEnd: A,
        }),
        _ = i.useCallback(
            (e) => {
                let { atEnd: t = !1 } = e;
                t ? g.focusLastVisibleItem() : g.focusFirstVisibleItem();
            },
            [g],
        );
    return (0, s.Vo)({ event: d.jej.FOCUS_MESSAGES, handler: _ }), g;
}
