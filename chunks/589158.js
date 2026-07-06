"use strict";
n.d(t, { A: () => eu });
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
    E = n(463930),
    p = n(97808),
    m = n(778712),
    g = n(922016),
    A = n(960076),
    I = n(397244),
    T = n(714114),
    S = n(394871),
    N = n(709066),
    C = n(235986),
    y = n(310887),
    O = (((i = O || {}).SINGLE_AVATAR = "1"), (i.MULTIPLE_AVATAR = "2"), i);
let R = { [m._3.SIZE_32]: y.dT, [m._3.SIZE_40]: y.Jb };
class v extends s.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = O;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: i, doNotAnimate: s } = this.props;
        return "2" === e
            ? (0, r.jsxs)("div", {
                  className: o()(y.ce, y.jO, n),
                  children: [
                      (0, r.jsxs)(C.A, {
                          children: [
                              (0, r.jsx)("div", { className: o()(y.RH, R[t], y.hC) }),
                              (0, r.jsx)("div", { className: o()(y.RH, R[t], y.hC) }),
                              (0, r.jsx)("div", { className: o()(y.RH, R[t]) }),
                          ],
                      }),
                      (0, r.jsx)(C.A, { grow: 1, className: y.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, r.jsxs)(C.A, {
                  className: o()(y.qf, !s && y.lN, n),
                  children: [
                      (0, r.jsx)("div", { className: o()(y.RH, R[t], i) }),
                      (0, r.jsx)(C.A, {
                          grow: 1,
                          className: o()(y.gM, i),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
var b = n(268218),
    L = n(193663),
    D = n(490427),
    w = n(609425),
    P = n(922301),
    M = n(660184),
    x = n(73392),
    U = n(534400),
    k = n(531685),
    G = n(620141),
    V = n(966598),
    F = n(224964);
function B(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
        i = (0, l.bG)([k.A], () => k.A.isFocused()),
        r = (0, F.A)(),
        a = (0, V.A)(t);
    return (
        s.useEffect(() => {
            i && n && null != a && r.fire(a.x, a.y);
        }, [r, i, a, n]),
        null
    );
}
function H(e) {
    return (0, r.jsx)(G.A, { confettiLocation: e.confettiLocation, children: (0, r.jsx)(B, { ...e }) });
}
var j = n(967144),
    W = n(859703),
    Y = n(24001),
    K = n(347135),
    $ = n(854627),
    z = n(240248),
    q = n(427262),
    Z = n(652215),
    X = n(705751),
    Q = n(31408),
    J = n(375708),
    ee = n(28371);
let et = (0, b.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("31591"),
            n.e("69487"),
            n.e("58846"),
            n.e("41060"),
            n.e("87550"),
            n.e("79664"),
            n.e("85497"),
            n.e("71763"),
            n.e("11310"),
            n.e("53930"),
            n.e("13823"),
            n.e("92583"),
            n.e("32191"),
            n.e("54638"),
            n.e("54625"),
            n.e("35485"),
            n.e("9729"),
            n.e("24761"),
            n.e("32606"),
            n.e("85350"),
            n.e("8563"),
            n.e("4369"),
            n.e("24265"),
            n.e("62875"),
            n.e("55602"),
            n.e("67160"),
        ]).then(n.bind(n, 198525)),
    webpackId: 198525,
    name: "QuestMembersListPopout",
    renderLoader: () => null,
});
(0, z.xI)(c.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
let en = s.memo(function (e) {
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
    ei = s.memo(function (e) {
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
    er = s.memo(function (e) {
        let { user: t } = e;
        if (null == t || !t.bot) return null;
        let n = X.nu.BOT;
        return (0, r.jsx)(N.A, { className: ee.AO, type: n, verified: t.isVerifiedBot() });
    }),
    es = s.memo(function (e) {
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
                (0, r.jsx)(er, { user: t }),
                (0, r.jsx)(en, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: s }),
                (0, r.jsx)(ei, { premiumSince: a, onClickPremiumGuildIcon: o }),
            ],
        });
    }),
    ea = s.memo(function (e) {
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
            c = (0, w.A)({ userId: o?.id, guildId: l }),
            d = (0, x.a)({ displayNameStyles: c }),
            _ = null == l && null != c;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                _
                    ? (0, r.jsx)(M.A, {
                          userName: s ?? "",
                          displayNameStyles: c,
                          effectDisplayType: u ? P.G.ANIMATED : P.G.STATIC,
                          loop: !0,
                      })
                    : (0, r.jsx)(E.g, {
                          roleName: t,
                          colorString: n,
                          colorStrings: i,
                          name: s,
                          className: ee.UU,
                          displayNameStylesFont: d,
                          animateRoleGradient: u,
                      }),
                !a &&
                    (0, r.jsx)(U.Ay, {
                        primaryGuild: o?.primaryGuild,
                        userId: o?.id,
                        contextGuildId: l,
                        disableGuildProfile: !0,
                        className: ee.fc,
                    }),
            ],
        });
    }),
    eo = s.memo(function (e) {
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
            E = s === Z.clD.OFFLINE,
            g = n ? p.Js : p.eu,
            I = (0, A.A)(i) ? Z.clD.STREAMING : s;
        return (
            (I = E ? void 0 : I),
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
                    (0, r.jsx)(H, {
                        confettiSpawnRef: h,
                        shouldFire: c && null != f && t.id !== f.id,
                        confettiLocation: Q.k.MEMBER_USER,
                    }),
                ],
            })
        );
    }),
    el = s.memo(function (e) {
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
    eu = s.memo(function (e) {
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
                user: E,
                currentUser: p,
                activities: A,
                applicationStream: I,
                status: S,
                shouldAnimateStatus: N = !1,
                isMobile: C,
                isVR: y,
                premiumSince: O,
                channel: R,
                guildId: b,
                className: D,
                nameplate: w,
                hideClanTag: P = !1,
                hideSubtext: M = !1,
                hideTooltip: x = !1,
                onMouseDown: U,
                onKeyDown: k,
                onClick: G,
                onContextMenu: V,
                onClickPremiumGuildIcon: F,
                "aria-controls": B,
                "aria-expanded": H,
                "aria-posinset": z,
                "aria-setsize": X,
                id: Q,
                tabIndex: J,
                itemProps: en,
                ref: ei,
            } = e,
            er = E?.id,
            eu = q.Ay.useName(E),
            ec = s.useRef(null),
            ed = ei ?? ec,
            [e_, eh] = s.useState(!1),
            [ef, eE] = s.useState(!1),
            [ep, em] = s.useState(null),
            { voiceChannel: eg } = (0, T.Ay)({ userId: er, guildId: b }),
            {
                avatarDecorationSrc: eA,
                avatarSrc: eI,
                eventHandlers: eT,
            } = (0, $.A)({ userId: er, size: m._3.SIZE_32, animateOnHover: !(t || e_), guildId: b }),
            { onFocus: eS, ...eN } = en ?? {},
            eC = (0, j.gn)(b, er, i ?? null),
            [ey, eO] = s.useState(!1);
        s.useEffect(() => {
            t && eO(!1);
        }, [t]);
        let eR = (0, K.YW)(A),
            ev = (0, l.bG)([W.A], () => W.A.getQuestPreviewOverride(Y.uF.MEMBERS_LIST), []),
            eb = null != ev,
            eL = eb ? ev : eR,
            eD = (0, K.Yl)(eR, I, er),
            ew = (eb || eD) && t && !ey,
            eP = s.useCallback(() => {
                eh(!0);
            }, []),
            eM = s.useCallback(() => {
                eh(!1);
            }, []),
            ex = s.useCallback(() => {
                eE(!0), eS?.();
            }, [eS]),
            eU = s.useCallback(() => {
                eE(!1);
            }, []),
            ek = s.useCallback((e) => {
                em(e);
            }, []),
            eG = s.useCallback(
                (e) =>
                    null == eL
                        ? null
                        : (0, r.jsx)(et, {
                              name: f ?? eu,
                              quest: eL,
                              memberListItemRef: ed,
                              applicationStream: I,
                              ...e,
                              closePopout: () => eO(!0),
                          }),
                [eL, ed, I, f, eu],
            );
        return null == E
            ? (0, r.jsx)(v, { avatarSize: m._3.SIZE_32, className: ee.qf })
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
                      (0, r.jsx)(L.A, {
                          ref: ed,
                          selected: t,
                          className: o()(ee.Dc, D, { [ee.WK]: S === Z.clD.OFFLINE && !t, [ee.PJ]: ew }),
                          innerClassName: ee.Hz,
                          onClick: G,
                          onKeyDown: k,
                          onMouseDown: U,
                          onContextMenu: V,
                          onMouseEnter: eP,
                          onMouseLeave: eM,
                          onBlur: eU,
                          hovered: e_,
                          name:
                              null == _
                                  ? (0, r.jsx)("span", {
                                        className: ee.Xh,
                                        children: (0, r.jsx)(ea, {
                                            colorRoleName: a,
                                            colorString: n ?? null,
                                            name: f ?? eu,
                                            colorStrings: eC,
                                            hideClanTag: P,
                                            user: E,
                                            guildId: b,
                                            isHovering: e_,
                                        }),
                                    })
                                  : (0, r.jsx)(u.m, {
                                        text: _,
                                        children: (0, r.jsx)("span", {
                                            className: o()(ee.Xh, ee.oj),
                                            children: (0, r.jsx)(ea, {
                                                colorRoleName: a,
                                                colorString: n ?? null,
                                                name: f ?? eu,
                                                colorStrings: eC,
                                                hideClanTag: P,
                                                user: E,
                                                guildId: b,
                                                isHovering: e_,
                                            }),
                                        }),
                                    }),
                          avatar: (0, r.jsx)(eo, {
                              user: E,
                              shouldAnimateStatus: N,
                              activities: A,
                              status: S,
                              eventHandlers: eT,
                              avatarSrc: eI,
                              isMobile: C,
                              isVR: y,
                              isTyping: h,
                              avatarDecorationSrc: eA,
                              handleSetTypingRef: ek,
                              typingRef: ep,
                              currentUser: p,
                          }),
                          nameplate: w,
                          subText: (0, r.jsx)(el, {
                              hideSubtext: M,
                              activities: A,
                              status: S,
                              applicationStream: I,
                              voiceStatusChannel: eg,
                              user: E,
                              channel: R,
                              isHoveringOrFocusing: e_ || ef,
                              quest: eR,
                              hideTooltip: x,
                          }),
                          decorators: (0, r.jsx)(es, {
                              user: E,
                              isOwner: c,
                              lostPermissionTooltipText: _,
                              ownerTooltipText: d,
                              premiumSince: O,
                              onClickPremiumGuildIcon: F,
                          }),
                          "aria-controls": B,
                          "aria-expanded": H,
                          "aria-setsize": X,
                          "aria-posinset": z,
                          id: Q,
                          tabIndex: J,
                          onFocus: ex,
                          focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                          ...eN,
                      }),
              });
    });
