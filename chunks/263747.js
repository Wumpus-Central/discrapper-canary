s.d(t, { A: () => B });
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(311907),
    o = s(990078),
    c = s(862482),
    d = s(778712),
    m = s(534514),
    u = s(97808),
    _ = s(192308),
    x = s(834730),
    p = s(930861),
    g = s(793574),
    h = s(688810),
    f = s(854627),
    C = s(427157),
    b = s(954571),
    j = s(975571),
    A = s(326084),
    N = s(851746),
    I = s(344904),
    T = s(664654),
    v = s(871582),
    E = s(652215),
    R = s(985018),
    M = s(694354),
    S = s(615981);
let y = (e) => {
        let { userRecord: t, placement: s } = e,
            { avatarSrc: a, eventHandlers: i } = (0, f.A)({ userId: t?.id, size: d._3.SIZE_32, animateOnHover: !0 }),
            n = null != t,
            l = n
                ? (0, r.jsx)(u.eu, { src: a, "aria-label": t.username, size: d._3.SIZE_32, ...i })
                : (0, r.jsx)(m.D, { variant: "heading-md/semibold", className: M.n5, children: s });
        return (0, r.jsx)(o.m, {
            text: R.intl.string(R.t.UnKHdo),
            shouldShow: !n,
            children: (0, r.jsx)("div", { className: M.Lg, children: l }),
        });
    },
    P = (e) => {
        let { numSentReferrals: t, placement: s } = e;
        return (0, r.jsxs)("div", {
            className: M.Ip,
            children: [
                (0, r.jsx)("div", { className: M.Ej }),
                (0, r.jsx)("div", { className: n()({ [M.ch]: t > s, [M.q_]: t === s }) }),
            ],
        });
    },
    k = (e) => {
        let { userRecords: t } = e,
            s = t.length,
            a = s < 1 ? null : t[0],
            i = s < 2 ? null : t[1],
            n = s < 3 ? null : t[2];
        return (0, r.jsxs)("div", {
            className: M.ZM,
            children: [
                (0, r.jsx)(y, { userRecord: a, placement: 1 }),
                (0, r.jsx)(P, { numSentReferrals: s, placement: 1 }),
                (0, r.jsx)(y, { userRecord: i, placement: 2 }),
                (0, r.jsx)(P, { numSentReferrals: s, placement: 2 }),
                (0, r.jsx)(y, { userRecord: n, placement: 3 }),
            ],
        });
    },
    B = (e) => {
        let { isInSettings: t = !1 } = e,
            i = (0, l.bG)([N.A], () => N.A.getRecipientStatus()),
            { referralSentUsers: o } = (0, T.J)(),
            d = a.useMemo(() => o.map((e) => new C.A(e)), [o]),
            u = { redeemed: 0, converted: 0, sent: i.size };
        i.forEach((e) => {
            e === A.aK.REDEEMED && u.redeemed++, e === A.aK.CONVERTED && (u.redeemed++, u.converted++);
        });
        let f = u.sent === T.Z,
            y = j.A.getArticleURL(E.MVz.REFERRAL_PROGRAM),
            { analyticsLocations: P } = (0, h.Ay)(g.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            B = a.useRef(null),
            w = (u.sent / T.Z) * 100,
            G = (0, r.jsxs)("div", {
                className: M.hE,
                children: [
                    (0, r.jsx)(I.Ay, {
                        percentage: w,
                        progressCircleVariation: I.BN.NITRO_LOGO,
                        iconClassName: n()({ [M.VC]: !t, [M.ER]: t }),
                    }),
                    (0, r.jsxs)("div", {
                        className: M.Ns,
                        children: [
                            (0, r.jsx)(m.D, {
                                variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                                className: M.R0,
                                children: (0, v.X8)({ hasSentAll: f }),
                            }),
                            (0, r.jsx)(k, { userRecords: d }),
                            (0, r.jsx)(x.E, {
                                variant: t ? "text-sm/normal" : "text-lg/medium",
                                children: (0, v.dB)({ helpdeskArticle: y, referralsStatuses: u }),
                            }),
                            (0, r.jsx)("div", {
                                className: n()(M.Fb, { [M.jv]: !t }),
                                children: (0, r.jsx)(p.wL, {
                                    "data-migration-pending": !0,
                                    className: M.r$,
                                    color: c.XD.CUSTOM,
                                    onClick: () =>
                                        ((e) => {
                                            let { analyticsLocations: t } = e;
                                            b.default.track(E.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                                location_stack: t,
                                            }),
                                                (0, _.openModalLazy)(async () => {
                                                    let { default: e } = await s.e("62156").then(s.bind(s, 263783));
                                                    return (s) => (0, r.jsx)(e, { ...s, sourceAnalyticsLocations: t });
                                                });
                                        })({ analyticsLocations: P }),
                                    onlyShineOnHover: !0,
                                    children: (0, r.jsxs)("div", {
                                        className: M.Zn,
                                        children: [
                                            (0, r.jsx)("img", { src: S, alt: "", className: M.QH }),
                                            f ? R.intl.string(R.t.SY9tyI) : R.intl.string(R.t.Lm2nFc),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            O = u.redeemed === T.Z;
        return (0, r.jsx)(h.f5, {
            value: P,
            children: (0, r.jsx)("div", {
                className: n()({ [M.f5]: O, [M.JY]: !O, [M.VX]: !t, [M.m$]: O && t }),
                children: (0, r.jsx)("div", {
                    ref: B,
                    className: n()({ [M.dn]: !t, [M.d_]: t, [M.kS]: O }),
                    children: G,
                }),
            }),
        });
    };
