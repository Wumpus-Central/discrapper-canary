n.d(t, {
    L: () => m,
    Z: () => f
}),
    n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(481060),
    c = n(763520),
    u = n(153066),
    d = n(435315),
    m = (((i = {}).CONTAIN = 'contain'), (i.COVER = 'cover'), i);
let f = a.memo(function (e) {
    let { streamId: t, onResize: n, wrapperClassName: i, videoComponent: r, className: m, fit: f = 'contain', mirror: p = !1, paused: h = !1, streamPreviewURL: g, videoSpinnerContext: v, userId: _ } = e,
        [I, S] = a.useState(!0),
        [x] = a.useState(() => new c.o('VideoStream'));
    a.useEffect(() => {
        h || (I ? x.onSpinnerStarted() : null != t && x.trackSpinnerDuration(v, _, t));
    }, [I, h, t, x, v, _]);
    let E = a.useCallback(() => {
        S(!1);
    }, []);
    return (0, l.jsxs)('div', {
        className: s()(d.wrapper, i),
        children: [
            null != t &&
                (0, l.jsx)(r, {
                    className: s()(d.video, (0, u.l)(d, 'video', f), { [d.mirror]: p }, m),
                    streamId: t,
                    onResize: n,
                    onReady: E,
                    paused: h
                }),
            h
                ? null
                : (0, l.jsx)('div', {
                      className: s()(d.previewWrapper, { [d.loading]: I }),
                      children:
                          I &&
                          (0, l.jsxs)(a.Fragment, {
                              children: [
                                  null != g
                                      ? (0, l.jsx)('img', {
                                            src: g,
                                            alt: '',
                                            className: d.previewImage
                                        })
                                      : (0, l.jsx)('div', {
                                            className: d.emptyPreviewWrapper,
                                            children: (0, l.jsx)('div', { className: d.emptyPreview })
                                        }),
                                  (0, l.jsx)(o.$jN, { className: d.spinner })
                              ]
                          })
                  })
        ]
    });
});
