"use strict";
n.d(t, { Ay: () => F, Kc: () => G, Wr: () => U }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(172218),
    l = n(934551),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    _ = n(440594),
    f = n(58149),
    h = n(20015),
    p = n(659974),
    g = n(863089),
    E = n(402216),
    A = n(609425),
    I = n(73392),
    T = n(769015),
    y = n(217356),
    S = n(559405),
    v = n(430363),
    C = n(823854),
    b = n(261056),
    N = n(790381),
    R = n(266080),
    O = n(427262),
    D = n(652215),
    L = n(806931),
    w = n(544105),
    x = n(985018),
    P = n(77615);
let M = 16,
    k = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i, onAddHangStatusClicked: a, userId: o } = e,
            l = (e) => {
                e.stopPropagation(), a?.();
            };
        return i && null == t
            ? (0, r.jsx)(d.DUT, {
                  onClick: l,
                  className: P.Pt,
                  children: (0, r.jsx)(d.nm2, { color: "currentColor", className: s()(P.Kk, P.G8, n) }),
              })
            : (0, r.jsx)(d.DUT, {
                  onClick: l,
                  className: P.Pt,
                  children: (0, r.jsx)(S.A, { userId: o, size: M, hangStatusActivity: t, className: s()(P.Kk, n) }),
              });
    },
    U = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", { className: s()(i, P.p_, n ? P.GT : P.m3), role: "group", children: t });
    };
function G(e) {
    let {
        className: t,
        mute: n,
        localMute: i,
        localVideoDisabled: a,
        serverMute: o,
        deaf: u,
        serverDeaf: f,
        collapsed: p,
        video: g,
        isStreaming: A,
        disabled: I,
        isWatching: T,
        iconClassName: y,
        embeddedApplication: S,
        otherClientSessionType: v,
        voicePlatform: C,
        application: b,
        guildId: O,
        channelId: M,
        user: U,
        disconnected: G,
        hangStatusActivity: F,
        showHangStatus: j,
        isSelf: H,
        handleHoverHangStatus: Y,
        handleHoverIcons: W,
        onAddHangStatusClicked: K,
    } = e;
    if (p || I) return null;
    let $ = [],
        z = B({ iconClassName: y, mute: n, localMute: i, serverMute: o, deaf: u, serverDeaf: f });
    g &&
        (a
            ? $.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: x.intl.string(x.t["PXMZ/+"]),
                          children: (0, r.jsx)(d.OCo, {
                              size: "md",
                              color: "currentColor",
                              className: s()(P.Kk, y),
                              colorClass: P.of,
                          }),
                      },
                      "video",
                  ),
              )
            : $.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: x.intl.string(x.t.FlNoSV),
                          children: (0, r.jsx)(d.npA, { size: "md", color: "currentColor", className: s()(P.Kk, y) }),
                      },
                      "video",
                  ),
              )),
        G &&
            $.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: x.intl.string(x.t.HFwRpk),
                        children: (0, r.jsx)(d.EpV, {
                            className: s()(P.Kk, y),
                            color: d.LU0.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != S &&
            $.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: (0, _.A)(S.name),
                        children: (0, r.jsx)(d.k9F, { size: "md", color: "currentColor", className: s()(P.Kk, y) }),
                    },
                    "activity",
                ),
            ),
        v === w.f$.XBOX || C === L.J7.XBOX
            ? $.push((0, r.jsx)(R.A, { className: s()(P.Kk, y) }, "xbox"))
            : v === w.f$.PLAYSTATION || C === L.J7.PLAYSTATION
              ? $.push((0, r.jsx)(N.A, { className: s()(P.Kk, y) }, "playstation"))
              : C === L.J7.QUEST &&
                $.push(
                    (0, r.jsx)(
                        l.VrHeadsetIcon,
                        { size: "xs", color: "currentColor", className: s()(P.Kk, y) },
                        "quest",
                    ),
                ),
        T &&
            $.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: x.intl.string(x.t["JH1SJ+"]),
                        children: (0, r.jsx)(d.bMW, { size: "xs", color: "currentColor", className: s()(P.Kk, y) }),
                    },
                    "watch",
                ),
            ),
        A && $.push((0, r.jsx)(E.Ay, { size: E.Ay.Sizes.SMALL }, "stream"));
    let q = null != b && !(0, h.n)(b, D.gfo.EMBEDDED),
        X = null == F && q;
    return 0 !== $.length || 0 !== z.length || j || X
        ? (0, r.jsxs)("div", {
              className: s()(P.Pt, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: P.RL,
                      onMouseEnter: () => W?.(!0),
                      onMouseLeave: () => W?.(!1),
                      children: [z, $],
                  }),
                  j || X
                      ? (0, r.jsx)("div", {
                            className: P.RL,
                            onMouseEnter: () => Y?.(!0),
                            onMouseLeave: () => Y?.(!1),
                            children: X
                                ? (0, r.jsx)(
                                      V,
                                      { application: b, iconClassName: y, guildId: O, channelId: M, userId: U.id },
                                      `${U.id}-game`,
                                  )
                                : (0, r.jsx)(k, {
                                      userId: U.id,
                                      hangStatusActivity: F,
                                      iconClassName: y,
                                      isSelf: H,
                                      onAddHangStatusClicked: K,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
let F = function (e) {
    let {
            avatarContainerClass: t = P.H,
            userNameClassName: n = P.gr,
            size: i = D.OSZ.SMALL,
            selected: a = !1,
            disabled: o = !1,
            isOverlay: l = !1,
            ref: _,
            ...f
        } = e,
        {
            onClick: h,
            onKeyDown: E,
            onDoubleClick: T,
            onContextMenu: S,
            onMouseLeave: N,
            onMouseDown: R,
            priority: L,
            speaking: w = !1,
            latched: M,
            collapsed: k,
            mute: U,
            serverMute: F,
            guildId: V,
            nick: B,
            isGuest: j,
            flipped: H,
            className: Y,
            overlap: W,
            "aria-label": K,
            ringing: $,
            user: z,
        } = f,
        q = (0, A.A)({ userId: z.id, guildId: V }),
        X = (0, I.a)({ displayNameStyles: q }),
        Z = (0, g.A)(z.id),
        Q = (0, p.v)({ isSpeaking: w, isLatched: M && !U && !F, voiceDb: Z }),
        J = (0, u.bG)([C.A], () => C.A.getProgressForUserId(z.id), [z.id]),
        ee = (0, v.Uk)("VoiceUser") && null != J,
        et = (e) => {
            h?.(e, z);
        },
        en = (e) => {
            T?.(e, z);
        },
        er = (e) => {
            S?.(e, z);
        },
        ei = (e) => {
            N?.(e, z);
        },
        ea = (e) => {
            R?.(e, z);
        };
    function es() {
        return L && !k
            ? (0, r.jsx)(c.m, {
                  text: x.intl.string(x.t.BVK71i),
                  children: (0, r.jsx)("div", { className: s()(P.G, { [P.g4]: !U && !F && w }) }),
              })
            : null;
    }
    function eo() {
        let e = s()(P.my, { [P.Jb]: i === D.OSZ.LARGE, [P.dT]: i === D.OSZ.SMALL }),
            n = { backgroundImage: `url(${z.getAvatarURL(V, i === D.OSZ.LARGE ? 38 : 24)})`, ...Q };
        return ee
            ? (0, r.jsx)(b.A, {
                  userId: z.id,
                  wrapperClassName: t,
                  children: (0, r.jsx)("div", { className: e, style: n }),
              })
            : (0, r.jsx)("div", { className: s()(t, e), style: n });
    }
    function el() {
        let e = (0, r.jsxs)("div", {
                className: s()(n, P.Xh, X, { [P.Pi]: !U && !F && w }),
                children: [
                    B ?? O.Ay.getName(z),
                    j ? (0, r.jsxs)("span", { className: P.IW, children: ["\xa0", x.intl.string(x.t["pFO/Ph"])] }) : "",
                ],
            }),
            t = {
                primaryGuild: z.primaryGuild,
                userId: z.id,
                contextGuildId: V,
                isOverlay: l,
                disableTooltip: !0,
                className: s()(P.fc, l && P.zW),
                profileViewedAnalytics: { source: l ? D.JJy.OVERLAY : D.ThZ.VOICE_PANEL },
            };
        return !k || l ? (0, r.jsx)(y.A, { ...t, children: e }) : null;
    }
    function eu() {
        return (0, r.jsx)(G, { disabled: o, ...f });
    }
    return (0, r.jsx)(d.sqX, {
        ref: _,
        className: s()(Y, {
            [P.q7]: !0,
            [P.EF]: W,
            [P.wH]: a,
            [P.vk]: null != h,
            [P.L9]: i === D.OSZ.SMALL,
            [P.p8]: i === D.OSZ.LARGE,
            [P.r9]: !a && o,
            [P.DF]: $,
        }),
        onClick: et,
        onDoubleClick: en,
        onContextMenu: er,
        onMouseLeave: ei,
        onMouseDown: ea,
        onKeyDown: E,
        "aria-label": K ?? B ?? z.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", { className: s()(P.Qs, { [P.zq]: H }), children: [es(), eo(), el(), eu()] }),
    });
};
function V(e) {
    let { application: t, iconClassName: n, guildId: a, channelId: l, userId: u } = e,
        [d, _] = i.useState(!1),
        h = (0, o.K)((e) => _(e));
    i.useEffect(() => {
        d &&
            f.Ay.trackWithMetadata(D.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: l,
                guild_id: a,
                user_id: u,
            });
    }, [t.id, l, a, u, d]);
    let p = () => {
        f.Ay.trackWithMetadata(D.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: l,
            guild_id: a,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(c.m, {
        text: x.intl.formatToPlainString(x.t.Sq9xJ7, { game: t.name }),
        "aria-label": x.intl.formatToPlainString(x.t.Sq9xJ7, { game: t.name }),
        children: (0, r.jsx)(T.A, {
            ref: h,
            className: s()(P.Kk, P.Gt, n),
            game: t,
            size: T.M.XSMALL,
            onMouseEnter: p,
        }),
    });
}
function B(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: o, serverDeaf: l } = e,
        u = [];
    if (n) {
        let e,
            n = () => (i ? x.intl.string(x.t.Q8Uzof) : a ? x.intl.string(x.t.uLddbQ) : x.intl.string(x.t.tjtv3P));
        e = a || i ? d.O1p : d.z0P;
        let o = (0, r.jsx)(e, { className: s()(P.Kk, t, { [P.DU]: a }), color: "currentColor" });
        u.push((0, r.jsx)(c.m, { text: n(), children: o }, "mute"));
    }
    if (l || o) {
        let e = l ? d.TJE : d.cQT,
            n = (0, r.jsx)(e, { className: s()(P.Kk, t, { [P.DU]: l }), color: "currentColor" });
        u.push(
            (0, r.jsx)(c.m, { text: l ? x.intl.string(x.t.btxSdB) : x.intl.string(x.t.NjmiOL), children: n }, "deaf"),
        );
    }
    return u;
}
