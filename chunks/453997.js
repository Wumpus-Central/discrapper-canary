(n.d(t, { Ay: () => I, BE: () => A, p0: () => h }), n(321073));
var i,
    r = n(582128),
    a = n(17928),
    s = n(793574),
    l = n(287809),
    o = n(158045),
    d = n(209932),
    c = n(699840),
    u = n(805143),
    _ = n(194567),
    E = n(980504);
let A = 6;
var h =
    (((i = {}).FAVORITE = "favorite"),
    (i.FREQUENTLY_USED = "frequently_used"),
    (i.GUILD = "guild"),
    (i.DEFAULT = "default"),
    i);
function I(e) {
    let { channel: t, currentGuildId: n } = e,
        i = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
        h = o.Ay.canUseSoundboardEverywhere(i),
        [I, f, p, T] = (0, a.yK)([d.A], () => [
            d.A.isFetching(),
            d.A.getSounds(),
            d.A.getFavorites(),
            d.A.getFrequentlyUsedSoundIds(),
        ]),
        { unlockedFavoritesAndFrequentlyUsedSounds: m, lockedSounds: g } = (function (e) {
            let {
                    channel: t,
                    canUseCrossGuildSounds: n,
                    allSounds: i,
                    favoriteSoundsIds: a,
                    allFrequentlyUsedSoundIds: l,
                } = e,
                o = r.useMemo(() => l.filter((e) => !a.has(e)).slice(0, 3), [l, a]),
                d = (0, u.Y)(t, !1),
                { sortOrder: E } = c.q.useConfig({ location: "useFavoriteAndFrequentlyUsedSounds" }),
                { unlockedFavoritesAndFrequentlyUsedSounds: h, lockedSounds: I } = r.useMemo(() => {
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
                    function u(e) {
                        return e.guildId !== t?.guild_id && "0" !== e.guildId && !n;
                    }
                    let h = c(a),
                        I = "favorite-date" === E ? (0, _.XP)(h, !1) : (0, _.U9)(h, !1),
                        f = c(o),
                        p = [],
                        T = [];
                    function m() {
                        let e = n ? A : 5;
                        return p.length >= e && (n || T.length > 0);
                    }
                    for (let e of I) {
                        let t = { ...e, type: "favorite", analyticsLocationSection: s.A.SOUNDBOARD_FAVORITES_SECTION };
                        if ((u(e) ? T.push(t) : p.push(t), m())) break;
                    }
                    if (!m())
                        for (let e of f) {
                            let t = {
                                ...e,
                                type: "frequently_used",
                                analyticsLocationSection: s.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
                            };
                            if ((u(e) ? T.push(t) : p.push(t), m())) break;
                        }
                    return { unlockedFavoritesAndFrequentlyUsedSounds: p, lockedSounds: T };
                }, [d, i, a, o, t, n, E]);
            return { unlockedFavoritesAndFrequentlyUsedSounds: h, lockedSounds: I };
        })({ channel: t, canUseCrossGuildSounds: h, allSounds: f, favoriteSoundsIds: p, allFrequentlyUsedSoundIds: T });
    return {
        sounds: (function (e) {
            let { allSounds: t, currentGuildId: n, unlockedFavoritesAndFrequentlyUsedSounds: i, lockedSounds: a } = e;
            return r.useMemo(() => {
                let e = a.length > 0 ? a[0] : null,
                    r = null != e,
                    l = r ? 5 : A,
                    o = [...i];
                if (o.length < l) {
                    let e = null != n ? t.get(n) : E.pD;
                    for (let t of (0, _.U9)(
                        null != e && e.length > 0
                            ? e?.filter((e) => e.available && !o.some((t) => t.soundId === e.soundId))
                            : E.pD,
                        !1,
                    )) {
                        if (o.length >= l) break;
                        let e = { ...t, type: "guild", analyticsLocationSection: s.A.SOUNDBOARD_GUILD_SOUNDS_SECTION };
                        o.push(e);
                    }
                }
                if (o.length < l) {
                    let e = t.get("0") ?? E.pD;
                    for (let t of (0, _.U9)(
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
        })({ allSounds: f, currentGuildId: n, unlockedFavoritesAndFrequentlyUsedSounds: m, lockedSounds: g }),
        hasLockedSound: g.length > 0,
        isFetching: I,
    };
}
