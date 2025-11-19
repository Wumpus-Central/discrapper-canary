n.d(t, { Z: () => h }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(481060),
    o = n(100527),
    c = n(456077),
    u = n(463618),
    d = n(823379),
    p = n(550619);
let f = (e) => {
        let { member: t, empty: n, guildId: l } = e,
            a = i.useRef(null);
        return n
            ? (0, r.jsx)("div", { className: p.partyMemberEmpty })
            : null == t
              ? (0, r.jsx)("div", {
                    className: p.partyMemberUnknown,
                    children: (0, r.jsx)(u.Z, { className: p.partyMemberUnknownIcon }),
                })
              : (0, r.jsx)("div", {
                    className: p.partyMemberKnown,
                    children: (0, r.jsx)(c.Z, {
                        targetElementRef: a,
                        userId: t.id,
                        guildId: l,
                        newAnalyticsLocations: [o.Z.AVATAR],
                        position: "left",
                        clickTrap: !0,
                        children: (e) => {
                            var n, i;
                            return (0, r.jsx)(
                                s.qEK,
                                ((n = (function (e) {
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
                                (i = i =
                                    {
                                        ref: a,
                                        src: t.getAvatarURL(l, 24),
                                        "aria-label": t.username,
                                        size: s.EFr.SIZE_24,
                                        className: p.partyMember,
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
                                n),
                            );
                        },
                    }),
                });
    },
    h = (e) => {
        let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: l = 2, guildId: s } = e,
            { unknownSize: o, totalSize: c, knownSize: u } = t;
        if (c < i) return null;
        let h = a()(n)
            .filter(d.lm)
            .take(l)
            .map((e) =>
                (0, r.jsx)(
                    f,
                    {
                        member: e,
                        guildId: s,
                    },
                    e.id,
                ),
            )
            .value();
        for (let e = 0; e < o && h.length < l; e++) h.push((0, r.jsx)(f, { guildId: s }, "unknown-member-".concat(e)));
        let g = c - u - o;
        for (let e = 0; e < g && h.length < l; e++)
            h.push(
                (0, r.jsx)(
                    f,
                    {
                        empty: !0,
                        guildId: s,
                    },
                    "empty-member-".concat(e),
                ),
            );
        let m = Math.max(Math.min(c - h.length, 99), 0);
        if (1 === m) {
            let e = n[l];
            h.push(
                (0, r.jsx)(
                    f,
                    {
                        member: e,
                        guildId: s,
                    },
                    e.id,
                ),
            );
        }
        return (0, r.jsx)("div", {
            className: p.wrapper,
            children: (0, r.jsxs)("div", {
                className: p.partyMembers,
                children: [
                    h,
                    m > 1
                        ? (0, r.jsxs)("div", {
                              className: p.partyMemberOverflow,
                              children: ["+", m],
                          })
                        : null,
                ],
            }),
        });
    };
