n.d(t, { Z: () => T }), n(388685), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(493683),
    u = n(663701),
    d = n(393903),
    p = n(752048),
    f = n(518950),
    h = n(592125),
    g = n(480294),
    m = n(158776),
    b = n(699516),
    _ = n(111583),
    O = n(594174),
    E = n(823379),
    v = n(399521),
    y = n(981631),
    I = n(388032),
    C = n(944658);
function S(e) {
    var t, n;
    let { user: i, isFirst: l, isCompetitive: a } = e,
        { status: u, isMobile: d } = (0, o.cj)([m.Z], () => ({
            status: m.Z.getStatus(i.id),
            isMobile: m.Z.isMobileOnline(i.id),
        })),
        p = (0, o.e7)([_.Z, h.Z], () => {
            let e = h.Z.getDMFromUserId(i.id);
            return null != e && _.Z.isTyping(e, i.id);
        }, [i]),
        { avatarSrc: g, eventHandlers: b } = (0, f.Z)({
            userId: i.id,
            size: s.EFr.SIZE_32,
            animateOnHover: !0,
        }),
        O = async () => {
            await c.Z.openPrivateChannel({
                recipientIds: [i.id],
                location: "frequent_friends_row",
            });
        },
        E = l ? s.YqE : a ? s.XcD : void 0,
        v = l ? I.intl.string(I.t.aI4VOL) : a ? I.intl.string(I.t.kABl2x) : void 0;
    return (0, r.jsx)(s.P3F, {
        className: C.frequentFriendAvatarButton,
        onClick: O,
        onMouseEnter: b.onMouseEnter,
        onMouseLeave: b.onMouseLeave,
        "aria-label": I.intl.formatToPlainString(I.t.M5FjCr, { username: i.username }),
        children: (0, r.jsx)(s.qEK, {
            src: g,
            "aria-label": null != (t = i.globalName) ? t : i.username,
            status: u,
            isTyping: p,
            isMobile: d && !p,
            size: s.EFr.SIZE_32,
            CutoutIcon: E,
            avatarTooltipAsset: l ? "\uD83D\uDD25" : a ? "\u2744️" : void 0,
            avatarTooltipText: v,
            statusTooltip: !0,
            statusTooltipDelay: 50,
            avatarTooltipTitle: null != (n = i.globalName) ? n : i.username,
        }),
    });
}
function T() {
    let { enabled: e } = (0, v.Q)("frequent_friends_row"),
        t = (function () {
            let e = (0, o.Wu)([p.Z], () =>
                    [...p.Z.getUserAffinities()].sort((e, t) => p.Z.compare(e.otherUserId, t.otherUserId)),
                ),
                t = (0, o.Wu)([O.default, b.Z], () => {
                    let t = e.map((e) => e.otherUserId),
                        n = [];
                    for (let e of t)
                        if (n.length < 5) {
                            let t = O.default.getUser(e);
                            !(0, E.lm)(t) || b.Z.isIgnored(t.id) || b.Z.isBlocked(t.id) || n.push(t);
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
        n = (0, o.e7)([g.Z], () => g.Z.hasConsented(y.pjP.PERSONALIZATION)),
        [l, c] = i.useState({
            scrollLeft: 0,
            scrollWidth: 0,
            clientWidth: 0,
        }),
        f = i.useRef(null),
        h = i.useCallback(() => {
            var e;
            let t = null == (e = f.current) ? void 0 : e.getScrollerNode();
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
    let m = (0, d.y)(h, []),
        _ = i.useCallback(
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
    let { frequentFriends: T, showCompetitiveSpot: N } = t,
        j = l.scrollWidth > l.clientWidth,
        P = l.scrollLeft > 0,
        x = l.scrollLeft < l.scrollWidth - l.clientWidth - 2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: C.frequentFriendsRow,
                children: [
                    (0, r.jsxs)("div", {
                        className: C.frequentFriendsHeader,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/semibold",
                                className: C.frequentFriendsTitle,
                                children: I.intl.string(I.t.QEh90H),
                            }),
                            (0, r.jsx)(s.aML, {
                                "data-migration-pending": !0,
                                text: I.intl.string(I.t.tqCMcU),
                                children: (e) => {
                                    var t, n;
                                    return (0, r.jsx)(
                                        s.d3s,
                                        ((t = (function (e) {
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
                                        })({}, e)),
                                        (n = n = { className: C.frequentFriendsInfoIcon }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(n)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                              }),
                                        t),
                                    );
                                },
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.xVE, {
                        ref: (e) => {
                            (f.current = e),
                                (m.current =
                                    (null == e ? void 0 : e.getScrollerNode()) != null ? e.getScrollerNode() : null);
                        },
                        className: a()(C.frequentFriendsAvatars, {
                            [C.scrollMaskLeft]: j && P,
                            [C.scrollMaskRight]: j && x,
                        }),
                        orientation: "horizontal",
                        onScroll: _,
                        children: T.map((e, t) =>
                            (0, r.jsx)(
                                S,
                                {
                                    user: e,
                                    isFirst: 0 === t,
                                    isCompetitive: t === T.length - 1 && N,
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
