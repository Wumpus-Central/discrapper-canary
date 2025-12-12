n.d(t, { Z: () => w }), n(388685), n(642613), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(742280),
    o = n(442837),
    c = n(681715),
    u = n(481060),
    d = n(355467),
    p = n(493683),
    f = n(393903),
    g = n(81643),
    h = n(100527),
    m = n(367907),
    b = n(791250),
    E = n(752048),
    _ = n(518950),
    O = n(592125),
    v = n(480294),
    y = n(158776),
    I = n(699516),
    C = n(111583),
    S = n(594174),
    T = n(351402),
    N = n(823379),
    j = n(399521),
    P = n(981631),
    x = n(388032),
    A = n(938359);
function Z(e) {
    var t, n;
    let { user: i, index: l, isCompetitive: a } = e,
        { status: s, isMobile: c } = (0, o.cj)([y.Z], () => ({
            status: y.Z.getStatus(i.id),
            isMobile: y.Z.isMobileOnline(i.id),
        })),
        d = (0, o.e7)([C.Z, O.Z], () => {
            let e = O.Z.getDMFromUserId(i.id);
            return null != e && C.Z.isTyping(e, i.id);
        }, [i]),
        { avatarSrc: f, eventHandlers: g } = (0, _.Z)({
            userId: i.id,
            size: u.EFr.SIZE_32,
            animateOnHover: !0,
        }),
        b = async () => {
            var e, t;
            await p.Z.openPrivateChannel({
                recipientIds: [i.id],
                location: h.Z.FREQUENT_FRIENDS_ROW,
            });
            let n = O.Z.getDMFromUserId(i.id);
            null != n &&
                (0, m.yw)(
                    P.rMx.CHANNEL_OPENED,
                    ((e = (function (e) {
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
                    })({}, (0, m.$H)(n))),
                    (t = t = { location: "".concat(h.Z.FREQUENT_FRIENDS_ROW, " ").concat(l + 1) }),
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
                    e),
                );
        },
        E = 0 === l,
        v = E ? u.YqE : a ? u.XcD : void 0,
        I = E ? x.intl.string(x.t.aI4VOL) : a ? x.intl.string(x.t.kABl2x) : void 0;
    return (0, r.jsx)(u.P3F, {
        className: A.frequentFriendAvatarButton,
        onClick: b,
        onMouseEnter: g.onMouseEnter,
        onMouseLeave: g.onMouseLeave,
        "aria-label": x.intl.formatToPlainString(x.t.M5FjCr, { username: i.username }),
        children: (0, r.jsx)(u.qEK, {
            src: f,
            "aria-label": null != (t = i.globalName) ? t : i.username,
            status: s,
            isTyping: d,
            isMobile: c && !d,
            size: u.EFr.SIZE_32,
            CutoutIcon: v,
            avatarTooltipAsset: E ? "\uD83D\uDD25" : a ? "\u2744️" : void 0,
            avatarTooltipText: I,
            statusTooltip: !0,
            statusTooltipDelay: 50,
            avatarTooltipTitle: null != (n = i.globalName) ? n : i.username,
        }),
    });
}
function w() {
    let { enabled: e } = (0, j.Q)("frequent_friends_row"),
        t = (function () {
            let e = (0, o.Wu)([E.Z], () =>
                    [...E.Z.getUserAffinities()].sort((e, t) => E.Z.compare(e.otherUserId, t.otherUserId)),
                ),
                t = (0, o.Wu)([S.default, I.Z], () => {
                    let t = e.map((e) => e.otherUserId),
                        n = [];
                    for (let e of t)
                        if (n.length < 5) {
                            let t = S.default.getUser(e);
                            !(0, N.lm)(t) || I.Z.isIgnored(t.id) || I.Z.isBlocked(t.id) || n.push(t);
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
        n = (0, o.e7)([v.Z], () => v.Z.hasConsented(P.pjP.PERSONALIZATION)),
        l = (0, o.e7)([S.default], () => {
            var e, t;
            return null != (t = null == (e = S.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) && t;
        }),
        [p, h] = i.useState({
            scrollLeft: 0,
            scrollWidth: 0,
            clientWidth: 0,
        }),
        m = i.useRef(null),
        _ = (0, o.e7)([T.Z], () => T.Z.ipCountryCode),
        O = (0, g.gD)(),
        y = i.useCallback(() => {
            var e;
            let t = null == (e = m.current) ? void 0 : e.getScrollerNode();
            null != t &&
                h({
                    scrollLeft: t.scrollLeft,
                    scrollWidth: t.scrollWidth,
                    clientWidth: t.clientWidth,
                });
        }, []);
    i.useEffect(() => {
        (null == t ? void 0 : t.frequentFriends.length) != null && y();
    }, [null == t ? void 0 : t.frequentFriends.length, null == t ? void 0 : t.showCompetitiveSpot, y]);
    let C = (0, f.y)(y, []),
        w = i.useCallback(
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
            (0, d.GE)();
        }, []),
        !e || null == t || !n)
    )
        return null;
    let { frequentFriends: L, showCompetitiveSpot: R } = t,
        D = (_ === s.S.AU || _ === s.S.GB) && !O,
        M = null != _ && s.M.EU_COUNTRIES.has(_) && !l,
        k = !D && !M && null != _ && R,
        U = p.scrollWidth > p.clientWidth,
        G = p.scrollLeft > 0,
        B = p.scrollLeft < p.scrollWidth - p.clientWidth - 2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: A.frequentFriendsRow,
                children: [
                    (0, r.jsxs)("div", {
                        className: A.frequentFriendsHeader,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/semibold",
                                className: A.frequentFriendsTitle,
                                children: x.intl.string(x.t.QEh90H),
                            }),
                            (0, r.jsx)(c.u, {
                                text: x.intl.string(x.t.tqCMcU),
                                children: (0, r.jsx)(u.d3s, { className: A.frequentFriendsInfoIcon }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.xVE, {
                        ref: (e) => {
                            (m.current = e),
                                (C.current =
                                    (null == e ? void 0 : e.getScrollerNode()) != null ? e.getScrollerNode() : null);
                        },
                        className: a()(A.frequentFriendsAvatars, {
                            [A.scrollMaskLeft]: U && G,
                            [A.scrollMaskRight]: U && B,
                        }),
                        orientation: "horizontal",
                        onScroll: w,
                        children: L.map((e, t) =>
                            (0, r.jsx)(
                                Z,
                                {
                                    user: e,
                                    index: t,
                                    isCompetitive: k && t === L.length - 1,
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            }),
            (0, r.jsx)(b.d, {}),
        ],
    });
}
