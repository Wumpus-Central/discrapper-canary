n.d(t, { Z: () => O }), n(13667), n(390547), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(208049),
    u = n(763296),
    d = n(409673),
    f = n(592125),
    p = n(430824),
    _ = n(496675),
    h = n(594174),
    m = n(74538),
    g = n(710111),
    E = n(231338),
    v = n(411937);
let b = 4;
function y(e) {
    let t = (0, s.e7)([h.default], () => m.ZP.canUseSoundboardEverywhere(h.default.getCurrentUser())),
        n = (0, s.e7)([u.Z], () => u.Z.getSoundsForGuild(g.X8)),
        r = (0, s.Wu)([p.Z], () => p.Z.getGuildIds()),
        o = i.useMemo(() => _.Z.can(E.Pl.USE_EXTERNAL_SOUNDS, e), [e]);
    return i.useMemo(() => {
        let i = [];
        if (t && o) {
            let e = r.flatMap((e) => {
                var t, n;
                return null !== (n = null === (t = u.Z.getSoundsForGuild(e)) || void 0 === t ? void 0 : t.filter((e) => e.available)) && void 0 !== n ? n : [];
            });
            i.push(...a().sampleSize(e, b));
        } else if ((null == e ? void 0 : e.guild_id) != null) {
            var s;
            let t = null === (s = u.Z.getSoundsForGuild(null == e ? void 0 : e.guild_id)) || void 0 === s ? void 0 : s.filter((e) => e.available);
            i.push(...a().sampleSize(t, b));
        }
        return i.length < b && i.push(...a().sampleSize(null != n ? n : [], b - i.length)), i;
    }, [o, null == e ? void 0 : e.guild_id, n, r, t]);
}
let O = i.memo(function (e) {
    let { channelId: t, onSelectSoundmoji: n } = e,
        o = (0, s.e7)([u.Z], () => !u.Z.isFetching() && !u.Z.hasFetchedAllSounds(), []),
        a = (0, s.e7)([f.Z], () => f.Z.getChannel(t)),
        p = y(a);
    return (i.useEffect(() => {
        (0, c.w)();
    }, [o]),
    0 === p.length)
        ? (0, r.jsx)(l.$jN, {})
        : (0, r.jsx)('div', {
              className: v.rowContainer,
              children: p.map((e, t) =>
                  (0, r.jsx)(
                      d.ZP,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          refreshEnabled: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: a,
                          onSelectItem: (t) => (null == n ? void 0 : n(e, !t.shiftKey))
                      },
                      t
                  )
              )
          });
});
