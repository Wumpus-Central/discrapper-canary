n.d(t, { Z: () => Z }), n(953529);
var i = n(951288),
    a = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(286379),
    r = n(692547),
    c = n(481060),
    d = n(442837),
    u = n(797614),
    m = n(706454),
    p = n(626135),
    f = n(331692),
    h = n(531441),
    g = n(236289),
    y = n(788080),
    b = n(451284),
    v = n(613734),
    _ = n(846488),
    x = n(384725),
    j = n(97568),
    E = n(800530),
    O = n(981631),
    A = n(388032),
    P = n(586449);
function C(e) {
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
function w(e, t) {
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
let T = (e) => {
        let { classificationTypeText: t, guildMetadata: n } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, i.jsx)("strong", { children: e }, t),
                };
                return null == n
                    ? A.intl.format(A.t.HpvELi, e)
                    : (null == n ? void 0 : n.member_type) === h.wO.OWNER
                      ? A.intl.format(A.t.X1ngSU, w(C({}, e), { guildName: null == n ? void 0 : n.name }))
                      : A.intl.format(A.t.rmpEPD, w(C({}, e), { guildName: null == n ? void 0 : n.name }));
            }, [t, n]);
        return (0, i.jsx)(c.X6q, {
            variant: "heading-xl/normal",
            children: l,
        });
    },
    S = (e) => {
        let { actions: t, classificationExpiration: n } = e,
            a = (0, d.e7)([m.default], () => m.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == n
            ? null
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(c.Text, {
                          variant: "eyebrow",
                          color: "text-muted",
                          children: A.intl.string(A.t.O2nYk5),
                      }),
                      (0, i.jsxs)("ul", {
                          className: P.classificationActionsTakenList,
                          children: [
                              t.map((e) => (0, i.jsx)(L, { action: e }, e.id)),
                              null != n
                                  ? (0, i.jsx)(
                                        "li",
                                        {
                                            className: P.classificationActionsTakenRow,
                                            children: (0, i.jsx)(c.Text, {
                                                tag: "span",
                                                variant: "heading-md/normal",
                                                color: "text-default",
                                                children: A.intl.format(A.t.TByIjY, {
                                                    expirationDate: n.toLocaleDateString(a, { dateStyle: "medium" }),
                                                }),
                                            }),
                                        },
                                        "expiration",
                                    )
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    L = (e) => {
        let { action: t } = e;
        return (0, i.jsx)(i.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, i.jsx)(
                    "li",
                    {
                        className: P.classificationActionsTakenRow,
                        children: (0, i.jsx)(c.Text, {
                            tag: "span",
                            variant: "heading-md/normal",
                            color: "text-default",
                            children: e,
                        }),
                    },
                    t,
                ),
            ),
        });
    },
    N = (e) => {
        let { classificationTypeText: t, policyExplainerLink: n } = e;
        return (0, i.jsxs)(c.eee, {
            href: n,
            className: P.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, i.jsx)("div", {
                    className: P.classificationPolicyCardIcon,
                    children: (0, i.jsx)(c.b7C, {
                        size: "md",
                        color: r.Z.colors.FOCUS_PRIMARY,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: P.classificationPolicyDescriptionContainer,
                    children: (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: A.intl.format(A.t.zxUdpq, { classificationDescription: t }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: P.classificationPolicyLinkIcon,
                    children: (0, i.jsx)(c.Fbu, {
                        size: "md",
                        color: r.Z.colors.INTERACTIVE_NORMAL,
                    }),
                }),
            ],
        });
    },
    I = () =>
        (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: A.intl.string(A.t["I2H0/P"]),
        }),
    k = (e) =>
        (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: A.intl.format(A.t.IFxUaW, {
                letUsKnowHook: (t, n) =>
                    (0, i.jsx)(
                        c.eee,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: t,
                        },
                        n,
                    ),
            }),
        }),
    U = (e) =>
        (0, i.jsx)("div", {
            className: P.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, i.jsx)(I, {})
                : (0, i.jsx)(k, {
                      appealLink: E.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible,
                  }),
        }),
    D = (e) => {
        let {
            tosLink: t,
            communityGuidelinesLink: n,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: o,
        } = e;
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(c.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children: A.intl.string(A.t["977ien"]),
                }),
                (0, i.jsx)(c.Text, {
                    className: P.guidelinesExplanation,
                    variant: "text-sm/normal",
                    children: A.intl.format(A.t["1Z/+aG"], {
                        tosLink: t,
                        communityGuidelinesLink: n,
                    }),
                }),
                (0, i.jsx)(N, {
                    classificationTypeText: a,
                    policyExplainerLink: l,
                }),
                o,
            ],
        });
    },
    Z = (e) => {
        var t;
        let { classificationId: n, source: l, onError: r, onClose: c } = e,
            {
                classification: m,
                classificationRequestState: A,
                isAppealEligible: C,
                isDsaEligible: w,
                violationType: L,
            } = (0, v.YG)(n),
            N = (0, d.e7)([g.Z], () => g.Z.getAppealEligibility()),
            I = (0, b.P)(),
            k = null != m && null != m.flagged_content && m.flagged_content.length > 0,
            Z = (0, _.e)(),
            M = !!(null == m ? void 0 : m.is_coppa) && N.includes(h.tG.AGE_VERIFY_ELIGIBLE),
            R =
                (M && N.includes(h.tG.AGE_VERIFY_GLOBAL_ELIGIBLE),
                {
                    accountStanding: I,
                    classificationId: n,
                    hasFlaggedContent: k,
                    isDsaEligible: w,
                    source: l,
                    violationType: L,
                }),
            Y = a.useRef(R);
        return (a.useEffect(() => {
            Y.current = R;
        }),
        a.useEffect(() => {
            let {
                accountStanding: e,
                classificationId: t,
                hasFlaggedContent: n,
                isDsaEligible: i,
                source: a,
                violationType: l,
            } = Y.current;
            Z &&
                p.default.track(O.rMx.SAFETY_HUB_ACTION, {
                    action: E.n0.ViewViolationDetail,
                    account_standing: e.state,
                    classification_ids: [Number(t)],
                    source: a,
                    is_violative_content_shown: n,
                    is_dsa_eligible: i,
                    violation_type: l,
                });
        }, [Z]),
        null == m && A === h.OY.FAILED)
            ? (r(), null)
            : null == m
              ? null
              : (0, i.jsxs)("div", {
                    className: P.classificationContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: P.section,
                            children: (0, i.jsx)(T, {
                                classificationTypeText: m.description,
                                guildMetadata: null == m ? void 0 : m.guild_metadata,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: o()(P.body, P.section),
                            children: [
                                (0, i.jsx)(j.s, { flaggedContent: null != (t = m.flagged_content) ? t : [] }),
                                (0, i.jsx)(S, {
                                    actions: m.actions,
                                    classificationExpiration: (0, y.Pu)(m),
                                }),
                                (0, i.jsx)(D, {
                                    classificationTypeText: m.description,
                                    tosLink: E.sQ.TOS_LINK,
                                    communityGuidelinesLink: E.sQ.COMMUNITY_GUIDELINES,
                                    policyExplainerLink: m.explainer_link,
                                    appealComponent: (0, i.jsx)(U, {
                                        hasBeenAppealed: null != m.appeal_status,
                                        onLetUsKnowClick: () => {
                                            p.default.track(O.rMx.SAFETY_HUB_ACTION, {
                                                action: E.n0.ClickLetUsKnow,
                                                account_standing: I.state,
                                                classification_ids: [Number(n)],
                                                source: l,
                                                is_violative_content_shown: k,
                                                is_dsa_eligible: w,
                                                violation_type: L,
                                            }),
                                                M
                                                    ? f.Z.open(n, c)
                                                    : C &&
                                                      (u.Z.increment({ name: s.V.APPEAL_INGESTION_VIEW }), x.Z.open(n));
                                        },
                                        isAppealEligible: C || M,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
    };
