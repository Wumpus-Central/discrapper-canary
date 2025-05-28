t.d(e, { Z: () => v });
var i = t(255367),
    r = t(73800),
    a = t(392711),
    l = t.n(a),
    o = t(442837),
    s = t(481060),
    d = t(66999),
    u = t(665906),
    c = t(979651),
    f = t(557135),
    h = t(388032);
function v(n) {
    let e = (0, u.Y)(n),
        t = (0, o.e7)([c.Z], () => c.Z.isInChannel(n.id)),
        a = (0, o.e7)([c.Z], () => !l().isEmpty(c.Z.getVoiceStatesForChannel(n.id))),
        { needSubscriptionToAccess: v } = (0, d.Z)(n.id),
        g = r.useCallback(() => {
            f.Z.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: v,
                locked: !1
            });
        }, [n, t, v]);
    return t || !e
        ? null
        : (0, i.jsx)(s.sNh, {
              id: 'join-thread-voice',
              label: a ? h.intl.string(h.t['0D/6R0']) : h.intl.string(h.t.My50nZ),
              action: g
          });
}
