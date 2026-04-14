"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(775602),
    u = n(607470),
    c = n(930125),
    d = n(282108),
    _ = n(619517),
    f = n(644447),
    h = n(608214),
    p = n(838541),
    m = n(985018),
    E = n(713737);
let g = 40;
function A(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
function I(e) {
    if ("IMAGE" === e.type) return (0, f.E)({ proxyURL: e.proxyUrl, url: e.url });
    if ("VIDEO" === e.type) {
        if (null != e.poster) return e.poster;
        if (null != e.proxyUrl) return (0, h.VZ)(e.proxyUrl);
    }
    return null;
}
function T(e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        i = I(t);
    return null == i && "VIDEO" === t.type
        ? (0, r.jsx)(u.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: g, height: g, objectFit: "cover" },
          })
        : null == i
          ? null
          : (0, d.qo)({ type: c.D.GenericMedia, media: t }, n)
            ? (0, r.jsx)(o.BJc, {
                  align: "center",
                  justify: "center",
                  className: E.cd,
                  style: { width: g, height: g },
                  children: (0, r.jsx)(o.DAq, { size: "sm", color: "white" }),
              })
            : (0, r.jsx)(_.Ay, {
                  width: t.width ?? g,
                  height: t.height ?? g,
                  maxWidth: g,
                  maxHeight: g,
                  useFullWidth: !0,
                  src: i,
                  shouldAnimate: !1,
                  shouldRenderAccessory: !1,
                  srcIsAnimated: t.srcIsAnimated,
                  alt: t.alt,
                  mediaLayoutType: p.dG.MOSAIC,
              });
}
let S = i.memo(T);
function y(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: s, className: u, enabledContentHarmTypeFlags: c } = e,
        d = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = document.getElementById(A(n));
            null != d.current &&
                null != e &&
                d.current.scrollIntoViewNode({ node: e, animate: !l.A.useReducedMotion, padding: g / 2 });
        }, [n]),
        (0, r.jsx)("div", {
            className: a()(E.IL, u),
            children: (0, r.jsx)(o.ChK, {
                orientation: "horizontal",
                className: a()(E.nV, u),
                ref: d,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, i) => {
                    let l = i === n,
                        u = l ? m.t["qv/U5V"] : m.t.zviMAG;
                    return (0, r.jsx)(
                        o.DUT,
                        {
                            id: A(i),
                            className: a()(E.Qq, { [E.AD]: !l, [E.$1]: 0 === i, [E.HV]: i === t.length - 1 }),
                            "aria-label": m.intl.formatToPlainString(u, { pageNumber: i + 1, totalPages: t.length }),
                            onClick: () => s(i),
                            children: (0, r.jsx)(S, { item: e, enabledContentHarmTypeFlags: c }),
                        },
                        i,
                    );
                }),
            }),
        })
    );
}
