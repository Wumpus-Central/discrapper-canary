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
    f = e(978253);
let g = { none: void 0, default: f.cH, crunchyroll: r()(f.cH, f.sl) };
var m = (((l = {}).SIZE_60 = "size-60"), (l.SIZE_72 = "size-72"), (l.SIZE_100 = "size-100"), l);
let p = {
    "size-60": { imageSize: 60, smallImageSize: 24, mask: c.hW.CONTENT_IMAGE_60 },
    "size-72": { imageSize: 72, smallImageSize: 32, mask: c.hW.CONTENT_IMAGE_72 },
    "size-100": { imageSize: 100, smallImageSize: 32, mask: c.hW.CONTENT_IMAGE_100 },
};
function x(t) {
    let { children: n, onClick: e } = t;
    return null == e ? n : (0, i.jsx)(s.D, { onClick: e, className: f.vk, children: n });
}
e.d(
    n,
    {},
    {
        d: function (t) {
            let { image: n, smallImage: e, aspectRatio: l, onClick: a, size: s, className: m } = t,
                { imageSize: I, smallImageSize: _, mask: N } = p[s];
            if (null == n)
                return (0, i.jsx)(u.V, {
                    src: void 0,
                    alt: A.intl.string(A.t["2B/phM"]),
                    size: I,
                    className: r()(f.fO, g[l ?? "default"], m),
                    constrain: "width",
                });
            let E = (0, i.jsx)(u.V, {
                src: n.src,
                alt: n.alt ?? n.text ?? A.intl.string(A.t["2B/phM"]),
                size: I,
                className: r()(f.fO, g[l ?? "default"]),
                constrain: "width",
            });
            return (0, i.jsxs)("div", {
                className: r()(f.B_, m),
                children: [
                    (0, i.jsx)(x, {
                        onClick: a,
                        children: (0, i.jsx)(d.O, {
                            href: n.url,
                            children:
                                null != e
                                    ? (0, i.jsx)(o.m, {
                                          text: n.text,
                                          children: (0, i.jsx)(c.Ay, {
                                              className: f.ZS,
                                              mask: N,
                                              width: I,
                                              height: I,
                                              children: E,
                                          }),
                                      })
                                    : (0, i.jsx)(o.m, {
                                          text: n.text,
                                          children: (0, i.jsx)("div", { className: f.ZS, children: E }),
                                      }),
                        }),
                    }),
                    null != e &&
                        (0, i.jsx)("div", {
                            className: f.Mw,
                            children: (0, i.jsx)(d.O, {
                                href: e.url,
                                children: (0, i.jsx)(o.m, {
                                    text: e.text,
                                    children: (0, i.jsx)("div", {
                                        className: f.gn,
                                        children: (0, i.jsx)(u.V, {
                                            src: e.src,
                                            alt: e.alt ?? e.text,
                                            size: _,
                                            className: f.fO,
                                            constrain: "width",
                                        }),
                                    }),
                                }),
                            }),
                        }),
                ],
            });
        },
        w: m,
    },
);
