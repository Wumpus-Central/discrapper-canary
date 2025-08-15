n.d(t, { Z: () => A });
var i = n(951288),
    r = n(647438),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    m = n(518950),
    p = n(598077),
    g = n(626135),
    h = n(63063),
    f = n(281494),
    b = n(276444),
    x = n(796634),
    _ = n(119269),
    j = n(938736),
    E = n(981631),
    C = n(388032),
    O = n(120472),
    v = n(691766);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = (e) => {
        let { userRecord: t, placement: n } = e,
            { avatarSrc: r, eventHandlers: s } = (0, m.Z)({
                userId: null == t ? void 0 : t.id,
                size: c.EFr.SIZE_32,
                animateOnHover: !0,
            }),
            a = null != t,
            l = a
                ? (0, i.jsx)(
                      c.qEK,
                      S(
                          {
                              src: r,
                              "aria-label": t.username,
                              size: c.EFr.SIZE_32,
                          },
                          s,
                      ),
                  )
                : (0, i.jsx)(c.X6q, {
                      variant: "heading-md/semibold",
                      className: O.userAvatarProgressBarUnitNum,
                      children: n,
                  });
        return (0, i.jsx)(c.ua7, {
            text: C.intl.string(C.t.UnKHdn),
            shouldShow: !a,
            tooltipContentClassName: O.unsentTooltipContent,
            children: (e) => (0, i.jsx)("div", T(S({ className: O.userAvatarProgressBarUnit }, e), { children: l })),
        });
    },
    I = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, i.jsxs)("div", {
            className: O.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, i.jsx)("div", { className: O.avatarProgressBarUnitConnectorBase }),
                (0, i.jsx)("div", {
                    className: a()({
                        [O.fullHighlight]: t > n,
                        [O.halfHighlight]: t === n,
                    }),
                }),
            ],
        });
    },
    y = (e) => {
        let { userRecords: t } = e,
            n = t.length,
            r = n < 1 ? null : t[0],
            s = n < 2 ? null : t[1],
            a = n < 3 ? null : t[2];
        return (0, i.jsxs)("div", {
            className: O.userAvatarProgressBarContainer,
            children: [
                (0, i.jsx)(N, {
                    userRecord: r,
                    placement: 1,
                }),
                (0, i.jsx)(I, {
                    numSentReferrals: n,
                    placement: 1,
                }),
                (0, i.jsx)(N, {
                    userRecord: s,
                    placement: 2,
                }),
                (0, i.jsx)(I, {
                    numSentReferrals: n,
                    placement: 2,
                }),
                (0, i.jsx)(N, {
                    userRecord: a,
                    placement: 3,
                }),
            ],
        });
    },
    A = (e) => {
        let { isInSettings: t = !1 } = e,
            s = (0, l.e7)([b.Z], () => b.Z.getRecipientStatus()),
            { referralSentUsers: m } = (0, x.G)(),
            N = r.useMemo(() => m.map((e) => new p.Z(e)), [m]),
            I = {
                redeemed: 0,
                converted: 0,
                sent: s.size,
            };
        s.forEach((e) => {
            e === f.Fe.REDEEMED && I.redeemed++, e === f.Fe.CONVERTED && (I.redeemed++, I.converted++);
        });
        let A = I.sent === x.Q,
            P = h.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM),
            { analyticsLocations: R } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            D = r.useRef(null),
            Z = (I.sent / x.Q) * 100,
            w = (0, i.jsxs)("div", {
                className: O.referralInfoContent,
                children: [
                    (0, i.jsx)(_.ZP, {
                        percentage: Z,
                        progressCircleVariation: _.Qo.NITRO_LOGO,
                        iconClassName: a()({
                            [O.referralProgressBarIcon]: !t,
                            [O.referralProgressBarIconSettings]: t,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: O.expandedProgressBarContent,
                        children: [
                            (0, i.jsx)(c.X6q, {
                                variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                                className: O.expandedProgressBarHeader,
                                children: (0, j.$s)({ hasSentAll: A }),
                            }),
                            (0, i.jsx)(y, { userRecords: N }),
                            (0, i.jsx)(c.Text, {
                                variant: t ? "text-sm/normal" : "text-lg/medium",
                                children: (0, j.Hg)({
                                    helpdeskArticle: P,
                                    referralsStatuses: I,
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: a()(O.expandedProgressBarButtonContainer, {
                                    [O.expandedProgressBarButtonContainerLayout]: !t,
                                }),
                                children: (0, i.jsx)(c.gtL, {
                                    "data-migration-pending": !0,
                                    className: O.expandedProgressBarSelectFriendsCTA,
                                    color: o.Tt.CUSTOM,
                                    onClick: () =>
                                        ((e) => {
                                            let { analyticsLocations: t } = e;
                                            g.default.track(E.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                                location_stack: t,
                                            }),
                                                (0, c.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("83667"),
                                                        n.e("81369"),
                                                    ]).then(n.bind(n, 204387));
                                                    return (n) =>
                                                        (0, i.jsx)(e, T(S({}, n), { sourceAnalyticsLocations: t }));
                                                });
                                        })({ analyticsLocations: R }),
                                    onlyShineOnHover: !0,
                                    children: (0, i.jsxs)("div", {
                                        className: O.expandedProgressBarSelectFriendsCTAInner,
                                        children: [
                                            (0, i.jsx)("img", {
                                                src: v,
                                                alt: "",
                                                className: O.expandedProgressBarSelectFriendsIcon,
                                            }),
                                            A ? C.intl.string(C.t.SY9tyM) : C.intl.string(C.t.Lm2nFR),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            k = I.redeemed === x.Q;
        return (0, i.jsx)(u.Gt, {
            value: R,
            children: (0, i.jsx)("div", {
                className: a()({
                    [O.containerWithGlowWithoutBanner]: k,
                    [O.containerWithoutGlow]: !k,
                    [O.containerWithMargins]: !t,
                    [O.containerWithGlowOnSettingsPage]: k && t,
                }),
                children: (0, i.jsx)("div", {
                    ref: D,
                    className: a()({
                        [O.expandedProgressBarContainer]: !t,
                        [O.expandedProgressBarContainerSettingsPage]: t,
                        [O.allReferralsSentBorder]: k,
                    }),
                    children: w,
                }),
            }),
        });
    };
