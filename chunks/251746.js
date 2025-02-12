n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(66999),
    d = n(665906),
    u = n(979651),
    h = n(557135),
    p = n(388032);
function m(e) {
    let t = (0, d.Y)(e),
        n = (0, s.e7)([u.Z], () => u.Z.isInChannel(e.id)),
        a = (0, s.e7)([u.Z], () => !r().isEmpty(u.Z.getVoiceStatesForChannel(e.id))),
        { needSubscriptionToAccess: m } = (0, c.Z)(e.id),
        f = l.useCallback(() => {
            h.Z.handleVoiceConnect({
                channel: e,
                connected: n,
                needSubscriptionToAccess: m,
                locked: !1
            });
        }, [e, n, m]);
    return n || !t
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'join-thread-voice',
              label: a ? p.intl.string(p.t['0D/6R0']) : p.intl.string(p.t.My50nZ),
              action: f
          });
}
