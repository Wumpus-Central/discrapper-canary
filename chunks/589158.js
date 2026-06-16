"use strict";
n.d(t, { A: () => el });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(17928),
    u = n(990078),
    c = n(319060),
    d = n(329177),
    _ = n(939249),
    h = n(104510),
    f = n(661531),
    p = n(463930),
    E = n(97808),
    m = n(778712),
    g = n(922016),
    A = n(960076),
    I = n(397244),
    T = n(714114),
    S = n(394871),
    y = n(709066),
    C = n(235986),
    N = n(310887),
    v = (((i = v || {}).SINGLE_AVATAR = "1"), (i.MULTIPLE_AVATAR = "2"), i);
let R = { [m._3.SIZE_32]: N.dT, [m._3.SIZE_40]: N.Jb };
class O extends s.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = v;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: i, doNotAnimate: s } = this.props;
        return "2" === e
            ? (0, r.jsxs)("div", {
                  className: o()(N.ce, N.jO, n),
                  children: [
                      (0, r.jsxs)(C.A, {
                          children: [
                              (0, r.jsx)("div", { className: o()(N.RH, R[t], N.hC) }),
                              (0, r.jsx)("div", { className: o()(N.RH, R[t], N.hC) }),
                              (0, r.jsx)("div", { className: o()(N.RH, R[t]) }),
                          ],
                      }),
                      (0, r.jsx)(C.A, { grow: 1, className: N.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, r.jsxs)(C.A, {
                  className: o()(N.qf, !s && N.lN, n),
                  children: [
                      (0, r.jsx)("div", { className: o()(N.RH, R[t], i) }),
                      (0, r.jsx)(C.A, {
                          grow: 1,
                          className: o()(N.gM, i),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var b = n(193663),
    D = n(490427),
    L = n(609425),
    w = n(922301),
    M = n(660184),
    P = n(73392),
    x = n(534400),
    k = n(531685),
    U = n(620141),
    G = n(966598),
    F = n(224964);
function V(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        i = (0, l.bG)([k.A], () => k.A.isFocused()),
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
    return (0, r.jsx)(U.A, { confettiLocation: e.confettiLocation, children: (0, r.jsx)(V, { ...e }) });
}
var j = n(967144),
    H = n(859703),
    Y = n(507107),
    W = n(347135),
    K = n(198525),
    $ = n(854627),
    z = n(240248),
    q = n(427262),
    Z = n(652215),
    X = n(705751),
    Q = n(31408),
    J = n(375708),
    ee = n(28371);
(0, z.xI)(c.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let et = s.memo(function (e) {
        let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
        return null != t && t && null == n
            ? (0, r.jsx)(u.m, {
                  __unsupportedReactNodeAsText: i ?? J.intl.string(J.t.pclUFJ),
                  children: (0, r.jsx)(d.p, {
                      size: "md",
                      color: "currentColor",
                      className: ee.Dd,
                      "aria-label": i ?? J.intl.string(J.t.pclUFJ),
                  }),
              })
            : null;
    }),
    en = s.memo(function (e) {
        let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
        return null == t
            ? null
            : (0, r.jsx)(u.m, {
                  text: J.intl.formatToPlainString(J.t.IWkAq7, { date: t }),
                  asContainer: !0,
                  children: (0, r.jsx)(_.D, {
                      onClick: n,
                      tabIndex: -1,
                      children: (0, r.jsx)(h._, { color: f.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: ee.PC }),
                  }),
              });
    }),
    ei = s.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = X.nu.BOT;
        return (0, r.jsx)(y.A, { className: ee.AO, type: n, verified: t.isVerifiedBot() });
    }),
    er = s.memo(function (e) {
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
                (0, r.jsx)(ei, { user: t }),
                (0, r.jsx)(et, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: s }),
                (0, r.jsx)(en, { premiumSince: a, onClickPremiumGuildIcon: o }),
            ],
        });
    }),
    es = s.memo(function (e) {
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
            c = (0, L.A)({ userId: o?.id, guildId: l }),
            d = (0, P.a)({ displayNameStyles: c }),
            _ = null == l && null != c;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                _
                    ? (0, r.jsx)(M.A, {
                          userName: s ?? "",
                          displayNameStyles: c,
                          effectDisplayType: u ? w.G.ANIMATED : w.G.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(p.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: s,
                          className: ee.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: u,
                      }),
                !a &&
                    (0, r.jsx)(x.Ay, {
                        primaryGuild: o?.primaryGuild,
                        userId: o?.id,
                        contextGuildId: l,
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
                activities: i,
                status: s,
                eventHandlers: a,
                avatarSrc: o,
                isMobile: l,
                isVR: u,
                isTyping: c,
                avatarDecorationSrc: d,
                handleSetTypingRef: _,
                typingRef: h,
                currentUser: f,
            } = e,
            p = s === Z.clD.OFFLINE,
            g = n ? E.Js : E.eu,
            I = (0, A.A)(i) ? Z.clD.STREAMING : s;
        return (
            (I = p ? void 0 : I),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(g, {
                        ...a,
                        size: m._3.SIZE_32,
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
                        confettiSpawnRef: h,
                        shouldFire: c && null != f && t.id !== f.id,
                        confettiLocation: Q.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    eo = s.memo(function (e) {
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
            h = s.useMemo(
                () => (0, I.A)({ activities: i, status: a, applicationStream: o, voiceChannel: l }),
                [i, a, o, l],
            ),
            f = s.useMemo(
                () =>
                    !(0, D.A)({
                        activity: i?.find((e) => {
                            let { type: t } = e;
                            return t === Z.$pd.CUSTOM_STATUS;
                        }),
                        user: u,
                        channel: c,
                    }),
                [i, u, c],
            );
        return t || !h
            ? null
            : (0, r.jsx)(S.A, {
                  user: u,
                  activities: i,
                  applicationStream: o,
                  voiceChannel: l,
                  animateEmoji: d,
                  hideEmoji: f,
                  hasQuest: null != _,
                  hideTooltip: n,
              });
    }),
    el = s.memo(function (e) {
        let {
                selected: t = !1,
                colorString: n,
                colorStrings: i,
                colorRoleName: a,
                isOwner: c,
                ownerTooltipText: d,
                lostPermissionTooltipText: _,
                isTyping: h = !1,
                nick: f,
                user: p,
                currentUser: E,
                activities: A,
                applicationStream: I,
                status: S,
                shouldAnimateStatus: y = !1,
                isMobile: C,
                isVR: N,
                premiumSince: v,
                channel: R,
                guildId: D,
                className: L,
                nameplate: w,
                hideClanTag: M = !1,
                hideSubtext: P = !1,
                hideTooltip: x = !1,
                onMouseDown: k,
                onKeyDown: U,
                onClick: G,
                onContextMenu: F,
                onClickPremiumGuildIcon: V,
                "aria-controls": B,
                "aria-expanded": z,
                "aria-posinset": X,
                "aria-setsize": Q,
                id: J,
                tabIndex: et,
                itemProps: en,
                ref: ei,
            } = e,
            el = p?.id,
            eu = q.Ay.useName(p),
            ec = s.useRef(null),
            ed = ei ?? ec,
            [e_, eh] = s.useState(!1),
            [ef, ep] = s.useState(!1),
            [eE, em] = s.useState(null),
            { voiceChannel: eg } = (0, T.A)({ userId: el, guildId: D }),
            {
                avatarDecorationSrc: eA,
                avatarSrc: eI,
                eventHandlers: eT,
            } = (0, $.A)({ userId: el, size: m._3.SIZE_32, animateOnHover: !(t || e_), guildId: D }),
            { onFocus: eS, ...ey } = en ?? {},
            eC = (0, j.gn)(D, el, i ?? null),
            [eN, ev] = s.useState(!1);
        s.useEffect(() => {
            t && ev(!1);
        }, [t]);
        let eR = (0, W.YW)(A),
            eO = (0, l.bG)([H.A], () => H.A.getQuestPreviewOverride(Y.uF.MEMBERS_LIST), []),
            eb = null != eO,
            eD = eb ? eO : eR,
            eL = (0, W.Yl)(eR, I, el),
            ew = (eb || eL) && t && !eN,
            eM = s.useCallback(() => {
                eh(!0);
            }, []),
            eP = s.useCallback(() => {
                eh(!1);
            }, []),
            ex = s.useCallback(() => {
                ep(!0), eS?.();
            }, [eS]),
            ek = s.useCallback(() => {
                ep(!1);
            }, []),
            eU = s.useCallback((e) => {
                em(e);
            }, []),
            eG = s.useCallback(
                (e) =>
                    null == eD
                        ? null
                        : (0, r.jsx)(K.A, {
                              name: f ?? eu,
                              quest: eD,
                              memberListItemRef: ed,
                              applicationStream: I,
                              ...e,
                              closePopout: () => ev(!0),
                          }),
                [eD, ed, I, f, eu],
            );
        return null == p
            ? (0, r.jsx)(O, { avatarSize: m._3.SIZE_32, className: ee.qf })
            : (0, r.jsx)(g.Y, {
                  targetElementRef: ed,
                  renderPopout: eG,
                  position: "bottom",
                  shouldShow: ew,
                  nudgeAlignIntoViewport: !1,
                  useRawTargetDimensions: !0,
                  animation: g.Y.Animation.NONE,
                  spacing: -3,
                  children: () =>
                      (0, r.jsx)(b.A, {
                          ref: ed,
                          selected: t,
                          className: o()(ee.Dc, L, { [ee.WK]: S === Z.clD.OFFLINE && !t, [ee.PJ]: ew }),
                          innerClassName: ee.Hz,
                          onClick: G,
                          onKeyDown: U,
                          onMouseDown: k,
                          onContextMenu: F,
                          onMouseEnter: eM,
                          onMouseLeave: eP,
                          onBlur: ek,
                          hovered: e_,
                          name:
                              null == _
                                  ? (0, r.jsx)("span", {
                                        className: ee.Xh,
                                        children: (0, r.jsx)(es, {
                                            colorRoleName: a,
                                            colorString: n ?? null,
                                            name: f ?? eu,
                                            colorStrings: eC,
                                            hideClanTag: M,
                                            user: p,
                                            guildId: D,
                                            isHovering: e_,
                                        }),
                                    })
                                  : (0, r.jsx)(u.m, {
                                        text: _,
                                        children: (0, r.jsx)("span", {
                                            className: o()(ee.Xh, ee.oj),
                                            children: (0, r.jsx)(es, {
                                                colorRoleName: a,
                                                colorString: n ?? null,
                                                name: f ?? eu,
                                                colorStrings: eC,
                                                hideClanTag: M,
                                                user: p,
                                                guildId: D,
                                                isHovering: e_,
                                            }),
                                        }),
                                    }),
                          avatar: (0, r.jsx)(ea, {
                              user: p,
                              shouldAnimateStatus: y,
                              activities: A,
                              status: S,
                              eventHandlers: eT,
                              avatarSrc: eI,
                              isMobile: C,
                              isVR: N,
                              isTyping: h,
                              avatarDecorationSrc: eA,
                              handleSetTypingRef: eU,
                              typingRef: eE,
                              currentUser: E,
                          }),
                          nameplate: w,
                          subText: (0, r.jsx)(eo, {
                              hideSubtext: P,
                              activities: A,
                              status: S,
                              applicationStream: I,
                              voiceStatusChannel: eg,
                              user: p,
                              channel: R,
                              isHoveringOrFocusing: e_ || ef,
                              quest: eR,
                              hideTooltip: x,
                          }),
                          decorators: (0, r.jsx)(er, {
                              user: p,
                              isOwner: c,
                              lostPermissionTooltipText: _,
                              ownerTooltipText: d,
                              premiumSince: v,
                              onClickPremiumGuildIcon: V,
                          }),
                          "aria-controls": B,
                          "aria-expanded": z,
                          "aria-setsize": Q,
                          "aria-posinset": X,
                          id: J,
                          tabIndex: et,
                          onFocus: ex,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...ey,
                      }),
              });
    });
