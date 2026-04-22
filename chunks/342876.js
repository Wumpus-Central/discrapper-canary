l.d(t, { b: () => s });
var n = l(371926),
    o = l(36310),
    r = l(74733),
    i = l(64700);
function s(e) {
    let { collection: t, focusMode: l } = e,
        s = e.UNSAFE_selectionState || (0, o.R)(e),
        u = (0, i.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        a = s.setFocusedKey;
    s.setFocusedKey = (e, o) => {
        if ("cell" === l && null != e) {
            let l = t.getItem(e);
            if ((null == l ? void 0 : l.type) === "item") {
                var r, i, s, u;
                let a = (0, n.iQ)(l, t);
                e =
                    "last" === o
                        ? null != (s = null == (r = (0, n.W)(a)) ? void 0 : r.key)
                            ? s
                            : null
                        : null != (u = null == (i = (0, n.ue)(a)) ? void 0 : i.key)
                          ? u
                          : null;
            }
        }
        a(e, o);
    };
    let c = (0, i.useMemo)(() => new (0, r.Y)(t, s), [t, s]),
        d = (0, i.useRef)(null);
    return (
        (0, i.useEffect)(() => {
            if (null != s.focusedKey && d.current && !t.getItem(s.focusedKey)) {
                let e = d.current.getItem(s.focusedKey),
                    l =
                        (null == e ? void 0 : e.parentKey) != null &&
                        ("cell" === e.type || "rowheader" === e.type || "column" === e.type)
                            ? d.current.getItem(e.parentKey)
                            : e;
                if (!l) return void s.setFocusedKey(null);
                let o = d.current.rows,
                    r = t.rows,
                    i = o.length - r.length,
                    u = Math.min(i > 1 ? Math.max(l.index - i + 1, 0) : l.index, r.length - 1),
                    a = null;
                for (; u >= 0; ) {
                    if (!c.isDisabled(r[u].key) && "headerrow" !== r[u].type) {
                        a = r[u];
                        break;
                    }
                    u < r.length - 1 ? u++ : (u > l.index && (u = l.index), u--);
                }
                if (a) {
                    let o = a.hasChildNodes ? [...(0, n.iQ)(a, t)] : [],
                        r = a.hasChildNodes && l !== e && e && e.index < o.length ? o[e.index].key : a.key;
                    s.setFocusedKey(r);
                } else s.setFocusedKey(null);
            }
            d.current = t;
        }, [t, c, s, s.focusedKey]),
        { collection: t, disabledKeys: u, isKeyboardNavigationDisabled: !1, selectionManager: c }
    );
}
