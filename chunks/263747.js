n.d(t, { A: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(435371),
    d = n(421380),
    c = n(397927),
    u = n(793574),
    m = n(688810),
    _ = n(854627),
    g = n(427157),
    x = n(954571),
    A = n(975571),
    h = n(326084),
    p = n(851746),
    f = n(344904),
    T = n(664654),
    S = n(871582),
    E = n(652215),
    b = n(985018),
    C = n(739650),
    v = n(615981);
let N = (e) => {
        let { userRecord: t, placement: n } = e,
            { avatarSrc: s, eventHandlers: l } = (0, _.A)({ userId: t?.id, size: c._3J.SIZE_32, animateOnHover: !0 }),
            a = null != t,
            r = a
                ? (0, i.jsx)(c.euF, { src: s, "aria-label": t.username, size: c._3J.SIZE_32, ...l })
                : (0, i.jsx)(c.Heading, { variant: "heading-md/semibold", className: C.n5, children: n });
        return (0, i.jsx)(o.m_, {
            text: b.intl.string(b.t.UnKHdo),
            shouldShow: !a,
            children: (0, i.jsx)("div", { className: C.Lg, children: r }),
        });
    },
    I = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, i.jsxs)("div", {
            className: C.Ip,
            children: [
                (0, i.jsx)("div", { className: C.Ej }),
                (0, i.jsx)("div", { className: a()({ [C.ch]: t > n, [C.q_]: t === n }) }),
            ],
        });
    },
    j = (e) => {
        let { userRecords: t } = e,
            n = t.length,
            s = n < 1 ? null : t[0],
            l = n < 2 ? null : t[1],
            a = n < 3 ? null : t[2];
        return (0, i.jsxs)("div", {
            className: C.ZM,
            children: [
                (0, i.jsx)(N, { userRecord: s, placement: 1 }),
                (0, i.jsx)(I, { numSentReferrals: n, placement: 1 }),
                (0, i.jsx)(N, { userRecord: l, placement: 2 }),
                (0, i.jsx)(I, { numSentReferrals: n, placement: 2 }),
                (0, i.jsx)(N, { userRecord: a, placement: 3 }),
            ],
        });
    },
    y = (e) => {
        let { isInSettings: t = !1 } = e,
            l = (0, r.bG)([p.A], () => p.A.getRecipientStatus()),
            { referralSentUsers: o } = (0, T.J)(),
            _ = s.useMemo(() => o.map((e) => new g.A(e)), [o]),
            N = { redeemed: 0, converted: 0, sent: l.size };
        l.forEach((e) => {
            e === h.aK.REDEEMED && N.redeemed++, e === h.aK.CONVERTED && (N.redeemed++, N.converted++);
        });
        let I = N.sent === T.Z,
            y = A.A.getArticleURL(E.MVz.REFERRAL_PROGRAM),
            { analyticsLocations: O } = (0, m.Ay)(u.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            R = s.useRef(null),
            L = (N.sent / T.Z) * 100,
            P = (0, i.jsxs)("div", {
                className: C.hE,
                children: [
                    (0, i.jsx)(f.Ay, {
                        percentage: L,
                        progressCircleVariation: f.BN.NITRO_LOGO,
                        iconClassName: a()({ [C.VC]: !t, [C.ER]: t }),
                    }),
                    (0, i.jsxs)("div", {
                        className: C.Ns,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                                className: C.R0,
                                children: (0, S.X8)({ hasSentAll: I }),
                            }),
                            (0, i.jsx)(j, { userRecords: _ }),
                            (0, i.jsx)(c.Text, {
                                variant: t ? "text-sm/normal" : "text-lg/medium",
                                children: (0, S.dB)({ helpdeskArticle: y, referralsStatuses: N }),
                            }),
                            (0, i.jsx)("div", {
                                className: a()(C.Fb, { [C.jv]: !t }),
                                children: (0, i.jsx)(c.wLn, {
                                    "data-migration-pending": !0,
                                    className: C.r$,
                                    color: d.XD.CUSTOM,
                                    onClick: () =>
                                        ((e) => {
                                            let { analyticsLocations: t } = e;
                                            x.default.track(E.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                                location_stack: t,
                                            }),
                                                (0, c.mMO)(async () => {
                                                    let { default: e } = await n.e("62156").then(n.bind(n, 263783));
                                                    return (n) => (0, i.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                                });
                                        })({ analyticsLocations: O }),
                                    onlyShineOnHover: !0,
                                    children: (0, i.jsxs)("div", {
                                        className: C.Zn,
                                        children: [
                                            (0, i.jsx)("img", { src: v, alt: "", className: C.QH }),
                                            I ? b.intl.string(b.t.SY9tyI) : b.intl.string(b.t.Lm2nFc),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            D = N.redeemed === T.Z;
        return (0, i.jsx)(m.f5, {
            value: O,
            children: (0, i.jsx)("div", {
                className: a()({ [C.f5]: D, [C.JY]: !D, [C.VX]: !t, [C.m$]: D && t }),
                children: (0, i.jsx)("div", {
                    ref: R,
                    className: a()({ [C.dn]: !t, [C.d_]: t, [C.kS]: D }),
                    children: P,
                }),
            }),
        });
    };
