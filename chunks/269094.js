r.d(e, { A: () => i });
var n = r(477900);
r(582128);
var t = r(134559),
    o = r(991690),
    u = r(833147),
    s = r(477754),
    c = r(625180),
    l = r(489719);
function i(a) {
    let { frame: e, application: r, className: i } = a,
        d = e.id,
        p = (0, l.v)(e, t.v.DESKTOP),
        m = (0, n.jsx)(u.A, {
            application: r,
            queryParams: p,
            url: e.data.url,
            transparent: e.surface.type === o.U.OVERLAY,
            contextSource: { type: s.f.FRAME, frameId: d },
            onIframeMount: (a) => c.A.attachFrameIframe(d, a),
            onIframeUnmount: (a) => c.A.detachFrameIframe(d, a),
            onGuestReload: () => c.A.setFrameRunsInBackground(d, !1),
        });
    return null != i ? (0, n.jsx)("div", { className: i, children: m }) : m;
}
