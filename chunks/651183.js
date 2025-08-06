n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(458725),
    o = n(386146),
    a = n(475674),
    s = n(42326),
    l = n(388032);
function c(e) {
    switch (e) {
        case i.u.STREAM_SEND_LOW_FPS:
        case i.u.STREAM_SEND_HIGH_PACKET_LOSS:
            return l.intl.string(l.t["1f1LHh"]);
        case i.u.STREAM_BAD_NETWORK_QUALITY:
            return l.intl.string(l.t.Ic588P);
        case i.u.STREAM_SOUNDSHARE_FAILED:
            return l.intl.string(l.t["9lcycn"]);
        case i.u.STREAM_VIEW_HIGH_PACKET_LOSS:
        case i.u.STREAM_VIEW_LOW_FPS:
            return l.intl.string(l.t.BcOif3);
        default:
            return;
    }
}
function u(e) {
    let { participant: t, className: n } = e,
        i = (0, a.Z)(t),
        { avErrorUIEnabled: l } = (0, o.JN)({ location: "StreamWarning" });
    if (null == i) return null;
    let u = c(i);
    return null != u
        ? (0, r.jsx)(s.Z, {
              className: n,
              errorMessage: u,
              avError: l ? i : null,
          })
        : null;
}
