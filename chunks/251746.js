n.d(e, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(392711),
    l = n.n(a),
    s = n(442837),
    o = n(481060),
    d = n(66999),
    c = n(665906),
    u = n(979651),
    h = n(557135),
    g = n(388032);
function f(t) {
    let e = (0, c.Y)(t),
        n = (0, s.e7)([u.Z], () => u.Z.isInChannel(t.id)),
        a = (0, s.e7)([u.Z], () => !l().isEmpty(u.Z.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: f } = (0, d.Z)(t.id),
        b = r.useCallback(() => {
            h.Z.handleVoiceConnect({
                channel: t,
                connected: n,
                needSubscriptionToAccess: f,
                locked: !1
            });
        }, [t, n, f]);
    return n || !e
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'join-thread-voice',
              label: a ? g.NW.string(g.t['0D/6R0']) : g.NW.string(g.t.My50nZ),
              action: b
          });
}
