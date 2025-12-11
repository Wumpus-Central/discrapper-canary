n.d(t, { Z: () => L });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(681715),
    c = n(755721),
    u = n(481060),
    d = n(100527),
    f = n(906732),
    p = n(518950),
    _ = n(598077),
    m = n(626135),
    h = n(63063),
    g = n(281494),
    E = n(276444),
    b = n(796634),
    y = n(119269),
    O = n(938736),
    v = n(981631),
    S = n(388032),
    I = n(70649),
    T = n(691766);
function C(e, t, n) {
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
function A(e) {
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
                C(e, t, n[t]);
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
function P(e, t) {
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
let R = (e) => {
        let { userRecord: t, placement: n } = e,
            { avatarSrc: i, eventHandlers: a } = (0, p.Z)({
                userId: null == t ? void 0 : t.id,
                size: u.EFr.SIZE_32,
                animateOnHover: !0,
            }),
            o = null != t,
            s = o
                ? (0, r.jsx)(
                      u.qEK,
                      A(
                          {
                              src: i,
                              "aria-label": t.username,
                              size: u.EFr.SIZE_32,
                          },
                          a,
                      ),
                  )
                : (0, r.jsx)(u.Heading, {
                      variant: "heading-md/semibold",
                      className: I.userAvatarProgressBarUnitNum,
                      children: n,
                  });
        return (0, r.jsx)(l.u, {
            text: S.intl.string(S.t.UnKHdo),
            shouldShow: !o,
            children: (0, r.jsx)("div", {
                className: I.userAvatarProgressBarUnit,
                children: s,
            }),
        });
    },
    w = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, r.jsxs)("div", {
            className: I.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, r.jsx)("div", { className: I.avatarProgressBarUnitConnectorBase }),
                (0, r.jsx)("div", {
                    className: o()({
                        [I.fullHighlight]: t > n,
                        [I.halfHighlight]: t === n,
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
            o = n < 3 ? null : t[2];
        return (0, r.jsxs)("div", {
            className: I.userAvatarProgressBarContainer,
            children: [
                (0, r.jsx)(R, {
                    userRecord: i,
                    placement: 1,
                }),
                (0, r.jsx)(w, {
                    numSentReferrals: n,
                    placement: 1,
                }),
                (0, r.jsx)(R, {
                    userRecord: a,
                    placement: 2,
                }),
                (0, r.jsx)(w, {
                    numSentReferrals: n,
                    placement: 2,
                }),
                (0, r.jsx)(R, {
                    userRecord: o,
                    placement: 3,
                }),
            ],
        });
    },
    x = (e) => {
        let { analyticsLocations: t } = e;
        m.default.track(v.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
            (0, u.ZDy)(async () => {
                let { default: e } = await n.e("47435").then(n.bind(n, 204387));
                return (n) => (0, r.jsx)(e, P(A({}, n), { sourceAnalyticsLocations: t }));
            });
    },
    L = (e) => {
        let { isInSettings: t = !1 } = e,
            n = (0, s.e7)([E.Z], () => E.Z.getRecipientStatus()),
            { referralSentUsers: a } = (0, b.G)(),
            l = i.useMemo(() => a.map((e) => new _.Z(e)), [a]),
            p = {
                redeemed: 0,
                converted: 0,
                sent: n.size,
            };
        n.forEach((e) => {
            e === g.Fe.REDEEMED && p.redeemed++, e === g.Fe.CONVERTED && (p.redeemed++, p.converted++);
        });
        let m = p.sent === b.Q,
            C = h.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM),
            { analyticsLocations: A } = (0, f.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            N = i.useRef(null),
            P = (p.sent / b.Q) * 100,
            R = (0, r.jsxs)("div", {
                className: I.referralInfoContent,
                children: [
                    (0, r.jsx)(y.ZP, {
                        percentage: P,
                        progressCircleVariation: y.Qo.NITRO_LOGO,
                        iconClassName: o()({
                            [I.referralProgressBarIcon]: !t,
                            [I.referralProgressBarIconSettings]: t,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: I.expandedProgressBarContent,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                                className: I.expandedProgressBarHeader,
                                children: (0, O.$s)({ hasSentAll: m }),
                            }),
                            (0, r.jsx)(D, { userRecords: l }),
                            (0, r.jsx)(u.Text, {
                                variant: t ? "text-sm/normal" : "text-lg/medium",
                                children: (0, O.Hg)({
                                    helpdeskArticle: C,
                                    referralsStatuses: p,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: o()(I.expandedProgressBarButtonContainer, {
                                    [I.expandedProgressBarButtonContainerLayout]: !t,
                                }),
                                children: (0, r.jsx)(u.gtL, {
                                    "data-migration-pending": !0,
                                    className: I.expandedProgressBarSelectFriendsCTA,
                                    color: c.Tt.CUSTOM,
                                    onClick: () => x({ analyticsLocations: A }),
                                    onlyShineOnHover: !0,
                                    children: (0, r.jsxs)("div", {
                                        className: I.expandedProgressBarSelectFriendsCTAInner,
                                        children: [
                                            (0, r.jsx)("img", {
                                                src: T,
                                                alt: "",
                                                className: I.expandedProgressBarSelectFriendsIcon,
                                            }),
                                            m ? S.intl.string(S.t.SY9tyI) : S.intl.string(S.t.Lm2nFc),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            w = p.redeemed === b.Q;
        return (0, r.jsx)(f.Gt, {
            value: A,
            children: (0, r.jsx)("div", {
                className: o()({
                    [I.containerWithGlowWithoutBanner]: w,
                    [I.containerWithoutGlow]: !w,
                    [I.containerWithMargins]: !t,
                    [I.containerWithGlowOnSettingsPage]: w && t,
                }),
                children: (0, r.jsx)("div", {
                    ref: N,
                    className: o()({
                        [I.expandedProgressBarContainer]: !t,
                        [I.expandedProgressBarContainerSettingsPage]: t,
                        [I.allReferralsSentBorder]: w,
                    }),
                    children: R,
                }),
            }),
        });
    };
