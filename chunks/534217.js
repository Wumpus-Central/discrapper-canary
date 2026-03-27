n.d(t, { S: () => v }), n(321073);
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
    _ = n(851746),
    g = n(617461),
    x = n(664654),
    A = n(303682),
    h = n(652215),
    p = n(985018),
    f = n(989348),
    T = n(544879);
let S = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: s } = (0, o.A)({ userId: t.id, size: r._3J.SIZE_24 });
        return (0, i.jsx)(
            r.euF,
            { className: f.bj, src: n, "aria-label": (0, u.mG)(t), size: r._3J.SIZE_24, ...s },
            t.id,
        );
    },
    E = (e) => {
        let { slotIndex: t } = e;
        return (0, i.jsx)("div", { className: f.p, children: t });
    },
    b = (e) => {
        let { referralSentUsers: t } = e;
        return (0, i.jsx)("div", {
            className: f.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < x.Z; n++)
                    if (t?.[n] !== void 0) {
                        let s = (0, i.jsx)(S, { user: t[n] }, t[n].id);
                        e.push(s);
                    } else {
                        let t = (0, i.jsx)(E, { slotIndex: n + 1 }, n);
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
            background: f.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: f.e0,
            overlayClassName: t === x.Z ? f.ys : void 0,
            children: (0, i.jsx)(r._V3, { src: T.A, height: 93, width: 93, zoomable: !1 }),
        });
    },
    v = (e) => {
        let { className: t } = e,
            { referralSentUsers: s } = (0, x.J)(),
            o = (0, a.bG)([_.A], () => _.A.getRecipientStatus()),
            u = (0, a.bG)([_.A], () => _.A.getHasEligibleFriends()),
            T = o.size === x.Z && [...o.values()].every((e) => e === m.aK.REDEEMED),
            S = o.size === x.Z;
        return (0, i.jsxs)("div", {
            className: l()(f.kL, t),
            children: [
                (0, i.jsx)("div", { className: f.G3, children: (0, i.jsx)(C, { nReferralsSent: o.size }) }),
                (0, i.jsxs)("div", {
                    className: f.IH,
                    children: [
                        (0, i.jsx)(b, { referralSentUsers: s }),
                        (0, i.jsxs)("div", {
                            className: f.n4,
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
                                            : s.length === x.Z
                                              ? !0 === T
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
                            disabled: !1 === u || !0 === S,
                            text: (() => {
                                switch (g.$.getConfig({ location: "ReferralBanner" }).variation) {
                                    case g.e.CONTROL:
                                        return p.intl.string(p.t.Lm2nFc);
                                    case g.e.VARIANT_1:
                                        return p.intl.string(p.t["8wL38m"]);
                                    case g.e.VARIANT_2:
                                        return p.intl.string(p.t["Pr/W5F"]);
                                    case g.e.VARIANT_3:
                                        return p.intl.string(p.t.ojpNKb);
                                    case g.e.VARIANT_4:
                                        return p.intl.string(p.t["YL8/wJ"]);
                                    case g.e.VARIANT_5:
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
                                    startingScreen: A.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
