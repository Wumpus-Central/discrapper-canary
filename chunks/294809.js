n.d(t, { C: () => Y });
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
    A = n(290863),
    f = n(222823),
    E = n(994500),
    m = n(309010),
    S = n(287809),
    _ = n(977997),
    p = n(607567),
    N = n(403362),
    T = n(996439),
    y = n(914853),
    C = n(676923),
    x = n(1404),
    v = n(483392),
    M = n(578093),
    D = n(912156),
    R = n(67103),
    O = n(195435),
    U = n(576420),
    G = n(70191),
    w = n(336148),
    L = n(652215),
    F = n(985018),
    b = n(833960),
    k = n(77347),
    P = n(796487);
function j(e) {
    let { isCollapsed: t } = e;
    return (0, l.jsx)(v.C, { isCollapsed: t, size: "md", className: k.t4 });
}
function V(e) {
    e.preventDefault(), e.stopPropagation();
}
function H(e) {
    let { channelId: t, guildId: n } = e,
        i = (function (e) {
            let { channelId: t } = e;
            return (0, r.yK)(
                [_.A, S.default, c.A, E.A],
                () =>
                    Object.values(_.A.getVoiceStatesForChannel(t))
                        .map((e) => S.default.getUser(e.userId))
                        .filter(N.Vq)
                        .sort((e, t) =>
                            E.A.isFriend(e.id) && !E.A.isFriend(t.id)
                                ? -1
                                : !E.A.isFriend(e.id) && E.A.isFriend(t.id)
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
              className: P.X0,
              children: (0, l.jsx)(a.A, {
                  users: i,
                  guildId: n ?? void 0,
                  maxUsers: Math.min(i.length, 4),
                  size: u._3J.SIZE_24,
                  disableUserPopout: !0,
                  "aria-label": F.intl.string(F.t.TxqPQR),
              }),
          });
}
function Y(e) {
    let t,
        {
            channelId: n,
            listItemId: a,
            voiceStates: c,
            shouldHighlightIfRecentlyAdded: E,
            isExpanded: S = !1,
            onToggleExpanded: N,
            onPrimaryAction: v,
            onContextMenu: k,
        } = e,
        Y = (0, r.bG)([h.A], () => h.A.getChannel(n), [n]),
        W = (0, o.Ay)(Y ?? void 0, !0) ?? "???",
        z = Y?.getGuildId?.() ?? null,
        B = (0, r.bG)([g.A], () => (null != z ? (g.A.getGuild(z) ?? null) : null), [z]),
        $ = (0, r.bG)([m.A], () => m.A.getVoiceChannelId() === n, [n]),
        K = (0, r.bG)([I.A], () => null != Y && (!!Y.isPrivate?.() || I.A.can(L.xBc.READ_MESSAGE_HISTORY, Y)), [Y]),
        [X] = (0, r.bG)(
            [p.Ay],
            () => (null == Y || null == z ? [[], 0] : [p.Ay.getVoiceStatesForChannel(Y), p.Ay.getVoiceStateVersion(z)]),
            [Y, z],
            T.D,
        ),
        Z = null != X && X.length > 0,
        Q = (0, r.bG)([_.A, A.A], () => {
            for (let e of Object.values(_.A.getVoiceStatesForChannel(n))) {
                let t = A.A.findActivity(e.userId, G.A);
                if (t?.name != null) return t.name;
            }
            return null;
        }, [n]),
        J = (0, U.A2)(n),
        q = (0, w.X6)(Y),
        ee = i.useRef(null),
        et = i.useCallback(() => {
            let e = ee.current;
            null != e && (clearTimeout(e), (ee.current = null));
        }, []);
    i.useEffect(
        () => () => {
            et();
        },
        [et],
    );
    let en = i.useCallback(
            (e) => {
                e.stopPropagation(), v?.({ type: R.c.CONNECT_VOICE_CHANNEL, channelId: n, guildId: z }), S || N?.(n);
            },
            [n, z, S, v, N],
        ),
        el = i.useCallback(
            (e) => {
                e.stopPropagation(), v?.({ type: R.c.DISCONNECT_VOICE_CHANNEL, channelId: n });
            },
            [n, v],
        ),
        ei = i.useCallback(() => {
            K && v?.({ type: R.c.OPEN_TEXT_CHAT_CHANNEL, channelId: n, guildId: z });
        }, [K, n, z, v]),
        er = i.useCallback(
            (e) => {
                if (Z) return void N?.(n);
            },
            [n, Z, N],
        ),
        es = i.useCallback(
            (e) => {
                et(), ei();
            },
            [et, ei],
        ),
        ea = i.useCallback(
            (e) => {
                k?.({ type: R.K.VOICE_CHANNEL, event: e, channel: Y ?? void 0, guild: B, channelId: n });
            },
            [Y, n, B, k],
        ),
        { mentionCount: eu } = (0, r.cf)(
            [f.Ay],
            () => ({
                mentionCount: f.Ay.getMentionCount(n),
                isMentionLowImportance: f.Ay.getIsMentionLowImportance(n),
                unread: f.Ay.hasUnread(n),
            }),
            [n],
        ),
        eo = (0, u.rdh)(u.LU0.colors.STATUS_POSITIVE),
        ed = (0, u.rdh)(u.LU0.colors.STATUS_DANGER),
        ec = (0, u.rdh)(u.LU0.colors.TEXT_STRONG),
        eh = (0, u.rdh)(u.LU0.colors.TEXT_MUTED),
        eg = $ ? eo : eu > 0 ? ec : eh,
        {
            Component: eI,
            events: { onMouseEnter: eA, onMouseLeave: ef },
        } = (0, s.O)(),
        eE = () => {
            let e = $ ? F.intl.string(F.t["6vrfgt"]) : F.intl.string(F.t.S0W8Z5),
                t = $ ? ed.hex() : eo.hex(),
                n = $ ? eI : u._jp;
            return (0, l.jsx)("div", {
                onDoubleClick: V,
                children: (0, l.jsx)(C.S, {
                    tooltipText: e,
                    onClick: $ ? el : en,
                    onMouseEnter: eA,
                    onMouseLeave: ef,
                    children: (0, l.jsx)(n, { size: "sm", color: t }),
                }),
            });
        };
    return (0, l.jsxs)("div", {
        onDoubleClick: es,
        children: [
            (0, l.jsx)(x.D, {
                listItemId: a,
                recentlyAddedTimestampMs: E ? J : null,
                onClick: er,
                onContextMenu: ea,
                avatar:
                    null != Y
                        ? (0, l.jsx)(D.A, { isTyping: q, guild: B ?? void 0, channel: Y, size: D.Q.SMALL_32 })
                        : null,
                primaryText: (0, l.jsxs)("div", {
                    className: b.QV,
                    children: [
                        null == (t = (0, d.gU)(Y, B))
                            ? null
                            : (0, l.jsx)(t, { color: eg.hex(), size: "xxs", className: b.p }),
                        (0, l.jsx)(u.Text, {
                            className: b.Xh,
                            variant: "text-sm/medium",
                            color: $ ? "status-positive-text" : eu > 0 ? "text-strong" : "text-muted",
                            children: W,
                        }),
                    ],
                }),
                secondaryText:
                    null != Q
                        ? (0, l.jsxs)("div", {
                              className: P.z2,
                              children: [
                                  (0, l.jsx)(u._xR, { size: "xxs", color: "currentColor", className: P.AE }),
                                  (0, l.jsx)(u.Text, { variant: "text-xs/normal", color: "text-muted", children: Q }),
                              ],
                          })
                        : B?.name != null
                          ? (0, l.jsx)(u.Text, { variant: "text-xs/normal", color: "text-muted", children: B.name })
                          : null,
                rightActions: (e) => {
                    switch (!0) {
                        case !Z:
                            return e
                                ? (0, l.jsxs)("div", {
                                      className: P.YT,
                                      onDoubleClick: V,
                                      children: [eE(), (0, l.jsx)(M.j, { tab: y.x.VOICE, targetId: n })],
                                  })
                                : null;
                        case Z:
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    S
                                        ? (0, l.jsxs)("div", {
                                              className: P.YT,
                                              onDoubleClick: V,
                                              children: [eE(), (0, l.jsx)(M.j, { tab: y.x.VOICE, targetId: n })],
                                          })
                                        : (0, l.jsx)(H, { channelId: n, guildId: z }),
                                    (0, l.jsx)(j, { isCollapsed: !S }),
                                ],
                            });
                        default:
                            return null;
                    }
                },
            }),
            S && X.length > 0
                ? (0, l.jsx)("div", {
                      className: P.Nz,
                      children: X.slice(0, 25).map((e) =>
                          (0, l.jsx)(
                              O.a,
                              { channelId: n, guildId: z, userId: e.user.id, onDoubleClick: V, onContextMenu: k },
                              e.user.id,
                          ),
                      ),
                  })
                : null,
        ],
    });
}
