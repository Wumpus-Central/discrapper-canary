n.d(t, { c: () => a, v: () => o });
var r = n(477900);
n(582128);
var l = n(621466),
    i = n(607470);
function a(e) {
    return null == e ? null : null != e.domNode ? e.domNode : (0, l.vq)(e, HTMLVideoElement) ? e : null;
}
let o = (e) => {
    let { ref: t, src: n, onSourceError: l, isScrubbing: a, children: o, ...u } = e;
    return (0, r.jsxs)(i.A, { ...u, ref: t, children: [o, null != n && (0, r.jsx)("source", { onError: l, src: n })] });
};
