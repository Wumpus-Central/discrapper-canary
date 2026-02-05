n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(709710),
    a = n(958713),
    s = n(93067),
    r = n(985018);
function o(e) {
    let { userId: t, className: n } = e,
        o = (0, a.A)(t);
    if (null == o) return null;
    let c = o === l.iy.CAMERA_SEND_LOW_FPS ? r.intl.string(r.t["1NyoVt"]) : void 0;
    return null != c ? (0, i.jsx)(s.A, { className: n, errorMessage: c, avError: o }) : null;
}
