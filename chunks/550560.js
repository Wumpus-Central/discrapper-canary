t.d(e, { default: () => w });
var n = t(477900),
    a = t(582128),
    s = t(562708),
    l = t(935462),
    r = t(430690),
    c = t(985481),
    o = t(503698),
    d = t.n(o),
    x = t(17928),
    m = t(297264),
    g = t(834730),
    p = t(144228),
    N = t(103557),
    h = t(825484),
    j = t(821609),
    A = t(228366),
    u = t(235986),
    E = t(207913),
    _ = t(393033),
    C = t(239093),
    I = t(375708),
    S = t(502616),
    k = t(936986);
function v(i) {
    let { className: e, isDsaEligible: t = !1, onClose: s, onNext: r, onBack: o } = i,
        v = (0, c.y5)(),
        L = (0, x.bG)([E.A], () => E.A.getFreeTextAppealReason()),
        [b, T] = a.useState(""),
        [f, P] = a.useState(!1);
    a.useEffect(() => {
        T(L ?? ""), P(v === C.Iv.SOMETHING_ELSE);
    }, [L, v, t]);
    let G = C.Qv.map((i) => ({ value: i, name: (0, _.l0)(i) }));
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: u.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, n.jsx)(g.E, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.VEcRhw),
                    }),
                    null != s && (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: s }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: d()(S.j, e),
                scrollbarGutter: !1,
                children: [
                    (0, n.jsx)(p.z, {
                        value: v,
                        options: G,
                        onChange: (i) => {
                            P(i === C.Iv.SOMETHING_ELSE),
                                i !== C.Iv.SOMETHING_ELSE &&
                                    (T(""),
                                    A.h.dispatch({
                                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                        userInput: "",
                                    })),
                                A.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal: i });
                        },
                    }),
                    t &&
                        f &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(N.f, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: I.intl.string(I.t.bQrZIN),
                                    value: b,
                                    onChange: T,
                                    autoFocus: !0,
                                }),
                                (0, n.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: I.intl.string(I.t.xfNY3L),
                                }),
                            ],
                        }),
                    (0, n.jsx)(g.E, {
                        variant: "text-sm/normal",
                        className: S.e,
                        children: I.intl.format(I.t["8k9GCW"], {}),
                    }),
                ],
            }),
            (0, n.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, n.jsxs)(h.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, n.jsx)(j.$, {
                            variant: "primary",
                            text: I.intl.string(I.t.PDTjLN),
                            onClick: function () {
                                A.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: b }),
                                    r?.();
                            },
                        }),
                        (0, n.jsx)(j.$, {
                            variant: "secondary",
                            text: I.intl.string(I.t["13/7kX"]),
                            onClick: function () {
                                A.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: b }),
                                    o?.();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
var L = t(349288),
    b = t(308645),
    T = t(652215),
    f = t(949902);
function P(i) {
    let { className: e, isDsaEligible: t, onClose: s, onNext: r, onBack: o } = i,
        d = (0, x.bG)([E.A], () => E.A.getAppealClassificationId()),
        { classification: p } = (0, c.LJ)(d ?? T.dJq),
        C = (0, _.eu)(p?.description),
        S = (0, x.bG)([E.A], () => E.A.getIsSubmitting()),
        v = (0, x.bG)([E.A], () => E.A.getAppealSignal()),
        P = (0, x.bG)([E.A], () => E.A.getFreeTextAppealReason()),
        [G, D] = a.useState(!1),
        [U, y] = a.useState(""),
        M = a.useCallback((i) => {
            A.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: i });
        }, []),
        O = a.useCallback(async () => {
            if (null !== d)
                try {
                    y(""), await b.Gf(d, v, P), r?.();
                } catch (i) {
                    y((0, _.Tk)(i.body?.code));
                }
        }, [d, v, P, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: u.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, n.jsx)(g.E, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t["G2g/g5"]),
                    }),
                    null != s && (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: s }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: e,
                scrollbarGutter: !1,
                children: [
                    (0, n.jsx)("ul", {
                        className: f.qI,
                        children: [(0, _.l0)(v), P]
                            .filter((i) => i.length > 0)
                            .map((i, e) =>
                                (0, n.jsx)(
                                    "li",
                                    {
                                        className: f.Aw,
                                        children: (0, n.jsx)(g.E, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: i,
                                        }),
                                    },
                                    e,
                                ),
                            ),
                    }),
                    t &&
                        (0, n.jsx)("div", {
                            className: f.DE,
                            children: (0, n.jsx)(L.Anchor, {
                                onClick: () => D((i) => !i),
                                children: (0, n.jsx)(m.D, {
                                    variant: "heading-md/normal",
                                    color: "text-link",
                                    children: P.length > 0 ? I.intl.string(I.t.tnE3bZ) : I.intl.string(I.t.uoQFIp),
                                }),
                            }),
                        }),
                    G &&
                        t &&
                        (0, n.jsx)("div", { className: f.Kf, children: (0, n.jsx)(N.f, { value: P, onChange: M }) }),
                    (0, n.jsx)("div", {
                        className: k.kU,
                        children: (0, n.jsx)(g.E, { variant: "text-md/semibold", children: C }),
                    }),
                    (0, n.jsx)(g.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: f.PJ,
                        children: I.intl.string(I.t["d6qgY/"]),
                    }),
                ],
            }),
            (0, n.jsxs)(l.jl, {
                "data-migration-pending": !0,
                direction: u.A.Direction.VERTICAL,
                children: [
                    "" !== U &&
                        (0, n.jsx)(g.E, {
                            className: f.kc,
                            variant: "text-lg/normal",
                            color: "text-feedback-critical",
                            children: U,
                        }),
                    (0, n.jsx)("div", {
                        className: f.UD,
                        children: (0, n.jsxs)(h.e, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, n.jsx)(j.$, {
                                    variant: "secondary",
                                    text: I.intl.string(I.t["13/7kX"]),
                                    onClick: o,
                                    disabled: S,
                                }),
                                (0, n.jsx)(j.$, {
                                    variant: "critical-primary",
                                    text: I.intl.string(I.t.geKm7t),
                                    onClick: O,
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
var G = t(26095),
    D = t(174459),
    U = t(335891);
function y() {
    let i = (0, x.bG)([E.A], () => E.A.getAppealClassificationId()),
        e = (0, c.LJ)(i ?? T.dJq),
        t = (0, U.K)(),
        n = (0, x.bG)([E.A], () => E.A.getIsDsaEligible());
    return a.useCallback(
        (a) => {
            D.default.track(T.HAw.SAFETY_HUB_ACTION, {
                action: a,
                account_standing: t.state,
                classification_ids: null != i ? [Number(i)] : null,
                source: C.XN.AppealIngestion,
                is_dsa_eligible: n,
                violation_type: e.violationType,
            });
        },
        [t.state, i, e, n],
    );
}
var M = t(939249),
    O = t(147925),
    H = t(169535);
function R(i) {
    let { url: e, text: t, onClick: a } = i;
    return (0, n.jsx)(L.Anchor, {
        href: e,
        onClick: a,
        className: H.jH,
        children: (0, n.jsxs)(M.D, {
            className: H.Zm,
            children: [
                (0, n.jsx)(g.E, { className: H.ix, variant: "text-md/semibold", children: t }),
                (0, n.jsx)(O.A, { className: H._2, direction: O.A.Directions.RIGHT }),
            ],
        }),
    });
}
var F = t(399839);
function B(i) {
    let { className: e, onNext: t, onClose: a } = i,
        s = y();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: u.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, n.jsx)("div", {
                        className: F.zc,
                        children: (0, n.jsx)("img", { src: "/assets/60e9812b94a3894e.png", alt: "", className: F.Kk }),
                    }),
                    (0, n.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t.QMbTSu),
                    }),
                    (0, n.jsx)(m.D, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.Qdx8AP),
                    }),
                    null != a && (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: a }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: d()(F.jE, e),
                scrollbarGutter: !1,
                children: [
                    (0, n.jsx)(m.D, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        className: F.f9,
                        children: I.intl.string(I.t["9BRc1N"]),
                    }),
                    (0, n.jsx)(R, {
                        text: I.intl.string(I.t.PxL38B),
                        url: C.d$.COMMUNITY_GUIDELINES,
                        onClick: () => s(C.ZU.ClickCommunityGuidelinesLink),
                    }),
                    (0, n.jsx)(R, {
                        text: I.intl.string(I.t.qC3XKa),
                        url: C.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => s(C.ZU.ClickWarningSystemHelpcenterLink),
                    }),
                ],
            }),
            (0, n.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, n.jsx)(j.$, { variant: "primary", text: I.intl.string(I.t.i4jeWR), onClick: t }),
            }),
        ],
    });
}
var Y = t(739010),
    $ = t(607739);
function V(i) {
    let {
            classification: e,
            isDsaEligible: t = !1,
            isSpam: a = !1,
            isCoppa: s = !1,
            isDeveloperClassification: r = !1,
            appealIngestionType: c,
            className: o,
            onClose: x,
            onNext: p,
        } = i,
        N = y(),
        h = e?.explainer_link ?? "",
        A = null != e && null != e.flagged_content && e.flagged_content.length > 0,
        E = (0, _.eu)(e?.description),
        S = !a && !s && !r && (null == c || c === Y.Il.IN_APP),
        v = null != e && ((0, _._g)(e) || A);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: u.A.Direction.VERTICAL,
                className: k.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(m.D, {
                        className: k.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, n.jsx)(g.E, {
                        className: k.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.URt7VI),
                    }),
                    null != x && (0, n.jsx)(l.s_, { "data-migration-pending": !0, className: k.b, onClick: x }),
                ],
            }),
            (0, n.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: d()(k.jE, !v && k.bQ, o),
                scrollbarGutter: !1,
                children: [
                    v && (0, n.jsx)($.U, { flaggedContent: e.flagged_content ?? [] }),
                    (0, n.jsx)(g.E, {
                        className: k.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: I.intl.string(I.t.xsdcxh),
                    }),
                    (0, n.jsx)("div", {
                        className: k.kU,
                        children: (0, n.jsx)(g.E, { variant: "text-md/semibold", children: E }),
                    }),
                    s &&
                        (0, n.jsx)(R, {
                            url: C.d$.AGE_VERIFICATION_LINK,
                            text: I.intl.string(I.t["gJs+kf"]),
                            onClick: () => N(C.ZU.ClickAgeVerificationLink),
                        }),
                    a &&
                        !s &&
                        (0, n.jsx)(R, {
                            url: C.d$.SPAM_LINK,
                            text: I.intl.string(I.t["PaNS+I"]),
                            onClick: () => N(C.ZU.ClickSpamWebformLink),
                        }),
                    r &&
                        (0, n.jsx)(R, {
                            url: C.d$.APP_APPEAL_LINK,
                            text: I.intl.string(I.t.n9cZTH),
                            onClick: () => N(C.ZU.ClickAppAppealLink),
                        }),
                    !s &&
                        (0, n.jsx)(R, {
                            text: I.intl.string(I.t["Vtyn/7"]),
                            url: h,
                            onClick: () => N(C.ZU.ClickLearnMoreLink),
                        }),
                    S &&
                        t &&
                        (0, n.jsx)(g.E, {
                            className: k.C2,
                            variant: "text-xs/normal",
                            children: I.intl.format(I.t.WMUgCX, {}),
                        }),
                ],
            }),
            S &&
                (0, n.jsx)(l.jl, {
                    "data-migration-pending": !0,
                    children: (0, n.jsx)(j.$, { variant: "primary", text: I.intl.string(I.t.PDTjLN), onClick: p }),
                }),
        ],
    });
}
var q = t(543870);
function w(i) {
    let { classificationId: e, transitionState: t, initialSlide: o = C.yN.SPEED_BUMP, onClose: d } = i,
        [x, m] = a.useState(o),
        { classification: g, isDsaEligible: p } = (0, c.LJ)(e ?? T.dJq),
        N = g?.is_spam || !1,
        h = g?.is_coppa || !1,
        j = g?.is_developer_classification || !1,
        A = g?.appeal_ingestion_type;
    a.useEffect(() => {
        m(o);
    }, [m, o]);
    let u = a.useCallback(() => {
            G.A.close(), d();
        }, [d]),
        E = a.useCallback(() => {
            let i = C.A8[x]?.next;
            null != i ? m(i) : u();
        }, [x, u]),
        _ = a.useCallback(() => {
            let i = C.A8[x]?.prev;
            null != i ? m(i) : u();
        }, [x, u]);
    return (0, n.jsx)(l.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        disableTrack: !0,
        size: l.rI.DYNAMIC,
        parentComponent: "AppealIngestionModal",
        children: (0, n.jsx)("div", {
            className: q.k,
            children: (0, n.jsxs)(r.t, {
                activeSlide: x,
                width: 500,
                children: [
                    (0, n.jsx)(r.q, {
                        id: C.yN.SPEED_BUMP,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(V, {
                            classification: g,
                            onClose: u,
                            onNext: E,
                            isSpam: N,
                            isCoppa: h,
                            isDeveloperClassification: j,
                            appealIngestionType: A,
                            isDsaEligible: p,
                        }),
                    }),
                    (0, n.jsx)(r.q, {
                        id: C.yN.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(v, { isDsaEligible: p, onClose: u, onNext: E, onBack: _ }),
                    }),
                    (0, n.jsx)(r.q, {
                        id: C.yN.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(P, { isDsaEligible: p, onClose: u, onNext: E, onBack: _ }),
                    }),
                    (0, n.jsx)(r.q, {
                        id: C.yN.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: C.nY,
                        children: (0, n.jsx)(B, { onNext: E }),
                    }),
                ],
            }),
        }),
    });
}
