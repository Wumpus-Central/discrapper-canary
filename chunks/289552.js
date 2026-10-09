n.d(t, { A: () => o });
var i = n(477900);
n(582128);
var l = n(487329),
    s = n(958713),
    r = n(93067),
    a = n(660183);
function o(e) {
    let { userId: t, className: n } = e,
        o = (0, s.A)(t);
    if (null == o) return null;
    let u = o === l.iy.CAMERA_SEND_LOW_FPS ? a.intl.string(a.t["1NyoVt"]) : void 0;
    return null != u ? (0, i.jsx)(r.A, { className: n, errorMessage: u, avError: o }) : null;
}
