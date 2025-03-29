n.d(t, {
    L: () => v,
    Z: () => g
}),
    n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(46973),
    c = n(846519),
    u = n(481060),
    d = n(763520),
    f = n(878001),
    m = n(70956),
    p = n(153066),
    h = n(293106),
    v = (((r = {}).CONTAIN = 'contain'), (r.COVER = 'cover'), r);
let b = 20 * m.Z.Millis.SECOND,
    g = l.memo(function (e) {
        let { streamId: t, onResize: n, wrapperClassName: r, videoComponent: o, className: m, fit: v = 'contain', mirror: g = !1, paused: E = !1, streamPreviewURL: y, videoSpinnerContext: O, userId: S, streamKey: x } = e,
            [j, w] = l.useState(!0),
            [Z] = l.useState(() => new d.o('VideoStream')),
            C = l.useRef(new c.V7()),
            P = O === d.m.SELF_STREAM || O === d.m.REMOTE_STREAM ? s.Yn.STREAM : s.Yn.DEFAULT;
        l.useEffect(() => {
            if (E || null == t) return;
            let e = C.current;
            return (
                e.start(b, () => {
                    (0, f.K)(t, S, P, x);
                }),
                () => {
                    e.stop();
                }
            );
        }, [E, t, P, x, S]),
            l.useEffect(() => {
                E || (j ? Z.onSpinnerStarted() : null != t && Z.trackSpinnerDuration(O, S, t));
            }, [j, E, t, Z, O, S]);
        let N = l.useCallback(() => {
            w(!1), C.current.stop(), (0, f.w)(P, S);
        }, [S, P]);
        return (0, i.jsxs)('div', {
            className: a()(h.wrapper, r),
            children: [
                null != t &&
                    (0, i.jsx)(o, {
                        className: a()(h.video, (0, p.l)(h, 'video', v), { [h.mirror]: g }, m),
                        streamId: t,
                        onResize: n,
                        onReady: N,
                        paused: E
                    }),
                E
                    ? null
                    : (0, i.jsx)('div', {
                          className: a()(h.previewWrapper, { [h.loading]: j }),
                          children:
                              j &&
                              (0, i.jsxs)(l.Fragment, {
                                  children: [
                                      null != y
                                          ? (0, i.jsx)('img', {
                                                src: y,
                                                alt: '',
                                                className: h.previewImage
                                            })
                                          : (0, i.jsx)('div', {
                                                className: h.emptyPreviewWrapper,
                                                children: (0, i.jsx)('div', { className: h.emptyPreview })
                                            }),
                                      (0, i.jsx)(u.$jN, { className: h.spinner })
                                  ]
                              })
                      })
            ]
        });
    });
