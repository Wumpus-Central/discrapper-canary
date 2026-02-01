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
    o = n(435371),
    u = n(397927),
    c = n(47167),
    d = n(713654),
    h = n(21119),
    p = n(734057),
    f = n(71393),
    g = n(576705),
    m = n(222823),
    y = n(994500),
    A = n(309010),
    v = n(287809),
    b = n(977997),
    E = n(607567),
    O = n(403362),
    x = n(996439),
    _ = n(914853),
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
                [b.A, v.default, h.A, y.A],
                () =>
                    Object.values(b.A.getVoiceStatesForChannel(t))
                        .map((e) => v.default.getUser(e.userId))
                        .filter(O.Vq)
                        .sort((e, t) => {
                            var n, i, r, l;
                            return y.A.isFriend(e.id) && !y.A.isFriend(t.id)
                                ? -1
                                : !y.A.isFriend(e.id) && y.A.isFriend(t.id)
                                  ? 1
                                  : (null != (n = null == (r = h.A.getUserAffinity(t.id)) ? void 0 : r.vcProbability)
                                        ? n
                                        : 0) -
                                    (null != (i = null == (l = h.A.getUserAffinity(e.id)) ? void 0 : l.vcProbability)
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
                  size: u._3J.SIZE_24,
                  disableUserPopout: !0,
                  "aria-label": k.intl.string(k.t.TxqPQR),
              }),
          });
}

function F(e) {
    var t, n, s;
    let h,
        {
            channelId: y,
            listItemId: v,
            voiceStates: b,
            shouldHighlightIfRecentlyAdded: O,
            isExpanded: I = !1,
            onToggleExpanded: L,
        } = e,
        F = (0, l.bG)([p.A], () => p.A.getChannel(y), [y]),
        H = null != (t = (0, c.Ay)(null != F ? F : void 0, !0)) ? t : "???",
        Y = null != (n = null == F || null == (s = F.getGuildId) ? void 0 : s.call(F)) ? n : null,
        K = (0, l.bG)([f.A], () => {
            var e;
            return null != Y && null != (e = f.A.getGuild(Y)) ? e : null;
        }, [Y]),
        W = (0, l.bG)([A.A], () => A.A.getVoiceChannelId() === y, [y]),
        B = (0, l.bG)([g.A], () => {
            var e, t;
            return (
                null != F &&
                ((null != (e = null == (t = F.isPrivate) ? void 0 : t.call(F)) && !!e) ||
                    g.A.can(R.xBc.READ_MESSAGE_HISTORY, F))
            );
        }, [F]),
        [Z] = (0, l.bG)(
            [E.Ay],
            () => (null == F || null == Y ? [[], 0] : [E.Ay.getVoiceStatesForChannel(F), E.Ay.getVoiceStateVersion(Y)]),
            [F, Y],
            x.D,
        ),
        X = null != Z && Z.length > 0,
        J = (0, w.A2)(y),
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
            channelId: y,
            isExpanded: I,
            onToggleExpanded: L,
        }),
        et = (0, C.Wn)(),
        en = (0, C.j7)({
            channelId: y,
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
                    null == L || L(y);
                    return;
                }
            },
            [y, X, L],
        ),
        el = r.useCallback(
            (e) => {
                $(), ei(e);
            },
            [$, ei],
        ),
        ea = (0, P.sZ)({
            channel: F,
            guild: K,
        }),
        { mentionCount: es } = (0, l.cf)(
            [m.Ay],
            () => ({
                mentionCount: m.Ay.getMentionCount(y),
                isMentionLowImportance: m.Ay.getIsMentionLowImportance(y),
                unread: m.Ay.hasUnread(y),
            }),
            [y],
        ),
        eo = (0, u.rdh)(u.LU0.colors.STATUS_POSITIVE),
        eu = (0, u.rdh)(u.LU0.colors.STATUS_DANGER),
        ec = (0, u.rdh)(u.LU0.colors.TEXT_STRONG),
        ed = (0, u.rdh)(u.LU0.colors.TEXT_MUTED),
        eh = W ? eo : es > 0 ? ec : ed,
        {
            Component: ep,
            events: { onMouseEnter: ef, onMouseLeave: eg },
        } = (0, a.O)(),
        em = () => {
            let e = W ? k.intl.string(k.t["6vrfgt"]) : k.intl.string(k.t.S0W8Z5),
                t = W ? eu.hex() : eo.hex(),
                n = W ? ep : u._jp;
            return (0, i.jsx)(o.m_, {
                text: e,
                "aria-label": e,
                children: (0, i.jsx)("div", {
                    onDoubleClick: V,
                    onMouseEnter: ef,
                    onMouseLeave: eg,
                    children: (0, i.jsx)(u.K0, {
                        icon: () =>
                            (0, i.jsx)(n, {
                                size: "sm",
                                color: t,
                            }),
                        size: "sm",
                        "aria-label": e,
                        variant: "icon-only",
                        onClick: W ? et : ee,
                    }),
                }),
            });
        };
    return (0, i.jsxs)("div", {
        onDoubleClick: el,
        children: [
            (0, i.jsx)(S.D, {
                listItemId: v,
                recentlyAddedTimestampMs: O ? J : null,
                onClick: er,
                onContextMenu: ea,
                avatar:
                    null != F
                        ? (0, i.jsx)(T.A, {
                              isTyping: Q,
                              guild: null != K ? K : void 0,
                              channel: F,
                              size: T.Q.SMALL_32,
                          })
                        : null,
                primaryText: (0, i.jsxs)("div", {
                    className: M.QV,
                    children: [
                        null == (h = (0, d.gU)(F, K))
                            ? null
                            : (0, i.jsx)(h, {
                                  color: eh.hex(),
                                  size: "xxs",
                                  className: M.p,
                              }),
                        (0, i.jsx)(u.Text, {
                            className: M.Xh,
                            variant: "text-sm/medium",
                            color: W ? "status-positive-text" : es > 0 ? "text-strong" : "text-muted",
                            children: H,
                        }),
                    ],
                }),
                secondaryText:
                    (null == K ? void 0 : K.name) != null
                        ? (0, i.jsx)(u.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: K.name,
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
                                              tab: _.x.VOICE,
                                              targetId: y,
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
                                                      tab: _.x.VOICE,
                                                      targetId: y,
                                                  }),
                                              ],
                                          })
                                        : (0, i.jsx)(z, {
                                              channelId: y,
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
                                  channelId: y,
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
