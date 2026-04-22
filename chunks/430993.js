"use strict";
n.d(t, { c: () => p, y: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(879378),
    l = n.n(o),
    u = n(612324),
    d = n(707554),
    c = n(475825),
    _ = n(599319),
    f = n(834730),
    E = n(967744);
function h(e) {
    return i.Children.toArray(e).filter(Boolean).length > 0;
}
function p(e) {
    let { controls: t, children: n, listProps: i, onScroll: s, scrollerRef: a } = e;
    if (!h(n) && null == t && null == i) return null;
    let o =
        "string" == typeof n ? (0, r.jsx)(f.E, { variant: "text-md/normal", color: "text-subtle", children: n }) : n;
    return (0, r.jsx)(m, { controls: t, children: o, listProps: i, onScroll: s, scrollerRef: a });
}
function m(e) {
    let { controls: t, children: n, listProps: s, onScroll: o, scrollerRef: f } = e,
        [h, p] = i.useState(!1),
        [m, g] = i.useState(null != s),
        A = i.useRef(null),
        I = (0, u.A)(A, s?.ref, f),
        T = i.useRef(null),
        S = i.useRef(void 0);
    i.useEffect(
        () => (
            (S.current = l()(() => {
                A?.current != null && null != t && p(A.current?.getDistanceFromTop() > 12);
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
        N = null != s;
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                    if (N) return void g(!0);
                    let e = A?.current?.getScrollerNode() ?? null;
                    if (null == e || T?.current == null) return;
                    let t = e.getBoundingClientRect();
                    g(T.current.getBoundingClientRect().height > t.height);
                }),
                t = A?.current?.getScrollerNode() ?? null;
            return null != t && e.observe(t), T?.current != null && e.observe(T.current), () => e.disconnect();
        }, [N]),
        (0, r.jsxs)(d.F, {
            children: [
                (0, r.jsx)("div", { className: a()(E.bodySpacerTop, { [E.bodySpacerTopBorder]: m && null == t }) }),
                null != t &&
                    (0, r.jsx)("header", {
                        className: a()(E.bodyControls, { [E.bodyControlsWithFade]: h }),
                        children: t,
                    }),
                null != s
                    ? (0, r.jsx)(c.Ei, {
                          ...s,
                          className: E.bodyList,
                          innerAriaOrientation: s.innerAriaOrientation ?? "vertical",
                          innerRole: s.innerRole ?? "listbox",
                          ref: I,
                          onScroll: (e) => {
                              y(), s.onScroll?.(e);
                          },
                      })
                    : (0, r.jsx)(_.Gt, {
                          ref: I,
                          className: E.body,
                          onScroll: y,
                          disableFocusRingScope: !0,
                          children: (0, r.jsx)("main", {
                              ref: T,
                              className: a()(E.bodyInner, { [E.bodyInnerShouldScroll]: m }),
                              children: n,
                          }),
                      }),
                (0, r.jsx)("div", { className: a()(E.bodySpacerBottom, { [E.bodySpacerBottomBorder]: m }) }),
            ],
        })
    );
}
