n.d(t, {
    L: () => f,
    Z: () => _,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(885524),
    c = n(38755),
    u = n(153066),
    d = n(106209),
    f = (function (e) {
        return (e.CONTAIN = "contain"), (e.COVER = "cover"), e;
    })({});
let _ = i.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: o,
            videoComponent: f,
            className: _,
            fit: p = "contain",
            mirror: h = !1,
            paused: m = !1,
            streamPreviewURL: g,
            videoSpinnerContext: E,
            userId: b,
            streamKey: y,
        } = e,
        [O, v] = i.useState(!0);
    (0, c.Z)({
        location: "VideoStream",
        videoSpinnerContext: E,
        userId: b,
        streamId: t,
        loading: O,
        paused: m,
    });
    let { onReady: I } = (0, l.Z)({
            streamId: t,
            userId: b,
            loading: O,
            videoSpinnerContext: E,
            streamKey: y,
            paused: m,
        }),
        T = i.useCallback(() => {
            v(!1), I();
        }, [I]);
    return (0, r.jsxs)("div", {
        className: a()(d.wrapper, o),
        children: [
            null != t &&
                (0, r.jsx)(f, {
                    className: a()(d.video, (0, u.l)(d, "video", p), { [d.mirror]: h }, _),
                    streamId: t,
                    onResize: n,
                    onReady: T,
                    paused: m,
                }),
            m
                ? null
                : (0, r.jsx)("div", {
                      className: a()(d.previewWrapper, { [d.loading]: O }),
                      children:
                          O &&
                          (0, r.jsxs)(i.Fragment, {
                              children: [
                                  null != g
                                      ? (0, r.jsx)("img", {
                                            src: g,
                                            alt: "",
                                            className: d.previewImage,
                                        })
                                      : (0, r.jsx)("div", {
                                            className: d.emptyPreviewWrapper,
                                            children: (0, r.jsx)("div", { className: d.emptyPreview }),
                                        }),
                                  (0, r.jsx)(s.$jN, { className: d.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
