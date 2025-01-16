t.d(n, {
    S: function () {
        return p;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(916616),
    s = t(981729),
    c = t(911969),
    u = t(558522),
    d = t(981631),
    m = t(388032),
    f = t(211417);
function p(e) {
    let n = i.useRef(null),
        t = e.media;
    if (t.loadingState === c.f.LOADED_NOT_FOUND)
        return (0, l.jsx)(s.u, {
            text: m.intl.string(m.t.UvDfMz),
            position: 'bottom',
            align: 'center',
            targetElementRef: n,
            children: (t) =>
                (0, l.jsx)('div', {
                    ...t,
                    className: a()(e.className, f.notFoundPlaceholder, { [f.hiddenSpoilers]: e.hiddenSpoilers }),
                    style: {
                        width: e.placeholderWidth,
                        height: e.placeholderHeight
                    },
                    role: 'img',
                    children: (0, l.jsx)(u.Z, {
                        ref: n,
                        className: f.brokenImageIcon
                    })
                })
        });
    let r = t.loadingState === c.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
    return (0, l.jsx)(o.E, {
        className: a()(e.className, { [f.hiddenSpoilers]: e.hiddenSpoilers }),
        readyState: r,
        src: '',
        width: e.placeholderWidth,
        height: e.placeholderHeight,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        mediaLayoutType: e.mediaLayoutType,
        useFullWidth: e.useFullWidth,
        zoomable: !1
    });
}
