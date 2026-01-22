n.d(t, {
    S: () => R,
}),
    n(321073),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(854627),
    c = n(954571),
    u = n(975571),
    d = n(427262),
    f = n(326084),
    p = n(851746),
    _ = n(664654),
    h = n(303682),
    m = n(652215),
    g = n(985018),
    E = n(146449),
    b = n(544879);

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

function A(e, t) {
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

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
        let { startingScreen: t, analyticsLocations: i } = e;
        c.default.track(m.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
            location_stack: i,
        }),
            (0, o.mMO)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        v(O({}, n), {
                            startingScreen: t,
                        }),
                    );
            });
    },
    I = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, l.A)({
                userId: t.id,
                size: o._3J.SIZE_24,
            });
        return (0, r.jsx)(
            o.euF,
            O(
                {
                    className: E.bj,
                    src: n,
                    "aria-label": (0, d.mG)(t),
                    size: o._3J.SIZE_24,
                },
                i,
            ),
            t.id,
        );
    },
    T = (e) => {
        let { slotIndex: t } = e;
        return (0, r.jsx)("div", {
            className: E.p,
            children: t,
        });
    },
    C = (e) => {
        let { referralSentUsers: t } = e,
            n = () => {
                let e = [];
                for (let n = 0; n < _.Z; n++)
                    if ((null == t ? void 0 : t[n]) !== void 0) {
                        let i = (0, r.jsx)(
                            I,
                            {
                                user: t[n],
                            },
                            t[n].id,
                        );
                        e.push(i);
                    } else {
                        let t = (0, r.jsx)(
                            T,
                            {
                                slotIndex: n + 1,
                            },
                            n,
                        );
                        e.push(t);
                    }
                return e;
            };
        return (0, r.jsx)("div", {
            className: E.L$,
            children: n(),
        });
    },
    N = (e) => {
        let { nReferralsSent: t } = e,
            n = 33.3 * t;
        return (0, r.jsx)(o.a3E, {
            percent: n,
            colorOverride: "#53ac66",
            background: E.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: E.e0,
            overlayClassName: t === _.Z ? E.ys : void 0,
            children: (0, r.jsx)(o._V3, {
                src: b.A,
                height: 93,
                width: 93,
                zoomable: !1,
            }),
        });
    },
    R = (e) => {
        let { className: t } = e,
            { referralSentUsers: n } = (0, _.J)(),
            i = (0, s.bG)([p.A], () => p.A.getRecipientStatus()),
            l = (0, s.bG)([p.A], () => p.A.getHasEligibleFriends()),
            c = i.size === _.Z && [...i.values()].every((e) => e === f.aK.REDEEMED),
            d = i.size === _.Z,
            b = () =>
                !1 === l
                    ? g.intl.format(g.t["zWhX/Q"], {
                          helpdeskArticle: u.A.getArticleURL(m.MVz.REFERRAL_PROGRAM),
                      })
                    : n.length === _.Z
                      ? !0 === c
                          ? g.intl.format(g.t["1aEjsH"], {
                                helpdeskArticle: u.A.getArticleURL(m.MVz.REFERRAL_PROGRAM),
                            })
                          : g.intl.format(g.t["+u3AOO"], {
                                helpdeskArticle: u.A.getArticleURL(m.MVz.REFERRAL_PROGRAM),
                            })
                      : g.intl.format(g.t["omMr+V"], {
                            helpdeskArticle: u.A.getArticleURL(m.MVz.REFERRAL_PROGRAM),
                        });
        return (0, r.jsxs)("div", {
            className: a()(E.kL, t),
            children: [
                (0, r.jsx)("div", {
                    className: E.G3,
                    children: (0, r.jsx)(N, {
                        nReferralsSent: i.size,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: E.IH,
                    children: [
                        (0, r.jsx)(C, {
                            referralSentUsers: n,
                        }),
                        (0, r.jsxs)("div", {
                            className: E.n4,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: g.intl.string(g.t.USo4s7),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: b(),
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Button, {
                            variant: "primary",
                            disabled: !1 === l || !0 === d,
                            text: g.intl.string(g.t.Lm2nFc),
                            onClick: () =>
                                S({
                                    startingScreen: h.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
