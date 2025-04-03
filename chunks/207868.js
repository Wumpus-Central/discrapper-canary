n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(557135),
    u = n(590293),
    d = n(66999),
    p = n(665906),
    h = n(496675),
    f = n(979651),
    m = n(585483),
    g = n(665149),
    b = n(981631),
    _ = n(388032);
let C = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, u.Z)(),
        l = (0, a.e7)([f.Z], () => f.Z.isInChannel(t.id)),
        C = (0, a.e7)([f.Z], () => !o().isEmpty(f.Z.getVoiceStatesForChannel(t.id))),
        y = (0, a.e7)([h.Z], () => h.Z.can(b.Plq.CONNECT, t)),
        { needSubscriptionToAccess: x } = (0, d.Z)(t.id),
        v = (0, p.$R)(t),
        j = i.useCallback(() => {
            c.Z.handleVoiceConnect({
                channel: t,
                connected: l,
                needSubscriptionToAccess: x,
                locked: !1
            });
        }, [t, l, x]);
    return (i.useEffect(
        () => (
            m.S.subscribe(b.CkL.CALL_START, j),
            () => {
                m.S.unsubscribe(b.CkL.CALL_START, j);
            }
        ),
        [j]
    ),
    p.tM.useExperiment(
        {
            guildId: t.guild_id,
            location: '63250c_1'
        },
        { autoTrackExposure: !1 }
    ).enabled &&
        !n &&
        !l &&
        y &&
        v &&
        t.isVocalThread())
        ? (0, r.jsx)(g.ZP.Icon, {
              icon: s.Csw,
              onClick: j,
              tooltip: C ? _.NW.string(_.t.fdEeb2) : _.NW.string(_.t.focH1t)
          })
        : null;
});
