n.d(t, { S: () => N }), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(311907),
    r = n(397927),
    o = n(854627),
    c = n(954571),
    d = n(975571),
    u = n(427262),
    _ = n(326084),
    m = n(851746),
    A = n(617461),
    g = n(664654),
    h = n(303682),
    x = n(652215),
    p = n(985018),
    E = n(146449),
    C = n(544879);
let T = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: s } = (0, o.A)({ userId: t.id, size: r._3J.SIZE_24 });
        return (0, i.jsx)(
            r.euF,
            { className: E.bj, src: n, "aria-label": (0, u.mG)(t), size: r._3J.SIZE_24, ...s },
            t.id,
        );
    },
    S = (e) => {
        let { slotIndex: t } = e;
        return (0, i.jsx)("div", { className: E.p, children: t });
    },
    I = (e) => {
        let { referralSentUsers: t } = e;
        return (0, i.jsx)("div", {
            className: E.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < g.Z; n++)
                    if (t?.[n] !== void 0) {
                        let s = (0, i.jsx)(T, { user: t[n] }, t[n].id);
                        e.push(s);
                    } else {
                        let t = (0, i.jsx)(S, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    f = (e) => {
        let { nReferralsSent: t } = e;
        return (0, i.jsx)(r.a3E, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: E.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: E.e0,
            overlayClassName: t === g.Z ? E.ys : void 0,
            children: (0, i.jsx)(r._V3, { src: C.A, height: 93, width: 93, zoomable: !1 }),
        });
    },
    N = (e) => {
        let { className: t } = e,
            { referralSentUsers: s } = (0, g.J)(),
            o = (0, l.bG)([m.A], () => m.A.getRecipientStatus()),
            u = (0, l.bG)([m.A], () => m.A.getHasEligibleFriends()),
            C = o.size === g.Z && [...o.values()].every((e) => e === _.aK.REDEEMED),
            T = o.size === g.Z;
        return (0, i.jsxs)("div", {
            className: a()(E.kL, t),
            children: [
                (0, i.jsx)("div", { className: E.G3, children: (0, i.jsx)(f, { nReferralsSent: o.size }) }),
                (0, i.jsxs)("div", {
                    className: E.IH,
                    children: [
                        (0, i.jsx)(I, { referralSentUsers: s }),
                        (0, i.jsxs)("div", {
                            className: E.n4,
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
                                                  helpdeskArticle: d.A.getArticleURL(x.MVz.REFERRAL_PROGRAM),
                                              })
                                            : s.length === g.Z
                                              ? !0 === C
                                                  ? p.intl.format(p.t["1aEjsH"], {
                                                        helpdeskArticle: d.A.getArticleURL(x.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : p.intl.format(p.t["+u3AOO"], {
                                                        helpdeskArticle: d.A.getArticleURL(x.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : p.intl.format(p.t["omMr+V"], {
                                                    helpdeskArticle: d.A.getArticleURL(x.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(r.Button, {
                            variant: "primary",
                            disabled: !1 === u || !0 === T,
                            text: (() => {
                                switch (A.$.getConfig({ location: "ReferralBanner" }).variation) {
                                    case A.e.CONTROL:
                                        return p.intl.string(p.t.Lm2nFc);
                                    case A.e.VARIANT_1:
                                        return p.intl.string(p.t["8wL38m"]);
                                    case A.e.VARIANT_2:
                                        return p.intl.string(p.t["Pr/W5F"]);
                                    case A.e.VARIANT_3:
                                        return p.intl.string(p.t.ojpNKb);
                                    case A.e.VARIANT_4:
                                        return p.intl.string(p.t["YL8/wJ"]);
                                    case A.e.VARIANT_5:
                                        return p.intl.string(p.t.C7iByj);
                                }
                            })(),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: s } = e;
                                    c.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: s,
                                    }),
                                        (0, r.mMO)(async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                            return (n) => (0, i.jsx)(e, { ...n, startingScreen: t });
                                        });
                                })({
                                    startingScreen: h.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
