"use strict";
n.d(t, { A: () => A, P: () => E });
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
    p = n(35277),
    h = n(711371),
    m = n(408269),
    g = n(574377);
function E(e) {
    let { editorRef: t, options: n, iconClassName: i, dividerClassName: a } = e,
        o = t.current?.getSlateEditor();
    return null == o
        ? null
        : (0, r.jsxs)("div", {
              className: g.Uo,
              children: [
                  (0, r.jsx)(I, {
                      slateEditor: o,
                      markdownSyntax: "bold",
                      children: (0, r.jsx)(u.$oz, { size: "md", color: "currentColor", className: s()(g.Kk, i) }),
                  }),
                  (0, r.jsx)(I, {
                      slateEditor: o,
                      markdownSyntax: "italics",
                      children: (0, r.jsx)(u.yOR, { size: "md", color: "currentColor", className: s()(g.Kk, i) }),
                  }),
                  (0, r.jsx)(I, {
                      slateEditor: o,
                      markdownSyntax: "strikethrough",
                      children: (0, r.jsx)(u.t64, { size: "md", color: "currentColor", className: s()(g.Kk, i) }),
                  }),
                  (0, r.jsx)("div", { className: s()(g.yF, a) }),
                  !n?.disableBlockQuotes &&
                      (0, r.jsx)(T, {
                          slateEditor: o,
                          blockType: "blockQuote",
                          children: (0, r.jsx)(u.cyi, { size: "md", color: "currentColor", className: s()(g.Kk, i) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, r.jsx)(I, {
                          slateEditor: o,
                          markdownSyntax: "inlineCode",
                          children: (0, r.jsx)(u.GaO, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: s()(g.Kk, i),
                          }),
                      }),
                  (0, r.jsx)(I, {
                      slateEditor: o,
                      markdownSyntax: "spoiler",
                      children: (0, r.jsx)(u.bMW, { size: "md", color: "currentColor", className: s()(g.Kk, i) }),
                  }),
              ],
          });
}
let A = i.forwardRef(function (e, t) {
    let { editorRef: n, containerRef: a, options: s } = e,
        u = i.useRef(null),
        [_, f] = i.useState(!1),
        p = i.useRef(null),
        m = i.useContext(d.Ay),
        A = i.useCallback(() => {
            f(!1), clearTimeout(p.current);
        }, []),
        I = i.useCallback(
            (e) => {
                let t = m.renderWindow;
                (e.target instanceof t.Node && u.current?.contains(e.target)) || A();
            },
            [m, A],
        ),
        T = i.useCallback(
            (e) => {
                let t = m.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) A();
                    else {
                        let n = e.target instanceof t.Node && u.current?.contains(e.target);
                        clearTimeout(p.current),
                            (p.current = setTimeout(() => {
                                let t = (0, l.BF)(e)?.activeElement,
                                    r = a.current;
                                f(n || (null != t && null != r && r.contains(t)));
                            }, 100));
                    }
                else A();
            },
            [m, a, A],
        );
    i.useImperativeHandle(t, () => ({ hide: A }), [A]),
        i.useEffect(() => {
            let e = m.renderWindow;
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
                        clearTimeout(p.current);
                }
            );
        }, [m, A, I, T]);
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
                m = f ? d.x + d.width : Math.max(s.x, u.x),
                g = a.current?.getBoundingClientRect()?.y ?? 0;
            return { x: p + (m - p) / 2, y: Math.max(g, Math.min(u.y, s.y)) };
        }, [a, _, n]),
        [C, b] = i.useState(0),
        [N, R] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            if (null == S || null == v || null == u.current) return;
            let e = u.current.getBoundingClientRect();
            R(e.width / 2), b(e.height + 12);
        }, [S, v]),
        null == S || null == v)
    )
        return null;
    let O = n.current?.getSlateEditor();
    return null == O
        ? null
        : (0, r.jsx)(c.Ay, {
              children: (0, r.jsxs)("div", {
                  id: "slate-toolbar",
                  ref: u,
                  className: g.KE,
                  style: { top: v - C, left: S - N },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: [(0, r.jsx)(y, { slateEditor: O }), (0, r.jsx)(E, { editorRef: n, options: s })],
              }),
          });
});
function I(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        a = () => {
            null != t && _.o.withSingleEntry(t, () => (0, f.Px)(t, n));
        },
        s = !1;
    if (t?.selection != null) {
        let [e, r] = h.ZF.edges(t.selection);
        s = null != (0, f.Sx)(t, e, r).before[n];
    }
    return (0, r.jsx)("button", { "aria-pressed": s, className: g.x6, onClick: a, children: i });
}
function T(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        a = () => {
            null != n && _.o.withSingleEntry(n, () => (0, f.fO)(n, t));
        },
        s = null != n ? h.VW.getCurrentBlock(n) : null,
        o = null != s && h.AS.isType(s[0], t);
    return (0, r.jsx)("button", { "aria-pressed": o, className: g.x6, onClick: a, children: i });
}
function y(e) {
    let { slateEditor: t } = e,
        [n, r] = h.VW.getSelectedVoid(t) ?? [null, null],
        a = i.useCallback(
            (e) => {
                if (t?.selection == null || null == r) return;
                let n = t.selection;
                _.o.withSingleEntry(t, () => {
                    p.b.voidToText(t, e, r), p.b.select(t, n);
                });
            },
            [t, r],
        );
    return null == n ? null : (0, m.A)(n, { replace: a });
}
