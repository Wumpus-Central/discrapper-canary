n.d(t, { $: () => x, A: () => E });
var l,
    i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(289873),
    u = n(459838),
    c = n(451988),
    d = n(684339),
    m = n(276208),
    p = n(927813),
    g = n(37965);
let h = 20 * p.A.Millis.SECOND;
var f = n(821589),
    A = n(473772),
    x = (((l = {}).CONTAIN = "contain"), (l.COVER = "cover"), l);
let E = s.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: l,
            videoComponent: r,
            className: p,
            fit: x = "contain",
            mirror: E = !1,
            paused: v = !1,
            streamPreviewURL: C,
            videoSpinnerContext: I,
            userId: _,
            streamKey: j,
        } = e,
        [S, N] = s.useState(!0);
    !(function (e) {
        let { location: t, videoSpinnerContext: n, userId: l, streamId: i, loading: r, paused: a = !1 } = e,
            [o] = s.useState(() => new d.M(t));
        s.useEffect(() => {
            a || (r ? o.onSpinnerStarted() : null != i && o.trackSpinnerDuration(n, l, i));
        }, [r, a, i, o, n, l]);
    })({ location: "VideoStream", videoSpinnerContext: I, userId: _, streamId: t, loading: S, paused: v });
    let { onReady: b } = (function (e) {
            let { streamId: t, userId: n, videoSpinnerContext: l, streamKey: i, loading: r, paused: a = !1 } = e,
                o = s.useRef(new c.Ep()),
                p = l === d.u.SELF_STREAM || l === d.u.REMOTE_STREAM ? u.x.STREAM : u.x.DEFAULT;
            return (
                s.useEffect(() => {
                    if (!r || a || !m.X.isIncomingVideoEnabled()) return;
                    let e = o.current;
                    return (
                        e.start(h, () => {
                            (0, g.Z)(t, n, p, i);
                        }),
                        () => {
                            e.stop();
                        }
                    );
                }, [a, t, r, p, i, n]),
                {
                    onReady: s.useCallback(() => {
                        o.current.stop(), (0, g.W)(p, n);
                    }, [n, p]),
                }
            );
        })({ streamId: t, userId: _, loading: S, videoSpinnerContext: I, streamKey: j, paused: v }),
        y = s.useCallback(() => {
            N(!1), b();
        }, [b]);
    return (0, i.jsxs)("div", {
        className: a()(A.wrapper, l),
        children: [
            null != t &&
                (0, i.jsx)(r, {
                    className: a()(A.video, (0, f.t)(A, "video", x), { [A.mirror]: E }, p),
                    streamId: t,
                    onResize: n,
                    onReady: y,
                    paused: v,
                }),
            v
                ? null
                : (0, i.jsx)("div", {
                      className: a()(A.previewWrapper, { [A.loading]: S }),
                      children:
                          S &&
                          (0, i.jsxs)(s.Fragment, {
                              children: [
                                  null != C
                                      ? (0, i.jsx)("img", { src: C, alt: "", className: A.previewImage })
                                      : (0, i.jsx)("div", {
                                            className: A.emptyPreviewWrapper,
                                            children: (0, i.jsx)("div", { className: A.emptyPreview }),
                                        }),
                                  (0, i.jsx)(o.y, { className: A.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
