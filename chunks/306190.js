n.d(t, { A: () => g }), n(667532);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(416052),
    o = n(240248),
    d = n(829219),
    c = n(859703),
    u = n(890687),
    A = n(45498),
    h = n(767521),
    _ = n(818348),
    m = n(985018),
    p = n(883088);
let g = function (e) {
    let { questId: t, setQuestId: n, quest: g, refreshQuest: E } = e,
        [f, I] = r.useState(!1),
        [C, N] = r.useState(!1),
        T = r.useRef(null),
        S = (0, u.pT)(),
        x = (0, a.bG)([c.A], () => (null != t ? c.A.getFetchQuestPreviewError(t) : null), [t]),
        v = (0, a.bG)([c.A], () => null != t && c.A.isFetchingQuestPreview(t), [t]),
        b = r.useMemo(() => {
            let e = S.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [S, t]),
        y = r.useCallback(async () => {
            if (null != t) {
                I(!0);
                try {
                    await (0, d.Yb)(t, 1);
                } finally {
                    I(!1);
                }
            }
        }, [t, I]),
        L = r.useCallback(async () => {
            if (null != t) {
                I(!0);
                try {
                    await (0, d.UZ)(t);
                } finally {
                    I(!1);
                }
            }
        }, [t, I]),
        O = r.useCallback(async () => {
            if (null != t) {
                I(!0);
                try {
                    let e = Math.random();
                    await (0, d.Yb)(t, e);
                } finally {
                    I(!1);
                }
            }
        }, [t, I]),
        R = r.useCallback(
            (e) => {
                (0, o.uJ)(e) || null == n || n(e);
            },
            [n],
        );
    return (0, i.jsxs)("div", {
        className: p.Fr,
        children: [
            (0, i.jsx)("div", {
                children: (0, i.jsx)("div", {
                    className: p.Br,
                    children: (0, i.jsxs)("div", {
                        className: p.bo,
                        children: [
                            (0, i.jsx)(h.A, {}),
                            (0, i.jsxs)("div", {
                                className: p.b8,
                                children: [
                                    (0, i.jsx)(
                                        l.ZiE,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: b,
                                            value: t,
                                            onSelectionChange: R,
                                            placeholder: m.intl.string(m.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, o.uJ)(t?.trim())) return e;
                                                let n = e.filter(
                                                    (e) =>
                                                        e.label.toLowerCase().includes(t.toLowerCase()) ||
                                                        e.value.toLowerCase().includes(t.toLowerCase()),
                                                );
                                                return 0 === n.length && "" !== t.trim()
                                                    ? [{ label: t.trim(), value: t.trim() }]
                                                    : n;
                                            },
                                        },
                                        `${t}-${g?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, i.jsx)(l.K0, {
                                        onClick: E,
                                        "aria-label": m.intl.string(m.t.wzzjk9),
                                        icon: l.fNY,
                                        loading: v,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != g &&
                (0, i.jsx)("div", {
                    className: p.in,
                    children: (0, i.jsxs)(l.ButtonGroup, {
                        className: p.xv,
                        children: [
                            (0, i.jsx)(l.Button, {
                                onClick: y,
                                disabled: f,
                                loading: f,
                                variant: "secondary",
                                text: m.intl.string(m.t.jQEfRT),
                            }),
                            (0, i.jsx)(l.Button, {
                                onClick: L,
                                disabled: f,
                                loading: f,
                                variant: "secondary",
                                text: m.intl.string(m.t.taqkwK),
                            }),
                            (0, i.jsx)(l.Button, {
                                onClick: O,
                                disabled: f,
                                loading: f,
                                variant: "secondary",
                                text: m.intl.string(m.t.cKSLr4),
                            }),
                            (0, i.jsx)(l.YNO, {
                                targetElementRef: T,
                                shouldShow: C,
                                onRequestClose: () => N(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, i.jsx)("div", {
                                        className: p.PP,
                                        children: (0, i.jsx)("div", {
                                            className: p.sH,
                                            children: (0, i.jsx)(s.A, {
                                                value: _.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: m.intl.string(m.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, i.jsx)(l.K0, {
                                        buttonRef: T,
                                        onClick: () => N(!C),
                                        "aria-label": m.intl.string(m.t.rNGQfD),
                                        icon: l.TdU,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != x ? (0, i.jsx)(A.P, { error: x }) : null,
            v ? (0, i.jsx)(l.y$y, {}) : null,
        ],
    });
};
