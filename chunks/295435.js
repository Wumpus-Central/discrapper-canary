n.d(t, { S: () => p });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(916616),
    l = n(28664),
    c = n(911969),
    u = n(558522),
    d = n(981631),
    f = n(388032),
    _ = n(175612);
function p(e) {
    let t = i.useRef(null),
        n = e.media;
    if (n.loadingState === c.f.LOADED_NOT_FOUND)
        return (0, r.jsx)(l.u, {
            text: f.intl.string(f.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, r.jsx)("div", {
                className: o()(e.className, _.notFoundPlaceholder, { [_.hiddenSpoilers]: e.hiddenSpoilers }),
                style: {
                    width: e.placeholderWidth,
                    height: e.placeholderHeight,
                },
                role: "img",
                children: (0, r.jsx)(u.Z, {
                    ref: t,
                    className: _.brokenImageIcon,
                }),
            }),
        });
    let a = n.loadingState === c.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
    return (0, r.jsx)(s.E, {
        className: o()(e.className, { [_.hiddenSpoilers]: e.hiddenSpoilers }),
        readyState: a,
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
