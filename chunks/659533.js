n.d(t, {
    A: () => L,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(435371),
    c = n(421380),
    u = n(397927),
    d = n(793574),
    f = n(688810),
    p = n(854627),
    _ = n(427157),
    h = n(954571),
    m = n(975571),
    g = n(326084),
    E = n(851746),
    b = n(664654),
    y = n(344904),
    O = n(221688),
    A = n(652215),
    v = n(985018),
    S = n(509117),
    I = n(6336);

function T(e, t, n) {
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

function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}

function N(e, t) {
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

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = (e) => {
        let { userRecord: t, placement: n } = e,
            { avatarSrc: i, eventHandlers: a } = (0, p.A)({
                userId: null == t ? void 0 : t.id,
                size: u._3J.SIZE_32,
                animateOnHover: !0,
            }),
            s = null != t,
            o = s
                ? (0, r.jsx)(
                      u.euF,
                      C(
                          {
                              src: i,
                              "aria-label": t.username,
                              size: u._3J.SIZE_32,
                          },
                          a,
                      ),
                  )
                : (0, r.jsx)(u.Heading, {
                      variant: "heading-md/semibold",
                      className: S.n5,
                      children: n,
                  });
        return (0, r.jsx)(l.m_, {
            text: v.intl.string(v.t.UnKHdo),
            shouldShow: !s,
            children: (0, r.jsx)("div", {
                className: S.Lg,
                children: o,
            }),
        });
    },
    P = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, r.jsxs)("div", {
            className: S.Ip,
            children: [
                (0, r.jsx)("div", {
                    className: S.Ej,
                }),
                (0, r.jsx)("div", {
                    className: s()({
                        [S.ch]: t > n,
                        [S.q_]: t === n,
                    }),
                }),
            ],
        });
    },
    D = (e) => {
        let { userRecords: t } = e,
            n = t.length,
            i = n < 1 ? null : t[0],
            a = n < 2 ? null : t[1],
            s = n < 3 ? null : t[2];
        return (0, r.jsxs)("div", {
            className: S.ZM,
            children: [
                (0, r.jsx)(w, {
                    userRecord: i,
                    placement: 1,
                }),
                (0, r.jsx)(P, {
                    numSentReferrals: n,
                    placement: 1,
                }),
                (0, r.jsx)(w, {
                    userRecord: a,
                    placement: 2,
                }),
                (0, r.jsx)(P, {
                    numSentReferrals: n,
                    placement: 2,
                }),
                (0, r.jsx)(w, {
                    userRecord: s,
                    placement: 3,
                }),
            ],
        });
    },
    x = (e) => {
        let { analyticsLocations: t } = e;
        h.default.track(A.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
            location_stack: t,
        }),
            (0, u.mMO)(async () => {
                let { default: e } = await n.e("26489").then(n.bind(n, 477088));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        R(C({}, n), {
                            sourceAnalyticsLocations: t,
                        }),
                    );
            });
    },
    L = (e) => {
        let { isInSettings: t = !1 } = e,
            n = (0, o.bG)([E.A], () => E.A.getRecipientStatus()),
            { referralSentUsers: a } = (0, b.J)(),
            l = i.useMemo(() => a.map((e) => new _.A(e)), [a]),
            p = {
                redeemed: 0,
                converted: 0,
                sent: n.size,
            };
        n.forEach((e) => {
            e === g.aK.REDEEMED && p.redeemed++, e === g.aK.CONVERTED && (p.redeemed++, p.converted++);
        });
        let h = p.sent === b.Z,
            T = m.A.getArticleURL(A.MVz.REFERRAL_PROGRAM),
            { analyticsLocations: C } = (0, f.Ay)(d.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            N = i.useRef(null),
            R = (p.sent / b.Z) * 100,
            w = (0, r.jsxs)("div", {
                className: S.hE,
                children: [
                    (0, r.jsx)(y.Ay, {
                        percentage: R,
                        progressCircleVariation: y.BN.NITRO_LOGO,
                        iconClassName: s()({
                            [S.VC]: !t,
                            [S.ER]: t,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: S.Ns,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                                className: S.R0,
                                children: (0, O.X8)({
                                    hasSentAll: h,
                                }),
                            }),
                            (0, r.jsx)(D, {
                                userRecords: l,
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: t ? "text-sm/normal" : "text-lg/medium",
                                children: (0, O.dB)({
                                    helpdeskArticle: T,
                                    referralsStatuses: p,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: s()(S.Fb, {
                                    [S.jv]: !t,
                                }),
                                children: (0, r.jsx)(u.wLn, {
                                    "data-migration-pending": !0,
                                    className: S.r$,
                                    color: c.XD.CUSTOM,
                                    onClick: () =>
                                        x({
                                            analyticsLocations: C,
                                        }),
                                    onlyShineOnHover: !0,
                                    children: (0, r.jsxs)("div", {
                                        className: S.Zn,
                                        children: [
                                            (0, r.jsx)("img", {
                                                src: I,
                                                alt: "",
                                                className: S.QH,
                                            }),
                                            h ? v.intl.string(v.t.SY9tyI) : v.intl.string(v.t.Lm2nFc),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            P = p.redeemed === b.Z;
        return (0, r.jsx)(f.f5, {
            value: C,
            children: (0, r.jsx)("div", {
                className: s()({
                    [S.f5]: P,
                    [S.JY]: !P,
                    [S.VX]: !t,
                    [S.m$]: P && t,
                }),
                children: (0, r.jsx)("div", {
                    ref: N,
                    className: s()({
                        [S.dn]: !t,
                        [S.d_]: t,
                        [S.kS]: P,
                    }),
                    children: w,
                }),
            }),
        });
    };
