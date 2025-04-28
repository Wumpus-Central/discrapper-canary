n.d(t, { Z: () => d });
var r = n(192379),
    i = n(924826),
    l = n(448986),
    o = n(459273),
    a = n(585483),
    s = n(534091),
    c = n(959517),
    u = n(981631);
function d(e) {
    var { scrollerRef: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['scrollerRef']);
    let d = (0, l.Z)(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                  });
        }),
        p = (0, l.Z)(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                  });
        }),
        h = r.useCallback(
            (e) => {
                var r, i, l;
                if (!n.keyboardModeEnabled) return;
                let o = null == (i = t.current) || null == (r = i.getScrollerNode()) ? void 0 : r.ownerDocument,
                    a = null == o ? void 0 : o.querySelector(e);
                null != a &&
                    (null == (l = t.current) ||
                        l.scrollIntoViewNode({
                            node: a,
                            padding: 4 * c.kQ,
                            callback: () => (null == a ? void 0 : a.focus())
                        }));
            },
            [n.keyboardModeEnabled, t]
        ),
        f = r.useCallback(() => {
            n.hasMoreAfter || a.S.dispatchToLastSubscribed(u.CkL.TEXTAREA_FOCUS);
        }, [n.hasMoreAfter]),
        m = (0, i.ZP)({
            id: s.W,
            preserveFocusPosition: !1,
            setFocus: h,
            isEnabled: n.keyboardModeEnabled && !n.isEditing,
            scrollToStart: p,
            scrollToEnd: d,
            onNavigateNextAtEnd: f
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
