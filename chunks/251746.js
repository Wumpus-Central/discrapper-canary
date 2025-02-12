e.d(t, { Z: () => v });
var i = e(200651),
    a = e(192379),
    l = e(392711),
    r = e.n(l),
    d = e(442837),
    o = e(481060),
    s = e(66999),
    u = e(665906),
    c = e(979651),
    h = e(557135),
    f = e(388032);
function v(n) {
    let t = (0, u.Y)(n),
        e = (0, d.e7)([c.Z], () => c.Z.isInChannel(n.id)),
        l = (0, d.e7)([c.Z], () => !r().isEmpty(c.Z.getVoiceStatesForChannel(n.id))),
        { needSubscriptionToAccess: v } = (0, s.Z)(n.id),
        Z = a.useCallback(() => {
            h.Z.handleVoiceConnect({
                channel: n,
                connected: e,
                needSubscriptionToAccess: v,
                locked: !1
            });
        }, [n, e, v]);
    return e || !t
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'join-thread-voice',
              label: l ? f.intl.string(f.t['0D/6R0']) : f.intl.string(f.t.My50nZ),
              action: Z
          });
}
