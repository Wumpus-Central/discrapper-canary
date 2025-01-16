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
    E = r(594174),
    v = r(74538),
    I = r(710111),
    T = r(13475);
let b = 4;
function y(e) {
    let n = (0, d.e7)([E.default], () => v.ZP.canUseSoundboardEverywhere(E.default.getCurrentUser())),
        r = (0, d.e7)([h.Z], () => h.Z.getSoundsForGuild(I.X8)),
        i = (0, d.Wu)([g.Z], () => g.Z.getGuildIds());
    return l.useMemo(() => {
        let a = [];
        if (n) {
            let e = i.flatMap((e) => {
                var n;
                return null !== (n = h.Z.getSoundsForGuild(e)) && void 0 !== n ? n : [];
            });
            a.push(...c().sampleSize(e, b));
        } else if (null != e) {
            let n = h.Z.getSoundsForGuild(e);
            a.push(...c().sampleSize(n, b));
        }
        return a.length < b && a.push(...c().sampleSize(null != r ? r : [], b - a.length)), a;
    }, [e, r, i, n]);
}
n.Z = l.memo(function (e) {
    let { channelGuildId: n, channelId: r, onSelectSoundmoji: i } = e,
        a = (0, d.e7)([h.Z], () => !h.Z.isFetching() && !h.Z.hasFetchedAllSounds(), []),
        s = (0, d.e7)([m.Z], () => m.Z.getChannel(r)),
        u = y(n);
    return (l.useEffect(() => {
        (0, _.w)();
    }, [a]),
    0 === u.length)
        ? (0, o.jsx)(f.Spinner, {})
        : (0, o.jsx)('div', {
              className: T.rowContainer,
              children: u.map((e, n) =>
                  (0, o.jsx)(
                      p.ZP,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          refreshEnabled: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: s,
                          onSelectItem: () => (null == i ? void 0 : i(e))
                      },
                      n
                  )
              )
          });
});
