let n;
s.r(t), s.d(t, { default: () => ls }), s(323874), s(14289), s(35956);
var l,
    r = s(627968),
    a = s(64700),
    i = s(503698),
    o = s.n(i),
    c = s(873263),
    u = s(835245),
    d = s(562708),
    m = s(607399),
    h = s(17928),
    E = s(554146),
    x = s(577473),
    g = s(825484),
    f = s(821609),
    j = s(509434),
    v = s(534514),
    C = s(834730),
    S = s(123292),
    _ = s(331322),
    p = s(892547),
    N = s(944791),
    A = s(775602),
    T = s(793574),
    O = s(139286),
    b = s(197111),
    R = s(10088),
    I = s(859040),
    M = s(726249),
    y = s(607470),
    L = s(826673),
    Q = s(840251),
    U = s(688151);
let H = new Q.E([], U.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var D = s(711111),
    F = s(701508),
    w = s(979590),
    q = s(749638),
    P = s(783531),
    k = s(334465),
    B = s(318346),
    V = s(371446),
    G = s(70926),
    W = s(531685),
    K = s(174459),
    z = s(676279),
    $ = s(975571),
    Y = s(240248),
    J = s(507107),
    Z = s(631001),
    X = s(87549),
    ee = s(192444),
    et = s(31587),
    es = s(590202);
s(321073);
var en = s(228366),
    el = s(340124),
    er = s(859703);
s(667532);
var ea = s(783878),
    ei = s(408278),
    eo = s(663417),
    ec = s(922016),
    eu = s(624479),
    ed = s(289873),
    em = s(416052),
    eh = s(417098),
    eE = s(375708);
let ex = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(eh.$T, {
        color: eh.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : eE.intl.string(eE.t.ZErSg5) }),
    });
};
var eg = s(661531),
    ef = s(602853),
    ej = s(939249),
    ev = s(817281),
    eC = s(688810),
    eS = s(487245),
    e_ = s(363195),
    ep = s(652215),
    eN = s(398876);
let eA = function () {
    let { analyticsLocations: e } = (0, eC.Ay)(),
        t = (0, h.bG)([e_.A], () => e_.A.theme),
        s = a.useRef(null);
    a.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, ef.r)(eg.A.colors.BACKGROUND_BASE_LOW, ep.NJ8.LIGHT),
        l = (0, ef.r)(eg.A.colors.BACKGROUND_BASE_LOW, ep.NJ8.DARKER),
        i = (0, ef.r)(eg.A.colors.BACKGROUND_BASE_LOW, ep.NJ8.MIDNIGHT),
        o = a.useMemo(
            () => [
                { theme: ep.NJ8.LIGHT, label: eE.t.K2sFfo, color: n.hex() },
                { theme: ep.NJ8.DARKER, label: eE.t.b8Cei3, color: l.hex() },
                { theme: ep.NJ8.MIDNIGHT, label: eE.t.Do4ZJx, color: i.hex() },
            ],
            [n, l, i],
        ),
        c = a.useCallback(
            (t) => {
                (0, eS.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, ev.u_)({ theme: t });
            },
            [e],
        ),
        u = a.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, r.jsx)("div", {
        className: eN.N,
        children: (0, r.jsxs)("div", {
            className: eN.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        ej.D,
                        {
                            tag: "div",
                            className: eN.Du,
                            onClick: () => c(e.theme),
                            "aria-label": eE.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${eN.WT} ${t === e.theme ? eN.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: eN.i, children: eE.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(ei.K, {
                    onClick: u,
                    "aria-label": eE.intl.string(eE.t.yBZMsQ),
                    icon: eo.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eT = s(818348),
    eO = s(60857);
let eb = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [i, o] = a.useState(!1),
        [c, u] = a.useState(!1),
        d = a.useRef(null),
        m = (0, et.pT)(),
        E = (0, h.bG)([er.A], () => (null != t ? er.A.getFetchQuestPreviewError(t) : null), [t]),
        x = (0, h.bG)([er.A], () => null != t && er.A.isFetchingQuestPreview(t), [t]),
        j = a.useMemo(() => {
            let e = m.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [m, t]),
        v = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, el.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, el.UZ)(t);
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
                    await (0, el.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = a.useCallback(
            (e) => {
                (0, Y.uJ)(e) || null == s || s(e);
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
                            (0, r.jsx)(eA, {}),
                            (0, r.jsxs)("div", {
                                className: eO.b8,
                                children: [
                                    (0, r.jsx)(
                                        ea.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: _,
                                            placeholder: eE.intl.string(eE.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, Y.uJ)(t?.trim())) return e;
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
                                    (0, r.jsx)(ei.K, {
                                        onClick: l,
                                        "aria-label": eE.intl.string(eE.t.wzzjk9),
                                        icon: eo.f,
                                        loading: x,
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
                    children: (0, r.jsxs)(g.e, {
                        className: eO.xv,
                        children: [
                            (0, r.jsx)(f.$, {
                                onClick: v,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eE.intl.string(eE.t.jQEfRT),
                            }),
                            (0, r.jsx)(f.$, {
                                onClick: C,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eE.intl.string(eE.t.taqkwK),
                            }),
                            (0, r.jsx)(f.$, {
                                onClick: S,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eE.intl.string(eE.t.cKSLr4),
                            }),
                            (0, r.jsx)(ec.Y, {
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
                                            children: (0, r.jsx)(em.A, {
                                                value: eT.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eE.intl.string(eE.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(ei.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => u(!c),
                                        "aria-label": eE.intl.string(eE.t.rNGQfD),
                                        icon: eu.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != E ? (0, r.jsx)(ex, { error: E }) : null,
            x ? (0, r.jsx)(ed.y, {}) : null,
        ],
    });
};
var eR = s(364522),
    eI = s(761508),
    eM = s(797788);
let ey = () => (0, r.jsx)("div", { className: eM.y });
var eL = s(834615),
    eQ = s(332544);
let eU = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(v.D, {
                    className: eQ.R_,
                    variant: "heading-md/semibold",
                    children: eE.intl.string(eE.t.L2mlUb),
                }),
                (0, r.jsx)(eL.A, { quest: t }),
            ],
        }),
    });
};
var eH = s(241124),
    eD = s(743407),
    eF = s(717695),
    ew = s(763578),
    eq = s(111113);
let eP = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: ew.wp,
            children: [
                (0, r.jsx)(v.D, {
                    className: ew.Oo,
                    variant: "heading-md/semibold",
                    children: eE.intl.string(eE.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: ew.RE,
                    children: (0, r.jsx)("div", {
                        className: ew.Z,
                        children: (0, r.jsx)("div", {
                            className: eq.C3,
                            children: (0, r.jsx)(eF.A, {
                                children: (0, r.jsx)(eH.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, r.jsx)(eD.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ek = s(961974);
let eB = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(v.D, {
                    className: eQ.R_,
                    variant: "heading-md/semibold",
                    children: eE.intl.string(eE.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: eQ.YT,
                    children: (0, r.jsx)(ek.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var eV = s(711038),
    eG = s(330034);
let eW = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(v.D, { variant: "heading-md/semibold", children: eE.intl.string(eE.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: eG.wu,
                    children: (0, r.jsx)("span", { className: eG.cy, children: eE.intl.string(eE.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: eG.oU,
                    children: (0, r.jsx)("div", {
                        className: eG.zx,
                        children: (0, r.jsx)("div", {
                            className: eG.Lj,
                            children: (0, r.jsx)("div", {
                                className: eG.n0,
                                children: (0, r.jsx)(eV.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eK = s(291922);
let ez = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eQ.x3,
        children: (0, r.jsxs)("div", {
            className: eQ.B0,
            children: [
                (0, r.jsx)(v.D, {
                    className: eQ.R_,
                    variant: "heading-md/semibold",
                    children: eE.intl.string(eE.t["5wnpF3"]),
                }),
                (0, r.jsx)(eK.Ay, {
                    className: eQ.d,
                    quest: t,
                    questContent: J.uF.QUEST_HOME_DESKTOP,
                    contentPosition: 0,
                    rowIndex: 0,
                    sourceQuestContent: J.uF.INTERNAL_PREVIEW_TOOL,
                }),
            ],
        }),
    });
};
var e$ = s(97808),
    eY = s(778712),
    eJ = s(87664),
    eZ = s(287809),
    eX = s(427262),
    e0 = s(198525),
    e1 = s(66176);
let e2 = function (e) {
        let { quest: t } = e,
            [s, n] = a.useState(!1),
            l = a.useRef(null),
            i = (0, h.bG)([eZ.default], () => eZ.default.getCurrentUser()),
            c = eX.Ay.useName(i),
            u = (0, eJ.A)(i?.id),
            d = a.useCallback(
                (e) =>
                    (0, r.jsx)(e0.A, {
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
                    (0, r.jsx)(v.D, {
                        className: e1.R_,
                        variant: "heading-md/semibold",
                        children: eE.intl.string(eE.t.jY7Zxg),
                    }),
                    (0, r.jsx)("div", { className: e1.$Q, children: eE.intl.string(eE.t.q3hbne) }),
                    (0, r.jsx)("div", {
                        className: e1.k0,
                        children: (0, r.jsx)(ec.Y, {
                            targetElementRef: l,
                            renderPopout: d,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => n(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: ec.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, r.jsx)("div", {
                                    ref: l,
                                    className: o()(e1.Tn, { [e1.wH]: s }),
                                    children: (0, r.jsx)(ej.D, {
                                        onClick: () => n(!s),
                                        tabIndex: 0,
                                        children: (0, r.jsxs)("div", {
                                            className: e1.lm,
                                            children: [
                                                (0, r.jsx)(e$.eu, {
                                                    size: eY._3.SIZE_32,
                                                    src: i?.getAvatarURL(void 0, 32),
                                                    status: ep.clD.ONLINE,
                                                    "aria-label": i?.username,
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: e1.Fj,
                                                    children: [
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: eE.intl.string(eE.t.b9w3bO),
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
    e7 = (e) => {
        let { questId: t, selectedSections: s } = e,
            n = (0, h.bG)([er.A], () => er.A.getQuest(t));
        if (null != (0, h.bG)([er.A], () => er.A.getFetchQuestPreviewError(t)) || null == n) return null;
        let l = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                l("quest_bar") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eP, { quest: n }), (0, r.jsx)(ey, {})] }),
                l("home_card") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ez, { quest: n }), (0, r.jsx)(ey, {})] }),
                l("share_embed") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eW, { questId: n.id }), (0, r.jsx)(ey, {})] }),
                l("channel_call_header") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eB, { quest: n }), (0, r.jsx)(ey, {})] }),
                l("members_list") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(e2, { quest: n }), (0, r.jsx)(ey, {})] }),
                l("activity_panel") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eU, { quest: n }), (0, r.jsx)(ey, {})] }),
            ],
        });
    };
var e8 = s(497275);
function e3(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: i } = e,
        c = [
            { value: "quest_bar", label: eE.intl.string(eE.t.rjVPdM) },
            { value: "share_embed", label: eE.intl.string(eE.t["D/gSWS"]) },
            { value: "home_card", label: eE.intl.string(eE.t["5wnpF3"]) },
            { value: "channel_call_header", label: eE.intl.string(eE.t.gWinpQ) },
            { value: "members_list", label: eE.intl.string(eE.t.wpYima) },
            { value: "activity_panel", label: eE.intl.string(eE.t.L2mlUb) },
        ],
        u = 0 === s.length || s.length === c.length,
        d = a.useMemo(() => (u ? "all" : 1 === s.length ? s[0] : "all"), [s, u]);
    return (0, r.jsx)(eR.Ip, {
        className: o()(e8.kL, i),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: e8.qE,
            children: [
                (0, r.jsx)(v.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eE.intl.string(eE.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: e8.pf, children: l }),
                (0, r.jsxs)(eI.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: (e) => {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(eI.V.Item, { id: "all", children: eE.intl.string(eE.t.Y9DnPa) }),
                        c.map((e) => (0, r.jsx)(eI.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: e8.tZ, children: (0, r.jsx)("div", { className: e8.Qs, children: t }) }),
            ],
        }),
    });
}
function e4(e) {
    return new URLSearchParams(e).get(et.L1.QUEST_ID);
}
let e5 = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, c.W6)(),
                [s, n] = a.useState(e),
                { search: l } = (0, c.zy)();
            return (
                a.useEffect(() => {
                    let t = e4(l);
                    null != t ? n(t) : null != e && n(e);
                }, [e, l]),
                a.useEffect(() => {
                    if (null == s || e4(l) === s) return;
                    let e = new URLSearchParams();
                    e.set(et.L1.TAB, et.NC.PREVIEW_TOOL),
                        e.set(et.L1.QUEST_ID, s),
                        t.push(`${ep.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, l]),
                { questId: s, setQuestId: n }
            );
        })(t),
        i = (0, h.bG)([er.A], () => (null != n ? er.A.getQuest(n) : void 0), [n]),
        o = (0, h.bG)([er.A], () => (null != n ? er.A.getQuestLoadedViaPreview(n) : null), [n]);
    a.useEffect(() => {
        null != n &&
            (0, el.dQ)(n).then(() => {
                (0, el.Gt)(n);
            });
    }, [n]),
        a.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, el.dQ)(n);
            };
            return (
                en.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    en.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [u, d] = a.useState([]);
    return (0, r.jsx)(e3, {
        className: s,
        controls: (0, r.jsx)(eb, {
            questId: n,
            setQuestId: l,
            quest: i,
            refreshQuest: () => {
                null != n && (0, el.dQ)(n);
            },
        }),
        selectedSections: u,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(e7, { questId: o?.id, selectedSections: u }) : null,
    });
};
var e6 = s(617986),
    e9 = s(203879),
    te = s(403362),
    tt = s(167417),
    ts = s(783977),
    tn = s(651892),
    tl = s(305866),
    tr = s(915089),
    ta = s(332733);
function ti(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(C.E, { className: ta.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let to = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, tr.GV)(),
        l = a.useRef(null);
    return (0, r.jsx)(ec.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(tl.l, { className: ta.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var tc = s(612539);
let tu = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, et.Nb)(),
        l = a.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(to, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, tn.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            a.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: tc.B }),
                                    (0, r.jsx)(ti, { id: i, children: e.heading }),
                                    (0, r.jsx)(tt.$, {
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
                    (0, r.jsx)("hr", { className: tc.B }),
                    (0, r.jsx)("div", {
                        className: tc.W,
                        children: (0, r.jsx)(f.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: eE.intl.string(eE.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(f.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eE.intl.formatToPlainString(eE.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: ts.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var td = s(773812),
    tm = s(715482);
let th = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = a.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, et.XD)(),
        o = a.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, r.jsx)(to, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ti, { id: t, children: eE.intl.string(eE.t.tZXJIS) }),
                    (0, r.jsx)(td.z, {
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
            (0, r.jsx)(f.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, tn.Js)(n),
                icon: tm.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tE = s(922139),
    tx = s(717421),
    tg = s(927813),
    tf = s(710969);
function tj(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, tE.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, tE.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var tv = s(173936),
    tC = s(365199),
    tS = s(551875),
    t_ = s(971649),
    tp = s(814793),
    tN = s(415441),
    tA = s(73473),
    tT = s(270045),
    tO = s(371912),
    tb = s(79545),
    tR = s(687966),
    tI = s(782134),
    tM = s(138134),
    ty = s(768622),
    tL = s(785866),
    tQ = s(662940),
    tU = s(496431);
let tH = 2 * tg.A.Millis.DAY;
var tD = s(719021);
function tF(e) {
    let { quest: t } = e,
        s = (0, tb.Pd)(t),
        n = (0, et.fc)(t),
        l = (0, et.I3)(t),
        i = a.useMemo(() => (0, tQ.Dd)(t.config, s), [t.config, s]),
        o = a.useMemo(() => (0, tQ.CK)(s, n, l), [s, n, l]),
        c = (function (e) {
            let t = (0, tb.Pd)(e),
                [s] = a.useState(() => Date.now()),
                n = a.useMemo(() => new Date(e.config.expiresAt), [e.config.expiresAt]),
                l = n.getTime() - s,
                r =
                    (function (e) {
                        switch (e) {
                            case tb.UA.UNENROLLED:
                            case tb.UA.ENROLLED:
                            case tb.UA.INCOMPLETE:
                                return !0;
                            case tb.UA.COMPLETED:
                            case tb.UA.CLAIMED:
                            case tb.UA.EXPIRED:
                            case tb.UA.EXPIRED_CLAIMABLE:
                                return !1;
                        }
                    })(t) &&
                    l < tH &&
                    l > 0,
                { days: i, hours: o, minutes: c, seconds: u } = (0, tU.A)(n, tg.A.Millis.SECOND, void 0, !r);
            return r && (0 !== i || 0 !== o || 0 !== c || 0 !== u)
                ? `${String(24 * i + o).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(u).padStart(2, "0")}`
                : null;
        })(t),
        u = null != c ? c : i;
    return (0, r.jsxs)("div", {
        className: tD.qS,
        children: [
            null != u && (0, r.jsx)(C.E, { variant: "text-xs/bold", color: "always-white", children: u }),
            null != u &&
                null != o &&
                (0, r.jsx)(C.E, { variant: "text-xs/bold", color: "always-white", children: "\u2022" }),
            null != o &&
                (0, r.jsxs)("span", {
                    className: tD.BA,
                    children: [
                        (function (e) {
                            let t = { size: "xxs", className: tD.rF, color: "currentColor" };
                            switch ((0, tQ.pv)(e)) {
                                case tQ.UK.PLAY:
                                    return (0, r.jsx)(tR._, { ...t });
                                case tQ.UK.WATCH:
                                    return (0, r.jsx)(tI.u, { ...t });
                                case tQ.UK.ACTIVITY:
                                    return (0, r.jsx)(tM.i, { ...t });
                                case tQ.UK.INSTANT_PLAY:
                                    return (0, r.jsx)(ty.g, { ...t });
                                case tQ.UK.ARENA:
                                    return (0, r.jsx)(tL._, { ...t });
                            }
                        })(t),
                        (0, r.jsx)(C.E, { variant: "text-xs/bold", tag: "span", color: "always-white", children: o }),
                    ],
                }),
        ],
    });
}
var tw = s(409626),
    tq = s(629455),
    tP = s(646917),
    tk = s(576761),
    tB = s(895253),
    tV = s(743368),
    tG = s(792620),
    tW = s(192551),
    tK = s(919500);
function tz(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l, isInFeaturedSection: a } = e,
        i = (0, tb.Pd)(t),
        c = i === tb.UA.EXPIRED || (i === tb.UA.CLAIMED && (0, tG.GL)(t)),
        u = (0, et.do)({ quest: t, content: s, ctaContent: es.Cy.OPEN_GAME_LINK, sourceQuestContent: n });
    return (0, r.jsx)("div", {
        className: o()(tK.lO, { [tK.Fq]: l }),
        children: (0, r.jsx)("div", {
            className: tK.mv,
            children: (0, r.jsxs)(g.e, {
                direction: "horizontal",
                fullWidth: !0,
                wrap: !1,
                size: "sm",
                children: [
                    c || a
                        ? (0, r.jsx)(f.$, {
                              variant: "overlay-secondary",
                              text: t.config.ctaConfig.buttonLabel,
                              onClick: u,
                          })
                        : (0, r.jsx)(ei.K, {
                              variant: "overlay-secondary",
                              icon: tV.W,
                              "aria-label": eE.intl.string(eE.t.LLLLPD),
                              onClick: u,
                          }),
                    !c &&
                        (0, r.jsx)(tW.A, {
                            quest: t,
                            surface: tb.V3.QUEST_HOME_TILE_V2_FOOTER,
                            analyticsCtxQuestContent: s,
                            analyticsCtxSourceQuestContent: n,
                        }),
                ],
            }),
        }),
    });
}
var t$ = s(403581),
    tY = s(646440);
function tJ(e) {
    let { onClick: t, questId: s, orbMultiplierEligibility: n } = e,
        l = (0, et.ZP)(s),
        a = (0, tk.B9)(n);
    if (null == l) return null;
    let i = a
        ? eE.intl.formatToPlainString(eE.t.l2UfLG, { bonusOrbMultiplier: l })
        : eE.intl.formatToPlainString(eE.t["G+mKoo"], { bonusOrbMultiplier: l });
    return (0, r.jsx)(ej.D, {
        onClick: () => {
            (0, e6.gC)(l, n), t?.();
        },
        "aria-label": i,
        children: (0, r.jsxs)("div", {
            className: tY.k,
            children: [
                (0, r.jsx)(t$.t, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(C.E, { variant: "text-sm/normal", color: "currentColor", className: tY.Q, children: i }),
            ],
        }),
    });
}
var tZ = s(947641),
    tX = s(194261),
    t0 = s(106799),
    t1 = s(801365),
    t2 = s(453384),
    t7 = s(646764),
    t8 = s(269999);
function t3(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        a = (0, h.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        i = (0, t1.mq)(t.config, a),
        o = (0, t1.ks)(t.config),
        c = (0, t1.wo)(t.config, a),
        u = (0, t1.l0)(t.config, a),
        d =
            null != c
                ? c > 700 * u
                    ? tS.i2.TIER_4
                    : c > 200 * u
                      ? tS.i2.TIER_3
                      : c > 100 * u
                        ? tS.i2.TIER_2
                        : tS.i2.TIER_1
                : void 0,
        { completedRatio: m } = (0, et.O9)(t),
        E = t.userStatus?.claimedAt != null,
        x = (0, tf.Ic)(t),
        g = E ? "completed" : x ? "expired" : null;
    return (0, r.jsxs)("div", {
        className: t8.CZ,
        children: [
            (0, r.jsx)("div", {
                className: t8.tE,
                children: (0, r.jsx)(t2.A, {
                    style: "small",
                    size: 58,
                    percentComplete: m,
                    useAltStyle: !0,
                    children: (0, r.jsxs)("div", {
                        className: t8.n5,
                        children: [
                            (0, r.jsx)(t7.A, {
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
                                    className: t8.EY,
                                    children: (0, r.jsx)(tZ.r, { className: t8.AM, size: "sm", color: "currentColor" }),
                                }),
                            "expired" === g &&
                                (0, r.jsx)("div", {
                                    className: t8.EY,
                                    children: (0, r.jsx)(tX.X, { size: "sm", className: t8.Sz, color: "currentColor" }),
                                }),
                        ],
                    }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: t8.FS,
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: t8.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            o && (0, r.jsx)(t0.A, { className: t8.Kq, customSize: 18 }),
                            (0, r.jsx)(
                                C.E,
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
var t4 = s(190107),
    t5 = s(315767);
function t6(e) {
    let { quest: t, questContent: s, isHovering: n, isInFeaturedSection: l, sourceQuestContent: i } = e,
        o = a.useRef(null),
        c = (0, tq.A9)(t, i, t4.rE.QUEST_HOME_DESKTOP, s, tw.Ob.QuestHome, o),
        u = (0, tP.z)(),
        d = (0, et.SD)(t, u),
        m = u === tk.MA.NITRO && d;
    return (0, r.jsxs)("div", {
        ref: o,
        children: [
            (0, r.jsx)(tB.A, { visible: m, glow: !0 }),
            (0, r.jsx)(t3, { quest: t, questContent: s, sourceQuestContent: i, isHovering: n }),
            (0, r.jsxs)("div", {
                className: t5.yM,
                children: [
                    (0, r.jsx)(C.E, {
                        style: { opacity: n ? 1 : 0.8 },
                        variant: "text-sm/medium",
                        className: t5.Wj,
                        lineClamp: n ? void 0 : 1,
                        children: c,
                    }),
                    (0, r.jsxs)("div", {
                        className: t5.Gv,
                        children: [
                            (0, r.jsx)(C.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: eE.intl.string(eE.t.o6FLcF),
                            }),
                            d &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: "\u2022",
                                        }),
                                        (0, r.jsx)(tJ, { questId: t.id, orbMultiplierEligibility: u }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tz, { quest: t, questContent: s, sourceQuestContent: i, isHovering: n, isInFeaturedSection: l }),
        ],
    });
}
var t9 = s(547032);
function se(e) {
    let {
            quest: t,
            questContent: s,
            isInFeaturedSection: n,
            className: l,
            impressionRef: i,
            sourceQuestContent: c,
        } = e,
        u = a.useMemo(() => (0, tS.tW)(t, tS.fY.QUEST_BAR_HERO_IMAGE), [t]),
        d = a.useMemo(() => (0, tS.tW)(t, tS.fY.QUEST_BAR_HERO_VIDEO), [t]),
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
        f = (0, tb.Pd)(t),
        j = (0, t_.go)(),
        v = (0, tp.E0)(t.config),
        C = (0, tO.Lk)({
            isShareable: v,
            questId: t.id,
            trackingCtx: a.useMemo(
                () => ({
                    content: s,
                    ctaContent: es.Cy.CONTEXT_MENU_COPY_LINK,
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
        className: o()(t9.kL, { [t9.iR]: n }, l),
        ...E,
        children: [
            (0, r.jsx)(tN.N, {
                imageAsset:
                    null != u
                        ? { asset: u, assetId: "QuestTileV2", alt: eE.intl.string(eE.t.jnijWz), className: t9.Tv }
                        : void 0,
                videoAsset:
                    null != d
                        ? {
                              asset: d,
                              assetId: "QuestTileV2_heroAnimated",
                              className: o()(t9.Tv, t9.gJ, { [t9.C7]: m }),
                          }
                        : void 0,
                imageSize: { width: 600, height: 450 },
                showVideo: h,
            }),
            (0, r.jsx)("div", { className: o()(t9.sL, { [t9.Mq]: f === tb.UA.EXPIRED }) }),
            (0, r.jsx)("div", { className: o()(t9.f5, { [t9.Hk]: m }) }),
            (0, r.jsxs)("div", {
                className: t9.wx,
                children: [
                    (0, r.jsx)(tF, { quest: t }),
                    (0, r.jsxs)("div", {
                        className: t9.$s,
                        children: [
                            n &&
                                v &&
                                (0, r.jsx)(ej.D, {
                                    tag: "div",
                                    className: o()(t9.E9, { [t9.CJ]: m }),
                                    onClick: C,
                                    "aria-label": eE.intl.string(eE.t.WqhZss),
                                    children: (0, r.jsx)(tv.q, { size: "sm", color: "currentColor" }),
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
                                    (0, r.jsx)(ej.D, {
                                        ...e,
                                        tag: "div",
                                        className: o()(t9.E9, { [t9.CJ]: m }),
                                        "aria-label": eE.intl.string(eE.t.DEoVWZ),
                                        children: (0, r.jsx)(tC.j, { size: "sm", color: "currentColor" }),
                                    }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(t6, { quest: t, questContent: s, isInFeaturedSection: n, isHovering: m, sourceQuestContent: c }),
        ],
    });
}
let st = a.memo(function (e) {
    let t = (0, h.bG)([er.A], () => (null != e.questId ? er.A.getQuest(e.questId) : void 0), [e.questId]),
        s = a.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(tA.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === J.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(se, { ...e, quest: s, impressionRef: t }),
          });
});
var ss = s(691540),
    sn = s(857250),
    sl = s(97483);
function sr() {
    let { enabled: e } = ee.jm.useConfig({ location: t4.rE.QUEST_HOME_DESKTOP }),
        t = a.useRef(null);
    return {
        showToast: a.useCallback(
            (s) => {
                t.current !== s &&
                    e &&
                    ((0, ss.P0)((0, sn.o)(eE.intl.string(eE.t["5ABf1w"]), sl.Ck.FAILURE)),
                    K.default.track(ep.HAw.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, { quest_id: s }),
                    (t.current = s));
            },
            [e],
        ),
    };
}
var sa = s(535185);
function si(e, t, s, n) {
    return null == e ? 1 : Math.max(1, Math.min(n, Math.floor((e + s) / (t + s))));
}
let so = function (e, t, s) {
    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        [l, r] = a.useState(null),
        i = a.useCallback(() => {
            r(si(e.current?.clientWidth, t, s, n));
        }, [r, t, s, n, e]);
    return (0, sa.g)(e, i, [t, s], { fireOnMount: !0 }), l;
};
var sc = s(121480);
let su = 4 * tg.A.Millis.SECOND;
function sd(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = a.useRef(null),
        i = so(l, s, n);
    return (0, r.jsx)("div", {
        className: sc.kL,
        ref: l,
        style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
        children: null !== i && t(i),
    });
}
let sm = a.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: i,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        m = (0, c.zy)(),
        { showToast: h } = sr(),
        E = a.useRef(""),
        [x, g] = a.useState(null),
        [f, j] = a.useState(0),
        { enabled: S } = ee.aD.useConfig({ location: t4.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: _ }, p] = (0, tx.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: su },
        })),
        N = a.useCallback(
            (e) => {
                if ((l && 0 === s.length) || !i) return !1;
                let t = (0, tf.vc)(e, s, n);
                return null == t ? (h(e), !1) : (g(t.id), j((e) => e + 1), !0);
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
        ? (0, r.jsx)(ed.y, { className: sc.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: sc.y7,
                children: [
                    (0, r.jsx)(v.D, {
                        variant: "heading-xl/semibold",
                        children: eE.intl.string(u ? eE.t.PBfFnx : eE.t.NqFP6z),
                    }),
                    (0, r.jsx)(C.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? eE.intl.format(eE.t.LdYS1H, { onClick: d }) : eE.intl.string(eE.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(sd, {
                tileMinWidth: 336,
                gridGap: 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = x === t.id,
                            a = null != x && !l;
                        return (0, r.jsxs)(
                            tE.animated.div,
                            {
                                className: o()({ [sc.XB]: l }),
                                style: tj(l, a, _),
                                children: [
                                    l && (0, r.jsx)("div", { className: sc.E4 }, f),
                                    S
                                        ? (0, r.jsx)(st, {
                                              quest: t,
                                              questContent: J.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sc.d,
                                              sourceQuestContent: J.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eK.Ay, {
                                              quest: t,
                                              questContent: J.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: sc.d,
                                              sourceQuestContent: J.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var sh = s(458518),
    sE = s(65990);
let sx = [],
    sg = et.L1.SORT,
    sf = et.L1.FILTER,
    sj = a.forwardRef(function (e, t) {
        let s,
            n,
            l,
            i,
            o = a.useRef(null),
            [u, d] =
                ((s = (0, sh.o)()),
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
                    (e = u.get(sg)),
                    ((0, Y.uJ)(e) ? null : (Object.values(t4.kL).find((t) => t === e) ?? null)) ?? t4.kL.SUGGESTED
                );
            }, [u]),
            h = a.useMemo(
                () =>
                    (function (e) {
                        if ((0, Y.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, t4.WQ)(e))
                            .filter(te.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(sf)) ?? sx,
                [u],
            ),
            E = a.useCallback(
                (e) => {
                    d({ [sg]: e });
                },
                [d],
            ),
            x = a.useCallback(
                (e) => {
                    d({
                        [sf]:
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
            { enabled: g } = ee.jm.useConfig({ location: t4.rE.QUEST_HOME_DESKTOP }),
            {
                quests: f,
                excludedQuests: j,
                isFetchingCurrentQuests: C,
                hasFetched: S,
            } = (0, et.Qh)(
                et.NC.ALL,
                a.useMemo(() => ({ sortMethod: m, filters: h, removeExpiredQuests: g }), [m, h, g]),
            ),
            _ = a.useCallback(() => {
                x(sx);
            }, [x]),
            p = a.useRef(null),
            N = a.useRef(null),
            A = (0, c.zy)(),
            T = (0, c.W6)();
        return (
            a.useEffect(() => {
                "" !== A.hash &&
                    null != p.current &&
                    null != N.current &&
                    (m !== p.current || h !== N.current) &&
                    T.replace({ ...A, hash: void 0 });
            }, [m, h, A, T]),
            a.useEffect(() => {
                p.current = m;
            }, [m]),
            a.useEffect(() => {
                N.current = h;
            }, [h]),
            (0, et.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: f.length }),
            a.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        _(),
                            E(t4.kL.SUGGESTED),
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
                        className: sE.Mj,
                        children: [
                            (0, r.jsx)(v.D, { variant: "heading-lg/medium", children: eE.intl.string(eE.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: sE.Nf,
                                children: [
                                    (0, r.jsx)(th, { onChange: E, optionClassName: sE.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(tu, { onChange: x, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(sm, {
                        ref: o,
                        quests: f,
                        excludedQuests: j,
                        isFetching: C,
                        hasFetched: S,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: _,
                    }),
                ],
            })
        );
    });
var sv = s(575593),
    sC = s(440703),
    sS = s(462887),
    s_ = s(187322),
    sp = s(765671),
    sN = s(736653),
    sA = s(162232),
    sT = s(734736),
    sO = s(303136),
    sb = s(265234),
    sR = s(181713);
let sI = (e) => {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? sR.A : sR.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sb.k, t),
        children: s
            ? (0, r.jsx)(sO.A, {
                  preload: "auto",
                  className: sb.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sb.L, src: l, alt: n }),
    });
};
var sM = s(57718),
    sy = s(659249);
let sL = (0, a.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, a.useState)(!1),
        [l, i] = (0, a.useState)(24),
        [c, u] = (0, a.useState)(!1),
        d = (0, a.useRef)(null),
        m = (0, a.useRef)(null),
        E = (0, a.useRef)(null),
        x = (0, h.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        { ref: g, height: f = 0 } = (0, sp.Ay)(),
        j = (0, sN.Ay)(),
        S = (0, et.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        _ = t.userStatus?.claimedTier ?? 0,
        p = t.config.rewards[_],
        N = p?.type === sC.l.FRACTIONAL_PREMIUM,
        A = p?.type === sC.l.COLLECTIBLE,
        T = p?.type === sC.l.VIRTUAL_CURRENCY,
        O = p?.collectibleProduct?.items?.[0],
        b = O?.type === sv.R.AVATAR_DECORATION ? O : null,
        R = a.useMemo(
            () =>
                null == p
                    ? null
                    : !0 === T && t.userStatus?.orbQuantityClaimed != null
                      ? eE.intl.format(eE.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : p.name,
            [p, T, t],
        );
    (0, sp.i4)(d, (e) => {
        let { height: t } = e;
        if (!A || null == t || null == m.current || null == d.current || null == E.current) return;
        let s = d.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            l = E.current.getBoundingClientRect();
        i((n.top - s.top - l.height) / 2);
    });
    let I = (0, sS.M)(j),
        M = a.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        L = a.useMemo(() => (0, tS.tW)(t, tS.fY.REWARD), [t]),
        Q = s ? f + 8 : 0,
        { content_position: U, row_index: H, ...D } = (0, es.fF)(J.uF.TROPHY_CASE_CARD),
        F = () => {
            n(!0), K.default.track(ep.HAw.QUEST_HOVER, { quest_id: t.id, ...D });
        },
        w = () => {
            n(!1);
        },
        q = (e) => {
            u(!0), K.default.track(ep.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == p || c
        ? null
        : (0, r.jsx)(s_.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: F,
                  onBlur: w,
                  onMouseEnter: F,
                  onMouseLeave: w,
                  className: o()(sy.kL, { [sy.yo]: s }),
                  children: [
                      null != x &&
                          A &&
                          null != b &&
                          (0, r.jsx)("div", {
                              ref: E,
                              className: sy.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sA.A, {
                                  avatarDecorationOverride: b,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      N
                          ? (0, r.jsx)(sT.A, { className: sy.Sl })
                          : T
                            ? (0, r.jsx)(sI, {
                                  className: sy.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : L.isAnimated
                              ? (0, r.jsx)(y.A, {
                                    className: sy.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: L.url,
                                        type: L.mimetype ?? void 0,
                                        onError: () => q(L.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sy.Sl,
                                    src: L.url,
                                    alt: t.config.messages.questName,
                                    onError: () => q(L.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sy.Lw, { [sy.en]: I, [sy.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: m,
                          className: sy.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(sM.Ay, {
                              logotypeClassName: o()(sy.wm, { [sy.A0]: M }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: g,
                          className: sy.zH,
                          children: [
                              (0, r.jsx)(v.D, {
                                  className: sy.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eE.intl.format(eE.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(C.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "always-white",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: eE.intl.format(eE.t["kXVcV+"], { reward: R, claimedDate: S }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sQ = s(396478);
function sU(e) {
    let { onClick: t } = e,
        n = (0, sN.Ay)();
    return (0, r.jsxs)(sQ.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sQ.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sQ.SG, { note: eE.intl.format(eE.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sH = s(975424);
function sD(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, et.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(ed.y, { className: sH.u })
        : 0 === n.length
          ? (0, r.jsx)(sU, { onClick: () => t(et.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sH.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sL, { quest: e }, e.id)),
            });
}
var sF = s(548411),
    sw = s(554830),
    sq = s(689175),
    sP = s(321503);
let sk = (e) => eg.A.space.SPACE_XL.resolve({ density: e }),
    sB = (e) => (1220 - 2 * sk(e) * 0.75) / 3;
var sV =
    (((l = {}).FEATURED = "featured"),
    (l.IN_PROGRESS = "in-progress"),
    (l.ENDING_SOON = "ending-soon"),
    (l.ORB = "orb"),
    (l.DISCOVERED = "discovered"),
    l);
let sG = [
    { type: "featured-quests", identifier: "featured", title: eE.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "in-progress", title: eE.t.CHJy6z },
    { type: "quests", identifier: "ending-soon", title: eE.t.PRg3qh },
    { type: "quests", identifier: "orb", title: eE.t["0Uc94A"] },
    { type: "quests", identifier: "discovered", title: eE.t["u9Ug++"] },
];
var sW = s(522403);
let sK = "data-scroll-target",
    sz = `[${sK}]`,
    s$ = { anchors: [], pageSize: 1 },
    sY = a.memo(function (e) {
        let {
                children: t,
                className: s,
                itemSelector: n = sz,
                maskWidth: l = 24,
                overflowAmount: i = 0,
                maskMarginMultiplier: c = 1,
            } = e,
            u = a.useRef(null),
            [d, m] = a.useState(!1),
            [E, x] = a.useState(!1),
            [g, f] = a.useState(!1),
            [j, v] = a.useState([]),
            [C, S] = a.useState(1),
            _ = (0, h.bG)([A.A], () => A.A.useReducedMotion) ? "auto" : "smooth",
            [p, N] = a.useState(!1),
            T = a.useCallback(
                (e) => {
                    e.isIntersecting ? N(!0) : N(!1);
                },
                [N],
            ),
            O = a.useContext(sP.X),
            b = (0, e9.B)(
                T,
                { root: O?.current?.getScrollerNode() ?? null, threshold: 0, rootMargin: "150px 0px 150px 0px" },
                !0,
            ),
            R = a.useCallback(() => {
                let e = u.current?.getScrollerNode();
                null == e ||
                    (0 !== e.clientWidth && (m(e.scrollLeft > 0), x(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
            }, []),
            I = a.useCallback(() => {
                let { anchors: e, pageSize: t } = (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return s$;
                    let a = Array.from(r.querySelectorAll(s));
                    if (0 === a.length) return s$;
                    let i = a[0].offsetWidth,
                        o = a.length > 1 ? a[1].offsetLeft - a[0].offsetLeft - i : 0,
                        c = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (i + o))),
                        u = a.length - c + 1;
                    return u <= 1
                        ? s$
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
            L = a.useCallback(
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
            Q = a.useCallback(() => {
                R(), I(), M();
            }, [R, I, M]);
        (0, sa.g)(b, Q, [], { fireOnMount: !0 });
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
            className: o()(s, sW.m7),
            ref: b,
            style: H,
            children: [
                (0, r.jsx)("div", {
                    className: o()(sW.k9, sW.RW, { [sW.Q2]: d }),
                    "aria-hidden": !d,
                    children: (0, r.jsx)(ei.K, {
                        icon: sF.Z,
                        variant: "overlay-secondary",
                        onClick: () => y(-1),
                        disabled: !d,
                        "aria-label": eE.intl.string(eE.t.vgfxaA),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(sW.k9, sW.K3, { [sW.Q2]: E }),
                    "aria-hidden": !E,
                    children: (0, r.jsx)(ei.K, {
                        icon: sw.K,
                        variant: "overlay-secondary",
                        onClick: () => y(1),
                        disabled: !E,
                        "aria-label": eE.intl.string(eE.t.XiOHRX),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()({ [sW.sF]: d && p && g, [sW.RC]: E && p && g, [sW.Ni]: U && !d, [sW.GA]: U && !E }),
                    children: (0, r.jsx)(sq.zC, {
                        ref: u,
                        orientation: "horizontal",
                        onScroll: R,
                        onFocusCapture: L,
                        className: o()({ [sW.x2]: U }, sW.XG),
                        children: (0, r.jsxs)(sP.X.Provider, {
                            value: u,
                            children: [
                                t,
                                j.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: sW.fw, style: { insetInlineStart: `${e}px` } },
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
    sJ = a.createContext({ targetQuestId: null, highlightCount: null, highlightAnimationProgress: null });
var sZ = s(76060);
function sX(e) {
    let { children: t, questId: s } = e,
        { targetQuestId: n, highlightCount: l, highlightAnimationProgress: i } = a.useContext(sJ),
        o = n === s,
        c = null != n && n !== s,
        { enabled: u } = ee.aD.useConfig({ location: t4.rE.QUEST_HOME_DESKTOP }),
        d = a.useMemo(() => ({ ...tj(o, c, i), borderRadius: u ? "var(--radius-xl)" : "10px" }), [o, c, i, u]);
    return (0, r.jsxs)(tE.animated.div, {
        [sK]: "",
        className: o ? sZ.X : void 0,
        style: d,
        children: [o && (0, r.jsx)("div", { className: sZ.E }, l), t],
    });
}
var s0 = s(474646);
function s1(e) {
    let { containerWidth: t, questIds: s, setMaxRowIndex: n } = e,
        { enabled: l } = ee.aD.useConfig({ location: t4.rE.QUEST_HOME_DESKTOP }),
        i = a.useMemo(() => (null == t ? null : si(t, 345, 20, 2)), [t]);
    return (
        a.useEffect(() => {
            null !== i && n(Math.ceil(s.length / i) - 1);
        }, [s.length, i, n]),
        (0, r.jsx)("div", {
            className: s0.k,
            style: {
                "--custom-min-quest-tile-width": "345px",
                "--custom-quest-grid-gap": "20px",
                "--custom-tiles-per-row": 2,
            },
            children:
                null != i &&
                s.map((e, t) =>
                    (0, r.jsx)(
                        sX,
                        {
                            questId: e,
                            children: l
                                ? (0, r.jsx)(
                                      st,
                                      {
                                          isInFeaturedSection: !0,
                                          questId: e,
                                          questContent: J.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / i),
                                          sourceQuestContent: J.uF.QUEST_HOME_FEATURED_SECTION,
                                      },
                                      e,
                                  )
                                : (0, r.jsx)(
                                      eK.Ay,
                                      {
                                          questId: e,
                                          isInFeaturedSection: !0,
                                          questContent: J.uF.QUEST_HOME_FEATURED_SECTION,
                                          contentPosition: t,
                                          rowIndex: Math.floor(t / i),
                                          sourceQuestContent: J.uF.QUEST_HOME_FEATURED_SECTION,
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
var s2 = s(418842),
    s7 = s(548636);
function s8(e) {
    let { questContent: t, questIds: s, rowIndex: n, sectionIdentifier: l } = e,
        { enabled: a } = ee.aD.useConfig({ location: t4.rE.QUEST_HOME_DESKTOP }),
        i = (0, s2.C)();
    return (0, r.jsx)(sY, {
        maskWidth: sk(i),
        overflowAmount: 25,
        maskMarginMultiplier: 0.75,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${sB(i)}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
                "--custom-quest-tile-border-radius": `${a ? "var(--radius-xl)" : "10px"}`,
            },
            className: s7.FO,
            children: [
                s.map((e, s) =>
                    (0, r.jsx)(
                        sX,
                        {
                            questId: e,
                            children: a
                                ? (0, r.jsx)(st, {
                                      questId: e,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: s7.d,
                                      sourceQuestContent: t,
                                  })
                                : (0, r.jsx)(eK.Ay, {
                                      questId: e,
                                      isInFeaturedSection: l === sV.FEATURED,
                                      questContent: t,
                                      contentPosition: s,
                                      rowIndex: n,
                                      className: s7.d,
                                      sourceQuestContent: t,
                                  }),
                        },
                        `animated-wrapper-${e}`,
                    ),
                ),
                (0, r.jsx)("div", { className: s7.fu }),
            ],
        }),
    });
}
var s3 = s(958538);
let s4 = tg.A.Millis.WEEK;
function s5() {
    let e = er.A.quests;
    if (0 === er.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tf.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class s6 extends h.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(er.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - s4;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([er.A], s5), t;
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
let s9 = new s6(en.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    ne = 2 * tg.A.Millis.DAY,
    nt = new Map(sG.map((e) => [e.identifier, e])),
    ns = {
        [sV.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function nn(e, t) {
    return e === t || (e.length === t.length && 0 === new Set(e).symmetricDifference(new Set(t)).size);
}
function nl(e, t) {
    let s = nt.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
var nr = s(32304);
let na = {
        [sV.FEATURED]: J.uF.QUEST_HOME_FEATURED_SECTION,
        [sV.IN_PROGRESS]: J.uF.QUEST_HOME_IN_PROGRESS_SECTION,
        [sV.ENDING_SOON]: J.uF.QUEST_HOME_ENDING_SOON_SECTION,
        [sV.ORB]: J.uF.QUEST_HOME_ORB_SECTION,
        [sV.DISCOVERED]: J.uF.QUEST_HOME_DISCOVERED_SECTION,
    },
    ni = 4 * tg.A.Millis.SECOND,
    no = a.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l } = e,
            { enabled: i } = ee.aD.useConfig({ location: t4.rE.QUEST_HOME_DESKTOP }),
            { sections: c, isFetchingCurrentQuests: u } = ((e) => {
                let { isLoadingQuestHomeHero: t } = e,
                    {
                        quests: s,
                        isFetchingCurrentQuests: n,
                        hasFetched: l,
                    } = (0, et.Qh)(et.NC.ALL, { sortMethod: t4.kL.SUGGESTED, filters: [], removeExpiredQuests: !0 }),
                    r = (0, s3.A)(
                        () =>
                            s.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        s.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        nn,
                    ),
                    i = (0, et.T2)(),
                    o = (0, h.bG)([s9], () => s9.getDiscoveredAtByQuestId(), []),
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
                                          let i = er.A.getQuestConfig(e);
                                          if (null == i) return;
                                          let o = (function (e) {
                                              let {
                                                      quest: t,
                                                      hero: s,
                                                      discoveredAtByQuestId: n,
                                                      questIdsBySectionIdentifier: l,
                                                  } = e,
                                                  r = er.A.getQuest(t.id)?.userStatus,
                                                  a =
                                                      null != r &&
                                                      null != r.enrolledAt &&
                                                      null != r.completedAt &&
                                                      null == r.claimedAt;
                                              return (0, tf.kd)(t) && !a
                                                  ? null
                                                  : null != r && null != r.enrolledAt && null == r.claimedAt
                                                    ? sV.IN_PROGRESS
                                                    : n.has(t.id)
                                                      ? sV.DISCOVERED
                                                      : null != s && (0, tp.I0)(s, t.id) && nl(sV.FEATURED, l)
                                                        ? sV.FEATURED
                                                        : new Date(t.expiresAt).valueOf() <= Date.now() + ne
                                                          ? sV.ENDING_SOON
                                                          : nl(sV.FEATURED, l)
                                                            ? sV.FEATURED
                                                            : (0, t1.ks)(t)
                                                              ? sV.ORB
                                                              : null;
                                          })({
                                              quest: i,
                                              hero: s,
                                              discoveredAtByQuestId: n,
                                              questIdsBySectionIdentifier: l,
                                          });
                                          null == o ||
                                              (a && o !== sV.FEATURED) ||
                                              (l.set(o, [...(l.get(o) ?? []), e]), r.add(e));
                                      }
                                      return (
                                          s?.questIds?.forEach((e) => a(e, { featuredOnly: !0 })),
                                          t.forEach((e) => a(e, {})),
                                          sG
                                              .map((e) => {
                                                  let t = ns?.[e.identifier],
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
            { showToast: m } = sr(),
            [E, x] = a.useState(null),
            [g, f] = a.useState(0),
            [j, C] = a.useState(null),
            [S, _] = a.useState(0),
            p = a.useRef(null),
            N = a.useCallback(
                (e) => {
                    C(e.contentRect.width);
                },
                [C],
            );
        (0, sa.g)(d, N, [N], { fireOnMount: !0 });
        let [{ highlightAnimationProgress: A }, T] = (0, tx.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: ni },
            })),
            O = a.useCallback(
                (e) => {
                    if (null == e || null == j) return !1;
                    let t = document.getElementById((0, eK.sT)(e));
                    return (
                        !u &&
                        (null == t
                            ? (m(e), !1)
                            : (x(e),
                              f((e) => e + 1),
                              t.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                              T({
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
                [x, f, T, u, m, j],
            );
        a.useImperativeHandle(t, () => ({ scrollToQuest: O }), [O]),
            a.useLayoutEffect(() => {
                if (null == s) {
                    p.current = null;
                    return;
                }
                p.current !== s && ((0, el.sB)(s), O(s) && (p.current = s));
            }, [s, O]);
        let b = a.useMemo(() => ({ targetQuestId: E, highlightCount: g, highlightAnimationProgress: A }), [E, g, A]),
            R = a.useMemo(
                () =>
                    c.findIndex((e) => {
                        let { identifier: t } = e;
                        return t === sV.FEATURED;
                    }),
                [c],
            );
        return (0, r.jsx)(sJ.Provider, {
            value: b,
            children: (0, r.jsx)("div", {
                className: o()(nr.k, l),
                ref: d,
                children: c.map((e, t) => {
                    let { identifier: s, questIds: n, title: l } = e;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: nr.p,
                            children: [
                                (0, r.jsx)(v.D, { variant: "heading-lg/medium", children: eE.intl.string(l) }),
                                s === sV.FEATURED && i
                                    ? (0, r.jsx)(s1, { questIds: n, setMaxRowIndex: _, containerWidth: j })
                                    : (0, r.jsx)(s8, {
                                          questIds: n,
                                          rowIndex: t < R ? t : t + S,
                                          sectionIdentifier: s,
                                          questContent: na[s],
                                      }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        });
    });
var nc = s(353640),
    nu = s(121894),
    nd = s(851936);
let nm = (0, nc.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, nd.L)({ location: t4.rE.QUEST_HOME_DESKTOP });
        if (s.info === eT.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, nu.r)(() => e(l));
    },
}));
var nh = s(516226),
    nE = s(323889),
    nx = s(561844),
    ng = s(901406),
    nf = s(139384),
    nj = s(43990),
    nv = s(770178),
    nC = s(14233);
function nS(e, t) {
    let { row_index: s, ...n } = (0, es.fF)(J.uF.QUEST_HOME_HERO);
    (0, nx.Qg)({
        adContentId: e,
        adCreativeType: nE.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: J.uF.QUEST_HOME_HERO,
    });
}
let n_ = a.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: i, buttons: c, background: u, className: d } = e,
        [m, h] = a.useState("display-lg"),
        E = a.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, nv.w)(E, [], { fireOnMount: !0 }),
        g = a.useCallback(() => nS(s, ep.HAw.QUEST_HOVER), [s]),
        f = a.useCallback(() => nS(s, ep.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(nj.N, {
        theme: ep.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(nC.iE, e, d),
                onMouseEnter: g,
                onMouseLeave: f,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: nC.FG,
                    children: [
                        (0, r.jsxs)(_.B, {
                            className: nC.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(_.B, {
                                    className: nC.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(_.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(v.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: nC.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(C.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: nC.VA,
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
var np = s(194526),
    nN = s(731355),
    nA = s(621466),
    nT = s(508770),
    nO = s(406810),
    nb = s(628284),
    nR = s(65154),
    nI = s(975807),
    nM = s(58703),
    ny = s(18437),
    nL = s(398025),
    nQ = s(691464);
function nU(e) {
    let [t, s] = a.useState(!1),
        n = a.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = a.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function nH(e) {
    let { hero: t, contentPosition: s } = e,
        n = a.useRef(null),
        { isHovering: l, hoverProps: i } = nU(
            a.useCallback(
                (e) => {
                    (0, nx.Qg)({
                        adContentId: t.id,
                        adCreativeType: nE.p.QUEST_HOME_HERO,
                        event: e ? ep.HAw.QUEST_HOVER : ep.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: J.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, es.jO)(J.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    a.useEffect(() => {
        let e = n.current;
        (0, nA.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(eT.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: c } = (0, tx.z)({ hoverSpring: +!!l, config: tE.config.gentle }),
        u = a.useCallback(() => {
            (0, nI.A)(t.cta.url),
                (0, nx.vK)({
                    adContentId: t.id,
                    adCreativeType: nE.p.QUEST_HOME_HERO,
                    questContent: J.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: es.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(ej.D, {
        tag: "div",
        className: o()(nQ.FW, nQ.Bm),
        onClick: u,
        "aria-label": t.cta.buttonLabel,
        [sK]: !0,
        ...i,
        children: [
            (0, r.jsx)("div", {
                className: nQ.Ve,
                children: (0, r.jsx)(tN.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(nQ.pv, nQ.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(nQ.pv, nQ.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(tE.animated.div, {
                className: nQ.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(f.$, {
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
function nD(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        i = a.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: c, hours: u, minutes: d, seconds: m } = (0, tU.A)(i, tg.A.Millis.MINUTE),
        E = a.useMemo(
            () =>
                (0, nM.uN)(
                    { days: c, hours: u, minutes: d, seconds: m },
                    { days: eE.t["Ux/De1"], hours: eE.t.Lzd5Ie, minutes: eE.t.odmpbP },
                ),
            [c, u, d, m],
        ),
        x = (0, h.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        g = a.useMemo(() => (0, t1.mq)(s.config, x), [s.config, x]),
        j = a.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, tn.xv)(e).type) {
                        case sC.l.IN_GAME:
                            return eE.intl.string(eE.t["O/J2kr"]);
                        case sC.l.COLLECTIBLE:
                            return eE.intl.string(eE.t.Jg17Ut);
                        case sC.l.VIRTUAL_CURRENCY:
                            return eE.intl.string(eE.t.ElYQFS);
                        default:
                            return (0, t1.mq)(e, t);
                    }
                })(s.config, x),
            [s.config, x],
        ),
        { completedRatio: v, completedRatioDisplay: S } = (0, et.O9)(s),
        p = a.useMemo(() => (0, t1.wo)(s.config, x), [s.config, x]),
        N = (0, ny.tG)(),
        A = (0, ny.WS)(),
        { isHovering: T, hoverProps: O } = nU(
            a.useCallback(
                (e) => {
                    A({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: nE.p.QUEST_HOME_HERO,
                        event: e ? ep.HAw.QUEST_HOVER : ep.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: J.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, es.jO)(J.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, A, l, s.id],
            ),
        ),
        { hoverSpring: b } = (0, tx.z)({ hoverSpring: +!!T, config: tE.config.gentle }),
        R = a.useCallback(() => {
            n(s.id),
                N({
                    adContentId: t,
                    relatedQuestId: s.id,
                    adCreativeType: nE.p.QUEST_HOME_HERO,
                    questContent: J.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: es.Cy.VIEW_QUESTS,
                    questContentPosition: l,
                    sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [n, t, s.id, N, l]);
    return (0, r.jsxs)(ej.D, {
        tag: "div",
        className: o()(nQ.FW, nQ.$R),
        onClick: R,
        "aria-label": eE.intl.string(eE.t["th2+0j"]),
        [sK]: !0,
        ...O,
        children: [
            (0, r.jsxs)(_.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(nT.E, { type: { text: j } }),
                    (0, r.jsx)(tE.animated.div, {
                        style: { opacity: (0, nL.a)(b.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(nT.E, { type: { text: E }, icon: nO.O }),
                    }),
                ],
            }),
            (0, r.jsx)(tE.animated.div, {
                className: nQ.Tr,
                style: { transform: b.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(t2.A, {
                    percentComplete: v,
                    overlayText: T && null != p ? `${p}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(t7.A, {
                        quest: s,
                        questContent: J.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: T,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(tE.animated.div, {
                className: nQ.tw,
                style: {
                    opacity: (0, nL.a)(b.to([0, 1], [1, 0])),
                    transform: b.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(_.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nQ.Ht,
                            children: g,
                        }),
                        (0, r.jsxs)(_.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(_.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(nb.y, { size: "xs", color: eg.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(_.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, tp.pv)(s.config) === nN.Z.VIDEO
                                            ? (0, r.jsx)(nR.S, { size: "xs", color: eg.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(tR._, { size: "xs", color: eg.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(C.E, {
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
            (0, r.jsx)(tE.animated.div, {
                className: nQ.um,
                style: { transform: b.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(f.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), R();
                    },
                    text: eE.intl.string(eE.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var nF = s(648731);
function nw(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e;
    return (0, r.jsx)(sY, {
        className: nF.v,
        children: (0, r.jsxs)(_.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, r.jsx)(tA.R, {
                    adContentId: t.id,
                    adCreativeType: nE.p.QUEST_HOME_HERO,
                    questContent: J.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(nH, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, s) =>
                    (0, r.jsx)(
                        tA.R,
                        {
                            adContentId: t.id,
                            adCreativeType: nE.p.QUEST_HOME_HERO,
                            questContent: J.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: s + 1,
                            sourceQuestContent: J.uF.QUEST_HOME_HERO_SHELF,
                            children: (l) =>
                                (0, r.jsx)("div", {
                                    ref: (e) => {
                                        l.current = e;
                                    },
                                    children: (0, r.jsx)(nD, {
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
var nq = s(95115);
function nP() {
    return (0, r.jsx)("div", { className: nq.Np });
}
function nk(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = a.useRef(null);
    (0, nf.A)(n, t4.rE.QUEST_HOME_DESKTOP);
    let l = a.useMemo(() => (null != s ? (0, tS.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, r.jsxs)("div", {
              className: nq.Tv,
              children: [
                  (0, r.jsx)(nP, {}),
                  (0, r.jsx)("div", {
                      className: nq.LO,
                      children: (0, r.jsx)("img", { className: nq.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nq.LO, nq.jx, nq.hw),
                      children: (0, r.jsx)("img", { className: nq.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nq.LO, nq.jx, nq.Co),
                      children: (0, r.jsx)("img", { className: nq.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: nq.Tv,
              children: [
                  (0, r.jsx)(nP, {}),
                  (0, r.jsx)("div", {
                      className: nq.LO,
                      children: (0, r.jsx)(tN.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: n,
                          imageAsset: {
                              alt: "",
                              className: nq.LY,
                              asset: { url: l, mimetype: (0, tS.vm)(l), isAnimated: !1 },
                              assetId: l,
                          },
                          videoAsset: {
                              alt: "",
                              className: nq.LY,
                              asset: { url: s, mimetype: (0, tS.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function nB(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        n = (0, h.bG)([er.A], () => er.A.quests),
        { shelfQuests: l, isShelfEnabled: i } = (0, et.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, np.I)();
    a.useEffect(() => {
        o();
    }, [o]);
    let c = a.useMemo(() => t.questIds?.find((e) => n.has(e)), [n, t.questIds]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tA.R, {
                adContentId: t.id,
                adCreativeType: nE.p.QUEST_HOME_HERO,
                questContent: J.uF.QUEST_HOME_HERO,
                sourceQuestContent: J.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsx)(n_, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, r.jsxs)(_.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, r.jsx)("img", { src: t.sponsorImage, alt: "", className: nq.wm }),
                                (0, r.jsx)(C.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: nq.yu,
                                    children: eE.intl.string(eE.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, r.jsxs)(g.e, {
                            children: [
                                (0, r.jsx)(f.$, {
                                    onClick: () => {
                                        (0, ng._Q)(
                                            { adContentId: t.id, adCreativeType: nE.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: J.uF.QUEST_HOME_HERO,
                                                ctaContent: es.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: J.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !i &&
                                    null != c &&
                                    (0, r.jsx)(f.$, {
                                        onClick: () => {
                                            s(c),
                                                (0, nx.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: nE.p.QUEST_HOME_HERO,
                                                    questContent: J.uF.QUEST_HOME_HERO,
                                                    questContentCTA: es.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: J.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: eE.intl.string(eE.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, r.jsx)(nk, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, r.jsx)(nw, { hero: t, shelfQuests: l, onQuestCtaClick: s }),
        ],
    });
}
function nV() {
    return (0, r.jsx)("div", { className: o()(nC.iE, nC.FG, nC.B3), children: (0, r.jsx)(ed.y, {}) });
}
var nG = s(740879),
    nW = s(604880),
    nK = s(318808);
function nz(e) {
    let { adCreativeIds: t } = e,
        s = a.useCallback(() => (0, e6.zg)(t), [t]);
    return (0, r.jsxs)("div", {
        className: nG.MY,
        children: [
            (0, r.jsx)("img", { className: nG.Bg, src: nK.Ay, alt: "" }),
            (0, r.jsx)("div", { className: nG.r$, children: (0, r.jsx)("img", { src: nW, alt: "" }) }),
            (0, r.jsxs)("div", {
                className: nG.Nr,
                children: [
                    (0, r.jsx)(v.D, {
                        variant: "heading-lg/semibold",
                        color: "text-default",
                        className: nG.ky,
                        children: eE.intl.string(eE.t.GXmn57),
                    }),
                    (0, r.jsx)(C.E, {
                        variant: "text-md/normal",
                        className: nG.G3,
                        children: eE.intl.string(eE.t.bWuKqh),
                    }),
                    (0, r.jsx)(f.$, {
                        variant: "primary",
                        text: eE.intl.string(eE.t.UQvCf7),
                        fullWidth: !0,
                        onClick: s,
                    }),
                ],
            }),
        ],
    });
}
function n$(e) {
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
var nY = s(298537);
let nJ = function (e) {
    let { matchingQuestIds: t } = e,
        s = (0, s2.C)(),
        { enabled: n } = ee.aD.useConfig({ location: t4.rE.QUEST_HOME_DESKTOP }),
        l = a.useRef(null),
        i = so(l, sB(s), 20, 3);
    return (0, r.jsxs)(_.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: nY.kL,
        ref: l,
        children: [
            (0, r.jsxs)(v.D, {
                variant: "heading-lg/medium",
                children: [eE.intl.string(eE.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(_.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: nY.y7,
                      children: [
                          (0, r.jsx)(n$, { alt: eE.intl.string(eE.t["Xe+fJM"]) }),
                          (0, r.jsxs)(_.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(v.D, {
                                      variant: "heading-lg/medium",
                                      children: eE.intl.string(eE.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(v.D, {
                                      variant: "heading-sm/medium",
                                      children: eE.intl.string(eE.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: nY.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": `${sB(s)}px`,
                          "--custom-quest-grid-gap": "20px",
                      },
                      children:
                          null !== i &&
                          t.map((e, t) =>
                              n
                                  ? (0, r.jsx)(st, {
                                        questId: e,
                                        questContent: J.uF.QUEST_HOME_SEARCH_RESULT,
                                        contentPosition: t,
                                        rowIndex: Math.floor(t / i),
                                        className: nY.d,
                                        sourceQuestContent: J.uF.QUEST_HOME_SEARCH_RESULT,
                                    })
                                  : (0, r.jsx)(
                                        eK.Ay,
                                        {
                                            eagerLoadAssets: !0,
                                            questId: e,
                                            questContent: J.uF.QUEST_HOME_SEARCH_RESULT,
                                            contentPosition: t,
                                            rowIndex: Math.floor(t / i),
                                            className: nY.d,
                                            sourceQuestContent: J.uF.QUEST_HOME_SEARCH_RESULT,
                                        },
                                        e,
                                    ),
                          ),
                  }),
        ],
    });
};
var nZ = s(379078),
    nX = s(704554);
let n0 = {
    searchType: nZ.n.FUZZY,
    searchStringGenerator: (e) =>
        [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(te.Vq),
    sortType: nZ.r.JARO_WINKLER,
    throttleMs: 200,
};
var n1 = s(758836),
    n2 = s(613057),
    n7 = s(935824);
let n8 = a.createContext({});
function n3(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: i, scrollerRef: o } = a.useContext(n8);
    return (0, r.jsxs)(sP.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(P.A, {
                onScroll: i,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(w.A, { className: n7.Jo, innerClassName: n7.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function n4(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(q.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: x.r });
}
function n5(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: n } = (0, V.Z)({ location: t4.rE.QUEST_HOME_DESKTOP }),
        l = (0, h.bG)([A.A], () => A.A.useReducedMotion),
        i = (0, h.bG)([W.A], () => W.A.isFocused()),
        { ref: o, inViewport: c } = (0, e9.p)(),
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
        let e = (0, z.TM)();
        return (0, r.jsx)(y.A, {
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
function n6(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, V.Z)({ location: t4.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsxs)("div", {
        className: o()(n7.Tv, { [n7.lJ]: s }),
        children: [
            (0, r.jsx)(nP, {}),
            (0, r.jsx)("div", { className: o()(n7.nz, { [n7.ZZ]: s }) }),
            (0, r.jsx)(n5, { onLoadComplete: t, className: o()(n7.Fe, { [n7.H4]: s, [n7.Q8]: !s }) }),
        ],
    });
}
function n9(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, V.Z)({ location: t4.rE.QUEST_HOME_DESKTOP }),
        n = a.useCallback(() => {
            s ? window.open(ep.X7G.PAID_TERMS_ORBS) : window.open($.A.getArticleURL(ep.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(n_, {
        adContentId: s ? t4.yr : t4.uz,
        title: s ? eE.intl.format(eE.t.BCBIlp, {}) : eE.intl.format(eE.t.lmMBfy, {}),
        subtitle: s ? eE.intl.format(eE.t.U9FY0J, {}) : eE.intl.string(eE.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(g.e, {
                  children: [
                      (0, r.jsx)(f.$, {
                          variant: "overlay-primary",
                          text: eE.intl.string(eE.t["1Wm127"]),
                          onClick: () =>
                              (0, I.Cz)({
                                  tab: n1.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: T.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(f.$, {
                          variant: "overlay-secondary",
                          text: eE.intl.string(eE.t["7kTAgJ"]),
                          onClick: n,
                      }),
                  ],
              })
            : (0, r.jsx)(f.$, {
                  variant: "overlay-primary",
                  text: eE.intl.string(eE.t.hvVgAZ),
                  onClick: n,
                  icon: j.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(n6, { onAssetLoad: t }),
    });
}
function le(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: a } = e;
    return (0, r.jsx)("div", {
        className: o()(n7.iS, { [n7.R]: a }),
        children: l
            ? (0, r.jsx)(nV, {})
            : null != n
              ? (0, r.jsx)(nB, { hero: n, onQuestCtaClick: s })
              : (0, r.jsx)(n9, { onAssetLoad: t }),
    });
}
function lt(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: o()(n7.BW, n7.rZ),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: o()(n7.BW, n7.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: o()(n7.BW, n7.rZ),
                alt: "",
            }),
        ],
    });
}
let ls = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, c.zy)(),
        n = (0, c.W6)(),
        l = a.useMemo(() => (0, k.B)(s.pathname, ep.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        i = a.useMemo(() => new URLSearchParams(s.search).getAll(et.L1.AD_CREATIVE_IDS), [s.search]),
        x = (m.Fr || m.v1) && i.length > 0,
        g = (0, h.bG)([R.A], () => R.A.getState("quests")),
        {
            selectedTab: j,
            onSelectTab: A,
            tabs: y,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = Z.A.useField("tab"),
                n = (0, c.zy)(),
                l = (0, et.p5)(),
                { enabled: r } = ee.A8.useConfig({ location: t4.rE.QUEST_HOME_DESKTOP });
            a.useEffect(() => {
                Z.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let i = a.useCallback((e) => {
                Z.A.getState().setTab(e);
            }, []);
            return {
                tabs: a.useMemo(
                    () =>
                        [
                            { id: et.NC.ALL, label: r ? eE.intl.string(eE.t.Jt6u7B) : eE.intl.string(eE.t["0SzXmi"]) },
                            t
                                ? {
                                      id: et.NC.CLAIMED,
                                      label: r ? eE.intl.string(eE.t["3TVY/R"]) : eE.intl.string(eE.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: et.NC.PREVIEW_TOOL, label: eE.intl.string(eE.t.BDUDau) } : null,
                        ].filter(te.Vq),
                    [t, l, r],
                ),
                selectedTab: s,
                onSelectTab: i,
            };
        })({ withClaimedQuestsTab: !l }),
        {
            query: Q,
            setQuery: U,
            matchingQuestIds: w,
        } = (() => {
            let [e, t] = a.useState(""),
                [s, n] = a.useState(null),
                l = (0, h.yK)([er.A], () =>
                    (0, et.mn)(Array.from(er.A.quests.values()), { sortMethod: t4.kL.SUGGESTED }).map((e) => e.config),
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
                                      .filter(te.Vq)
                                : null,
                        );
                    },
                    [i],
                );
            return (0, nX.RT)(r, l, o, n0), { matchingQuestIds: s, query: e, setQuery: t };
        })();
    a.useLayoutEffect(() => {
        l && j === et.NC.CLAIMED && Z.A.setState({ tab: et.NC.ALL });
    }, [l, j]);
    let { onScroll: q } = (0, D.G)(),
        P = X.A.getState().getUtmCurrentContext(),
        W = nm((e) => e.registerAssetLoad),
        z = a.useRef(P);
    a.useEffect(() => {
        z.current = P;
    }),
        a.useEffect(() => {
            let { current: e } = z;
            (0, O.x)({
                name: d.ImpressionNames.QUEST_HOME,
                type: d.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: j,
                },
            });
        }, [j]);
    let { enabled: $ } = (0, V.Z)({ location: t4.rE.QUEST_HOME_DESKTOP });
    (0, M.HU)({ location: eE.intl.string(eE.t.JALI2K) });
    let en = a.useRef(null),
        { enabled: el } = ee.A8.useConfig({ location: t4.rE.QUEST_HOME_DESKTOP }),
        ea = a.useRef(null),
        ei = a.useCallback((e) => {
            ea.current?.scrollToQuest(e);
        }, []),
        eo = a.useMemo(() => ((0, Y.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: ec, isLoading: eu } = (0, et.lg)(i[0] ?? null),
        ed = a.useCallback(() => {
            (0, B.Y)({
                pageType: ep.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ep.JJy.ORBS_BALANCE_MENU,
                ctaObject: ep.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, I.Cz)({ tab: n1.G2.ORBS, analyticsLocations: [], analyticsSource: T.A.ORBS_BALANCE_MENU });
        }, []);
    a.useEffect(() => {
        (0, N.I)(ep.BVt.QUEST_HOME);
    }, []),
        a.useEffect(() => {
            H.trigger();
        }, []),
        a.useEffect(() => {
            if (x || null != g) return;
            let e = new URLSearchParams(s.search),
                l = e.get(et.L1.TAB);
            if (l === et.NC.PREVIEW_TOOL) {
                let t = e.get(et.L1.QUEST_ID);
                b.A.openNativeAppModal("quests", ep.e$_.DEEP_LINK, {
                    type: n2.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== et.NC.PREVIEW_TOOL) {
                let t = (0, Y.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(et.L1.SORT),
                    r = e.get(et.L1.FILTER),
                    a = e.get(et.L1.AD_CREATIVE_IDS);
                b.A.openNativeAppModal("quests", ep.e$_.DEEP_LINK, {
                    type: n2.XK.QUEST_HOME,
                    params: { questId: (0, Y.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: a },
                });
            }
        }, [s.search, g, n.action, s.hash, t, x]),
        a.useEffect(() => {
            t && (0, L.Dr)(E.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let em = a.useCallback(() => {
            (0, e6.navigateToQuestHome)({ fromContent: J.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                K.default.track(ep.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: es.Cy.VIEW_QUESTS,
                    click_id: (0, u.A)(),
                    is_targeted: !1,
                    ...(0, es.fF)(J.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        eh = a.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), en.current?.scrollToTop({ animate: !1 }), A(e);
            },
            [n, A],
        ),
        ex = a.useCallback(() => {
            U("");
        }, [U]),
        eg = a.useMemo(() => null != w && el, [w, el]),
        ef = a.useMemo(() => ({ onAssetLoadComplete: W }), [W]),
        ej = a.useMemo(() => ({ onScroll: q, scrollerRef: en }), [q, en]);
    return x
        ? (0, r.jsx)(nz, { adCreativeIds: i })
        : (0, r.jsx)(nh.M.Provider, {
              value: ef,
              children: (0, r.jsx)(n8.Provider, {
                  value: ej,
                  children: (0, r.jsx)("div", {
                      className: o()(n7.kL, { [n7.KY]: !t }),
                      children: l
                          ? (0, r.jsx)(n3, {
                                withFullBleedBanner: !0,
                                header: (0, r.jsx)(n4, { selectedTab: j, onSelectTab: eh, tabs: y }),
                                banner: (0, r.jsx)(F.A, {
                                    title: eE.intl.string(eE.t.z8YP2A),
                                    titleColor: "always-white",
                                    button: (0, r.jsx)(f.$, {
                                        variant: "overlay-primary",
                                        text: eE.intl.string(eE.t.GURBQl),
                                        onClick: em,
                                    }),
                                    className: n7.Gj,
                                    children: (0, r.jsx)(lt, { onLoadComplete: W }),
                                }),
                                children: (0, r.jsxs)("div", {
                                    className: n7.kj,
                                    children: [
                                        (0, r.jsx)(v.D, {
                                            variant: "heading-xl/semibold",
                                            children: eE.intl.string(eE.t.z8YP2A),
                                        }),
                                        (0, r.jsx)(C.E, {
                                            color: "text-subtle",
                                            variant: "text-md/normal",
                                            children: eE.intl.string(eE.t.HdKh65),
                                        }),
                                        (0, r.jsx)(S.Q, {
                                            text: eE.intl.string(eE.t["1CdL8d"]),
                                            onClick: em,
                                            textVariant: "text-md/normal",
                                            variant: "primary",
                                        }),
                                    ],
                                }),
                            })
                          : (0, r.jsxs)(n3, {
                                header: (0, r.jsx)(n4, {
                                    selectedTab: j,
                                    onSelectTab: eh,
                                    tabs: y,
                                    endContent: (0, r.jsxs)(_.B, {
                                        gap: 8,
                                        direction: "horizontal",
                                        align: "center",
                                        justify: "end",
                                        children: [
                                            el &&
                                                (0, r.jsx)(p.I, {
                                                    query: Q,
                                                    onChange: U,
                                                    placeholder: eE.intl.string(eE.t.y10TI2),
                                                    onClear: ex,
                                                    size: "sm",
                                                }),
                                            $ &&
                                                (0, r.jsx)(G.SS, {
                                                    analyticsPage: ep.liQ.GLOBAL_DISCOVERY_QUESTS,
                                                    cardAlignment: G.cP.END,
                                                    ctaText: eE.intl.string(eE.t["J+vlIR"]),
                                                    ctaOnClick: ed,
                                                }),
                                        ],
                                    }),
                                }),
                                banner:
                                    j === et.NC.ALL &&
                                    (0, r.jsx)(le, {
                                        onAssetLoad: W,
                                        onQuestCtaClick: ei,
                                        hasSearchResults: eg,
                                        questHomeHero: ec,
                                        isLoadingQuestHomeHero: eu,
                                    }),
                                children: [
                                    eg && null != w && (0, r.jsx)(nJ, { matchingQuestIds: w }),
                                    j === et.NC.CLAIMED
                                        ? (0, r.jsx)(sD, { onSelectTab: eh, className: eg ? n7.R : void 0 })
                                        : j === et.NC.PREVIEW_TOOL
                                          ? (0, r.jsx)(e5, { className: eg ? n7.R : void 0 })
                                          : el
                                            ? (0, r.jsx)(no, {
                                                  className: eg ? n7.R : void 0,
                                                  ref: ea,
                                                  deepLinkedQuestId: eo,
                                                  isLoadingQuestHomeHero: eu,
                                              })
                                            : (0, r.jsx)(sj, { ref: ea }),
                                ],
                            }),
                  }),
              }),
          });
};
