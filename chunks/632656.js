n.d(t, { m: () => A });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(673698),
    o = n(990078),
    d = n(155718),
    c = n(891694),
    u = n(652215),
    m = n(985018),
    p = n(724870);
function A(e) {
    let t = a.useRef(null),
        n = e.media;
    if (n.loadingState === d.TD.LOADED_NOT_FOUND)
        return (0, l.jsx)(o.m, {
            text: m.intl.string(m.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, l.jsx)("div", {
                className: s()(e.className, p.FN, { [p.gS]: e.hiddenSpoilers }),
                style: { width: e.placeholderWidth, height: e.placeholderHeight },
                role: "img",
                children: (0, l.jsx)(c.A, { ref: t, className: p.i4 }),
            }),
        });
    let r = n.loadingState === d.TD.LOADING ? u.Rv1.LOADING : u.Rv1.ERROR;
    return (0, l.jsx)(i._, {
        className: s()(e.className, { [p.gS]: e.hiddenSpoilers }),
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
