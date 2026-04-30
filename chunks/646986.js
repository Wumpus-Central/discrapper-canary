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
    f = n(80330),
    h = n(402857),
    p = n(64622),
    E = n(986712),
    m = n(518477),
    g = n(818348),
    A = n(375708);
function I(e) {
    let { user: t, currentUser: n, guildId: I, onOpenUserProfileModal: T, onClose: S } = e,
        { analyticsLocations: N } = (0, a.Ay)(),
        { trackUserProfileAction: y } = (0, u.NJ)(),
        { live: C, stream: v } = (0, d.A)(t.id),
        { voiceChannel: O, voiceActivity: R } = (0, _.A)({ userId: t.id, guildId: I }),
        b = t.id === n.id,
        D = (0, s.bG)([l.A, o.A], () => {
            let e = b ? l.A.getStatus() : o.A.getStatus(t.id, I);
            return e === g.cl.OFFLINE || e === g.cl.INVISIBLE;
        }),
        L = !(0, s.bG)([c.A], () => c.A.getUserProfile(t.id)?.private === !0) && null == v && null == R && null != O,
        w = r.useCallback(
            (e) => {
                let r = [],
                    s = { ...e, user: t, currentUser: n, onClose: S };
                return (
                    null != v && r.push((0, i.jsx)(p.A, { stream: v, ...s }, "stream")),
                    C.forEach((e, t) => {
                        r.push((0, i.jsx)(h.A, { activity: e, ...s }, `live-${t}`));
                    }),
                    L && r.push((0, i.jsx)(E.A, { voiceChannel: O, ...s }, "voice")),
                    r
                );
            },
            [n, L, C, S, v, t, O],
        );
    return D
        ? null
        : (0, i.jsx)(f.A, {
              renderCards: w,
              heading: A.intl.string(A.t.J6STd9),
              onExpand: () => {
                  y({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: N }), T?.({ tabSection: m.RP.ACTIVITY });
              },
          });
}
