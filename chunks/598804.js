n.d(t, { Z: () => v }), n(361932), n(187205), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(208049),
    u = n(763296),
    d = n(294206),
    f = n(592125),
    p = n(430824),
    _ = n(496675),
    m = n(594174),
    h = n(74538),
    g = n(710111),
    E = n(231338),
    b = n(785174);
let y = 4;
function O(e) {
    let t = (0, s.e7)([m.default], () => h.ZP.canUseSoundboardEverywhere(m.default.getCurrentUser())),
        n = (0, s.e7)([u.Z], () => u.Z.getSoundsForGuild(g.X8)),
        r = (0, s.Wu)([p.Z], () => p.Z.getGuildIds()),
        a = i.useMemo(() => _.Z.can(E.Pl.USE_EXTERNAL_SOUNDS, e), [e]);
    return i.useMemo(() => {
        let i = [];
        if (t && a) {
            let e = r.flatMap((e) => {
                var t, n;
                return null != (n = null == (t = u.Z.getSoundsForGuild(e)) ? void 0 : t.filter((e) => e.available))
                    ? n
                    : [];
            });
            i.push(...o().sampleSize(e, y));
        } else if ((null == e ? void 0 : e.guild_id) != null) {
            var s;
            let t =
                null == (s = u.Z.getSoundsForGuild(null == e ? void 0 : e.guild_id))
                    ? void 0
                    : s.filter((e) => e.available);
            i.push(...o().sampleSize(t, y));
        }
        return i.length < y && i.push(...o().sampleSize(null != n ? n : [], y - i.length)), i;
    }, [a, null == e ? void 0 : e.guild_id, n, r, t]);
}
let v = i.memo(function (e) {
    let { channelId: t, onSelectSoundmoji: n } = e,
        a = (0, s.e7)([u.Z], () => !u.Z.isFetching() && !u.Z.hasFetchedAllSounds(), []),
        o = (0, s.e7)([f.Z], () => f.Z.getChannel(t)),
        p = O(o);
    return (i.useEffect(() => {
        (0, c.w)();
    }, [a]),
    0 === p.length)
        ? (0, r.jsx)(l.$jN, {})
        : (0, r.jsx)("div", {
              className: b.rowContainer,
              children: p.map((e, t) =>
                  (0, r.jsx)(
                      d.ZP,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: o,
                          onSelectItem: (t) => (null == n ? void 0 : n(e, !t.shiftKey)),
                      },
                      t,
                  ),
              ),
          });
});
