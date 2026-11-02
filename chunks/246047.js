n.d(t, { c: () => a, v: () => u });
var r = n(477900);
n(582128);
var l = n(621466),
    i = n(607470);
function a(e) {
    return null == e ? null : null != e.domNode ? e.domNode : (0, l.vq)(e, HTMLVideoElement) ? e : null;
}
let u = (e) => {
    let { ref: t, src: n, onSourceError: l, isScrubbing: a, children: u, ...o } = e;
    return (0, r.jsxs)(i.A, { ...o, ref: t, children: [u, null != n && (0, r.jsx)("source", { onError: l, src: n })] });
};
