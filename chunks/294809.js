n.d(t, { C: () => V });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(377802),
    a = n(342952),
    u = n(397927),
    o = n(47167),
    d = n(713654),
    c = n(21119),
    h = n(734057),
    g = n(71393),
    I = n(576705),
    A = n(222823),
    f = n(994500),
    E = n(309010),
    m = n(287809),
    S = n(977997),
    p = n(607567),
    N = n(403362),
    T = n(996439),
    _ = n(914853),
    C = n(676923),
    y = n(1404),
    x = n(483392),
    M = n(578093),
    v = n(912156),
    D = n(67103),
    R = n(195435),
    U = n(576420),
    O = n(336148),
    G = n(652215),
    w = n(985018),
    F = n(783346),
    L = n(416001),
    b = n(905777);
function k(e) {
    let { isCollapsed: t } = e;
    return (0, l.jsx)(x.C, { isCollapsed: t, size: "md", className: L.t4 });
}
function P(e) {
    e.preventDefault(), e.stopPropagation();
}
function j(e) {
    let { channelId: t, guildId: n } = e,
        i = (function (e) {
            let { channelId: t } = e;
            return (0, r.yK)(
                [S.A, m.default, c.A, f.A],
                () =>
                    Object.values(S.A.getVoiceStatesForChannel(t))
                        .map((e) => m.default.getUser(e.userId))
                        .filter(N.Vq)
                        .sort((e, t) =>
                            f.A.isFriend(e.id) && !f.A.isFriend(t.id)
                                ? -1
                                : !f.A.isFriend(e.id) && f.A.isFriend(t.id)
                                  ? 1
                                  : (c.A.getUserAffinity(t.id)?.vcProbability ?? 0) -
                                    (c.A.getUserAffinity(e.id)?.vcProbability ?? 0),
                        ),
                [t],
            );
        })({ channelId: t });
    return 0 === i.length
        ? null
        : (0, l.jsx)("div", {
              className: b.X0,
              children: (0, l.jsx)(a.A, {
                  users: i,
                  guildId: n ?? void 0,
                  maxUsers: Math.min(i.length, 4),
                  size: u._3J.SIZE_24,
                  disableUserPopout: !0,
                  "aria-label": w.intl.string(w.t.TxqPQR),
              }),
          });
}
function V(e) {
    let t,
        {
            channelId: n,
            listItemId: a,
            voiceStates: c,
            shouldHighlightIfRecentlyAdded: f,
            isExpanded: m = !1,
            onToggleExpanded: S,
            onPrimaryAction: N,
            onContextMenu: x,
        } = e,
        L = (0, r.bG)([h.A], () => h.A.getChannel(n), [n]),
        V = (0, o.Ay)(L ?? void 0, !0) ?? "???",
        H = L?.getGuildId?.() ?? null,
        Y = (0, r.bG)([g.A], () => (null != H ? (g.A.getGuild(H) ?? null) : null), [H]),
        W = (0, r.bG)([E.A], () => E.A.getVoiceChannelId() === n, [n]),
        z = (0, r.bG)([I.A], () => null != L && (!!L.isPrivate?.() || I.A.can(G.xBc.READ_MESSAGE_HISTORY, L)), [L]),
        [$] = (0, r.bG)(
            [p.Ay],
            () => (null == L || null == H ? [[], 0] : [p.Ay.getVoiceStatesForChannel(L), p.Ay.getVoiceStateVersion(H)]),
            [L, H],
            T.D,
        ),
        B = null != $ && $.length > 0,
        K = (0, U.A2)(n),
        X = (0, O.X6)(L),
        Z = i.useRef(null),
        Q = i.useCallback(() => {
            let e = Z.current;
            null != e && (clearTimeout(e), (Z.current = null));
        }, []);
    i.useEffect(
        () => () => {
            Q();
        },
        [Q],
    );
    let J = i.useCallback(
            (e) => {
                e.stopPropagation(), N?.({ type: D.c.CONNECT_VOICE_CHANNEL, channelId: n, guildId: H }), m || S?.(n);
            },
            [n, H, m, N, S],
        ),
        q = i.useCallback(
            (e) => {
                e.stopPropagation(), N?.({ type: D.c.DISCONNECT_VOICE_CHANNEL, channelId: n });
            },
            [n, N],
        ),
        ee = i.useCallback(() => {
            z && N?.({ type: D.c.OPEN_TEXT_CHAT_CHANNEL, channelId: n, guildId: H });
        }, [z, n, H, N]),
        et = i.useCallback(
            (e) => {
                if (B) return void S?.(n);
            },
            [n, B, S],
        ),
        en = i.useCallback(
            (e) => {
                Q(), ee();
            },
            [Q, ee],
        ),
        el = i.useCallback(
            (e) => {
                x?.({ type: D.K.VOICE_CHANNEL, event: e, channel: L ?? void 0, guild: Y, channelId: n });
            },
            [L, n, Y, x],
        ),
        { mentionCount: ei } = (0, r.cf)(
            [A.Ay],
            () => ({
                mentionCount: A.Ay.getMentionCount(n),
                isMentionLowImportance: A.Ay.getIsMentionLowImportance(n),
                unread: A.Ay.hasUnread(n),
            }),
            [n],
        ),
        er = (0, u.rdh)(u.LU0.colors.STATUS_POSITIVE),
        es = (0, u.rdh)(u.LU0.colors.STATUS_DANGER),
        ea = (0, u.rdh)(u.LU0.colors.TEXT_STRONG),
        eu = (0, u.rdh)(u.LU0.colors.TEXT_MUTED),
        eo = W ? er : ei > 0 ? ea : eu,
        {
            Component: ed,
            events: { onMouseEnter: ec, onMouseLeave: eh },
        } = (0, s.O)(),
        eg = () => {
            let e = W ? w.intl.string(w.t["6vrfgt"]) : w.intl.string(w.t.S0W8Z5),
                t = W ? es.hex() : er.hex(),
                n = W ? ed : u._jp;
            return (0, l.jsx)("div", {
                onDoubleClick: P,
                children: (0, l.jsx)(C.S, {
                    tooltipText: e,
                    onClick: W ? q : J,
                    onMouseEnter: ec,
                    onMouseLeave: eh,
                    children: (0, l.jsx)(n, { size: "sm", color: t }),
                }),
            });
        };
    return (0, l.jsxs)("div", {
        onDoubleClick: en,
        children: [
            (0, l.jsx)(y.D, {
                listItemId: a,
                recentlyAddedTimestampMs: f ? K : null,
                onClick: et,
                onContextMenu: el,
                avatar:
                    null != L
                        ? (0, l.jsx)(v.A, { isTyping: X, guild: Y ?? void 0, channel: L, size: v.Q.SMALL_32 })
                        : null,
                primaryText: (0, l.jsxs)("div", {
                    className: F.QV,
                    children: [
                        null == (t = (0, d.gU)(L, Y))
                            ? null
                            : (0, l.jsx)(t, { color: eo.hex(), size: "xxs", className: F.p }),
                        (0, l.jsx)(u.Text, {
                            className: F.Xh,
                            variant: "text-sm/medium",
                            color: W ? "status-positive-text" : ei > 0 ? "text-strong" : "text-muted",
                            children: V,
                        }),
                    ],
                }),
                secondaryText:
                    Y?.name != null
                        ? (0, l.jsx)(u.Text, { variant: "text-xs/normal", color: "text-muted", children: Y.name })
                        : null,
                rightActions: (e) => {
                    switch (!0) {
                        case !B:
                            return e
                                ? (0, l.jsxs)("div", {
                                      className: b.YT,
                                      onDoubleClick: P,
                                      children: [eg(), (0, l.jsx)(M.j, { tab: _.x.VOICE, targetId: n })],
                                  })
                                : null;
                        case B:
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    m
                                        ? (0, l.jsxs)("div", {
                                              className: b.YT,
                                              onDoubleClick: P,
                                              children: [eg(), (0, l.jsx)(M.j, { tab: _.x.VOICE, targetId: n })],
                                          })
                                        : (0, l.jsx)(j, { channelId: n, guildId: H }),
                                    (0, l.jsx)(k, { isCollapsed: !m }),
                                ],
                            });
                        default:
                            return null;
                    }
                },
            }),
            m && $.length > 0
                ? (0, l.jsx)("div", {
                      className: b.Nz,
                      children: $.slice(0, 25).map((e) =>
                          (0, l.jsx)(
                              R.a,
                              { channelId: n, guildId: H, userId: e.user.id, onDoubleClick: P, onContextMenu: x },
                              e.user.id,
                          ),
                      ),
                  })
                : null,
        ],
    });
}
