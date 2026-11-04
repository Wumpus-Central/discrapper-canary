i.d(t, { _: () => y });
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
    g = i(710793),
    f = i(652215),
    p = i(838541),
    v = i(792996),
    b = i(774702);
let y = (e) => {
    var t, i, l, c;
    let h,
        {
            className: u,
            imageClassName: x,
            readyState: y = f.Rv1.READY,
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
            limitResponsiveWidth: O = !0,
            accessory: H,
            zoomable: M = !0,
            original: P,
            children: _ = (e) => {
                let { src: t, size: i, alt: s, className: l, mediaLayoutType: n } = e;
                return (0, a.jsx)("img", {
                    className: l ?? void 0,
                    alt: s ?? v.intl.string(v.t.X4IxWL),
                    src: t,
                    style: R(i, n),
                });
            },
            renderAccessory: T,
            onClick: $,
            tabIndex: X,
            dataSafeSrc: V,
            useFullWidth: G = !1,
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
    ("" !== w && y !== f.Rv1.ERROR
        ? (h = _({ src: w, size: K, alt: S, className: x, mediaLayoutType: D }))
        : y !== f.Rv1.LOADING && (h = (0, a.jsx)(N, { size: K, mediaLayoutType: D, alt: S })),
        (h = (0, a.jsx)(g.y, {
            disableSpinner: z,
            readyState: y,
            aspectRatio: Z,
            placeholder: j,
            placeholderVersion: I,
            placeholderStyle: R(K, D),
            children: h,
        })));
    let q = null != T ? T() : null;
    return (
        (q = q ?? H),
        (0, a.jsx)(r.vN, {
            ringTarget: U,
            focusTarget: J,
            children: (0, a.jsxs)("div", {
                ref: F,
                className: n()("imageWrapper", b.h4, { [b.j3]: M, [b.LF]: y !== f.Rv1.READY, [b.vk]: null != $ }, u),
                style:
                    ((t = K),
                    (i = O),
                    (l = G),
                    (c = D) === p.d.MOSAIC
                        ? {
                              display: "block",
                              maxHeight: "inherit",
                              margin: "auto",
                              width: l ? "100%" : t.width,
                              height: "100%",
                          }
                        : c === p.d.RESPONSIVE
                          ? { maxWidth: i ? t.width : void 0, width: "100%", aspectRatio: `${t.width} / ${t.height}` }
                          : t),
                ...Q,
                children: [
                    null != P &&
                        (0, a.jsx)("a", {
                            tabIndex: -1,
                            onClick: $,
                            "aria-hidden": !0,
                            className: b.mt,
                            href: P,
                            ref: U,
                            "data-role": "img",
                            "data-safe-src": V ?? w,
                        }),
                    null != $
                        ? (0, a.jsx)(d.D, {
                              className: b.w8,
                              tabIndex: X ?? 0,
                              onClick: $,
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
function N(e) {
    let { size: t, mediaLayoutType: i, alt: s } = e;
    return (0, a.jsxs)("div", {
        className: b.x5,
        style: (function (e, t) {
            switch (t) {
                case p.d.MOSAIC:
                    return {
                        width: "100%",
                        height: "100%",
                        aspectRatio: `${e.width} / ${e.height}`,
                        display: "flex",
                        maxHeight: "inherit",
                    };
                case p.d.RESPONSIVE:
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
                variant: "body-sm/medium",
                color: "text-subtle",
                children: v.intl.string(v.t.sAfT1K),
            }),
        ],
    });
}
function R(e, t) {
    switch (t) {
        case p.d.MOSAIC:
            return {
                display: "block",
                objectFit: "cover",
                minWidth: "100%",
                minHeight: "100%",
                maxWidth: 1 === (0, x.A)() ? "calc(100% + 1px)" : "100%",
            };
        case p.d.RESPONSIVE:
            return w(e);
        default:
            return e;
    }
}
function w(e) {
    let { width: t, height: i } = e;
    return { maxWidth: t, maxHeight: i, width: "100%", display: "block", aspectRatio: `${t} / ${i}` };
}
y.displayName = "Image";
