"use strict";
n.d(t, { A: () => X, b: () => H });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(319060),
    u = n(329177),
    c = n(939249),
    d = n(104510),
    _ = n(827734),
    f = n(463930),
    p = n(97808),
    h = n(778712),
    E = n(265872),
    m = n(960076),
    g = n(397244),
    A = n(714114),
    I = n(729551),
    T = n(709066),
    S = n(295160),
    y = n(193663),
    N = n(490427),
    v = n(609425),
    C = n(922301),
    O = n(750112),
    R = n(73392),
    b = n(534400),
    D = n(835759),
    L = n(967144),
    w = n(890687),
    M = n(198525),
    P = n(854627),
    x = n(240248),
    k = n(427262),
    U = n(652215),
    G = n(705751),
    F = n(31408),
    V = n(985018),
    B = n(28371);
let H = (0, x.xI)(l.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    j = i.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(o.m, {
                  __unsupportedReactNodeAsText: i ?? V.intl.string(V.t.pclUFJ),
                  children: (0, r.jsx)(u.p, { size: "md", color: "currentColor", className: B.Dd }),
              })
            : null;
    }),
    Y = i.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(o.m, {
                  text: V.intl.formatToPlainString(V.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, r.jsx)(c.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, r.jsx)(d._, { color: _.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: B.PC }),
                  }),
              });
    }),
    W = i.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = G.nu.BOT;
        return (0, r.jsx)(T.A, { className: B.AO, type: n, verified: t.isVerifiedBot() });
    }),
    K = i.memo(function (e) {
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
                (0, r.jsx)(W, { user: t }),
                (0, r.jsx)(j, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: s }),
                (0, r.jsx)(Y, { premiumSince: a, onClickPremiumGuildIcon: o }),
            ],
        });
    }),
    $ = i.memo(function (e) {
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
            c = (0, v.A)({ userId: o?.id, guildId: l }),
            d = (0, R.a)({ displayNameStyles: c }),
            _ = null == l && null != c;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                _
                    ? (0, r.jsx)(O.A, {
                          userName: s ?? "",
                          displayNameStyles: c,
                          effectDisplayType: u ? C.G.ANIMATED : C.G.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(f.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: s,
                          className: B.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: u,
                      }),
                !a &&
                    (0, r.jsx)(b.Ay, {
                        primaryGuild: o?.primaryGuild,
                        userId: o?.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: B.fc,
                    }),
            ],
        });
    }),
    z = i.memo(function (e) {
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
                currentUser: E,
            } = e,
            g = s === U.clD.OFFLINE,
            A = n ? p.Js : p.eu,
            I = (0, m.A)(i) ? U.clD.STREAMING : s;
        return (
            (I = g ? void 0 : I),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A, {
                        ...a,
                        size: h._3.SIZE_32,
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
                    (0, r.jsx)(D.A, {
                        confettiSpawnRef: f,
                        shouldFire: c && null != E && t.id !== E.id,
                        confettiLocation: F.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    q = i.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: s,
                status: a,
                applicationStream: o,
                voiceStatusChannel: l,
                user: u,
                channel: c,
                isHoveringOrFocusing: d,
                quest: _,
            } = e,
            f = i.useMemo(
                () => (0, g.A)({ activities: s, status: a, applicationStream: o, voiceChannel: l }),
                [s, a, o, l],
            ),
            p = i.useMemo(
                () =>
                    !(0, N.A)({
                        activity: s?.find((e) => {
                            let { type: t } = e;
                            return t === U.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: c,
                    }),
                [s, u, c],
            );
        return t || !f
            ? null
            : (0, r.jsx)(I.A, {
                  user: u,
                  activities: s,
                  applicationStream: o,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: p,
                  hasQuest: null != _,
                  hideTooltip: n,
              });
    }),
    X = i.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: s,
                colorRoleName: l,
                isOwner: u,
                ownerTooltipText: c,
                lostPermissionTooltipText: d,
                isTyping: _ = !1,
                nick: f,
                user: p,
                currentUser: m,
                activities: g,
                applicationStream: I,
                status: T,
                shouldAnimateStatus: N = !1,
                isMobile: v,
                isVR: C,
                premiumSince: O,
                channel: R,
                guildId: b,
                className: D,
                nameplate: x,
                hideClanTag: G = !1,
                hideSubtext: F = !1,
                hideTooltip: V = !1,
                onMouseDown: H,
                onKeyDown: j,
                onClick: Y,
                onContextMenu: W,
                onClickPremiumGuildIcon: X,
                "aria-controls": Q,
                "aria-expanded": Z,
                "aria-posinset": J,
                "aria-setsize": ee,
                id: et,
                tabIndex: en,
                itemProps: er,
                ref: ei,
            } = e,
            es = p?.id,
            ea = k.Ay.useName(p),
            eo = i.useRef(null),
            el = ei ?? eo,
            [eu, ec] = i.useState(!1),
            [ed, e_] = i.useState(!1),
            [ef, ep] = i.useState(null),
            { voiceChannel: eh } = (0, A.A)({ userId: es, guildId: b }),
            {
                avatarDecorationSrc: eE,
                avatarSrc: em,
                eventHandlers: eg,
            } = (0, P.A)({ userId: es, size: h._3.SIZE_32, animateOnHover: !(t || eu), guildId: b }),
            { onFocus: eA, ...eI } = er ?? {},
            eT = (0, L.gn)(b, es, s ?? null),
            [eS, ey] = i.useState(!1);
        i.useEffect(() => {
            t && ey(!1);
        }, [t]);
        let eN = (0, w.YW)(g),
            ev = (0, w.Yl)(eN, I, es) && t && !eS,
            eC = i.useCallback(() => {
                ec(!0);
            }, []),
            eO = i.useCallback(() => {
                ec(!1);
            }, []),
            eR = i.useCallback(() => {
                e_(!0), eA?.();
            }, [eA]),
            eb = i.useCallback(() => {
                e_(!1);
            }, []),
            eD = i.useCallback((e) => {
                ep(e);
            }, []),
            eL = i.useCallback(
                (e) =>
                    null == eN
                        ? null
                        : (0, r.jsx)(M.A, {
                              name: f ?? ea,
                              quest: eN,
                              memberListItemRef: el,
                              applicationStream: I,
                              ...e,
                              closePopout: () => ey(!0),
                          }),
                [eN, el, I, f, ea],
            );
        return null == p
            ? (0, r.jsx)(S.A, { avatarSize: h._3.SIZE_32, className: B.qf })
            : (0, r.jsx)(E.Y, {
                  targetElementRef: el,
                  renderPopout: eL,
                  position: "bottom",
                  shouldShow: ev,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: E.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, r.jsx)(y.A, {
                          ref: el,
                          selected: t,
                          className: a()(B.Dc, D, { [B.WK]: T === U.clD.OFFLINE && !t, [B.PJ]: ev }),
                          innerClassName: B.Hz,
                          onClick: Y,
                          onKeyDown: j,
                          onMouseDown: H,
                          onContextMenu: W,
                          onMouseEnter: eC,
                          onMouseLeave: eO,
                          onBlur: eb,
                          hovered: eu,
                          name:
                              null == d
                                  ? (0, r.jsx)("span", {
                                        className: B.Xh,
                                        children: (0, r.jsx)($, {
                                            colorRoleName: l,
                                            colorString: n ?? null,
                                            name: f ?? ea,
                                            colorStrings: eT,
                                            hideClanTag: G,
                                            user: p,
                                            guildId: b,
                                            isHovering: eu,
                                        }),
                                    })
                                  : (0, r.jsx)(o.m, {
                                        text: d,
                                        children: (0, r.jsx)("span", {
                                            className: a()(B.Xh, B.oj),
                                            children: (0, r.jsx)($, {
                                                colorRoleName: l,
                                                colorString: n ?? null,
                                                name: f ?? ea,
                                                colorStrings: eT,
                                                hideClanTag: G,
                                                user: p,
                                                guildId: b,
                                                isHovering: eu,
                                            }),
                                        }),
                                    }),
                          avatar: (0, r.jsx)(z, {
                              user: p,
                              shouldAnimateStatus: N,
                              activities: g,
                              status: T,
                              eventHandlers: eg,
                              avatarSrc: em,
                              isMobile: v,
                              isVR: C,
                              isTyping: _,
                              avatarDecorationSrc: eE,
                              handleSetTypingRef: eD,
                              typingRef: ef,
                              currentUser: m,
                          }),
                          nameplate: x,
                          subText: (0, r.jsx)(q, {
                              hideSubtext: F,
                              activities: g,
                              status: T,
                              applicationStream: I,
                              voiceStatusChannel: eh,
                              user: p,
                              channel: R,
                              isHoveringOrFocusing: eu || ed,
                              quest: eN,
                              hideTooltip: V,
                          }),
                          decorators: (0, r.jsx)(K, {
                              user: p,
                              isOwner: u,
                              lostPermissionTooltipText: d,
                              ownerTooltipText: c,
                              premiumSince: O,
                              onClickPremiumGuildIcon: X,
                          }),
                          "aria-controls": Q,
                          "aria-expanded": Z,
                          "aria-setsize": ee,
                          "aria-posinset": J,
                          id: et,
                          tabIndex: en,
                          onFocus: eR,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eI,
                      }),
              });
    });
