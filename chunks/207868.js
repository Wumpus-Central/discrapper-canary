n.d(t, { Z: () => x });
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
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
let x = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, u.Z)(),
        l = (0, o.e7)([f.Z], () => f.Z.isInChannel(t.id)),
        x = (0, o.e7)([f.Z], () => !a().isEmpty(f.Z.getVoiceStatesForChannel(t.id))),
        y = (0, o.e7)([h.Z], () => h.Z.can(b.Plq.CONNECT, t)),
        { needSubscriptionToAccess: C } = (0, d.Z)(t.id),
        v = (0, p.$R)(t),
        j = i.useCallback(() => {
            c.Z.handleVoiceConnect({
                channel: t,
                connected: l,
                needSubscriptionToAccess: C,
                locked: !1
            });
        }, [t, l, C]);
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
              tooltip: x ? _.intl.string(_.t.fdEeb2) : _.intl.string(_.t.focH1t)
          })
        : null;
});
