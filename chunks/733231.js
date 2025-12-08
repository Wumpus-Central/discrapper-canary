n.d(t, {
    C: () => s,
    d: () => u,
}),
    n(388685),
    n(642613);
var r = n(54381),
    i = n(473749),
    l = n(607070),
    a = n(231338);
let o = i.createContext(null),
    c = {
        registerItemRef: () => a.dG,
        registerDragHandleRef: () => a.dG,
        manageFocusOnReorder: a.dG,
        manageFocusOnDelete: a.dG,
    };
function s() {
    let e = i.useContext(o);
    return null != e ? e : c;
}
function u(e) {
    let { children: t, emptyListFallbackRef: n } = e,
        a = i.useRef(new Map()),
        c = i.useRef(new Map()),
        s = i.useRef([]),
        u = i.useCallback(() => {
            s.current = Array.from(a.current.keys()).sort((e, t) => {
                let n = a.current.get(e),
                    r = a.current.get(t);
                if (null == n || null == r) return 0;
                let i = n.compareDocumentPosition(r);
                return (i & Node.DOCUMENT_POSITION_FOLLOWING) != 0
                    ? -1
                    : +((i & Node.DOCUMENT_POSITION_PRECEDING) != 0);
            });
        }, []),
        d = i.useCallback(
            (e) => (t) => {
                null != t ? c.current.set(e, t) : c.current.delete(e);
            },
            [],
        ),
        f = i.useCallback(
            (e) => (t) => {
                null != t ? a.current.set(e, t) : a.current.delete(e);
            },
            [],
        ),
        g = i.useCallback((e) => {
            l.Z.keyboardModeEnabled &&
                requestAnimationFrame(() => {
                    let t = c.current.get(e);
                    null == t || t.focus();
                });
        }, []),
        p = i.useCallback(
            (e) => {
                if (!l.Z.keyboardModeEnabled) return;
                u();
                let t = s.current,
                    r = t.indexOf(e);
                if (-1 === r) return;
                let i = r + 1 < t.length ? r + 1 : r - 1;
                if (i >= 0) {
                    let e = t[i];
                    requestAnimationFrame(() => {
                        let t = a.current.get(e);
                        null == t || t.focus();
                    });
                } else
                    requestAnimationFrame(() => {
                        null == n || n.focus();
                    });
            },
            [n, u],
        ),
        m = i.useMemo(
            () => ({
                registerDragHandleRef: d,
                registerItemRef: f,
                manageFocusOnReorder: g,
                manageFocusOnDelete: p,
            }),
            [d, f, g, p],
        );
    return (0, r.jsx)(o.Provider, {
        value: m,
        children: t,
    });
}
