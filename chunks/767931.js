n.d(t, { A: () => T });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(342952),
    u = n(778712),
    c = n(939249),
    d = n(834730),
    h = n(565645),
    m = n(114166),
    f = n(209932),
    p = n(813564),
    g = n(228366),
    x = n(734057),
    A = n(927813),
    C = n(714736);
n(980504);
let E = 7.5 * A.A.Millis.SECOND,
    I = new Map(),
    y = new Map();
class S extends a.Ay.Store {
    initialize() {
        this.waitFor(x.A);
    }
    static displayName = "SoundboardEchoStore";
    getSoundboardEchoes() {
        return Array.from(I.values()).sort((e, t) => e.lastPlayedAt - t.lastPlayedAt);
    }
    getSoundboardEcho(e) {
        return I.get(e);
    }
}
let v = new S(g.h, {
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
        let c = x.A.getChannel(n)?.getGuildId();
        if (null == c) return !1;
        let { enabled: d } = (0, C.j)(c, "handleSoundPlayStart");
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
            let t,
                n,
                { soundId: l, sound: i, authorId: s, playedByUserId: r, isEcho: a } = e,
                o = I.get(l);
            (null == o
                ? I.set(l, {
                      sound: i,
                      count: 1,
                      authorId: s,
                      playedByUserIds: new Set([r]),
                      mostRecentPlayedByUserId: a ? r : null,
                      lastPlayedAt: Date.now(),
                  })
                : I.set(l, {
                      ...o,
                      count: o.count + 1,
                      playedByUserIds: o.playedByUserIds.add(r),
                      mostRecentPlayedByUserId: r === s ? o.mostRecentPlayedByUserId : r,
                      lastPlayedAt: Date.now(),
                  }),
                null != (t = y.get(l)) && clearTimeout(t),
                (n = setTimeout(() => {
                    g.h.dispatch({ type: "SOUNDBOARD_ECHO_EXPIRED", soundId: l });
                }, E)),
                y.set(l, n));
        })({ soundId: t, sound: h, authorId: i ?? l, playedByUserId: l, isEcho: u });
    },
    VOICE_CHANNEL_SELECT: function (e) {
        (y.forEach(clearTimeout), y.clear(), I.clear());
    },
    SOUNDBOARD_ECHO_EXPIRED: function (e) {
        let { soundId: t } = e;
        (y.delete(t), I.delete(t));
    },
});
var N = n(287809),
    _ = n(375708),
    j = n(998812);
function b(e) {
    let { guildId: t, channelId: n, sound: s, authorId: g, mostRecentPlayedByUserId: x, count: A } = e,
        { authorUser: C, mostRecentPlayedUser: E } = (0, a.cf)([N.default], () => ({
            authorUser: N.default.getUser(g),
            mostRecentPlayedUser: N.default.getUser(x),
        })),
        I = i.useCallback(() => {
            (0, p.CZ)(s, n);
        }, [n, s]),
        y = (0, a.bG)([f.A], () => f.A.isPlayingSound(s.soundId), [s]);
    if (null == t || null == C) return null;
    let { emojiId: S, emojiName: v, emojiAnimated: b, name: T } = s;
    return (0, l.jsxs)("div", {
        className: j.Iv,
        children: [
            (0, l.jsx)(o.I, {
                size: u._3.SIZE_32,
                guildId: t,
                channelId: n,
                users: null == E ? [C] : [C, E],
                maxUsers: 2,
            }),
            (0, l.jsxs)(c.D, {
                className: r()(j.nG, { [j.Tz]: y }),
                onClick: I,
                "aria-label": _.intl.formatToPlainString(_.t.VOmeSq, { name: T }),
                children: [
                    (null != v || null != S) &&
                        (0, l.jsx)(h.A, { size: "reaction", className: j.FA, emojiId: S, emojiName: v, animated: b }),
                    (0, l.jsx)(d.E, { variant: "text-md/medium", children: T }),
                    (0, l.jsx)("div", { className: j.SU }),
                    (0, l.jsxs)(d.E, {
                        variant: "text-md/medium",
                        className: j.Zi,
                        children: ["x", (0, l.jsx)(m.A, { className: j.Zi, value: A, digitWidth: 8 })],
                    }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, a.bG)([v], () => v.getSoundboardEchoes());
    return (0, l.jsx)("div", {
        className: j.ei,
        children: i.map((e) => (0, l.jsx)(b, { guildId: t, channelId: n, ...e }, e.sound.soundId)),
    });
}
