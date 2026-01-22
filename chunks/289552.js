n.d(t, {
    A: () => o,
});
var l = n(627968);
n(64700);
var r = n(487329),
    i = n(958713),
    a = n(93067),
    s = n(985018);

function o(e) {
    let { userId: t, className: n } = e,
        o = (0, i.A)(t);
    if (null == o) return null;
    let c = o === r.iy.CAMERA_SEND_LOW_FPS ? s.intl.string(s.t["1NyoVt"]) : void 0;
    return null != c
        ? (0, l.jsx)(a.A, {
              className: n,
              errorMessage: c,
              avError: o,
          })
        : null;
}
