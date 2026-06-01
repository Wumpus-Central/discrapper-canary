"use strict";
n.d(t, { A: () => v, P: () => N });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(670482),
    l = n(621466),
    u = n(902001),
    c = n(899536),
    d = n(929788),
    _ = n(74833),
    h = n(216964),
    f = n(387758),
    p = n(39623),
    E = n(187322),
    m = n(750506),
    g = n(267102),
    A = n(186306),
    I = n(339871),
    T = n(820066),
    S = n(375708),
    y = n(128934);
function N(e) {
    let { slateEditor: t, options: n, iconClassName: r, dividerClassName: s } = e;
    return null == t
        ? null
        : (0, i.jsxs)("div", {
              className: y.Uo,
              children: [
                  (0, i.jsx)(C, {
                      slateEditor: t,
                      markdownSyntax: "bold",
                      children: (0, i.jsx)(u.$, { size: "md", color: "currentColor", className: a()(y.Kk, r) }),
                  }),
                  (0, i.jsx)(C, {
                      slateEditor: t,
                      markdownSyntax: "italics",
                      children: (0, i.jsx)(c.y, { size: "md", color: "currentColor", className: a()(y.Kk, r) }),
                  }),
                  (0, i.jsx)(C, {
                      slateEditor: t,
                      markdownSyntax: "underline",
                      children: (0, i.jsx)(d.q, { size: "md", color: "currentColor", className: a()(y.Kk, r) }),
                  }),
                  (0, i.jsx)(C, {
                      slateEditor: t,
                      markdownSyntax: "strikethrough",
                      children: (0, i.jsx)(_.t, { size: "md", color: "currentColor", className: a()(y.Kk, r) }),
                  }),
                  (0, i.jsx)("div", { className: a()(y.yF, s) }),
                  !n?.disableBlockQuotes &&
                      (0, i.jsx)(R, {
                          slateEditor: t,
                          blockType: "blockQuote",
                          children: (0, i.jsx)(h.c, { size: "md", color: "currentColor", className: a()(y.Kk, r) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, i.jsx)(C, {
                          slateEditor: t,
                          markdownSyntax: "inlineCode",
                          children: (0, i.jsx)(f.G, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: a()(y.Kk, r),
                          }),
                      }),
                  (0, i.jsx)(C, {
                      slateEditor: t,
                      markdownSyntax: "spoiler",
                      children: (0, i.jsx)(p.b, { size: "md", color: "currentColor", className: a()(y.Kk, r) }),
                  }),
              ],
          });
}
let v = r.forwardRef(function (e, t) {
    let { getSlateEditor: n, containerRef: s, options: a } = e,
        u = r.useRef(null),
        [c, d] = r.useState(!1),
        _ = r.useRef(null),
        h = r.useContext(g.Ay),
        f = r.useCallback(() => {
            d(!1), clearTimeout(_.current);
        }, []),
        p = r.useCallback(
            (e) => {
                let t = h.renderWindow;
                (e.target instanceof t.Node && u.current?.contains(e.target)) || f();
            },
            [h, f],
        ),
        E = r.useCallback(
            (e) => {
                let t = h.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) f();
                    else {
                        let n = e.target instanceof t.Node && u.current?.contains(e.target);
                        clearTimeout(_.current),
                            (_.current = setTimeout(() => {
                                let t = (0, l.BF)(e)?.activeElement,
                                    i = s.current;
                                d(n || (null != t && null != i && i.contains(t)));
                            }, 100));
                    }
                else f();
            },
            [h, s, f],
        );
    r.useImperativeHandle(t, () => ({ hide: f }), [f]),
        r.useEffect(() => {
            let e = h.renderWindow;
            return (
                e.document.addEventListener("keydown", f),
                e.document.addEventListener("mousedown", p),
                e.document.addEventListener("mouseup", E),
                e.addEventListener("focus", f),
                e.addEventListener("blur", f),
                () => {
                    e.document.removeEventListener("keydown", f),
                        e.document.removeEventListener("mousedown", p),
                        e.document.removeEventListener("mouseup", E),
                        e.removeEventListener("focus", f),
                        e.removeEventListener("blur", f),
                        clearTimeout(_.current);
                }
            );
        }, [h, f, p, E]);
    let { x: A, y: I } = r.useMemo(() => {
            let e = n();
            if (e?.selection == null || T.ZF.isCollapsed(e.selection) || !c) return { x: null, y: null };
            let t = o.rL.findDocumentOrShadowRoot(e),
                i = t.getSelection();
            if (null == i || null == i.focusNode || null == i.anchorNode || i.isCollapsed) return { x: null, y: null };
            let r = t.createRange();
            r.setStart(i.focusNode, i.focusOffset), r.setEnd(i.focusNode, i.focusOffset);
            let a = r.getBoundingClientRect(),
                l = t.createRange();
            l.setStart(i.anchorNode, i.anchorOffset), l.setEnd(i.anchorNode, i.anchorOffset);
            let u = l.getBoundingClientRect(),
                d = t.createRange();
            d.setStart(i.anchorNode, i.anchorOffset), d.setEnd(i.focusNode, i.focusOffset);
            let _ = d.getBoundingClientRect(),
                h = a.x === u.x,
                f = h ? _.x : Math.min(a.x, u.x);
            return {
                x: f + ((h ? _.x + _.width : Math.max(a.x, u.x)) - f) / 2,
                y: Math.max(s.current?.getBoundingClientRect()?.y ?? 0, Math.min(u.y, a.y)),
            };
        }, [s, c, n]),
        [S, v] = r.useState(0),
        [C, R] = r.useState(0);
    if (
        (r.useLayoutEffect(() => {
            if (null == A || null == I || null == u.current) return;
            let e = u.current.getBoundingClientRect();
            R(e.width / 2), v(e.height + 12);
        }, [A, I]),
        null == A || null == I)
    )
        return null;
    let O = n();
    return null == O
        ? null
        : (0, i.jsx)(m.Ay, {
              children: (0, i.jsx)("div", {
                  id: "slate-toolbar",
                  ref: u,
                  className: y.KE,
                  style: { top: I - S, left: A - C },
                  onMouseDown: (e) => {
                      e.preventDefault(), e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: (0, i.jsx)(N, { slateEditor: O, options: a }),
              }),
          });
});
function C(e) {
    let { slateEditor: t, markdownSyntax: n, children: r } = e,
        s = !1;
    if (t?.selection != null) {
        let [e, i] = T.ZF.edges(t.selection);
        s = null != (0, I.Sx)(t, e, i).before[n];
    }
    return (0, i.jsx)(E.vN, {
        children: (0, i.jsx)("button", {
            "aria-label": (function (e) {
                switch (e) {
                    case "bold":
                        return S.intl.string(S.t.XI2CUr);
                    case "italics":
                        return S.intl.string(S.t.a96YKu);
                    case "underline":
                        return S.intl.string(S.t.PdIYwI);
                    case "strikethrough":
                        return S.intl.string(S.t["63uDvE"]);
                    case "inlineCode":
                        return S.intl.string(S.t.iBerkZ);
                    case "spoiler":
                        return S.intl.string(S.t["F+x38C"]);
                }
            })(n),
            "aria-pressed": s,
            className: y.x6,
            onClick: () => {
                null != t && A.o.withSingleEntry(t, () => (0, I.Px)(t, n));
            },
            children: r,
        }),
    });
}
function R(e) {
    let { blockType: t, slateEditor: n, children: r } = e,
        s = null != n ? T.VW.getCurrentBlock(n) : null,
        a = null != s && T.AS.isType(s[0], t);
    return (0, i.jsx)(E.vN, {
        children: (0, i.jsx)("button", {
            "aria-label": (function (e) {
                if ("blockQuote" === e) return S.intl.string(S.t.svB7eY);
            })(t),
            "aria-pressed": a,
            className: y.x6,
            onClick: () => {
                null != n && A.o.withSingleEntry(n, () => (0, I.fO)(n, t));
            },
            children: r,
        }),
    });
}
