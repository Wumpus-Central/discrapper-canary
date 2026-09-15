i.d(e, { default: () => nn });
var t = i(477900),
    l = i(582128),
    a = i(935462),
    s = i(289873),
    r = i(780964),
    c = i(766075),
    o = i(393033),
    d = i(257110),
    u = i(503698),
    m = i.n(u),
    x = i(731738),
    p = i(661531),
    h = i(297264),
    j = i(834730),
    f = i(28863),
    E = i(231483),
    g = i(320448),
    _ = i(17928),
    A = i(847599),
    N = i(462924),
    v = i(807393),
    C = i(773669),
    L = i(174459),
    k = i(67521),
    I = i(739010),
    U = i(207913),
    T = i(335891),
    y = i(985481),
    w = i(259960),
    D = i(26095),
    b = i(607739),
    G = i(239093),
    O = i(652215),
    S = i(375708),
    K = i(78637),
    R = i(52111);
function F(n) {
    let { classificationTypeText: e, guildMetadata: i } = n,
        a = l.useMemo(() => {
            let n = { classification_type: e, classificationHook: (n, e) => (0, t.jsx)("strong", { children: n }, e) };
            return null == i
                ? S.intl.format(S.t.HpvELh, n)
                : i?.member_type === I.Z9.OWNER
                  ? S.intl.format(S.t.X1ngSd, { ...n, guildName: i?.name })
                  : S.intl.format(S.t.rmpEPD, { ...n, guildName: i?.name });
        }, [e, i]);
    return (0, t.jsx)(h.D, { variant: "heading-xl/normal", children: a });
}
function H(n) {
    let { actions: e, classificationExpiration: i } = n,
        l = (0, _.bG)([C.default], () => C.default.locale);
    return 0 === e.filter((n) => n.descriptions.length > 0).length && null == i
        ? null
        : (0, t.jsxs)("div", {
              children: [
                  (0, t.jsx)(j.E, { variant: "eyebrow", color: "text-muted", children: S.intl.string(S.t["O2nYk+"]) }),
                  (0, t.jsxs)("ul", {
                      className: R.nq,
                      children: [
                          e.map((n) => (0, t.jsx)(B, { action: n }, n.id)),
                          null != i
                              ? (0, t.jsx)(
                                    "li",
                                    {
                                        className: R.DJ,
                                        children: (0, t.jsx)(j.E, {
                                            tag: "span",
                                            variant: "heading-md/normal",
                                            color: "text-default",
                                            children: S.intl.format(S.t.TByIjT, {
                                                expirationDate: i.toLocaleDateString(l, { dateStyle: "medium" }),
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
}
function M() {
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(j.E, { variant: "eyebrow", color: "text-muted", children: S.intl.string(S.t["O2nYk+"]) }),
            (0, t.jsx)("ul", {
                className: R.nq,
                children: (0, t.jsx)("li", {
                    className: R.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: S.intl.string(K.default.rn3Gto),
                    }),
                }),
            }),
        ],
    });
}
function B(n) {
    let { action: e } = n;
    return (0, t.jsx)(t.Fragment, {
        children: e.descriptions.map((n, e) =>
            (0, t.jsx)(
                "li",
                {
                    className: R.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: n,
                    }),
                },
                e,
            ),
        ),
    });
}
function P(n) {
    let { classificationTypeText: e, policyExplainerLink: i } = n;
    return (0, t.jsxs)(f.Anchor, {
        href: i,
        className: R.F8,
        useDefaultUnderlineStyles: !1,
        children: [
            (0, t.jsx)("div", {
                className: R.yi,
                children: (0, t.jsx)(E.ShieldIcon, { size: "md", color: p.A.colors.BORDER_FOCUS }),
            }),
            (0, t.jsx)("div", {
                className: R.wC,
                children: (0, t.jsx)(j.E, {
                    variant: "text-md/normal",
                    children: S.intl.format(S.t.zxUdpj, { classificationDescription: e }),
                }),
            }),
            (0, t.jsx)("div", {
                className: R.g_,
                children: (0, t.jsx)(g._, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function V() {
    return (0, t.jsx)(j.E, { variant: "text-md/normal", color: "text-muted", children: S.intl.string(S.t["I2H0/E"]) });
}
function Y(n) {
    return (0, t.jsx)(j.E, {
        variant: "text-md/normal",
        color: "text-muted",
        children: S.intl.format(S.t.IFxUaT, {
            letUsKnowHook: (e, i) =>
                (0, t.jsx)(
                    f.Anchor,
                    { href: n.isAppealEligible ? void 0 : n.appealLink, onClick: n.letUsKnowClick, children: e },
                    i,
                ),
        }),
    });
}
function $(n) {
    return (0, t.jsx)("div", {
        className: R.CC,
        children: n.hasBeenAppealed
            ? (0, t.jsx)(V, {})
            : (0, t.jsx)(Y, {
                  appealLink: G.d$.APPEALS_LINK,
                  letUsKnowClick: n.onLetUsKnowClick,
                  isAppealEligible: n.isAppealEligible,
              }),
    });
}
function W(n) {
    return (0, t.jsx)("div", {
        className: R.CC,
        children: (0, t.jsx)(j.E, {
            variant: "text-md/normal",
            color: "text-muted",
            className: R.IC,
            children: S.intl.format(S.t.LeAhOQ, {
                letUsKnowHook: (e, i) => (0, t.jsx)(f.Anchor, { onClick: n.onLetUsKnowClick, children: e }, i),
            }),
        }),
    });
}
function J() {
    return (0, t.jsx)("div", {
        className: R.CC,
        children: (0, t.jsx)(j.E, {
            variant: "text-md/normal",
            color: "text-strong",
            className: R.IC,
            children: S.intl.string(K.default["yV/t/V"]),
        }),
    });
}
function Z(n) {
    let { tosLink: e, communityGuidelinesLink: i } = n;
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(j.E, { variant: "eyebrow", color: "text-muted", children: S.intl.string(S.t["977iei"]) }),
            (0, t.jsx)(j.E, {
                className: R.t8,
                variant: "text-sm/normal",
                children: S.intl.format(K.default.vPOpia, { tosLink: e, communityGuidelinesLink: i }),
            }),
        ],
    });
}
function q(n) {
    let {
        tosLink: e,
        communityGuidelinesLink: i,
        classificationTypeText: l,
        policyExplainerLink: a,
        appealComponent: s,
        hidePolicyCard: r = !1,
    } = n;
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(j.E, { variant: "eyebrow", color: "text-muted", children: S.intl.string(S.t["977iei"]) }),
            (0, t.jsx)(j.E, {
                className: R.t8,
                variant: "text-sm/normal",
                children: S.intl.format(S.t["1Z/+aA"], { tosLink: e, communityGuidelinesLink: i }),
            }),
            !r && (0, t.jsx)(P, { classificationTypeText: l, policyExplainerLink: a }),
            s,
        ],
    });
}
function z() {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(M, {}),
            (0, t.jsx)(Z, { tosLink: G.d$.TOS_LINK, communityGuidelinesLink: G.d$.COMMUNITY_GUIDELINES }),
            (0, t.jsx)(J, {}),
        ],
    });
}
let X = (n) => {
    let { classificationId: e, source: i, onError: a, onClose: s } = n,
        {
            classification: r,
            classificationRequestState: c,
            isAppealEligible: d,
            isDsaEligible: u,
            violationType: p,
        } = (0, y.LJ)(e),
        h = (0, _.bG)([U.A], () => U.A.getAppealEligibility()),
        j = (0, T.K)(),
        f = null != r && null != r.flagged_content && r.flagged_content.length > 0,
        E = (0, w.v)(),
        g = !!r?.is_coppa && h.includes(I.RH.AGE_VERIFY_ELIGIBLE),
        C = !!r?.is_coppa && h.includes(I.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
        S = (0, N.M)(A.q1.AUTOMATED_UNDERAGE_APPEALS),
        K = C && S,
        M = (0, _.bG)([U.A], () => U.A.getIsManualReviewDecidedUnderage()),
        B = !!r?.is_coppa && M,
        P = {
            accountStanding: j,
            classificationId: e,
            hasFlaggedContent: f,
            isDsaEligible: u,
            source: i,
            violationType: p,
        },
        V = l.useRef(P);
    function Y() {
        (L.default.track(O.HAw.SAFETY_HUB_ACTION, {
            action: G.ZU.ClickLetUsKnow,
            account_standing: j.state,
            classification_ids: [Number(e)],
            source: i,
            is_violative_content_shown: f,
            is_dsa_eligible: u,
            violation_type: p,
        }),
            C
                ? k.A.openV2(e, s)
                : g
                  ? k.A.open(e, s)
                  : d && (v.A.increment({ name: x.K.APPEAL_INGESTION_VIEW }), D.A.open(e)));
    }
    return (l.useEffect(() => {
        V.current = P;
    }),
    l.useEffect(() => {
        let {
            accountStanding: n,
            classificationId: e,
            hasFlaggedContent: i,
            isDsaEligible: t,
            source: l,
            violationType: a,
        } = V.current;
        E &&
            L.default.track(O.HAw.SAFETY_HUB_ACTION, {
                action: G.ZU.ViewViolationDetail,
                account_standing: n.state,
                classification_ids: [Number(e)],
                source: l,
                is_violative_content_shown: i,
                is_dsa_eligible: t,
                violation_type: a,
            });
    }, [E]),
    null == r && c === I.nU.FAILED)
        ? (a(), null)
        : null == r
          ? null
          : (0, t.jsxs)("div", {
                className: R.ch,
                children: [
                    (0, t.jsx)("div", {
                        className: R.uW,
                        children: (0, t.jsx)(F, {
                            classificationTypeText: r.description,
                            guildMetadata: r?.guild_metadata,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: m()(R.rf, R.uW),
                        children: [
                            (0, t.jsx)(b.U, { flaggedContent: r.flagged_content ?? [] }),
                            B
                                ? (0, t.jsx)(z, {})
                                : (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(H, { actions: r.actions, classificationExpiration: (0, o.UI)(r) }),
                                          (0, t.jsx)(q, {
                                              classificationTypeText: r.description,
                                              tosLink: G.d$.TOS_LINK,
                                              communityGuidelinesLink: G.d$.COMMUNITY_GUIDELINES,
                                              policyExplainerLink: r.explainer_link,
                                              hidePolicyCard: K,
                                              appealComponent: K
                                                  ? (0, t.jsx)(W, { onLetUsKnowClick: Y })
                                                  : (0, t.jsx)($, {
                                                        hasBeenAppealed: null != r.appeal_status,
                                                        onLetUsKnowClick: Y,
                                                        isAppealEligible: d || g,
                                                    }),
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                ],
            });
};
var Q = i(987926);
let nn = function (n) {
    let { transitionState: e, onClose: i, classificationId: l, source: u } = n,
        m = (0, d.A)(),
        x = (0, o.W$)();
    function p() {
        (i(), x || (0, c.openUserSettings)(r.X.ACCOUNT_STANDING_CATEGORY));
    }
    return (0, t.jsxs)(a.EO, {
        className: Q.CR,
        transitionState: e,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)("div", {
                className: Q.Hc,
                children: (0, t.jsx)(a.s_, { "data-migration-pending": !0, className: Q.g8, onClick: i }),
            }),
            (0, t.jsx)(a.$m, {
                "data-migration-pending": !0,
                className: Q.jE,
                children: m
                    ? (0, t.jsx)(s.y, {})
                    : (0, t.jsx)(X, { classificationId: l, source: u, onError: p, onClose: p }),
            }),
        ],
    });
};
