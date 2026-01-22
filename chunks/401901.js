n.d(t, {
    $: () => p,
    A: () => b,
}),
    n(896048);
var l,
    r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    c = n(183325),
    u = n(778862),
    d = n(821589),
    f = n(463689),
    p = (((l = {}).CONTAIN = "contain"), (l.COVER = "cover"), l);
let b = i.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: l,
            videoComponent: a,
            className: p,
            fit: b = "contain",
            mirror: g = !1,
            paused: m = !1,
            streamPreviewURL: h,
            videoSpinnerContext: A,
            userId: y,
            streamKey: _,
        } = e,
        [E, v] = i.useState(!0);
    (0, u.A)({
        location: "VideoStream",
        videoSpinnerContext: A,
        userId: y,
        streamId: t,
        loading: E,
        paused: m,
    });
    let { onReady: O } = (0, c.A)({
            streamId: t,
            userId: y,
            loading: E,
            videoSpinnerContext: A,
            streamKey: _,
            paused: m,
        }),
        x = i.useCallback(() => {
            v(!1), O();
        }, [O]);
    return (0, r.jsxs)("div", {
        className: s()(f.wrapper, l),
        children: [
            null != t &&
                (0, r.jsx)(a, {
                    className: s()(
                        f.video,
                        (0, d.t)(f, "video", b),
                        {
                            [f.mirror]: g,
                        },
                        p,
                    ),
                    streamId: t,
                    onResize: n,
                    onReady: x,
                    paused: m,
                }),
            m
                ? null
                : (0, r.jsx)("div", {
                      className: s()(f.previewWrapper, {
                          [f.loading]: E,
                      }),
                      children:
                          E &&
                          (0, r.jsxs)(i.Fragment, {
                              children: [
                                  null != h
                                      ? (0, r.jsx)("img", {
                                            src: h,
                                            alt: "",
                                            className: f.previewImage,
                                        })
                                      : (0, r.jsx)("div", {
                                            className: f.emptyPreviewWrapper,
                                            children: (0, r.jsx)("div", {
                                                className: f.emptyPreview,
                                            }),
                                        }),
                                  (0, r.jsx)(o.y$y, {
                                      className: f.spinner,
                                  }),
                              ],
                          }),
                  }),
        ],
    });
});
