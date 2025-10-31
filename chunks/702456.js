n.d(t, { Z: () => x }), n(388685), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(493683),
    u = n(393903),
    d = n(100527),
    p = n(367907),
    f = n(791250),
    m = n(752048),
    h = n(518950),
    g = n(592125),
    _ = n(480294),
    b = n(158776),
    E = n(699516),
    O = n(111583),
    I = n(594174),
    y = n(823379),
    v = n(399521),
    C = n(981631),
    S = n(388032),
    T = n(944658);
function N(e) {
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
function j(e, t) {
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
function P(e) {
    var t, n;
    let { user: i, index: l, isCompetitive: a } = e,
        { status: u, isMobile: f } = (0, s.cj)([b.Z], () => ({
            status: b.Z.getStatus(i.id),
            isMobile: b.Z.isMobileOnline(i.id),
        })),
        m = (0, s.e7)([O.Z, g.Z], () => {
            let e = g.Z.getDMFromUserId(i.id);
            return null != e && O.Z.isTyping(e, i.id);
        }, [i]),
        { avatarSrc: _, eventHandlers: E } = (0, h.Z)({
            userId: i.id,
            size: o.EFr.SIZE_32,
            animateOnHover: !0,
        }),
        I = async () => {
            await c.Z.openPrivateChannel({
                recipientIds: [i.id],
                location: d.Z.FREQUENT_FRIENDS_ROW,
            });
            let e = g.Z.getDMFromUserId(i.id);
            null != e &&
                (0, p.yw)(
                    C.rMx.CHANNEL_OPENED,
                    j(N({}, (0, p.$H)(e)), { location: "".concat(d.Z.FREQUENT_FRIENDS_ROW, " ").concat(l + 1) }),
                );
        },
        y = 0 === l,
        v = y ? o.YqE : a ? o.XcD : void 0,
        P = y ? S.intl.string(S.t.aI4VOL) : a ? S.intl.string(S.t.kABl2x) : void 0;
    return (0, r.jsx)(o.P3F, {
        className: T.frequentFriendAvatarButton,
        onClick: I,
        onMouseEnter: E.onMouseEnter,
        onMouseLeave: E.onMouseLeave,
        "aria-label": S.intl.formatToPlainString(S.t.M5FjCr, { username: i.username }),
        children: (0, r.jsx)(o.qEK, {
            src: _,
            "aria-label": null != (t = i.globalName) ? t : i.username,
            status: u,
            isTyping: m,
            isMobile: f && !m,
            size: o.EFr.SIZE_32,
            CutoutIcon: v,
            avatarTooltipAsset: y ? "\uD83D\uDD25" : a ? "\u2744️" : void 0,
            avatarTooltipText: P,
            statusTooltip: !0,
            statusTooltipDelay: 50,
            avatarTooltipTitle: null != (n = i.globalName) ? n : i.username,
        }),
    });
}
function x() {
    let { enabled: e } = (0, v.Q)("frequent_friends_row"),
        t = (function () {
            let e = (0, s.Wu)([m.Z], () =>
                    [...m.Z.getUserAffinities()].sort((e, t) => m.Z.compare(e.otherUserId, t.otherUserId)),
                ),
                t = (0, s.Wu)([I.default, E.Z], () => {
                    let t = e.map((e) => e.otherUserId),
                        n = [];
                    for (let e of t)
                        if (n.length < 5) {
                            let t = I.default.getUser(e);
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
        n = (0, s.e7)([_.Z], () => _.Z.hasConsented(C.pjP.PERSONALIZATION)),
        [l, c] = i.useState({
            scrollLeft: 0,
            scrollWidth: 0,
            clientWidth: 0,
        }),
        d = i.useRef(null),
        p = i.useCallback(() => {
            var e;
            let t = null == (e = d.current) ? void 0 : e.getScrollerNode();
            null != t &&
                c({
                    scrollLeft: t.scrollLeft,
                    scrollWidth: t.scrollWidth,
                    clientWidth: t.clientWidth,
                });
        }, []);
    i.useEffect(() => {
        (null == t ? void 0 : t.frequentFriends.length) != null && p();
    }, [null == t ? void 0 : t.frequentFriends.length, null == t ? void 0 : t.showCompetitiveSpot, p]);
    let h = (0, u.y)(p, []),
        g = i.useCallback(
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
    let { frequentFriends: b, showCompetitiveSpot: O } = t,
        x = l.scrollWidth > l.clientWidth,
        A = l.scrollLeft > 0,
        Z = l.scrollLeft < l.scrollWidth - l.clientWidth - 2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: T.frequentFriendsRow,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.frequentFriendsHeader,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/semibold",
                                className: T.frequentFriendsTitle,
                                children: S.intl.string(S.t.QEh90H),
                            }),
                            (0, r.jsx)(o.aML, {
                                "data-migration-pending": !0,
                                text: S.intl.string(S.t.tqCMcU),
                                children: (e) =>
                                    (0, r.jsx)(o.d3s, j(N({}, e), { className: T.frequentFriendsInfoIcon })),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.xVE, {
                        ref: (e) => {
                            (d.current = e),
                                (h.current =
                                    (null == e ? void 0 : e.getScrollerNode()) != null ? e.getScrollerNode() : null);
                        },
                        className: a()(T.frequentFriendsAvatars, {
                            [T.scrollMaskLeft]: x && A,
                            [T.scrollMaskRight]: x && Z,
                        }),
                        orientation: "horizontal",
                        onScroll: g,
                        children: b.map((e, t) =>
                            (0, r.jsx)(
                                P,
                                {
                                    user: e,
                                    index: t,
                                    isCompetitive: t === b.length - 1 && O,
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            }),
            (0, r.jsx)(f.d, {}),
        ],
    });
}
