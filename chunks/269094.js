r.d(a, { A: () => i });
var t = r(477900);
r(582128);
var n = r(134559),
    o = r(991690),
    s = r(833147),
    u = r(477754),
    c = r(625180),
    l = r(489719);
function i(e) {
    let { frame: a, application: r, className: i } = e,
        d = a.id,
        m = (0, l.v)(a, n.v.DESKTOP),
        p = (0, t.jsx)(s.A, {
            application: r,
            queryParams: m,
            url: a.data.url,
            transparent: a.surface.type === o.U.OVERLAY,
            contextSource: { type: u.f.FRAME, frameId: d },
            onIframeMount: (e) => c.A.attachFrameIframe(d, e),
            onIframeUnmount: (e) => c.A.detachFrameIframe(d, e),
            onGuestReload: () => c.A.resetFrameGuestClaims(d),
        });
    return null != i ? (0, t.jsx)("div", { className: i, children: p }) : p;
}
