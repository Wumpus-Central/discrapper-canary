e.d(n, { Z: () => v });
var i = e(951288),
    a = e(647438),
    l = e(392711),
    r = e.n(l),
    o = e(442837),
    s = e(481060),
    d = e(66999),
    u = e(665906),
    c = e(979651),
    f = e(557135),
    h = e(388032);
function v(t) {
    let n = (0, u.Y)(t),
        e = (0, o.e7)([c.Z], () => c.Z.isInChannel(t.id)),
        l = (0, o.e7)([c.Z], () => !r().isEmpty(c.Z.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: v } = (0, d.Z)(t.id),
        g = a.useCallback(() => {
            f.Z.handleVoiceConnect({
                channel: t,
                connected: e,
                needSubscriptionToAccess: v,
                locked: !1,
            });
        }, [t, e, v]);
    return e || !n
        ? null
        : (0, i.jsx)(s.sNh, {
              id: "join-thread-voice",
              label: l ? h.intl.string(h.t["0D/6R0"]) : h.intl.string(h.t.My50nZ),
              action: g,
          });
}
