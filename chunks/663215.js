n.d(t, {
    FS: () => A,
    ZP: () => S
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(442837),
    a = n(357156),
    s = n(675478),
    o = n(430824),
    l = n(496675),
    u = n(594174),
    c = n(74538),
    d = n(709054),
    f = n(164878),
    _ = n(178106),
    p = n(763296),
    h = n(697426),
    m = n(549771),
    g = n(710111),
    E = n(474936);
function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.map((e) => ({
            type: h.vB.SOUND,
            sound: e
        }));
    return t ? n.sort((e, t) => d.default.compare(e.sound.soundId, t.sound.soundId)) : n;
}
function y(e) {
    let { sections: t, guildIds: n, allSounds: i, potentialSoundIdsForSection: r, sectionType: a, sortById: s } = e,
        o = {};
    for (let e of [...n, g.X8]) {
        var l;
        for (let t of null !== (l = i.get(e)) && void 0 !== l ? l : []) null != r.find((e) => e === t.soundId) && (o[t.soundId] = t);
    }
    let u = [];
    for (let e of r) {
        let t = o[e];
        null != t && u.push(t);
    }
    let c = v(u, s);
    c.length > 0 &&
        t.push({
            key: a,
            categoryInfo: { type: a },
            items: c
        });
}
function I(e, t, n, i, r) {
    for (let s of t) {
        var a;
        if (s.id === n) continue;
        let t = v(null !== (a = i.get(s.id)) && void 0 !== a ? a : []);
        t.length > 0 &&
            e.push({
                categoryInfo: {
                    type: h.bg.GUILD,
                    guild: s,
                    isNitroLocked: !r
                },
                key: s.id,
                items: t
            });
    }
}
function T(e, t, n, i, r) {
    var a;
    if (null == t) return;
    let s = null !== (a = i.get(t.id)) && void 0 !== a ? a : [],
        o = v(s),
        l = s.length < t.getMaxSoundboardSlots() && n,
        u = 0 === o.length,
        c = r;
    (l || u) &&
        !c &&
        o.push({
            type: h.vB.ADD_SOUND,
            guild: t
        }),
        (r && u) ||
            e.push({
                categoryInfo: {
                    type: h.bg.GUILD,
                    guild: t,
                    isNitroLocked: !1
                },
                key: t.id,
                items: o
            });
}
function b(e, t) {
    var n;
    let i = null !== (n = t.get(g.X8)) && void 0 !== n ? n : g.Hy;
    e.push({
        key: h.bg.DEFAULTS,
        categoryInfo: { type: h.bg.DEFAULTS },
        items: v(i)
    });
}
function S(e) {
    let { filterOutEmptyCurrentGuild: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        d = c.ZP.isPremium(s, E.p9.TIER_2),
        [g, v, S] = (0, r.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites(), p.Z.isFetching()]),
        A = (0, m.h)(e, !1),
        C = (0, r.Wu)([o.Z], () => {
            let e = [];
            return (
                A.forEach((t) => {
                    let n = o.Z.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        R = c.ZP.canUseSoundboardEverywhere(s),
        O = (0, r.e7)([o.Z], () => o.Z.getGuild(null == e ? void 0 : e.guild_id)),
        D = (0, r.e7)(
            [l.Z],
            () => {
                let { canCreateExpressions: e } = (0, a.Gw)(O);
                return e;
            },
            [O]
        ),
        { canSeeRecentlyHeard: L, canSeeFrequentlyPlayed: x } = (0, f.k)({
            location: 'soundboard-useSoundGrid',
            autoTrackExposure: !0
        }),
        w = N(),
        P = (0, r.Wu)([_.Z], () => _.Z.recentlyHeardSoundIds);
    return i.useMemo(() => {
        let e = 0,
            i = 0,
            r = [];
        return n
            ? (b(r, g),
              {
                  categories: r,
                  isFetching: S,
                  soundCounts: {
                      favoriteSoundCount: 0,
                      unlockedCustomSoundCount: 0,
                      lockedCustomSoundCount: 0
                  }
              })
            : (y({
                  sections: r,
                  guildIds: A,
                  allSounds: g,
                  potentialSoundIdsForSection: Array.from(v),
                  sectionType: h.bg.FAVORITES,
                  sortById: !0
              }),
              L &&
                  y({
                      sections: r,
                      guildIds: A,
                      allSounds: g,
                      potentialSoundIdsForSection: P,
                      sectionType: h.bg.RECENTLY_HEARD,
                      sortById: !1
                  }),
              x &&
                  y({
                      sections: r,
                      guildIds: A,
                      allSounds: g,
                      potentialSoundIdsForSection: w.map((e) => e.soundId),
                      sectionType: h.bg.FREQUENTLY_USED,
                      sortById: !1
                  }),
              T(r, O, D, g, t),
              R || b(r, g),
              I(r, C, null == O ? void 0 : O.id, g, d),
              R && b(r, g),
              r.forEach((t) => {
                  t.categoryInfo.type === h.bg.GUILD && (t.categoryInfo.isNitroLocked ? (i += t.items.length) : (e += t.items.length));
              }),
              {
                  categories: r,
                  isFetching: S,
                  soundCounts: {
                      favoriteSoundCount: v.size,
                      unlockedCustomSoundCount: e,
                      lockedCustomSoundCount: i
                  }
              });
    }, [A, g, v, P, w, x, L, O, D, t, R, C, n, S, d]);
}
function A(e, t, n) {
    return i.useMemo(
        () =>
            n.length > 0
                ? [
                      {
                          key: h.bg.SEARCH,
                          categoryInfo: { type: h.bg.SEARCH },
                          items: v(t, !1)
                      }
                  ]
                : e,
        [e, n.length, t]
    );
}
function N() {
    return (
        i.useEffect(() => {
            s.DZ.loadIfNecessary();
        }, []),
        (0, r.e7)([_.Z], () => _.Z.frecentlyPlayedSounds)
    );
}
