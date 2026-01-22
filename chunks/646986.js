n.d(t, { A: () => S }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(901517),
    o = n(688810),
    l = n(290863),
    c = n(461213),
    u = n(183555),
    d = n(146655),
    f = n(489379),
    p = n(80330),
    _ = n(837924),
    h = n(842241),
    m = n(282797),
    g = n(518477),
    E = n(818348),
    b = n(985018);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { user: t, currentUser: n, guildId: y, onOpenUserProfileModal: A, onClose: S } = e,
        { analyticsLocations: I } = (0, o.Ay)(),
        { trackUserProfileAction: T } = (0, u.NJ)(),
        { live: C, stream: N } = (0, d.A)(t.id),
        { voiceChannel: R, voiceActivity: w } = (0, f.A)({
            userId: t.id,
            guildId: y,
        }),
        P = t.id === n.id,
        D = (0, a.bG)([c.A, l.A], () => {
            let e = P ? c.A.getStatus() : l.A.getStatus(t.id, y);
            return e === E.cl.OFFLINE || e === E.cl.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: x } = (0, s.G)({ location: "UserProfileStackedActivity" }),
        L = x && null == N && null == w && null != R,
        j = i.useCallback(
            (e) => {
                let i = [],
                    a = v(O({}, e), {
                        user: t,
                        currentUser: n,
                        onClose: S,
                    });
                return (
                    null != N && i.push((0, r.jsx)(h.A, O({ stream: N }, a), "stream")),
                    C.forEach((e, t) => {
                        i.push((0, r.jsx)(_.A, O({ activity: e }, a), "live-".concat(t)));
                    }),
                    L && i.push((0, r.jsx)(m.A, O({ voiceChannel: R }, a), "voice")),
                    i
                );
            },
            [n, L, C, S, N, t, R],
        );
    return D
        ? null
        : (0, r.jsx)(p.A, {
              renderCards: j,
              heading: b.intl.string(b.t.J6STd9),
              onExpand: () => {
                  T({
                      action: "PRESS_SHOW_MORE_ACTIVITY",
                      analyticsLocations: I,
                  }),
                      null == A || A({ tabSection: g.RP.ACTIVITY });
              },
          });
}
