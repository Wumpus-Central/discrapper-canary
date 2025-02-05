n.d(t, {
    L: () => m,
    Z: () => f
}),
    n(47120);
var l,
    i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    u = n(763520),
    c = n(153066),
    d = n(435315),
    m = (((l = {}).CONTAIN = 'contain'), (l.COVER = 'cover'), l);
let f = r.memo(function (e) {
    let { streamId: t, onResize: n, wrapperClassName: l, videoComponent: a, className: m, fit: f = 'contain', mirror: h = !1, paused: p = !1, streamPreviewURL: v, videoSpinnerContext: g, userId: E } = e,
        [Z, x] = r.useState(!0),
        [S] = r.useState(() => new u.o('VideoStream'));
    r.useEffect(() => {
        p || (Z ? S.onSpinnerStarted() : null != t && S.trackSpinnerDuration(g, E, t));
    }, [Z, p, t, S, g, E]);
    let C = r.useCallback(() => {
        x(!1);
    }, []);
    return (0, i.jsxs)('div', {
        className: s()(d.wrapper, l),
        children: [
            null != t &&
                (0, i.jsx)(a, {
                    className: s()(d.video, (0, c.l)(d, 'video', f), { [d.mirror]: h }, m),
                    streamId: t,
                    onResize: n,
                    onReady: C,
                    paused: p
                }),
            p
                ? null
                : (0, i.jsx)('div', {
                      className: s()(d.previewWrapper, { [d.loading]: Z }),
                      children:
                          Z &&
                          (0, i.jsxs)(r.Fragment, {
                              children: [
                                  null != v
                                      ? (0, i.jsx)('img', {
                                            src: v,
                                            alt: '',
                                            className: d.previewImage
                                        })
                                      : (0, i.jsx)('div', {
                                            className: d.emptyPreviewWrapper,
                                            children: (0, i.jsx)('div', { className: d.emptyPreview })
                                        }),
                                  (0, i.jsx)(o.$jN, { className: d.spinner })
                              ]
                          })
                  })
        ]
    });
});
