let n;
s.r(t), s.d(t, { default: () => n$ }), s(323874), s(14289), s(35956);
var l,
    r = s(627968),
    a = s(64700),
    i = s(503698),
    o = s.n(i),
    c = s(873263),
    u = s(835245),
    d = s(562708),
    m = s(17928),
    h = s(554146),
    x = s(577473),
    E = s(825484),
    g = s(821609),
    f = s(509434),
    j = s(534514),
    v = s(834730),
    C = s(123292),
    p = s(331322),
    S = s(892547),
    _ = s(944791),
    N = s(775602),
    T = s(793574),
    A = s(139286),
    b = s(197111),
    O = s(10088),
    R = s(859040),
    I = s(726249),
    M = s(607470),
    y = s(826673),
    Q = s(840251),
    L = s(688151);
let H = new Q.E([], L.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var U = s(711111),
    D = s(701508),
    q = s(979590),
    w = s(749638),
    F = s(783531),
    P = s(334465),
    k = s(318346),
    B = s(371446),
    V = s(70926),
    W = s(531685),
    G = s(174459),
    K = s(676279),
    z = s(975571),
    $ = s(240248),
    Y = s(507107),
    J = s(631001),
    Z = s(87549),
    X = s(192444),
    ee = s(31587),
    et = s(590202);
s(321073);
var es = s(228366),
    en = s(340124),
    el = s(859703);
s(667532);
var er = s(783878),
    ea = s(408278),
    ei = s(663417),
    eo = s(922016),
    ec = s(624479),
    eu = s(289873),
    ed = s(416052),
    em = s(417098),
    eh = s(375708);
let ex = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(em.$T, {
        color: em.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : eh.intl.string(eh.t.ZErSg5) }),
    });
};
var eE = s(661531),
    eg = s(602853),
    ef = s(939249),
    ej = s(817281),
    ev = s(688810),
    eC = s(487245),
    ep = s(363195),
    eS = s(652215),
    e_ = s(398876);
let eN = function () {
    let { analyticsLocations: e } = (0, ev.Ay)(),
        t = (0, m.bG)([ep.A], () => ep.A.theme),
        s = a.useRef(null);
    a.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, eg.r)(eE.A.colors.BACKGROUND_BASE_LOW, eS.NJ8.LIGHT),
        l = (0, eg.r)(eE.A.colors.BACKGROUND_BASE_LOW, eS.NJ8.DARKER),
        i = (0, eg.r)(eE.A.colors.BACKGROUND_BASE_LOW, eS.NJ8.MIDNIGHT),
        o = a.useMemo(
            () => [
                { theme: eS.NJ8.LIGHT, label: eh.t.K2sFfo, color: n.hex() },
                { theme: eS.NJ8.DARKER, label: eh.t.b8Cei3, color: l.hex() },
                { theme: eS.NJ8.MIDNIGHT, label: eh.t.Do4ZJx, color: i.hex() },
            ],
            [n, l, i],
        ),
        c = a.useCallback(
            (t) => {
                (0, eC.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, ej.u_)({ theme: t });
            },
            [e],
        ),
        u = a.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, r.jsx)("div", {
        className: e_.N,
        children: (0, r.jsxs)("div", {
            className: e_.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        ef.D,
                        {
                            tag: "div",
                            className: e_.Du,
                            onClick: () => c(e.theme),
                            "aria-label": eh.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${e_.WT} ${t === e.theme ? e_.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: e_.i, children: eh.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(ea.K, {
                    onClick: u,
                    "aria-label": eh.intl.string(eh.t.yBZMsQ),
                    icon: ei.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eT = s(818348),
    eA = s(60857);
let eb = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [i, o] = a.useState(!1),
        [c, u] = a.useState(!1),
        d = a.useRef(null),
        h = (0, ee.pT)(),
        x = (0, m.bG)([el.A], () => (null != t ? el.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, m.bG)([el.A], () => null != t && el.A.isFetchingQuestPreview(t), [t]),
        j = a.useMemo(() => {
            let e = h.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [h, t]),
        v = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, en.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, en.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        p = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, en.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        S = a.useCallback(
            (e) => {
                (0, $.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: eA.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: eA.Br,
                    children: (0, r.jsxs)("div", {
                        className: eA.bo,
                        children: [
                            (0, r.jsx)(eN, {}),
                            (0, r.jsxs)("div", {
                                className: eA.b8,
                                children: [
                                    (0, r.jsx)(
                                        er.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: S,
                                            placeholder: eh.intl.string(eh.t.Zw8jxn),
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
                                        `${t}-${n?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, r.jsx)(ea.K, {
                                        onClick: l,
                                        "aria-label": eh.intl.string(eh.t.wzzjk9),
                                        icon: ei.f,
                                        loading: f,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != n &&
                (0, r.jsx)("div", {
                    className: eA.in,
                    children: (0, r.jsxs)(E.e, {
                        className: eA.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: v,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eh.intl.string(eh.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: C,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eh.intl.string(eh.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: p,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eh.intl.string(eh.t.cKSLr4),
                            }),
                            (0, r.jsx)(eo.Y, {
                                targetElementRef: d,
                                shouldShow: c,
                                onRequestClose: () => u(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: eA.PP,
                                        children: (0, r.jsx)("div", {
                                            className: eA.sH,
                                            children: (0, r.jsx)(ed.A, {
                                                value: eT.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eh.intl.string(eh.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(ea.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => u(!c),
                                        "aria-label": eh.intl.string(eh.t.rNGQfD),
                                        icon: ec.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != x ? (0, r.jsx)(ex, { error: x }) : null,
            f ? (0, r.jsx)(eu.y, {}) : null,
        ],
    });
};
var eO = s(364522),
    eR = s(761508),
    eI = s(797788);
let eM = () => (0, r.jsx)("div", { className: eI.y });
var ey = s(834615),
    eQ = s(332544);
let eL = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(j.D, {
                    className: eQ.R_,
                    variant: "heading-md/semibold",
                    children: eh.intl.string(eh.t.L2mlUb),
                }),
                (0, r.jsx)(ey.A, { quest: t }),
            ],
        }),
    });
};
var eH = s(241124),
    eU = s(732047),
    eD = s(717695),
    eq = s(763578),
    ew = s(111113);
let eF = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eq.wp,
            children: [
                (0, r.jsx)(j.D, {
                    className: eq.Oo,
                    variant: "heading-md/semibold",
                    children: eh.intl.string(eh.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: eq.RE,
                    children: (0, r.jsx)("div", {
                        className: eq.Z,
                        children: (0, r.jsx)("div", {
                            className: ew.C3,
                            children: (0, r.jsx)(eD.A, {
                                children: (0, r.jsx)(eH.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, r.jsx)(eU.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eP = s(961974);
let ek = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(j.D, {
                    className: eQ.R_,
                    variant: "heading-md/semibold",
                    children: eh.intl.string(eh.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: eQ.YT,
                    children: (0, r.jsx)(eP.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var eB = s(711038),
    eV = s(330034);
let eW = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(j.D, { variant: "heading-md/semibold", children: eh.intl.string(eh.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: eV.wu,
                    children: (0, r.jsx)("span", { className: eV.cy, children: eh.intl.string(eh.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: eV.oU,
                    children: (0, r.jsx)("div", {
                        className: eV.zx,
                        children: (0, r.jsx)("div", {
                            className: eV.Lj,
                            children: (0, r.jsx)("div", {
                                className: eV.n0,
                                children: (0, r.jsx)(eB.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eG = s(291922);
let eK = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(j.D, {
                    className: eQ.R_,
                    variant: "heading-md/semibold",
                    children: eh.intl.string(eh.t["5wnpF3"]),
                }),
                (0, r.jsx)(eG.Ay, {
                    className: eQ.d,
                    quest: t,
                    questContent: Y.uF.QUEST_HOME_DESKTOP,
                    contentPosition: 0,
                    rowIndex: 0,
                    sourceQuestContent: Y.uF.INTERNAL_PREVIEW_TOOL,
                }),
            ],
        }),
    });
};
var ez = s(97808),
    e$ = s(778712),
    eY = s(87664),
    eJ = s(287809),
    eZ = s(427262),
    eX = s(198525),
    e0 = s(66176);
let e1 = function (e) {
        let { quest: t } = e,
            [s, n] = a.useState(!1),
            l = a.useRef(null),
            i = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
            c = eZ.Ay.useName(i),
            u = (0, eY.A)(i?.id),
            d = a.useCallback(
                (e) =>
                    (0, r.jsx)(eX.A, {
                        name: c,
                        quest: t,
                        memberListItemRef: l,
                        applicationStream: u,
                        ...e,
                        closePopout: () => {
                            n(!1);
                        },
                    }),
                [t, u, c],
            );
        return (0, r.jsx)("div", {
            className: eQ.x3,
            children: (0, r.jsxs)("div", {
                className: eQ.B0,
                children: [
                    (0, r.jsx)(j.D, {
                        className: e0.R_,
                        variant: "heading-md/semibold",
                        children: eh.intl.string(eh.t.jY7Zxg),
                    }),
                    (0, r.jsx)("div", { className: e0.$Q, children: eh.intl.string(eh.t.q3hbne) }),
                    (0, r.jsx)("div", {
                        className: e0.k0,
                        children: (0, r.jsx)(eo.Y, {
                            targetElementRef: l,
                            renderPopout: d,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => n(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: eo.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, r.jsx)("div", {
                                    ref: l,
                                    className: o()(e0.Tn, { [e0.wH]: s }),
                                    children: (0, r.jsx)(ef.D, {
                                        onClick: () => n(!s),
                                        tabIndex: 0,
                                        children: (0, r.jsxs)("div", {
                                            className: e0.lm,
                                            children: [
                                                (0, r.jsx)(ez.eu, {
                                                    size: e$._3.SIZE_32,
                                                    src: i?.getAvatarURL(void 0, 32),
                                                    status: eS.clD.ONLINE,
                                                    "aria-label": i?.username,
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: e0.Fj,
                                                    children: [
                                                        (0, r.jsx)(v.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, r.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: eh.intl.string(eh.t.b9w3bO),
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
    e2 = (e) => {
        let { questId: t, selectedSections: s } = e,
            n = (0, m.bG)([el.A], () => el.A.getQuest(t));
        if (null != (0, m.bG)([el.A], () => el.A.getFetchQuestPreviewError(t)) || null == n) return null;
        let l = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                l("quest_bar") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eF, { quest: n }), (0, r.jsx)(eM, {})] }),
                l("home_card") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eK, { quest: n }), (0, r.jsx)(eM, {})] }),
                l("share_embed") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eW, { questId: n.id }), (0, r.jsx)(eM, {})] }),
                l("channel_call_header") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ek, { quest: n }), (0, r.jsx)(eM, {})] }),
                l("members_list") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(e1, { quest: n }), (0, r.jsx)(eM, {})] }),
                l("activity_panel") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eL, { quest: n }), (0, r.jsx)(eM, {})] }),
            ],
        });
    };
var e6 = s(497275);
function e7(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: i } = e,
        c = [
            { value: "quest_bar", label: eh.intl.string(eh.t.rjVPdM) },
            { value: "share_embed", label: eh.intl.string(eh.t["D/gSWS"]) },
            { value: "home_card", label: eh.intl.string(eh.t["5wnpF3"]) },
            { value: "channel_call_header", label: eh.intl.string(eh.t.gWinpQ) },
            { value: "members_list", label: eh.intl.string(eh.t.wpYima) },
            { value: "activity_panel", label: eh.intl.string(eh.t.L2mlUb) },
        ],
        u = 0 === s.length || s.length === c.length,
        d = a.useMemo(() => (u ? "all" : 1 === s.length ? s[0] : "all"), [s, u]);
    return (0, r.jsx)(eO.Ip, {
        className: o()(e6.kL, i),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: e6.qE,
            children: [
                (0, r.jsx)(j.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eh.intl.string(eh.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: e6.pf, children: l }),
                (0, r.jsxs)(eR.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: (e) => {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(eR.V.Item, { id: "all", children: eh.intl.string(eh.t.Y9DnPa) }),
                        c.map((e) => (0, r.jsx)(eR.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: e6.tZ, children: (0, r.jsx)("div", { className: e6.Qs, children: t }) }),
            ],
        }),
    });
}
function e8(e) {
    return new URLSearchParams(e).get(ee.L1.QUEST_ID);
}
let e3 = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, c.W6)(),
                [s, n] = a.useState(e),
                { search: l } = (0, c.zy)();
            return (
                a.useEffect(() => {
                    let t = e8(l);
                    null != t ? n(t) : null != e && n(e);
                }, [e, l]),
                a.useEffect(() => {
                    if (null == s || e8(l) === s) return;
                    let e = new URLSearchParams();
                    e.set(ee.L1.TAB, ee.NC.PREVIEW_TOOL),
                        e.set(ee.L1.QUEST_ID, s),
                        t.push(`${eS.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, l]),
                { questId: s, setQuestId: n }
            );
        })(t),
        i = (0, m.bG)([el.A], () => (null != n ? el.A.getQuest(n) : void 0), [n]),
        o = (0, m.bG)([el.A], () => (null != n ? el.A.getQuestLoadedViaPreview(n) : null), [n]);
    a.useEffect(() => {
        null != n &&
            (0, en.dQ)(n).then(() => {
                (0, en.Gt)(n);
            });
    }, [n]),
        a.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, en.dQ)(n);
            };
            return (
                es.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    es.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [u, d] = a.useState([]);
    return (0, r.jsx)(e7, {
        className: s,
        controls: (0, r.jsx)(eb, {
            questId: n,
            setQuestId: l,
            quest: i,
            refreshQuest: () => {
                null != n && (0, en.dQ)(n);
            },
        }),
        selectedSections: u,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(e2, { questId: o?.id, selectedSections: u }) : null,
    });
};
var e4 = s(617986),
    e5 = s(203879),
    e9 = s(403362),
    te = s(167417),
    tt = s(783977),
    ts = s(651892),
    tn = s(305866),
    tl = s(915089),
    tr = s(332733);
function ta(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(v.E, { className: tr.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let ti = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, tl.GV)(),
        l = a.useRef(null);
    return (0, r.jsx)(eo.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(tn.l, { className: tr.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var to = s(612539);
let tc = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, ee.Nb)(),
        l = a.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(ti, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, ts.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            a.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: to.B }),
                                    (0, r.jsx)(ta, { id: i, children: e.heading }),
                                    (0, r.jsx)(te.$, {
                                        "aria-labelledby": i,
                                        options: n,
                                        selectedValues: o,
                                        onChange: l(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, r.jsx)("hr", { className: to.B }),
                    (0, r.jsx)("div", {
                        className: to.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: eh.intl.string(eh.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eh.intl.formatToPlainString(eh.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: tt.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tu = s(773812),
    td = s(715482);
let tm = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = a.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, ee.XD)(),
        o = a.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, r.jsx)(ti, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ta, { id: t, children: eh.intl.string(eh.t.tZXJIS) }),
                    (0, r.jsx)(tu.z, {
                        options: o,
                        onChange: (e) => {
                            s(), l(e);
                        },
                        value: n,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, ts.Js)(n),
                icon: td.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var th = s(873174),
    tx = s(535185),
    tE = s(717421),
    tg = s(927813),
    tf = s(710969);
function tj(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, th.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, th.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var tv = s(173936),
    tC = s(365199),
    tp = s(551875),
    tS = s(971649),
    t_ = s(814793),
    tN = s(415441),
    tT = s(73473),
    tA = s(270045),
    tb = s(371912),
    tO = s(79545),
    tR = s(687966),
    tI = s(782134),
    tM = s(138134),
    ty = s(768622),
    tQ = s(785866),
    tL = s(662940),
    tH = s(719021);
function tU(e) {
    let { quest: t } = e,
        s = (0, tO.Pd)(t),
        n = (0, ee.fc)(t),
        l = (0, ee.I3)(t),
        i = a.useMemo(() => (0, tL.Dd)(t.config, s), [t.config, s]),
        o = a.useMemo(() => (0, tL.CK)(s, n, l), [s, n, l]);
    return (0, r.jsxs)("div", {
        className: tH.qS,
        children: [
            null != i && (0, r.jsx)(v.E, { variant: "text-xs/bold", color: "always-white", children: i }),
            null != i &&
                null != o &&
                (0, r.jsx)(v.E, { variant: "text-xs/bold", color: "always-white", children: "\u2022" }),
            null != o &&
                (0, r.jsxs)("span", {
                    className: tH.BA,
                    children: [
                        (function (e) {
                            let t = { size: "xxs", className: tH.rF, color: "currentColor" };
                            switch ((0, tL.pv)(e)) {
                                case tL.UK.PLAY:
                                    return (0, r.jsx)(tR._, { ...t });
                                case tL.UK.WATCH:
                                    return (0, r.jsx)(tI.u, { ...t });
                                case tL.UK.ACTIVITY:
                                    return (0, r.jsx)(tM.i, { ...t });
                                case tL.UK.INSTANT_PLAY:
                                    return (0, r.jsx)(ty.g, { ...t });
                                case tL.UK.ARENA:
                                    return (0, r.jsx)(tQ._, { ...t });
                            }
                        })(t),
                        (0, r.jsx)(v.E, { variant: "text-xs/bold", tag: "span", color: "always-white", children: o }),
                    ],
                }),
        ],
    });
}
var tD = s(409626),
    tq = s(629455),
    tw = s(646917),
    tF = s(576761),
    tP = s(895253),
    tk = s(743368),
    tB = s(792620),
    tV = s(192551),
    tW = s(919500);
function tG(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: a } = e,
        i = (0, tO.Pd)(t),
        c = i === tO.UA.EXPIRED || (i === tO.UA.CLAIMED && (0, tB.GL)(t)),
        u = (0, ee.do)({ quest: t, content: s, ctaContent: et.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tW.lO, { [tW.Fq]: l }),
        children: (0, r.jsx)("div", {
            className: tW.mv,
            children: (0, r.jsxs)(E.e, {
                direction: "horizontal",
                fullWidth: !0,
                wrap: !1,
                size: "sm",
                children: [
                    c || a
                        ? (0, r.jsx)(g.$, {
                              variant: "overlay-secondary",
                              text: t.config.ctaConfig.buttonLabel,
                              onClick: u,
                          })
                        : (0, r.jsx)(ea.K, {
                              variant: "overlay-secondary",
                              icon: tk.W,
                              "aria-label": eh.intl.string(eh.t.LLLLPD),
                              onClick: u,
                          }),
                    !c &&
                        (0, r.jsx)(tV.A, {
                            quest: t,
                            surface: tO.V3.QUEST_HOME_TILE_V2_FOOTER,
                            analyticsCtxQuestContent: s,
                            analyticsCtxSourceQuestContent: n,
                        }),
                ],
            }),
        }),
    });
}
var tK = s(403581),
    tz = s(646440);
function t$(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, ee.ZP)(s),
        a = (0, tF.B9)(n);
    if (null == l) return null;
    let i = a
        ? eh.intl.formatToPlainString(eh.t.l2UfLG, { bonusOrbMultiplier: l })
        : eh.intl.formatToPlainString(eh.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(ef.D, {
        onClick: () => {
            (0, e4.gC)(l, n), t?.();
        },
        "aria-label": i,
        children: (0, r.jsxs)("div", {
            className: tz.k,
            children: [
                (0, r.jsx)(tK.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(v.E, { variant: "text-sm/normal", color: "currentColor", className: tz.Q, children: i }),
            ],
        }),
    });
}
var tY = s(947641),
    tJ = s(194261),
    tZ = s(106799),
    tX = s(801365),
    t0 = s(453384),
    t1 = s(646764),
    t2 = s(269999);
function t6(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        a = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        i = (0, tX.mq)(t.config, a),
        o = (0, tX.ks)(t.config),
        c = (0, tX.wo)(t.config, a),
        u = (0, tX.l0)(t.config, a),
        d =
            null != c
                ? c > 700 * u
                    ? tp.i2.TIER_4
                    : c > 200 * u
                      ? tp.i2.TIER_3
                      : c > 100 * u
                        ? tp.i2.TIER_2
                        : tp.i2.TIER_1
                : void 0,
        { completedRatio: h } = (0, ee.O9)(t),
        x = t.userStatus?.claimedAt != null,
        E = (0, tf.Ic)(t),
        g = x ? "completed" : E ? "expired" : null;
    return (0, r.jsxs)("div", {
        className: t2.CZ,
        children: [
            (0, r.jsx)("div", {
                className: t2.tE,
                children: (0, r.jsx)(t0.A, {
                    style: "small",
                    size: 58,
                    percentComplete: h,
                    useAltStyle: !0,
                    children: (0, r.jsxs)("div", {
                        className: t2.n5,
                        children: [
                            (0, r.jsx)(t1.A, {
                                quest: t,
                                orbTier: d,
                                questContent: s,
                                autoplay: l,
                                lazyLoad: !0,
                                fullWidth: !0,
                                sourceQuestContent: n,
                            }),
                            "completed" === g &&
                                (0, r.jsx)("div", {
                                    className: t2.EY,
                                    children: (0, r.jsx)(tY.r, { className: t2.AM, size: "sm", color: "currentColor" }),
                                }),
                            "expired" === g &&
                                (0, r.jsx)("div", {
                                    className: t2.EY,
                                    children: (0, r.jsx)(tJ.X, { size: "sm", className: t2.Sz, color: "currentColor" }),
                                }),
                        ],
                    }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: t2.FS,
                children: [
                    (0, r.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: t2.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            o && (0, r.jsx)(tZ.A, { className: t2.Kq, customSize: 18 }),
                            (0, r.jsx)(
                                v.E,
                                {
                                    variant: "text-lg/medium",
                                    color: "always-white",
                                    lineClamp: 1,
                                    tag: "span",
                                    children: o ? c : i,
                                },
                                `${t.id}_reward`,
                            ),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var t7 = s(190107),
    t8 = s(315767);
function t3(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: i } = e,
        o = a.useRef(null),
        c = (0, tq.A9)(t, i, t7.rE.QUEST_HOME_DESKTOP, s, tD.Ob.QuestHome, o),
        u = (0, tw.z)(),
        d = (0, ee.SD)(t, u),
        m = u === tF.MA.NITRO && d;
    return (0, r.jsxs)("div", {
        ref: o,
        children: [
            (0, r.jsx)(tP.A, { visible: m, glow: !0 }),
            (0, r.jsx)(t6, { quest: t, questContent: s, sourceQuestContent: i, isHovering: n }),
            (0, r.jsxs)("div", {
                className: t8.yM,
                children: [
                    (0, r.jsx)(v.E, {
                        style: { opacity: n ? 1 : 0.8 },
                        variant: "text-sm/medium",
                        className: t8.Wj,
                        lineClamp: n ? void 0 : 1,
                        children: c,
                    }),
                    (0, r.jsxs)("div", {
                        className: t8.Gv,
                        children: [
                            (0, r.jsx)(v.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: eh.intl.string(eh.t.o6FLcF),
                            }),
                            d &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(t$, { questId: t.id, orbMultiplierEligibility: u }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tG, { quest: t, questContent: s, sourceQuestContent: i, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var t4 = s(547032);
function t5(e) {
    let {
            quest: t,
            questContent: s,
            isInFeaturedSection: n,
            className: l,
            impressionRef: i,
            sourceQuestContent: c,
        } = e,
        u = a.useMemo(() => (0, tp.tW)(t, tp.fY.QUEST_BAR_HERO_IMAGE), [t]),
        d = a.useMemo(() => (0, tp.tW)(t, tp.fY.QUEST_BAR_HERO_VIDEO), [t]),
        {
            isActive: m,
            shouldRender: h,
            hoverHandlers: x,
            handleMenuOpen: E,
            handleMenuClose: g,
        } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400,
                [t, s] = a.useState(!1),
                [n, l] = a.useState(!1),
                [r, i] = a.useState(!1),
                o = a.useRef(!1),
                c = a.useRef(!1),
                u = a.useRef(null),
                d = a.useRef(null),
                m = () => {
                    null != u.current && (cancelAnimationFrame(u.current), (u.current = null));
                },
                h = () => {
                    null != d.current && (clearTimeout(d.current), (d.current = null));
                },
                x = a.useCallback(() => {
                    h(),
                        l(!0),
                        m(),
                        (u.current = requestAnimationFrame(() => {
                            u.current = requestAnimationFrame(() => {
                                (u.current = null), s(!0);
                            });
                        }));
                }, []),
                E = a.useCallback(() => {
                    m(),
                        s(!1),
                        h(),
                        (d.current = setTimeout(() => {
                            (d.current = null), l(!1);
                        }, e));
                }, [e]),
                g = a.useCallback(() => i(!0), []),
                f = a.useCallback(() => {
                    i(!1), o.current || c.current || E();
                }, [E]),
                j = a.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            (o.current = !0), x();
                        },
                        onMouseLeave: () => {
                            (o.current = !1), r || E();
                        },
                        onFocus: () => {
                            (c.current = !0), x();
                        },
                        onBlur: () => {
                            (c.current = !1), r || E();
                        },
                    }),
                    [x, E, r],
                );
            return (
                a.useEffect(
                    () => () => {
                        m(), h();
                    },
                    [],
                ),
                { isActive: t, shouldRender: n, deactivate: E, hoverHandlers: j, handleMenuOpen: g, handleMenuClose: f }
            );
        })(),
        f = (0, tO.Pd)(t),
        j = (0, tS.go)(),
        v = (0, t_.E0)(t.config),
        C = (0, tb.Lk)({
            isShareable: v,
            questId: t.id,
            trackingCtx: a.useMemo(
                () => ({
                    content: s,
                    ctaContent: et.Cy.CONTEXT_MENU_COPY_LINK,
                    impressionId: j,
                    sourceQuestContent: c,
                }),
                [s, c, j],
            ),
        });
    return (0, r.jsxs)("div", {
        id: `quest-tile-${t.id}`,
        ref: (e) => {
            i.current = e;
        },
        className: o()(t4.kL, { [t4.iR]: n }, l),
        ...x,
        children: [
            (0, r.jsx)(tN.N, {
                imageAsset:
                    null != u
                        ? { asset: u, assetId: "QuestTileV2", alt: eh.intl.string(eh.t.jnijWz), className: t4.Tv }
                        : void 0,
                videoAsset:
                    null != d
                        ? {
                              asset: d,
                              assetId: "QuestTileV2_heroAnimated",
                              className: o()(t4.Tv, t4.gJ, { [t4.C7]: m }),
                          }
                        : void 0,
                imageSize: { width: 600, height: 450 },
                showVideo: h,
            }),
            (0, r.jsx)("div", { className: o()(t4.sL, { [t4.Mq]: f === tO.UA.EXPIRED }) }),
            (0, r.jsx)("div", { className: o()(t4.f5, { [t4.Hk]: m }) }),
            (0, r.jsxs)("div", {
                className: t4.wx,
                children: [
                    (0, r.jsx)(tU, { quest: t }),
                    (0, r.jsxs)("div", {
                        className: t4.$s,
                        children: [
                            n &&
                                v &&
                                (0, r.jsx)(ef.D, {
                                    tag: "div",
                                    className: o()(t4.E9, { [t4.CJ]: m }),
                                    onClick: C,
                                    "aria-label": eh.intl.string(eh.t.WqhZss),
                                    children: (0, r.jsx)(tv.q, { size: "sm", color: "currentColor" }),
                                }),
                            (0, r.jsx)(tA.C, {
                                questContent: s,
                                quest: t,
                                hideLearnMore: !0,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                sourceQuestContent: c,
                                onOpen: E,
                                onClose: g,
                                children: (e) =>
                                    (0, r.jsx)(ef.D, {
                                        ...e,
                                        tag: "div",
                                        className: o()(t4.E9, { [t4.CJ]: m }),
                                        "aria-label": eh.intl.string(eh.t.DEoVWZ),
                                        children: (0, r.jsx)(tC.j, { size: "sm", color: "currentColor" }),
                                    }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(t3, { quest: t, questContent: s, isInFeaturedSection: n, isHovering: m, sourceQuestContent: c }),
        ],
    });
}
let t9 = a.memo(function (e) {
    let t = (0, m.bG)([el.A], () => (null != e.questId ? el.A.getQuest(e.questId) : void 0), [e.questId]),
        s = a.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(tT.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === Y.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(t5, { ...e, quest: s, impressionRef: t }),
          });
});
var se = s(121480);
let st = 4 * tg.A.Millis.SECOND;
function ss(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = a.useRef(null),
        [i, o] = a.useState(null),
        c = a.useCallback(() => {
            o(
                (function (e, t, s) {
                    if (null == e) return 1;
                    let n = Math.floor((e.clientWidth + s) / (t + s));
                    return n > 0 ? n : 1;
                })(l.current, s, n),
            );
        }, [o, s, n]);
    return (
        (0, tx.g)(l, c, [s, n], { fireOnMount: !0 }),
        (0, r.jsx)("div", {
            className: se.kL,
            ref: l,
            style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
            children: null !== i && t(i),
        })
    );
}
let sn = a.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: i,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        m = (0, c.zy)(),
        h = a.useRef(""),
        [x, E] = a.useState(null),
        [g, f] = a.useState(0),
        { enabled: C } = X.aD.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: p }, S] = (0, tE.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: st },
        })),
        _ = a.useCallback(
            (e) => {
                let t = (0, tf.vc)(e, s, n);
                return null != t && (E(t.id), f((e) => e + 1), !0);
            },
            [s, n],
        );
    return (a.useImperativeHandle(t, () => ({ scrollToQuest: _ }), [_]),
    a.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        l || !i || (m.hash !== h.current && _(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, l, i, _]),
    a.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            S({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || E(null);
                },
            }));
    }, [x, g, S]),
    l && 0 === s.length)
        ? (0, r.jsx)(eu.y, { className: se.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: se.y7,
                children: [
                    (0, r.jsx)(j.D, {
                        variant: "heading-xl/semibold",
                        children: eh.intl.string(u ? eh.t.PBfFnx : eh.t.NqFP6z),
                    }),
                    (0, r.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? eh.intl.format(eh.t.LdYS1H, { onClick: d }) : eh.intl.string(eh.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(ss, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            a = null != x && !l;
                        return (0, r.jsxs)(
                            th.animated.div,
                            {
                                className: o()({ [se.XB]: l }),
                                style: tj(l, a, p),
                                children: [
                                    l && (0, r.jsx)("div", { className: se.E4 }, g),
                                    C
                                        ? (0, r.jsx)(t9, {
                                              quest: t,
                                              questContent: Y.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: se.d,
                                              sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eG.Ay, {
                                              quest: t,
                                              questContent: Y.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: se.d,
                                              sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var sl = s(458518),
    sr = s(65990);
let sa = [],
    si = ee.L1.SORT,
    so = ee.L1.FILTER,
    sc = a.forwardRef(function (e, t) {
        let s,
            n,
            l,
            i,
            o = a.useRef(null),
            [u, d] =
                ((s = (0, sl.o)()),
                (n = (0, c.W6)()),
                (l = a.useRef(null)),
                (i = a.useCallback(
                    (e) => {
                        let t = new URLSearchParams(l.current ?? s);
                        for (let [s, n] of Object.entries(e)) null == n ? t.delete(s) : t.set(s, n);
                        (l.current = t),
                            n.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                l.current = null;
                            });
                    },
                    [s, n],
                )),
                [s, i]),
            m = a.useMemo(() => {
                var e;
                return (
                    (e = u.get(si)),
                    ((0, $.uJ)(e) ? null : (Object.values(t7.kL).find((t) => t === e) ?? null)) ?? t7.kL.SUGGESTED
                );
            }, [u]),
            h = a.useMemo(
                () =>
                    (function (e) {
                        if ((0, $.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, t7.WQ)(e))
                            .filter(e9.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(so)) ?? sa,
                [u],
            ),
            x = a.useCallback(
                (e) => {
                    d({ [si]: e });
                },
                [d],
            ),
            E = a.useCallback(
                (e) => {
                    d({
                        [so]:
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
                excludedQuests: f,
                isFetchingCurrentQuests: v,
                hasFetched: C,
            } = (0, ee.Qh)(
                ee.NC.ALL,
                a.useMemo(() => ({ sortMethod: m, filters: h }), [m, h]),
            ),
            p = a.useCallback(() => {
                E(sa);
            }, [E]),
            S = a.useRef(null),
            _ = a.useRef(null),
            N = (0, c.zy)(),
            T = (0, c.W6)();
        return (
            a.useEffect(() => {
                "" !== N.hash &&
                    null != S.current &&
                    null != _.current &&
                    (m !== S.current || h !== _.current) &&
                    T.replace({ ...N, hash: void 0 });
            }, [m, h, N, T]),
            a.useEffect(() => {
                S.current = m;
            }, [m]),
            a.useEffect(() => {
                _.current = h;
            }, [h]),
            (0, ee.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: g.length }),
            a.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        p(),
                            x(t7.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [p, x],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: sr.Mj,
                        children: [
                            (0, r.jsx)(j.D, { variant: "heading-lg/medium", children: eh.intl.string(eh.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sr.Nf,
                                children: [
                                    (0, r.jsx)(tm, { onChange: x, optionClassName: sr.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(tc, { onChange: E, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(sn, {
                        ref: o,
                        quests: g,
                        excludedQuests: f,
                        isFetching: v,
                        hasFetched: C,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: p,
                    }),
                ],
            })
        );
    });
var su = s(575593),
    sd = s(440703),
    sm = s(462887),
    sh = s(187322),
    sx = s(765671),
    sE = s(736653),
    sg = s(162232),
    sf = s(734736),
    sj = s(303136),
    sv = s(265234),
    sC = s(181713);
let sp = (e) => {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sC.A : sC.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sv.k, t),
        children: s
            ? (0, r.jsx)(sj.A, {
                  preload: "auto",
                  className: sv.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sv.L, src: l, alt: n }),
    });
};
var sS = s(57718),
    s_ = s(659249);
let sN = (0, a.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, a.useState)(!1),
        [l, i] = (0, a.useState)(24),
        [c, u] = (0, a.useState)(!1),
        d = (0, a.useRef)(null),
        h = (0, a.useRef)(null),
        x = (0, a.useRef)(null),
        E = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        { ref: g, height: f = 0 } = (0, sx.Ay)(),
        C = (0, sE.Ay)(),
        p = (0, ee.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        S = t.userStatus?.claimedTier ?? 0,
        _ = t.config.rewards[S],
        N = _?.type === sd.l.FRACTIONAL_PREMIUM,
        T = _?.type === sd.l.COLLECTIBLE,
        A = _?.type === sd.l.VIRTUAL_CURRENCY,
        b = _?.collectibleProduct?.items?.[0],
        O = b?.type === su.R.AVATAR_DECORATION ? b : null,
        R = a.useMemo(
            () =>
                null == _
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? eh.intl.format(eh.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : _.name,
            [_, A, t],
        );
    (0, sx.i4)(d, (e) => {
        let { height: t } = e;
        if (!T || null == t || null == h.current || null == d.current || null == x.current) return;
        let s = d.current.getBoundingClientRect(),
            n = h.current.getBoundingClientRect(),
            l = x.current.getBoundingClientRect();
        i((n.top - s.top - l.height) / 2);
    });
    let I = (0, sm.M)(C),
        y = a.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        Q = a.useMemo(() => (0, tp.tW)(t, tp.fY.REWARD), [t]),
        L = s ? f + 8 : 0,
        { content_position: H, row_index: U, ...D } = (0, et.fF)(Y.uF.TROPHY_CASE_CARD),
        q = () => {
            n(!0), G.default.track(eS.HAw.QUEST_HOVER, { quest_id: t.id, ...D });
        },
        w = () => {
            n(!1);
        },
        F = (e) => {
            u(!0), G.default.track(eS.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == _ || c
        ? null
        : (0, r.jsx)(sh.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: q,
                  onBlur: w,
                  onMouseEnter: q,
                  onMouseLeave: w,
                  className: o()(s_.kL, { [s_.yo]: s }),
                  children: [
                      null != E &&
                          T &&
                          null != O &&
                          (0, r.jsx)("div", {
                              ref: x,
                              className: s_.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sg.A, {
                                  avatarDecorationOverride: O,
                                  user: E,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      N
                          ? (0, r.jsx)(sf.A, { className: s_.Sl })
                          : A
                            ? (0, r.jsx)(sp, {
                                  className: s_.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : Q.isAnimated
                              ? (0, r.jsx)(M.A, {
                                    className: s_.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: Q.url,
                                        type: Q.mimetype ?? void 0,
                                        onError: () => F(Q.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: s_.Sl,
                                    src: Q.url,
                                    alt: t.config.messages.questName,
                                    onError: () => F(Q.url),
                                }),
                      (0, r.jsx)("div", { className: o()(s_.Lw, { [s_.en]: I, [s_.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: h,
                          className: s_.r$,
                          style: { transform: `translateY(-${L}px)` },
                          children: (0, r.jsx)(sS.Ay, {
                              logotypeClassName: o()(s_.wm, { [s_.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: g,
                          className: s_.zH,
                          children: [
                              (0, r.jsx)(j.D, {
                                  className: s_.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eh.intl.format(eh.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "always-white",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: eh.intl.format(eh.t["kXVcV+"], { reward: R, claimedDate: p }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sT = s(396478);
function sA(e) {
    let { onClick: t } = e,
        n = (0, sE.Ay)();
    return (0, r.jsxs)(sT.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sT.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sT.SG, { note: eh.intl.format(eh.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sb = s(975424);
function sO(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, ee.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(eu.y, { className: sb.u })
        : 0 === n.length
          ? (0, r.jsx)(sA, { onClick: () => t(ee.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sb.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sN, { quest: e }, e.id)),
            });
}
var sR = s(474646);
function sI(e) {
    let { questIds: t, setMaxRowIndex: s } = e,
        { enabled: n } = X.aD.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
        l = a.useRef(null),
        [i, o] = a.useState(1),
        c = a.useCallback(() => {
            var e;
            o(null == (e = l.current) ? 1 : Math.max(1, Math.min(2, Math.floor((e.clientWidth + 20) / 365))));
        }, [o]);
    return (
        (0, tx.g)(l, c, [], { fireOnMount: !0 }),
        a.useEffect(() => {
            s(Math.ceil(t.length / i) - 1);
        }, [t.length, i, s]),
        (0, r.jsx)("div", {
            className: sR.k,
            ref: l,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children: t.map((e, t) =>
                n
                    ? (0, r.jsx)(
                          t9,
                          {
                              isInFeaturedSection: !0,
                              questId: e,
                              questContent: Y.uF.QUEST_HOME_DESKTOP,
                              contentPosition: t,
                              rowIndex: Math.floor(t / i),
                              sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                          },
                          e,
                      )
                    : (0, r.jsx)(
                          eG.Ay,
                          {
                              questId: e,
                              isInFeaturedSection: !0,
                              questContent: Y.uF.QUEST_HOME_DESKTOP,
                              contentPosition: t,
                              rowIndex: Math.floor(t / i),
                              sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                          },
                          e,
                      ),
            ),
        })
    );
}
let sM = a.createContext({ targetQuestId: null, highlightCount: null, highlightAnimationProgress: null });
var sy = s(868714),
    sQ = s(548411),
    sL = s(554830),
    sH = s(689175),
    sU = s(321503),
    sD = s(522403);
let sq = "data-scroll-target",
    sw = `[${sq}]`,
    sF = { anchors: [], pageSize: 1 };
function sP(e) {
    let {
            children: t,
            className: s,
            itemSelector: n = sw,
            maskWidth: l = 48,
            overflowAmount: i = 0,
            maskMarginMultiplier: c = 1,
        } = e,
        u = a.useRef(null),
        d = a.useRef(null),
        [h, x] = a.useState(!1),
        [E, g] = a.useState(!1),
        [{ anchors: f, pageSize: j }, v] = a.useState(sF),
        C = (0, m.bG)([N.A], () => N.A.useReducedMotion) ? "auto" : "smooth",
        p = a.useCallback(() => {
            let e = u.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (x(e.scrollLeft > 0), g(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        S = a.useCallback(() => {
            v(
                (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return sF;
                    let a = Array.from(r.querySelectorAll(s));
                    if (0 === a.length) return sF;
                    let i = a[0].offsetWidth,
                        o = a.length > 1 ? a[1].offsetLeft - a[0].offsetLeft - i : 0,
                        c = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (i + o))),
                        u = a.length - c + 1;
                    return u <= 1
                        ? sF
                        : {
                              anchors: [
                                  0,
                                  ...a.slice(1, u - 1).map((e, t) => {
                                      let s = a[t + c];
                                      return (e.offsetLeft + s.offsetLeft + s.offsetWidth) / 2;
                                  }),
                                  r.scrollWidth,
                              ],
                              pageSize: c,
                          };
                })({ scrollerRef: u, itemSelector: n, maskWidth: l, maskMarginMultiplier: c }),
            );
        }, [l, n, c]),
        _ = a.useCallback(
            (e) => {
                let t = u.current?.getScrollerNode();
                if (null == t || f.length < 2) return;
                let s = f.length - 1,
                    n = Math.max(0, t.scrollWidth - t.clientWidth),
                    l = f.map((e, l) => (0 === l ? 0 : l === s ? n : e - t.clientWidth / 2)),
                    r = (e) => Math.abs(e - t.scrollLeft),
                    a = Math.max(0, Math.min(s, l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0) + e * j));
                t.scrollTo({ left: l[a], behavior: C });
            },
            [C, f, j],
        ),
        T = a.useCallback(
            (e) => {
                let t = u.current?.getScrollerNode();
                if (null == t) return;
                let s = e.target.closest(n);
                if (null == s || !t.contains(s)) return;
                let r = t.getBoundingClientRect(),
                    a = s.getBoundingClientRect(),
                    i = r.left + l - a.left,
                    o = a.right - (r.right - l);
                i > 0 ? t.scrollBy({ left: -i, behavior: C }) : o > 0 && t.scrollBy({ left: o, behavior: C });
            },
            [n, l, C],
        ),
        A = a.useCallback(() => {
            p(), S();
        }, [p, S]);
    (0, tx.g)(d, A, [], { fireOnMount: !0 });
    let b = i > 0,
        O = (0, sy.A)(f);
    return (0, r.jsxs)("div", {
        className: o()(s, sD.m7),
        ref: d,
        style: {
            "--custom-scroller-mask-width": `${l}px`,
            "--custom-scroller-overflow-amount": `${i}px`,
            "--custom-scroller-scroll-behavior": C,
        },
        children: [
            (0, r.jsx)(ef.D, {
                "aria-label": eh.intl.string(eh.t.vgfxaA),
                className: o()(sD.k9, sD.RW, { [sD.Q2]: h }),
                onClick: () => _(-1),
                tabIndex: h ? 0 : -1,
                "aria-hidden": !h,
                children: (0, r.jsx)(sQ.Z, { color: eE.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, r.jsx)(ef.D, {
                "aria-label": eh.intl.string(eh.t.XiOHRX),
                className: o()(sD.k9, sD.K3, { [sD.Q2]: E }),
                onClick: () => _(1),
                tabIndex: E ? 0 : -1,
                "aria-hidden": !E,
                children: (0, r.jsx)(sL.K, { color: eE.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, r.jsx)("div", {
                className: o()(sD.$u, { [sD.sF]: h, [sD.RC]: E, [sD.Ni]: b && !h, [sD.GA]: b && !E }),
                children: (0, r.jsx)(sH.zC, {
                    ref: u,
                    orientation: "horizontal",
                    onScroll: p,
                    onFocusCapture: T,
                    className: o()({ [sD.x2]: b }, sD.XG),
                    children: (0, r.jsxs)(sU.X.Provider, {
                        value: u,
                        children: [
                            t,
                            O.map((e, t) =>
                                (0, r.jsx)(
                                    "div",
                                    { "aria-hidden": !0, className: sD.fw, style: { insetInlineStart: `${e}px` } },
                                    t,
                                ),
                            ),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var sk =
    (((l = {}).FEATURED = "featured"),
    (l.IN_PROGRESS = "in-progress"),
    (l.ENDING_SOON = "ending-soon"),
    (l.ORB = "orb"),
    (l.DISCOVERED = "discovered"),
    l);
let sB = [
    { type: "featured-quests", identifier: "featured", title: eh.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "in-progress", title: eh.t.CHJy6z },
    { type: "quests", identifier: "ending-soon", title: eh.t.PRg3qh },
    { type: "quests", identifier: "orb", title: eh.t["0Uc94A"] },
    { type: "quests", identifier: "discovered", title: eh.t["u9Ug++"] },
];
var sV = s(548636);
function sW(e) {
    let { questIds: t, rowIndex: s, sectionIdentifier: n } = e,
        { targetQuestId: l, highlightCount: i, highlightAnimationProgress: o } = a.useContext(sM),
        c = null != l,
        { enabled: u } = X.aD.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)(sP, {
        maskWidth: 48,
        overflowAmount: 25,
        maskMarginMultiplier: 0.75,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": "382.6666666666667px",
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${u ? "var(--radius-xl)" : "10px"}`,
            },
            className: sV.FO,
            children: [
                t.map((e, t) => {
                    let a = l === e,
                        d = c && !a;
                    return (0, r.jsxs)(
                        th.animated.div,
                        {
                            [sq]: "",
                            className: a ? sV.XB : void 0,
                            style: tj(a, d, o),
                            children: [
                                a && (0, r.jsx)("div", { className: sV.E4 }, i),
                                u
                                    ? (0, r.jsx)(t9, {
                                          questId: e,
                                          questContent: Y.uF.QUEST_HOME_DESKTOP,
                                          contentPosition: t,
                                          rowIndex: s,
                                          className: sV.d,
                                          sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                      })
                                    : (0, r.jsx)(eG.Ay, {
                                          questId: e,
                                          isInFeaturedSection: n === sk.FEATURED,
                                          questContent: Y.uF.QUEST_HOME_DESKTOP,
                                          contentPosition: t,
                                          rowIndex: s,
                                          className: sV.d,
                                          sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                      }),
                            ],
                        },
                        `animated-wrapper-${e}`,
                    );
                }),
                (0, r.jsx)("div", { className: sV.fu }),
            ],
        }),
    });
}
var sG = s(958538);
let sK = tg.A.Millis.WEEK;
function sz() {
    let e = el.A.quests;
    if (0 === el.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tf.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class s$ extends m.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(el.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - sK;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([el.A], sz), t;
    }
    getState() {
        let e = {};
        for (let [t, s] of n) e[t] = s;
        return { discoveredAtByQuestId: e };
    }
    getDiscoveredAtByQuestId() {
        return n;
    }
}
let sY = new s$(es.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    sJ = 2 * tg.A.Millis.DAY,
    sZ = new Map(sB.map((e) => [e.identifier, e])),
    sX = {
        [sk.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function s0(e, t) {
    return e === t || (e.length === t.length && 0 === new Set(e).symmetricDifference(new Set(t)).size);
}
function s1(e, t) {
    let s = sZ.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
var s2 = s(32304);
let s6 = 4 * tg.A.Millis.SECOND,
    s7 = a.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l } = e,
            { sections: i, isFetchingCurrentQuests: c } = ((e) => {
                let { isLoadingQuestHomeHero: t } = e,
                    {
                        quests: s,
                        isFetchingCurrentQuests: n,
                        hasFetched: l,
                    } = (0, ee.Qh)(ee.NC.ALL, { sortMethod: t7.kL.SUGGESTED, filters: [] }),
                    r = (0, sG.A)(
                        () =>
                            s.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        s.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        s0,
                    ),
                    i = (0, ee.T2)(),
                    o = (0, m.bG)([sY], () => sY.getDiscoveredAtByQuestId(), []),
                    c = a.useMemo(() => (n && 0 === s.length) || t, [n, s.length, t]);
                return {
                    sections: a.useMemo(
                        () =>
                            c
                                ? []
                                : (function (e) {
                                      let { allQuestIds: t, hero: s, discoveredAtByQuestId: n } = e,
                                          l = new Map(),
                                          r = new Set();
                                      function a(e, t) {
                                          let { featuredOnly: a = !1 } = t;
                                          if (r.has(e)) return;
                                          let i = el.A.getQuestConfig(e);
                                          if (null == i) return;
                                          let o = (function (e) {
                                              let {
                                                      quest: t,
                                                      hero: s,
                                                      discoveredAtByQuestId: n,
                                                      questIdsBySectionIdentifier: l,
                                                  } = e,
                                                  r = el.A.getQuest(t.id)?.userStatus,
                                                  a =
                                                      null != r &&
                                                      null != r.enrolledAt &&
                                                      null != r.completedAt &&
                                                      null == r.claimedAt;
                                              return (0, tf.kd)(t) && !a
                                                  ? null
                                                  : null != r && null != r.enrolledAt && null == r.claimedAt
                                                    ? sk.IN_PROGRESS
                                                    : n.has(t.id)
                                                      ? sk.DISCOVERED
                                                      : null != s && (0, t_.I0)(s, t.id) && s1(sk.FEATURED, l)
                                                        ? sk.FEATURED
                                                        : new Date(t.expiresAt).valueOf() <= Date.now() + sJ
                                                          ? sk.ENDING_SOON
                                                          : s1(sk.FEATURED, l)
                                                            ? sk.FEATURED
                                                            : (0, tX.ks)(t)
                                                              ? sk.ORB
                                                              : null;
                                          })({
                                              quest: i,
                                              hero: s,
                                              discoveredAtByQuestId: n,
                                              questIdsBySectionIdentifier: l,
                                          });
                                          null == o ||
                                              (a && o !== sk.FEATURED) ||
                                              (l.set(o, [...(l.get(o) ?? []), e]), r.add(e));
                                      }
                                      return (
                                          s?.questIds?.forEach((e) => a(e, { featuredOnly: !0 })),
                                          t.forEach((e) => a(e, {})),
                                          sB
                                              .map((e) => {
                                                  let t = sX?.[e.identifier],
                                                      s =
                                                          null != t
                                                              ? t(l.get(e.identifier) ?? [], {
                                                                    discoveredAtByQuestId: n,
                                                                })
                                                              : (l.get(e.identifier) ?? []);
                                                  return { ...e, questIds: s };
                                              })
                                              .filter((e) => {
                                                  let { questIds: t } = e;
                                                  return t.length > 0;
                                              })
                                      );
                                  })({ allQuestIds: r, hero: i, discoveredAtByQuestId: o }),
                        [r, i, o, c],
                    ),
                    hasFetched: l,
                    isFetchingCurrentQuests: c,
                };
            })({ isLoadingQuestHomeHero: n }),
            [u, d] = a.useState(null),
            [h, x] = a.useState(0),
            [E, g] = a.useState(0),
            f = a.useRef(null),
            [{ highlightAnimationProgress: v }, C] = (0, tE.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: s6 },
            })),
            p = a.useCallback(
                (e) => {
                    if (null == e) return !1;
                    let t = document.getElementById((0, eG.sT)(e));
                    return (
                        null != t &&
                        !c &&
                        (d(e),
                        x((e) => e + 1),
                        t.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        C({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || d(null);
                            },
                        }),
                        !0)
                    );
                },
                [d, x, C, c],
            );
        a.useImperativeHandle(t, () => ({ scrollToQuest: p }), [p]),
            a.useLayoutEffect(() => {
                if (null == s) {
                    f.current = null;
                    return;
                }
                f.current !== s && ((0, en.sB)(s), p(s) && (f.current = s));
            }, [s, p]);
        let S = a.useMemo(() => ({ targetQuestId: u, highlightCount: h, highlightAnimationProgress: v }), [u, h, v]),
            _ = a.useMemo(
                () =>
                    i.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === sk.FEATURED;
                    }),
                [i],
            );
        return (0, r.jsx)(sM.Provider, {
            value: S,
            children: (0, r.jsx)("div", {
                className: o()(s2.k, l),
                children: i.map((e, t) => {
                    let { identifier: s, questIds: n, title: l } = e;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: s2.p,
                            children: [
                                (0, r.jsx)(j.D, { variant: "heading-lg/medium", children: eh.intl.string(l) }),
                                s === sk.FEATURED
                                    ? (0, r.jsx)(sI, { questIds: n, setMaxRowIndex: g })
                                    : (0, r.jsx)(sW, {
                                          questIds: n,
                                          rowIndex: t < _ ? t : t + E,
                                          sectionIdentifier: s,
                                      }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        });
    });
var s8 = s(353640),
    s3 = s(121894),
    s4 = s(851936);
let s5 = (0, s8.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, s4.L)({ location: t7.rE.QUEST_HOME_DESKTOP });
        if (s.info === eT.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, s3.r)(() => e(l));
    },
}));
var s9 = s(516226),
    ne = s(323889),
    nt = s(561844),
    ns = s(901406),
    nn = s(139384),
    nl = s(43990),
    nr = s(770178),
    na = s(14233);
function ni(e, t) {
    let { row_index: s, ...n } = (0, et.fF)(Y.uF.QUEST_HOME_HERO);
    (0, nt.Qg)({
        adContentId: e,
        adCreativeType: ne.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: Y.uF.QUEST_HOME_HERO,
    });
}
let no = a.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: i, buttons: c, background: u, className: d } = e,
        [m, h] = a.useState("display-lg"),
        x = a.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        E = (0, nr.w)(x, [], { fireOnMount: !0 }),
        g = a.useCallback(() => ni(s, eS.HAw.QUEST_HOVER), [s]),
        f = a.useCallback(() => ni(s, eS.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(nl.N, {
        theme: eS.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(na.iE, e, d),
                onMouseEnter: g,
                onMouseLeave: f,
                ref: (e) => {
                    (E.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: na.FG,
                    children: [
                        (0, r.jsxs)(p.B, {
                            className: na.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(p.B, {
                                    className: na.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(p.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(j.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: na.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(v.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: na.VA,
                                                    children: i,
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
var nc = s(194526),
    nu = s(731355),
    nd = s(621466),
    nm = s(508770),
    nh = s(406810),
    nx = s(628284),
    nE = s(65154),
    ng = s(496431),
    nf = s(975807),
    nj = s(58703),
    nv = s(18437),
    nC = s(398025),
    np = s(691464);
function nS(e) {
    let [t, s] = a.useState(!1),
        n = a.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = a.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function n_(e) {
    let { hero: t, contentPosition: s } = e,
        n = a.useRef(null),
        { isHovering: l, hoverProps: i } = nS(
            a.useCallback(
                (e) => {
                    (0, nt.Qg)({
                        adContentId: t.id,
                        adCreativeType: ne.p.QUEST_HOME_HERO,
                        event: e ? eS.HAw.QUEST_HOVER : eS.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Y.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, et.jO)(Y.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    a.useEffect(() => {
        let e = n.current;
        (0, nd.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(eT.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: c } = (0, tE.z)({ hoverSpring: +!!l, config: th.config.gentle }),
        u = a.useCallback(() => {
            (0, nf.A)(t.cta.url),
                (0, nt.vK)({
                    adContentId: t.id,
                    adCreativeType: ne.p.QUEST_HOME_HERO,
                    questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: et.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(ef.D, {
        tag: "div",
        className: o()(np.FW, np.Bm),
        onClick: u,
        "aria-label": t.cta.buttonLabel,
        [sq]: !0,
        ...i,
        children: [
            (0, r.jsx)("div", {
                className: np.Ve,
                children: (0, r.jsx)(tN.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(np.pv, np.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(np.pv, np.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(th.animated.div, {
                className: np.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function nN(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        i = a.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: c, hours: u, minutes: d, seconds: h } = (0, ng.A)(i, tg.A.Millis.MINUTE),
        x = a.useMemo(
            () =>
                (0, nj.uN)(
                    { days: c, hours: u, minutes: d, seconds: h },
                    { days: eh.t["Ux/De1"], hours: eh.t.Lzd5Ie, minutes: eh.t.odmpbP },
                ),
            [c, u, d, h],
        ),
        E = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        f = a.useMemo(() => (0, tX.mq)(s.config, E), [s.config, E]),
        j = a.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, ts.xv)(e).type) {
                        case sd.l.IN_GAME:
                            return eh.intl.string(eh.t["O/J2kr"]);
                        case sd.l.COLLECTIBLE:
                            return eh.intl.string(eh.t.Jg17Ut);
                        case sd.l.VIRTUAL_CURRENCY:
                            return eh.intl.string(eh.t.ElYQFS);
                        default:
                            return (0, tX.mq)(e, t);
                    }
                })(s.config, E),
            [s.config, E],
        ),
        { completedRatio: C, completedRatioDisplay: S } = (0, ee.O9)(s),
        _ = a.useMemo(() => (0, tX.wo)(s.config, E), [s.config, E]),
        N = (0, nv.tG)(),
        T = (0, nv.WS)(),
        { isHovering: A, hoverProps: b } = nS(
            a.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: ne.p.QUEST_HOME_HERO,
                        event: e ? eS.HAw.QUEST_HOVER : eS.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Y.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, et.jO)(Y.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, T, l, s.id],
            ),
        ),
        { hoverSpring: O } = (0, tE.z)({ hoverSpring: +!!A, config: th.config.gentle }),
        R = a.useCallback(() => {
            n(s.id),
                N({
                    adContentId: t,
                    relatedQuestId: s.id,
                    adCreativeType: ne.p.QUEST_HOME_HERO,
                    questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: et.Cy.VIEW_QUESTS,
                    questContentPosition: l,
                    sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [n, t, s.id, N, l]);
    return (0, r.jsxs)(ef.D, {
        tag: "div",
        className: o()(np.FW, np.$R),
        onClick: R,
        "aria-label": eh.intl.string(eh.t["th2+0j"]),
        [sq]: !0,
        ...b,
        children: [
            (0, r.jsxs)(p.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nm.E, { type: { text: j } }),
                    (0, r.jsx)(th.animated.div, {
                        style: { opacity: (0, nC.a)(O.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nm.E, { type: { text: x }, icon: nh.O }),
                    }),
                ],
            }),
            (0, r.jsx)(th.animated.div, {
                className: np.Tr,
                style: { transform: O.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(t0.A, {
                    percentComplete: C,
                    overlayText: A && null != _ ? `${_}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(t1.A, {
                        quest: s,
                        questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: A,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(th.animated.div, {
                className: np.tw,
                style: {
                    opacity: (0, nC.a)(O.to([0, 1], [1, 0])),
                    transform: O.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(p.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: np.Ht,
                            children: f,
                        }),
                        (0, r.jsxs)(p.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(p.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(nx.y, { size: "xs", color: eE.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(p.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, t_.pv)(s.config) === nu.Z.VIDEO
                                            ? (0, r.jsx)(nE.S, { size: "xs", color: eE.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(tR._, { size: "xs", color: eE.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: S,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(th.animated.div, {
                className: np.um,
                style: { transform: O.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), R();
                    },
                    text: eh.intl.string(eh.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var nT = s(648731);
function nA(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e;
    return (0, r.jsx)(sP, {
        className: nT.v,
        children: (0, r.jsxs)(p.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, r.jsx)(tT.R, {
                    adContentId: t.id,
                    adCreativeType: ne.p.QUEST_HOME_HERO,
                    questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(n_, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, s) =>
                    (0, r.jsx)(
                        tT.R,
                        {
                            adContentId: t.id,
                            adCreativeType: ne.p.QUEST_HOME_HERO,
                            questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: s + 1,
                            sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                            children: (l) =>
                                (0, r.jsx)("div", {
                                    ref: (e) => {
                                        l.current = e;
                                    },
                                    children: (0, r.jsx)(nN, {
                                        heroId: t.id,
                                        quest: e,
                                        onQuestCtaClick: n,
                                        contentPosition: s + 1,
                                    }),
                                }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
}
var nb = s(95115);
function nO() {
    return (0, r.jsx)("div", { className: nb.Np });
}
function nR(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = a.useRef(null);
    (0, nn.A)(n, t7.rE.QUEST_HOME_DESKTOP);
    let l = a.useMemo(() => (null != s ? (0, tp.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, r.jsxs)("div", {
              className: nb.Tv,
              children: [
                  (0, r.jsx)(nO, {}),
                  (0, r.jsx)("div", {
                      className: nb.LO,
                      children: (0, r.jsx)("img", { className: nb.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nb.LO, nb.jx, nb.hw),
                      children: (0, r.jsx)("img", { className: nb.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nb.LO, nb.jx, nb.Co),
                      children: (0, r.jsx)("img", { className: nb.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: nb.Tv,
              children: [
                  (0, r.jsx)(nO, {}),
                  (0, r.jsx)("div", {
                      className: nb.LO,
                      children: (0, r.jsx)(tN.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: n,
                          imageAsset: {
                              alt: "",
                              className: nb.LY,
                              asset: { url: l, mimetype: (0, tp.vm)(l), isAnimated: !1 },
                              assetId: l,
                          },
                          videoAsset: {
                              alt: "",
                              className: nb.LY,
                              asset: { url: s, mimetype: (0, tp.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function nI(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        n = (0, m.bG)([el.A], () => el.A.quests),
        { shelfQuests: l, isShelfEnabled: i } = (0, ee.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, nc.I)();
    a.useEffect(() => {
        o();
    }, [o]);
    let c = a.useMemo(() => t.questIds?.find((e) => n.has(e)), [n, t.questIds]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tT.R, {
                adContentId: t.id,
                adCreativeType: ne.p.QUEST_HOME_HERO,
                questContent: Y.uF.QUEST_HOME_HERO,
                sourceQuestContent: Y.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsx)(no, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, r.jsxs)(p.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, r.jsx)("img", { src: t.sponsorImage, alt: "", className: nb.wm }),
                                (0, r.jsx)(v.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: nb.yu,
                                    children: eh.intl.string(eh.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, r.jsxs)(E.e, {
                            children: [
                                (0, r.jsx)(g.$, {
                                    onClick: () => {
                                        (0, ns._Q)(
                                            { adContentId: t.id, adCreativeType: ne.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: Y.uF.QUEST_HOME_HERO,
                                                ctaContent: et.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: Y.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !i &&
                                    null != c &&
                                    (0, r.jsx)(g.$, {
                                        onClick: () => {
                                            s(c),
                                                (0, nt.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: ne.p.QUEST_HOME_HERO,
                                                    questContent: Y.uF.QUEST_HOME_HERO,
                                                    questContentCTA: et.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: Y.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: eh.intl.string(eh.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, r.jsx)(nR, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, r.jsx)(nA, { hero: t, shelfQuests: l, onQuestCtaClick: s }),
        ],
    });
}
function nM() {
    return (0, r.jsx)("div", { className: o()(na.iE, na.FG, na.B3), children: (0, r.jsx)(eu.y, {}) });
}
function ny(e) {
    let { alt: t, ariaLabel: s, ariaHidden: n, role: l, width: a = 288, height: i = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: i },
        src: "https://cdn.discordapp.com/assets/content/f7e308880e4b4db999ae2e2c43f12f7882f717158ce2520aa36a9d60fb68c367.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": n,
        role: l ?? "img",
    });
}
var nQ = s(298537);
let nL = function (e) {
    let { matchingQuestIds: t } = e;
    return (0, r.jsxs)(p.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: nQ.kL,
        children: [
            (0, r.jsxs)(j.D, {
                variant: "heading-lg/medium",
                children: [eh.intl.string(eh.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(p.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: nQ.y7,
                      children: [
                          (0, r.jsx)(ny, { alt: eh.intl.string(eh.t["Xe+fJM"]) }),
                          (0, r.jsxs)(p.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(j.D, {
                                      variant: "heading-lg/medium",
                                      children: eh.intl.string(eh.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(j.D, {
                                      variant: "heading-sm/medium",
                                      children: eh.intl.string(eh.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: nQ.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": "382.6666666666667px",
                          "--custom-quest-grid-gap": "20px",
                      },
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              eG.Ay,
                              {
                                  eagerLoadAssets: !0,
                                  questId: e,
                                  questContent: Y.uF.QUEST_HOME_DESKTOP,
                                  contentPosition: t,
                                  rowIndex: Math.floor(t / 3),
                                  className: nQ.d,
                                  sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                              },
                              e,
                          ),
                      ),
                  }),
        ],
    });
};
var nH = s(379078),
    nU = s(704554);
let nD = {
    searchType: nH.n.FUZZY,
    searchStringGenerator: (e) =>
        [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(e9.Vq),
    sortType: nH.r.JARO_WINKLER,
    throttleMs: 200,
};
var nq = s(758836),
    nw = s(613057),
    nF = s(935824);
let nP = a.createContext({});
function nk(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: i, scrollerRef: o } = a.useContext(nP);
    return (0, r.jsxs)(sU.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(F.A, {
                onScroll: i,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(q.A, { className: nF.Jo, innerClassName: nF.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function nB(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(w.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function nV(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: n } = (0, B.Z)({ location: t7.rE.QUEST_HOME_DESKTOP }),
        l = (0, m.bG)([N.A], () => N.A.useReducedMotion),
        i = (0, m.bG)([W.A], () => W.A.isFocused()),
        { ref: o, inViewport: c } = (0, e5.p)(),
        u = a.useRef(null);
    if (
        (a.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (i && c && !l)
                    ? u.current.paused && !l && c && i && u.current.play()
                    : u.current.pause());
        }, [l, c, i]),
        n)
    ) {
        let e = (0, K.TM)();
        return (0, r.jsx)(M.A, {
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
            children: (0, r.jsx)("source", {
                src: e
                    ? "https://cdn.discordapp.com/assets/content/529e0aea2b87be4a587568435eaac176bf71b8dd46035db9c88acdee11187eb8.mp4"
                    : "https://cdn.discordapp.com/assets/content/fbd6cf99b9be35ba1d953fd30b81a35c9bd8edf7808b576ef6fc7c65cbc1d9a6.webm",
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/fff9144c814ffc3126fdcaf5ec5bc68eff6d09e23ac8af5a3fbe61b05970cda0.png",
        className: s,
        alt: "",
        onLoad: t,
    });
}
function nW(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, B.Z)({ location: t7.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsxs)("div", {
        className: o()(nF.Tv, { [nF.lJ]: s }),
        children: [
            (0, r.jsx)(nO, {}),
            (0, r.jsx)("div", { className: o()(nF.nz, { [nF.ZZ]: s }) }),
            (0, r.jsx)(nV, { onLoadComplete: t, className: o()(nF.Fe, { [nF.H4]: s, [nF.Q8]: !s }) }),
        ],
    });
}
function nG(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, B.Z)({ location: t7.rE.QUEST_HOME_DESKTOP }),
        n = a.useCallback(() => {
            s ? window.open(eS.X7G.PAID_TERMS_ORBS) : window.open(z.A.getArticleURL(eS.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(no, {
        adContentId: s ? t7.yr : t7.uz,
        title: s ? eh.intl.format(eh.t.BCBIlp, {}) : eh.intl.format(eh.t.lmMBfy, {}),
        subtitle: s ? eh.intl.format(eh.t.U9FY0J, {}) : eh.intl.string(eh.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(E.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: eh.intl.string(eh.t["1Wm127"]),
                          onClick: () =>
                              (0, R.Cz)({
                                  tab: nq.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: T.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: eh.intl.string(eh.t["7kTAgJ"]),
                          onClick: n,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: eh.intl.string(eh.t.hvVgAZ),
                  onClick: n,
                  icon: f.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(nW, { onAssetLoad: t }),
    });
}
function nK(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: a } = e;
    return (0, r.jsx)("div", {
        className: o()(nF.iS, { [nF.R]: a }),
        children: l
            ? (0, r.jsx)(nM, {})
            : null != n
              ? (0, r.jsx)(nI, { hero: n, onQuestCtaClick: s })
              : (0, r.jsx)(nG, { onAssetLoad: t }),
    });
}
function nz(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: o()(nF.BW, nF.rZ),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: o()(nF.BW, nF.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: o()(nF.BW, nF.rZ),
                alt: "",
            }),
        ],
    });
}
let n$ = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, c.zy)(),
        n = (0, c.W6)(),
        l = a.useMemo(() => (0, P.B)(s.pathname, eS.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        i = a.useMemo(() => new URLSearchParams(s.search).get(ee.L1.AD_CREATIVE_IDS), [s.search]),
        x = (0, m.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: E,
            onSelectTab: f,
            tabs: N,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = J.A.useField("tab"),
                n = (0, c.zy)(),
                l = (0, ee.p5)(),
                { enabled: r } = X.A8.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP });
            a.useEffect(() => {
                J.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let i = a.useCallback((e) => {
                J.A.getState().setTab(e);
            }, []);
            return {
                tabs: a.useMemo(
                    () =>
                        [
                            { id: ee.NC.ALL, label: r ? eh.intl.string(eh.t.Jt6u7B) : eh.intl.string(eh.t["0SzXmi"]) },
                            t
                                ? {
                                      id: ee.NC.CLAIMED,
                                      label: r ? eh.intl.string(eh.t["3TVY/R"]) : eh.intl.string(eh.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: ee.NC.PREVIEW_TOOL, label: eh.intl.string(eh.t.BDUDau) } : null,
                        ].filter(e9.Vq),
                    [t, l, r],
                ),
                selectedTab: s,
                onSelectTab: i,
            };
        })({ withClaimedQuestsTab: !l }),
        {
            query: M,
            setQuery: Q,
            matchingQuestIds: L,
        } = (() => {
            let [e, t] = a.useState(""),
                [s, n] = a.useState(null),
                l = (0, m.yK)([el.A], () =>
                    (0, ee.mn)(Array.from(el.A.quests.values()), { sortMethod: t7.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                i = "" !== r,
                o = a.useCallback(
                    (e) => {
                        n(
                            i
                                ? e
                                      .map((e) => {
                                          let { id: t } = e;
                                          return t;
                                      })
                                      .filter(e9.Vq)
                                : null,
                        );
                    },
                    [i],
                );
            return (0, nU.RT)(r, l, o, nD), { matchingQuestIds: s, query: e, setQuery: t };
        })();
    a.useLayoutEffect(() => {
        l && E === ee.NC.CLAIMED && J.A.setState({ tab: ee.NC.ALL });
    }, [l, E]);
    let { onScroll: q } = (0, U.G)(),
        w = Z.A.getState().getUtmCurrentContext(),
        F = s5((e) => e.registerAssetLoad),
        W = a.useRef(w);
    a.useEffect(() => {
        W.current = w;
    }),
        a.useEffect(() => {
            let { current: e } = W;
            (0, A.x)({
                name: d.ImpressionNames.QUEST_HOME,
                type: d.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: E,
                },
            });
        }, [E]);
    let { enabled: K } = (0, B.Z)({ location: t7.rE.QUEST_HOME_DESKTOP });
    (0, I.HU)({ location: eh.intl.string(eh.t.JALI2K) });
    let z = a.useRef(null),
        { enabled: es } = X.A8.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
        en = a.useRef(null),
        er = a.useCallback((e) => {
            en.current?.scrollToQuest(e);
        }, []),
        ea = a.useMemo(() => ((0, $.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: ei, isLoading: eo } = (0, ee.lg)(i),
        ec = a.useCallback(() => {
            (0, k.Y)({
                pageType: eS.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: eS.JJy.ORBS_BALANCE_MENU,
                ctaObject: eS.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, R.Cz)({ tab: nq.G2.ORBS, analyticsLocations: [], analyticsSource: T.A.ORBS_BALANCE_MENU });
        }, []);
    a.useEffect(() => {
        (0, _.I)(eS.BVt.QUEST_HOME);
    }, []),
        a.useEffect(() => {
            H.trigger();
        }, []),
        a.useEffect(() => {
            if (null != x) return;
            let e = new URLSearchParams(s.search),
                l = e.get(ee.L1.TAB);
            if (l === ee.NC.PREVIEW_TOOL) {
                let t = e.get(ee.L1.QUEST_ID);
                b.A.openNativeAppModal("quests", eS.e$_.DEEP_LINK, {
                    type: nw.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== ee.NC.PREVIEW_TOOL) {
                let t = (0, $.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(ee.L1.SORT),
                    r = e.get(ee.L1.FILTER),
                    a = e.get(ee.L1.AD_CREATIVE_IDS);
                b.A.openNativeAppModal("quests", eS.e$_.DEEP_LINK, {
                    type: nw.XK.QUEST_HOME,
                    params: { questId: (0, $.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: a },
                });
            }
        }, [s.search, x, n.action, s.hash, t]),
        a.useEffect(() => {
            t && (0, y.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eu = a.useCallback(() => {
            (0, e4.navigateToQuestHome)({ fromContent: Y.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                G.default.track(eS.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: et.Cy.VIEW_QUESTS,
                    click_id: (0, u.A)(),
                    is_targeted: !1,
                    ...(0, et.fF)(Y.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        ed = a.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), z.current?.scrollToTop({ animate: !1 }), f(e);
            },
            [n, f],
        ),
        em = a.useCallback(() => {
            Q("");
        }, [Q]),
        ex = a.useMemo(() => null != L && es, [L, es]);
    return (0, r.jsx)(s9.M.Provider, {
        value: a.useMemo(() => ({ onAssetLoadComplete: F }), [F]),
        children: (0, r.jsx)(nP.Provider, {
            value: a.useMemo(() => ({ onScroll: q, scrollerRef: z }), [q, z]),
            children: (0, r.jsx)("div", {
                className: o()(nF.kL, { [nF.KY]: !t }),
                children: l
                    ? (0, r.jsx)(nk, {
                          withFullBleedBanner: !0,
                          header: (0, r.jsx)(nB, { selectedTab: E, onSelectTab: ed, tabs: N }),
                          banner: (0, r.jsx)(D.A, {
                              title: eh.intl.string(eh.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, r.jsx)(g.$, {
                                  variant: "overlay-primary",
                                  text: eh.intl.string(eh.t.GURBQl),
                                  onClick: eu,
                              }),
                              className: nF.Gj,
                              children: (0, r.jsx)(nz, { onLoadComplete: F }),
                          }),
                          children: (0, r.jsxs)("div", {
                              className: nF.kj,
                              children: [
                                  (0, r.jsx)(j.D, {
                                      variant: "heading-xl/semibold",
                                      children: eh.intl.string(eh.t.z8YP2A),
                                  }),
                                  (0, r.jsx)(v.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: eh.intl.string(eh.t.HdKh65),
                                  }),
                                  (0, r.jsx)(C.Q, {
                                      text: eh.intl.string(eh.t["1CdL8d"]),
                                      onClick: eu,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, r.jsxs)(nk, {
                          header: (0, r.jsx)(nB, {
                              selectedTab: E,
                              onSelectTab: ed,
                              tabs: N,
                              endContent: (0, r.jsxs)(p.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      es &&
                                          (0, r.jsx)(S.I, {
                                              query: M,
                                              onChange: Q,
                                              placeholder: eh.intl.string(eh.t.y10TI2),
                                              onClear: em,
                                              size: "sm",
                                          }),
                                      K &&
                                          (0, r.jsx)(V.SS, {
                                              analyticsPage: eS.liQ.GLOBAL_DISCOVERY_QUESTS,
                                              cardAlignment: V.cP.END,
                                              ctaText: eh.intl.string(eh.t["J+vlIR"]),
                                              ctaOnClick: ec,
                                          }),
                                  ],
                              }),
                          }),
                          banner:
                              E === ee.NC.ALL &&
                              (0, r.jsx)(nK, {
                                  onAssetLoad: F,
                                  onQuestCtaClick: er,
                                  hasSearchResults: ex,
                                  questHomeHero: ei,
                                  isLoadingQuestHomeHero: eo,
                              }),
                          children: [
                              ex && null != L && (0, r.jsx)(nL, { matchingQuestIds: L }),
                              E === ee.NC.CLAIMED
                                  ? (0, r.jsx)(sO, { onSelectTab: ed, className: ex ? nF.R : void 0 })
                                  : E === ee.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(e3, { className: ex ? nF.R : void 0 })
                                    : es
                                      ? (0, r.jsx)(s7, {
                                            className: ex ? nF.R : void 0,
                                            ref: en,
                                            deepLinkedQuestId: ea,
                                            isLoadingQuestHomeHero: eo,
                                        })
                                      : (0, r.jsx)(sc, { ref: en }),
                          ],
                      }),
            }),
        }),
    });
};
