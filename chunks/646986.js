n.d(t, { A: () => S }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(688810),
    o = n(290863),
    s = n(461213),
    d = n(183555),
    u = n(841595),
    _ = n(146655),
    c = n(489379),
    f = n(80330),
    A = n(402857),
    h = n(842241),
    p = n(986712),
    E = n(518477),
    T = n(818348),
    N = n(985018);
function S(e) {
    let { user: t, currentUser: n, guildId: S, onOpenUserProfileModal: I, onClose: m } = e,
        { analyticsLocations: C } = (0, a.Ay)(),
        { trackUserProfileAction: g } = (0, d.NJ)(),
        { live: v, stream: x } = (0, _.A)(t.id),
        { voiceChannel: y, voiceActivity: b } = (0, c.A)({ userId: t.id, guildId: S }),
        L = t.id === n.id,
        O = (0, r.bG)([s.A, o.A], () => {
            let e = L ? s.A.getStatus() : o.A.getStatus(t.id, S);
            return e === T.cl.OFFLINE || e === T.cl.INVISIBLE;
        }),
        j = !(0, r.bG)([u.A], () => u.A.getUserProfile(t.id)?.private === !0) && null == x && null == b && null != y,
        P = i.useCallback(
            (e) => {
                let i = [],
                    r = { ...e, user: t, currentUser: n, onClose: m };
                return (
                    null != x && i.push((0, l.jsx)(h.A, { stream: x, ...r }, "stream")),
                    v.forEach((e, t) => {
                        i.push((0, l.jsx)(A.A, { activity: e, ...r }, `live-${t}`));
                    }),
                    j && i.push((0, l.jsx)(p.A, { voiceChannel: y, ...r }, "voice")),
                    i
                );
            },
            [n, j, v, m, x, t, y],
        );
    return O
        ? null
        : (0, l.jsx)(f.A, {
              renderCards: P,
              heading: N.intl.string(N.t.J6STd9),
              onExpand: () => {
                  g({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: C }), I?.({ tabSection: E.RP.ACTIVITY });
              },
          });
}
