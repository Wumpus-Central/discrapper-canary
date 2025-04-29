n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(746916),
    a = n(965638),
    c = n(905423),
    u = n(486472),
    d = n(888369),
    h = n(430824),
    p = n(451478),
    f = n(61634),
    g = n(325257),
    m = n(240848);
let b = i.memo(function (e) {
    var t, n;
    let { guildNode: b, lowerBadge: y } = e,
        _ = b.id,
        v = (0, l.e7)([h.Z], () => h.Z.getGuild(_)),
        O = (0, s.E)(v),
        C = (0, l.e7)([p.Z], () => p.Z.isFocused()),
        j = (0, l.e7)([u.Z], () => u.Z.isUnavailable(_)),
        S = (0, c.Z)((e) => e.guildId),
        E = (0, f.Z)(_),
        {
            badge: x,
            unread: P,
            isMentionLowImportance: I
        } = (0, l.cj)([d.default], () => ({
            badge: d.default.getMentionCount(_),
            isMentionLowImportance: d.default.getIsMentionLowImportance(_),
            unread: d.default.hasUnread(_)
        })),
        w = (0, a.Ij)(v) && 0 === x,
        N = i.useMemo(
            () =>
                null != y
                    ? y
                    : w
                      ? (0, r.jsx)('div', {
                            className: m.pauseBackground,
                            children: (0, r.jsx)(o.fpf, {
                                size: 'custom',
                                color: 'currentColor',
                                className: m.pause,
                                width: 10,
                                height: 10
                            })
                        })
                      : null,
            [y, w]
        );
    return (0, r.jsx)(
        g.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, e)),
        (n = n =
            {
                guild: v,
                unavailable: j,
                animatable: C,
                selected: S === _,
                badge: x,
                isMentionLowImportance: I,
                lowerBadge: N,
                unread: P,
                mediaState: E,
                guildJoinRequestStatus: O
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
        t)
    );
});
