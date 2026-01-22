n.d(t, {
    A: () => d,
});
var r = n(64700),
    l = n(884362),
    i = n(765548),
    a = n(234320),
    s = n(203982),
    o = n(375901),
    c = n(381941),
    u = n(652215);

function d(e) {
    let { scrollerRef: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["scrollerRef"]),
        d = (0, i.A)(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToBottom({
                          callback: () => requestAnimationFrame(t),
                      });
                  });
        }),
        f = (0, i.A)(() => {
            let e = t.current;
            return null == e
                ? Promise.resolve()
                : new Promise((t) => {
                      e.scrollToTop({
                          callback: () => requestAnimationFrame(t),
                      });
                  });
        }),
        p = r.useCallback(
            (e) => {
                var r, l, i;
                if (!n.keyboardModeEnabled) return;
                let a = null == (l = t.current) || null == (r = l.getScrollerNode()) ? void 0 : r.ownerDocument,
                    s = null == a ? void 0 : a.querySelector(e);
                null != s &&
                    (null == (i = t.current) ||
                        i.scrollIntoViewNode({
                            node: s,
                            padding: 4 * c.mZ,
                            callback: () => (null == s ? void 0 : s.focus()),
                        }));
            },
            [n.keyboardModeEnabled, t],
        ),
        h = r.useCallback(() => {
            n.hasMoreAfter || s._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS);
        }, [n.hasMoreAfter]),
        b = (0, l.Ay)({
            id: o.D,
            preserveFocusPosition: !1,
            setFocus: p,
            isEnabled: n.keyboardModeEnabled && !n.isEditing,
            scrollToStart: f,
            scrollToEnd: d,
            onNavigateNextAtEnd: h,
        }),
        g = r.useCallback(
            (e) => {
                let { atEnd: t = !1 } = e;
                t ? b.focusLastVisibleItem() : b.focusFirstVisibleItem();
            },
            [b],
        );
    return (
        (0, a.Vo)({
            event: u.jej.FOCUS_MESSAGES,
            handler: g,
        }),
        b
    );
}
