n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(569545),
    s = n(687516),
    l = n(314897),
    c = n(959457),
    u = n(388032);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t, d) {
    var f;
    let p = (0, s.Cf)(e),
        h = (0, i.e7)([l.default], () => l.default.getId());
    if (null == e) return null;
    let m = (0, o.V9)(e),
        g = null != (f = c.Z.getVideoStats(m)) ? f : {},
        E = _(
            {
                media_session_id: c.Z.getMediaSessionId(m),
                rtc_connection_id: c.Z.getRtcConnectionId(m),
                stream_region: c.Z.getRegion(m),
                max_viewers: c.Z.getMaxViewers(m)
            },
            g
        ),
        b = () => {
            null == d || d(),
                null != e &&
                    (0, a.ZDy)(async () => {
                        let { default: t } = await n.e('18912').then(n.bind(n, 340140));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                _(
                                    {
                                        stream: e,
                                        streamApplication: p,
                                        isStreamer: h === (null == e ? void 0 : e.ownerId),
                                        analyticsData: E
                                    },
                                    n
                                )
                            );
                    });
        };
    return (0, r.jsx)(a.sNh, {
        id: 'report-stream-problem',
        color: 'danger',
        label: u.intl.string(u.t.sdnCxc),
        action: b,
        icon: a.P4T
    });
}
