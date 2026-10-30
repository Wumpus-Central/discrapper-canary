n.d(l, { A: () => ed });
var t,
    s = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    u = n(350835),
    o = n(17928),
    c = n(319060),
    d = n(866665),
    m = n(329177),
    x = n(939249),
    h = n(104510),
    f = n(661531),
    j = n(463930),
    A = n(97808),
    p = n(778712),
    g = n(265872),
    N = n(960076),
    v = n(397244),
    I = n(714114),
    S = n(394871),
    T = n(296948),
    C = n(709066),
    b = n(235986),
    y = n(141504),
    E = (((t = E || {}).SINGLE_AVATAR = "1"), (t.MULTIPLE_AVATAR = "2"), t);
let M = { [p._3.SIZE_32]: y.dT, [p._3.SIZE_40]: y.Jb };
class R extends i.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = E;
    render() {
        let { type: e, avatarSize: l, className: n, childrenClassName: t, doNotAnimate: i } = this.props;
        return "2" === e
            ? (0, s.jsxs)("div", {
                  className: r()(y.ce, y.jO, n),
                  children: [
                      (0, s.jsxs)(b.A, {
                          children: [
                              (0, s.jsx)("div", { className: r()(y.RH, M[l], y.hC) }),
                              (0, s.jsx)("div", { className: r()(y.RH, M[l], y.hC) }),
                              (0, s.jsx)("div", { className: r()(y.RH, M[l]) }),
                          ],
                      }),
                      (0, s.jsx)(b.A, { grow: 1, className: y.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, s.jsxs)(b.A, {
                  className: r()(y.qf, !i && y.lN, n),
                  children: [
                      (0, s.jsx)("div", { className: r()(y.RH, M[l], t) }),
                      (0, s.jsx)(b.A, {
                          grow: 1,
                          className: r()(y.gM, t),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var G = n(268218),
    _ = n(193663),
    U = n(490427),
    k = n(609425),
    w = n(922301),
    D = n(660184),
    P = n(73392),
    O = n(914609),
    F = n(534400),
    L = n(531685),
    V = n(620141),
    $ = n(19309),
    z = n(224964);
function B(e) {
    let { confettiSpawnRef: l, shouldFire: n } = e,
        t = (0, o.bG)([L.A], () => L.A.isFocused()),
        s = (0, z.A)();
    return (
        i.useEffect(() => {
            if (t && n) {
                let e = (0, $.A)(l);
                null != e && s.fire(e.x, e.y);
            }
        }, [s, l, t, n]),
        null
    );
}
function H(e) {
    return (0, s.jsx)(V.A, { confettiLocation: e.confettiLocation, children: (0, s.jsx)(B, { ...e }) });
}
var Y = n(967144),
    W = n(859703),
    Z = n(738822),
    q = n(77870),
    X = n(854627),
    J = n(240248),
    K = n(427262),
    Q = n(652215),
    ee = n(31408),
    el = n(105292),
    en = n(590218);
let et = (0, G.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("975366"),
            n.e("828178"),
            n.e("505928"),
            n.e("752657"),
            n.e("237427"),
            n.e("634225"),
            n.e("747973"),
            n.e("953840"),
            n.e("723180"),
            n.e("60955"),
            n.e("264236"),
            n.e("305692"),
            n.e("811310"),
            n.e("323624"),
            n.e("187110"),
            n.e("132191"),
            n.e("292583"),
            n.e("821198"),
            n.e("466322"),
            n.e("538887"),
            n.e("344502"),
            n.e("454625"),
            n.e("8563"),
            n.e("180657"),
            n.e("35485"),
            n.e("653849"),
            n.e("324761"),
            n.e("209729"),
            n.e("603808"),
            n.e("424265"),
            n.e("932606"),
            n.e("39038"),
            n.e("913823"),
            n.e("860433"),
            n.e("881821"),
            n.e("655602"),
            n.e("867160"),
        ]).then(n.bind(n, 198525)),
    webpackId: 198525,
    name: "QuestMembersListPopout",
    renderLoader: () => null,
});
(0, J.xI)(c.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let es = i.memo(function (e) {
        let { isOwner: l, lostPermissionTooltipText: n, ownerTooltipText: t } = e;
        return null != l && l && null == n
            ? (0, s.jsx)(d.m, {
                  __unsupportedReactNodeAsText: t ?? el.intl.string(el.t.pclUFJ),
                  children: (0, s.jsx)(m.CrownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: en.Dd,
                      "aria-label": t ?? el.intl.string(el.t.pclUFJ),
                  }),
              })
            : null;
    }),
    ei = i.memo(function (e) {
        let { premiumSince: l, onClickPremiumGuildIcon: n } = e;
        return null == l
            ? null
            : (0, s.jsx)(d.m, {
                  text: el.intl.formatToPlainString(el.t.IWkAq7, { date: l }),
                  asContainer: !0,
                  children: (0, s.jsx)(x.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, s.jsx)(h._, { color: f.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: en.PC }),
                  }),
              });
    }),
    ea = i.memo(function (e) {
        let { user: l } = e;
        if (null == l) return null;
        let n = (0, T.r)(l);
        return null == n ? null : (0, s.jsx)(C.A, { className: en.AO, type: n, verified: l.isVerifiedBot() });
    }),
    er = i.memo(function (e) {
        let {
            user: l,
            isOwner: n,
            lostPermissionTooltipText: t,
            ownerTooltipText: i,
            premiumSince: a,
            onClickPremiumGuildIcon: r,
        } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(ea, { user: l }),
                (0, s.jsx)(es, { isOwner: n, lostPermissionTooltipText: t, ownerTooltipText: i }),
                (0, s.jsx)(ei, { premiumSince: a, onClickPremiumGuildIcon: r }),
            ],
        });
    }),
    eu = i.memo(function (e) {
        let {
                colorRoleName: l,
                colorString: n,
                colorStrings: t,
                name: i,
                hideClanTag: a,
                user: r,
                guildId: u,
                isHovering: o,
            } = e,
            c = (0, k.A)({ userId: r?.id, guildId: u }),
            d = (0, P.a)({ displayNameStyles: c }),
            m = null == u && null != c;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                m
                    ? (0, s.jsx)(D.A, {
                          userName: i ?? "",
                          displayNameStyles: c,
                          effectDisplayType: o ? w.G.ANIMATED : w.G.STATIC,
                          loop: !0,
                      })
                    : (0, s.jsx)(j.g, {
                          roleName: l,
                          colorString: n,
                          colorStrings: t,
                          name: i,
                          className: en.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: o,
                      }),
                !a &&
                    (0, s.jsx)(F.Ay, {
                        primaryGuild: r?.primaryGuild,
                        userId: r?.id,
                        contextGuildId: u,
                        disableGuildProfile: !0,
                        className: en.fc,
                    }),
                null != u && r?.id != null && (0, s.jsx)(O.A, { guildId: u, userId: r.id }),
            ],
        });
    }),
    eo = i.memo(function (e) {
        let {
                user: l,
                shouldAnimateStatus: n,
                activities: t,
                status: i,
                eventHandlers: a,
                avatarSrc: r,
                isMobile: u,
                isVR: o,
                isTyping: c,
                avatarDecorationSrc: d,
                handleSetTypingRef: m,
                typingRef: x,
                currentUser: h,
            } = e,
            f = i === Q.clD.OFFLINE,
            j = n ? A.Js : A.eu,
            g = (0, N.A)(t) ? Q.clD.STREAMING : i;
        return (
            (g = f ? void 0 : g),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(j, {
                        ...a,
                        size: p._3.SIZE_32,
                        src: r,
                        isMobile: u,
                        isVR: o,
                        isTyping: c,
                        status: g,
                        "aria-label": l.username,
                        statusTooltip: !0,
                        avatarDecoration: d,
                        typingIndicatorRef: m,
                    }),
                    (0, s.jsx)(H, {
                        confettiSpawnRef: x,
                        shouldFire: c && null != h && l.id !== h.id,
                        confettiLocation: ee.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    ec = i.memo(function (e) {
        let {
                hideSubtext: l,
                hideTooltip: n = !1,
                activities: t,
                status: a,
                applicationStream: r,
                voiceStatusChannel: o,
                user: c,
                channel: d,
                isHoveringOrFocusing: m,
                quest: x,
            } = e,
            h = i.useMemo(
                () => (0, v.A)({ activities: t, status: a, applicationStream: r, voiceChannel: o }),
                [t, a, r, o],
            ),
            f = i.useMemo(
                () =>
                    !(0, U.A)({
                        activity: t?.find((e) => {
                            let { type: l } = e;
                            return l === u.$.CUSTOM_STATUS;
                        }),
                        user: c,
                        channel: d,
                    }),
                [t, c, d],
            );
        return l || !h
            ? null
            : (0, s.jsx)(S.A, {
                  user: c,
                  activities: t,
                  applicationStream: r,
                  voiceChannel: o,
                  animateEmoji: m,
                  hideEmoji: f,
                  hasQuest: null != x,
                  hideTooltip: n,
              });
    }),
    ed = i.memo(function (e) {
        let {
                selected: l = !1,
                colorString: n,
                colorStrings: t,
                colorRoleName: a,
                isOwner: u,
                ownerTooltipText: c,
                lostPermissionTooltipText: m,
                isTyping: x = !1,
                nick: h,
                user: f,
                currentUser: j,
                activities: A,
                applicationStream: N,
                status: v,
                shouldAnimateStatus: S = !1,
                isMobile: T,
                isVR: C,
                premiumSince: b,
                channel: y,
                guildId: E,
                className: M,
                nameplate: G,
                hideClanTag: U = !1,
                hideSubtext: k = !1,
                hideTooltip: w = !1,
                onMouseDown: D,
                onKeyDown: P,
                onClick: O,
                onContextMenu: F,
                onClickPremiumGuildIcon: L,
                "aria-controls": V,
                "aria-expanded": $,
                "aria-posinset": z,
                "aria-setsize": B,
                id: H,
                tabIndex: J,
                itemProps: ee,
                ref: el,
            } = e,
            es = f?.id,
            ei = K.Ay.useName(f),
            ea = i.useRef(null),
            ed = el ?? ea,
            [em, ex] = i.useState(!1),
            [eh, ef] = i.useState(!1),
            [ej, eA] = i.useState(null),
            { voiceChannel: ep } = (0, I.Ay)({ userId: es, guildId: E }),
            {
                avatarDecorationSrc: eg,
                avatarSrc: eN,
                eventHandlers: ev,
            } = (0, X.A)({ userId: es, size: p._3.SIZE_32, animateOnHover: !(l || em), guildId: E }),
            { onFocus: eI, ...eS } = ee ?? {},
            eT = (0, Y.gn)(E, es, t ?? null),
            [eC, eb] = i.useState(!1);
        i.useEffect(() => {
            l && eb(!1);
        }, [l]);
        let ey = (0, q.YW)(A),
            eE = (0, o.bG)([W.A], () => W.A.getQuestPreviewOverride(Z.uF.MEMBERS_LIST), []),
            eM = null != eE,
            eR = eM ? eE : ey,
            eG = (0, q.Yl)(ey, N, es),
            e_ = (eM || eG) && l && !eC,
            eU = i.useCallback(() => {
                ex(!0);
            }, []),
            ek = i.useCallback(() => {
                ex(!1);
            }, []),
            ew = i.useCallback(() => {
                (ef(!0), eI?.());
            }, [eI]),
            eD = i.useCallback(() => {
                ef(!1);
            }, []),
            eP = i.useCallback((e) => {
                eA(e);
            }, []),
            eO = i.useCallback(
                (e) =>
                    null == eR
                        ? null
                        : (0, s.jsx)(et, {
                              name: h ?? ei,
                              quest: eR,
                              memberListItemRef: ed,
                              applicationStream: N,
                              ...e,
                              closePopout: () => eb(!0),
                          }),
                [eR, ed, N, h, ei],
            );
        return null == f
            ? (0, s.jsx)(R, { avatarSize: p._3.SIZE_32, className: en.qf })
            : (0, s.jsx)(g.Y, {
                  targetElementRef: ed,
                  renderPopout: eO,
                  position: "bottom",
                  shouldShow: e_,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: g.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, s.jsx)(_.A, {
                          ref: ed,
                          selected: l,
                          className: r()(en.Dc, M, { [en.WK]: v === Q.clD.OFFLINE && !l, [en.PJ]: e_ }),
                          innerClassName: en.Hz,
                          onClick: O,
                          onKeyDown: P,
                          onMouseDown: D,
                          onContextMenu: F,
                          onMouseEnter: eU,
                          onMouseLeave: ek,
                          onBlur: eD,
                          hovered: em,
                          name:
                              null == m
                                  ? (0, s.jsx)("span", {
                                        className: en.Xh,
                                        children: (0, s.jsx)(eu, {
                                            colorRoleName: a,
                                            colorString: n ?? null,
                                            name: h ?? ei,
                                            colorStrings: eT,
                                            hideClanTag: U,
                                            user: f,
                                            guildId: E,
                                            isHovering: em,
                                        }),
                                    })
                                  : (0, s.jsx)(d.m, {
                                        text: m,
                                        children: (0, s.jsx)("span", {
                                            className: r()(en.Xh, en.oj),
                                            children: (0, s.jsx)(eu, {
                                                colorRoleName: a,
                                                colorString: n ?? null,
                                                name: h ?? ei,
                                                colorStrings: eT,
                                                hideClanTag: U,
                                                user: f,
                                                guildId: E,
                                                isHovering: em,
                                            }),
                                        }),
                                    }),
                          avatar: (0, s.jsx)(eo, {
                              user: f,
                              shouldAnimateStatus: S,
                              activities: A,
                              status: v,
                              eventHandlers: ev,
                              avatarSrc: eN,
                              isMobile: T,
                              isVR: C,
                              isTyping: x,
                              avatarDecorationSrc: eg,
                              handleSetTypingRef: eP,
                              typingRef: ej,
                              currentUser: j,
                          }),
                          nameplate: G,
                          subText: (0, s.jsx)(ec, {
                              hideSubtext: k,
                              activities: A,
                              status: v,
                              applicationStream: N,
                              voiceStatusChannel: ep,
                              user: f,
                              channel: y,
                              isHoveringOrFocusing: em || eh,
                              quest: ey,
                              hideTooltip: w,
                          }),
                          decorators: (0, s.jsx)(er, {
                              user: f,
                              isOwner: u,
                              lostPermissionTooltipText: m,
                              ownerTooltipText: c,
                              premiumSince: b,
                              onClickPremiumGuildIcon: L,
                          }),
                          "aria-controls": V,
                          "aria-expanded": $,
                          "aria-setsize": B,
                          "aria-posinset": z,
                          id: H,
                          tabIndex: J,
                          onFocus: ew,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eS,
                      }),
              });
    });
