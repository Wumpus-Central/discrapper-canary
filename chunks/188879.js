n.d(t, { Z: () => U }), n(953529);
var i = n(200651),
    l = n(192379),
    a = n(286379),
    r = n(692547),
    o = n(481060),
    s = n(442837),
    c = n(797614),
    d = n(706454),
    u = n(626135),
    m = n(331692),
    p = n(531441),
    h = n(236289),
    f = n(788080),
    g = n(451284),
    y = n(613734),
    x = n(846488),
    j = n(384725),
    v = n(97568),
    b = n(800530),
    O = n(981631),
    E = n(388032),
    _ = n(549607);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function A(e, t) {
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
let P = (e) => {
        let { classificationTypeText: t, guildMetadata: n } = e,
            a = l.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, i.jsx)('strong', { children: e }, t)
                };
                return null == n ? E.intl.format(E.t.HpvELi, e) : (null == n ? void 0 : n.member_type) === p.wO.OWNER ? E.intl.format(E.t.X1ngSU, A(w({}, e), { guildName: null == n ? void 0 : n.name })) : E.intl.format(E.t.rmpEPD, A(w({}, e), { guildName: null == n ? void 0 : n.name }));
            }, [t, n]);
        return (0, i.jsx)('div', {
            className: _.classificationHeader,
            children: (0, i.jsx)(o.X6q, {
                variant: 'heading-xl/normal',
                children: a
            })
        });
    },
    T = (e) => {
        let { actions: t, classificationExpiration: n } = e,
            l = (0, s.e7)([d.default], () => d.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == n
            ? null
            : (0, i.jsxs)('div', {
                  className: _.classificationActionsTakenContainer,
                  children: [
                      (0, i.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: E.intl.string(E.t.O2nYk5)
                      }),
                      (0, i.jsxs)('ul', {
                          className: _.classificationActionsTakenList,
                          children: [
                              t.map((e) => (0, i.jsx)(C, { action: e }, e.id)),
                              null != n
                                  ? (0, i.jsx)(
                                        'li',
                                        {
                                            className: _.classificationActionsTakenRow,
                                            children: (0, i.jsx)(o.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: E.intl.format(E.t.TByIjY, { expirationDate: n.toLocaleDateString(l, { dateStyle: 'medium' }) })
                                            })
                                        },
                                        'expiration'
                                    )
                                  : null
                          ]
                      })
                  ]
              });
    },
    C = (e) => {
        let { action: t } = e;
        return (0, i.jsx)(i.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, i.jsx)(
                    'li',
                    {
                        className: _.classificationActionsTakenRow,
                        children: (0, i.jsx)(o.Text, {
                            tag: 'span',
                            variant: 'heading-md/normal',
                            color: 'text-normal',
                            children: e
                        })
                    },
                    t
                )
            )
        });
    },
    S = (e) => {
        let { classificationTypeText: t, policyExplainerLink: n } = e;
        return (0, i.jsxs)(o.eee, {
            href: n,
            className: _.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, i.jsx)('div', {
                    className: _.classificationPolicyCardIcon,
                    children: (0, i.jsx)(o.b7C, {
                        size: 'md',
                        color: r.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, i.jsx)('div', {
                    className: _.classificationPolicyDescriptionContainer,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: E.intl.format(E.t.zxUdpq, { classificationDescription: t })
                    })
                }),
                (0, i.jsx)('div', {
                    className: _.classificationPolicyLinkIcon,
                    children: (0, i.jsx)(o.Fbu, {
                        size: 'md',
                        color: r.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    N = () =>
        (0, i.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: E.intl.string(E.t['I2H0/P'])
        }),
    k = (e) =>
        (0, i.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: E.intl.format(E.t.IFxUaW, {
                letUsKnowHook: (t, n) =>
                    (0, i.jsx)(
                        o.eee,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: t
                        },
                        n
                    )
            })
        }),
    I = (e) =>
        (0, i.jsx)('div', {
            className: _.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, i.jsx)(N, {})
                : (0, i.jsx)(k, {
                      appealLink: b.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    L = (e) => {
        let { tosLink: t, communityGuidelinesLink: n, classificationTypeText: l, policyExplainerLink: a, appealComponent: r } = e;
        return (0, i.jsxs)('div', {
            className: _.classificationActionExplanationContainer,
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: E.intl.string(E.t['977ien'])
                }),
                (0, i.jsx)(o.Text, {
                    className: _.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: E.intl.format(E.t['1Z/+aG'], {
                        tosLink: t,
                        communityGuidelinesLink: n
                    })
                }),
                (0, i.jsx)(S, {
                    classificationTypeText: l,
                    policyExplainerLink: a
                }),
                r
            ]
        });
    },
    U = (e) => {
        var t;
        let { classificationId: n, source: r, onError: o, onClose: d } = e,
            { classification: E, classificationRequestState: w, isAppealEligible: A, isDsaEligible: C, violationType: S } = (0, y.YG)(n),
            N = (0, s.e7)([h.Z], () => h.Z.getAppealEligibility()),
            k = (0, g.P)(),
            U = null != E && null != E.flagged_content && E.flagged_content.length > 0,
            D = (0, x.e)(),
            Z = !!(null == E ? void 0 : E.is_coppa) && N.includes(p.tG.AGE_VERIFY_ELIGIBLE),
            M = {
                accountStanding: k,
                classificationId: n,
                hasFlaggedContent: U,
                isDsaEligible: C,
                source: r,
                violationType: S
            },
            R = l.useRef(M);
        return (l.useEffect(() => {
            R.current = M;
        }),
        l.useEffect(() => {
            let { accountStanding: e, classificationId: t, hasFlaggedContent: n, isDsaEligible: i, source: l, violationType: a } = R.current;
            D &&
                u.default.track(O.rMx.SAFETY_HUB_ACTION, {
                    action: b.n0.ViewViolationDetail,
                    account_standing: e.state,
                    classification_ids: [Number(t)],
                    source: l,
                    is_violative_content_shown: n,
                    is_dsa_eligible: i,
                    violation_type: a
                });
        }, [D]),
        null == E && w === p.OY.FAILED)
            ? (o(), null)
            : null == E
              ? null
              : (0, i.jsxs)('div', {
                    className: _.classificationContainer,
                    children: [
                        (0, i.jsx)(P, {
                            classificationTypeText: E.description,
                            guildMetadata: null == E ? void 0 : E.guild_metadata
                        }),
                        (0, i.jsx)(v.s, { flaggedContent: null != (t = E.flagged_content) ? t : [] }),
                        (0, i.jsx)(T, {
                            actions: E.actions,
                            classificationExpiration: (0, f.Pu)(E)
                        }),
                        (0, i.jsx)(L, {
                            classificationTypeText: E.description,
                            tosLink: b.sQ.TOS_LINK,
                            communityGuidelinesLink: b.sQ.COMMUNITY_GUIDELINES,
                            policyExplainerLink: E.explainer_link,
                            appealComponent: (0, i.jsx)(I, {
                                hasBeenAppealed: null != E.appeal_status,
                                onLetUsKnowClick: () => {
                                    u.default.track(O.rMx.SAFETY_HUB_ACTION, {
                                        action: b.n0.ClickLetUsKnow,
                                        account_standing: k.state,
                                        classification_ids: [Number(n)],
                                        source: r,
                                        is_violative_content_shown: U,
                                        is_dsa_eligible: C,
                                        violation_type: S
                                    }),
                                        Z ? m.Z.open(n, d) : A && (c.Z.increment({ name: a.V.APPEAL_INGESTION_VIEW }), j.Z.open(n));
                                },
                                isAppealEligible: A || Z
                            })
                        })
                    ]
                });
    };
