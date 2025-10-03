n.d(t, {
    E: () => g,
    J: () => p,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(686546),
    c = n(442550),
    u = n(264832),
    d = n(388032),
    f = n(255332);
let _ = {
    none: void 0,
    default: f.aspectRatio,
    crunchyroll: a()(f.aspectRatio, f.crunchyroll),
};
var p = (function (e) {
    return (e.SIZE_60 = "size-60"), (e.SIZE_72 = "size-72"), (e.SIZE_100 = "size-100"), e;
})({});
let h = {
    "size-60": {
        imageSize: 60,
        smallImageSize: 24,
        mask: l.QS.CONTENT_IMAGE_60,
    },
    "size-72": {
        imageSize: 72,
        smallImageSize: 32,
        mask: l.QS.CONTENT_IMAGE_72,
    },
    "size-100": {
        imageSize: 100,
        smallImageSize: 32,
        mask: l.QS.CONTENT_IMAGE_100,
    },
};
function m(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(s.P3F, {
              onClick: n,
              className: f.clickable,
              children: t,
          });
}
function g(e) {
    var t, n, i;
    let { image: s, smallImage: p, aspectRatio: g, onClick: E, size: b, className: y } = e,
        { imageSize: O, smallImageSize: v, mask: I } = h[b];
    if (null == s)
        return (0, r.jsx)(c.f, {
            src: void 0,
            alt: d.intl.string(d.t["2B/phI"]),
            size: O,
            className: a()(f.contentImage, _[null != g ? g : "default"], y),
            constrain: "width",
        });
    let T = (0, r.jsx)(c.f, {
        src: s.src,
        alt: null != (n = null != (t = s.alt) ? t : s.text) ? n : d.intl.string(d.t["2B/phI"]),
        size: O,
        className: a()(f.contentImage, _[null != g ? g : "default"]),
        constrain: "width",
    });
    return (0, r.jsxs)("div", {
        className: a()(f.imagePosition, y),
        children: [
            (0, r.jsx)(o.u, {
                text: s.text,
                children: (0, r.jsx)(m, {
                    onClick: E,
                    children: (0, r.jsx)(u._, {
                        href: s.url,
                        children:
                            null != p
                                ? (0, r.jsx)(l.ZP, {
                                      className: f.imageContainer,
                                      mask: I,
                                      width: O,
                                      height: O,
                                      children: T,
                                  })
                                : (0, r.jsx)("div", {
                                      className: f.imageContainer,
                                      children: T,
                                  }),
                    }),
                }),
            }),
            null != p &&
                (0, r.jsx)(o.u, {
                    text: p.text,
                    children: (0, r.jsx)(u._, {
                        href: p.url,
                        children: (0, r.jsx)("div", {
                            className: f.smallImageContainer,
                            children: (0, r.jsx)(c.f, {
                                src: p.src,
                                alt: null != (i = p.alt) ? i : p.text,
                                size: v,
                                className: f.contentImage,
                                constrain: "width",
                            }),
                        }),
                    }),
                }),
        ],
    });
}
