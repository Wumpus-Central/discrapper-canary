n.d(t, { A: () => o });
var i = n(477900);
n(582128);
var l = n(487329),
    s = n(821715),
    r = n(93067),
    a = n(660183);
function o(e) {
    let { participant: t, className: n } = e,
        o = (0, s.A)(t);
    if (null == o) return null;
    let u = (function (e) {
        switch (e) {
            case l.iy.STREAM_SEND_LOW_FPS:
            case l.iy.STREAM_SEND_HIGH_PACKET_LOSS:
                return a.intl.string(a.t["1f1LHp"]);
            case l.iy.STREAM_BAD_NETWORK_QUALITY:
                return a.intl.string(a.t.Ic588B);
            case l.iy.STREAM_SOUNDSHARE_FAILED:
                return a.intl.string(a.t["9lcych"]);
            case l.iy.STREAM_VIEW_HIGH_PACKET_LOSS:
            case l.iy.STREAM_VIEW_LOW_FPS:
                return a.intl.string(a.t.BcOifw);
            default:
                return;
        }
    })(o);
    return null != u ? (0, i.jsx)(r.A, { className: n, errorMessage: u, avError: o }) : null;
}
