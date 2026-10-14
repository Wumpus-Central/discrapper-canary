n.d(l, { A: () => ec });
var t,
    s = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    u = n(17928),
    o = n(319060),
    c = n(866665),
    d = n(329177),
    m = n(939249),
    x = n(104510),
    h = n(661531),
    f = n(463930),
    p = n(97808),
    j = n(778712),
    A = n(922016),
    g = n(960076),
    N = n(397244),
    v = n(714114),
    I = n(394871),
    S = n(296948),
    T = n(709066),
    C = n(235986),
    b = n(141504),
    y = (((t = y || {}).SINGLE_AVATAR = "1"), (t.MULTIPLE_AVATAR = "2"), t);
let E = { [j._3.SIZE_32]: b.dT, [j._3.SIZE_40]: b.Jb };
class M extends i.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = y;
    render() {
        let { type: e, avatarSize: l, className: n, childrenClassName: t, doNotAnimate: i } = this.props;
        return "2" === e
            ? (0, s.jsxs)("div", {
                  className: r()(b.ce, b.jO, n),
                  children: [
                      (0, s.jsxs)(C.A, {
                          children: [
                              (0, s.jsx)("div", { className: r()(b.RH, E[l], b.hC) }),
                              (0, s.jsx)("div", { className: r()(b.RH, E[l], b.hC) }),
                              (0, s.jsx)("div", { className: r()(b.RH, E[l]) }),
                          ],
                      }),
                      (0, s.jsx)(C.A, { grow: 1, className: b.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, s.jsxs)(C.A, {
                  className: r()(b.qf, !i && b.lN, n),
                  children: [
                      (0, s.jsx)("div", { className: r()(b.RH, E[l], t) }),
                      (0, s.jsx)(C.A, {
                          grow: 1,
                          className: r()(b.gM, t),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var R = n(268218),
    G = n(193663),
    _ = n(490427),
    U = n(609425),
    k = n(922301),
    w = n(660184),
    D = n(73392),
    P = n(914609),
    O = n(534400),
    F = n(531685),
    L = n(620141),
    V = n(19309),
    $ = n(224964);
function z(e) {
    let { confettiSpawnRef: l, shouldFire: n } = e,
        t = (0, u.bG)([F.A], () => F.A.isFocused()),
        s = (0, $.A)();
    return (
        i.useEffect(() => {
            if (t && n) {
                let e = (0, V.A)(l);
                null != e && s.fire(e.x, e.y);
            }
        }, [s, l, t, n]),
        null
    );
}
function B(e) {
    return (0, s.jsx)(L.A, { confettiLocation: e.confettiLocation, children: (0, s.jsx)(z, { ...e }) });
}
var H = n(967144),
    Y = n(859703),
    W = n(738822),
    Z = n(77870),
    q = n(854627),
    X = n(240248),
    J = n(427262),
    K = n(652215),
    Q = n(31408),
    ee = n(660183),
    el = n(590218);
let en = (0, R.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("102075"),
            n.e("828178"),
            n.e("882297"),
            n.e("752657"),
            n.e("324732"),
            n.e("634225"),
            n.e("747973"),
            n.e("953840"),
            n.e("723180"),
            n.e("60955"),
            n.e("264236"),
            n.e("811310"),
            n.e("913823"),
            n.e("187110"),
            n.e("292583"),
            n.e("466322"),
            n.e("132191"),
            n.e("344502"),
            n.e("682337"),
            n.e("538887"),
            n.e("454625"),
            n.e("8563"),
            n.e("35485"),
            n.e("653849"),
            n.e("324761"),
            n.e("209729"),
            n.e("603808"),
            n.e("932606"),
            n.e("285350"),
            n.e("424265"),
            n.e("669558"),
            n.e("806295"),
            n.e("655602"),
            n.e("867160"),
        ]).then(n.bind(n, 198525)),
    webpackId: 198525,
    name: "QuestMembersListPopout",
    renderLoader: () => null,
});
(0, X.xI)(o.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let et = i.memo(function (e) {
        let { isOwner: l, lostPermissionTooltipText: n, ownerTooltipText: t } = e;
        return null != l && l && null == n
            ? (0, s.jsx)(c.m, {
                  __unsupportedReactNodeAsText: t ?? ee.intl.string(ee.t.pclUFJ),
                  children: (0, s.jsx)(d.CrownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: el.Dd,
                      "aria-label": t ?? ee.intl.string(ee.t.pclUFJ),
                  }),
              })
            : null;
    }),
    es = i.memo(function (e) {
        let { premiumSince: l, onClickPremiumGuildIcon: n } = e;
        return null == l
            ? null
            : (0, s.jsx)(c.m, {
                  text: ee.intl.formatToPlainString(ee.t.IWkAq7, { date: l }),
                  asContainer: !0,
                  children: (0, s.jsx)(m.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, s.jsx)(x._, { color: h.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: el.PC }),
                  }),
              });
    }),
    ei = i.memo(function (e) {
        let { user: l } = e;
        if (null == l) return null;
        let n = (0, S.r)(l);
        return null == n ? null : (0, s.jsx)(T.A, { className: el.AO, type: n, verified: l.isVerifiedBot() });
    }),
    ea = i.memo(function (e) {
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
                (0, s.jsx)(ei, { user: l }),
                (0, s.jsx)(et, { isOwner: n, lostPermissionTooltipText: t, ownerTooltipText: i }),
                (0, s.jsx)(es, { premiumSince: a, onClickPremiumGuildIcon: r }),
            ],
        });
    }),
    er = i.memo(function (e) {
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
            c = (0, U.A)({ userId: r?.id, guildId: u }),
            d = (0, D.a)({ displayNameStyles: c }),
            m = null == u && null != c;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                m
                    ? (0, s.jsx)(w.A, {
                          userName: i ?? "",
                          displayNameStyles: c,
                          effectDisplayType: o ? k.G.ANIMATED : k.G.STATIC,
                          loop: !0,
                      })
                    : (0, s.jsx)(f.g, {
                          roleName: l,
                          colorString: n,
                          colorStrings: t,
                          name: i,
                          className: el.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: o,
                      }),
                !a &&
                    (0, s.jsx)(O.Ay, {
                        primaryGuild: r?.primaryGuild,
                        userId: r?.id,
                        contextGuildId: u,
                        disableGuildProfile: !0,
                        className: el.fc,
                    }),
                null != u && r?.id != null && (0, s.jsx)(P.A, { guildId: u, userId: r.id }),
            ],
        });
    }),
    eu = i.memo(function (e) {
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
            f = i === K.clD.OFFLINE,
            A = n ? p.Js : p.eu,
            N = (0, g.A)(t) ? K.clD.STREAMING : i;
        return (
            (N = f ? void 0 : N),
            (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(A, {
                        ...a,
                        size: j._3.SIZE_32,
                        src: r,
                        isMobile: u,
                        isVR: o,
                        isTyping: c,
                        status: N,
                        "aria-label": l.username,
                        statusTooltip: !0,
                        avatarDecoration: d,
                        typingIndicatorRef: m,
                    }),
                    (0, s.jsx)(B, {
                        confettiSpawnRef: x,
                        shouldFire: c && null != h && l.id !== h.id,
                        confettiLocation: Q.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    eo = i.memo(function (e) {
        let {
                hideSubtext: l,
                hideTooltip: n = !1,
                activities: t,
                status: a,
                applicationStream: r,
                voiceStatusChannel: u,
                user: o,
                channel: c,
                isHoveringOrFocusing: d,
                quest: m,
            } = e,
            x = i.useMemo(
                () => (0, N.A)({ activities: t, status: a, applicationStream: r, voiceChannel: u }),
                [t, a, r, u],
            ),
            h = i.useMemo(
                () =>
                    !(0, _.A)({
                        activity: t?.find((e) => {
                            let { type: l } = e;
                            return l === K.$pd.CUSTOM_STATUS;
                        }),
                        user: o,
                        channel: c,
                    }),
                [t, o, c],
            );
        return l || !x
            ? null
            : (0, s.jsx)(I.A, {
                  user: o,
                  activities: t,
                  applicationStream: r,
                  voiceChannel: u,
                  animateEmoji: d,
                  hideEmoji: h,
                  hasQuest: null != m,
                  hideTooltip: n,
              });
    }),
    ec = i.memo(function (e) {
        let {
                selected: l = !1,
                colorString: n,
                colorStrings: t,
                colorRoleName: a,
                isOwner: o,
                ownerTooltipText: d,
                lostPermissionTooltipText: m,
                isTyping: x = !1,
                nick: h,
                user: f,
                currentUser: p,
                activities: g,
                applicationStream: N,
                status: I,
                shouldAnimateStatus: S = !1,
                isMobile: T,
                isVR: C,
                premiumSince: b,
                channel: y,
                guildId: E,
                className: R,
                nameplate: _,
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
                id: X,
                tabIndex: Q,
                itemProps: ee,
                ref: et,
            } = e,
            es = f?.id,
            ei = J.Ay.useName(f),
            ec = i.useRef(null),
            ed = et ?? ec,
            [em, ex] = i.useState(!1),
            [eh, ef] = i.useState(!1),
            [ep, ej] = i.useState(null),
            { voiceChannel: eA } = (0, v.Ay)({ userId: es, guildId: E }),
            {
                avatarDecorationSrc: eg,
                avatarSrc: eN,
                eventHandlers: ev,
            } = (0, q.A)({ userId: es, size: j._3.SIZE_32, animateOnHover: !(l || em), guildId: E }),
            { onFocus: eI, ...eS } = ee ?? {},
            eT = (0, H.gn)(E, es, t ?? null),
            [eC, eb] = i.useState(!1);
        i.useEffect(() => {
            l && eb(!1);
        }, [l]);
        let ey = (0, Z.YW)(g),
            eE = (0, u.bG)([Y.A], () => Y.A.getQuestPreviewOverride(W.uF.MEMBERS_LIST), []),
            eM = null != eE,
            eR = eM ? eE : ey,
            eG = (0, Z.Yl)(ey, N, es),
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
                ej(e);
            }, []),
            eO = i.useCallback(
                (e) =>
                    null == eR
                        ? null
                        : (0, s.jsx)(en, {
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
            ? (0, s.jsx)(M, { avatarSize: j._3.SIZE_32, className: el.qf })
            : (0, s.jsx)(A.Y, {
                  targetElementRef: ed,
                  renderPopout: eO,
                  position: "bottom",
                  shouldShow: e_,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: A.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, s.jsx)(G.A, {
                          ref: ed,
                          selected: l,
                          className: r()(el.Dc, R, { [el.WK]: I === K.clD.OFFLINE && !l, [el.PJ]: e_ }),
                          innerClassName: el.Hz,
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
                                        className: el.Xh,
                                        children: (0, s.jsx)(er, {
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
                                  : (0, s.jsx)(c.m, {
                                        text: m,
                                        children: (0, s.jsx)("span", {
                                            className: r()(el.Xh, el.oj),
                                            children: (0, s.jsx)(er, {
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
                          avatar: (0, s.jsx)(eu, {
                              user: f,
                              shouldAnimateStatus: S,
                              activities: g,
                              status: I,
                              eventHandlers: ev,
                              avatarSrc: eN,
                              isMobile: T,
                              isVR: C,
                              isTyping: x,
                              avatarDecorationSrc: eg,
                              handleSetTypingRef: eP,
                              typingRef: ep,
                              currentUser: p,
                          }),
                          nameplate: _,
                          subText: (0, s.jsx)(eo, {
                              hideSubtext: k,
                              activities: g,
                              status: I,
                              applicationStream: N,
                              voiceStatusChannel: eA,
                              user: f,
                              channel: y,
                              isHoveringOrFocusing: em || eh,
                              quest: ey,
                              hideTooltip: w,
                          }),
                          decorators: (0, s.jsx)(ea, {
                              user: f,
                              isOwner: o,
                              lostPermissionTooltipText: m,
                              ownerTooltipText: d,
                              premiumSince: b,
                              onClickPremiumGuildIcon: L,
                          }),
                          "aria-controls": V,
                          "aria-expanded": $,
                          "aria-setsize": B,
                          "aria-posinset": z,
                          id: X,
                          tabIndex: Q,
                          onFocus: ew,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eS,
                      }),
              });
    });
