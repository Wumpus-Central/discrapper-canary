n.d(t, {
    C: () => V,
}),
    n(638769),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(377802),
    a = n(342952),
    o = n(397927),
    u = n(47167),
    c = n(713654),
    d = n(21119),
    h = n(734057),
    g = n(71393),
    f = n(576705),
    p = n(222823),
    I = n(994500),
    m = n(309010),
    E = n(287809),
    A = n(977997),
    y = n(607567),
    S = n(403362),
    v = n(996439),
    O = n(914853),
    b = n(676923),
    N = n(1404),
    T = n(483392),
    _ = n(578093),
    C = n(912156),
    x = n(67103),
    D = n(195435),
    M = n(576420),
    j = n(336148),
    w = n(652215),
    P = n(985018),
    R = n(783346),
    U = n(416001),
    G = n(905777);

function L(e) {
    let { isCollapsed: t } = e;
    return (0, l.jsx)(T.C, {
        isCollapsed: t,
        size: "md",
        className: U.t4,
    });
}

function k(e) {
    e.preventDefault(), e.stopPropagation();
}

function F(e) {
    let { channelId: t, guildId: n } = e,
        r = (function (e) {
            let { channelId: t } = e;
            return (0, i.yK)(
                [A.A, E.default, d.A, I.A],
                () =>
                    Object.values(A.A.getVoiceStatesForChannel(t))
                        .map((e) => E.default.getUser(e.userId))
                        .filter(S.Vq)
                        .sort((e, t) => {
                            var n, l, r, i;
                            return I.A.isFriend(e.id) && !I.A.isFriend(t.id)
                                ? -1
                                : !I.A.isFriend(e.id) && I.A.isFriend(t.id)
                                  ? 1
                                  : (null != (n = null == (r = d.A.getUserAffinity(t.id)) ? void 0 : r.vcProbability)
                                        ? n
                                        : 0) -
                                    (null != (l = null == (i = d.A.getUserAffinity(e.id)) ? void 0 : i.vcProbability)
                                        ? l
                                        : 0);
                        }),
                [t],
            );
        })({
            channelId: t,
        });
    return 0 === r.length
        ? null
        : (0, l.jsx)("div", {
              className: G.X0,
              children: (0, l.jsx)(a.A, {
                  users: r,
                  guildId: null != n ? n : void 0,
                  maxUsers: Math.min(r.length, 4),
                  size: o._3J.SIZE_24,
                  disableUserPopout: !0,
                  "aria-label": P.intl.string(P.t.TxqPQR),
              }),
          });
}

function V(e) {
    var t, n, a;
    let d,
        {
            channelId: I,
            listItemId: E,
            voiceStates: A,
            shouldHighlightIfRecentlyAdded: S,
            isExpanded: T = !1,
            onToggleExpanded: U,
            onPrimaryAction: V,
            onContextMenu: H,
        } = e,
        Y = (0, i.bG)([h.A], () => h.A.getChannel(I), [I]),
        W = null != (t = (0, u.Ay)(null != Y ? Y : void 0, !0)) ? t : "???",
        z = null != (n = null == Y || null == (a = Y.getGuildId) ? void 0 : a.call(Y)) ? n : null,
        B = (0, i.bG)([g.A], () => {
            var e;
            return null != z && null != (e = g.A.getGuild(z)) ? e : null;
        }, [z]),
        K = (0, i.bG)([m.A], () => m.A.getVoiceChannelId() === I, [I]),
        X = (0, i.bG)([f.A], () => {
            var e, t;
            return (
                null != Y &&
                ((null != (e = null == (t = Y.isPrivate) ? void 0 : t.call(Y)) && !!e) ||
                    f.A.can(w.xBc.READ_MESSAGE_HISTORY, Y))
            );
        }, [Y]),
        [Q] = (0, i.bG)(
            [y.Ay],
            () => (null == Y || null == z ? [[], 0] : [y.Ay.getVoiceStatesForChannel(Y), y.Ay.getVoiceStateVersion(z)]),
            [Y, z],
            v.D,
        ),
        Z = null != Q && Q.length > 0,
        q = (0, M.A2)(I),
        J = (0, j.X)(Y),
        $ = r.useRef(null),
        ee = r.useCallback(() => {
            let e = $.current;
            null != e && (clearTimeout(e), ($.current = null));
        }, []);
    r.useEffect(
        () => () => {
            ee();
        },
        [ee],
    );
    let et = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null == V ||
                        V({
                            type: x.c.CONNECT_VOICE_CHANNEL,
                            channelId: I,
                            guildId: z,
                        }),
                    T || null == U || U(I);
            },
            [I, z, T, V, U],
        ),
        en = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    null == V ||
                        V({
                            type: x.c.DISCONNECT_VOICE_CHANNEL,
                            channelId: I,
                        });
            },
            [I, V],
        ),
        el = r.useCallback(() => {
            X &&
                (null == V ||
                    V({
                        type: x.c.OPEN_TEXT_CHAT_CHANNEL,
                        channelId: I,
                        guildId: z,
                    }));
        }, [X, I, z, V]),
        er = r.useCallback(
            (e) => {
                if (Z) {
                    null == U || U(I);
                    return;
                }
            },
            [I, Z, U],
        ),
        ei = r.useCallback(
            (e) => {
                ee(), el();
            },
            [ee, el],
        ),
        es = r.useCallback(
            (e) => {
                null == H ||
                    H({
                        type: x.K.VOICE_CHANNEL,
                        event: e,
                        channel: null != Y ? Y : void 0,
                        guild: B,
                        channelId: I,
                    });
            },
            [Y, I, B, H],
        ),
        { mentionCount: ea } = (0, i.cf)(
            [p.Ay],
            () => ({
                mentionCount: p.Ay.getMentionCount(I),
                isMentionLowImportance: p.Ay.getIsMentionLowImportance(I),
                unread: p.Ay.hasUnread(I),
            }),
            [I],
        ),
        eo = (0, o.rdh)(o.LU0.colors.STATUS_POSITIVE),
        eu = (0, o.rdh)(o.LU0.colors.STATUS_DANGER),
        ec = (0, o.rdh)(o.LU0.colors.TEXT_STRONG),
        ed = (0, o.rdh)(o.LU0.colors.TEXT_MUTED),
        eh = K ? eo : ea > 0 ? ec : ed,
        {
            Component: eg,
            events: { onMouseEnter: ef, onMouseLeave: ep },
        } = (0, s.O)(),
        eI = () => {
            let e = K ? P.intl.string(P.t["6vrfgt"]) : P.intl.string(P.t.S0W8Z5),
                t = K ? eu.hex() : eo.hex(),
                n = K ? eg : o._jp;
            return (0, l.jsx)("div", {
                onDoubleClick: k,
                children: (0, l.jsx)(b.S, {
                    tooltipText: e,
                    onClick: K ? en : et,
                    onMouseEnter: ef,
                    onMouseLeave: ep,
                    children: (0, l.jsx)(n, {
                        size: "sm",
                        color: t,
                    }),
                }),
            });
        };
    return (0, l.jsxs)("div", {
        onDoubleClick: ei,
        children: [
            (0, l.jsx)(N.D, {
                listItemId: E,
                recentlyAddedTimestampMs: S ? q : null,
                onClick: er,
                onContextMenu: es,
                avatar:
                    null != Y
                        ? (0, l.jsx)(C.A, {
                              isTyping: J,
                              guild: null != B ? B : void 0,
                              channel: Y,
                              size: C.Q.SMALL_32,
                          })
                        : null,
                primaryText: (0, l.jsxs)("div", {
                    className: R.QV,
                    children: [
                        null == (d = (0, c.gU)(Y, B))
                            ? null
                            : (0, l.jsx)(d, {
                                  color: eh.hex(),
                                  size: "xxs",
                                  className: R.p,
                              }),
                        (0, l.jsx)(o.Text, {
                            className: R.Xh,
                            variant: "text-sm/medium",
                            color: K ? "status-positive-text" : ea > 0 ? "text-strong" : "text-muted",
                            children: W,
                        }),
                    ],
                }),
                secondaryText:
                    (null == B ? void 0 : B.name) != null
                        ? (0, l.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: B.name,
                          })
                        : null,
                rightActions: (e) => {
                    switch (!0) {
                        case !Z:
                            return e
                                ? (0, l.jsxs)("div", {
                                      className: G.YT,
                                      onDoubleClick: k,
                                      children: [
                                          eI(),
                                          (0, l.jsx)(_.j, {
                                              tab: O.x.VOICE,
                                              targetId: I,
                                          }),
                                      ],
                                  })
                                : null;
                        case Z:
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    T
                                        ? (0, l.jsxs)("div", {
                                              className: G.YT,
                                              onDoubleClick: k,
                                              children: [
                                                  eI(),
                                                  (0, l.jsx)(_.j, {
                                                      tab: O.x.VOICE,
                                                      targetId: I,
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsx)(F, {
                                              channelId: I,
                                              guildId: z,
                                          }),
                                    (0, l.jsx)(L, {
                                        isCollapsed: !T,
                                    }),
                                ],
                            });
                        default:
                            return null;
                    }
                },
            }),
            T && Q.length > 0
                ? (0, l.jsx)("div", {
                      className: G.Nz,
                      children: Q.slice(0, 25).map((e) =>
                          (0, l.jsx)(
                              D.a,
                              {
                                  channelId: I,
                                  guildId: z,
                                  userId: e.user.id,
                                  onDoubleClick: k,
                                  onContextMenu: H,
                              },
                              e.user.id,
                          ),
                      ),
                  })
                : null,
        ],
    });
}
