n.d(t, { Z: () => I }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(468363),
    s = n(906732),
    l = n(158776),
    c = n(885110),
    u = n(785717),
    d = n(369566),
    f = n(29899),
    p = n(278857),
    _ = n(151545),
    m = n(769140),
    h = n(864141),
    g = n(228168),
    E = n(231338),
    b = n(388032);
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
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { user: t, currentUser: n, guildId: y, onOpenUserProfileModal: v, onClose: I } = e,
        { analyticsLocations: T } = (0, s.ZP)(),
        { trackUserProfileAction: A } = (0, u.KZ)(),
        { live: C, stream: N } = (0, d.Z)(t.id),
        { voiceChannel: P, voiceActivity: R } = (0, f.Z)({
            userId: t.id,
            guildId: y,
        }),
        D = t.id === n.id,
        w = (0, a.e7)([c.Z, l.Z], () => {
            let e = D ? c.Z.getStatus() : l.Z.getStatus(t.id, y);
            return e === E.Sk.OFFLINE || e === E.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: x } = (0, o.U)({ location: "UserProfileStackedActivity" }),
        L = x && null == N && null == R && null != P,
        j = i.useCallback(
            (e) => {
                let i = [],
                    a = S(O({}, e), {
                        user: t,
                        currentUser: n,
                        onClose: I,
                    });
                return (
                    null != N && i.push((0, r.jsx)(m.Z, O({ stream: N }, a), "stream")),
                    C.forEach((e, t) => {
                        i.push((0, r.jsx)(_.Z, O({ activity: e }, a), "live-".concat(t)));
                    }),
                    L && i.push((0, r.jsx)(h.Z, O({ voiceChannel: P }, a), "voice")),
                    i
                );
            },
            [n, L, C, I, N, t, P],
        );
    return w
        ? null
        : (0, r.jsx)(p.Z, {
              renderCards: j,
              heading: b.intl.string(b.t.J6STd9),
              onExpand: () => {
                  A({
                      action: "PRESS_SHOW_MORE_ACTIVITY",
                      analyticsLocations: T,
                  }),
                      null == v || v({ section: g.oh.ACTIVITY });
              },
          });
}
