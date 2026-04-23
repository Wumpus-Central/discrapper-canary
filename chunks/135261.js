"use strict";
n.d(t, { A: () => y, P: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(253018),
    l = n(621466),
    u = n(902001),
    c = n(899536),
    d = n(74833),
    _ = n(216964),
    f = n(387758),
    p = n(39623),
    h = n(187322),
    E = n(750506),
    m = n(267102),
    g = n(186306),
    A = n(339871),
    I = n(711371),
    T = n(128934);
function S(e) {
    let { editorRef: t, options: n, iconClassName: i, dividerClassName: s } = e,
        o = t.current?.getSlateEditor();
    return null == o
        ? null
        : (0, r.jsxs)("div", {
              className: T.Uo,
              children: [
                  (0, r.jsx)(N, {
                      slateEditor: o,
                      markdownSyntax: "bold",
                      children: (0, r.jsx)(u.$, { size: "md", color: "currentColor", className: a()(T.Kk, i) }),
                  }),
                  (0, r.jsx)(N, {
                      slateEditor: o,
                      markdownSyntax: "italics",
                      children: (0, r.jsx)(c.y, { size: "md", color: "currentColor", className: a()(T.Kk, i) }),
                  }),
                  (0, r.jsx)(N, {
                      slateEditor: o,
                      markdownSyntax: "strikethrough",
                      children: (0, r.jsx)(d.t, { size: "md", color: "currentColor", className: a()(T.Kk, i) }),
                  }),
                  (0, r.jsx)("div", { className: a()(T.yF, s) }),
                  !n?.disableBlockQuotes &&
                      (0, r.jsx)(v, {
                          slateEditor: o,
                          blockType: "blockQuote",
                          children: (0, r.jsx)(_.c, { size: "md", color: "currentColor", className: a()(T.Kk, i) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, r.jsx)(N, {
                          slateEditor: o,
                          markdownSyntax: "inlineCode",
                          children: (0, r.jsx)(f.G, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: a()(T.Kk, i),
                          }),
                      }),
                  (0, r.jsx)(N, {
                      slateEditor: o,
                      markdownSyntax: "spoiler",
                      children: (0, r.jsx)(p.b, { size: "md", color: "currentColor", className: a()(T.Kk, i) }),
                  }),
              ],
          });
}
let y = i.forwardRef(function (e, t) {
    let { editorRef: n, containerRef: s, options: a } = e,
        u = i.useRef(null),
        [c, d] = i.useState(!1),
        _ = i.useRef(null),
        f = i.useContext(m.Ay),
        p = i.useCallback(() => {
            d(!1), clearTimeout(_.current);
        }, []),
        h = i.useCallback(
            (e) => {
                let t = f.renderWindow;
                (e.target instanceof t.Node && u.current?.contains(e.target)) || p();
            },
            [f, p],
        ),
        g = i.useCallback(
            (e) => {
                let t = f.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) p();
                    else {
                        let n = e.target instanceof t.Node && u.current?.contains(e.target);
                        clearTimeout(_.current),
                            (_.current = setTimeout(() => {
                                let t = (0, l.BF)(e)?.activeElement,
                                    r = s.current;
                                d(n || (null != t && null != r && r.contains(t)));
                            }, 100));
                    }
                else p();
            },
            [f, s, p],
        );
    i.useImperativeHandle(t, () => ({ hide: p }), [p]),
        i.useEffect(() => {
            let e = f.renderWindow;
            return (
                e.document.addEventListener("keydown", p),
                e.document.addEventListener("mousedown", h),
                e.document.addEventListener("mouseup", g),
                e.addEventListener("focus", p),
                e.addEventListener("blur", p),
                () => {
                    e.document.removeEventListener("keydown", p),
                        e.document.removeEventListener("mousedown", h),
                        e.document.removeEventListener("mouseup", g),
                        e.removeEventListener("focus", p),
                        e.removeEventListener("blur", p),
                        clearTimeout(_.current);
                }
            );
        }, [f, p, h, g]);
    let { x: A, y } = i.useMemo(() => {
            let e = n.current?.getSlateEditor();
            if (e?.selection == null || I.ZF.isCollapsed(e.selection) || !c) return { x: null, y: null };
            let t = o.rL.findDocumentOrShadowRoot(e),
                r = t.getSelection();
            if (null == r || null == r.focusNode || null == r.anchorNode || r.isCollapsed) return { x: null, y: null };
            let i = t.createRange();
            i.setStart(r.focusNode, r.focusOffset), i.setEnd(r.focusNode, r.focusOffset);
            let a = i.getBoundingClientRect(),
                l = t.createRange();
            l.setStart(r.anchorNode, r.anchorOffset), l.setEnd(r.anchorNode, r.anchorOffset);
            let u = l.getBoundingClientRect(),
                d = t.createRange();
            d.setStart(r.anchorNode, r.anchorOffset), d.setEnd(r.focusNode, r.focusOffset);
            let _ = d.getBoundingClientRect(),
                f = a.x === u.x,
                p = f ? _.x : Math.min(a.x, u.x);
            return {
                x: p + ((f ? _.x + _.width : Math.max(a.x, u.x)) - p) / 2,
                y: Math.max(s.current?.getBoundingClientRect()?.y ?? 0, Math.min(u.y, a.y)),
            };
        }, [s, c, n]),
        [N, v] = i.useState(0),
        [C, O] = i.useState(0);
    return (i.useLayoutEffect(() => {
        if (null == A || null == y || null == u.current) return;
        let e = u.current.getBoundingClientRect();
        O(e.width / 2), v(e.height + 12);
    }, [A, y]),
    null == A || null == y || null == n.current?.getSlateEditor())
        ? null
        : (0, r.jsx)(E.Ay, {
              children: (0, r.jsx)("div", {
                  id: "slate-toolbar",
                  ref: u,
                  className: T.KE,
                  style: { top: y - N, left: A - C },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: (0, r.jsx)(S, { editorRef: n, options: a }),
              }),
          });
});
function N(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        s = !1;
    if (t?.selection != null) {
        let [e, r] = I.ZF.edges(t.selection);
        s = null != (0, A.Sx)(t, e, r).before[n];
    }
    return (0, r.jsx)(h.vN, {
        children: (0, r.jsx)("button", {
            "aria-pressed": s,
            className: T.x6,
            onClick: () => {
                null != t && g.o.withSingleEntry(t, () => (0, A.Px)(t, n));
            },
            children: i,
        }),
    });
}
function v(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        s = null != n ? I.VW.getCurrentBlock(n) : null,
        a = null != s && I.AS.isType(s[0], t);
    return (0, r.jsx)(h.vN, {
        children: (0, r.jsx)("button", {
            "aria-pressed": a,
            className: T.x6,
            onClick: () => {
                null != n && g.o.withSingleEntry(n, () => (0, A.fO)(n, t));
            },
            children: i,
        }),
    });
}
