"use strict";
n.d(t, { Ay: () => U, Kc: () => k, Wr: () => P }), n(321073);
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
    m = n(863089),
    E = n(85448),
    g = n(556525),
    A = n(402216),
    I = n(609425),
    T = n(73392),
    S = n(769015),
    y = n(217356),
    v = n(430363),
    N = n(823854),
    C = n(261056),
    R = n(790381),
    O = n(266080),
    b = n(427262),
    D = n(652215),
    L = n(806931),
    w = n(544105),
    M = n(985018),
    x = n(805098);
let P = (e) => {
    let { children: t, collapsed: n = !1, className: i } = e;
    return (0, r.jsx)("div", { className: a()(i, x.p_, n ? x.GT : x.m3), role: "group", children: t });
};
function k(e) {
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
        application: b,
        guildId: P,
        channelId: k,
        user: U,
        disconnected: V,
        isHovered: B,
    } = e;
    if (m || I) return null;
    let H = [],
        j = F({ iconClassName: y, mute: n, localMute: i, serverMute: o, deaf: u, serverDeaf: p });
    E &&
        (s
            ? H.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: M.intl.string(M.t["PXMZ/+"]),
                          children: (0, r.jsx)(d.OCo, {
                              size: "md",
                              color: "currentColor",
                              className: a()(x.Kk, y),
                              colorClass: x.of,
                          }),
                      },
                      "video",
                  ),
              )
            : H.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: M.intl.string(M.t.FlNoSV),
                          children: (0, r.jsx)(d.npA, { size: "md", color: "currentColor", className: a()(x.Kk, y) }),
                      },
                      "video",
                  ),
              )),
        V &&
            H.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: M.intl.string(M.t.HFwRpk),
                        children: (0, r.jsx)(d.EpV, {
                            className: a()(x.Kk, y),
                            color: d.LU0.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != v &&
            H.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: (0, f.A)(v.name),
                        children: (0, r.jsx)(d.k9F, { size: "md", color: "currentColor", className: a()(x.Kk, y) }),
                    },
                    "activity",
                ),
            ),
        N === w.f$.XBOX || C === L.J7.XBOX
            ? H.push((0, r.jsx)(O.A, { className: a()(x.Kk, y) }, "xbox"))
            : N === w.f$.PLAYSTATION || C === L.J7.PLAYSTATION
              ? H.push((0, r.jsx)(R.A, { className: a()(x.Kk, y) }, "playstation"))
              : C === L.J7.QUEST &&
                H.push(
                    (0, r.jsx)(
                        l.VrHeadsetIcon,
                        { size: "xs", color: "currentColor", className: a()(x.Kk, y) },
                        "quest",
                    ),
                ),
        T &&
            H.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: M.intl.string(M.t["JH1SJ+"]),
                        children: (0, r.jsx)(d.bMW, { size: "xs", color: "currentColor", className: a()(x.Kk, y) }),
                    },
                    "watch",
                ),
            ),
        g && H.push((0, r.jsx)(A.Ay, { size: A.Ay.Sizes.SMALL }, "stream")),
        S &&
            null != k &&
            B &&
            H.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: M.intl.string(M.t.ygslb0),
                        children: (0, r.jsx)(d.DUT, {
                            onClick: (e) => {
                                e.stopPropagation(), _.A.stopRinging(k, [U.id]);
                            },
                            children: (0, r.jsx)(l.PhoneHangUpIcon, {
                                size: "sm",
                                color: d.LU0.colors.ICON_FEEDBACK_CRITICAL,
                                className: a()(x.Kk, y),
                            }),
                        }),
                    },
                    "ring",
                ),
            );
    let Y = null != b && !(0, h.n)(b, D.gfo.EMBEDDED);
    return 0 !== H.length || 0 !== j.length || Y || S
        ? (0, r.jsxs)("div", {
              className: a()(x.Pt, t),
              children: [
                  (0, r.jsxs)("div", { className: x.RL, children: [j, H] }),
                  Y && !S
                      ? (0, r.jsx)("div", {
                            className: x.RL,
                            children: (0, r.jsx)(
                                G,
                                { application: b, iconClassName: y, guildId: P, channelId: k, userId: U.id },
                                `${U.id}-game`,
                            ),
                        })
                      : null,
              ],
          })
        : null;
}
let U = function (e) {
    let {
            avatarContainerClass: t = x.H,
            userNameClassName: n = x.gr,
            size: s = D.OSZ.SMALL,
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
            onContextMenu: R,
            onMouseLeave: O,
            onMouseDown: L,
            priority: w,
            speaking: P = !1,
            collapsed: U,
            mute: G,
            serverMute: F,
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
        X = (0, m.A)(z.id),
        Q = (0, g.v)({
            isSpeaking: P,
            voiceDb: X,
            ...(W ? { spreadDirection: g.O.INSET_ONLY, maxInnerSpreadRadius: 3 } : {}),
        }),
        [J, ee] = i.useState(!1),
        et = (0, u.bG)([N.A], () => N.A.getProgressForUserId(z.id), [z.id]),
        en = (0, v.Uk)("VoiceUser") && null != et,
        er = (e) => {
            h?.(e, z);
        },
        ei = (e) => {
            S?.(e, z);
        },
        es = (e) => {
            R?.(e, z);
        },
        ea = (e) => {
            O?.(e, z), ee(!1);
        },
        eo = () => {
            ee(!0);
        },
        el = (e) => {
            L?.(e, z);
        };
    function eu() {
        return w && !U
            ? (0, r.jsx)(c.m, {
                  text: M.intl.string(M.t.BVK71i),
                  children: (0, r.jsx)("div", { className: a()(x.G, { [x.g4]: !G && !F && P }) }),
              })
            : null;
    }
    function ec() {
        let e = a()(x.my, { [x.Jb]: s === D.OSZ.LARGE, [x.dT]: s === D.OSZ.SMALL, [x.DF]: $ }),
            n = { backgroundImage: `url(${z.getAvatarURL(V, s === D.OSZ.LARGE ? 38 : 24)})`, ...Q };
        return $
            ? (0, r.jsx)(E.A, {
                  size: s === D.OSZ.LARGE ? d._3J.SIZE_40 : d._3J.SIZE_24,
                  ringing: !0,
                  src: z.getAvatarURL(V, s === D.OSZ.LARGE ? 40 : 24),
                  className: a()(t, e),
              })
            : en
              ? (0, r.jsx)(C.A, {
                    userId: z.id,
                    wrapperClassName: t,
                    children: (0, r.jsx)("div", { className: e, style: n }),
                })
              : (0, r.jsx)("div", { className: a()(t, e), style: n });
    }
    function ed() {
        let e = (0, r.jsxs)("div", {
                className: a()(n, x.Xh, Z, { [x.Pi]: !G && !F && P, [x.DF]: $ }),
                children: [
                    B ?? b.Ay.getName(z),
                    H ? (0, r.jsxs)("span", { className: x.IW, children: ["\xa0", M.intl.string(M.t["pFO/Ph"])] }) : "",
                ],
            }),
            t = {
                primaryGuild: z.primaryGuild,
                userId: z.id,
                contextGuildId: V,
                isOverlay: _,
                disableTooltip: !0,
                className: a()(x.fc, _ && x.zW),
                profileViewedAnalytics: { source: _ ? D.JJy.OVERLAY : D.ThZ.VOICE_PANEL },
            };
        return !U || _ ? (0, r.jsx)(y.A, { ...t, children: e }) : null;
    }
    function e_() {
        return (0, r.jsx)(k, { disabled: l, ...p, isHovered: J });
    }
    return (0, r.jsx)(d.sqX, {
        ref: f,
        className: a()(Y, {
            [x.q7]: !0,
            [x.EF]: W,
            [x.wH]: o,
            [x.vk]: null != h,
            [x.L9]: s === D.OSZ.SMALL,
            [x.p8]: s === D.OSZ.LARGE,
            [x.r9]: !o && l,
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
        children: (0, r.jsxs)("div", { className: a()(x.Qs, { [x.zq]: j }), children: [eu(), ec(), ed(), e_()] }),
    });
};
function G(e) {
    let { application: t, iconClassName: n, guildId: s, channelId: l, userId: u } = e,
        [d, _] = i.useState(!1),
        f = (0, o.K)((e) => _(e));
    i.useEffect(() => {
        d &&
            p.Ay.trackWithMetadata(D.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: l,
                guild_id: s,
                user_id: u,
            });
    }, [t.id, l, s, u, d]);
    let h = () => {
        p.Ay.trackWithMetadata(D.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: l,
            guild_id: s,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(c.m, {
        text: M.intl.formatToPlainString(M.t.Sq9xJ7, { game: t.name }),
        "aria-label": M.intl.formatToPlainString(M.t.Sq9xJ7, { game: t.name }),
        children: (0, r.jsx)(S.A, {
            ref: f,
            className: a()(x.Kk, x.Gt, n),
            game: t,
            size: S.M.XSMALL,
            onMouseEnter: h,
        }),
    });
}
function F(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: s, deaf: o, serverDeaf: l } = e,
        u = [];
    if (n) {
        let e,
            n = () => (i ? M.intl.string(M.t.Q8Uzof) : s ? M.intl.string(M.t.uLddbQ) : M.intl.string(M.t.tjtv3P));
        e = s || i ? d.O1p : d.z0P;
        let o = (0, r.jsx)(e, { className: a()(x.Kk, t, { [x.DU]: s }), color: "currentColor" });
        u.push((0, r.jsx)(c.m, { text: n(), children: o }, "mute"));
    }
    if (l || o) {
        let e = l ? d.TJE : d.cQT,
            n = (0, r.jsx)(e, { className: a()(x.Kk, t, { [x.DU]: l }), color: "currentColor" });
        u.push(
            (0, r.jsx)(c.m, { text: l ? M.intl.string(M.t.btxSdB) : M.intl.string(M.t.NjmiOL), children: n }, "deaf"),
        );
    }
    return u;
}
