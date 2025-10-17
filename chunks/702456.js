n.d(t, { Z: () => x }), n(388685), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(493683),
    u = n(663701),
    d = n(393903),
    p = n(100527),
    f = n(367907),
    h = n(752048),
    g = n(518950),
    m = n(592125),
    b = n(480294),
    _ = n(158776),
    E = n(699516),
    O = n(111583),
    v = n(594174),
    y = n(823379),
    I = n(399521),
    C = n(981631),
    S = n(388032),
    N = n(944658);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    var t, n;
    let { user: i, index: l, isCompetitive: a } = e,
        { status: u, isMobile: d } = (0, o.cj)([_.Z], () => ({
            status: _.Z.getStatus(i.id),
            isMobile: _.Z.isMobileOnline(i.id),
        })),
        h = (0, o.e7)([O.Z, m.Z], () => {
            let e = m.Z.getDMFromUserId(i.id);
            return null != e && O.Z.isTyping(e, i.id);
        }, [i]),
        { avatarSrc: b, eventHandlers: E } = (0, g.Z)({
            userId: i.id,
            size: s.EFr.SIZE_32,
            animateOnHover: !0,
        }),
        v = async () => {
            await c.Z.openPrivateChannel({
                recipientIds: [i.id],
                location: p.Z.FREQUENT_FRIENDS_ROW,
            });
            let e = m.Z.getDMFromUserId(i.id);
            null != e &&
                (0, f.yw)(
                    C.rMx.CHANNEL_OPENED,
                    P(T({}, (0, f.$H)(e)), { location: "".concat(p.Z.FREQUENT_FRIENDS_ROW, " ").concat(l + 1) }),
                );
        },
        y = 0 === l,
        I = y ? s.YqE : a ? s.XcD : void 0,
        j = y ? S.intl.string(S.t.aI4VOD) : a ? S.intl.string(S.t.kABl29) : void 0;
    return (0, r.jsx)(s.P3F, {
        className: N.frequentFriendAvatarButton,
        onClick: v,
        onMouseEnter: E.onMouseEnter,
        onMouseLeave: E.onMouseLeave,
        "aria-label": S.intl.formatToPlainString(S.t.M5FjCg, { username: i.username }),
        children: (0, r.jsx)(s.qEK, {
            src: b,
            "aria-label": null != (t = i.globalName) ? t : i.username,
            status: u,
            isTyping: h,
            isMobile: d && !h,
            size: s.EFr.SIZE_32,
            CutoutIcon: I,
            avatarTooltipAsset: y ? "\uD83D\uDD25" : a ? "\u2744️" : void 0,
            avatarTooltipText: j,
            statusTooltip: !0,
            statusTooltipDelay: 50,
            avatarTooltipTitle: null != (n = i.globalName) ? n : i.username,
        }),
    });
}
function x() {
    let { enabled: e } = (0, I.Q)("frequent_friends_row"),
        t = (function () {
            let e = (0, o.Wu)([h.Z], () =>
                    [...h.Z.getUserAffinities()].sort((e, t) => h.Z.compare(e.otherUserId, t.otherUserId)),
                ),
                t = (0, o.Wu)([v.default, E.Z], () => {
                    let t = e.map((e) => e.otherUserId),
                        n = [];
                    for (let e of t)
                        if (n.length < 5) {
                            let t = v.default.getUser(e);
                            !(0, y.lm)(t) || E.Z.isIgnored(t.id) || E.Z.isBlocked(t.id) || n.push(t);
                        } else break;
                    return n;
                }, [e]),
                n = i.useMemo(() => {
                    var n, r;
                    if (t.length < 5) return !1;
                    let i = e.findIndex((e) => e.otherUserId === t[4].id);
                    return (
                        !!(i < e.length - 1) &&
                        !!(
                            (null == (n = e[i]) ? void 0 : n.communicationProbability) - 0.25 <=
                            (null == (r = e[i + 1]) ? void 0 : r.communicationProbability)
                        )
                    );
                }, [e, t]);
            return t.length < 3
                ? null
                : {
                      frequentFriends: t,
                      showCompetitiveSpot: n,
                  };
        })(),
        n = (0, o.e7)([b.Z], () => b.Z.hasConsented(C.pjP.PERSONALIZATION)),
        [l, c] = i.useState({
            scrollLeft: 0,
            scrollWidth: 0,
            clientWidth: 0,
        }),
        p = i.useRef(null),
        f = i.useCallback(() => {
            var e;
            let t = null == (e = p.current) ? void 0 : e.getScrollerNode();
            null != t &&
                c({
                    scrollLeft: t.scrollLeft,
                    scrollWidth: t.scrollWidth,
                    clientWidth: t.clientWidth,
                });
        }, []);
    i.useEffect(() => {
        (null == t ? void 0 : t.frequentFriends.length) != null && f();
    }, [null == t ? void 0 : t.frequentFriends.length, null == t ? void 0 : t.showCompetitiveSpot, f]);
    let g = (0, d.y)(f, []),
        m = i.useCallback(
            (e) => {
                let t = e.currentTarget;
                c({
                    scrollLeft: t.scrollLeft,
                    scrollWidth: t.scrollWidth,
                    clientWidth: t.clientWidth,
                });
            },
            [c],
        );
    if (!e || null == t || !n) return null;
    let { frequentFriends: _, showCompetitiveSpot: O } = t,
        x = l.scrollWidth > l.clientWidth,
        A = l.scrollLeft > 0,
        Z = l.scrollLeft < l.scrollWidth - l.clientWidth - 2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: N.frequentFriendsRow,
                children: [
                    (0, r.jsxs)("div", {
                        className: N.frequentFriendsHeader,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/semibold",
                                className: N.frequentFriendsTitle,
                                children: S.intl.string(S.t.QEh90N),
                            }),
                            (0, r.jsx)(s.aML, {
                                "data-migration-pending": !0,
                                text: S.intl.string(S.t.tqCMcX),
                                children: (e) =>
                                    (0, r.jsx)(s.d3s, P(T({}, e), { className: N.frequentFriendsInfoIcon })),
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.xVE, {
                        ref: (e) => {
                            (p.current = e),
                                (g.current =
                                    (null == e ? void 0 : e.getScrollerNode()) != null ? e.getScrollerNode() : null);
                        },
                        className: a()(N.frequentFriendsAvatars, {
                            [N.scrollMaskLeft]: x && A,
                            [N.scrollMaskRight]: x && Z,
                        }),
                        orientation: "horizontal",
                        onScroll: m,
                        children: _.map((e, t) =>
                            (0, r.jsx)(
                                j,
                                {
                                    user: e,
                                    index: t,
                                    isCompetitive: t === _.length - 1 && O,
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            }),
            (0, r.jsx)(u.d, {}),
        ],
    });
}
