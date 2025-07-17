(n.d(t, { Z: () => f }), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(481060),
    s = n(100527),
    c = n(670188),
    u = n(463618),
    d = n(823379),
    p = n(88729);
let m = (e) => {
        let { member: t, empty: n, guildId: l } = e,
            a = i.useRef(null);
        return n
            ? (0, r.jsx)('div', { className: p.partyMemberEmpty })
            : null == t
              ? (0, r.jsx)('div', {
                    className: p.partyMemberUnknown,
                    children: (0, r.jsx)(u.Z, { className: p.partyMemberUnknownIcon })
                })
              : (0, r.jsx)('div', {
                    className: p.partyMemberKnown,
                    children: (0, r.jsx)(c.Z, {
                        targetElementRef: a,
                        userId: t.id,
                        guildId: l,
                        newAnalyticsLocations: [s.Z.AVATAR],
                        position: 'left',
                        clickTrap: !0,
                        children: (e) => {
                            var n, i;
                            return (0, r.jsx)(
                                o.qEK,
                                ((n = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (i = i =
                                    {
                                        ref: a,
                                        src: t.getAvatarURL(l, 24),
                                        'aria-label': t.username,
                                        size: o.EFr.SIZE_24,
                                        className: p.partyMember
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                n)
                            );
                        }
                    })
                });
    },
    f = (e) => {
        let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: l = 2, guildId: o } = e,
            { unknownSize: s, totalSize: c, knownSize: u } = t;
        if (c < i) return null;
        let f = a()(n)
            .filter(d.lm)
            .take(l)
            .map((e) =>
                (0, r.jsx)(
                    m,
                    {
                        member: e,
                        guildId: o
                    },
                    e.id
                )
            )
            .value();
        for (let e = 0; e < s && f.length < l; e++) f.push((0, r.jsx)(m, { guildId: o }, 'unknown-member-'.concat(e)));
        let g = c - u - s;
        for (let e = 0; e < g && f.length < l; e++)
            f.push(
                (0, r.jsx)(
                    m,
                    {
                        empty: !0,
                        guildId: o
                    },
                    'empty-member-'.concat(e)
                )
            );
        let h = Math.max(Math.min(c - f.length, 99), 0);
        if (1 === h) {
            let e = n[l];
            f.push(
                (0, r.jsx)(
                    m,
                    {
                        member: e,
                        guildId: o
                    },
                    e.id
                )
            );
        }
        return (0, r.jsx)('div', {
            className: p.wrapper,
            children: (0, r.jsxs)('div', {
                className: p.partyMembers,
                children: [
                    f,
                    h > 1
                        ? (0, r.jsxs)('div', {
                              className: p.partyMemberOverflow,
                              children: ['+', h]
                          })
                        : null
                ]
            })
        });
    };
