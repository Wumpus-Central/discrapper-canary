n.d(t, { Z: () => P }), n(388685), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(493683),
    u = n(663701),
    d = n(393903),
    p = n(367907),
    f = n(752048),
    h = n(518950),
    g = n(592125),
    m = n(480294),
    b = n(158776),
    _ = n(699516),
    O = n(111583),
    E = n(594174),
    v = n(823379),
    y = n(399521),
    I = n(981631),
    C = n(388032),
    S = n(944658);
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
function N(e, t) {
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
        { status: u, isMobile: d } = (0, o.cj)([b.Z], () => ({
            status: b.Z.getStatus(i.id),
            isMobile: b.Z.isMobileOnline(i.id),
        })),
        f = (0, o.e7)([O.Z, g.Z], () => {
            let e = g.Z.getDMFromUserId(i.id);
            return null != e && O.Z.isTyping(e, i.id);
        }, [i]),
        { avatarSrc: m, eventHandlers: _ } = (0, h.Z)({
            userId: i.id,
            size: s.EFr.SIZE_32,
            animateOnHover: !0,
        }),
        E = async () => {
            await c.Z.openPrivateChannel({
                recipientIds: [i.id],
                location: "frequent_friends_row",
            });
            let e = g.Z.getDMFromUserId(i.id);
            null != e &&
                (0, p.yw)(
                    I.rMx.CHANNEL_OPENED,
                    N(T({}, (0, p.$H)(e)), { location: "frequent_friends_row_".concat(l + 1) }),
                );
        },
        v = 0 === l,
        y = v ? s.YqE : a ? s.XcD : void 0,
        j = v ? C.intl.string(C.t.aI4VOD) : a ? C.intl.string(C.t.kABl29) : void 0;
    return (0, r.jsx)(s.P3F, {
        className: S.frequentFriendAvatarButton,
        onClick: E,
        onMouseEnter: _.onMouseEnter,
        onMouseLeave: _.onMouseLeave,
        "aria-label": C.intl.formatToPlainString(C.t.M5FjCg, { username: i.username }),
        children: (0, r.jsx)(s.qEK, {
            src: m,
            "aria-label": null != (t = i.globalName) ? t : i.username,
            status: u,
            isTyping: f,
            isMobile: d && !f,
            size: s.EFr.SIZE_32,
            CutoutIcon: y,
            avatarTooltipAsset: v ? "\uD83D\uDD25" : a ? "\u2744️" : void 0,
            avatarTooltipText: j,
            statusTooltip: !0,
            statusTooltipDelay: 50,
            avatarTooltipTitle: null != (n = i.globalName) ? n : i.username,
        }),
    });
}
function P() {
    let { enabled: e } = (0, y.Q)("frequent_friends_row"),
        t = (function () {
            let e = (0, o.Wu)([f.Z], () =>
                    [...f.Z.getUserAffinities()].sort((e, t) => f.Z.compare(e.otherUserId, t.otherUserId)),
                ),
                t = (0, o.Wu)([E.default, _.Z], () => {
                    let t = e.map((e) => e.otherUserId),
                        n = [];
                    for (let e of t)
                        if (n.length < 5) {
                            let t = E.default.getUser(e);
                            !(0, v.lm)(t) || _.Z.isIgnored(t.id) || _.Z.isBlocked(t.id) || n.push(t);
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
        n = (0, o.e7)([m.Z], () => m.Z.hasConsented(I.pjP.PERSONALIZATION)),
        [l, c] = i.useState({
            scrollLeft: 0,
            scrollWidth: 0,
            clientWidth: 0,
        }),
        p = i.useRef(null),
        h = i.useCallback(() => {
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
        (null == t ? void 0 : t.frequentFriends.length) != null && h();
    }, [null == t ? void 0 : t.frequentFriends.length, null == t ? void 0 : t.showCompetitiveSpot, h]);
    let g = (0, d.y)(h, []),
        b = i.useCallback(
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
    let { frequentFriends: O, showCompetitiveSpot: P } = t,
        x = l.scrollWidth > l.clientWidth,
        A = l.scrollLeft > 0,
        Z = l.scrollLeft < l.scrollWidth - l.clientWidth - 2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.frequentFriendsRow,
                children: [
                    (0, r.jsxs)("div", {
                        className: S.frequentFriendsHeader,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/semibold",
                                className: S.frequentFriendsTitle,
                                children: C.intl.string(C.t.QEh90N),
                            }),
                            (0, r.jsx)(s.aML, {
                                "data-migration-pending": !0,
                                text: C.intl.string(C.t.tqCMcX),
                                children: (e) =>
                                    (0, r.jsx)(s.d3s, N(T({}, e), { className: S.frequentFriendsInfoIcon })),
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.xVE, {
                        ref: (e) => {
                            (p.current = e),
                                (g.current =
                                    (null == e ? void 0 : e.getScrollerNode()) != null ? e.getScrollerNode() : null);
                        },
                        className: a()(S.frequentFriendsAvatars, {
                            [S.scrollMaskLeft]: x && A,
                            [S.scrollMaskRight]: x && Z,
                        }),
                        orientation: "horizontal",
                        onScroll: b,
                        children: O.map((e, t) =>
                            (0, r.jsx)(
                                j,
                                {
                                    user: e,
                                    index: t,
                                    isCompetitive: t === O.length - 1 && P,
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
