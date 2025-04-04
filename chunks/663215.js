n.d(t, {
    FS: () => C,
    ZP: () => A
}),
    n(230036),
    n(47120),
    n(653041);
var r = n(192379),
    i = n(442837),
    o = n(357156),
    a = n(675478),
    s = n(430824),
    l = n(496675),
    c = n(594174),
    u = n(267642),
    d = n(74538),
    f = n(709054),
    _ = n(164878),
    p = n(178106),
    h = n(975348),
    m = n(763296),
    g = n(697426),
    E = n(549771),
    b = n(710111),
    y = n(474936);
let v = 3;
function O(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.map((e, t) => ({
            type: g.vB.SOUND,
            sound: e,
            index: t
        }));
    return t ? n.sort((e, t) => f.default.compare(e.sound.soundId, t.sound.soundId)) : n;
}
function I(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: o, sortById: a } = e,
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
    let u = O(c, a);
    u.length > 0 &&
        t.push({
            key: o,
            categoryInfo: { type: o },
            items: u
        });
}
function S(e) {
    let { sections: t, guilds: n, currentGuildId: r, allSounds: i, hasNitro: o, rowLimit: a, shownAllGuildIds: s } = e;
    for (let e of n) {
        var l;
        if (e.id === r) continue;
        let n = O(null != (l = i.get(e.id)) ? l : []);
        if (n.length > 0) {
            let r = void 0 !== a ? v * a : Number.MAX_VALUE;
            n.length > r &&
                (s.includes(e.id) || (n = n.slice(0, r - 1)),
                n.push({
                    type: g.vB.SHOW_ALL,
                    guild: e
                })),
                t.push({
                    categoryInfo: {
                        type: g.bg.GUILD,
                        guild: e,
                        isNitroLocked: !o
                    },
                    key: e.id,
                    items: n
                });
        }
    }
}
function T(e, t, n) {
    var r;
    let { currentGuildHasAddPermissions: i, allSounds: o, filterOutEmptyCurrentGuild: a, rowLimit: s, shownAllGuildIds: l } = n,
        c = null != (r = o.get(t.id)) ? r : [],
        d = O(c),
        f = c.length < (0, u.nL)(t) && i,
        _ = 0 === d.length,
        p = (f || _) && !a,
        h = void 0 !== s ? v * s - +!!p : Number.MAX_VALUE,
        m = d.length;
    m > h && !l.includes(t.id) && (d = d.slice(0, h - 1)),
        p &&
            d.push({
                type: g.vB.ADD_SOUND,
                guild: t
            }),
        m > h &&
            d.push({
                type: g.vB.SHOW_ALL,
                guild: t
            }),
        (a && _) ||
            e.push({
                categoryInfo: {
                    type: g.bg.GUILD,
                    guild: t,
                    isNitroLocked: !1
                },
                key: t.id,
                items: d
            });
}
function N(e, t) {
    var n;
    let r = null != (n = t.get(b.X8)) ? n : b.Hy;
    e.push({
        key: g.bg.DEFAULTS,
        categoryInfo: { type: g.bg.DEFAULTS },
        items: O(r)
    });
}
function A(e) {
    let { filterOutEmptyCurrentGuild: t = !1, shownAllGuildIds: n = [] } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        f = d.ZP.isPremium(u, y.p9.TIER_2),
        [b, v, O] = (0, i.Wu)([m.Z], () => [m.Z.getSounds(), m.Z.getFavorites(), m.Z.isFetching()]),
        A = (0, E.h)(e, !1),
        C = (0, i.Wu)([s.Z], () => {
            let e = [];
            return (
                A.forEach((t) => {
                    let n = s.Z.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        P = d.ZP.canUseSoundboardEverywhere(u),
        w = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? void 0 : e.guild_id)),
        D = (0, i.e7)(
            [l.Z],
            () => {
                let { canCreateExpressions: e } = (0, o.Gw)(w);
                return e;
            },
            [w]
        ),
        { canSeeRecentlyHeard: L, canSeeFrequentlyPlayed: x } = (0, _.k)({
            location: 'soundboard-useSoundGrid',
            autoTrackExposure: !0
        }),
        M = R(),
        k = (0, i.Wu)([p.Z], () => p.Z.recentlyHeardSoundIds),
        j = h.w.useExperiment({ location: 'soundboard-useSoundGrid' });
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        return a
            ? (N(i, b),
              {
                  categories: i,
                  isFetching: O,
                  soundCounts: {
                      favoriteSoundCount: 0,
                      unlockedCustomSoundCount: 0,
                      lockedCustomSoundCount: 0
                  }
              })
            : (I({
                  sections: i,
                  guildIds: A,
                  allSounds: b,
                  potentialSoundIdsForSection: Array.from(v),
                  sectionType: g.bg.FAVORITES,
                  sortById: !0
              }),
              L &&
                  I({
                      sections: i,
                      guildIds: A,
                      allSounds: b,
                      potentialSoundIdsForSection: k,
                      sectionType: g.bg.RECENTLY_HEARD,
                      sortById: !1
                  }),
              x &&
                  I({
                      sections: i,
                      guildIds: A,
                      allSounds: b,
                      potentialSoundIdsForSection: M.map((e) => e.soundId),
                      sectionType: g.bg.FREQUENTLY_USED,
                      sortById: !1
                  }),
              void 0 !== w &&
                  T(i, w, {
                      currentGuildHasAddPermissions: D,
                      allSounds: b,
                      filterOutEmptyCurrentGuild: t,
                      rowLimit: j.numRows,
                      shownAllGuildIds: n
                  }),
              P || N(i, b),
              S({
                  sections: i,
                  guilds: C,
                  currentGuildId: null == w ? void 0 : w.id,
                  allSounds: b,
                  hasNitro: f,
                  rowLimit: j.numRows,
                  shownAllGuildIds: n
              }),
              P && N(i, b),
              i.forEach((t) => {
                  t.categoryInfo.type === g.bg.GUILD && (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
              }),
              {
                  categories: i,
                  isFetching: O,
                  soundCounts: {
                      favoriteSoundCount: v.size,
                      unlockedCustomSoundCount: e,
                      lockedCustomSoundCount: r
                  }
              });
    }, [A, b, v, k, M, x, L, w, D, t, P, C, a, O, f, j.numRows, n]);
}
function C(e, t, n) {
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
function R() {
    return (
        r.useEffect(() => {
            a.DZ.loadIfNecessary();
        }, []),
        (0, i.e7)([p.Z], () => p.Z.frecentlyPlayedSounds)
    );
}
