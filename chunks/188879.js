t.d(i, { Z: () => Z });
var n = t(200651),
    a = t(192379),
    l = t(286379),
    s = t(692547),
    o = t(481060),
    r = t(442837),
    c = t(797614),
    d = t(706454),
    m = t(626135),
    u = t(331692),
    h = t(531441),
    p = t(236289),
    x = t(788080),
    f = t(451284),
    g = t(613734),
    v = t(846488),
    j = t(384725),
    E = t(97568),
    _ = t(800530),
    C = t(981631),
    N = t(388032),
    y = t(514836);
let A = (e) => {
        let { classificationTypeText: i, guildMetadata: t } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: i,
                    classificationHook: (e, i) => (0, n.jsx)('strong', { children: e }, i)
                };
                return null == t
                    ? N.intl.format(N.t.HpvELi, e)
                    : (null == t ? void 0 : t.member_type) === h.wO.OWNER
                      ? N.intl.format(N.t.X1ngSU, {
                            ...e,
                            guildName: null == t ? void 0 : t.name
                        })
                      : N.intl.format(N.t.rmpEPD, {
                            ...e,
                            guildName: null == t ? void 0 : t.name
                        });
            }, [i, t]);
        return (0, n.jsx)('div', {
            className: y.classificationHeader,
            children: (0, n.jsx)(o.X6q, {
                variant: 'heading-xl/normal',
                children: l
            })
        });
    },
    T = (e) => {
        let { actions: i, classificationExpiration: t } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === i.filter((e) => e.descriptions.length > 0).length && null == t
            ? null
            : (0, n.jsxs)('div', {
                  className: y.classificationActionsTakenContainer,
                  children: [
                      (0, n.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: N.intl.string(N.t.O2nYk5)
                      }),
                      (0, n.jsxs)('ul', {
                          className: y.classificationActionsTakenList,
                          children: [
                              i.map((e) => (0, n.jsx)(w, { action: e }, e.id)),
                              null != t
                                  ? (0, n.jsx)(
                                        'li',
                                        {
                                            className: y.classificationActionsTakenRow,
                                            children: (0, n.jsx)(o.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: N.intl.format(N.t.TByIjY, { expirationDate: t.toLocaleDateString(a, { dateStyle: 'medium' }) })
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
    w = (e) => {
        let { action: i } = e;
        return (0, n.jsx)(n.Fragment, {
            children: i.descriptions.map((e, i) =>
                (0, n.jsx)(
                    'li',
                    {
                        className: y.classificationActionsTakenRow,
                        children: (0, n.jsx)(o.Text, {
                            tag: 'span',
                            variant: 'heading-md/normal',
                            color: 'text-normal',
                            children: e
                        })
                    },
                    i
                )
            )
        });
    },
    I = (e) => {
        let { classificationTypeText: i, policyExplainerLink: t } = e;
        return (0, n.jsxs)(o.eee, {
            href: t,
            className: y.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)('div', {
                    className: y.classificationPolicyCardIcon,
                    children: (0, n.jsx)(o.b7C, {
                        size: 'md',
                        color: s.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, n.jsx)('div', {
                    className: y.classificationPolicyDescriptionContainer,
                    children: (0, n.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: N.intl.format(N.t.zxUdpq, { classificationDescription: i })
                    })
                }),
                (0, n.jsx)('div', {
                    className: y.classificationPolicyLinkIcon,
                    children: (0, n.jsx)(o.Fbu, {
                        size: 'md',
                        color: s.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    k = () =>
        (0, n.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: N.intl.string(N.t['I2H0/P'])
        }),
    L = (e) =>
        (0, n.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: N.intl.format(N.t.IFxUaW, {
                letUsKnowHook: (i, t) =>
                    (0, n.jsx)(
                        o.eee,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: i
                        },
                        t
                    )
            })
        }),
    S = (e) =>
        (0, n.jsx)('div', {
            className: y.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(k, {})
                : (0, n.jsx)(L, {
                      appealLink: _.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    P = (e) => {
        let { tosLink: i, communityGuidelinesLink: t, classificationTypeText: a, policyExplainerLink: l, appealComponent: s } = e;
        return (0, n.jsxs)('div', {
            className: y.classificationActionExplanationContainer,
            children: [
                (0, n.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: N.intl.string(N.t['977ien'])
                }),
                (0, n.jsx)(o.Text, {
                    className: y.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: N.intl.format(N.t['1Z/+aG'], {
                        tosLink: i,
                        communityGuidelinesLink: t
                    })
                }),
                (0, n.jsx)(I, {
                    classificationTypeText: a,
                    policyExplainerLink: l
                }),
                s
            ]
        });
    },
    Z = (e) => {
        var i;
        let { classificationId: t, source: s, onError: o, onClose: d } = e,
            { classification: N, classificationRequestState: w, isAppealEligible: I, isDsaEligible: k, violationType: L } = (0, g.YG)(t),
            Z = (0, r.e7)([p.Z], () => p.Z.getAppealEligibility()),
            U = (0, f.P)(),
            b = null != N && null != N.flagged_content && N.flagged_content.length > 0,
            O = (0, v.e)(),
            M = !!(null == N ? void 0 : N.is_coppa) && Z.includes(h.tG.AGE_VERIFY_ELIGIBLE),
            D = {
                accountStanding: U,
                classificationId: t,
                hasFlaggedContent: b,
                isDsaEligible: k,
                source: s,
                violationType: L
            },
            Y = a.useRef(D);
        return (a.useEffect(() => {
            Y.current = D;
        }),
        a.useEffect(() => {
            let { accountStanding: e, classificationId: i, hasFlaggedContent: t, isDsaEligible: n, source: a, violationType: l } = Y.current;
            O &&
                m.default.track(C.rMx.SAFETY_HUB_ACTION, {
                    action: _.n0.ViewViolationDetail,
                    account_standing: e.state,
                    classification_ids: [Number(i)],
                    source: a,
                    is_violative_content_shown: t,
                    is_dsa_eligible: n,
                    violation_type: l
                });
        }, [O]),
        null == N && w === h.OY.FAILED)
            ? (o(), null)
            : null == N
              ? null
              : (0, n.jsxs)('div', {
                    className: y.classificationContainer,
                    children: [
                        (0, n.jsx)(A, {
                            classificationTypeText: N.description,
                            guildMetadata: null == N ? void 0 : N.guild_metadata
                        }),
                        (0, n.jsx)(E.s, { flaggedContent: null !== (i = N.flagged_content) && void 0 !== i ? i : [] }),
                        (0, n.jsx)(T, {
                            actions: N.actions,
                            classificationExpiration: (0, x.Pu)(N)
                        }),
                        (0, n.jsx)(P, {
                            classificationTypeText: N.description,
                            tosLink: _.sQ.TOS_LINK,
                            communityGuidelinesLink: _.sQ.COMMUNITY_GUIDELINES,
                            policyExplainerLink: N.explainer_link,
                            appealComponent: (0, n.jsx)(S, {
                                hasBeenAppealed: null != N.appeal_status,
                                onLetUsKnowClick: () => {
                                    m.default.track(C.rMx.SAFETY_HUB_ACTION, {
                                        action: _.n0.ClickLetUsKnow,
                                        account_standing: U.state,
                                        classification_ids: [Number(t)],
                                        source: s,
                                        is_violative_content_shown: b,
                                        is_dsa_eligible: k,
                                        violation_type: L
                                    }),
                                        M ? u.Z.open(d) : I && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), j.Z.open(t));
                                },
                                isAppealEligible: I || M
                            })
                        })
                    ]
                });
    };
