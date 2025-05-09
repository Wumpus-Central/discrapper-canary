e.d(t, { Z: () => v });
var i = e(255367),
    r = e(73800),
    l = e(392711),
    a = e.n(l),
    o = e(442837),
    u = e(481060),
    d = e(66999),
    s = e(665906),
    c = e(979651),
    f = e(557135),
    h = e(388032);
function v(n) {
    let t = (0, s.Y)(n),
        e = (0, o.e7)([c.Z], () => c.Z.isInChannel(n.id)),
        l = (0, o.e7)([c.Z], () => !a().isEmpty(c.Z.getVoiceStatesForChannel(n.id))),
        { needSubscriptionToAccess: v } = (0, d.Z)(n.id),
        g = r.useCallback(() => {
            f.Z.handleVoiceConnect({
                channel: n,
                connected: e,
                needSubscriptionToAccess: v,
                locked: !1
            });
        }, [n, e, v]);
    return e || !t
        ? null
        : (0, i.jsx)(u.sNh, {
              id: 'join-thread-voice',
              label: l ? h.intl.string(h.t['0D/6R0']) : h.intl.string(h.t.My50nZ),
              action: g
          });
}
