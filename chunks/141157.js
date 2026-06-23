n.d(t, { S4: () => X, Ay: () => en, MV: () => Y, Dz: () => W, qZ: () => Z }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    u = n(52133),
    o = n(342952),
    d = n(778712),
    c = n(661531),
    h = n(890856),
    g = n(834730),
    m = n(364522),
    I = n(892547),
    E = n(47167),
    A = n(713654),
    f = n(573435),
    S = n(145497),
    p = n(166444);
n(586774);
var N = n(696451),
    x = n(994500),
    T = n(240248),
    _ = n(427262),
    y = n(652215);
function v(e) {
    return (0, T.sS)(e.toLocaleLowerCase()).trim();
}
var C = n(648427),
    R = n(379078),
    D = n(704554),
    b = n(427358),
    j = n(95701),
    k = n(734057),
    M = n(808728),
    O = n(71393),
    w = n(576705),
    F = n(287809),
    L = n(977997),
    G = n(403362),
    U = n(996439),
    P = n(375708),
    V = n(211500);
let H = (e) => [
        e.userId,
        ...(function (e) {
            let t,
                n,
                l,
                i = F.default.getUser(e.userId);
            if (null == i) return [];
            let r = i.username,
                s =
                    ((t = {}),
                    null != (n = x.A.getNickname(i.id)) && (t[n] = v(n).split(" ")),
                    null != (l = _.Ay.getGlobalName(i)) && null == t[l] && (t[l] = v(l).split(" ")),
                    (t[i.username] = v(i.username).split(" ")),
                    N.Ay.getNicknames(i.id).forEach((e) => {
                        null == t[e] && (t[e] = v(e).split(" "));
                    }),
                    { names: t, nick: n });
            return Array.from(new Set([r, s.nick, ...Object.values(s.names)].flat().filter(G.Vq)));
        })(e),
    ],
    Y = {
        searchType: R.n.FUZZY,
        sortType: R.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t, voiceStates: n } = e;
            return [
                (0, E.m1)(t, F.default, x.A),
                t.id,
                t.guild_id,
                O.A.getGuild(t.guild_id)?.name ?? "",
                ...(n ?? []).flatMap((e) => H(e)),
            ].filter(G.Vq);
        },
        throttleMs: 100,
    },
    K = { searchType: R.n.FUZZY, sortType: R.r.JARO_WINKLER, searchStringGenerator: H, throttleMs: 100 },
    z = i.memo(function (e) {
        let { channel: t, query: n } = e,
            [r] = (0, a.bG)([L.A], () => [L.A.getVoiceStatesForChannel(t.id), L.A.getVoiceStateVersion()], [t.id], U.D),
            [s, u] = i.useState([]);
        (0, D.RT)(n, Object.values(r), u, K);
        let c = (0, a.yK)(
                [L.A, F.default, b.A, x.A],
                () =>
                    Object.values(L.A.getVoiceStatesForChannel(t.id))
                        .map((e) => F.default.getUser(e.userId))
                        .filter(G.Vq)
                        .sort((e, t) => {
                            if (s.length > 0 && "" !== n.trim()) {
                                if (s.some((t) => t.userId === e.id)) return -1;
                                if (s.some((e) => e.userId === t.id)) return 1;
                            }
                            return x.A.isFriend(e.id) && !x.A.isFriend(t.id)
                                ? -1
                                : !x.A.isFriend(e.id) && x.A.isFriend(t.id)
                                  ? 1
                                  : (b.A.getUserAffinity(t.id)?.vcProbability ?? 0) -
                                    (b.A.getUserAffinity(e.id)?.vcProbability ?? 0);
                        }),
                [t.id, s, n],
            ),
            h = t.getGuildId(),
            g = Math.max(s.length, 2);
        return null == h
            ? null
            : (0, l.jsx)(o.A, {
                  users: c,
                  guildId: h,
                  maxUsers: Math.min(g, 4),
                  size: d._3.SIZE_24,
                  overflowCountClassName: V.mB,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": P.intl.string(P.t.TxqPQR),
              });
    });
function X() {
    let e,
        t =
            ((e = (0, a.yK)(
                [F.default, x.A, b.A],
                () =>
                    x.A.getFriendIDs()
                        .sort((e, t) =>
                            null == e && null == t
                                ? 0
                                : null == e
                                  ? 1
                                  : null == t
                                    ? -1
                                    : (b.A.getUserAffinity(t)?.communicationProbability ?? 0) -
                                      (b.A.getUserAffinity(e)?.communicationProbability ?? 0),
                        )
                        .reduce((e, t) => {
                            let n = F.default.getUser(t);
                            return null != n && e.push(n), e;
                        }, []),
                [],
            )),
            (0, a.yK)(
                [L.A, k.A, w.A],
                () =>
                    Array.from(
                        e
                            .map((e) => L.A.getDiscoverableVoiceStateForUser(e.id))
                            .reduce((e, t) => {
                                let n = t?.channelId;
                                if (null == n) return e;
                                let l = k.A.getChannel(n);
                                return (
                                    null != l &&
                                        w.A.can(y.xBc.VIEW_CHANNEL, l) &&
                                        w.A.can(y.xBc.CONNECT, l) &&
                                        e.add(n),
                                    e
                                );
                            }, new Set()),
                    ).filter(G.Vq),
                [e],
            )),
        n = (0, a.yK)([C.A, k.A, w.A], () => {
            let e = C.A.getVoiceChannelHistory(),
                n = new Set(t);
            return Array.from(
                new Set(
                    e.reduce((e, t) => {
                        let l = k.A.getChannel(t);
                        return (
                            null != l &&
                                w.A.can(y.xBc.VIEW_CHANNEL, l) &&
                                w.A.can(y.xBc.CONNECT, l) &&
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
function B(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n].channel !== t[n].channel || !(0, u.v)(e[n].voiceStates ?? [], t[n].voiceStates ?? [])) return !1;
    return !0;
}
function Z() {
    return (0, a.bG)(
        [O.A, M.Ay, L.A, x.A, w.A],
        () =>
            O.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...M.Ay.getChannels(t.id)
                            [M.vM].filter(
                                (e) => w.A.can(y.xBc.VIEW_CHANNEL, e.channel) && w.A.can(y.xBc.CONNECT, e.channel),
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
                    voiceStates: Object.values(L.A.getVoiceStatesForChannel(e.id)).filter((e) =>
                        x.A.isFriend(e.userId),
                    ),
                })),
        [],
        B,
    );
}
function W() {
    return (0, a.bG)(
        [O.A, M.Ay, w.A],
        () =>
            O.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...M.Ay.getChannels(t.id)
                            [M.I6].map((e) => {
                                let { channel: t } = e;
                                return t;
                            })
                            .filter((e) => null != e && !!(0, j.pQ)(e.type) && w.A.can(y.xBc.VIEW_CHANNEL, e)),
                    ],
                    [],
                )
                .map((e) => ({ channel: e, voiceStates: [] })),
        [],
        B,
    );
}
let $ = i.memo(function (e) {
        let { channel: t } = e,
            n = t.getGuildId(),
            i = (0, a.bG)([O.A], () => O.A.getGuild(n), [n]);
        if (null == i)
            switch (t.type) {
                case y.rbe.DM:
                    return (0, l.jsx)(p.Pk, { channel: t, size: d._3.SIZE_32 });
                case y.rbe.GROUP_DM:
                    return (0, l.jsx)(p.IC, { channel: t, size: d._3.SIZE_32 });
                default:
                    return null;
            }
        return (0, l.jsx)(f.Ay, {
            mask: f.hW.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, l.jsx)("div", {
                className: V.Ko,
                children: (0, l.jsx)(S.j, {
                    guildId: i.id,
                    guildName: i.name ?? P.intl.string(P.t.DmIUGK),
                    guildIcon: i.icon,
                    iconSize: 32,
                }),
            }),
        });
    }),
    Q = i.memo(function (e) {
        let {
                channelId: t,
                isHighlighted: n,
                currentVoiceChannel: i,
                onClick: r,
                onMouseOver: u,
                onMouseLeave: o,
                query: d,
                showVoiceAvatars: m = !0,
            } = e,
            I = (0, a.bG)([k.A], () => k.A.getChannel(t), [t]),
            f = (0, E.Ay)(I),
            S = I?.getGuildId(),
            p = (0, a.bG)([O.A], () => O.A.getGuild(S), [S]),
            N = (0, A.gU)(I, p),
            T = i?.id === t,
            _ = T ? "text-feedback-positive" : n ? "interactive-text-active" : "text-muted",
            y = T ? c.A.colors.TEXT_FEEDBACK_POSITIVE : n ? c.A.colors.INTERACTIVE_TEXT_ACTIVE : c.A.colors.ICON_MUTED;
        return null == I
            ? null
            : (0, l.jsxs)(h.s, {
                  className: s()(V.Uw, n && V.gt),
                  "aria-label": f ?? "",
                  onClick: () => r(t),
                  onMouseOver: () => u(t),
                  onMouseLeave: () => o(t),
                  children: [
                      (0, l.jsx)("div", { className: V._N, children: (0, l.jsx)($, { channel: I }) }),
                      (0, l.jsxs)("div", {
                          className: V.rg,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: V.Ks,
                                  children: [
                                      null != N ? (0, l.jsx)(N, { color: y, size: "xs", className: V.p }) : void 0,
                                      (0, l.jsx)(g.E, {
                                          variant: T ? "text-sm/semibold" : "text-sm/medium",
                                          color: _,
                                          className: V.rU,
                                          children: (0, E.m1)(I, F.default, x.A),
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(g.E, {
                                  variant: T ? "text-xs/semibold" : "text-xs/medium",
                                  color: _,
                                  children: p?.name ?? f,
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          className: V.vU,
                          children: m ? (0, l.jsx)(z, { channel: I, currentVoiceChannel: i, query: d }) : null,
                      }),
                  ],
              });
    }),
    q = i.memo(function (e) {
        let { emptyText: t } = e;
        return (0, l.jsx)("div", {
            className: V.KJ,
            children: (0, l.jsx)(g.E, { variant: "text-md/normal", color: "text-strong", children: t }),
        });
    }),
    J = i.memo(function (e) {
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
            [c, h] = i.useState(null),
            I = (e) => {
                h(e);
            },
            E = () => {
                h(null);
            },
            A = o ? m.Ip : "div";
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)("div", {
                    className: V.qs,
                    children: (0, l.jsx)(g.E, { variant: "text-sm/semibold", color: "text-muted", children: t }),
                }),
                (0, l.jsxs)(A, {
                    className: V.o5,
                    children: [
                        a && 0 === n.length && (0, l.jsx)(q, { emptyText: P.intl.string(P.t.nxSS03) }),
                        n.map((e) =>
                            (0, l.jsx)(
                                Q,
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
function ee(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: i } = e,
        { recentVoiceChannelIds: r, friendVoiceChannelIds: a } = X();
    return r.length > 0 || a.length > 0
        ? (0, l.jsxs)(m.Ip, {
              className: s()(V.o5, V.Hc),
              children: [
                  r.length > 0 &&
                      (0, l.jsx)(J, {
                          sectionHeader: P.intl.string(P.t.lnk2NQ),
                          channelIds: r.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "recent channel"),
                          scrollable: !1,
                      }),
                  a.length > 0 &&
                      (0, l.jsx)(J, {
                          sectionHeader: P.intl.string(P.t["0lvb9O"]),
                          channelIds: a.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "friend channel"),
                          scrollable: !1,
                      }),
              ],
          })
        : (0, l.jsx)(q, { emptyText: P.intl.string(P.t["3ET7Ay"]) });
}
function et(e) {
    e.stopPropagation();
}
function en(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: r, allAvailableChannelRows: s } = e,
        [a, u] = i.useState(""),
        [o, d] = i.useState([]);
    (0, D.RT)(a, s, d, Y);
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
        m = o.length > 20,
        E = { count: m ? 20 : o.length },
        A = i.useMemo(
            () => ({ onMouseDown: et, onMouseMove: et, onMouseUp: et, onMouseEnter: et, onMouseLeave: et }),
            [],
        );
    return (0, l.jsxs)("div", {
        className: V.Dz,
        ...A,
        children: [
            (0, l.jsx)("div", {
                className: V.PP,
                children: (0, l.jsx)(I.I, {
                    autoFocus: !0,
                    query: a,
                    placeholder: P.intl.string(P.t.UyA6ST),
                    onClear: () => {
                        u("");
                    },
                    onKeyDown: c,
                    onChange: (e) => {
                        u(e);
                    },
                    inputProps: { "aria-label": P.intl.string(P.t.UyA6ST) },
                }),
            }),
            g
                ? (0, l.jsx)(J, {
                      sectionHeader: m ? P.intl.format(P.t.qdXiQ1, E) : P.intl.format(P.t["Aq+8wB"], E),
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
                : (0, l.jsx)(ee, { searchQuery: a, currentVoiceChannel: t, onSelect: h }),
        ],
    });
}
