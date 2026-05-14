s.r(t), s.d(t, { default: () => le }), s(323874), s(14289), s(35956);
var l,
    n = s(627968),
    r = s(64700),
    a = s(503698),
    i = s.n(a),
    o = s(873263),
    c = s(835245),
    u = s(562708),
    d = s(17928),
    m = s(554146),
    h = s(577473),
    x = s(825484),
    E = s(821609),
    g = s(509434),
    f = s(534514),
    j = s(834730),
    v = s(123292),
    p = s(331322),
    _ = s(892547),
    N = s(944791),
    C = s(775602),
    S = s(793574),
    b = s(139286),
    A = s(197111),
    T = s(10088),
    O = s(859040),
    R = s(726249),
    I = s(607470),
    L = s(826673),
    y = s(840251),
    Q = s(688151);
let H = new y.E([], Q.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var M = s(711111),
    U = s(701508),
    F = s(979590),
    D = s(749638),
    w = s(783531),
    P = s(334465),
    k = s(318346),
    q = s(371446),
    B = s(70926),
    V = s(531685),
    G = s(174459),
    W = s(676279),
    z = s(975571),
    $ = s(240248),
    K = s(507107),
    Y = s(631001),
    J = s(87549),
    Z = s(192444),
    X = s(31587),
    ee = s(590202);
s(321073);
var et = s(228366),
    es = s(340124),
    el = s(859703);
s(667532);
var en = s(783878),
    er = s(408278),
    ea = s(663417),
    ei = s(922016),
    eo = s(624479),
    ec = s(289873),
    eu = s(416052),
    ed = s(417098),
    em = s(375708);
let eh = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, n.jsx)(ed.$T, {
        color: ed.Hv.DANGER,
        children: (0, n.jsx)("div", { children: null != s ? s : em.intl.string(em.t.ZErSg5) }),
    });
};
var ex = s(661531),
    eE = s(602853),
    eg = s(817281),
    ef = s(688810),
    ej = s(487245),
    ev = s(363195),
    ep = s(652215),
    e_ = s(398876);
let eN = function () {
    let { analyticsLocations: e } = (0, ef.Ay)(),
        t = (0, d.bG)([ev.A], () => ev.A.theme),
        s = r.useRef(null);
    r.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let l = (0, eE.r)(ex.A.colors.BACKGROUND_BASE_LOW, ep.NJ8.LIGHT),
        a = (0, eE.r)(ex.A.colors.BACKGROUND_BASE_LOW, ep.NJ8.DARKER),
        i = (0, eE.r)(ex.A.colors.BACKGROUND_BASE_LOW, ep.NJ8.MIDNIGHT),
        o = r.useMemo(
            () => [
                { theme: ep.NJ8.LIGHT, label: em.t.K2sFfo, color: l.hex() },
                { theme: ep.NJ8.DARKER, label: em.t.b8Cei3, color: a.hex() },
                { theme: ep.NJ8.MIDNIGHT, label: em.t.Do4ZJx, color: i.hex() },
            ],
            [l, a, i],
        ),
        c = r.useCallback(
            (t) => {
                (0, ej.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, eg.u_)({ theme: t });
            },
            [e],
        ),
        u = r.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, n.jsx)("div", {
        className: e_.N,
        children: (0, n.jsxs)("div", {
            className: e_.t7,
            children: [
                o.map((e) =>
                    (0, n.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: e_.Du,
                            onClick: () => c(e.theme),
                            "aria-label": em.intl.string(e.label),
                            children: [
                                (0, n.jsx)("div", {
                                    className: `${e_.WT} ${t === e.theme ? e_.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, n.jsx)("span", { className: e_.i, children: em.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, n.jsx)(er.K, {
                    onClick: u,
                    "aria-label": em.intl.string(em.t.yBZMsQ),
                    icon: ea.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eC = s(818348),
    eS = s(60857);
let eb = function (e) {
    let { questId: t, setQuestId: s, quest: l, refreshQuest: a } = e,
        [i, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        m = r.useRef(null),
        h = (0, X.pT)(),
        g = (0, d.bG)([el.A], () => (null != t ? el.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, d.bG)([el.A], () => null != t && el.A.isFetchingQuestPreview(t), [t]),
        j = r.useMemo(() => {
            let e = h.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [h, t]),
        v = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, es.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        p = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, es.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, es.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        N = r.useCallback(
            (e) => {
                (0, $.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, n.jsxs)("div", {
        className: eS.Fr,
        children: [
            (0, n.jsx)("div", {
                children: (0, n.jsx)("div", {
                    className: eS.Br,
                    children: (0, n.jsxs)("div", {
                        className: eS.bo,
                        children: [
                            (0, n.jsx)(eN, {}),
                            (0, n.jsxs)("div", {
                                className: eS.b8,
                                children: [
                                    (0, n.jsx)(
                                        en.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: N,
                                            placeholder: em.intl.string(em.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, $.uJ)(t?.trim())) return e;
                                                let s = e.filter(
                                                    (e) =>
                                                        e.label.toLowerCase().includes(t.toLowerCase()) ||
                                                        e.value.toLowerCase().includes(t.toLowerCase()),
                                                );
                                                return 0 === s.length && "" !== t.trim()
                                                    ? [{ label: t.trim(), value: t.trim() }]
                                                    : s;
                                            },
                                        },
                                        `${t}-${l?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, n.jsx)(er.K, {
                                        onClick: a,
                                        "aria-label": em.intl.string(em.t.wzzjk9),
                                        icon: ea.f,
                                        loading: f,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != l &&
                (0, n.jsx)("div", {
                    className: eS.in,
                    children: (0, n.jsxs)(x.e, {
                        className: eS.xv,
                        children: [
                            (0, n.jsx)(E.$, {
                                onClick: v,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: em.intl.string(em.t.jQEfRT),
                            }),
                            (0, n.jsx)(E.$, {
                                onClick: p,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: em.intl.string(em.t.taqkwK),
                            }),
                            (0, n.jsx)(E.$, {
                                onClick: _,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: em.intl.string(em.t.cKSLr4),
                            }),
                            (0, n.jsx)(ei.Y, {
                                targetElementRef: m,
                                shouldShow: c,
                                onRequestClose: () => u(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, n.jsx)("div", {
                                        className: eS.PP,
                                        children: (0, n.jsx)("div", {
                                            className: eS.sH,
                                            children: (0, n.jsx)(eu.A, {
                                                value: eC.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: em.intl.string(em.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, n.jsx)(er.K, {
                                        buttonRef: m,
                                        onClick: () => u(!c),
                                        "aria-label": em.intl.string(em.t.rNGQfD),
                                        icon: eo.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != g ? (0, n.jsx)(eh, { error: g }) : null,
            f ? (0, n.jsx)(ec.y, {}) : null,
        ],
    });
};
var eA = s(364522),
    eT = s(761508),
    eO = s(797788);
let eR = () => (0, n.jsx)("div", { className: eO.y });
var eI = s(834615),
    eL = s(332544);
let ey = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eL.x3,
        children: (0, n.jsxs)("div", {
            className: eL.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: eL.R_,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t.L2mlUb),
                }),
                (0, n.jsx)(eI.A, { quest: t }),
            ],
        }),
    });
};
var eQ = s(241124),
    eH = s(28082),
    eM = s(717695),
    eU = s(763578),
    eF = s(111113);
let eD = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eL.x3,
        children: (0, n.jsxs)("div", {
            className: eU.wp,
            children: [
                (0, n.jsx)(f.D, {
                    className: eU.Oo,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t.rjVPdM),
                }),
                (0, n.jsx)("div", {
                    className: eU.RE,
                    children: (0, n.jsx)("div", {
                        className: eU.Z,
                        children: (0, n.jsx)("div", {
                            className: eF.C3,
                            children: (0, n.jsx)(eM.A, {
                                children: (0, n.jsx)(eQ.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, n.jsx)(eH.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ew = s(961974);
let eP = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eL.x3,
        children: (0, n.jsxs)("div", {
            className: eL.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: eL.R_,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t.gWinpQ),
                }),
                (0, n.jsx)("div", {
                    className: eL.YT,
                    children: (0, n.jsx)(ew.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var ek = s(711038),
    eq = s(330034);
let eB = function (e) {
    let { questId: t } = e;
    return (0, n.jsx)("div", {
        className: eL.x3,
        children: (0, n.jsxs)("div", {
            className: eL.B0,
            children: [
                (0, n.jsx)(f.D, { variant: "heading-md/semibold", children: em.intl.string(em.t.IcljUu) }),
                (0, n.jsx)("div", {
                    className: eq.wu,
                    children: (0, n.jsx)("span", { className: eq.cy, children: em.intl.string(em.t.q97mEu) }),
                }),
                (0, n.jsx)("div", {
                    className: eq.oU,
                    children: (0, n.jsx)("div", {
                        className: eq.zx,
                        children: (0, n.jsx)("div", {
                            className: eq.Lj,
                            children: (0, n.jsx)("div", {
                                className: eq.n0,
                                children: (0, n.jsx)(ek.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eV = s(291922);
let eG = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eL.x3,
        children: (0, n.jsxs)("div", {
            className: eL.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: eL.R_,
                    variant: "heading-md/semibold",
                    children: em.intl.string(em.t["5wnpF3"]),
                }),
                (0, n.jsx)(eV.Ay, {
                    className: eL.d,
                    quest: t,
                    questContent: K.uF.QUEST_HOME_DESKTOP,
                    contentPosition: 0,
                    rowIndex: 0,
                    sourceQuestContent: K.uF.INTERNAL_PREVIEW_TOOL,
                }),
            ],
        }),
    });
};
var eW = s(939249),
    ez = s(97808),
    e$ = s(778712),
    eK = s(87664),
    eY = s(287809),
    eJ = s(427262),
    eZ = s(198525),
    eX = s(66176);
let e0 = function (e) {
        let { quest: t } = e,
            [s, l] = r.useState(!1),
            a = r.useRef(null),
            o = (0, d.bG)([eY.default], () => eY.default.getCurrentUser()),
            c = eJ.Ay.useName(o),
            u = (0, eK.A)(o?.id),
            m = r.useCallback(
                (e) =>
                    (0, n.jsx)(eZ.A, {
                        name: c,
                        quest: t,
                        memberListItemRef: a,
                        applicationStream: u,
                        ...e,
                        closePopout: () => {
                            l(!1);
                        },
                    }),
                [t, u, c],
            );
        return (0, n.jsx)("div", {
            className: eL.x3,
            children: (0, n.jsxs)("div", {
                className: eL.B0,
                children: [
                    (0, n.jsx)(f.D, {
                        className: eX.R_,
                        variant: "heading-md/semibold",
                        children: em.intl.string(em.t.jY7Zxg),
                    }),
                    (0, n.jsx)("div", { className: eX.$Q, children: em.intl.string(em.t.q3hbne) }),
                    (0, n.jsx)("div", {
                        className: eX.k0,
                        children: (0, n.jsx)(ei.Y, {
                            targetElementRef: a,
                            renderPopout: m,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => l(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: ei.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, n.jsx)("div", {
                                    ref: a,
                                    className: i()(eX.Tn, { [eX.wH]: s }),
                                    children: (0, n.jsx)(eW.D, {
                                        onClick: () => l(!s),
                                        tabIndex: 0,
                                        children: (0, n.jsxs)("div", {
                                            className: eX.lm,
                                            children: [
                                                (0, n.jsx)(ez.eu, {
                                                    size: e$._3.SIZE_32,
                                                    src: o?.getAvatarURL(void 0, 32),
                                                    status: ep.clD.ONLINE,
                                                    "aria-label": o?.username,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: eX.Fj,
                                                    children: [
                                                        (0, n.jsx)(j.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, n.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: em.intl.string(em.t.b9w3bO),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                        }),
                    }),
                ],
            }),
        });
    },
    e1 = (e) => {
        let { questId: t, selectedSections: s } = e,
            l = (0, d.bG)([el.A], () => el.A.getQuest(t));
        if (null != (0, d.bG)([el.A], () => el.A.getFetchQuestPreviewError(t)) || null == l) return null;
        let r = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                r("quest_bar") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eD, { quest: l }), (0, n.jsx)(eR, {})] }),
                r("home_card") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eG, { quest: l }), (0, n.jsx)(eR, {})] }),
                r("share_embed") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eB, { questId: l.id }), (0, n.jsx)(eR, {})] }),
                r("channel_call_header") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eP, { quest: l }), (0, n.jsx)(eR, {})] }),
                r("members_list") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(e0, { quest: l }), (0, n.jsx)(eR, {})] }),
                r("activity_panel") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ey, { quest: l }), (0, n.jsx)(eR, {})] }),
            ],
        });
    };
var e8 = s(497275);
function e6(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: l, controls: a } = e,
        i = [
            { value: "quest_bar", label: em.intl.string(em.t.rjVPdM) },
            { value: "share_embed", label: em.intl.string(em.t["D/gSWS"]) },
            { value: "home_card", label: em.intl.string(em.t["5wnpF3"]) },
            { value: "channel_call_header", label: em.intl.string(em.t.gWinpQ) },
            { value: "members_list", label: em.intl.string(em.t.wpYima) },
            { value: "activity_panel", label: em.intl.string(em.t.L2mlUb) },
        ],
        o = 0 === s.length || s.length === i.length,
        c = r.useMemo(() => (o ? "all" : 1 === s.length ? s[0] : "all"), [s, o]);
    return (0, n.jsx)(eA.Ip, {
        className: e8.kL,
        orientation: "auto",
        children: (0, n.jsxs)("div", {
            className: e8.qE,
            children: [
                (0, n.jsx)(f.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: em.intl.string(em.t.BDUDau),
                }),
                (0, n.jsx)("div", { className: e8.pf, children: a }),
                (0, n.jsxs)(eT.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: c,
                    onItemSelect: (e) => {
                        l?.(e);
                    },
                    children: [
                        (0, n.jsx)(eT.V.Item, { id: "all", children: em.intl.string(em.t.Y9DnPa) }),
                        i.map((e) => (0, n.jsx)(eT.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, n.jsx)("div", { className: e8.tZ, children: (0, n.jsx)("div", { className: e8.Qs, children: t }) }),
            ],
        }),
    });
}
function e7(e) {
    return new URLSearchParams(e).get(X.L1.QUEST_ID);
}
let e3 = function (e) {
    let { questId: t } = e,
        { questId: s, setQuestId: l } = (function (e) {
            let t = (0, o.W6)(),
                [s, l] = r.useState(e),
                { search: n } = (0, o.zy)();
            return (
                r.useEffect(() => {
                    let t = e7(n);
                    null != t ? l(t) : null != e && l(e);
                }, [e, n]),
                r.useEffect(() => {
                    if (null == s || e7(n) === s) return;
                    let e = new URLSearchParams();
                    e.set(X.L1.TAB, X.NC.PREVIEW_TOOL),
                        e.set(X.L1.QUEST_ID, s),
                        t.push(`${ep.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, n]),
                { questId: s, setQuestId: l }
            );
        })(t),
        a = (0, d.bG)([el.A], () => (null != s ? el.A.getQuest(s) : void 0), [s]),
        i = (0, d.bG)([el.A], () => (null != s ? el.A.getQuestLoadedViaPreview(s) : null), [s]);
    r.useEffect(() => {
        null != s &&
            (0, es.dQ)(s).then(() => {
                (0, es.Gt)(s);
            });
    }, [s]),
        r.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === s && (0, es.dQ)(s);
            };
            return (
                et.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    et.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]);
    let [c, u] = r.useState([]);
    return (0, n.jsx)(e6, {
        controls: (0, n.jsx)(eb, {
            questId: s,
            setQuestId: l,
            quest: a,
            refreshQuest: () => {
                null != s && (0, es.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? u([]) : u([e]);
        },
        children: i?.id != null ? (0, n.jsx)(e1, { questId: i?.id, selectedSections: c }) : null,
    });
};
var e2 = s(617986),
    e4 = s(203879),
    e5 = s(403362),
    e9 = s(167417),
    te = s(783977),
    tt = s(651892),
    ts = s(305866),
    tl = s(915089),
    tn = s(332733);
function tr(e) {
    let { children: t, id: s } = e;
    return (0, n.jsx)(j.E, { className: tn.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let ta = function (e) {
    let { children: t, renderPopout: s } = e,
        l = (0, tl.GV)(),
        a = r.useRef(null);
    return (0, n.jsx)(ei.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, n.jsx)(ts.l, { className: tn.S, "aria-labelledby": l, children: s(e, l) }),
        scrollBehavior: "close",
        targetElementRef: a,
        children: (e) => t(e, a),
    });
};
var ti = s(612539);
let to = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        l = (0, X.Nb)(),
        a = r.useCallback(
            (e) => (l) => {
                let n = e.filter((e) => l.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...n]);
            },
            [s, t],
        );
    return (0, n.jsx)(ta, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, n.jsxs)("div", {
                children: [
                    l.map((e, t) => {
                        let l = e.options.map((e) => ({ label: (0, tt.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, n.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, n.jsx)("hr", { className: ti.B }),
                                    (0, n.jsx)(tr, { id: i, children: e.heading }),
                                    (0, n.jsx)(e9.$, {
                                        "aria-labelledby": i,
                                        options: l,
                                        selectedValues: o,
                                        onChange: a(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, n.jsx)("hr", { className: ti.B }),
                    (0, n.jsx)("div", {
                        className: ti.W,
                        children: (0, n.jsx)(E.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: em.intl.string(em.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(E.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: em.intl.formatToPlainString(em.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: te.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tc = s(773812),
    tu = s(715482);
let td = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: l } = e,
        a = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, X.XD)(),
        o = r.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, n.jsx)(ta, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(tr, { id: t, children: em.intl.string(em.t.tZXJIS) }),
                    (0, n.jsx)(tc.z, {
                        options: o,
                        onChange: (e) => {
                            s(), a(e);
                        },
                        value: l,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(E.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, tt.Js)(l),
                icon: tu.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tm = s(873174),
    th = s(535185),
    tx = s(717421),
    tE = s(927813),
    tg = s(710969);
function tf(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, tm.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, tm.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var tj = s(121480);
let tv = 4 * tE.A.Millis.SECOND;
function tp(e) {
    let { children: t } = e,
        s = r.useRef(null),
        [l, a] = r.useState(null),
        i = r.useCallback(() => {
            a(
                (function (e) {
                    if (null == e) return 1;
                    let t = Math.floor((e.clientWidth + 24) / 360);
                    return t > 0 ? t : 1;
                })(s.current),
            );
        }, [a]);
    return (
        (0, th.g)(s, i, [], { fireOnMount: !0 }),
        (0, n.jsx)("div", {
            className: tj.kL,
            ref: s,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== l && t(l),
        })
    );
}
let t_ = r.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: l,
            isFetching: a,
            hasFetched: c,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        m = (0, o.zy)(),
        h = r.useRef(""),
        [x, E] = r.useState(null),
        [g, v] = r.useState(0),
        [{ highlightAnimationProgress: p }, _] = (0, tx.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: tv },
        })),
        N = r.useCallback(
            (e) => {
                let t = (0, tg.vc)(e, s, l);
                return null != t && (E(t.id), v((e) => e + 1), !0);
            },
            [s, l],
        );
    return (r.useImperativeHandle(t, () => ({ scrollToQuest: N }), [N]),
    r.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        a || !c || (m.hash !== h.current && N(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, a, c, N]),
    r.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            _({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || E(null);
                },
            }));
    }, [x, g, _]),
    a && 0 === s.length)
        ? (0, n.jsx)(ec.y, { className: tj.u1 })
        : 0 === s.length
          ? (0, n.jsxs)("div", {
                className: tj.y7,
                children: [
                    (0, n.jsx)(f.D, {
                        variant: "heading-xl/semibold",
                        children: em.intl.string(u ? em.t.PBfFnx : em.t.NqFP6z),
                    }),
                    (0, n.jsx)(j.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? em.intl.format(em.t.LdYS1H, { onClick: d }) : em.intl.string(em.t.LhD4yH),
                    }),
                ],
            })
          : (0, n.jsx)(tp, {
                children: (e) =>
                    s.map((t, s) => {
                        let l = Math.floor(s / e),
                            r = x === t.id,
                            a = null != x && !r;
                        return (0, n.jsxs)(
                            tm.animated.div,
                            {
                                className: i()({ [tj.XB]: r }),
                                style: tf(r, a, p),
                                children: [
                                    r && (0, n.jsx)("div", { className: tj.E4 }, g),
                                    (0, n.jsx)(eV.Ay, {
                                        quest: t,
                                        questContent: K.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: s,
                                        rowIndex: l,
                                        className: tj.d,
                                        sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var tN = s(458518),
    tC = s(190107),
    tS = s(65990);
let tb = [],
    tA = X.L1.SORT,
    tT = X.L1.FILTER,
    tO = r.forwardRef(function (e, t) {
        let s,
            l,
            a,
            i,
            c = r.useRef(null),
            [u, d] =
                ((s = (0, tN.o)()),
                (l = (0, o.W6)()),
                (a = r.useRef(null)),
                (i = r.useCallback(
                    (e) => {
                        let t = new URLSearchParams(a.current ?? s);
                        for (let [s, l] of Object.entries(e)) null == l ? t.delete(s) : t.set(s, l);
                        (a.current = t),
                            l.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                a.current = null;
                            });
                    },
                    [s, l],
                )),
                [s, i]),
            m = r.useMemo(() => {
                var e;
                return (
                    (e = u.get(tA)),
                    ((0, $.uJ)(e) ? null : (Object.values(tC.kL).find((t) => t === e) ?? null)) ?? tC.kL.SUGGESTED
                );
            }, [u]),
            h = r.useMemo(
                () =>
                    (function (e) {
                        if ((0, $.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tC.WQ)(e))
                            .filter(e5.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(tT)) ?? tb,
                [u],
            ),
            x = r.useCallback(
                (e) => {
                    d({ [tA]: e });
                },
                [d],
            ),
            E = r.useCallback(
                (e) => {
                    d({
                        [tT]:
                            0 === e.length
                                ? null
                                : e
                                      .map((e) => {
                                          let { filter: t } = e;
                                          return t;
                                      })
                                      .join(","),
                    });
                },
                [d],
            ),
            {
                quests: g,
                excludedQuests: j,
                isFetchingCurrentQuests: v,
                hasFetched: p,
            } = (0, X.Qh)(
                X.NC.ALL,
                r.useMemo(() => ({ sortMethod: m, filters: h }), [m, h]),
            ),
            _ = r.useCallback(() => {
                E(tb);
            }, [E]),
            N = r.useRef(null),
            C = r.useRef(null),
            S = (0, o.zy)(),
            b = (0, o.W6)();
        return (
            r.useEffect(() => {
                "" !== S.hash &&
                    null != N.current &&
                    null != C.current &&
                    (m !== N.current || h !== C.current) &&
                    b.replace({ ...S, hash: void 0 });
            }, [m, h, S, b]),
            r.useEffect(() => {
                N.current = m;
            }, [m]),
            r.useEffect(() => {
                C.current = h;
            }, [h]),
            (0, X.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: g.length }),
            r.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        _(),
                            x(tC.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                c.current?.scrollToQuest(e);
                            });
                    },
                }),
                [_, x],
            ),
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)("div", {
                        className: tS.Mj,
                        children: [
                            (0, n.jsx)(f.D, { variant: "heading-lg/medium", children: em.intl.string(em.t.giYD00) }),
                            (0, n.jsxs)("div", {
                                className: tS.Nf,
                                children: [
                                    (0, n.jsx)(td, { onChange: x, optionClassName: tS.Uq, selectedSortMethod: m }),
                                    (0, n.jsx)(to, { onChange: E, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(t_, {
                        ref: c,
                        quests: g,
                        excludedQuests: j,
                        isFetching: v,
                        hasFetched: p,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: _,
                    }),
                ],
            })
        );
    });
var tR = s(575593),
    tI = s(440703),
    tL = s(462887),
    ty = s(187322),
    tQ = s(765671),
    tH = s(736653),
    tM = s(162232),
    tU = s(859387),
    tF = s(734736),
    tD = s(303136),
    tw = s(265234),
    tP = s(181713);
let tk = (e) => {
    let { className: t, isAnimated: s = !1, questName: l } = e,
        r = s ? tP.A : tP.A + "?format=webp";
    return (0, n.jsx)("div", {
        className: i()(tw.k, t),
        children: s
            ? (0, n.jsx)(tD.A, {
                  preload: "auto",
                  className: tw.L,
                  children: (0, n.jsx)("source", { src: r, type: "video/webm" }),
              })
            : (0, n.jsx)("img", { className: tw.L, src: r, alt: l }),
    });
};
var tq = s(57718),
    tB = s(659249);
let tV = (0, r.memo)(function (e) {
    let { quest: t } = e,
        [s, l] = (0, r.useState)(!1),
        [a, o] = (0, r.useState)(24),
        [c, u] = (0, r.useState)(!1),
        m = (0, r.useRef)(null),
        h = (0, r.useRef)(null),
        x = (0, r.useRef)(null),
        E = (0, d.bG)([eY.default], () => eY.default.getCurrentUser()),
        { ref: g, height: v = 0 } = (0, tQ.Ay)(),
        p = (0, tH.Ay)(),
        _ = (0, X.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        N = t.userStatus?.claimedTier ?? 0,
        C = t.config.rewards[N],
        S = C?.type === tI.l.FRACTIONAL_PREMIUM,
        b = C?.type === tI.l.COLLECTIBLE,
        A = C?.type === tI.l.VIRTUAL_CURRENCY,
        T = C?.collectibleProduct?.items?.[0],
        O = T?.type === tR.R.AVATAR_DECORATION ? T : null,
        R = r.useMemo(
            () =>
                null == C
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? em.intl.format(em.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : C.name,
            [C, A, t],
        );
    (0, tQ.i4)(m, (e) => {
        let { height: t } = e;
        if (!b || null == t || null == h.current || null == m.current || null == x.current) return;
        let s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect(),
            n = x.current.getBoundingClientRect();
        o((l.top - s.top - n.height) / 2);
    });
    let L = (0, tL.M)(p),
        y = r.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        Q = r.useMemo(() => (0, tU.tW)(t, tU.fY.REWARD), [t]),
        H = s ? v + 8 : 0,
        { content_position: M, row_index: U, ...F } = (0, ee.fF)(K.uF.TROPHY_CASE_CARD),
        D = () => {
            l(!0), G.default.track(ep.HAw.QUEST_HOVER, { quest_id: t.id, ...F });
        },
        w = () => {
            l(!1);
        },
        P = (e) => {
            u(!0), G.default.track(ep.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == C || c
        ? null
        : (0, n.jsx)(ty.vN, {
              children: (0, n.jsxs)("div", {
                  ref: m,
                  tabIndex: 0,
                  onFocus: D,
                  onBlur: w,
                  onMouseEnter: D,
                  onMouseLeave: w,
                  className: i()(tB.kL, { [tB.yo]: s }),
                  children: [
                      null != E &&
                          b &&
                          null != O &&
                          (0, n.jsx)("div", {
                              ref: x,
                              className: tB.FX,
                              style: { top: a },
                              children: (0, n.jsx)(tM.A, {
                                  avatarDecorationOverride: O,
                                  user: E,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      S
                          ? (0, n.jsx)(tF.A, { className: tB.Sl })
                          : A
                            ? (0, n.jsx)(tk, {
                                  className: tB.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : Q.isAnimated
                              ? (0, n.jsx)(I.A, {
                                    className: tB.JU,
                                    autoPlay: !1,
                                    children: (0, n.jsx)("source", {
                                        src: Q.url,
                                        type: Q.mimetype ?? void 0,
                                        onError: () => P(Q.url),
                                    }),
                                })
                              : (0, n.jsx)("img", {
                                    className: tB.Sl,
                                    src: Q.url,
                                    alt: t.config.messages.questName,
                                    onError: () => P(Q.url),
                                }),
                      (0, n.jsx)("div", { className: i()(tB.Lw, { [tB.en]: L, [tB.So]: !L }) }),
                      (0, n.jsx)("div", {
                          ref: h,
                          className: tB.r$,
                          style: { transform: `translateY(-${H}px)` },
                          children: (0, n.jsx)(tq.Ay, {
                              logotypeClassName: i()(tB.wm, { [tB.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          ref: g,
                          className: tB.zH,
                          children: [
                              (0, n.jsx)(f.D, {
                                  className: tB.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: em.intl.format(em.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, n.jsx)(j.E, {
                                  variant: "text-sm/medium",
                                  color: L ? "text-muted" : "always-white",
                                  style: { opacity: L ? 1 : 0.75 },
                                  children: em.intl.format(em.t["kXVcV+"], { reward: R, claimedDate: _ }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var tG = s(396478);
function tW(e) {
    let { onClick: t } = e,
        l = (0, tH.Ay)();
    return (0, n.jsxs)(tG.pp, {
        theme: l,
        children: [
            (0, n.jsx)(tG.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, n.jsx)(tG.SG, { note: em.intl.format(em.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var tz = s(975424);
function t$(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: s, isFetchingClaimedQuests: l } = (0, X.Iq)();
    return l && 0 === s.length
        ? (0, n.jsx)(ec.y, { className: tz.u })
        : 0 === s.length
          ? (0, n.jsx)(tW, { onClick: () => t(X.NC.ALL) })
          : (0, n.jsx)("div", {
                className: tz.U,
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, n.jsx)(tV, { quest: e }, e.id)),
            });
}
let tK = r.createContext({ targetQuestId: null, highlightCount: null, highlightAnimationProgress: null });
var tY = s(548411),
    tJ = s(554830),
    tZ = s(689175),
    tX = s(522403);
let t0 = "data-scroll-target",
    t1 = `[${t0}]`;
function t8(e) {
    let {
            children: t,
            className: s,
            scrollIncrement: l,
            itemSelector: a = t1,
            maskWidth: o = 48,
            overflowAmount: c = 0,
        } = e,
        u = r.useRef(null),
        m = r.useRef(null),
        [h, x] = r.useState(!1),
        [E, g] = r.useState(!1),
        f = (0, d.bG)([C.A], () => C.A.useReducedMotion) ? "auto" : "smooth",
        j = r.useCallback(() => {
            let e = u.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (x(e.scrollLeft > 0), g(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        v = r.useCallback(() => {
            j();
        }, [j]),
        p = r.useCallback(() => {
            let e = u.current?.getScrollerNode();
            if (null == e) return;
            let t = e.scrollLeft - l,
                s = t < l ? 0 : t;
            e.scrollTo({ left: s, behavior: f });
        }, [l, f]),
        _ = r.useCallback(() => {
            let e = u.current?.getScrollerNode();
            if (null == e) return;
            let t = e.scrollWidth - e.clientWidth,
                s = e.scrollLeft + l,
                n = s > t - l ? t : s;
            e.scrollTo({ left: n, behavior: f });
        }, [l, f]),
        N = r.useCallback(
            (e) => {
                let t = u.current?.getScrollerNode();
                if (null == t) return;
                let s = e.target.closest(a);
                if (null == s) return;
                let l = s.offsetLeft - o,
                    n = s.offsetLeft + s.offsetWidth + o,
                    r = t.scrollLeft,
                    i = r + t.clientWidth;
                l < r
                    ? t.scrollTo({ left: l, behavior: f })
                    : n > i && t.scrollTo({ left: n - t.clientWidth, behavior: f });
            },
            [a, o, f],
        );
    (0, th.g)(m, j, [], { fireOnMount: !0 });
    let S = c > 0;
    return (0, n.jsxs)("div", {
        className: i()(s, tX.m7),
        ref: m,
        style: { "--custom-scroller-mask-width": `${o}px`, "--custom-scroller-overflow-amount": `${c}px` },
        children: [
            (0, n.jsx)(eW.D, {
                "aria-label": em.intl.string(em.t.vgfxaA),
                className: i()(tX.k9, tX.RW, { [tX.Q2]: h }),
                onClick: p,
                tabIndex: h ? 0 : -1,
                "aria-hidden": !h,
                children: (0, n.jsx)(tY.Z, { color: ex.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, n.jsx)(eW.D, {
                "aria-label": em.intl.string(em.t.XiOHRX),
                className: i()(tX.k9, tX.K3, { [tX.Q2]: E }),
                onClick: _,
                tabIndex: E ? 0 : -1,
                "aria-hidden": !E,
                children: (0, n.jsx)(tJ.K, { color: ex.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, n.jsx)("div", {
                className: i()(tX.$u, { [tX.sF]: h, [tX.RC]: E, [tX.Ni]: S && !h, [tX.GA]: S && !E }),
                children: (0, n.jsx)(tZ.zC, {
                    ref: u,
                    className: S ? tX.x2 : void 0,
                    orientation: "horizontal",
                    onScroll: v,
                    onFocusCapture: N,
                    children: t,
                }),
            }),
        ],
    });
}
var t6 =
    (((l = {}).FEATURED = "featured"),
    (l.IN_PROGRESS = "in-progress"),
    (l.ENDING_SOON = "ending-soon"),
    (l.ORB = "orb"),
    (l.DISCOVERED = "discovered"),
    l);
let t7 = [
    { type: "featured-quests", identifier: "featured", title: em.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "in-progress", title: em.t.CHJy6z },
    { type: "quests", identifier: "ending-soon", title: em.t.PRg3qh },
    { type: "quests", identifier: "orb", title: em.t["0Uc94A"] },
    { type: "quests", identifier: "discovered", title: em.t["u9Ug++"] },
];
var t3 = s(548636);
function t2(e) {
    let { questIds: t, rowIndex: s, sectionIdentifier: l } = e,
        { targetQuestId: a, highlightCount: i, highlightAnimationProgress: o } = r.useContext(tK),
        c = null != a;
    return (0, n.jsx)(t8, {
        maskWidth: 48,
        overflowAmount: 25,
        scrollIncrement: 410.6666666666667,
        children: (0, n.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": "390.6666666666667px",
                "--custom-extra-spacing-placeholder-size": "5px",
            },
            className: t3.FO,
            children: [
                t.map((e, t) => {
                    let r = a === e,
                        u = c && !r;
                    return (0, n.jsxs)(
                        tm.animated.div,
                        {
                            [t0]: "",
                            className: r ? t3.XB : void 0,
                            style: tf(r, u, o),
                            children: [
                                r && (0, n.jsx)("div", { className: t3.E4 }, i),
                                (0, n.jsx)(eV.Ay, {
                                    questId: e,
                                    isInFeaturedSection: l === t6.FEATURED,
                                    questContent: K.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: t,
                                    rowIndex: s,
                                    className: t3.d,
                                    sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                                }),
                            ],
                        },
                        `animated-wrapper-${e}`,
                    );
                }),
                (0, n.jsx)("div", { className: t3.fu }),
            ],
        }),
    });
}
var t4 = s(801365),
    t5 = s(814793);
let t9 = 2 * tE.A.Millis.DAY,
    se = new Map(t7.map((e) => [e.identifier, e]));
var st = s(32304);
let ss = 4 * tE.A.Millis.SECOND,
    sl = r.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, hasSearchResults: l } = e,
            { sections: a } = ((e) => {
                let { sharedQuestId: t } = e,
                    {
                        quests: s,
                        isFetchingCurrentQuests: l,
                        hasFetched: n,
                    } = (0, X.Qh)(X.NC.ALL, { sortMethod: tC.kL.SUGGESTED, filters: [] }),
                    a = (0, d.bG)([el.A], () => el.A.getQuestHomeHero()),
                    i = (0, d.bG)([el.A], () => el.A.isFetchingQuestHomeHero()),
                    o = r.useRef([]),
                    c = r.useMemo(
                        () =>
                            i
                                ? []
                                : (function (e) {
                                      let { prevSections: t, quests: s, hero: l, sharedQuestId: n } = e,
                                          r = new Set(
                                              s.map((e) => {
                                                  let { id: t } = e;
                                                  return t;
                                              }),
                                          ),
                                          a = new Map(),
                                          i = new Set(),
                                          o = t7.map((e) => {
                                              let s = t?.find((t) => {
                                                      let { identifier: s } = t;
                                                      return s === e.identifier;
                                                  }),
                                                  l = [];
                                              return (
                                                  null != s && l.push(...s?.questIds.filter((e) => r.has(e))),
                                                  a.set(e.identifier, l.length),
                                                  l.forEach((e) => i.add(e)),
                                                  { ...e, questIds: l }
                                              );
                                          });
                                      for (let e of s) {
                                          if (i.has(e.id)) continue;
                                          let t = (function (e) {
                                              var t;
                                              let s,
                                                  { quest: l, hero: n, sharedQuestId: r, sectionCounts: a } = e;
                                              return (0, tg.Ic)(l)
                                                  ? null
                                                  : r === l.id
                                                    ? t6.DISCOVERED
                                                    : l.userStatus?.enrolledAt != null &&
                                                        l.userStatus?.claimedAt == null
                                                      ? t6.IN_PROGRESS
                                                      : null != n && (0, t5.I0)(n, l.id)
                                                        ? t6.FEATURED
                                                        : new Date(l.config.expiresAt).valueOf() <= Date.now() + t9
                                                          ? t6.ENDING_SOON
                                                          : ((t = t6.FEATURED),
                                                              null == (s = se.get(t)?.maxItems) || (a.get(t) ?? 0) < s)
                                                            ? t6.FEATURED
                                                            : (0, t4.ks)(l.config)
                                                              ? t6.ORB
                                                              : null;
                                          })({ quest: e, hero: l, sharedQuestId: n, sectionCounts: a });
                                          if (null == t) continue;
                                          let s = o.find((e) => {
                                              let { identifier: s } = e;
                                              return s === t;
                                          });
                                          null != s &&
                                              (s.questIds.push(e.id), i.add(e.id), a.set(t, (a.get(t) ?? 0) + 1));
                                      }
                                      return o.filter((e) => e.questIds.length > 0);
                                  })({ prevSections: o.current, quests: s, hero: a, sharedQuestId: t }),
                        [s, a, t, i],
                    );
                return (
                    r.useEffect(() => {
                        o.current = c;
                    }, [c]),
                    { sections: c, hasFetched: n, isFetchingCurrentQuests: l || i }
                );
            })({ sharedQuestId: s }),
            [o, c] = r.useState(null),
            [u, m] = r.useState(0),
            h = r.useRef(null),
            [{ highlightAnimationProgress: x }, E] = (0, tx.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: ss },
            })),
            g = r.useCallback(
                (e) => {
                    if (null == e) return !1;
                    let t = document.getElementById((0, eV.sT)(e));
                    return (
                        null != t &&
                        (c(e),
                        m((e) => e + 1),
                        t.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        E({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || c(null);
                            },
                        }),
                        !0)
                    );
                },
                [c, m, E],
            );
        r.useImperativeHandle(t, () => ({ scrollToQuest: g }), [g]),
            r.useLayoutEffect(() => {
                if (null == s) {
                    h.current = null;
                    return;
                }
                h.current !== s && g(s) && (h.current = s);
            }, [s, g, a]);
        let j = r.useMemo(() => ({ targetQuestId: o, highlightCount: u, highlightAnimationProgress: x }), [o, u, x]);
        return (0, n.jsx)(tK.Provider, {
            value: j,
            children: (0, n.jsx)("div", {
                className: i()(st.kL, { [st.R]: l }),
                children: a.map((e, t) => {
                    let { identifier: s, questIds: l, title: r } = e;
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: st.p9,
                            children: [
                                (0, n.jsx)(f.D, { variant: "heading-lg/medium", children: em.intl.string(r) }),
                                (0, n.jsx)(t2, { questIds: l, rowIndex: t, sectionIdentifier: s }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        });
    });
var sn = s(353640),
    sr = s(121894),
    sa = s(851936);
let si = (0, sn.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, sa.L)({ location: tC.rE.QUEST_HOME_DESKTOP });
        if (s.info === eC.tE || t().elapsed >= 6e4) return;
        let l = performance.now() - t().startTime;
        l > 6e4 && (l = 6e4);
        let n = { elapsed: l };
        l - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${l}ms`), (n.lastOutputLogTime = l)),
            null == t().logger && (n.logger = s),
            (0, sr.r)(() => e(n));
    },
}));
var so = s(516226),
    sc = s(323889),
    su = s(561844),
    sd = s(901406),
    sm = s(415441),
    sh = s(73473),
    sx = s(139384),
    sE = s(43990),
    sg = s(770178),
    sf = s(14233);
function sj(e, t) {
    let { row_index: s, ...l } = (0, ee.fF)(K.uF.QUEST_HOME_HERO);
    (0, su.Qg)({
        adContentId: e,
        adCreativeType: sc.p.QUEST_HOME_HERO,
        event: t,
        properties: l,
        sourceQuestContent: K.uF.QUEST_HOME_HERO,
    });
}
let sv = r.forwardRef(function (e, t) {
    let { adContentId: s, topContent: l, title: a, subtitle: o, buttons: c, background: u, className: d } = e,
        [m, h] = r.useState("display-lg"),
        x = r.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        E = (0, sg.w)(x, [], { fireOnMount: !0 }),
        g = r.useCallback(() => sj(s, ep.HAw.QUEST_HOVER), [s]),
        v = r.useCallback(() => sj(s, ep.HAw.QUEST_HOVER_OFF), [s]);
    return (0, n.jsx)(sE.N, {
        theme: ep.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, n.jsx)("div", {
                className: i()(sf.iE, e, d),
                onMouseEnter: g,
                onMouseLeave: v,
                ref: (e) => {
                    (E.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, n.jsxs)("div", {
                    className: sf.FG,
                    children: [
                        (0, n.jsxs)(p.B, {
                            className: sf.Qs,
                            direction: "vertical",
                            justify: null != l ? "space-between" : "end",
                            children: [
                                l,
                                (0, n.jsxs)(p.B, {
                                    className: sf.yp,
                                    gap: 16,
                                    children: [
                                        (0, n.jsxs)(p.B, {
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(f.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: sf.DD,
                                                    children: a,
                                                }),
                                                (0, n.jsx)(j.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: sf.VA,
                                                    children: o,
                                                }),
                                            ],
                                        }),
                                        c,
                                    ],
                                }),
                            ],
                        }),
                        u,
                    ],
                }),
            }),
    });
});
var sp = s(194526),
    s_ = s(731355),
    sN = s(621466),
    sC = s(508770),
    sS = s(406810),
    sb = s(628284),
    sA = s(65154),
    sT = s(687966),
    sO = s(496431),
    sR = s(975807),
    sI = s(58703),
    sL = s(18437),
    sy = s(453384),
    sQ = s(646764),
    sH = s(398025),
    sM = s(691464);
function sU(e) {
    let [t, s] = r.useState(!1),
        l = r.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        n = r.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: l, onMouseLeave: n, onFocus: l, onBlur: n } };
}
function sF(e) {
    let { hero: t, contentPosition: s } = e,
        l = r.useRef(null),
        { isHovering: a, hoverProps: o } = sU(
            r.useCallback(
                (e) => {
                    (0, su.Qg)({
                        adContentId: t.id,
                        adCreativeType: sc.p.QUEST_HOME_HERO,
                        event: e ? ep.HAw.QUEST_HOVER : ep.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: K.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ee.jO)(K.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    r.useEffect(() => {
        let e = l.current;
        (0, sN.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(eC.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, tx.z)({ hoverSpring: +!!a, config: tm.config.gentle });
    return (0, n.jsxs)("div", {
        className: i()(sM.FW, sM.Bm),
        [t0]: !0,
        ...o,
        children: [
            (0, n.jsx)("div", {
                className: sM.Ve,
                children: (0, n.jsx)(sm.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: i()(sM.pv, sM.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: i()(sM.pv, sM.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, n.jsx)(tm.animated.div, {
                className: sM.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, sR.A)(t.cta.url),
                            (0, su.vK)({
                                adContentId: t.id,
                                adCreativeType: sc.p.QUEST_HOME_HERO,
                                questContent: K.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: ee.Cy.OPEN_GAME_LINK,
                                questContentPosition: s,
                                sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function sD(e) {
    let { quest: t, onQuestCtaClick: s, contentPosition: l } = e,
        a = (0, tH.Ay)(),
        o = r.useMemo(() => (0, tU.tW)(t, tU.fY.LOGO_TYPE, (0, tL.M)(a) ? ep.NJ8.DARK : ep.NJ8.LIGHT).url, [t, a]),
        c = r.useMemo(() => new Date(t.config.expiresAt), [t.config.expiresAt]),
        { days: u, hours: d, minutes: m, seconds: h } = (0, sO.A)(c, tE.A.Millis.MINUTE),
        x = r.useMemo(
            () =>
                (0, sI.uN)(
                    { days: u, hours: d, minutes: m, seconds: h },
                    { days: em.t["Ux/De1"], hours: em.t.Lzd5Ie, minutes: em.t.odmpbP },
                ),
            [u, d, m, h],
        ),
        g = r.useMemo(() => (0, t4.mq)(t.config), [t.config]),
        f = r.useMemo(
            () =>
                (function (e) {
                    switch ((0, tt.xv)(e).type) {
                        case tI.l.IN_GAME:
                            return em.intl.string(em.t["O/J2kr"]);
                        case tI.l.COLLECTIBLE:
                            return em.intl.string(em.t.Jg17Ut);
                        case tI.l.VIRTUAL_CURRENCY:
                            return em.intl.string(em.t.ElYQFS);
                        default:
                            return (0, t4.mq)(e);
                    }
                })(t.config),
            [t.config],
        ),
        { completedRatio: v, completedRatioDisplay: _ } = (0, X.O9)(t),
        N = r.useMemo(() => (0, t4._Z)(t.config), [t.config]),
        C = (0, sL.Ut)(),
        S = (0, sL.u0)(),
        { isHovering: b, hoverProps: A } = sU(
            r.useCallback(
                (e) => {
                    S({
                        questId: t.id,
                        event: e ? ep.HAw.QUEST_HOVER : ep.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: K.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, ee.jO)(K.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [S, t.id, l],
            ),
        ),
        { hoverSpring: T } = (0, tx.z)({ hoverSpring: +!!b, config: tm.config.gentle });
    return (0, n.jsxs)("div", {
        className: i()(sM.FW, sM.$R),
        [t0]: !0,
        ...A,
        children: [
            (0, n.jsxs)(p.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, n.jsx)(sC.E, { type: { text: f }, variant: "expressive" }),
                    (0, n.jsx)(tm.animated.div, {
                        style: { opacity: (0, sH.a)(T.to([0, 1], [1, 0])) },
                        children: (0, n.jsx)(sC.E, { type: { text: x }, icon: sS.O }),
                    }),
                ],
            }),
            (0, n.jsx)(tm.animated.div, {
                className: sM.Tr,
                style: { transform: T.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, n.jsx)(sy.A, {
                    percentComplete: v,
                    overlayText: b && null != N ? `${N}` : void 0,
                    size: 100,
                    children: (0, n.jsx)(sQ.A, {
                        quest: t,
                        questContent: K.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: b,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, n.jsx)(tm.animated.div, {
                className: sM.tw,
                style: {
                    opacity: (0, sH.a)(T.to([0, 1], [1, 0])),
                    transform: T.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, n.jsxs)(p.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)("div", {
                            className: sM.aP,
                            children: (0, n.jsx)("img", { src: o, alt: t.config.messages.gameTitle, className: sM.rC }),
                        }),
                        (0, n.jsxs)(p.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(j.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    className: sM.Ht,
                                    children: g,
                                }),
                                (0, n.jsxs)(p.B, {
                                    align: "start",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, n.jsxs)(p.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, n.jsx)(sb.y, { size: "xs", color: ex.A.colors.ICON_MUTED.css }),
                                                (0, n.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.config.messages.gamePublisher,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)(p.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, t5.pv)(t.config) === s_.Z.VIDEO
                                                    ? (0, n.jsx)(sA.S, {
                                                          size: "xs",
                                                          color: ex.A.colors.ICON_MUTED.css,
                                                      })
                                                    : (0, n.jsx)(sT._, {
                                                          size: "xs",
                                                          color: ex.A.colors.ICON_MUTED.css,
                                                      }),
                                                (0, n.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: _,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(tm.animated.div, {
                className: sM.um,
                style: { transform: T.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: () => {
                        s(t.id),
                            C({
                                questId: t.id,
                                questContent: K.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: ee.Cy.VIEW_QUESTS,
                                questContentPosition: l,
                                sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: em.intl.string(em.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var sw = s(648731);
function sP(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: l } = e;
    return (0, n.jsx)(t8, {
        className: sw.v,
        scrollIncrement: 320,
        children: (0, n.jsxs)(p.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, n.jsx)(sh.R, {
                    adContentId: t.id,
                    adCreativeType: sc.p.QUEST_HOME_HERO,
                    questContent: K.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, n.jsx)(sF, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, t) =>
                    (0, n.jsx)(
                        sh.R,
                        {
                            questOrQuests: e,
                            questContent: K.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: t + 1,
                            sourceQuestContent: K.uF.QUEST_HOME_HERO_SHELF,
                            children: (s) =>
                                (0, n.jsx)("div", {
                                    ref: (e) => {
                                        s.current = e;
                                    },
                                    children: (0, n.jsx)(sD, { quest: e, onQuestCtaClick: l, contentPosition: t + 1 }),
                                }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
}
var sk = s(95115);
function sq() {
    return (0, n.jsx)("div", { className: sk.Np });
}
function sB(e) {
    let { heroImage: t, heroVideo: s } = e,
        l = r.useRef(null);
    (0, sx.A)(l, tC.rE.QUEST_HOME_DESKTOP);
    let a = r.useMemo(() => (null != s ? (0, tU.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, n.jsxs)("div", {
              className: sk.Tv,
              children: [
                  (0, n.jsx)(sq, {}),
                  (0, n.jsx)("div", {
                      className: sk.LO,
                      children: (0, n.jsx)("img", { className: sk.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: i()(sk.LO, sk.jx, sk.hw),
                      children: (0, n.jsx)("img", { className: sk.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: i()(sk.LO, sk.jx, sk.Co),
                      children: (0, n.jsx)("img", { className: sk.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: sk.Tv,
              children: [
                  (0, n.jsx)(sq, {}),
                  (0, n.jsx)("div", {
                      className: sk.LO,
                      children: (0, n.jsx)(sm.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: l,
                          imageAsset: {
                              alt: "",
                              className: sk.LY,
                              asset: { url: a, mimetype: (0, tU.vm)(a), isAnimated: !1 },
                              assetId: a,
                          },
                          videoAsset: {
                              alt: "",
                              className: sk.LY,
                              asset: { url: s, mimetype: (0, tU.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function sV(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        l = (0, d.bG)([el.A], () => el.A.quests),
        { shelfQuests: a, isShelfEnabled: i } = (0, X.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, sp.I)();
    r.useEffect(() => {
        o();
    }, [o]);
    let c = r.useMemo(() => t.questIds?.find((e) => l.has(e)), [l, t.questIds]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(sh.R, {
                adContentId: t.id,
                adCreativeType: sc.p.QUEST_HOME_HERO,
                questContent: K.uF.QUEST_HOME_HERO,
                sourceQuestContent: K.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, n.jsx)(sv, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, n.jsxs)(p.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, n.jsx)("img", { src: t.sponsorImage, alt: "", className: sk.wm }),
                                (0, n.jsx)(j.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: sk.yu,
                                    children: em.intl.string(em.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, n.jsxs)(x.e, {
                            children: [
                                (0, n.jsx)(E.$, {
                                    onClick: () => {
                                        (0, sd._Q)(
                                            { adContentId: t.id, adCreativeType: sc.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: K.uF.QUEST_HOME_HERO,
                                                ctaContent: ee.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: K.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !i &&
                                    null != c &&
                                    (0, n.jsx)(E.$, {
                                        onClick: () => {
                                            s(c),
                                                (0, su.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: sc.p.QUEST_HOME_HERO,
                                                    questContent: K.uF.QUEST_HOME_HERO,
                                                    questContentCTA: ee.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: K.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: em.intl.string(em.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, n.jsx)(sB, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, n.jsx)(sP, { hero: t, shelfQuests: a, onQuestCtaClick: s }),
        ],
    });
}
function sG() {
    return (0, n.jsx)("div", { className: i()(sf.iE, sf.FG, sf.B3), children: (0, n.jsx)(ec.y, {}) });
}
var sW = s(321503);
function sz(e) {
    let { alt: t, ariaLabel: s, ariaHidden: l, role: r, width: a = 288, height: i = 192 } = e;
    return (0, n.jsx)("img", {
        style: { width: a, height: i },
        src: "https://cdn.discordapp.com/assets/content/f7e308880e4b4db999ae2e2c43f12f7882f717158ce2520aa36a9d60fb68c367.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": l,
        role: r ?? "img",
    });
}
var s$ = s(298537);
let sK = function (e) {
    let { matchingQuestIds: t } = e;
    return (0, n.jsxs)(p.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: s$.kL,
        children: [
            (0, n.jsxs)(f.D, {
                variant: "heading-lg/medium",
                children: [em.intl.string(em.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, n.jsxs)(p.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: s$.y7,
                      children: [
                          (0, n.jsx)(sz, { alt: em.intl.string(em.t["Xe+fJM"]) }),
                          (0, n.jsxs)(p.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "heading-lg/medium",
                                      children: em.intl.string(em.t["Xe+fJM"]),
                                  }),
                                  (0, n.jsx)(f.D, {
                                      variant: "heading-sm/medium",
                                      children: em.intl.string(em.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsx)("div", {
                      className: s$.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": "390.6666666666667px",
                          "--custom-quest-grid-gap": "20px",
                      },
                      children: t.map((e, t) =>
                          (0, n.jsx)(
                              eV.Ay,
                              {
                                  eagerLoadAssets: !0,
                                  questId: e,
                                  questContent: K.uF.QUEST_HOME_DESKTOP,
                                  contentPosition: t,
                                  rowIndex: Math.floor(t / 3),
                                  className: s$.d,
                                  sourceQuestContent: K.uF.QUEST_HOME_DESKTOP,
                              },
                              e,
                          ),
                      ),
                  }),
        ],
    });
};
var sY = s(379078),
    sJ = s(704554);
let sZ = {
    searchType: sY.n.FUZZY,
    searchStringGenerator: (e) =>
        [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(e5.Vq),
    sortType: sY.r.JARO_WINKLER,
    throttleMs: 200,
};
var sX = s(758836),
    s0 = s(613057),
    s1 = s(935824);
let s8 = r.createContext({});
function s6(e) {
    let { banner: t, children: s, header: l, withFullBleedBanner: a = !1 } = e,
        { onScroll: i, scrollerRef: o } = r.useContext(s8);
    return (0, n.jsxs)(sW.X.Provider, {
        value: o,
        children: [
            l,
            (0, n.jsxs)(w.A, {
                onScroll: i,
                ref: o,
                children: [
                    a && t,
                    (0, n.jsxs)(F.A, { className: s1.Jo, innerClassName: s1.FG, children: [!a && t, s] }),
                ],
            }),
        ],
    });
}
function s7(e) {
    let { selectedTab: t, onSelectTab: s, tabs: l, endContent: r } = e;
    return (0, n.jsx)(D.S, { selectedTabId: t, handleTransition: s, tabs: l, endContent: r, icon: h.r });
}
function s3(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: l } = (0, q.Z)({ location: tC.rE.QUEST_HOME_DESKTOP }),
        a = (0, d.bG)([C.A], () => C.A.useReducedMotion),
        i = (0, d.bG)([V.A], () => V.A.isFocused()),
        { ref: o, inViewport: c } = (0, e4.p)(),
        u = r.useRef(null);
    if (
        (r.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (i && c && !a)
                    ? u.current.paused && !a && c && i && u.current.play()
                    : u.current.pause());
        }, [a, c, i]),
        l)
    ) {
        let e = (0, W.TM)();
        return (0, n.jsx)(I.A, {
            ref: (e) => {
                (u.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: s,
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, n.jsx)("source", {
                src: e
                    ? "https://cdn.discordapp.com/assets/content/529e0aea2b87be4a587568435eaac176bf71b8dd46035db9c88acdee11187eb8.mp4"
                    : "https://cdn.discordapp.com/assets/content/fbd6cf99b9be35ba1d953fd30b81a35c9bd8edf7808b576ef6fc7c65cbc1d9a6.webm",
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, n.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/fff9144c814ffc3126fdcaf5ec5bc68eff6d09e23ac8af5a3fbe61b05970cda0.png",
        className: s,
        alt: "",
        onLoad: t,
    });
}
function s2(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, q.Z)({ location: tC.rE.QUEST_HOME_DESKTOP });
    return (0, n.jsxs)("div", {
        className: i()(s1.Tv, { [s1.lJ]: s }),
        children: [
            (0, n.jsx)(sq, {}),
            (0, n.jsx)("div", { className: i()(s1.nz, { [s1.ZZ]: s }) }),
            (0, n.jsx)(s3, { onLoadComplete: t, className: i()(s1.Fe, { [s1.H4]: s, [s1.Q8]: !s }) }),
        ],
    });
}
function s4(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, q.Z)({ location: tC.rE.QUEST_HOME_DESKTOP }),
        l = r.useCallback(() => {
            s ? window.open(ep.X7G.PAID_TERMS_ORBS) : window.open(z.A.getArticleURL(ep.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, n.jsx)(sv, {
        adContentId: s ? tC.yr : tC.uz,
        title: s ? em.intl.format(em.t.BCBIlp, {}) : em.intl.format(em.t.lmMBfy, {}),
        subtitle: s ? em.intl.format(em.t.U9FY0J, {}) : em.intl.string(em.t.oWCrBq),
        buttons: s
            ? (0, n.jsxs)(x.e, {
                  children: [
                      (0, n.jsx)(E.$, {
                          variant: "overlay-primary",
                          text: em.intl.string(em.t["1Wm127"]),
                          onClick: () =>
                              (0, O.Cz)({
                                  tab: sX.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: S.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, n.jsx)(E.$, {
                          variant: "overlay-secondary",
                          text: em.intl.string(em.t["7kTAgJ"]),
                          onClick: l,
                      }),
                  ],
              })
            : (0, n.jsx)(E.$, {
                  variant: "overlay-primary",
                  text: em.intl.string(em.t.hvVgAZ),
                  onClick: l,
                  icon: g.I,
                  iconPosition: "end",
              }),
        background: (0, n.jsx)(s2, { onAssetLoad: t }),
    });
}
function s5(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, previewAdCreativeId: l, hasSearchResults: r } = e,
        { questHomeHero: a, isLoading: o } = (0, X.lg)(l);
    return (0, n.jsx)("div", {
        className: i()(s1.iS, { [s1.R]: r }),
        children: o
            ? (0, n.jsx)(sG, {})
            : null != a
              ? (0, n.jsx)(sV, { hero: a, onQuestCtaClick: s })
              : (0, n.jsx)(s4, { onAssetLoad: t }),
    });
}
function s9(e) {
    let { onLoadComplete: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: i()(s1.BW, s1.rZ),
                alt: "",
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: i()(s1.BW, s1.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: i()(s1.BW, s1.rZ),
                alt: "",
            }),
        ],
    });
}
let le = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, o.zy)(),
        l = (0, o.W6)(),
        a = r.useMemo(() => (0, P.B)(s.pathname, ep.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        h = r.useMemo(() => new URLSearchParams(s.search).get(X.L1.AD_CREATIVE_IDS), [s.search]),
        x = (0, d.bG)([T.A], () => T.A.getState("quests")),
        {
            selectedTab: g,
            onSelectTab: C,
            tabs: I,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = Y.A.useField("tab"),
                l = (0, o.zy)(),
                n = (0, X.p5)(),
                { enabled: a } = Z.A8.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP });
            r.useEffect(() => {
                Y.A.getState().initializeFromUrl(l.search, n);
            }, [l.search, n]);
            let i = r.useCallback((e) => {
                Y.A.getState().setTab(e);
            }, []);
            return {
                tabs: r.useMemo(
                    () =>
                        [
                            { id: X.NC.ALL, label: a ? em.intl.string(em.t.Jt6u7B) : em.intl.string(em.t["0SzXmi"]) },
                            t
                                ? {
                                      id: X.NC.CLAIMED,
                                      label: a ? em.intl.string(em.t["3TVY/R"]) : em.intl.string(em.t.zyNYNB),
                                  }
                                : null,
                            t && n ? { id: X.NC.PREVIEW_TOOL, label: em.intl.string(em.t.BDUDau) } : null,
                        ].filter(e5.Vq),
                    [t, n, a],
                ),
                selectedTab: s,
                onSelectTab: i,
            };
        })({ withClaimedQuestsTab: !a }),
        {
            query: y,
            setQuery: Q,
            matchingQuestIds: F,
        } = (() => {
            let [e, t] = r.useState(""),
                [s, l] = r.useState(null),
                n = (0, d.yK)([el.A], () =>
                    (0, X.mn)(Array.from(el.A.quests.values()), { sortMethod: tC.kL.SUGGESTED }).map((e) => e.config),
                ),
                a = e.trim().toLowerCase(),
                i = "" !== a,
                o = r.useCallback(
                    (e) => {
                        l(
                            i
                                ? e
                                      .map((e) => {
                                          let { id: t } = e;
                                          return t;
                                      })
                                      .filter(e5.Vq)
                                : null,
                        );
                    },
                    [i],
                );
            return (0, sJ.RT)(a, n, o, sZ), { matchingQuestIds: s, query: e, setQuery: t };
        })();
    r.useLayoutEffect(() => {
        a && g === X.NC.CLAIMED && Y.A.setState({ tab: X.NC.ALL });
    }, [a, g]);
    let { onScroll: D } = (0, M.G)(),
        w = J.A.getState().getUtmCurrentContext(),
        V = si((e) => e.registerAssetLoad),
        W = r.useRef(w);
    r.useEffect(() => {
        W.current = w;
    }),
        r.useEffect(() => {
            let { current: e } = W;
            (0, b.x)({
                name: u.ImpressionNames.QUEST_HOME,
                type: u.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: g,
                },
            });
        }, [g]);
    let { enabled: z } = (0, q.Z)({ location: tC.rE.QUEST_HOME_DESKTOP });
    (0, R.HU)({ location: em.intl.string(em.t.JALI2K) });
    let et = r.useRef(null),
        { enabled: es } = Z.A8.useConfig({ location: tC.rE.QUEST_HOME_DESKTOP }),
        en = r.useRef(null),
        er = r.useCallback((e) => {
            en.current?.scrollToQuest(e);
        }, []),
        ea = r.useMemo(() => ((0, $.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        ei = r.useCallback(() => {
            (0, k.Y)({
                pageType: ep.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ep.JJy.ORBS_BALANCE_MENU,
                ctaObject: ep.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, O.Cz)({ tab: sX.G2.ORBS, analyticsLocations: [], analyticsSource: S.A.ORBS_BALANCE_MENU });
        }, []);
    r.useEffect(() => {
        (0, N.I)(ep.BVt.QUEST_HOME);
    }, []),
        r.useEffect(() => {
            H.trigger();
        }, []),
        r.useEffect(() => {
            if (null != x) return;
            let e = new URLSearchParams(s.search),
                n = e.get(X.L1.TAB);
            if (n === X.NC.PREVIEW_TOOL) {
                let t = e.get(X.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", ep.e$_.DEEP_LINK, {
                    type: s0.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: n },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === l.action && r?.type === "navigate" && t && n !== X.NC.PREVIEW_TOOL) {
                let t = (0, $.uJ)(s.hash) ? null : s.hash.substring(1),
                    l = e.get(X.L1.SORT),
                    r = e.get(X.L1.FILTER),
                    a = e.get(X.L1.AD_CREATIVE_IDS);
                A.A.openNativeAppModal("quests", ep.e$_.DEEP_LINK, {
                    type: s0.XK.QUEST_HOME,
                    params: { questId: (0, $.uJ)(t) ? void 0 : t, sort: l, filter: r, tab: n, adCreativeIds: a },
                });
            }
        }, [s.search, x, l.action, s.hash, t]),
        r.useEffect(() => {
            t && (0, L.Dr)(m.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eo = r.useCallback(() => {
            (0, e2.navigateToQuestHome)({ fromContent: K.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                G.default.track(ep.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: ee.Cy.VIEW_QUESTS,
                    click_id: (0, c.A)(),
                    is_targeted: !1,
                    ...(0, ee.fF)(K.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        ec = r.useCallback(
            (e) => {
                l.replace({ ...l.location, hash: void 0 }), et.current?.scrollToTop({ animate: !1 }), C(e);
            },
            [l, C],
        ),
        eu = r.useCallback(() => {
            Q("");
        }, [Q]);
    return (0, n.jsx)(so.M.Provider, {
        value: r.useMemo(() => ({ onAssetLoadComplete: V }), [V]),
        children: (0, n.jsx)(s8.Provider, {
            value: r.useMemo(() => ({ onScroll: D, scrollerRef: et }), [D, et]),
            children: (0, n.jsx)("div", {
                className: i()(s1.kL, { [s1.KY]: !t }),
                children: a
                    ? (0, n.jsx)(s6, {
                          withFullBleedBanner: !0,
                          header: (0, n.jsx)(s7, { selectedTab: g, onSelectTab: ec, tabs: I }),
                          banner: (0, n.jsx)(U.A, {
                              title: em.intl.string(em.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, n.jsx)(E.$, {
                                  variant: "overlay-primary",
                                  text: em.intl.string(em.t.GURBQl),
                                  onClick: eo,
                              }),
                              className: s1.Gj,
                              children: (0, n.jsx)(s9, { onLoadComplete: V }),
                          }),
                          children: (0, n.jsxs)("div", {
                              className: s1.kj,
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "heading-xl/semibold",
                                      children: em.intl.string(em.t.z8YP2A),
                                  }),
                                  (0, n.jsx)(j.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: em.intl.string(em.t.HdKh65),
                                  }),
                                  (0, n.jsx)(v.Q, {
                                      text: em.intl.string(em.t["1CdL8d"]),
                                      onClick: eo,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, n.jsx)(s6, {
                          header: (0, n.jsx)(s7, {
                              selectedTab: g,
                              onSelectTab: ec,
                              tabs: I,
                              endContent: (0, n.jsxs)(p.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      es &&
                                          (0, n.jsx)(_.I, {
                                              query: y,
                                              onChange: Q,
                                              placeholder: em.intl.string(em.t.y10TI2),
                                              onClear: eu,
                                              size: "sm",
                                          }),
                                      z &&
                                          (0, n.jsx)(B.SS, {
                                              analyticsPage: ep.liQ.GLOBAL_DISCOVERY_QUESTS,
                                              cardAlignment: B.cP.END,
                                              ctaText: em.intl.string(em.t["J+vlIR"]),
                                              ctaOnClick: ei,
                                          }),
                                  ],
                              }),
                          }),
                          banner:
                              g === X.NC.ALL &&
                              (0, n.jsx)(s5, {
                                  onAssetLoad: V,
                                  onQuestCtaClick: er,
                                  hasSearchResults: null != F,
                                  previewAdCreativeId: h,
                              }),
                          children:
                              g === X.NC.CLAIMED
                                  ? (0, n.jsx)(t$, { onSelectTab: ec })
                                  : g === X.NC.PREVIEW_TOOL
                                    ? (0, n.jsx)(e3, {})
                                    : es
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(sl, {
                                                    ref: en,
                                                    deepLinkedQuestId: ea,
                                                    hasSearchResults: null != F,
                                                }),
                                                null != F && (0, n.jsx)(sK, { matchingQuestIds: F }),
                                            ],
                                        })
                                      : (0, n.jsx)(tO, { ref: en }),
                      }),
            }),
        }),
    });
};
