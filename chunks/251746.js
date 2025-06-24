n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(66999),
    u = n(665906),
    d = n(979651),
    p = n(557135),
    h = n(388032);
function f(e) {
    let t = (0, u.Y)(e),
        n = (0, o.e7)([d.Z], () => d.Z.isInChannel(e.id)),
        l = (0, o.e7)([d.Z], () => !a().isEmpty(d.Z.getVoiceStatesForChannel(e.id))),
        { needSubscriptionToAccess: f } = (0, c.Z)(e.id),
        m = i.useCallback(() => {
            p.Z.handleVoiceConnect({
                channel: e,
                connected: n,
                needSubscriptionToAccess: f,
                locked: !1
            });
        }, [e, n, f]);
    return n || !t
        ? null
        : (0, r.jsx)(s.sNh, {
              id: 'join-thread-voice',
              label: l ? h.intl.string(h.t['0D/6R0']) : h.intl.string(h.t.My50nZ),
              action: m
          });
}
