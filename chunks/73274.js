n.d(t, { Z: () => d });
var i = n(647438),
    r = n(924826),
    l = n(448986),
    a = n(459273),
    o = n(585483),
    s = n(534091),
    c = n(959517),
    u = n(981631);
function d(e) {
    var { scrollerRef: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["scrollerRef"]);
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
        h = i.useCallback(
            (e) => {
                var i, r, l;
                if (!n.keyboardModeEnabled) return;
                let a = null == (r = t.current) || null == (i = r.getScrollerNode()) ? void 0 : i.ownerDocument,
                    o = null == a ? void 0 : a.querySelector(e);
                null != o &&
                    (null == (l = t.current) ||
                        l.scrollIntoViewNode({
                            node: o,
                            padding: 4 * c.kQ,
                            callback: () => (null == o ? void 0 : o.focus()),
                        }));
            },
            [n.keyboardModeEnabled, t],
        ),
        f = i.useCallback(() => {
            n.hasMoreAfter || o.S.dispatchToLastSubscribed(u.CkL.TEXTAREA_FOCUS);
        }, [n.hasMoreAfter]),
        m = (0, r.ZP)({
            id: s.W,
            preserveFocusPosition: !1,
            setFocus: h,
            isEnabled: n.keyboardModeEnabled && !n.isEditing,
            scrollToStart: p,
            scrollToEnd: d,
            onNavigateNextAtEnd: f,
        }),
        g = i.useCallback(
            (e) => {
                let { atEnd: t = !1 } = e;
                t ? m.focusLastVisibleItem() : m.focusFirstVisibleItem();
            },
            [m],
        );
    return (
        (0, a.yp)({
            event: u.CkL.FOCUS_MESSAGES,
            handler: g,
        }),
        m
    );
}
