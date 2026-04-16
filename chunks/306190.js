n.d(t, { A: () => p }), n(667532);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(416052),
    o = n(240248),
    d = n(829219),
    c = n(859703),
    u = n(890687),
    A = n(45498),
    h = n(767521),
    _ = n(818348),
    m = n(985018),
    g = n(60857);
let p = function (e) {
    let { questId: t, setQuestId: n, quest: p, refreshQuest: E } = e,
        [I, f] = l.useState(!1),
        [C, T] = l.useState(!1),
        N = l.useRef(null),
        S = (0, u.pT)(),
        x = (0, a.bG)([c.A], () => (null != t ? c.A.getFetchQuestPreviewError(t) : null), [t]),
        v = (0, a.bG)([c.A], () => null != t && c.A.isFetchingQuestPreview(t), [t]),
        b = l.useMemo(() => {
            let e = S.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [S, t]),
        y = l.useCallback(async () => {
            if (null != t) {
                f(!0);
                try {
                    await (0, d.Yb)(t, 1);
                } finally {
                    f(!1);
                }
            }
        }, [t, f]),
        O = l.useCallback(async () => {
            if (null != t) {
                f(!0);
                try {
                    await (0, d.UZ)(t);
                } finally {
                    f(!1);
                }
            }
        }, [t, f]),
        L = l.useCallback(async () => {
            if (null != t) {
                f(!0);
                try {
                    let e = Math.random();
                    await (0, d.Yb)(t, e);
                } finally {
                    f(!1);
                }
            }
        }, [t, f]),
        R = l.useCallback(
            (e) => {
                (0, o.uJ)(e) || null == n || n(e);
            },
            [n],
        );
    return (0, i.jsxs)("div", {
        className: g.Fr,
        children: [
            (0, i.jsx)("div", {
                children: (0, i.jsx)("div", {
                    className: g.Br,
                    children: (0, i.jsxs)("div", {
                        className: g.bo,
                        children: [
                            (0, i.jsx)(h.A, {}),
                            (0, i.jsxs)("div", {
                                className: g.b8,
                                children: [
                                    (0, i.jsx)(
                                        r.ZiE,
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
                                        `${t}-${p?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, i.jsx)(r.K0, {
                                        onClick: E,
                                        "aria-label": m.intl.string(m.t.wzzjk9),
                                        icon: r.fNY,
                                        loading: v,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != p &&
                (0, i.jsx)("div", {
                    className: g.in,
                    children: (0, i.jsxs)(r.ButtonGroup, {
                        className: g.xv,
                        children: [
                            (0, i.jsx)(r.Button, {
                                onClick: y,
                                disabled: I,
                                loading: I,
                                variant: "secondary",
                                text: m.intl.string(m.t.jQEfRT),
                            }),
                            (0, i.jsx)(r.Button, {
                                onClick: O,
                                disabled: I,
                                loading: I,
                                variant: "secondary",
                                text: m.intl.string(m.t.taqkwK),
                            }),
                            (0, i.jsx)(r.Button, {
                                onClick: L,
                                disabled: I,
                                loading: I,
                                variant: "secondary",
                                text: m.intl.string(m.t.cKSLr4),
                            }),
                            (0, i.jsx)(r.YNO, {
                                targetElementRef: N,
                                shouldShow: C,
                                onRequestClose: () => T(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, i.jsx)("div", {
                                        className: g.PP,
                                        children: (0, i.jsx)("div", {
                                            className: g.sH,
                                            children: (0, i.jsx)(s.A, {
                                                value: _.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: m.intl.string(m.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, i.jsx)(r.K0, {
                                        buttonRef: N,
                                        onClick: () => T(!C),
                                        "aria-label": m.intl.string(m.t.rNGQfD),
                                        icon: r.TdU,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != x ? (0, i.jsx)(A.P, { error: x }) : null,
            v ? (0, i.jsx)(r.y$y, {}) : null,
        ],
    });
};
