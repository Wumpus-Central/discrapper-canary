n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(746916),
    s = n(634755),
    c = n(905423),
    u = n(486472),
    d = n(888369),
    f = n(430824),
    h = n(451478),
    p = n(61634),
    g = n(325257),
    b = n(357863);
let m = i.memo(function (e) {
    var t, n;
    let { guildNode: m, lowerBadge: y } = e,
        O = m.id,
        v = (0, l.e7)([f.Z], () => f.Z.getGuild(O)),
        j = (0, o.E)(v),
        C = (0, l.e7)([h.Z], () => h.Z.isFocused()),
        x = (0, l.e7)([u.Z], () => u.Z.isUnavailable(O)),
        E = (0, c.Z)((e) => e.guildId),
        S = (0, p.Z)(O),
        {
            badge: I,
            unread: _,
            isMentionLowImportance: P,
        } = (0, l.cj)([d.default], () => ({
            badge: d.default.getMentionCount(O),
            isMentionLowImportance: d.default.getIsMentionLowImportance(O),
            unread: d.default.hasUnread(O),
        })),
        N = (0, s.Ij)(v) && 0 === I,
        Z = i.useMemo(
            () =>
                null != y
                    ? y
                    : N
                      ? (0, r.jsx)("div", {
                            className: b.pauseBackground,
                            children: (0, r.jsx)(a.fpf, {
                                size: "custom",
                                color: "currentColor",
                                className: b.pause,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [y, N],
        );
    return (0, r.jsx)(
        g.Z,
        ((t = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, e)),
        (n = n =
            {
                guild: v,
                unavailable: x,
                animatable: C,
                selected: E === O,
                badge: I,
                isMentionLowImportance: P,
                lowerBadge: Z,
                unread: _,
                mediaState: S,
                guildJoinRequestStatus: j,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
});
