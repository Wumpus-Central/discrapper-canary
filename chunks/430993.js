"use strict";
n.d(t, { c: () => I, y: () => h });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(64015),
    o = n.n(l),
    d = n(612324),
    c = n(707554),
    u = n(475825),
    _ = n(689175),
    E = n(834730),
    A = n(967744);
function h(e) {
    return r.Children.toArray(e).filter(Boolean).length > 0;
}
function I(e) {
    let { controls: t, children: n, listProps: r, onScroll: a, scrollerRef: s } = e;
    if (!h(n) && null == t && null == r) return null;
    let l =
        "string" == typeof n ? (0, i.jsx)(E.E, { variant: "text-md/normal", color: "text-subtle", children: n }) : n;
    return (0, i.jsx)(f, { controls: t, children: l, listProps: r, onScroll: a, scrollerRef: s });
}
function f(e) {
    let { controls: t, children: n, listProps: a, onScroll: l, scrollerRef: E } = e,
        [h, I] = r.useState(!1),
        [f, p] = r.useState(null != a),
        T = r.useRef(null),
        m = (0, d.A)(T, a?.ref, E),
        g = r.useRef(null),
        S = r.useRef(void 0),
        N = null != t;
    r.useEffect(
        () => (
            (S.current = o()(() => {
                T?.current != null && N && I(T.current?.getDistanceFromTop() > 12);
            }, 200)),
            () => {
                S.current?.cancel();
            }
        ),
        [N],
    );
    let C = r.useCallback(() => {
            null != S.current && S.current(), null != l && l();
        }, [S, l]),
        O = null != a;
    return (
        r.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                    if (O) return void p(!0);
                    let e = T?.current?.getScrollerNode() ?? null;
                    if (null == e || g?.current == null) return;
                    let t = e.getBoundingClientRect();
                    p(g.current.getBoundingClientRect().height > t.height);
                }),
                t = T?.current?.getScrollerNode() ?? null;
            return null != t && e.observe(t), g?.current != null && e.observe(g.current), () => e.disconnect();
        }, [O]),
        (0, i.jsxs)(c.F, {
            children: [
                (0, i.jsx)("div", { className: s()(A.bodySpacerTop, { [A.bodySpacerTopBorder]: f && null == t }) }),
                null != t &&
                    (0, i.jsx)("header", {
                        className: s()(A.bodyControls, { [A.bodyControlsWithFade]: h }),
                        children: t,
                    }),
                null != a
                    ? (0, i.jsx)(u.Ei, {
                          ...a,
                          className: A.bodyList,
                          innerAriaOrientation: a.innerAriaOrientation ?? "vertical",
                          innerRole: a.innerRole ?? "listbox",
                          ref: m,
                          onScroll: (e) => {
                              C(), a.onScroll?.(e);
                          },
                      })
                    : (0, i.jsx)(_.Gt, {
                          ref: m,
                          className: A.body,
                          onScroll: C,
                          disableFocusRingScope: !0,
                          children: (0, i.jsx)("main", {
                              ref: g,
                              className: s()(A.bodyInner, { [A.bodyInnerShouldScroll]: f }),
                              children: n,
                          }),
                      }),
                (0, i.jsx)("div", { className: s()(A.bodySpacerBottom, { [A.bodySpacerBottomBorder]: f }) }),
            ],
        })
    );
}
