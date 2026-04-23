n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(487329),
    a = n(821715),
    r = n(93067),
    s = n(985018);
function o(e) {
    let { participant: t, className: n } = e,
        o = (0, a.A)(t);
    if (null == o) return null;
    let d = (function (e) {
        switch (e) {
            case l.iy.STREAM_SEND_LOW_FPS:
            case l.iy.STREAM_SEND_HIGH_PACKET_LOSS:
                return s.intl.string(s.t["1f1LHp"]);
            case l.iy.STREAM_BAD_NETWORK_QUALITY:
                return s.intl.string(s.t.Ic588B);
            case l.iy.STREAM_SOUNDSHARE_FAILED:
                return s.intl.string(s.t["9lcych"]);
            case l.iy.STREAM_VIEW_HIGH_PACKET_LOSS:
            case l.iy.STREAM_VIEW_LOW_FPS:
                return s.intl.string(s.t.BcOifw);
            default:
                return;
        }
    })(o);
    return null != d ? (0, i.jsx)(r.A, { className: n, errorMessage: d, avError: o }) : null;
}
