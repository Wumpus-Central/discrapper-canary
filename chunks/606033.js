n.d(t, { Z: () => h }), n(388685), n(290780), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(484614),
    l = n(624138),
    c = n(272008),
    u = n(569984),
    d = n(253010),
    f = n(231338),
    _ = n(388032),
    p = n(982538);
let h = function (e) {
    var t, n, h;
    let { questId: m, setQuestId: g, quest: E, refreshQuest: b } = e,
        [y, O] = i.useState(!1),
        [v, I] = i.useState(!1),
        T = i.useRef(null),
        S = (0, a.Wu)([u.Z], () => [...u.Z.quests.values()]),
        A = (0, a.e7)([u.Z], () => (null != m ? u.Z.getFetchQuestPreviewError(m) : null), [m]),
        C = (0, a.e7)([u.Z], () => null != m && u.Z.isFetchingQuestPreview(m), [m]),
        N = i.useMemo(() => {
            let e = S.map((e) => {
                var t, n, r;
                return {
                    label: ""
                        .concat(
                            null != (r = null == (n = e.config) || null == (t = n.messages) ? void 0 : t.questName)
                                ? r
                                : e.id,
                            " (",
                        )
                        .concat(e.id, ")"),
                    value: e.id,
                };
            });
            return (
                null == m ||
                    e.some((e) => e.value === m) ||
                    e.unshift({
                        label: m,
                        value: m,
                    }),
                e
            );
        }, [S, m]),
        R = i.useCallback(async () => {
            if (null != m) {
                O(!0);
                try {
                    await (0, c.Wf)(m, 1);
                } finally {
                    O(!1);
                }
            }
        }, [m, O]),
        P = i.useCallback(async () => {
            if (null != m) {
                O(!0);
                try {
                    await (0, c.eT)(m);
                } finally {
                    O(!1);
                }
            }
        }, [m, O]),
        w = i.useCallback(async () => {
            if (null != m) {
                O(!0);
                try {
                    let e = Math.random();
                    await (0, c.Wf)(m, e);
                } finally {
                    O(!1);
                }
            }
        }, [m, O]),
        D = i.useCallback(
            (e) => {
                (0, l.Ew)(e) || null == g || g(e);
            },
            [g],
        );
    return (0, r.jsxs)("div", {
        className: p.controlBar,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: p.questSelectorContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: p.questInput,
                            children: [
                                (0, r.jsx)(
                                    o.VcW,
                                    {
                                        "aria-label": "Quest ID",
                                        options: N,
                                        value: m,
                                        onChange: D,
                                        placeholder: _.intl.string(_.t.Zw8jxs),
                                        clearable: !0,
                                        filter: (e, t) => {
                                            if ((0, l.Ew)(null == t ? void 0 : t.trim())) return e;
                                            let n = e.filter(
                                                (e) =>
                                                    e.label.toLowerCase().includes(t.toLowerCase()) ||
                                                    e.value.toLowerCase().includes(t.toLowerCase()),
                                            );
                                            return 0 === n.length && "" !== t.trim()
                                                ? [
                                                      {
                                                          label: t.trim(),
                                                          value: t.trim(),
                                                      },
                                                  ]
                                                : n;
                                        },
                                    },
                                    ""
                                        .concat(m, "-")
                                        .concat(
                                            null !=
                                                (h =
                                                    null == E || null == (n = E.config) || null == (t = n.messages)
                                                        ? void 0
                                                        : t.questName)
                                                ? h
                                                : "",
                                        ),
                                ),
                                (0, r.jsx)(o.hU, {
                                    onClick: b,
                                    "aria-label": _.intl.string(_.t.wzzjk5),
                                    icon: o.DuK,
                                    loading: C,
                                }),
                            ],
                        }),
                    }),
                }),
            }),
            null != m &&
                null != E &&
                (0, r.jsx)("div", {
                    className: p.controlsSection,
                    children: (0, r.jsxs)(o.hE2, {
                        className: p.controlButtons,
                        children: [
                            (0, r.jsx)(o.zxk, {
                                onClick: R,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: _.intl.string(_.t.jQEfRU),
                            }),
                            (0, r.jsx)(o.zxk, {
                                onClick: P,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: _.intl.string(_.t.taqkwM),
                            }),
                            (0, r.jsx)(o.zxk, {
                                onClick: w,
                                disabled: y,
                                loading: y,
                                variant: "secondary",
                                text: _.intl.string(_.t.cKSLr6),
                            }),
                            (0, r.jsx)(o.yRy, {
                                targetElementRef: T,
                                shouldShow: v,
                                onRequestClose: () => I(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: p.sharePopover,
                                        children: (0, r.jsx)("div", {
                                            className: p.copyInput,
                                            children: (0, r.jsx)(s.Z, {
                                                value: f.$w.QUEST_PREVIEW_TOOL_2(m),
                                                text: _.intl.string(_.t.WqhZsr),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, r.jsx)(o.hU, {
                                        buttonRef: T,
                                        onClick: () => I(!v),
                                        "aria-label": _.intl.string(_.t.rNGQfH),
                                        icon: o.TIy,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != A ? (0, r.jsx)(d.W, { error: A }) : null,
            C ? (0, r.jsx)(o.$jN, {}) : null,
        ],
    });
};
