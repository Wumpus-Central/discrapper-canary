n.d(t, { $: () => x, A: () => v });
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(289873),
    d = n(205693),
    c = n(451988),
    u = n(684339),
    _ = n(276208),
    f = n(927813),
    m = n(37965);
let p = 20 * f.A.Millis.SECOND;
var g = n(821589),
    h = n(473772),
    x = (((i = {}).CONTAIN = "contain"), (i.COVER = "cover"), i);
let v = a.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: i,
            videoComponent: r,
            className: f,
            fit: x = "contain",
            mirror: v = !1,
            paused: A = !1,
            streamPreviewURL: I,
            videoSpinnerContext: C,
            userId: E,
            streamKey: j,
        } = e,
        [b, N] = a.useState(!0);
    !(function (e) {
        let { location: t, videoSpinnerContext: n, userId: i, streamId: l, loading: r, paused: s = !1 } = e,
            [o] = a.useState(() => new u.M(t));
        a.useEffect(() => {
            s || (r ? o.onSpinnerStarted() : null != l && o.trackSpinnerDuration(n, i, l));
        }, [r, s, l, o, n, i]);
    })({ location: "VideoStream", videoSpinnerContext: C, userId: E, streamId: t, loading: b, paused: A });
    let { onReady: S } = (function (e) {
            let { streamId: t, userId: n, videoSpinnerContext: i, streamKey: l, loading: r, paused: s = !1 } = e,
                o = a.useRef(new c.Ep()),
                f = i === u.u.SELF_STREAM || i === u.u.REMOTE_STREAM ? d.x.STREAM : d.x.DEFAULT;
            return (
                a.useEffect(() => {
                    if (!r || s || !_.X.isIncomingVideoEnabled()) return;
                    let e = o.current;
                    return (
                        e.start(p, () => {
                            (0, m.Z)(t, n, f, l);
                        }),
                        () => {
                            e.stop();
                        }
                    );
                }, [s, t, r, f, l, n]),
                {
                    onReady: a.useCallback(() => {
                        o.current.stop(), (0, m.W)(f, n);
                    }, [n, f]),
                }
            );
        })({ streamId: t, userId: E, loading: b, videoSpinnerContext: C, streamKey: j, paused: A }),
        y = a.useCallback(() => {
            N(!1), S();
        }, [S]);
    return (0, l.jsxs)("div", {
        className: s()(h.wrapper, i),
        children: [
            null != t &&
                (0, l.jsx)(r, {
                    className: s()(h.video, (0, g.t)(h, "video", x), { [h.mirror]: v }, f),
                    streamId: t,
                    onResize: n,
                    onReady: y,
                    paused: A,
                }),
            A
                ? null
                : (0, l.jsx)("div", {
                      className: s()(h.previewWrapper, { [h.loading]: b }),
                      children:
                          b &&
                          (0, l.jsxs)(a.Fragment, {
                              children: [
                                  null != I
                                      ? (0, l.jsx)("img", { src: I, alt: "", className: h.previewImage })
                                      : (0, l.jsx)("div", {
                                            className: h.emptyPreviewWrapper,
                                            children: (0, l.jsx)("div", { className: h.emptyPreview }),
                                        }),
                                  (0, l.jsx)(o.y, { className: h.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
