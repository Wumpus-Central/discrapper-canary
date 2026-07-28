"use strict";
n.d(t, { d: () => p, w: () => h });
var i,
    r = n(477900);
n(582128);
var a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(866665),
    d = n(573435),
    c = n(263577),
    u = n(662010),
    _ = n(375708),
    E = n(578666);
let A = { none: void 0, default: E.cH, crunchyroll: s()(E.cH, E.sl) };
var h = (((i = {}).SIZE_60 = "size-60"), (i.SIZE_72 = "size-72"), (i.SIZE_100 = "size-100"), i);
let I = {
    "size-60": { imageSize: 60, smallImageSize: 24, mask: d.hW.CONTENT_IMAGE_60 },
    "size-72": { imageSize: 72, smallImageSize: 32, mask: d.hW.CONTENT_IMAGE_72 },
    "size-100": { imageSize: 100, smallImageSize: 32, mask: d.hW.CONTENT_IMAGE_100 },
};
function f(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, r.jsx)(l.D, { onClick: n, className: E.vk, children: t });
}
function p(e) {
    let { image: t, smallImage: n, aspectRatio: i, onClick: a, size: l, className: h } = e,
        { imageSize: p, smallImageSize: T, mask: m } = I[l];
    if (null == t)
        return (0, r.jsx)(c.V, {
            src: void 0,
            alt: _.intl.string(_.t["2B/phM"]),
            size: p,
            className: s()(E.fO, A[i ?? "default"], h),
            constrain: "width",
        });
    let g = (0, r.jsx)(c.V, {
        src: t.src,
        alt: t.alt ?? t.text ?? _.intl.string(_.t["2B/phM"]),
        size: p,
        className: s()(E.fO, A[i ?? "default"]),
        constrain: "width",
    });
    return (0, r.jsxs)("div", {
        className: s()(E.B_, h),
        children: [
            (0, r.jsx)(f, {
                onClick: a,
                children: (0, r.jsx)(u.O, {
                    href: t.url,
                    children:
                        null != n
                            ? (0, r.jsx)(o.m, {
                                  text: t.text,
                                  children: (0, r.jsx)(d.Ay, {
                                      className: E.ZS,
                                      mask: m,
                                      width: p,
                                      height: p,
                                      children: g,
                                  }),
                              })
                            : (0, r.jsx)(o.m, {
                                  text: t.text,
                                  children: (0, r.jsx)("div", { className: E.ZS, children: g }),
                              }),
                }),
            }),
            null != n &&
                (0, r.jsx)(u.O, {
                    href: n.url,
                    children: (0, r.jsx)(o.m, {
                        text: n.text,
                        children: (0, r.jsx)("div", {
                            className: E.gn,
                            children: (0, r.jsx)(c.V, {
                                src: n.src,
                                alt: n.alt ?? n.text,
                                size: T,
                                className: E.fO,
                                constrain: "width",
                            }),
                        }),
                    }),
                }),
        ],
    });
}
