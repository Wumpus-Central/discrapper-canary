n.d(t, { C: () => B });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(377802),
    a = n(342952),
    u = n(778712),
    o = n(602853),
    d = n(827734),
    c = n(978940),
    h = n(834730),
    g = n(687966),
    m = n(47167),
    I = n(713654),
    E = n(21119),
    A = n(734057),
    f = n(71393),
    p = n(576705),
    S = n(290863),
    N = n(222823),
    x = n(994500),
    T = n(309010),
    _ = n(287809),
    y = n(977997),
    v = n(607567),
    C = n(403362),
    R = n(996439),
    D = n(914853),
    b = n(676923),
    j = n(1404),
    M = n(483392),
    k = n(578093),
    O = n(912156),
    w = n(67103),
    L = n(195435),
    F = n(576420),
    G = n(70191),
    U = n(336148),
    P = n(652215),
    V = n(985018),
    H = n(760023),
    Y = n(894564),
    K = n(567346);
function z(e) {
    let { isCollapsed: t } = e;
    return (0, l.jsx)(M.C, { isCollapsed: t, size: "md", className: Y.t4 });
}
function X(e) {
    e.preventDefault(), e.stopPropagation();
}
function Z(e) {
    let { channelId: t, guildId: n } = e,
        i = (function (e) {
            let { channelId: t } = e;
            return (0, r.yK)(
                [y.A, _.default, E.A, x.A],
                () =>
                    Object.values(y.A.getVoiceStatesForChannel(t))
                        .map((e) => _.default.getUser(e.userId))
                        .filter(C.Vq)
                        .sort((e, t) =>
                            x.A.isFriend(e.id) && !x.A.isFriend(t.id)
                                ? -1
                                : !x.A.isFriend(e.id) && x.A.isFriend(t.id)
                                  ? 1
                                  : (E.A.getUserAffinity(t.id)?.vcProbability ?? 0) -
                                    (E.A.getUserAffinity(e.id)?.vcProbability ?? 0),
                        ),
                [t],
            );
        })({ channelId: t });
    return 0 === i.length
        ? null
        : (0, l.jsx)("div", {
              className: K.X0,
              children: (0, l.jsx)(a.A, {
                  users: i,
                  guildId: n ?? void 0,
                  maxUsers: Math.min(i.length, 4),
                  size: u._3.SIZE_24,
                  disableUserPopout: !0,
                  "aria-label": V.intl.string(V.t.TxqPQR),
              }),
          });
}
function B(e) {
    let t,
        {
            channelId: n,
            listItemId: a,
            voiceStates: u,
            shouldHighlightIfRecentlyAdded: E,
            isExpanded: x = !1,
            onToggleExpanded: _,
            onPrimaryAction: C,
            onContextMenu: M,
        } = e,
        Y = (0, r.bG)([A.A], () => A.A.getChannel(n), [n]),
        B = (0, m.Ay)(Y ?? void 0, !0) ?? "???",
        W = Y?.getGuildId?.() ?? null,
        $ = (0, r.bG)([f.A], () => (null != W ? (f.A.getGuild(W) ?? null) : null), [W]),
        q = (0, r.bG)([T.A], () => T.A.getVoiceChannelId() === n, [n]),
        Q = (0, r.bG)([p.A], () => null != Y && (!!Y.isPrivate?.() || p.A.can(P.xBc.READ_MESSAGE_HISTORY, Y)), [Y]),
        [J] = (0, r.bG)(
            [v.Ay],
            () => (null == Y || null == W ? [[], 0] : [v.Ay.getVoiceStatesForChannel(Y), v.Ay.getVoiceStateVersion(W)]),
            [Y, W],
            R.D,
        ),
        ee = null != J && J.length > 0,
        et = (0, r.bG)([y.A, S.A], () => {
            for (let e of Object.values(y.A.getVoiceStatesForChannel(n))) {
                let t = S.A.findActivity(e.userId, G.A);
                if (t?.name != null) return t.name;
            }
            return null;
        }, [n]),
        en = (0, F.A2)(n),
        el = (0, U.X6)(Y),
        ei = i.useRef(null),
        er = i.useCallback(() => {
            let e = ei.current;
            null != e && (clearTimeout(e), (ei.current = null));
        }, []);
    i.useEffect(
        () => () => {
            er();
        },
        [er],
    );
    let es = i.useCallback(
            (e) => {
                e.stopPropagation(), C?.({ type: w.c.CONNECT_VOICE_CHANNEL, channelId: n, guildId: W }), x || _?.(n);
            },
            [n, W, x, C, _],
        ),
        ea = i.useCallback(
            (e) => {
                e.stopPropagation(), C?.({ type: w.c.DISCONNECT_VOICE_CHANNEL, channelId: n });
            },
            [n, C],
        ),
        eu = i.useCallback(() => {
            Q && C?.({ type: w.c.OPEN_TEXT_CHAT_CHANNEL, channelId: n, guildId: W });
        }, [Q, n, W, C]),
        eo = i.useCallback(
            (e) => {
                if (ee) return void _?.(n);
            },
            [n, ee, _],
        ),
        ed = i.useCallback(
            (e) => {
                er(), eu();
            },
            [er, eu],
        ),
        ec = i.useCallback(
            (e) => {
                M?.({ type: w.K.VOICE_CHANNEL, event: e, channel: Y ?? void 0, guild: $, channelId: n });
            },
            [Y, n, $, M],
        ),
        { mentionCount: eh } = (0, r.cf)(
            [N.Ay],
            () => ({
                mentionCount: N.Ay.getMentionCount(n),
                isMentionLowImportance: N.Ay.getIsMentionLowImportance(n),
                unread: N.Ay.hasUnread(n),
            }),
            [n],
        ),
        eg = (0, o.r)(d.A.colors.STATUS_POSITIVE),
        em = (0, o.r)(d.A.colors.STATUS_DANGER),
        eI = (0, o.r)(d.A.colors.TEXT_STRONG),
        eE = (0, o.r)(d.A.colors.TEXT_MUTED),
        eA = q ? eg : eh > 0 ? eI : eE,
        {
            Component: ef,
            events: { onMouseEnter: ep, onMouseLeave: eS },
        } = (0, s.O)(),
        eN = () => {
            let e = q ? V.intl.string(V.t["6vrfgt"]) : V.intl.string(V.t.S0W8Z5),
                t = q ? em.hex() : eg.hex(),
                n = q ? ef : c._;
            return (0, l.jsx)("div", {
                onDoubleClick: X,
                children: (0, l.jsx)(b.S, {
                    tooltipText: e,
                    onClick: q ? ea : es,
                    onMouseEnter: ep,
                    onMouseLeave: eS,
                    children: (0, l.jsx)(n, { size: "sm", color: t }),
                }),
            });
        };
    return (0, l.jsxs)("div", {
        onDoubleClick: ed,
        children: [
            (0, l.jsx)(j.D, {
                listItemId: a,
                recentlyAddedTimestampMs: E ? en : null,
                onClick: eo,
                onContextMenu: ec,
                avatar:
                    null != Y
                        ? (0, l.jsx)(O.A, { isTyping: el, guild: $ ?? void 0, channel: Y, size: O.Q.SMALL_32 })
                        : null,
                primaryText: (0, l.jsxs)("div", {
                    className: H.QV,
                    children: [
                        null == (t = (0, I.gU)(Y, $))
                            ? null
                            : (0, l.jsx)(t, { color: eA.hex(), size: "xxs", className: H.p }),
                        (0, l.jsx)(h.E, {
                            className: H.Xh,
                            variant: "text-sm/medium",
                            color: q ? "status-positive-text" : eh > 0 ? "text-strong" : "text-muted",
                            children: B,
                        }),
                    ],
                }),
                secondaryText:
                    null != et
                        ? (0, l.jsxs)("div", {
                              className: K.z2,
                              children: [
                                  (0, l.jsx)(g._, { size: "xxs", color: "currentColor", className: K.AE }),
                                  (0, l.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: et }),
                              ],
                          })
                        : $?.name != null
                          ? (0, l.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: $.name })
                          : null,
                rightActions: (e) => {
                    switch (!0) {
                        case !ee:
                            return e
                                ? (0, l.jsxs)("div", {
                                      className: K.YT,
                                      onDoubleClick: X,
                                      children: [eN(), (0, l.jsx)(k.j, { tab: D.x.VOICE, targetId: n })],
                                  })
                                : null;
                        case ee:
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    x
                                        ? (0, l.jsxs)("div", {
                                              className: K.YT,
                                              onDoubleClick: X,
                                              children: [eN(), (0, l.jsx)(k.j, { tab: D.x.VOICE, targetId: n })],
                                          })
                                        : (0, l.jsx)(Z, { channelId: n, guildId: W }),
                                    (0, l.jsx)(z, { isCollapsed: !x }),
                                ],
                            });
                        default:
                            return null;
                    }
                },
            }),
            x && J.length > 0
                ? (0, l.jsx)("div", {
                      className: K.Nz,
                      children: J.slice(0, 25).map((e) =>
                          (0, l.jsx)(
                              L.a,
                              { channelId: n, guildId: W, userId: e.user.id, onDoubleClick: X, onContextMenu: M },
                              e.user.id,
                          ),
                      ),
                  })
                : null,
        ],
    });
}
