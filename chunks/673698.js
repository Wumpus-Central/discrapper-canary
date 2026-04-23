"use strict";
n.d(t, { _: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(203653),
    l = n(187322),
    u = n(939249),
    c = n(834730),
    d = n(264927),
    _ = n(515718),
    f = n(835517),
    p = n(649658),
    h = n(652215),
    E = n(838541),
    m = n(985018),
    g = n(503117);
let A = i.forwardRef((e, t) => {
    var n, s, o, c;
    let f,
        {
            className: A,
            imageClassName: S,
            readyState: y = h.Rv1.READY,
            src: N,
            placeholder: v,
            placeholderVersion: C,
            alt: O,
            width: R,
            height: b,
            maxWidth: D = R,
            maxHeight: L = b,
            minWidth: w = 0,
            minHeight: M = 0,
            mediaLayoutType: P,
            limitResponsiveWidth: x = !0,
            accessory: k,
            zoomable: U = !0,
            original: G,
            children: F = (e) => {
                let { src: t, size: n, alt: i, className: s, mediaLayoutType: a } = e;
                return (0, r.jsx)("img", {
                    className: s ?? void 0,
                    alt: i ?? m.intl.string(m.t.X4IxWL),
                    src: t,
                    style: T(n, a),
                });
            },
            renderAccessory: V,
            onClick: B,
            tabIndex: H,
            dataSafeSrc: j,
            useFullWidth: Y = !1,
            srcIsAnimated: W,
            disableLoadingSpinner: K = !1,
            ...$
        } = e,
        z = i.useRef(null),
        q = i.useRef(null);
    if (1 === R && 1 === b) return null;
    let X = (0, _.Uj)({ width: R, height: b, maxWidth: D, maxHeight: L, minWidth: w, minHeight: M }),
        Q = 0 !== X.width ? X.width / X.height : 1;
    "" !== N && y !== h.Rv1.ERROR
        ? (f = F({ src: N, size: X, alt: O, className: S, mediaLayoutType: P }))
        : y !== h.Rv1.LOADING && (f = (0, r.jsx)(I, { size: X, mediaLayoutType: P, alt: O })),
        (f = (0, r.jsx)(p.y, {
            disableSpinner: K,
            readyState: y,
            aspectRatio: Q,
            placeholder: v,
            placeholderVersion: C,
            placeholderStyle: T(X, P),
            children: f,
        }));
    let Z = null != V ? V() : null;
    return (
        (Z = Z ?? k),
        (0, r.jsx)(l.vN, {
            ringTarget: z,
            focusTarget: q,
            children: (0, r.jsxs)("div", {
                ref: t,
                className: a()("imageWrapper", g.h4, { [g.j3]: U, [g.LF]: y !== h.Rv1.READY, [g.vk]: null != B }, A),
                style:
                    ((n = X),
                    (s = x),
                    (o = Y),
                    (c = P) === E.dG.MOSAIC
                        ? {
                              display: "block",
                              maxHeight: "inherit",
                              margin: "auto",
                              width: o ? "100%" : n.width,
                              height: "100%",
                          }
                        : c === E.dG.RESPONSIVE
                          ? { maxWidth: s ? n.width : void 0, width: "100%", aspectRatio: `${n.width} / ${n.height}` }
                          : n),
                ...$,
                children: [
                    null != G &&
                        (0, r.jsx)("a", {
                            tabIndex: -1,
                            onClick: B,
                            "aria-hidden": !0,
                            className: g.mt,
                            href: G,
                            ref: z,
                            "data-role": "img",
                            "data-safe-src": j ?? N,
                        }),
                    null != B
                        ? (0, r.jsx)(u.D, {
                              className: g.w8,
                              tabIndex: H ?? 0,
                              onClick: B,
                              "aria-label": O ?? m.intl.string(m.t.X4IxWL),
                              "aria-describedby": d.l2,
                              innerRef: q,
                              focusProps: { enabled: !1 },
                              children: f,
                          })
                        : f,
                    null != Z ? (0, r.jsx)("div", { className: g.mQ, children: Z }) : null,
                ],
            }),
        })
    );
});
function I(e) {
    let { size: t, mediaLayoutType: n, alt: i } = e;
    return (0, r.jsxs)("div", {
        className: g.x5,
        style: (function (e, t) {
            switch (t) {
                case E.dG.MOSAIC:
                    return {
                        width: "100%",
                        height: "100%",
                        aspectRatio: `${e.width} / ${e.height}`,
                        display: "flex",
                        maxHeight: "inherit",
                    };
                case E.dG.RESPONSIVE:
                    return { ...S(e), display: "flex" };
                default:
                    return e;
            }
        })(t, n),
        children: [
            (0, r.jsx)("div", {
                className: g.QM,
                children: (0, r.jsx)(o.K, { alt: i ?? m.intl.string(m.t.X4IxWL), height: "auto" }),
            }),
            (0, r.jsx)(c.E, {
                className: g.b4,
                variant: "text-sm/medium",
                color: "text-subtle",
                children: m.intl.string(m.t.sAfT1K),
            }),
        ],
    });
}
function T(e, t) {
    switch (t) {
        case E.dG.MOSAIC:
            return {
                display: "block",
                objectFit: "cover",
                minWidth: "100%",
                minHeight: "100%",
                maxWidth: 1 === (0, f.A)() ? "calc(100% + 1px)" : "100%",
            };
        case E.dG.RESPONSIVE:
            return S(e);
        default:
            return e;
    }
}
function S(e) {
    let { width: t, height: n } = e;
    return { maxWidth: t, maxHeight: n, width: "100%", display: "block", aspectRatio: `${t} / ${n}` };
}
A.displayName = "Image";
