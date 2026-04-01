i.d(t, { A: () => P });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    o = i(731738),
    r = i(827734),
    d = i(397927),
    c = i(311907),
    m = i(831062),
    h = i(773669),
    u = i(954571),
    p = i(67521),
    A = i(739010),
    x = i(207913),
    _ = i(393033),
    g = i(335891),
    E = i(985481),
    f = i(259960),
    T = i(26095),
    v = i(246505),
    j = i(239093),
    y = i(652215),
    L = i(985018),
    N = i(472480);
let C = (e) => {
        let { classificationTypeText: t, guildMetadata: i } = e,
            l = a.useMemo(() => {
                let e = {
                    classification_type: t,
                    classificationHook: (e, t) => (0, n.jsx)("strong", { children: e }, t),
                };
                return null == i
                    ? L.intl.format(L.t.HpvELh, e)
                    : i?.member_type === A.Z9.OWNER
                      ? L.intl.format(L.t.X1ngSd, { ...e, guildName: i?.name })
                      : L.intl.format(L.t.rmpEPD, { ...e, guildName: i?.name });
            }, [t, i]);
        return (0, n.jsx)(d.Heading, { variant: "heading-xl/normal", children: l });
    },
    U = (e) => {
        let { actions: t, classificationExpiration: i } = e,
            a = (0, c.bG)([h.default], () => h.default.locale);
        return 0 === t.filter((e) => e.descriptions.length > 0).length && null == i
            ? null
            : (0, n.jsxs)("div", {
                  children: [
                      (0, n.jsx)(d.Text, {
                          variant: "eyebrow",
                          color: "text-muted",
                          children: L.intl.string(L.t["O2nYk+"]),
                      }),
                      (0, n.jsxs)("ul", {
                          className: N.nq,
                          children: [
                              t.map((e) => (0, n.jsx)(I, { action: e }, e.id)),
                              null != i
                                  ? (0, n.jsx)(
                                        "li",
                                        {
                                            className: N.DJ,
                                            children: (0, n.jsx)(d.Text, {
                                                tag: "span",
                                                variant: "heading-md/normal",
                                                color: "text-default",
                                                children: L.intl.format(L.t.TByIjT, {
                                                    expirationDate: i.toLocaleDateString(a, { dateStyle: "medium" }),
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
    I = (e) => {
        let { action: t } = e;
        return (0, n.jsx)(n.Fragment, {
            children: t.descriptions.map((e, t) =>
                (0, n.jsx)(
                    "li",
                    {
                        className: N.DJ,
                        children: (0, n.jsx)(d.Text, {
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
    S = (e) => {
        let { classificationTypeText: t, policyExplainerLink: i } = e;
        return (0, n.jsxs)(d.MzZ, {
            href: i,
            className: N.F8,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, n.jsx)("div", {
                    className: N.yi,
                    children: (0, n.jsx)(d.lmn, { size: "md", color: r.A.colors.BORDER_FOCUS }),
                }),
                (0, n.jsx)("div", {
                    className: N.wC,
                    children: (0, n.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: L.intl.format(L.t.zxUdpj, { classificationDescription: t }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: N.g_,
                    children: (0, n.jsx)(d._BQ, { size: "md", color: r.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                }),
            ],
        });
    },
    w = () =>
        (0, n.jsx)(d.Text, { variant: "text-md/normal", color: "text-muted", children: L.intl.string(L.t["I2H0/E"]) }),
    O = (e) =>
        (0, n.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.format(L.t.IFxUaT, {
                letUsKnowHook: (t, i) =>
                    (0, n.jsx)(
                        d.MzZ,
                        { href: e.isAppealEligible ? void 0 : e.appealLink, onClick: e.letUsKnowClick, children: t },
                        i,
                    ),
            }),
        }),
    k = (e) =>
        (0, n.jsx)("div", {
            className: N.CC,
            children: e.hasBeenAppealed
                ? (0, n.jsx)(w, {})
                : (0, n.jsx)(O, {
                      appealLink: j.d$.APPEALS_LINK,
                      letUsKnowClick: e.onLetUsKnowClick,
                      isAppealEligible: e.isAppealEligible,
                  }),
        }),
    M = (e) => {
        let {
            tosLink: t,
            communityGuidelinesLink: i,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: s,
        } = e;
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(d.Text, { variant: "eyebrow", color: "text-muted", children: L.intl.string(L.t["977iei"]) }),
                (0, n.jsx)(d.Text, {
                    className: N.t8,
                    variant: "text-sm/normal",
                    children: L.intl.format(L.t["1Z/+aA"], { tosLink: t, communityGuidelinesLink: i }),
                }),
                (0, n.jsx)(S, { classificationTypeText: a, policyExplainerLink: l }),
                s,
            ],
        });
    },
    P = (e) => {
        let { classificationId: t, source: i, onError: l, onClose: r } = e,
            {
                classification: d,
                classificationRequestState: h,
                isAppealEligible: L,
                isDsaEligible: I,
                violationType: S,
            } = (0, E.LJ)(t),
            w = (0, c.bG)([x.A], () => x.A.getAppealEligibility()),
            O = (0, g.K)(),
            P = null != d && null != d.flagged_content && d.flagged_content.length > 0,
            D = (0, f.v)(),
            b = !!d?.is_coppa && w.includes(A.RH.AGE_VERIFY_ELIGIBLE),
            G = !!d?.is_coppa && w.includes(A.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
            H = {
                accountStanding: O,
                classificationId: t,
                hasFlaggedContent: P,
                isDsaEligible: I,
                source: i,
                violationType: S,
            },
            F = a.useRef(H);
        return (a.useEffect(() => {
            F.current = H;
        }),
        a.useEffect(() => {
            let {
                accountStanding: e,
                classificationId: t,
                hasFlaggedContent: i,
                isDsaEligible: n,
                source: a,
                violationType: l,
            } = F.current;
            D &&
                u.default.track(y.HAw.SAFETY_HUB_ACTION, {
                    action: j.ZU.ViewViolationDetail,
                    account_standing: e.state,
                    classification_ids: [Number(t)],
                    source: a,
                    is_violative_content_shown: i,
                    is_dsa_eligible: n,
                    violation_type: l,
                });
        }, [D]),
        null == d && h === A.nU.FAILED)
            ? (l(), null)
            : null == d
              ? null
              : (0, n.jsxs)("div", {
                    className: N.ch,
                    children: [
                        (0, n.jsx)("div", {
                            className: N.uW,
                            children: (0, n.jsx)(C, {
                                classificationTypeText: d.description,
                                guildMetadata: d?.guild_metadata,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(N.rf, N.uW),
                            children: [
                                (0, n.jsx)(v.U, { flaggedContent: d.flagged_content ?? [] }),
                                (0, n.jsx)(U, { actions: d.actions, classificationExpiration: (0, _.UI)(d) }),
                                (0, n.jsx)(M, {
                                    classificationTypeText: d.description,
                                    tosLink: j.d$.TOS_LINK,
                                    communityGuidelinesLink: j.d$.COMMUNITY_GUIDELINES,
                                    policyExplainerLink: d.explainer_link,
                                    appealComponent: (0, n.jsx)(k, {
                                        hasBeenAppealed: null != d.appeal_status,
                                        onLetUsKnowClick: () => {
                                            u.default.track(y.HAw.SAFETY_HUB_ACTION, {
                                                action: j.ZU.ClickLetUsKnow,
                                                account_standing: O.state,
                                                classification_ids: [Number(t)],
                                                source: i,
                                                is_violative_content_shown: P,
                                                is_dsa_eligible: I,
                                                violation_type: S,
                                            }),
                                                G
                                                    ? p.A.openV2(t, r)
                                                    : b
                                                      ? p.A.open(t, r)
                                                      : L &&
                                                        (m.A.increment({ name: o.K.APPEAL_INGESTION_VIEW }),
                                                        T.A.open(t));
                                        },
                                        isAppealEligible: L || b,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
    };
