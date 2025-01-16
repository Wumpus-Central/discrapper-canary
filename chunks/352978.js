n.d(t, {
    L: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    a = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(481060),
    u = n(763520),
    d = n(153066),
    m = n(435315);
((l = i || (i = {})).CONTAIN = 'contain'), (l.COVER = 'cover');
let f = r.memo(function (e) {
    let { streamId: t, onResize: n, wrapperClassName: i, videoComponent: l, className: s, fit: f = 'contain', mirror: p = !1, paused: h = !1, streamPreviewURL: g, videoSpinnerContext: v, userId: S } = e,
        [I, _] = r.useState(!0),
        [x] = r.useState(() => new u.o('VideoStream'));
    r.useEffect(() => {
        !h && (I ? x.onSpinnerStarted() : null != t && x.trackSpinnerDuration(v, S, t));
    }, [I, h, t, x, v, S]);
    let E = r.useCallback(() => {
        _(!1);
    }, []);
    return (0, a.jsxs)('div', {
        className: o()(m.wrapper, i),
        children: [
            null != t &&
                (0, a.jsx)(l, {
                    className: o()(m.video, (0, d.l)(m, 'video', f), { [m.mirror]: p }, s),
                    streamId: t,
                    onResize: n,
                    onReady: E,
                    paused: h
                }),
            h
                ? null
                : (0, a.jsx)('div', {
                      className: o()(m.previewWrapper, { [m.loading]: I }),
                      children:
                          I &&
                          (0, a.jsxs)(r.Fragment, {
                              children: [
                                  null != g
                                      ? (0, a.jsx)('img', {
                                            src: g,
                                            alt: '',
                                            className: m.previewImage
                                        })
                                      : (0, a.jsx)('div', {
                                            className: m.emptyPreviewWrapper,
                                            children: (0, a.jsx)('div', { className: m.emptyPreview })
                                        }),
                                  (0, a.jsx)(c.Spinner, { className: m.spinner })
                              ]
                          })
                  })
        ]
    });
});
t.Z = f;
