a.d(t, { _: () => p });
var l = a(627968),
    r = a(64700),
    s = a(503698),
    n = a.n(s),
    i = a(203653),
    d = a(187322),
    u = a(939249),
    o = a(834730),
    c = a(264927),
    m = a(515718),
    f = a(835517),
    h = a(649658),
    _ = a(652215),
    g = a(838541),
    v = a(985018),
    E = a(503117);
let p = r.forwardRef((e, t) => {
    var a, s, i, o;
    let f,
        {
            className: p,
            imageClassName: T,
            readyState: R = _.Rv1.READY,
            src: w,
            placeholder: N,
            placeholderVersion: L,
            alt: S,
            width: I,
            height: C,
            maxWidth: b = I,
            maxHeight: j = C,
            minWidth: M = 0,
            minHeight: y = 0,
            mediaLayoutType: H,
            limitResponsiveWidth: k = !0,
            accessory: q,
            zoomable: O = !0,
            original: Q,
            children: D = (e) => {
                let { src: t, size: a, alt: r, className: s, mediaLayoutType: n } = e;
                return (0, l.jsx)("img", {
                    className: s ?? void 0,
                    alt: r ?? v.intl.string(v.t.X4IxWL),
                    src: t,
                    style: A(a, n),
                });
            },
            renderAccessory: P,
            onClick: W,
            tabIndex: V,
            dataSafeSrc: U,
            useFullWidth: G = !1,
            srcIsAnimated: F,
            disableLoadingSpinner: Y = !1,
            ...$
        } = e,
        z = r.useRef(null),
        X = r.useRef(null);
    if (1 === I && 1 === C) return null;
    let B = (0, m.Uj)({ width: I, height: C, maxWidth: b, maxHeight: j, minWidth: M, minHeight: y }),
        K = 0 !== B.width ? B.width / B.height : 1;
    "" !== w && R !== _.Rv1.ERROR
        ? (f = D({ src: w, size: B, alt: S, className: T, mediaLayoutType: H }))
        : R !== _.Rv1.LOADING && (f = (0, l.jsx)(x, { size: B, mediaLayoutType: H, alt: S })),
        (f = (0, l.jsx)(h.y, {
            disableSpinner: Y,
            readyState: R,
            aspectRatio: K,
            placeholder: N,
            placeholderVersion: L,
            placeholderStyle: A(B, H),
            children: f,
        }));
    let J = null != P ? P() : null;
    return (
        (J = J ?? q),
        (0, l.jsx)(d.vN, {
            ringTarget: z,
            focusTarget: X,
            children: (0, l.jsxs)("div", {
                ref: t,
                className: n()("imageWrapper", E.h4, { [E.j3]: O, [E.LF]: R !== _.Rv1.READY, [E.vk]: null != W }, p),
                style:
                    ((a = B),
                    (s = k),
                    (i = G),
                    (o = H) === g.dG.MOSAIC
                        ? {
                              display: "block",
                              maxHeight: "inherit",
                              margin: "auto",
                              width: i ? "100%" : a.width,
                              height: "100%",
                          }
                        : o === g.dG.RESPONSIVE
                          ? { maxWidth: s ? a.width : void 0, width: "100%", aspectRatio: `${a.width} / ${a.height}` }
                          : a),
                ...$,
                children: [
                    null != Q &&
                        (0, l.jsx)("a", {
                            tabIndex: -1,
                            onClick: W,
                            "aria-hidden": !0,
                            className: E.mt,
                            href: Q,
                            ref: z,
                            "data-role": "img",
                            "data-safe-src": U ?? w,
                        }),
                    null != W
                        ? (0, l.jsx)(u.D, {
                              className: E.w8,
                              tabIndex: V ?? 0,
                              onClick: W,
                              "aria-label": S ?? v.intl.string(v.t.X4IxWL),
                              "aria-describedby": c.l2,
                              innerRef: X,
                              focusProps: { enabled: !1 },
                              children: f,
                          })
                        : f,
                    null != J ? (0, l.jsx)("div", { className: E.mQ, children: J }) : null,
                ],
            }),
        })
    );
});
function x(e) {
    let { size: t, mediaLayoutType: a, alt: r } = e;
    return (0, l.jsxs)("div", {
        className: E.x5,
        style: (function (e, t) {
            switch (t) {
                case g.dG.MOSAIC:
                    return {
                        width: "100%",
                        height: "100%",
                        aspectRatio: `${e.width} / ${e.height}`,
                        display: "flex",
                        maxHeight: "inherit",
                    };
                case g.dG.RESPONSIVE:
                    return { ...T(e), display: "flex" };
                default:
                    return e;
            }
        })(t, a),
        children: [
            (0, l.jsx)("div", {
                className: E.QM,
                children: (0, l.jsx)(i.K, { alt: r ?? v.intl.string(v.t.X4IxWL), height: "auto" }),
            }),
            (0, l.jsx)(o.E, {
                className: E.b4,
                variant: "text-sm/medium",
                color: "text-subtle",
                children: v.intl.string(v.t.sAfT1K),
            }),
        ],
    });
}
function A(e, t) {
    switch (t) {
        case g.dG.MOSAIC:
            return {
                display: "block",
                objectFit: "cover",
                minWidth: "100%",
                minHeight: "100%",
                maxWidth: 1 === (0, f.A)() ? "calc(100% + 1px)" : "100%",
            };
        case g.dG.RESPONSIVE:
            return T(e);
        default:
            return e;
    }
}
function T(e) {
    let { width: t, height: a } = e;
    return { maxWidth: t, maxHeight: a, width: "100%", display: "block", aspectRatio: `${t} / ${a}` };
}
p.displayName = "Image";
