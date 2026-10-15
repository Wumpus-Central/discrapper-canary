i.d(t, { _: () => N });
var a = i(477900),
    s = i(582128),
    l = i(503698),
    n = i.n(l),
    r = i(559106),
    d = i(939249),
    c = i(834730),
    h = i(62617);
function u(e) {
    let { alt: t, ariaLabel: i, ariaHidden: l, role: n, width: r, height: d, className: c, style: u } = e,
        o = s.useMemo(
            () => (0, h.H)({ width: r, height: d, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [r, d, u],
        );
    return (0, a.jsx)("img", {
        style: o,
        src: "https://cdn.discordapp.com/assets/content/9704f78db46554d26701d9fdb7e758c796cea63014fb2633f39bec487a3322b6.svg",
        className: (0, h.Z)(c),
        alt: t,
        "aria-label": i,
        "aria-hidden": l,
        role: n ?? "img",
    });
}
var o = i(264927),
    m = i(515718),
    x = i(835517),
    g = i(966697),
    f = i(652215),
    p = i(838541),
    v = i(105292),
    b = i(774702);
let N = (e) => {
    var t, i, l, c;
    let h,
        {
            className: u,
            imageClassName: x,
            readyState: N = f.Rv1.READY,
            src: w,
            placeholder: j,
            placeholderVersion: I,
            alt: S,
            width: E,
            height: A,
            maxWidth: L = E,
            maxHeight: W = A,
            minWidth: k = 0,
            minHeight: C = 0,
            mediaLayoutType: D,
            limitResponsiveWidth: G = !0,
            accessory: O,
            zoomable: H = !0,
            original: M,
            children: P = (e) => {
                let { src: t, size: i, alt: s, className: l, mediaLayoutType: n } = e;
                return (0, a.jsx)("img", {
                    className: l ?? void 0,
                    alt: s ?? v.intl.string(v.t.X4IxWL),
                    src: t,
                    style: y(i, n),
                });
            },
            renderAccessory: _,
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
    let K = (0, m.Uj)({ width: E, height: A, maxWidth: L, maxHeight: W, minWidth: k, minHeight: C }),
        Z = 0 !== K.width ? K.width / K.height : 1;
    ("" !== w && N !== f.Rv1.ERROR
        ? (h = P({ src: w, size: K, alt: S, className: x, mediaLayoutType: D }))
        : N !== f.Rv1.LOADING && (h = (0, a.jsx)(R, { size: K, mediaLayoutType: D, alt: S })),
        (h = (0, a.jsx)(g.y, {
            disableSpinner: z,
            readyState: N,
            aspectRatio: Z,
            placeholder: j,
            placeholderVersion: I,
            placeholderStyle: y(K, D),
            children: h,
        })));
    let q = null != _ ? _() : null;
    return (
        (q = q ?? O),
        (0, a.jsx)(r.vN, {
            ringTarget: U,
            focusTarget: J,
            children: (0, a.jsxs)("div", {
                ref: F,
                className: n()("imageWrapper", b.h4, { [b.j3]: H, [b.LF]: N !== f.Rv1.READY, [b.vk]: null != T }, u),
                style:
                    ((t = K),
                    (i = G),
                    (l = V),
                    (c = D) === p.dG.MOSAIC
                        ? {
                              display: "block",
                              maxHeight: "inherit",
                              margin: "auto",
                              width: l ? "100%" : t.width,
                              height: "100%",
                          }
                        : c === p.dG.RESPONSIVE
                          ? { maxWidth: i ? t.width : void 0, width: "100%", aspectRatio: `${t.width} / ${t.height}` }
                          : t),
                ...Q,
                children: [
                    null != M &&
                        (0, a.jsx)("a", {
                            tabIndex: -1,
                            onClick: T,
                            "aria-hidden": !0,
                            className: b.mt,
                            href: M,
                            ref: U,
                            "data-role": "img",
                            "data-safe-src": X ?? w,
                        }),
                    null != T
                        ? (0, a.jsx)(d.D, {
                              className: b.w8,
                              tabIndex: $ ?? 0,
                              onClick: T,
                              "aria-label": S ?? v.intl.string(v.t.X4IxWL),
                              "aria-describedby": o.l2,
                              innerRef: J,
                              focusProps: { enabled: !1 },
                              children: h,
                          })
                        : h,
                    null != q ? (0, a.jsx)("div", { className: b.mQ, children: q }) : null,
                ],
            }),
        })
    );
};
function R(e) {
    let { size: t, mediaLayoutType: i, alt: s } = e;
    return (0, a.jsxs)("div", {
        className: b.x5,
        style: (function (e, t) {
            switch (t) {
                case p.dG.MOSAIC:
                    return {
                        width: "100%",
                        height: "100%",
                        aspectRatio: `${e.width} / ${e.height}`,
                        display: "flex",
                        maxHeight: "inherit",
                    };
                case p.dG.RESPONSIVE:
                    return { ...w(e), display: "flex" };
                default:
                    return e;
            }
        })(t, i),
        children: [
            (0, a.jsx)("div", {
                className: b.QM,
                children: (0, a.jsx)(u, { alt: s ?? v.intl.string(v.t.X4IxWL), height: "auto" }),
            }),
            (0, a.jsx)(c.E, {
                className: b.b4,
                variant: "text-sm/medium",
                color: "text-subtle",
                children: v.intl.string(v.t.sAfT1K),
            }),
        ],
    });
}
function y(e, t) {
    switch (t) {
        case p.dG.MOSAIC:
            return {
                display: "block",
                objectFit: "cover",
                minWidth: "100%",
                minHeight: "100%",
                maxWidth: 1 === (0, x.A)() ? "calc(100% + 1px)" : "100%",
            };
        case p.dG.RESPONSIVE:
            return w(e);
        default:
            return e;
    }
}
function w(e) {
    let { width: t, height: i } = e;
    return { maxWidth: t, maxHeight: i, width: "100%", display: "block", aspectRatio: `${t} / ${i}` };
}
N.displayName = "Image";
