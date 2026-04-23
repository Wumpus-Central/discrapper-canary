s.r(t), s.d(t, { default: () => sw }), s(323874), s(14289), s(35956);
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(873263),
    o = s(132500),
    c = s(110259),
    u = s(17928),
    d = s(554146),
    _ = s(577473),
    m = s(825484),
    h = s(821609),
    x = s(509434),
    f = s(534514),
    E = s(834730),
    g = s(123292),
    p = s(944791),
    C = s(775602),
    b = s(793574),
    j = s(139286),
    v = s(197111),
    A = s(10088),
    N = s(803375),
    T = s(726249),
    S = s(607470),
    L = s(826673),
    O = s(840251),
    I = s(688151);
let R = new O.E([], I.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var y = s(711111),
    Q = s(701508),
    H = s(979590),
    M = s(749638),
    F = s(783531),
    U = s(334465),
    P = s(318346),
    k = s(270051),
    w = s(70926),
    D = s(531685),
    q = s(954571),
    B = s(676279),
    V = s(975571),
    W = s(240248),
    G = s(507107),
    Y = s(631001),
    z = s(87549),
    $ = s(890687),
    K = s(590202);
s(321073);
var J = s(228366),
    Z = s(829219),
    X = s(859703);
s(667532);
var ee = s(783878),
    et = s(408278),
    es = s(663417),
    en = s(922016),
    el = s(624479),
    er = s(289873),
    ea = s(416052),
    ei = s(417098),
    eo = s(985018);
let ec = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, n.jsx)(ei.$T, {
        color: ei.Hv.DANGER,
        children: (0, n.jsx)("div", { children: null != s ? s : eo.intl.string(eo.t.ZErSg5) }),
    });
};
var eu = s(661531),
    ed = s(602853),
    e_ = s(817281),
    em = s(688810),
    eh = s(692798),
    ex = s(363195),
    ef = s(652215),
    eE = s(398876);
let eg = function () {
    let { analyticsLocations: e } = (0, em.Ay)(),
        t = (0, u.bG)([ex.A], () => ex.A.theme),
        s = l.useRef(null);
    l.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let r = (0, ed.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.LIGHT),
        a = (0, ed.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.DARKER),
        i = (0, ed.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.MIDNIGHT),
        o = l.useMemo(
            () => [
                { theme: ef.NJ8.LIGHT, label: eo.t.K2sFfo, color: r.hex() },
                { theme: ef.NJ8.DARKER, label: eo.t.b8Cei3, color: a.hex() },
                { theme: ef.NJ8.MIDNIGHT, label: eo.t.Do4ZJx, color: i.hex() },
            ],
            [r, a, i],
        ),
        c = l.useCallback(
            (t) => {
                (0, eh.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, e_.u_)({ theme: t });
            },
            [e],
        ),
        d = l.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, n.jsx)("div", {
        className: eE.N,
        children: (0, n.jsxs)("div", {
            className: eE.t7,
            children: [
                o.map((e) =>
                    (0, n.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: eE.Du,
                            onClick: () => c(e.theme),
                            "aria-label": eo.intl.string(e.label),
                            children: [
                                (0, n.jsx)("div", {
                                    className: `${eE.WT} ${t === e.theme ? eE.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, n.jsx)("span", { className: eE.i, children: eo.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, n.jsx)(et.K, {
                    onClick: d,
                    "aria-label": eo.intl.string(eo.t.yBZMsQ),
                    icon: es.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var ep = s(818348),
    eC = s(60857);
let eb = function (e) {
    let { questId: t, setQuestId: s, quest: r, refreshQuest: a } = e,
        [i, o] = l.useState(!1),
        [c, d] = l.useState(!1),
        _ = l.useRef(null),
        x = (0, $.pT)(),
        f = (0, u.bG)([X.A], () => (null != t ? X.A.getFetchQuestPreviewError(t) : null), [t]),
        E = (0, u.bG)([X.A], () => null != t && X.A.isFetchingQuestPreview(t), [t]),
        g = l.useMemo(() => {
            let e = x.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [x, t]),
        p = l.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, Z.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = l.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, Z.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        b = l.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, Z.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        j = l.useCallback(
            (e) => {
                (0, W.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, n.jsxs)("div", {
        className: eC.Fr,
        children: [
            (0, n.jsx)("div", {
                children: (0, n.jsx)("div", {
                    className: eC.Br,
                    children: (0, n.jsxs)("div", {
                        className: eC.bo,
                        children: [
                            (0, n.jsx)(eg, {}),
                            (0, n.jsxs)("div", {
                                className: eC.b8,
                                children: [
                                    (0, n.jsx)(
                                        ee.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: g,
                                            value: t,
                                            onSelectionChange: j,
                                            placeholder: eo.intl.string(eo.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, W.uJ)(t?.trim())) return e;
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
                                        `${t}-${r?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, n.jsx)(et.K, {
                                        onClick: a,
                                        "aria-label": eo.intl.string(eo.t.wzzjk9),
                                        icon: es.f,
                                        loading: E,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != r &&
                (0, n.jsx)("div", {
                    className: eC.in,
                    children: (0, n.jsxs)(m.e, {
                        className: eC.xv,
                        children: [
                            (0, n.jsx)(h.$, {
                                onClick: p,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.jQEfRT),
                            }),
                            (0, n.jsx)(h.$, {
                                onClick: C,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.taqkwK),
                            }),
                            (0, n.jsx)(h.$, {
                                onClick: b,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.cKSLr4),
                            }),
                            (0, n.jsx)(en.Y, {
                                targetElementRef: _,
                                shouldShow: c,
                                onRequestClose: () => d(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, n.jsx)("div", {
                                        className: eC.PP,
                                        children: (0, n.jsx)("div", {
                                            className: eC.sH,
                                            children: (0, n.jsx)(ea.A, {
                                                value: ep.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eo.intl.string(eo.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, n.jsx)(et.K, {
                                        buttonRef: _,
                                        onClick: () => d(!c),
                                        "aria-label": eo.intl.string(eo.t.rNGQfD),
                                        icon: el.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != f ? (0, n.jsx)(ec, { error: f }) : null,
            E ? (0, n.jsx)(er.y, {}) : null,
        ],
    });
};
var ej = s(761508),
    ev = s(797788);
let eA = () => (0, n.jsx)("div", { className: ev.y });
var eN = s(834615),
    eT = s(332544);
let eS = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eT.x3,
        children: (0, n.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: eT.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.L2mlUb),
                }),
                (0, n.jsx)(eN.A, { quest: t }),
            ],
        }),
    });
};
var eL = s(241124),
    eO = s(28082),
    eI = s(717695),
    eR = s(763578),
    ey = s(111113);
let eQ = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eT.x3,
        children: (0, n.jsxs)("div", {
            className: eR.wp,
            children: [
                (0, n.jsx)(f.D, {
                    className: eR.Oo,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.rjVPdM),
                }),
                (0, n.jsx)("div", {
                    className: eR.RE,
                    children: (0, n.jsx)("div", {
                        className: eR.Z,
                        children: (0, n.jsx)("div", {
                            className: ey.C3,
                            children: (0, n.jsx)(eI.A, {
                                children: (0, n.jsx)(eL.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, n.jsx)(eO.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eH = s(59350);
let eM = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eT.x3,
        children: (0, n.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: eT.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.gWinpQ),
                }),
                (0, n.jsx)("div", {
                    className: eT.YT,
                    children: (0, n.jsx)(eH.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var eF = s(160778),
    eU = s(330034);
let eP = function (e) {
    let { questId: t } = e;
    return (0, n.jsx)("div", {
        className: eT.x3,
        children: (0, n.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, n.jsx)(f.D, { variant: "heading-md/semibold", children: eo.intl.string(eo.t.IcljUu) }),
                (0, n.jsx)("div", {
                    className: eU.wu,
                    children: (0, n.jsx)("span", { className: eU.cy, children: eo.intl.string(eo.t.q97mEu) }),
                }),
                (0, n.jsx)("div", {
                    className: eU.oU,
                    children: (0, n.jsx)("div", {
                        className: eU.zx,
                        children: (0, n.jsx)("div", {
                            className: eU.Lj,
                            children: (0, n.jsx)("div", {
                                className: eU.n0,
                                children: (0, n.jsx)(eF.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ek = s(291922);
let ew = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eT.x3,
        children: (0, n.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: eT.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t["5wnpF3"]),
                }),
                (0, n.jsx)(ek.A, {
                    className: eT.d,
                    quest: t,
                    questContent: G.uF.QUEST_HOME_DESKTOP,
                    contentPosition: 0,
                    rowIndex: 0,
                    sourceQuestContent: G.uF.INTERNAL_PREVIEW_TOOL,
                }),
            ],
        }),
    });
};
var eD = s(939249),
    eq = s(97808),
    eB = s(778712),
    eV = s(87664),
    eW = s(287809),
    eG = s(427262),
    eY = s(198525),
    ez = s(66176);
let e$ = function (e) {
        let { quest: t } = e,
            [s, r] = l.useState(!1),
            i = l.useRef(null),
            o = (0, u.bG)([eW.default], () => eW.default.getCurrentUser()),
            c = eG.Ay.useName(o),
            d = (0, eV.A)(o?.id),
            _ = l.useCallback(
                (e) =>
                    (0, n.jsx)(eY.A, {
                        name: c,
                        quest: t,
                        memberListItemRef: i,
                        applicationStream: d,
                        ...e,
                        closePopout: () => {
                            r(!1);
                        },
                    }),
                [t, d, c],
            );
        return (0, n.jsx)("div", {
            className: eT.x3,
            children: (0, n.jsxs)("div", {
                className: eT.B0,
                children: [
                    (0, n.jsx)(f.D, {
                        className: ez.R_,
                        variant: "heading-md/semibold",
                        children: eo.intl.string(eo.t.jY7Zxg),
                    }),
                    (0, n.jsx)("div", { className: ez.$Q, children: eo.intl.string(eo.t.q3hbne) }),
                    (0, n.jsx)("div", {
                        className: ez.k0,
                        children: (0, n.jsx)(en.Y, {
                            targetElementRef: i,
                            renderPopout: _,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => r(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: en.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, n.jsx)("div", {
                                    ref: i,
                                    className: a()(ez.Tn, { [ez.wH]: s }),
                                    children: (0, n.jsx)(eD.D, {
                                        onClick: () => r(!s),
                                        tabIndex: 0,
                                        children: (0, n.jsxs)("div", {
                                            className: ez.lm,
                                            children: [
                                                (0, n.jsx)(eq.eu, {
                                                    size: eB._3.SIZE_32,
                                                    src: o?.getAvatarURL(void 0, 32),
                                                    status: ef.clD.ONLINE,
                                                    "aria-label": o?.username,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: ez.Fj,
                                                    children: [
                                                        (0, n.jsx)(E.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, n.jsx)(E.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: eo.intl.string(eo.t.b9w3bO),
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
    eK = (e) => {
        let { questId: t, selectedSections: s } = e,
            l = (0, u.bG)([X.A], () => X.A.getQuest(t));
        if (null != (0, u.bG)([X.A], () => X.A.getFetchQuestPreviewError(t)) || null == l) return null;
        let r = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                r("quest_bar") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eQ, { quest: l }), (0, n.jsx)(eA, {})] }),
                r("home_card") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ew, { quest: l }), (0, n.jsx)(eA, {})] }),
                r("share_embed") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eP, { questId: l.id }), (0, n.jsx)(eA, {})] }),
                r("channel_call_header") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eM, { quest: l }), (0, n.jsx)(eA, {})] }),
                r("members_list") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(e$, { quest: l }), (0, n.jsx)(eA, {})] }),
                r("activity_panel") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eS, { quest: l }), (0, n.jsx)(eA, {})] }),
            ],
        });
    };
var eJ = s(497275);
function eZ(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: r, controls: a } = e,
        i = [
            { value: "quest_bar", label: eo.intl.string(eo.t.rjVPdM) },
            { value: "share_embed", label: eo.intl.string(eo.t["D/gSWS"]) },
            { value: "home_card", label: eo.intl.string(eo.t["5wnpF3"]) },
            { value: "channel_call_header", label: eo.intl.string(eo.t.gWinpQ) },
            { value: "members_list", label: eo.intl.string(eo.t.wpYima) },
            { value: "activity_panel", label: eo.intl.string(eo.t.L2mlUb) },
        ],
        o = 0 === s.length || s.length === i.length,
        c = l.useMemo(() => (o ? "all" : 1 === s.length ? s[0] : "all"), [s, o]);
    return (0, n.jsxs)("div", {
        className: eJ.kL,
        children: [
            (0, n.jsx)(f.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: eo.intl.string(eo.t.BDUDau),
            }),
            (0, n.jsx)("div", { className: eJ.pf, children: a }),
            (0, n.jsxs)(ej.V, {
                type: "top",
                look: "brand",
                selectedItem: c,
                onItemSelect: (e) => {
                    r?.(e);
                },
                children: [
                    (0, n.jsx)(ej.V.Item, { id: "all", children: eo.intl.string(eo.t.Y9DnPa) }),
                    i.map((e) => (0, n.jsx)(ej.V.Item, { id: e.value, children: e.label }, e.value)),
                ],
            }),
            (0, n.jsx)("div", { className: eJ.tZ, children: (0, n.jsx)("div", { className: eJ.Qs, children: t }) }),
        ],
    });
}
function eX(e) {
    return new URLSearchParams(e).get($.L1.QUEST_ID);
}
let e0 = function (e) {
    let { questId: t } = e,
        { questId: s, setQuestId: r } = (function (e) {
            let t = (0, i.W6)(),
                [s, n] = l.useState(e),
                { search: r } = (0, i.zy)();
            return (
                l.useEffect(() => {
                    let t = eX(r);
                    null != t ? n(t) : null != e && n(e);
                }, [e, r]),
                l.useEffect(() => {
                    if (null == s || eX(r) === s) return;
                    let e = new URLSearchParams();
                    e.set($.L1.TAB, $.NC.PREVIEW_TOOL),
                        e.set($.L1.QUEST_ID, s),
                        t.push(`${ef.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, r]),
                { questId: s, setQuestId: n }
            );
        })(t),
        a = (0, u.bG)([X.A], () => (null != s ? X.A.getQuest(s) : void 0), [s]),
        o = (0, u.bG)([X.A], () => (null != s ? X.A.getQuestLoadedViaPreview(s) : null), [s]);
    l.useEffect(() => {
        null != s &&
            (0, Z.dQ)(s).then(() => {
                (0, Z.Gt)(s);
            });
    }, [s]),
        l.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === s && (0, Z.dQ)(s);
            };
            return (
                J.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    J.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]);
    let [c, d] = l.useState([]);
    return (0, n.jsx)(eZ, {
        controls: (0, n.jsx)(eb, {
            questId: s,
            setQuestId: r,
            quest: a,
            refreshQuest: () => {
                null != s && (0, Z.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, n.jsx)(eK, { questId: o?.id, selectedSections: c }) : null,
    });
};
var e1 = s(545986),
    e8 = s(203879),
    e5 = s(403362),
    e2 = s(167417),
    e4 = s(783977),
    e3 = s(651892),
    e7 = s(305866),
    e9 = s(915089),
    e6 = s(332733);
function te(e) {
    let { children: t, id: s } = e;
    return (0, n.jsx)(E.E, { className: e6.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let tt = function (e) {
    let { children: t, renderPopout: s } = e,
        r = (0, e9.GV)(),
        a = l.useRef(null);
    return (0, n.jsx)(en.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, n.jsx)(e7.l, { className: e6.S, "aria-labelledby": r, children: s(e, r) }),
        scrollBehavior: "close",
        targetElementRef: a,
        children: (e) => t(e, a),
    });
};
var ts = s(612539);
let tn = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        r = (0, $.Nb)(),
        a = l.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, n.jsx)(tt, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, n.jsxs)("div", {
                children: [
                    r.map((e, t) => {
                        let r = e.options.map((e) => ({ label: (0, e3.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, n.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    t > 0 && (0, n.jsx)("hr", { className: ts.B }),
                                    (0, n.jsx)(te, { id: i, children: e.heading }),
                                    (0, n.jsx)(e2.$, {
                                        "aria-labelledby": i,
                                        options: r,
                                        selectedValues: o,
                                        onChange: a(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, n.jsx)("hr", { className: ts.B }),
                    (0, n.jsx)("div", {
                        className: ts.W,
                        children: (0, n.jsx)(h.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: eo.intl.string(eo.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(h.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eo.intl.formatToPlainString(eo.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: e4.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tl = s(144228),
    tr = s(715482);
let ta = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: r } = e,
        a = l.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, $.XD)(),
        o = l.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, n.jsx)(tt, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(te, { id: t, children: eo.intl.string(eo.t.tZXJIS) }),
                    (0, n.jsx)(tl.z, {
                        options: o,
                        onChange: (e) => {
                            s(), a(e);
                        },
                        value: r,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(h.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, e3.Js)(r),
                icon: tr.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var ti = s(419354),
    to = s(535185),
    tc = s(717421),
    tu = s(927813),
    td = s(710969),
    t_ = s(121480);
let tm = 4 * tu.A.Millis.SECOND;
function th(e) {
    let { children: t } = e,
        s = l.useRef(null),
        [r, a] = l.useState(null),
        i = l.useCallback(() => {
            a(
                (function (e) {
                    if (null == e) return 1;
                    let t = Math.floor((e.clientWidth + 24) / 360);
                    return t > 0 ? t : 1;
                })(s.current),
            );
        }, [a]);
    return (
        (0, to.g)(s, i, [], { fireOnMount: !0 }),
        (0, n.jsx)("div", {
            className: t_.kL,
            ref: s,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== r && t(r),
        })
    );
}
let tx = l.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: r,
            isFetching: o,
            hasFetched: c,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        _ = (0, i.zy)(),
        m = l.useRef(""),
        [h, x] = l.useState(null),
        [g, p] = l.useState(0),
        [{ highlightAnimationProgress: C }, b] = (0, tc.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: tm },
        })),
        j = l.useCallback(
            (e) => {
                let t = (0, td.vc)(e, s, r);
                return null != t && (x(t.id), p((e) => e + 1), !0);
            },
            [s, r],
        );
    return (l.useImperativeHandle(t, () => ({ scrollToQuest: j }), [j]),
    l.useLayoutEffect(() => {
        if (0 === _.hash.length) {
            m.current = "";
            return;
        }
        o || !c || (_.hash !== m.current && j(_.hash.slice(1)) && (m.current = _.hash));
    }, [_.hash, o, c, j]),
    l.useLayoutEffect(() => {
        if (null == h) return;
        let e = document.getElementById(`quest-tile-${h}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            b({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || x(null);
                },
            }));
    }, [h, g, b]),
    o && 0 === s.length)
        ? (0, n.jsx)(er.y, { className: t_.u1 })
        : 0 === s.length
          ? (0, n.jsxs)("div", {
                className: t_.y7,
                children: [
                    (0, n.jsx)(f.D, {
                        variant: "heading-xl/semibold",
                        children: eo.intl.string(u ? eo.t.PBfFnx : eo.t.NqFP6z),
                    }),
                    (0, n.jsx)(E.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? eo.intl.format(eo.t.LdYS1H, { onClick: d }) : eo.intl.string(eo.t.LhD4yH),
                    }),
                ],
            })
          : (0, n.jsx)(th, {
                children: (e) =>
                    s.map((t, s) => {
                        let l = Math.floor(s / e),
                            r = h === t.id,
                            i = null != h && !r;
                        return (0, n.jsxs)(
                            ti.animated.div,
                            {
                                className: a()({ [t_.XB]: r }),
                                style: r
                                    ? {
                                          boxShadow: (0, ti.to)(
                                              [C.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                                              (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                                          ),
                                      }
                                    : i
                                      ? {
                                            opacity: (0, ti.to)(
                                                [C.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })],
                                                (e) => e,
                                            ),
                                        }
                                      : void 0,
                                children: [
                                    r && (0, n.jsx)("div", { className: t_.E4 }, g),
                                    (0, n.jsx)(ek.A, {
                                        quest: t,
                                        questContent: G.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: s,
                                        rowIndex: l,
                                        className: t_.d,
                                        sourceQuestContent: G.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var tf = s(458518),
    tE = s(654487),
    tg = s(65990);
let tp = [],
    tC = $.L1.SORT,
    tb = $.L1.FILTER,
    tj = l.forwardRef(function (e, t) {
        let s,
            r,
            a,
            o,
            c = l.useRef(null),
            [u, d] =
                ((s = (0, tf.o)()),
                (r = (0, i.W6)()),
                (a = l.useRef(null)),
                (o = l.useCallback(
                    (e) => {
                        let t = new URLSearchParams(a.current ?? s);
                        for (let [s, n] of Object.entries(e)) null == n ? t.delete(s) : t.set(s, n);
                        (a.current = t),
                            r.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                a.current = null;
                            });
                    },
                    [s, r],
                )),
                [s, o]),
            _ = l.useMemo(() => {
                var e;
                return (
                    (e = u.get(tC)),
                    ((0, W.uJ)(e) ? null : (Object.values(tE.kL).find((t) => t === e) ?? null)) ?? tE.kL.SUGGESTED
                );
            }, [u]),
            m = l.useMemo(
                () =>
                    (function (e) {
                        if ((0, W.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tE.WQ)(e))
                            .filter(e5.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(tb)) ?? tp,
                [u],
            ),
            h = l.useCallback(
                (e) => {
                    d({ [tC]: e });
                },
                [d],
            ),
            x = l.useCallback(
                (e) => {
                    d({
                        [tb]:
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
                quests: E,
                excludedQuests: g,
                isFetchingCurrentQuests: p,
                hasFetched: C,
            } = (0, $.Qh)(
                $.NC.ALL,
                l.useMemo(() => ({ sortMethod: _, filters: m }), [_, m]),
            ),
            b = l.useCallback(() => {
                x(tp);
            }, [x]),
            j = l.useRef(null),
            v = l.useRef(null),
            A = (0, i.zy)(),
            N = (0, i.W6)();
        return (
            l.useEffect(() => {
                "" !== A.hash &&
                    null != j.current &&
                    null != v.current &&
                    (_ !== j.current || m !== v.current) &&
                    N.replace({ ...A, hash: void 0 });
            }, [_, m, A, N]),
            l.useEffect(() => {
                j.current = _;
            }, [_]),
            l.useEffect(() => {
                v.current = m;
            }, [m]),
            (0, $.$P)({ selectedSortMethod: _, selectedFilters: m, numQuestsVisible: E.length }),
            l.useImperativeHandle(
                t,
                () => ({
                    resetSortingFiltering: () => {
                        b(), h(tE.kL.SUGGESTED);
                    },
                    scrollToQuest: (e) => {
                        c.current?.scrollToQuest(e);
                    },
                }),
                [b, h],
            ),
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)("div", {
                        className: tg.Mj,
                        children: [
                            (0, n.jsx)(f.D, { variant: "heading-lg/medium", children: eo.intl.string(eo.t.giYD00) }),
                            (0, n.jsxs)("div", {
                                className: tg.Nf,
                                children: [
                                    (0, n.jsx)(ta, { onChange: h, optionClassName: tg.Uq, selectedSortMethod: _ }),
                                    (0, n.jsx)(tn, { onChange: x, selectedFilters: m }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(tx, {
                        ref: c,
                        quests: E,
                        excludedQuests: g,
                        isFetching: p,
                        hasFetched: C,
                        hasFiltersApplied: m.length > 0,
                        onClearFilters: b,
                    }),
                ],
            })
        );
    });
var tv = s(575593),
    tA = s(440703),
    tN = s(462887),
    tT = s(187322),
    tS = s(765671),
    tL = s(736653),
    tO = s(162232),
    tI = s(859387),
    tR = s(734736),
    ty = s(303136),
    tQ = s(265234),
    tH = s(181713);
let tM = (e) => {
    let { className: t, isAnimated: s = !1, questName: l } = e,
        r = s ? tH.A : tH.A + "?format=webp";
    return (0, n.jsx)("div", {
        className: a()(tQ.k, t),
        children: s
            ? (0, n.jsx)(ty.A, {
                  preload: "auto",
                  className: tQ.L,
                  children: (0, n.jsx)("source", { src: r, type: "video/webm" }),
              })
            : (0, n.jsx)("img", { className: tQ.L, src: r, alt: l }),
    });
};
var tF = s(57718),
    tU = s(659249);
let tP = (0, l.memo)(function (e) {
    let { quest: t } = e,
        [s, r] = (0, l.useState)(!1),
        [i, o] = (0, l.useState)(24),
        [c, d] = (0, l.useState)(!1),
        _ = (0, l.useRef)(null),
        m = (0, l.useRef)(null),
        h = (0, l.useRef)(null),
        x = (0, u.bG)([eW.default], () => eW.default.getCurrentUser()),
        { ref: g, height: p = 0 } = (0, tS.Ay)(),
        C = (0, tL.Ay)(),
        b = (0, $.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        j = t.userStatus?.claimedTier ?? 0,
        v = t.config.rewards[j],
        A = v?.type === tA.l.FRACTIONAL_PREMIUM,
        N = v?.type === tA.l.COLLECTIBLE,
        T = v?.type === tA.l.VIRTUAL_CURRENCY,
        L = v?.collectibleProduct?.items?.[0],
        O = L?.type === tv.R.AVATAR_DECORATION ? L : null,
        I = l.useMemo(
            () =>
                null == v
                    ? null
                    : !0 === T && t.userStatus?.orbQuantityClaimed != null
                      ? eo.intl.format(eo.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : v.name,
            [v, T, t],
        );
    (0, tS.i4)(_, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == _.current || null == h.current) return;
        let s = _.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect();
        o((n.top - s.top - l.height) / 2);
    });
    let R = (0, tN.M)(C),
        y = l.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        Q = l.useMemo(() => (0, tI.tW)(t, tI.fY.REWARD), [t]),
        H = s ? p + 8 : 0,
        { content_position: M, row_index: F, ...U } = (0, K.fF)(G.uF.TROPHY_CASE_CARD),
        P = () => {
            r(!0), q.default.track(ef.HAw.QUEST_HOVER, { quest_id: t.id, ...U });
        },
        k = () => {
            r(!1);
        },
        w = (e) => {
            d(!0), q.default.track(ef.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == v || c
        ? null
        : (0, n.jsx)(tT.vN, {
              children: (0, n.jsxs)("div", {
                  ref: _,
                  tabIndex: 0,
                  onFocus: P,
                  onBlur: k,
                  onMouseEnter: P,
                  onMouseLeave: k,
                  className: a()(tU.kL, { [tU.yo]: s }),
                  children: [
                      null != x &&
                          N &&
                          null != O &&
                          (0, n.jsx)("div", {
                              ref: h,
                              className: tU.FX,
                              style: { top: i },
                              children: (0, n.jsx)(tO.A, {
                                  avatarDecorationOverride: O,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      A
                          ? (0, n.jsx)(tR.A, { className: tU.Sl })
                          : T
                            ? (0, n.jsx)(tM, {
                                  className: tU.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : Q.isAnimated
                              ? (0, n.jsx)(S.A, {
                                    className: tU.JU,
                                    autoPlay: !1,
                                    children: (0, n.jsx)("source", {
                                        src: Q.url,
                                        type: Q.mimetype ?? void 0,
                                        onError: () => w(Q.url),
                                    }),
                                })
                              : (0, n.jsx)("img", {
                                    className: tU.Sl,
                                    src: Q.url,
                                    alt: t.config.messages.questName,
                                    onError: () => w(Q.url),
                                }),
                      (0, n.jsx)("div", { className: a()(tU.Lw, { [tU.en]: R, [tU.So]: !R }) }),
                      (0, n.jsx)("div", {
                          ref: m,
                          className: tU.r$,
                          style: { transform: `translateY(-${H}px)` },
                          children: (0, n.jsx)(tF.Ay, {
                              logotypeClassName: a()(tU.wm, { [tU.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          ref: g,
                          className: tU.zH,
                          children: [
                              (0, n.jsx)(f.D, {
                                  className: tU.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eo.intl.format(eo.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, n.jsx)(E.E, {
                                  variant: "text-sm/medium",
                                  color: R ? "text-muted" : "always-white",
                                  style: { opacity: R ? 1 : 0.75 },
                                  children: eo.intl.format(eo.t["kXVcV+"], { reward: I, claimedDate: b }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var tk = s(396478);
function tw(e) {
    let { onClick: t } = e,
        l = (0, tL.Ay)();
    return (0, n.jsxs)(tk.pp, {
        theme: l,
        children: [
            (0, n.jsx)(tk.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, n.jsx)(tk.SG, { note: eo.intl.format(eo.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var tD = s(975424);
function tq(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: s, isFetchingClaimedQuests: l } = (0, $.Iq)();
    return l && 0 === s.length
        ? (0, n.jsx)(er.y, { className: tD.u })
        : 0 === s.length
          ? (0, n.jsx)(tw, { onClick: () => t($.NC.ALL) })
          : (0, n.jsx)("div", {
                className: tD.U,
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, n.jsx)(tP, { quest: e }, e.id)),
            });
}
var tB = s(353640),
    tV = s(121894),
    tW = s(851936);
let tG = (0, tB.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, tW.L)({ location: tE.rE.QUEST_HOME_DESKTOP });
        if (s.info === ep.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, tV.r)(() => e(l));
    },
}));
var tY = s(516226),
    tz = s(323889),
    t$ = s(331322),
    tK = s(561844),
    tJ = s(901406),
    tZ = s(415441),
    tX = s(73473),
    t0 = s(139384),
    t1 = s(43990),
    t8 = s(770178),
    t5 = s(14233);
let t2 = l.forwardRef(function (e, t) {
    let { topContent: s, title: r, subtitle: i, buttons: o, background: c, className: u } = e,
        [d, _] = l.useState("display-lg"),
        m = l.useCallback((e) => {
            _(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        h = (0, t8.w)(m, [], { fireOnMount: !0 });
    return (0, n.jsx)(t1.N, {
        theme: ef.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, n.jsx)("div", {
                className: a()(t5.iE, e, u),
                ref: (e) => {
                    (h.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, n.jsxs)("div", {
                    className: t5.FG,
                    children: [
                        (0, n.jsxs)(t$.B, {
                            className: t5.Qs,
                            direction: "vertical",
                            justify: null != s ? "space-between" : "end",
                            children: [
                                s,
                                (0, n.jsxs)(t$.B, {
                                    className: t5.yp,
                                    gap: 16,
                                    children: [
                                        (0, n.jsxs)(t$.B, {
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(f.D, {
                                                    color: "text-strong",
                                                    variant: d,
                                                    className: t5.DD,
                                                    children: r,
                                                }),
                                                (0, n.jsx)(E.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: t5.VA,
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                        o,
                                    ],
                                }),
                            ],
                        }),
                        c,
                    ],
                }),
            }),
    });
});
var t4 = s(194526),
    t3 = s(548411),
    t7 = s(554830),
    t9 = s(689175),
    t6 = s(522403);
function se(e) {
    let {
            children: t,
            className: s,
            scrollIncrement: r,
            itemSelector: i = "[data-scroll-target]",
            maskWidth: o = 48,
        } = e,
        c = l.useRef(null),
        d = l.useRef(null),
        [_, m] = l.useState(!1),
        [h, x] = l.useState(!1),
        f = (0, u.bG)([C.A], () => C.A.useReducedMotion) ? "auto" : "smooth",
        E = l.useCallback(() => {
            let e = c.current?.getScrollerNode();
            null != e && (m(e.scrollLeft > 0), x(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []),
        g = l.useCallback(() => {
            E();
        }, [E]),
        p = l.useCallback(() => {
            let e = c.current?.getScrollerNode();
            if (null == e) return;
            let t = e.scrollLeft - r,
                s = t < r ? 0 : t;
            e.scrollTo({ left: s, behavior: f });
        }, [r, f]),
        b = l.useCallback(() => {
            let e = c.current?.getScrollerNode();
            if (null == e) return;
            let t = e.scrollWidth - e.clientWidth,
                s = e.scrollLeft + r,
                n = s > t - r ? t : s;
            e.scrollTo({ left: n, behavior: f });
        }, [r, f]),
        j = l.useCallback(
            (e) => {
                let t = c.current?.getScrollerNode();
                if (null == t) return;
                let s = e.target.closest(i);
                if (null == s) return;
                let n = s.offsetLeft - o,
                    l = s.offsetLeft + s.offsetWidth + o,
                    r = t.scrollLeft,
                    a = r + t.clientWidth;
                n < r
                    ? t.scrollTo({ left: n, behavior: f })
                    : l > a && t.scrollTo({ left: l - t.clientWidth, behavior: f });
            },
            [i, o, f],
        );
    return (
        (0, to.g)(d, E, [], { fireOnMount: !0 }),
        (0, n.jsxs)("div", {
            className: a()(s, t6.m7),
            ref: d,
            style: { "--custom-scroller-mask-width": `${o}px` },
            children: [
                (0, n.jsx)(eD.D, {
                    "aria-label": eo.intl.string(eo.t.vgfxaA),
                    className: a()(t6.k9, t6.RW, { [t6.Q2]: _ }),
                    onClick: p,
                    tabIndex: _ ? 0 : -1,
                    "aria-hidden": !_,
                    children: (0, n.jsx)(t3.Z, { color: eu.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
                }),
                (0, n.jsx)(eD.D, {
                    "aria-label": eo.intl.string(eo.t.XiOHRX),
                    className: a()(t6.k9, t6.K3, { [t6.Q2]: h }),
                    onClick: b,
                    tabIndex: h ? 0 : -1,
                    "aria-hidden": !h,
                    children: (0, n.jsx)(t7.K, { color: eu.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
                }),
                (0, n.jsx)("div", {
                    className: a()(t6.$u, { [t6.sF]: _, [t6.RC]: h }),
                    children: (0, n.jsx)(t9.zC, {
                        ref: c,
                        orientation: "horizontal",
                        onScroll: g,
                        onFocusCapture: j,
                        children: t,
                    }),
                }),
            ],
        })
    );
}
var st = s(731355),
    ss = s(621466),
    sn = s(508770),
    sl = s(406810),
    sr = s(628284),
    sa = s(65154),
    si = s(687966),
    so = s(496431),
    sc = s(975807),
    su = s(58703),
    sd = s(18437),
    s_ = s(801365),
    sm = s(814793),
    sh = s(453384),
    sx = s(646764),
    sf = s(398025),
    sE = s(469083);
function sg(e) {
    let [t, s] = l.useState(!1),
        n = l.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        r = l.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: r, onFocus: n, onBlur: r } };
}
function sp(e) {
    let { hero: t, contentPosition: s } = e,
        r = l.useRef(null),
        { isHovering: i, hoverProps: o } = sg(
            l.useCallback(
                (e) => {
                    (0, tK.Qg)({
                        adContentId: t.id,
                        adCreativeType: tz.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: G.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, K.jO)(G.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    l.useEffect(() => {
        let e = r.current;
        (0, ss.vq)(e, HTMLVideoElement) && (i ? ((e.currentTime = 0), e.play().catch(ep.tE)) : e.pause());
    }, [i]);
    let { hoverSpring: c } = (0, tc.z)({ hoverSpring: +!!i, config: ti.config.gentle });
    return (0, n.jsxs)("div", {
        className: a()(sE.FW, sE.Bm),
        ...o,
        children: [
            (0, n.jsx)("div", {
                className: sE.Ve,
                children: (0, n.jsx)(tZ.N, {
                    showVideo: !0,
                    assetRef: r,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: a()(sE.pv, sE.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: a()(sE.pv, sE.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, n.jsx)(ti.animated.div, {
                className: sE.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(h.$, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, sc.A)(t.cta.url),
                            (0, tK.vK)({
                                adContentId: t.id,
                                adCreativeType: tz.p.QUEST_HOME_HERO,
                                questContent: G.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: K.Cy.OPEN_GAME_LINK,
                                questContentPosition: s,
                                sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function sC(e) {
    let { quest: t, onQuestCtaClick: s, contentPosition: r } = e,
        i = (0, tL.Ay)(),
        o = l.useMemo(() => (0, tI.tW)(t, tI.fY.LOGO_TYPE, (0, tN.M)(i) ? ef.NJ8.DARK : ef.NJ8.LIGHT).url, [t, i]),
        c = l.useMemo(() => new Date(t.config.expiresAt), [t.config.expiresAt]),
        { days: u, hours: d, minutes: _, seconds: m } = (0, so.A)(c, tu.A.Millis.MINUTE),
        x = l.useMemo(
            () =>
                (0, su.uN)(
                    { days: u, hours: d, minutes: _, seconds: m },
                    { days: eo.t["Ux/De1"], hours: eo.t.Lzd5Ie, minutes: eo.t.odmpbP },
                ),
            [u, d, _, m],
        ),
        f = l.useMemo(() => (0, s_.mq)(t.config), [t.config]),
        g = l.useMemo(
            () =>
                (function (e) {
                    switch ((0, e3.xv)(e).type) {
                        case tA.l.IN_GAME:
                            return eo.intl.string(eo.t["O/J2kr"]);
                        case tA.l.COLLECTIBLE:
                            return eo.intl.string(eo.t.Jg17Ut);
                        case tA.l.VIRTUAL_CURRENCY:
                            return eo.intl.string(eo.t.ElYQFS);
                        default:
                            return (0, s_.mq)(e);
                    }
                })(t.config),
            [t.config],
        ),
        { completedRatio: p, completedRatioDisplay: C } = (0, $.O9)(t),
        b = l.useMemo(() => (0, s_._Z)(t.config), [t.config]),
        j = (0, sd.Ut)(),
        v = (0, sd.u0)(),
        { isHovering: A, hoverProps: N } = sg(
            l.useCallback(
                (e) => {
                    v({
                        questId: t.id,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: G.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, K.jO)(G.uF.QUEST_HOME_HERO_SHELF),
                            content_position: r,
                        },
                        sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [v, t.id, r],
            ),
        ),
        { hoverSpring: T } = (0, tc.z)({ hoverSpring: +!!A, config: ti.config.gentle });
    return (0, n.jsxs)("div", {
        className: a()(sE.FW, sE.$R),
        ...N,
        children: [
            (0, n.jsxs)(t$.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, n.jsx)(sn.E, { type: { text: g }, variant: "expressive" }),
                    (0, n.jsx)(ti.animated.div, {
                        style: { opacity: (0, sf.a)(T.to([0, 1], [1, 0])) },
                        children: (0, n.jsx)(sn.E, { type: { text: x }, icon: sl.O }),
                    }),
                ],
            }),
            (0, n.jsx)(ti.animated.div, {
                className: sE.Tr,
                style: { transform: T.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, n.jsx)(sh.A, {
                    percentComplete: p,
                    overlayText: A && null != b ? `${b}` : void 0,
                    size: 100,
                    children: (0, n.jsx)(sx.A, {
                        quest: t,
                        questContent: G.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: A,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, n.jsx)(ti.animated.div, {
                className: sE.tw,
                style: {
                    opacity: (0, sf.a)(T.to([0, 1], [1, 0])),
                    transform: T.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, n.jsxs)(t$.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)("div", {
                            className: sE.aP,
                            children: (0, n.jsx)("img", { src: o, alt: t.config.messages.gameTitle, className: sE.rC }),
                        }),
                        (0, n.jsxs)(t$.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(E.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    className: sE.Ht,
                                    children: f,
                                }),
                                (0, n.jsxs)(t$.B, {
                                    align: "start",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, n.jsxs)(t$.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, n.jsx)(sr.y, { size: "xs", color: eu.A.colors.ICON_MUTED.css }),
                                                (0, n.jsx)(E.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.config.messages.gamePublisher,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)(t$.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, sm.pv)(t.config) === st.Z.VIDEO
                                                    ? (0, n.jsx)(sa.S, {
                                                          size: "xs",
                                                          color: eu.A.colors.ICON_MUTED.css,
                                                      })
                                                    : (0, n.jsx)(si._, {
                                                          size: "xs",
                                                          color: eu.A.colors.ICON_MUTED.css,
                                                      }),
                                                (0, n.jsx)(E.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: C,
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
            (0, n.jsx)(ti.animated.div, {
                className: sE.um,
                style: { transform: T.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(h.$, {
                    fullWidth: !0,
                    onClick: () => {
                        s(t.id),
                            j({
                                questId: t.id,
                                questContent: G.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: K.Cy.VIEW_QUESTS,
                                questContentPosition: r,
                                sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: eo.intl.string(eo.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var sb = s(648731);
function sj(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: l } = e;
    return (0, n.jsx)(se, {
        className: sb.v,
        scrollIncrement: 320,
        children: (0, n.jsxs)(t$.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, n.jsx)(tX.R, {
                    adContentId: t.id,
                    adCreativeType: tz.p.QUEST_HOME_HERO,
                    questContent: G.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, n.jsx)(sp, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, t) =>
                    (0, n.jsx)(
                        tX.R,
                        {
                            questOrQuests: e,
                            questContent: G.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: t + 1,
                            sourceQuestContent: G.uF.QUEST_HOME_HERO_SHELF,
                            children: (s) =>
                                (0, n.jsx)("div", {
                                    ref: (e) => {
                                        s.current = e;
                                    },
                                    children: (0, n.jsx)(sC, { quest: e, onQuestCtaClick: l, contentPosition: t + 1 }),
                                }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
}
var sv = s(95115);
function sA() {
    return (0, n.jsx)("div", { className: sv.Np });
}
function sN(e) {
    let { heroImage: t, heroVideo: s } = e,
        r = l.useRef(null);
    (0, t0.A)(r, tE.rE.QUEST_HOME_DESKTOP);
    let i = l.useMemo(() => (null != s ? (0, tI.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, n.jsxs)("div", {
              className: sv.Tv,
              children: [
                  (0, n.jsx)(sA, {}),
                  (0, n.jsx)("div", {
                      className: sv.LO,
                      children: (0, n.jsx)("img", { className: sv.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: a()(sv.LO, sv.jx, sv.hw),
                      children: (0, n.jsx)("img", { className: sv.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: a()(sv.LO, sv.jx, sv.Co),
                      children: (0, n.jsx)("img", { className: sv.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: sv.Tv,
              children: [
                  (0, n.jsx)(sA, {}),
                  (0, n.jsx)("div", {
                      className: sv.LO,
                      children: (0, n.jsx)(tZ.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: r,
                          imageAsset: {
                              alt: "",
                              className: sv.LY,
                              asset: { url: i, mimetype: (0, tI.vm)(i), isAnimated: !1 },
                              assetId: i,
                          },
                          videoAsset: {
                              alt: "",
                              className: sv.LY,
                              asset: { url: s, mimetype: (0, tI.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function sT(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        r = (0, u.bG)([X.A], () => X.A.quests),
        { shelfQuests: a, isShelfEnabled: i } = (0, $.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, t4.I)();
    l.useEffect(() => {
        o();
    }, [o]);
    let c = l.useMemo(() => t.questIds?.find((e) => r.has(e)), [r, t.questIds]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tX.R, {
                adContentId: t.id,
                adCreativeType: tz.p.QUEST_HOME_HERO,
                questContent: G.uF.QUEST_HOME_HERO,
                sourceQuestContent: G.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, n.jsx)(t2, {
                        ref: e,
                        topContent: (0, n.jsxs)(t$.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, n.jsx)("img", { src: t.sponsorImage, alt: "", className: sv.wm }),
                                (0, n.jsx)(E.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: sv.yu,
                                    children: eo.intl.string(eo.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, n.jsxs)(m.e, {
                            children: [
                                (0, n.jsx)(h.$, {
                                    onClick: () => {
                                        (0, tJ._Q)(
                                            { adContentId: t.id, adCreativeType: tz.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: G.uF.QUEST_HOME_HERO,
                                                ctaContent: K.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: G.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !i &&
                                    null != c &&
                                    (0, n.jsx)(h.$, {
                                        onClick: () => {
                                            s(c),
                                                (0, tK.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: tz.p.QUEST_HOME_HERO,
                                                    questContent: G.uF.QUEST_HOME_HERO,
                                                    questContentCTA: K.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: G.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: eo.intl.string(eo.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, n.jsx)(sN, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, n.jsx)(sj, { hero: t, shelfQuests: a, onQuestCtaClick: s }),
        ],
    });
}
function sS() {
    return (0, n.jsx)("div", { className: a()(t5.iE, t5.FG, t5.B3), children: (0, n.jsx)(er.y, {}) });
}
var sL = s(321503),
    sO = s(758836),
    sI = s(613057),
    sR = s(935824);
let sy = l.createContext({});
function sQ(e) {
    let { banner: t, children: s, header: r, withFullBleedBanner: a = !1 } = e,
        { onScroll: i, scrollerRef: o } = l.useContext(sy);
    return (0, n.jsxs)(sL.X.Provider, {
        value: o,
        children: [
            r,
            (0, n.jsxs)(F.A, {
                onScroll: i,
                ref: o,
                children: [
                    a && t,
                    (0, n.jsxs)(H.A, { className: sR.Jo, innerClassName: sR.FG, children: [!a && t, s] }),
                ],
            }),
        ],
    });
}
function sH(e) {
    let { selectedTab: t, onSelectTab: s, tabs: l, endContent: r } = e;
    return (0, n.jsx)(M.S, { selectedTabId: t, handleTransition: s, tabs: l, endContent: r, icon: _.r });
}
function sM(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: r } = (0, k.Z)({ location: tE.rE.QUEST_HOME_DESKTOP }),
        a = (0, u.bG)([C.A], () => C.A.useReducedMotion),
        i = (0, u.bG)([D.A], () => D.A.isFocused()),
        { ref: o, inViewport: c } = (0, e8.p)(),
        d = l.useRef(null);
    if (
        (l.useEffect(() => {
            d?.current != null &&
                (d.current.paused || (i && c && !a)
                    ? d.current.paused && !a && c && i && d.current.play()
                    : d.current.pause());
        }, [a, c, i]),
        r)
    ) {
        let e = (0, B.TM)();
        return (0, n.jsx)(S.A, {
            ref: (e) => {
                (d.current = e), (o.current = e);
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
function sF(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, k.Z)({ location: tE.rE.QUEST_HOME_DESKTOP });
    return (0, n.jsxs)("div", {
        className: a()(sR.Tv, { [sR.lJ]: s }),
        children: [
            (0, n.jsx)(sA, {}),
            (0, n.jsx)("div", { className: a()(sR.nz, { [sR.ZZ]: s }) }),
            (0, n.jsx)(sM, { onLoadComplete: t, className: a()(sR.Fe, { [sR.H4]: s, [sR.Q8]: !s }) }),
        ],
    });
}
function sU(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, k.Z)({ location: tE.rE.QUEST_HOME_DESKTOP }),
        r = l.useCallback(() => {
            s ? window.open(ef.X7G.PAID_TERMS_ORBS) : window.open(V.A.getArticleURL(ef.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, n.jsx)(t2, {
        title: s ? eo.intl.format(eo.t.BCBIlp, {}) : eo.intl.format(eo.t.lmMBfy, {}),
        subtitle: s ? eo.intl.format(eo.t.U9FY0J, {}) : eo.intl.string(eo.t.oWCrBq),
        buttons: s
            ? (0, n.jsxs)(m.e, {
                  children: [
                      (0, n.jsx)(h.$, {
                          variant: "overlay-primary",
                          text: eo.intl.string(eo.t["1Wm127"]),
                          onClick: () =>
                              (0, N.Cz)({
                                  tab: sO.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: b.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, n.jsx)(h.$, {
                          variant: "overlay-secondary",
                          text: eo.intl.string(eo.t["7kTAgJ"]),
                          onClick: r,
                      }),
                  ],
              })
            : (0, n.jsx)(h.$, {
                  variant: "overlay-primary",
                  text: eo.intl.string(eo.t.hvVgAZ),
                  onClick: r,
                  icon: x.I,
                  iconPosition: "end",
              }),
        background: (0, n.jsx)(sF, { onAssetLoad: t }),
    });
}
function sP(e) {
    let { onAssetLoad: t, onQuestCtaClick: s } = e,
        { questHomeHero: l, isLoading: r } = (0, $.lg)();
    return r
        ? (0, n.jsx)(sS, {})
        : null != l
          ? (0, n.jsx)(sT, { hero: l, onQuestCtaClick: s })
          : (0, n.jsx)(sU, { onAssetLoad: t });
}
function sk(e) {
    let { onLoadComplete: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: a()(sR.BW, sR.rZ),
                alt: "",
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: a()(sR.BW, sR.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: a()(sR.BW, sR.rZ),
                alt: "",
            }),
        ],
    });
}
let sw = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, i.zy)(),
        r = (0, i.W6)(),
        _ = l.useMemo(() => (0, U.B)(s.pathname, ef.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        m = (0, u.bG)([A.A], () => A.A.getState("quests")),
        {
            selectedTab: x,
            onSelectTab: C,
            tabs: S,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = Y.A.useField("tab"),
                n = (0, i.zy)(),
                r = (0, $.p5)();
            l.useEffect(() => {
                Y.A.getState().initializeFromUrl(n.search, r);
            }, [n.search, r]);
            let a = l.useCallback((e) => {
                Y.A.getState().setTab(e);
            }, []);
            return {
                tabs: l.useMemo(
                    () =>
                        [
                            { id: $.NC.ALL, label: eo.intl.string(eo.t["0SzXmi"]) },
                            t ? { id: $.NC.CLAIMED, label: eo.intl.string(eo.t.zyNYNB) } : null,
                            t && r ? { id: $.NC.PREVIEW_TOOL, label: eo.intl.string(eo.t.BDUDau) } : null,
                        ].filter(e5.Vq),
                    [t, r],
                ),
                selectedTab: s,
                onSelectTab: a,
            };
        })({ withClaimedQuestsTab: !_ });
    l.useLayoutEffect(() => {
        _ && x === $.NC.CLAIMED && Y.A.setState({ tab: $.NC.ALL });
    }, [_, x]);
    let { onScroll: O } = (0, y.G)(),
        I = z.A.getState().getUtmCurrentContext(),
        H = tG((e) => e.registerAssetLoad),
        M = l.useRef(I);
    l.useEffect(() => {
        M.current = I;
    }),
        l.useEffect(() => {
            let { current: e } = M;
            (0, j.x)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: x,
                },
            });
        }, [x]);
    let { enabled: F } = (0, k.Z)({ location: tE.rE.QUEST_HOME_DESKTOP });
    (0, T.HU)({ location: eo.intl.string(eo.t.JALI2K) });
    let D = l.useRef(null),
        B = l.useRef(null),
        V = l.useCallback((e) => {
            B.current?.resetSortingFiltering(),
                requestAnimationFrame(() => {
                    B.current?.scrollToQuest(e);
                });
        }, []),
        J = l.useCallback(() => {
            (0, P.Y)({
                pageType: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ef.JJy.ORBS_BALANCE_MENU,
                ctaObject: ef.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, N.Cz)({ tab: sO.G2.ORBS, analyticsLocations: [], analyticsSource: b.A.ORBS_BALANCE_MENU });
        }, []);
    l.useEffect(() => {
        (0, p.I)(ef.BVt.QUEST_HOME);
    }, []),
        l.useEffect(() => {
            R.trigger();
        }, []),
        l.useEffect(() => {
            if (null != m) return;
            let e = new URLSearchParams(s.search),
                n = e.get($.L1.TAB);
            if (n === $.NC.PREVIEW_TOOL) {
                let t = e.get($.L1.QUEST_ID);
                v.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: sI.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: n },
                });
                return;
            }
            let l = performance.getEntriesByType("navigation")[0];
            if ("POP" === r.action && l?.type === "navigate" && t && n !== $.NC.PREVIEW_TOOL) {
                let t = (0, W.uJ)(s.hash) ? null : s.hash.substring(1),
                    l = e.get($.L1.SORT),
                    r = e.get($.L1.FILTER);
                v.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: sI.XK.QUEST_HOME,
                    params: { questId: (0, W.uJ)(t) ? void 0 : t, sort: l, filter: r, tab: n },
                });
            }
        }, [s.search, m, r.action, s.hash, t]),
        l.useEffect(() => {
            t && (0, L.Dr)(d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let Z = l.useCallback(() => {
            (0, e1.navigateToQuestHome)({ fromContent: G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                q.default.track(ef.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: K.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, K.fF)(G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        X = l.useCallback(
            (e) => {
                r.replace({ ...r.location, hash: void 0 }), D.current?.scrollToTop({ animate: !1 }), C(e);
            },
            [r, C],
        );
    return (0, n.jsx)(tY.M.Provider, {
        value: { onAssetLoadComplete: H },
        children: (0, n.jsx)(sy.Provider, {
            value: l.useMemo(() => ({ onScroll: O, scrollerRef: D }), [O, D]),
            children: (0, n.jsx)("div", {
                className: a()(sR.kL, { [sR.KY]: !t }),
                children: _
                    ? (0, n.jsx)(sQ, {
                          withFullBleedBanner: !0,
                          header: (0, n.jsx)(sH, { selectedTab: x, onSelectTab: X, tabs: S }),
                          banner: (0, n.jsx)(Q.A, {
                              title: eo.intl.string(eo.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, n.jsx)(h.$, {
                                  variant: "overlay-primary",
                                  text: eo.intl.string(eo.t.GURBQl),
                                  onClick: Z,
                              }),
                              className: sR.Gj,
                              children: (0, n.jsx)(sk, { onLoadComplete: H }),
                          }),
                          children: (0, n.jsxs)("div", {
                              className: sR.kj,
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "heading-xl/semibold",
                                      children: eo.intl.string(eo.t.z8YP2A),
                                  }),
                                  (0, n.jsx)(E.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: eo.intl.string(eo.t.HdKh65),
                                  }),
                                  (0, n.jsx)(g.Q, {
                                      text: eo.intl.string(eo.t["1CdL8d"]),
                                      onClick: Z,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, n.jsx)(sQ, {
                          header: (0, n.jsx)(sH, {
                              selectedTab: x,
                              onSelectTab: X,
                              tabs: S,
                              endContent:
                                  F &&
                                  (0, n.jsx)(w.SS, {
                                      analyticsPage: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: w.cP.END,
                                      ctaText: eo.intl.string(eo.t["J+vlIR"]),
                                      ctaOnClick: J,
                                  }),
                          }),
                          banner: x === $.NC.ALL && (0, n.jsx)(sP, { onAssetLoad: H, onQuestCtaClick: V }),
                          children:
                              x === $.NC.CLAIMED
                                  ? (0, n.jsx)(tq, { onSelectTab: X })
                                  : x === $.NC.PREVIEW_TOOL
                                    ? (0, n.jsx)(e0, {})
                                    : (0, n.jsx)(tj, { ref: B }),
                      }),
            }),
        }),
    });
};
