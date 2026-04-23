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
    _ = s(624479),
    m = s(289873),
    h = s(416052),
    x = s(240248),
    f = s(829219),
    E = s(859703),
    p = s(890687),
    g = s(45498),
    A = s(767521),
    C = s(818348),
    b = s(985018),
    j = s(60857);
let v = function (e) {
    let { questId: t, setQuestId: s, quest: v, refreshQuest: N } = e,
        [T, S] = l.useState(!1),
        [O, L] = l.useState(!1),
        I = l.useRef(null),
        y = (0, p.pT)(),
        R = (0, a.bG)([E.A], () => (null != t ? E.A.getFetchQuestPreviewError(t) : null), [t]),
        Q = (0, a.bG)([E.A], () => null != t && E.A.isFetchingQuestPreview(t), [t]),
        H = l.useMemo(() => {
            let e = y.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [y, t]),
        M = l.useCallback(async () => {
            if (null != t) {
                S(!0);
                try {
                    await (0, f.Yb)(t, 1);
                } finally {
                    S(!1);
                }
            }
        }, [t, S]),
        P = l.useCallback(async () => {
            if (null != t) {
                S(!0);
                try {
                    await (0, f.UZ)(t);
                } finally {
                    S(!1);
                }
            }
        }, [t, S]),
        U = l.useCallback(async () => {
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
        F = l.useCallback(
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
                            (0, n.jsx)(A.A, {}),
                            (0, n.jsxs)("div", {
                                className: j.b8,
                                children: [
                                    (0, n.jsx)(
                                        r.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: H,
                                            value: t,
                                            onSelectionChange: F,
                                            placeholder: b.intl.string(b.t.Zw8jxn),
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
                                        "aria-label": b.intl.string(b.t.wzzjk9),
                                        icon: o.f,
                                        loading: Q,
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
                                onClick: M,
                                disabled: T,
                                loading: T,
                                variant: "secondary",
                                text: b.intl.string(b.t.jQEfRT),
                            }),
                            (0, n.jsx)(u.$, {
                                onClick: P,
                                disabled: T,
                                loading: T,
                                variant: "secondary",
                                text: b.intl.string(b.t.taqkwK),
                            }),
                            (0, n.jsx)(u.$, {
                                onClick: U,
                                disabled: T,
                                loading: T,
                                variant: "secondary",
                                text: b.intl.string(b.t.cKSLr4),
                            }),
                            (0, n.jsx)(d.Y, {
                                targetElementRef: I,
                                shouldShow: O,
                                onRequestClose: () => L(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, n.jsx)("div", {
                                        className: j.PP,
                                        children: (0, n.jsx)("div", {
                                            className: j.sH,
                                            children: (0, n.jsx)(h.A, {
                                                value: C.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: b.intl.string(b.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, n.jsx)(i.K, {
                                        buttonRef: I,
                                        onClick: () => L(!O),
                                        "aria-label": b.intl.string(b.t.rNGQfD),
                                        icon: _.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != R ? (0, n.jsx)(g.P, { error: R }) : null,
            Q ? (0, n.jsx)(m.y, {}) : null,
        ],
    });
};
