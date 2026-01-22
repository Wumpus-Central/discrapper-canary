n.d(t, {
    A: () => b,
    P: () => E,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(253018),
    l = n(621466),
    c = n(397927),
    u = n(750506),
    d = n(267102),
    f = n(186306),
    p = n(339871),
    _ = n(35277),
    h = n(711371),
    m = n(408269),
    g = n(574377);
function E(e) {
    var t;
    let { editorRef: n, options: i, iconClassName: a, dividerClassName: o } = e,
        l = null == (t = n.current) ? void 0 : t.getSlateEditor();
    return null == l
        ? null
        : (0, r.jsxs)("div", {
              className: g.Uo,
              children: [
                  (0, r.jsx)(y, {
                      slateEditor: l,
                      markdownSyntax: "bold",
                      children: (0, r.jsx)(c.$oz, {
                          size: "md",
                          color: "currentColor",
                          className: s()(g.Kk, a),
                      }),
                  }),
                  (0, r.jsx)(y, {
                      slateEditor: l,
                      markdownSyntax: "italics",
                      children: (0, r.jsx)(c.yOR, {
                          size: "md",
                          color: "currentColor",
                          className: s()(g.Kk, a),
                      }),
                  }),
                  (0, r.jsx)(y, {
                      slateEditor: l,
                      markdownSyntax: "strikethrough",
                      children: (0, r.jsx)(c.t64, {
                          size: "md",
                          color: "currentColor",
                          className: s()(g.Kk, a),
                      }),
                  }),
                  (0, r.jsx)("div", { className: s()(g.yF, o) }),
                  !(null == i ? void 0 : i.disableBlockQuotes) &&
                      (0, r.jsx)(O, {
                          slateEditor: l,
                          blockType: "blockQuote",
                          children: (0, r.jsx)(c.cyi, {
                              size: "md",
                              color: "currentColor",
                              className: s()(g.Kk, a),
                          }),
                      }),
                  !(null == i ? void 0 : i.disableInlineCode) &&
                      (0, r.jsx)(y, {
                          slateEditor: l,
                          markdownSyntax: "inlineCode",
                          children: (0, r.jsx)(c.GaO, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: s()(g.Kk, a),
                          }),
                      }),
                  (0, r.jsx)(y, {
                      slateEditor: l,
                      markdownSyntax: "spoiler",
                      children: (0, r.jsx)(c.bMW, {
                          size: "md",
                          color: "currentColor",
                          className: s()(g.Kk, a),
                      }),
                  }),
              ],
          });
}
let b = i.forwardRef(function (e, t) {
    var n;
    let { editorRef: a, containerRef: s, options: c } = e,
        f = i.useRef(null),
        [p, _] = i.useState(!1),
        m = i.useRef(null),
        b = i.useContext(d.Ay),
        y = i.useCallback(() => {
            _(!1), clearTimeout(m.current);
        }, []),
        O = i.useCallback(
            (e) => {
                var t;
                let n = b.renderWindow;
                (e.target instanceof n.Node && (null == (t = f.current) ? void 0 : t.contains(e.target))) || y();
            },
            [b, y],
        ),
        v = i.useCallback(
            (e) => {
                let t = b.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) y();
                    else {
                        var n;
                        let r = e.target instanceof t.Node && (null == (n = f.current) ? void 0 : n.contains(e.target));
                        clearTimeout(m.current),
                            (m.current = setTimeout(() => {
                                var t;
                                let n = null == (t = (0, l.BF)(e)) ? void 0 : t.activeElement,
                                    i = s.current;
                                _(r || (null != n && null != i && i.contains(n)));
                            }, 100));
                    }
                else y();
            },
            [b, s, y],
        );
    i.useImperativeHandle(t, () => ({ hide: y }), [y]),
        i.useEffect(() => {
            let e = b.renderWindow;
            return (
                e.document.addEventListener("keydown", y),
                e.document.addEventListener("mousedown", O),
                e.document.addEventListener("mouseup", v),
                e.addEventListener("focus", y),
                e.addEventListener("blur", y),
                () => {
                    e.document.removeEventListener("keydown", y),
                        e.document.removeEventListener("mousedown", O),
                        e.document.removeEventListener("mouseup", v),
                        e.removeEventListener("focus", y),
                        e.removeEventListener("blur", y),
                        clearTimeout(m.current);
                }
            );
        }, [b, y, O, v]);
    let { x: S, y: I } = i.useMemo(() => {
            var e, t, n, r;
            let i = null == (t = a.current) ? void 0 : t.getSlateEditor();
            if ((null == i ? void 0 : i.selection) == null || h.ZF.isCollapsed(i.selection) || !p)
                return {
                    x: null,
                    y: null,
                };
            let l = o.rL.findDocumentOrShadowRoot(i),
                c = l.getSelection();
            if (null == c || null == c.focusNode || null == c.anchorNode || c.isCollapsed)
                return {
                    x: null,
                    y: null,
                };
            let u = l.createRange();
            u.setStart(c.focusNode, c.focusOffset), u.setEnd(c.focusNode, c.focusOffset);
            let d = u.getBoundingClientRect(),
                f = l.createRange();
            f.setStart(c.anchorNode, c.anchorOffset), f.setEnd(c.anchorNode, c.anchorOffset);
            let _ = f.getBoundingClientRect(),
                m = l.createRange();
            m.setStart(c.anchorNode, c.anchorOffset), m.setEnd(c.focusNode, c.focusOffset);
            let g = m.getBoundingClientRect(),
                E = d.x === _.x,
                b = E ? g.x : Math.min(d.x, _.x),
                y = E ? g.x + g.width : Math.max(d.x, _.x),
                O =
                    null != (e = null == (r = s.current) || null == (n = r.getBoundingClientRect()) ? void 0 : n.y)
                        ? e
                        : 0;
            return {
                x: b + (y - b) / 2,
                y: Math.max(O, Math.min(_.y, d.y)),
            };
        }, [s, p, a]),
        [T, C] = i.useState(0),
        [N, R] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            if (null == S || null == I || null == f.current) return;
            let e = f.current.getBoundingClientRect();
            R(e.width / 2), C(e.height + 12);
        }, [S, I]),
        null == S || null == I)
    )
        return null;
    let w = null == (n = a.current) ? void 0 : n.getSlateEditor();
    return null == w
        ? null
        : (0, r.jsx)(u.Ay, {
              children: (0, r.jsxs)("div", {
                  id: "slate-toolbar",
                  ref: f,
                  className: g.KE,
                  style: {
                      top: I - T,
                      left: S - N,
                  },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: [
                      (0, r.jsx)(A, { slateEditor: w }),
                      (0, r.jsx)(E, {
                          editorRef: a,
                          options: c,
                      }),
                  ],
              }),
          });
});
function y(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        a = () => {
            null != t && f.o.withSingleEntry(t, () => (0, p.Px)(t, n));
        },
        s = !1;
    if ((null == t ? void 0 : t.selection) != null) {
        let [e, r] = h.ZF.edges(t.selection);
        s = null != (0, p.Sx)(t, e, r).before[n];
    }
    return (0, r.jsx)("button", {
        "aria-pressed": s,
        className: g.x6,
        onClick: a,
        children: i,
    });
}
function O(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        a = () => {
            null != n && f.o.withSingleEntry(n, () => (0, p.fO)(n, t));
        },
        s = null != n ? h.VW.getCurrentBlock(n) : null,
        o = null != s && h.AS.isType(s[0], t);
    return (0, r.jsx)("button", {
        "aria-pressed": o,
        className: g.x6,
        onClick: a,
        children: i,
    });
}
function A(e) {
    var t;
    let { slateEditor: n } = e,
        [r, a] = null != (t = h.VW.getSelectedVoid(n)) ? t : [null, null],
        s = i.useCallback(
            (e) => {
                if ((null == n ? void 0 : n.selection) == null || null == a) return;
                let t = n.selection;
                f.o.withSingleEntry(n, () => {
                    _.b.voidToText(n, e, a), _.b.select(n, t);
                });
            },
            [n, a],
        );
    return null == r ? null : (0, m.A)(r, { replace: s });
}
