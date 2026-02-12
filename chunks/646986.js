"use strict";
n.d(t, { A: () => y }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(901517),
    o = n(688810),
    l = n(290863),
    u = n(461213),
    c = n(183555),
    d = n(622543),
    _ = n(146655),
    f = n(489379),
    h = n(80330),
    p = n(837924),
    g = n(842241),
    E = n(282797),
    A = n(518477),
    I = n(818348),
    T = n(985018);
function y(e) {
    let { user: t, currentUser: n, guildId: y, onOpenUserProfileModal: S, onClose: v } = e,
        { analyticsLocations: C } = (0, o.Ay)(),
        { trackUserProfileAction: b } = (0, c.NJ)(),
        { live: N, stream: R } = (0, _.A)(t.id),
        { voiceChannel: O, voiceActivity: D } = (0, f.A)({ userId: t.id, guildId: y }),
        L = t.id === n.id,
        w = (0, a.bG)([u.A, l.A], () => {
            let e = L ? u.A.getStatus() : l.A.getStatus(t.id, y);
            return e === I.cl.OFFLINE || e === I.cl.INVISIBLE;
        }),
        x = (0, a.bG)([d.A], () => d.A.getUserProfile(t.id)?.private === !0),
        { voiceActivityStatusEnabled: P } = (0, s.G)({ location: "UserProfileStackedActivity" }),
        M = P && null == R && null == D && null != O,
        k = i.useCallback(
            (e) => {
                let i = [],
                    a = { ...e, user: t, currentUser: n, onClose: v };
                return (
                    null != R && i.push((0, r.jsx)(g.A, { stream: R, ...a }, "stream")),
                    N.forEach((e, t) => {
                        i.push((0, r.jsx)(p.A, { activity: e, ...a }, `live-${t}`));
                    }),
                    M && i.push((0, r.jsx)(E.A, { voiceChannel: O, ...a }, "voice")),
                    i
                );
            },
            [n, M, N, v, R, t, O],
        );
    return w || x
        ? null
        : (0, r.jsx)(h.A, {
              renderCards: k,
              heading: T.intl.string(T.t.J6STd9),
              onExpand: () => {
                  b({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: C }), S?.({ tabSection: A.RP.ACTIVITY });
              },
          });
}
