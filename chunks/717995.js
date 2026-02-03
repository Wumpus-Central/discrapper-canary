n.d(t, {
    R: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(508382),
    c = n(158954),
    u = n(502939),
    d = n(397927),
    f = n(129837),
    p = n(112317),
    _ = n(348275),
    h = n(894524);

function m(e, t, n) {
    var r, i;
    return null != (r = null != (i = null == e ? void 0 : e.ownerDocument) ? i : null == t ? void 0 : t.ownerDocument)
        ? r
        : null == n
          ? void 0
          : n.ownerDocument;
}
let g = 11,
    E = ["left", "center", "right"],
    y = ["top", "center", "bottom"];

function b(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: a,
            targetElement: b,
            anchorRef: O,
            id: v,
            content: A,
            position: I = "top",
            align: S = "center",
            spacing: T = g,
            caretConfig: C,
            layerContext: N,
            animationStyle: w,
            positionKey: R,
        } = e,
        { isRichTooltip: P } = (0, p.w6)(),
        D = (0, u.D)("Tooltip"),
        [L, x] = i.useState(null == b ? void 0 : b.ownerDocument);
    i.useLayoutEffect(() => {
        x(m(null == O ? void 0 : O.current, b, a.current));
    }, [O, b, a]);
    let M = i.useMemo(() => (("left" === I || "right" === I ? y : E).includes(S) ? S : "center"), [I, S]);
    if (!n) return null;
    let j = (e) => {
        var t, n, i, a;
        let { position: l, nudge: c } = e,
            u = null != l ? l : I,
            p = null != (t = null == C ? void 0 : C.align) ? t : null != c && 0 !== c ? "custom" : "center",
            m = null != (n = null != (i = null == C ? void 0 : C.customOffset) ? i : c) ? n : 0,
            g = {
                position: null != (a = null == C ? void 0 : C.position) ? a : (0, _.l8)(u),
                align: p,
                customOffset: "custom" === p ? m : void 0,
            },
            E = (0, r.jsxs)("div", {
                id: v,
                className: o()(h.YL, {
                    [h.mj]: P,
                }),
                role: "tooltip",
                "data-position": u,
                "data-mana-component": "tooltip",
                children: [
                    (0, r.jsx)(f.z, {
                        caretConfig: g,
                    }),
                    (0, r.jsx)("div", {
                        className: h.rv,
                        children:
                            "string" == typeof A
                                ? (0, r.jsx)(d.Text, {
                                      variant: "text-sm/medium",
                                      children: A,
                                  })
                                : A,
                    }),
                ],
            });
        return w
            ? (0, r.jsx)(s.animated.div, {
                  style: w,
                  children: E,
              })
            : E;
    };
    if (D) {
        let e = (0, l.Pv)(I, S),
            t = null != b ? b : a.current;
        return (0, r.jsx)(l.Ow, {
            className: h.BM,
            open: n,
            spacing: T,
            placement: e,
            reference: t,
            ownerDocument: L,
            renderLayer: (e) => {
                var t;
                let { placement: n, shift: r } = e,
                    i = -(null != (t = null == r ? void 0 : r.x) ? t : 0);
                return j({
                    position: (0, l.$Y)(n),
                    nudge: i,
                });
            },
            children: () => null,
        });
    }
    let k = (0, r.jsx)(d.QCO, {
        targetRef: null != O ? O : a,
        position: I,
        align: M,
        spacing: T,
        positionKey: R,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: j,
    });
    return null != N
        ? (0, r.jsx)(c.Wdr, {
              layerContext: N,
              children: k,
          })
        : k;
}
