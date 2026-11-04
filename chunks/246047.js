n.d(t, { c: () => i, v: () => o });
var r = n(477900);
n(582128);
var l = n(621466),
    a = n(607470);
function i(e) {
    return null == e ? null : null != e.domNode ? e.domNode : (0, l.vq)(e, HTMLVideoElement) ? e : null;
}
let o = (e) => {
    let { ref: t, src: n, onSourceError: l, isScrubbing: i, children: o, ...u } = e;
    return (0, r.jsxs)(a.A, { ...u, ref: t, children: [o, null != n && (0, r.jsx)("source", { onError: l, src: n })] });
};
