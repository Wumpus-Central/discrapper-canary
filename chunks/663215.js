n.d(t, {
    FS: () => C,
    ZP: () => T,
}),
    n(388685),
    n(539854),
    n(472816),
    n(794429);
var r = n(473749),
    i = n(442837),
    a = n(357156),
    o = n(675478),
    s = n(430824),
    l = n(496675),
    c = n(594174),
    u = n(267642),
    d = n(74538),
    f = n(164878),
    p = n(178106),
    _ = n(763296),
    m = n(697426),
    h = n(549771),
    g = n(24087),
    E = n(710111),
    b = n(474936);
function y(e, t) {
    return (
        null != t && (e = t(e)),
        e.map((e, t) => ({
            type: m.vB.SOUND,
            sound: e,
            index: t,
        }))
    );
}
function O(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: a, sortSoundsFn: o } = e,
        s = {};
    for (let e of [...n, E.X8]) {
        var l;
        for (let t of null != (l = r.get(e)) ? l : []) null != i.find((e) => e === t.soundId) && (s[t.soundId] = t);
    }
    let c = [];
    for (let e of i) {
        let t = s[e];
        null != t && c.push(t);
    }
    let u = y(c, o);
    u.length > 0 &&
        t.push({
            key: a,
            categoryInfo: { type: a },
            items: u,
        });
}
function v(e) {
    let { sections: t, guilds: n, currentGuildId: r, allSounds: i, hasNitro: a, sortSoundsFn: o } = e;
    for (let e of n) {
        var s;
        if (e.id === r) continue;
        let n = y(null != (s = i.get(e.id)) ? s : [], o);
        n.length > 0 &&
            t.push({
                categoryInfo: {
                    type: m.bg.GUILD,
                    guild: e,
                    isNitroLocked: !a,
                },
                key: e.id,
                items: n,
            });
    }
}
function S(e, t, n) {
    var r;
    let { currentGuildHasAddPermissions: i, allSounds: a, filterOutEmptyCurrentGuild: o, sortSoundsFn: s } = n,
        l = null != (r = a.get(t.id)) ? r : [],
        c = y(l, s),
        d = l.length < (0, u.nL)(t) && i,
        f = 0 === c.length;
    (d || f) &&
        !o &&
        c.push({
            type: m.vB.ADD_SOUND,
            guild: t,
        }),
        (o && f) ||
            e.push({
                categoryInfo: {
                    type: m.bg.GUILD,
                    guild: t,
                    isNitroLocked: !1,
                },
                key: t.id,
                items: c,
            });
}
function I(e, t) {
    var n;
    let r = null != (n = t.get(E.X8)) ? n : E.Hy;
    e.push({
        key: m.bg.DEFAULTS,
        categoryInfo: { type: m.bg.DEFAULTS },
        items: y(r, g.l),
    });
}
function T(e) {
    let { filterOutEmptyCurrentGuild: t = !1, moveDefaultsToBottom: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        y = d.ZP.isPremium(u, b.PremiumTypes.TIER_2),
        [T, C, N] = (0, i.Wu)([_.Z], () => [_.Z.getSounds(), _.Z.getFavorites(), _.Z.isFetching()]),
        P = (0, g.t)(),
        R = (0, h.h)(e, !1),
        w = (0, i.Wu)([s.Z], () => {
            let e = [];
            return (
                R.forEach((t) => {
                    let n = s.Z.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        D = d.ZP.canUseSoundboardEverywhere(u),
        x = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? void 0 : e.guild_id)),
        L = (0, i.e7)([l.Z], () => {
            let { canCreateExpressions: e } = (0, a.Gw)(x);
            return e;
        }, [x]),
        { canSeeRecentlyHeard: j, canSeeFrequentlyPlayed: M } = (0, f.k)({
            location: "soundboard-useSoundGrid",
            autoTrackExposure: !0,
        }),
        k = A(),
        U = (0, i.Wu)([p.Z], () => p.Z.recentlyHeardSoundIds);
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        if (o) {
            var a;
            return (
                I(i, T),
                {
                    categories: i,
                    availableSounds: null != (a = T.get(E.X8)) ? a : E.Hy,
                    isFetching: N,
                    soundCounts: {
                        favoriteSoundCount: 0,
                        unlockedCustomSoundCount: 0,
                        lockedCustomSoundCount: 0,
                    },
                }
            );
        }
        return (
            O({
                sections: i,
                guildIds: R,
                allSounds: T,
                potentialSoundIdsForSection: Array.from(C),
                sectionType: m.bg.FAVORITES,
                sortSoundsFn: g.l,
            }),
            j &&
                O({
                    sections: i,
                    guildIds: R,
                    allSounds: T,
                    potentialSoundIdsForSection: U,
                    sectionType: m.bg.RECENTLY_HEARD,
                }),
            M &&
                O({
                    sections: i,
                    guildIds: R,
                    allSounds: T,
                    potentialSoundIdsForSection: k.map((e) => e.soundId),
                    sectionType: m.bg.FREQUENTLY_USED,
                }),
            void 0 !== x &&
                S(i, x, {
                    currentGuildHasAddPermissions: L,
                    allSounds: T,
                    filterOutEmptyCurrentGuild: t,
                    sortSoundsFn: P,
                }),
            n || D || I(i, T),
            v({
                sections: i,
                guilds: w,
                currentGuildId: null == x ? void 0 : x.id,
                allSounds: T,
                hasNitro: y,
                sortSoundsFn: P,
            }),
            (n || D) && I(i, T),
            i.forEach((t) => {
                t.categoryInfo.type === m.bg.GUILD &&
                    (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
            }),
            {
                categories: i,
                availableSounds: Array.from(T.values()).flat(),
                isFetching: N,
                soundCounts: {
                    favoriteSoundCount: C.size,
                    unlockedCustomSoundCount: e,
                    lockedCustomSoundCount: r,
                },
            }
        );
    }, [R, T, C, U, k, M, j, x, L, t, n, D, w, o, N, y, P]);
}
function C(e, t, n) {
    return r.useMemo(
        () =>
            n.length > 0
                ? [
                      {
                          key: m.bg.SEARCH,
                          categoryInfo: { type: m.bg.SEARCH },
                          items: y(t),
                      },
                  ]
                : e,
        [e, n.length, t],
    );
}
function A() {
    return (
        r.useEffect(() => {
            o.DZ.loadIfNecessary();
        }, []),
        (0, i.e7)([p.Z], () => p.Z.frecentlyPlayedSounds)
    );
}
