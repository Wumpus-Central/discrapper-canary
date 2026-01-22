n.d(t, {
    A: () => s,
});
var l = n(64700),
    r = n(531685),
    a = n(365971),
    i = n(613999);
let s = {
    useForumChannelSeenManager: function (e) {
        let { guildId: t, channelId: n } = e,
            s = l.useRef(null),
            c = (0, a.Xg)(),
            o = !r.A.isFocused(c);
        return (
            l.useLayoutEffect(
                () => (
                    null == s.current &&
                        ((s.current = new i.Ay({
                            guildId: t,
                            channelId: n,
                            isPaused: o,
                            windowId: c,
                        })),
                        s.current.initialize()),
                    () => {
                        var e;
                        null == (e = s.current) || e.terminate(), (s.current = null);
                    }
                ),
                [n, t, o, c],
            ),
            s.current
        );
    },
};
