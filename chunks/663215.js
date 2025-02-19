n.d(t, {
    FS: () => T,
    ZP: () => I
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
    u = n(74538),
    d = n(709054),
    f = n(164878),
    p = n(178106),
    _ = n(763296),
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
function b(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: o, sortById: a } = e,
        s = {};
    for (let e of [...n, g.X8]) {
        var l;
        for (let t of null !== (l = r.get(e)) && void 0 !== l ? l : []) null != i.find((e) => e === t.soundId) && (s[t.soundId] = t);
    }
    let c = [];
    for (let e of i) {
        let t = s[e];
        null != t && c.push(t);
    }
    let u = v(c, a);
    u.length > 0 &&
        t.push({
            key: o,
            categoryInfo: { type: o },
            items: u
        });
}
function y(e, t, n, r, i) {
    for (let a of t) {
        var o;
        if (a.id === n) continue;
        let t = v(null !== (o = r.get(a.id)) && void 0 !== o ? o : []);
        t.length > 0 &&
            e.push({
                categoryInfo: {
                    type: h.bg.GUILD,
                    guild: a,
                    isNitroLocked: !i
                },
                key: a.id,
                items: t
            });
    }
}
function O(e, t, n, r, i) {
    var o;
    if (null == t) return;
    let a = null !== (o = r.get(t.id)) && void 0 !== o ? o : [],
        s = v(a),
        l = a.length < t.getMaxSoundboardSlots() && n,
        c = 0 === s.length,
        u = i;
    (l || c) &&
        !u &&
        s.push({
            type: h.vB.ADD_SOUND,
            guild: t
        }),
        (i && c) ||
            e.push({
                categoryInfo: {
                    type: h.bg.GUILD,
                    guild: t,
                    isNitroLocked: !1
                },
                key: t.id,
                items: s
            });
}
function S(e, t) {
    var n;
    let r = null !== (n = t.get(g.X8)) && void 0 !== n ? n : g.Hy;
    e.push({
        key: h.bg.DEFAULTS,
        categoryInfo: { type: h.bg.DEFAULTS },
        items: v(r)
    });
}
function I(e) {
    let { filterOutEmptyCurrentGuild: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        d = u.ZP.isPremium(a, E.p9.TIER_2),
        [g, v, I] = (0, i.Wu)([_.Z], () => [_.Z.getSounds(), _.Z.getFavorites(), _.Z.isFetching()]),
        T = (0, m.h)(e, !1),
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
        C = u.ZP.canUseSoundboardEverywhere(a),
        R = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? void 0 : e.guild_id)),
        P = (0, i.e7)(
            [l.Z],
            () => {
                let { canCreateExpressions: e } = (0, o.Gw)(R);
                return e;
            },
            [R]
        ),
        { canSeeRecentlyHeard: w, canSeeFrequentlyPlayed: D } = (0, f.k)({
            location: 'soundboard-useSoundGrid',
            autoTrackExposure: !0
        }),
        x = N(),
        L = (0, i.Wu)([p.Z], () => p.Z.recentlyHeardSoundIds);
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        return n
            ? (S(i, g),
              {
                  categories: i,
                  isFetching: I,
                  soundCounts: {
                      favoriteSoundCount: 0,
                      unlockedCustomSoundCount: 0,
                      lockedCustomSoundCount: 0
                  }
              })
            : (b({
                  sections: i,
                  guildIds: T,
                  allSounds: g,
                  potentialSoundIdsForSection: Array.from(v),
                  sectionType: h.bg.FAVORITES,
                  sortById: !0
              }),
              w &&
                  b({
                      sections: i,
                      guildIds: T,
                      allSounds: g,
                      potentialSoundIdsForSection: L,
                      sectionType: h.bg.RECENTLY_HEARD,
                      sortById: !1
                  }),
              D &&
                  b({
                      sections: i,
                      guildIds: T,
                      allSounds: g,
                      potentialSoundIdsForSection: x.map((e) => e.soundId),
                      sectionType: h.bg.FREQUENTLY_USED,
                      sortById: !1
                  }),
              O(i, R, P, g, t),
              C || S(i, g),
              y(i, A, null == R ? void 0 : R.id, g, d),
              C && S(i, g),
              i.forEach((t) => {
                  t.categoryInfo.type === h.bg.GUILD && (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
              }),
              {
                  categories: i,
                  isFetching: I,
                  soundCounts: {
                      favoriteSoundCount: v.size,
                      unlockedCustomSoundCount: e,
                      lockedCustomSoundCount: r
                  }
              });
    }, [T, g, v, L, x, D, w, R, P, t, C, A, n, I, d]);
}
function T(e, t, n) {
    return r.useMemo(
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
        r.useEffect(() => {
            a.DZ.loadIfNecessary();
        }, []),
        (0, i.e7)([p.Z], () => p.Z.frecentlyPlayedSounds)
    );
}
