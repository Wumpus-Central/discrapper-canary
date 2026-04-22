n.d(t, { $: () => f, A: () => m });
var i,
    l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(289873),
    d = n(183325),
    c = n(778862),
    u = n(821589),
    _ = n(473772),
    f = (((i = {}).CONTAIN = "contain"), (i.COVER = "cover"), i);
let m = a.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: i,
            videoComponent: r,
            className: f,
            fit: m = "contain",
            mirror: p = !1,
            paused: g = !1,
            streamPreviewURL: h,
            videoSpinnerContext: A,
            userId: x,
            streamKey: v,
        } = e,
        [I, E] = a.useState(!0);
    (0, c.A)({ location: "VideoStream", videoSpinnerContext: A, userId: x, streamId: t, loading: I, paused: g });
    let { onReady: C } = (0, d.A)({
            streamId: t,
            userId: x,
            loading: I,
            videoSpinnerContext: A,
            streamKey: v,
            paused: g,
        }),
        j = a.useCallback(() => {
            E(!1), C();
        }, [C]);
    return (0, l.jsxs)("div", {
        className: s()(_.wrapper, i),
        children: [
            null != t &&
                (0, l.jsx)(r, {
                    className: s()(_.video, (0, u.t)(_, "video", m), { [_.mirror]: p }, f),
                    streamId: t,
                    onResize: n,
                    onReady: j,
                    paused: g,
                }),
            g
                ? null
                : (0, l.jsx)("div", {
                      className: s()(_.previewWrapper, { [_.loading]: I }),
                      children:
                          I &&
                          (0, l.jsxs)(a.Fragment, {
                              children: [
                                  null != h
                                      ? (0, l.jsx)("img", { src: h, alt: "", className: _.previewImage })
                                      : (0, l.jsx)("div", {
                                            className: _.emptyPreviewWrapper,
                                            children: (0, l.jsx)("div", { className: _.emptyPreview }),
                                        }),
                                  (0, l.jsx)(o.y, { className: _.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
