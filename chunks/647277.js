n.d(t, { _: () => R }), n(539854), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(518950),
    c = n(626135),
    u = n(63063),
    d = n(51144),
    f = n(281494),
    _ = n(276444),
    p = n(796634),
    h = n(656139),
    m = n(981631),
    g = n(388032),
    E = n(756555),
    b = n(754761);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = (e) => {
        let { startingScreen: t, analyticsLocations: i } = e;
        c.default.track(m.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 656139));
                return (n) => (0, r.jsx)(e, I(O({}, n), { startingScreen: t }));
            });
    },
    S = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, l.Z)({
                userId: t.id,
                size: s.EFr.SIZE_24,
            });
        return (0, r.jsx)(
            s.qEK,
            O(
                {
                    className: E.referredFriendAvatar,
                    src: n,
                    "aria-label": (0, d.oY)(t),
                    size: s.EFr.SIZE_24,
                },
                i,
            ),
            t.id,
        );
    },
    A = (e) => {
        let { slotIndex: t } = e;
        return (0, r.jsx)("div", {
            className: E.availableReferralSlot,
            children: t,
        });
    },
    C = (e) => {
        let { referralSentUsers: t } = e,
            n = () => {
                let e = [];
                for (let n = 0; n < p.Q; n++)
                    if ((null == t ? void 0 : t[n]) !== void 0) {
                        let i = (0, r.jsx)(S, { user: t[n] }, t[n].id);
                        e.push(i);
                    } else {
                        let t = (0, r.jsx)(A, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            };
        return (0, r.jsx)("div", {
            className: E.progressContainer,
            children: n(),
        });
    },
    N = (e) => {
        let { nReferralsSent: t } = e,
            n = 33.3 * t;
        return (0, r.jsx)(s._3P, {
            percent: n,
            colorOverride: "#53ac66",
            background: E.progressCircleBackground,
            strokeSize: 0.8,
            ringColorOverrideClassName: E.progressCircleRing,
            overlayClassName: t === p.Q ? E.glow : void 0,
            children: (0, r.jsx)(s.Eep, {
                src: b.Z,
                height: 93,
                width: 93,
                zoomable: !1,
            }),
        });
    },
    R = (e) => {
        let { className: t } = e,
            { referralSentUsers: n } = (0, p.G)(),
            i = (0, o.e7)([_.Z], () => _.Z.getRecipientStatus()),
            l = (0, o.e7)([_.Z], () => _.Z.getHasEligibleFriends()),
            c = i.size === p.Q && [...i.values()].every((e) => e === f.Fe.REDEEMED),
            d = i.size === p.Q,
            b = () =>
                !1 === l
                    ? g.intl.format(g.t["zWhX/Q"], { helpdeskArticle: u.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM) })
                    : n.length === p.Q
                      ? !0 === c
                          ? g.intl.format(g.t["1aEjsH"], { helpdeskArticle: u.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM) })
                          : g.intl.format(g.t["+u3AOO"], { helpdeskArticle: u.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM) })
                      : g.intl.format(g.t["omMr+V"], { helpdeskArticle: u.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM) });
        return (0, r.jsxs)("div", {
            className: a()(E.container, t),
            children: [
                (0, r.jsx)("div", {
                    className: E.progressCircle,
                    children: (0, r.jsx)(N, { nReferralsSent: i.size }),
                }),
                (0, r.jsxs)("div", {
                    className: E.bannerContent,
                    children: [
                        (0, r.jsx)(C, { referralSentUsers: n }),
                        (0, r.jsxs)("div", {
                            className: E.bannerContentText,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "header-primary",
                                    children: g.intl.string(g.t.USo4s7),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: "text-secondary",
                                    children: b(),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Button, {
                            variant: "primary",
                            disabled: !1 === l || !0 === d,
                            text: g.intl.string(g.t.Lm2nFc),
                            onClick: () =>
                                T({
                                    startingScreen: h.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
