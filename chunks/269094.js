r.d(e, { A: () => i });
var n = r(477900);
r(582128);
var u = r(833147),
    t = r(625180),
    o = r(908700),
    s = r(818023);
function i(a) {
    let { frame: e, application: r, className: i } = a,
        c = e.id,
        l = (0, n.jsx)(u.A, {
            application: r,
            queryParams: (0, o.A)(e, s.vu.DESKTOP),
            url: e.data.url,
            onIframeMount: (a) => t.A.attachFrameIframe(c, a),
            onIframeUnmount: (a) => t.A.detachFrameIframe(c, a),
            onGuestReload: () => t.A.setFramePrefersPictureInPictureOnNavigateAway(c, !1),
        });
    return null != i ? (0, n.jsx)("div", { className: i, children: l }) : l;
}
