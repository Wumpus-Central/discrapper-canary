n.d(t, {
    L: () => p,
    Z: () => m,
}),
    n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    c = n(481060),
    s = n(885524),
    u = n(38755),
    d = n(153066),
    f = n(412418),
    p = (((r = {}).CONTAIN = "contain"), (r.COVER = "cover"), r);
let m = l.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: r,
            videoComponent: a,
            className: p,
            fit: m = "contain",
            mirror: _ = !1,
            paused: g = !1,
            streamPreviewURL: v,
            videoSpinnerContext: b,
            userId: h,
            streamKey: E,
        } = e,
        [y, S] = l.useState(!0);
    (0, u.Z)({
        location: "VideoStream",
        videoSpinnerContext: b,
        userId: h,
        streamId: t,
        loading: y,
        paused: g,
    });
    let { onReady: O } = (0, s.Z)({
            streamId: t,
            userId: h,
            loading: y,
            videoSpinnerContext: b,
            streamKey: E,
            paused: g,
        }),
        C = l.useCallback(() => {
            S(!1), O();
        }, [O]);
    return (0, i.jsxs)("div", {
        className: o()(f.wrapper, r),
        children: [
            null != t &&
                (0, i.jsx)(a, {
                    className: o()(f.video, (0, d.l)(f, "video", m), { [f.mirror]: _ }, p),
                    streamId: t,
                    onResize: n,
                    onReady: C,
                    paused: g,
                }),
            g
                ? null
                : (0, i.jsx)("div", {
                      className: o()(f.previewWrapper, { [f.loading]: y }),
                      children:
                          y &&
                          (0, i.jsxs)(l.Fragment, {
                              children: [
                                  null != v
                                      ? (0, i.jsx)("img", {
                                            src: v,
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
