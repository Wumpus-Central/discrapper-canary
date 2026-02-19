"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(734057),
    d = n(607567),
    u = n(403362),
    h = n(108197),
    A = n(985018),
    p = n(316945);
let g = s.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: s, sortedThreadIds: l, withGuildIcon: g } = e,
        { density: m } = (0, o.wRf)(),
        _ = (0, a.yK)([c.A], () => l.map((e) => c.A.getChannel(e)).filter(u.Vq), [l]),
        f = (0, a.bG)([d.Ay], () => {
            let e = _[_.length - 1];
            if (null == e) return 0;
            let t = d.Ay.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : s !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, i.jsx)("li", {
        className: p.kL,
        children: (0, i.jsxs)("ul", {
            role: "group",
            "aria-label": A.intl.formatToPlainString(A.t.EiyIi6, { channelName: t.name }),
            children: [
                (0, i.jsx)("div", {
                    className: r()(p.eh, { [p.ET]: g }),
                    style: { bottom: ("cozy" === m ? 28 : 24) + f },
                }),
                _.map((e, t) =>
                    (0, i.jsx)(
                        h.A,
                        {
                            thread: e,
                            isSelectedChannel: n?.id === e.id,
                            isSelectedVoice: s === e.id,
                            isLast: t === _.length - 1,
                            withGuildIcon: g,
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
});
