n.d(t, { A: () => A, p: () => E }), n(321073);
var i,
    r = n(582128),
    a = n(17928),
    s = n(793574),
    l = n(287809),
    o = n(158045),
    d = n(209932),
    c = n(805143),
    u = n(194567),
    _ = n(980504),
    E =
        (((i = {}).FAVORITE = "favorite"),
        (i.FREQUENTLY_USED = "frequently_used"),
        (i.GUILD = "guild"),
        (i.DEFAULT = "default"),
        i);
function A(e) {
    let { channel: t, currentGuildId: n } = e,
        i = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
        E = o.Ay.canUseSoundboardEverywhere(i),
        [A, h, I, f] = (0, a.yK)([d.A], () => [
            d.A.isFetching(),
            d.A.getSounds(),
            d.A.getFavorites(),
            d.A.getFrequentlyUsedSoundIds(),
        ]),
        { unlockedFavoritesAndFrequentlyUsedSounds: p, lockedSounds: T } = (function (e) {
            let {
                    channel: t,
                    canUseCrossGuildSounds: n,
                    allSounds: i,
                    favoriteSoundsIds: a,
                    allFrequentlyUsedSoundIds: l,
                } = e,
                o = r.useMemo(() => l.filter((e) => !a.has(e)).slice(0, 3), [l, a]),
                d = (0, c.Y)(t, !1),
                { unlockedFavoritesAndFrequentlyUsedSounds: _, lockedSounds: E } = r.useMemo(() => {
                    let e = [...d, "0"],
                        r = new Set([...a, ...o]),
                        l = (function () {
                            let t = {},
                                n = 0;
                            for (let a of e)
                                for (let e of i.get(a) ?? [])
                                    if (e.available && r.has(e.soundId) && ((t[e.soundId] = e), ++n === r.size))
                                        return t;
                            return t;
                        })();
                    function c(e) {
                        let t = [];
                        for (let n of e) {
                            let e = l[n];
                            null != e && t.push(e);
                        }
                        return t;
                    }
                    function _(e) {
                        return e.guildId !== t?.guild_id && "0" !== e.guildId && !n;
                    }
                    let E = (0, u.U)(c(a), !1),
                        A = c(o),
                        h = [],
                        I = [];
                    function f() {
                        let e = n ? 6 : 5;
                        return h.length >= e && (n || I.length > 0);
                    }
                    for (let e of E) {
                        let t = { ...e, type: "favorite", analyticsLocationSection: s.A.SOUNDBOARD_FAVORITES_SECTION };
                        if ((_(e) ? I.push(t) : h.push(t), f())) break;
                    }
                    if (!f())
                        for (let e of A) {
                            let t = {
                                ...e,
                                type: "frequently_used",
                                analyticsLocationSection: s.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
                            };
                            if ((_(e) ? I.push(t) : h.push(t), f())) break;
                        }
                    return { unlockedFavoritesAndFrequentlyUsedSounds: h, lockedSounds: I };
                }, [d, i, a, o, t, n]);
            return { unlockedFavoritesAndFrequentlyUsedSounds: _, lockedSounds: E };
        })({ channel: t, canUseCrossGuildSounds: E, allSounds: h, favoriteSoundsIds: I, allFrequentlyUsedSoundIds: f });
    return {
        sounds: (function (e) {
            let { allSounds: t, currentGuildId: n, unlockedFavoritesAndFrequentlyUsedSounds: i, lockedSounds: a } = e;
            return r.useMemo(() => {
                let e = a.length > 0 ? a[0] : null,
                    r = null != e,
                    l = r ? 5 : 6,
                    o = [...i];
                if (o.length < l) {
                    let e = null != n ? t.get(n) : _.pD;
                    for (let t of (0, u.U)(
                        null != e && e.length > 0
                            ? e?.filter((e) => e.available && !o.some((t) => t.soundId === e.soundId))
                            : _.pD,
                        !1,
                    )) {
                        if (o.length >= l) break;
                        let e = { ...t, type: "guild", analyticsLocationSection: s.A.SOUNDBOARD_GUILD_SOUNDS_SECTION };
                        o.push(e);
                    }
                }
                if (o.length < l) {
                    let e = t.get("0") ?? _.pD;
                    for (let t of (0, u.U)(
                        e.filter((e) => !o.some((t) => t.soundId === e.soundId)),
                        !1,
                    )) {
                        if (o.length >= l) break;
                        let e = {
                            ...t,
                            type: "default",
                            analyticsLocationSection: s.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
                        };
                        o.push(e);
                    }
                }
                let d = o.slice(0, l);
                return r ? [...d, e] : d;
            }, [i, a, t, n]);
        })({ allSounds: h, currentGuildId: n, unlockedFavoritesAndFrequentlyUsedSounds: p, lockedSounds: T }),
        hasLockedSound: T.length > 0,
        isFetching: A,
    };
}
