n.d(t, { S: () => N }), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(397927),
    o = n(854627),
    d = n(954571),
    c = n(975571),
    u = n(427262),
    m = n(326084),
    g = n(851746),
    _ = n(617461),
    A = n(664654),
    x = n(303682),
    h = n(652215),
    p = n(985018),
    T = n(10103),
    f = n(544879);
let E = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: s } = (0, o.A)({ userId: t.id, size: r._3J.SIZE_24 });
        return (0, i.jsx)(
            r.euF,
            { className: T.bj, src: n, "aria-label": (0, u.mG)(t), size: r._3J.SIZE_24, ...s },
            t.id,
        );
    },
    S = (e) => {
        let { slotIndex: t } = e;
        return (0, i.jsx)("div", { className: T.p, children: t });
    },
    b = (e) => {
        let { referralSentUsers: t } = e;
        return (0, i.jsx)("div", {
            className: T.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < A.Z; n++)
                    if (t?.[n] !== void 0) {
                        let s = (0, i.jsx)(E, { user: t[n] }, t[n].id);
                        e.push(s);
                    } else {
                        let t = (0, i.jsx)(S, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    C = (e) => {
        let { nReferralsSent: t } = e;
        return (0, i.jsx)(r.a3E, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: T.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: T.e0,
            overlayClassName: t === A.Z ? T.ys : void 0,
            children: (0, i.jsx)(r._V3, { src: f.A, height: 93, width: 93, zoomable: !1 }),
        });
    },
    N = (e) => {
        let { className: t } = e,
            { referralSentUsers: s } = (0, A.J)(),
            o = (0, a.bG)([g.A], () => g.A.getRecipientStatus()),
            u = (0, a.bG)([g.A], () => g.A.getHasEligibleFriends()),
            f = o.size === A.Z && [...o.values()].every((e) => e === m.aK.REDEEMED),
            E = o.size === A.Z;
        return (0, i.jsxs)("div", {
            className: l()(T.kL, t),
            children: [
                (0, i.jsx)("div", { className: T.G3, children: (0, i.jsx)(C, { nReferralsSent: o.size }) }),
                (0, i.jsxs)("div", {
                    className: T.IH,
                    children: [
                        (0, i.jsx)(b, { referralSentUsers: s }),
                        (0, i.jsxs)("div", {
                            className: T.n4,
                            children: [
                                (0, i.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: p.intl.string(p.t.USo4s7),
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === u
                                            ? p.intl.format(p.t["zWhX/Q"], {
                                                  helpdeskArticle: c.A.getArticleURL(h.MVz.REFERRAL_PROGRAM),
                                              })
                                            : s.length === A.Z
                                              ? !0 === f
                                                  ? p.intl.format(p.t["1aEjsH"], {
                                                        helpdeskArticle: c.A.getArticleURL(h.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : p.intl.format(p.t["+u3AOO"], {
                                                        helpdeskArticle: c.A.getArticleURL(h.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : p.intl.format(p.t["omMr+V"], {
                                                    helpdeskArticle: c.A.getArticleURL(h.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(r.Button, {
                            variant: "primary",
                            disabled: !1 === u || !0 === E,
                            text: (() => {
                                switch (_.$.getConfig({ location: "ReferralBanner" }).variation) {
                                    case _.e.CONTROL:
                                        return p.intl.string(p.t.Lm2nFc);
                                    case _.e.VARIANT_1:
                                        return p.intl.string(p.t["8wL38m"]);
                                    case _.e.VARIANT_2:
                                        return p.intl.string(p.t["Pr/W5F"]);
                                    case _.e.VARIANT_3:
                                        return p.intl.string(p.t.ojpNKb);
                                    case _.e.VARIANT_4:
                                        return p.intl.string(p.t["YL8/wJ"]);
                                    case _.e.VARIANT_5:
                                        return p.intl.string(p.t.C7iByj);
                                }
                            })(),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: s } = e;
                                    d.default.track(h.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: s,
                                    }),
                                        (0, r.mMO)(async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                            return (n) => (0, i.jsx)(e, { ...n, startingScreen: t });
                                        });
                                })({
                                    startingScreen: x.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
