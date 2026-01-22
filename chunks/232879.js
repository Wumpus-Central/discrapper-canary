n.d(t, { A: () => m });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(199285),
    o = n(347951),
    c = n(366811),
    u = n(919638),
    d = n(458294),
    f = n(71393),
    p = n(531685),
    h = n(131494),
    b = n(330465),
    g = n(605611);
let m = l.memo(function (e) {
    var t, n;
    let { guildNode: m, lowerBadge: A } = e,
        y = m.id,
        O = (0, i.bG)([f.A], () => f.A.getGuild(y)),
        j = (0, s.a)(O),
        v = (0, i.bG)([p.A], () => p.A.isFocused()),
        x = (0, i.bG)([u.A], () => u.A.isUnavailable(y)),
        E = (0, c.A)((e) => e.guildId),
        _ = (0, h.A)(y),
        {
            badge: C,
            unread: S,
            isMentionLowImportance: I,
        } = (0, i.cf)([d.default], () => ({
            badge: d.default.getMentionCount(y),
            isMentionLowImportance: d.default.getIsMentionLowImportance(y),
            unread: d.default.hasUnread(y),
        })),
        N = (0, o.Ig)(O) && 0 === C,
        T = l.useMemo(
            () =>
                null != A
                    ? A
                    : N
                      ? (0, r.jsx)("div", {
                            className: g.j,
                            children: (0, r.jsx)(a.E$n, {
                                size: "custom",
                                color: "currentColor",
                                className: g.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [A, N],
        );
    return (0, r.jsx)(
        b.A,
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
                unavailable: x,
                animatable: v,
                selected: E === y,
                badge: C,
                isMentionLowImportance: I,
                lowerBadge: T,
                unread: S,
                mediaState: _,
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
