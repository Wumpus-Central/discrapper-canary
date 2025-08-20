n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
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
    y = n(388032);
let _ = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, u.Z)(),
        l = (0, o.e7)([f.Z], () => f.Z.isInChannel(t.id)),
        _ = (0, o.e7)([f.Z], () => !a().isEmpty(f.Z.getVoiceStatesForChannel(t.id))),
        C = (0, o.e7)([h.Z], () => h.Z.can(b.Plq.CONNECT, t)),
        { needSubscriptionToAccess: x } = (0, d.Z)(t.id),
        v = (0, p.$R)(t),
        O = i.useCallback(() => {
            c.Z.handleVoiceConnect({
                channel: t,
                connected: l,
                needSubscriptionToAccess: x,
                locked: !1,
            });
        }, [t, l, x]);
    return (i.useEffect(
        () => (
            m.S.subscribe(b.CkL.CALL_START, O),
            () => {
                m.S.unsubscribe(b.CkL.CALL_START, O);
            }
        ),
        [O],
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
        C &&
        v &&
        t.isVocalThread())
        ? (0, r.jsx)(g.ZP.Icon, {
              icon: s.Csw,
              onClick: O,
              tooltip: _ ? y.intl.string(y.t.fdEeb2) : y.intl.string(y.t.focH1t),
          })
        : null;
});
