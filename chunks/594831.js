n.d(t, { Ay: () => B, Dz: () => P, MV: () => w, S4: () => b, qZ: () => k }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    u = n(342952),
    o = n(397927),
    d = n(47167),
    c = n(713654),
    h = n(573435),
    g = n(145497),
    I = n(166444),
    A = n(565860),
    f = n(648427),
    E = n(379078),
    m = n(704554),
    S = n(21119),
    _ = n(95701),
    p = n(734057),
    N = n(808728),
    T = n(71393),
    y = n(576705),
    C = n(994500),
    x = n(287809),
    v = n(977997),
    M = n(403362),
    D = n(996439),
    R = n(652215),
    O = n(985018),
    U = n(261761);
let G = (e) => [
        e.userId,
        ...(function (e) {
            let t = x.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                l = (0, A.jP)(t);
            return Array.from(new Set([n, l.nick, ...Object.values(l.names)].flat().filter(M.Vq)));
        })(e),
    ],
    w = {
        searchType: E.n.FUZZY,
        sortType: E.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t, voiceStates: n } = e;
            return [
                (0, d.m1)(t, x.default, C.A),
                t.id,
                t.guild_id,
                T.A.getGuild(t.guild_id)?.name ?? "",
                ...(n ?? []).flatMap((e) => G(e)),
            ].filter(M.Vq);
        },
        throttleMs: 100,
    },
    L = { searchType: E.n.FUZZY, sortType: E.r.JARO_WINKLER, searchStringGenerator: G, throttleMs: 100 },
    F = i.memo(function (e) {
        let { channel: t, query: n } = e,
            [r] = (0, a.bG)([v.A], () => [v.A.getVoiceStatesForChannel(t.id), v.A.getVoiceStateVersion()], [t.id], D.D),
            [s, d] = i.useState([]);
        (0, m.RT)(n, Object.values(r), d, L);
        let c = (0, a.yK)(
                [v.A, x.default, S.A, C.A],
                () =>
                    Object.values(v.A.getVoiceStatesForChannel(t.id))
                        .map((e) => x.default.getUser(e.userId))
                        .filter(M.Vq)
                        .sort((e, t) => {
                            if (s.length > 0 && "" !== n.trim()) {
                                if (s.some((t) => t.userId === e.id)) return -1;
                                if (s.some((e) => e.userId === t.id)) return 1;
                            }
                            return C.A.isFriend(e.id) && !C.A.isFriend(t.id)
                                ? -1
                                : !C.A.isFriend(e.id) && C.A.isFriend(t.id)
                                  ? 1
                                  : (S.A.getUserAffinity(t.id)?.vcProbability ?? 0) -
                                    (S.A.getUserAffinity(e.id)?.vcProbability ?? 0);
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
                  size: o._3J.SIZE_24,
                  overflowCountClassName: U.mB,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": O.intl.string(O.t.TxqPQR),
              });
    });
function b() {
    let e,
        t =
            ((e = (0, a.yK)(
                [x.default, C.A, S.A],
                () =>
                    C.A.getFriendIDs()
                        .sort((e, t) =>
                            null == e && null == t
                                ? 0
                                : null == e
                                  ? 1
                                  : null == t
                                    ? -1
                                    : (S.A.getUserAffinity(t)?.communicationProbability ?? 0) -
                                      (S.A.getUserAffinity(e)?.communicationProbability ?? 0),
                        )
                        .reduce((e, t) => {
                            let n = x.default.getUser(t);
                            return null != n && e.push(n), e;
                        }, []),
                [],
            )),
            (0, a.yK)(
                [v.A, p.A, y.A],
                () =>
                    Array.from(
                        e
                            .map((e) => v.A.getDiscoverableVoiceStateForUser(e.id))
                            .reduce((e, t) => {
                                let n = t?.channelId;
                                if (null == n) return e;
                                let l = p.A.getChannel(n);
                                return (
                                    null != l &&
                                        y.A.can(R.xBc.VIEW_CHANNEL, l) &&
                                        y.A.can(R.xBc.CONNECT, l) &&
                                        e.add(n),
                                    e
                                );
                            }, new Set()),
                    ).filter(M.Vq),
                [e],
            )),
        n = (0, a.yK)([f.A, p.A, y.A], () => {
            let e = f.A.getVoiceChannelHistory(),
                n = new Set(t);
            return Array.from(
                new Set(
                    e.reduce((e, t) => {
                        let l = p.A.getChannel(t);
                        return (
                            null != l &&
                                y.A.can(R.xBc.VIEW_CHANNEL, l) &&
                                y.A.can(R.xBc.CONNECT, l) &&
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
function k() {
    return (0, a.yK)(
        [T.A, N.Ay, v.A, C.A, y.A],
        () =>
            T.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...N.Ay.getChannels(t.id)
                            [N.vM].filter(
                                (e) => y.A.can(R.xBc.VIEW_CHANNEL, e.channel) && y.A.can(R.xBc.CONNECT, e.channel),
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
                    voiceStates: Object.values(v.A.getVoiceStatesForChannel(e.id)).filter((e) =>
                        C.A.isFriend(e.userId),
                    ),
                })),
        [],
    );
}
function P() {
    return (0, a.yK)(
        [T.A, N.Ay, y.A],
        () =>
            T.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...N.Ay.getChannels(t.id)
                            [N.I6].map((e) => {
                                let { channel: t } = e;
                                return t;
                            })
                            .filter((e) => null != e && !!(0, _.pQ)(e.type) && y.A.can(R.xBc.VIEW_CHANNEL, e)),
                    ],
                    [],
                )
                .map((e) => ({ channel: e, voiceStates: [] })),
        [],
    );
}
let j = i.memo(function (e) {
        let { channel: t } = e,
            n = t.getGuildId(),
            i = (0, a.bG)([T.A], () => T.A.getGuild(n), [n]);
        if (null == i)
            switch (t.type) {
                case R.rbe.DM:
                    return (0, l.jsx)(I.Pk, { channel: t, size: o._3J.SIZE_32 });
                case R.rbe.GROUP_DM:
                    return (0, l.jsx)(I.IC, { channel: t, size: o._3J.SIZE_32 });
                default:
                    return null;
            }
        return (0, l.jsx)(h.Ay, {
            mask: h.hW.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, l.jsx)("div", {
                className: U.Ko,
                children: (0, l.jsx)(g.j, {
                    guildId: i.id,
                    guildName: i.name ?? O.intl.string(O.t.DmIUGK),
                    guildIcon: i.icon,
                    iconSize: 32,
                }),
            }),
        });
    }),
    V = i.memo(function (e) {
        let {
                channelId: t,
                isHighlighted: n,
                currentVoiceChannel: i,
                onClick: r,
                onMouseOver: u,
                onMouseLeave: h,
                query: g,
                showVoiceAvatars: I = !0,
            } = e,
            A = (0, a.bG)([p.A], () => p.A.getChannel(t), [t]),
            f = (0, d.Ay)(A),
            E = A?.getGuildId(),
            m = (0, a.bG)([T.A], () => T.A.getGuild(E), [E]),
            S = (0, c.gU)(A, m),
            _ = i?.id === t,
            N = _ ? "text-feedback-positive" : n ? "interactive-text-active" : "text-muted",
            y = _
                ? o.LU0.colors.TEXT_FEEDBACK_POSITIVE
                : n
                  ? o.LU0.colors.INTERACTIVE_TEXT_ACTIVE
                  : o.LU0.colors.ICON_MUTED;
        return null == A
            ? null
            : (0, l.jsxs)(o.sqX, {
                  className: s()(U.Uw, n && U.gt),
                  "aria-label": f ?? "",
                  onClick: () => r(t),
                  onMouseOver: () => u(t),
                  onMouseLeave: () => h(t),
                  children: [
                      (0, l.jsx)("div", { className: U._N, children: (0, l.jsx)(j, { channel: A }) }),
                      (0, l.jsxs)("div", {
                          className: U.rg,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: U.Ks,
                                  children: [
                                      null != S ? (0, l.jsx)(S, { color: y, size: "xs", className: U.p }) : void 0,
                                      (0, l.jsx)(o.Text, {
                                          variant: _ ? "text-sm/semibold" : "text-sm/medium",
                                          color: N,
                                          className: U.rU,
                                          children: (0, d.m1)(A, x.default, C.A),
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(o.Text, {
                                  variant: _ ? "text-xs/semibold" : "text-xs/medium",
                                  color: N,
                                  children: m?.name ?? f,
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          className: U.vU,
                          children: I ? (0, l.jsx)(F, { channel: A, currentVoiceChannel: i, query: g }) : null,
                      }),
                  ],
              });
    }),
    H = i.memo(function (e) {
        let { emptyText: t } = e;
        return (0, l.jsx)("div", {
            className: U.KJ,
            children: (0, l.jsx)(o.Text, { variant: "text-md/normal", color: "text-strong", children: t }),
        });
    }),
    Y = i.memo(function (e) {
        let {
                sectionHeader: t,
                channelIds: n,
                currentVoiceChannel: r,
                onSelect: s,
                hasQuery: a,
                query: u,
                scrollable: d = !0,
                showVoiceAvatars: c = !0,
            } = e,
            [h, g] = i.useState(null),
            I = (e) => {
                g(e);
            },
            A = () => {
                g(null);
            },
            f = d ? o.IpV : "div";
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)("div", {
                    className: U.qs,
                    children: (0, l.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-muted", children: t }),
                }),
                (0, l.jsxs)(f, {
                    className: U.o5,
                    children: [
                        a && 0 === n.length && (0, l.jsx)(H, { emptyText: O.intl.string(O.t.nxSS03) }),
                        n.map((e) =>
                            (0, l.jsx)(
                                V,
                                {
                                    channelId: e,
                                    isHighlighted: e === h,
                                    currentVoiceChannel: r,
                                    onClick: () => {
                                        s(e);
                                    },
                                    onMouseOver: I,
                                    onMouseLeave: A,
                                    query: u,
                                    showVoiceAvatars: c,
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
        { recentVoiceChannelIds: r, friendVoiceChannelIds: a } = b();
    return r.length > 0 || a.length > 0
        ? (0, l.jsxs)(o.IpV, {
              className: s()(U.o5, U.Hc),
              children: [
                  r.length > 0 &&
                      (0, l.jsx)(Y, {
                          sectionHeader: O.intl.string(O.t.lnk2NQ),
                          channelIds: r.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "recent channel"),
                          scrollable: !1,
                      }),
                  a.length > 0 &&
                      (0, l.jsx)(Y, {
                          sectionHeader: O.intl.string(O.t["0lvb9O"]),
                          channelIds: a.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "friend channel"),
                          scrollable: !1,
                      }),
              ],
          })
        : (0, l.jsx)(H, { emptyText: O.intl.string(O.t["3ET7Ay"]) });
}
function z(e) {
    e.stopPropagation();
}
function B(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: r, allAvailableChannelRows: s } = e,
        [a, u] = i.useState(""),
        [d, c] = i.useState([]);
    (0, m.RT)(a, s, c, w);
    let h = i.useCallback(
            (e) => {
                "Escape" === e.key && n();
            },
            [n],
        ),
        g = i.useCallback(
            (e, t) => {
                r(e, t), n();
            },
            [r, n],
        );
    i.useEffect(
        () => (
            document.addEventListener("keydown", h, !0),
            () => {
                document.removeEventListener("keydown", h, !0);
            }
        ),
        [n, h],
    );
    let I = "" !== a.trim(),
        A = d.length > 20,
        f = { count: A ? 20 : d.length },
        E = i.useMemo(() => ({ onMouseDown: z, onMouseMove: z, onMouseUp: z, onMouseEnter: z, onMouseLeave: z }), []);
    return (0, l.jsxs)("div", {
        className: U.Dz,
        ...E,
        children: [
            (0, l.jsx)("div", {
                className: U.PP,
                children: (0, l.jsx)(o.IWV, {
                    autoFocus: !0,
                    query: a,
                    placeholder: O.intl.string(O.t.UyA6ST),
                    onClear: () => {
                        u("");
                    },
                    onKeyDown: h,
                    onChange: (e) => {
                        u(e);
                    },
                    inputProps: { "aria-label": O.intl.string(O.t.UyA6ST) },
                }),
            }),
            I
                ? (0, l.jsx)(Y, {
                      sectionHeader: A ? O.intl.format(O.t.qdXiQ1, f) : O.intl.format(O.t["Aq+8wB"], f),
                      channelIds: d
                          .map((e) => {
                              let { channel: t } = e;
                              return t.id;
                          })
                          .slice(0, 20),
                      hasQuery: I,
                      query: a,
                      currentVoiceChannel: t,
                      onSelect: (e) => g(e, "search channel"),
                      showVoiceAvatars: !0,
                  })
                : (0, l.jsx)(W, { searchQuery: a, currentVoiceChannel: t, onSelect: g }),
        ],
    });
}
