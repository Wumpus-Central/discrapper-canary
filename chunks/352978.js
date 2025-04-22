n.d(t, {
    L: () => m,
    Z: () => p
}),
    n(388685);
var r,
    l = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    u = n(885524),
    c = n(38755),
    d = n(153066),
    f = n(106209),
    m = (((r = {}).CONTAIN = 'contain'), (r.COVER = 'cover'), r);
let p = i.memo(function (e) {
    let { streamId: t, onResize: n, wrapperClassName: r, videoComponent: a, className: m, fit: p = 'contain', mirror: E = !1, paused: g = !1, streamPreviewURL: v, videoSpinnerContext: h, userId: S, streamKey: b } = e,
        [y, O] = i.useState(!0);
    (0, c.Z)({
        location: 'VideoStream',
        videoSpinnerContext: h,
        userId: S,
        streamId: t,
        loading: y,
        paused: g
    });
    let { onReady: Z } = (0, u.Z)({
            streamId: t,
            userId: S,
            loading: y,
            videoSpinnerContext: h,
            streamKey: b,
            paused: g
        }),
        j = i.useCallback(() => {
            O(!1), Z();
        }, [Z]);
    return (0, l.jsxs)('div', {
        className: o()(f.wrapper, r),
        children: [
            null != t &&
                (0, l.jsx)(a, {
                    className: o()(f.video, (0, d.l)(f, 'video', p), { [f.mirror]: E }, m),
                    streamId: t,
                    onResize: n,
                    onReady: j,
                    paused: g
                }),
            g
                ? null
                : (0, l.jsx)('div', {
                      className: o()(f.previewWrapper, { [f.loading]: y }),
                      children:
                          y &&
                          (0, l.jsxs)(i.Fragment, {
                              children: [
                                  null != v
                                      ? (0, l.jsx)('img', {
                                            src: v,
                                            alt: '',
                                            className: f.previewImage
                                        })
                                      : (0, l.jsx)('div', {
                                            className: f.emptyPreviewWrapper,
                                            children: (0, l.jsx)('div', { className: f.emptyPreview })
                                        }),
                                  (0, l.jsx)(s.$jN, { className: f.spinner })
                              ]
                          })
                  })
        ]
    });
});
