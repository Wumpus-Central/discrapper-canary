"use strict";
n.d(t, { A: () => v, P: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(253018),
    o = n(621466),
    c = n(902001),
    u = n(899536),
    d = n(74833),
    h = n(216964),
    m = n(387758),
    p = n(39623),
    f = n(187322),
    g = n(750506),
    _ = n(267102),
    x = n(186306),
    A = n(339871),
    C = n(711371),
    E = n(128934);
function I(e) {
    let { editorRef: t, options: n, iconClassName: l, dividerClassName: s } = e,
        a = t.current?.getSlateEditor();
    return null == a
        ? null
        : (0, i.jsxs)("div", {
              className: E.Uo,
              children: [
                  (0, i.jsx)(y, {
                      slateEditor: a,
                      markdownSyntax: "bold",
                      children: (0, i.jsx)(c.$, { size: "md", color: "currentColor", className: r()(E.Kk, l) }),
                  }),
                  (0, i.jsx)(y, {
                      slateEditor: a,
                      markdownSyntax: "italics",
                      children: (0, i.jsx)(u.y, { size: "md", color: "currentColor", className: r()(E.Kk, l) }),
                  }),
                  (0, i.jsx)(y, {
                      slateEditor: a,
                      markdownSyntax: "strikethrough",
                      children: (0, i.jsx)(d.t, { size: "md", color: "currentColor", className: r()(E.Kk, l) }),
                  }),
                  (0, i.jsx)("div", { className: r()(E.yF, s) }),
                  !n?.disableBlockQuotes &&
                      (0, i.jsx)(S, {
                          slateEditor: a,
                          blockType: "blockQuote",
                          children: (0, i.jsx)(h.c, { size: "md", color: "currentColor", className: r()(E.Kk, l) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, i.jsx)(y, {
                          slateEditor: a,
                          markdownSyntax: "inlineCode",
                          children: (0, i.jsx)(m.G, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: r()(E.Kk, l),
                          }),
                      }),
                  (0, i.jsx)(y, {
                      slateEditor: a,
                      markdownSyntax: "spoiler",
                      children: (0, i.jsx)(p.b, { size: "md", color: "currentColor", className: r()(E.Kk, l) }),
                  }),
              ],
          });
}
let v = l.forwardRef(function (e, t) {
    let { editorRef: n, containerRef: s, options: r } = e,
        c = l.useRef(null),
        [u, d] = l.useState(!1),
        h = l.useRef(null),
        m = l.useContext(_.Ay),
        p = l.useCallback(() => {
            d(!1), clearTimeout(h.current);
        }, []),
        f = l.useCallback(
            (e) => {
                let t = m.renderWindow;
                (e.target instanceof t.Node && c.current?.contains(e.target)) || p();
            },
            [m, p],
        ),
        x = l.useCallback(
            (e) => {
                let t = m.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) p();
                    else {
                        let n = e.target instanceof t.Node && c.current?.contains(e.target);
                        clearTimeout(h.current),
                            (h.current = setTimeout(() => {
                                let t = (0, o.BF)(e)?.activeElement,
                                    i = s.current;
                                d(n || (null != t && null != i && i.contains(t)));
                            }, 100));
                    }
                else p();
            },
            [m, s, p],
        );
    l.useImperativeHandle(t, () => ({ hide: p }), [p]),
        l.useEffect(() => {
            let e = m.renderWindow;
            return (
                e.document.addEventListener("keydown", p),
                e.document.addEventListener("mousedown", f),
                e.document.addEventListener("mouseup", x),
                e.addEventListener("focus", p),
                e.addEventListener("blur", p),
                () => {
                    e.document.removeEventListener("keydown", p),
                        e.document.removeEventListener("mousedown", f),
                        e.document.removeEventListener("mouseup", x),
                        e.removeEventListener("focus", p),
                        e.removeEventListener("blur", p),
                        clearTimeout(h.current);
                }
            );
        }, [m, p, f, x]);
    let { x: A, y: v } = l.useMemo(() => {
            let e = n.current?.getSlateEditor();
            if (e?.selection == null || C.ZF.isCollapsed(e.selection) || !u) return { x: null, y: null };
            let t = a.rL.findDocumentOrShadowRoot(e),
                i = t.getSelection();
            if (null == i || null == i.focusNode || null == i.anchorNode || i.isCollapsed) return { x: null, y: null };
            let l = t.createRange();
            l.setStart(i.focusNode, i.focusOffset), l.setEnd(i.focusNode, i.focusOffset);
            let r = l.getBoundingClientRect(),
                o = t.createRange();
            o.setStart(i.anchorNode, i.anchorOffset), o.setEnd(i.anchorNode, i.anchorOffset);
            let c = o.getBoundingClientRect(),
                d = t.createRange();
            d.setStart(i.anchorNode, i.anchorOffset), d.setEnd(i.focusNode, i.focusOffset);
            let h = d.getBoundingClientRect(),
                m = r.x === c.x,
                p = m ? h.x : Math.min(r.x, c.x);
            return {
                x: p + ((m ? h.x + h.width : Math.max(r.x, c.x)) - p) / 2,
                y: Math.max(s.current?.getBoundingClientRect()?.y ?? 0, Math.min(c.y, r.y)),
            };
        }, [s, u, n]),
        [y, S] = l.useState(0),
        [b, N] = l.useState(0);
    return (l.useLayoutEffect(() => {
        if (null == A || null == v || null == c.current) return;
        let e = c.current.getBoundingClientRect();
        N(e.width / 2), S(e.height + 12);
    }, [A, v]),
    null == A || null == v || null == n.current?.getSlateEditor())
        ? null
        : (0, i.jsx)(g.Ay, {
              children: (0, i.jsx)("div", {
                  id: "slate-toolbar",
                  ref: c,
                  className: E.KE,
                  style: { top: v - y, left: A - b },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: (0, i.jsx)(I, { editorRef: n, options: r }),
              }),
          });
});
function y(e) {
    let { slateEditor: t, markdownSyntax: n, children: l } = e,
        s = !1;
    if (t?.selection != null) {
        let [e, i] = C.ZF.edges(t.selection);
        s = null != (0, A.Sx)(t, e, i).before[n];
    }
    return (0, i.jsx)(f.vN, {
        children: (0, i.jsx)("button", {
            "aria-pressed": s,
            className: E.x6,
            onClick: () => {
                null != t && x.o.withSingleEntry(t, () => (0, A.Px)(t, n));
            },
            children: l,
        }),
    });
}
function S(e) {
    let { blockType: t, slateEditor: n, children: l } = e,
        s = null != n ? C.VW.getCurrentBlock(n) : null,
        r = null != s && C.AS.isType(s[0], t);
    return (0, i.jsx)(f.vN, {
        children: (0, i.jsx)("button", {
            "aria-pressed": r,
            className: E.x6,
            onClick: () => {
                null != n && x.o.withSingleEntry(n, () => (0, A.fO)(n, t));
            },
            children: l,
        }),
    });
}
