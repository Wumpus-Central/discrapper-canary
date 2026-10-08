a.d(r, { A: () => i });
var t = a(477900);
a(582128);
var n = a(134559),
    o = a(991690),
    u = a(833147),
    s = a(477754),
    c = a(625180),
    l = a(489719);
function i(e) {
    let { frame: r, application: a, className: i } = e,
        d = r.id,
        m = (0, t.jsx)(u.A, {
            application: a,
            queryParams: (0, l.A)(r, n.v.DESKTOP),
            url: r.data.url,
            transparent: r.surface.type === o.U.OVERLAY,
            contextSource: { type: s.f.FRAME, frameId: d },
            onIframeMount: (e) => c.A.attachFrameIframe(d, e),
            onIframeUnmount: (e) => c.A.detachFrameIframe(d, e),
            onGuestReload: () => c.A.setFramePrefersPictureInPictureOnNavigateAway(d, !1),
        });
    return null != i ? (0, t.jsx)("div", { className: i, children: m }) : m;
}
