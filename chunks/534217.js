n.d(t, { S: () => f }), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(311907),
    l = n(397927),
    o = n(854627),
    c = n(954571),
    d = n(975571),
    u = n(427262),
    _ = n(326084),
    m = n(851746),
    A = n(664654),
    g = n(303682),
    E = n(652215),
    h = n(985018),
    p = n(146449),
    C = n(544879);
let x = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: s } = (0, o.A)({ userId: t.id, size: l._3J.SIZE_24 });
        return (0, i.jsx)(
            l.euF,
            { className: p.bj, src: n, "aria-label": (0, u.mG)(t), size: l._3J.SIZE_24, ...s },
            t.id,
        );
    },
    T = (e) => {
        let { slotIndex: t } = e;
        return (0, i.jsx)("div", { className: p.p, children: t });
    },
    I = (e) => {
        let { referralSentUsers: t } = e;
        return (0, i.jsx)("div", {
            className: p.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < A.Z; n++)
                    if (t?.[n] !== void 0) {
                        let s = (0, i.jsx)(x, { user: t[n] }, t[n].id);
                        e.push(s);
                    } else {
                        let t = (0, i.jsx)(T, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    S = (e) => {
        let { nReferralsSent: t } = e;
        return (0, i.jsx)(l.a3E, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: p.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: p.e0,
            overlayClassName: t === A.Z ? p.ys : void 0,
            children: (0, i.jsx)(l._V3, { src: C.A, height: 93, width: 93, zoomable: !1 }),
        });
    },
    f = (e) => {
        let { className: t } = e,
            { referralSentUsers: s } = (0, A.J)(),
            o = (0, a.bG)([m.A], () => m.A.getRecipientStatus()),
            u = (0, a.bG)([m.A], () => m.A.getHasEligibleFriends()),
            C = o.size === A.Z && [...o.values()].every((e) => e === _.aK.REDEEMED),
            x = o.size === A.Z;
        return (0, i.jsxs)("div", {
            className: r()(p.kL, t),
            children: [
                (0, i.jsx)("div", { className: p.G3, children: (0, i.jsx)(S, { nReferralsSent: o.size }) }),
                (0, i.jsxs)("div", {
                    className: p.IH,
                    children: [
                        (0, i.jsx)(I, { referralSentUsers: s }),
                        (0, i.jsxs)("div", {
                            className: p.n4,
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: h.intl.string(h.t.USo4s7),
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === u
                                            ? h.intl.format(h.t["zWhX/Q"], {
                                                  helpdeskArticle: d.A.getArticleURL(E.MVz.REFERRAL_PROGRAM),
                                              })
                                            : s.length === A.Z
                                              ? !0 === C
                                                  ? h.intl.format(h.t["1aEjsH"], {
                                                        helpdeskArticle: d.A.getArticleURL(E.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : h.intl.format(h.t["+u3AOO"], {
                                                        helpdeskArticle: d.A.getArticleURL(E.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : h.intl.format(h.t["omMr+V"], {
                                                    helpdeskArticle: d.A.getArticleURL(E.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(l.Button, {
                            variant: "primary",
                            disabled: !1 === u || !0 === x,
                            text: h.intl.string(h.t.Lm2nFc),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: s } = e;
                                    c.default.track(E.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: s,
                                    }),
                                        (0, l.mMO)(async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                            return (n) => (0, i.jsx)(e, { ...n, startingScreen: t });
                                        });
                                })({
                                    startingScreen: g.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
