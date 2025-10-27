e.d(n, { Z: () => g });
var i = e(951288),
    a = e(647438),
    l = e(392711),
    r = e.n(l),
    s = e(442837),
    o = e(481060),
    d = e(66999),
    u = e(665906),
    c = e(979651),
    h = e(557135),
    f = e(388032);
function g(t) {
    let n = (0, u.Y)(t),
        e = (0, s.e7)([c.Z], () => c.Z.isInChannel(t.id)),
        l = (0, s.e7)([c.Z], () => !r().isEmpty(c.Z.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: g } = (0, d.Z)(t.id),
        v = a.useCallback(() => {
            h.Z.handleVoiceConnect({
                channel: t,
                connected: e,
                needSubscriptionToAccess: g,
                locked: !1,
            });
        }, [t, e, g]);
    return e || !n
        ? null
        : (0, i.jsx)(o.sNh, {
              id: "join-thread-voice",
              label: l ? f.intl.string(f.t["0D/6Rz"]) : f.intl.string(f.t.My50nf),
              action: v,
          });
}
