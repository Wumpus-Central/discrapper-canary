n.d(t, {
    d: () => g,
    w: () => _,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(435371),
    o = n(397927),
    l = n(573435),
    c = n(263577),
    u = n(662010),
    d = n(985018),
    f = n(541567);
let p = {
    none: void 0,
    default: f.cH,
    crunchyroll: a()(f.cH, f.sl),
};
var _ = (function (e) {
    return (e.SIZE_60 = "size-60"), (e.SIZE_72 = "size-72"), (e.SIZE_100 = "size-100"), e;
})({});
let h = {
    "size-60": {
        imageSize: 60,
        smallImageSize: 24,
        mask: l.hW.CONTENT_IMAGE_60,
    },
    "size-72": {
        imageSize: 72,
        smallImageSize: 32,
        mask: l.hW.CONTENT_IMAGE_72,
    },
    "size-100": {
        imageSize: 100,
        smallImageSize: 32,
        mask: l.hW.CONTENT_IMAGE_100,
    },
};

function m(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(o.DUT, {
              onClick: n,
              className: f.vk,
              children: t,
          });
}

function g(e) {
    var t, n, i;
    let { image: o, smallImage: _, aspectRatio: g, onClick: E, size: b, className: y } = e,
        { imageSize: O, smallImageSize: A, mask: v } = h[b];
    if (null == o)
        return (0, r.jsx)(c.V, {
            src: void 0,
            alt: d.intl.string(d.t["2B/phM"]),
            size: O,
            className: a()(f.fO, p[null != g ? g : "default"], y),
            constrain: "width",
        });
    let S = (0, r.jsx)(c.V, {
        src: o.src,
        alt: null != (t = null != (n = o.alt) ? n : o.text) ? t : d.intl.string(d.t["2B/phM"]),
        size: O,
        className: a()(f.fO, p[null != g ? g : "default"]),
        constrain: "width",
    });
    return (0, r.jsxs)("div", {
        className: a()(f.B_, y),
        children: [
            (0, r.jsx)(m, {
                onClick: E,
                children: (0, r.jsx)(u.O, {
                    href: o.url,
                    children:
                        null != _
                            ? (0, r.jsx)(s.m_, {
                                  text: o.text,
                                  asContainer: !0,
                                  children: (0, r.jsx)(l.Ay, {
                                      className: f.ZS,
                                      mask: v,
                                      width: O,
                                      height: O,
                                      children: S,
                                  }),
                              })
                            : (0, r.jsx)(s.m_, {
                                  text: o.text,
                                  children: (0, r.jsx)("div", {
                                      className: f.ZS,
                                      children: S,
                                  }),
                              }),
                }),
            }),
            null != _ &&
                (0, r.jsx)(u.O, {
                    href: _.url,
                    children: (0, r.jsx)(s.m_, {
                        text: _.text,
                        children: (0, r.jsx)("div", {
                            className: f.gn,
                            children: (0, r.jsx)(c.V, {
                                src: _.src,
                                alt: null != (i = _.alt) ? i : _.text,
                                size: A,
                                className: f.fO,
                                constrain: "width",
                            }),
                        }),
                    }),
                }),
        ],
    });
}
