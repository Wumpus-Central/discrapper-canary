n.d(t, { A: () => N });
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
    f = n(927813),
    p = n(714736);
n(980504);
let g = 7.5 * f.A.Millis.SECOND,
    x = new Map(),
    A = new Map();
class C extends s.Ay.Store {
    initialize() {
        this.waitFor(m.A);
    }
    static displayName = "SoundboardEchoStore";
    getSoundboardEchoes() {
        return Array.from(x.values()).sort((e, t) => e.lastPlayedAt - t.lastPlayedAt);
    }
    getSoundboardEcho(e) {
        return x.get(e);
    }
}
let E = new C(h.h, {
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
        let { enabled: d } = (0, p.j)(c, "handleSoundPlayStart");
        if (!d) return !1;
        let f = {
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
                o = x.get(l);
            (null == o
                ? x.set(l, {
                      sound: i,
                      count: 1,
                      authorId: s,
                      playedByUserIds: new Set([r]),
                      mostRecentPlayedByUserId: a ? r : null,
                      lastPlayedAt: Date.now(),
                  })
                : x.set(l, {
                      ...o,
                      count: o.count + 1,
                      playedByUserIds: o.playedByUserIds.add(r),
                      mostRecentPlayedByUserId: r === s ? o.mostRecentPlayedByUserId : r,
                      lastPlayedAt: Date.now(),
                  }),
                null != (t = A.get(l)) && clearTimeout(t),
                (n = setTimeout(() => {
                    h.h.dispatch({ type: "SOUNDBOARD_ECHO_EXPIRED", soundId: l });
                }, g)),
                A.set(l, n));
        })({ soundId: t, sound: f, authorId: i ?? l, playedByUserId: l, isEcho: u });
    },
    VOICE_CHANNEL_SELECT: function (e) {
        (A.forEach(clearTimeout), A.clear(), x.clear());
    },
    SOUNDBOARD_ECHO_EXPIRED: function (e) {
        let { soundId: t } = e;
        (A.delete(t), x.delete(t));
    },
});
var I = n(287809),
    y = n(375708),
    S = n(998812);
function v(e) {
    let { guildId: t, channelId: n, sound: h, authorId: m, mostRecentPlayedByUserId: f } = e,
        { authorUser: p, mostRecentPlayedUser: g } = (0, s.cf)([I.default], () => ({
            authorUser: I.default.getUser(m),
            mostRecentPlayedUser: I.default.getUser(f),
        })),
        x = i.useCallback(() => {
            (0, d.CZ)(h, n);
        }, [n, h]);
    if (null == t || null == p) return null;
    let { emojiId: A, emojiName: C, emojiAnimated: E, name: v } = h;
    return (0, l.jsxs)("div", {
        className: S.Iv,
        children: [
            (0, l.jsx)(r.I, {
                size: a._3.SIZE_32,
                guildId: t,
                channelId: n,
                users: null == g ? [p] : [p, g],
                maxUsers: 2,
            }),
            (0, l.jsxs)(o.D, {
                className: S.nG,
                onClick: x,
                "aria-label": y.intl.formatToPlainString(y.t.VOmeSq, { name: v }),
                children: [
                    (null != C || null != A) &&
                        (0, l.jsx)(c.A, { size: "reaction", className: S.FA, emojiId: A, emojiName: C, animated: E }),
                    (0, l.jsx)(u.E, { variant: "text-md/medium", children: v }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, s.bG)([E], () => E.getSoundboardEchoes());
    return (0, l.jsx)("div", {
        className: S.ei,
        children: i.map((e) => (0, l.jsx)(v, { guildId: t, channelId: n, ...e }, e.sound.soundId)),
    });
}
