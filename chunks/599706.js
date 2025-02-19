n.d(t, { Z: () => g }), n(653041);
var r = n(200651);
n(192379);
var i = n(392711),
    a = n.n(i),
    o = n(481060),
    l = n(100527),
    s = n(184301),
    c = n(347475),
    d = n(463618),
    u = n(823379),
    p = n(491590);
function m(e) {
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
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e) => {
        let { member: t, empty: n, guildId: i } = e;
        return n
            ? (0, r.jsx)('div', { className: p.partyMemberEmpty })
            : null == t
              ? (0, r.jsx)('div', {
                    className: p.partyMemberUnknown,
                    children: (0, r.jsx)(d.Z, { className: p.partyMemberUnknownIcon })
                })
              : (0, r.jsx)('div', {
                    className: p.partyMemberKnown,
                    children: (0, r.jsx)(o.yRy, {
                        preload: () => (0, s.Z)(t.id, t.getAvatarURL(i, 80), { guildId: i }),
                        renderPopout: (e) =>
                            (0, r.jsx)(
                                c.Z,
                                f(m({}, e), {
                                    userId: t.id,
                                    guildId: i,
                                    newAnalyticsLocations: [l.Z.AVATAR]
                                })
                            ),
                        position: 'left',
                        children: (e) =>
                            (0, r.jsx)(
                                o.qEK,
                                f(m({}, e), {
                                    src: t.getAvatarURL(i, 24),
                                    'aria-label': t.username,
                                    size: o.EFr.SIZE_24,
                                    className: p.partyMember
                                })
                            )
                    })
                });
    },
    g = (e) => {
        let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: o = 2, guildId: l } = e,
            { unknownSize: s, totalSize: c, knownSize: d } = t;
        if (c < i) return null;
        let m = a()(n)
            .filter(u.lm)
            .take(o)
            .map((e) =>
                (0, r.jsx)(
                    h,
                    {
                        member: e,
                        guildId: l
                    },
                    e.id
                )
            )
            .value();
        for (let e = 0; e < s && m.length < o; e++) m.push((0, r.jsx)(h, { guildId: l }, 'unknown-member-'.concat(e)));
        let f = c - d - s;
        for (let e = 0; e < f && m.length < o; e++)
            m.push(
                (0, r.jsx)(
                    h,
                    {
                        empty: !0,
                        guildId: l
                    },
                    'empty-member-'.concat(e)
                )
            );
        let g = Math.max(Math.min(c - m.length, 99), 0);
        if (1 === g) {
            let e = n[o];
            m.push(
                (0, r.jsx)(
                    h,
                    {
                        member: e,
                        guildId: l
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
                    m,
                    g > 1
                        ? (0, r.jsxs)('div', {
                              className: p.partyMemberOverflow,
                              children: ['+', g]
                          })
                        : null
                ]
            })
        });
    };
