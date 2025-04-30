e.d(n, { Z: () => f });
var i = e(200651),
    r = e(192379),
    l = e(392711),
    a = e.n(l),
    s = e(442837),
    o = e(481060),
    d = e(66999),
    c = e(665906),
    u = e(979651),
    h = e(557135),
    g = e(388032);
function f(t) {
    let n = (0, c.Y)(t),
        e = (0, s.e7)([u.Z], () => u.Z.isInChannel(t.id)),
        l = (0, s.e7)([u.Z], () => !a().isEmpty(u.Z.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: f } = (0, d.Z)(t.id),
        b = r.useCallback(() => {
            h.Z.handleVoiceConnect({
                channel: t,
                connected: e,
                needSubscriptionToAccess: f,
                locked: !1
            });
        }, [t, e, f]);
    return e || !n
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'join-thread-voice',
              label: l ? g.intl.string(g.t['0D/6R0']) : g.intl.string(g.t.My50nZ),
              action: b
          });
}
