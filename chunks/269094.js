r.d(e, { A: () => d });
var n = r(477900);
r(582128);
var t = r(134559),
    o = r(991690),
    u = r(833147),
    s = r(477754),
    c = r(625180),
    l = r(489719);
function d(a) {
    let { frame: e, application: r, className: d } = a,
        i = e.id,
        m = (0, n.jsx)(u.A, {
            application: r,
            queryParams: (0, l.A)(e, t.v.DESKTOP),
            url: e.data.url,
            transparent: e.surface.type === o.U.OVERLAY,
            contextSource: { type: s.f.FRAME, frameId: i },
            onIframeMount: (a) => c.A.attachFrameIframe(i, a),
            onIframeUnmount: (a) => c.A.detachFrameIframe(i, a),
            onGuestReload: () => c.A.setFrameRunsInBackground(i, !1),
        });
    return null != d ? (0, n.jsx)("div", { className: d, children: m }) : m;
}
