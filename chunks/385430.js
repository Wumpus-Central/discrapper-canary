e.d(i, { default: () => ne });
var t = e(477900),
    l = e(582128),
    a = e(935462),
    s = e(289873),
    r = e(780964),
    c = e(766075),
    o = e(393033),
    d = e(257110),
    u = e(503698),
    m = e.n(u),
    x = e(731738),
    p = e(661531),
    h = e(297264),
    j = e(834730),
    E = e(28863),
    f = e(231483),
    _ = e(320448),
    g = e(939249),
    A = e(17928),
    N = e(847599),
    L = e(462924),
    v = e(807393),
    I = e(773669),
    k = e(174459),
    T = e(67521),
    C = e(739010),
    U = e(207913),
    y = e(335891),
    D = e(985481),
    G = e(259960),
    O = e(26095),
    S = e(607739),
    b = e(239093),
    w = e(652215),
    R = e(375708),
    F = e(78637),
    K = e(52111);
function H(n) {
    let { classificationTypeText: i, guildMetadata: e } = n,
        a = l.useMemo(() => {
            let n = { classification_type: i, classificationHook: (n, i) => (0, t.jsx)("strong", { children: n }, i) };
            return null == e
                ? R.intl.format(R.t.HpvELh, n)
                : e?.member_type === C.Z9.OWNER
                  ? R.intl.format(R.t.X1ngSd, { ...n, guildName: e?.name })
                  : R.intl.format(R.t.rmpEPD, { ...n, guildName: e?.name });
        }, [i, e]);
    return (0, t.jsx)(h.D, { variant: "heading-xl/normal", children: a });
}
function M(n) {
    let { children: i, plain: e = !1 } = n;
    return e
        ? (0, t.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", children: i })
        : (0, t.jsx)(j.E, { variant: "eyebrow", color: "text-muted", children: i });
}
function V(n) {
    let { actions: i, classificationExpiration: e, plainHeader: l } = n,
        a = (0, A.bG)([I.default], () => I.default.locale);
    return 0 === i.filter((n) => n.descriptions.length > 0).length && null == e
        ? null
        : (0, t.jsxs)("div", {
              children: [
                  (0, t.jsx)(M, { plain: l, children: R.intl.string(R.t["O2nYk+"]) }),
                  (0, t.jsxs)("ul", {
                      className: K.nq,
                      children: [
                          i.map((n) => (0, t.jsx)($, { action: n }, n.id)),
                          null != e
                              ? (0, t.jsx)(
                                    "li",
                                    {
                                        className: K.DJ,
                                        children: (0, t.jsx)(j.E, {
                                            tag: "span",
                                            variant: "heading-md/normal",
                                            color: "text-default",
                                            children: R.intl.format(R.t.TByIjT, {
                                                expirationDate: e.toLocaleDateString(a, { dateStyle: "medium" }),
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
function Y() {
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(M, { plain: !0, children: R.intl.string(R.t["O2nYk+"]) }),
            (0, t.jsx)("ul", {
                className: K.nq,
                children: (0, t.jsx)("li", {
                    className: K.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: R.intl.string(F.default.rn3Gto),
                    }),
                }),
            }),
        ],
    });
}
function $(n) {
    let { action: i } = n;
    return (0, t.jsx)(t.Fragment, {
        children: i.descriptions.map((n, i) =>
            (0, t.jsx)(
                "li",
                {
                    className: K.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: n,
                    }),
                },
                i,
            ),
        ),
    });
}
function B(n) {
    let { classificationTypeText: i, policyExplainerLink: e } = n;
    return (0, t.jsxs)(E.Anchor, {
        href: e,
        className: K.F8,
        useDefaultUnderlineStyles: !1,
        children: [
            (0, t.jsx)("div", {
                className: K.yi,
                children: (0, t.jsx)(f.ShieldIcon, { size: "md", color: p.A.colors.BORDER_FOCUS }),
            }),
            (0, t.jsx)("div", {
                className: K.wC,
                children: (0, t.jsx)(j.E, {
                    variant: "text-md/normal",
                    children: R.intl.format(R.t.zxUdpj, { classificationDescription: i }),
                }),
            }),
            (0, t.jsx)("div", {
                className: K.g_,
                children: (0, t.jsx)(_._, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function P() {
    return (0, t.jsx)(j.E, { variant: "text-md/normal", color: "text-muted", children: R.intl.string(R.t["I2H0/E"]) });
}
function q(n) {
    return (0, t.jsx)(j.E, {
        variant: "text-md/normal",
        color: "text-muted",
        children: R.intl.format(R.t.IFxUaT, {
            letUsKnowHook: (i, e) =>
                (0, t.jsx)(
                    E.Anchor,
                    { href: n.isAppealEligible ? void 0 : n.appealLink, onClick: n.letUsKnowClick, children: i },
                    e,
                ),
        }),
    });
}
function J(n) {
    return (0, t.jsx)("div", {
        className: K.CC,
        children: n.hasBeenAppealed
            ? (0, t.jsx)(P, {})
            : (0, t.jsx)(q, {
                  appealLink: b.d$.APPEALS_LINK,
                  letUsKnowClick: n.onLetUsKnowClick,
                  isAppealEligible: n.isAppealEligible,
              }),
    });
}
function W(n) {
    let { tosLink: i, communityGuidelinesLink: e, onLetUsKnowClick: l } = n;
    return (0, t.jsxs)("div", {
        className: K.vq,
        children: [
            (0, t.jsx)(M, { plain: !0, children: R.intl.string(R.t.RVEiD0) }),
            (0, t.jsxs)(g.D, {
                className: K._m,
                onClick: l,
                children: [
                    (0, t.jsx)(j.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: R.intl.string(R.t.YQPbuc),
                    }),
                    (0, t.jsx)(_._, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                ],
            }),
            (0, t.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: K.$L,
                children: R.intl.format(R.t["1Z/+aA"], { tosLink: i, communityGuidelinesLink: e }),
            }),
        ],
    });
}
function Z(n) {
    let { tosLink: i, communityGuidelinesLink: e } = n;
    return (0, t.jsx)(j.E, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: K.yC,
        children: R.intl.format(F.default.vPOpia, { tosLink: i, communityGuidelinesLink: e }),
    });
}
function z() {
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(M, { plain: !0, children: R.intl.string(R.t["977iei"]) }),
            (0, t.jsx)("ul", {
                className: K.nq,
                children: (0, t.jsx)("li", {
                    className: K.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: R.intl.string(F.default["yV/t/V"]),
                    }),
                }),
            }),
        ],
    });
}
function X(n) {
    let {
        tosLink: i,
        communityGuidelinesLink: e,
        classificationTypeText: l,
        policyExplainerLink: a,
        appealComponent: s,
    } = n;
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(j.E, { variant: "eyebrow", color: "text-muted", children: R.intl.string(R.t["977iei"]) }),
            (0, t.jsx)(j.E, {
                className: K.t8,
                variant: "text-sm/normal",
                children: R.intl.format(R.t["1Z/+aA"], { tosLink: i, communityGuidelinesLink: e }),
            }),
            (0, t.jsx)(B, { classificationTypeText: l, policyExplainerLink: a }),
            s,
        ],
    });
}
function Q() {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(Y, {}),
            (0, t.jsx)(z, {}),
            (0, t.jsx)(Z, { tosLink: b.d$.TOS_LINK, communityGuidelinesLink: b.d$.COMMUNITY_GUIDELINES }),
        ],
    });
}
let nn = (n) => {
    let { classificationId: i, source: e, onError: a, onClose: s } = n,
        {
            classification: r,
            classificationRequestState: c,
            isAppealEligible: d,
            isDsaEligible: u,
            violationType: p,
        } = (0, D.LJ)(i),
        h = (0, A.bG)([U.A], () => U.A.getAppealEligibility()),
        j = (0, y.K)(),
        E = null != r && null != r.flagged_content && r.flagged_content.length > 0,
        f = (0, G.v)(),
        _ = !!r?.is_coppa && h.includes(C.RH.AGE_VERIFY_ELIGIBLE),
        g = !!r?.is_coppa && h.includes(C.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
        I = (0, L.M)(N.q1.AUTOMATED_UNDERAGE_APPEALS),
        R = g && I,
        F = (0, A.bG)([U.A], () => U.A.getIsManualReviewDecidedUnderage()),
        M = !!r?.is_coppa && F,
        Y = {
            accountStanding: j,
            classificationId: i,
            hasFlaggedContent: E,
            isDsaEligible: u,
            source: e,
            violationType: p,
        },
        $ = l.useRef(Y);
    function B() {
        (k.default.track(w.HAw.SAFETY_HUB_ACTION, {
            action: b.ZU.ClickLetUsKnow,
            account_standing: j.state,
            classification_ids: [Number(i)],
            source: e,
            is_violative_content_shown: E,
            is_dsa_eligible: u,
            violation_type: p,
        }),
            g
                ? T.A.openV2(i, s)
                : _
                  ? T.A.open(i, s)
                  : d && (v.A.increment({ name: x.K.APPEAL_INGESTION_VIEW }), O.A.open(i)));
    }
    return (l.useEffect(() => {
        $.current = Y;
    }),
    l.useEffect(() => {
        let {
            accountStanding: n,
            classificationId: i,
            hasFlaggedContent: e,
            isDsaEligible: t,
            source: l,
            violationType: a,
        } = $.current;
        f &&
            k.default.track(w.HAw.SAFETY_HUB_ACTION, {
                action: b.ZU.ViewViolationDetail,
                account_standing: n.state,
                classification_ids: [Number(i)],
                source: l,
                is_violative_content_shown: e,
                is_dsa_eligible: t,
                violation_type: a,
            });
    }, [f]),
    null == r && c === C.nU.FAILED)
        ? (a(), null)
        : null == r
          ? null
          : (0, t.jsxs)("div", {
                className: K.ch,
                children: [
                    (0, t.jsx)("div", {
                        className: K.uW,
                        children: (0, t.jsx)(H, {
                            classificationTypeText: r.description,
                            guildMetadata: r?.guild_metadata,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: m()(K.rf, K.uW),
                        children: [
                            (0, t.jsx)(S.U, { flaggedContent: r.flagged_content ?? [] }),
                            M
                                ? (0, t.jsx)(Q, {})
                                : (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(V, {
                                              actions: r.actions,
                                              classificationExpiration: (0, o.UI)(r),
                                              plainHeader: R,
                                          }),
                                          R
                                              ? (0, t.jsx)(W, {
                                                    tosLink: b.d$.TOS_LINK,
                                                    communityGuidelinesLink: b.d$.COMMUNITY_GUIDELINES,
                                                    onLetUsKnowClick: B,
                                                })
                                              : (0, t.jsx)(X, {
                                                    classificationTypeText: r.description,
                                                    tosLink: b.d$.TOS_LINK,
                                                    communityGuidelinesLink: b.d$.COMMUNITY_GUIDELINES,
                                                    policyExplainerLink: r.explainer_link,
                                                    appealComponent: (0, t.jsx)(J, {
                                                        hasBeenAppealed: null != r.appeal_status,
                                                        onLetUsKnowClick: B,
                                                        isAppealEligible: d || _,
                                                    }),
                                                }),
                                      ],
                                  }),
                        ],
                    }),
                ],
            });
};
var ni = e(987926);
let ne = function (n) {
    let { transitionState: i, onClose: e, classificationId: l, source: u } = n,
        m = (0, d.A)(),
        x = (0, o.W$)();
    function p() {
        (e(), x || (0, c.openUserSettings)(r.X.ACCOUNT_STANDING_CATEGORY));
    }
    return (0, t.jsxs)(a.EO, {
        className: ni.CR,
        transitionState: i,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)("div", {
                className: ni.Hc,
                children: (0, t.jsx)(a.s_, { "data-migration-pending": !0, className: ni.g8, onClick: e }),
            }),
            (0, t.jsx)(a.$m, {
                "data-migration-pending": !0,
                className: ni.jE,
                children: m
                    ? (0, t.jsx)(s.y, {})
                    : (0, t.jsx)(nn, { classificationId: l, source: u, onError: p, onClose: p }),
            }),
        ],
    });
};
