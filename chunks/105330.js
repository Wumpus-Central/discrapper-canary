"use strict";
n.d(t, { l: () => o });
var r = n(64700),
    i = n(267102),
    s = n(374803),
    a = n(562650);
function o(e) {
    let { editorHeight: t, type: n, state: o } = e,
        [l, u] = r.useState(void 0),
        c = o?.query,
        d = o?.isVisible,
        { renderWindow: _ } = r.useContext(i.Ay),
        f = r.useCallback(() => {
            if (null != o && (null == c || !d)) return void u(void 0);
            if (c?.type === s.DB.MENTION_SUGGESTIONS) {
                let e = _.document.getElementsByClassName(a.Z2)[0];
                if (null == e) return void u(void 0);
                {
                    let t = e.getBoundingClientRect();
                    u(new DOMRect(t.x - 10, t.y, t.width, t.height));
                    return;
                }
            }
            if (c?.type === s.DB.GIFS || (null != n && !n.autocomplete?.alwaysUseLayer)) return void u(null);
            let e = _.document.getSelection(),
                t = null != e && e.rangeCount > 0 ? e.getRangeAt(0) : null;
            if (null == t) return;
            let r = t.startContainer,
                i = t.startOffset;
            for (; null != r; ) {
                if (r.nodeType !== Node.TEXT_NODE || null == r.nodeValue) return void u(null);
                if (r.nodeValue?.length === 0) {
                    (r = r.previousSibling), (i = r?.nodeValue?.length ?? 0);
                    continue;
                }
                null != c && (i >= c.queryText.length ? (i -= c.queryText.length) : (i = 0));
                break;
            }
            if (null == r) return;
            let l = _.document.createRange();
            l.setStart(r, i), l.setEnd(r, i);
            let f = l.getBoundingClientRect();
            f?.height !== 0 && u(f ?? null);
        }, [_.document, o, d, c, n]);
    return (
        r.useEffect(
            () => (
                _.document.addEventListener("selectionchange", f),
                () => _.document.removeEventListener("selectionchange", f)
            ),
            [_.document, f],
        ),
        r.useEffect(() => {
            f();
        }, [f, t]),
        l
    );
}
