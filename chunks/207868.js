n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(557135),
    d = n(590293),
    u = n(66999),
    h = n(665906),
    p = n(496675),
    f = n(979651),
    g = n(585483),
    m = n(665149),
    b = n(981631),
    y = n(388032);
let _ = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, d.Z)(),
        l = (0, s.e7)([f.Z], () => f.Z.isInChannel(t.id)),
        _ = (0, s.e7)([f.Z], () => !a().isEmpty(f.Z.getVoiceStatesForChannel(t.id))),
        j = (0, s.e7)([p.Z], () => p.Z.can(b.Plq.CONNECT, t)),
        { needSubscriptionToAccess: O } = (0, u.Z)(t.id),
        x = (0, h.$R)(t),
        v = i.useCallback(() => {
            c.Z.handleVoiceConnect({
                channel: t,
                connected: l,
                needSubscriptionToAccess: O,
                locked: !1,
            });
        }, [t, l, O]);
    return (i.useEffect(
        () => (
            g.S.subscribe(b.CkL.CALL_START, v),
            () => {
                g.S.unsubscribe(b.CkL.CALL_START, v);
            }
        ),
        [v],
    ),
    h.tM.useExperiment(
        {
            guildId: t.guild_id,
            location: "63250c_1",
        },
        { autoTrackExposure: !1 },
    ).enabled &&
        !n &&
        !l &&
        j &&
        x &&
        t.isVocalThread())
        ? (0, r.jsx)(m.ZP.Icon, {
              icon: o.Csw,
              onClick: v,
              tooltip: _ ? y.intl.string(y.t.fdEeb2) : y.intl.string(y.t.focH1t),
          })
        : null;
});
