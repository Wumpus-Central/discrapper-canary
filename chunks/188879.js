var n = i(200651),
    a = i(192379),
    l = i(286379),
    s = i(692547),
    o = i(481060),
    r = i(442837),
    c = i(797614),
    d = i(706454),
    u = i(626135),
    m = i(531441),
    h = i(236289),
    p = i(788080),
    x = i(451284),
    f = i(613734),
    g = i(846488),
    v = i(384725),
    _ = i(853178),
    E = i(97568),
    A = i(800530),
    T = i(981631),
    j = i(388032),
    C = i(528959);
let y = (e) => {
        let { classificationTypeText: t, guildMetadata: i } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, n.jsx)('strong', { children: e }, t)
                };
                return null == i
                    ? j.intl.format(j.t.HpvELi, e)
                    : (null == i ? void 0 : i.member_type) === m.wO.OWNER
                      ? j.intl.format(j.t.X1ngSU, {
                            ...e,
                            guildName: null == i ? void 0 : i.name
                        })
                      : j.intl.format(j.t.rmpEPD, {
                            ...e,
                            guildName: null == i ? void 0 : i.name
                        });
            }, [t, i]);
        return (0, n.jsx)('div', {
            className: C.classificationHeader,
            children: (0, n.jsx)(o.Heading, {
                variant: 'heading-xl/normal',
                children: l
            })
        });
    },
    N = (e) => {
        let { actions: t, classificationExpiration: i } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == i
            ? null
            : (0, n.jsxs)('div', {
                  className: C.classificationActionsTakenContainer,
                  children: [
                      (0, n.jsx)(o.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: j.intl.string(j.t.O2nYk5)
                      }),
                      (0, n.jsxs)('ul', {
                          className: C.classificationActionsTakenList,
                          children: [
                              t.map((e) => (0, n.jsx)(S, { action: e }, e.id)),
                              null != i
                                  ? (0, n.jsx)(
                                        'li',
                                        {
                                            className: C.classificationActionsTakenRow,
                                            children: (0, n.jsx)(o.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: j.intl.format(j.t.TByIjY, { expirationDate: i.toLocaleDateString(a, { dateStyle: 'medium' }) })
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
    S = (e) => {
        let { action: t } = e;
        return (0, n.jsx)(n.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, n.jsx)(
                    'li',
                    {
                        className: C.classificationActionsTakenRow,
                        children: (0, n.jsx)(o.Text, {
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
    L = (e) => {
        let { classificationTypeText: t, policyExplainerLink: i } = e;
        return (0, n.jsxs)(o.Anchor, {
            href: i,
            className: C.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)('div', {
                    className: C.classificationPolicyCardIcon,
                    children: (0, n.jsx)(o.ShieldIcon, {
                        size: 'md',
                        color: s.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, n.jsx)('div', {
                    className: C.classificationPolicyDescriptionContainer,
                    children: (0, n.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: j.intl.format(j.t.zxUdpq, { classificationDescription: t })
                    })
                }),
                (0, n.jsx)('div', {
                    className: C.classificationPolicyLinkIcon,
                    children: (0, n.jsx)(o.ChevronSmallRightIcon, {
                        size: 'md',
                        color: s.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    I = () =>
        (0, n.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: j.intl.string(j.t['I2H0/P'])
        }),
    w = (e) =>
        (0, n.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: j.intl.format(j.t.IFxUaW, {
                letUsKnowHook: (t, i) =>
                    (0, n.jsx)(
                        o.Anchor,
                        {
                            href: e.isAppealEligible ? void 0 : e.appealLink,
                            onClick: e.letUsKnowClick,
                            children: t
                        },
                        i
                    )
            })
        }),
    k = (e) =>
        (0, n.jsx)('div', {
            className: C.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(I, {})
                : (0, n.jsx)(w, {
                      appealLink: A.sQ.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible
                  })
        }),
    P = (e) => {
        let { tosLink: t, communityGuidelinesLink: i, classificationTypeText: a, policyExplainerLink: l, appealComponent: s } = e;
        return (0, n.jsxs)('div', {
            className: C.classificationActionExplanationContainer,
            children: [
                (0, n.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: j.intl.string(j.t['977ien'])
                }),
                (0, n.jsx)(o.Text, {
                    className: C.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: j.intl.format(j.t['1Z/+aG'], {
                        tosLink: t,
                        communityGuidelinesLink: i
                    })
                }),
                (0, n.jsx)(L, {
                    classificationTypeText: a,
                    policyExplainerLink: l
                }),
                s
            ]
        });
    };
t.Z = (e) => {
    var t;
    let { classificationId: i, source: s, onError: o, onClose: d } = e,
        { classification: j, classificationRequestState: S, isAppealEligible: L, isDsaEligible: I, violationType: w } = (0, f.YG)(i),
        U = (0, r.e7)([h.Z], () => h.Z.getAppealEligibility()),
        M = (0, x.P)(),
        Z = null != j && null != j.flagged_content && j.flagged_content.length > 0,
        O = (0, g.e)(),
        b = !!(null == j ? void 0 : j.is_coppa) && U.includes(m.tG.AGE_VERIFY_ELIGIBLE),
        D = {
            accountStanding: M,
            classificationId: i,
            hasFlaggedContent: Z,
            isDsaEligible: I,
            source: s,
            violationType: w
        },
        R = a.useRef(D);
    return (a.useEffect(() => {
        R.current = D;
    }),
    a.useEffect(() => {
        let { accountStanding: e, classificationId: t, hasFlaggedContent: i, isDsaEligible: n, source: a, violationType: l } = R.current;
        O &&
            u.default.track(T.rMx.SAFETY_HUB_ACTION, {
                action: A.n0.ViewViolationDetail,
                account_standing: e.state,
                classification_ids: [Number(t)],
                source: a,
                is_violative_content_shown: i,
                is_dsa_eligible: n,
                violation_type: l
            });
    }, [O]),
    null == j && S === m.OY.FAILED)
        ? (o(), null)
        : null == j
          ? null
          : (0, n.jsxs)('div', {
                className: C.classificationContainer,
                children: [
                    (0, n.jsx)(y, {
                        classificationTypeText: j.description,
                        guildMetadata: null == j ? void 0 : j.guild_metadata
                    }),
                    (0, n.jsx)(E.s, { flaggedContent: null !== (t = j.flagged_content) && void 0 !== t ? t : [] }),
                    (0, n.jsx)(N, {
                        actions: j.actions,
                        classificationExpiration: (0, p.Pu)(j)
                    }),
                    (0, n.jsx)(P, {
                        classificationTypeText: j.description,
                        tosLink: A.sQ.TOS_LINK,
                        communityGuidelinesLink: A.sQ.COMMUNITY_GUIDELINES,
                        policyExplainerLink: j.explainer_link,
                        appealComponent: (0, n.jsx)(k, {
                            hasBeenAppealed: null != j.appeal_status,
                            onLetUsKnowClick: () => {
                                u.default.track(T.rMx.SAFETY_HUB_ACTION, {
                                    action: A.n0.ClickLetUsKnow,
                                    account_standing: M.state,
                                    classification_ids: [Number(i)],
                                    source: s,
                                    is_violative_content_shown: Z,
                                    is_dsa_eligible: I,
                                    violation_type: w
                                }),
                                    b ? _.Z.open(d) : L && (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }), v.Z.open(i));
                            },
                            isAppealEligible: L || b
                        })
                    })
                ]
            });
};
