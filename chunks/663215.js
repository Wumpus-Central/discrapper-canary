n.d(t, {
    FS: () => A,
    ZP: () => T
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
    p = n(178106),
    h = n(763296),
    m = n(697426),
    g = n(549771),
    E = n(710111),
    b = n(474936);
function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.map((e, t) => ({
            type: m.vB.SOUND,
            sound: e,
            index: t
        }));
    return t ? n.sort((e, t) => f.default.compare(e.sound.soundId, t.sound.soundId)) : n;
}
function O(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: a, sortById: o } = e,
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
            items: u
        });
}
function v(e) {
    let { sections: t, guilds: n, currentGuildId: r, allSounds: i, hasNitro: a } = e;
    for (let e of n) {
        var o;
        if (e.id === r) continue;
        let n = y(null != (o = i.get(e.id)) ? o : []);
        n.length > 0 &&
            t.push({
                categoryInfo: {
                    type: m.bg.GUILD,
                    guild: e,
                    isNitroLocked: !a
                },
                key: e.id,
                items: n
            });
    }
}
function I(e, t, n) {
    var r;
    let { currentGuildHasAddPermissions: i, allSounds: a, filterOutEmptyCurrentGuild: o } = n,
        s = null != (r = a.get(t.id)) ? r : [],
        l = y(s),
        c = s.length < (0, u.nL)(t) && i,
        d = 0 === l.length;
    (c || d) &&
        !o &&
        l.push({
            type: m.vB.ADD_SOUND,
            guild: t
        }),
        (o && d) ||
            e.push({
                categoryInfo: {
                    type: m.bg.GUILD,
                    guild: t,
                    isNitroLocked: !1
                },
                key: t.id,
                items: l
            });
}
function S(e, t) {
    var n;
    let r = null != (n = t.get(E.X8)) ? n : E.Hy;
    e.push({
        key: m.bg.DEFAULTS,
        categoryInfo: { type: m.bg.DEFAULTS },
        items: y(r)
    });
}
function T(e) {
    let { filterOutEmptyCurrentGuild: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        u = d.ZP.isPremium(o, b.p9.TIER_2),
        [f, E, y] = (0, i.Wu)([h.Z], () => [h.Z.getSounds(), h.Z.getFavorites(), h.Z.isFetching()]),
        T = (0, g.h)(e, !1),
        A = (0, i.Wu)([s.Z], () => {
            let e = [];
            return (
                T.forEach((t) => {
                    let n = s.Z.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        C = d.ZP.canUseSoundboardEverywhere(o),
        R = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? void 0 : e.guild_id)),
        P = (0, i.e7)(
            [l.Z],
            () => {
                let { canCreateExpressions: e } = (0, a.Gw)(R);
                return e;
            },
            [R]
        ),
        { canSeeRecentlyHeard: w, canSeeFrequentlyPlayed: D } = (0, _.k)({
            location: 'soundboard-useSoundGrid',
            autoTrackExposure: !0
        }),
        L = N(),
        x = (0, i.Wu)([p.Z], () => p.Z.recentlyHeardSoundIds);
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        return n
            ? (S(i, f),
              {
                  categories: i,
                  allSounds: f,
                  isFetching: y,
                  soundCounts: {
                      favoriteSoundCount: 0,
                      unlockedCustomSoundCount: 0,
                      lockedCustomSoundCount: 0
                  }
              })
            : (O({
                  sections: i,
                  guildIds: T,
                  allSounds: f,
                  potentialSoundIdsForSection: Array.from(E),
                  sectionType: m.bg.FAVORITES,
                  sortById: !0
              }),
              w &&
                  O({
                      sections: i,
                      guildIds: T,
                      allSounds: f,
                      potentialSoundIdsForSection: x,
                      sectionType: m.bg.RECENTLY_HEARD,
                      sortById: !1
                  }),
              D &&
                  O({
                      sections: i,
                      guildIds: T,
                      allSounds: f,
                      potentialSoundIdsForSection: L.map((e) => e.soundId),
                      sectionType: m.bg.FREQUENTLY_USED,
                      sortById: !1
                  }),
              void 0 !== R &&
                  I(i, R, {
                      currentGuildHasAddPermissions: P,
                      allSounds: f,
                      filterOutEmptyCurrentGuild: t
                  }),
              C || S(i, f),
              v({
                  sections: i,
                  guilds: A,
                  currentGuildId: null == R ? void 0 : R.id,
                  allSounds: f,
                  hasNitro: u
              }),
              C && S(i, f),
              i.forEach((t) => {
                  t.categoryInfo.type === m.bg.GUILD && (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
              }),
              {
                  categories: i,
                  allSounds: f,
                  isFetching: y,
                  soundCounts: {
                      favoriteSoundCount: E.size,
                      unlockedCustomSoundCount: e,
                      lockedCustomSoundCount: r
                  }
              });
    }, [T, f, E, x, L, D, w, R, P, t, C, A, n, y, u]);
}
function A(e, t, n) {
    return r.useMemo(
        () =>
            n.length > 0
                ? [
                      {
                          key: m.bg.SEARCH,
                          categoryInfo: { type: m.bg.SEARCH },
                          items: y(t, !1)
                      }
                  ]
                : e,
        [e, n.length, t]
    );
}
function N() {
    return (
        r.useEffect(() => {
            o.DZ.loadIfNecessary();
        }, []),
        (0, i.e7)([p.Z], () => p.Z.frecentlyPlayedSounds)
    );
}
