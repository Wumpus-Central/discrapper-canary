"use strict";
n.d(t, { Ay: () => G, Kc: () => U, Wr: () => k }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(172218),
    l = n(934551),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    _ = n(440594),
    f = n(58149),
    p = n(20015),
    h = n(659974),
    m = n(863089),
    E = n(402216),
    g = n(609425),
    A = n(73392),
    I = n(769015),
    T = n(217356),
    S = n(559405),
    y = n(430363),
    v = n(823854),
    N = n(261056),
    C = n(790381),
    b = n(266080),
    R = n(427262),
    O = n(652215),
    D = n(806931),
    L = n(544105),
    w = n(985018),
    x = n(77615);
let M = 16,
    P = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i, onAddHangStatusClicked: s, userId: o } = e,
            l = (e) => {
                e.stopPropagation(), s?.();
            };
        return i && null == t
            ? (0, r.jsx)(d.DUT, {
                  onClick: l,
                  className: x.Pt,
                  children: (0, r.jsx)(d.nm2, { color: "currentColor", className: a()(x.Kk, x.G8, n) }),
              })
            : (0, r.jsx)(d.DUT, {
                  onClick: l,
                  className: x.Pt,
                  children: (0, r.jsx)(S.A, { userId: o, size: M, hangStatusActivity: t, className: a()(x.Kk, n) }),
              });
    },
    k = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", { className: a()(i, x.p_, n ? x.GT : x.m3), role: "group", children: t });
    };
function U(e) {
    let {
        className: t,
        mute: n,
        localMute: i,
        localVideoDisabled: s,
        serverMute: o,
        deaf: u,
        serverDeaf: f,
        collapsed: h,
        video: m,
        isStreaming: g,
        disabled: A,
        isWatching: I,
        iconClassName: T,
        embeddedApplication: S,
        otherClientSessionType: y,
        voicePlatform: v,
        application: N,
        guildId: R,
        channelId: M,
        user: k,
        disconnected: U,
        hangStatusActivity: G,
        showHangStatus: B,
        isSelf: H,
        handleHoverHangStatus: j,
        handleHoverIcons: Y,
        onAddHangStatusClicked: W,
    } = e;
    if (h || A) return null;
    let K = [],
        z = V({ iconClassName: T, mute: n, localMute: i, serverMute: o, deaf: u, serverDeaf: f });
    m &&
        (s
            ? K.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: w.intl.string(w.t["PXMZ/+"]),
                          children: (0, r.jsx)(d.OCo, {
                              size: "md",
                              color: "currentColor",
                              className: a()(x.Kk, T),
                              colorClass: x.of,
                          }),
                      },
                      "video",
                  ),
              )
            : K.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: w.intl.string(w.t.FlNoSV),
                          children: (0, r.jsx)(d.npA, { size: "md", color: "currentColor", className: a()(x.Kk, T) }),
                      },
                      "video",
                  ),
              )),
        U &&
            K.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: w.intl.string(w.t.HFwRpk),
                        children: (0, r.jsx)(d.EpV, {
                            className: a()(x.Kk, T),
                            color: d.LU0.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != S &&
            K.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: (0, _.A)(S.name),
                        children: (0, r.jsx)(d.k9F, { size: "md", color: "currentColor", className: a()(x.Kk, T) }),
                    },
                    "activity",
                ),
            ),
        y === L.f$.XBOX || v === D.J7.XBOX
            ? K.push((0, r.jsx)(b.A, { className: a()(x.Kk, T) }, "xbox"))
            : y === L.f$.PLAYSTATION || v === D.J7.PLAYSTATION
              ? K.push((0, r.jsx)(C.A, { className: a()(x.Kk, T) }, "playstation"))
              : v === D.J7.QUEST &&
                K.push(
                    (0, r.jsx)(
                        l.VrHeadsetIcon,
                        { size: "xs", color: "currentColor", className: a()(x.Kk, T) },
                        "quest",
                    ),
                ),
        I &&
            K.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: w.intl.string(w.t["JH1SJ+"]),
                        children: (0, r.jsx)(d.bMW, { size: "xs", color: "currentColor", className: a()(x.Kk, T) }),
                    },
                    "watch",
                ),
            ),
        g && K.push((0, r.jsx)(E.Ay, { size: E.Ay.Sizes.SMALL }, "stream"));
    let $ = null != N && !(0, p.n)(N, O.gfo.EMBEDDED),
        q = null == G && $;
    return 0 !== K.length || 0 !== z.length || B || q
        ? (0, r.jsxs)("div", {
              className: a()(x.Pt, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: x.RL,
                      onMouseEnter: () => Y?.(!0),
                      onMouseLeave: () => Y?.(!1),
                      children: [z, K],
                  }),
                  B || q
                      ? (0, r.jsx)("div", {
                            className: x.RL,
                            onMouseEnter: () => j?.(!0),
                            onMouseLeave: () => j?.(!1),
                            children: q
                                ? (0, r.jsx)(
                                      F,
                                      { application: N, iconClassName: T, guildId: R, channelId: M, userId: k.id },
                                      `${k.id}-game`,
                                  )
                                : (0, r.jsx)(P, {
                                      userId: k.id,
                                      hangStatusActivity: G,
                                      iconClassName: T,
                                      isSelf: H,
                                      onAddHangStatusClicked: W,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
let G = function (e) {
    let {
            avatarContainerClass: t = x.H,
            userNameClassName: n = x.gr,
            size: i = O.OSZ.SMALL,
            selected: s = !1,
            disabled: o = !1,
            isOverlay: l = !1,
            ref: _,
            ...f
        } = e,
        {
            onClick: p,
            onKeyDown: E,
            onDoubleClick: I,
            onContextMenu: S,
            onMouseLeave: C,
            onMouseDown: b,
            priority: D,
            speaking: L = !1,
            collapsed: M,
            mute: P,
            serverMute: k,
            guildId: G,
            nick: F,
            isGuest: V,
            flipped: B,
            className: H,
            overlap: j,
            "aria-label": Y,
            ringing: W,
            user: K,
        } = f,
        z = (0, g.A)({ userId: K.id, guildId: G }),
        $ = (0, A.a)({ displayNameStyles: z }),
        q = (0, m.A)(K.id),
        Z = (0, h.v)({ isSpeaking: L, voiceDb: q }),
        X = (0, u.bG)([v.A], () => v.A.getProgressForUserId(K.id), [K.id]),
        Q = (0, y.Uk)("VoiceUser") && null != X,
        J = (e) => {
            p?.(e, K);
        },
        ee = (e) => {
            I?.(e, K);
        },
        et = (e) => {
            S?.(e, K);
        },
        en = (e) => {
            C?.(e, K);
        },
        er = (e) => {
            b?.(e, K);
        };
    function ei() {
        return D && !M
            ? (0, r.jsx)(c.m, {
                  text: w.intl.string(w.t.BVK71i),
                  children: (0, r.jsx)("div", { className: a()(x.G, { [x.g4]: !P && !k && L }) }),
              })
            : null;
    }
    function es() {
        let e = a()(x.my, { [x.Jb]: i === O.OSZ.LARGE, [x.dT]: i === O.OSZ.SMALL }),
            n = { backgroundImage: `url(${K.getAvatarURL(G, i === O.OSZ.LARGE ? 38 : 24)})`, ...Z };
        return Q
            ? (0, r.jsx)(N.A, {
                  userId: K.id,
                  wrapperClassName: t,
                  children: (0, r.jsx)("div", { className: e, style: n }),
              })
            : (0, r.jsx)("div", { className: a()(t, e), style: n });
    }
    function ea() {
        let e = (0, r.jsxs)("div", {
                className: a()(n, x.Xh, $, { [x.Pi]: !P && !k && L }),
                children: [
                    F ?? R.Ay.getName(K),
                    V ? (0, r.jsxs)("span", { className: x.IW, children: ["\xa0", w.intl.string(w.t["pFO/Ph"])] }) : "",
                ],
            }),
            t = {
                primaryGuild: K.primaryGuild,
                userId: K.id,
                contextGuildId: G,
                isOverlay: l,
                disableTooltip: !0,
                className: a()(x.fc, l && x.zW),
                profileViewedAnalytics: { source: l ? O.JJy.OVERLAY : O.ThZ.VOICE_PANEL },
            };
        return !M || l ? (0, r.jsx)(T.A, { ...t, children: e }) : null;
    }
    function eo() {
        return (0, r.jsx)(U, { disabled: o, ...f });
    }
    return (0, r.jsx)(d.sqX, {
        ref: _,
        className: a()(H, {
            [x.q7]: !0,
            [x.EF]: j,
            [x.wH]: s,
            [x.vk]: null != p,
            [x.L9]: i === O.OSZ.SMALL,
            [x.p8]: i === O.OSZ.LARGE,
            [x.r9]: !s && o,
            [x.DF]: W,
        }),
        onClick: J,
        onDoubleClick: ee,
        onContextMenu: et,
        onMouseLeave: en,
        onMouseDown: er,
        onKeyDown: E,
        "aria-label": Y ?? F ?? K.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", { className: a()(x.Qs, { [x.zq]: B }), children: [ei(), es(), ea(), eo()] }),
    });
};
function F(e) {
    let { application: t, iconClassName: n, guildId: s, channelId: l, userId: u } = e,
        [d, _] = i.useState(!1),
        p = (0, o.K)((e) => _(e));
    i.useEffect(() => {
        d &&
            f.Ay.trackWithMetadata(O.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: l,
                guild_id: s,
                user_id: u,
            });
    }, [t.id, l, s, u, d]);
    let h = () => {
        f.Ay.trackWithMetadata(O.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: l,
            guild_id: s,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(c.m, {
        text: w.intl.formatToPlainString(w.t.Sq9xJ7, { game: t.name }),
        "aria-label": w.intl.formatToPlainString(w.t.Sq9xJ7, { game: t.name }),
        children: (0, r.jsx)(I.A, {
            ref: p,
            className: a()(x.Kk, x.Gt, n),
            game: t,
            size: I.M.XSMALL,
            onMouseEnter: h,
        }),
    });
}
function V(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: s, deaf: o, serverDeaf: l } = e,
        u = [];
    if (n) {
        let e,
            n = () => (i ? w.intl.string(w.t.Q8Uzof) : s ? w.intl.string(w.t.uLddbQ) : w.intl.string(w.t.tjtv3P));
        e = s || i ? d.O1p : d.z0P;
        let o = (0, r.jsx)(e, { className: a()(x.Kk, t, { [x.DU]: s }), color: "currentColor" });
        u.push((0, r.jsx)(c.m, { text: n(), children: o }, "mute"));
    }
    if (l || o) {
        let e = l ? d.TJE : d.cQT,
            n = (0, r.jsx)(e, { className: a()(x.Kk, t, { [x.DU]: l }), color: "currentColor" });
        u.push(
            (0, r.jsx)(c.m, { text: l ? w.intl.string(w.t.btxSdB) : w.intl.string(w.t.NjmiOL), children: n }, "deaf"),
        );
    }
    return u;
}
