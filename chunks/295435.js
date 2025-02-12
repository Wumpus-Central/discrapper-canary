l.d(n, { S: () => p });
var t = l(200651),
    i = l(192379),
    r = l(120356),
    a = l.n(r),
    s = l(916616),
    o = l(981729),
    u = l(911969),
    c = l(558522),
    d = l(981631),
    m = l(388032),
    h = l(892334);
function p(e) {
    let n = i.useRef(null),
        l = e.media;
    if (l.loadingState === u.f.LOADED_NOT_FOUND)
        return (0, t.jsx)(o.u, {
            text: m.intl.string(m.t.UvDfMz),
            position: 'bottom',
            align: 'center',
            targetElementRef: n,
            children: (l) =>
                (0, t.jsx)('div', {
                    ...l,
                    className: a()(e.className, h.notFoundPlaceholder, { [h.hiddenSpoilers]: e.hiddenSpoilers }),
                    style: {
                        width: e.placeholderWidth,
                        height: e.placeholderHeight
                    },
                    role: 'img',
                    children: (0, t.jsx)(c.Z, {
                        ref: n,
                        className: h.brokenImageIcon
                    })
                })
        });
    let r = l.loadingState === u.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
    return (0, t.jsx)(s.E, {
        className: a()(e.className, { [h.hiddenSpoilers]: e.hiddenSpoilers }),
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
