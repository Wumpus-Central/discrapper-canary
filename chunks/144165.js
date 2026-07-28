"use strict";
n.d(t, { _: () => T });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a);
function l(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, width: s = 288, height: l = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/01fad351459d7599c15e3503bc14fadd01f8d18ffb2c66e064370504bd59ee82.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: a ?? "img",
    });
}
var o = n(259678),
    d = n(939249),
    c = n(834730),
    u = n(264927),
    _ = n(515718),
    E = n(835517),
    A = n(966697),
    h = n(652215),
    I = n(838541),
    f = n(375708),
    p = n(397813);
let T = r.forwardRef((e, t) => {
    var n, a, l, c;
    let E,
        {
            className: T,
            imageClassName: S,
            readyState: N = h.Rv1.READY,
            src: C,
            placeholder: O,
            placeholderVersion: R,
            alt: L,
            width: y,
            height: D,
            maxWidth: v = y,
            maxHeight: b = D,
            minWidth: M = 0,
            minHeight: P = 0,
            mediaLayoutType: U,
            limitResponsiveWidth: w = !0,
            accessory: G,
            zoomable: x = !0,
            original: k,
            children: F = (e) => {
                let { src: t, size: n, alt: r, className: a, mediaLayoutType: s } = e;
                return (0, i.jsx)("img", {
                    className: a ?? void 0,
                    alt: r ?? f.intl.string(f.t.X4IxWL),
                    src: t,
                    style: g(n, s),
                });
            },
            renderAccessory: V,
            onClick: B,
            tabIndex: H,
            dataSafeSrc: j,
            useFullWidth: W = !1,
            srcIsAnimated: Y,
            disableLoadingSpinner: K = !1,
            ...$
        } = e,
        z = r.useRef(null),
        q = r.useRef(null);
    if (1 === y && 1 === D) return null;
    let Z = (0, _.Uj)({ width: y, height: D, maxWidth: v, maxHeight: b, minWidth: M, minHeight: P }),
        X = 0 !== Z.width ? Z.width / Z.height : 1;
    "" !== C && N !== h.Rv1.ERROR
        ? (E = F({ src: C, size: Z, alt: L, className: S, mediaLayoutType: U }))
        : N !== h.Rv1.LOADING && (E = (0, i.jsx)(m, { size: Z, mediaLayoutType: U, alt: L })),
        (E = (0, i.jsx)(A.y, {
            disableSpinner: K,
            readyState: N,
            aspectRatio: X,
            placeholder: O,
            placeholderVersion: R,
            placeholderStyle: g(Z, U),
            children: E,
        }));
    let Q = null != V ? V() : null;
    return (
        (Q = Q ?? G),
        (0, i.jsx)(o.vN, {
            ringTarget: z,
            focusTarget: q,
            children: (0, i.jsxs)("div", {
                ref: t,
                className: s()("imageWrapper", p.h4, { [p.j3]: x, [p.LF]: N !== h.Rv1.READY, [p.vk]: null != B }, T),
                style:
                    ((n = Z),
                    (a = w),
                    (l = W),
                    (c = U) === I.dG.MOSAIC
                        ? {
                              display: "block",
                              maxHeight: "inherit",
                              margin: "auto",
                              width: l ? "100%" : n.width,
                              height: "100%",
                          }
                        : c === I.dG.RESPONSIVE
                          ? { maxWidth: a ? n.width : void 0, width: "100%", aspectRatio: `${n.width} / ${n.height}` }
                          : n),
                ...$,
                children: [
                    null != k &&
                        (0, i.jsx)("a", {
                            tabIndex: -1,
                            onClick: B,
                            "aria-hidden": !0,
                            className: p.mt,
                            href: k,
                            ref: z,
                            "data-role": "img",
                            "data-safe-src": j ?? C,
                        }),
                    null != B
                        ? (0, i.jsx)(d.D, {
                              className: p.w8,
                              tabIndex: H ?? 0,
                              onClick: B,
                              "aria-label": L ?? f.intl.string(f.t.X4IxWL),
                              "aria-describedby": u.l2,
                              innerRef: q,
                              focusProps: { enabled: !1 },
                              children: E,
                          })
                        : E,
                    null != Q ? (0, i.jsx)("div", { className: p.mQ, children: Q }) : null,
                ],
            }),
        })
    );
});
function m(e) {
    let { size: t, mediaLayoutType: n, alt: r } = e;
    return (0, i.jsxs)("div", {
        className: p.x5,
        style: (function (e, t) {
            switch (t) {
                case I.dG.MOSAIC:
                    return {
                        width: "100%",
                        height: "100%",
                        aspectRatio: `${e.width} / ${e.height}`,
                        display: "flex",
                        maxHeight: "inherit",
                    };
                case I.dG.RESPONSIVE:
                    return { ...S(e), display: "flex" };
                default:
                    return e;
            }
        })(t, n),
        children: [
            (0, i.jsx)("div", {
                className: p.QM,
                children: (0, i.jsx)(l, { alt: r ?? f.intl.string(f.t.X4IxWL), height: "auto" }),
            }),
            (0, i.jsx)(c.E, {
                className: p.b4,
                variant: "text-sm/medium",
                color: "text-subtle",
                children: f.intl.string(f.t.sAfT1K),
            }),
        ],
    });
}
function g(e, t) {
    switch (t) {
        case I.dG.MOSAIC:
            return {
                display: "block",
                objectFit: "cover",
                minWidth: "100%",
                minHeight: "100%",
                maxWidth: 1 === (0, E.A)() ? "calc(100% + 1px)" : "100%",
            };
        case I.dG.RESPONSIVE:
            return S(e);
        default:
            return e;
    }
}
function S(e) {
    let { width: t, height: n } = e;
    return { maxWidth: t, maxHeight: n, width: "100%", display: "block", aspectRatio: `${t} / ${n}` };
}
T.displayName = "Image";
