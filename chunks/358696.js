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
var s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(686546),
    c = r(442550),
    d = r(388032),
    f = r(684033);
let _ = {
    none: void 0,
    default: f.aspectRatio,
    crunchyroll: o()(f.aspectRatio, f.crunchyroll)
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
function p(e) {
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
    let { image: i, smallImage: s, aspectRatio: m, onClick: g, size: E, className: v } = e,
        { imageSize: I, smallImageSize: T, mask: b } = h[E];
    if (null == i)
        return (0, a.jsx)(c.f, {
            src: void 0,
            alt: d.intl.string(d.t['2B/phI']),
            size: I,
            className: o()(f.contentImage, _[null != m ? m : 'default'], v),
            constrain: 'width'
        });
    let y = (0, a.jsx)(c.f, {
        src: i.src,
        alt: null !== (r = null !== (n = i.alt) && void 0 !== n ? n : i.text) && void 0 !== r ? r : d.intl.string(d.t['2B/phI']),
        size: I,
        className: o()(f.contentImage, _[null != m ? m : 'default']),
        constrain: 'width'
    });
    return (0, a.jsxs)('div', {
        className: o()(f.imagePosition, v),
        children: [
            (0, a.jsx)(l.Tooltip, {
                text: i.text,
                children: (e) =>
                    (0, a.jsx)(p, {
                        onClick: g,
                        children:
                            null != s
                                ? (0, a.jsx)(u.ZP, {
                                      ...e,
                                      className: f.imageContainer,
                                      mask: b,
                                      width: I,
                                      height: I,
                                      children: y
                                  })
                                : (0, a.jsx)('div', {
                                      ...e,
                                      className: f.imageContainer,
                                      children: y
                                  })
                    })
            }),
            null != s &&
                (0, a.jsx)(l.Tooltip, {
                    text: s.text,
                    children: (e) => {
                        var n;
                        return (0, a.jsx)('div', {
                            ...e,
                            className: f.smallImageContainer,
                            children: (0, a.jsx)(c.f, {
                                src: s.src,
                                alt: null !== (n = s.alt) && void 0 !== n ? n : s.text,
                                size: T,
                                className: f.contentImage,
                                constrain: 'width'
                            })
                        });
                    }
                })
        ]
    });
}
