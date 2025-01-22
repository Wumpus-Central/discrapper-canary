r.d(n, {
    FS: function () {
        return R;
    },
    ZP: function () {
        return N;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(192379),
    s = r(442837),
    l = r(357156),
    u = r(675478),
    c = r(430824),
    d = r(496675),
    f = r(594174),
    p = r(74538),
    h = r(709054),
    _ = r(164878),
    m = r(178106),
    g = r(763296),
    E = r(697426),
    v = r(549771),
    y = r(710111),
    b = r(474936);
function I(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = e.map((e) => ({
            type: E.vB.SOUND,
            sound: e
        }));
    return n ? r.sort((e, n) => h.default.compare(e.sound.soundId, n.sound.soundId)) : r;
}
function T(e) {
    let { sections: n, guildIds: r, allSounds: i, potentialSoundIdsForSection: a, sectionType: o, sortById: s } = e,
        l = {};
    for (let e of [...r, y.X8]) {
        var u;
        for (let n of null !== (u = i.get(e)) && void 0 !== u ? u : []) null != a.find((e) => e === n.soundId) && (l[n.soundId] = n);
    }
    let c = [];
    for (let e of a) {
        let n = l[e];
        null != n && c.push(n);
    }
    let d = I(c, s);
    d.length > 0 &&
        n.push({
            key: o,
            categoryInfo: { type: o },
            items: d
        });
}
function S(e, n, r, i, a) {
    for (let s of n) {
        var o;
        if (s.id === r) continue;
        let n = I(null !== (o = i.get(s.id)) && void 0 !== o ? o : []);
        n.length > 0 &&
            e.push({
                categoryInfo: {
                    type: E.bg.GUILD,
                    guild: s,
                    isNitroLocked: !a
                },
                key: s.id,
                items: n
            });
    }
}
function A(e, n, r, i, a) {
    var o;
    if (null == n) return;
    let s = null !== (o = i.get(n.id)) && void 0 !== o ? o : [],
        l = I(s),
        u = s.length < n.getMaxSoundboardSlots() && r,
        c = 0 === l.length,
        d = a;
    (u || c) &&
        !d &&
        l.push({
            type: E.vB.ADD_SOUND,
            guild: n
        }),
        !(a && c) &&
            e.push({
                categoryInfo: {
                    type: E.bg.GUILD,
                    guild: n,
                    isNitroLocked: !1
                },
                key: n.id,
                items: l
            });
}
function C(e, n) {
    var r;
    let i = null !== (r = n.get(y.X8)) && void 0 !== r ? r : y.Hy;
    e.push({
        key: E.bg.DEFAULTS,
        categoryInfo: { type: E.bg.DEFAULTS },
        items: I(i)
    });
}
function N(e) {
    let { filterOutEmptyCurrentGuild: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        a = p.ZP.isPremium(i, b.p9.TIER_2),
        [u, h, y] = (0, s.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites(), g.Z.isFetching()]),
        I = (0, v.h)(e, !1),
        N = (0, s.Wu)([c.Z], () => {
            let e = [];
            return (
                I.forEach((n) => {
                    let r = c.Z.getGuild(n);
                    null != r && e.push(r);
                }),
                e
            );
        }),
        R = p.ZP.canUseSoundboardEverywhere(i),
        D = (0, s.e7)([c.Z], () => c.Z.getGuild(null == e ? void 0 : e.guild_id)),
        L = (0, s.e7)(
            [d.Z],
            () => {
                let { canCreateExpressions: e } = (0, l.Gw)(D);
                return e;
            },
            [D]
        ),
        { canSeeRecentlyHeard: x, canSeeFrequentlyPlayed: w } = (0, _.k)({
            location: 'soundboard-useSoundGrid',
            autoTrackExposure: !0
        }),
        P = O(),
        M = (0, s.Wu)([m.Z], () => m.Z.recentlyHeardSoundIds);
    return o.useMemo(() => {
        let e = 0,
            i = 0,
            o = [];
        return r
            ? (C(o, u),
              {
                  categories: o,
                  isFetching: y,
                  soundCounts: {
                      favoriteSoundCount: 0,
                      unlockedCustomSoundCount: 0,
                      lockedCustomSoundCount: 0
                  }
              })
            : (T({
                  sections: o,
                  guildIds: I,
                  allSounds: u,
                  potentialSoundIdsForSection: Array.from(h),
                  sectionType: E.bg.FAVORITES,
                  sortById: !0
              }),
              x &&
                  T({
                      sections: o,
                      guildIds: I,
                      allSounds: u,
                      potentialSoundIdsForSection: M,
                      sectionType: E.bg.RECENTLY_HEARD,
                      sortById: !1
                  }),
              w &&
                  T({
                      sections: o,
                      guildIds: I,
                      allSounds: u,
                      potentialSoundIdsForSection: P.map((e) => e.soundId),
                      sectionType: E.bg.FREQUENTLY_USED,
                      sortById: !1
                  }),
              A(o, D, L, u, n),
              !R && C(o, u),
              S(o, N, null == D ? void 0 : D.id, u, a),
              R && C(o, u),
              o.forEach((n) => {
                  n.categoryInfo.type === E.bg.GUILD && (n.categoryInfo.isNitroLocked ? (i += n.items.length) : (e += n.items.length));
              }),
              {
                  categories: o,
                  isFetching: y,
                  soundCounts: {
                      favoriteSoundCount: h.size,
                      unlockedCustomSoundCount: e,
                      lockedCustomSoundCount: i
                  }
              });
    }, [I, u, h, M, P, w, x, D, L, n, R, N, r, y, a]);
}
function R(e, n, r) {
    return o.useMemo(
        () =>
            r.length > 0
                ? [
                      {
                          key: E.bg.SEARCH,
                          categoryInfo: { type: E.bg.SEARCH },
                          items: I(n, !1)
                      }
                  ]
                : e,
        [e, r.length, n]
    );
}
function O() {
    return (
        o.useEffect(() => {
            u.DZ.loadIfNecessary();
        }, []),
        (0, s.e7)([m.Z], () => m.Z.frecentlyPlayedSounds)
    );
}
