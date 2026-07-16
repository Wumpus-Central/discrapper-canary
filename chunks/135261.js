"use strict";
n.d(t, { A: () => R, P: () => C });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(253018),
    o = n(621466),
    d = n(902001),
    c = n(899536),
    u = n(929788),
    _ = n(74833),
    E = n(216964),
    A = n(387758),
    h = n(39623),
    I = n(187322),
    f = n(750506),
    p = n(267102),
    T = n(186306),
    m = n(339871),
    g = n(820066),
    S = n(375708),
    N = n(128934);
function C(e) {
    let { slateEditor: t, options: n, iconClassName: r, dividerClassName: a } = e;
    return null == t
        ? null
        : (0, i.jsxs)("div", {
              className: N.Uo,
              children: [
                  (0, i.jsx)(O, {
                      slateEditor: t,
                      markdownSyntax: "bold",
                      children: (0, i.jsx)(d.$, { size: "md", color: "currentColor", className: s()(N.Kk, r) }),
                  }),
                  (0, i.jsx)(O, {
                      slateEditor: t,
                      markdownSyntax: "italics",
                      children: (0, i.jsx)(c.y, { size: "md", color: "currentColor", className: s()(N.Kk, r) }),
                  }),
                  (0, i.jsx)(O, {
                      slateEditor: t,
                      markdownSyntax: "underline",
                      children: (0, i.jsx)(u.q, { size: "md", color: "currentColor", className: s()(N.Kk, r) }),
                  }),
                  (0, i.jsx)(O, {
                      slateEditor: t,
                      markdownSyntax: "strikethrough",
                      children: (0, i.jsx)(_.t, { size: "md", color: "currentColor", className: s()(N.Kk, r) }),
                  }),
                  (0, i.jsx)("div", { className: s()(N.yF, a) }),
                  !n?.disableBlockQuotes &&
                      (0, i.jsx)(L, {
                          slateEditor: t,
                          blockType: "blockQuote",
                          children: (0, i.jsx)(E.c, { size: "md", color: "currentColor", className: s()(N.Kk, r) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, i.jsx)(O, {
                          slateEditor: t,
                          markdownSyntax: "inlineCode",
                          children: (0, i.jsx)(A.G, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: s()(N.Kk, r),
                          }),
                      }),
                  (0, i.jsx)(O, {
                      slateEditor: t,
                      markdownSyntax: "spoiler",
                      children: (0, i.jsx)(h.b, { size: "md", color: "currentColor", className: s()(N.Kk, r) }),
                  }),
              ],
          });
}
let R = r.forwardRef(function (e, t) {
    let { getSlateEditor: n, containerRef: a, options: s } = e,
        d = r.useRef(null),
        [c, u] = r.useState(!1),
        _ = r.useRef(null),
        E = r.useContext(p.Ay),
        A = r.useCallback(() => {
            u(!1), clearTimeout(_.current);
        }, []),
        h = r.useCallback(
            (e) => {
                let t = E.renderWindow;
                (e.target instanceof t.Node && d.current?.contains(e.target)) || A();
            },
            [E, A],
        ),
        I = r.useCallback(
            (e) => {
                let t = E.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) A();
                    else {
                        let n = e.target instanceof t.Node && d.current?.contains(e.target);
                        clearTimeout(_.current),
                            (_.current = setTimeout(() => {
                                let t = (0, o.BF)(e)?.activeElement,
                                    i = a.current;
                                u(n || (null != t && null != i && i.contains(t)));
                            }, 100));
                    }
                else A();
            },
            [E, a, A],
        );
    r.useImperativeHandle(t, () => ({ hide: A }), [A]),
        r.useEffect(() => {
            let e = E.renderWindow;
            return (
                e.document.addEventListener("keydown", A),
                e.document.addEventListener("mousedown", h),
                e.document.addEventListener("mouseup", I),
                e.addEventListener("focus", A),
                e.addEventListener("blur", A),
                () => {
                    e.document.removeEventListener("keydown", A),
                        e.document.removeEventListener("mousedown", h),
                        e.document.removeEventListener("mouseup", I),
                        e.removeEventListener("focus", A),
                        e.removeEventListener("blur", A),
                        clearTimeout(_.current);
                }
            );
        }, [E, A, h, I]);
    let { x: T, y: m } = r.useMemo(() => {
            let e = n();
            if (e?.selection == null || g.ZF.isCollapsed(e.selection) || !c) return { x: null, y: null };
            let t = l.rL.findDocumentOrShadowRoot(e),
                i = t.getSelection();
            if (null == i || null == i.focusNode || null == i.anchorNode || i.isCollapsed) return { x: null, y: null };
            let r = t.createRange();
            r.setStart(i.focusNode, i.focusOffset), r.setEnd(i.focusNode, i.focusOffset);
            let s = r.getBoundingClientRect(),
                o = t.createRange();
            o.setStart(i.anchorNode, i.anchorOffset), o.setEnd(i.anchorNode, i.anchorOffset);
            let d = o.getBoundingClientRect(),
                u = t.createRange();
            u.setStart(i.anchorNode, i.anchorOffset), u.setEnd(i.focusNode, i.focusOffset);
            let _ = u.getBoundingClientRect(),
                E = s.x === d.x,
                A = E ? _.x : Math.min(s.x, d.x);
            return {
                x: A + ((E ? _.x + _.width : Math.max(s.x, d.x)) - A) / 2,
                y: Math.max(a.current?.getBoundingClientRect()?.y ?? 0, Math.min(d.y, s.y)),
            };
        }, [a, c, n]),
        [S, R] = r.useState(0),
        [O, L] = r.useState(0);
    if (
        (r.useLayoutEffect(() => {
            if (null == T || null == m || null == d.current) return;
            let e = d.current.getBoundingClientRect();
            L(e.width / 2), R(e.height + 12);
        }, [T, m]),
        null == T || null == m)
    )
        return null;
    let y = n();
    return null == y
        ? null
        : (0, i.jsx)(f.Ay, {
              children: (0, i.jsx)("div", {
                  id: "slate-toolbar",
                  ref: d,
                  className: N.KE,
                  style: { top: m - S, left: T - O },
                  onMouseDown: (e) => {
                      e.preventDefault(), e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: (0, i.jsx)(C, { slateEditor: y, options: s }),
              }),
          });
});
function O(e) {
    let { slateEditor: t, markdownSyntax: n, children: r } = e,
        a = !1;
    if (t?.selection != null) {
        let [e, i] = g.ZF.edges(t.selection);
        a = null != (0, m.Sx)(t, e, i).before[n];
    }
    return (0, i.jsx)(I.vN, {
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
            "aria-pressed": a,
            className: N.x6,
            onClick: function () {
                null != t && T.o.withSingleEntry(t, () => (0, m.Px)(t, n));
            },
            children: r,
        }),
    });
}
function L(e) {
    let { blockType: t, slateEditor: n, children: r } = e,
        a = null != n ? g.VW.getCurrentBlock(n) : null,
        s = null != a && g.AS.isType(a[0], t);
    return (0, i.jsx)(I.vN, {
        children: (0, i.jsx)("button", {
            "aria-label": (function (e) {
                if ("blockQuote" === e) return S.intl.string(S.t.svB7eY);
            })(t),
            "aria-pressed": s,
            className: N.x6,
            onClick: function () {
                null != n && T.o.withSingleEntry(n, () => (0, m.fO)(n, t));
            },
            children: r,
        }),
    });
}
