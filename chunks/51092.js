n.d(t, { $: () => A, A: () => v });
var i,
    l = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(289873),
    u = n(205693),
    c = n(451988),
    d = n(684339),
    m = n(276208),
    g = n(927813),
    p = n(37965);
let f = 20 * g.A.Millis.SECOND;
var h = n(821589),
    x = n(950183),
    A = (((i = {}).CONTAIN = "contain"), (i.COVER = "cover"), (i.COVER_LANDSCAPE = "cover-landscape"), i);
let v = s.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: i,
            videoComponent: r,
            className: g,
            fit: A = "contain",
            mirror: v = !1,
            paused: E = !1,
            streamPreviewURL: C,
            videoSpinnerContext: j,
            userId: I,
            streamKey: S,
            emptyPreviewAspectRatio: _ = "16 / 9",
        } = e,
        [N, b] = s.useState(!0),
        [y, R] = s.useState(null),
        T = s.useCallback(
            (e) => {
                ("cover-landscape" === A && R(e), n?.(e));
            },
            [A, n],
        ),
        L = "cover-landscape" === A ? (null == y || y.width >= y.height ? "cover" : "contain") : A;
    !(function (e) {
        let { location: t, videoSpinnerContext: n, userId: i, streamId: l, loading: r, paused: a = !1 } = e,
            [o] = s.useState(() => new d.M(t));
        s.useEffect(() => {
            a || (r ? o.onSpinnerStarted() : null != l && o.trackSpinnerDuration(n, i, l));
        }, [r, a, l, o, n, i]);
    })({ location: "VideoStream", videoSpinnerContext: j, userId: I, streamId: t, loading: N, paused: E });
    let { onReady: D } = (function (e) {
            let { streamId: t, userId: n, videoSpinnerContext: i, streamKey: l, loading: r, paused: a = !1 } = e,
                o = s.useRef(new c.Ep()),
                g = i === d.u.SELF_STREAM || i === d.u.REMOTE_STREAM ? u.x.STREAM : u.x.DEFAULT;
            return (
                s.useEffect(() => {
                    if (!r || a || !m.X.isIncomingVideoEnabled()) return;
                    let e = o.current;
                    return (
                        e.start(f, () => {
                            (0, p.Z)(t, n, g, l);
                        }),
                        () => {
                            e.stop();
                        }
                    );
                }, [a, t, r, g, l, n]),
                {
                    onReady: s.useCallback(() => {
                        (o.current.stop(), (0, p.W)(g, n));
                    }, [n, g]),
                }
            );
        })({ streamId: t, userId: I, loading: N, videoSpinnerContext: j, streamKey: S, paused: E }),
        k = s.useCallback(() => {
            (b(!1), D());
        }, [D]);
    return (0, l.jsxs)("div", {
        className: a()(x.wrapper, i),
        children: [
            null != t &&
                (0, l.jsx)(r, {
                    className: a()(x.video, (0, h.t)(x, "video", L), { [x.mirror]: v }, g),
                    streamId: t,
                    onResize: T,
                    onReady: k,
                    paused: E,
                }),
            E
                ? null
                : (0, l.jsx)("div", {
                      className: a()(x.previewWrapper, { [x.loading]: N }),
                      children:
                          N &&
                          (0, l.jsxs)(s.Fragment, {
                              children: [
                                  null != C
                                      ? (0, l.jsx)("img", { src: C, alt: "", className: x.previewImage })
                                      : (0, l.jsx)("div", {
                                            className: x.emptyPreviewWrapper,
                                            style: { aspectRatio: _ },
                                            children: (0, l.jsx)("div", { className: x.emptyPreview }),
                                        }),
                                  (0, l.jsx)(o.y, { className: x.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
