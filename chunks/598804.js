n.d(t, { Z: () => T }), n(390547), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(208049),
    c = n(763296),
    d = n(409673),
    f = n(592125),
    _ = n(430824),
    p = n(496675),
    h = n(594174),
    m = n(74538),
    g = n(710111),
    E = n(231338),
    v = n(671203);
let y = 4;
function I(e) {
    let t = (0, o.e7)([h.default], () => m.ZP.canUseSoundboardEverywhere(h.default.getCurrentUser())),
        n = (0, o.e7)([c.Z], () => c.Z.getSoundsForGuild(g.X8)),
        i = (0, o.Wu)([_.Z], () => _.Z.getGuildIds()),
        a = r.useMemo(() => p.Z.can(E.Pl.USE_EXTERNAL_SOUNDS, e), [e]);
    return r.useMemo(() => {
        let r = [];
        if (t && a) {
            let e = i.flatMap((e) => {
                var t, n;
                return null !== (n = null === (t = c.Z.getSoundsForGuild(e)) || void 0 === t ? void 0 : t.filter((e) => e.available)) && void 0 !== n ? n : [];
            });
            r.push(...s().sampleSize(e, y));
        } else if ((null == e ? void 0 : e.guild_id) != null) {
            var o;
            let t = null === (o = c.Z.getSoundsForGuild(null == e ? void 0 : e.guild_id)) || void 0 === o ? void 0 : o.filter((e) => e.available);
            r.push(...s().sampleSize(t, y));
        }
        return r.length < y && r.push(...s().sampleSize(null != n ? n : [], y - r.length)), r;
    }, [a, null == e ? void 0 : e.guild_id, n, i, t]);
}
let T = r.memo(function (e) {
    let { channelId: t, onSelectSoundmoji: n } = e,
        a = (0, o.e7)([c.Z], () => !c.Z.isFetching() && !c.Z.hasFetchedAllSounds(), []),
        s = (0, o.e7)([f.Z], () => f.Z.getChannel(t)),
        _ = I(s);
    return (r.useEffect(() => {
        (0, u.w)();
    }, [a]),
    0 === _.length)
        ? (0, i.jsx)(l.$jN, {})
        : (0, i.jsx)('div', {
              className: v.rowContainer,
              children: _.map((e, t) =>
                  (0, i.jsx)(
                      d.ZP,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          refreshEnabled: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: s,
                          onSelectItem: (t) => (null == n ? void 0 : n(e, !t.shiftKey))
                      },
                      t
                  )
              )
          });
});
