n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(785141),
    i = n(272395),
    a = n(475674),
    o = n(42326),
    s = n(906467),
    u = n(388032);
function c(e) {
    let { participant: t, className: n } = e,
        c = (0, a.Z)(t),
        { avErrorUIEnabled: d } = (0, i.JN)({ location: 'StreamWarning' });
    if (null == c) return null;
    let f = (function (e) {
            switch (e) {
                case l.u.STREAM_SEND_LOW_FPS:
                case l.u.STREAM_SEND_HIGH_PACKET_LOSS:
                    return u.NW.string(u.t['1f1LHh']);
                case l.u.STREAM_BAD_NETWORK_QUALITY:
                    return u.NW.string(u.t.Ic588P);
                case l.u.STREAM_SOUNDSHARE_FAILED:
                    return u.NW.string(u.t['9lcycn']);
                case l.u.STREAM_VIEW_HIGH_PACKET_LOSS:
                case l.u.STREAM_VIEW_LOW_FPS:
                    return u.NW.string(u.t.BcOif3);
                default:
                    return;
            }
        })(c),
        m = d
            ? (function (e) {
                  var t;
                  if (null == e) return null;
                  let n = null == (t = (0, l.hp)(e)) ? void 0 : t.errorCode,
                      r = u.NW.formatToPlainString(u.t['ejOT9/'], { errorCode: n });
                  return s.Z.isDeveloper ? ''.concat(r, ' (').concat(e, ')') : r;
              })(c)
            : null;
    return null != f
        ? (0, r.jsx)(o.Z, {
              className: n,
              errorMessage: f,
              errorDetailMessage: m
          })
        : null;
}
