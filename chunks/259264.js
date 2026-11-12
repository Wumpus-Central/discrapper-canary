n.d(t, { $: () => x, A: () => v });
var l,
    i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(289873),
    u = n(205693),
    c = n(451988),
    d = n(684339),
    m = n(590087),
    p = n(927813),
    g = n(37965);
let f = 20 * p.A.Millis.SECOND;
var h = n(821589),
    A = n(950183),
    x = (((l = {}).CONTAIN = "contain"), (l.COVER = "cover"), (l.COVER_LANDSCAPE = "cover-landscape"), l);
let v = s.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: l,
            videoComponent: r,
            className: p,
            fit: x = "contain",
            mirror: v = !1,
            paused: E = !1,
            streamPreviewURL: C,
            videoSpinnerContext: I,
            userId: j,
            streamKey: S,
            emptyPreviewAspectRatio: _ = "16 / 9",
        } = e,
        [b, N] = s.useState(!0),
        [y, R] = s.useState(null),
        T = s.useCallback(
            (e) => {
                ("cover-landscape" === x && R(e), n?.(e));
            },
            [x, n],
        ),
        L = "cover-landscape" === x ? (null == y || y.width >= y.height ? "cover" : "contain") : x;
    !(function (e) {
        let { location: t, videoSpinnerContext: n, userId: l, streamId: i, loading: r, paused: a = !1 } = e,
            [o] = s.useState(() => new d.M(t));
        s.useEffect(() => {
            a || (r ? o.onSpinnerStarted() : null != i && o.trackSpinnerDuration(n, l, i));
        }, [r, a, i, o, n, l]);
    })({ location: "VideoStream", videoSpinnerContext: I, userId: j, streamId: t, loading: b, paused: E });
    let { onReady: D } = (function (e) {
            let { streamId: t, userId: n, videoSpinnerContext: l, streamKey: i, loading: r, paused: a = !1 } = e,
                o = s.useRef(new c.Ep()),
                p = l === d.u.SELF_STREAM || l === d.u.REMOTE_STREAM ? u.x.STREAM : u.x.DEFAULT;
            return (
                s.useEffect(() => {
                    if (!r || a || !m.X.isIncomingVideoEnabled()) return;
                    let e = o.current;
                    return (
                        e.start(f, () => {
                            (0, g.Z)(t, n, p, i);
                        }),
                        () => {
                            e.stop();
                        }
                    );
                }, [a, t, r, p, i, n]),
                {
                    onReady: s.useCallback(() => {
                        (o.current.stop(), (0, g.W)(p, n));
                    }, [n, p]),
                }
            );
        })({ streamId: t, userId: j, loading: b, videoSpinnerContext: I, streamKey: S, paused: E }),
        k = s.useCallback(() => {
            (N(!1), D());
        }, [D]);
    return (0, i.jsxs)("div", {
        className: a()(A.wrapper, l),
        children: [
            null != t &&
                (0, i.jsx)(r, {
                    className: a()(A.video, (0, h.t)(A, "video", L), { [A.mirror]: v }, p),
                    streamId: t,
                    onResize: T,
                    onReady: k,
                    paused: E,
                }),
            E
                ? null
                : (0, i.jsx)("div", {
                      className: a()(A.previewWrapper, { [A.loading]: b }),
                      children:
                          b &&
                          (0, i.jsxs)(s.Fragment, {
                              children: [
                                  null != C
                                      ? (0, i.jsx)("img", { src: C, alt: "", className: A.previewImage })
                                      : (0, i.jsx)("div", {
                                            className: A.emptyPreviewWrapper,
                                            style: { aspectRatio: _ },
                                            children: (0, i.jsx)("div", { className: A.emptyPreview }),
                                        }),
                                  (0, i.jsx)(o.y, { className: A.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
