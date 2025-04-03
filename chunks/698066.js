n.d(t, { Z: () => i });
var r = n(626135),
    l = n(981631);
function i(e) {
    let { problem: t, stream: n, feedback: i, streamApplication: a, analyticsData: o, location: s, rating: c = null } = e;
    r.default.track(
        l.rMx.STREAM_REPORT_PROBLEM,
        (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                reason: t,
                streamer_user_id: n.ownerId,
                stream_channel_id: n.channelId,
                guild_id: n.guildId,
                application_id: null != a ? a.id : null,
                application_name: null != a ? a.name : null,
                location: s,
                rating: c,
                feedback: i
            },
            o
        )
    );
}
