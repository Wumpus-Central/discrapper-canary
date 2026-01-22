n.d(t, {
    A: () => H,
}),
    n(114821),
    n(339614),
    n(896048),
    n(638769),
    n(733351),
    n(321073),
    n(864466),
    n(443073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    s = n(342952),
    c = n(397927),
    u = n(47167),
    d = n(713654),
    p = n(573435),
    h = n(145497),
    f = n(166444),
    m = n(565860),
    g = n(648427),
    y = n(379078),
    A = n(704554),
    O = n(21119),
    E = n(734057),
    v = n(808728),
    b = n(71393),
    S = n(576705),
    x = n(994500),
    j = n(287809),
    I = n(977997),
    N = n(403362),
    w = n(996439),
    T = n(652215),
    C = n(985018),
    _ = n(953679);
let P = (e) => [
        e.userId,
        ...(function (e) {
            let t = j.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                i = (0, m.jP)(t);
            return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(N.Vq)));
        })(e),
    ],
    D = {
        searchType: y.n.FUZZY,
        sortType: y.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            var t, n;
            let { channel: i, voiceStates: r } = e;
            return [
                i.name,
                i.id,
                i.guild_id,
                null != (t = null == (n = b.A.getGuild(i.guild_id)) ? void 0 : n.name) ? t : "",
                ...r.flatMap((e) => P(e)),
            ].filter(N.Vq);
        },
        throttleMs: 100,
    },
    R = {
        searchType: y.n.FUZZY,
        sortType: y.r.JARO_WINKLER,
        searchStringGenerator: P,
        throttleMs: 100,
    },
    L = r.memo(function (e) {
        let { channel: t, query: n } = e,
            [l] = (0, o.bG)([I.A], () => [I.A.getVoiceStatesForChannel(t.id), I.A.getVoiceStateVersion()], [t.id], w.D),
            [a, u] = r.useState([]);
        (0, A.RT)(n, Object.values(l), u, R);
        let d = (0, o.yK)(
                [I.A, j.default, O.A, x.A],
                () =>
                    Object.values(I.A.getVoiceStatesForChannel(t.id))
                        .map((e) => j.default.getUser(e.userId))
                        .filter(N.Vq)
                        .sort((e, t) => {
                            var i, r, l, o;
                            if (a.length > 0 && "" !== n.trim()) {
                                if (a.some((t) => t.userId === e.id)) return -1;
                                if (a.some((e) => e.userId === t.id)) return 1;
                            }
                            return x.A.isFriend(e.id) && !x.A.isFriend(t.id)
                                ? -1
                                : !x.A.isFriend(e.id) && x.A.isFriend(t.id)
                                  ? 1
                                  : (null != (i = null == (l = O.A.getUserAffinity(t.id)) ? void 0 : l.vcProbability)
                                        ? i
                                        : 0) -
                                    (null != (r = null == (o = O.A.getUserAffinity(e.id)) ? void 0 : o.vcProbability)
                                        ? r
                                        : 0);
                        }),
                [t.id, a, n],
            ),
            p = t.getGuildId(),
            h = Math.max(a.length, 2);
        return null == p
            ? null
            : (0, i.jsx)(s.A, {
                  users: d,
                  guildId: p,
                  maxUsers: Math.min(h, 4),
                  size: c._3J.SIZE_24,
                  overflowCountClassName: _.mB,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": C.intl.string(C.t.TxqPQR),
              });
    }),
    k = r.memo(function (e) {
        var t;
        let { channel: n } = e,
            r = n.getGuildId(),
            l = (0, o.bG)([b.A], () => b.A.getGuild(r), [r]);
        if (null == l)
            switch (n.type) {
                case T.rbe.DM:
                    return (0, i.jsx)(f.Pk, {
                        channel: n,
                        size: c._3J.SIZE_32,
                    });
                case T.rbe.GROUP_DM:
                    return (0, i.jsx)(f.IC, {
                        channel: n,
                        size: c._3J.SIZE_32,
                    });
                default:
                    return null;
            }
        return (0, i.jsx)(p.Ay, {
            mask: p.hW.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, i.jsx)("div", {
                className: _.Ko,
                children: (0, i.jsx)(h.j, {
                    guildId: l.id,
                    guildName: null != (t = l.name) ? t : C.intl.string(C.t.DmIUGK),
                    guildIcon: l.icon,
                    iconSize: 32,
                }),
            }),
        });
    }),
    M = r.memo(function (e) {
        var t;
        let {
                channelId: n,
                isHighlighted: r,
                currentVoiceChannel: l,
                onClick: s,
                onMouseOver: p,
                onMouseLeave: h,
                query: f,
            } = e,
            m = (0, o.bG)([E.A], () => E.A.getChannel(n), [n]),
            g = null == m ? void 0 : m.getGuildId(),
            y = (0, o.bG)([b.A], () => b.A.getGuild(g), [g]),
            A = (0, d.gU)(m, y),
            O = (null == l ? void 0 : l.id) === n,
            v = O ? "text-feedback-positive" : r ? "interactive-text-active" : "text-muted",
            S = O
                ? c.LU0.colors.TEXT_FEEDBACK_POSITIVE
                : r
                  ? c.LU0.colors.INTERACTIVE_TEXT_ACTIVE
                  : c.LU0.colors.ICON_MUTED;
        return null == m
            ? null
            : (0, i.jsxs)(c.sqX, {
                  className: a()(_.Uw, r && _.gt),
                  "aria-label": m.name,
                  onClick: () => s(n),
                  onMouseOver: () => p(n),
                  onMouseLeave: () => h(n),
                  children: [
                      (0, i.jsx)("div", {
                          className: _._N,
                          children: (0, i.jsx)(k, {
                              channel: m,
                          }),
                      }),
                      (0, i.jsxs)("div", {
                          className: _.rg,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: _.Ks,
                                  children: [
                                      null != A
                                          ? (0, i.jsx)(A, {
                                                color: S,
                                                size: "xs",
                                                className: _.p,
                                            })
                                          : void 0,
                                      (0, i.jsx)(c.Text, {
                                          variant: O ? "text-sm/semibold" : "text-sm/medium",
                                          color: v,
                                          className: _.rU,
                                          children: (0, u.m1)(m, j.default, x.A),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: O ? "text-xs/semibold" : "text-xs/medium",
                                  color: v,
                                  children: null != (t = null == y ? void 0 : y.name) ? t : m.name,
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: _.vU,
                          children: (0, i.jsx)(L, {
                              channel: m,
                              currentVoiceChannel: l,
                              query: f,
                          }),
                      }),
                  ],
              });
    }),
    V = r.memo(function (e) {
        let { emptyText: t } = e;
        return (0, i.jsx)("div", {
            className: _.KJ,
            children: (0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: t,
            }),
        });
    }),
    U = r.memo(function (e) {
        let {
                sectionHeader: t,
                channelIds: n,
                currentVoiceChannel: l,
                onSelect: a,
                hasQuery: o,
                query: s,
                scrollable: u = !0,
            } = e,
            [d, p] = r.useState(null),
            h = (e) => {
                p(e);
            },
            f = () => {
                p(null);
            },
            m = u ? c.IpV : "div";
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: _.qs,
                    children: (0, i.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        children: t,
                    }),
                }),
                (0, i.jsxs)(m, {
                    className: _.o5,
                    children: [
                        o &&
                            0 === n.length &&
                            (0, i.jsx)(V, {
                                emptyText: C.intl.string(C.t.nxSS03),
                            }),
                        n.map((e) =>
                            (0, i.jsx)(
                                M,
                                {
                                    channelId: e,
                                    isHighlighted: e === d,
                                    currentVoiceChannel: l,
                                    onClick: () => {
                                        a(e);
                                    },
                                    onMouseOver: h,
                                    onMouseLeave: f,
                                    query: s,
                                },
                                e,
                            ),
                        ),
                    ],
                }),
            ],
        });
    });

function z(e) {
    let t,
        n,
        r,
        { searchQuery: l, currentVoiceChannel: s, onSelect: u } = e,
        { recentVoiceChannelIds: d, friendVoiceChannelIds: p } =
            ((t = (0, o.yK)(
                [j.default, x.A, O.A],
                () =>
                    x.A.getFriendIDs()
                        .sort((e, t) => {
                            var n, i, r, l;
                            return null == e && null == t
                                ? 0
                                : null == e
                                  ? 1
                                  : null == t
                                    ? -1
                                    : (null !=
                                      (n = null == (r = O.A.getUserAffinity(t)) ? void 0 : r.communicationProbability)
                                          ? n
                                          : 0) -
                                      (null !=
                                      (i = null == (l = O.A.getUserAffinity(e)) ? void 0 : l.communicationProbability)
                                          ? i
                                          : 0);
                        })
                        .reduce((e, t) => {
                            let n = j.default.getUser(t);
                            return null != n && e.push(n), e;
                        }, []),
                [],
            )),
            (n = (0, o.yK)(
                [I.A, E.A, S.A],
                () =>
                    Array.from(
                        t
                            .map((e) => I.A.getDiscoverableVoiceStateForUser(e.id))
                            .reduce((e, t) => {
                                let n = null == t ? void 0 : t.channelId;
                                if (null == n) return e;
                                let i = E.A.getChannel(n);
                                return null != i && S.A.can(T.xBc.CONNECT, i) && e.add(n), e;
                            }, new Set()),
                    ).filter(N.Vq),
                [t],
            )),
            (r = (0, o.yK)([g.A, E.A, S.A], () => {
                let e = g.A.getChannelHistory(),
                    t = new Set(n);
                return Array.from(
                    new Set(
                        e.reduce((e, n) => {
                            let i = E.A.getChannel(n);
                            return null != i && S.A.can(T.xBc.CONNECT, i) && !t.has(n) && e.push(n), e;
                        }, []),
                    ),
                );
            }, [n])),
            {
                friendVoiceChannelIds: n,
                recentVoiceChannelIds: r,
            });
    return d.length > 0 || p.length > 0
        ? (0, i.jsxs)(c.IpV, {
              className: a()(_.o5, _.Hc),
              children: [
                  d.length > 0 &&
                      (0, i.jsx)(U, {
                          sectionHeader: C.intl.string(C.t.lnk2NQ),
                          channelIds: d.slice(0, 3),
                          hasQuery: !1,
                          query: l,
                          currentVoiceChannel: s,
                          onSelect: (e) => u(e, "recent channel"),
                          scrollable: !1,
                      }),
                  p.length > 0 &&
                      (0, i.jsx)(U, {
                          sectionHeader: C.intl.string(C.t["0lvb9O"]),
                          channelIds: p.slice(0, 8),
                          hasQuery: !1,
                          query: l,
                          currentVoiceChannel: s,
                          onSelect: (e) => u(e, "friend channel"),
                          scrollable: !1,
                      }),
              ],
          })
        : (0, i.jsx)(V, {
              emptyText: C.intl.string(C.t["3ET7Ay"]),
          });
}

function G(e) {
    e.stopPropagation();
}

function H(e) {
    var t, n;
    let { currentVoiceChannel: l, onClose: a, onSelect: s } = e,
        u = (0, o.yK)(
            [b.A, v.Ay, I.A, x.A, S.A],
            () =>
                b.A.getGuildsArray()
                    .reduce(
                        (e, t) => [
                            ...e,
                            ...v.Ay.getChannels(t.id)
                                [v.vM].filter(
                                    (e) => S.A.can(T.xBc.VIEW_CHANNEL, e.channel) && S.A.can(T.xBc.CONNECT, e.channel),
                                )
                                .map((e) => {
                                    let { channel: t } = e;
                                    return t;
                                }),
                        ],
                        [],
                    )
                    .map((e) => ({
                        channel: e,
                        voiceStates: Object.values(I.A.getVoiceStatesForChannel(e.id)).filter((e) =>
                            x.A.isFriend(e.userId),
                        ),
                    })),
            [],
        ),
        [d, p] = r.useState(""),
        [h, f] = r.useState([]);
    (0, A.RT)(d, u, f, D);
    let m = r.useCallback(
            (e) => {
                "Escape" === e.key && a();
            },
            [a],
        ),
        g = r.useCallback(
            (e, t) => {
                s(e, t), a();
            },
            [s, a],
        );
    r.useEffect(
        () => (
            document.addEventListener("keydown", m, !0),
            () => {
                document.removeEventListener("keydown", m, !0);
            }
        ),
        [a, m],
    );
    let y = "" !== d.trim(),
        O = h.length > 20,
        E = {
            count: O ? 20 : h.length,
        },
        j = r.useMemo(
            () => ({
                onMouseDown: G,
                onMouseMove: G,
                onMouseUp: G,
                onMouseEnter: G,
                onMouseLeave: G,
            }),
            [],
        );
    return (0, i.jsxs)(
        "div",
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                className: _.Dz,
            },
            j,
        )),
        (n = n =
            {
                children: [
                    (0, i.jsx)("div", {
                        className: _.PP,
                        children: (0, i.jsx)(c.IWV, {
                            autoFocus: !0,
                            query: d,
                            placeholder: C.intl.string(C.t.UyA6ST),
                            onClear: () => {
                                p("");
                            },
                            onKeyDown: m,
                            onChange: (e) => {
                                p(e);
                            },
                            inputProps: {
                                "aria-label": C.intl.string(C.t.UyA6ST),
                            },
                        }),
                    }),
                    y
                        ? (0, i.jsx)(U, {
                              sectionHeader: O ? C.intl.format(C.t.qdXiQ1, E) : C.intl.format(C.t["Aq+8wB"], E),
                              channelIds: h
                                  .map((e) => {
                                      let { channel: t } = e;
                                      return t.id;
                                  })
                                  .slice(0, 20),
                              hasQuery: y,
                              query: d,
                              currentVoiceChannel: l,
                              onSelect: (e) => g(e, "search channel"),
                          })
                        : (0, i.jsx)(z, {
                              searchQuery: d,
                              currentVoiceChannel: l,
                              onSelect: g,
                          }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
