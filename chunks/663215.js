n.d(t, {
    FS: () => N,
    ZP: () => T
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
    h = n(763296),
    g = n(697426),
    m = n(549771),
    E = n(710111),
    v = n(474936);
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.map((e) => ({
            type: g.vB.SOUND,
            sound: e
        }));
    return t ? n.sort((e, t) => f.default.compare(e.sound.soundId, t.sound.soundId)) : n;
}
function y(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: o, sortById: a } = e,
        s = {};
    for (let e of [...n, E.X8]) {
        var l;
        for (let t of null !== (l = r.get(e)) && void 0 !== l ? l : []) null != i.find((e) => e === t.soundId) && (s[t.soundId] = t);
    }
    let c = [];
    for (let e of i) {
        let t = s[e];
        null != t && c.push(t);
    }
    let u = b(c, a);
    u.length > 0 &&
        t.push({
            key: o,
            categoryInfo: { type: o },
            items: u
        });
}
function O(e, t, n, r, i) {
    for (let a of t) {
        var o;
        if (a.id === n) continue;
        let t = b(null !== (o = r.get(a.id)) && void 0 !== o ? o : []);
        t.length > 0 &&
            e.push({
                categoryInfo: {
                    type: g.bg.GUILD,
                    guild: a,
                    isNitroLocked: !i
                },
                key: a.id,
                items: t
            });
    }
}
function S(e, t, n, r, i) {
    var o;
    if (null == t) return;
    let a = null !== (o = r.get(t.id)) && void 0 !== o ? o : [],
        s = b(a),
        l = a.length < (0, u.nL)(t) && n,
        c = 0 === s.length,
        d = i;
    (l || c) &&
        !d &&
        s.push({
            type: g.vB.ADD_SOUND,
            guild: t
        }),
        (i && c) ||
            e.push({
                categoryInfo: {
                    type: g.bg.GUILD,
                    guild: t,
                    isNitroLocked: !1
                },
                key: t.id,
                items: s
            });
}
function I(e, t) {
    var n;
    let r = null !== (n = t.get(E.X8)) && void 0 !== n ? n : E.Hy;
    e.push({
        key: g.bg.DEFAULTS,
        categoryInfo: { type: g.bg.DEFAULTS },
        items: b(r)
    });
}
function T(e) {
    let { filterOutEmptyCurrentGuild: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        u = d.ZP.isPremium(a, v.p9.TIER_2),
        [f, E, b] = (0, i.Wu)([h.Z], () => [h.Z.getSounds(), h.Z.getFavorites(), h.Z.isFetching()]),
        T = (0, m.h)(e, !1),
        N = (0, i.Wu)([s.Z], () => {
            let e = [];
            return (
                T.forEach((t) => {
                    let n = s.Z.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        C = d.ZP.canUseSoundboardEverywhere(a),
        R = (0, i.e7)([s.Z], () => s.Z.getGuild(null == e ? void 0 : e.guild_id)),
        P = (0, i.e7)(
            [l.Z],
            () => {
                let { canCreateExpressions: e } = (0, o.Gw)(R);
                return e;
            },
            [R]
        ),
        { canSeeRecentlyHeard: D, canSeeFrequentlyPlayed: w } = (0, _.k)({
            location: 'soundboard-useSoundGrid',
            autoTrackExposure: !0
        }),
        L = A(),
        x = (0, i.Wu)([p.Z], () => p.Z.recentlyHeardSoundIds);
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        return n
            ? (I(i, f),
              {
                  categories: i,
                  isFetching: b,
                  soundCounts: {
                      favoriteSoundCount: 0,
                      unlockedCustomSoundCount: 0,
                      lockedCustomSoundCount: 0
                  }
              })
            : (y({
                  sections: i,
                  guildIds: T,
                  allSounds: f,
                  potentialSoundIdsForSection: Array.from(E),
                  sectionType: g.bg.FAVORITES,
                  sortById: !0
              }),
              D &&
                  y({
                      sections: i,
                      guildIds: T,
                      allSounds: f,
                      potentialSoundIdsForSection: x,
                      sectionType: g.bg.RECENTLY_HEARD,
                      sortById: !1
                  }),
              w &&
                  y({
                      sections: i,
                      guildIds: T,
                      allSounds: f,
                      potentialSoundIdsForSection: L.map((e) => e.soundId),
                      sectionType: g.bg.FREQUENTLY_USED,
                      sortById: !1
                  }),
              S(i, R, P, f, t),
              C || I(i, f),
              O(i, N, null == R ? void 0 : R.id, f, u),
              C && I(i, f),
              i.forEach((t) => {
                  t.categoryInfo.type === g.bg.GUILD && (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
              }),
              {
                  categories: i,
                  isFetching: b,
                  soundCounts: {
                      favoriteSoundCount: E.size,
                      unlockedCustomSoundCount: e,
                      lockedCustomSoundCount: r
                  }
              });
    }, [T, f, E, x, L, w, D, R, P, t, C, N, n, b, u]);
}
function N(e, t, n) {
    return r.useMemo(
        () =>
            n.length > 0
                ? [
                      {
                          key: g.bg.SEARCH,
                          categoryInfo: { type: g.bg.SEARCH },
                          items: b(t, !1)
                      }
                  ]
                : e,
        [e, n.length, t]
    );
}
function A() {
    return (
        r.useEffect(() => {
            a.DZ.loadIfNecessary();
        }, []),
        (0, i.e7)([p.Z], () => p.Z.frecentlyPlayedSounds)
    );
}
