var l = n(477900);
n(582128);
var i = n(487329),
    r = n(821715),
    a = n(93067),
    s = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { participant: t, className: n } = e,
                o = (0, r.A)(t);
            if (null == o) return null;
            let u = (function (e) {
                switch (e) {
                    case i.iy.STREAM_SEND_LOW_FPS:
                    case i.iy.STREAM_SEND_HIGH_PACKET_LOSS:
                        return s.intl.string(s.t["1f1LHp"]);
                    case i.iy.STREAM_BAD_NETWORK_QUALITY:
                        return s.intl.string(s.t.Ic588B);
                    case i.iy.STREAM_SOUNDSHARE_FAILED:
                        return s.intl.string(s.t["9lcych"]);
                    case i.iy.STREAM_VIEW_HIGH_PACKET_LOSS:
                    case i.iy.STREAM_VIEW_LOW_FPS:
                        return s.intl.string(s.t.BcOifw);
                    default:
                        return;
                }
            })(o);
            return null != u ? (0, l.jsx)(a.A, { className: n, errorMessage: u, avError: o }) : null;
        },
    },
);
