n.d(t, {
    C: () => F,
}),
    n(638769),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(377802),
    s = n(342952),
    o = n(397927),
    u = n(47167),
    c = n(713654),
    d = n(21119),
    h = n(734057),
    p = n(71393),
    f = n(576705),
    g = n(222823),
    m = n(994500),
    y = n(309010),
    A = n(287809),
    v = n(977997),
    b = n(607567),
    E = n(403362),
    O = n(996439),
    x = n(914853),
    _ = n(676923),
    S = n(1404),
    I = n(483392),
    j = n(578093),
    T = n(912156),
    C = n(472204),
    N = n(195435),
    w = n(576420),
    P = n(876891),
    D = n(336148),
    R = n(652215),
    k = n(985018),
    M = n(783346),
    L = n(416001),
    U = n(905777);

function G(e) {
    let { isCollapsed: t } = e;
    return (0, i.jsx)(I.C, {
        isCollapsed: t,
        size: "md",
        className: L.t4,
    });
}

function V(e) {
    e.preventDefault(), e.stopPropagation();
}

function z(e) {
    let { channelId: t, guildId: n } = e,
        r = (function (e) {
            let { channelId: t } = e;
            return (0, l.yK)(
                [v.A, A.default, d.A, m.A],
                () =>
                    Object.values(v.A.getVoiceStatesForChannel(t))
                        .map((e) => A.default.getUser(e.userId))
                        .filter(E.Vq)
                        .sort((e, t) => {
                            var n, i, r, l;
                            return m.A.isFriend(e.id) && !m.A.isFriend(t.id)
                                ? -1
                                : !m.A.isFriend(e.id) && m.A.isFriend(t.id)
                                  ? 1
                                  : (null != (n = null == (r = d.A.getUserAffinity(t.id)) ? void 0 : r.vcProbability)
                                        ? n
                                        : 0) -
                                    (null != (i = null == (l = d.A.getUserAffinity(e.id)) ? void 0 : l.vcProbability)
                                        ? i
                                        : 0);
                        }),
                [t],
            );
        })({
            channelId: t,
        });
    return 0 === r.length
        ? null
        : (0, i.jsx)("div", {
              className: U.X0,
              children: (0, i.jsx)(s.A, {
                  users: r,
                  guildId: null != n ? n : void 0,
                  maxUsers: Math.min(r.length, 4),
                  size: o._3J.SIZE_24,
                  disableUserPopout: !0,
                  "aria-label": k.intl.string(k.t.TxqPQR),
              }),
          });
}

function F(e) {
    var t, n, s;
    let d,
        {
            channelId: m,
            listItemId: A,
            voiceStates: v,
            shouldHighlightIfRecentlyAdded: E,
            isExpanded: I = !1,
            onToggleExpanded: L,
        } = e,
        F = (0, l.bG)([h.A], () => h.A.getChannel(m), [m]),
        H = null != (t = (0, u.Ay)(null != F ? F : void 0, !0)) ? t : "???",
        Y = null != (n = null == F || null == (s = F.getGuildId) ? void 0 : s.call(F)) ? n : null,
        W = (0, l.bG)([p.A], () => {
            var e;
            return null != Y && null != (e = p.A.getGuild(Y)) ? e : null;
        }, [Y]),
        K = (0, l.bG)([y.A], () => y.A.getVoiceChannelId() === m, [m]),
        B = (0, l.bG)([f.A], () => {
            var e, t;
            return (
                null != F &&
                ((null != (e = null == (t = F.isPrivate) ? void 0 : t.call(F)) && !!e) ||
                    f.A.can(R.xBc.READ_MESSAGE_HISTORY, F))
            );
        }, [F]),
        [Z] = (0, l.bG)(
            [b.Ay],
            () => (null == F || null == Y ? [[], 0] : [b.Ay.getVoiceStatesForChannel(F), b.Ay.getVoiceStateVersion(Y)]),
            [F, Y],
            O.D,
        ),
        X = null != Z && Z.length > 0,
        J = (0, w.A2)(m),
        Q = (0, D.X)(F),
        q = r.useRef(null),
        $ = r.useCallback(() => {
            let e = q.current;
            null != e && (clearTimeout(e), (q.current = null));
        }, []);
    r.useEffect(
        () => () => {
            $();
        },
        [$],
    );
    let ee = (0, C.CD)({
            channelId: m,
            isExpanded: I,
            onToggleExpanded: L,
        }),
        et = (0, C.Wn)(),
        en = (0, C.j7)({
            channelId: m,
            guildId: Y,
            shouldStopEvent: !0,
        }),
        ei = r.useCallback(
            (e) => {
                B && en(e);
            },
            [B, en],
        ),
        er = r.useCallback(
            (e) => {
                if (X) {
                    null == L || L(m);
                    return;
                }
            },
            [m, X, L],
        ),
        el = r.useCallback(
            (e) => {
                $(), ei(e);
            },
            [$, ei],
        ),
        ea = (0, P.sZ)({
            channel: F,
            guild: W,
        }),
        { mentionCount: es } = (0, l.cf)(
            [g.Ay],
            () => ({
                mentionCount: g.Ay.getMentionCount(m),
                isMentionLowImportance: g.Ay.getIsMentionLowImportance(m),
                unread: g.Ay.hasUnread(m),
            }),
            [m],
        ),
        eo = (0, o.rdh)(o.LU0.colors.STATUS_POSITIVE),
        eu = (0, o.rdh)(o.LU0.colors.STATUS_DANGER),
        ec = (0, o.rdh)(o.LU0.colors.TEXT_STRONG),
        ed = (0, o.rdh)(o.LU0.colors.TEXT_MUTED),
        eh = K ? eo : es > 0 ? ec : ed,
        {
            Component: ep,
            events: { onMouseEnter: ef, onMouseLeave: eg },
        } = (0, a.O)(),
        em = () => {
            let e = K ? k.intl.string(k.t["6vrfgt"]) : k.intl.string(k.t.S0W8Z5),
                t = K ? eu.hex() : eo.hex(),
                n = K ? ep : o._jp;
            return (0, i.jsx)("div", {
                onDoubleClick: V,
                children: (0, i.jsx)(_.S, {
                    tooltipText: e,
                    onClick: K ? et : ee,
                    onMouseEnter: ef,
                    onMouseLeave: eg,
                    children: (0, i.jsx)(n, {
                        size: "sm",
                        color: t,
                    }),
                }),
            });
        };
    return (0, i.jsxs)("div", {
        onDoubleClick: el,
        children: [
            (0, i.jsx)(S.D, {
                listItemId: A,
                recentlyAddedTimestampMs: E ? J : null,
                onClick: er,
                onContextMenu: ea,
                avatar:
                    null != F
                        ? (0, i.jsx)(T.A, {
                              isTyping: Q,
                              guild: null != W ? W : void 0,
                              channel: F,
                              size: T.Q.SMALL_32,
                          })
                        : null,
                primaryText: (0, i.jsxs)("div", {
                    className: M.QV,
                    children: [
                        null == (d = (0, c.gU)(F, W))
                            ? null
                            : (0, i.jsx)(d, {
                                  color: eh.hex(),
                                  size: "xxs",
                                  className: M.p,
                              }),
                        (0, i.jsx)(o.Text, {
                            className: M.Xh,
                            variant: "text-sm/medium",
                            color: K ? "status-positive-text" : es > 0 ? "text-strong" : "text-muted",
                            children: H,
                        }),
                    ],
                }),
                secondaryText:
                    (null == W ? void 0 : W.name) != null
                        ? (0, i.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: W.name,
                          })
                        : null,
                rightActions: (e) => {
                    switch (!0) {
                        case !X:
                            return e
                                ? (0, i.jsxs)("div", {
                                      className: U.YT,
                                      onDoubleClick: V,
                                      children: [
                                          em(),
                                          (0, i.jsx)(j.j, {
                                              tab: x.x.VOICE,
                                              targetId: m,
                                          }),
                                      ],
                                  })
                                : null;
                        case X:
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    I
                                        ? (0, i.jsxs)("div", {
                                              className: U.YT,
                                              onDoubleClick: V,
                                              children: [
                                                  em(),
                                                  (0, i.jsx)(j.j, {
                                                      tab: x.x.VOICE,
                                                      targetId: m,
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsx)(z, {
                                              channelId: m,
                                              guildId: Y,
                                          }),
                                    (0, i.jsx)(G, {
                                        isCollapsed: !I,
                                    }),
                                ],
                            });
                        default:
                            return null;
                    }
                },
            }),
            I && Z.length > 0
                ? (0, i.jsx)("div", {
                      className: U.Nz,
                      children: Z.slice(0, 25).map((e) =>
                          (0, i.jsx)(
                              N.a,
                              {
                                  channelId: m,
                                  guildId: Y,
                                  userId: e.user.id,
                                  onDoubleClick: V,
                              },
                              e.user.id,
                          ),
                      ),
                  })
                : null,
        ],
    });
}
