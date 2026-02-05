I.d(_, { A: () => F });
var A = I(627968),
    S = I(64700),
    T = I(503698),
    C = I.n(T),
    O = I(731738),
    N = I(827734),
    R = I(397927),
    e = I(311907),
    P = I(831062),
    t = I(773669),
    L = I(954571),
    D = I(67521),
    i = I(739010),
    n = I(207913),
    a = I(393033),
    l = I(335891),
    V = I(985481),
    s = I(259960),
    Y = I(26095),
    o = I(246505),
    U = I(239093),
    r = I(652215),
    G = I(985018),
    d = I(976213);
let c = (E) => {
        let { classificationTypeText: _, guildMetadata: I } = E,
            T = S.useMemo(() => {
                let E = {
                    classification_type: _,
                    classificationHook: (E, _) => (0, A.jsx)("strong", { children: E }, _),
                };
                return null == I
                    ? G.intl.format(G.t.HpvELh, E)
                    : I?.member_type === i.Z9.OWNER
                      ? G.intl.format(G.t.X1ngSd, { ...E, guildName: I?.name })
                      : G.intl.format(G.t.rmpEPD, { ...E, guildName: I?.name });
            }, [_, I]);
        return (0, A.jsx)(R.Heading, { variant: "heading-xl/normal", children: T });
    },
    M = (E) => {
        let { actions: _, classificationExpiration: I } = E,
            S = (0, e.bG)([t.default], () => t.default.locale);
        return 0 === _.filter((E) => E.descriptions.length > 0).length && null == I
            ? null
            : (0, A.jsxs)("div", {
                  children: [
                      (0, A.jsx)(R.Text, {
                          variant: "eyebrow",
                          color: "text-muted",
                          children: G.intl.string(G.t["O2nYk+"]),
                      }),
                      (0, A.jsxs)("ul", {
                          className: d.nq,
                          children: [
                              _.map((E) => (0, A.jsx)(B, { action: E }, E.id)),
                              null != I
                                  ? (0, A.jsx)(
                                        "li",
                                        {
                                            className: d.DJ,
                                            children: (0, A.jsx)(R.Text, {
                                                tag: "span",
                                                variant: "heading-md/normal",
                                                color: "text-default",
                                                children: G.intl.format(G.t.TByIjT, {
                                                    expirationDate: I.toLocaleDateString(S, { dateStyle: "medium" }),
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
    B = (E) => {
        let { action: _ } = E;
        return (0, A.jsx)(A.Fragment, {
            children: _.descriptions.map((E, _) =>
                (0, A.jsx)(
                    "li",
                    {
                        className: d.DJ,
                        children: (0, A.jsx)(R.Text, {
                            tag: "span",
                            variant: "heading-md/normal",
                            color: "text-default",
                            children: E,
                        }),
                    },
                    _,
                ),
            ),
        });
    },
    m = (E) => {
        let { classificationTypeText: _, policyExplainerLink: I } = E;
        return (0, A.jsxs)(R.MzZ, {
            href: I,
            className: d.F8,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, A.jsx)("div", {
                    className: d.yi,
                    children: (0, A.jsx)(R.lmn, { size: "md", color: N.A.colors.BORDER_FOCUS }),
                }),
                (0, A.jsx)("div", {
                    className: d.wC,
                    children: (0, A.jsx)(R.Text, {
                        variant: "text-md/normal",
                        children: G.intl.format(G.t.zxUdpj, { classificationDescription: _ }),
                    }),
                }),
                (0, A.jsx)("div", {
                    className: d.g_,
                    children: (0, A.jsx)(R._BQ, { size: "md", color: N.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                }),
            ],
        });
    },
    H = () =>
        (0, A.jsx)(R.Text, { variant: "text-md/normal", color: "text-muted", children: G.intl.string(G.t["I2H0/E"]) }),
    h = (E) =>
        (0, A.jsx)(R.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: G.intl.format(G.t.IFxUaT, {
                letUsKnowHook: (_, I) =>
                    (0, A.jsx)(
                        R.MzZ,
                        { href: E.isAppealEligible ? void 0 : E.appealLink, onClick: E.letUsKnowClick, children: _ },
                        I,
                    ),
            }),
        }),
    u = (E) =>
        (0, A.jsx)("div", {
            className: d.CC,
            children: E.hasBeenAppealed
                ? (0, A.jsx)(H, {})
                : (0, A.jsx)(h, {
                      appealLink: U.d$.APPEALS_LINK,
                      letUsKnowClick: E.onLetUsKnowClick,
                      isAppealEligible: E.isAppealEligible,
                  }),
        }),
    p = (E) => {
        let {
            tosLink: _,
            communityGuidelinesLink: I,
            classificationTypeText: S,
            policyExplainerLink: T,
            appealComponent: C,
        } = E;
        return (0, A.jsxs)("div", {
            children: [
                (0, A.jsx)(R.Text, { variant: "eyebrow", color: "text-muted", children: G.intl.string(G.t["977iei"]) }),
                (0, A.jsx)(R.Text, {
                    className: d.t8,
                    variant: "text-sm/normal",
                    children: G.intl.format(G.t["1Z/+aA"], { tosLink: _, communityGuidelinesLink: I }),
                }),
                (0, A.jsx)(m, { classificationTypeText: S, policyExplainerLink: T }),
                C,
            ],
        });
    },
    F = (E) => {
        let { classificationId: _, source: I, onError: T, onClose: N } = E,
            {
                classification: R,
                classificationRequestState: t,
                isAppealEligible: G,
                isDsaEligible: B,
                violationType: m,
            } = (0, V.LJ)(_),
            H = (0, e.bG)([n.A], () => n.A.getAppealEligibility()),
            h = (0, l.K)(),
            F = null != R && null != R.flagged_content && R.flagged_content.length > 0,
            x = (0, s.v)(),
            g = !!R?.is_coppa && H.includes(i.RH.AGE_VERIFY_ELIGIBLE),
            f = !!R?.is_coppa && H.includes(i.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
            v = {
                accountStanding: h,
                classificationId: _,
                hasFlaggedContent: F,
                isDsaEligible: B,
                source: I,
                violationType: m,
            },
            j = S.useRef(v);
        return (S.useEffect(() => {
            j.current = v;
        }),
        S.useEffect(() => {
            let {
                accountStanding: E,
                classificationId: _,
                hasFlaggedContent: I,
                isDsaEligible: A,
                source: S,
                violationType: T,
            } = j.current;
            x &&
                L.default.track(r.HAw.SAFETY_HUB_ACTION, {
                    action: U.ZU.ViewViolationDetail,
                    account_standing: E.state,
                    classification_ids: [Number(_)],
                    source: S,
                    is_violative_content_shown: I,
                    is_dsa_eligible: A,
                    violation_type: T,
                });
        }, [x]),
        null == R && t === i.nU.FAILED)
            ? (T(), null)
            : null == R
              ? null
              : (0, A.jsxs)("div", {
                    className: d.ch,
                    children: [
                        (0, A.jsx)("div", {
                            className: d.uW,
                            children: (0, A.jsx)(c, {
                                classificationTypeText: R.description,
                                guildMetadata: R?.guild_metadata,
                            }),
                        }),
                        (0, A.jsxs)("div", {
                            className: C()(d.rf, d.uW),
                            children: [
                                (0, A.jsx)(o.U, { flaggedContent: R.flagged_content ?? [] }),
                                (0, A.jsx)(M, { actions: R.actions, classificationExpiration: (0, a.UI)(R) }),
                                (0, A.jsx)(p, {
                                    classificationTypeText: R.description,
                                    tosLink: U.d$.TOS_LINK,
                                    communityGuidelinesLink: U.d$.COMMUNITY_GUIDELINES,
                                    policyExplainerLink: R.explainer_link,
                                    appealComponent: (0, A.jsx)(u, {
                                        hasBeenAppealed: null != R.appeal_status,
                                        onLetUsKnowClick: () => {
                                            L.default.track(r.HAw.SAFETY_HUB_ACTION, {
                                                action: U.ZU.ClickLetUsKnow,
                                                account_standing: h.state,
                                                classification_ids: [Number(_)],
                                                source: I,
                                                is_violative_content_shown: F,
                                                is_dsa_eligible: B,
                                                violation_type: m,
                                            }),
                                                f
                                                    ? D.A.openV2(_, N)
                                                    : g
                                                      ? D.A.open(_, N)
                                                      : G &&
                                                        (P.A.increment({ name: O.K.APPEAL_INGESTION_VIEW }),
                                                        Y.A.open(_));
                                        },
                                        isAppealEligible: G || g,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
    };
