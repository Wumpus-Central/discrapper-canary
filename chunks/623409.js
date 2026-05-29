let n;
s.r(t), s.d(t, { default: () => n4 }), s(323874), s(14289), s(35956);
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
    E = s(577473),
    x = s(825484),
    g = s(821609),
    f = s(509434),
    j = s(534514),
    v = s(834730),
    C = s(123292),
    S = s(331322),
    _ = s(892547),
    p = s(944791),
    N = s(775602),
    T = s(793574),
    O = s(139286),
    A = s(197111),
    b = s(10088),
    R = s(859040),
    I = s(726249),
    M = s(607470),
    y = s(826673),
    Q = s(840251),
    L = s(688151);
let U = new Q.E([], L.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var H = s(711111),
    D = s(701508),
    F = s(979590),
    q = s(749638),
    w = s(783531),
    P = s(334465),
    k = s(318346),
    B = s(371446),
    V = s(70926),
    G = s(531685),
    W = s(174459),
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
let eE = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(em.$T, {
        color: em.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : eh.intl.string(eh.t.ZErSg5) }),
    });
};
var ex = s(661531),
    eg = s(602853),
    ef = s(939249),
    ej = s(817281),
    ev = s(688810),
    eC = s(487245),
    eS = s(363195),
    e_ = s(652215),
    ep = s(398876);
let eN = function () {
    let { analyticsLocations: e } = (0, ev.Ay)(),
        t = (0, m.bG)([eS.A], () => eS.A.theme),
        s = a.useRef(null);
    a.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, eg.r)(ex.A.colors.BACKGROUND_BASE_LOW, e_.NJ8.LIGHT),
        l = (0, eg.r)(ex.A.colors.BACKGROUND_BASE_LOW, e_.NJ8.DARKER),
        i = (0, eg.r)(ex.A.colors.BACKGROUND_BASE_LOW, e_.NJ8.MIDNIGHT),
        o = a.useMemo(
            () => [
                { theme: e_.NJ8.LIGHT, label: eh.t.K2sFfo, color: n.hex() },
                { theme: e_.NJ8.DARKER, label: eh.t.b8Cei3, color: l.hex() },
                { theme: e_.NJ8.MIDNIGHT, label: eh.t.Do4ZJx, color: i.hex() },
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
        className: ep.N,
        children: (0, r.jsxs)("div", {
            className: ep.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        ef.D,
                        {
                            tag: "div",
                            className: ep.Du,
                            onClick: () => c(e.theme),
                            "aria-label": eh.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${ep.WT} ${t === e.theme ? ep.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: ep.i, children: eh.intl.string(e.label) }),
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
    eO = s(60857);
let eA = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [i, o] = a.useState(!1),
        [c, u] = a.useState(!1),
        d = a.useRef(null),
        h = (0, ee.pT)(),
        E = (0, m.bG)([el.A], () => (null != t ? el.A.getFetchQuestPreviewError(t) : null), [t]),
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
        S = a.useCallback(async () => {
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
        _ = a.useCallback(
            (e) => {
                (0, $.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: eO.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: eO.Br,
                    children: (0, r.jsxs)("div", {
                        className: eO.bo,
                        children: [
                            (0, r.jsx)(eN, {}),
                            (0, r.jsxs)("div", {
                                className: eO.b8,
                                children: [
                                    (0, r.jsx)(
                                        er.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: _,
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
                    className: eO.in,
                    children: (0, r.jsxs)(x.e, {
                        className: eO.xv,
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
                                onClick: S,
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
                                        className: eO.PP,
                                        children: (0, r.jsx)("div", {
                                            className: eO.sH,
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
            null != E ? (0, r.jsx)(eE, { error: E }) : null,
            f ? (0, r.jsx)(eu.y, {}) : null,
        ],
    });
};
var eb = s(364522),
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
var eU = s(241124),
    eH = s(732047),
    eD = s(717695),
    eF = s(763578),
    eq = s(111113);
let ew = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eF.wp,
            children: [
                (0, r.jsx)(j.D, {
                    className: eF.Oo,
                    variant: "heading-md/semibold",
                    children: eh.intl.string(eh.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: eF.RE,
                    children: (0, r.jsx)("div", {
                        className: eF.Z,
                        children: (0, r.jsx)("div", {
                            className: eq.C3,
                            children: (0, r.jsx)(eD.A, {
                                children: (0, r.jsx)(eU.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, r.jsx)(eH.Y, { quest: t }),
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
let eG = function (e) {
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
var eW = s(291922);
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
                (0, r.jsx)(eW.Ay, {
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
                                                    status: e_.clD.ONLINE,
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
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ew, { quest: n }), (0, r.jsx)(eM, {})] }),
                l("home_card") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eK, { quest: n }), (0, r.jsx)(eM, {})] }),
                l("share_embed") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eG, { questId: n.id }), (0, r.jsx)(eM, {})] }),
                l("channel_call_header") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ek, { quest: n }), (0, r.jsx)(eM, {})] }),
                l("members_list") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(e1, { quest: n }), (0, r.jsx)(eM, {})] }),
                l("activity_panel") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eL, { quest: n }), (0, r.jsx)(eM, {})] }),
            ],
        });
    };
var e7 = s(497275);
function e3(e) {
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
    return (0, r.jsx)(eb.Ip, {
        className: o()(e7.kL, i),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: e7.qE,
            children: [
                (0, r.jsx)(j.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eh.intl.string(eh.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: e7.pf, children: l }),
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
                (0, r.jsx)("div", { className: e7.tZ, children: (0, r.jsx)("div", { className: e7.Qs, children: t }) }),
            ],
        }),
    });
}
function e8(e) {
    return new URLSearchParams(e).get(ee.L1.QUEST_ID);
}
let e4 = function (e) {
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
                        t.push(`${e_.BVt.QUEST_HOME}?${e.toString()}`);
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
    return (0, r.jsx)(e3, {
        className: s,
        controls: (0, r.jsx)(eA, {
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
var e5 = s(617986),
    e6 = s(203879),
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
    tE = s(717421),
    tx = s(927813),
    tg = s(710969);
function tf(e, t, s) {
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
var tj = s(173936),
    tv = s(365199),
    tC = s(551875),
    tS = s(971649),
    t_ = s(814793),
    tp = s(415441),
    tN = s(73473),
    tT = s(270045),
    tO = s(371912),
    tA = s(79545),
    tb = s(687966),
    tR = s(782134),
    tI = s(138134),
    tM = s(768622),
    ty = s(785866),
    tQ = s(662940),
    tL = s(719021);
function tU(e) {
    let { quest: t } = e,
        s = (0, tA.Pd)(t),
        n = (0, ee.fc)(t),
        l = (0, ee.I3)(t),
        i = a.useMemo(() => (0, tQ.Dd)(t.config, s), [t.config, s]),
        o = a.useMemo(() => (0, tQ.CK)(s, n, l), [s, n, l]);
    return (0, r.jsxs)("div", {
        className: tL.qS,
        children: [
            null != i && (0, r.jsx)(v.E, { variant: "text-xs/bold", color: "always-white", children: i }),
            null != i &&
                null != o &&
                (0, r.jsx)(v.E, { variant: "text-xs/bold", color: "always-white", children: "\u2022" }),
            null != o &&
                (0, r.jsxs)("span", {
                    className: tL.BA,
                    children: [
                        (function (e) {
                            let t = { size: "xxs", className: tL.rF, color: "currentColor" };
                            switch ((0, tQ.pv)(e)) {
                                case tQ.UK.PLAY:
                                    return (0, r.jsx)(tb._, { ...t });
                                case tQ.UK.WATCH:
                                    return (0, r.jsx)(tR.u, { ...t });
                                case tQ.UK.ACTIVITY:
                                    return (0, r.jsx)(tI.i, { ...t });
                                case tQ.UK.INSTANT_PLAY:
                                    return (0, r.jsx)(tM.g, { ...t });
                                case tQ.UK.ARENA:
                                    return (0, r.jsx)(ty._, { ...t });
                            }
                        })(t),
                        (0, r.jsx)(v.E, { variant: "text-xs/bold", tag: "span", color: "always-white", children: o }),
                    ],
                }),
        ],
    });
}
var tH = s(409626),
    tD = s(629455),
    tF = s(646917),
    tq = s(576761),
    tw = s(895253),
    tP = s(743368),
    tk = s(792620),
    tB = s(192551),
    tV = s(919500);
function tG(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: a } = e,
        i = (0, tA.Pd)(t),
        c = i === tA.UA.EXPIRED || (i === tA.UA.CLAIMED && (0, tk.GL)(t)),
        u = (0, ee.do)({ quest: t, content: s, ctaContent: et.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tV.lO, { [tV.Fq]: l }),
        children: (0, r.jsx)("div", {
            className: tV.mv,
            children: (0, r.jsxs)(x.e, {
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
                              icon: tP.W,
                              "aria-label": eh.intl.string(eh.t.LLLLPD),
                              onClick: u,
                          }),
                    !c &&
                        (0, r.jsx)(tB.A, {
                            quest: t,
                            surface: tA.V3.QUEST_HOME_TILE_V2_FOOTER,
                            analyticsCtxQuestContent: s,
                            analyticsCtxSourceQuestContent: n,
                        }),
                ],
            }),
        }),
    });
}
var tW = s(403581),
    tK = s(646440);
function tz(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, ee.ZP)(s),
        a = (0, tq.B9)(n);
    if (null == l) return null;
    let i = a
        ? eh.intl.formatToPlainString(eh.t.l2UfLG, { bonusOrbMultiplier: l })
        : eh.intl.formatToPlainString(eh.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(ef.D, {
        onClick: () => {
            (0, e5.gC)(l, n), t?.();
        },
        "aria-label": i,
        children: (0, r.jsxs)("div", {
            className: tK.k,
            children: [
                (0, r.jsx)(tW.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(v.E, { variant: "text-sm/normal", color: "currentColor", className: tK.Q, children: i }),
            ],
        }),
    });
}
var t$ = s(947641),
    tY = s(194261),
    tJ = s(106799),
    tZ = s(801365),
    tX = s(453384),
    t0 = s(646764),
    t1 = s(269999);
function t2(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        a = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        i = (0, tZ.mq)(t.config, a),
        o = (0, tZ.ks)(t.config),
        c = (0, tZ.wo)(t.config, a),
        u = (0, tZ.l0)(t.config, a),
        d =
            null != c
                ? c > 700 * u
                    ? tC.i2.TIER_4
                    : c > 200 * u
                      ? tC.i2.TIER_3
                      : c > 100 * u
                        ? tC.i2.TIER_2
                        : tC.i2.TIER_1
                : void 0,
        { completedRatio: h } = (0, ee.O9)(t),
        E = t.userStatus?.claimedAt != null,
        x = (0, tg.Ic)(t),
        g = E ? "completed" : x ? "expired" : null;
    return (0, r.jsxs)("div", {
        className: t1.CZ,
        children: [
            (0, r.jsx)("div", {
                className: t1.tE,
                children: (0, r.jsx)(tX.A, {
                    style: "small",
                    size: 58,
                    percentComplete: h,
                    useAltStyle: !0,
                    children: (0, r.jsxs)("div", {
                        className: t1.n5,
                        children: [
                            (0, r.jsx)(t0.A, {
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
                                    className: t1.EY,
                                    children: (0, r.jsx)(t$.r, { className: t1.AM, size: "sm", color: "currentColor" }),
                                }),
                            "expired" === g &&
                                (0, r.jsx)("div", {
                                    className: t1.EY,
                                    children: (0, r.jsx)(tY.X, { size: "sm", className: t1.Sz, color: "currentColor" }),
                                }),
                        ],
                    }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: t1.FS,
                children: [
                    (0, r.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: t1.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            o && (0, r.jsx)(tJ.A, { className: t1.Kq, customSize: 18 }),
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
    t3 = s(315767);
function t8(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: i } = e,
        o = a.useRef(null),
        c = (0, tD.A9)(t, i, t7.rE.QUEST_HOME_DESKTOP, s, tH.Ob.QuestHome, o),
        u = (0, tF.z)(),
        d = (0, ee.SD)(t, u),
        m = u === tq.MA.NITRO && d;
    return (0, r.jsxs)("div", {
        ref: o,
        children: [
            (0, r.jsx)(tw.A, { visible: m, glow: !0 }),
            (0, r.jsx)(t2, { quest: t, questContent: s, sourceQuestContent: i, isHovering: n }),
            (0, r.jsxs)("div", {
                className: t3.yM,
                children: [
                    (0, r.jsx)(v.E, {
                        style: { opacity: n ? 1 : 0.8 },
                        variant: "text-sm/medium",
                        className: t3.Wj,
                        lineClamp: n ? void 0 : 1,
                        children: c,
                    }),
                    (0, r.jsxs)("div", {
                        className: t3.Gv,
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
                                        (0, r.jsx)(tz, { questId: t.id, orbMultiplierEligibility: u }),
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
        u = a.useMemo(() => (0, tC.tW)(t, tC.fY.QUEST_BAR_HERO_IMAGE), [t]),
        d = a.useMemo(() => (0, tC.tW)(t, tC.fY.QUEST_BAR_HERO_VIDEO), [t]),
        {
            isActive: m,
            shouldRender: h,
            hoverHandlers: E,
            handleMenuOpen: x,
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
                E = a.useCallback(() => {
                    h(),
                        l(!0),
                        m(),
                        (u.current = requestAnimationFrame(() => {
                            u.current = requestAnimationFrame(() => {
                                (u.current = null), s(!0);
                            });
                        }));
                }, []),
                x = a.useCallback(() => {
                    m(),
                        s(!1),
                        h(),
                        (d.current = setTimeout(() => {
                            (d.current = null), l(!1);
                        }, e));
                }, [e]),
                g = a.useCallback(() => i(!0), []),
                f = a.useCallback(() => {
                    i(!1), o.current || c.current || x();
                }, [x]),
                j = a.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            (o.current = !0), E();
                        },
                        onMouseLeave: () => {
                            (o.current = !1), r || x();
                        },
                        onFocus: () => {
                            (c.current = !0), E();
                        },
                        onBlur: () => {
                            (c.current = !1), r || x();
                        },
                    }),
                    [E, x, r],
                );
            return (
                a.useEffect(
                    () => () => {
                        m(), h();
                    },
                    [],
                ),
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: j, handleMenuOpen: g, handleMenuClose: f }
            );
        })(),
        f = (0, tA.Pd)(t),
        j = (0, tS.go)(),
        v = (0, t_.E0)(t.config),
        C = (0, tO.Lk)({
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
        ...E,
        children: [
            (0, r.jsx)(tp.N, {
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
            (0, r.jsx)("div", { className: o()(t4.sL, { [t4.Mq]: f === tA.UA.EXPIRED }) }),
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
                                    children: (0, r.jsx)(tj.q, { size: "sm", color: "currentColor" }),
                                }),
                            (0, r.jsx)(tT.C, {
                                questContent: s,
                                quest: t,
                                hideLearnMore: !0,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                sourceQuestContent: c,
                                onOpen: x,
                                onClose: g,
                                children: (e) =>
                                    (0, r.jsx)(ef.D, {
                                        ...e,
                                        tag: "div",
                                        className: o()(t4.E9, { [t4.CJ]: m }),
                                        "aria-label": eh.intl.string(eh.t.DEoVWZ),
                                        children: (0, r.jsx)(tv.j, { size: "sm", color: "currentColor" }),
                                    }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(t8, { quest: t, questContent: s, isInFeaturedSection: n, isHovering: m, sourceQuestContent: c }),
        ],
    });
}
let t6 = a.memo(function (e) {
    let t = (0, m.bG)([el.A], () => (null != e.questId ? el.A.getQuest(e.questId) : void 0), [e.questId]),
        s = a.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(tN.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === Y.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(t5, { ...e, quest: s, impressionRef: t }),
          });
});
var t9 = s(691540),
    se = s(857250),
    st = s(97483);
function ss() {
    let { enabled: e } = X.jm.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
        t = a.useRef(null);
    return {
        showToast: a.useCallback(
            (s) => {
                t.current !== s &&
                    e &&
                    ((0, t9.P0)((0, se.o)(eh.intl.string(eh.t["5ABf1w"]), st.Ck.FAILURE)),
                    W.default.track(e_.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: s }),
                    (t.current = s));
            },
            [e],
        ),
    };
}
var sn = s(535185);
function sl(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
let sr = function (e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = a.useState(null),
        i = a.useCallback(() => {
            r(sl(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, sn.g)(e, i, [t, s], { fireOnMount: !0 }), l;
};
var sa = s(121480);
let si = 4 * tx.A.Millis.SECOND;
function so(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = a.useRef(null),
        i = sr(l, s, n);
    return (0, r.jsx)("div", {
        className: sa.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== i && t(i),
    });
}
let sc = a.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: i,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        m = (0, c.zy)(),
        { showToast: h } = ss(),
        E = a.useRef(""),
        [x, g] = a.useState(null),
        [f, C] = a.useState(0),
        { enabled: S } = X.aD.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: _ }, p] = (0, tE.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: si },
        })),
        N = a.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !i) return !1;
                let t = (0, tg.vc)(e, s, n);
                return null == t ? (h(e), !1) : (g(t.id), C((e) => e + 1), !0);
            },
            [s, n, l, h, i],
        );
    return (a.useImperativeHandle(t, () => ({ scrollToQuest: N }), [N]),
    a.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            E.current = "";
            return;
        }
        l || !i || (m.hash !== E.current && N(m.hash.slice(1)) && (E.current = m.hash));
    }, [m.hash, l, i, N]),
    a.useLayoutEffect(() => {
        if (null == x) return;
        let e = document.getElementById(`quest-tile-${x}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            p({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || g(null);
                },
            }));
    }, [x, f, p]),
    l && 0 === s.length)
        ? (0, r.jsx)(eu.y, { className: sa.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sa.y7,
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
          : (0, r.jsx)(so, {
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
                                className: o()({ [sa.XB]: l }),
                                style: tf(l, a, _),
                                children: [
                                    l && (0, r.jsx)("div", { className: sa.E4 }, f),
                                    S
                                        ? (0, r.jsx)(t6, {
                                              quest: t,
                                              questContent: Y.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sa.d,
                                              sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eW.Ay, {
                                              quest: t,
                                              questContent: Y.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sa.d,
                                              sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var su = s(458518),
    sd = s(65990);
let sm = [],
    sh = ee.L1.SORT,
    sE = ee.L1.FILTER,
    sx = a.forwardRef(function (e, t) {
        let s,
            n,
            l,
            i,
            o = a.useRef(null),
            [u, d] =
                ((s = (0, su.o)()),
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
                    (e = u.get(sh)),
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
                    })(u.get(sE)) ?? sm,
                [u],
            ),
            E = a.useCallback(
                (e) => {
                    d({ [sh]: e });
                },
                [d],
            ),
            x = a.useCallback(
                (e) => {
                    d({
                        [sE]:
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
            { enabled: g } = X.jm.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
            {
                quests: f,
                excludedQuests: v,
                isFetchingCurrentQuests: C,
                hasFetched: S,
            } = (0, ee.Qh)(
                ee.NC.ALL,
                a.useMemo(() => ({ sortMethod: m, filters: h, removeExpiredQuests: g }), [m, h, g]),
            ),
            _ = a.useCallback(() => {
                x(sm);
            }, [x]),
            p = a.useRef(null),
            N = a.useRef(null),
            T = (0, c.zy)(),
            O = (0, c.W6)();
        return (
            a.useEffect(() => {
                "" !== T.hash &&
                    null != p.current &&
                    null != N.current &&
                    (m !== p.current || h !== N.current) &&
                    O.replace({ ...T, hash: void 0 });
            }, [m, h, T, O]),
            a.useEffect(() => {
                p.current = m;
            }, [m]),
            a.useEffect(() => {
                N.current = h;
            }, [h]),
            (0, ee.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: f.length }),
            a.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        _(),
                            E(t7.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [_, E],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: sd.Mj,
                        children: [
                            (0, r.jsx)(j.D, { variant: "heading-lg/medium", children: eh.intl.string(eh.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sd.Nf,
                                children: [
                                    (0, r.jsx)(tm, { onChange: E, optionClassName: sd.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(tc, { onChange: x, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(sc, {
                        ref: o,
                        quests: f,
                        excludedQuests: v,
                        isFetching: C,
                        hasFetched: S,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: _,
                    }),
                ],
            })
        );
    });
var sg = s(575593),
    sf = s(440703),
    sj = s(462887),
    sv = s(187322),
    sC = s(765671),
    sS = s(736653),
    s_ = s(162232),
    sp = s(734736),
    sN = s(303136),
    sT = s(265234),
    sO = s(181713);
let sA = (e) => {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sO.A : sO.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sT.k, t),
        children: s
            ? (0, r.jsx)(sN.A, {
                  preload: "auto",
                  className: sT.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sT.L, src: l, alt: n }),
    });
};
var sb = s(57718),
    sR = s(659249);
let sI = (0, a.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, a.useState)(!1),
        [l, i] = (0, a.useState)(24),
        [c, u] = (0, a.useState)(!1),
        d = (0, a.useRef)(null),
        h = (0, a.useRef)(null),
        E = (0, a.useRef)(null),
        x = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        { ref: g, height: f = 0 } = (0, sC.Ay)(),
        C = (0, sS.Ay)(),
        S = (0, ee.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        _ = t.userStatus?.claimedTier ?? 0,
        p = t.config.rewards[_],
        N = p?.type === sf.l.FRACTIONAL_PREMIUM,
        T = p?.type === sf.l.COLLECTIBLE,
        O = p?.type === sf.l.VIRTUAL_CURRENCY,
        A = p?.collectibleProduct?.items?.[0],
        b = A?.type === sg.R.AVATAR_DECORATION ? A : null,
        R = a.useMemo(
            () =>
                null == p
                    ? null
                    : !0 === O && t.userStatus?.orbQuantityClaimed != null
                      ? eh.intl.format(eh.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : p.name,
            [p, O, t],
        );
    (0, sC.i4)(d, (e) => {
        let { height: t } = e;
        if (!T || null == t || null == h.current || null == d.current || null == E.current) return;
        let s = d.current.getBoundingClientRect(),
            n = h.current.getBoundingClientRect(),
            l = E.current.getBoundingClientRect();
        i((n.top - s.top - l.height) / 2);
    });
    let I = (0, sj.M)(C),
        y = a.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        Q = a.useMemo(() => (0, tC.tW)(t, tC.fY.REWARD), [t]),
        L = s ? f + 8 : 0,
        { content_position: U, row_index: H, ...D } = (0, et.fF)(Y.uF.TROPHY_CASE_CARD),
        F = () => {
            n(!0), W.default.track(e_.HAw.QUEST_HOVER, { quest_id: t.id, ...D });
        },
        q = () => {
            n(!1);
        },
        w = (e) => {
            u(!0), W.default.track(e_.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == p || c
        ? null
        : (0, r.jsx)(sv.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: F,
                  onBlur: q,
                  onMouseEnter: F,
                  onMouseLeave: q,
                  className: o()(sR.kL, { [sR.yo]: s }),
                  children: [
                      null != x &&
                          T &&
                          null != b &&
                          (0, r.jsx)("div", {
                              ref: E,
                              className: sR.FX,
                              style: { top: l },
                              children: (0, r.jsx)(s_.A, {
                                  avatarDecorationOverride: b,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      N
                          ? (0, r.jsx)(sp.A, { className: sR.Sl })
                          : O
                            ? (0, r.jsx)(sA, {
                                  className: sR.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : Q.isAnimated
                              ? (0, r.jsx)(M.A, {
                                    className: sR.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: Q.url,
                                        type: Q.mimetype ?? void 0,
                                        onError: () => w(Q.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sR.Sl,
                                    src: Q.url,
                                    alt: t.config.messages.questName,
                                    onError: () => w(Q.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sR.Lw, { [sR.en]: I, [sR.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: h,
                          className: sR.r$,
                          style: { transform: `translateY(-${L}px)` },
                          children: (0, r.jsx)(sb.Ay, {
                              logotypeClassName: o()(sR.wm, { [sR.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: g,
                          className: sR.zH,
                          children: [
                              (0, r.jsx)(j.D, {
                                  className: sR.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eh.intl.format(eh.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "always-white",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: eh.intl.format(eh.t["kXVcV+"], { reward: R, claimedDate: S }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sM = s(396478);
function sy(e) {
    let { onClick: t } = e,
        n = (0, sS.Ay)();
    return (0, r.jsxs)(sM.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sM.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sM.SG, { note: eh.intl.format(eh.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sQ = s(975424);
function sL(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, ee.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(eu.y, { className: sQ.u })
        : 0 === n.length
          ? (0, r.jsx)(sy, { onClick: () => t(ee.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sQ.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sI, { quest: e }, e.id)),
            });
}
var sU = s(548411),
    sH = s(554830),
    sD = s(689175),
    sF = s(321503);
let sq = (e) => ex.A.space.SPACE_XL.resolve({ density: e }),
    sw = (e) => (1220 - 2 * sq(e) * 0.75) / 3;
var sP =
    (((l = {}).FEATURED = "featured"),
    (l.IN_PROGRESS = "in-progress"),
    (l.ENDING_SOON = "ending-soon"),
    (l.ORB = "orb"),
    (l.DISCOVERED = "discovered"),
    l);
let sk = [
    { type: "featured-quests", identifier: "featured", title: eh.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "in-progress", title: eh.t.CHJy6z },
    { type: "quests", identifier: "ending-soon", title: eh.t.PRg3qh },
    { type: "quests", identifier: "orb", title: eh.t["0Uc94A"] },
    { type: "quests", identifier: "discovered", title: eh.t["u9Ug++"] },
];
var sB = s(522403);
let sV = "data-scroll-target",
    sG = `[${sV}]`,
    sW = { anchors: [], pageSize: 1 },
    sK = a.memo(function (e) {
        let {
                children: t,
                className: s,
                itemSelector: n = sG,
                maskWidth: l = 24,
                overflowAmount: i = 0,
                maskMarginMultiplier: c = 1,
            } = e,
            u = a.useRef(null),
            [d, h] = a.useState(!1),
            [E, x] = a.useState(!1),
            [g, f] = a.useState(!1),
            [j, v] = a.useState([]),
            [C, S] = a.useState(1),
            _ = (0, m.bG)([N.A], () => N.A.useReducedMotion) ? "auto" : "smooth",
            [p, T] = a.useState(!1),
            O = a.useCallback(
                (e) => {
                    e.isIntersecting ? T(!0) : T(!1);
                },
                [T],
            ),
            A = a.useContext(sF.X),
            b = (0, e6.B)(
                O,
                { root: A?.current?.getScrollerNode() ?? null, threshold: 0, rootMargin: "150px 0px 150px 0px" },
                !0,
            ),
            R = a.useCallback(() => {
                let e = u.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (h(e.scrollLeft > 0), x(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
            }, []),
            I = a.useCallback(() => {
                let { anchors: e, pageSize: t } = (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return sW;
                    let a = Array.from(r.querySelectorAll(s));
                    if (0 === a.length) return sW;
                    let i = a[0].offsetWidth,
                        o = a.length > 1 ? a[1].offsetLeft - a[0].offsetLeft - i : 0,
                        c = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (i + o))),
                        u = a.length - c + 1;
                    return u <= 1
                        ? sW
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
                })({ scrollerRef: u, itemSelector: n, maskWidth: l, maskMarginMultiplier: c });
                S(t), v((t) => (t.length === e.length && t.every((t, s) => t === e[s]) ? t : e));
            }, [l, n, c, v]),
            M = a.useCallback(() => {
                if (null == b.current) return f(!0);
                f(b.current?.clientWidth >= 1260);
            }, [b]),
            y = a.useCallback(
                (e) => {
                    let t = u.current?.getScrollerNode();
                    if (null == t || j.length < 2) return;
                    let s = j.length - 1,
                        n = Math.max(0, t.scrollWidth - t.clientWidth),
                        l = j.map((e, l) => (0 === l ? 0 : l === s ? n : e - t.clientWidth / 2)),
                        r = (e) => Math.abs(e - t.scrollLeft),
                        a = Math.max(0, Math.min(s, l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0) + e * C));
                    t.scrollTo({ left: l[a], behavior: _ });
                },
                [_, j, C],
            ),
            Q = a.useCallback(
                (e) => {
                    let t = u.current?.getScrollerNode();
                    if (null == t) return;
                    let s = e.target.closest(n);
                    if (null == s || !t.contains(s)) return;
                    let r = t.getBoundingClientRect(),
                        a = s.getBoundingClientRect(),
                        i = r.left + l - a.left,
                        o = a.right - (r.right - l);
                    i > 0 ? t.scrollBy({ left: -i, behavior: _ }) : o > 0 && t.scrollBy({ left: o, behavior: _ });
                },
                [n, l, _],
            ),
            L = a.useCallback(() => {
                R(), I(), M();
            }, [R, I, M]);
        (0, sn.g)(b, L, [], { fireOnMount: !0 });
        let U = i > 0,
            H = a.useMemo(
                () => ({
                    "--custom-scroller-mask-width": `${l}px`,
                    "--custom-scroller-overflow-amount": `${i}px`,
                    "--custom-scroller-scroll-behavior": _,
                }),
                [l, i, _],
            );
        return (0, r.jsxs)("div", {
            className: o()(s, sB.m7),
            ref: b,
            style: H,
            children: [
                (0, r.jsx)("div", {
                    className: o()(sB.k9, sB.RW, { [sB.Q2]: d }),
                    "aria-hidden": !d,
                    children: (0, r.jsx)(ea.K, {
                        icon: sU.Z,
                        variant: "overlay-secondary",
                        onClick: () => y(-1),
                        disabled: !d,
                        "aria-label": eh.intl.string(eh.t.vgfxaA),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(sB.k9, sB.K3, { [sB.Q2]: E }),
                    "aria-hidden": !E,
                    children: (0, r.jsx)(ea.K, {
                        icon: sH.K,
                        variant: "overlay-secondary",
                        onClick: () => y(1),
                        disabled: !E,
                        "aria-label": eh.intl.string(eh.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [sB.sF]: d && p && g, [sB.RC]: E && p && g, [sB.Ni]: U && !d, [sB.GA]: U && !E }),
                    children: (0, r.jsx)(sD.zC, {
                        ref: u,
                        orientation: "horizontal",
                        onScroll: R,
                        onFocusCapture: Q,
                        className: o()({ [sB.x2]: U }, sB.XG),
                        children: (0, r.jsxs)(sF.X.Provider, {
                            value: u,
                            children: [
                                t,
                                j.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: sB.fw, style: { insetInlineStart: `${e}px` } },
                                        t,
                                    ),
                                ),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    sz = a.createContext({ targetQuestId: null, highlightCount: null, highlightAnimationProgress: null });
var s$ = s(76060);
function sY(e) {
    let { children: t, questId: s } = e,
        { targetQuestId: n, highlightCount: l, highlightAnimationProgress: i } = a.useContext(sz),
        o = n === s,
        c = null != n && n !== s,
        { enabled: u } = X.aD.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
        d = a.useMemo(() => ({ ...tf(o, c, i), borderRadius: u ? "var(--radius-xl)" : "10px" }), [o, c, i, u]);
    return (0, r.jsxs)(th.animated.div, {
        [sV]: "",
        className: o ? s$.X : void 0,
        style: d,
        children: [o && (0, r.jsx)("div", { className: s$.E }, l), t],
    });
}
var sJ = s(474646);
function sZ(e) {
    let { containerWidth: t, questIds: s, setMaxRowIndex: n } = e,
        { enabled: l } = X.aD.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
        i = a.useMemo(() => (null == t ? null : sl(t, 345, 20, 2)), [t]);
    return (
        a.useEffect(() => {
            null !== i && n(Math.ceil(s.length / i) - 1);
        }, [s.length, i, n]),
        (0, r.jsx)("div", {
            className: sJ.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != i &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        sY,
                        {
                            questId: e,
                            children: l
                                ? (0, r.jsx)(
                                      t6,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: Y.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / i),
                                          sourceQuestContent: Y.uF.QUEST_HOME_FEATURED_SECTION,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      eW.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: Y.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / i),
                                          sourceQuestContent: Y.uF.QUEST_HOME_FEATURED_SECTION,
                                      },
                                      e,
                                  ),
                        },
                        `animated-wrapper-${e}`,
                    ),
                ),
        })
    );
}
var sX = s(418842),
    s0 = s(548636);
function s1(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { enabled: a } = X.aD.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
        i = (0, sX.C)();
    return (0, r.jsx)(sK, {
        maskWidth: sq(i),
        overflowAmount: 25,
        maskMarginMultiplier: 0.75,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${sw(i)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${a ? "var(--radius-xl)" : "10px"}`,
            },
            className: s0.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        sY,
                        {
                            questId: e,
                            children: a
                                ? (0, r.jsx)(t6, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: s0.d,
                                      sourceQuestContent: t,
                                  })
                                : (0, r.jsx)(eW.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === sP.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: s0.d,
                                      sourceQuestContent: t,
                                  }),
                        },
                        `animated-wrapper-${e}`,
                    ),
                ),
                (0, r.jsx)("div", { className: s0.fu }),
            ],
        }),
    });
}
var s2 = s(958538);
let s7 = tx.A.Millis.WEEK;
function s3() {
    let e = el.A.quests;
    if (0 === el.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tg.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class s8 extends m.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(el.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - s7;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([el.A], s3), t;
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
let s4 = new s8(es.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    s5 = 2 * tx.A.Millis.DAY,
    s6 = new Map(sk.map((e) => [e.identifier, e])),
    s9 = {
        [sP.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function ne(e, t) {
    return e === t || (e.length === t.length && 0 === new Set(e).symmetricDifference(new Set(t)).size);
}
function nt(e, t) {
    let s = s6.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
var ns = s(32304);
let nn = {
        [sP.FEATURED]: Y.uF.QUEST_HOME_FEATURED_SECTION,
        [sP.IN_PROGRESS]: Y.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [sP.ENDING_SOON]: Y.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [sP.ORB]: Y.uF.QUEST_HOME_ORB_SECTION,
        [sP.DISCOVERED]: Y.uF.QUEST_HOME_DISCOVERED_SECTION,
    },
    nl = 4 * tx.A.Millis.SECOND,
    nr = a.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l } = e,
            { enabled: i } = X.aD.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
            { sections: c, isFetchingCurrentQuests: u } = ((e) => {
                let { isLoadingQuestHomeHero: t } = e,
                    {
                        quests: s,
                        isFetchingCurrentQuests: n,
                        hasFetched: l,
                    } = (0, ee.Qh)(ee.NC.ALL, { sortMethod: t7.kL.SUGGESTED, filters: [], removeExpiredQuests: !0 }),
                    r = (0, s2.A)(
                        () =>
                            s.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        s.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        ne,
                    ),
                    i = (0, ee.T2)(),
                    o = (0, m.bG)([s4], () => s4.getDiscoveredAtByQuestId(), []),
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
                                              return (0, tg.kd)(t) && !a
                                                  ? null
                                                  : null != r && null != r.enrolledAt && null == r.claimedAt
                                                    ? sP.IN_PROGRESS
                                                    : n.has(t.id)
                                                      ? sP.DISCOVERED
                                                      : null != s && (0, t_.I0)(s, t.id) && nt(sP.FEATURED, l)
                                                        ? sP.FEATURED
                                                        : new Date(t.expiresAt).valueOf() <= Date.now() + s5
                                                          ? sP.ENDING_SOON
                                                          : nt(sP.FEATURED, l)
                                                            ? sP.FEATURED
                                                            : (0, tZ.ks)(t)
                                                              ? sP.ORB
                                                              : null;
                                          })({
                                              quest: i,
                                              hero: s,
                                              discoveredAtByQuestId: n,
                                              questIdsBySectionIdentifier: l,
                                          });
                                          null == o ||
                                              (a && o !== sP.FEATURED) ||
                                              (l.set(o, [...(l.get(o) ?? []), e]), r.add(e));
                                      }
                                      return (
                                          s?.questIds?.forEach((e) => a(e, { featuredOnly: !0 })),
                                          t.forEach((e) => a(e, {})),
                                          sk
                                              .map((e) => {
                                                  let t = s9?.[e.identifier],
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
            d = a.useRef(null),
            { showToast: h } = ss(),
            [E, x] = a.useState(null),
            [g, f] = a.useState(0),
            [v, C] = a.useState(null),
            [S, _] = a.useState(0),
            p = a.useRef(null),
            N = a.useCallback(
                (e) => {
                    C(e.contentRect.width);
                },
                [C],
            );
        (0, sn.g)(d, N, [N], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: T }, O] = (0, tE.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: nl },
            })),
            A = a.useCallback(
                (e) => {
                    if (null == e || null == v) return !1;
                    let t = document.getElementById((0, eW.sT)(e));
                    return (
                        !u &&
                        (null == t
                            ? (h(e), !1)
                            : (x(e),
                              f((e) => e + 1),
                              t.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                              O({
                                  from: { highlightAnimationProgress: 0 },
                                  to: { highlightAnimationProgress: 1 },
                                  reset: !0,
                                  onRest: (e) => {
                                      e.cancelled || x(null);
                                  },
                              }),
                              !0))
                    );
                },
                [x, f, O, u, h, v],
            );
        a.useImperativeHandle(t, () => ({ scrollToQuest: A }), [A]),
            a.useLayoutEffect(() => {
                if (null == s) {
                    p.current = null;
                    return;
                }
                p.current !== s && ((0, en.sB)(s), A(s) && (p.current = s));
            }, [s, A]);
        let b = a.useMemo(() => ({ targetQuestId: E, highlightCount: g, highlightAnimationProgress: T }), [E, g, T]),
            R = a.useMemo(
                () =>
                    c.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === sP.FEATURED;
                    }),
                [c],
            );
        return (0, r.jsx)(sz.Provider, {
            value: b,
            children: (0, r.jsx)("div", {
                className: o()(ns.k, l),
                ref: d,
                children: c.map((e, t) => {
                    let { identifier: s, questIds: n, title: l } = e;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: ns.p,
                            children: [
                                (0, r.jsx)(j.D, { variant: "heading-lg/medium", children: eh.intl.string(l) }),
                                s === sP.FEATURED && i
                                    ? (0, r.jsx)(sZ, { questIds: n, setMaxRowIndex: _, containerWidth: v })
                                    : (0, r.jsx)(s1, {
                                          questIds: n,
                                          rowIndex: t < R ? t : t + S,
                                          sectionIdentifier: s,
                                          questContent: nn[s],
                                      }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        });
    });
var na = s(353640),
    ni = s(121894),
    no = s(851936);
let nc = (0, na.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, no.L)({ location: t7.rE.QUEST_HOME_DESKTOP });
        if (s.info === eT.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, ni.r)(() => e(l));
    },
}));
var nu = s(516226),
    nd = s(323889),
    nm = s(561844),
    nh = s(901406),
    nE = s(139384),
    nx = s(43990),
    ng = s(770178),
    nf = s(14233);
function nj(e, t) {
    let { row_index: s, ...n } = (0, et.fF)(Y.uF.QUEST_HOME_HERO);
    (0, nm.Qg)({
        adContentId: e,
        adCreativeType: nd.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: Y.uF.QUEST_HOME_HERO,
    });
}
let nv = a.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: i, buttons: c, background: u, className: d } = e,
        [m, h] = a.useState("display-lg"),
        E = a.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, ng.w)(E, [], { fireOnMount: !0 }),
        g = a.useCallback(() => nj(s, e_.HAw.QUEST_HOVER), [s]),
        f = a.useCallback(() => nj(s, e_.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(nx.N, {
        theme: e_.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(nf.iE, e, d),
                onMouseEnter: g,
                onMouseLeave: f,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: nf.FG,
                    children: [
                        (0, r.jsxs)(S.B, {
                            className: nf.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(S.B, {
                                    className: nf.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(S.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(j.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nf.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(v.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: nf.VA,
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
var nC = s(194526),
    nS = s(731355),
    n_ = s(621466),
    np = s(508770),
    nN = s(406810),
    nT = s(628284),
    nO = s(65154),
    nA = s(496431),
    nb = s(975807),
    nR = s(58703),
    nI = s(18437),
    nM = s(398025),
    ny = s(691464);
function nQ(e) {
    let [t, s] = a.useState(!1),
        n = a.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = a.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function nL(e) {
    let { hero: t, contentPosition: s } = e,
        n = a.useRef(null),
        { isHovering: l, hoverProps: i } = nQ(
            a.useCallback(
                (e) => {
                    (0, nm.Qg)({
                        adContentId: t.id,
                        adCreativeType: nd.p.QUEST_HOME_HERO,
                        event: e ? e_.HAw.QUEST_HOVER : e_.HAw.QUEST_HOVER_OFF,
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
        (0, n_.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(eT.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: c } = (0, tE.z)({ hoverSpring: +!!l, config: th.config.gentle }),
        u = a.useCallback(() => {
            (0, nb.A)(t.cta.url),
                (0, nm.vK)({
                    adContentId: t.id,
                    adCreativeType: nd.p.QUEST_HOME_HERO,
                    questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: et.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(ef.D, {
        tag: "div",
        className: o()(ny.FW, ny.Bm),
        onClick: u,
        "aria-label": t.cta.buttonLabel,
        [sV]: !0,
        ...i,
        children: [
            (0, r.jsx)("div", {
                className: ny.Ve,
                children: (0, r.jsx)(tp.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(ny.pv, ny.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(ny.pv, ny.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(th.animated.div, {
                className: ny.hn,
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
function nU(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        i = a.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: c, hours: u, minutes: d, seconds: h } = (0, nA.A)(i, tx.A.Millis.MINUTE),
        E = a.useMemo(
            () =>
                (0, nR.uN)(
                    { days: c, hours: u, minutes: d, seconds: h },
                    { days: eh.t["Ux/De1"], hours: eh.t.Lzd5Ie, minutes: eh.t.odmpbP },
                ),
            [c, u, d, h],
        ),
        x = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        f = a.useMemo(() => (0, tZ.mq)(s.config, x), [s.config, x]),
        j = a.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, ts.xv)(e).type) {
                        case sf.l.IN_GAME:
                            return eh.intl.string(eh.t["O/J2kr"]);
                        case sf.l.COLLECTIBLE:
                            return eh.intl.string(eh.t.Jg17Ut);
                        case sf.l.VIRTUAL_CURRENCY:
                            return eh.intl.string(eh.t.ElYQFS);
                        default:
                            return (0, tZ.mq)(e, t);
                    }
                })(s.config, x),
            [s.config, x],
        ),
        { completedRatio: C, completedRatioDisplay: _ } = (0, ee.O9)(s),
        p = a.useMemo(() => (0, tZ.wo)(s.config, x), [s.config, x]),
        N = (0, nI.tG)(),
        T = (0, nI.WS)(),
        { isHovering: O, hoverProps: A } = nQ(
            a.useCallback(
                (e) => {
                    T({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: nd.p.QUEST_HOME_HERO,
                        event: e ? e_.HAw.QUEST_HOVER : e_.HAw.QUEST_HOVER_OFF,
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
        { hoverSpring: b } = (0, tE.z)({ hoverSpring: +!!O, config: th.config.gentle }),
        R = a.useCallback(() => {
            n(s.id),
                N({
                    adContentId: t,
                    relatedQuestId: s.id,
                    adCreativeType: nd.p.QUEST_HOME_HERO,
                    questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: et.Cy.VIEW_QUESTS,
                    questContentPosition: l,
                    sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [n, t, s.id, N, l]);
    return (0, r.jsxs)(ef.D, {
        tag: "div",
        className: o()(ny.FW, ny.$R),
        onClick: R,
        "aria-label": eh.intl.string(eh.t["th2+0j"]),
        [sV]: !0,
        ...A,
        children: [
            (0, r.jsxs)(S.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(np.E, { type: { text: j } }),
                    (0, r.jsx)(th.animated.div, {
                        style: { opacity: (0, nM.a)(b.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(np.E, { type: { text: E }, icon: nN.O }),
                    }),
                ],
            }),
            (0, r.jsx)(th.animated.div, {
                className: ny.Tr,
                style: { transform: b.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tX.A, {
                    percentComplete: C,
                    overlayText: O && null != p ? `${p}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(t0.A, {
                        quest: s,
                        questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: O,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(th.animated.div, {
                className: ny.tw,
                style: {
                    opacity: (0, nM.a)(b.to([0, 1], [1, 0])),
                    transform: b.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(S.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: ny.Ht,
                            children: f,
                        }),
                        (0, r.jsxs)(S.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(S.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(nT.y, { size: "xs", color: ex.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(S.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, t_.pv)(s.config) === nS.Z.VIDEO
                                            ? (0, r.jsx)(nO.S, { size: "xs", color: ex.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(tb._, { size: "xs", color: ex.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(v.E, {
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
            }),
            (0, r.jsx)(th.animated.div, {
                className: ny.um,
                style: { transform: b.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
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
var nH = s(648731);
function nD(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e;
    return (0, r.jsx)(sK, {
        className: nH.v,
        children: (0, r.jsxs)(S.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, r.jsx)(tN.R, {
                    adContentId: t.id,
                    adCreativeType: nd.p.QUEST_HOME_HERO,
                    questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(nL, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, s) =>
                    (0, r.jsx)(
                        tN.R,
                        {
                            adContentId: t.id,
                            adCreativeType: nd.p.QUEST_HOME_HERO,
                            questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: s + 1,
                            sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                            children: (l) =>
                                (0, r.jsx)("div", {
                                    ref: (e) => {
                                        l.current = e;
                                    },
                                    children: (0, r.jsx)(nU, {
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
var nF = s(95115);
function nq() {
    return (0, r.jsx)("div", { className: nF.Np });
}
function nw(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = a.useRef(null);
    (0, nE.A)(n, t7.rE.QUEST_HOME_DESKTOP);
    let l = a.useMemo(() => (null != s ? (0, tC.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, r.jsxs)("div", {
              className: nF.Tv,
              children: [
                  (0, r.jsx)(nq, {}),
                  (0, r.jsx)("div", {
                      className: nF.LO,
                      children: (0, r.jsx)("img", { className: nF.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nF.LO, nF.jx, nF.hw),
                      children: (0, r.jsx)("img", { className: nF.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nF.LO, nF.jx, nF.Co),
                      children: (0, r.jsx)("img", { className: nF.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: nF.Tv,
              children: [
                  (0, r.jsx)(nq, {}),
                  (0, r.jsx)("div", {
                      className: nF.LO,
                      children: (0, r.jsx)(tp.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: n,
                          imageAsset: {
                              alt: "",
                              className: nF.LY,
                              asset: { url: l, mimetype: (0, tC.vm)(l), isAnimated: !1 },
                              assetId: l,
                          },
                          videoAsset: {
                              alt: "",
                              className: nF.LY,
                              asset: { url: s, mimetype: (0, tC.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function nP(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        n = (0, m.bG)([el.A], () => el.A.quests),
        { shelfQuests: l, isShelfEnabled: i } = (0, ee.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, nC.I)();
    a.useEffect(() => {
        o();
    }, [o]);
    let c = a.useMemo(() => t.questIds?.find((e) => n.has(e)), [n, t.questIds]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tN.R, {
                adContentId: t.id,
                adCreativeType: nd.p.QUEST_HOME_HERO,
                questContent: Y.uF.QUEST_HOME_HERO,
                sourceQuestContent: Y.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsx)(nv, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, r.jsxs)(S.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, r.jsx)("img", { src: t.sponsorImage, alt: "", className: nF.wm }),
                                (0, r.jsx)(v.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: nF.yu,
                                    children: eh.intl.string(eh.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, r.jsxs)(x.e, {
                            children: [
                                (0, r.jsx)(g.$, {
                                    onClick: () => {
                                        (0, nh._Q)(
                                            { adContentId: t.id, adCreativeType: nd.p.QUEST_HOME_HERO, cta: t.cta },
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
                                                (0, nm.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: nd.p.QUEST_HOME_HERO,
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
                            null != t.heroImage && (0, r.jsx)(nw, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, r.jsx)(nD, { hero: t, shelfQuests: l, onQuestCtaClick: s }),
        ],
    });
}
function nk() {
    return (0, r.jsx)("div", { className: o()(nf.iE, nf.FG, nf.B3), children: (0, r.jsx)(eu.y, {}) });
}
function nB(e) {
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
var nV = s(298537);
let nG = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, sX.C)(),
        { enabled: n } = X.aD.useConfig({ location: t7.rE.QUEST_HOME_DESKTOP }),
        l = a.useRef(null),
        i = sr(l, sw(s), 20, 3);
    return (0, r.jsxs)(S.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: nV.kL,
        ref: l,
        children: [
            (0, r.jsxs)(j.D, {
                variant: "heading-lg/medium",
                children: [eh.intl.string(eh.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(S.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: nV.y7,
                      children: [
                          (0, r.jsx)(nB, { alt: eh.intl.string(eh.t["Xe+fJM"]) }),
                          (0, r.jsxs)(S.B, {
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
                      className: nV.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${sw(s)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== i &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(t6, {
                                        questId: e,
                                        questContent: Y.uF.QUEST_HOME_SEARCH_RESULT,
                                        contentPosition: t,
                                        rowIndex: Math.floor(t / i),
                                        className: nV.d,
                                        sourceQuestContent: Y.uF.QUEST_HOME_SEARCH_RESULT,
                                    })
                                  : (0, r.jsx)(
                                        eW.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: Y.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / i),
                                            className: nV.d,
                                            sourceQuestContent: Y.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var nW = s(379078),
    nK = s(704554);
let nz = {
    searchType: nW.n.FUZZY,
    searchStringGenerator: (e) =>
        [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(e9.Vq),
    sortType: nW.r.JARO_WINKLER,
    throttleMs: 200,
};
var n$ = s(758836),
    nY = s(613057),
    nJ = s(935824);
let nZ = a.createContext({});
function nX(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: i, scrollerRef: o } = a.useContext(nZ);
    return (0, r.jsxs)(sF.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(w.A, {
                onScroll: i,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(F.A, { className: nJ.Jo, innerClassName: nJ.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function n0(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(q.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: E.r });
}
function n1(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: n } = (0, B.Z)({ location: t7.rE.QUEST_HOME_DESKTOP }),
        l = (0, m.bG)([N.A], () => N.A.useReducedMotion),
        i = (0, m.bG)([G.A], () => G.A.isFocused()),
        { ref: o, inViewport: c } = (0, e6.p)(),
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
function n2(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, B.Z)({ location: t7.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsxs)("div", {
        className: o()(nJ.Tv, { [nJ.lJ]: s }),
        children: [
            (0, r.jsx)(nq, {}),
            (0, r.jsx)("div", { className: o()(nJ.nz, { [nJ.ZZ]: s }) }),
            (0, r.jsx)(n1, { onLoadComplete: t, className: o()(nJ.Fe, { [nJ.H4]: s, [nJ.Q8]: !s }) }),
        ],
    });
}
function n7(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, B.Z)({ location: t7.rE.QUEST_HOME_DESKTOP }),
        n = a.useCallback(() => {
            s ? window.open(e_.X7G.PAID_TERMS_ORBS) : window.open(z.A.getArticleURL(e_.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(nv, {
        adContentId: s ? t7.yr : t7.uz,
        title: s ? eh.intl.format(eh.t.BCBIlp, {}) : eh.intl.format(eh.t.lmMBfy, {}),
        subtitle: s ? eh.intl.format(eh.t.U9FY0J, {}) : eh.intl.string(eh.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(x.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: eh.intl.string(eh.t["1Wm127"]),
                          onClick: () =>
                              (0, R.Cz)({
                                  tab: n$.G2.ORBS,
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
        background: (0, r.jsx)(n2, { onAssetLoad: t }),
    });
}
function n3(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: a } = e;
    return (0, r.jsx)("div", {
        className: o()(nJ.iS, { [nJ.R]: a }),
        children: l
            ? (0, r.jsx)(nk, {})
            : null != n
              ? (0, r.jsx)(nP, { hero: n, onQuestCtaClick: s })
              : (0, r.jsx)(n7, { onAssetLoad: t }),
    });
}
function n8(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: o()(nJ.BW, nJ.rZ),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: o()(nJ.BW, nJ.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: o()(nJ.BW, nJ.rZ),
                alt: "",
            }),
        ],
    });
}
let n4 = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, c.zy)(),
        n = (0, c.W6)(),
        l = a.useMemo(() => (0, P.B)(s.pathname, e_.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        i = a.useMemo(() => new URLSearchParams(s.search).get(ee.L1.AD_CREATIVE_IDS), [s.search]),
        E = (0, m.bG)([b.A], () => b.A.getState("quests")),
        {
            selectedTab: x,
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
            return (0, nK.RT)(r, l, o, nz), { matchingQuestIds: s, query: e, setQuery: t };
        })();
    a.useLayoutEffect(() => {
        l && x === ee.NC.CLAIMED && J.A.setState({ tab: ee.NC.ALL });
    }, [l, x]);
    let { onScroll: F } = (0, H.G)(),
        q = Z.A.getState().getUtmCurrentContext(),
        w = nc((e) => e.registerAssetLoad),
        G = a.useRef(q);
    a.useEffect(() => {
        G.current = q;
    }),
        a.useEffect(() => {
            let { current: e } = G;
            (0, O.x)({
                name: d.ImpressionNames.QUEST_HOME,
                type: d.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: x,
                },
            });
        }, [x]);
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
                pageType: e_.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: e_.JJy.ORBS_BALANCE_MENU,
                ctaObject: e_.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, R.Cz)({ tab: n$.G2.ORBS, analyticsLocations: [], analyticsSource: T.A.ORBS_BALANCE_MENU });
        }, []);
    a.useEffect(() => {
        (0, p.I)(e_.BVt.QUEST_HOME);
    }, []),
        a.useEffect(() => {
            U.trigger();
        }, []),
        a.useEffect(() => {
            if (null != E) return;
            let e = new URLSearchParams(s.search),
                l = e.get(ee.L1.TAB);
            if (l === ee.NC.PREVIEW_TOOL) {
                let t = e.get(ee.L1.QUEST_ID);
                A.A.openNativeAppModal("quests", e_.e$_.DEEP_LINK, {
                    type: nY.XK.QUEST_PREVIEW_TOOL,
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
                A.A.openNativeAppModal("quests", e_.e$_.DEEP_LINK, {
                    type: nY.XK.QUEST_HOME,
                    params: { questId: (0, $.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: a },
                });
            }
        }, [s.search, E, n.action, s.hash, t]),
        a.useEffect(() => {
            t && (0, y.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eu = a.useCallback(() => {
            (0, e5.navigateToQuestHome)({ fromContent: Y.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                W.default.track(e_.HAw.QUEST_CONTENT_CLICKED, {
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
        eE = a.useMemo(() => null != L && es, [L, es]);
    return (0, r.jsx)(nu.M.Provider, {
        value: a.useMemo(() => ({ onAssetLoadComplete: w }), [w]),
        children: (0, r.jsx)(nZ.Provider, {
            value: a.useMemo(() => ({ onScroll: F, scrollerRef: z }), [F, z]),
            children: (0, r.jsx)("div", {
                className: o()(nJ.kL, { [nJ.KY]: !t }),
                children: l
                    ? (0, r.jsx)(nX, {
                          withFullBleedBanner: !0,
                          header: (0, r.jsx)(n0, { selectedTab: x, onSelectTab: ed, tabs: N }),
                          banner: (0, r.jsx)(D.A, {
                              title: eh.intl.string(eh.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, r.jsx)(g.$, {
                                  variant: "overlay-primary",
                                  text: eh.intl.string(eh.t.GURBQl),
                                  onClick: eu,
                              }),
                              className: nJ.Gj,
                              children: (0, r.jsx)(n8, { onLoadComplete: w }),
                          }),
                          children: (0, r.jsxs)("div", {
                              className: nJ.kj,
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
                    : (0, r.jsxs)(nX, {
                          header: (0, r.jsx)(n0, {
                              selectedTab: x,
                              onSelectTab: ed,
                              tabs: N,
                              endContent: (0, r.jsxs)(S.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      es &&
                                          (0, r.jsx)(_.I, {
                                              query: M,
                                              onChange: Q,
                                              placeholder: eh.intl.string(eh.t.y10TI2),
                                              onClear: em,
                                              size: "sm",
                                          }),
                                      K &&
                                          (0, r.jsx)(V.SS, {
                                              analyticsPage: e_.liQ.GLOBAL_DISCOVERY_QUESTS,
                                              cardAlignment: V.cP.END,
                                              ctaText: eh.intl.string(eh.t["J+vlIR"]),
                                              ctaOnClick: ec,
                                          }),
                                  ],
                              }),
                          }),
                          banner:
                              x === ee.NC.ALL &&
                              (0, r.jsx)(n3, {
                                  onAssetLoad: w,
                                  onQuestCtaClick: er,
                                  hasSearchResults: eE,
                                  questHomeHero: ei,
                                  isLoadingQuestHomeHero: eo,
                              }),
                          children: [
                              eE && null != L && (0, r.jsx)(nG, { matchingQuestIds: L }),
                              x === ee.NC.CLAIMED
                                  ? (0, r.jsx)(sL, { onSelectTab: ed, className: eE ? nJ.R : void 0 })
                                  : x === ee.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(e4, { className: eE ? nJ.R : void 0 })
                                    : es
                                      ? (0, r.jsx)(nr, {
                                            className: eE ? nJ.R : void 0,
                                            ref: en,
                                            deepLinkedQuestId: ea,
                                            isLoadingQuestHomeHero: eo,
                                        })
                                      : (0, r.jsx)(sx, { ref: en }),
                          ],
                      }),
            }),
        }),
    });
};
