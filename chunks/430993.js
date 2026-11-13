var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(64015),
    o = n.n(l),
    d = n(612324),
    c = n(707554),
    u = n(475825),
    _ = n(516521),
    E = n(834730),
    A = n(592551);
function f(e) {
    return r.Children.toArray(e).filter(Boolean).length > 0;
}
function h(e) {
    let { controls: t, children: n, listProps: a, onScroll: l, scrollerRef: E } = e,
        [f, h] = r.useState(!1),
        [I, p] = r.useState(!0),
        [m, T] = r.useState(null != a),
        g = r.useRef(null),
        S = (0, d.A)(g, a?.ref, E),
        N = r.useRef(null),
        C = r.useRef(void 0),
        O = null != t;
    r.useEffect(
        () => (
            (C.current = o()(() => {
                g?.current != null &&
                    (O && h(g.current?.getDistanceFromTop() > 12), p(g.current?.getDistanceFromBottom() > 12));
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
            let e = new (N?.current?.ownerDocument?.defaultView ?? window).ResizeObserver(() => {
                    if (L) return void T(!0);
                    let e = g?.current?.getScrollerNode() ?? null;
                    if (null == e || N?.current == null) return;
                    let t = e.getBoundingClientRect();
                    T(N.current.getBoundingClientRect().height > t.height);
                }),
                t = g?.current?.getScrollerNode() ?? null;
            return (null != t && e.observe(t), N?.current != null && e.observe(N.current), () => e.disconnect());
        }, [L]),
        (0, i.jsxs)(c.F, {
            children: [
                (0, i.jsx)("div", { className: s()(A.bodySpacerTop, { [A.bodySpacerTopBorder]: m && null == t }) }),
                null != t && (0, i.jsx)("header", { className: s()(A.bodyControls, { [A.showFade]: f }), children: t }),
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
                              className: s()(A.bodyInner, { [A.bodyInnerShouldScroll]: m }),
                              children: n,
                          }),
                      }),
                (0, i.jsx)("div", {
                    className: s()(A.bodySpacerBottom, { [A.bodyScrollingSpacerBottom]: m, [A.showFade]: I }),
                }),
            ],
        })
    );
}
n.d(
    t,
    {},
    {
        c: function (e) {
            let { controls: t, children: n, listProps: r, onScroll: a, scrollerRef: s } = e;
            if (!f(n) && null == t && null == r) return null;
            let l =
                "string" == typeof n
                    ? (0, i.jsx)(E.E, { variant: "body-md/normal", color: "text-subtle", children: n })
                    : n;
            return (0, i.jsx)(h, { controls: t, children: l, listProps: r, onScroll: a, scrollerRef: s });
        },
        y: f,
    },
);
