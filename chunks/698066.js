n.d(t, { Z: () => r });
var l = n(626135),
    a = n(981631);
function r(e) {
    let { problem: t, stream: n, feedback: r, streamApplication: i, analyticsData: s, location: o, rating: c = null } = e;
    l.default.track(
        a.rMx.STREAM_REPORT_PROBLEM,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    l.forEach(function (t) {
                        var l;
                        (l = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = l);
                    });
            }
            return e;
        })(
            {
                reason: t,
                streamer_user_id: n.ownerId,
                stream_channel_id: n.channelId,
                guild_id: n.guildId,
                application_id: null != i ? i.id : null,
                application_name: null != i ? i.name : null,
                location: o,
                rating: c,
                feedback: r
            },
            s
        )
    );
}
