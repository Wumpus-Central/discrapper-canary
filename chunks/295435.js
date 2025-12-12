n.d(t, { S: () => _ });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(916616),
    l = n(28664),
    c = n(911969),
    u = n(558522),
    d = n(981631),
    f = n(388032),
    p = n(22643);
function _(e) {
    let t = i.useRef(null),
        n = e.media;
    if (n.loadingState === c.f.LOADED_NOT_FOUND)
        return (0, r.jsx)(l.u, {
            text: f.intl.string(f.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, r.jsx)("div", {
                className: a()(e.className, p.notFoundPlaceholder, { [p.hiddenSpoilers]: e.hiddenSpoilers }),
                style: {
                    width: e.placeholderWidth,
                    height: e.placeholderHeight,
                },
                role: "img",
                children: (0, r.jsx)(u.Z, {
                    ref: t,
                    className: p.brokenImageIcon,
                }),
            }),
        });
    let o = n.loadingState === c.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
    return (0, r.jsx)(s.E, {
        className: a()(e.className, { [p.hiddenSpoilers]: e.hiddenSpoilers }),
        readyState: o,
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
