n.d(t, { A: () => _ }), n(321073);
var i = n(582128),
    r = n(17928),
    a = n(793574),
    s = n(287809),
    l = n(158045),
    o = n(209932),
    d = n(805143),
    c = n(194567),
    u = n(980504);
function _(e) {
    let { channel: t, currentGuildId: n } = e,
        _ = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        E = l.Ay.canUseSoundboardEverywhere(_),
        [A, h, I, f] = (0, r.yK)([o.A], () => [
            o.A.isFetching(),
            o.A.getSounds(),
            o.A.getFavorites(),
            o.A.getFrequentlyUsedSoundIds(),
        ]),
        { unlockedFavoritesAndFrequentlyUsedSounds: p, lockedSounds: T } = (function (e) {
            let {
                    channel: t,
                    canUseCrossGuildSounds: n,
                    allSounds: r,
                    favoriteSoundsIds: s,
                    allFrequentlyUsedSoundIds: l,
                } = e,
                o = i.useMemo(() => l.filter((e) => !s.has(e)).slice(0, 3), [l, s]),
                u = (0, d.Y)(t, !1),
                { unlockedFavoritesAndFrequentlyUsedSounds: _, lockedSounds: E } = i.useMemo(() => {
                    let e = [...u, "0"],
                        i = new Set([...s, ...o]),
                        l = (function () {
                            let t = {},
                                n = 0;
                            for (let a of e)
                                for (let e of r.get(a) ?? [])
                                    if (e.available && i.has(e.soundId) && ((t[e.soundId] = e), ++n === i.size))
                                        return t;
                            return t;
                        })();
                    function d(e) {
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
                    let E = (0, c.U)(d(s), !1),
                        A = d(o),
                        h = [],
                        I = [];
                    function f() {
                        let e = n ? 6 : 5;
                        return h.length >= e && (n || I.length > 0);
                    }
                    for (let e of E) {
                        let t = { ...e, analyticsLocationSection: a.A.SOUNDBOARD_FAVORITES_SECTION };
                        if ((_(e) ? I.push(t) : h.push(t), f())) break;
                    }
                    if (!f())
                        for (let e of A) {
                            let t = { ...e, analyticsLocationSection: a.A.SOUNDBOARD_FREQUENTLY_USED_SECTION };
                            if ((_(e) ? I.push(t) : h.push(t), f())) break;
                        }
                    return { unlockedFavoritesAndFrequentlyUsedSounds: h, lockedSounds: I };
                }, [u, r, s, o, t, n]);
            return { unlockedFavoritesAndFrequentlyUsedSounds: _, lockedSounds: E };
        })({ channel: t, canUseCrossGuildSounds: E, allSounds: h, favoriteSoundsIds: I, allFrequentlyUsedSoundIds: f });
    return {
        sounds: (function (e) {
            let { allSounds: t, currentGuildId: n, unlockedFavoritesAndFrequentlyUsedSounds: r, lockedSounds: s } = e;
            return i.useMemo(() => {
                let e = s.length > 0 ? s[0] : null,
                    i = null != e,
                    l = i ? 5 : 6,
                    o = [...r];
                if (o.length < l) {
                    let e = null != n ? t.get(n) : u.pD;
                    for (let t of (0, c.U)(
                        null != e && e.length > 0
                            ? e?.filter((e) => e.available && !o.some((t) => t.soundId === e.soundId))
                            : u.pD,
                        !1,
                    )) {
                        if (o.length >= l) break;
                        let e = { ...t, analyticsLocationSection: a.A.SOUNDBOARD_GUILD_SOUNDS_SECTION };
                        o.push(e);
                    }
                }
                if (o.length < l) {
                    let e = t.get("0") ?? u.pD;
                    for (let t of (0, c.U)(
                        e.filter((e) => !o.some((t) => t.soundId === e.soundId)),
                        !1,
                    )) {
                        if (o.length >= l) break;
                        let e = { ...t, analyticsLocationSection: a.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION };
                        o.push(e);
                    }
                }
                let d = o.slice(0, l);
                return i ? [...d, e] : d;
            }, [r, s, t, n]);
        })({ allSounds: h, currentGuildId: n, unlockedFavoritesAndFrequentlyUsedSounds: p, lockedSounds: T }),
        isFetching: A,
    };
}
