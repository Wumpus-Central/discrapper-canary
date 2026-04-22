n.d(t, { A: () => I }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(688810),
    s = n(290863),
    o = n(461213),
    u = n(183555),
    d = n(622543),
    c = n(146655),
    A = n(489379),
    _ = n(80330),
    h = n(837924),
    E = n(842241),
    f = n(282797),
    N = n(518477),
    T = n(818348),
    S = n(985018);
function I(e) {
    let { user: t, currentUser: n, guildId: I, onOpenUserProfileModal: p, onClose: m } = e,
        { analyticsLocations: g } = (0, a.Ay)(),
        { trackUserProfileAction: C } = (0, u.NJ)(),
        { live: v, stream: y } = (0, c.A)(t.id),
        { voiceChannel: O, voiceActivity: j } = (0, A.A)({ userId: t.id, guildId: I }),
        L = t.id === n.id,
        P = (0, r.bG)([o.A, s.A], () => {
            let e = L ? o.A.getStatus() : s.A.getStatus(t.id, I);
            return e === T.cl.OFFLINE || e === T.cl.INVISIBLE;
        }),
        b = !(0, r.bG)([d.A], () => d.A.getUserProfile(t.id)?.private === !0) && null == y && null == j && null != O,
        x = i.useCallback(
            (e) => {
                let i = [],
                    r = { ...e, user: t, currentUser: n, onClose: m };
                return (
                    null != y && i.push((0, l.jsx)(E.A, { stream: y, ...r }, "stream")),
                    v.forEach((e, t) => {
                        i.push((0, l.jsx)(h.A, { activity: e, ...r }, `live-${t}`));
                    }),
                    b && i.push((0, l.jsx)(f.A, { voiceChannel: O, ...r }, "voice")),
                    i
                );
            },
            [n, b, v, m, y, t, O],
        );
    return P
        ? null
        : (0, l.jsx)(_.A, {
              renderCards: x,
              heading: S.intl.string(S.t.J6STd9),
              onExpand: () => {
                  C({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: g }), p?.({ tabSection: N.RP.ACTIVITY });
              },
          });
}
