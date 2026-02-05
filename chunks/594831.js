n.d(t, { Ay: () => B, Dz: () => P, MV: () => b, S4: () => k, qZ: () => F }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    u = n(342952),
    o = n(397927),
    d = n(47167),
    c = n(713654),
    h = n(573435),
    g = n(145497),
    I = n(166444),
    E = n(565860),
    A = n(648427),
    f = n(379078),
    m = n(704554),
    S = n(21119),
    p = n(95701),
    N = n(734057),
    T = n(808728),
    _ = n(71393),
    y = n(576705),
    C = n(994500),
    x = n(287809),
    v = n(977997),
    M = n(403362),
    D = n(996439),
    R = n(652215),
    U = n(985018),
    O = n(953679);
let G = (e) => [
        e.userId,
        ...(function (e) {
            let t = x.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                l = (0, E.jP)(t);
            return Array.from(new Set([n, l.nick, ...Object.values(l.names)].flat().filter(M.Vq)));
        })(e),
    ],
    b = {
        searchType: f.n.FUZZY,
        sortType: f.r.JARO_WINKLER,
        searchStringGenerator: (e) => {
            let { channel: t, voiceStates: n } = e;
            return [
                t.name,
                t.id,
                t.guild_id,
                _.A.getGuild(t.guild_id)?.name ?? "",
                ...(n ?? []).flatMap((e) => G(e)),
            ].filter(M.Vq);
        },
        throttleMs: 100,
    },
    w = { searchType: f.n.FUZZY, sortType: f.r.JARO_WINKLER, searchStringGenerator: G, throttleMs: 100 },
    L = i.memo(function (e) {
        let { channel: t, query: n } = e,
            [s] = (0, a.bG)([v.A], () => [v.A.getVoiceStatesForChannel(t.id), v.A.getVoiceStateVersion()], [t.id], D.D),
            [r, d] = i.useState([]);
        (0, m.RT)(n, Object.values(s), d, w);
        let c = (0, a.yK)(
                [v.A, x.default, S.A, C.A],
                () =>
                    Object.values(v.A.getVoiceStatesForChannel(t.id))
                        .map((e) => x.default.getUser(e.userId))
                        .filter(M.Vq)
                        .sort((e, t) => {
                            if (r.length > 0 && "" !== n.trim()) {
                                if (r.some((t) => t.userId === e.id)) return -1;
                                if (r.some((e) => e.userId === t.id)) return 1;
                            }
                            return C.A.isFriend(e.id) && !C.A.isFriend(t.id)
                                ? -1
                                : !C.A.isFriend(e.id) && C.A.isFriend(t.id)
                                  ? 1
                                  : (S.A.getUserAffinity(t.id)?.vcProbability ?? 0) -
                                    (S.A.getUserAffinity(e.id)?.vcProbability ?? 0);
                        }),
                [t.id, r, n],
            ),
            h = t.getGuildId(),
            g = Math.max(r.length, 2);
        return null == h
            ? null
            : (0, l.jsx)(u.A, {
                  users: c,
                  guildId: h,
                  maxUsers: Math.min(g, 4),
                  size: o._3J.SIZE_24,
                  overflowCountClassName: O.mB,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": U.intl.string(U.t.TxqPQR),
              });
    });
function k() {
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
                [v.A, N.A, y.A],
                () =>
                    Array.from(
                        e
                            .map((e) => v.A.getDiscoverableVoiceStateForUser(e.id))
                            .reduce((e, t) => {
                                let n = t?.channelId;
                                if (null == n) return e;
                                let l = N.A.getChannel(n);
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
        n = (0, a.yK)([A.A, N.A, y.A], () => {
            let e = A.A.getVoiceChannelHistory(),
                n = new Set(t);
            return Array.from(
                new Set(
                    e.reduce((e, t) => {
                        let l = N.A.getChannel(t);
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
function F() {
    return (0, a.yK)(
        [_.A, T.Ay, v.A, C.A, y.A],
        () =>
            _.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...T.Ay.getChannels(t.id)
                            [T.vM].filter(
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
        [_.A, T.Ay, y.A],
        () =>
            _.A.getGuildsArray()
                .reduce(
                    (e, t) => [
                        ...e,
                        ...T.Ay.getChannels(t.id)
                            [T.I6].map((e) => {
                                let { channel: t } = e;
                                return t;
                            })
                            .filter((e) => null != e && !!(0, p.pQ)(e.type) && y.A.can(R.xBc.VIEW_CHANNEL, e)),
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
            i = (0, a.bG)([_.A], () => _.A.getGuild(n), [n]);
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
                className: O.Ko,
                children: (0, l.jsx)(g.j, {
                    guildId: i.id,
                    guildName: i.name ?? U.intl.string(U.t.DmIUGK),
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
                onClick: s,
                onMouseOver: u,
                onMouseLeave: h,
                query: g,
                showVoiceAvatars: I = !0,
            } = e,
            E = (0, a.bG)([N.A], () => N.A.getChannel(t), [t]),
            A = E?.getGuildId(),
            f = (0, a.bG)([_.A], () => _.A.getGuild(A), [A]),
            m = (0, c.gU)(E, f),
            S = i?.id === t,
            p = S ? "text-feedback-positive" : n ? "interactive-text-active" : "text-muted",
            T = S
                ? o.LU0.colors.TEXT_FEEDBACK_POSITIVE
                : n
                  ? o.LU0.colors.INTERACTIVE_TEXT_ACTIVE
                  : o.LU0.colors.ICON_MUTED;
        return null == E
            ? null
            : (0, l.jsxs)(o.sqX, {
                  className: r()(O.Uw, n && O.gt),
                  "aria-label": E.name,
                  onClick: () => s(t),
                  onMouseOver: () => u(t),
                  onMouseLeave: () => h(t),
                  children: [
                      (0, l.jsx)("div", { className: O._N, children: (0, l.jsx)(j, { channel: E }) }),
                      (0, l.jsxs)("div", {
                          className: O.rg,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: O.Ks,
                                  children: [
                                      null != m ? (0, l.jsx)(m, { color: T, size: "xs", className: O.p }) : void 0,
                                      (0, l.jsx)(o.Text, {
                                          variant: S ? "text-sm/semibold" : "text-sm/medium",
                                          color: p,
                                          className: O.rU,
                                          children: (0, d.m1)(E, x.default, C.A),
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(o.Text, {
                                  variant: S ? "text-xs/semibold" : "text-xs/medium",
                                  color: p,
                                  children: f?.name ?? E.name,
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          className: O.vU,
                          children: I ? (0, l.jsx)(L, { channel: E, currentVoiceChannel: i, query: g }) : null,
                      }),
                  ],
              });
    }),
    H = i.memo(function (e) {
        let { emptyText: t } = e;
        return (0, l.jsx)("div", {
            className: O.KJ,
            children: (0, l.jsx)(o.Text, { variant: "text-md/normal", color: "text-strong", children: t }),
        });
    }),
    Y = i.memo(function (e) {
        let {
                sectionHeader: t,
                channelIds: n,
                currentVoiceChannel: s,
                onSelect: r,
                hasQuery: a,
                query: u,
                scrollable: d = !0,
                showVoiceAvatars: c = !0,
            } = e,
            [h, g] = i.useState(null),
            I = (e) => {
                g(e);
            },
            E = () => {
                g(null);
            },
            A = d ? o.IpV : "div";
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)("div", {
                    className: O.qs,
                    children: (0, l.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-muted", children: t }),
                }),
                (0, l.jsxs)(A, {
                    className: O.o5,
                    children: [
                        a && 0 === n.length && (0, l.jsx)(H, { emptyText: U.intl.string(U.t.nxSS03) }),
                        n.map((e) =>
                            (0, l.jsx)(
                                V,
                                {
                                    channelId: e,
                                    isHighlighted: e === h,
                                    currentVoiceChannel: s,
                                    onClick: () => {
                                        r(e);
                                    },
                                    onMouseOver: I,
                                    onMouseLeave: E,
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
function z(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: i } = e,
        { recentVoiceChannelIds: s, friendVoiceChannelIds: a } = k();
    return s.length > 0 || a.length > 0
        ? (0, l.jsxs)(o.IpV, {
              className: r()(O.o5, O.Hc),
              children: [
                  s.length > 0 &&
                      (0, l.jsx)(Y, {
                          sectionHeader: U.intl.string(U.t.lnk2NQ),
                          channelIds: s.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "recent channel"),
                          scrollable: !1,
                      }),
                  a.length > 0 &&
                      (0, l.jsx)(Y, {
                          sectionHeader: U.intl.string(U.t["0lvb9O"]),
                          channelIds: a.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => i(e, "friend channel"),
                          scrollable: !1,
                      }),
              ],
          })
        : (0, l.jsx)(H, { emptyText: U.intl.string(U.t["3ET7Ay"]) });
}
function W(e) {
    e.stopPropagation();
}
function B(e) {
    let { currentVoiceChannel: t, onClose: n, onSelect: s, allAvailableChannelRows: r } = e,
        [a, u] = i.useState(""),
        [d, c] = i.useState([]);
    (0, m.RT)(a, r, c, b);
    let h = i.useCallback(
            (e) => {
                "Escape" === e.key && n();
            },
            [n],
        ),
        g = i.useCallback(
            (e, t) => {
                s(e, t), n();
            },
            [s, n],
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
        E = d.length > 20,
        A = { count: E ? 20 : d.length },
        f = i.useMemo(() => ({ onMouseDown: W, onMouseMove: W, onMouseUp: W, onMouseEnter: W, onMouseLeave: W }), []);
    return (0, l.jsxs)("div", {
        className: O.Dz,
        ...f,
        children: [
            (0, l.jsx)("div", {
                className: O.PP,
                children: (0, l.jsx)(o.IWV, {
                    autoFocus: !0,
                    query: a,
                    placeholder: U.intl.string(U.t.UyA6ST),
                    onClear: () => {
                        u("");
                    },
                    onKeyDown: h,
                    onChange: (e) => {
                        u(e);
                    },
                    inputProps: { "aria-label": U.intl.string(U.t.UyA6ST) },
                }),
            }),
            I
                ? (0, l.jsx)(Y, {
                      sectionHeader: E ? U.intl.format(U.t.qdXiQ1, A) : U.intl.format(U.t["Aq+8wB"], A),
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
                : (0, l.jsx)(z, { searchQuery: a, currentVoiceChannel: t, onSelect: g }),
        ],
    });
}
