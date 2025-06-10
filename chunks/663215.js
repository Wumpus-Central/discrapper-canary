n.d(t, {
    FS: () => N,
    ZP: () => A
}),
    n(642613),
    n(388685),
    n(539854);
var r = n(73800),
    i = n(442837),
    a = n(357156),
    o = n(675478),
    s = n(430824),
    l = n(496675),
    c = n(594174),
    u = n(267642),
    d = n(74538),
    f = n(709054),
    _ = n(164878),
    p = n(388081),
    h = n(178106),
    m = n(763296),
    g = n(697426),
    E = n(549771),
    b = n(710111),
    y = n(474936);
function O(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.map((e, t) => ({
            type: g.vB.SOUND,
            sound: e,
            index: t
        }));
    return t ? n.sort((e, t) => f.default.compare(e.sound.soundId, t.sound.soundId)) : n;
}
function v(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: a, sortById: o } = e,
        s = {};
    for (let e of [...n, b.X8]) {
        var l;
        for (let t of null != (l = r.get(e)) ? l : []) null != i.find((e) => e === t.soundId) && (s[t.soundId] = t);
    }
    let c = [];
    for (let e of i) {
        let t = s[e];
        null != t && c.push(t);
    }
    let u = O(c, o);
    u.length > 0 &&
        t.push({
            key: a,
            categoryInfo: { type: a },
            items: u
        });
}
function I(e) {
    let { sections: t, guilds: n, currentGuildId: r, allSounds: i, hasNitro: a } = e;
    for (let e of n) {
        var o;
        if (e.id === r) continue;
        let n = O(null != (o = i.get(e.id)) ? o : []);
        n.length > 0 &&
            t.push({
                categoryInfo: {
                    type: g.bg.GUILD,
                    guild: e,
                    isNitroLocked: !a
                },
                key: e.id,
                items: n
            });
    }
}
function T(e, t, n) {
    var r;
    let { currentGuildHasAddPermissions: i, allSounds: a, filterOutEmptyCurrentGuild: o } = n,
        s = null != (r = a.get(t.id)) ? r : [],
        l = O(s),
        c = s.length < (0, u.nL)(t) && i,
        d = 0 === l.length;
    (c || d) &&
        !o &&
        l.push({
            type: g.vB.ADD_SOUND,
            guild: t
        }),
        (o && d) ||
            e.push({
                categoryInfo: {
                    type: g.bg.GUILD,
                    guild: t,
                    isNitroLocked: !1
                },
                key: t.id,
                items: l
            });
}
function S(e, t) {
    var n;
    let r = null != (n = t.get(b.X8)) ? n : b.Hy;
    e.push({
        key: g.bg.DEFAULTS,
        categoryInfo: { type: g.bg.DEFAULTS },
        items: O(r)
    });
}
function A(e) {
    let { filterOutEmptyCurrentGuild: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        u = d.ZP.isPremium(o, y.p9.TIER_2),
        [f, b, O] = (0, i.Wu)([m.Z], () => [m.Z.getSounds(), m.Z.getFavorites(), m.Z.isFetching()]),
        A = (0, E.h)(e, !1),
        N = (0, i.Wu)([s.Z], () => {
            let e = [];
            return (
                A.forEach((t) => {
                    let n = s.Z.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        R = d.ZP.canUseSoundboardEverywhere(o),
        P = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? void 0 : e.guild_id)),
        w = (0, i.e7)(
            [l.Z],
            () => {
                let { canCreateExpressions: e } = (0, a.Gw)(P);
                return e;
            },
            [P]
        ),
        { canSeeRecentlyHeard: D, canSeeFrequentlyPlayed: L } = (0, _.k)({
            location: 'soundboard-useSoundGrid',
            autoTrackExposure: !0
        }),
        x = C(),
        M = (0, i.Wu)([h.Z], () => h.Z.recentlyHeardSoundIds),
        k = p.C.useExperiment({ location: 'useSoundGrid' });
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        if (n)
            return (
                S(i, f),
                {
                    categories: i,
                    allSounds: f,
                    isFetching: O,
                    soundCounts: {
                        favoriteSoundCount: 0,
                        unlockedCustomSoundCount: 0,
                        lockedCustomSoundCount: 0
                    }
                }
            );
        v({
            sections: i,
            guildIds: A,
            allSounds: f,
            potentialSoundIdsForSection: Array.from(b),
            sectionType: g.bg.FAVORITES,
            sortById: !0
        }),
            D &&
                v({
                    sections: i,
                    guildIds: A,
                    allSounds: f,
                    potentialSoundIdsForSection: M,
                    sectionType: g.bg.RECENTLY_HEARD,
                    sortById: !1
                }),
            L &&
                v({
                    sections: i,
                    guildIds: A,
                    allSounds: f,
                    potentialSoundIdsForSection: x.map((e) => e.soundId),
                    sectionType: g.bg.FREQUENTLY_USED,
                    sortById: !1
                }),
            void 0 !== P &&
                T(i, P, {
                    currentGuildHasAddPermissions: w,
                    allSounds: f,
                    filterOutEmptyCurrentGuild: t
                });
        let a = R || k.enabled;
        return (
            a || S(i, f),
            I({
                sections: i,
                guilds: N,
                currentGuildId: null == P ? void 0 : P.id,
                allSounds: f,
                hasNitro: u
            }),
            a && S(i, f),
            i.forEach((t) => {
                t.categoryInfo.type === g.bg.GUILD && (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
            }),
            {
                categories: i,
                allSounds: f,
                isFetching: O,
                soundCounts: {
                    favoriteSoundCount: b.size,
                    unlockedCustomSoundCount: e,
                    lockedCustomSoundCount: r
                }
            }
        );
    }, [A, f, b, M, x, L, D, P, w, t, R, N, n, O, u, k.enabled]);
}
function N(e, t, n) {
    return r.useMemo(
        () =>
            n.length > 0
                ? [
                      {
                          key: g.bg.SEARCH,
                          categoryInfo: { type: g.bg.SEARCH },
                          items: O(t, !1)
                      }
                  ]
                : e,
        [e, n.length, t]
    );
}
function C() {
    return (
        r.useEffect(() => {
            o.DZ.loadIfNecessary();
        }, []),
        (0, i.e7)([h.Z], () => h.Z.frecentlyPlayedSounds)
    );
}
