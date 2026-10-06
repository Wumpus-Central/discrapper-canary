a.d(r, { A: () => i });
var t = a(477900);
a(582128);
var n = a(134559),
    o = a(833147),
    u = a(477754),
    s = a(625180),
    c = a(908700);
function i(e) {
    let { frame: r, application: a, className: i } = e,
        l = r.id,
        m = (0, t.jsx)(o.A, {
            application: a,
            queryParams: (0, c.A)(r, n.v.DESKTOP),
            url: r.data.url,
            contextSource: { type: u.f.FRAME, frameId: l },
            onIframeMount: (e) => s.A.attachFrameIframe(l, e),
            onIframeUnmount: (e) => s.A.detachFrameIframe(l, e),
            onGuestReload: () => s.A.setFramePrefersPictureInPictureOnNavigateAway(l, !1),
        });
    return null != i ? (0, t.jsx)("div", { className: i, children: m }) : m;
}
