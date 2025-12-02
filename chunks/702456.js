n.d(t, { Z: () => L }), n(388685), n(642613), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(742280),
    o = n(442837),
    c = n(481060),
    u = n(355467),
    d = n(493683),
    p = n(393903),
    f = n(81643),
    h = n(100527),
    g = n(367907),
    m = n(791250),
    _ = n(752048),
    b = n(518950),
    E = n(592125),
    O = n(480294),
    v = n(158776),
    y = n(699516),
    I = n(111583),
    C = n(594174),
    S = n(351402),
    T = n(823379),
    N = n(399521),
    j = n(981631),
    P = n(388032),
    x = n(944658);
function A(e) {
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
function Z(e, t) {
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
function w(e) {
    var t, n;
    let { user: i, index: l, isCompetitive: a } = e,
        { status: s, isMobile: u } = (0, o.cj)([v.Z], () => ({
            status: v.Z.getStatus(i.id),
            isMobile: v.Z.isMobileOnline(i.id),
        })),
        p = (0, o.e7)([I.Z, E.Z], () => {
            let e = E.Z.getDMFromUserId(i.id);
            return null != e && I.Z.isTyping(e, i.id);
        }, [i]),
        { avatarSrc: f, eventHandlers: m } = (0, b.Z)({
            userId: i.id,
            size: c.EFr.SIZE_32,
            animateOnHover: !0,
        }),
        _ = async () => {
            await d.Z.openPrivateChannel({
                recipientIds: [i.id],
                location: h.Z.FREQUENT_FRIENDS_ROW,
            });
            let e = E.Z.getDMFromUserId(i.id);
            null != e &&
                (0, g.yw)(
                    j.rMx.CHANNEL_OPENED,
                    Z(A({}, (0, g.$H)(e)), { location: "".concat(h.Z.FREQUENT_FRIENDS_ROW, " ").concat(l + 1) }),
                );
        },
        O = 0 === l,
        y = O ? c.YqE : a ? c.XcD : void 0,
        C = O ? P.intl.string(P.t.aI4VOL) : a ? P.intl.string(P.t.kABl2x) : void 0;
    return (0, r.jsx)(c.P3F, {
        className: x.frequentFriendAvatarButton,
        onClick: _,
        onMouseEnter: m.onMouseEnter,
        onMouseLeave: m.onMouseLeave,
        "aria-label": P.intl.formatToPlainString(P.t.M5FjCr, { username: i.username }),
        children: (0, r.jsx)(c.qEK, {
            src: f,
            "aria-label": null != (t = i.globalName) ? t : i.username,
            status: s,
            isTyping: p,
            isMobile: u && !p,
            size: c.EFr.SIZE_32,
            CutoutIcon: y,
            avatarTooltipAsset: O ? "\uD83D\uDD25" : a ? "\u2744️" : void 0,
            avatarTooltipText: C,
            statusTooltip: !0,
            statusTooltipDelay: 50,
            avatarTooltipTitle: null != (n = i.globalName) ? n : i.username,
        }),
    });
}
function L() {
    let { enabled: e } = (0, N.Q)("frequent_friends_row"),
        t = (function () {
            let e = (0, o.Wu)([_.Z], () =>
                    [..._.Z.getUserAffinities()].sort((e, t) => _.Z.compare(e.otherUserId, t.otherUserId)),
                ),
                t = (0, o.Wu)([C.default, y.Z], () => {
                    let t = e.map((e) => e.otherUserId),
                        n = [];
                    for (let e of t)
                        if (n.length < 5) {
                            let t = C.default.getUser(e);
                            !(0, T.lm)(t) || y.Z.isIgnored(t.id) || y.Z.isBlocked(t.id) || n.push(t);
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
        n = (0, o.e7)([O.Z], () => O.Z.hasConsented(j.pjP.PERSONALIZATION)),
        l = (0, o.e7)([C.default], () => {
            var e, t;
            return null != (t = null == (e = C.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) && t;
        }),
        [d, h] = i.useState({
            scrollLeft: 0,
            scrollWidth: 0,
            clientWidth: 0,
        }),
        g = i.useRef(null),
        b = (0, o.e7)([S.Z], () => S.Z.ipCountryCode),
        E = (0, f.gD)(),
        v = i.useCallback(() => {
            var e;
            let t = null == (e = g.current) ? void 0 : e.getScrollerNode();
            null != t &&
                h({
                    scrollLeft: t.scrollLeft,
                    scrollWidth: t.scrollWidth,
                    clientWidth: t.clientWidth,
                });
        }, []);
    i.useEffect(() => {
        (null == t ? void 0 : t.frequentFriends.length) != null && v();
    }, [null == t ? void 0 : t.frequentFriends.length, null == t ? void 0 : t.showCompetitiveSpot, v]);
    let I = (0, p.y)(v, []),
        L = i.useCallback(
            (e) => {
                let t = e.currentTarget;
                h({
                    scrollLeft: t.scrollLeft,
                    scrollWidth: t.scrollWidth,
                    clientWidth: t.clientWidth,
                });
            },
            [h],
        );
    if (
        (i.useEffect(() => {
            (0, u.GE)();
        }, []),
        !e || null == t || !n)
    )
        return null;
    let { frequentFriends: R, showCompetitiveSpot: D } = t,
        M = (b === s.S.AU || b === s.S.GB) && !E,
        k = null != b && s.M.EU_COUNTRIES.has(b) && !l,
        U = !M && !k && null != b && D,
        G = d.scrollWidth > d.clientWidth,
        B = d.scrollLeft > 0,
        H = d.scrollLeft < d.scrollWidth - d.clientWidth - 2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: x.frequentFriendsRow,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.frequentFriendsHeader,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                className: x.frequentFriendsTitle,
                                children: P.intl.string(P.t.QEh90H),
                            }),
                            (0, r.jsx)(c.aML, {
                                "data-migration-pending": !0,
                                text: P.intl.string(P.t.tqCMcU),
                                children: (e) =>
                                    (0, r.jsx)(c.d3s, Z(A({}, e), { className: x.frequentFriendsInfoIcon })),
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.xVE, {
                        ref: (e) => {
                            (g.current = e),
                                (I.current =
                                    (null == e ? void 0 : e.getScrollerNode()) != null ? e.getScrollerNode() : null);
                        },
                        className: a()(x.frequentFriendsAvatars, {
                            [x.scrollMaskLeft]: G && B,
                            [x.scrollMaskRight]: G && H,
                        }),
                        orientation: "horizontal",
                        onScroll: L,
                        children: R.map((e, t) =>
                            (0, r.jsx)(
                                w,
                                {
                                    user: e,
                                    index: t,
                                    isCompetitive: U && t === R.length - 1,
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            }),
            (0, r.jsx)(m.d, {}),
        ],
    });
}
