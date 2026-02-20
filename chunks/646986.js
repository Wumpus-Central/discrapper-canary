"use strict";
n.d(t, { A: () => I }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(688810),
    o = n(290863),
    l = n(461213),
    u = n(183555),
    c = n(622543),
    d = n(146655),
    _ = n(489379),
    f = n(80330),
    p = n(837924),
    h = n(842241),
    m = n(282797),
    E = n(518477),
    g = n(818348),
    A = n(985018);
function I(e) {
    let { user: t, currentUser: n, guildId: I, onOpenUserProfileModal: T, onClose: S } = e,
        { analyticsLocations: y } = (0, a.Ay)(),
        { trackUserProfileAction: v } = (0, u.NJ)(),
        { live: N, stream: C } = (0, d.A)(t.id),
        { voiceChannel: b, voiceActivity: R } = (0, _.A)({ userId: t.id, guildId: I }),
        O = t.id === n.id,
        D = (0, s.bG)([l.A, o.A], () => {
            let e = O ? l.A.getStatus() : o.A.getStatus(t.id, I);
            return e === g.cl.OFFLINE || e === g.cl.INVISIBLE;
        }),
        L = !(0, s.bG)([c.A], () => c.A.getUserProfile(t.id)?.private === !0) && null == C && null == R && null != b,
        w = i.useCallback(
            (e) => {
                let i = [],
                    s = { ...e, user: t, currentUser: n, onClose: S };
                return (
                    null != C && i.push((0, r.jsx)(h.A, { stream: C, ...s }, "stream")),
                    N.forEach((e, t) => {
                        i.push((0, r.jsx)(p.A, { activity: e, ...s }, `live-${t}`));
                    }),
                    L && i.push((0, r.jsx)(m.A, { voiceChannel: b, ...s }, "voice")),
                    i
                );
            },
            [n, L, N, S, C, t, b],
        );
    return D
        ? null
        : (0, r.jsx)(f.A, {
              renderCards: w,
              heading: A.intl.string(A.t.J6STd9),
              onExpand: () => {
                  v({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: y }), T?.({ tabSection: E.RP.ACTIVITY });
              },
          });
}
