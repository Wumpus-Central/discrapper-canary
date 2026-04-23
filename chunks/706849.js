"use strict";
n.d(t, { A: () => r });
var l = n(64700),
    a = n(531685),
    s = n(365971),
    i = n(613999);
let r = {
    useForumChannelSeenManager: function (e) {
        let { guildId: t, channelId: n } = e,
            r = l.useRef(null),
            o = (0, s.Xg)(),
            d = !a.A.isFocused(o);
        return (
            l.useLayoutEffect(
                () => (
                    null == r.current &&
                        ((r.current = new i.Ay({ guildId: t, channelId: n, isPaused: d, windowId: o })),
                        r.current.initialize()),
                    () => {
                        r.current?.terminate(), (r.current = null);
                    }
                ),
                [n, t, d, o],
            ),
            r.current
        );
    },
};
