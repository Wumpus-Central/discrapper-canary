r.d(n, {
    E: function () {
        return m;
    },
    J: function () {
        return i;
    }
});
var i,
    a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(686546),
    c = r(442550),
    d = r(388032),
    f = r(684033);
let p = {
    none: void 0,
    default: f.aspectRatio,
    crunchyroll: s()(f.aspectRatio, f.crunchyroll)
};
!(function (e) {
    (e.SIZE_60 = 'size-60'), (e.SIZE_72 = 'size-72');
})(i || (i = {}));
let h = {
    'size-60': {
        imageSize: 60,
        smallImageSize: 24,
        mask: u.QS.CONTENT_IMAGE_60
    },
    'size-72': {
        imageSize: 72,
        smallImageSize: 32,
        mask: u.QS.CONTENT_IMAGE_72
    }
};
function _(e) {
    let { children: n, onClick: r } = e;
    return null == r
        ? (0, a.jsx)(a.Fragment, { children: n })
        : (0, a.jsx)(l.Clickable, {
              onClick: r,
              className: f.clickable,
              children: n
          });
}
function m(e) {
    var n, r;
    let { image: i, smallImage: o, aspectRatio: m, onClick: g, size: E, className: v } = e,
        { imageSize: y, smallImageSize: b, mask: I } = h[E];
    if (null == i)
        return (0, a.jsx)(c.f, {
            src: void 0,
            alt: d.intl.string(d.t['2B/phI']),
            size: y,
            className: s()(f.contentImage, p[null != m ? m : 'default'], v),
            constrain: 'width'
        });
    let T = (0, a.jsx)(c.f, {
        src: i.src,
        alt: null !== (r = null !== (n = i.alt) && void 0 !== n ? n : i.text) && void 0 !== r ? r : d.intl.string(d.t['2B/phI']),
        size: y,
        className: s()(f.contentImage, p[null != m ? m : 'default']),
        constrain: 'width'
    });
    return (0, a.jsxs)('div', {
        className: s()(f.imagePosition, v),
        children: [
            (0, a.jsx)(l.Tooltip, {
                text: i.text,
                children: (e) =>
                    (0, a.jsx)(_, {
                        onClick: g,
                        children:
                            null != o
                                ? (0, a.jsx)(u.ZP, {
                                      ...e,
                                      className: f.imageContainer,
                                      mask: I,
                                      width: y,
                                      height: y,
                                      children: T
                                  })
                                : (0, a.jsx)('div', {
                                      ...e,
                                      className: f.imageContainer,
                                      children: T
                                  })
                    })
            }),
            null != o &&
                (0, a.jsx)(l.Tooltip, {
                    text: o.text,
                    children: (e) => {
                        var n;
                        return (0, a.jsx)('div', {
                            ...e,
                            className: f.smallImageContainer,
                            children: (0, a.jsx)(c.f, {
                                src: o.src,
                                alt: null !== (n = o.alt) && void 0 !== n ? n : o.text,
                                size: b,
                                className: f.contentImage,
                                constrain: 'width'
                            })
                        });
                    }
                })
        ]
    });
}
