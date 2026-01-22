n.d(t, {
    A: () => o,
});
var l = n(627968);
n(64700);
var r = n(487329),
    i = n(821715),
    a = n(93067),
    s = n(985018);

function o(e) {
    let { participant: t, className: n } = e,
        o = (0, i.A)(t);
    if (null == o) return null;
    let c = (function (e) {
        switch (e) {
            case r.iy.STREAM_SEND_LOW_FPS:
            case r.iy.STREAM_SEND_HIGH_PACKET_LOSS:
                return s.intl.string(s.t["1f1LHp"]);
            case r.iy.STREAM_BAD_NETWORK_QUALITY:
                return s.intl.string(s.t.Ic588B);
            case r.iy.STREAM_SOUNDSHARE_FAILED:
                return s.intl.string(s.t["9lcych"]);
            case r.iy.STREAM_VIEW_HIGH_PACKET_LOSS:
            case r.iy.STREAM_VIEW_LOW_FPS:
                return s.intl.string(s.t.BcOifw);
            default:
                return;
        }
    })(o);
    return null != c
        ? (0, l.jsx)(a.A, {
              className: n,
              errorMessage: c,
              avError: o,
          })
        : null;
}
