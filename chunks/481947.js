"use strict";
n.d(t, { Ay: () => F, Kc: () => G, Wr: () => U }), n(321073);
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
    E = n(85448),
    g = n(402216),
    A = n(609425),
    I = n(73392),
    T = n(769015),
    S = n(217356),
    y = n(559405),
    v = n(430363),
    N = n(823854),
    C = n(261056),
    R = n(790381),
    O = n(266080),
    b = n(427262),
    D = n(652215),
    L = n(806931),
    w = n(544105),
    x = n(985018),
    M = n(77615);
let P = 16,
    k = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i, onAddHangStatusClicked: s, userId: o } = e,
            l = (e) => {
                e.stopPropagation(), s?.();
            };
        return i && null == t
            ? (0, r.jsx)(d.DUT, {
                  onClick: l,
                  className: M.Pt,
                  children: (0, r.jsx)(d.nm2, { color: "currentColor", className: a()(M.Kk, M.G8, n) }),
              })
            : (0, r.jsx)(d.DUT, {
                  onClick: l,
                  className: M.Pt,
                  children: (0, r.jsx)(y.A, { userId: o, size: P, hangStatusActivity: t, className: a()(M.Kk, n) }),
              });
    },
    U = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", { className: a()(i, M.p_, n ? M.GT : M.m3), role: "group", children: t });
    };
function G(e) {
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
        isStreaming: E,
        disabled: A,
        isWatching: I,
        iconClassName: T,
        embeddedApplication: S,
        otherClientSessionType: y,
        voicePlatform: v,
        application: N,
        guildId: C,
        channelId: b,
        user: P,
        disconnected: U,
        hangStatusActivity: G,
        showHangStatus: F,
        isSelf: H,
        handleHoverHangStatus: j,
        handleHoverIcons: Y,
        onAddHangStatusClicked: W,
    } = e;
    if (h || A) return null;
    let K = [],
        $ = B({ iconClassName: T, mute: n, localMute: i, serverMute: o, deaf: u, serverDeaf: f });
    m &&
        (s
            ? K.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: x.intl.string(x.t["PXMZ/+"]),
                          children: (0, r.jsx)(d.OCo, {
                              size: "md",
                              color: "currentColor",
                              className: a()(M.Kk, T),
                              colorClass: M.of,
                          }),
                      },
                      "video",
                  ),
              )
            : K.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: x.intl.string(x.t.FlNoSV),
                          children: (0, r.jsx)(d.npA, { size: "md", color: "currentColor", className: a()(M.Kk, T) }),
                      },
                      "video",
                  ),
              )),
        U &&
            K.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: x.intl.string(x.t.HFwRpk),
                        children: (0, r.jsx)(d.EpV, {
                            className: a()(M.Kk, T),
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
                        children: (0, r.jsx)(d.k9F, { size: "md", color: "currentColor", className: a()(M.Kk, T) }),
                    },
                    "activity",
                ),
            ),
        y === w.f$.XBOX || v === L.J7.XBOX
            ? K.push((0, r.jsx)(O.A, { className: a()(M.Kk, T) }, "xbox"))
            : y === w.f$.PLAYSTATION || v === L.J7.PLAYSTATION
              ? K.push((0, r.jsx)(R.A, { className: a()(M.Kk, T) }, "playstation"))
              : v === L.J7.QUEST &&
                K.push(
                    (0, r.jsx)(
                        l.VrHeadsetIcon,
                        { size: "xs", color: "currentColor", className: a()(M.Kk, T) },
                        "quest",
                    ),
                ),
        I &&
            K.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: x.intl.string(x.t["JH1SJ+"]),
                        children: (0, r.jsx)(d.bMW, { size: "xs", color: "currentColor", className: a()(M.Kk, T) }),
                    },
                    "watch",
                ),
            ),
        E && K.push((0, r.jsx)(g.Ay, { size: g.Ay.Sizes.SMALL }, "stream"));
    let z = null != N && !(0, p.n)(N, D.gfo.EMBEDDED),
        q = null == G && z;
    return 0 !== K.length || 0 !== $.length || F || q
        ? (0, r.jsxs)("div", {
              className: a()(M.Pt, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: M.RL,
                      onMouseEnter: () => Y?.(!0),
                      onMouseLeave: () => Y?.(!1),
                      children: [$, K],
                  }),
                  F || q
                      ? (0, r.jsx)("div", {
                            className: M.RL,
                            onMouseEnter: () => j?.(!0),
                            onMouseLeave: () => j?.(!1),
                            children: q
                                ? (0, r.jsx)(
                                      V,
                                      { application: N, iconClassName: T, guildId: C, channelId: b, userId: P.id },
                                      `${P.id}-game`,
                                  )
                                : (0, r.jsx)(k, {
                                      userId: P.id,
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
let F = function (e) {
    let {
            avatarContainerClass: t = M.H,
            userNameClassName: n = M.gr,
            size: i = D.OSZ.SMALL,
            selected: s = !1,
            disabled: o = !1,
            isOverlay: l = !1,
            ref: _,
            ...f
        } = e,
        {
            onClick: p,
            onKeyDown: g,
            onDoubleClick: T,
            onContextMenu: y,
            onMouseLeave: R,
            onMouseDown: O,
            priority: L,
            speaking: w = !1,
            collapsed: P,
            mute: k,
            serverMute: U,
            guildId: F,
            nick: V,
            isGuest: B,
            flipped: H,
            className: j,
            overlap: Y,
            "aria-label": W,
            ringing: K,
            user: $,
        } = f,
        z = (0, A.A)({ userId: $.id, guildId: F }),
        q = (0, I.a)({ displayNameStyles: z }),
        Z = (0, m.A)($.id),
        X = (0, h.v)({ isSpeaking: w, voiceDb: Z }),
        Q = (0, u.bG)([N.A], () => N.A.getProgressForUserId($.id), [$.id]),
        J = (0, v.Uk)("VoiceUser") && null != Q,
        ee = (e) => {
            p?.(e, $);
        },
        et = (e) => {
            T?.(e, $);
        },
        en = (e) => {
            y?.(e, $);
        },
        er = (e) => {
            R?.(e, $);
        },
        ei = (e) => {
            O?.(e, $);
        };
    function es() {
        return L && !P
            ? (0, r.jsx)(c.m, {
                  text: x.intl.string(x.t.BVK71i),
                  children: (0, r.jsx)("div", { className: a()(M.G, { [M.g4]: !k && !U && w }) }),
              })
            : null;
    }
    function ea() {
        let e = a()(M.my, { [M.Jb]: i === D.OSZ.LARGE, [M.dT]: i === D.OSZ.SMALL }),
            n = { backgroundImage: `url(${$.getAvatarURL(F, i === D.OSZ.LARGE ? 38 : 24)})`, ...X };
        return K
            ? (0, r.jsx)(E.A, {
                  size: i === D.OSZ.LARGE ? d._3J.SIZE_40 : d._3J.SIZE_24,
                  ringing: !0,
                  src: $.getAvatarURL(F, i === D.OSZ.LARGE ? 40 : 24),
                  className: a()(t, e),
              })
            : J
              ? (0, r.jsx)(C.A, {
                    userId: $.id,
                    wrapperClassName: t,
                    children: (0, r.jsx)("div", { className: e, style: n }),
                })
              : (0, r.jsx)("div", { className: a()(t, e), style: n });
    }
    function eo() {
        let e = (0, r.jsxs)("div", {
                className: a()(n, M.Xh, q, { [M.Pi]: !k && !U && w }),
                children: [
                    V ?? b.Ay.getName($),
                    B ? (0, r.jsxs)("span", { className: M.IW, children: ["\xa0", x.intl.string(x.t["pFO/Ph"])] }) : "",
                ],
            }),
            t = {
                primaryGuild: $.primaryGuild,
                userId: $.id,
                contextGuildId: F,
                isOverlay: l,
                disableTooltip: !0,
                className: a()(M.fc, l && M.zW),
                profileViewedAnalytics: { source: l ? D.JJy.OVERLAY : D.ThZ.VOICE_PANEL },
            };
        return !P || l ? (0, r.jsx)(S.A, { ...t, children: e }) : null;
    }
    function el() {
        return (0, r.jsx)(G, { disabled: o, ...f });
    }
    return (0, r.jsx)(d.sqX, {
        ref: _,
        className: a()(j, {
            [M.q7]: !0,
            [M.EF]: Y,
            [M.wH]: s,
            [M.vk]: null != p,
            [M.L9]: i === D.OSZ.SMALL,
            [M.p8]: i === D.OSZ.LARGE,
            [M.r9]: !s && o,
            [M.DF]: K,
        }),
        onClick: ee,
        onDoubleClick: et,
        onContextMenu: en,
        onMouseLeave: er,
        onMouseDown: ei,
        onKeyDown: g,
        "aria-label": W ?? V ?? $.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", { className: a()(M.Qs, { [M.zq]: H }), children: [es(), ea(), eo(), el()] }),
    });
};
function V(e) {
    let { application: t, iconClassName: n, guildId: s, channelId: l, userId: u } = e,
        [d, _] = i.useState(!1),
        p = (0, o.K)((e) => _(e));
    i.useEffect(() => {
        d &&
            f.Ay.trackWithMetadata(D.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: l,
                guild_id: s,
                user_id: u,
            });
    }, [t.id, l, s, u, d]);
    let h = () => {
        f.Ay.trackWithMetadata(D.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: l,
            guild_id: s,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(c.m, {
        text: x.intl.formatToPlainString(x.t.Sq9xJ7, { game: t.name }),
        "aria-label": x.intl.formatToPlainString(x.t.Sq9xJ7, { game: t.name }),
        children: (0, r.jsx)(T.A, {
            ref: p,
            className: a()(M.Kk, M.Gt, n),
            game: t,
            size: T.M.XSMALL,
            onMouseEnter: h,
        }),
    });
}
function B(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: s, deaf: o, serverDeaf: l } = e,
        u = [];
    if (n) {
        let e,
            n = () => (i ? x.intl.string(x.t.Q8Uzof) : s ? x.intl.string(x.t.uLddbQ) : x.intl.string(x.t.tjtv3P));
        e = s || i ? d.O1p : d.z0P;
        let o = (0, r.jsx)(e, { className: a()(M.Kk, t, { [M.DU]: s }), color: "currentColor" });
        u.push((0, r.jsx)(c.m, { text: n(), children: o }, "mute"));
    }
    if (l || o) {
        let e = l ? d.TJE : d.cQT,
            n = (0, r.jsx)(e, { className: a()(M.Kk, t, { [M.DU]: l }), color: "currentColor" });
        u.push(
            (0, r.jsx)(c.m, { text: l ? x.intl.string(x.t.btxSdB) : x.intl.string(x.t.NjmiOL), children: n }, "deaf"),
        );
    }
    return u;
}
