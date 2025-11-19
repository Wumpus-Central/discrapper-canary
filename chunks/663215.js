n.d(t, {
    FS: () => A,
    ZP: () => S,
}),
    n(388685),
    n(539854);
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
    _ = n(178106),
    p = n(763296),
    h = n(697426),
    m = n(549771),
    g = n(24087),
    E = n(710111),
    b = n(474936);
function y(e, t) {
    return (
        null != t && (e = t(e)),
        e.map((e, t) => ({
            type: h.vB.SOUND,
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
                    type: h.bg.GUILD,
                    guild: e,
                    isNitroLocked: !a,
                },
                key: e.id,
                items: n,
            });
    }
}
function I(e, t, n) {
    var r;
    let { currentGuildHasAddPermissions: i, allSounds: a, filterOutEmptyCurrentGuild: o, sortSoundsFn: s } = n,
        l = null != (r = a.get(t.id)) ? r : [],
        c = y(l, s),
        d = l.length < (0, u.nL)(t) && i,
        f = 0 === c.length;
    (d || f) &&
        !o &&
        c.push({
            type: h.vB.ADD_SOUND,
            guild: t,
        }),
        (o && f) ||
            e.push({
                categoryInfo: {
                    type: h.bg.GUILD,
                    guild: t,
                    isNitroLocked: !1,
                },
                key: t.id,
                items: c,
            });
}
function T(e, t) {
    var n;
    let r = null != (n = t.get(E.X8)) ? n : E.Hy;
    e.push({
        key: h.bg.DEFAULTS,
        categoryInfo: { type: h.bg.DEFAULTS },
        items: y(r, g.l),
    });
}
function S(e) {
    let { filterOutEmptyCurrentGuild: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        u = d.ZP.isPremium(o, b.PremiumTypes.TIER_2),
        [E, y, S] = (0, i.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites(), p.Z.isFetching()]),
        A = (0, g.t)(),
        N = (0, m.h)(e, !1),
        R = (0, i.Wu)([s.Z], () => {
            let e = [];
            return (
                N.forEach((t) => {
                    let n = s.Z.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        P = d.ZP.canUseSoundboardEverywhere(o),
        D = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? void 0 : e.guild_id)),
        w = (0, i.e7)([l.Z], () => {
            let { canCreateExpressions: e } = (0, a.Gw)(D);
            return e;
        }, [D]),
        { canSeeRecentlyHeard: L, canSeeFrequentlyPlayed: x } = (0, f.k)({
            location: "soundboard-useSoundGrid",
            autoTrackExposure: !0,
        }),
        M = C(),
        k = (0, i.Wu)([_.Z], () => _.Z.recentlyHeardSoundIds);
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        return n
            ? (T(i, E),
              {
                  categories: i,
                  allSounds: E,
                  isFetching: S,
                  soundCounts: {
                      favoriteSoundCount: 0,
                      unlockedCustomSoundCount: 0,
                      lockedCustomSoundCount: 0,
                  },
              })
            : (O({
                  sections: i,
                  guildIds: N,
                  allSounds: E,
                  potentialSoundIdsForSection: Array.from(y),
                  sectionType: h.bg.FAVORITES,
                  sortSoundsFn: g.l,
              }),
              L &&
                  O({
                      sections: i,
                      guildIds: N,
                      allSounds: E,
                      potentialSoundIdsForSection: k,
                      sectionType: h.bg.RECENTLY_HEARD,
                  }),
              x &&
                  O({
                      sections: i,
                      guildIds: N,
                      allSounds: E,
                      potentialSoundIdsForSection: M.map((e) => e.soundId),
                      sectionType: h.bg.FREQUENTLY_USED,
                  }),
              void 0 !== D &&
                  I(i, D, {
                      currentGuildHasAddPermissions: w,
                      allSounds: E,
                      filterOutEmptyCurrentGuild: t,
                      sortSoundsFn: A,
                  }),
              P || T(i, E),
              v({
                  sections: i,
                  guilds: R,
                  currentGuildId: null == D ? void 0 : D.id,
                  allSounds: E,
                  hasNitro: u,
                  sortSoundsFn: A,
              }),
              P && T(i, E),
              i.forEach((t) => {
                  t.categoryInfo.type === h.bg.GUILD &&
                      (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
              }),
              {
                  categories: i,
                  allSounds: E,
                  isFetching: S,
                  soundCounts: {
                      favoriteSoundCount: y.size,
                      unlockedCustomSoundCount: e,
                      lockedCustomSoundCount: r,
                  },
              });
    }, [N, E, y, k, M, x, L, D, w, t, P, R, n, S, u, A]);
}
function A(e, t, n) {
    return r.useMemo(
        () =>
            n.length > 0
                ? [
                      {
                          key: h.bg.SEARCH,
                          categoryInfo: { type: h.bg.SEARCH },
                          items: y(t),
                      },
                  ]
                : e,
        [e, n.length, t],
    );
}
function C() {
    return (
        r.useEffect(() => {
            o.DZ.loadIfNecessary();
        }, []),
        (0, i.e7)([_.Z], () => _.Z.frecentlyPlayedSounds)
    );
}
