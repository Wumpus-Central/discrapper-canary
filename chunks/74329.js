n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(652896),
    o = n(834757),
    l = n(961350),
    c = n(162605),
    u = n(985018);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t, d) {
    var p;
    let _ = (0, o.AO)(e),
        h = (0, i.bG)([l.default], () => l.default.getId());
    if (null == e) return null;
    let m = (0, s._z)(e),
        g = null != (p = c.A.getVideoStats(m)) ? p : {},
        E = f(
            {
                media_session_id: c.A.getMediaSessionId(m),
                rtc_connection_id: c.A.getRtcConnectionId(m),
                stream_region: c.A.getRegion(m),
                max_viewers: c.A.getMaxViewers(m),
            },
            g,
        ),
        b = () => {
            null == d || d(),
                null != e &&
                    (0, a.mMO)(async () => {
                        let { default: t } = await n.e("53377").then(n.bind(n, 629304));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                f(
                                    {
                                        stream: e,
                                        streamApplication: _,
                                        isStreamer: h === (null == e ? void 0 : e.ownerId),
                                        analyticsData: E,
                                    },
                                    n,
                                ),
                            );
                    });
        };
    return (0, r.jsx)(a.Drp, {
        id: "report-stream-problem",
        color: "danger",
        label: u.intl.string(u.t.sdnCxV),
        action: b,
        icon: a.EpV,
    });
}
