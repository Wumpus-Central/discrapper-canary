"use strict";
n.d(t, { d: () => A, w: () => p });
var l,
    i = n(477900);
n(582128);
var s = n(503698),
    r = n.n(s),
    a = n(939249),
    o = n(866665),
    u = n(573435),
    c = n(263577),
    d = n(662010),
    h = n(375708),
    m = n(578666);
let f = { none: void 0, default: m.cH, crunchyroll: r()(m.cH, m.sl) };
var p = (((l = {}).SIZE_60 = "size-60"), (l.SIZE_72 = "size-72"), (l.SIZE_100 = "size-100"), l);
let g = {
    "size-60": { imageSize: 60, smallImageSize: 24, mask: u.hW.CONTENT_IMAGE_60 },
    "size-72": { imageSize: 72, smallImageSize: 32, mask: u.hW.CONTENT_IMAGE_72 },
    "size-100": { imageSize: 100, smallImageSize: 32, mask: u.hW.CONTENT_IMAGE_100 },
};
function x(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, i.jsx)(a.D, { onClick: n, className: m.vk, children: t });
}
function A(e) {
    let { image: t, smallImage: n, aspectRatio: l, onClick: s, size: a, className: p } = e,
        { imageSize: A, smallImageSize: E, mask: C } = g[a];
    if (null == t)
        return (0, i.jsx)(c.V, {
            src: void 0,
            alt: h.intl.string(h.t["2B/phM"]),
            size: A,
            className: r()(m.fO, f[l ?? "default"], p),
            constrain: "width",
        });
    let I = (0, i.jsx)(c.V, {
        src: t.src,
        alt: t.alt ?? t.text ?? h.intl.string(h.t["2B/phM"]),
        size: A,
        className: r()(m.fO, f[l ?? "default"]),
        constrain: "width",
    });
    return (0, i.jsxs)("div", {
        className: r()(m.B_, p),
        children: [
            (0, i.jsx)(x, {
                onClick: s,
                children: (0, i.jsx)(d.O, {
                    href: t.url,
                    children:
                        null != n
                            ? (0, i.jsx)(o.m, {
                                  text: t.text,
                                  children: (0, i.jsx)(u.Ay, {
                                      className: m.ZS,
                                      mask: C,
                                      width: A,
                                      height: A,
                                      children: I,
                                  }),
                              })
                            : (0, i.jsx)(o.m, {
                                  text: t.text,
                                  children: (0, i.jsx)("div", { className: m.ZS, children: I }),
                              }),
                }),
            }),
            null != n &&
                (0, i.jsx)(d.O, {
                    href: n.url,
                    children: (0, i.jsx)(o.m, {
                        text: n.text,
                        children: (0, i.jsx)("div", {
                            className: m.gn,
                            children: (0, i.jsx)(c.V, {
                                src: n.src,
                                alt: n.alt ?? n.text,
                                size: E,
                                className: m.fO,
                                constrain: "width",
                            }),
                        }),
                    }),
                }),
        ],
    });
}
