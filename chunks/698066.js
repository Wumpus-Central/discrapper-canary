n.d(e, { Z: () => i });
var l = n(626135),
    r = n(981631);
function i(t) {
    let { problem: e, stream: n, feedback: i, streamApplication: s, analyticsData: a, location: o, rating: c = null } = t;
    l.default.track(
        r.rMx.STREAM_REPORT_PROBLEM,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    l = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    l.forEach(function (e) {
                        var l;
                        (l = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = l);
                    });
            }
            return t;
        })(
            {
                reason: e,
                streamer_user_id: n.ownerId,
                stream_channel_id: n.channelId,
                guild_id: n.guildId,
                application_id: null != s ? s.id : null,
                application_name: null != s ? s.name : null,
                location: o,
                rating: c,
                feedback: i
            },
            a
        )
    );
}
