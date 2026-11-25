var l,
    i = e(477900);
e(582128);
var a = e(503698),
    r = e.n(a),
    s = e(939249),
    o = e(866665),
    c = e(573435),
    u = e(263577),
    d = e(662010),
    A = e(792996),
    x = e(978253);
let m = { none: void 0, default: x.cH, crunchyroll: r()(x.cH, x.sl) };
var f = (((l = {}).SIZE_60 = "size-60"), (l.SIZE_72 = "size-72"), (l.SIZE_100 = "size-100"), l);
let g = {
    "size-60": { imageSize: 60, smallImageSize: 24, mask: c.hW.CONTENT_IMAGE_60 },
    "size-72": { imageSize: 72, smallImageSize: 32, mask: c.hW.CONTENT_IMAGE_72 },
    "size-100": { imageSize: 100, smallImageSize: 32, mask: c.hW.CONTENT_IMAGE_100 },
};
function p(t) {
    let { children: n, onClick: e } = t;
    return null == e ? n : (0, i.jsx)(s.D, { onClick: e, className: x.vk, children: n });
}
e.d(
    n,
    {},
    {
        d: function (t) {
            let { image: n, smallImage: e, aspectRatio: l, onClick: a, size: s, className: f } = t,
                { imageSize: _, smallImageSize: I, mask: E } = g[s];
            if (null == n)
                return (0, i.jsx)(u.V, {
                    src: void 0,
                    alt: A.intl.string(A.t["2B/phM"]),
                    size: _,
                    className: r()(x.fO, m[l ?? "default"], f),
                    constrain: "width",
                });
            let T = (0, i.jsx)(u.V, {
                src: n.src,
                alt: n.alt ?? n.text ?? A.intl.string(A.t["2B/phM"]),
                size: _,
                className: r()(x.fO, m[l ?? "default"]),
                constrain: "width",
            });
            return (0, i.jsxs)("div", {
                className: r()(x.B_, f),
                children: [
                    (0, i.jsx)(p, {
                        onClick: a,
                        children: (0, i.jsx)(d.O, {
                            href: n.url,
                            children:
                                null != e
                                    ? (0, i.jsx)(o.m, {
                                          text: n.text,
                                          children: (0, i.jsx)(c.Ay, {
                                              className: x.ZS,
                                              mask: E,
                                              width: _,
                                              height: _,
                                              children: T,
                                          }),
                                      })
                                    : (0, i.jsx)(o.m, {
                                          text: n.text,
                                          children: (0, i.jsx)("div", { className: x.ZS, children: T }),
                                      }),
                        }),
                    }),
                    null != e &&
                        (0, i.jsx)("div", {
                            className: x.Mw,
                            children: (0, i.jsx)(d.O, {
                                href: e.url,
                                children: (0, i.jsx)(o.m, {
                                    text: e.text,
                                    children: (0, i.jsx)("div", {
                                        className: x.gn,
                                        children: (0, i.jsx)(u.V, {
                                            src: e.src,
                                            alt: e.alt ?? e.text,
                                            size: I,
                                            className: x.fO,
                                            constrain: "width",
                                        }),
                                    }),
                                }),
                            }),
                        }),
                ],
            });
        },
        w: f,
    },
);
