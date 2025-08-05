n.d(t, { Z: () => _ });
var r = n(73800),
    i = n(924826),
    a = n(448986),
    o = n(459273),
    s = n(585483),
    l = n(534091),
    c = n(959517),
    u = n(981631);
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function _(e) {
    var { scrollerRef: t } = e,
        n = d(e, ['scrollerRef']);
    let f = (0, a.Z)(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                  });
        }),
        _ = (0, a.Z)(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                  });
        }),
        p = r.useCallback(
            (e) => {
                var r, i, a;
                if (!n.keyboardModeEnabled) return;
                let o = null == (i = t.current) || null == (r = i.getScrollerNode()) ? void 0 : r.ownerDocument,
                    s = null == o ? void 0 : o.querySelector(e);
                null != s &&
                    (null == (a = t.current) ||
                        a.scrollIntoViewNode({
                            node: s,
                            padding: 4 * c.kQ,
                            callback: () => (null == s ? void 0 : s.focus())
                        }));
            },
            [n.keyboardModeEnabled, t]
        ),
        h = r.useCallback(() => {
            n.hasMoreAfter || s.S.dispatchToLastSubscribed(u.CkL.TEXTAREA_FOCUS);
        }, [n.hasMoreAfter]),
        m = (0, i.ZP)({
            id: l.W,
            preserveFocusPosition: !1,
            setFocus: p,
            isEnabled: n.keyboardModeEnabled && !n.isEditing,
            scrollToStart: _,
            scrollToEnd: f,
            onNavigateNextAtEnd: h
        }),
        g = r.useCallback(
            (e) => {
                let { atEnd: t = !1 } = e;
                t ? m.focusLastVisibleItem() : m.focusFirstVisibleItem();
            },
            [m]
        );
    return (
        (0, o.yp)({
            event: u.CkL.FOCUS_MESSAGES,
            handler: g
        }),
        m
    );
}
