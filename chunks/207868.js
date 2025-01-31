n.d(t, { Z: () => x });
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(557135),
    d = n(590293),
    u = n(66999),
    h = n(665906),
    p = n(496675),
    m = n(979651),
    f = n(585483),
    g = n(665149),
    _ = n(981631),
    C = n(388032);
let x = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, d.Z)(),
        a = (0, s.e7)([m.Z], () => m.Z.isInChannel(t.id)),
        x = (0, s.e7)([m.Z], () => !r().isEmpty(m.Z.getVoiceStatesForChannel(t.id))),
        v = (0, s.e7)([p.Z], () => p.Z.can(_.Plq.CONNECT, t)),
        { needSubscriptionToAccess: E } = (0, u.Z)(t.id),
        I = (0, h.$R)(t),
        b = l.useCallback(() => {
            c.Z.handleVoiceConnect({
                channel: t,
                connected: a,
                needSubscriptionToAccess: E,
                locked: !1
            });
        }, [t, a, E]);
    return (l.useEffect(
        () => (
            f.S.subscribe(_.CkL.CALL_START, b),
            () => {
                f.S.unsubscribe(_.CkL.CALL_START, b);
            }
        ),
        [b]
    ),
    h.tM.useExperiment(
        {
            guildId: t.guild_id,
            location: '63250c_1'
        },
        { autoTrackExposure: !1 }
    ).enabled &&
        !n &&
        !a &&
        v &&
        I &&
        t.isVocalThread())
        ? (0, i.jsx)(g.ZP.Icon, {
              icon: o.Csw,
              onClick: b,
              tooltip: x ? C.intl.string(C.t.fdEeb2) : C.intl.string(C.t.focH1t)
          })
        : null;
});
