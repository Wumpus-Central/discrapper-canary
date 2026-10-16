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
    p = n(927813),
    g = n(37965);
let x = 20 * p.A.Millis.SECOND;
var f = n(821589),
    h = n(950183),
    A = (((i = {}).CONTAIN = "contain"), (i.COVER = "cover"), (i.COVER_LANDSCAPE = "cover-landscape"), i);
let v = s.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: i,
            videoComponent: r,
            className: p,
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
        [y, T] = s.useState(null),
        L = s.useCallback(
            (e) => {
                ("cover-landscape" === A && T(e), n?.(e));
            },
            [A, n],
        ),
        R = "cover-landscape" === A ? (null == y || y.width >= y.height ? "cover" : "contain") : A;
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
                p = i === d.u.SELF_STREAM || i === d.u.REMOTE_STREAM ? u.x.STREAM : u.x.DEFAULT;
            return (
                s.useEffect(() => {
                    if (!r || a || !m.X.isIncomingVideoEnabled()) return;
                    let e = o.current;
                    return (
                        e.start(x, () => {
                            (0, g.Z)(t, n, p, l);
                        }),
                        () => {
                            e.stop();
                        }
                    );
                }, [a, t, r, p, l, n]),
                {
                    onReady: s.useCallback(() => {
                        (o.current.stop(), (0, g.W)(p, n));
                    }, [n, p]),
                }
            );
        })({ streamId: t, userId: I, loading: N, videoSpinnerContext: j, streamKey: S, paused: E }),
        k = s.useCallback(() => {
            (b(!1), D());
        }, [D]);
    return (0, l.jsxs)("div", {
        className: a()(h.wrapper, i),
        children: [
            null != t &&
                (0, l.jsx)(r, {
                    className: a()(h.video, (0, f.t)(h, "video", R), { [h.mirror]: v }, p),
                    streamId: t,
                    onResize: L,
                    onReady: k,
                    paused: E,
                }),
            E
                ? null
                : (0, l.jsx)("div", {
                      className: a()(h.previewWrapper, { [h.loading]: N }),
                      children:
                          N &&
                          (0, l.jsxs)(s.Fragment, {
                              children: [
                                  null != C
                                      ? (0, l.jsx)("img", { src: C, alt: "", className: h.previewImage })
                                      : (0, l.jsx)("div", {
                                            className: h.emptyPreviewWrapper,
                                            style: { aspectRatio: _ },
                                            children: (0, l.jsx)("div", { className: h.emptyPreview }),
                                        }),
                                  (0, l.jsx)(o.y, { className: h.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
