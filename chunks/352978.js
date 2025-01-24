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
        [I, x] = a.useState(!0),
        [_] = a.useState(() => new u.o('VideoStream'));
    a.useEffect(() => {
        !h && (I ? _.onSpinnerStarted() : null != t && _.trackSpinnerDuration(v, S, t));
    }, [I, h, t, _, v, S]);
    let C = a.useCallback(() => {
        x(!1);
    }, []);
    return (0, r.jsxs)('div', {
        className: o()(m.wrapper, i),
        children: [
            null != t &&
                (0, r.jsx)(l, {
                    className: o()(m.video, (0, d.l)(m, 'video', f), { [m.mirror]: p }, s),
                    streamId: t,
                    onResize: n,
                    onReady: C,
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
