n.d(t, {
    A: () => h,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(397927),
    o = n(793574),
    c = n(342296),
    u = n(988647),
    d = n(403362),
    p = n(641017);
let f = (e) => {
        let { member: t, empty: n, guildId: l } = e,
            a = i.useRef(null);
        return n
            ? (0, r.jsx)("div", {
                  className: p._b,
              })
            : null == t
              ? (0, r.jsx)("div", {
                    className: p.j7,
                    children: (0, r.jsx)(u.A, {
                        className: p.s$,
                    }),
                })
              : (0, r.jsx)("div", {
                    className: p.sR,
                    children: (0, r.jsx)(c.A, {
                        targetElementRef: a,
                        userId: t.id,
                        guildId: l,
                        newAnalyticsLocations: [o.A.AVATAR],
                        position: "left",
                        clickTrap: !0,
                        children: (e) => {
                            var n, i;
                            return (0, r.jsx)(
                                s.euF,
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
                                        size: s._3J.SIZE_24,
                                        className: p.pO,
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
            .filter(d.Vq)
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
        for (let e = 0; e < o && h.length < l; e++)
            h.push(
                (0, r.jsx)(
                    f,
                    {
                        guildId: s,
                    },
                    "unknown-member-".concat(e),
                ),
            );
        let A = c - u - o;
        for (let e = 0; e < A && h.length < l; e++)
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
        let g = Math.max(Math.min(c - h.length, 99), 0);
        if (1 === g) {
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
            className: p.iE,
            children: (0, r.jsxs)("div", {
                className: p.S3,
                children: [
                    h,
                    g > 1
                        ? (0, r.jsxs)("div", {
                              className: p.Hi,
                              children: ["+", g],
                          })
                        : null,
                ],
            }),
        });
    };
