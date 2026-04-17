"use strict";
n.d(t, { A: () => E, P: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(253018),
    l = n(621466),
    u = n(397927),
    c = n(750506),
    d = n(267102),
    _ = n(186306),
    f = n(339871),
    p = n(711371),
    h = n(128934);
function m(e) {
    let { editorRef: t, options: n, iconClassName: i, dividerClassName: s } = e,
        o = t.current?.getSlateEditor();
    return null == o
        ? null
        : (0, r.jsxs)("div", {
              className: h.Uo,
              children: [
                  (0, r.jsx)(g, {
                      slateEditor: o,
                      markdownSyntax: "bold",
                      children: (0, r.jsx)(u.$oz, { size: "md", color: "currentColor", className: a()(h.Kk, i) }),
                  }),
                  (0, r.jsx)(g, {
                      slateEditor: o,
                      markdownSyntax: "italics",
                      children: (0, r.jsx)(u.yOR, { size: "md", color: "currentColor", className: a()(h.Kk, i) }),
                  }),
                  (0, r.jsx)(g, {
                      slateEditor: o,
                      markdownSyntax: "strikethrough",
                      children: (0, r.jsx)(u.t64, { size: "md", color: "currentColor", className: a()(h.Kk, i) }),
                  }),
                  (0, r.jsx)("div", { className: a()(h.yF, s) }),
                  !n?.disableBlockQuotes &&
                      (0, r.jsx)(A, {
                          slateEditor: o,
                          blockType: "blockQuote",
                          children: (0, r.jsx)(u.cyi, { size: "md", color: "currentColor", className: a()(h.Kk, i) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, r.jsx)(g, {
                          slateEditor: o,
                          markdownSyntax: "inlineCode",
                          children: (0, r.jsx)(u.GaO, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: a()(h.Kk, i),
                          }),
                      }),
                  (0, r.jsx)(g, {
                      slateEditor: o,
                      markdownSyntax: "spoiler",
                      children: (0, r.jsx)(u.bMW, { size: "md", color: "currentColor", className: a()(h.Kk, i) }),
                  }),
              ],
          });
}
let E = i.forwardRef(function (e, t) {
    let { editorRef: n, containerRef: s, options: a } = e,
        u = i.useRef(null),
        [_, f] = i.useState(!1),
        E = i.useRef(null),
        g = i.useContext(d.Ay),
        A = i.useCallback(() => {
            f(!1), clearTimeout(E.current);
        }, []),
        I = i.useCallback(
            (e) => {
                let t = g.renderWindow;
                (e.target instanceof t.Node && u.current?.contains(e.target)) || A();
            },
            [g, A],
        ),
        T = i.useCallback(
            (e) => {
                let t = g.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) A();
                    else {
                        let n = e.target instanceof t.Node && u.current?.contains(e.target);
                        clearTimeout(E.current),
                            (E.current = setTimeout(() => {
                                let t = (0, l.BF)(e)?.activeElement,
                                    r = s.current;
                                f(n || (null != t && null != r && r.contains(t)));
                            }, 100));
                    }
                else A();
            },
            [g, s, A],
        );
    i.useImperativeHandle(t, () => ({ hide: A }), [A]),
        i.useEffect(() => {
            let e = g.renderWindow;
            return (
                e.document.addEventListener("keydown", A),
                e.document.addEventListener("mousedown", I),
                e.document.addEventListener("mouseup", T),
                e.addEventListener("focus", A),
                e.addEventListener("blur", A),
                () => {
                    e.document.removeEventListener("keydown", A),
                        e.document.removeEventListener("mousedown", I),
                        e.document.removeEventListener("mouseup", T),
                        e.removeEventListener("focus", A),
                        e.removeEventListener("blur", A),
                        clearTimeout(E.current);
                }
            );
        }, [g, A, I, T]);
    let { x: S, y } = i.useMemo(() => {
            let e = n.current?.getSlateEditor();
            if (e?.selection == null || p.ZF.isCollapsed(e.selection) || !_) return { x: null, y: null };
            let t = o.rL.findDocumentOrShadowRoot(e),
                r = t.getSelection();
            if (null == r || null == r.focusNode || null == r.anchorNode || r.isCollapsed) return { x: null, y: null };
            let i = t.createRange();
            i.setStart(r.focusNode, r.focusOffset), i.setEnd(r.focusNode, r.focusOffset);
            let a = i.getBoundingClientRect(),
                l = t.createRange();
            l.setStart(r.anchorNode, r.anchorOffset), l.setEnd(r.anchorNode, r.anchorOffset);
            let u = l.getBoundingClientRect(),
                c = t.createRange();
            c.setStart(r.anchorNode, r.anchorOffset), c.setEnd(r.focusNode, r.focusOffset);
            let d = c.getBoundingClientRect(),
                f = a.x === u.x,
                h = f ? d.x : Math.min(a.x, u.x),
                m = f ? d.x + d.width : Math.max(a.x, u.x),
                E = s.current?.getBoundingClientRect()?.y ?? 0;
            return { x: h + (m - h) / 2, y: Math.max(E, Math.min(u.y, a.y)) };
        }, [s, _, n]),
        [v, N] = i.useState(0),
        [C, R] = i.useState(0);
    return (i.useLayoutEffect(() => {
        if (null == S || null == y || null == u.current) return;
        let e = u.current.getBoundingClientRect();
        R(e.width / 2), N(e.height + 12);
    }, [S, y]),
    null == S || null == y || null == n.current?.getSlateEditor())
        ? null
        : (0, r.jsx)(c.Ay, {
              children: (0, r.jsx)("div", {
                  id: "slate-toolbar",
                  ref: u,
                  className: h.KE,
                  style: { top: y - v, left: S - C },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: (0, r.jsx)(m, { editorRef: n, options: a }),
              }),
          });
});
function g(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        s = () => {
            null != t && _.o.withSingleEntry(t, () => (0, f.Px)(t, n));
        },
        a = !1;
    if (t?.selection != null) {
        let [e, r] = p.ZF.edges(t.selection);
        a = null != (0, f.Sx)(t, e, r).before[n];
    }
    return (0, r.jsx)(u.vN3, {
        children: (0, r.jsx)("button", { "aria-pressed": a, className: h.x6, onClick: s, children: i }),
    });
}
function A(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        s = () => {
            null != n && _.o.withSingleEntry(n, () => (0, f.fO)(n, t));
        },
        a = null != n ? p.VW.getCurrentBlock(n) : null,
        o = null != a && p.AS.isType(a[0], t);
    return (0, r.jsx)(u.vN3, {
        children: (0, r.jsx)("button", { "aria-pressed": o, className: h.x6, onClick: s, children: i }),
    });
}
