n.d(t, { $: () => m, A: () => A });
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(397927),
    c = n(183325),
    d = n(778862),
    u = n(821589),
    h = n(463689),
    m = (((i = {}).CONTAIN = "contain"), (i.COVER = "cover"), i);
let A = s.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: i,
            videoComponent: a,
            className: m,
            fit: A = "contain",
            mirror: g = !1,
            paused: p = !1,
            streamPreviewURL: f,
            videoSpinnerContext: _,
            userId: E,
            streamKey: x,
        } = e,
        [C, S] = s.useState(!0);
    (0, d.A)({ location: "VideoStream", videoSpinnerContext: _, userId: E, streamId: t, loading: C, paused: p });
    let { onReady: I } = (0, c.A)({
            streamId: t,
            userId: E,
            loading: C,
            videoSpinnerContext: _,
            streamKey: x,
            paused: p,
        }),
        T = s.useCallback(() => {
            S(!1), I();
        }, [I]);
    return (0, l.jsxs)("div", {
        className: r()(h.wrapper, i),
        children: [
            null != t &&
                (0, l.jsx)(a, {
                    className: r()(h.video, (0, u.t)(h, "video", A), { [h.mirror]: g }, m),
                    streamId: t,
                    onResize: n,
                    onReady: T,
                    paused: p,
                }),
            p
                ? null
                : (0, l.jsx)("div", {
                      className: r()(h.previewWrapper, { [h.loading]: C }),
                      children:
                          C &&
                          (0, l.jsxs)(s.Fragment, {
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
