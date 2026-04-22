s.d(t, { A: () => v }), s(667532);
var n = s(627968),
    l = s(64700),
    a = s(311907),
    r = s(783878),
    i = s(408278),
    o = s(663417),
    c = s(825484),
    u = s(821609),
    d = s(265872),
    m = s(624479),
    _ = s(289873),
    h = s(416052),
    x = s(240248),
    f = s(829219),
    b = s(859703),
    p = s(890687),
    A = s(45498),
    g = s(767521),
    E = s(818348),
    C = s(985018),
    j = s(60857);
let v = function (e) {
    let { questId: t, setQuestId: s, quest: v, refreshQuest: N } = e,
        [T, S] = l.useState(!1),
        [L, I] = l.useState(!1),
        y = l.useRef(null),
        O = (0, p.pT)(),
        R = (0, a.bG)([b.A], () => (null != t ? b.A.getFetchQuestPreviewError(t) : null), [t]),
        P = (0, a.bG)([b.A], () => null != t && b.A.isFetchingQuestPreview(t), [t]),
        Q = l.useMemo(() => {
            let e = O.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [O, t]),
        k = l.useCallback(async () => {
            if (null != t) {
                S(!0);
                try {
                    await (0, f.Yb)(t, 1);
                } finally {
                    S(!1);
                }
            }
        }, [t, S]),
        w = l.useCallback(async () => {
            if (null != t) {
                S(!0);
                try {
                    await (0, f.UZ)(t);
                } finally {
                    S(!1);
                }
            }
        }, [t, S]),
        M = l.useCallback(async () => {
            if (null != t) {
                S(!0);
                try {
                    let e = Math.random();
                    await (0, f.Yb)(t, e);
                } finally {
                    S(!1);
                }
            }
        }, [t, S]),
        D = l.useCallback(
            (e) => {
                (0, x.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, n.jsxs)("div", {
        className: j.Fr,
        children: [
            (0, n.jsx)("div", {
                children: (0, n.jsx)("div", {
                    className: j.Br,
                    children: (0, n.jsxs)("div", {
                        className: j.bo,
                        children: [
                            (0, n.jsx)(g.A, {}),
                            (0, n.jsxs)("div", {
                                className: j.b8,
                                children: [
                                    (0, n.jsx)(
                                        r.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: Q,
                                            value: t,
                                            onSelectionChange: D,
                                            placeholder: C.intl.string(C.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, x.uJ)(t?.trim())) return e;
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
                                        `${t}-${v?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, n.jsx)(i.K, {
                                        onClick: N,
                                        "aria-label": C.intl.string(C.t.wzzjk9),
                                        icon: o.f,
                                        loading: P,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != v &&
                (0, n.jsx)("div", {
                    className: j.in,
                    children: (0, n.jsxs)(c.e, {
                        className: j.xv,
                        children: [
                            (0, n.jsx)(u.$, {
                                onClick: k,
                                disabled: T,
                                loading: T,
                                variant: "secondary",
                                text: C.intl.string(C.t.jQEfRT),
                            }),
                            (0, n.jsx)(u.$, {
                                onClick: w,
                                disabled: T,
                                loading: T,
                                variant: "secondary",
                                text: C.intl.string(C.t.taqkwK),
                            }),
                            (0, n.jsx)(u.$, {
                                onClick: M,
                                disabled: T,
                                loading: T,
                                variant: "secondary",
                                text: C.intl.string(C.t.cKSLr4),
                            }),
                            (0, n.jsx)(d.Y, {
                                targetElementRef: y,
                                shouldShow: L,
                                onRequestClose: () => I(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, n.jsx)("div", {
                                        className: j.PP,
                                        children: (0, n.jsx)("div", {
                                            className: j.sH,
                                            children: (0, n.jsx)(h.A, {
                                                value: E.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: C.intl.string(C.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, n.jsx)(i.K, {
                                        buttonRef: y,
                                        onClick: () => I(!L),
                                        "aria-label": C.intl.string(C.t.rNGQfD),
                                        icon: m.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != R ? (0, n.jsx)(A.P, { error: R }) : null,
            P ? (0, n.jsx)(_.y, {}) : null,
        ],
    });
};
