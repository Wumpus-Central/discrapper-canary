n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(435371),
    c = n(421380),
    d = n(397927),
    u = n(793574),
    _ = n(688810),
    m = n(854627),
    A = n(427157),
    g = n(954571),
    E = n(975571),
    h = n(326084),
    p = n(851746),
    C = n(664654),
    x = n(344904),
    T = n(221688),
    I = n(652215),
    S = n(985018),
    f = n(509117),
    N = n(6336);
let b = (e) => {
        let { userRecord: t, placement: n } = e,
            { avatarSrc: s, eventHandlers: r } = (0, m.A)({ userId: t?.id, size: d._3J.SIZE_32, animateOnHover: !0 }),
            a = null != t,
            l = a
                ? (0, i.jsx)(d.euF, { src: s, "aria-label": t.username, size: d._3J.SIZE_32, ...r })
                : (0, i.jsx)(d.Heading, { variant: "heading-md/semibold", className: f.n5, children: n });
        return (0, i.jsx)(o.m_, {
            text: S.intl.string(S.t.UnKHdo),
            shouldShow: !a,
            children: (0, i.jsx)("div", { className: f.Lg, children: l }),
        });
    },
    R = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, i.jsxs)("div", {
            className: f.Ip,
            children: [
                (0, i.jsx)("div", { className: f.Ej }),
                (0, i.jsx)("div", { className: a()({ [f.ch]: t > n, [f.q_]: t === n }) }),
            ],
        });
    },
    v = (e) => {
        let { userRecords: t } = e,
            n = t.length,
            s = n < 1 ? null : t[0],
            r = n < 2 ? null : t[1],
            a = n < 3 ? null : t[2];
        return (0, i.jsxs)("div", {
            className: f.ZM,
            children: [
                (0, i.jsx)(b, { userRecord: s, placement: 1 }),
                (0, i.jsx)(R, { numSentReferrals: n, placement: 1 }),
                (0, i.jsx)(b, { userRecord: r, placement: 2 }),
                (0, i.jsx)(R, { numSentReferrals: n, placement: 2 }),
                (0, i.jsx)(b, { userRecord: a, placement: 3 }),
            ],
        });
    },
    O = (e) => {
        let { isInSettings: t = !1 } = e,
            r = (0, l.bG)([p.A], () => p.A.getRecipientStatus()),
            { referralSentUsers: o } = (0, C.J)(),
            m = s.useMemo(() => o.map((e) => new A.A(e)), [o]),
            b = { redeemed: 0, converted: 0, sent: r.size };
        r.forEach((e) => {
            e === h.aK.REDEEMED && b.redeemed++, e === h.aK.CONVERTED && (b.redeemed++, b.converted++);
        });
        let R = b.sent === C.Z,
            O = E.A.getArticleURL(I.MVz.REFERRAL_PROGRAM),
            { analyticsLocations: j } = (0, _.Ay)(u.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            P = s.useRef(null),
            y = (b.sent / C.Z) * 100,
            L = (0, i.jsxs)("div", {
                className: f.hE,
                children: [
                    (0, i.jsx)(x.Ay, {
                        percentage: y,
                        progressCircleVariation: x.BN.NITRO_LOGO,
                        iconClassName: a()({ [f.VC]: !t, [f.ER]: t }),
                    }),
                    (0, i.jsxs)("div", {
                        className: f.Ns,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                                className: f.R0,
                                children: (0, T.X8)({ hasSentAll: R }),
                            }),
                            (0, i.jsx)(v, { userRecords: m }),
                            (0, i.jsx)(d.Text, {
                                variant: t ? "text-sm/normal" : "text-lg/medium",
                                children: (0, T.dB)({ helpdeskArticle: O, referralsStatuses: b }),
                            }),
                            (0, i.jsx)("div", {
                                className: a()(f.Fb, { [f.jv]: !t }),
                                children: (0, i.jsx)(d.wLn, {
                                    "data-migration-pending": !0,
                                    className: f.r$,
                                    color: c.XD.CUSTOM,
                                    onClick: () =>
                                        ((e) => {
                                            let { analyticsLocations: t } = e;
                                            g.default.track(I.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                                location_stack: t,
                                            }),
                                                (0, d.mMO)(async () => {
                                                    let { default: e } = await n.e("26489").then(n.bind(n, 477088));
                                                    return (n) => (0, i.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                                });
                                        })({ analyticsLocations: j }),
                                    onlyShineOnHover: !0,
                                    children: (0, i.jsxs)("div", {
                                        className: f.Zn,
                                        children: [
                                            (0, i.jsx)("img", { src: N, alt: "", className: f.QH }),
                                            R ? S.intl.string(S.t.SY9tyI) : S.intl.string(S.t.Lm2nFc),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            D = b.redeemed === C.Z;
        return (0, i.jsx)(_.f5, {
            value: j,
            children: (0, i.jsx)("div", {
                className: a()({ [f.f5]: D, [f.JY]: !D, [f.VX]: !t, [f.m$]: D && t }),
                children: (0, i.jsx)("div", {
                    ref: P,
                    className: a()({ [f.dn]: !t, [f.d_]: t, [f.kS]: D }),
                    children: L,
                }),
            }),
        });
    };
