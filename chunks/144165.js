i.d(t, { _: () => b });
var a = i(477900),
    l = i(582128),
    s = i(503698),
    n = i.n(s),
    d = i(259678),
    r = i(939249),
    c = i(834730);
function h(e) {
    let { alt: t, ariaLabel: i, ariaHidden: l, role: s, width: n = 288, height: d = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: n, height: d },
        src: "https://cdn.discordapp.com/assets/content/9704f78db46554d26701d9fdb7e758c796cea63014fb2633f39bec487a3322b6.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
var u = i(264927),
    o = i(515718),
    m = i(835517),
    x = i(966697),
    g = i(652215),
    f = i(838541),
    p = i(375708),
    v = i(397813);
let b = l.forwardRef((e, t) => {
    var i, s, c, h;
    let m,
        {
            className: b,
            imageClassName: N,
            readyState: w = g.Rv1.READY,
            src: j,
            placeholder: E,
            placeholderVersion: I,
            alt: S,
            width: L,
            height: A,
            maxWidth: W = L,
            maxHeight: k = A,
            minWidth: C = 0,
            minHeight: D = 0,
            mediaLayoutType: G,
            limitResponsiveWidth: O = !0,
            accessory: T,
            zoomable: H = !0,
            original: M,
            children: P = (e) => {
                let { src: t, size: i, alt: l, className: s, mediaLayoutType: n } = e;
                return (0, a.jsx)("img", {
                    className: s ?? void 0,
                    alt: l ?? p.intl.string(p.t.X4IxWL),
                    src: t,
                    style: R(i, n),
                });
            },
            renderAccessory: _,
            onClick: $,
            tabIndex: z,
            dataSafeSrc: V,
            useFullWidth: X = !1,
            srcIsAnimated: Y,
            disableLoadingSpinner: F = !1,
            ...Q
        } = e,
        U = l.useRef(null),
        B = l.useRef(null);
    if (1 === L && 1 === A) return null;
    let J = (0, o.Uj)({ width: L, height: A, maxWidth: W, maxHeight: k, minWidth: C, minHeight: D }),
        K = 0 !== J.width ? J.width / J.height : 1;
    "" !== j && w !== g.Rv1.ERROR
        ? (m = P({ src: j, size: J, alt: S, className: N, mediaLayoutType: G }))
        : w !== g.Rv1.LOADING && (m = (0, a.jsx)(y, { size: J, mediaLayoutType: G, alt: S })),
        (m = (0, a.jsx)(x.y, {
            disableSpinner: F,
            readyState: w,
            aspectRatio: K,
            placeholder: E,
            placeholderVersion: I,
            placeholderStyle: R(J, G),
            children: m,
        }));
    let Z = null != _ ? _() : null;
    return (
        (Z = Z ?? T),
        (0, a.jsx)(d.vN, {
            ringTarget: U,
            focusTarget: B,
            children: (0, a.jsxs)("div", {
                ref: t,
                className: n()("imageWrapper", v.h4, { [v.j3]: H, [v.LF]: w !== g.Rv1.READY, [v.vk]: null != $ }, b),
                style:
                    ((i = J),
                    (s = O),
                    (c = X),
                    (h = G) === f.dG.MOSAIC
                        ? {
                              display: "block",
                              maxHeight: "inherit",
                              margin: "auto",
                              width: c ? "100%" : i.width,
                              height: "100%",
                          }
                        : h === f.dG.RESPONSIVE
                          ? { maxWidth: s ? i.width : void 0, width: "100%", aspectRatio: `${i.width} / ${i.height}` }
                          : i),
                ...Q,
                children: [
                    null != M &&
                        (0, a.jsx)("a", {
                            tabIndex: -1,
                            onClick: $,
                            "aria-hidden": !0,
                            className: v.mt,
                            href: M,
                            ref: U,
                            "data-role": "img",
                            "data-safe-src": V ?? j,
                        }),
                    null != $
                        ? (0, a.jsx)(r.D, {
                              className: v.w8,
                              tabIndex: z ?? 0,
                              onClick: $,
                              "aria-label": S ?? p.intl.string(p.t.X4IxWL),
                              "aria-describedby": u.l2,
                              innerRef: B,
                              focusProps: { enabled: !1 },
                              children: m,
                          })
                        : m,
                    null != Z ? (0, a.jsx)("div", { className: v.mQ, children: Z }) : null,
                ],
            }),
        })
    );
});
function y(e) {
    let { size: t, mediaLayoutType: i, alt: l } = e;
    return (0, a.jsxs)("div", {
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
                    return { ...N(e), display: "flex" };
                default:
                    return e;
            }
        })(t, i),
        children: [
            (0, a.jsx)("div", {
                className: v.QM,
                children: (0, a.jsx)(h, { alt: l ?? p.intl.string(p.t.X4IxWL), height: "auto" }),
            }),
            (0, a.jsx)(c.E, {
                className: v.b4,
                variant: "text-sm/medium",
                color: "text-subtle",
                children: p.intl.string(p.t.sAfT1K),
            }),
        ],
    });
}
function R(e, t) {
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
            return N(e);
        default:
            return e;
    }
}
function N(e) {
    let { width: t, height: i } = e;
    return { maxWidth: t, maxHeight: i, width: "100%", display: "block", aspectRatio: `${t} / ${i}` };
}
b.displayName = "Image";
