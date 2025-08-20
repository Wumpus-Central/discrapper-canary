i.d(n, { Z: () => v });
var e = i(951288),
    l = i(647438),
    r = i(392711),
    a = i.n(r),
    d = i(442837),
    o = i(481060),
    s = i(66999),
    u = i(665906),
    c = i(979651),
    h = i(557135),
    Z = i(388032);
function v(t) {
    let n = (0, u.Y)(t),
        i = (0, d.e7)([c.Z], () => c.Z.isInChannel(t.id)),
        r = (0, d.e7)([c.Z], () => !a().isEmpty(c.Z.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: v } = (0, s.Z)(t.id),
        f = l.useCallback(() => {
            h.Z.handleVoiceConnect({
                channel: t,
                connected: i,
                needSubscriptionToAccess: v,
                locked: !1,
            });
        }, [t, i, v]);
    return i || !n
        ? null
        : (0, e.jsx)(o.sNh, {
              id: "join-thread-voice",
              label: r ? Z.intl.string(Z.t["0D/6R0"]) : Z.intl.string(Z.t.My50nZ),
              action: f,
          });
}
