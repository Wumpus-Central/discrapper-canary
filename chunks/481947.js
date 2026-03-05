"use strict";
n.d(t, { Ay: () => V, Kc: () => F, Wr: () => G }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(172218),
    l = n(934551),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    _ = n(387755),
    f = n(440594),
    p = n(58149),
    h = n(20015),
    m = n(659974),
    E = n(863089),
    g = n(85448),
    A = n(402216),
    I = n(609425),
    T = n(73392),
    S = n(769015),
    y = n(217356),
    v = n(559405),
    N = n(430363),
    C = n(823854),
    R = n(261056),
    O = n(790381),
    b = n(266080),
    D = n(427262),
    L = n(652215),
    w = n(806931),
    M = n(544105),
    x = n(985018),
    P = n(77615);
let k = 16,
    U = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i, onAddHangStatusClicked: s, userId: o } = e,
            l = (e) => {
                e.stopPropagation(), s?.();
            };
        return i && null == t
            ? (0, r.jsx)(d.DUT, {
                  onClick: l,
                  className: P.Pt,
                  children: (0, r.jsx)(d.nm2, { color: "currentColor", className: a()(P.Kk, P.G8, n) }),
              })
            : (0, r.jsx)(d.DUT, {
                  onClick: l,
                  className: P.Pt,
                  children: (0, r.jsx)(v.A, { userId: o, size: k, hangStatusActivity: t, className: a()(P.Kk, n) }),
              });
    },
    G = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", { className: a()(i, P.p_, n ? P.GT : P.m3), role: "group", children: t });
    };
function F(e) {
    let {
        className: t,
        mute: n,
        localMute: i,
        localVideoDisabled: s,
        serverMute: o,
        deaf: u,
        serverDeaf: p,
        collapsed: m,
        video: E,
        isStreaming: g,
        disabled: I,
        isWatching: T,
        ringing: S,
        iconClassName: y,
        embeddedApplication: v,
        otherClientSessionType: N,
        voicePlatform: C,
        application: R,
        guildId: D,
        channelId: k,
        user: G,
        disconnected: F,
        hangStatusActivity: V,
        showHangStatus: j,
        isSelf: Y,
        isHovered: W,
        handleHoverHangStatus: K,
        handleHoverIcons: $,
        onAddHangStatusClicked: z,
    } = e;
    if (m || I) return null;
    let q = [],
        Z = H({ iconClassName: y, mute: n, localMute: i, serverMute: o, deaf: u, serverDeaf: p });
    E &&
        (s
            ? q.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: x.intl.string(x.t["PXMZ/+"]),
                          children: (0, r.jsx)(d.OCo, {
                              size: "md",
                              color: "currentColor",
                              className: a()(P.Kk, y),
                              colorClass: P.of,
                          }),
                      },
                      "video",
                  ),
              )
            : q.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: x.intl.string(x.t.FlNoSV),
                          children: (0, r.jsx)(d.npA, { size: "md", color: "currentColor", className: a()(P.Kk, y) }),
                      },
                      "video",
                  ),
              )),
        F &&
            q.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: x.intl.string(x.t.HFwRpk),
                        children: (0, r.jsx)(d.EpV, {
                            className: a()(P.Kk, y),
                            color: d.LU0.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != v &&
            q.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: (0, f.A)(v.name),
                        children: (0, r.jsx)(d.k9F, { size: "md", color: "currentColor", className: a()(P.Kk, y) }),
                    },
                    "activity",
                ),
            ),
        N === M.f$.XBOX || C === w.J7.XBOX
            ? q.push((0, r.jsx)(b.A, { className: a()(P.Kk, y) }, "xbox"))
            : N === M.f$.PLAYSTATION || C === w.J7.PLAYSTATION
              ? q.push((0, r.jsx)(O.A, { className: a()(P.Kk, y) }, "playstation"))
              : C === w.J7.QUEST &&
                q.push(
                    (0, r.jsx)(
                        l.VrHeadsetIcon,
                        { size: "xs", color: "currentColor", className: a()(P.Kk, y) },
                        "quest",
                    ),
                ),
        T &&
            q.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: x.intl.string(x.t["JH1SJ+"]),
                        children: (0, r.jsx)(d.bMW, { size: "xs", color: "currentColor", className: a()(P.Kk, y) }),
                    },
                    "watch",
                ),
            ),
        g && q.push((0, r.jsx)(A.Ay, { size: A.Ay.Sizes.SMALL }, "stream")),
        S &&
            null != k &&
            W &&
            q.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: x.intl.string(x.t.ygslb0),
                        children: (0, r.jsx)(d.DUT, {
                            onClick: (e) => {
                                e.stopPropagation(), _.A.stopRinging(k, [G.id]);
                            },
                            children: (0, r.jsx)(l.PhoneHangUpIcon, {
                                size: "sm",
                                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL,
                                className: a()(P.Kk, y),
                            }),
                        }),
                    },
                    "ring",
                ),
            );
    let X = null != R && !(0, h.n)(R, L.gfo.EMBEDDED),
        Q = null == V && X;
    return 0 !== q.length || 0 !== Z.length || j || Q || S
        ? (0, r.jsxs)("div", {
              className: a()(P.Pt, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: P.RL,
                      onMouseEnter: () => $?.(!0),
                      onMouseLeave: () => $?.(!1),
                      children: [Z, q],
                  }),
                  (j || Q) && !S
                      ? (0, r.jsx)("div", {
                            className: P.RL,
                            onMouseEnter: () => K?.(!0),
                            onMouseLeave: () => K?.(!1),
                            children: Q
                                ? (0, r.jsx)(
                                      B,
                                      { application: R, iconClassName: y, guildId: D, channelId: k, userId: G.id },
                                      `${G.id}-game`,
                                  )
                                : (0, r.jsx)(U, {
                                      userId: G.id,
                                      hangStatusActivity: V,
                                      iconClassName: y,
                                      isSelf: Y,
                                      onAddHangStatusClicked: z,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
let V = function (e) {
    let {
            avatarContainerClass: t = P.H,
            userNameClassName: n = P.gr,
            size: s = L.OSZ.SMALL,
            selected: o = !1,
            disabled: l = !1,
            isOverlay: _ = !1,
            ref: f,
            ...p
        } = e,
        {
            onClick: h,
            onKeyDown: A,
            onDoubleClick: S,
            onContextMenu: v,
            onMouseLeave: O,
            onMouseDown: b,
            priority: w,
            speaking: M = !1,
            collapsed: k,
            mute: U,
            serverMute: G,
            guildId: V,
            nick: B,
            isGuest: H,
            flipped: j,
            className: Y,
            overlap: W,
            "aria-label": K,
            ringing: $,
            user: z,
        } = p,
        q = (0, I.A)({ userId: z.id, guildId: V }),
        Z = (0, T.a)({ displayNameStyles: q }),
        X = (0, E.A)(z.id),
        Q = (0, m.v)({
            isSpeaking: M,
            voiceDb: X,
            ...(W ? { spreadDirection: m.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [J, ee] = i.useState(!1),
        et = (0, u.bG)([C.A], () => C.A.getProgressForUserId(z.id), [z.id]),
        en = (0, N.Uk)("VoiceUser") && null != et,
        er = (e) => {
            h?.(e, z);
        },
        ei = (e) => {
            S?.(e, z);
        },
        es = (e) => {
            v?.(e, z);
        },
        ea = (e) => {
            O?.(e, z), ee(!1);
        },
        eo = () => {
            ee(!0);
        },
        el = (e) => {
            b?.(e, z);
        };
    function eu() {
        return w && !k
            ? (0, r.jsx)(c.m, {
                  text: x.intl.string(x.t.BVK71i),
                  children: (0, r.jsx)("div", { className: a()(P.G, { [P.g4]: !U && !G && M }) }),
              })
            : null;
    }
    function ec() {
        let e = a()(P.my, { [P.Jb]: s === L.OSZ.LARGE, [P.dT]: s === L.OSZ.SMALL, [P.DF]: $ }),
            n = { backgroundImage: `url(${z.getAvatarURL(V, s === L.OSZ.LARGE ? 38 : 24)})`, ...Q };
        return $
            ? (0, r.jsx)(g.A, {
                  size: s === L.OSZ.LARGE ? d._3J.SIZE_40 : d._3J.SIZE_24,
                  ringing: !0,
                  src: z.getAvatarURL(V, s === L.OSZ.LARGE ? 40 : 24),
                  className: a()(t, e),
              })
            : en
              ? (0, r.jsx)(R.A, {
                    userId: z.id,
                    wrapperClassName: t,
                    children: (0, r.jsx)("div", { className: e, style: n }),
                })
              : (0, r.jsx)("div", { className: a()(t, e), style: n });
    }
    function ed() {
        let e = (0, r.jsxs)("div", {
                className: a()(n, P.Xh, Z, { [P.Pi]: !U && !G && M, [P.DF]: $ }),
                children: [
                    B ?? D.Ay.getName(z),
                    H ? (0, r.jsxs)("span", { className: P.IW, children: ["\xa0", x.intl.string(x.t["pFO/Ph"])] }) : "",
                ],
            }),
            t = {
                primaryGuild: z.primaryGuild,
                userId: z.id,
                contextGuildId: V,
                isOverlay: _,
                disableTooltip: !0,
                className: a()(P.fc, _ && P.zW),
                profileViewedAnalytics: { source: _ ? L.JJy.OVERLAY : L.ThZ.VOICE_PANEL },
            };
        return !k || _ ? (0, r.jsx)(y.A, { ...t, children: e }) : null;
    }
    function e_() {
        return (0, r.jsx)(F, { disabled: l, ...p, isHovered: J });
    }
    return (0, r.jsx)(d.sqX, {
        ref: f,
        className: a()(Y, {
            [P.q7]: !0,
            [P.EF]: W,
            [P.wH]: o,
            [P.vk]: null != h,
            [P.L9]: s === L.OSZ.SMALL,
            [P.p8]: s === L.OSZ.LARGE,
            [P.r9]: !o && l,
        }),
        onClick: er,
        onDoubleClick: ei,
        onContextMenu: es,
        onMouseLeave: ea,
        onMouseDown: el,
        onMouseEnter: eo,
        onKeyDown: A,
        "aria-label": K ?? B ?? z.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", { className: a()(P.Qs, { [P.zq]: j }), children: [eu(), ec(), ed(), e_()] }),
    });
};
function B(e) {
    let { application: t, iconClassName: n, guildId: s, channelId: l, userId: u } = e,
        [d, _] = i.useState(!1),
        f = (0, o.K)((e) => _(e));
    i.useEffect(() => {
        d &&
            p.Ay.trackWithMetadata(L.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: l,
                guild_id: s,
                user_id: u,
            });
    }, [t.id, l, s, u, d]);
    let h = () => {
        p.Ay.trackWithMetadata(L.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: l,
            guild_id: s,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(c.m, {
        text: x.intl.formatToPlainString(x.t.Sq9xJ7, { game: t.name }),
        "aria-label": x.intl.formatToPlainString(x.t.Sq9xJ7, { game: t.name }),
        children: (0, r.jsx)(S.A, {
            ref: f,
            className: a()(P.Kk, P.Gt, n),
            game: t,
            size: S.M.XSMALL,
            onMouseEnter: h,
        }),
    });
}
function H(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: s, deaf: o, serverDeaf: l } = e,
        u = [];
    if (n) {
        let e,
            n = () => (i ? x.intl.string(x.t.Q8Uzof) : s ? x.intl.string(x.t.uLddbQ) : x.intl.string(x.t.tjtv3P));
        e = s || i ? d.O1p : d.z0P;
        let o = (0, r.jsx)(e, { className: a()(P.Kk, t, { [P.DU]: s }), color: "currentColor" });
        u.push((0, r.jsx)(c.m, { text: n(), children: o }, "mute"));
    }
    if (l || o) {
        let e = l ? d.TJE : d.cQT,
            n = (0, r.jsx)(e, { className: a()(P.Kk, t, { [P.DU]: l }), color: "currentColor" });
        u.push(
            (0, r.jsx)(c.m, { text: l ? x.intl.string(x.t.btxSdB) : x.intl.string(x.t.NjmiOL), children: n }, "deaf"),
        );
    }
    return u;
}
