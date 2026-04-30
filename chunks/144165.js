"use strict";
n.d(t, { _: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s);
function o(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: s, width: a = 288, height: o = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/01fad351459d7599c15e3503bc14fadd01f8d18ffb2c66e064370504bd59ee82.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: s ?? "img",
    });
}
var l = n(187322),
    u = n(939249),
    c = n(834730),
    d = n(264927),
    _ = n(515718),
    f = n(835517),
    h = n(966697),
    p = n(652215),
    E = n(838541),
    m = n(375708),
    g = n(503117);
let A = r.forwardRef((e, t) => {
    var n, s, o, c;
    let f,
        {
            className: A,
            imageClassName: S,
            readyState: N = p.Rv1.READY,
            src: y,
            placeholder: C,
            placeholderVersion: v,
            alt: O,
            width: R,
            height: b,
            maxWidth: D = R,
            maxHeight: L = b,
            minWidth: w = 0,
            minHeight: M = 0,
            mediaLayoutType: P,
            limitResponsiveWidth: x = !0,
            accessory: U,
            zoomable: k = !0,
            original: G,
            children: F = (e) => {
                let { src: t, size: n, alt: r, className: s, mediaLayoutType: a } = e;
                return (0, i.jsx)("img", {
                    className: s ?? void 0,
                    alt: r ?? m.intl.string(m.t.X4IxWL),
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
            ...z
        } = e,
        $ = r.useRef(null),
        q = r.useRef(null);
    if (1 === R && 1 === b) return null;
    let Z = (0, _.Uj)({ width: R, height: b, maxWidth: D, maxHeight: L, minWidth: w, minHeight: M }),
        X = 0 !== Z.width ? Z.width / Z.height : 1;
    "" !== y && N !== p.Rv1.ERROR
        ? (f = F({ src: y, size: Z, alt: O, className: S, mediaLayoutType: P }))
        : N !== p.Rv1.LOADING && (f = (0, i.jsx)(I, { size: Z, mediaLayoutType: P, alt: O })),
        (f = (0, i.jsx)(h.y, {
            disableSpinner: K,
            readyState: N,
            aspectRatio: X,
            placeholder: C,
            placeholderVersion: v,
            placeholderStyle: T(Z, P),
            children: f,
        }));
    let Q = null != V ? V() : null;
    return (
        (Q = Q ?? U),
        (0, i.jsx)(l.vN, {
            ringTarget: $,
            focusTarget: q,
            children: (0, i.jsxs)("div", {
                ref: t,
                className: a()("imageWrapper", g.h4, { [g.j3]: k, [g.LF]: N !== p.Rv1.READY, [g.vk]: null != B }, A),
                style:
                    ((n = Z),
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
                ...z,
                children: [
                    null != G &&
                        (0, i.jsx)("a", {
                            tabIndex: -1,
                            onClick: B,
                            "aria-hidden": !0,
                            className: g.mt,
                            href: G,
                            ref: $,
                            "data-role": "img",
                            "data-safe-src": j ?? y,
                        }),
                    null != B
                        ? (0, i.jsx)(u.D, {
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
                    null != Q ? (0, i.jsx)("div", { className: g.mQ, children: Q }) : null,
                ],
            }),
        })
    );
});
function I(e) {
    let { size: t, mediaLayoutType: n, alt: r } = e;
    return (0, i.jsxs)("div", {
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
            (0, i.jsx)("div", {
                className: g.QM,
                children: (0, i.jsx)(o, { alt: r ?? m.intl.string(m.t.X4IxWL), height: "auto" }),
            }),
            (0, i.jsx)(c.E, {
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
