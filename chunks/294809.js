n.d(t, { C: () => V });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(377802),
    a = n(342952),
    u = n(397927),
    o = n(47167),
    d = n(713654),
    c = n(21119),
    h = n(734057),
    g = n(71393),
    I = n(576705),
    E = n(222823),
    A = n(994500),
    f = n(309010),
    m = n(287809),
    S = n(977997),
    p = n(607567),
    N = n(403362),
    T = n(996439),
    _ = n(914853),
    y = n(676923),
    C = n(1404),
    x = n(483392),
    v = n(578093),
    M = n(912156),
    D = n(67103),
    R = n(195435),
    U = n(576420),
    O = n(336148),
    G = n(652215),
    b = n(985018),
    w = n(783346),
    L = n(416001),
    k = n(905777);
function F(e) {
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
            return (0, s.yK)(
                [S.A, m.default, c.A, A.A],
                () =>
                    Object.values(S.A.getVoiceStatesForChannel(t))
                        .map((e) => m.default.getUser(e.userId))
                        .filter(N.Vq)
                        .sort((e, t) =>
                            A.A.isFriend(e.id) && !A.A.isFriend(t.id)
                                ? -1
                                : !A.A.isFriend(e.id) && A.A.isFriend(t.id)
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
              className: k.X0,
              children: (0, l.jsx)(a.A, {
                  users: i,
                  guildId: n ?? void 0,
                  maxUsers: Math.min(i.length, 4),
                  size: u._3J.SIZE_24,
                  disableUserPopout: !0,
                  "aria-label": b.intl.string(b.t.TxqPQR),
              }),
          });
}
function V(e) {
    let t,
        {
            channelId: n,
            listItemId: a,
            voiceStates: c,
            shouldHighlightIfRecentlyAdded: A,
            isExpanded: m = !1,
            onToggleExpanded: S,
            onPrimaryAction: N,
            onContextMenu: x,
        } = e,
        L = (0, s.bG)([h.A], () => h.A.getChannel(n), [n]),
        V = (0, o.Ay)(L ?? void 0, !0) ?? "???",
        H = L?.getGuildId?.() ?? null,
        Y = (0, s.bG)([g.A], () => (null != H ? (g.A.getGuild(H) ?? null) : null), [H]),
        z = (0, s.bG)([f.A], () => f.A.getVoiceChannelId() === n, [n]),
        W = (0, s.bG)([I.A], () => null != L && (!!L.isPrivate?.() || I.A.can(G.xBc.READ_MESSAGE_HISTORY, L)), [L]),
        [B] = (0, s.bG)(
            [p.Ay],
            () => (null == L || null == H ? [[], 0] : [p.Ay.getVoiceStatesForChannel(L), p.Ay.getVoiceStateVersion(H)]),
            [L, H],
            T.D,
        ),
        $ = null != B && B.length > 0,
        X = (0, U.A2)(n),
        K = (0, O.X)(L),
        Q = i.useRef(null),
        Z = i.useCallback(() => {
            let e = Q.current;
            null != e && (clearTimeout(e), (Q.current = null));
        }, []);
    i.useEffect(
        () => () => {
            Z();
        },
        [Z],
    );
    let q = i.useCallback(
            (e) => {
                e.stopPropagation(), N?.({ type: D.c.CONNECT_VOICE_CHANNEL, channelId: n, guildId: H }), m || S?.(n);
            },
            [n, H, m, N, S],
        ),
        J = i.useCallback(
            (e) => {
                e.stopPropagation(), N?.({ type: D.c.DISCONNECT_VOICE_CHANNEL, channelId: n });
            },
            [n, N],
        ),
        ee = i.useCallback(() => {
            W && N?.({ type: D.c.OPEN_TEXT_CHAT_CHANNEL, channelId: n, guildId: H });
        }, [W, n, H, N]),
        et = i.useCallback(
            (e) => {
                if ($) return void S?.(n);
            },
            [n, $, S],
        ),
        en = i.useCallback(
            (e) => {
                Z(), ee();
            },
            [Z, ee],
        ),
        el = i.useCallback(
            (e) => {
                x?.({ type: D.K.VOICE_CHANNEL, event: e, channel: L ?? void 0, guild: Y, channelId: n });
            },
            [L, n, Y, x],
        ),
        { mentionCount: ei } = (0, s.cf)(
            [E.Ay],
            () => ({
                mentionCount: E.Ay.getMentionCount(n),
                isMentionLowImportance: E.Ay.getIsMentionLowImportance(n),
                unread: E.Ay.hasUnread(n),
            }),
            [n],
        ),
        es = (0, u.rdh)(u.LU0.colors.STATUS_POSITIVE),
        er = (0, u.rdh)(u.LU0.colors.STATUS_DANGER),
        ea = (0, u.rdh)(u.LU0.colors.TEXT_STRONG),
        eu = (0, u.rdh)(u.LU0.colors.TEXT_MUTED),
        eo = z ? es : ei > 0 ? ea : eu,
        {
            Component: ed,
            events: { onMouseEnter: ec, onMouseLeave: eh },
        } = (0, r.O)(),
        eg = () => {
            let e = z ? b.intl.string(b.t["6vrfgt"]) : b.intl.string(b.t.S0W8Z5),
                t = z ? er.hex() : es.hex(),
                n = z ? ed : u._jp;
            return (0, l.jsx)("div", {
                onDoubleClick: P,
                children: (0, l.jsx)(y.S, {
                    tooltipText: e,
                    onClick: z ? J : q,
                    onMouseEnter: ec,
                    onMouseLeave: eh,
                    children: (0, l.jsx)(n, { size: "sm", color: t }),
                }),
            });
        };
    return (0, l.jsxs)("div", {
        onDoubleClick: en,
        children: [
            (0, l.jsx)(C.D, {
                listItemId: a,
                recentlyAddedTimestampMs: A ? X : null,
                onClick: et,
                onContextMenu: el,
                avatar:
                    null != L
                        ? (0, l.jsx)(M.A, { isTyping: K, guild: Y ?? void 0, channel: L, size: M.Q.SMALL_32 })
                        : null,
                primaryText: (0, l.jsxs)("div", {
                    className: w.QV,
                    children: [
                        null == (t = (0, d.gU)(L, Y))
                            ? null
                            : (0, l.jsx)(t, { color: eo.hex(), size: "xxs", className: w.p }),
                        (0, l.jsx)(u.Text, {
                            className: w.Xh,
                            variant: "text-sm/medium",
                            color: z ? "status-positive-text" : ei > 0 ? "text-strong" : "text-muted",
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
                        case !$:
                            return e
                                ? (0, l.jsxs)("div", {
                                      className: k.YT,
                                      onDoubleClick: P,
                                      children: [eg(), (0, l.jsx)(v.j, { tab: _.x.VOICE, targetId: n })],
                                  })
                                : null;
                        case $:
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    m
                                        ? (0, l.jsxs)("div", {
                                              className: k.YT,
                                              onDoubleClick: P,
                                              children: [eg(), (0, l.jsx)(v.j, { tab: _.x.VOICE, targetId: n })],
                                          })
                                        : (0, l.jsx)(j, { channelId: n, guildId: H }),
                                    (0, l.jsx)(F, { isCollapsed: !m }),
                                ],
                            });
                        default:
                            return null;
                    }
                },
            }),
            m && B.length > 0
                ? (0, l.jsx)("div", {
                      className: k.Nz,
                      children: B.slice(0, 25).map((e) =>
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
