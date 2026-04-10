n.d(t, { S: () => v }), n(321073);
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(311907),
    l = n(397927),
    c = n(854627),
    o = n(954571),
    d = n(975571),
    u = n(427262),
    _ = n(326084),
    m = n(851746),
    p = n(664654),
    g = n(303682),
    A = n(652215),
    x = n(985018),
    h = n(989348),
    f = n(544879);
let b = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: r } = (0, c.A)({ userId: t.id, size: l._3J.SIZE_24 });
        return (0, i.jsx)(
            l.euF,
            { className: h.bj, src: n, "aria-label": (0, u.mG)(t), size: l._3J.SIZE_24, ...r },
            t.id,
        );
    },
    N = (e) => {
        let { slotIndex: t } = e;
        return (0, i.jsx)("div", { className: h.p, children: t });
    },
    C = (e) => {
        let { referralSentUsers: t } = e;
        return (0, i.jsx)("div", {
            className: h.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < p.Z; n++)
                    if (t?.[n] !== void 0) {
                        let r = (0, i.jsx)(b, { user: t[n] }, t[n].id);
                        e.push(r);
                    } else {
                        let t = (0, i.jsx)(N, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    R = (e) => {
        let { nReferralsSent: t } = e;
        return (0, i.jsx)(l.a3E, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: h.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: h.e0,
            overlayClassName: t === p.Z ? h.ys : void 0,
            children: (0, i.jsx)(l._V3, { src: f.A, height: 93, width: 93, zoomable: !1 }),
        });
    },
    v = (e) => {
        let { className: t } = e,
            { referralSentUsers: r } = (0, p.J)(),
            c = (0, s.bG)([m.A], () => m.A.getRecipientStatus()),
            u = (0, s.bG)([m.A], () => m.A.getHasEligibleFriends()),
            f = c.size === p.Z && [...c.values()].every((e) => e === _.aK.REDEEMED),
            b = c.size === p.Z;
        return (0, i.jsxs)("div", {
            className: a()(h.kL, t),
            children: [
                (0, i.jsx)("div", { className: h.G3, children: (0, i.jsx)(R, { nReferralsSent: c.size }) }),
                (0, i.jsxs)("div", {
                    className: h.IH,
                    children: [
                        (0, i.jsx)(C, { referralSentUsers: r }),
                        (0, i.jsxs)("div", {
                            className: h.n4,
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: x.intl.string(x.t.USo4s7),
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === u
                                            ? x.intl.format(x.t["zWhX/Q"], {
                                                  helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM),
                                              })
                                            : r.length === p.Z
                                              ? !0 === f
                                                  ? x.intl.format(x.t["1aEjsH"], {
                                                        helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : x.intl.format(x.t["+u3AOO"], {
                                                        helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : x.intl.format(x.t["omMr+V"], {
                                                    helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(l.Button, {
                            variant: "primary",
                            disabled: !1 === u || !0 === b,
                            text: x.intl.string(x.t.Lm2nFc),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: r } = e;
                                    o.default.track(A.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: r,
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
