n.d(t, { Z: () => m }), n(539854);
var r = n(200651);
n(192379);
var i = n(392711),
    a = n.n(i),
    l = n(481060),
    o = n(100527),
    s = n(670188),
    c = n(463618),
    u = n(823379),
    d = n(88729);
let p = (e) => {
        let { member: t, empty: n, guildId: i } = e;
        return n
            ? (0, r.jsx)('div', { className: d.partyMemberEmpty })
            : null == t
              ? (0, r.jsx)('div', {
                    className: d.partyMemberUnknown,
                    children: (0, r.jsx)(c.Z, { className: d.partyMemberUnknownIcon })
                })
              : (0, r.jsx)('div', {
                    className: d.partyMemberKnown,
                    children: (0, r.jsx)(s.Z, {
                        userId: t.id,
                        guildId: i,
                        newAnalyticsLocations: [o.Z.AVATAR],
                        position: 'left',
                        clickTrap: !0,
                        children: (e) => {
                            var n, a;
                            return (0, r.jsx)(
                                l.qEK,
                                ((n = (function (e) {
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
                                (a = a =
                                    {
                                        src: t.getAvatarURL(i, 24),
                                        'aria-label': t.username,
                                        size: l.EFr.SIZE_24,
                                        className: d.partyMember
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                n)
                            );
                        }
                    })
                });
    },
    m = (e) => {
        let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: l = 2, guildId: o } = e,
            { unknownSize: s, totalSize: c, knownSize: m } = t;
        if (c < i) return null;
        let f = a()(n)
            .filter(u.lm)
            .take(l)
            .map((e) =>
                (0, r.jsx)(
                    p,
                    {
                        member: e,
                        guildId: o
                    },
                    e.id
                )
            )
            .value();
        for (let e = 0; e < s && f.length < l; e++) f.push((0, r.jsx)(p, { guildId: o }, 'unknown-member-'.concat(e)));
        let h = c - m - s;
        for (let e = 0; e < h && f.length < l; e++)
            f.push(
                (0, r.jsx)(
                    p,
                    {
                        empty: !0,
                        guildId: o
                    },
                    'empty-member-'.concat(e)
                )
            );
        let g = Math.max(Math.min(c - f.length, 99), 0);
        if (1 === g) {
            let e = n[l];
            f.push(
                (0, r.jsx)(
                    p,
                    {
                        member: e,
                        guildId: o
                    },
                    e.id
                )
            );
        }
        return (0, r.jsx)('div', {
            className: d.wrapper,
            children: (0, r.jsxs)('div', {
                className: d.partyMembers,
                children: [
                    f,
                    g > 1
                        ? (0, r.jsxs)('div', {
                              className: d.partyMemberOverflow,
                              children: ['+', g]
                          })
                        : null
                ]
            })
        });
    };
