n.d(t, {
    L: () => f,
    Z: () => h,
}),
    n(388685);
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    c = n(885524),
    u = n(38755),
    d = n(153066),
    p = n(412418),
    f = (((r = {}).CONTAIN = "contain"), (r.COVER = "cover"), r);
let h = l.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: r,
            videoComponent: a,
            className: f,
            fit: h = "contain",
            mirror: m = !1,
            paused: g = !1,
            streamPreviewURL: b,
            videoSpinnerContext: _,
            userId: y,
            streamKey: C,
        } = e,
        [v, O] = l.useState(!0);
    (0, u.Z)({
        location: "VideoStream",
        videoSpinnerContext: _,
        userId: y,
        streamId: t,
        loading: v,
        paused: g,
    });
    let { onReady: x } = (0, c.Z)({
            streamId: t,
            userId: y,
            loading: v,
            videoSpinnerContext: _,
            streamKey: C,
            paused: g,
        }),
        E = l.useCallback(() => {
            O(!1), x();
        }, [x]);
    return (0, i.jsxs)("div", {
        className: o()(p.wrapper, r),
        children: [
            null != t &&
                (0, i.jsx)(a, {
                    className: o()(p.video, (0, d.l)(p, "video", h), { [p.mirror]: m }, f),
                    streamId: t,
                    onResize: n,
                    onReady: E,
                    paused: g,
                }),
            g
                ? null
                : (0, i.jsx)("div", {
                      className: o()(p.previewWrapper, { [p.loading]: v }),
                      children:
                          v &&
                          (0, i.jsxs)(l.Fragment, {
                              children: [
                                  null != b
                                      ? (0, i.jsx)("img", {
                                            src: b,
                                            alt: "",
                                            className: p.previewImage,
                                        })
                                      : (0, i.jsx)("div", {
                                            className: p.emptyPreviewWrapper,
                                            children: (0, i.jsx)("div", { className: p.emptyPreview }),
                                        }),
                                  (0, i.jsx)(s.$jN, { className: p.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
