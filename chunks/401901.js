"use strict";
n.d(t, { $: () => _, A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(183325),
    u = n(778862),
    c = n(821589),
    d = n(463689),
    _ = (function (e) {
        return (e.CONTAIN = "contain"), (e.COVER = "cover"), e;
    })({});
let f = i.memo(function (e) {
    let {
            streamId: t,
            onResize: n,
            wrapperClassName: s,
            videoComponent: _,
            className: f,
            fit: p = "contain",
            mirror: h = !1,
            paused: m = !1,
            streamPreviewURL: E,
            videoSpinnerContext: g,
            userId: A,
            streamKey: I,
        } = e,
        [T, S] = i.useState(!0);
    (0, u.A)({ location: "VideoStream", videoSpinnerContext: g, userId: A, streamId: t, loading: T, paused: m });
    let { onReady: y } = (0, l.A)({
            streamId: t,
            userId: A,
            loading: T,
            videoSpinnerContext: g,
            streamKey: I,
            paused: m,
        }),
        v = i.useCallback(() => {
            S(!1), y();
        }, [y]);
    return (0, r.jsxs)("div", {
        className: a()(d.wrapper, s),
        children: [
            null != t &&
                (0, r.jsx)(_, {
                    className: a()(d.video, (0, c.t)(d, "video", p), { [d.mirror]: h }, f),
                    streamId: t,
                    onResize: n,
                    onReady: v,
                    paused: m,
                }),
            m
                ? null
                : (0, r.jsx)("div", {
                      className: a()(d.previewWrapper, { [d.loading]: T }),
                      children:
                          T &&
                          (0, r.jsxs)(i.Fragment, {
                              children: [
                                  null != E
                                      ? (0, r.jsx)("img", { src: E, alt: "", className: d.previewImage })
                                      : (0, r.jsx)("div", {
                                            className: d.emptyPreviewWrapper,
                                            children: (0, r.jsx)("div", { className: d.emptyPreview }),
                                        }),
                                  (0, r.jsx)(o.y$y, { className: d.spinner }),
                              ],
                          }),
                  }),
        ],
    });
});
