s.r(t), s.d(t, { default: () => s3 }), s(323874), s(14289), s(35956);
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
    f = s(509434),
    g = s(534514),
    j = s(834730),
    v = s(123292),
    p = s(944791),
    _ = s(775602),
    N = s(793574),
    C = s(139286),
    b = s(197111),
    S = s(10088),
    A = s(859040),
    O = s(726249),
    T = s(607470),
    R = s(826673),
    I = s(840251),
    L = s(688151);
let y = new I.E([], L.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var H = s(711111),
    Q = s(701508),
    M = s(979590),
    U = s(749638),
    F = s(783531),
    D = s(334465),
    w = s(318346),
    P = s(371446),
    k = s(70926),
    q = s(531685),
    B = s(174459),
    V = s(676279),
    G = s(975571),
    W = s(240248),
    z = s(507107),
    $ = s(631001),
    Y = s(87549),
    K = s(192444),
    J = s(124366),
    Z = s(590202);
s(321073);
var X = s(228366),
    ee = s(340124),
    et = s(859703);
s(667532);
var es = s(783878),
    el = s(408278),
    en = s(663417),
    er = s(922016),
    ea = s(624479),
    ei = s(289873),
    eo = s(416052),
    ec = s(417098),
    eu = s(375708);
let ed = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, n.jsx)(ec.$T, {
        color: ec.Hv.DANGER,
        children: (0, n.jsx)("div", { children: null != s ? s : eu.intl.string(eu.t.ZErSg5) }),
    });
};
var em = s(661531),
    eh = s(602853),
    ex = s(817281),
    eE = s(688810),
    ef = s(487245),
    eg = s(363195),
    ej = s(652215),
    ev = s(398876);
let ep = function () {
    let { analyticsLocations: e } = (0, eE.Ay)(),
        t = (0, d.bG)([eg.A], () => eg.A.theme),
        s = r.useRef(null);
    r.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let l = (0, eh.r)(em.A.colors.BACKGROUND_BASE_LOW, ej.NJ8.LIGHT),
        a = (0, eh.r)(em.A.colors.BACKGROUND_BASE_LOW, ej.NJ8.DARKER),
        i = (0, eh.r)(em.A.colors.BACKGROUND_BASE_LOW, ej.NJ8.MIDNIGHT),
        o = r.useMemo(
            () => [
                { theme: ej.NJ8.LIGHT, label: eu.t.K2sFfo, color: l.hex() },
                { theme: ej.NJ8.DARKER, label: eu.t.b8Cei3, color: a.hex() },
                { theme: ej.NJ8.MIDNIGHT, label: eu.t.Do4ZJx, color: i.hex() },
            ],
            [l, a, i],
        ),
        c = r.useCallback(
            (t) => {
                (0, ef.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, ex.u_)({ theme: t });
            },
            [e],
        ),
        u = r.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, n.jsx)("div", {
        className: ev.N,
        children: (0, n.jsxs)("div", {
            className: ev.t7,
            children: [
                o.map((e) =>
                    (0, n.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: ev.Du,
                            onClick: () => c(e.theme),
                            "aria-label": eu.intl.string(e.label),
                            children: [
                                (0, n.jsx)("div", {
                                    className: `${ev.WT} ${t === e.theme ? ev.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, n.jsx)("span", { className: ev.i, children: eu.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, n.jsx)(el.K, {
                    onClick: u,
                    "aria-label": eu.intl.string(eu.t.yBZMsQ),
                    icon: en.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var e_ = s(818348),
    eN = s(60857);
let eC = function (e) {
    let { questId: t, setQuestId: s, quest: l, refreshQuest: a } = e,
        [i, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        m = r.useRef(null),
        h = (0, J.pT)(),
        f = (0, d.bG)([et.A], () => (null != t ? et.A.getFetchQuestPreviewError(t) : null), [t]),
        g = (0, d.bG)([et.A], () => null != t && et.A.isFetchingQuestPreview(t), [t]),
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
                    await (0, ee.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        p = r.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, ee.UZ)(t);
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
                    await (0, ee.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        N = r.useCallback(
            (e) => {
                (0, W.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, n.jsxs)("div", {
        className: eN.Fr,
        children: [
            (0, n.jsx)("div", {
                children: (0, n.jsx)("div", {
                    className: eN.Br,
                    children: (0, n.jsxs)("div", {
                        className: eN.bo,
                        children: [
                            (0, n.jsx)(ep, {}),
                            (0, n.jsxs)("div", {
                                className: eN.b8,
                                children: [
                                    (0, n.jsx)(
                                        es.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: N,
                                            placeholder: eu.intl.string(eu.t.Zw8jxn),
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
                                        `${t}-${l?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, n.jsx)(el.K, {
                                        onClick: a,
                                        "aria-label": eu.intl.string(eu.t.wzzjk9),
                                        icon: en.f,
                                        loading: g,
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
                    className: eN.in,
                    children: (0, n.jsxs)(x.e, {
                        className: eN.xv,
                        children: [
                            (0, n.jsx)(E.$, {
                                onClick: v,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eu.intl.string(eu.t.jQEfRT),
                            }),
                            (0, n.jsx)(E.$, {
                                onClick: p,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eu.intl.string(eu.t.taqkwK),
                            }),
                            (0, n.jsx)(E.$, {
                                onClick: _,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eu.intl.string(eu.t.cKSLr4),
                            }),
                            (0, n.jsx)(er.Y, {
                                targetElementRef: m,
                                shouldShow: c,
                                onRequestClose: () => u(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, n.jsx)("div", {
                                        className: eN.PP,
                                        children: (0, n.jsx)("div", {
                                            className: eN.sH,
                                            children: (0, n.jsx)(eo.A, {
                                                value: e_.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eu.intl.string(eu.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, n.jsx)(el.K, {
                                        buttonRef: m,
                                        onClick: () => u(!c),
                                        "aria-label": eu.intl.string(eu.t.rNGQfD),
                                        icon: ea.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != f ? (0, n.jsx)(ed, { error: f }) : null,
            g ? (0, n.jsx)(ei.y, {}) : null,
        ],
    });
};
var eb = s(364522),
    eS = s(761508),
    eA = s(797788);
let eO = () => (0, n.jsx)("div", { className: eA.y });
var eT = s(834615),
    eR = s(332544);
let eI = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eR.x3,
        children: (0, n.jsxs)("div", {
            className: eR.B0,
            children: [
                (0, n.jsx)(g.D, {
                    className: eR.R_,
                    variant: "heading-md/semibold",
                    children: eu.intl.string(eu.t.L2mlUb),
                }),
                (0, n.jsx)(eT.A, { quest: t }),
            ],
        }),
    });
};
var eL = s(241124),
    ey = s(28082),
    eH = s(717695),
    eQ = s(763578),
    eM = s(111113);
let eU = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eR.x3,
        children: (0, n.jsxs)("div", {
            className: eQ.wp,
            children: [
                (0, n.jsx)(g.D, {
                    className: eQ.Oo,
                    variant: "heading-md/semibold",
                    children: eu.intl.string(eu.t.rjVPdM),
                }),
                (0, n.jsx)("div", {
                    className: eQ.RE,
                    children: (0, n.jsx)("div", {
                        className: eQ.Z,
                        children: (0, n.jsx)("div", {
                            className: eM.C3,
                            children: (0, n.jsx)(eH.A, {
                                children: (0, n.jsx)(eL.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, n.jsx)(ey.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eF = s(59350);
let eD = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eR.x3,
        children: (0, n.jsxs)("div", {
            className: eR.B0,
            children: [
                (0, n.jsx)(g.D, {
                    className: eR.R_,
                    variant: "heading-md/semibold",
                    children: eu.intl.string(eu.t.gWinpQ),
                }),
                (0, n.jsx)("div", {
                    className: eR.YT,
                    children: (0, n.jsx)(eF.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var ew = s(711038),
    eP = s(330034);
let ek = function (e) {
    let { questId: t } = e;
    return (0, n.jsx)("div", {
        className: eR.x3,
        children: (0, n.jsxs)("div", {
            className: eR.B0,
            children: [
                (0, n.jsx)(g.D, { variant: "heading-md/semibold", children: eu.intl.string(eu.t.IcljUu) }),
                (0, n.jsx)("div", {
                    className: eP.wu,
                    children: (0, n.jsx)("span", { className: eP.cy, children: eu.intl.string(eu.t.q97mEu) }),
                }),
                (0, n.jsx)("div", {
                    className: eP.oU,
                    children: (0, n.jsx)("div", {
                        className: eP.zx,
                        children: (0, n.jsx)("div", {
                            className: eP.Lj,
                            children: (0, n.jsx)("div", {
                                className: eP.n0,
                                children: (0, n.jsx)(ew.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eq = s(291922);
let eB = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eR.x3,
        children: (0, n.jsxs)("div", {
            className: eR.B0,
            children: [
                (0, n.jsx)(g.D, {
                    className: eR.R_,
                    variant: "heading-md/semibold",
                    children: eu.intl.string(eu.t["5wnpF3"]),
                }),
                (0, n.jsx)(eq.Ay, {
                    className: eR.d,
                    quest: t,
                    questContent: z.uF.QUEST_HOME_DESKTOP,
                    contentPosition: 0,
                    rowIndex: 0,
                    sourceQuestContent: z.uF.INTERNAL_PREVIEW_TOOL,
                }),
            ],
        }),
    });
};
var eV = s(939249),
    eG = s(97808),
    eW = s(778712),
    ez = s(87664),
    e$ = s(287809),
    eY = s(427262),
    eK = s(198525),
    eJ = s(66176);
let eZ = function (e) {
        let { quest: t } = e,
            [s, l] = r.useState(!1),
            a = r.useRef(null),
            o = (0, d.bG)([e$.default], () => e$.default.getCurrentUser()),
            c = eY.Ay.useName(o),
            u = (0, ez.A)(o?.id),
            m = r.useCallback(
                (e) =>
                    (0, n.jsx)(eK.A, {
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
            className: eR.x3,
            children: (0, n.jsxs)("div", {
                className: eR.B0,
                children: [
                    (0, n.jsx)(g.D, {
                        className: eJ.R_,
                        variant: "heading-md/semibold",
                        children: eu.intl.string(eu.t.jY7Zxg),
                    }),
                    (0, n.jsx)("div", { className: eJ.$Q, children: eu.intl.string(eu.t.q3hbne) }),
                    (0, n.jsx)("div", {
                        className: eJ.k0,
                        children: (0, n.jsx)(er.Y, {
                            targetElementRef: a,
                            renderPopout: m,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => l(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: er.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, n.jsx)("div", {
                                    ref: a,
                                    className: i()(eJ.Tn, { [eJ.wH]: s }),
                                    children: (0, n.jsx)(eV.D, {
                                        onClick: () => l(!s),
                                        tabIndex: 0,
                                        children: (0, n.jsxs)("div", {
                                            className: eJ.lm,
                                            children: [
                                                (0, n.jsx)(eG.eu, {
                                                    size: eW._3.SIZE_32,
                                                    src: o?.getAvatarURL(void 0, 32),
                                                    status: ej.clD.ONLINE,
                                                    "aria-label": o?.username,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: eJ.Fj,
                                                    children: [
                                                        (0, n.jsx)(j.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, n.jsx)(j.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: eu.intl.string(eu.t.b9w3bO),
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
    eX = (e) => {
        let { questId: t, selectedSections: s } = e,
            l = (0, d.bG)([et.A], () => et.A.getQuest(t));
        if (null != (0, d.bG)([et.A], () => et.A.getFetchQuestPreviewError(t)) || null == l) return null;
        let r = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                r("quest_bar") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eU, { quest: l }), (0, n.jsx)(eO, {})] }),
                r("home_card") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eB, { quest: l }), (0, n.jsx)(eO, {})] }),
                r("share_embed") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ek, { questId: l.id }), (0, n.jsx)(eO, {})] }),
                r("channel_call_header") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eD, { quest: l }), (0, n.jsx)(eO, {})] }),
                r("members_list") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eZ, { quest: l }), (0, n.jsx)(eO, {})] }),
                r("activity_panel") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eI, { quest: l }), (0, n.jsx)(eO, {})] }),
            ],
        });
    };
var e0 = s(497275);
function e1(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: l, controls: a } = e,
        i = [
            { value: "quest_bar", label: eu.intl.string(eu.t.rjVPdM) },
            { value: "share_embed", label: eu.intl.string(eu.t["D/gSWS"]) },
            { value: "home_card", label: eu.intl.string(eu.t["5wnpF3"]) },
            { value: "channel_call_header", label: eu.intl.string(eu.t.gWinpQ) },
            { value: "members_list", label: eu.intl.string(eu.t.wpYima) },
            { value: "activity_panel", label: eu.intl.string(eu.t.L2mlUb) },
        ],
        o = 0 === s.length || s.length === i.length,
        c = r.useMemo(() => (o ? "all" : 1 === s.length ? s[0] : "all"), [s, o]);
    return (0, n.jsx)(eb.Ip, {
        className: e0.kL,
        orientation: "auto",
        children: (0, n.jsxs)("div", {
            className: e0.qE,
            children: [
                (0, n.jsx)(g.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eu.intl.string(eu.t.BDUDau),
                }),
                (0, n.jsx)("div", { className: e0.pf, children: a }),
                (0, n.jsxs)(eS.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: c,
                    onItemSelect: (e) => {
                        l?.(e);
                    },
                    children: [
                        (0, n.jsx)(eS.V.Item, { id: "all", children: eu.intl.string(eu.t.Y9DnPa) }),
                        i.map((e) => (0, n.jsx)(eS.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, n.jsx)("div", { className: e0.tZ, children: (0, n.jsx)("div", { className: e0.Qs, children: t }) }),
            ],
        }),
    });
}
function e8(e) {
    return new URLSearchParams(e).get(J.L1.QUEST_ID);
}
let e3 = function (e) {
    let { questId: t } = e,
        { questId: s, setQuestId: l } = (function (e) {
            let t = (0, o.W6)(),
                [s, l] = r.useState(e),
                { search: n } = (0, o.zy)();
            return (
                r.useEffect(() => {
                    let t = e8(n);
                    null != t ? l(t) : null != e && l(e);
                }, [e, n]),
                r.useEffect(() => {
                    if (null == s || e8(n) === s) return;
                    let e = new URLSearchParams();
                    e.set(J.L1.TAB, J.NC.PREVIEW_TOOL),
                        e.set(J.L1.QUEST_ID, s),
                        t.push(`${ej.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, n]),
                { questId: s, setQuestId: l }
            );
        })(t),
        a = (0, d.bG)([et.A], () => (null != s ? et.A.getQuest(s) : void 0), [s]),
        i = (0, d.bG)([et.A], () => (null != s ? et.A.getQuestLoadedViaPreview(s) : null), [s]);
    r.useEffect(() => {
        null != s &&
            (0, ee.dQ)(s).then(() => {
                (0, ee.Gt)(s);
            });
    }, [s]),
        r.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === s && (0, ee.dQ)(s);
            };
            return (
                X.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    X.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]);
    let [c, u] = r.useState([]);
    return (0, n.jsx)(e1, {
        controls: (0, n.jsx)(eC, {
            questId: s,
            setQuestId: l,
            quest: a,
            refreshQuest: () => {
                null != s && (0, ee.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? u([]) : u([e]);
        },
        children: i?.id != null ? (0, n.jsx)(eX, { questId: i?.id, selectedSections: c }) : null,
    });
};
var e6 = s(617986),
    e7 = s(203879),
    e2 = s(403362),
    e4 = s(167417),
    e5 = s(783977),
    e9 = s(651892),
    te = s(305866),
    tt = s(915089),
    ts = s(332733);
function tl(e) {
    let { children: t, id: s } = e;
    return (0, n.jsx)(j.E, { className: ts.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let tn = function (e) {
    let { children: t, renderPopout: s } = e,
        l = (0, tt.GV)(),
        a = r.useRef(null);
    return (0, n.jsx)(er.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, n.jsx)(te.l, { className: ts.S, "aria-labelledby": l, children: s(e, l) }),
        scrollBehavior: "close",
        targetElementRef: a,
        children: (e) => t(e, a),
    });
};
var tr = s(612539);
let ta = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        l = (0, J.Nb)(),
        a = r.useCallback(
            (e) => (l) => {
                let n = e.filter((e) => l.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...n]);
            },
            [s, t],
        );
    return (0, n.jsx)(tn, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, n.jsxs)("div", {
                children: [
                    l.map((e, t) => {
                        let l = e.options.map((e) => ({ label: (0, e9.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, n.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    t > 0 && (0, n.jsx)("hr", { className: tr.B }),
                                    (0, n.jsx)(tl, { id: i, children: e.heading }),
                                    (0, n.jsx)(e4.$, {
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
                    (0, n.jsx)("hr", { className: tr.B }),
                    (0, n.jsx)("div", {
                        className: tr.W,
                        children: (0, n.jsx)(E.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: eu.intl.string(eu.t.VkKicb),
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
                text: eu.intl.formatToPlainString(eu.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: e5.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var ti = s(773812),
    to = s(715482);
let tc = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: l } = e,
        a = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, J.XD)(),
        o = r.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, n.jsx)(tn, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(tl, { id: t, children: eu.intl.string(eu.t.tZXJIS) }),
                    (0, n.jsx)(ti.z, {
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
                text: (0, e9.Js)(l),
                icon: to.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tu = s(873174),
    td = s(535185),
    tm = s(717421),
    th = s(927813),
    tx = s(710969);
function tE(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, tu.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, tu.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var tf = s(121480);
let tg = 4 * th.A.Millis.SECOND;
function tj(e) {
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
        (0, td.g)(s, i, [], { fireOnMount: !0 }),
        (0, n.jsx)("div", {
            className: tf.kL,
            ref: s,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== l && t(l),
        })
    );
}
let tv = r.forwardRef(function (e, t) {
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
        [f, v] = r.useState(0),
        [{ highlightAnimationProgress: p }, _] = (0, tm.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: tg },
        })),
        N = r.useCallback(
            (e) => {
                let t = (0, tx.vc)(e, s, l);
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
    }, [x, f, _]),
    a && 0 === s.length)
        ? (0, n.jsx)(ei.y, { className: tf.u1 })
        : 0 === s.length
          ? (0, n.jsxs)("div", {
                className: tf.y7,
                children: [
                    (0, n.jsx)(g.D, {
                        variant: "heading-xl/semibold",
                        children: eu.intl.string(u ? eu.t.PBfFnx : eu.t.NqFP6z),
                    }),
                    (0, n.jsx)(j.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? eu.intl.format(eu.t.LdYS1H, { onClick: d }) : eu.intl.string(eu.t.LhD4yH),
                    }),
                ],
            })
          : (0, n.jsx)(tj, {
                children: (e) =>
                    s.map((t, s) => {
                        let l = Math.floor(s / e),
                            r = x === t.id,
                            a = null != x && !r;
                        return (0, n.jsxs)(
                            tu.animated.div,
                            {
                                className: i()({ [tf.XB]: r }),
                                style: tE(r, a, p),
                                children: [
                                    r && (0, n.jsx)("div", { className: tf.E4 }, f),
                                    (0, n.jsx)(eq.Ay, {
                                        quest: t,
                                        questContent: z.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: s,
                                        rowIndex: l,
                                        className: tf.d,
                                        sourceQuestContent: z.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var tp = s(458518),
    t_ = s(190107),
    tN = s(65990);
let tC = [],
    tb = J.L1.SORT,
    tS = J.L1.FILTER,
    tA = r.forwardRef(function (e, t) {
        let s,
            l,
            a,
            i,
            c = r.useRef(null),
            [u, d] =
                ((s = (0, tp.o)()),
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
                    (e = u.get(tb)),
                    ((0, W.uJ)(e) ? null : (Object.values(t_.kL).find((t) => t === e) ?? null)) ?? t_.kL.SUGGESTED
                );
            }, [u]),
            h = r.useMemo(
                () =>
                    (function (e) {
                        if ((0, W.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, t_.WQ)(e))
                            .filter(e2.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(tS)) ?? tC,
                [u],
            ),
            x = r.useCallback(
                (e) => {
                    d({ [tb]: e });
                },
                [d],
            ),
            E = r.useCallback(
                (e) => {
                    d({
                        [tS]:
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
                quests: f,
                excludedQuests: j,
                isFetchingCurrentQuests: v,
                hasFetched: p,
            } = (0, J.Qh)(
                J.NC.ALL,
                r.useMemo(() => ({ sortMethod: m, filters: h }), [m, h]),
            ),
            _ = r.useCallback(() => {
                E(tC);
            }, [E]),
            N = r.useRef(null),
            C = r.useRef(null),
            b = (0, o.zy)(),
            S = (0, o.W6)();
        return (
            r.useEffect(() => {
                "" !== b.hash &&
                    null != N.current &&
                    null != C.current &&
                    (m !== N.current || h !== C.current) &&
                    S.replace({ ...b, hash: void 0 });
            }, [m, h, b, S]),
            r.useEffect(() => {
                N.current = m;
            }, [m]),
            r.useEffect(() => {
                C.current = h;
            }, [h]),
            (0, J.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: f.length }),
            r.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        _(),
                            x(t_.kL.SUGGESTED),
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
                        className: tN.Mj,
                        children: [
                            (0, n.jsx)(g.D, { variant: "heading-lg/medium", children: eu.intl.string(eu.t.giYD00) }),
                            (0, n.jsxs)("div", {
                                className: tN.Nf,
                                children: [
                                    (0, n.jsx)(tc, { onChange: x, optionClassName: tN.Uq, selectedSortMethod: m }),
                                    (0, n.jsx)(ta, { onChange: E, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(tv, {
                        ref: c,
                        quests: f,
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
var tO = s(575593),
    tT = s(440703),
    tR = s(462887),
    tI = s(187322),
    tL = s(765671),
    ty = s(736653),
    tH = s(162232),
    tQ = s(859387),
    tM = s(734736),
    tU = s(303136),
    tF = s(265234),
    tD = s(181713);
let tw = (e) => {
    let { className: t, isAnimated: s = !1, questName: l } = e,
        r = s ? tD.A : tD.A + "?format=webp";
    return (0, n.jsx)("div", {
        className: i()(tF.k, t),
        children: s
            ? (0, n.jsx)(tU.A, {
                  preload: "auto",
                  className: tF.L,
                  children: (0, n.jsx)("source", { src: r, type: "video/webm" }),
              })
            : (0, n.jsx)("img", { className: tF.L, src: r, alt: l }),
    });
};
var tP = s(57718),
    tk = s(659249);
let tq = (0, r.memo)(function (e) {
    let { quest: t } = e,
        [s, l] = (0, r.useState)(!1),
        [a, o] = (0, r.useState)(24),
        [c, u] = (0, r.useState)(!1),
        m = (0, r.useRef)(null),
        h = (0, r.useRef)(null),
        x = (0, r.useRef)(null),
        E = (0, d.bG)([e$.default], () => e$.default.getCurrentUser()),
        { ref: f, height: v = 0 } = (0, tL.Ay)(),
        p = (0, ty.Ay)(),
        _ = (0, J.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        N = t.userStatus?.claimedTier ?? 0,
        C = t.config.rewards[N],
        b = C?.type === tT.l.FRACTIONAL_PREMIUM,
        S = C?.type === tT.l.COLLECTIBLE,
        A = C?.type === tT.l.VIRTUAL_CURRENCY,
        O = C?.collectibleProduct?.items?.[0],
        R = O?.type === tO.R.AVATAR_DECORATION ? O : null,
        I = r.useMemo(
            () =>
                null == C
                    ? null
                    : !0 === A && t.userStatus?.orbQuantityClaimed != null
                      ? eu.intl.format(eu.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : C.name,
            [C, A, t],
        );
    (0, tL.i4)(m, (e) => {
        let { height: t } = e;
        if (!S || null == t || null == h.current || null == m.current || null == x.current) return;
        let s = m.current.getBoundingClientRect(),
            l = h.current.getBoundingClientRect(),
            n = x.current.getBoundingClientRect();
        o((l.top - s.top - n.height) / 2);
    });
    let L = (0, tR.M)(p),
        y = r.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        H = r.useMemo(() => (0, tQ.tW)(t, tQ.fY.REWARD), [t]),
        Q = s ? v + 8 : 0,
        { content_position: M, row_index: U, ...F } = (0, Z.fF)(z.uF.TROPHY_CASE_CARD),
        D = () => {
            l(!0), B.default.track(ej.HAw.QUEST_HOVER, { quest_id: t.id, ...F });
        },
        w = () => {
            l(!1);
        },
        P = (e) => {
            u(!0), B.default.track(ej.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == C || c
        ? null
        : (0, n.jsx)(tI.vN, {
              children: (0, n.jsxs)("div", {
                  ref: m,
                  tabIndex: 0,
                  onFocus: D,
                  onBlur: w,
                  onMouseEnter: D,
                  onMouseLeave: w,
                  className: i()(tk.kL, { [tk.yo]: s }),
                  children: [
                      null != E &&
                          S &&
                          null != R &&
                          (0, n.jsx)("div", {
                              ref: x,
                              className: tk.FX,
                              style: { top: a },
                              children: (0, n.jsx)(tH.A, {
                                  avatarDecorationOverride: R,
                                  user: E,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      b
                          ? (0, n.jsx)(tM.A, { className: tk.Sl })
                          : A
                            ? (0, n.jsx)(tw, {
                                  className: tk.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : H.isAnimated
                              ? (0, n.jsx)(T.A, {
                                    className: tk.JU,
                                    autoPlay: !1,
                                    children: (0, n.jsx)("source", {
                                        src: H.url,
                                        type: H.mimetype ?? void 0,
                                        onError: () => P(H.url),
                                    }),
                                })
                              : (0, n.jsx)("img", {
                                    className: tk.Sl,
                                    src: H.url,
                                    alt: t.config.messages.questName,
                                    onError: () => P(H.url),
                                }),
                      (0, n.jsx)("div", { className: i()(tk.Lw, { [tk.en]: L, [tk.So]: !L }) }),
                      (0, n.jsx)("div", {
                          ref: h,
                          className: tk.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, n.jsx)(tP.Ay, {
                              logotypeClassName: i()(tk.wm, { [tk.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          ref: f,
                          className: tk.zH,
                          children: [
                              (0, n.jsx)(g.D, {
                                  className: tk.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eu.intl.format(eu.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, n.jsx)(j.E, {
                                  variant: "text-sm/medium",
                                  color: L ? "text-muted" : "always-white",
                                  style: { opacity: L ? 1 : 0.75 },
                                  children: eu.intl.format(eu.t["kXVcV+"], { reward: I, claimedDate: _ }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var tB = s(396478);
function tV(e) {
    let { onClick: t } = e,
        l = (0, ty.Ay)();
    return (0, n.jsxs)(tB.pp, {
        theme: l,
        children: [
            (0, n.jsx)(tB.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, n.jsx)(tB.SG, { note: eu.intl.format(eu.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var tG = s(975424);
function tW(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: s, isFetchingClaimedQuests: l } = (0, J.Iq)();
    return l && 0 === s.length
        ? (0, n.jsx)(ei.y, { className: tG.u })
        : 0 === s.length
          ? (0, n.jsx)(tV, { onClick: () => t(J.NC.ALL) })
          : (0, n.jsx)("div", {
                className: tG.U,
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, n.jsx)(tq, { quest: e }, e.id)),
            });
}
let tz = r.createContext({ targetQuestId: null, highlightCount: null, highlightAnimationProgress: null });
var t$ = s(548411),
    tY = s(554830),
    tK = s(689175),
    tJ = s(522403);
let tZ = "data-scroll-target",
    tX = `[${tZ}]`;
function t0(e) {
    let {
            children: t,
            className: s,
            scrollIncrement: l,
            itemSelector: a = tX,
            maskWidth: o = 48,
            overflowAmount: c = 0,
        } = e,
        u = r.useRef(null),
        m = r.useRef(null),
        [h, x] = r.useState(!1),
        [E, f] = r.useState(!1),
        g = (0, d.bG)([_.A], () => _.A.useReducedMotion) ? "auto" : "smooth",
        j = r.useCallback(() => {
            let e = u.current?.getScrollerNode();
            null != e && (x(e.scrollLeft > 0), f(e.scrollLeft + e.clientWidth < e.scrollWidth - 1));
        }, []),
        v = r.useCallback(() => {
            j();
        }, [j]),
        p = r.useCallback(() => {
            let e = u.current?.getScrollerNode();
            if (null == e) return;
            let t = e.scrollLeft - l,
                s = t < l ? 0 : t;
            e.scrollTo({ left: s, behavior: g });
        }, [l, g]),
        N = r.useCallback(() => {
            let e = u.current?.getScrollerNode();
            if (null == e) return;
            let t = e.scrollWidth - e.clientWidth,
                s = e.scrollLeft + l,
                n = s > t - l ? t : s;
            e.scrollTo({ left: n, behavior: g });
        }, [l, g]),
        C = r.useCallback(
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
                    ? t.scrollTo({ left: l, behavior: g })
                    : n > i && t.scrollTo({ left: n - t.clientWidth, behavior: g });
            },
            [a, o, g],
        );
    (0, td.g)(m, j, [], { fireOnMount: !0 });
    let b = c > 0;
    return (0, n.jsxs)("div", {
        className: i()(s, tJ.m7),
        ref: m,
        style: { "--custom-scroller-mask-width": `${o}px`, "--custom-scroller-overflow-amount": `${c}px` },
        children: [
            (0, n.jsx)(eV.D, {
                "aria-label": eu.intl.string(eu.t.vgfxaA),
                className: i()(tJ.k9, tJ.RW, { [tJ.Q2]: h }),
                onClick: p,
                tabIndex: h ? 0 : -1,
                "aria-hidden": !h,
                children: (0, n.jsx)(t$.Z, { color: em.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, n.jsx)(eV.D, {
                "aria-label": eu.intl.string(eu.t.XiOHRX),
                className: i()(tJ.k9, tJ.K3, { [tJ.Q2]: E }),
                onClick: N,
                tabIndex: E ? 0 : -1,
                "aria-hidden": !E,
                children: (0, n.jsx)(tY.K, { color: em.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, n.jsx)("div", {
                className: i()(tJ.$u, { [tJ.sF]: h, [tJ.RC]: E, [tJ.Ni]: b && !h, [tJ.GA]: b && !E }),
                children: (0, n.jsx)(tK.zC, {
                    ref: u,
                    className: b ? tJ.x2 : void 0,
                    orientation: "horizontal",
                    onScroll: v,
                    onFocusCapture: C,
                    children: t,
                }),
            }),
        ],
    });
}
var t1 =
    (((l = {}).FEATURED = "featured"),
    (l.IN_PROGRESS = "in-progress"),
    (l.ENDING_SOON = "ending-soon"),
    (l.ORB = "orb"),
    (l.DISCOVERED = "discovered"),
    l);
let t8 = [
    { type: "featured-quests", identifier: "featured", title: eu.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "in-progress", title: eu.t.CHJy6z },
    { type: "quests", identifier: "ending-soon", title: eu.t.PRg3qh },
    { type: "quests", identifier: "orb", title: eu.t["0Uc94A"] },
    { type: "quests", identifier: "discovered", title: eu.t["u9Ug++"] },
];
var t3 = s(548636);
function t6(e) {
    let { questIds: t, rowIndex: s, sectionIdentifier: l } = e,
        { targetQuestId: a, highlightCount: i, highlightAnimationProgress: o } = r.useContext(tz),
        c = null != a;
    return (0, n.jsx)(t0, {
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
                        tu.animated.div,
                        {
                            [tZ]: "",
                            className: r ? t3.XB : void 0,
                            style: tE(r, u, o),
                            children: [
                                r && (0, n.jsx)("div", { className: t3.E4 }, i),
                                (0, n.jsx)(eq.Ay, {
                                    questId: e,
                                    isInFeaturedSection: l === t1.FEATURED,
                                    questContent: z.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: t,
                                    rowIndex: s,
                                    className: t3.d,
                                    sourceQuestContent: z.uF.QUEST_HOME_DESKTOP,
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
var t7 = s(801365),
    t2 = s(814793);
let t4 = 2 * th.A.Millis.DAY,
    t5 = new Map(t8.map((e) => [e.identifier, e]));
var t9 = s(32304);
let se = 4 * th.A.Millis.SECOND,
    st = r.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s } = e,
            { sections: l } = ((e) => {
                let { sharedQuestId: t } = e,
                    {
                        quests: s,
                        isFetchingCurrentQuests: l,
                        hasFetched: n,
                    } = (0, J.Qh)(J.NC.ALL, { sortMethod: t_.kL.SUGGESTED, filters: [] }),
                    a = (0, d.bG)([et.A], () => et.A.getQuestHomeHero()),
                    i = (0, d.bG)([et.A], () => et.A.isFetchingQuestHomeHero()),
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
                                          o = t8.map((e) => {
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
                                              return (0, tx.Ic)(l)
                                                  ? null
                                                  : r === l.id
                                                    ? t1.DISCOVERED
                                                    : l.userStatus?.enrolledAt != null &&
                                                        l.userStatus?.claimedAt == null
                                                      ? t1.IN_PROGRESS
                                                      : null != n && (0, t2.I0)(n, l.id)
                                                        ? t1.FEATURED
                                                        : new Date(l.config.expiresAt).valueOf() <= Date.now() + t4
                                                          ? t1.ENDING_SOON
                                                          : ((t = t1.FEATURED),
                                                              null == (s = t5.get(t)?.maxItems) || (a.get(t) ?? 0) < s)
                                                            ? t1.FEATURED
                                                            : (0, t7.ks)(l.config)
                                                              ? t1.ORB
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
            [a, i] = r.useState(null),
            [o, c] = r.useState(0),
            u = r.useRef(null),
            [{ highlightAnimationProgress: m }, h] = (0, tm.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: se },
            })),
            x = r.useCallback(
                (e) => {
                    if (null == e) return !1;
                    let t = document.getElementById((0, eq.sT)(e));
                    return (
                        null != t &&
                        (i(e),
                        c((e) => e + 1),
                        t.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        h({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || i(null);
                            },
                        }),
                        !0)
                    );
                },
                [i, c, h],
            );
        r.useImperativeHandle(t, () => ({ scrollToQuest: x }), [x]),
            r.useLayoutEffect(() => {
                if (null == s) {
                    u.current = null;
                    return;
                }
                u.current !== s && x(s) && (u.current = s);
            }, [s, x, l]);
        let E = r.useMemo(() => ({ targetQuestId: a, highlightCount: o, highlightAnimationProgress: m }), [a, o, m]);
        return (0, n.jsx)(tz.Provider, {
            value: E,
            children: (0, n.jsx)("div", {
                className: t9.k,
                children: l.map((e, t) => {
                    let { identifier: s, questIds: l, title: r } = e;
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: t9.p,
                            children: [
                                (0, n.jsx)(g.D, { variant: "heading-lg/medium", children: eu.intl.string(r) }),
                                (0, n.jsx)(t6, { questIds: l, rowIndex: t, sectionIdentifier: s }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        });
    });
var ss = s(353640),
    sl = s(121894),
    sn = s(851936);
let sr = (0, ss.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, sn.L)({ location: t_.rE.QUEST_HOME_DESKTOP });
        if (s.info === e_.tE || t().elapsed >= 6e4) return;
        let l = performance.now() - t().startTime;
        l > 6e4 && (l = 6e4);
        let n = { elapsed: l };
        l - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${l}ms`), (n.lastOutputLogTime = l)),
            null == t().logger && (n.logger = s),
            (0, sl.r)(() => e(n));
    },
}));
var sa = s(516226),
    si = s(323889),
    so = s(331322),
    sc = s(561844),
    su = s(901406),
    sd = s(415441),
    sm = s(73473),
    sh = s(139384),
    sx = s(43990),
    sE = s(770178),
    sf = s(14233);
function sg(e, t) {
    let { row_index: s, ...l } = (0, Z.fF)(z.uF.QUEST_HOME_HERO);
    (0, sc.Qg)({
        adContentId: e,
        adCreativeType: si.p.QUEST_HOME_HERO,
        event: t,
        properties: l,
        sourceQuestContent: z.uF.QUEST_HOME_HERO,
    });
}
let sj = r.forwardRef(function (e, t) {
    let { adContentId: s, topContent: l, title: a, subtitle: o, buttons: c, background: u, className: d } = e,
        [m, h] = r.useState("display-lg"),
        x = r.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        E = (0, sE.w)(x, [], { fireOnMount: !0 }),
        f = r.useCallback(() => sg(s, ej.HAw.QUEST_HOVER), [s]),
        v = r.useCallback(() => sg(s, ej.HAw.QUEST_HOVER_OFF), [s]);
    return (0, n.jsx)(sx.N, {
        theme: ej.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, n.jsx)("div", {
                className: i()(sf.iE, e, d),
                onMouseEnter: f,
                onMouseLeave: v,
                ref: (e) => {
                    (E.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, n.jsxs)("div", {
                    className: sf.FG,
                    children: [
                        (0, n.jsxs)(so.B, {
                            className: sf.Qs,
                            direction: "vertical",
                            justify: null != l ? "space-between" : "end",
                            children: [
                                l,
                                (0, n.jsxs)(so.B, {
                                    className: sf.yp,
                                    gap: 16,
                                    children: [
                                        (0, n.jsxs)(so.B, {
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(g.D, {
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
var sv = s(194526),
    sp = s(731355),
    s_ = s(621466),
    sN = s(508770),
    sC = s(406810),
    sb = s(628284),
    sS = s(65154),
    sA = s(687966),
    sO = s(496431),
    sT = s(975807),
    sR = s(58703),
    sI = s(18437),
    sL = s(453384),
    sy = s(646764),
    sH = s(398025),
    sQ = s(691464);
function sM(e) {
    let [t, s] = r.useState(!1),
        l = r.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        n = r.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: l, onMouseLeave: n, onFocus: l, onBlur: n } };
}
function sU(e) {
    let { hero: t, contentPosition: s } = e,
        l = r.useRef(null),
        { isHovering: a, hoverProps: o } = sM(
            r.useCallback(
                (e) => {
                    (0, sc.Qg)({
                        adContentId: t.id,
                        adCreativeType: si.p.QUEST_HOME_HERO,
                        event: e ? ej.HAw.QUEST_HOVER : ej.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: z.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, Z.jO)(z.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: z.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    r.useEffect(() => {
        let e = l.current;
        (0, s_.vq)(e, HTMLVideoElement) && (a ? ((e.currentTime = 0), e.play().catch(e_.tE)) : e.pause());
    }, [a]);
    let { hoverSpring: c } = (0, tm.z)({ hoverSpring: +!!a, config: tu.config.gentle });
    return (0, n.jsxs)("div", {
        className: i()(sQ.FW, sQ.Bm),
        ...o,
        children: [
            (0, n.jsx)("div", {
                className: sQ.Ve,
                children: (0, n.jsx)(sd.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: i()(sQ.pv, sQ.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: i()(sQ.pv, sQ.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, n.jsx)(tu.animated.div, {
                className: sQ.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, sT.A)(t.cta.url),
                            (0, sc.vK)({
                                adContentId: t.id,
                                adCreativeType: si.p.QUEST_HOME_HERO,
                                questContent: z.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: Z.Cy.OPEN_GAME_LINK,
                                questContentPosition: s,
                                sourceQuestContent: z.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function sF(e) {
    let { quest: t, onQuestCtaClick: s, contentPosition: l } = e,
        a = (0, ty.Ay)(),
        o = r.useMemo(() => (0, tQ.tW)(t, tQ.fY.LOGO_TYPE, (0, tR.M)(a) ? ej.NJ8.DARK : ej.NJ8.LIGHT).url, [t, a]),
        c = r.useMemo(() => new Date(t.config.expiresAt), [t.config.expiresAt]),
        { days: u, hours: d, minutes: m, seconds: h } = (0, sO.A)(c, th.A.Millis.MINUTE),
        x = r.useMemo(
            () =>
                (0, sR.uN)(
                    { days: u, hours: d, minutes: m, seconds: h },
                    { days: eu.t["Ux/De1"], hours: eu.t.Lzd5Ie, minutes: eu.t.odmpbP },
                ),
            [u, d, m, h],
        ),
        f = r.useMemo(() => (0, t7.mq)(t.config), [t.config]),
        g = r.useMemo(
            () =>
                (function (e) {
                    switch ((0, e9.xv)(e).type) {
                        case tT.l.IN_GAME:
                            return eu.intl.string(eu.t["O/J2kr"]);
                        case tT.l.COLLECTIBLE:
                            return eu.intl.string(eu.t.Jg17Ut);
                        case tT.l.VIRTUAL_CURRENCY:
                            return eu.intl.string(eu.t.ElYQFS);
                        default:
                            return (0, t7.mq)(e);
                    }
                })(t.config),
            [t.config],
        ),
        { completedRatio: v, completedRatioDisplay: p } = (0, J.O9)(t),
        _ = r.useMemo(() => (0, t7._Z)(t.config), [t.config]),
        N = (0, sI.Ut)(),
        C = (0, sI.u0)(),
        { isHovering: b, hoverProps: S } = sM(
            r.useCallback(
                (e) => {
                    C({
                        questId: t.id,
                        event: e ? ej.HAw.QUEST_HOVER : ej.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: z.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, Z.jO)(z.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: z.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [C, t.id, l],
            ),
        ),
        { hoverSpring: A } = (0, tm.z)({ hoverSpring: +!!b, config: tu.config.gentle });
    return (0, n.jsxs)("div", {
        className: i()(sQ.FW, sQ.$R),
        ...S,
        children: [
            (0, n.jsxs)(so.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, n.jsx)(sN.E, { type: { text: g }, variant: "expressive" }),
                    (0, n.jsx)(tu.animated.div, {
                        style: { opacity: (0, sH.a)(A.to([0, 1], [1, 0])) },
                        children: (0, n.jsx)(sN.E, { type: { text: x }, icon: sC.O }),
                    }),
                ],
            }),
            (0, n.jsx)(tu.animated.div, {
                className: sQ.Tr,
                style: { transform: A.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, n.jsx)(sL.A, {
                    percentComplete: v,
                    overlayText: b && null != _ ? `${_}` : void 0,
                    size: 100,
                    children: (0, n.jsx)(sy.A, {
                        quest: t,
                        questContent: z.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: z.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: b,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, n.jsx)(tu.animated.div, {
                className: sQ.tw,
                style: {
                    opacity: (0, sH.a)(A.to([0, 1], [1, 0])),
                    transform: A.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, n.jsxs)(so.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)("div", {
                            className: sQ.aP,
                            children: (0, n.jsx)("img", { src: o, alt: t.config.messages.gameTitle, className: sQ.rC }),
                        }),
                        (0, n.jsxs)(so.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(j.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    className: sQ.Ht,
                                    children: f,
                                }),
                                (0, n.jsxs)(so.B, {
                                    align: "start",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, n.jsxs)(so.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, n.jsx)(sb.y, { size: "xs", color: em.A.colors.ICON_MUTED.css }),
                                                (0, n.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.config.messages.gamePublisher,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)(so.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, t2.pv)(t.config) === sp.Z.VIDEO
                                                    ? (0, n.jsx)(sS.S, {
                                                          size: "xs",
                                                          color: em.A.colors.ICON_MUTED.css,
                                                      })
                                                    : (0, n.jsx)(sA._, {
                                                          size: "xs",
                                                          color: em.A.colors.ICON_MUTED.css,
                                                      }),
                                                (0, n.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: p,
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
            (0, n.jsx)(tu.animated.div, {
                className: sQ.um,
                style: { transform: A.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: () => {
                        s(t.id),
                            N({
                                questId: t.id,
                                questContent: z.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: Z.Cy.VIEW_QUESTS,
                                questContentPosition: l,
                                sourceQuestContent: z.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: eu.intl.string(eu.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var sD = s(648731);
function sw(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: l } = e;
    return (0, n.jsx)(t0, {
        className: sD.v,
        scrollIncrement: 320,
        children: (0, n.jsxs)(so.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, n.jsx)(sm.R, {
                    adContentId: t.id,
                    adCreativeType: si.p.QUEST_HOME_HERO,
                    questContent: z.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: z.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, n.jsx)(sU, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, t) =>
                    (0, n.jsx)(
                        sm.R,
                        {
                            questOrQuests: e,
                            questContent: z.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: t + 1,
                            sourceQuestContent: z.uF.QUEST_HOME_HERO_SHELF,
                            children: (s) =>
                                (0, n.jsx)("div", {
                                    ref: (e) => {
                                        s.current = e;
                                    },
                                    children: (0, n.jsx)(sF, { quest: e, onQuestCtaClick: l, contentPosition: t + 1 }),
                                }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
}
var sP = s(95115);
function sk() {
    return (0, n.jsx)("div", { className: sP.Np });
}
function sq(e) {
    let { heroImage: t, heroVideo: s } = e,
        l = r.useRef(null);
    (0, sh.A)(l, t_.rE.QUEST_HOME_DESKTOP);
    let a = r.useMemo(() => (null != s ? (0, tQ.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, n.jsxs)("div", {
              className: sP.Tv,
              children: [
                  (0, n.jsx)(sk, {}),
                  (0, n.jsx)("div", {
                      className: sP.LO,
                      children: (0, n.jsx)("img", { className: sP.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: i()(sP.LO, sP.jx, sP.hw),
                      children: (0, n.jsx)("img", { className: sP.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: i()(sP.LO, sP.jx, sP.Co),
                      children: (0, n.jsx)("img", { className: sP.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: sP.Tv,
              children: [
                  (0, n.jsx)(sk, {}),
                  (0, n.jsx)("div", {
                      className: sP.LO,
                      children: (0, n.jsx)(sd.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: l,
                          imageAsset: {
                              alt: "",
                              className: sP.LY,
                              asset: { url: a, mimetype: (0, tQ.vm)(a), isAnimated: !1 },
                              assetId: a,
                          },
                          videoAsset: {
                              alt: "",
                              className: sP.LY,
                              asset: { url: s, mimetype: (0, tQ.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function sB(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        l = (0, d.bG)([et.A], () => et.A.quests),
        { shelfQuests: a, isShelfEnabled: i } = (0, J.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, sv.I)();
    r.useEffect(() => {
        o();
    }, [o]);
    let c = r.useMemo(() => t.questIds?.find((e) => l.has(e)), [l, t.questIds]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(sm.R, {
                adContentId: t.id,
                adCreativeType: si.p.QUEST_HOME_HERO,
                questContent: z.uF.QUEST_HOME_HERO,
                sourceQuestContent: z.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, n.jsx)(sj, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, n.jsxs)(so.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, n.jsx)("img", { src: t.sponsorImage, alt: "", className: sP.wm }),
                                (0, n.jsx)(j.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: sP.yu,
                                    children: eu.intl.string(eu.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, n.jsxs)(x.e, {
                            children: [
                                (0, n.jsx)(E.$, {
                                    onClick: () => {
                                        (0, su._Q)(
                                            { adContentId: t.id, adCreativeType: si.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: z.uF.QUEST_HOME_HERO,
                                                ctaContent: Z.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: z.uF.QUEST_HOME_HERO,
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
                                                (0, sc.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: si.p.QUEST_HOME_HERO,
                                                    questContent: z.uF.QUEST_HOME_HERO,
                                                    questContentCTA: Z.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: z.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: eu.intl.string(eu.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, n.jsx)(sq, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, n.jsx)(sw, { hero: t, shelfQuests: a, onQuestCtaClick: s }),
        ],
    });
}
function sV() {
    return (0, n.jsx)("div", { className: i()(sf.iE, sf.FG, sf.B3), children: (0, n.jsx)(ei.y, {}) });
}
var sG = s(321503),
    sW = s(758836),
    sz = s(613057),
    s$ = s(935824);
let sY = r.createContext({});
function sK(e) {
    let { banner: t, children: s, header: l, withFullBleedBanner: a = !1 } = e,
        { onScroll: i, scrollerRef: o } = r.useContext(sY);
    return (0, n.jsxs)(sG.X.Provider, {
        value: o,
        children: [
            l,
            (0, n.jsxs)(F.A, {
                onScroll: i,
                ref: o,
                children: [
                    a && t,
                    (0, n.jsxs)(M.A, { className: s$.Jo, innerClassName: s$.FG, children: [!a && t, s] }),
                ],
            }),
        ],
    });
}
function sJ(e) {
    let { selectedTab: t, onSelectTab: s, tabs: l, endContent: r } = e;
    return (0, n.jsx)(U.S, { selectedTabId: t, handleTransition: s, tabs: l, endContent: r, icon: h.r });
}
function sZ(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: l } = (0, P.Z)({ location: t_.rE.QUEST_HOME_DESKTOP }),
        a = (0, d.bG)([_.A], () => _.A.useReducedMotion),
        i = (0, d.bG)([q.A], () => q.A.isFocused()),
        { ref: o, inViewport: c } = (0, e7.p)(),
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
        let e = (0, V.TM)();
        return (0, n.jsx)(T.A, {
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
function sX(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, P.Z)({ location: t_.rE.QUEST_HOME_DESKTOP });
    return (0, n.jsxs)("div", {
        className: i()(s$.Tv, { [s$.lJ]: s }),
        children: [
            (0, n.jsx)(sk, {}),
            (0, n.jsx)("div", { className: i()(s$.nz, { [s$.ZZ]: s }) }),
            (0, n.jsx)(sZ, { onLoadComplete: t, className: i()(s$.Fe, { [s$.H4]: s, [s$.Q8]: !s }) }),
        ],
    });
}
function s0(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, P.Z)({ location: t_.rE.QUEST_HOME_DESKTOP }),
        l = r.useCallback(() => {
            s ? window.open(ej.X7G.PAID_TERMS_ORBS) : window.open(G.A.getArticleURL(ej.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, n.jsx)(sj, {
        adContentId: s ? t_.yr : t_.uz,
        title: s ? eu.intl.format(eu.t.BCBIlp, {}) : eu.intl.format(eu.t.lmMBfy, {}),
        subtitle: s ? eu.intl.format(eu.t.U9FY0J, {}) : eu.intl.string(eu.t.oWCrBq),
        buttons: s
            ? (0, n.jsxs)(x.e, {
                  children: [
                      (0, n.jsx)(E.$, {
                          variant: "overlay-primary",
                          text: eu.intl.string(eu.t["1Wm127"]),
                          onClick: () =>
                              (0, A.Cz)({
                                  tab: sW.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: N.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, n.jsx)(E.$, {
                          variant: "overlay-secondary",
                          text: eu.intl.string(eu.t["7kTAgJ"]),
                          onClick: l,
                      }),
                  ],
              })
            : (0, n.jsx)(E.$, {
                  variant: "overlay-primary",
                  text: eu.intl.string(eu.t.hvVgAZ),
                  onClick: l,
                  icon: f.I,
                  iconPosition: "end",
              }),
        background: (0, n.jsx)(sX, { onAssetLoad: t }),
    });
}
function s1(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, previewAdCreativeId: l } = e,
        { questHomeHero: r, isLoading: a } = (0, J.lg)(l);
    return (0, n.jsx)("div", {
        className: s$.iS,
        children: a
            ? (0, n.jsx)(sV, {})
            : null != r
              ? (0, n.jsx)(sB, { hero: r, onQuestCtaClick: s })
              : (0, n.jsx)(s0, { onAssetLoad: t }),
    });
}
function s8(e) {
    let { onLoadComplete: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: i()(s$.BW, s$.rZ),
                alt: "",
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: i()(s$.BW, s$.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: i()(s$.BW, s$.rZ),
                alt: "",
            }),
        ],
    });
}
let s3 = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, o.zy)(),
        l = (0, o.W6)(),
        a = r.useMemo(() => (0, D.B)(s.pathname, ej.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        h = r.useMemo(() => new URLSearchParams(s.search).get("ad_creative_ids"), [s.search]),
        x = (0, d.bG)([S.A], () => S.A.getState("quests")),
        {
            selectedTab: f,
            onSelectTab: _,
            tabs: T,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = $.A.useField("tab"),
                l = (0, o.zy)(),
                n = (0, J.p5)();
            r.useEffect(() => {
                $.A.getState().initializeFromUrl(l.search, n);
            }, [l.search, n]);
            let a = r.useCallback((e) => {
                $.A.getState().setTab(e);
            }, []);
            return {
                tabs: r.useMemo(
                    () =>
                        [
                            { id: J.NC.ALL, label: eu.intl.string(eu.t["0SzXmi"]) },
                            t ? { id: J.NC.CLAIMED, label: eu.intl.string(eu.t.zyNYNB) } : null,
                            t && n ? { id: J.NC.PREVIEW_TOOL, label: eu.intl.string(eu.t.BDUDau) } : null,
                        ].filter(e2.Vq),
                    [t, n],
                ),
                selectedTab: s,
                onSelectTab: a,
            };
        })({ withClaimedQuestsTab: !a });
    r.useLayoutEffect(() => {
        a && f === J.NC.CLAIMED && $.A.setState({ tab: J.NC.ALL });
    }, [a, f]);
    let { onScroll: I } = (0, H.G)(),
        L = Y.A.getState().getUtmCurrentContext(),
        M = sr((e) => e.registerAssetLoad),
        U = r.useRef(L);
    r.useEffect(() => {
        U.current = L;
    }),
        r.useEffect(() => {
            let { current: e } = U;
            (0, C.x)({
                name: u.ImpressionNames.QUEST_HOME,
                type: u.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: f,
                },
            });
        }, [f]);
    let { enabled: F } = (0, P.Z)({ location: t_.rE.QUEST_HOME_DESKTOP });
    (0, O.HU)({ location: eu.intl.string(eu.t.JALI2K) });
    let q = r.useRef(null),
        { enabled: V } = K.A8.useConfig({ location: t_.rE.QUEST_HOME_DESKTOP }),
        G = r.useRef(null),
        X = r.useCallback((e) => {
            G.current?.scrollToQuest(e);
        }, []),
        ee = r.useMemo(() => ((0, W.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        et = r.useCallback(() => {
            (0, w.Y)({
                pageType: ej.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ej.JJy.ORBS_BALANCE_MENU,
                ctaObject: ej.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, A.Cz)({ tab: sW.G2.ORBS, analyticsLocations: [], analyticsSource: N.A.ORBS_BALANCE_MENU });
        }, []);
    r.useEffect(() => {
        (0, p.I)(ej.BVt.QUEST_HOME);
    }, []),
        r.useEffect(() => {
            y.trigger();
        }, []),
        r.useEffect(() => {
            if (null != x) return;
            let e = new URLSearchParams(s.search),
                n = e.get(J.L1.TAB);
            if (n === J.NC.PREVIEW_TOOL) {
                let t = e.get(J.L1.QUEST_ID);
                b.A.openNativeAppModal("quests", ej.e$_.DEEP_LINK, {
                    type: sz.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: n },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === l.action && r?.type === "navigate" && t && n !== J.NC.PREVIEW_TOOL) {
                let t = (0, W.uJ)(s.hash) ? null : s.hash.substring(1),
                    l = e.get(J.L1.SORT),
                    r = e.get(J.L1.FILTER);
                b.A.openNativeAppModal("quests", ej.e$_.DEEP_LINK, {
                    type: sz.XK.QUEST_HOME,
                    params: { questId: (0, W.uJ)(t) ? void 0 : t, sort: l, filter: r, tab: n },
                });
            }
        }, [s.search, x, l.action, s.hash, t]),
        r.useEffect(() => {
            t && (0, R.Dr)(m.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let es = r.useCallback(() => {
            (0, e6.navigateToQuestHome)({ fromContent: z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                B.default.track(ej.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: Z.Cy.VIEW_QUESTS,
                    click_id: (0, c.A)(),
                    is_targeted: !1,
                    ...(0, Z.fF)(z.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        el = r.useCallback(
            (e) => {
                l.replace({ ...l.location, hash: void 0 }), q.current?.scrollToTop({ animate: !1 }), _(e);
            },
            [l, _],
        );
    return (0, n.jsx)(sa.M.Provider, {
        value: { onAssetLoadComplete: M },
        children: (0, n.jsx)(sY.Provider, {
            value: r.useMemo(() => ({ onScroll: I, scrollerRef: q }), [I, q]),
            children: (0, n.jsx)("div", {
                className: i()(s$.kL, { [s$.KY]: !t }),
                children: a
                    ? (0, n.jsx)(sK, {
                          withFullBleedBanner: !0,
                          header: (0, n.jsx)(sJ, { selectedTab: f, onSelectTab: el, tabs: T }),
                          banner: (0, n.jsx)(Q.A, {
                              title: eu.intl.string(eu.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, n.jsx)(E.$, {
                                  variant: "overlay-primary",
                                  text: eu.intl.string(eu.t.GURBQl),
                                  onClick: es,
                              }),
                              className: s$.Gj,
                              children: (0, n.jsx)(s8, { onLoadComplete: M }),
                          }),
                          children: (0, n.jsxs)("div", {
                              className: s$.kj,
                              children: [
                                  (0, n.jsx)(g.D, {
                                      variant: "heading-xl/semibold",
                                      children: eu.intl.string(eu.t.z8YP2A),
                                  }),
                                  (0, n.jsx)(j.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: eu.intl.string(eu.t.HdKh65),
                                  }),
                                  (0, n.jsx)(v.Q, {
                                      text: eu.intl.string(eu.t["1CdL8d"]),
                                      onClick: es,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, n.jsx)(sK, {
                          header: (0, n.jsx)(sJ, {
                              selectedTab: f,
                              onSelectTab: el,
                              tabs: T,
                              endContent:
                                  F &&
                                  (0, n.jsx)(k.SS, {
                                      analyticsPage: ej.liQ.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: k.cP.END,
                                      ctaText: eu.intl.string(eu.t["J+vlIR"]),
                                      ctaOnClick: et,
                                  }),
                          }),
                          banner:
                              f === J.NC.ALL &&
                              (0, n.jsx)(s1, { onAssetLoad: M, onQuestCtaClick: X, previewAdCreativeId: h }),
                          children:
                              f === J.NC.CLAIMED
                                  ? (0, n.jsx)(tW, { onSelectTab: el })
                                  : f === J.NC.PREVIEW_TOOL
                                    ? (0, n.jsx)(e3, {})
                                    : V
                                      ? (0, n.jsx)(st, { ref: G, deepLinkedQuestId: ee })
                                      : (0, n.jsx)(tA, { ref: G }),
                      }),
            }),
        }),
    });
};
