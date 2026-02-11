"use strict";
n.d(t, { A: () => E, P: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(253018),
    l = n(621466),
    u = n(397927),
    c = n(750506),
    d = n(267102),
    _ = n(186306),
    f = n(339871),
    h = n(711371),
    p = n(574377);
function g(e) {
    let { editorRef: t, options: n, iconClassName: i, dividerClassName: a } = e,
        o = t.current?.getSlateEditor();
    return null == o
        ? null
        : (0, r.jsxs)("div", {
              className: p.Uo,
              children: [
                  (0, r.jsx)(A, {
                      slateEditor: o,
                      markdownSyntax: "bold",
                      children: (0, r.jsx)(u.$oz, { size: "md", color: "currentColor", className: s()(p.Kk, i) }),
                  }),
                  (0, r.jsx)(A, {
                      slateEditor: o,
                      markdownSyntax: "italics",
                      children: (0, r.jsx)(u.yOR, { size: "md", color: "currentColor", className: s()(p.Kk, i) }),
                  }),
                  (0, r.jsx)(A, {
                      slateEditor: o,
                      markdownSyntax: "strikethrough",
                      children: (0, r.jsx)(u.t64, { size: "md", color: "currentColor", className: s()(p.Kk, i) }),
                  }),
                  (0, r.jsx)("div", { className: s()(p.yF, a) }),
                  !n?.disableBlockQuotes &&
                      (0, r.jsx)(I, {
                          slateEditor: o,
                          blockType: "blockQuote",
                          children: (0, r.jsx)(u.cyi, { size: "md", color: "currentColor", className: s()(p.Kk, i) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, r.jsx)(A, {
                          slateEditor: o,
                          markdownSyntax: "inlineCode",
                          children: (0, r.jsx)(u.GaO, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: s()(p.Kk, i),
                          }),
                      }),
                  (0, r.jsx)(A, {
                      slateEditor: o,
                      markdownSyntax: "spoiler",
                      children: (0, r.jsx)(u.bMW, { size: "md", color: "currentColor", className: s()(p.Kk, i) }),
                  }),
              ],
          });
}
let E = i.forwardRef(function (e, t) {
    let { editorRef: n, containerRef: a, options: s } = e,
        u = i.useRef(null),
        [_, f] = i.useState(!1),
        E = i.useRef(null),
        A = i.useContext(d.Ay),
        I = i.useCallback(() => {
            f(!1), clearTimeout(E.current);
        }, []),
        T = i.useCallback(
            (e) => {
                let t = A.renderWindow;
                (e.target instanceof t.Node && u.current?.contains(e.target)) || I();
            },
            [A, I],
        ),
        y = i.useCallback(
            (e) => {
                let t = A.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) I();
                    else {
                        let n = e.target instanceof t.Node && u.current?.contains(e.target);
                        clearTimeout(E.current),
                            (E.current = setTimeout(() => {
                                let t = (0, l.BF)(e)?.activeElement,
                                    r = a.current;
                                f(n || (null != t && null != r && r.contains(t)));
                            }, 100));
                    }
                else I();
            },
            [A, a, I],
        );
    i.useImperativeHandle(t, () => ({ hide: I }), [I]),
        i.useEffect(() => {
            let e = A.renderWindow;
            return (
                e.document.addEventListener("keydown", I),
                e.document.addEventListener("mousedown", T),
                e.document.addEventListener("mouseup", y),
                e.addEventListener("focus", I),
                e.addEventListener("blur", I),
                () => {
                    e.document.removeEventListener("keydown", I),
                        e.document.removeEventListener("mousedown", T),
                        e.document.removeEventListener("mouseup", y),
                        e.removeEventListener("focus", I),
                        e.removeEventListener("blur", I),
                        clearTimeout(E.current);
                }
            );
        }, [A, I, T, y]);
    let { x: S, y: v } = i.useMemo(() => {
            let e = n.current?.getSlateEditor();
            if (e?.selection == null || h.ZF.isCollapsed(e.selection) || !_) return { x: null, y: null };
            let t = o.rL.findDocumentOrShadowRoot(e),
                r = t.getSelection();
            if (null == r || null == r.focusNode || null == r.anchorNode || r.isCollapsed) return { x: null, y: null };
            let i = t.createRange();
            i.setStart(r.focusNode, r.focusOffset), i.setEnd(r.focusNode, r.focusOffset);
            let s = i.getBoundingClientRect(),
                l = t.createRange();
            l.setStart(r.anchorNode, r.anchorOffset), l.setEnd(r.anchorNode, r.anchorOffset);
            let u = l.getBoundingClientRect(),
                c = t.createRange();
            c.setStart(r.anchorNode, r.anchorOffset), c.setEnd(r.focusNode, r.focusOffset);
            let d = c.getBoundingClientRect(),
                f = s.x === u.x,
                p = f ? d.x : Math.min(s.x, u.x),
                g = f ? d.x + d.width : Math.max(s.x, u.x),
                E = a.current?.getBoundingClientRect()?.y ?? 0;
            return { x: p + (g - p) / 2, y: Math.max(E, Math.min(u.y, s.y)) };
        }, [a, _, n]),
        [C, b] = i.useState(0),
        [N, R] = i.useState(0);
    return (i.useLayoutEffect(() => {
        if (null == S || null == v || null == u.current) return;
        let e = u.current.getBoundingClientRect();
        R(e.width / 2), b(e.height + 12);
    }, [S, v]),
    null == S || null == v || null == n.current?.getSlateEditor())
        ? null
        : (0, r.jsx)(c.Ay, {
              children: (0, r.jsx)("div", {
                  id: "slate-toolbar",
                  ref: u,
                  className: p.KE,
                  style: { top: v - C, left: S - N },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: (0, r.jsx)(g, { editorRef: n, options: s }),
              }),
          });
});
function A(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        a = () => {
            null != t && _.o.withSingleEntry(t, () => (0, f.Px)(t, n));
        },
        s = !1;
    if (t?.selection != null) {
        let [e, r] = h.ZF.edges(t.selection);
        s = null != (0, f.Sx)(t, e, r).before[n];
    }
    return (0, r.jsx)("button", { "aria-pressed": s, className: p.x6, onClick: a, children: i });
}
function I(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        a = () => {
            null != n && _.o.withSingleEntry(n, () => (0, f.fO)(n, t));
        },
        s = null != n ? h.VW.getCurrentBlock(n) : null,
        o = null != s && h.AS.isType(s[0], t);
    return (0, r.jsx)("button", { "aria-pressed": o, className: p.x6, onClick: a, children: i });
}
