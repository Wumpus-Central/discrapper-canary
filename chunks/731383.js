n.d(t, { i: () => _ });
var r = n(64700),
    i = n(964486),
    a = n(58149),
    s = n(734057),
    o = n(309010),
    l = n(954571),
    c = n(189551),
    u = n(307731),
    d = n(652215);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: f, nonce: _, demoMode: h } = e,
        { current: m } = r.useRef(
            p(
                {
                    guild_id: n,
                    emoji_id: t,
                },
                (0, a.dI)(s.A.getChannel(o.A.getChannelId(n))),
            ),
        );
    return (
        (0, i.Ay)(() => {
            var e;
            (0, c.K)(u.Vl.TrackOpenPopoutUsed),
                h ||
                    l.default.track(
                        d.HAw.OPEN_POPOUT,
                        p(
                            {
                                type: null != (e = null == f ? void 0 : f.analyticsType) ? e : "Standard Emoji Popout",
                                nonce: _,
                            },
                            m,
                        ),
                    );
        }),
        m
    );
};
