"use strict";
n.d(t, { c: () => E, y: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(879378),
    l = n.n(o),
    u = n(612324),
    c = n(707554),
    d = n(475825),
    _ = n(599319),
    f = n(834730),
    p = n(110992);
function h(e) {
    return i.Children.toArray(e).filter(Boolean).length > 0;
}
function m(e) {
    return "string" == typeof e ? (0, r.jsx)(f.E, { variant: "text-md/normal", color: "text-subtle", children: e }) : e;
}
function E(e) {
    let { controls: t, children: n, listProps: i, onScroll: s, scrollerRef: a } = e;
    if (!h(n) && null == t && null == i) return null;
    let o = m(n);
    return (0, r.jsx)(g, { controls: t, children: o, listProps: i, onScroll: s, scrollerRef: a });
}
function g(e) {
    let { controls: t, children: n, listProps: s, onScroll: o, scrollerRef: f } = e,
        [h, m] = i.useState(!1),
        [E, g] = i.useState(null != s),
        A = i.useRef(null),
        I = (0, u.A)(A, s?.ref, f),
        T = i.useRef(null),
        S = i.useRef(void 0);
    i.useEffect(
        () => (
            (S.current = l()(() => {
                A?.current != null && null != t && m(A.current?.getDistanceFromTop() > 12);
            }, 200)),
            () => {
                S.current?.cancel();
            }
        ),
        [t],
    );
    let y = i.useCallback(() => {
            null != S.current && S.current(), null != o && o();
        }, [S, o]),
        v = null != s;
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                    if (v) return void g(!0);
                    let e = A?.current?.getScrollerNode() ?? null;
                    if (null == e || T?.current == null) return;
                    let t = e.getBoundingClientRect();
                    g(T.current.getBoundingClientRect().height > t.height);
                }),
                t = A?.current?.getScrollerNode() ?? null;
            return null != t && e.observe(t), T?.current != null && e.observe(T.current), () => e.disconnect();
        }, [v]),
        (0, r.jsxs)(c.F, {
            children: [
                (0, r.jsx)("div", { className: a()(p.bodySpacerTop, { [p.bodySpacerTopBorder]: E && null == t }) }),
                null != t &&
                    (0, r.jsx)("header", {
                        className: a()(p.bodyControls, { [p.bodyControlsWithFade]: h }),
                        children: t,
                    }),
                null != s
                    ? (0, r.jsx)(d.Ei, {
                          ...s,
                          className: p.bodyList,
                          innerAriaOrientation: s.innerAriaOrientation ?? "vertical",
                          innerRole: s.innerRole ?? "listbox",
                          ref: I,
                          onScroll: (e) => {
                              y(), s.onScroll?.(e);
                          },
                      })
                    : (0, r.jsx)(_.Gt, {
                          ref: I,
                          className: p.body,
                          onScroll: y,
                          disableFocusRingScope: !0,
                          children: (0, r.jsx)("main", {
                              ref: T,
                              className: a()(p.bodyInner, { [p.bodyInnerShouldScroll]: E }),
                              children: n,
                          }),
                      }),
                (0, r.jsx)("div", { className: a()(p.bodySpacerBottom, { [p.bodySpacerBottomBorder]: E }) }),
            ],
        })
    );
}
