n.d(t, { $: () => m, A: () => A });
var i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(397927),
    c = n(183325),
    d = n(778862),
    u = n(821589),
    h = n(463689),
    m = (((i = {}).CONTAIN = "contain"), (i.COVER = "cover"), i);
let A = a.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: i,
            videoComponent: s,
            className: m,
            fit: A = "contain",
            mirror: p = !1,
            paused: g = !1,
            streamPreviewURL: f,
            videoSpinnerContext: _,
            userId: E,
            streamKey: C,
        } = e,
        [x, S] = a.useState(!0);
    (0, d.A)({ location: "VideoStream", videoSpinnerContext: _, userId: E, streamId: t, loading: x, paused: g });
    let { onReady: T } = (0, c.A)({
            streamId: t,
            userId: E,
            loading: x,
            videoSpinnerContext: _,
            streamKey: C,
            paused: g,
        }),
        I = a.useCallback(() => {
            S(!1), T();
        }, [T]);
    return (0, l.jsxs)("div", {
        className: r()(h.wrapper, i),
        children: [
            null != t &&
                (0, l.jsx)(s, {
                    className: r()(h.video, (0, u.t)(h, "video", A), { [h.mirror]: p }, m),
                    streamId: t,
                    onResize: n,
                    onReady: I,
                    paused: g,
                }),
            g
                ? null
                : (0, l.jsx)("div", {
                      className: r()(h.previewWrapper, { [h.loading]: x }),
                      children:
                          x &&
                          (0, l.jsxs)(a.Fragment, {
                              children: [
                                  null != f
                                      ? (0, l.jsx)("img", { src: f, alt: "", className: h.previewImage })
                                      : (0, l.jsx)("div", {
                                            className: h.emptyPreviewWrapper,
                                            children: (0, l.jsx)("div", { className: h.emptyPreview }),
                                        }),
                                  (0, l.jsx)(o.y$y, { className: h.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
