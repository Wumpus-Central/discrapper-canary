n.d(t, { A: () => N, P: () => I });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(235599),
    o = n(621466),
    u = n(902001),
    c = n(899536),
    d = n(929788),
    h = n(74833),
    m = n(216964),
    f = n(387758),
    p = n(39623),
    g = n(559106),
    x = n(750506),
    E = n(267102),
    S = n(186306),
    y = n(339871),
    C = n(820066),
    A = n(105292),
    b = n(9287);
function I(e) {
    let { slateEditor: t, options: n, iconClassName: i, dividerClassName: r } = e;
    return null == t
        ? null
        : (0, l.jsxs)("div", {
              className: b.Uo,
              children: [
                  (0, l.jsx)(v, {
                      slateEditor: t,
                      markdownSyntax: "bold",
                      children: (0, l.jsx)(u.$, { size: "md", color: "currentColor", className: s()(b.Kk, i) }),
                  }),
                  (0, l.jsx)(v, {
                      slateEditor: t,
                      markdownSyntax: "italics",
                      children: (0, l.jsx)(c.y, { size: "md", color: "currentColor", className: s()(b.Kk, i) }),
                  }),
                  (0, l.jsx)(v, {
                      slateEditor: t,
                      markdownSyntax: "underline",
                      children: (0, l.jsx)(d.q, { size: "md", color: "currentColor", className: s()(b.Kk, i) }),
                  }),
                  (0, l.jsx)(v, {
                      slateEditor: t,
                      markdownSyntax: "strikethrough",
                      children: (0, l.jsx)(h.t, { size: "md", color: "currentColor", className: s()(b.Kk, i) }),
                  }),
                  (0, l.jsx)("div", { className: s()(b.yF, r) }),
                  !n?.disableBlockQuotes &&
                      (0, l.jsx)(T, {
                          slateEditor: t,
                          blockType: "blockQuote",
                          children: (0, l.jsx)(m.c, { size: "md", color: "currentColor", className: s()(b.Kk, i) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, l.jsx)(v, {
                          slateEditor: t,
                          markdownSyntax: "inlineCode",
                          children: (0, l.jsx)(f.G, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: s()(b.Kk, i),
                          }),
                      }),
                  (0, l.jsx)(v, {
                      slateEditor: t,
                      markdownSyntax: "spoiler",
                      children: (0, l.jsx)(p.EyeIcon, { size: "md", color: "currentColor", className: s()(b.Kk, i) }),
                  }),
              ],
          });
}
function N(e) {
    let { getSlateEditor: t, containerRef: n, options: r, ref: s } = e,
        u = i.useRef(null),
        [c, d] = i.useState(!1),
        h = i.useRef(null),
        m = i.useContext(E.Ay),
        f = i.useCallback(() => {
            (d(!1), clearTimeout(h.current));
        }, []),
        p = i.useCallback(
            (e) => {
                let t = m.renderWindow;
                (e.target instanceof t.Node && u.current?.contains(e.target)) || f();
            },
            [m, f],
        ),
        g = i.useCallback(
            (e) => {
                let t = m.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) f();
                    else {
                        let l = e.target instanceof t.Node && u.current?.contains(e.target);
                        (clearTimeout(h.current),
                            (h.current = setTimeout(() => {
                                let t = (0, o.BF)(e)?.activeElement,
                                    i = n.current;
                                d(l || (null != t && null != i && i.contains(t)));
                            }, 100)));
                    }
                else f();
            },
            [m, n, f],
        );
    (i.useImperativeHandle(s, () => ({ hide: f }), [f]),
        i.useEffect(() => {
            let e = m.renderWindow;
            return (
                e.document.addEventListener("keydown", f),
                e.document.addEventListener("mousedown", p),
                e.document.addEventListener("mouseup", g),
                e.addEventListener("focus", f),
                e.addEventListener("blur", f),
                () => {
                    (e.document.removeEventListener("keydown", f),
                        e.document.removeEventListener("mousedown", p),
                        e.document.removeEventListener("mouseup", g),
                        e.removeEventListener("focus", f),
                        e.removeEventListener("blur", f),
                        clearTimeout(h.current));
                }
            );
        }, [m, f, p, g]));
    let { x: S, y } = i.useMemo(() => {
            let e = t();
            if (e?.selection == null || C.ZF.isCollapsed(e.selection) || !c) return { x: null, y: null };
            let l = a.rL.findDocumentOrShadowRoot(e),
                i = l.getSelection();
            if (null == i || null == i.focusNode || null == i.anchorNode || i.isCollapsed) return { x: null, y: null };
            let r = l.createRange();
            (r.setStart(i.focusNode, i.focusOffset), r.setEnd(i.focusNode, i.focusOffset));
            let s = r.getBoundingClientRect(),
                o = l.createRange();
            (o.setStart(i.anchorNode, i.anchorOffset), o.setEnd(i.anchorNode, i.anchorOffset));
            let u = o.getBoundingClientRect(),
                d = l.createRange();
            (d.setStart(i.anchorNode, i.anchorOffset), d.setEnd(i.focusNode, i.focusOffset));
            let h = d.getBoundingClientRect(),
                m = s.x === u.x,
                f = m ? h.x : Math.min(s.x, u.x);
            return {
                x: f + ((m ? h.x + h.width : Math.max(s.x, u.x)) - f) / 2,
                y: Math.max(n.current?.getBoundingClientRect()?.y ?? 0, Math.min(u.y, s.y)),
            };
        }, [n, c, t]),
        [A, N] = i.useState(0),
        [v, T] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            if (null == S || null == y || null == u.current) return;
            let e = u.current.getBoundingClientRect();
            (T(e.width / 2), N(e.height + 12));
        }, [S, y]),
        null == S || null == y)
    )
        return null;
    let j = t();
    return null == j
        ? null
        : (0, l.jsx)(x.Ay, {
              children: (0, l.jsx)("div", {
                  id: "slate-toolbar",
                  ref: u,
                  className: b.KE,
                  style: { top: y - A, left: S - v },
                  onMouseDown: (e) => {
                      (e.preventDefault(), e.stopPropagation());
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: (0, l.jsx)(I, { slateEditor: j, options: r }),
              }),
          });
}
function v(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        r = !1;
    if (t?.selection != null) {
        let [e, l] = C.ZF.edges(t.selection);
        r = null != (0, y.Sx)(t, e, l).before[n];
    }
    return (0, l.jsx)(g.vN, {
        children: (0, l.jsx)("button", {
            "aria-label": (function (e) {
                switch (e) {
                    case "bold":
                        return A.intl.string(A.t.XI2CUr);
                    case "italics":
                        return A.intl.string(A.t.a96YKu);
                    case "underline":
                        return A.intl.string(A.t.PdIYwI);
                    case "strikethrough":
                        return A.intl.string(A.t["63uDvE"]);
                    case "inlineCode":
                        return A.intl.string(A.t.iBerkZ);
                    case "spoiler":
                        return A.intl.string(A.t["F+x38C"]);
                }
            })(n),
            "aria-pressed": r,
            className: b.x6,
            onClick: function () {
                null != t && S.o.withSingleEntry(t, () => (0, y.Px)(t, n));
            },
            children: i,
        }),
    });
}
function T(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        r = null != n ? C.VW.getCurrentBlock(n) : null,
        s = null != r && C.AS.isType(r[0], t);
    return (0, l.jsx)(g.vN, {
        children: (0, l.jsx)("button", {
            "aria-label": (function (e) {
                if ("blockQuote" === e) return A.intl.string(A.t.svB7eY);
            })(t),
            "aria-pressed": s,
            className: b.x6,
            onClick: function () {
                null != n && S.o.withSingleEntry(n, () => (0, y.fO)(n, t));
            },
            children: i,
        }),
    });
}
