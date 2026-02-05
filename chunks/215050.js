"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(775602),
    u = n(930125),
    c = n(282108),
    d = n(619517),
    _ = n(644447),
    f = n(608214),
    p = n(838541),
    h = n(985018),
    m = n(142724);
let g = 40;
function E(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
function A(e) {
    return "IMAGE" === e.type
        ? (0, _.E)({ proxyURL: e.proxyUrl, url: e.url })
        : "VIDEO" === e.type && null != e.proxyUrl
          ? (0, f.VZ)(e.proxyUrl)
          : null;
}
function I(e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        i = A(t);
    return null == i
        ? null
        : (0, c.qo)({ type: u.D.GenericMedia, media: t }, n)
          ? (0, r.jsx)(o.BJc, {
                align: "center",
                justify: "center",
                className: m.cd,
                style: { width: g, height: g },
                children: (0, r.jsx)(o.DAq, { size: "sm", color: "white" }),
            })
          : (0, r.jsx)(d.Ay, {
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
let T = i.memo(I);
function y(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: a, className: u, enabledContentHarmTypeFlags: c } = e,
        d = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = document.getElementById(E(n));
            null != d.current &&
                null != e &&
                d.current.scrollIntoViewNode({ node: e, animate: !l.A.useReducedMotion, padding: g / 2 });
        }, [n]),
        (0, r.jsx)("div", {
            className: s()(m.IL, u),
            children: (0, r.jsx)(o.ChK, {
                orientation: "horizontal",
                className: s()(m.nV, u),
                ref: d,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, i) => {
                    let l = i === n,
                        u = l ? h.t["qv/U5V"] : h.t.zviMAG;
                    return (0, r.jsx)(
                        o.DUT,
                        {
                            id: E(i),
                            className: s()(m.Qq, { [m.AD]: !l, [m.$1]: 0 === i, [m.HV]: i === t.length - 1 }),
                            "aria-label": h.intl.formatToPlainString(u, { pageNumber: i + 1, totalPages: t.length }),
                            onClick: () => a(i),
                            children: (0, r.jsx)(T, { item: e, enabledContentHarmTypeFlags: c }),
                        },
                        i,
                    );
                }),
            }),
        })
    );
}
