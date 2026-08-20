"use strict";
n.d(t, { A: () => eu });
var l,
    i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(17928),
    u = n(319060),
    c = n(866665),
    d = n(329177),
    h = n(939249),
    m = n(104510),
    f = n(661531),
    p = n(463930),
    g = n(97808),
    x = n(778712),
    A = n(922016),
    C = n(960076),
    E = n(397244),
    I = n(714114),
    y = n(394871),
    v = n(296948),
    S = n(709066),
    N = n(235986),
    _ = n(141504),
    T = (((l = T || {}).SINGLE_AVATAR = "1"), (l.MULTIPLE_AVATAR = "2"), l);
let j = { [x._3.SIZE_32]: _.dT, [x._3.SIZE_40]: _.Jb };
class b extends s.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = T;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: l, doNotAnimate: s } = this.props;
        return "2" === e
            ? (0, i.jsxs)("div", {
                  className: a()(_.ce, _.jO, n),
                  children: [
                      (0, i.jsxs)(N.A, {
                          children: [
                              (0, i.jsx)("div", { className: a()(_.RH, j[t], _.hC) }),
                              (0, i.jsx)("div", { className: a()(_.RH, j[t], _.hC) }),
                              (0, i.jsx)("div", { className: a()(_.RH, j[t]) }),
                          ],
                      }),
                      (0, i.jsx)(N.A, { grow: 1, className: _.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, i.jsxs)(N.A, {
                  className: a()(_.qf, !s && _.lN, n),
                  children: [
                      (0, i.jsx)("div", { className: a()(_.RH, j[t], l) }),
                      (0, i.jsx)(N.A, {
                          grow: 1,
                          className: a()(_.gM, l),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var R = n(268218),
    O = n(193663),
    M = n(490427),
    L = n(609425),
    w = n(922301),
    k = n(660184),
    P = n(73392),
    D = n(534400),
    U = n(531685),
    G = n(620141),
    V = n(966598),
    F = n(224964);
function H(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        l = (0, o.bG)([U.A], () => U.A.isFocused()),
        i = (0, F.A)(),
        r = (0, V.A)(t);
    return (
        s.useEffect(() => {
            l && n && null != r && i.fire(r.x, r.y);
        }, [i, l, r, n]),
        null
    );
}
function B(e) {
    return (0, i.jsx)(G.A, { confettiLocation: e.confettiLocation, children: (0, i.jsx)(H, { ...e }) });
}
var W = n(967144),
    K = n(859703),
    z = n(24001),
    Z = n(309593),
    Y = n(854627),
    q = n(240248),
    J = n(427262),
    $ = n(652215),
    X = n(31408),
    Q = n(375708),
    ee = n(590218);
let et = (0, R.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("102075"),
            n.e("828178"),
            n.e("505928"),
            n.e("752657"),
            n.e("324732"),
            n.e("634225"),
            n.e("747973"),
            n.e("953840"),
            n.e("723180"),
            n.e("60955"),
            n.e("811310"),
            n.e("913823"),
            n.e("331549"),
            n.e("292583"),
            n.e("132191"),
            n.e("344502"),
            n.e("454625"),
            n.e("538887"),
            n.e("35485"),
            n.e("209729"),
            n.e("324761"),
            n.e("932606"),
            n.e("285350"),
            n.e("8563"),
            n.e("39038"),
            n.e("424265"),
            n.e("532040"),
            n.e("655602"),
            n.e("867160"),
        ]).then(n.bind(n, 198525)),
    webpackId: 198525,
    name: "QuestMembersListPopout",
    renderLoader: () => null,
});
(0, q.xI)(u.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let en = s.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: l } = e;
        return null != t && t && null == n
            ? (0, i.jsx)(c.m, {
                  __unsupportedReactNodeAsText: l ?? Q.intl.string(Q.t.pclUFJ),
                  children: (0, i.jsx)(d.CrownIcon, {
                      size: "md",
                      color: "currentColor",
                      className: ee.Dd,
                      "aria-label": l ?? Q.intl.string(Q.t.pclUFJ),
                  }),
              })
            : null;
    }),
    el = s.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, i.jsx)(c.m, {
                  text: Q.intl.formatToPlainString(Q.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, i.jsx)(h.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, i.jsx)(m._, { color: f.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: ee.PC }),
                  }),
              });
    }),
    ei = s.memo(function (e) {
        let { user: t } = e;
        if (null == t) return null;
        let n = (0, v.r)(t);
        return null == n ? null : (0, i.jsx)(S.A, { className: ee.AO, type: n, verified: t.isVerifiedBot() });
    }),
    es = s.memo(function (e) {
        let {
            user: t,
            isOwner: n,
            lostPermissionTooltipText: l,
            ownerTooltipText: s,
            premiumSince: r,
            onClickPremiumGuildIcon: a,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ei, { user: t }),
                (0, i.jsx)(en, { isOwner: n, lostPermissionTooltipText: l, ownerTooltipText: s }),
                (0, i.jsx)(el, { premiumSince: r, onClickPremiumGuildIcon: a }),
            ],
        });
    }),
    er = s.memo(function (e) {
        let {
                colorRoleName: t,
                colorString: n,
                colorStrings: l,
                name: s,
                hideClanTag: r,
                user: a,
                guildId: o,
                isHovering: u,
            } = e,
            c = (0, L.A)({ userId: a?.id, guildId: o }),
            d = (0, P.a)({ displayNameStyles: c }),
            h = null == o && null != c;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                h
                    ? (0, i.jsx)(k.A, {
                          userName: s ?? "",
                          displayNameStyles: c,
                          effectDisplayType: u ? w.G.ANIMATED : w.G.STATIC,
                          loop: !0,
                      })
                    : (0, i.jsx)(p.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: l,
                          name: s,
                          className: ee.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: u,
                      }),
                !r &&
                    (0, i.jsx)(D.Ay, {
                        primaryGuild: a?.primaryGuild,
                        userId: a?.id,
                        contextGuildId: o,
                        disableGuildProfile: !0,
                        className: ee.fc,
                    }),
            ],
        });
    }),
    ea = s.memo(function (e) {
        let {
                user: t,
                shouldAnimateStatus: n,
                activities: l,
                status: s,
                eventHandlers: r,
                avatarSrc: a,
                isMobile: o,
                isVR: u,
                isTyping: c,
                avatarDecorationSrc: d,
                handleSetTypingRef: h,
                typingRef: m,
                currentUser: f,
            } = e,
            p = s === $.clD.OFFLINE,
            A = n ? g.Js : g.eu,
            E = (0, C.A)(l) ? $.clD.STREAMING : s;
        return (
            (E = p ? void 0 : E),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A, {
                        ...r,
                        size: x._3.SIZE_32,
                        src: a,
                        isMobile: o,
                        isVR: u,
                        isTyping: c,
                        status: E,
                        "aria-label": t.username,
                        statusTooltip: !0,
                        avatarDecoration: d,
                        typingIndicatorRef: h,
                    }),
                    (0, i.jsx)(B, {
                        confettiSpawnRef: m,
                        shouldFire: c && null != f && t.id !== f.id,
                        confettiLocation: X.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    eo = s.memo(function (e) {
        let {
                hideSubtext: t,
                hideTooltip: n = !1,
                activities: l,
                status: r,
                applicationStream: a,
                voiceStatusChannel: o,
                user: u,
                channel: c,
                isHoveringOrFocusing: d,
                quest: h,
            } = e,
            m = s.useMemo(
                () => (0, E.A)({ activities: l, status: r, applicationStream: a, voiceChannel: o }),
                [l, r, a, o],
            ),
            f = s.useMemo(
                () =>
                    !(0, M.A)({
                        activity: l?.find((e) => {
                            let { type: t } = e;
                            return t === $.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: c,
                    }),
                [l, u, c],
            );
        return t || !m
            ? null
            : (0, i.jsx)(y.A, {
                  user: u,
                  activities: l,
                  applicationStream: a,
                  voiceChannel: o,
                  animateEmoji: d,
                  hideEmoji: f,
                  hasQuest: null != h,
                  hideTooltip: n,
              });
    }),
    eu = s.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: l,
                colorRoleName: r,
                isOwner: u,
                ownerTooltipText: d,
                lostPermissionTooltipText: h,
                isTyping: m = !1,
                nick: f,
                user: p,
                currentUser: g,
                activities: C,
                applicationStream: E,
                status: y,
                shouldAnimateStatus: v = !1,
                isMobile: S,
                isVR: N,
                premiumSince: _,
                channel: T,
                guildId: j,
                className: R,
                nameplate: M,
                hideClanTag: L = !1,
                hideSubtext: w = !1,
                hideTooltip: k = !1,
                onMouseDown: P,
                onKeyDown: D,
                onClick: U,
                onContextMenu: G,
                onClickPremiumGuildIcon: V,
                "aria-controls": F,
                "aria-expanded": H,
                "aria-posinset": B,
                "aria-setsize": q,
                id: X,
                tabIndex: Q,
                itemProps: en,
                ref: el,
            } = e,
            ei = p?.id,
            eu = J.Ay.useName(p),
            ec = s.useRef(null),
            ed = el ?? ec,
            [eh, em] = s.useState(!1),
            [ef, ep] = s.useState(!1),
            [eg, ex] = s.useState(null),
            { voiceChannel: eA } = (0, I.Ay)({ userId: ei, guildId: j }),
            {
                avatarDecorationSrc: eC,
                avatarSrc: eE,
                eventHandlers: eI,
            } = (0, Y.A)({ userId: ei, size: x._3.SIZE_32, animateOnHover: !(t || eh), guildId: j }),
            { onFocus: ey, ...ev } = en ?? {},
            eS = (0, W.gn)(j, ei, l ?? null),
            [eN, e_] = s.useState(!1);
        s.useEffect(() => {
            t && e_(!1);
        }, [t]);
        let eT = (0, Z.YW)(C),
            ej = (0, o.bG)([K.A], () => K.A.getQuestPreviewOverride(z.uF.MEMBERS_LIST), []),
            eb = null != ej,
            eR = eb ? ej : eT,
            eO = (0, Z.Yl)(eT, E, ei),
            eM = (eb || eO) && t && !eN,
            eL = s.useCallback(() => {
                em(!0);
            }, []),
            ew = s.useCallback(() => {
                em(!1);
            }, []),
            ek = s.useCallback(() => {
                ep(!0), ey?.();
            }, [ey]),
            eP = s.useCallback(() => {
                ep(!1);
            }, []),
            eD = s.useCallback((e) => {
                ex(e);
            }, []),
            eU = s.useCallback(
                (e) =>
                    null == eR
                        ? null
                        : (0, i.jsx)(et, {
                              name: f ?? eu,
                              quest: eR,
                              memberListItemRef: ed,
                              applicationStream: E,
                              ...e,
                              closePopout: () => e_(!0),
                          }),
                [eR, ed, E, f, eu],
            );
        return null == p
            ? (0, i.jsx)(b, { avatarSize: x._3.SIZE_32, className: ee.qf })
            : (0, i.jsx)(A.Y, {
                  targetElementRef: ed,
                  renderPopout: eU,
                  position: "bottom",
                  shouldShow: eM,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: A.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, i.jsx)(O.A, {
                          ref: ed,
                          selected: t,
                          className: a()(ee.Dc, R, { [ee.WK]: y === $.clD.OFFLINE && !t, [ee.PJ]: eM }),
                          innerClassName: ee.Hz,
                          onClick: U,
                          onKeyDown: D,
                          onMouseDown: P,
                          onContextMenu: G,
                          onMouseEnter: eL,
                          onMouseLeave: ew,
                          onBlur: eP,
                          hovered: eh,
                          name:
                              null == h
                                  ? (0, i.jsx)("span", {
                                        className: ee.Xh,
                                        children: (0, i.jsx)(er, {
                                            colorRoleName: r,
                                            colorString: n ?? null,
                                            name: f ?? eu,
                                            colorStrings: eS,
                                            hideClanTag: L,
                                            user: p,
                                            guildId: j,
                                            isHovering: eh,
                                        }),
                                    })
                                  : (0, i.jsx)(c.m, {
                                        text: h,
                                        children: (0, i.jsx)("span", {
                                            className: a()(ee.Xh, ee.oj),
                                            children: (0, i.jsx)(er, {
                                                colorRoleName: r,
                                                colorString: n ?? null,
                                                name: f ?? eu,
                                                colorStrings: eS,
                                                hideClanTag: L,
                                                user: p,
                                                guildId: j,
                                                isHovering: eh,
                                            }),
                                        }),
                                    }),
                          avatar: (0, i.jsx)(ea, {
                              user: p,
                              shouldAnimateStatus: v,
                              activities: C,
                              status: y,
                              eventHandlers: eI,
                              avatarSrc: eE,
                              isMobile: S,
                              isVR: N,
                              isTyping: m,
                              avatarDecorationSrc: eC,
                              handleSetTypingRef: eD,
                              typingRef: eg,
                              currentUser: g,
                          }),
                          nameplate: M,
                          subText: (0, i.jsx)(eo, {
                              hideSubtext: w,
                              activities: C,
                              status: y,
                              applicationStream: E,
                              voiceStatusChannel: eA,
                              user: p,
                              channel: T,
                              isHoveringOrFocusing: eh || ef,
                              quest: eT,
                              hideTooltip: k,
                          }),
                          decorators: (0, i.jsx)(es, {
                              user: p,
                              isOwner: u,
                              lostPermissionTooltipText: h,
                              ownerTooltipText: d,
                              premiumSince: _,
                              onClickPremiumGuildIcon: V,
                          }),
                          "aria-controls": F,
                          "aria-expanded": H,
                          "aria-setsize": q,
                          "aria-posinset": B,
                          id: X,
                          tabIndex: Q,
                          onFocus: ek,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...ev,
                      }),
              });
    });
