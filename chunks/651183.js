n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var l = n(458725),
    i = n(475674),
    a = n(42326),
    o = n(388032);
function u(e) {
    let { participant: t, className: n } = e,
        u = (0, i.Z)(t);
    if (null == u) return null;
    let s = (function (e) {
        switch (e) {
            case l.u.STREAM_SEND_LOW_FPS:
            case l.u.STREAM_SEND_HIGH_PACKET_LOSS:
                return o.intl.string(o.t["1f1LHh"]);
            case l.u.STREAM_BAD_NETWORK_QUALITY:
                return o.intl.string(o.t.Ic588P);
            case l.u.STREAM_SOUNDSHARE_FAILED:
                return o.intl.string(o.t["9lcycn"]);
            case l.u.STREAM_VIEW_HIGH_PACKET_LOSS:
            case l.u.STREAM_VIEW_LOW_FPS:
                return o.intl.string(o.t.BcOif3);
            default:
                return;
        }
    })(u);
    return null != s
        ? (0, r.jsx)(a.Z, {
              className: n,
              errorMessage: s,
              avError: u,
          })
        : null;
}
