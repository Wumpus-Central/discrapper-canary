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
    d = n(939249),
    _ = n(834730),
    u = n(264927),
    c = n(515718),
    E = n(835517),
    h = n(966697),
    m = n(652215),
    f = n(838541),
    g = n(985018),
    p = n(503117);
let A = r.forwardRef((e, t) => {
    var n, s, o, _;
    let E,
        {
            className: A,
            imageClassName: S,
            readyState: N = m.Rv1.READY,
            src: C,
            placeholder: R,
            placeholderVersion: O,
            alt: y,
            width: v,
            height: D,
            maxWidth: L = v,
            maxHeight: b = D,
            minWidth: w = 0,
            minHeight: P = 0,
            mediaLayoutType: k,
            limitResponsiveWidth: M = !0,
            accessory: U,
            zoomable: x = !0,
            original: G,
            children: V = (e) => {
                let { src: t, size: n, alt: r, className: s, mediaLayoutType: a } = e;
                return (0, i.jsx)("img", {
                    className: s ?? void 0,
                    alt: r ?? g.intl.string(g.t.X4IxWL),
                    src: t,
                    style: T(n, a),
                });
            },
            renderAccessory: F,
            onClick: B,
            tabIndex: H,
            dataSafeSrc: j,
            useFullWidth: W = !1,
            srcIsAnimated: Y,
            disableLoadingSpinner: K = !1,
            ...z
        } = e,
        $ = r.useRef(null),
        q = r.useRef(null);
    if (1 === v && 1 === D) return null;
    let X = (0, c.Uj)({ width: v, height: D, maxWidth: L, maxHeight: b, minWidth: w, minHeight: P }),
        Z = 0 !== X.width ? X.width / X.height : 1;
    "" !== C && N !== m.Rv1.ERROR
        ? (E = V({ src: C, size: X, alt: y, className: S, mediaLayoutType: k }))
        : N !== m.Rv1.LOADING && (E = (0, i.jsx)(I, { size: X, mediaLayoutType: k, alt: y })),
        (E = (0, i.jsx)(h.y, {
            disableSpinner: K,
            readyState: N,
            aspectRatio: Z,
            placeholder: R,
            placeholderVersion: O,
            placeholderStyle: T(X, k),
            children: E,
        }));
    let Q = null != F ? F() : null;
    return (
        (Q = Q ?? U),
        (0, i.jsx)(l.vN, {
            ringTarget: $,
            focusTarget: q,
            children: (0, i.jsxs)("div", {
                ref: t,
                className: a()("imageWrapper", p.h4, { [p.j3]: x, [p.LF]: N !== m.Rv1.READY, [p.vk]: null != B }, A),
                style:
                    ((n = X),
                    (s = M),
                    (o = W),
                    (_ = k) === f.dG.MOSAIC
                        ? {
                              display: "block",
                              maxHeight: "inherit",
                              margin: "auto",
                              width: o ? "100%" : n.width,
                              height: "100%",
                          }
                        : _ === f.dG.RESPONSIVE
                          ? { maxWidth: s ? n.width : void 0, width: "100%", aspectRatio: `${n.width} / ${n.height}` }
                          : n),
                ...z,
                children: [
                    null != G &&
                        (0, i.jsx)("a", {
                            tabIndex: -1,
                            onClick: B,
                            "aria-hidden": !0,
                            className: p.mt,
                            href: G,
                            ref: $,
                            "data-role": "img",
                            "data-safe-src": j ?? C,
                        }),
                    null != B
                        ? (0, i.jsx)(d.D, {
                              className: p.w8,
                              tabIndex: H ?? 0,
                              onClick: B,
                              "aria-label": y ?? g.intl.string(g.t.X4IxWL),
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
function I(e) {
    let { size: t, mediaLayoutType: n, alt: r } = e;
    return (0, i.jsxs)("div", {
        className: p.x5,
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
                    return { ...S(e), display: "flex" };
                default:
                    return e;
            }
        })(t, n),
        children: [
            (0, i.jsx)("div", {
                className: p.QM,
                children: (0, i.jsx)(o, { alt: r ?? g.intl.string(g.t.X4IxWL), height: "auto" }),
            }),
            (0, i.jsx)(_.E, {
                className: p.b4,
                variant: "text-sm/medium",
                color: "text-subtle",
                children: g.intl.string(g.t.sAfT1K),
            }),
        ],
    });
}
function T(e, t) {
    switch (t) {
        case f.dG.MOSAIC:
            return {
                display: "block",
                objectFit: "cover",
                minWidth: "100%",
                minHeight: "100%",
                maxWidth: 1 === (0, E.A)() ? "calc(100% + 1px)" : "100%",
            };
        case f.dG.RESPONSIVE:
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
