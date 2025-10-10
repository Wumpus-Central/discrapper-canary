n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(458725),
    l = n(475674),
    a = n(42326),
    o = n(388032);
function c(e) {
    let { participant: t, className: n } = e,
        c = (0, l.Z)(t);
    if (null == c) return null;
    let s = (function (e) {
        switch (e) {
            case i.u.STREAM_SEND_LOW_FPS:
            case i.u.STREAM_SEND_HIGH_PACKET_LOSS:
                return o.intl.string(o.t["1f1LHh"]);
            case i.u.STREAM_BAD_NETWORK_QUALITY:
                return o.intl.string(o.t.Ic588P);
            case i.u.STREAM_SOUNDSHARE_FAILED:
                return o.intl.string(o.t["9lcycn"]);
            case i.u.STREAM_VIEW_HIGH_PACKET_LOSS:
            case i.u.STREAM_VIEW_LOW_FPS:
                return o.intl.string(o.t.BcOif3);
            default:
                return;
        }
    })(c);
    return null != s
        ? (0, r.jsx)(a.Z, {
              className: n,
              errorMessage: s,
              avError: c,
          })
        : null;
}
