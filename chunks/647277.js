n.d(t, { _: () => w }), n(539854), n(388685);
var r = n(951288);
n(647438);
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
    p = n(503249),
    h = n(239547),
    m = n(796634),
    g = n(656139),
    E = n(981631),
    b = n(388032),
    y = n(756555),
    O = n(456254);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = (e) => {
        let { startingScreen: t, analyticsLocations: i } = e;
        c.default.track(E.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 656139));
                return (n) => (0, r.jsx)(e, S(I({}, n), { startingScreen: t }));
            });
    },
    C = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, l.Z)({
                userId: t.id,
                size: s.EFr.SIZE_24,
            });
        return (0, r.jsx)(
            s.qEK,
            I(
                {
                    className: y.referredFriendAvatar,
                    src: n,
                    "aria-label": (0, d.oY)(t),
                    size: s.EFr.SIZE_24,
                },
                i,
            ),
            t.id,
        );
    },
    N = (e) => {
        let { slotIndex: t } = e;
        return (0, r.jsx)("div", {
            className: y.availableReferralSlot,
            children: t,
        });
    },
    R = (e) => {
        let { referralSentUsers: t } = e,
            n = () => {
                let e = [];
                for (let n = 0; n < m.Q; n++)
                    if ((null == t ? void 0 : t[n]) !== void 0) {
                        let i = (0, r.jsx)(C, { user: t[n] }, t[n].id);
                        e.push(i);
                    } else {
                        let t = (0, r.jsx)(N, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            };
        return (0, r.jsx)("div", {
            className: y.progressContainer,
            children: n(),
        });
    },
    P = (e) => {
        let { nReferralsSent: t } = e,
            n = 33.3 * t,
            i =
                p.ZP.useExperiment({ location: "ProgressWheel" }).cohort === p.$P.NitroLogo
                    ? (0, r.jsx)(h.I, {})
                    : (0, r.jsx)(s.Eep, {
                          src: O.Z,
                          height: 104,
                          width: 104,
                      });
        return (0, r.jsx)(s._3P, {
            percent: n,
            colorOverride: "#53ac66",
            background: y.progressCircleBackground,
            strokeSize: 0.8,
            ringColorOverrideClassName: y.progressCircleRing,
            overlayClassName: t === m.Q ? y.glow : void 0,
            children: i,
        });
    },
    w = (e) => {
        let { className: t } = e,
            { referralSentUsers: n } = (0, m.G)(),
            i = (0, o.e7)([_.Z], () => _.Z.getRecipientStatus()),
            l = (0, o.e7)([_.Z], () => _.Z.getHasEligibleFriends()),
            c = i.size === m.Q && i.values().every((e) => e === f.Fe.REDEEMED),
            d = i.size === m.Q,
            p = () =>
                !1 === l
                    ? b.intl.format(b.t["zWhX/f"], { helpdeskArticle: u.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM) })
                    : n.length === m.Q
                      ? !0 === c
                          ? b.intl.format(b.t["1aEjsL"], { helpdeskArticle: u.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM) })
                          : b.intl.format(b.t["+u3AOD"], { helpdeskArticle: u.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM) })
                      : b.intl.format(b.t["omMr+f"], { helpdeskArticle: u.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM) });
        return (0, r.jsxs)("div", {
            className: a()(y.container, t),
            children: [
                (0, r.jsx)("div", {
                    className: y.progressCircle,
                    children: (0, r.jsx)(P, { nReferralsSent: i.size }),
                }),
                (0, r.jsxs)("div", {
                    className: y.bannerContent,
                    children: [
                        (0, r.jsx)(R, { referralSentUsers: n }),
                        (0, r.jsxs)("div", {
                            className: y.bannerContentText,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: b.intl.string(b.t.USo4s7),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: "text-secondary",
                                    children: p(),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.zxk, {
                            variant: "primary",
                            disabled: !1 === l || !0 === d,
                            text: b.intl.string(b.t.Lm2nFR),
                            onClick: () =>
                                A({
                                    startingScreen: g.K.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
