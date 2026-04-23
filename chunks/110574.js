n.d(t, { A: () => X, b: () => x });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(990078),
    l = n(319060),
    o = n(329177),
    E = n(939249),
    d = n(104510),
    c = n(661531),
    u = n(463930),
    I = n(97808),
    A = n(778712),
    T = n(922016),
    S = n(960076),
    N = n(397244),
    O = n(714114),
    R = n(729551),
    f = n(709066),
    C = n(295160),
    p = n(193663),
    m = n(490427),
    L = n(609425),
    D = n(922301),
    h = n(368919),
    g = n(73392),
    b = n(534400),
    U = n(835759),
    P = n(967144),
    M = n(890687),
    y = n(198525),
    G = n(854627),
    v = n(240248),
    B = n(427262),
    w = n(652215),
    F = n(705751),
    V = n(31408),
    H = n(985018),
    k = n(28371);
let x = (0, v.xI)(l.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    W = r.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: r } = e;
        return null != t && t && null == n
            ? (0, i.jsx)(_.m, {
                  __unsupportedReactNodeAsText: r ?? H.intl.string(H.t.pclUFJ),
                  children: (0, i.jsx)(o.p, { size: "md", color: "currentColor", className: k.Dd }),
              })
            : null;
    }),
    Y = r.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, i.jsx)(_.m, {
                  text: H.intl.formatToPlainString(H.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, i.jsx)(E.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, i.jsx)(d._, { color: c.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: k.PC }),
                  }),
              });
    }),
    j = r.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = F.nu.BOT;
        return (0, i.jsx)(f.A, { className: k.AO, type: n, verified: t.isVerifiedBot() });
    }),
    K = r.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: r,
            ownerTooltipText: a,
            premiumSince: s,
            onClickPremiumGuildIcon: _,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(j, { user: t }),
                (0, i.jsx)(W, { isOwner: n, lostPermissionTooltipText: r, ownerTooltipText: a }),
                (0, i.jsx)(Y, { premiumSince: s, onClickPremiumGuildIcon: _ }),
            ],
        });
    }),
    $ = r.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: r,
                name: a,
                hideClanTag: s,
                user: _,
                guildId: l,
                isHovering: o,
            } = e,
            E = (0, L.A)({ userId: _?.id, guildId: l }),
            d = (0, g.a)({ displayNameStyles: E }),
            c = null == l && null != E;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                c
                    ? (0, i.jsx)(h.A, {
                          userName: a ?? "",
                          displayNameStyles: E,
                          effectDisplayType: o ? D.G.ANIMATED : D.G.STATIC,
                          loop: !0,
                      })
                    : (0, i.jsx)(u.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: r,
                          name: a,
                          className: k.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: o,
                      }),
                !s &&
                    (0, i.jsx)(b.Ay, {
                        primaryGuild: _?.primaryGuild,
                        userId: _?.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: k.fc,
                    }),
            ],
        });
    }),
    Q = r.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: r,
                status: a,
                eventHandlers: s,
                avatarSrc: _,
                isMobile: l,
                isVR: o,
                isTyping: E,
                avatarDecorationSrc: d,
                handleSetTypingRef: c,
                typingRef: u,
                currentUser: T,
            } = e,
            N = a === w.clD.OFFLINE,
            O = n ? I.Js : I.eu,
            R = (0, S.A)(r) ? w.clD.STREAMING : a;
        return (
            (R = N ? void 0 : R),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(O, {
                        ...s,
                        size: A._3.SIZE_32,
                        src: _,
                        isMobile: l,
                        isVR: o,
                        isTyping: E,
                        status: R,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: d,
                        typingIndicatorRef: c,
                    }),
                    (0, i.jsx)(U.A, {
                        confettiSpawnRef: u,
                        shouldFire: E && null != T && t.id !== T.id,
                        confettiLocation: V.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    q = r.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: a,
                status: s,
                applicationStream: _,
                voiceStatusChannel: l,
                user: o,
                channel: E,
                isHoveringOrFocusing: d,
                quest: c,
            } = e,
            u = r.useMemo(
                () => (0, N.A)({ activities: a, status: s, applicationStream: _, voiceChannel: l }),
                [a, s, _, l],
            ),
            I = r.useMemo(
                () =>
                    !(0, m.A)({
                        activity: a?.find((e) => {
                            let { type: t } = e;
                            return t === w.$pd.CUSTOM_STATUS;
                        }),
                        user: o,
                        channel: E,
                    }),
                [a, o, E],
            );
        return t || !u
            ? null
            : (0, i.jsx)(R.A, {
                  user: o,
                  activities: a,
                  applicationStream: _,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: I,
                  hasQuest: null != c,
                  hideTooltip: n,
              });
    }),
    X = r.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: a,
                colorRoleName: l,
                isOwner: o,
                ownerTooltipText: E,
                lostPermissionTooltipText: d,
                isTyping: c = !1,
                nick: u,
                user: I,
                currentUser: S,
                activities: N,
                applicationStream: R,
                status: f,
                shouldAnimateStatus: m = !1,
                isMobile: L,
                isVR: D,
                premiumSince: h,
                channel: g,
                guildId: b,
                className: U,
                nameplate: v,
                hideClanTag: F = !1,
                hideSubtext: V = !1,
                hideTooltip: H = !1,
                onMouseDown: x,
                onKeyDown: W,
                onClick: Y,
                onContextMenu: j,
                onClickPremiumGuildIcon: X,
                "aria-controls": z,
                "aria-expanded": J,
                "aria-posinset": Z,
                "aria-setsize": ee,
                id: et,
                tabIndex: en,
                itemProps: ei,
                ref: er,
            } = e,
            ea = I?.id,
            es = B.Ay.useName(I),
            e_ = r.useRef(null),
            el = er ?? e_,
            [eo, eE] = r.useState(!1),
            [ed, ec] = r.useState(!1),
            [eu, eI] = r.useState(null),
            { voiceChannel: eA } = (0, O.A)({ userId: ea, guildId: b }),
            {
                avatarDecorationSrc: eT,
                avatarSrc: eS,
                eventHandlers: eN,
            } = (0, G.A)({ userId: ea, size: A._3.SIZE_32, animateOnHover: !(t || eo), guildId: b }),
            { onFocus: eO, ...eR } = ei ?? {},
            ef = (0, P.gn)(b, ea, a ?? null),
            [eC, ep] = r.useState(!1);
        r.useEffect(() => {
            t && ep(!1);
        }, [t]);
        let em = (0, M.YW)(N),
            eL = (0, M.Yl)(em, R, ea) && t && !eC,
            eD = r.useCallback(() => {
                eE(!0);
            }, []),
            eh = r.useCallback(() => {
                eE(!1);
            }, []),
            eg = r.useCallback(() => {
                ec(!0), eO?.();
            }, [eO]),
            eb = r.useCallback(() => {
                ec(!1);
            }, []),
            eU = r.useCallback((e) => {
                eI(e);
            }, []),
            eP = r.useCallback(
                (e) =>
                    null == em
                        ? null
                        : (0, i.jsx)(y.A, {
                              name: u ?? es,
                              quest: em,
                              memberListItemRef: el,
                              applicationStream: R,
                              ...e,
                              closePopout: () => ep(!0),
                          }),
                [em, el, R, u, es],
            );
        return null == I
            ? (0, i.jsx)(C.A, { avatarSize: A._3.SIZE_32, className: k.qf })
            : (0, i.jsx)(T.Y, {
                  targetElementRef: el,
                  renderPopout: eP,
                  position: "bottom",
                  shouldShow: eL,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: T.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, i.jsx)(p.A, {
                          ref: el,
                          selected: t,
                          className: s()(k.Dc, U, { [k.WK]: f === w.clD.OFFLINE && !t, [k.PJ]: eL }),
                          innerClassName: k.Hz,
                          onClick: Y,
                          onKeyDown: W,
                          onMouseDown: x,
                          onContextMenu: j,
                          onMouseEnter: eD,
                          onMouseLeave: eh,
                          onBlur: eb,
                          hovered: eo,
                          name:
                              null == d
                                  ? (0, i.jsx)("span", {
                                        className: k.Xh,
                                        children: (0, i.jsx)($, {
                                            colorRoleName: l,
                                            colorString: n ?? null,
                                            name: u ?? es,
                                            colorStrings: ef,
                                            hideClanTag: F,
                                            user: I,
                                            guildId: b,
                                            isHovering: eo,
                                        }),
                                    })
                                  : (0, i.jsx)(_.m, {
                                        text: d,
                                        children: (0, i.jsx)("span", {
                                            className: s()(k.Xh, k.oj),
                                            children: (0, i.jsx)($, {
                                                colorRoleName: l,
                                                colorString: n ?? null,
                                                name: u ?? es,
                                                colorStrings: ef,
                                                hideClanTag: F,
                                                user: I,
                                                guildId: b,
                                                isHovering: eo,
                                            }),
                                        }),
                                    }),
                          avatar: (0, i.jsx)(Q, {
                              user: I,
                              shouldAnimateStatus: m,
                              activities: N,
                              status: f,
                              eventHandlers: eN,
                              avatarSrc: eS,
                              isMobile: L,
                              isVR: D,
                              isTyping: c,
                              avatarDecorationSrc: eT,
                              handleSetTypingRef: eU,
                              typingRef: eu,
                              currentUser: S,
                          }),
                          nameplate: v,
                          subText: (0, i.jsx)(q, {
                              hideSubtext: V,
                              activities: N,
                              status: f,
                              applicationStream: R,
                              voiceStatusChannel: eA,
                              user: I,
                              channel: g,
                              isHoveringOrFocusing: eo || ed,
                              quest: em,
                              hideTooltip: H,
                          }),
                          decorators: (0, i.jsx)(K, {
                              user: I,
                              isOwner: o,
                              lostPermissionTooltipText: d,
                              ownerTooltipText: E,
                              premiumSince: h,
                              onClickPremiumGuildIcon: X,
                          }),
                          "aria-controls": z,
                          "aria-expanded": J,
                          "aria-setsize": ee,
                          "aria-posinset": Z,
                          id: et,
                          tabIndex: en,
                          onFocus: eg,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eR,
                      }),
              });
    });
