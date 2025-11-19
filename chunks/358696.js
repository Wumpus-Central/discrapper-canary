n.d(t, {
    E: () => y,
    J: () => g,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(686546),
    l = n(442550),
    c = n(264832),
    u = n(388032),
    d = n(867075);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = {
    none: void 0,
    default: d.aspectRatio,
    crunchyroll: a()(d.aspectRatio, d.crunchyroll),
};
var g = (function (e) {
    return (e.SIZE_60 = "size-60"), (e.SIZE_72 = "size-72"), (e.SIZE_100 = "size-100"), e;
})({});
let E = {
    "size-60": {
        imageSize: 60,
        smallImageSize: 24,
        mask: s.QS.CONTENT_IMAGE_60,
    },
    "size-72": {
        imageSize: 72,
        smallImageSize: 32,
        mask: s.QS.CONTENT_IMAGE_72,
    },
    "size-100": {
        imageSize: 100,
        smallImageSize: 32,
        mask: s.QS.CONTENT_IMAGE_100,
    },
};
function b(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(o.P3F, {
              onClick: n,
              className: d.clickable,
              children: t,
          });
}
function y(e) {
    var t, n;
    let { image: i, smallImage: f, aspectRatio: p, onClick: g, size: y, className: O } = e,
        { imageSize: v, smallImageSize: I, mask: T } = E[y];
    if (null == i)
        return (0, r.jsx)(l.f, {
            src: void 0,
            alt: u.intl.string(u.t["2B/phM"]),
            size: v,
            className: a()(d.contentImage, m[null != p ? p : "default"], O),
            constrain: "width",
        });
    let S = (0, r.jsx)(l.f, {
        src: i.src,
        alt: null != (n = null != (t = i.alt) ? t : i.text) ? n : u.intl.string(u.t["2B/phM"]),
        size: v,
        className: a()(d.contentImage, m[null != p ? p : "default"]),
        constrain: "width",
    });
    return (0, r.jsxs)("div", {
        className: a()(d.imagePosition, O),
        children: [
            (0, r.jsx)(o.aML, {
                "data-migration-pending": !0,
                text: i.text,
                children: (e) =>
                    (0, r.jsx)(b, {
                        onClick: g,
                        children: (0, r.jsx)(c._, {
                            href: i.url,
                            children:
                                null != f
                                    ? (0, r.jsx)(
                                          s.ZP,
                                          h(_({}, e), {
                                              className: d.imageContainer,
                                              mask: T,
                                              width: v,
                                              height: v,
                                              children: S,
                                          }),
                                      )
                                    : (0, r.jsx)(
                                          "div",
                                          h(_({}, e), {
                                              className: d.imageContainer,
                                              children: S,
                                          }),
                                      ),
                        }),
                    }),
            }),
            null != f &&
                (0, r.jsx)(o.aML, {
                    "data-migration-pending": !0,
                    text: f.text,
                    children: (e) => {
                        var t;
                        return (0, r.jsx)(c._, {
                            href: f.url,
                            children: (0, r.jsx)(
                                "div",
                                h(_({}, e), {
                                    className: d.smallImageContainer,
                                    children: (0, r.jsx)(l.f, {
                                        src: f.src,
                                        alt: null != (t = f.alt) ? t : f.text,
                                        size: I,
                                        className: d.contentImage,
                                        constrain: "width",
                                    }),
                                }),
                            ),
                        });
                    },
                }),
        ],
    });
}
