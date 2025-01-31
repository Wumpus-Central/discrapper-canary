e.d(t, { Z: () => v });
var i = e(200651),
    a = e(192379),
    l = e(392711),
    r = e.n(l),
    o = e(442837),
    d = e(481060),
    s = e(66999),
    u = e(665906),
    c = e(979651),
    f = e(557135),
    h = e(388032);
function v(n) {
    let t = (0, u.Y)(n),
        e = (0, o.e7)([c.Z], () => c.Z.isInChannel(n.id)),
        l = (0, o.e7)([c.Z], () => !r().isEmpty(c.Z.getVoiceStatesForChannel(n.id))),
        { needSubscriptionToAccess: v } = (0, s.Z)(n.id),
        Z = a.useCallback(() => {
            f.Z.handleVoiceConnect({
                channel: n,
                connected: e,
                needSubscriptionToAccess: v,
                locked: !1
            });
        }, [n, e, v]);
    return e || !t
        ? null
        : (0, i.jsx)(d.sNh, {
              id: 'join-thread-voice',
              label: l ? h.intl.string(h.t['0D/6R0']) : h.intl.string(h.t.My50nZ),
              action: Z
          });
}
