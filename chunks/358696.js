n.d(t, {
    E: () => h,
    J: () => f
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(686546),
    l = n(442550),
    u = n(388032),
    c = n(445956);
let d = {
    none: void 0,
    default: c.aspectRatio,
    crunchyroll: a()(c.aspectRatio, c.crunchyroll)
};
var f = (function (e) {
    return (e.SIZE_60 = 'size-60'), (e.SIZE_72 = 'size-72'), e;
})({});
let _ = {
    'size-60': {
        imageSize: 60,
        smallImageSize: 24,
        mask: o.QS.CONTENT_IMAGE_60
    },
    'size-72': {
        imageSize: 72,
        smallImageSize: 32,
        mask: o.QS.CONTENT_IMAGE_72
    }
};
function p(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, i.jsx)(i.Fragment, { children: t })
        : (0, i.jsx)(s.P3F, {
              onClick: n,
              className: c.clickable,
              children: t
          });
}
function h(e) {
    var t, n;
    let { image: r, smallImage: f, aspectRatio: h, onClick: m, size: g, className: E } = e,
        { imageSize: v, smallImageSize: y, mask: I } = _[g];
    if (null == r)
        return (0, i.jsx)(l.f, {
            src: void 0,
            alt: u.intl.string(u.t['2B/phI']),
            size: v,
            className: a()(c.contentImage, d[null != h ? h : 'default'], E),
            constrain: 'width'
        });
    let T = (0, i.jsx)(l.f, {
        src: r.src,
        alt: null !== (n = null !== (t = r.alt) && void 0 !== t ? t : r.text) && void 0 !== n ? n : u.intl.string(u.t['2B/phI']),
        size: v,
        className: a()(c.contentImage, d[null != h ? h : 'default']),
        constrain: 'width'
    });
    return (0, i.jsxs)('div', {
        className: a()(c.imagePosition, E),
        children: [
            (0, i.jsx)(s.ua7, {
                text: r.text,
                children: (e) =>
                    (0, i.jsx)(p, {
                        onClick: m,
                        children:
                            null != f
                                ? (0, i.jsx)(o.ZP, {
                                      ...e,
                                      className: c.imageContainer,
                                      mask: I,
                                      width: v,
                                      height: v,
                                      children: T
                                  })
                                : (0, i.jsx)('div', {
                                      ...e,
                                      className: c.imageContainer,
                                      children: T
                                  })
                    })
            }),
            null != f &&
                (0, i.jsx)(s.ua7, {
                    text: f.text,
                    children: (e) => {
                        var t;
                        return (0, i.jsx)('div', {
                            ...e,
                            className: c.smallImageContainer,
                            children: (0, i.jsx)(l.f, {
                                src: f.src,
                                alt: null !== (t = f.alt) && void 0 !== t ? t : f.text,
                                size: y,
                                className: c.contentImage,
                                constrain: 'width'
                            })
                        });
                    }
                })
        ]
    });
}
