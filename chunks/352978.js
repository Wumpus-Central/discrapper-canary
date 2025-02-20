n.d(t, {
    L: () => f,
    Z: () => m
}),
    n(47120);
var r,
    l = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    c = n(763520),
    u = n(153066),
    d = n(270840),
    f = (((r = {}).CONTAIN = 'contain'), (r.COVER = 'cover'), r);
let m = i.memo(function (e) {
    let { streamId: t, onResize: n, wrapperClassName: r, videoComponent: a, className: f, fit: m = 'contain', mirror: p = !1, paused: h = !1, streamPreviewURL: v, videoSpinnerContext: g, userId: b } = e,
        [y, E] = i.useState(!0),
        [O] = i.useState(() => new c.o('VideoStream'));
    i.useEffect(() => {
        h || (y ? O.onSpinnerStarted() : null != t && O.trackSpinnerDuration(g, b, t));
    }, [y, h, t, O, g, b]);
    let S = i.useCallback(() => {
        E(!1);
    }, []);
    return (0, l.jsxs)('div', {
        className: o()(d.wrapper, r),
        children: [
            null != t &&
                (0, l.jsx)(a, {
                    className: o()(d.video, (0, u.l)(d, 'video', m), { [d.mirror]: p }, f),
                    streamId: t,
                    onResize: n,
                    onReady: S,
                    paused: h
                }),
            h
                ? null
                : (0, l.jsx)('div', {
                      className: o()(d.previewWrapper, { [d.loading]: y }),
                      children:
                          y &&
                          (0, l.jsxs)(i.Fragment, {
                              children: [
                                  null != v
                                      ? (0, l.jsx)('img', {
                                            src: v,
                                            alt: '',
                                            className: d.previewImage
                                        })
                                      : (0, l.jsx)('div', {
                                            className: d.emptyPreviewWrapper,
                                            children: (0, l.jsx)('div', { className: d.emptyPreview })
                                        }),
                                  (0, l.jsx)(s.$jN, { className: d.spinner })
                              ]
                          })
                  })
        ]
    });
});
