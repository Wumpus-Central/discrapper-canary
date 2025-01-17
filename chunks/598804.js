var i = r(390547);
var a = r(653041);
var s = r(47120);
var o = r(200651),
    l = r(192379),
    u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(481060),
    _ = r(208049),
    h = r(763296),
    p = r(409673),
    m = r(592125),
    g = r(430824),
    E = r(496675),
    v = r(594174),
    I = r(74538),
    T = r(710111),
    b = r(231338),
    y = r(13475);
let S = 4;
function A(e) {
    let n = (0, d.e7)([v.default], () => I.ZP.canUseSoundboardEverywhere(v.default.getCurrentUser())),
        r = (0, d.e7)([h.Z], () => h.Z.getSoundsForGuild(T.X8)),
        i = (0, d.Wu)([g.Z], () => g.Z.getGuildIds()),
        a = l.useMemo(() => E.Z.can(b.Pl.USE_EXTERNAL_SOUNDS, e), [e]);
    return l.useMemo(() => {
        let s = [];
        if (n && a) {
            let e = i.flatMap((e) => {
                var n, r;
                return null !== (r = null === (n = h.Z.getSoundsForGuild(e)) || void 0 === n ? void 0 : n.filter((e) => e.available)) && void 0 !== r ? r : [];
            });
            s.push(...c().sampleSize(e, S));
        } else if ((null == e ? void 0 : e.guild_id) != null) {
            var o;
            let n = null === (o = h.Z.getSoundsForGuild(null == e ? void 0 : e.guild_id)) || void 0 === o ? void 0 : o.filter((e) => e.available);
            s.push(...c().sampleSize(n, S));
        }
        return s.length < S && s.push(...c().sampleSize(null != r ? r : [], S - s.length)), s;
    }, [a, null == e ? void 0 : e.guild_id, r, i, n]);
}
n.Z = l.memo(function (e) {
    let { channelId: n, onSelectSoundmoji: r } = e,
        i = (0, d.e7)([h.Z], () => !h.Z.isFetching() && !h.Z.hasFetchedAllSounds(), []),
        a = (0, d.e7)([m.Z], () => m.Z.getChannel(n)),
        s = A(a);
    return (l.useEffect(() => {
        (0, _.w)();
    }, [i]),
    0 === s.length)
        ? (0, o.jsx)(f.Spinner, {})
        : (0, o.jsx)('div', {
              className: y.rowContainer,
              children: s.map((e, n) =>
                  (0, o.jsx)(
                      p.ZP,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          refreshEnabled: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: a,
                          onSelectItem: () => (null == r ? void 0 : r(e))
                      },
                      n
                  )
              )
          });
});
