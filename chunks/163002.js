e.d(n, { default: () => il });
var t = e(477900),
    l = e(582128),
    s = e(935462),
    a = e(289873),
    r = e(780964),
    c = e(766075),
    o = e(393033),
    d = e(257110),
    m = e(503698),
    u = e.n(m),
    x = e(731738),
    p = e(646514),
    h = e(534514),
    j = e(834730),
    E = e(28863),
    f = e(231483),
    g = e(320448),
    _ = e(939249),
    A = e(855986),
    N = e(171576),
    v = e(462924),
    L = e(913379),
    I = e(773669),
    k = e(129230),
    y = e(67521),
    T = e(739010),
    C = e(207913),
    U = e(335891),
    b = e(985481),
    D = e(259960),
    G = e(239093),
    S = e(792996),
    O = e(52111);
function w() {
    return (0, t.jsx)(j.E, { variant: "body-md/normal", color: "text-muted", children: S.intl.string(S.t["I2H0/E"]) });
}
function R(i) {
    return (0, t.jsx)(j.E, {
        variant: "body-md/normal",
        color: "text-muted",
        children: S.intl.format(S.t.IFxUaT, {
            letUsKnowHook: (n, e) =>
                (0, t.jsx)(
                    E.Anchor,
                    { href: i.isAppealEligible ? void 0 : i.appealLink, onClick: i.letUsKnowClick, children: n },
                    e,
                ),
        }),
    });
}
function F() {
    return (0, t.jsxs)("div", {
        className: O.Jx,
        children: [
            (0, t.jsx)(j.E, { variant: "body-md/medium", color: "text-default", children: S.intl.string(S.t.PHriyz) }),
            (0, t.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: S.intl.string(S.t.YsxY1D) }),
        ],
    });
}
function H(i) {
    return (0, t.jsx)("div", {
        className: O.OW,
        children: i.hasBeenAppealed
            ? (0, t.jsx)(w, {})
            : i.isAppealWindowExpired
              ? (0, t.jsx)(F, {})
              : (0, t.jsx)(R, {
                    appealLink: G.d$.APPEALS_LINK,
                    letUsKnowClick: i.onLetUsKnowClick,
                    isAppealEligible: i.isAppealEligible,
                }),
    });
}
var K = e(26095),
    Y = e(351876),
    M = e(652215),
    V = e(221858);
function $(i) {
    let { classificationTypeText: n, guildMetadata: e } = i,
        s = l.useMemo(() => {
            let i = { classification_type: n, classificationHook: (i, n) => (0, t.jsx)("strong", { children: i }, n) };
            return null == e
                ? S.intl.format(S.t.HpvELh, i)
                : e?.member_type === T.Z9.OWNER
                  ? S.intl.format(S.t.X1ngSd, { ...i, guildName: e?.name })
                  : S.intl.format(S.t.rmpEPD, { ...i, guildName: e?.name });
        }, [n, e]);
    return (0, t.jsx)(h.D, { variant: "heading-xl/medium", children: s });
}
function P(i) {
    let { children: n, plain: e = !1 } = i;
    return e
        ? (0, t.jsx)(j.E, { variant: "body-sm/medium", color: "text-subtle", children: n })
        : (0, t.jsx)(j.E, { variant: "body-sm/medium", color: "text-muted", children: n });
}
function B(i) {
    let { actions: n, classificationExpiration: e, plainHeader: l } = i,
        s = (0, A.bG)([I.default], () => I.default.locale);
    return 0 === n.filter((i) => i.descriptions.length > 0).length && null == e
        ? null
        : (0, t.jsxs)("div", {
              children: [
                  (0, t.jsx)(P, { plain: l, children: S.intl.string(S.t["O2nYk+"]) }),
                  (0, t.jsxs)("ul", {
                      className: O.nq,
                      children: [
                          n.map((i) => (0, t.jsx)(J, { action: i }, i.id)),
                          null != e
                              ? (0, t.jsx)(
                                    "li",
                                    {
                                        className: O.DJ,
                                        children: (0, t.jsx)(j.E, {
                                            tag: "span",
                                            variant: "heading-sm/medium",
                                            color: "text-default",
                                            children: S.intl.format(S.t.TByIjT, {
                                                expirationDate: e.toLocaleDateString(s, { dateStyle: "medium" }),
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
function W() {
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(P, { plain: !0, children: S.intl.string(S.t["O2nYk+"]) }),
            (0, t.jsx)("ul", {
                className: O.nq,
                children: (0, t.jsx)("li", {
                    className: O.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: S.intl.string(V.default.rn3Gto),
                    }),
                }),
            }),
        ],
    });
}
function J(i) {
    let { action: n } = i;
    return (0, t.jsx)(t.Fragment, {
        children: n.descriptions.map((i, n) =>
            (0, t.jsx)(
                "li",
                {
                    className: O.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: i,
                    }),
                },
                n,
            ),
        ),
    });
}
function q(i) {
    let { classificationTypeText: n, policyExplainerLink: e } = i;
    return (0, t.jsxs)(E.Anchor, {
        href: e,
        className: O.F8,
        useDefaultUnderlineStyles: !1,
        children: [
            (0, t.jsx)("div", {
                className: O.yi,
                children: (0, t.jsx)(f.ShieldIcon, { size: "md", color: p.A.colors.BORDER_FOCUS }),
            }),
            (0, t.jsx)("div", {
                className: O.wC,
                children: (0, t.jsx)(j.E, {
                    variant: "body-md/normal",
                    children: S.intl.format(S.t.zxUdpj, { classificationDescription: n }),
                }),
            }),
            (0, t.jsx)("div", {
                className: O.g_,
                children: (0, t.jsx)(g.ChevronSmallRightIcon, {
                    size: "md",
                    color: p.A.colors.INTERACTIVE_TEXT_DEFAULT,
                }),
            }),
        ],
    });
}
function z(i) {
    let { tosLink: n, communityGuidelinesLink: e, onLetUsKnowClick: l } = i;
    return (0, t.jsxs)("div", {
        className: O.vq,
        children: [
            (0, t.jsx)(P, { plain: !0, children: S.intl.string(S.t.RVEiD0) }),
            (0, t.jsxs)(_.D, {
                className: O._m,
                onClick: l,
                children: [
                    (0, t.jsx)(j.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        children: S.intl.string(S.t.YQPbuc),
                    }),
                    (0, t.jsx)(g.ChevronSmallRightIcon, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                ],
            }),
            (0, t.jsx)(j.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: O.$L,
                children: S.intl.format(S.t["1Z/+aA"], { tosLink: n, communityGuidelinesLink: e }),
            }),
        ],
    });
}
function Z(i) {
    let { tosLink: n, communityGuidelinesLink: e } = i;
    return (0, t.jsx)(j.E, {
        variant: "body-sm/normal",
        color: "text-muted",
        className: O.yC,
        children: S.intl.format(V.default.vPOpia, { tosLink: n, communityGuidelinesLink: e }),
    });
}
function X() {
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(P, { plain: !0, children: S.intl.string(S.t["977iei"]) }),
            (0, t.jsx)("ul", {
                className: O.nq,
                children: (0, t.jsx)("li", {
                    className: O.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: S.intl.string(V.default["yV/t/V"]),
                    }),
                }),
            }),
        ],
    });
}
function Q(i) {
    let {
        tosLink: n,
        communityGuidelinesLink: e,
        classificationTypeText: l,
        policyExplainerLink: s,
        appealComponent: a,
    } = i;
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(j.E, { variant: "body-sm/medium", color: "text-muted", children: S.intl.string(S.t["977iei"]) }),
            (0, t.jsx)(j.E, {
                className: O.t8,
                variant: "body-sm/normal",
                children: S.intl.format(S.t["1Z/+aA"], { tosLink: n, communityGuidelinesLink: e }),
            }),
            (0, t.jsx)(q, { classificationTypeText: l, policyExplainerLink: s }),
            a,
        ],
    });
}
function ii() {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(W, {}),
            (0, t.jsx)(X, {}),
            (0, t.jsx)(Z, { tosLink: G.d$.TOS_LINK, communityGuidelinesLink: G.d$.COMMUNITY_GUIDELINES }),
        ],
    });
}
let ie = (i) => {
    let { classificationId: n, source: e, onError: s, onClose: a } = i,
        {
            classification: r,
            classificationRequestState: c,
            isAppealEligible: d,
            isDsaEligible: m,
            violationType: p,
        } = (0, b.LJ)(n),
        h = (0, A.bG)([C.A], () => C.A.getAppealEligibility()),
        j = (0, U.K)(),
        E = null != r && null != r.flagged_content && r.flagged_content.length > 0,
        f = (0, D.v)(),
        g = !!r?.is_coppa && h.includes(T.RH.AGE_VERIFY_ELIGIBLE),
        _ = !!r?.is_coppa && h.includes(T.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
        I = (0, v.M)(N.q1.AUTOMATED_UNDERAGE_APPEALS),
        S = _ && I,
        w = (0, A.bG)([C.A], () => C.A.getIsManualReviewDecidedUnderage()),
        R = !!r?.is_coppa && w,
        F = {
            accountStanding: j,
            classificationId: n,
            hasFlaggedContent: E,
            isDsaEligible: m,
            source: e,
            violationType: p,
        },
        V = l.useRef(F);
    function P() {
        (k.default.track(M.HAw.SAFETY_HUB_ACTION, {
            action: G.ZU.ClickLetUsKnow,
            account_standing: j.state,
            classification_ids: [Number(n)],
            source: e,
            is_violative_content_shown: E,
            is_dsa_eligible: m,
            violation_type: p,
        }),
            _
                ? y.A.openV2(n, a)
                : g
                  ? y.A.open(n, a)
                  : d && (L.A.increment({ name: x.K.APPEAL_INGESTION_VIEW }), K.A.open(n)));
    }
    return (l.useEffect(() => {
        V.current = F;
    }),
    l.useEffect(() => {
        let {
            accountStanding: i,
            classificationId: n,
            hasFlaggedContent: e,
            isDsaEligible: t,
            source: l,
            violationType: s,
        } = V.current;
        f &&
            k.default.track(M.HAw.SAFETY_HUB_ACTION, {
                action: G.ZU.ViewViolationDetail,
                account_standing: i.state,
                classification_ids: [Number(n)],
                source: l,
                is_violative_content_shown: e,
                is_dsa_eligible: t,
                violation_type: s,
            });
    }, [f]),
    null == r && c === T.nU.FAILED)
        ? (s(), null)
        : null == r
          ? null
          : (0, t.jsxs)("div", {
                className: O.ch,
                children: [
                    (0, t.jsx)("div", {
                        className: O.uW,
                        children: (0, t.jsx)($, {
                            classificationTypeText: r.description,
                            guildMetadata: r?.guild_metadata,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: u()(O.rf, O.uW),
                        children: [
                            (0, t.jsx)(Y.U, { flaggedContent: r.flagged_content ?? [] }),
                            R
                                ? (0, t.jsx)(ii, {})
                                : (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(B, {
                                              actions: r.actions,
                                              classificationExpiration: (0, o.$r)(r),
                                              plainHeader: S,
                                          }),
                                          S
                                              ? (0, t.jsx)(z, {
                                                    tosLink: G.d$.TOS_LINK,
                                                    communityGuidelinesLink: G.d$.COMMUNITY_GUIDELINES,
                                                    onLetUsKnowClick: P,
                                                })
                                              : (0, t.jsx)(Q, {
                                                    classificationTypeText: r.description,
                                                    tosLink: G.d$.TOS_LINK,
                                                    communityGuidelinesLink: G.d$.COMMUNITY_GUIDELINES,
                                                    policyExplainerLink: r.explainer_link,
                                                    appealComponent: (0, t.jsx)(H, {
                                                        hasBeenAppealed: null != r.appeal_status,
                                                        isAppealWindowExpired: (0, o.lr)(n) && !g && !_,
                                                        onLetUsKnowClick: P,
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
var it = e(987926);
let il = function (i) {
    let { transitionState: n, onClose: e, classificationId: l, source: m } = i,
        u = (0, d.A)(),
        x = (0, o.W$)();
    function p() {
        (e(), x || (0, c.openUserSettings)(r.X.ACCOUNT_STANDING_CATEGORY));
    }
    return (0, t.jsxs)(s.EO, {
        className: it.CR,
        transitionState: n,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)("div", {
                className: it.Hc,
                children: (0, t.jsx)(s.s_, { "data-migration-pending": !0, className: it.g8, onClick: e }),
            }),
            (0, t.jsx)(s.$m, {
                "data-migration-pending": !0,
                className: it.jE,
                children: u
                    ? (0, t.jsx)(a.y, {})
                    : (0, t.jsx)(ie, { classificationId: l, source: m, onError: p, onClose: p }),
            }),
        ],
    });
};
