n.d(t, {
    b: () => o,
});
var r = n(371926),
    i = n(36310),
    a = n(74733),
    s = n(64700);

function o(e) {
    let { collection: t, focusMode: n } = e,
        o = e.UNSAFE_selectionState || (0, i.R)(e),
        l = (0, s.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        c = o.setFocusedKey;
    o.setFocusedKey = (e, i) => {
        if ("cell" === n && null != e) {
            let n = t.getItem(e);
            if ((null == n ? void 0 : n.type) === "item") {
                var a, s, o, l;
                let c = (0, r.iQ)(n, t);
                e =
                    "last" === i
                        ? null != (o = null == (a = (0, r.W)(c)) ? void 0 : a.key)
                            ? o
                            : null
                        : null != (l = null == (s = (0, r.ue)(c)) ? void 0 : s.key)
                          ? l
                          : null;
            }
        }
        c(e, i);
    };
    let u = (0, s.useMemo)(() => new (0, a.Y)(t, o), [t, o]),
        d = (0, s.useRef)(null);
    return (
        (0, s.useEffect)(() => {
            if (null != o.focusedKey && d.current && !t.getItem(o.focusedKey)) {
                let e = d.current.getItem(o.focusedKey),
                    n =
                        (null == e ? void 0 : e.parentKey) != null &&
                        ("cell" === e.type || "rowheader" === e.type || "column" === e.type)
                            ? d.current.getItem(e.parentKey)
                            : e;
                if (!n) return void o.setFocusedKey(null);
                let i = d.current.rows,
                    a = t.rows,
                    s = i.length - a.length,
                    l = Math.min(s > 1 ? Math.max(n.index - s + 1, 0) : n.index, a.length - 1),
                    c = null;
                for (; l >= 0; ) {
                    if (!u.isDisabled(a[l].key) && "headerrow" !== a[l].type) {
                        c = a[l];
                        break;
                    }
                    l < a.length - 1 ? l++ : (l > n.index && (l = n.index), l--);
                }
                if (c) {
                    let i = c.hasChildNodes ? [...(0, r.iQ)(c, t)] : [],
                        a = c.hasChildNodes && n !== e && e && e.index < i.length ? i[e.index].key : c.key;
                    o.setFocusedKey(a);
                } else o.setFocusedKey(null);
            }
            d.current = t;
        }, [t, u, o, o.focusedKey]),
        {
            collection: t,
            disabledKeys: l,
            isKeyboardNavigationDisabled: !1,
            selectionManager: u,
        }
    );
}
