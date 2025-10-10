n.d(t, {
    L: () => p,
    Z: () => _,
}),
    n(388685);
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    o = n.n(a),
    c = n(481060),
    s = n(885524),
    u = n(38755),
    d = n(153066),
    f = n(412418),
    p = (((r = {}).CONTAIN = "contain"), (r.COVER = "cover"), r);
let _ = l.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: r,
            videoComponent: a,
            className: p,
            fit: _ = "contain",
            mirror: m = !1,
            paused: b = !1,
            streamPreviewURL: E,
            videoSpinnerContext: g,
            userId: v,
            streamKey: h,
        } = e,
        [S, y] = l.useState(!0);
    (0, u.Z)({
        location: "VideoStream",
        videoSpinnerContext: g,
        userId: v,
        streamId: t,
        loading: S,
        paused: b,
    });
    let { onReady: O } = (0, s.Z)({
            streamId: t,
            userId: v,
            loading: S,
            videoSpinnerContext: g,
            streamKey: h,
            paused: b,
        }),
        I = l.useCallback(() => {
            y(!1), O();
        }, [O]);
    return (0, i.jsxs)("div", {
        className: o()(f.wrapper, r),
        children: [
            null != t &&
                (0, i.jsx)(a, {
                    className: o()(f.video, (0, d.l)(f, "video", _), { [f.mirror]: m }, p),
                    streamId: t,
                    onResize: n,
                    onReady: I,
                    paused: b,
                }),
            b
                ? null
                : (0, i.jsx)("div", {
                      className: o()(f.previewWrapper, { [f.loading]: S }),
                      children:
                          S &&
                          (0, i.jsxs)(l.Fragment, {
                              children: [
                                  null != E
                                      ? (0, i.jsx)("img", {
                                            src: E,
                                            alt: "",
                                            className: f.previewImage,
                                        })
                                      : (0, i.jsx)("div", {
                                            className: f.emptyPreviewWrapper,
                                            children: (0, i.jsx)("div", { className: f.emptyPreview }),
                                        }),
                                  (0, i.jsx)(c.$jN, { className: f.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
