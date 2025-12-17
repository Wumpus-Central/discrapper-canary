n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(557135),
    d = n(590293),
    u = n(66999),
    p = n(665906),
    h = n(496675),
    f = n(979651),
    g = n(585483),
    m = n(665149),
    b = n(981631),
    y = n(388032);
let O = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, d.Z)(),
        l = (0, s.e7)([f.Z], () => f.Z.isInChannel(t.id)),
        O = (0, s.e7)([f.Z], () => !a().isEmpty(f.Z.getVoiceStatesForChannel(t.id))),
        x = (0, s.e7)([h.Z], () => h.Z.can(b.Plq.CONNECT, t)),
        { needSubscriptionToAccess: j } = (0, u.Z)(t.id),
        v = (0, p.$R)(t),
        C = i.useCallback(() => {
            c.Z.handleVoiceConnect({
                channel: t,
                connected: l,
                needSubscriptionToAccess: j,
                locked: !1,
            });
        }, [t, l, j]);
    return (i.useEffect(
        () => (
            g.S.subscribe(b.CkL.CALL_START, C),
            () => {
                g.S.unsubscribe(b.CkL.CALL_START, C);
            }
        ),
        [C],
    ),
    p.tM.useExperiment(
        {
            guildId: t.guild_id,
            location: "63250c_1",
        },
        { autoTrackExposure: !1 },
    ).enabled &&
        !n &&
        !l &&
        x &&
        v &&
        t.isVocalThread())
        ? (0, r.jsx)(m.ZP.Icon, {
              icon: o.Csw,
              onClick: C,
              tooltip: O ? y.intl.string(y.t.fdEeb5) : y.intl.string(y.t.focH1t),
          })
        : null;
});
