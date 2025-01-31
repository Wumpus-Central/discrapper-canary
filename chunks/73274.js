n.d(t, { Z: () => u });
var i = n(192379),
    l = n(924826),
    a = n(448986),
    r = n(459273),
    s = n(585483),
    o = n(534091),
    c = n(959517),
    d = n(981631);
function u(e) {
    let { scrollerRef: t, ...n } = e,
        u = (0, a.Z)(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToBottom({ callback: () => requestAnimationFrame(t) });
                  });
        }),
        h = (0, a.Z)(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToTop({ callback: () => requestAnimationFrame(t) });
                  });
        }),
        p = i.useCallback(
            (e) => {
                var i, l, a;
                if (!n.keyboardModeEnabled) return;
                let r = null === (l = t.current) || void 0 === l ? void 0 : null === (i = l.getScrollerNode()) || void 0 === i ? void 0 : i.ownerDocument,
                    s = null == r ? void 0 : r.querySelector(e);
                null != s &&
                    (null === (a = t.current) ||
                        void 0 === a ||
                        a.scrollIntoViewNode({
                            node: s,
                            padding: 4 * c.kQ,
                            callback: () => (null == s ? void 0 : s.focus())
                        }));
            },
            [n.keyboardModeEnabled, t]
        ),
        m = i.useCallback(() => {
            n.hasMoreAfter || s.S.dispatchToLastSubscribed(d.CkL.TEXTAREA_FOCUS);
        }, [n.hasMoreAfter]),
        f = (0, l.ZP)({
            id: o.W,
            preserveFocusPosition: !1,
            setFocus: p,
            isEnabled: n.keyboardModeEnabled && !n.isEditing,
            scrollToStart: h,
            scrollToEnd: u,
            onNavigateNextAtEnd: m
        }),
        g = i.useCallback(
            (e) => {
                let { atEnd: t = !1 } = e;
                t ? f.focusLastVisibleItem() : f.focusFirstVisibleItem();
            },
            [f]
        );
    return (
        (0, r.yp)({
            event: d.CkL.FOCUS_MESSAGES,
            handler: g
        }),
        f
    );
}
