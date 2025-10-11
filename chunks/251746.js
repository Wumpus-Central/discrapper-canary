e.d(n, { Z: () => g });
var i = e(951288),
    l = e(647438),
    a = e(392711),
    r = e.n(a),
    o = e(442837),
    s = e(481060),
    d = e(66999),
    u = e(665906),
    c = e(979651),
    f = e(557135),
    h = e(388032);
function g(t) {
    let n = (0, u.Y)(t),
        e = (0, o.e7)([c.Z], () => c.Z.isInChannel(t.id)),
        a = (0, o.e7)([c.Z], () => !r().isEmpty(c.Z.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: g } = (0, d.Z)(t.id),
        v = l.useCallback(() => {
            f.Z.handleVoiceConnect({
                channel: t,
                connected: e,
                needSubscriptionToAccess: g,
                locked: !1,
            });
        }, [t, e, g]);
    return e || !n
        ? null
        : (0, i.jsx)(s.sNh, {
              id: "join-thread-voice",
              label: a ? h.intl.string(h.t["0D/6R0"]) : h.intl.string(h.t.My50nZ),
              action: v,
          });
}
