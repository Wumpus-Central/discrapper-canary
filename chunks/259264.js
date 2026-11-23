n.d(t, { $: () => x, A: () => v });
var l,
    i = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
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
let v = r.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: l,
            videoComponent: s,
            className: p,
            fit: x = "contain",
            mirror: v = !1,
            paused: E = !1,
            hidden: C = !1,
            children: j,
            onVideoElement: S,
            streamPreviewURL: b,
            videoSpinnerContext: I,
            userId: y,
            streamKey: _,
            emptyPreviewAspectRatio: N = "16 / 9",
        } = e,
        [w, k] = r.useState(!0),
        [R, L] = r.useState(null),
        T = r.useCallback(
            (e) => {
                ("cover-landscape" === x && L((t) => (t?.width === e.width && t?.height === e.height ? t : e)), n?.(e));
            },
            [x, n],
        ),
        D = x;
    ("cover-landscape" === x && ((D = "cover"), null != R && R.width < R.height && (D = "contain")),
        (function (e) {
            let { location: t, videoSpinnerContext: n, userId: l, streamId: i, loading: s, paused: a = !1 } = e,
                [o] = r.useState(() => new d.M(t));
            r.useEffect(() => {
                a || (s ? o.onSpinnerStarted() : null != i && o.trackSpinnerDuration(n, l, i));
            }, [s, a, i, o, n, l]);
        })({ location: "VideoStream", videoSpinnerContext: I, userId: y, streamId: t, loading: w, paused: E }));
    let { onReady: M } = (function (e) {
            let { streamId: t, userId: n, videoSpinnerContext: l, streamKey: i, loading: s, paused: a = !1 } = e,
                o = r.useRef(new c.Ep()),
                p = l === d.u.SELF_STREAM || l === d.u.REMOTE_STREAM ? u.x.STREAM : u.x.DEFAULT;
            return (
                r.useEffect(() => {
                    if (!s || a || !m.X.isIncomingVideoEnabled()) return;
                    let e = o.current;
                    return (
                        e.start(f, () => {
                            (0, g.Z)(t, n, p, i);
                        }),
                        () => {
                            e.stop();
                        }
                    );
                }, [a, t, s, p, i, n]),
                {
                    onReady: r.useCallback(() => {
                        (o.current.stop(), (0, g.W)(p, n));
                    }, [n, p]),
                }
            );
        })({ streamId: t, userId: y, loading: w, videoSpinnerContext: I, streamKey: _, paused: E }),
        O = r.useCallback(() => {
            (k(!1), M());
        }, [M]);
    return (0, i.jsxs)("div", {
        hidden: C,
        className: a()(A.wrapper, l),
        children: [
            null != t &&
                (0, i.jsx)(s, {
                    className: a()(A.video, (0, h.t)(A, "video", D), { [A.mirror]: v }, p),
                    streamId: t,
                    onResize: T,
                    onReady: O,
                    onVideoElement: S,
                    paused: E,
                }),
            j,
            E
                ? null
                : (0, i.jsx)("div", {
                      className: a()(A.previewWrapper, { [A.loading]: w }),
                      children:
                          w &&
                          (0, i.jsxs)(r.Fragment, {
                              children: [
                                  null != b
                                      ? (0, i.jsx)("img", { src: b, alt: "", className: A.previewImage })
                                      : (0, i.jsx)("div", {
                                            className: A.emptyPreviewWrapper,
                                            style: { aspectRatio: N },
                                            children: (0, i.jsx)("div", { className: A.emptyPreview }),
                                        }),
                                  (0, i.jsx)(o.y, { className: A.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
