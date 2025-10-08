n.d(t, { Z: () => y }), n(388685), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(493683),
    s = n(663701),
    c = n(752048),
    u = n(518950),
    d = n(480294),
    p = n(158776),
    f = n(699516),
    h = n(594174),
    g = n(823379),
    m = n(399521),
    b = n(981631),
    _ = n(388032),
    O = n(944658);
function E(e) {
    var t, n;
    let { user: i, isFirst: s, isCompetitive: c } = e,
        d = (0, l.e7)([p.Z], () => p.Z.getStatus(i.id)),
        { avatarSrc: f, eventHandlers: h } = (0, u.Z)({
            userId: i.id,
            size: a.EFr.SIZE_32,
            animateOnHover: !0,
        }),
        g = async () => {
            await o.Z.openPrivateChannel({
                recipientIds: [i.id],
                location: "frequent_friends_row",
            });
        },
        m = s ? a.YqE : c ? a.ANZ : void 0,
        b = s ? _.intl.string(_.t.aI4VOD) : c ? _.intl.string(_.t.kABl29) : void 0;
    return (0, r.jsx)(a.P3F, {
        className: O.frequentFriendAvatarButton,
        onClick: g,
        onMouseEnter: h.onMouseEnter,
        onMouseLeave: h.onMouseLeave,
        "aria-label": _.intl.formatToPlainString(_.t.M5FjCg, { username: i.username }),
        children: (0, r.jsx)(a.qEK, {
            src: f,
            "aria-label": null != (t = i.globalName) ? t : i.username,
            status: d,
            size: a.EFr.SIZE_32,
            CutoutIcon: m,
            cutoutIconName: s ? "FireIcon" : c ? "TimerIcon" : void 0,
            avatarTooltipText: b,
            statusTooltip: !0,
            statusTooltipDelay: 50,
            avatarTooltipTitle: null != (n = i.globalName) ? n : i.username,
        }),
    });
}
function y() {
    let { enabled: e } = (0, m.Q)("frequent_friends_row"),
        t = (function () {
            let e = (0, l.Wu)([c.Z], () =>
                    [...c.Z.getUserAffinities()].sort((e, t) => c.Z.compare(e.otherUserId, t.otherUserId)),
                ),
                t = (0, l.Wu)([h.default, f.Z], () => {
                    let t = e.map((e) => e.otherUserId),
                        n = [];
                    for (let e of t)
                        if (n.length < 5) {
                            let t = h.default.getUser(e);
                            !(0, g.lm)(t) || f.Z.isIgnored(t.id) || f.Z.isBlocked(t.id) || n.push(t);
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
        n = (0, l.e7)([d.Z], () => d.Z.hasConsented(b.pjP.PERSONALIZATION));
    if (!e || null == t || !n) return null;
    let { frequentFriends: o, showCompetitiveSpot: u } = t;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: O.frequentFriendsRow,
                children: [
                    (0, r.jsxs)("div", {
                        className: O.frequentFriendsHeader,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/semibold",
                                className: O.frequentFriendsTitle,
                                children: _.intl.string(_.t.QEh90N),
                            }),
                            (0, r.jsx)(a.ua7, {
                                text: _.intl.string(_.t.tqCMcX),
                                children: (e) => {
                                    var t, n;
                                    return (0, r.jsx)(
                                        a.d3s,
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
                                        (n = n = { className: O.frequentFriendsInfoIcon }),
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
                    (0, r.jsx)(a.u2D, {
                        className: O.frequentFriendsAvatars,
                        orientation: "horizontal",
                        children: o.map((e, t) =>
                            (0, r.jsx)(
                                E,
                                {
                                    user: e,
                                    isFirst: 0 === t,
                                    isCompetitive: t === o.length - 1 && u,
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            }),
            (0, r.jsx)(s.d, {}),
        ],
    });
}
