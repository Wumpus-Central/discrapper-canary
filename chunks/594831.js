n(321073);
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(855986),
    o = n(52133),
    u = n(342952),
    d = n(778712),
    c = n(646514),
    h = n(890856),
    g = n(834730),
    m = n(95362),
    I = n(683438),
    E = n(47167),
    A = n(713654),
    f = n(573435),
    S = n(145497),
    p = n(166444),
    N = n(565860),
    T = n(648427),
    x = n(379078),
    y = n(704554),
    _ = n(812020),
    C = n(95701),
    v = n(734057),
    R = n(808728),
    D = n(71393),
    b = n(576705),
    j = n(994500),
    k = n(287809),
    M = n(977997),
    O = n(403362),
    w = n(996439),
    F = n(652215),
    G = n(792996),
    L = n(635613);
let U = (e) => [
        e.userId,
        ...(function (e) {
            let t = k.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                l = (0, N.jP)(t);
            return Array.from(new Set([n, l.nick, ...Object.values(l.names)].flat().filter(O.Vq)));
        })(e),
    ],
    P = {
        searchType: x.n.FUZZY,
        sortType: x.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t, voiceStates: n } = e;
            return [
                (0, E.m1)(t, k.default, j.A),
                t.id,
                t.guild_id,
                D.A.getGuild(t.guild_id)?.name ?? "",
                ...(n ?? []).flatMap((e) => U(e)),
            ].filter(O.Vq);
        },
        throttleMs: 100,
    },
    V = { searchType: x.n.FUZZY, sortType: x.r.JARO_WINKLER, searchStringGenerator: U, throttleMs: 100 },
    H = i.memo(function (e) {
        let { channel: t, query: n } = e,
            [r] = (0, a.bG)([M.A], () => [M.A.getVoiceStatesForChannel(t.id), M.A.getVoiceStateVersion()], [t.id], w.D),
            [s, o] = i.useState([]);
        (0, y.RT)(n, Object.values(r), o, V);
        let c = (0, a.yK)(
                [M.A, k.default, _.A, j.A],
                () =>
                    Object.values(M.A.getVoiceStatesForChannel(t.id))
                        .map((e) => k.default.getUser(e.userId))
                        .filter(O.Vq)
                        .sort((e, t) => {
                            if (s.length > 0 && "" !== n.trim()) {
                                if (s.some((t) => t.userId === e.id)) return -1;
                                if (s.some((e) => e.userId === t.id)) return 1;
                            }
                            return j.A.isFriend(e.id) && !j.A.isFriend(t.id)
                                ? -1
                                : !j.A.isFriend(e.id) && j.A.isFriend(t.id)
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
                  size: d._3.SIZE_24,
                  overflowCountClassName: L.mB,
                  overflowCountVariant: "body-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": G.intl.string(G.t.TxqPQR),
              });
    });
function Y() {
    let e,
        t =
            ((e = (0, a.yK)(
                [k.default, j.A, _.A],
                () =>
                    j.A.getFriendIDs()
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
                            let n = k.default.getUser(t);
                            return (null != n && e.push(n), e);
                        }, []),
                [],
            )),
            (0, a.yK)(
                [M.A, v.A, b.A],
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
                                        b.A.can(F.xBc.VIEW_CHANNEL, l) &&
                                        b.A.can(F.xBc.CONNECT, l) &&
                                        e.add(n),
                                    e
                                );
                            }, new Set()),
                    ).filter(O.Vq),
                [e],
            )),
        n = (0, a.yK)(
            [T.A, v.A, b.A],
            () => {
                let e = T.A.getVoiceChannelHistory(),
                    n = new Set(t);
                return Array.from(
                    new Set(
                        e.reduce((e, t) => {
                            let l = v.A.getChannel(t);
                            return (
                                null != l &&
                                    b.A.can(F.xBc.VIEW_CHANNEL, l) &&
                                    b.A.can(F.xBc.CONNECT, l) &&
                                    !n.has(t) &&
                                    e.push(t),
                                e
                            );
                        }, []),
                    ),
                );
            },
            [t],
        );
    return { friendVoiceChannelIds: t, recentVoiceChannelIds: n };
}
function K(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n].channel !== t[n].channel || !(0, o.v)(e[n].voiceStates ?? [], t[n].voiceStates ?? [])) return !1;
    return !0;
}
let X = i.memo(function (e) {
        let { channel: t } = e,
            n = t.getGuildId(),
            i = (0, a.bG)([D.A], () => D.A.getGuild(n), [n]);
        if (null == i)
            switch (t.type) {
                case F.rbe.DM:
                    return (0, l.jsx)(p.Pk, { channel: t, size: d._3.SIZE_32 });
                case F.rbe.GROUP_DM:
                    return (0, l.jsx)(p.IC, { channel: t, size: d._3.SIZE_32 });
                default:
                    return null;
            }
        return (0, l.jsx)(f.Ay, {
            mask: f.hW.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, l.jsx)("div", {
                className: L.Ko,
                children: (0, l.jsx)(S.j, {
                    guildId: i.id,
                    guildName: i.name ?? G.intl.string(G.t.DmIUGK),
                    guildIcon: i.icon,
                    iconSize: 32,
                }),
            }),
        });
    }),
    z = i.memo(function (e) {
        let {
                channelId: t,
                isHighlighted: n,
                currentVoiceChannel: i,
                onClick: r,
                onMouseOver: o,
                onMouseLeave: u,
                query: d,
                showVoiceAvatars: m = !0,
            } = e,
            I = (0, a.bG)([v.A], () => v.A.getChannel(t), [t]),
            f = (0, E.Ay)(I),
            S = I?.getGuildId(),
            p = (0, a.bG)([D.A], () => D.A.getGuild(S), [S]),
            N = (0, A.gU)(I, p),
            T = i?.id === t,
            x = T ? "text-feedback-positive" : n ? "interactive-text-active" : "text-muted",
            y = T ? c.A.colors.TEXT_FEEDBACK_POSITIVE : n ? c.A.colors.INTERACTIVE_TEXT_ACTIVE : c.A.colors.ICON_MUTED;
        return null == I
            ? null
            : (0, l.jsxs)(h.s, {
                  className: s()(L.Uw, n && L.gt),
                  focusProps: { offset: 4 },
                  "aria-label": f ?? "",
                  onClick: () => r(t),
                  onMouseOver: () => o(t),
                  onMouseLeave: () => u(t),
                  children: [
                      (0, l.jsx)("div", { className: L._N, children: (0, l.jsx)(X, { channel: I }) }),
                      (0, l.jsxs)("div", {
                          className: L.rg,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: L.Ks,
                                  children: [
                                      null != N ? (0, l.jsx)(N, { color: y, size: "xs", className: L.p }) : void 0,
                                      (0, l.jsx)(g.E, {
                                          variant: T ? "body-sm/semibold" : "body-sm/medium",
                                          color: x,
                                          className: L.rU,
                                          children: (0, E.m1)(I, k.default, j.A),
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(g.E, {
                                  variant: T ? "body-xs/semibold" : "body-xs/medium",
                                  color: x,
                                  children: p?.name ?? f,
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          className: L.vU,
                          children: m ? (0, l.jsx)(H, { channel: I, currentVoiceChannel: i, query: d }) : null,
                      }),
                  ],
              });
    }),
    B = i.memo(function (e) {
        let { emptyText: t } = e;
        return (0, l.jsx)("div", {
            className: L.KJ,
            children: (0, l.jsx)(g.E, { variant: "body-md/normal", color: "text-strong", children: t }),
        });
    }),
    Z = i.memo(function (e) {
        let {
                sectionHeader: t,
                channelIds: n,
                currentVoiceChannel: r,
                onSelect: s,
                hasQuery: a,
                query: o,
                scrollable: u = !0,
                showVoiceAvatars: d = !0,
            } = e,
            [c, h] = i.useState(null);
        function I(e) {
            h(e);
        }
        function E() {
            h(null);
        }
        let A = u ? m.Ip : "div";
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)("div", {
                    className: L.qs,
                    children: (0, l.jsx)(g.E, { variant: "body-sm/semibold", color: "text-muted", children: t }),
                }),
                (0, l.jsxs)(A, {
                    className: L.o5,
                    children: [
                        a && 0 === n.length && (0, l.jsx)(B, { emptyText: G.intl.string(G.t.nxSS03) }),
                        n.map((e) =>
                            (0, l.jsx)(
                                z,
                                {
                                    channelId: e,
                                    isHighlighted: e === c,
                                    currentVoiceChannel: r,
                                    onClick: () => {
                                        s(e);
                                    },
                                    onMouseOver: I,
                                    onMouseLeave: E,
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
function W(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: i } = e,
        { recentVoiceChannelIds: r, friendVoiceChannelIds: a } = Y();
    return r.length > 0 || a.length > 0
        ? (0, l.jsxs)(m.Ip, {
              className: s()(L.o5, L.Hc),
              children: [
                  r.length > 0 &&
                      (0, l.jsx)(Z, {
                          sectionHeader: G.intl.string(G.t.lnk2NQ),
                          channelIds: r.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "recent channel"),
                          scrollable: !1,
                      }),
                  a.length > 0 &&
                      (0, l.jsx)(Z, {
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
        : (0, l.jsx)(B, { emptyText: G.intl.string(G.t["3ET7Ay"]) });
}
function $(e) {
    e.stopPropagation();
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let { currentVoiceChannel: t, onClose: n, onSelect: r, allAvailableChannelRows: s } = e,
                [a, o] = i.useState(""),
                [u, d] = i.useState([]);
            (0, y.RT)(a, s, d, P);
            let c = i.useCallback(
                    (e) => {
                        "Escape" === e.key && n();
                    },
                    [n],
                ),
                h = i.useCallback(
                    (e, t) => {
                        (r(e, t), n());
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
                m = u.length > 20,
                E = { count: m ? 20 : u.length },
                A = i.useMemo(
                    () => ({ onMouseDown: $, onMouseMove: $, onMouseUp: $, onMouseEnter: $, onMouseLeave: $ }),
                    [],
                );
            return (0, l.jsxs)("div", {
                className: L.Dz,
                ...A,
                children: [
                    (0, l.jsx)("div", {
                        className: L.PP,
                        children: (0, l.jsx)(I.I, {
                            autoFocus: !0,
                            query: a,
                            placeholder: G.intl.string(G.t.UyA6ST),
                            onClear: function () {
                                o("");
                            },
                            onKeyDown: c,
                            onChange: function (e) {
                                o(e);
                            },
                            inputProps: { "aria-label": G.intl.string(G.t.UyA6ST) },
                        }),
                    }),
                    g
                        ? (0, l.jsx)(Z, {
                              sectionHeader: m ? G.intl.format(G.t.qdXiQ1, E) : G.intl.format(G.t["Aq+8wB"], E),
                              channelIds: u
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
        },
        Dz: function () {
            return (0, a.bG)(
                [D.A, R.A, b.A],
                () =>
                    D.A.getGuildsArray()
                        .reduce((e, t) => {
                            let n = R.A.getChannels(t.id)
                                [R.I].map((e) => {
                                    let { channel: t } = e;
                                    return t;
                                })
                                .filter((e) => null != e && !!(0, C.pQ)(e.type) && b.A.can(F.xBc.VIEW_CHANNEL, e));
                            return [...e, ...n];
                        }, [])
                        .map((e) => ({ channel: e, voiceStates: [] })),
                [],
                K,
            );
        },
        MV: P,
        S4: Y,
        qZ: function () {
            return (0, a.bG)(
                [D.A, R.A, M.A, j.A, b.A],
                () =>
                    D.A.getGuildsArray()
                        .reduce((e, t) => {
                            let n = R.A.getChannels(t.id)
                                .VOCAL.filter(
                                    (e) => b.A.can(F.xBc.VIEW_CHANNEL, e.channel) && b.A.can(F.xBc.CONNECT, e.channel),
                                )
                                .map((e) => {
                                    let { channel: t } = e;
                                    return t;
                                });
                            return [...e, ...n];
                        }, [])
                        .map((e) => ({
                            channel: e,
                            voiceStates: Object.values(M.A.getVoiceStatesForChannel(e.id)).filter((e) =>
                                j.A.isFriend(e.userId),
                            ),
                        })),
                [],
                K,
            );
        },
    },
);
