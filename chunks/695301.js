n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(746916),
    s = n(634755),
    c = n(905423),
    u = n(486472),
    d = n(888369),
    p = n(430824),
    h = n(451478),
    f = n(61634),
    g = n(325257),
    m = n(338044);
let b = i.memo(function (e) {
    var t, n;
    let { guildNode: b, lowerBadge: _ } = e,
        y = b.id,
        O = (0, l.e7)([p.Z], () => p.Z.getGuild(y)),
        v = (0, a.E)(O),
        j = (0, l.e7)([h.Z], () => h.Z.isFocused()),
        C = (0, l.e7)([u.Z], () => u.Z.isUnavailable(y)),
        x = (0, c.Z)((e) => e.guildId),
        E = (0, f.Z)(y),
        {
            badge: S,
            unread: I,
            isMentionLowImportance: P,
        } = (0, l.cj)([d.default], () => ({
            badge: d.default.getMentionCount(y),
            isMentionLowImportance: d.default.getIsMentionLowImportance(y),
            unread: d.default.hasUnread(y),
        })),
        N = (0, s.Ij)(O) && 0 === S,
        Z = i.useMemo(
            () =>
                null != _
                    ? _
                    : N
                      ? (0, r.jsx)("div", {
                            className: m.pauseBackground,
                            children: (0, r.jsx)(o.fpf, {
                                size: "custom",
                                color: "currentColor",
                                className: m.pause,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [_, N],
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
                guild: O,
                unavailable: C,
                animatable: j,
                selected: x === y,
                badge: S,
                isMentionLowImportance: P,
                lowerBadge: Z,
                unread: I,
                mediaState: E,
                guildJoinRequestStatus: v,
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
