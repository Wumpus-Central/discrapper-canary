n.d(t, { Z: () => Z }), n(953529);
var i = n(951288),
    a = n(647438),
    l = n(120356),
    o = n.n(l),
    r = n(286379),
    s = n(692547),
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
    x = n(846488),
    _ = n(384725),
    j = n(97568),
    E = n(800530),
    O = n(981631),
    P = n(388032),
    A = n(586449);
function w(e) {
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
function C(e, t) {
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
                    ? P.intl.format(P.t.HpvELi, e)
                    : (null == n ? void 0 : n.member_type) === h.wO.OWNER
                      ? P.intl.format(P.t.X1ngSU, C(w({}, e), { guildName: null == n ? void 0 : n.name }))
                      : P.intl.format(P.t.rmpEPD, C(w({}, e), { guildName: null == n ? void 0 : n.name }));
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
                          children: P.intl.string(P.t.O2nYk5),
                      }),
                      (0, i.jsxs)("ul", {
                          className: A.classificationActionsTakenList,
                          children: [
                              t.map((e) => (0, i.jsx)(N, { action: e }, e.id)),
                              null != n
                                  ? (0, i.jsx)(
                                        "li",
                                        {
                                            className: A.classificationActionsTakenRow,
                                            children: (0, i.jsx)(c.Text, {
                                                tag: "span",
                                                variant: "heading-md/normal",
                                                color: "text-default",
                                                children: P.intl.format(P.t.TByIjY, {
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
    N = (e) => {
        let { action: t } = e;
        return (0, i.jsx)(i.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, i.jsx)(
                    "li",
                    {
                        className: A.classificationActionsTakenRow,
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
    L = (e) => {
        let { classificationTypeText: t, policyExplainerLink: n } = e;
        return (0, i.jsxs)(c.eee, {
            href: n,
            className: A.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, i.jsx)("div", {
                    className: A.classificationPolicyCardIcon,
                    children: (0, i.jsx)(c.b7C, {
                        size: "md",
                        color: s.Z.colors.FOCUS_PRIMARY,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: A.classificationPolicyDescriptionContainer,
                    children: (0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: P.intl.format(P.t.zxUdpq, { classificationDescription: t }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: A.classificationPolicyLinkIcon,
                    children: (0, i.jsx)(c.Fbu, {
                        size: "md",
                        color: s.Z.colors.INTERACTIVE_NORMAL,
                    }),
                }),
            ],
        });
    },
    k = () =>
        (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: P.intl.string(P.t["I2H0/P"]),
        }),
    I = (e) =>
        (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: P.intl.format(P.t.IFxUaW, {
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
            className: A.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, i.jsx)(k, {})
                : (0, i.jsx)(I, {
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
                    children: P.intl.string(P.t["977ien"]),
                }),
                (0, i.jsx)(c.Text, {
                    className: A.guidelinesExplanation,
                    variant: "text-sm/normal",
                    children: P.intl.format(P.t["1Z/+aG"], {
                        tosLink: t,
                        communityGuidelinesLink: n,
                    }),
                }),
                (0, i.jsx)(L, {
                    classificationTypeText: a,
                    policyExplainerLink: l,
                }),
                o,
            ],
        });
    },
    Z = (e) => {
        var t;
        let { classificationId: n, source: l, onError: s, onClose: c } = e,
            {
                classification: m,
                classificationRequestState: P,
                isAppealEligible: w,
                isDsaEligible: C,
                violationType: N,
            } = (0, v.YG)(n),
            L = (0, d.e7)([g.Z], () => g.Z.getAppealEligibility()),
            k = (0, b.P)(),
            I = null != m && null != m.flagged_content && m.flagged_content.length > 0,
            Z = (0, x.e)(),
            M = !!(null == m ? void 0 : m.is_coppa) && L.includes(h.tG.AGE_VERIFY_ELIGIBLE),
            R = {
                accountStanding: k,
                classificationId: n,
                hasFlaggedContent: I,
                isDsaEligible: C,
                source: l,
                violationType: N,
            },
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
        null == m && P === h.OY.FAILED)
            ? (s(), null)
            : null == m
              ? null
              : (0, i.jsxs)("div", {
                    className: A.classificationContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: A.section,
                            children: (0, i.jsx)(T, {
                                classificationTypeText: m.description,
                                guildMetadata: null == m ? void 0 : m.guild_metadata,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: o()(A.body, A.section),
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
                                                account_standing: k.state,
                                                classification_ids: [Number(n)],
                                                source: l,
                                                is_violative_content_shown: I,
                                                is_dsa_eligible: C,
                                                violation_type: N,
                                            }),
                                                M
                                                    ? f.Z.open(n, c)
                                                    : w &&
                                                      (u.Z.increment({ name: r.V.APPEAL_INGESTION_VIEW }), _.Z.open(n));
                                        },
                                        isAppealEligible: w || M,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
    };
