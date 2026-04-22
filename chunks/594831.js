n.d(t, { Ay: () => q, Dz: () => K, MV: () => U, S4: () => H, qZ: () => Y }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    u = n(342952),
    o = n(778712),
    d = n(827734),
    c = n(890856),
    h = n(834730),
    g = n(573613),
    m = n(892547),
    I = n(47167),
    E = n(713654),
    A = n(573435),
    f = n(145497),
    p = n(166444),
    S = n(565860),
    N = n(648427),
    x = n(379078),
    T = n(704554),
    _ = n(21119),
    y = n(95701),
    v = n(734057),
    C = n(808728),
    R = n(71393),
    D = n(576705),
    b = n(994500),
    j = n(287809),
    M = n(977997),
    k = n(403362),
    O = n(996439),
    w = n(652215),
    L = n(985018),
    F = n(211500);
let G = (e) => [
        e.userId,
        ...(function (e) {
            let t = j.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                l = (0, S.jP)(t);
            return Array.from(new Set([n, l.nick, ...Object.values(l.names)].flat().filter(k.Vq)));
        })(e),
    ],
    U = {
        searchType: x.n.FUZZY,
        sortType: x.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t, voiceStates: n } = e;
            return [
                (0, I.m1)(t, j.default, b.A),
                t.id,
                t.guild_id,
                R.A.getGuild(t.guild_id)?.name ?? "",
                ...(n ?? []).flatMap((e) => G(e)),
            ].filter(k.Vq);
        },
        throttleMs: 100,
    },
    P = { searchType: x.n.FUZZY, sortType: x.r.JARO_WINKLER, searchStringGenerator: G, throttleMs: 100 },
    V = i.memo(function (e) {
        let { channel: t, query: n } = e,
            [r] = (0, a.bG)([M.A], () => [M.A.getVoiceStatesForChannel(t.id), M.A.getVoiceStateVersion()], [t.id], O.D),
            [s, d] = i.useState([]);
        (0, T.RT)(n, Object.values(r), d, P);
        let c = (0, a.yK)(
                [M.A, j.default, _.A, b.A],
                () =>
                    Object.values(M.A.getVoiceStatesForChannel(t.id))
                        .map((e) => j.default.getUser(e.userId))
                        .filter(k.Vq)
                        .sort((e, t) => {
                            if (s.length > 0 && "" !== n.trim()) {
                                if (s.some((t) => t.userId === e.id)) return -1;
                                if (s.some((e) => e.userId === t.id)) return 1;
                            }
                            return b.A.isFriend(e.id) && !b.A.isFriend(t.id)
                                ? -1
                                : !b.A.isFriend(e.id) && b.A.isFriend(t.id)
                                  ? 1
                                  : (_.A.getUserAffinity(t.id)?.vcProbability ?? 0) -
                                    (_.A.getUserAffinity(e.id)?.vcProbability ?? 0);
                        }),
                [t.id, s, n],
            ),
            h = t.getGuildId(),
            g = Math.max(s.length, 2);
        return null == h
            ? null
            : (0, l.jsx)(u.A, {
                  users: c,
                  guildId: h,
                  maxUsers: Math.min(g, 4),
                  size: o._3.SIZE_24,
                  overflowCountClassName: F.mB,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": L.intl.string(L.t.TxqPQR),
              });
    });
function H() {
    let e,
        t =
            ((e = (0, a.yK)(
                [j.default, b.A, _.A],
                () =>
                    b.A.getFriendIDs()
                        .sort((e, t) =>
                            null == e && null == t
                                ? 0
                                : null == e
                                  ? 1
                                  : null == t
                                    ? -1
                                    : (_.A.getUserAffinity(t)?.communicationProbability ?? 0) -
                                      (_.A.getUserAffinity(e)?.communicationProbability ?? 0),
                        )
                        .reduce((e, t) => {
                            let n = j.default.getUser(t);
                            return null != n && e.push(n), e;
                        }, []),
                [],
            )),
            (0, a.yK)(
                [M.A, v.A, D.A],
                () =>
                    Array.from(
                        e
                            .map((e) => M.A.getDiscoverableVoiceStateForUser(e.id))
                            .reduce((e, t) => {
                                let n = t?.channelId;
                                if (null == n) return e;
                                let l = v.A.getChannel(n);
                                return (
                                    null != l &&
                                        D.A.can(w.xBc.VIEW_CHANNEL, l) &&
                                        D.A.can(w.xBc.CONNECT, l) &&
                                        e.add(n),
                                    e
                                );
                            }, new Set()),
                    ).filter(k.Vq),
                [e],
            )),
        n = (0, a.yK)([N.A, v.A, D.A], () => {
            let e = N.A.getVoiceChannelHistory(),
                n = new Set(t);
            return Array.from(
                new Set(
                    e.reduce((e, t) => {
                        let l = v.A.getChannel(t);
                        return (
                            null != l &&
                                D.A.can(w.xBc.VIEW_CHANNEL, l) &&
                                D.A.can(w.xBc.CONNECT, l) &&
                                !n.has(t) &&
                                e.push(t),
                            e
                        );
                    }, []),
                ),
            );
        }, [t]);
    return { friendVoiceChannelIds: t, recentVoiceChannelIds: n };
}
function Y() {
    return (0, a.yK)(
        [R.A, C.Ay, M.A, b.A, D.A],
        () =>
            R.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...C.Ay.getChannels(t.id)
                            [C.vM].filter(
                                (e) => D.A.can(w.xBc.VIEW_CHANNEL, e.channel) && D.A.can(w.xBc.CONNECT, e.channel),
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
                    voiceStates: Object.values(M.A.getVoiceStatesForChannel(e.id)).filter((e) =>
                        b.A.isFriend(e.userId),
                    ),
                })),
        [],
    );
}
function K() {
    return (0, a.yK)(
        [R.A, C.Ay, D.A],
        () =>
            R.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...C.Ay.getChannels(t.id)
                            [C.I6].map((e) => {
                                let { channel: t } = e;
                                return t;
                            })
                            .filter((e) => null != e && !!(0, y.pQ)(e.type) && D.A.can(w.xBc.VIEW_CHANNEL, e)),
                    ],
                    [],
                )
                .map((e) => ({ channel: e, voiceStates: [] })),
        [],
    );
}
let z = i.memo(function (e) {
        let { channel: t } = e,
            n = t.getGuildId(),
            i = (0, a.bG)([R.A], () => R.A.getGuild(n), [n]);
        if (null == i)
            switch (t.type) {
                case w.rbe.DM:
                    return (0, l.jsx)(p.Pk, { channel: t, size: o._3.SIZE_32 });
                case w.rbe.GROUP_DM:
                    return (0, l.jsx)(p.IC, { channel: t, size: o._3.SIZE_32 });
                default:
                    return null;
            }
        return (0, l.jsx)(A.Ay, {
            mask: A.hW.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, l.jsx)("div", {
                className: F.Ko,
                children: (0, l.jsx)(f.j, {
                    guildId: i.id,
                    guildName: i.name ?? L.intl.string(L.t.DmIUGK),
                    guildIcon: i.icon,
                    iconSize: 32,
                }),
            }),
        });
    }),
    X = i.memo(function (e) {
        let {
                channelId: t,
                isHighlighted: n,
                currentVoiceChannel: i,
                onClick: r,
                onMouseOver: u,
                onMouseLeave: o,
                query: g,
                showVoiceAvatars: m = !0,
            } = e,
            A = (0, a.bG)([v.A], () => v.A.getChannel(t), [t]),
            f = (0, I.Ay)(A),
            p = A?.getGuildId(),
            S = (0, a.bG)([R.A], () => R.A.getGuild(p), [p]),
            N = (0, E.gU)(A, S),
            x = i?.id === t,
            T = x ? "text-feedback-positive" : n ? "interactive-text-active" : "text-muted",
            _ = x ? d.A.colors.TEXT_FEEDBACK_POSITIVE : n ? d.A.colors.INTERACTIVE_TEXT_ACTIVE : d.A.colors.ICON_MUTED;
        return null == A
            ? null
            : (0, l.jsxs)(c.s, {
                  className: s()(F.Uw, n && F.gt),
                  "aria-label": f ?? "",
                  onClick: () => r(t),
                  onMouseOver: () => u(t),
                  onMouseLeave: () => o(t),
                  children: [
                      (0, l.jsx)("div", { className: F._N, children: (0, l.jsx)(z, { channel: A }) }),
                      (0, l.jsxs)("div", {
                          className: F.rg,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: F.Ks,
                                  children: [
                                      null != N ? (0, l.jsx)(N, { color: _, size: "xs", className: F.p }) : void 0,
                                      (0, l.jsx)(h.E, {
                                          variant: x ? "text-sm/semibold" : "text-sm/medium",
                                          color: T,
                                          className: F.rU,
                                          children: (0, I.m1)(A, j.default, b.A),
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(h.E, {
                                  variant: x ? "text-xs/semibold" : "text-xs/medium",
                                  color: T,
                                  children: S?.name ?? f,
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          className: F.vU,
                          children: m ? (0, l.jsx)(V, { channel: A, currentVoiceChannel: i, query: g }) : null,
                      }),
                  ],
              });
    }),
    Z = i.memo(function (e) {
        let { emptyText: t } = e;
        return (0, l.jsx)("div", {
            className: F.KJ,
            children: (0, l.jsx)(h.E, { variant: "text-md/normal", color: "text-strong", children: t }),
        });
    }),
    B = i.memo(function (e) {
        let {
                sectionHeader: t,
                channelIds: n,
                currentVoiceChannel: r,
                onSelect: s,
                hasQuery: a,
                query: u,
                scrollable: o = !0,
                showVoiceAvatars: d = !0,
            } = e,
            [c, m] = i.useState(null),
            I = (e) => {
                m(e);
            },
            E = () => {
                m(null);
            },
            A = o ? g.Ip : "div";
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)("div", {
                    className: F.qs,
                    children: (0, l.jsx)(h.E, { variant: "text-sm/semibold", color: "text-muted", children: t }),
                }),
                (0, l.jsxs)(A, {
                    className: F.o5,
                    children: [
                        a && 0 === n.length && (0, l.jsx)(Z, { emptyText: L.intl.string(L.t.nxSS03) }),
                        n.map((e) =>
                            (0, l.jsx)(
                                X,
                                {
                                    channelId: e,
                                    isHighlighted: e === c,
                                    currentVoiceChannel: r,
                                    onClick: () => {
                                        s(e);
                                    },
                                    onMouseOver: I,
                                    onMouseLeave: E,
                                    query: u,
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
function W(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: i } = e,
        { recentVoiceChannelIds: r, friendVoiceChannelIds: a } = H();
    return r.length > 0 || a.length > 0
        ? (0, l.jsxs)(g.Ip, {
              className: s()(F.o5, F.Hc),
              children: [
                  r.length > 0 &&
                      (0, l.jsx)(B, {
                          sectionHeader: L.intl.string(L.t.lnk2NQ),
                          channelIds: r.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "recent channel"),
                          scrollable: !1,
                      }),
                  a.length > 0 &&
                      (0, l.jsx)(B, {
                          sectionHeader: L.intl.string(L.t["0lvb9O"]),
                          channelIds: a.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "friend channel"),
                          scrollable: !1,
                      }),
              ],
          })
        : (0, l.jsx)(Z, { emptyText: L.intl.string(L.t["3ET7Ay"]) });
}
function $(e) {
    e.stopPropagation();
}
function q(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: r, allAvailableChannelRows: s } = e,
        [a, u] = i.useState(""),
        [o, d] = i.useState([]);
    (0, T.RT)(a, s, d, U);
    let c = i.useCallback(
            (e) => {
                "Escape" === e.key && n();
            },
            [n],
        ),
        h = i.useCallback(
            (e, t) => {
                r(e, t), n();
            },
            [r, n],
        );
    i.useEffect(
        () => (
            document.addEventListener("keydown", c, !0),
            () => {
                document.removeEventListener("keydown", c, !0);
            }
        ),
        [n, c],
    );
    let g = "" !== a.trim(),
        I = o.length > 20,
        E = { count: I ? 20 : o.length },
        A = i.useMemo(() => ({ onMouseDown: $, onMouseMove: $, onMouseUp: $, onMouseEnter: $, onMouseLeave: $ }), []);
    return (0, l.jsxs)("div", {
        className: F.Dz,
        ...A,
        children: [
            (0, l.jsx)("div", {
                className: F.PP,
                children: (0, l.jsx)(m.I, {
                    autoFocus: !0,
                    query: a,
                    placeholder: L.intl.string(L.t.UyA6ST),
                    onClear: () => {
                        u("");
                    },
                    onKeyDown: c,
                    onChange: (e) => {
                        u(e);
                    },
                    inputProps: { "aria-label": L.intl.string(L.t.UyA6ST) },
                }),
            }),
            g
                ? (0, l.jsx)(B, {
                      sectionHeader: I ? L.intl.format(L.t.qdXiQ1, E) : L.intl.format(L.t["Aq+8wB"], E),
                      channelIds: o
                          .map((e) => {
                              let { channel: t } = e;
                              return t.id;
                          })
                          .slice(0, 20),
                      hasQuery: g,
                      query: a,
                      currentVoiceChannel: t,
                      onSelect: (e) => h(e, "search channel"),
                      showVoiceAvatars: !0,
                  })
                : (0, l.jsx)(W, { searchQuery: a, currentVoiceChannel: t, onSelect: h }),
        ],
    });
}
