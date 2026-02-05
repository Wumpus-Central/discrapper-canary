n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(709710),
    a = n(821715),
    s = n(93067),
    r = n(985018);
function o(e) {
    let { participant: t, className: n } = e,
        o = (0, a.A)(t);
    if (null == o) return null;
    let c = (function (e) {
        switch (e) {
            case l.iy.STREAM_SEND_LOW_FPS:
            case l.iy.STREAM_SEND_HIGH_PACKET_LOSS:
                return r.intl.string(r.t["1f1LHp"]);
            case l.iy.STREAM_BAD_NETWORK_QUALITY:
                return r.intl.string(r.t.Ic588B);
            case l.iy.STREAM_SOUNDSHARE_FAILED:
                return r.intl.string(r.t["9lcych"]);
            case l.iy.STREAM_VIEW_HIGH_PACKET_LOSS:
            case l.iy.STREAM_VIEW_LOW_FPS:
                return r.intl.string(r.t.BcOifw);
            default:
                return;
        }
    })(o);
    return null != c ? (0, i.jsx)(s.A, { className: n, errorMessage: c, avError: o }) : null;
}
