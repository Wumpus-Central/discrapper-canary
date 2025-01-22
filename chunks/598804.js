var i = r(390547);
var a = r(653041);
var o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(481060),
    p = r(208049),
    h = r(763296),
    _ = r(409673),
    m = r(592125),
    g = r(430824),
    E = r(496675),
    v = r(594174),
    y = r(74538),
    b = r(710111),
    I = r(231338),
    T = r(13475);
let S = 4;
function A(e) {
    let n = (0, d.e7)([v.default], () => y.ZP.canUseSoundboardEverywhere(v.default.getCurrentUser())),
        r = (0, d.e7)([h.Z], () => h.Z.getSoundsForGuild(b.X8)),
        i = (0, d.Wu)([g.Z], () => g.Z.getGuildIds()),
        a = l.useMemo(() => E.Z.can(I.Pl.USE_EXTERNAL_SOUNDS, e), [e]);
    return l.useMemo(() => {
        let o = [];
        if (n && a) {
            let e = i.flatMap((e) => {
                var n, r;
                return null !== (r = null === (n = h.Z.getSoundsForGuild(e)) || void 0 === n ? void 0 : n.filter((e) => e.available)) && void 0 !== r ? r : [];
            });
            o.push(...c().sampleSize(e, S));
        } else if ((null == e ? void 0 : e.guild_id) != null) {
            var s;
            let n = null === (s = h.Z.getSoundsForGuild(null == e ? void 0 : e.guild_id)) || void 0 === s ? void 0 : s.filter((e) => e.available);
            o.push(...c().sampleSize(n, S));
        }
        return o.length < S && o.push(...c().sampleSize(null != r ? r : [], S - o.length)), o;
    }, [a, null == e ? void 0 : e.guild_id, r, i, n]);
}
n.Z = l.memo(function (e) {
    let { channelId: n, onSelectSoundmoji: r } = e,
        i = (0, d.e7)([h.Z], () => !h.Z.isFetching() && !h.Z.hasFetchedAllSounds(), []),
        a = (0, d.e7)([m.Z], () => m.Z.getChannel(n)),
        o = A(a);
    return (l.useEffect(() => {
        (0, p.w)();
    }, [i]),
    0 === o.length)
        ? (0, s.jsx)(f.Spinner, {})
        : (0, s.jsx)('div', {
              className: T.rowContainer,
              children: o.map((e, n) =>
                  (0, s.jsx)(
                      _.ZP,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          refreshEnabled: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: a,
                          onSelectItem: (n) => (null == r ? void 0 : r(e, !n.shiftKey))
                      },
                      n
                  )
              )
          });
});
