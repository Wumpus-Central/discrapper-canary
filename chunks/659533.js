n.d(t, {
    A: () => y,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(435371),
    c = n(421380),
    d = n(397927),
    u = n(793574),
    _ = n(688810),
    p = n(854627),
    m = n(427157),
    g = n(954571),
    A = n(975571),
    f = n(326084),
    h = n(851746),
    b = n(664654),
    E = n(344904),
    x = n(221688),
    O = n(652215),
    C = n(985018),
    I = n(509117),
    T = n(6336);

function S(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let j = (e) => {
        let { userRecord: t, placement: n } = e,
            { avatarSrc: i, eventHandlers: l } = (0, p.A)({
                userId: null == t ? void 0 : t.id,
                size: d._3J.SIZE_32,
                animateOnHover: !0,
            }),
            s = null != t,
            a = s
                ? (0, r.jsx)(
                      d.euF,
                      S(
                          {
                              src: i,
                              "aria-label": t.username,
                              size: d._3J.SIZE_32,
                          },
                          l,
                      ),
                  )
                : (0, r.jsx)(d.Heading, {
                      variant: "heading-md/semibold",
                      className: I.n5,
                      children: n,
                  });
        return (0, r.jsx)(o.m_, {
            text: C.intl.string(C.t.UnKHdo),
            shouldShow: !s,
            children: (0, r.jsx)("div", {
                className: I.Lg,
                children: a,
            }),
        });
    },
    v = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, r.jsxs)("div", {
            className: I.Ip,
            children: [
                (0, r.jsx)("div", {
                    className: I.Ej,
                }),
                (0, r.jsx)("div", {
                    className: s()({
                        [I.ch]: t > n,
                        [I.q_]: t === n,
                    }),
                }),
            ],
        });
    },
    N = (e) => {
        let { userRecords: t } = e,
            n = t.length,
            i = n < 1 ? null : t[0],
            l = n < 2 ? null : t[1],
            s = n < 3 ? null : t[2];
        return (0, r.jsxs)("div", {
            className: I.ZM,
            children: [
                (0, r.jsx)(j, {
                    userRecord: i,
                    placement: 1,
                }),
                (0, r.jsx)(v, {
                    numSentReferrals: n,
                    placement: 1,
                }),
                (0, r.jsx)(j, {
                    userRecord: l,
                    placement: 2,
                }),
                (0, r.jsx)(v, {
                    numSentReferrals: n,
                    placement: 2,
                }),
                (0, r.jsx)(j, {
                    userRecord: s,
                    placement: 3,
                }),
            ],
        });
    },
    y = (e) => {
        let { isInSettings: t = !1 } = e,
            l = (0, a.bG)([h.A], () => h.A.getRecipientStatus()),
            { referralSentUsers: o } = (0, b.J)(),
            p = i.useMemo(() => o.map((e) => new m.A(e)), [o]),
            j = {
                redeemed: 0,
                converted: 0,
                sent: l.size,
            };
        l.forEach((e) => {
            e === f.aK.REDEEMED && j.redeemed++, e === f.aK.CONVERTED && (j.redeemed++, j.converted++);
        });
        let v = j.sent === b.Z,
            y = A.A.getArticleURL(O.MVz.REFERRAL_PROGRAM),
            { analyticsLocations: P } = (0, _.Ay)(u.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            R = i.useRef(null),
            D = (j.sent / b.Z) * 100,
            w = (0, r.jsxs)("div", {
                className: I.hE,
                children: [
                    (0, r.jsx)(E.Ay, {
                        percentage: D,
                        progressCircleVariation: E.BN.NITRO_LOGO,
                        iconClassName: s()({
                            [I.VC]: !t,
                            [I.ER]: t,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: I.Ns,
                        children: [
                            (0, r.jsx)(d.Heading, {
                                variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                                className: I.R0,
                                children: (0, x.X8)({
                                    hasSentAll: v,
                                }),
                            }),
                            (0, r.jsx)(N, {
                                userRecords: p,
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: t ? "text-sm/normal" : "text-lg/medium",
                                children: (0, x.dB)({
                                    helpdeskArticle: y,
                                    referralsStatuses: j,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: s()(I.Fb, {
                                    [I.jv]: !t,
                                }),
                                children: (0, r.jsx)(d.wLn, {
                                    "data-migration-pending": !0,
                                    className: I.r$,
                                    color: c.XD.CUSTOM,
                                    onClick: () =>
                                        ((e) => {
                                            let { analyticsLocations: t } = e;
                                            g.default.track(O.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                                location_stack: t,
                                            }),
                                                (0, d.mMO)(async () => {
                                                    let { default: e } = await n.e("26489").then(n.bind(n, 477088));
                                                    return (n) => {
                                                        var i, l;
                                                        return (0, r.jsx)(
                                                            e,
                                                            ((i = S({}, n)),
                                                            (l = l =
                                                                {
                                                                    sourceAnalyticsLocations: t,
                                                                }),
                                                            Object.getOwnPropertyDescriptors
                                                                ? Object.defineProperties(
                                                                      i,
                                                                      Object.getOwnPropertyDescriptors(l),
                                                                  )
                                                                : (function (e, t) {
                                                                      var n = Object.keys(e);
                                                                      if (Object.getOwnPropertySymbols) {
                                                                          var r = Object.getOwnPropertySymbols(e);
                                                                          n.push.apply(n, r);
                                                                      }
                                                                      return n;
                                                                  })(Object(l)).forEach(function (e) {
                                                                      Object.defineProperty(
                                                                          i,
                                                                          e,
                                                                          Object.getOwnPropertyDescriptor(l, e),
                                                                      );
                                                                  }),
                                                            i),
                                                        );
                                                    };
                                                });
                                        })({
                                            analyticsLocations: P,
                                        }),
                                    onlyShineOnHover: !0,
                                    children: (0, r.jsxs)("div", {
                                        className: I.Zn,
                                        children: [
                                            (0, r.jsx)("img", {
                                                src: T,
                                                alt: "",
                                                className: I.QH,
                                            }),
                                            v ? C.intl.string(C.t.SY9tyI) : C.intl.string(C.t.Lm2nFc),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            L = j.redeemed === b.Z;
        return (0, r.jsx)(_.f5, {
            value: P,
            children: (0, r.jsx)("div", {
                className: s()({
                    [I.f5]: L,
                    [I.JY]: !L,
                    [I.VX]: !t,
                    [I.m$]: L && t,
                }),
                children: (0, r.jsx)("div", {
                    ref: R,
                    className: s()({
                        [I.dn]: !t,
                        [I.d_]: t,
                        [I.kS]: L,
                    }),
                    children: w,
                }),
            }),
        });
    };
