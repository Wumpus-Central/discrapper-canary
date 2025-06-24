n.d(t, {
    L: () => m,
    Z: () => p
}),
    n(388685);
var r,
    l = n(255367),
    i = n(73800),
    a = n(120356),
    u = n.n(a),
    o = n(481060),
    s = n(885524),
    c = n(38755),
    d = n(153066),
    f = n(106209),
    m = (((r = {}).CONTAIN = 'contain'), (r.COVER = 'cover'), r);
let p = i.memo(function (e) {
    let { streamId: t, onResize: n, wrapperClassName: r, videoComponent: a, className: m, fit: p = 'contain', mirror: E = !1, paused: g = !1, streamPreviewURL: h, videoSpinnerContext: S, userId: O, streamKey: v } = e,
        [b, I] = i.useState(!0);
    (0, c.Z)({
        location: 'VideoStream',
        videoSpinnerContext: S,
        userId: O,
        streamId: t,
        loading: b,
        paused: g
    });
    let { onReady: _ } = (0, s.Z)({
            streamId: t,
            userId: O,
            loading: b,
            videoSpinnerContext: S,
            streamKey: v,
            paused: g
        }),
        y = i.useCallback(() => {
            I(!1), _();
        }, [_]);
    return (0, l.jsxs)('div', {
        className: u()(f.wrapper, r),
        children: [
            null != t &&
                (0, l.jsx)(a, {
                    className: u()(f.video, (0, d.l)(f, 'video', p), { [f.mirror]: E }, m),
                    streamId: t,
                    onResize: n,
                    onReady: y,
                    paused: g
                }),
            g
                ? null
                : (0, l.jsx)('div', {
                      className: u()(f.previewWrapper, { [f.loading]: b }),
                      children:
                          b &&
                          (0, l.jsxs)(i.Fragment, {
                              children: [
                                  null != h
                                      ? (0, l.jsx)('img', {
                                            src: h,
                                            alt: '',
                                            className: f.previewImage
                                        })
                                      : (0, l.jsx)('div', {
                                            className: f.emptyPreviewWrapper,
                                            children: (0, l.jsx)('div', { className: f.emptyPreview })
                                        }),
                                  (0, l.jsx)(o.$jN, { className: f.spinner })
                              ]
                          })
                  })
        ]
    });
});
