n.d(t, {
    E: () => b,
    J: () => m
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(686546),
    l = n(442550),
    c = n(388032),
    u = n(393113);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {
    none: void 0,
    default: u.aspectRatio,
    crunchyroll: o()(u.aspectRatio, u.crunchyroll)
};
var m = (function (e) {
    return (e.SIZE_60 = 'size-60'), (e.SIZE_72 = 'size-72'), e;
})({});
let g = {
    'size-60': {
        imageSize: 60,
        smallImageSize: 24,
        mask: s.QS.CONTENT_IMAGE_60
    },
    'size-72': {
        imageSize: 72,
        smallImageSize: 32,
        mask: s.QS.CONTENT_IMAGE_72
    }
};
function E(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(a.P3F, {
              onClick: n,
              className: u.clickable,
              children: t
          });
}
function b(e) {
    var t, n;
    let { image: i, smallImage: d, aspectRatio: _, onClick: m, size: b, className: y } = e,
        { imageSize: v, smallImageSize: O, mask: I } = g[b];
    if (null == i)
        return (0, r.jsx)(l.f, {
            src: void 0,
            alt: c.NW.string(c.t['2B/phI']),
            size: v,
            className: o()(u.contentImage, h[null != _ ? _ : 'default'], y),
            constrain: 'width'
        });
    let S = (0, r.jsx)(l.f, {
        src: i.src,
        alt: null != (n = null != (t = i.alt) ? t : i.text) ? n : c.NW.string(c.t['2B/phI']),
        size: v,
        className: o()(u.contentImage, h[null != _ ? _ : 'default']),
        constrain: 'width'
    });
    return (0, r.jsxs)('div', {
        className: o()(u.imagePosition, y),
        children: [
            (0, r.jsx)(a.ua7, {
                text: i.text,
                children: (e) =>
                    (0, r.jsx)(E, {
                        onClick: m,
                        children:
                            null != d
                                ? (0, r.jsx)(
                                      s.ZP,
                                      p(f({}, e), {
                                          className: u.imageContainer,
                                          mask: I,
                                          width: v,
                                          height: v,
                                          children: S
                                      })
                                  )
                                : (0, r.jsx)(
                                      'div',
                                      p(f({}, e), {
                                          className: u.imageContainer,
                                          children: S
                                      })
                                  )
                    })
            }),
            null != d &&
                (0, r.jsx)(a.ua7, {
                    text: d.text,
                    children: (e) => {
                        var t;
                        return (0, r.jsx)(
                            'div',
                            p(f({}, e), {
                                className: u.smallImageContainer,
                                children: (0, r.jsx)(l.f, {
                                    src: d.src,
                                    alt: null != (t = d.alt) ? t : d.text,
                                    size: O,
                                    className: u.contentImage,
                                    constrain: 'width'
                                })
                            })
                        );
                    }
                })
        ]
    });
}
