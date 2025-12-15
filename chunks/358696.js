n.d(t, {
    E: () => g,
    J: () => _,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(681715),
    s = n(481060),
    l = n(686546),
    c = n(442550),
    u = n(264832),
    d = n(388032),
    f = n(503416);
let p = {
    none: void 0,
    default: f.aspectRatio,
    crunchyroll: a()(f.aspectRatio, f.crunchyroll),
};
var _ = (function (e) {
    return (e.SIZE_60 = "size-60"), (e.SIZE_72 = "size-72"), (e.SIZE_100 = "size-100"), e;
})({});
let m = {
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
function h(e) {
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
    let { image: s, smallImage: _, aspectRatio: g, onClick: E, size: b, className: y } = e,
        { imageSize: O, smallImageSize: v, mask: S } = m[b];
    if (null == s)
        return (0, r.jsx)(c.f, {
            src: void 0,
            alt: d.intl.string(d.t["2B/phM"]),
            size: O,
            className: a()(f.contentImage, p[null != g ? g : "default"], y),
            constrain: "width",
        });
    let I = (0, r.jsx)(c.f, {
        src: s.src,
        alt: null != (n = null != (t = s.alt) ? t : s.text) ? n : d.intl.string(d.t["2B/phM"]),
        size: O,
        className: a()(f.contentImage, p[null != g ? g : "default"]),
        constrain: "width",
    });
    return (0, r.jsxs)("div", {
        className: a()(f.imagePosition, y),
        children: [
            (0, r.jsx)(h, {
                onClick: E,
                children: (0, r.jsx)(u._, {
                    href: s.url,
                    children:
                        null != _
                            ? (0, r.jsx)(o.u, {
                                  text: s.text,
                                  asContainer: !0,
                                  children: (0, r.jsx)(l.ZP, {
                                      className: f.imageContainer,
                                      mask: S,
                                      width: O,
                                      height: O,
                                      children: I,
                                  }),
                              })
                            : (0, r.jsx)(o.u, {
                                  text: s.text,
                                  children: (0, r.jsx)("div", {
                                      className: f.imageContainer,
                                      children: I,
                                  }),
                              }),
                }),
            }),
            null != _ &&
                (0, r.jsx)(u._, {
                    href: _.url,
                    children: (0, r.jsx)(o.u, {
                        text: _.text,
                        children: (0, r.jsx)("div", {
                            className: f.smallImageContainer,
                            children: (0, r.jsx)(c.f, {
                                src: _.src,
                                alt: null != (i = _.alt) ? i : _.text,
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
