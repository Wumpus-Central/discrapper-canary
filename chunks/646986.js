"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(688810),
    o = n(290863),
    l = n(461213),
    u = n(183555),
    c = n(841595),
    d = n(146655),
    _ = n(489379),
    h = n(80330),
    f = n(402857),
    p = n(64622),
    E = n(986712),
    m = n(518477),
    g = n(818348),
    A = n(375708);
function I(e) {
    let { user: t, currentUser: n, guildId: I, onOpenUserProfileModal: T, onClose: S } = e,
        { analyticsLocations: y } = (0, a.Ay)(),
        { trackUserProfileAction: C } = (0, u.NJ)(),
        { live: N, stream: v } = (0, d.A)(t.id),
        { voiceChannel: R, voiceActivity: O } = (0, _.A)({ userId: t.id, guildId: I }),
        b = t.id === n.id,
        D = (0, s.bG)([l.A, o.A], () => {
            let e = b ? l.A.getStatus() : o.A.getStatus(t.id, I);
            return e === g.cl.OFFLINE || e === g.cl.INVISIBLE;
        }),
        L = !(0, s.bG)([c.A], () => c.A.getUserProfile(t.id)?.private === !0) && null == v && null == O && null != R,
        w = r.useCallback(
            (e) => {
                let r = [],
                    s = { ...e, user: t, currentUser: n, onClose: S };
                return (
                    null != v && r.push((0, i.jsx)(p.A, { stream: v, ...s }, "stream")),
                    N.forEach((e, t) => {
                        r.push((0, i.jsx)(f.A, { activity: e, ...s }, `live-${t}`));
                    }),
                    L && r.push((0, i.jsx)(E.A, { voiceChannel: R, ...s }, "voice")),
                    r
                );
            },
            [n, L, N, S, v, t, R],
        );
    return D
        ? null
        : (0, i.jsx)(h.A, {
              renderCards: w,
              heading: A.intl.string(A.t.J6STd9),
              onExpand: () => {
                  C({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: y }), T?.({ tabSection: m.RP.ACTIVITY });
              },
          });
}
