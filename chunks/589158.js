"use strict";
n.d(t, { b: () => J, A: () => eo });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(990078),
    u = n(319060),
    c = n(329177),
    d = n(939249),
    _ = n(104510),
    f = n(661531),
    h = n(463930),
    p = n(97808),
    E = n(778712),
    m = n(922016),
    g = n(960076),
    A = n(397244),
    I = n(714114),
    T = n(394871),
    S = n(709066),
    N = n(235986),
    y = n(310887),
    C = (((i = C || {}).SINGLE_AVATAR = "1"), (i.MULTIPLE_AVATAR = "2"), i);
let v = { [E._3.SIZE_32]: y.dT, [E._3.SIZE_40]: y.Jb };
class O extends s.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = C;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: i, doNotAnimate: s } = this.props;
        return "2" === e
            ? (0, r.jsxs)("div", {
                  className: o()(y.ce, y.jO, n),
                  children: [
                      (0, r.jsxs)(N.A, {
                          children: [
                              (0, r.jsx)("div", { className: o()(y.RH, v[t], y.hC) }),
                              (0, r.jsx)("div", { className: o()(y.RH, v[t], y.hC) }),
                              (0, r.jsx)("div", { className: o()(y.RH, v[t]) }),
                          ],
                      }),
                      (0, r.jsx)(N.A, { grow: 1, className: y.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, r.jsxs)(N.A, {
                  className: o()(y.qf, !s && y.lN, n),
                  children: [
                      (0, r.jsx)("div", { className: o()(y.RH, v[t], i) }),
                      (0, r.jsx)(N.A, {
                          grow: 1,
                          className: o()(y.gM, i),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var R = n(193663),
    b = n(490427),
    D = n(609425),
    L = n(922301),
    w = n(368919),
    M = n(252545),
    P = n(534400),
    x = n(17928),
    U = n(531685),
    k = n(620141),
    G = n(966598),
    F = n(224964);
function V(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        i = (0, x.bG)([U.A], () => U.A.isFocused()),
        r = (0, F.A)(),
        a = (0, G.A)(t);
    return (
        s.useEffect(() => {
            i && n && null != a && r.fire(a.x, a.y);
        }, [r, i, a, n]),
        null
    );
}
function B(e) {
    return (0, r.jsx)(k.A, { confettiLocation: e.confettiLocation, children: (0, r.jsx)(V, { ...e }) });
}
var H = n(967144),
    j = n(31587),
    Y = n(198525),
    W = n(854627),
    K = n(240248),
    z = n(427262),
    $ = n(652215),
    q = n(705751),
    Z = n(31408),
    X = n(375708),
    Q = n(28371);
let J = (0, K.xI)(u.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    ee = s.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(l.m, {
                  __unsupportedReactNodeAsText: i ?? X.intl.string(X.t.pclUFJ),
                  children: (0, r.jsx)(c.p, {
                      size: "md",
                      color: "currentColor",
                      className: Q.Dd,
                      "aria-label": i ?? X.intl.string(X.t.pclUFJ),
                  }),
              })
            : null;
    }),
    et = s.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(l.m, {
                  text: X.intl.formatToPlainString(X.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, r.jsx)(d.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, r.jsx)(_._, { color: f.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: Q.PC }),
                  }),
              });
    }),
    en = s.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = q.nu.BOT;
        return (0, r.jsx)(S.A, { className: Q.AO, type: n, verified: t.isVerifiedBot() });
    }),
    ei = s.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: i,
            ownerTooltipText: s,
            premiumSince: a,
            onClickPremiumGuildIcon: o,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(en, { user: t }),
                (0, r.jsx)(ee, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: s }),
                (0, r.jsx)(et, { premiumSince: a, onClickPremiumGuildIcon: o }),
            ],
        });
    }),
    er = s.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: i,
                name: s,
                hideClanTag: a,
                user: o,
                guildId: l,
                isHovering: u,
            } = e,
            c = (0, D.A)({ userId: o?.id, guildId: l }),
            d = (0, M.a)({ displayNameStyles: c }),
            _ = null == l && null != c;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                _
                    ? (0, r.jsx)(w.A, {
                          userName: s ?? "",
                          displayNameStyles: c,
                          effectDisplayType: u ? L.G.ANIMATED : L.G.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(h.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: s,
                          className: Q.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: u,
                      }),
                !a &&
                    (0, r.jsx)(P.Ay, {
                        primaryGuild: o?.primaryGuild,
                        userId: o?.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: Q.fc,
                    }),
            ],
        });
    }),
    es = s.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: i,
                status: s,
                eventHandlers: a,
                avatarSrc: o,
                isMobile: l,
                isVR: u,
                isTyping: c,
                avatarDecorationSrc: d,
                handleSetTypingRef: _,
                typingRef: f,
                currentUser: h,
            } = e,
            m = s === $.clD.OFFLINE,
            A = n ? p.Js : p.eu,
            I = (0, g.A)(i) ? $.clD.STREAMING : s;
        return (
            (I = m ? void 0 : I),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A, {
                        ...a,
                        size: E._3.SIZE_32,
                        src: o,
                        isMobile: l,
                        isVR: u,
                        isTyping: c,
                        status: I,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: d,
                        typingIndicatorRef: _,
                    }),
                    (0, r.jsx)(B, {
                        confettiSpawnRef: f,
                        shouldFire: c && null != h && t.id !== h.id,
                        confettiLocation: Z.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    ea = s.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: i,
                status: a,
                applicationStream: o,
                voiceStatusChannel: l,
                user: u,
                channel: c,
                isHoveringOrFocusing: d,
                quest: _,
            } = e,
            f = s.useMemo(
                () => (0, A.A)({ activities: i, status: a, applicationStream: o, voiceChannel: l }),
                [i, a, o, l],
            ),
            h = s.useMemo(
                () =>
                    !(0, b.A)({
                        activity: i?.find((e) => {
                            let { type: t } = e;
                            return t === $.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: c,
                    }),
                [i, u, c],
            );
        return t || !f
            ? null
            : (0, r.jsx)(T.A, {
                  user: u,
                  activities: i,
                  applicationStream: o,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: h,
                  hasQuest: null != _,
                  hideTooltip: n,
              });
    }),
    eo = s.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: i,
                colorRoleName: a,
                isOwner: u,
                ownerTooltipText: c,
                lostPermissionTooltipText: d,
                isTyping: _ = !1,
                nick: f,
                user: h,
                currentUser: p,
                activities: g,
                applicationStream: A,
                status: T,
                shouldAnimateStatus: S = !1,
                isMobile: N,
                isVR: y,
                premiumSince: C,
                channel: v,
                guildId: b,
                className: D,
                nameplate: L,
                hideClanTag: w = !1,
                hideSubtext: M = !1,
                hideTooltip: P = !1,
                onMouseDown: x,
                onKeyDown: U,
                onClick: k,
                onContextMenu: G,
                onClickPremiumGuildIcon: F,
                "aria-controls": V,
                "aria-expanded": B,
                "aria-posinset": K,
                "aria-setsize": q,
                id: Z,
                tabIndex: X,
                itemProps: J,
                ref: ee,
            } = e,
            et = h?.id,
            en = z.Ay.useName(h),
            eo = s.useRef(null),
            el = ee ?? eo,
            [eu, ec] = s.useState(!1),
            [ed, e_] = s.useState(!1),
            [ef, eh] = s.useState(null),
            { voiceChannel: ep } = (0, I.A)({ userId: et, guildId: b }),
            {
                avatarDecorationSrc: eE,
                avatarSrc: em,
                eventHandlers: eg,
            } = (0, W.A)({ userId: et, size: E._3.SIZE_32, animateOnHover: !(t || eu), guildId: b }),
            { onFocus: eA, ...eI } = J ?? {},
            eT = (0, H.gn)(b, et, i ?? null),
            [eS, eN] = s.useState(!1);
        s.useEffect(() => {
            t && eN(!1);
        }, [t]);
        let ey = (0, j.YW)(g),
            eC = (0, j.Yl)(ey, A, et) && t && !eS,
            ev = s.useCallback(() => {
                ec(!0);
            }, []),
            eO = s.useCallback(() => {
                ec(!1);
            }, []),
            eR = s.useCallback(() => {
                e_(!0), eA?.();
            }, [eA]),
            eb = s.useCallback(() => {
                e_(!1);
            }, []),
            eD = s.useCallback((e) => {
                eh(e);
            }, []),
            eL = s.useCallback(
                (e) =>
                    null == ey
                        ? null
                        : (0, r.jsx)(Y.A, {
                              name: f ?? en,
                              quest: ey,
                              memberListItemRef: el,
                              applicationStream: A,
                              ...e,
                              closePopout: () => eN(!0),
                          }),
                [ey, el, A, f, en],
            );
        return null == h
            ? (0, r.jsx)(O, { avatarSize: E._3.SIZE_32, className: Q.qf })
            : (0, r.jsx)(m.Y, {
                  targetElementRef: el,
                  renderPopout: eL,
                  position: "bottom",
                  shouldShow: eC,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: m.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, r.jsx)(R.A, {
                          ref: el,
                          selected: t,
                          className: o()(Q.Dc, D, { [Q.WK]: T === $.clD.OFFLINE && !t, [Q.PJ]: eC }),
                          innerClassName: Q.Hz,
                          onClick: k,
                          onKeyDown: U,
                          onMouseDown: x,
                          onContextMenu: G,
                          onMouseEnter: ev,
                          onMouseLeave: eO,
                          onBlur: eb,
                          hovered: eu,
                          name:
                              null == d
                                  ? (0, r.jsx)("span", {
                                        className: Q.Xh,
                                        children: (0, r.jsx)(er, {
                                            colorRoleName: a,
                                            colorString: n ?? null,
                                            name: f ?? en,
                                            colorStrings: eT,
                                            hideClanTag: w,
                                            user: h,
                                            guildId: b,
                                            isHovering: eu,
                                        }),
                                    })
                                  : (0, r.jsx)(l.m, {
                                        text: d,
                                        children: (0, r.jsx)("span", {
                                            className: o()(Q.Xh, Q.oj),
                                            children: (0, r.jsx)(er, {
                                                colorRoleName: a,
                                                colorString: n ?? null,
                                                name: f ?? en,
                                                colorStrings: eT,
                                                hideClanTag: w,
                                                user: h,
                                                guildId: b,
                                                isHovering: eu,
                                            }),
                                        }),
                                    }),
                          avatar: (0, r.jsx)(es, {
                              user: h,
                              shouldAnimateStatus: S,
                              activities: g,
                              status: T,
                              eventHandlers: eg,
                              avatarSrc: em,
                              isMobile: N,
                              isVR: y,
                              isTyping: _,
                              avatarDecorationSrc: eE,
                              handleSetTypingRef: eD,
                              typingRef: ef,
                              currentUser: p,
                          }),
                          nameplate: L,
                          subText: (0, r.jsx)(ea, {
                              hideSubtext: M,
                              activities: g,
                              status: T,
                              applicationStream: A,
                              voiceStatusChannel: ep,
                              user: h,
                              channel: v,
                              isHoveringOrFocusing: eu || ed,
                              quest: ey,
                              hideTooltip: P,
                          }),
                          decorators: (0, r.jsx)(ei, {
                              user: h,
                              isOwner: u,
                              lostPermissionTooltipText: d,
                              ownerTooltipText: c,
                              premiumSince: C,
                              onClickPremiumGuildIcon: F,
                          }),
                          "aria-controls": V,
                          "aria-expanded": B,
                          "aria-setsize": q,
                          "aria-posinset": K,
                          id: Z,
                          tabIndex: X,
                          onFocus: eR,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eI,
                      }),
              });
    });
