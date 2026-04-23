n.d(t, { S4: () => z, Ay: () => ee, MV: () => H, Dz: () => X, qZ: () => Z }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    u = n(342952),
    o = n(778712),
    d = n(661531),
    c = n(890856),
    h = n(834730),
    g = n(364522),
    m = n(892547),
    E = n(47167),
    I = n(713654),
    A = n(573435),
    f = n(145497),
    p = n(166444);
n(586774);
var S = n(696451),
    N = n(994500),
    x = n(240248),
    T = n(427262),
    _ = n(652215);
function y(e) {
    return (0, x.sS)(e.toLocaleLowerCase()).trim();
}
var v = n(648427),
    C = n(379078),
    R = n(704554),
    D = n(427358),
    b = n(95701),
    j = n(734057),
    M = n(808728),
    k = n(71393),
    O = n(576705),
    w = n(287809),
    F = n(977997),
    L = n(403362),
    U = n(996439),
    G = n(985018),
    P = n(211500);
let V = (e) => [
        e.userId,
        ...(function (e) {
            let t,
                n,
                l,
                i = w.default.getUser(e.userId);
            if (null == i) return [];
            let r = i.username,
                s =
                    ((t = {}),
                    null != (n = N.A.getNickname(i.id)) && (t[n] = y(n).split(" ")),
                    null != (l = T.Ay.getGlobalName(i)) && null == t[l] && (t[l] = y(l).split(" ")),
                    (t[i.username] = y(i.username).split(" ")),
                    S.Ay.getNicknames(i.id).forEach((e) => {
                        null == t[e] && (t[e] = y(e).split(" "));
                    }),
                    { names: t, nick: n });
            return Array.from(new Set([r, s.nick, ...Object.values(s.names)].flat().filter(L.Vq)));
        })(e),
    ],
    H = {
        searchType: C.n.FUZZY,
        sortType: C.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t, voiceStates: n } = e;
            return [
                (0, E.m1)(t, w.default, N.A),
                t.id,
                t.guild_id,
                k.A.getGuild(t.guild_id)?.name ?? "",
                ...(n ?? []).flatMap((e) => V(e)),
            ].filter(L.Vq);
        },
        throttleMs: 100,
    },
    Y = { searchType: C.n.FUZZY, sortType: C.r.JARO_WINKLER, searchStringGenerator: V, throttleMs: 100 },
    K = i.memo(function (e) {
        let { channel: t, query: n } = e,
            [r] = (0, a.bG)([F.A], () => [F.A.getVoiceStatesForChannel(t.id), F.A.getVoiceStateVersion()], [t.id], U.D),
            [s, d] = i.useState([]);
        (0, R.RT)(n, Object.values(r), d, Y);
        let c = (0, a.yK)(
                [F.A, w.default, D.A, N.A],
                () =>
                    Object.values(F.A.getVoiceStatesForChannel(t.id))
                        .map((e) => w.default.getUser(e.userId))
                        .filter(L.Vq)
                        .sort((e, t) => {
                            if (s.length > 0 && "" !== n.trim()) {
                                if (s.some((t) => t.userId === e.id)) return -1;
                                if (s.some((e) => e.userId === t.id)) return 1;
                            }
                            return N.A.isFriend(e.id) && !N.A.isFriend(t.id)
                                ? -1
                                : !N.A.isFriend(e.id) && N.A.isFriend(t.id)
                                  ? 1
                                  : (D.A.getUserAffinity(t.id)?.vcProbability ?? 0) -
                                    (D.A.getUserAffinity(e.id)?.vcProbability ?? 0);
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
                  overflowCountClassName: P.mB,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": G.intl.string(G.t.TxqPQR),
              });
    });
function z() {
    let e,
        t =
            ((e = (0, a.yK)(
                [w.default, N.A, D.A],
                () =>
                    N.A.getFriendIDs()
                        .sort((e, t) =>
                            null == e && null == t
                                ? 0
                                : null == e
                                  ? 1
                                  : null == t
                                    ? -1
                                    : (D.A.getUserAffinity(t)?.communicationProbability ?? 0) -
                                      (D.A.getUserAffinity(e)?.communicationProbability ?? 0),
                        )
                        .reduce((e, t) => {
                            let n = w.default.getUser(t);
                            return null != n && e.push(n), e;
                        }, []),
                [],
            )),
            (0, a.yK)(
                [F.A, j.A, O.A],
                () =>
                    Array.from(
                        e
                            .map((e) => F.A.getDiscoverableVoiceStateForUser(e.id))
                            .reduce((e, t) => {
                                let n = t?.channelId;
                                if (null == n) return e;
                                let l = j.A.getChannel(n);
                                return (
                                    null != l &&
                                        O.A.can(_.xBc.VIEW_CHANNEL, l) &&
                                        O.A.can(_.xBc.CONNECT, l) &&
                                        e.add(n),
                                    e
                                );
                            }, new Set()),
                    ).filter(L.Vq),
                [e],
            )),
        n = (0, a.yK)([v.A, j.A, O.A], () => {
            let e = v.A.getVoiceChannelHistory(),
                n = new Set(t);
            return Array.from(
                new Set(
                    e.reduce((e, t) => {
                        let l = j.A.getChannel(t);
                        return (
                            null != l &&
                                O.A.can(_.xBc.VIEW_CHANNEL, l) &&
                                O.A.can(_.xBc.CONNECT, l) &&
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
function Z() {
    return (0, a.yK)(
        [k.A, M.Ay, F.A, N.A, O.A],
        () =>
            k.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...M.Ay.getChannels(t.id)
                            [M.vM].filter(
                                (e) => O.A.can(_.xBc.VIEW_CHANNEL, e.channel) && O.A.can(_.xBc.CONNECT, e.channel),
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
                    voiceStates: Object.values(F.A.getVoiceStatesForChannel(e.id)).filter((e) =>
                        N.A.isFriend(e.userId),
                    ),
                })),
        [],
    );
}
function X() {
    return (0, a.yK)(
        [k.A, M.Ay, O.A],
        () =>
            k.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...M.Ay.getChannels(t.id)
                            [M.I6].map((e) => {
                                let { channel: t } = e;
                                return t;
                            })
                            .filter((e) => null != e && !!(0, b.pQ)(e.type) && O.A.can(_.xBc.VIEW_CHANNEL, e)),
                    ],
                    [],
                )
                .map((e) => ({ channel: e, voiceStates: [] })),
        [],
    );
}
let B = i.memo(function (e) {
        let { channel: t } = e,
            n = t.getGuildId(),
            i = (0, a.bG)([k.A], () => k.A.getGuild(n), [n]);
        if (null == i)
            switch (t.type) {
                case _.rbe.DM:
                    return (0, l.jsx)(p.Pk, { channel: t, size: o._3.SIZE_32 });
                case _.rbe.GROUP_DM:
                    return (0, l.jsx)(p.IC, { channel: t, size: o._3.SIZE_32 });
                default:
                    return null;
            }
        return (0, l.jsx)(A.Ay, {
            mask: A.hW.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, l.jsx)("div", {
                className: P.Ko,
                children: (0, l.jsx)(f.j, {
                    guildId: i.id,
                    guildName: i.name ?? G.intl.string(G.t.DmIUGK),
                    guildIcon: i.icon,
                    iconSize: 32,
                }),
            }),
        });
    }),
    W = i.memo(function (e) {
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
            A = (0, a.bG)([j.A], () => j.A.getChannel(t), [t]),
            f = (0, E.Ay)(A),
            p = A?.getGuildId(),
            S = (0, a.bG)([k.A], () => k.A.getGuild(p), [p]),
            x = (0, I.gU)(A, S),
            T = i?.id === t,
            _ = T ? "text-feedback-positive" : n ? "interactive-text-active" : "text-muted",
            y = T ? d.A.colors.TEXT_FEEDBACK_POSITIVE : n ? d.A.colors.INTERACTIVE_TEXT_ACTIVE : d.A.colors.ICON_MUTED;
        return null == A
            ? null
            : (0, l.jsxs)(c.s, {
                  className: s()(P.Uw, n && P.gt),
                  "aria-label": f ?? "",
                  onClick: () => r(t),
                  onMouseOver: () => u(t),
                  onMouseLeave: () => o(t),
                  children: [
                      (0, l.jsx)("div", { className: P._N, children: (0, l.jsx)(B, { channel: A }) }),
                      (0, l.jsxs)("div", {
                          className: P.rg,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: P.Ks,
                                  children: [
                                      null != x ? (0, l.jsx)(x, { color: y, size: "xs", className: P.p }) : void 0,
                                      (0, l.jsx)(h.E, {
                                          variant: T ? "text-sm/semibold" : "text-sm/medium",
                                          color: _,
                                          className: P.rU,
                                          children: (0, E.m1)(A, w.default, N.A),
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(h.E, {
                                  variant: T ? "text-xs/semibold" : "text-xs/medium",
                                  color: _,
                                  children: S?.name ?? f,
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          className: P.vU,
                          children: m ? (0, l.jsx)(K, { channel: A, currentVoiceChannel: i, query: g }) : null,
                      }),
                  ],
              });
    }),
    $ = i.memo(function (e) {
        let { emptyText: t } = e;
        return (0, l.jsx)("div", {
            className: P.KJ,
            children: (0, l.jsx)(h.E, { variant: "text-md/normal", color: "text-strong", children: t }),
        });
    }),
    q = i.memo(function (e) {
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
            E = (e) => {
                m(e);
            },
            I = () => {
                m(null);
            },
            A = o ? g.Ip : "div";
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)("div", {
                    className: P.qs,
                    children: (0, l.jsx)(h.E, { variant: "text-sm/semibold", color: "text-muted", children: t }),
                }),
                (0, l.jsxs)(A, {
                    className: P.o5,
                    children: [
                        a && 0 === n.length && (0, l.jsx)($, { emptyText: G.intl.string(G.t.nxSS03) }),
                        n.map((e) =>
                            (0, l.jsx)(
                                W,
                                {
                                    channelId: e,
                                    isHighlighted: e === c,
                                    currentVoiceChannel: r,
                                    onClick: () => {
                                        s(e);
                                    },
                                    onMouseOver: E,
                                    onMouseLeave: I,
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
function Q(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: i } = e,
        { recentVoiceChannelIds: r, friendVoiceChannelIds: a } = z();
    return r.length > 0 || a.length > 0
        ? (0, l.jsxs)(g.Ip, {
              className: s()(P.o5, P.Hc),
              children: [
                  r.length > 0 &&
                      (0, l.jsx)(q, {
                          sectionHeader: G.intl.string(G.t.lnk2NQ),
                          channelIds: r.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "recent channel"),
                          scrollable: !1,
                      }),
                  a.length > 0 &&
                      (0, l.jsx)(q, {
                          sectionHeader: G.intl.string(G.t["0lvb9O"]),
                          channelIds: a.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "friend channel"),
                          scrollable: !1,
                      }),
              ],
          })
        : (0, l.jsx)($, { emptyText: G.intl.string(G.t["3ET7Ay"]) });
}
function J(e) {
    e.stopPropagation();
}
function ee(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: r, allAvailableChannelRows: s } = e,
        [a, u] = i.useState(""),
        [o, d] = i.useState([]);
    (0, R.RT)(a, s, d, H);
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
        E = o.length > 20,
        I = { count: E ? 20 : o.length },
        A = i.useMemo(() => ({ onMouseDown: J, onMouseMove: J, onMouseUp: J, onMouseEnter: J, onMouseLeave: J }), []);
    return (0, l.jsxs)("div", {
        className: P.Dz,
        ...A,
        children: [
            (0, l.jsx)("div", {
                className: P.PP,
                children: (0, l.jsx)(m.I, {
                    autoFocus: !0,
                    query: a,
                    placeholder: G.intl.string(G.t.UyA6ST),
                    onClear: () => {
                        u("");
                    },
                    onKeyDown: c,
                    onChange: (e) => {
                        u(e);
                    },
                    inputProps: { "aria-label": G.intl.string(G.t.UyA6ST) },
                }),
            }),
            g
                ? (0, l.jsx)(q, {
                      sectionHeader: E ? G.intl.format(G.t.qdXiQ1, I) : G.intl.format(G.t["Aq+8wB"], I),
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
                : (0, l.jsx)(Q, { searchQuery: a, currentVoiceChannel: t, onSelect: h }),
        ],
    });
}
