n.d(t, { A: () => y });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(342952),
    a = n(778712),
    o = n(939249),
    u = n(834730),
    c = n(565645),
    d = n(813564),
    h = n(228366),
    m = n(734057),
    f = n(714736);
n(980504);
let p = new Map();
class g extends s.Ay.Store {
    initialize() {
        this.waitFor(m.A);
    }
    static displayName = "SoundboardEchoStore";
    getSoundboardEchoes() {
        return Array.from(p.values()).sort((e, t) => e.lastPlayedAt - t.lastPlayedAt);
    }
    getSoundboardEcho(e) {
        return p.get(e);
    }
}
let x = new g(h.h, {
    VOICE_CHANNEL_EFFECT_SEND: function (e) {
        let {
            soundId: t,
            channelId: n,
            userId: l,
            authorId: i,
            sourceGuildId: s,
            soundName: r,
            emoji: a,
            soundVolume: o,
            isEcho: u,
        } = e;
        if (null == t || null == r) return !1;
        let c = m.A.getChannel(n)?.getGuildId();
        if (null == c) return !1;
        let { enabled: d } = (0, f.j)(c, "handleSoundPlayStart");
        if (!d) return !1;
        let h = {
            soundId: t,
            name: r,
            guildId: s ?? "0",
            emojiId: a?.id ?? void 0,
            emojiName: a?.name,
            emojiAnimated: a?.animated ?? void 0,
            available: !0,
            userId: l,
            volume: o ?? 1,
        };
        !(function (e) {
            let { soundId: t, sound: n, authorId: l, playedByUserId: i, isEcho: s } = e,
                r = p.get(t);
            null == r
                ? p.set(t, {
                      sound: n,
                      count: 1,
                      authorId: l,
                      playedByUserIds: new Set([i]),
                      mostRecentPlayedByUserId: s ? i : null,
                      lastPlayedAt: Date.now(),
                  })
                : p.set(t, {
                      ...r,
                      count: r.count + 1,
                      playedByUserIds: r.playedByUserIds.add(i),
                      mostRecentPlayedByUserId: i === l ? r.mostRecentPlayedByUserId : i,
                      lastPlayedAt: Date.now(),
                  });
        })({ soundId: t, sound: h, authorId: i ?? l, playedByUserId: l, isEcho: u });
    },
    VOICE_CHANNEL_SELECT: function (e) {
        p.clear();
    },
});
var A = n(287809),
    C = n(375708),
    E = n(998812);
function I(e) {
    let { guildId: t, channelId: n, sound: h, authorId: m, mostRecentPlayedByUserId: f } = e,
        { authorUser: p, mostRecentPlayedUser: g } = (0, s.cf)([A.default], () => ({
            authorUser: A.default.getUser(m),
            mostRecentPlayedUser: A.default.getUser(f),
        })),
        x = i.useCallback(() => {
            (0, d.CZ)(h, n);
        }, [n, h]);
    if (null == t || null == p) return null;
    let { emojiId: I, emojiName: y, emojiAnimated: S, name: v } = h;
    return (0, l.jsxs)("div", {
        className: E.Iv,
        children: [
            (0, l.jsx)(r.I, {
                size: a._3.SIZE_32,
                guildId: t,
                channelId: n,
                users: null == g ? [p] : [p, g],
                maxUsers: 2,
            }),
            (0, l.jsxs)(o.D, {
                className: E.nG,
                onClick: x,
                "aria-label": C.intl.formatToPlainString(C.t.VOmeSq, { name: v }),
                children: [
                    (null != y || null != I) &&
                        (0, l.jsx)(c.A, { size: "reaction", className: E.FA, emojiId: I, emojiName: y, animated: S }),
                    (0, l.jsx)(u.E, { variant: "text-md/medium", children: v }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, s.bG)([x], () => x.getSoundboardEchoes());
    return (0, l.jsx)("div", {
        className: E.ei,
        children: i.map((e) => (0, l.jsx)(I, { guildId: t, channelId: n, ...e }, e.sound.soundId)),
    });
}
