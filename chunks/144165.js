a.d(t, { _: () => b });
var i = a(477900),
    s = a(582128),
    l = a(503698),
    n = a.n(l),
    r = a(559106),
    d = a(939249),
    c = a(834730);
function h(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: l, width: n = 288, height: r = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: n, height: r },
        src: "https://cdn.discordapp.com/assets/content/9704f78db46554d26701d9fdb7e758c796cea63014fb2633f39bec487a3322b6.svg",
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: l ?? "img",
    });
}
var u = a(264927),
    o = a(515718),
    m = a(835517),
    x = a(966697),
    g = a(652215),
    f = a(838541),
    p = a(375708),
    v = a(774702);
let b = (e) => {
    var t, a, l, c;
    let h,
        {
            className: m,
            imageClassName: b,
            readyState: w = g.Rv1.READY,
            src: y,
            placeholder: j,
            placeholderVersion: I,
            alt: S,
            width: E,
            height: A,
            maxWidth: L = E,
            maxHeight: k = A,
            minWidth: W = 0,
            minHeight: C = 0,
            mediaLayoutType: D,
            limitResponsiveWidth: G = !0,
            accessory: O,
            zoomable: M = !0,
            original: P,
            children: _ = (e) => {
                let { src: t, size: a, alt: s, className: l, mediaLayoutType: n } = e;
                return (0, i.jsx)("img", {
                    className: l ?? void 0,
                    alt: s ?? p.intl.string(p.t.X4IxWL),
                    src: t,
                    style: N(a, n),
                });
            },
            renderAccessory: H,
            onClick: T,
            tabIndex: $,
            dataSafeSrc: X,
            useFullWidth: V = !1,
            srcIsAnimated: Y,
            disableLoadingSpinner: z = !1,
            ref: F,
            ...Q
        } = e,
        U = s.useRef(null),
        J = s.useRef(null);
    if (1 === E && 1 === A) return null;
    let K = (0, o.Uj)({ width: E, height: A, maxWidth: L, maxHeight: k, minWidth: W, minHeight: C }),
        q = 0 !== K.width ? K.width / K.height : 1;
    ("" !== y && w !== g.Rv1.ERROR
        ? (h = _({ src: y, size: K, alt: S, className: b, mediaLayoutType: D }))
        : w !== g.Rv1.LOADING && (h = (0, i.jsx)(R, { size: K, mediaLayoutType: D, alt: S })),
        (h = (0, i.jsx)(x.y, {
            disableSpinner: z,
            readyState: w,
            aspectRatio: q,
            placeholder: j,
            placeholderVersion: I,
            placeholderStyle: N(K, D),
            children: h,
        })));
    let B = null != H ? H() : null;
    return (
        (B = B ?? O),
        (0, i.jsx)(r.vN, {
            ringTarget: U,
            focusTarget: J,
            children: (0, i.jsxs)("div", {
                ref: F,
                className: n()("imageWrapper", v.h4, { [v.j3]: M, [v.LF]: w !== g.Rv1.READY, [v.vk]: null != T }, m),
                style:
                    ((t = K),
                    (a = G),
                    (l = V),
                    (c = D) === f.dG.MOSAIC
                        ? {
                              display: "block",
                              maxHeight: "inherit",
                              margin: "auto",
                              width: l ? "100%" : t.width,
                              height: "100%",
                          }
                        : c === f.dG.RESPONSIVE
                          ? { maxWidth: a ? t.width : void 0, width: "100%", aspectRatio: `${t.width} / ${t.height}` }
                          : t),
                ...Q,
                children: [
                    null != P &&
                        (0, i.jsx)("a", {
                            tabIndex: -1,
                            onClick: T,
                            "aria-hidden": !0,
                            className: v.mt,
                            href: P,
                            ref: U,
                            "data-role": "img",
                            "data-safe-src": X ?? y,
                        }),
                    null != T
                        ? (0, i.jsx)(d.D, {
                              className: v.w8,
                              tabIndex: $ ?? 0,
                              onClick: T,
                              "aria-label": S ?? p.intl.string(p.t.X4IxWL),
                              "aria-describedby": u.l2,
                              innerRef: J,
                              focusProps: { enabled: !1 },
                              children: h,
                          })
                        : h,
                    null != B ? (0, i.jsx)("div", { className: v.mQ, children: B }) : null,
                ],
            }),
        })
    );
};
function R(e) {
    let { size: t, mediaLayoutType: a, alt: s } = e;
    return (0, i.jsxs)("div", {
        className: v.x5,
        style: (function (e, t) {
            switch (t) {
                case f.dG.MOSAIC:
                    return {
                        width: "100%",
                        height: "100%",
                        aspectRatio: `${e.width} / ${e.height}`,
                        display: "flex",
                        maxHeight: "inherit",
                    };
                case f.dG.RESPONSIVE:
                    return { ...w(e), display: "flex" };
                default:
                    return e;
            }
        })(t, a),
        children: [
            (0, i.jsx)("div", {
                className: v.QM,
                children: (0, i.jsx)(h, { alt: s ?? p.intl.string(p.t.X4IxWL), height: "auto" }),
            }),
            (0, i.jsx)(c.E, {
                className: v.b4,
                variant: "text-sm/medium",
                color: "text-subtle",
                children: p.intl.string(p.t.sAfT1K),
            }),
        ],
    });
}
function N(e, t) {
    switch (t) {
        case f.dG.MOSAIC:
            return {
                display: "block",
                objectFit: "cover",
                minWidth: "100%",
                minHeight: "100%",
                maxWidth: 1 === (0, m.A)() ? "calc(100% + 1px)" : "100%",
            };
        case f.dG.RESPONSIVE:
            return w(e);
        default:
            return e;
    }
}
function w(e) {
    let { width: t, height: a } = e;
    return { maxWidth: t, maxHeight: a, width: "100%", display: "block", aspectRatio: `${t} / ${a}` };
}
b.displayName = "Image";
