n.d(t, {
    L: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(481060),
    u = n(763520),
    d = n(153066),
    m = n(435315);
((l = i || (i = {})).CONTAIN = 'contain'), (l.COVER = 'cover');
let f = a.memo(function (e) {
    let { streamId: t, onResize: n, wrapperClassName: i, videoComponent: l, className: s, fit: f = 'contain', mirror: p = !1, paused: h = !1, streamPreviewURL: g, videoSpinnerContext: v, userId: S } = e,
        [I, _] = a.useState(!0),
        [x] = a.useState(() => new u.o('VideoStream'));
    a.useEffect(() => {
        !h && (I ? x.onSpinnerStarted() : null != t && x.trackSpinnerDuration(v, S, t));
    }, [I, h, t, x, v, S]);
    let E = a.useCallback(() => {
        _(!1);
    }, []);
    return (0, r.jsxs)('div', {
        className: o()(m.wrapper, i),
        children: [
            null != t &&
                (0, r.jsx)(l, {
                    className: o()(m.video, (0, d.l)(m, 'video', f), { [m.mirror]: p }, s),
                    streamId: t,
                    onResize: n,
                    onReady: E,
                    paused: h
                }),
            h
                ? null
                : (0, r.jsx)('div', {
                      className: o()(m.previewWrapper, { [m.loading]: I }),
                      children:
                          I &&
                          (0, r.jsxs)(a.Fragment, {
                              children: [
                                  null != g
                                      ? (0, r.jsx)('img', {
                                            src: g,
                                            alt: '',
                                            className: m.previewImage
                                        })
                                      : (0, r.jsx)('div', {
                                            className: m.emptyPreviewWrapper,
                                            children: (0, r.jsx)('div', { className: m.emptyPreview })
                                        }),
                                  (0, r.jsx)(c.Spinner, { className: m.spinner })
                              ]
                          })
                  })
        ]
    });
});
t.Z = f;
