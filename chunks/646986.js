"use strict";
n.d(t, { A: () => I }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(901517),
    o = n(688810),
    l = n(290863),
    u = n(461213),
    c = n(183555),
    d = n(146655),
    _ = n(489379),
    f = n(80330),
    p = n(837924),
    h = n(842241),
    m = n(282797),
    g = n(518477),
    E = n(818348),
    A = n(985018);
function I(e) {
    let { user: t, currentUser: n, guildId: I, onOpenUserProfileModal: T, onClose: y } = e,
        { analyticsLocations: S } = (0, o.Ay)(),
        { trackUserProfileAction: v } = (0, c.NJ)(),
        { live: C, stream: b } = (0, d.A)(t.id),
        { voiceChannel: N, voiceActivity: R } = (0, _.A)({ userId: t.id, guildId: I }),
        O = t.id === n.id,
        D = (0, a.bG)([u.A, l.A], () => {
            let e = O ? u.A.getStatus() : l.A.getStatus(t.id, I);
            return e === E.cl.OFFLINE || e === E.cl.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: L } = (0, s.G)({ location: "UserProfileStackedActivity" }),
        w = L && null == b && null == R && null != N,
        x = i.useCallback(
            (e) => {
                let i = [],
                    a = { ...e, user: t, currentUser: n, onClose: y };
                return (
                    null != b && i.push((0, r.jsx)(h.A, { stream: b, ...a }, "stream")),
                    C.forEach((e, t) => {
                        i.push((0, r.jsx)(p.A, { activity: e, ...a }, `live-${t}`));
                    }),
                    w && i.push((0, r.jsx)(m.A, { voiceChannel: N, ...a }, "voice")),
                    i
                );
            },
            [n, w, C, y, b, t, N],
        );
    return D
        ? null
        : (0, r.jsx)(f.A, {
              renderCards: x,
              heading: A.intl.string(A.t.J6STd9),
              onExpand: () => {
                  v({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: S }), T?.({ tabSection: g.RP.ACTIVITY });
              },
          });
}
