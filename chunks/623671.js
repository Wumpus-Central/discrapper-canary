"use strict";
n.d(t, { d: () => x, w: () => f });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(939249),
    c = n(573435),
    u = n(263577),
    d = n(662010),
    h = n(985018),
    m = n(230482);
let p = { none: void 0, default: m.cH, crunchyroll: r()(m.cH, m.sl) };
var f = (((i = {}).SIZE_60 = "size-60"), (i.SIZE_72 = "size-72"), (i.SIZE_100 = "size-100"), i);
let g = {
    "size-60": { imageSize: 60, smallImageSize: 24, mask: c.hW.CONTENT_IMAGE_60 },
    "size-72": { imageSize: 72, smallImageSize: 32, mask: c.hW.CONTENT_IMAGE_72 },
    "size-100": { imageSize: 100, smallImageSize: 32, mask: c.hW.CONTENT_IMAGE_100 },
};
function _(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(o.D, { onClick: n, className: m.vk, children: t });
}
function x(e) {
    let { image: t, smallImage: n, aspectRatio: i, onClick: s, size: o, className: f } = e,
        { imageSize: x, smallImageSize: A, mask: C } = g[o];
    if (null == t)
        return (0, l.jsx)(u.V, {
            src: void 0,
            alt: h.intl.string(h.t["2B/phM"]),
            size: x,
            className: r()(m.fO, p[i ?? "default"], f),
            constrain: "width",
        });
    let E = (0, l.jsx)(u.V, {
        src: t.src,
        alt: t.alt ?? t.text ?? h.intl.string(h.t["2B/phM"]),
        size: x,
        className: r()(m.fO, p[i ?? "default"]),
        constrain: "width",
    });
    return (0, l.jsxs)("div", {
        className: r()(m.B_, f),
        children: [
            (0, l.jsx)(_, {
                onClick: s,
                children: (0, l.jsx)(d.O, {
                    href: t.url,
                    children:
                        null != n
                            ? (0, l.jsx)(a.m, {
                                  text: t.text,
                                  children: (0, l.jsx)(c.Ay, {
                                      className: m.ZS,
                                      mask: C,
                                      width: x,
                                      height: x,
                                      children: E,
                                  }),
                              })
                            : (0, l.jsx)(a.m, {
                                  text: t.text,
                                  children: (0, l.jsx)("div", { className: m.ZS, children: E }),
                              }),
                }),
            }),
            null != n &&
                (0, l.jsx)(d.O, {
                    href: n.url,
                    children: (0, l.jsx)(a.m, {
                        text: n.text,
                        children: (0, l.jsx)("div", {
                            className: m.gn,
                            children: (0, l.jsx)(u.V, {
                                src: n.src,
                                alt: n.alt ?? n.text,
                                size: A,
                                className: m.fO,
                                constrain: "width",
                            }),
                        }),
                    }),
                }),
        ],
    });
}
