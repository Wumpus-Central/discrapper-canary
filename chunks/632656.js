n.d(t, { m: () => p });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(673698),
    o = n(990078),
    d = n(155718),
    c = n(891694),
    u = n(652215),
    m = n(985018),
    _ = n(552437);
function p(e) {
    let t = l.useRef(null),
        n = e.media;
    if (n.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, a.jsx)(o.m, {
            text: m.intl.string(m.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, a.jsx)("div", {
                className: i()(e.className, _.FN, { [_.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, a.jsx)(c.A, { ref: t, className: _.i4 }),
            }),
        });
    let r = n.loadingState === d.TD.LOADING ? u.Rv1.LOADING : u.Rv1.ERROR;
    return (0, a.jsx)(s._, {
        className: i()(e.className, { [_.gS]: e.hiddenSpoilers }),
        readyState: r,
        src: "",
        width: e.placeholderWidth,
        height: e.placeholderHeight,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        mediaLayoutType: e.mediaLayoutType,
        useFullWidth: e.useFullWidth,
        zoomable: !1,
    });
}
