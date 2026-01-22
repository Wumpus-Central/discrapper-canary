n.d(t, { m: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(673698),
    l = n(990078),
    c = n(155718),
    u = n(891694),
    d = n(652215),
    f = n(985018),
    p = n(724870);
function _(e) {
    let t = i.useRef(null),
        n = e.media;
    if (n.loadingState === c.TD.LOADED_NOT_FOUND)
        return (0, r.jsx)(l.m, {
            text: f.intl.string(f.t.UvDfMz),
            position: "bottom",
            align: "center",
            targetElementRef: t,
            children: (0, r.jsx)("div", {
                className: s()(e.className, p.FN, { [p.gS]: e.hiddenSpoilers }),
                style: {
                    width: e.placeholderWidth,
                    height: e.placeholderHeight,
                },
                role: "img",
                children: (0, r.jsx)(u.A, {
                    ref: t,
                    className: p.i4,
                }),
            }),
        });
    let a = n.loadingState === c.TD.LOADING ? d.Rv1.LOADING : d.Rv1.ERROR;
    return (0, r.jsx)(o._, {
        className: s()(e.className, { [p.gS]: e.hiddenSpoilers }),
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
