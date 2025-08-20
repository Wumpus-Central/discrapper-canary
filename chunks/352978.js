n.d(t, {
    L: () => p,
    Z: () => m,
}),
    n(388685);
var r,
    l = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    u = n(481060),
    s = n(885524),
    c = n(38755),
    d = n(153066),
    f = n(412418),
    p = (((r = {}).CONTAIN = "contain"), (r.COVER = "cover"), r);
let m = i.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: r,
            videoComponent: a,
            className: p,
            fit: m = "contain",
            mirror: E = !1,
            paused: g = !1,
            streamPreviewURL: b,
            videoSpinnerContext: S,
            userId: v,
            streamKey: h,
        } = e,
        [O, y] = i.useState(!0);
    (0, c.Z)({
        location: "VideoStream",
        videoSpinnerContext: S,
        userId: v,
        streamId: t,
        loading: O,
        paused: g,
    });
    let { onReady: _ } = (0, s.Z)({
            streamId: t,
            userId: v,
            loading: O,
            videoSpinnerContext: S,
            streamKey: h,
            paused: g,
        }),
        j = i.useCallback(() => {
            y(!1), _();
        }, [_]);
    return (0, l.jsxs)("div", {
        className: o()(f.wrapper, r),
        children: [
            null != t &&
                (0, l.jsx)(a, {
                    className: o()(f.video, (0, d.l)(f, "video", m), { [f.mirror]: E }, p),
                    streamId: t,
                    onResize: n,
                    onReady: j,
                    paused: g,
                }),
            g
                ? null
                : (0, l.jsx)("div", {
                      className: o()(f.previewWrapper, { [f.loading]: O }),
                      children:
                          O &&
                          (0, l.jsxs)(i.Fragment, {
                              children: [
                                  null != b
                                      ? (0, l.jsx)("img", {
                                            src: b,
                                            alt: "",
                                            className: f.previewImage,
                                        })
                                      : (0, l.jsx)("div", {
                                            className: f.emptyPreviewWrapper,
                                            children: (0, l.jsx)("div", { className: f.emptyPreview }),
                                        }),
                                  (0, l.jsx)(u.$jN, { className: f.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
