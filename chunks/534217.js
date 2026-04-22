n.d(t, { S: () => M }), n(321073);
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(311907),
    l = n(192308),
    c = n(778712),
    o = n(97808),
    d = n(590251),
    u = n(673698),
    _ = n(534514),
    m = n(834730),
    p = n(821609),
    f = n(854627),
    A = n(954571),
    g = n(975571),
    h = n(427262),
    b = n(326084),
    x = n(851746),
    C = n(664654),
    v = n(303682),
    R = n(652215),
    N = n(985018),
    E = n(849812),
    j = n(544879);
let T = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: a } = (0, f.A)({ userId: t.id, size: c._3.SIZE_24 });
        return (0, r.jsx)(
            o.eu,
            { className: E.bj, src: n, "aria-label": (0, h.mG)(t), size: c._3.SIZE_24, ...a },
            t.id,
        );
    },
    y = (e) => {
        let { slotIndex: t } = e;
        return (0, r.jsx)("div", { className: E.p, children: t });
    },
    I = (e) => {
        let { referralSentUsers: t } = e;
        return (0, r.jsx)("div", {
            className: E.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < C.Z; n++)
                    if (t?.[n] !== void 0) {
                        let a = (0, r.jsx)(T, { user: t[n] }, t[n].id);
                        e.push(a);
                    } else {
                        let t = (0, r.jsx)(y, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    S = (e) => {
        let { nReferralsSent: t } = e;
        return (0, r.jsx)(d.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: E.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: E.e0,
            overlayClassName: t === C.Z ? E.ys : void 0,
            children: (0, r.jsx)(u._, { src: j.A, height: 93, width: 93, zoomable: !1 }),
        });
    },
    M = (e) => {
        let { className: t } = e,
            { referralSentUsers: a } = (0, C.J)(),
            c = (0, s.bG)([x.A], () => x.A.getRecipientStatus()),
            o = (0, s.bG)([x.A], () => x.A.getHasEligibleFriends()),
            d = c.size === C.Z && [...c.values()].every((e) => e === b.aK.REDEEMED),
            u = c.size === C.Z;
        return (0, r.jsxs)("div", {
            className: i()(E.kL, t),
            children: [
                (0, r.jsx)("div", { className: E.G3, children: (0, r.jsx)(S, { nReferralsSent: c.size }) }),
                (0, r.jsxs)("div", {
                    className: E.IH,
                    children: [
                        (0, r.jsx)(I, { referralSentUsers: a }),
                        (0, r.jsxs)("div", {
                            className: E.n4,
                            children: [
                                (0, r.jsx)(_.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: N.intl.string(N.t.USo4s7),
                                }),
                                (0, r.jsx)(m.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === o
                                            ? N.intl.format(N.t["zWhX/Q"], {
                                                  helpdeskArticle: g.A.getArticleURL(R.MVz.REFERRAL_PROGRAM),
                                              })
                                            : a.length === C.Z
                                              ? !0 === d
                                                  ? N.intl.format(N.t["1aEjsH"], {
                                                        helpdeskArticle: g.A.getArticleURL(R.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : N.intl.format(N.t["+u3AOO"], {
                                                        helpdeskArticle: g.A.getArticleURL(R.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : N.intl.format(N.t["omMr+V"], {
                                                    helpdeskArticle: g.A.getArticleURL(R.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            disabled: !1 === o || !0 === u,
                            text: N.intl.string(N.t.Lm2nFc),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: a } = e;
                                    A.default.track(R.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: a,
                                    }),
                                        (0, l.openModalLazy)(async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                            return (n) => (0, r.jsx)(e, { ...n, startingScreen: t });
                                        });
                                })({
                                    startingScreen: v.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
