n.d(t, { R: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(432022),
    l = n(508382),
    c = n(158954),
    u = n(502939),
    d = n(397927),
    f = n(129837),
    p = n(112317),
    _ = n(348275),
    h = n(894524);
let m = 11,
    g = ["left", "center", "right"],
    E = ["top", "center", "bottom"];
function b(e) {
    let {
            isVisible: t,
            isRendered: n = t,
            targetElementRef: a,
            targetElement: b,
            anchorRef: y,
            id: O,
            content: A,
            position: v = "top",
            align: S = "center",
            spacing: I = m,
            caretConfig: T,
            layerContext: C,
            animationStyle: N,
            positionKey: R,
        } = e,
        { isRichTooltip: w } = (0, p.w6)(),
        P = (0, u.D)("Tooltip"),
        D = i.useMemo(() => (("left" === v || "right" === v ? E : g).includes(S) ? S : "center"), [v, S]);
    if (!n) return null;
    let x = (e) => {
        var t, n, i, a;
        let { position: l, nudge: c } = e,
            u = null != l ? l : v,
            p = null != (t = null == T ? void 0 : T.align) ? t : null != c && 0 !== c ? "custom" : "center",
            m = null != (n = null != (i = null == T ? void 0 : T.customOffset) ? i : c) ? n : 0,
            g = {
                position: null != (a = null == T ? void 0 : T.position) ? a : (0, _.l8)(u),
                align: p,
                customOffset: "custom" === p ? m : void 0,
            },
            E = (0, r.jsxs)("div", {
                id: O,
                className: s()(h.YL, { [h.mj]: w }),
                role: "tooltip",
                "data-position": u,
                "data-mana-component": "tooltip",
                children: [
                    (0, r.jsx)(f.z, { caretConfig: g }),
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
        return N
            ? (0, r.jsx)(o.animated.div, {
                  style: N,
                  children: E,
              })
            : E;
    };
    if (P) {
        let e = (0, l.Pv)(v, S),
            t = null != b ? b : a.current;
        return (0, r.jsx)(l.Ow, {
            className: h.BM,
            open: n,
            spacing: I,
            placement: e,
            reference: t,
            renderLayer: (e) => {
                var t;
                let { placement: n, shift: r } = e,
                    i = -(null != (t = null == r ? void 0 : r.x) ? t : 0);
                return x({
                    position: (0, l.$Y)(n),
                    nudge: i,
                });
            },
            children: () => null,
        });
    }
    let L = (0, r.jsx)(d.QCO, {
        targetRef: null != y ? y : a,
        position: v,
        align: D,
        spacing: I,
        positionKey: R,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: x,
    });
    return null != C
        ? (0, r.jsx)(c.Wdr, {
              layerContext: C,
              children: L,
          })
        : L;
}
