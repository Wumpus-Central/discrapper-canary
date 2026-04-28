"use strict";
n.d(t, { d: () => x, w: () => f });
var l,
    i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(939249),
    c = n(573435),
    u = n(263577),
    d = n(662010),
    h = n(985018),
    m = n(230482);
let p = { none: void 0, default: m.cH, crunchyroll: a()(m.cH, m.sl) };
var f = (((l = {}).SIZE_60 = "size-60"), (l.SIZE_72 = "size-72"), (l.SIZE_100 = "size-100"), l);
let g = {
    "size-60": { imageSize: 60, smallImageSize: 24, mask: c.hW.CONTENT_IMAGE_60 },
    "size-72": { imageSize: 72, smallImageSize: 32, mask: c.hW.CONTENT_IMAGE_72 },
    "size-100": { imageSize: 100, smallImageSize: 32, mask: c.hW.CONTENT_IMAGE_100 },
};
function _(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, i.jsx)(o.D, { onClick: n, className: m.vk, children: t });
}
function x(e) {
    let { image: t, smallImage: n, aspectRatio: l, onClick: s, size: o, className: f } = e,
        { imageSize: x, smallImageSize: C, mask: A } = g[o];
    if (null == t)
        return (0, i.jsx)(u.V, {
            src: void 0,
            alt: h.intl.string(h.t["2B/phM"]),
            size: x,
            className: a()(m.fO, p[l ?? "default"], f),
            constrain: "width",
        });
    let E = (0, i.jsx)(u.V, {
        src: t.src,
        alt: t.alt ?? t.text ?? h.intl.string(h.t["2B/phM"]),
        size: x,
        className: a()(m.fO, p[l ?? "default"]),
        constrain: "width",
    });
    return (0, i.jsxs)("div", {
        className: a()(m.B_, f),
        children: [
            (0, i.jsx)(_, {
                onClick: s,
                children: (0, i.jsx)(d.O, {
                    href: t.url,
                    children:
                        null != n
                            ? (0, i.jsx)(r.m, {
                                  text: t.text,
                                  children: (0, i.jsx)(c.Ay, {
                                      className: m.ZS,
                                      mask: A,
                                      width: x,
                                      height: x,
                                      children: E,
                                  }),
                              })
                            : (0, i.jsx)(r.m, {
                                  text: t.text,
                                  children: (0, i.jsx)("div", { className: m.ZS, children: E }),
                              }),
                }),
            }),
            null != n &&
                (0, i.jsx)(d.O, {
                    href: n.url,
                    children: (0, i.jsx)(r.m, {
                        text: n.text,
                        children: (0, i.jsx)("div", {
                            className: m.gn,
                            children: (0, i.jsx)(u.V, {
                                src: n.src,
                                alt: n.alt ?? n.text,
                                size: C,
                                className: m.fO,
                                constrain: "width",
                            }),
                        }),
                    }),
                }),
        ],
    });
}
