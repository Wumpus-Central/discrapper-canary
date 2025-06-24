n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var l = n(458725),
    i = n(386146),
    a = n(475674),
    u = n(42326),
    o = n(388032);
function s(e) {
    let { participant: t, className: n } = e,
        s = (0, a.Z)(t),
        { avErrorUIEnabled: c } = (0, i.JN)({ location: 'StreamWarning' });
    if (null == s) return null;
    let d = (function (e) {
        switch (e) {
            case l.u.STREAM_SEND_LOW_FPS:
            case l.u.STREAM_SEND_HIGH_PACKET_LOSS:
                return o.intl.string(o.t['1f1LHh']);
            case l.u.STREAM_BAD_NETWORK_QUALITY:
                return o.intl.string(o.t.Ic588P);
            case l.u.STREAM_SOUNDSHARE_FAILED:
                return o.intl.string(o.t['9lcycn']);
            case l.u.STREAM_VIEW_HIGH_PACKET_LOSS:
            case l.u.STREAM_VIEW_LOW_FPS:
                return o.intl.string(o.t.BcOif3);
            default:
                return;
        }
    })(s);
    return null != d
        ? (0, r.jsx)(u.Z, {
              className: n,
              errorMessage: d,
              avError: c ? s : null
          })
        : null;
}
