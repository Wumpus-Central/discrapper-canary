n.d(t, { c: () => I, y: () => h });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(64015),
    o = n.n(l),
    d = n(612324),
    c = n(707554),
    u = n(475825),
    _ = n(689175),
    E = n(834730),
    A = n(592551);
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
        [f, p] = r.useState(!0),
        [T, g] = r.useState(null != a),
        m = r.useRef(null),
        S = (0, d.A)(m, a?.ref, E),
        N = r.useRef(null),
        C = r.useRef(void 0),
        O = null != t;
    r.useEffect(
        () => (
            (C.current = o()(() => {
                m?.current != null &&
                    (O && I(m.current?.getDistanceFromTop() > 12), p(m.current?.getDistanceFromBottom() > 12));
            }, 200)),
            () => {
                C.current?.cancel();
            }
        ),
        [O],
    );
    let R = r.useCallback(() => {
        (null != C.current && C.current(), null != l && l());
    }, [C, l]);
    r.useEffect(() => {
        C.current?.();
    });
    let L = null != a;
    return (
        r.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                    if (L) return void g(!0);
                    let e = m?.current?.getScrollerNode() ?? null;
                    if (null == e || N?.current == null) return;
                    let t = e.getBoundingClientRect();
                    g(N.current.getBoundingClientRect().height > t.height);
                }),
                t = m?.current?.getScrollerNode() ?? null;
            return (null != t && e.observe(t), N?.current != null && e.observe(N.current), () => e.disconnect());
        }, [L]),
        (0, i.jsxs)(c.F, {
            children: [
                (0, i.jsx)("div", { className: s()(A.bodySpacerTop, { [A.bodySpacerTopBorder]: T && null == t }) }),
                null != t && (0, i.jsx)("header", { className: s()(A.bodyControls, { [A.showFade]: h }), children: t }),
                null != a
                    ? (0, i.jsx)(u.Ei, {
                          ...a,
                          className: A.bodyList,
                          innerAriaOrientation: a.innerAriaOrientation ?? "vertical",
                          innerRole: a.innerRole ?? "listbox",
                          ref: S,
                          onScroll: (e) => {
                              (R(), a.onScroll?.(e));
                          },
                      })
                    : (0, i.jsx)(_.Gt, {
                          ref: S,
                          className: A.body,
                          onScroll: R,
                          disableFocusRingScope: !0,
                          children: (0, i.jsx)("main", {
                              ref: N,
                              className: s()(A.bodyInner, { [A.bodyInnerShouldScroll]: T }),
                              children: n,
                          }),
                      }),
                (0, i.jsx)("div", {
                    className: s()(A.bodySpacerBottom, { [A.bodyScrollingSpacerBottom]: T, [A.showFade]: f }),
                }),
            ],
        })
    );
}
