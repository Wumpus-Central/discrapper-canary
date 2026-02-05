"use strict";
n.d(t, { d: () => g, w: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(435371),
    o = n(397927),
    l = n(573435),
    u = n(263577),
    c = n(662010),
    d = n(985018),
    _ = n(541567);
let f = { none: void 0, default: _.cH, crunchyroll: a()(_.cH, _.sl) };
var p = (function (e) {
    return (e.SIZE_60 = "size-60"), (e.SIZE_72 = "size-72"), (e.SIZE_100 = "size-100"), e;
})({});
let h = {
    "size-60": { imageSize: 60, smallImageSize: 24, mask: l.hW.CONTENT_IMAGE_60 },
    "size-72": { imageSize: 72, smallImageSize: 32, mask: l.hW.CONTENT_IMAGE_72 },
    "size-100": { imageSize: 100, smallImageSize: 32, mask: l.hW.CONTENT_IMAGE_100 },
};
function m(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, r.jsx)(o.DUT, { onClick: n, className: _.vk, children: t });
}
function g(e) {
    let { image: t, smallImage: n, aspectRatio: i, onClick: o, size: p, className: g } = e,
        { imageSize: E, smallImageSize: A, mask: I } = h[p];
    if (null == t)
        return (0, r.jsx)(u.V, {
            src: void 0,
            alt: d.intl.string(d.t["2B/phM"]),
            size: E,
            className: a()(_.fO, f[i ?? "default"], g),
            constrain: "width",
        });
    let T = (0, r.jsx)(u.V, {
        src: t.src,
        alt: t.alt ?? t.text ?? d.intl.string(d.t["2B/phM"]),
        size: E,
        className: a()(_.fO, f[i ?? "default"]),
        constrain: "width",
    });
    return (0, r.jsxs)("div", {
        className: a()(_.B_, g),
        children: [
            (0, r.jsx)(m, {
                onClick: o,
                children: (0, r.jsx)(c.O, {
                    href: t.url,
                    children:
                        null != n
                            ? (0, r.jsx)(s.m_, {
                                  text: t.text,
                                  asContainer: !0,
                                  children: (0, r.jsx)(l.Ay, {
                                      className: _.ZS,
                                      mask: I,
                                      width: E,
                                      height: E,
                                      children: T,
                                  }),
                              })
                            : (0, r.jsx)(s.m_, {
                                  text: t.text,
                                  children: (0, r.jsx)("div", { className: _.ZS, children: T }),
                              }),
                }),
            }),
            null != n &&
                (0, r.jsx)(c.O, {
                    href: n.url,
                    children: (0, r.jsx)(s.m_, {
                        text: n.text,
                        children: (0, r.jsx)("div", {
                            className: _.gn,
                            children: (0, r.jsx)(u.V, {
                                src: n.src,
                                alt: n.alt ?? n.text,
                                size: A,
                                className: _.fO,
                                constrain: "width",
                            }),
                        }),
                    }),
                }),
        ],
    });
}
