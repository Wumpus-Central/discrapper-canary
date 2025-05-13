n.d(t, {
    L: () => p,
    Z: () => m
}),
    n(388685);
var r,
    l = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    u = n(481060),
    s = n(885524),
    c = n(38755),
    d = n(153066),
    f = n(106209),
    p = (((r = {}).CONTAIN = 'contain'), (r.COVER = 'cover'), r);
let m = i.memo(function (e) {
    let { streamId: t, onResize: n, wrapperClassName: r, videoComponent: a, className: p, fit: m = 'contain', mirror: g = !1, paused: E = !1, streamPreviewURL: h, videoSpinnerContext: v, userId: S, streamKey: b } = e,
        [O, y] = i.useState(!0);
    (0, c.Z)({
        location: 'VideoStream',
        videoSpinnerContext: v,
        userId: S,
        streamId: t,
        loading: O,
        paused: E
    });
    let { onReady: Z } = (0, s.Z)({
            streamId: t,
            userId: S,
            loading: O,
            videoSpinnerContext: v,
            streamKey: b,
            paused: E
        }),
        j = i.useCallback(() => {
            y(!1), Z();
        }, [Z]);
    return (0, l.jsxs)('div', {
        className: o()(f.wrapper, r),
        children: [
            null != t &&
                (0, l.jsx)(a, {
                    className: o()(f.video, (0, d.l)(f, 'video', m), { [f.mirror]: g }, p),
                    streamId: t,
                    onResize: n,
                    onReady: j,
                    paused: E
                }),
            E
                ? null
                : (0, l.jsx)('div', {
                      className: o()(f.previewWrapper, { [f.loading]: O }),
                      children:
                          O &&
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
                                  (0, l.jsx)(u.$jN, { className: f.spinner })
                              ]
                          })
                  })
        ]
    });
});
