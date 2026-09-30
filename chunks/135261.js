n.d(t, { A: () => N, P: () => v });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(235599),
    o = n(621466),
    u = n(902001),
    c = n(899536),
    d = n(929788),
    m = n(74833),
    h = n(216964),
    p = n(387758),
    f = n(39623),
    g = n(559106),
    x = n(750506),
    A = n(267102),
    C = n(186306),
    E = n(339871),
    I = n(820066),
    y = n(375708),
    S = n(9287);
function v(e) {
    let { slateEditor: t, options: n, iconClassName: i, dividerClassName: s } = e;
    return null == t
        ? null
        : (0, l.jsxs)("div", {
              className: S.Uo,
              children: [
                  (0, l.jsx)(_, {
                      slateEditor: t,
                      markdownSyntax: "bold",
                      children: (0, l.jsx)(u.$, { size: "md", color: "currentColor", className: r()(S.Kk, i) }),
                  }),
                  (0, l.jsx)(_, {
                      slateEditor: t,
                      markdownSyntax: "italics",
                      children: (0, l.jsx)(c.y, { size: "md", color: "currentColor", className: r()(S.Kk, i) }),
                  }),
                  (0, l.jsx)(_, {
                      slateEditor: t,
                      markdownSyntax: "underline",
                      children: (0, l.jsx)(d.q, { size: "md", color: "currentColor", className: r()(S.Kk, i) }),
                  }),
                  (0, l.jsx)(_, {
                      slateEditor: t,
                      markdownSyntax: "strikethrough",
                      children: (0, l.jsx)(m.t, { size: "md", color: "currentColor", className: r()(S.Kk, i) }),
                  }),
                  (0, l.jsx)("div", { className: r()(S.yF, s) }),
                  !n?.disableBlockQuotes &&
                      (0, l.jsx)(j, {
                          slateEditor: t,
                          blockType: "blockQuote",
                          children: (0, l.jsx)(h.c, { size: "md", color: "currentColor", className: r()(S.Kk, i) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, l.jsx)(_, {
                          slateEditor: t,
                          markdownSyntax: "inlineCode",
                          children: (0, l.jsx)(p.G, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: r()(S.Kk, i),
                          }),
                      }),
                  (0, l.jsx)(_, {
                      slateEditor: t,
                      markdownSyntax: "spoiler",
                      children: (0, l.jsx)(f.EyeIcon, { size: "md", color: "currentColor", className: r()(S.Kk, i) }),
                  }),
              ],
          });
}
let N = i.forwardRef(function (e, t) {
    let { getSlateEditor: n, containerRef: s, options: r } = e,
        u = i.useRef(null),
        [c, d] = i.useState(!1),
        m = i.useRef(null),
        h = i.useContext(A.Ay),
        p = i.useCallback(() => {
            (d(!1), clearTimeout(m.current));
        }, []),
        f = i.useCallback(
            (e) => {
                let t = h.renderWindow;
                (e.target instanceof t.Node && u.current?.contains(e.target)) || p();
            },
            [h, p],
        ),
        g = i.useCallback(
            (e) => {
                let t = h.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) p();
                    else {
                        let n = e.target instanceof t.Node && u.current?.contains(e.target);
                        (clearTimeout(m.current),
                            (m.current = setTimeout(() => {
                                let t = (0, o.BF)(e)?.activeElement,
                                    l = s.current;
                                d(n || (null != t && null != l && l.contains(t)));
                            }, 100)));
                    }
                else p();
            },
            [h, s, p],
        );
    (i.useImperativeHandle(t, () => ({ hide: p }), [p]),
        i.useEffect(() => {
            let e = h.renderWindow;
            return (
                e.document.addEventListener("keydown", p),
                e.document.addEventListener("mousedown", f),
                e.document.addEventListener("mouseup", g),
                e.addEventListener("focus", p),
                e.addEventListener("blur", p),
                () => {
                    (e.document.removeEventListener("keydown", p),
                        e.document.removeEventListener("mousedown", f),
                        e.document.removeEventListener("mouseup", g),
                        e.removeEventListener("focus", p),
                        e.removeEventListener("blur", p),
                        clearTimeout(m.current));
                }
            );
        }, [h, p, f, g]));
    let { x: C, y: E } = i.useMemo(() => {
            let e = n();
            if (e?.selection == null || I.ZF.isCollapsed(e.selection) || !c) return { x: null, y: null };
            let t = a.rL.findDocumentOrShadowRoot(e),
                l = t.getSelection();
            if (null == l || null == l.focusNode || null == l.anchorNode || l.isCollapsed) return { x: null, y: null };
            let i = t.createRange();
            (i.setStart(l.focusNode, l.focusOffset), i.setEnd(l.focusNode, l.focusOffset));
            let r = i.getBoundingClientRect(),
                o = t.createRange();
            (o.setStart(l.anchorNode, l.anchorOffset), o.setEnd(l.anchorNode, l.anchorOffset));
            let u = o.getBoundingClientRect(),
                d = t.createRange();
            (d.setStart(l.anchorNode, l.anchorOffset), d.setEnd(l.focusNode, l.focusOffset));
            let m = d.getBoundingClientRect(),
                h = r.x === u.x,
                p = h ? m.x : Math.min(r.x, u.x);
            return {
                x: p + ((h ? m.x + m.width : Math.max(r.x, u.x)) - p) / 2,
                y: Math.max(s.current?.getBoundingClientRect()?.y ?? 0, Math.min(u.y, r.y)),
            };
        }, [s, c, n]),
        [y, N] = i.useState(0),
        [_, j] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            if (null == C || null == E || null == u.current) return;
            let e = u.current.getBoundingClientRect();
            (j(e.width / 2), N(e.height + 12));
        }, [C, E]),
        null == C || null == E)
    )
        return null;
    let b = n();
    return null == b
        ? null
        : (0, l.jsx)(x.Ay, {
              children: (0, l.jsx)("div", {
                  id: "slate-toolbar",
                  ref: u,
                  className: S.KE,
                  style: { top: E - y, left: C - _ },
                  onMouseDown: (e) => {
                      (e.preventDefault(), e.stopPropagation());
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: (0, l.jsx)(v, { slateEditor: b, options: r }),
              }),
          });
});
function _(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        s = !1;
    if (t?.selection != null) {
        let [e, l] = I.ZF.edges(t.selection);
        s = null != (0, E.Sx)(t, e, l).before[n];
    }
    return (0, l.jsx)(g.vN, {
        children: (0, l.jsx)("button", {
            "aria-label": (function (e) {
                switch (e) {
                    case "bold":
                        return y.intl.string(y.t.XI2CUr);
                    case "italics":
                        return y.intl.string(y.t.a96YKu);
                    case "underline":
                        return y.intl.string(y.t.PdIYwI);
                    case "strikethrough":
                        return y.intl.string(y.t["63uDvE"]);
                    case "inlineCode":
                        return y.intl.string(y.t.iBerkZ);
                    case "spoiler":
                        return y.intl.string(y.t["F+x38C"]);
                }
            })(n),
            "aria-pressed": s,
            className: S.x6,
            onClick: function () {
                null != t && C.o.withSingleEntry(t, () => (0, E.Px)(t, n));
            },
            children: i,
        }),
    });
}
function j(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        s = null != n ? I.VW.getCurrentBlock(n) : null,
        r = null != s && I.AS.isType(s[0], t);
    return (0, l.jsx)(g.vN, {
        children: (0, l.jsx)("button", {
            "aria-label": (function (e) {
                if ("blockQuote" === e) return y.intl.string(y.t.svB7eY);
            })(t),
            "aria-pressed": r,
            className: S.x6,
            onClick: function () {
                null != n && C.o.withSingleEntry(n, () => (0, E.fO)(n, t));
            },
            children: i,
        }),
    });
}
