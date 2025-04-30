n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(458725),
    i = n(386146),
    a = n(475674),
    o = n(42326),
    s = n(388032);
function u(e) {
    let { participant: t, className: n } = e,
        u = (0, a.Z)(t),
        { avErrorUIEnabled: c } = (0, i.JN)({ location: 'StreamWarning' });
    if (null == u) return null;
    let d = (function (e) {
        switch (e) {
            case l.u.STREAM_SEND_LOW_FPS:
            case l.u.STREAM_SEND_HIGH_PACKET_LOSS:
                return s.intl.string(s.t['1f1LHh']);
            case l.u.STREAM_BAD_NETWORK_QUALITY:
                return s.intl.string(s.t.Ic588P);
            case l.u.STREAM_SOUNDSHARE_FAILED:
                return s.intl.string(s.t['9lcycn']);
            case l.u.STREAM_VIEW_HIGH_PACKET_LOSS:
            case l.u.STREAM_VIEW_LOW_FPS:
                return s.intl.string(s.t.BcOif3);
            default:
                return;
        }
    })(u);
    return null != d
        ? (0, r.jsx)(o.Z, {
              className: n,
              errorMessage: d,
              avError: c ? u : null
          })
        : null;
}
