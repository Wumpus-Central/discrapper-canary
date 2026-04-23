n.d(e, { default: () => w });
var t = n(627968),
    a = n(64700),
    s = n(110259),
    l = n(935462),
    r = n(430690),
    c = n(985481),
    d = n(503698),
    o = n.n(d),
    x = n(17928),
    m = n(534514),
    g = n(834730),
    p = n(144228),
    N = n(260598),
    h = n(825484),
    j = n(821609),
    A = n(228366),
    E = n(235986),
    u = n(207913),
    _ = n(393033),
    C = n(239093),
    I = n(985018),
    S = n(633757),
    k = n(503193);
function v(i) {
    let { className: e, isDsaEligible: n = !1, onClose: s, onNext: r, onBack: d } = i,
        v = (0, c.y5)(),
        L = (0, x.bG)([u.A], () => u.A.getFreeTextAppealReason()),
        [T, b] = a.useState(""),
        [P, f] = a.useState(!1);
    a.useEffect(() => {
        b(L ?? ""), f(v === C.Iv.SOMETHING_ELSE);
    }, [L, v, n]);
    let D = C.Qv.map((i) => ({ value: i, name: (0, _.l0)(i) }));
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: E.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(g.E, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.VEcRhw),
                    }),
                    null != s && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: s }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: o()(S.j, e),
                paddingFix: !1,
                children: [
                    (0, t.jsx)(p.z, {
                        value: v,
                        options: D,
                        onChange: (i) => {
                            f(i === C.Iv.SOMETHING_ELSE),
                                i !== C.Iv.SOMETHING_ELSE &&
                                    (b(""),
                                    A.h.dispatch({
                                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                        userInput: "",
                                    })),
                                A.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal: i });
                        },
                    }),
                    n &&
                        P &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(N.f, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: I.intl.string(I.t.bQrZIN),
                                    value: T,
                                    onChange: b,
                                    autoFocus: !0,
                                }),
                                (0, t.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: I.intl.string(I.t.xfNY3L),
                                }),
                            ],
                        }),
                    (0, t.jsx)(g.E, {
                        variant: "text-sm/normal",
                        className: S.e,
                        children: I.intl.format(I.t["8k9GCW"], {}),
                    }),
                ],
            }),
            (0, t.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, t.jsxs)(h.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, t.jsx)(j.$, {
                            variant: "primary",
                            text: I.intl.string(I.t.PDTjLN),
                            onClick: () => {
                                A.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: T }),
                                    r?.();
                            },
                        }),
                        (0, t.jsx)(j.$, {
                            variant: "secondary",
                            text: I.intl.string(I.t["13/7kX"]),
                            onClick: () => {
                                A.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: T }),
                                    d?.();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
var L = n(349288),
    T = n(308645),
    b = n(652215),
    P = n(745327);
function f(i) {
    let { className: e, isDsaEligible: n, onClose: s, onNext: r, onBack: d } = i,
        o = (0, x.bG)([u.A], () => u.A.getAppealClassificationId()),
        { classification: p } = (0, c.LJ)(o ?? b.dJq),
        C = (0, _.eu)(p?.description),
        S = (0, x.bG)([u.A], () => u.A.getIsSubmitting()),
        v = (0, x.bG)([u.A], () => u.A.getAppealSignal()),
        f = (0, x.bG)([u.A], () => u.A.getFreeTextAppealReason()),
        [D, U] = a.useState(!1),
        [G, y] = a.useState(""),
        M = a.useCallback((i) => {
            A.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: i });
        }, []),
        F = a.useCallback(async () => {
            if (null !== o)
                try {
                    y(""), await T.Gf(o, v, f), r?.();
                } catch (i) {
                    y((0, _.Tk)(i.body?.code));
                }
        }, [o, v, f, r]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: E.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(g.E, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t["G2g/g5"]),
                    }),
                    null != s && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: s }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: e,
                paddingFix: !1,
                children: [
                    (0, t.jsx)("ul", {
                        className: P.qI,
                        children: [(0, _.l0)(v), f]
                            .filter((i) => i.length > 0)
                            .map((i, e) =>
                                (0, t.jsx)(
                                    "li",
                                    {
                                        className: P.Aw,
                                        children: (0, t.jsx)(g.E, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: i,
                                        }),
                                    },
                                    e,
                                ),
                            ),
                    }),
                    n &&
                        (0, t.jsx)("div", {
                            className: P.DE,
                            children: (0, t.jsx)(L.Anchor, {
                                onClick: () => U((i) => !i),
                                children: (0, t.jsx)(m.D, {
                                    variant: "heading-md/normal",
                                    color: "text-link",
                                    children: f.length > 0 ? I.intl.string(I.t.tnE3bZ) : I.intl.string(I.t.uoQFIp),
                                }),
                            }),
                        }),
                    D &&
                        n &&
                        (0, t.jsx)("div", { className: P.Kf, children: (0, t.jsx)(N.f, { value: f, onChange: M }) }),
                    (0, t.jsx)("div", {
                        className: k.kU,
                        children: (0, t.jsx)(g.E, { variant: "text-md/semibold", children: C }),
                    }),
                    (0, t.jsx)(g.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: P.PJ,
                        children: I.intl.string(I.t["d6qgY/"]),
                    }),
                ],
            }),
            (0, t.jsxs)(l.jl, {
                "data-migration-pending": !0,
                direction: E.A.Direction.VERTICAL,
                children: [
                    "" !== G &&
                        (0, t.jsx)(g.E, {
                            className: P.kc,
                            variant: "text-lg/normal",
                            color: "text-feedback-critical",
                            children: G,
                        }),
                    (0, t.jsx)("div", {
                        className: P.UD,
                        children: (0, t.jsxs)(h.e, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, t.jsx)(j.$, {
                                    variant: "secondary",
                                    text: I.intl.string(I.t["13/7kX"]),
                                    onClick: d,
                                    disabled: S,
                                }),
                                (0, t.jsx)(j.$, {
                                    variant: "critical-primary",
                                    text: I.intl.string(I.t.geKm7t),
                                    onClick: F,
                                    loading: S,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
var D = n(26095),
    U = n(954571),
    G = n(335891);
let y = () => {
    let i = (0, x.bG)([u.A], () => u.A.getAppealClassificationId()),
        e = (0, c.LJ)(i ?? b.dJq),
        n = (0, G.K)(),
        t = (0, x.bG)([u.A], () => u.A.getIsDsaEligible());
    return a.useCallback(
        (a) => {
            U.default.track(b.HAw.SAFETY_HUB_ACTION, {
                action: a,
                account_standing: n.state,
                classification_ids: null != i ? [Number(i)] : null,
                source: C.XN.AppealIngestion,
                is_dsa_eligible: t,
                violation_type: e.violationType,
            });
        },
        [n.state, i, e, t],
    );
};
var M = n(939249),
    F = n(147925),
    O = n(797982);
function R(i) {
    let { url: e, text: n, onClick: a } = i;
    return (0, t.jsx)(L.Anchor, {
        href: e,
        onClick: a,
        className: O.jH,
        children: (0, t.jsxs)(M.D, {
            className: O.Zm,
            children: [
                (0, t.jsx)(g.E, { className: O.ix, variant: "text-md/semibold", children: n }),
                (0, t.jsx)(F.A, { className: O._2, direction: F.A.Directions.RIGHT }),
            ],
        }),
    });
}
var H = n(170826);
function B(i) {
    let { className: e, onNext: n, onClose: a } = i,
        s = y();
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: E.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, t.jsx)("div", {
                        className: H.zc,
                        children: (0, t.jsx)("img", { src: "/assets/60e9812b94a3894e.png", alt: "", className: H.Kk }),
                    }),
                    (0, t.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t.QMbTSu),
                    }),
                    (0, t.jsx)(m.D, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.Qdx8AP),
                    }),
                    null != a && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: a }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: o()(H.jE, e),
                paddingFix: !1,
                children: [
                    (0, t.jsx)(m.D, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        className: H.f9,
                        children: I.intl.string(I.t["9BRc1N"]),
                    }),
                    (0, t.jsx)(R, {
                        text: I.intl.string(I.t.PxL38B),
                        url: C.d$.COMMUNITY_GUIDELINES,
                        onClick: () => s(C.ZU.ClickCommunityGuidelinesLink),
                    }),
                    (0, t.jsx)(R, {
                        text: I.intl.string(I.t.qC3XKa),
                        url: C.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => s(C.ZU.ClickWarningSystemHelpcenterLink),
                    }),
                ],
            }),
            (0, t.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, t.jsx)(j.$, { variant: "primary", text: I.intl.string(I.t.i4jeWR), onClick: n }),
            }),
        ],
    });
}
var Y = n(739010),
    V = n(607739);
function $(i) {
    let {
            classification: e,
            isDsaEligible: n = !1,
            isSpam: a = !1,
            isCoppa: s = !1,
            appealIngestionType: r,
            className: c,
            onClose: d,
            onNext: x,
        } = i,
        p = y(),
        N = e?.explainer_link ?? "",
        h = null != e && null != e.flagged_content && e.flagged_content.length > 0,
        A = (0, _.eu)(e?.description),
        u = !a && !s && (null == r || r === Y.Il.IN_APP),
        S = null != e && ((0, _._g)(e) || h);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: E.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(g.E, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.URt7VI),
                    }),
                    null != d && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: d }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: o()(k.jE, !S && k.bQ, c),
                paddingFix: !1,
                children: [
                    S && (0, t.jsx)(V.U, { flaggedContent: e.flagged_content ?? [] }),
                    (0, t.jsx)(g.E, {
                        className: k.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: I.intl.string(I.t.xsdcxh),
                    }),
                    (0, t.jsx)("div", {
                        className: k.kU,
                        children: (0, t.jsx)(g.E, { variant: "text-md/semibold", children: A }),
                    }),
                    s &&
                        (0, t.jsx)(R, {
                            url: C.d$.AGE_VERIFICATION_LINK,
                            text: I.intl.string(I.t["gJs+kf"]),
                            onClick: () => p(C.ZU.ClickAgeVerificationLink),
                        }),
                    a &&
                        !s &&
                        (0, t.jsx)(R, {
                            url: C.d$.SPAM_LINK,
                            text: I.intl.string(I.t["PaNS+I"]),
                            onClick: () => p(C.ZU.ClickSpamWebformLink),
                        }),
                    !s &&
                        (0, t.jsx)(R, {
                            text: I.intl.string(I.t["Vtyn/7"]),
                            url: N,
                            onClick: () => p(C.ZU.ClickLearnMoreLink),
                        }),
                    u &&
                        n &&
                        (0, t.jsx)(g.E, {
                            className: k.C2,
                            variant: "text-xs/normal",
                            children: I.intl.format(I.t.WMUgCX, {}),
                        }),
                ],
            }),
            u &&
                (0, t.jsx)(l.jl, {
                    "data-migration-pending": !0,
                    children: (0, t.jsx)(j.$, { variant: "primary", text: I.intl.string(I.t.PDTjLN), onClick: x }),
                }),
        ],
    });
}
var q = n(732217);
function w(i) {
    let { classificationId: e, transitionState: n, initialSlide: d = C.yN.SPEED_BUMP, onClose: o } = i,
        [x, m] = a.useState(d),
        { classification: g, isDsaEligible: p } = (0, c.LJ)(e ?? b.dJq),
        N = g?.is_spam || !1,
        h = g?.is_coppa || !1,
        j = g?.appeal_ingestion_type;
    a.useEffect(() => {
        m(d);
    }, [m, d]);
    let A = a.useCallback(() => {
            D.A.close(), o();
        }, [o]),
        E = a.useCallback(() => {
            let i = C.A8[x]?.next;
            null != i ? m(i) : A();
        }, [x, A]),
        u = a.useCallback(() => {
            let i = C.A8[x]?.prev;
            null != i ? m(i) : A();
        }, [x, A]);
    return (0, t.jsx)(l.EO, {
        "data-migration-pending": !0,
        transitionState: n,
        disableTrack: !0,
        size: l.rI.DYNAMIC,
        parentComponent: "AppealIngestionModal",
        children: (0, t.jsx)("div", {
            className: q.k,
            children: (0, t.jsxs)(r.t, {
                activeSlide: x,
                width: 500,
                children: [
                    (0, t.jsx)(r.q, {
                        id: C.yN.SPEED_BUMP,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: C.nY,
                        children: (0, t.jsx)($, {
                            classification: g,
                            onClose: A,
                            onNext: E,
                            isSpam: N,
                            isCoppa: h,
                            appealIngestionType: j,
                            isDsaEligible: p,
                        }),
                    }),
                    (0, t.jsx)(r.q, {
                        id: C.yN.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: C.nY,
                        children: (0, t.jsx)(v, { isDsaEligible: p, onClose: A, onNext: E, onBack: u }),
                    }),
                    (0, t.jsx)(r.q, {
                        id: C.yN.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: C.nY,
                        children: (0, t.jsx)(f, { isDsaEligible: p, onClose: A, onNext: E, onBack: u }),
                    }),
                    (0, t.jsx)(r.q, {
                        id: C.yN.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: C.nY,
                        children: (0, t.jsx)(B, { onNext: E }),
                    }),
                ],
            }),
        }),
    });
}
