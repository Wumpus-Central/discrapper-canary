e.d(t, { Z: () => f });
var i = e(200651),
    l = e(192379),
    r = e(392711),
    a = e.n(r),
    o = e(442837),
    s = e(481060),
    d = e(66999),
    u = e(665906),
    c = e(979651),
    h = e(557135),
    g = e(388032);
function f(n) {
    let t = (0, u.Y)(n),
        e = (0, o.e7)([c.Z], () => c.Z.isInChannel(n.id)),
        r = (0, o.e7)([c.Z], () => !a().isEmpty(c.Z.getVoiceStatesForChannel(n.id))),
        { needSubscriptionToAccess: f } = (0, d.Z)(n.id),
        Z = l.useCallback(() => {
            h.Z.handleVoiceConnect({
                channel: n,
                connected: e,
                needSubscriptionToAccess: f,
                locked: !1
            });
        }, [n, e, f]);
    return e || !t
        ? null
        : (0, i.jsx)(s.sNh, {
              id: 'join-thread-voice',
              label: r ? g.intl.string(g.t['0D/6R0']) : g.intl.string(g.t.My50nZ),
              action: Z
          });
}
