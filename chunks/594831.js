n.d(t, {
    Ay: () => W,
    Dz: () => G,
    MV: () => R,
    S4: () => L,
    qZ: () => U,
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
    s = n(311907),
    o = n(342952),
    u = n(397927),
    c = n(47167),
    d = n(713654),
    h = n(573435),
    p = n(145497),
    f = n(166444),
    g = n(565860),
    m = n(648427),
    y = n(379078),
    A = n(704554),
    v = n(21119),
    b = n(95701),
    E = n(734057),
    O = n(808728),
    x = n(71393),
    _ = n(576705),
    S = n(994500),
    I = n(287809),
    j = n(977997),
    T = n(403362),
    C = n(996439),
    N = n(652215),
    w = n(985018),
    P = n(953679);
let D = (e) => [
        e.userId,
        ...(function (e) {
            let t = I.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                i = (0, g.jP)(t);
            return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(T.Vq)));
        })(e),
    ],
    R = {
        searchType: y.n.FUZZY,
        sortType: y.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            var t, n;
            let { channel: i, voiceStates: r } = e;
            return [
                i.name,
                i.id,
                i.guild_id,
                null != (t = null == (n = x.A.getGuild(i.guild_id)) ? void 0 : n.name) ? t : "",
                ...(null != r ? r : []).flatMap((e) => D(e)),
            ].filter(T.Vq);
        },
        throttleMs: 100,
    },
    k = {
        searchType: y.n.FUZZY,
        sortType: y.r.JARO_WINKLER,
        searchStringGenerator: D,
        throttleMs: 100,
    },
    M = r.memo(function (e) {
        let { channel: t, query: n } = e,
            [l] = (0, s.bG)([j.A], () => [j.A.getVoiceStatesForChannel(t.id), j.A.getVoiceStateVersion()], [t.id], C.D),
            [a, c] = r.useState([]);
        (0, A.RT)(n, Object.values(l), c, k);
        let d = (0, s.yK)(
                [j.A, I.default, v.A, S.A],
                () =>
                    Object.values(j.A.getVoiceStatesForChannel(t.id))
                        .map((e) => I.default.getUser(e.userId))
                        .filter(T.Vq)
                        .sort((e, t) => {
                            var i, r, l, s;
                            if (a.length > 0 && "" !== n.trim()) {
                                if (a.some((t) => t.userId === e.id)) return -1;
                                if (a.some((e) => e.userId === t.id)) return 1;
                            }
                            return S.A.isFriend(e.id) && !S.A.isFriend(t.id)
                                ? -1
                                : !S.A.isFriend(e.id) && S.A.isFriend(t.id)
                                  ? 1
                                  : (null != (i = null == (l = v.A.getUserAffinity(t.id)) ? void 0 : l.vcProbability)
                                        ? i
                                        : 0) -
                                    (null != (r = null == (s = v.A.getUserAffinity(e.id)) ? void 0 : s.vcProbability)
                                        ? r
                                        : 0);
                        }),
                [t.id, a, n],
            ),
            h = t.getGuildId(),
            p = Math.max(a.length, 2);
        return null == h
            ? null
            : (0, i.jsx)(o.A, {
                  users: d,
                  guildId: h,
                  maxUsers: Math.min(p, 4),
                  size: u._3J.SIZE_24,
                  overflowCountClassName: P.mB,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": w.intl.string(w.t.TxqPQR),
              });
    });

function L() {
    let e,
        t =
            ((e = (0, s.yK)(
                [I.default, S.A, v.A],
                () =>
                    S.A.getFriendIDs()
                        .sort((e, t) => {
                            var n, i, r, l;
                            return null == e && null == t
                                ? 0
                                : null == e
                                  ? 1
                                  : null == t
                                    ? -1
                                    : (null !=
                                      (n = null == (r = v.A.getUserAffinity(t)) ? void 0 : r.communicationProbability)
                                          ? n
                                          : 0) -
                                      (null !=
                                      (i = null == (l = v.A.getUserAffinity(e)) ? void 0 : l.communicationProbability)
                                          ? i
                                          : 0);
                        })
                        .reduce((e, t) => {
                            let n = I.default.getUser(t);
                            return null != n && e.push(n), e;
                        }, []),
                [],
            )),
            (0, s.yK)(
                [j.A, E.A, _.A],
                () =>
                    Array.from(
                        e
                            .map((e) => j.A.getDiscoverableVoiceStateForUser(e.id))
                            .reduce((e, t) => {
                                let n = null == t ? void 0 : t.channelId;
                                if (null == n) return e;
                                let i = E.A.getChannel(n);
                                return (
                                    null != i &&
                                        _.A.can(N.xBc.VIEW_CHANNEL, i) &&
                                        _.A.can(N.xBc.CONNECT, i) &&
                                        e.add(n),
                                    e
                                );
                            }, new Set()),
                    ).filter(T.Vq),
                [e],
            )),
        n = (0, s.yK)([m.A, E.A, _.A], () => {
            let e = m.A.getVoiceChannelHistory(),
                n = new Set(t);
            return Array.from(
                new Set(
                    e.reduce((e, t) => {
                        let i = E.A.getChannel(t);
                        return (
                            null != i &&
                                _.A.can(N.xBc.VIEW_CHANNEL, i) &&
                                _.A.can(N.xBc.CONNECT, i) &&
                                !n.has(t) &&
                                e.push(t),
                            e
                        );
                    }, []),
                ),
            );
        }, [t]);
    return {
        friendVoiceChannelIds: t,
        recentVoiceChannelIds: n,
    };
}

function U() {
    return (0, s.yK)(
        [x.A, O.Ay, j.A, S.A, _.A],
        () =>
            x.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...O.Ay.getChannels(t.id)
                            [O.vM].filter(
                                (e) => _.A.can(N.xBc.VIEW_CHANNEL, e.channel) && _.A.can(N.xBc.CONNECT, e.channel),
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
                    voiceStates: Object.values(j.A.getVoiceStatesForChannel(e.id)).filter((e) =>
                        S.A.isFriend(e.userId),
                    ),
                })),
        [],
    );
}

function G() {
    return (0, s.yK)(
        [x.A, O.Ay, _.A],
        () =>
            x.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...O.Ay.getChannels(t.id)
                            [O.I6].map((e) => {
                                let { channel: t } = e;
                                return t;
                            })
                            .filter((e) => null != e && !!(0, b.pQ)(e.type) && _.A.can(N.xBc.VIEW_CHANNEL, e)),
                    ],
                    [],
                )
                .map((e) => ({
                    channel: e,
                    voiceStates: [],
                })),
        [],
    );
}
let V = r.memo(function (e) {
        var t;
        let { channel: n } = e,
            r = n.getGuildId(),
            l = (0, s.bG)([x.A], () => x.A.getGuild(r), [r]);
        if (null == l)
            switch (n.type) {
                case N.rbe.DM:
                    return (0, i.jsx)(f.Pk, {
                        channel: n,
                        size: u._3J.SIZE_32,
                    });
                case N.rbe.GROUP_DM:
                    return (0, i.jsx)(f.IC, {
                        channel: n,
                        size: u._3J.SIZE_32,
                    });
                default:
                    return null;
            }
        return (0, i.jsx)(h.Ay, {
            mask: h.hW.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, i.jsx)("div", {
                className: P.Ko,
                children: (0, i.jsx)(p.j, {
                    guildId: l.id,
                    guildName: null != (t = l.name) ? t : w.intl.string(w.t.DmIUGK),
                    guildIcon: l.icon,
                    iconSize: 32,
                }),
            }),
        });
    }),
    z = r.memo(function (e) {
        var t;
        let {
                channelId: n,
                isHighlighted: r,
                currentVoiceChannel: l,
                onClick: o,
                onMouseOver: h,
                onMouseLeave: p,
                query: f,
                showVoiceAvatars: g = !0,
            } = e,
            m = (0, s.bG)([E.A], () => E.A.getChannel(n), [n]),
            y = null == m ? void 0 : m.getGuildId(),
            A = (0, s.bG)([x.A], () => x.A.getGuild(y), [y]),
            v = (0, d.gU)(m, A),
            b = (null == l ? void 0 : l.id) === n,
            O = b ? "text-feedback-positive" : r ? "interactive-text-active" : "text-muted",
            _ = b
                ? u.LU0.colors.TEXT_FEEDBACK_POSITIVE
                : r
                  ? u.LU0.colors.INTERACTIVE_TEXT_ACTIVE
                  : u.LU0.colors.ICON_MUTED;
        return null == m
            ? null
            : (0, i.jsxs)(u.sqX, {
                  className: a()(P.Uw, r && P.gt),
                  "aria-label": m.name,
                  onClick: () => o(n),
                  onMouseOver: () => h(n),
                  onMouseLeave: () => p(n),
                  children: [
                      (0, i.jsx)("div", {
                          className: P._N,
                          children: (0, i.jsx)(V, {
                              channel: m,
                          }),
                      }),
                      (0, i.jsxs)("div", {
                          className: P.rg,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: P.Ks,
                                  children: [
                                      null != v
                                          ? (0, i.jsx)(v, {
                                                color: _,
                                                size: "xs",
                                                className: P.p,
                                            })
                                          : void 0,
                                      (0, i.jsx)(u.Text, {
                                          variant: b ? "text-sm/semibold" : "text-sm/medium",
                                          color: O,
                                          className: P.rU,
                                          children: (0, c.m1)(m, I.default, S.A),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(u.Text, {
                                  variant: b ? "text-xs/semibold" : "text-xs/medium",
                                  color: O,
                                  children: null != (t = null == A ? void 0 : A.name) ? t : m.name,
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: P.vU,
                          children: g
                              ? (0, i.jsx)(M, {
                                    channel: m,
                                    currentVoiceChannel: l,
                                    query: f,
                                })
                              : null,
                      }),
                  ],
              });
    }),
    F = r.memo(function (e) {
        let { emptyText: t } = e;
        return (0, i.jsx)("div", {
            className: P.KJ,
            children: (0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: t,
            }),
        });
    }),
    H = r.memo(function (e) {
        let {
                sectionHeader: t,
                channelIds: n,
                currentVoiceChannel: l,
                onSelect: a,
                hasQuery: s,
                query: o,
                scrollable: c = !0,
                showVoiceAvatars: d = !0,
            } = e,
            [h, p] = r.useState(null),
            f = (e) => {
                p(e);
            },
            g = () => {
                p(null);
            },
            m = c ? u.IpV : "div";
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: P.qs,
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        children: t,
                    }),
                }),
                (0, i.jsxs)(m, {
                    className: P.o5,
                    children: [
                        s &&
                            0 === n.length &&
                            (0, i.jsx)(F, {
                                emptyText: w.intl.string(w.t.nxSS03),
                            }),
                        n.map((e) =>
                            (0, i.jsx)(
                                z,
                                {
                                    channelId: e,
                                    isHighlighted: e === h,
                                    currentVoiceChannel: l,
                                    onClick: () => {
                                        a(e);
                                    },
                                    onMouseOver: f,
                                    onMouseLeave: g,
                                    query: o,
                                    showVoiceAvatars: d,
                                },
                                e,
                            ),
                        ),
                    ],
                }),
            ],
        });
    });

function Y(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: r } = e,
        { recentVoiceChannelIds: l, friendVoiceChannelIds: s } = L();
    return l.length > 0 || s.length > 0
        ? (0, i.jsxs)(u.IpV, {
              className: a()(P.o5, P.Hc),
              children: [
                  l.length > 0 &&
                      (0, i.jsx)(H, {
                          sectionHeader: w.intl.string(w.t.lnk2NQ),
                          channelIds: l.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => r(e, "recent channel"),
                          scrollable: !1,
                      }),
                  s.length > 0 &&
                      (0, i.jsx)(H, {
                          sectionHeader: w.intl.string(w.t["0lvb9O"]),
                          channelIds: s.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => r(e, "friend channel"),
                          scrollable: !1,
                      }),
              ],
          })
        : (0, i.jsx)(F, {
              emptyText: w.intl.string(w.t["3ET7Ay"]),
          });
}

function K(e) {
    e.stopPropagation();
}

function W(e) {
    var t, n;
    let { currentVoiceChannel: l, onClose: a, onSelect: s, allAvailableChannelRows: o } = e,
        [c, d] = r.useState(""),
        [h, p] = r.useState([]);
    (0, A.RT)(c, o, p, R);
    let f = r.useCallback(
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
            document.addEventListener("keydown", f, !0),
            () => {
                document.removeEventListener("keydown", f, !0);
            }
        ),
        [a, f],
    );
    let m = "" !== c.trim(),
        y = h.length > 20,
        v = {
            count: y ? 20 : h.length,
        },
        b = r.useMemo(
            () => ({
                onMouseDown: K,
                onMouseMove: K,
                onMouseUp: K,
                onMouseEnter: K,
                onMouseLeave: K,
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
                className: P.Dz,
            },
            b,
        )),
        (n = n =
            {
                children: [
                    (0, i.jsx)("div", {
                        className: P.PP,
                        children: (0, i.jsx)(u.IWV, {
                            autoFocus: !0,
                            query: c,
                            placeholder: w.intl.string(w.t.UyA6ST),
                            onClear: () => {
                                d("");
                            },
                            onKeyDown: f,
                            onChange: (e) => {
                                d(e);
                            },
                            inputProps: {
                                "aria-label": w.intl.string(w.t.UyA6ST),
                            },
                        }),
                    }),
                    m
                        ? (0, i.jsx)(H, {
                              sectionHeader: y ? w.intl.format(w.t.qdXiQ1, v) : w.intl.format(w.t["Aq+8wB"], v),
                              channelIds: h
                                  .map((e) => {
                                      let { channel: t } = e;
                                      return t.id;
                                  })
                                  .slice(0, 20),
                              hasQuery: m,
                              query: c,
                              currentVoiceChannel: l,
                              onSelect: (e) => g(e, "search channel"),
                              showVoiceAvatars: !0,
                          })
                        : (0, i.jsx)(Y, {
                              searchQuery: c,
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
