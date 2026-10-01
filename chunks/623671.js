n.d(e, { d: () => _, w: () => g });
var l,
    i = n(477900);
n(582128);
var a = n(503698),
    r = n.n(a),
    s = n(939249),
    o = n(866665),
    c = n(573435),
    u = n(263577),
    d = n(662010),
    A = n(375708),
    f = n(978253);
let p = { none: void 0, default: f.cH, crunchyroll: r()(f.cH, f.sl) };
var g = (((l = {}).SIZE_60 = "size-60"), (l.SIZE_72 = "size-72"), (l.SIZE_100 = "size-100"), l);
let m = {
    "size-60": { imageSize: 60, smallImageSize: 24, mask: c.hW.CONTENT_IMAGE_60 },
    "size-72": { imageSize: 72, smallImageSize: 32, mask: c.hW.CONTENT_IMAGE_72 },
    "size-100": { imageSize: 100, smallImageSize: 32, mask: c.hW.CONTENT_IMAGE_100 },
};
function x(t) {
    let { children: e, onClick: n } = t;
    return null == n ? e : (0, i.jsx)(s.D, { onClick: n, className: f.vk, children: e });
}
function _(t) {
    let { image: e, smallImage: n, aspectRatio: l, onClick: a, size: s, className: g } = t,
        { imageSize: _, smallImageSize: I, mask: N } = m[s];
    if (null == e)
        return (0, i.jsx)(u.V, {
            src: void 0,
            alt: A.intl.string(A.t["2B/phM"]),
            size: _,
            className: r()(f.fO, p[l ?? "default"], g),
            constrain: "width",
        });
    let E = (0, i.jsx)(u.V, {
        src: e.src,
        alt: e.alt ?? e.text ?? A.intl.string(A.t["2B/phM"]),
        size: _,
        className: r()(f.fO, p[l ?? "default"]),
        constrain: "width",
    });
    return (0, i.jsxs)("div", {
        className: r()(f.B_, g),
        children: [
            (0, i.jsx)(x, {
                onClick: a,
                children: (0, i.jsx)(d.O, {
                    href: e.url,
                    children:
                        null != n
                            ? (0, i.jsx)(o.m, {
                                  text: e.text,
                                  children: (0, i.jsx)(c.Ay, {
                                      className: f.ZS,
                                      mask: N,
                                      width: _,
                                      height: _,
                                      children: E,
                                  }),
                              })
                            : (0, i.jsx)(o.m, {
                                  text: e.text,
                                  children: (0, i.jsx)("div", { className: f.ZS, children: E }),
                              }),
                }),
            }),
            null != n &&
                (0, i.jsx)("div", {
                    className: f.Mw,
                    children: (0, i.jsx)(d.O, {
                        href: n.url,
                        children: (0, i.jsx)(o.m, {
                            text: n.text,
                            children: (0, i.jsx)("div", {
                                className: f.gn,
                                children: (0, i.jsx)(u.V, {
                                    src: n.src,
                                    alt: n.alt ?? n.text,
                                    size: I,
                                    className: f.fO,
                                    constrain: "width",
                                }),
                            }),
                        }),
                    }),
                }),
        ],
    });
}
