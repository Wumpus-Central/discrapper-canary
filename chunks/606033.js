n.d(t, { Z: () => h }), n(388685), n(781311);
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
    let { questId: t, setQuestId: n, quest: h, refreshQuest: m } = e,
        [g, E] = i.useState(!1),
        [b, y] = i.useState(!1),
        O = i.useRef(null),
        v = (0, a.Wu)([u.Z], () => [...u.Z.quests.values()]),
        I = (0, a.e7)([u.Z], () => (null != t ? u.Z.getFetchQuestPreviewError(t) : null), [t]),
        T = (0, a.e7)([u.Z], () => null != t && u.Z.isFetchingQuestPreview(t), [t]),
        S = i.useMemo(
            () =>
                v.map((e) => {
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
                }),
            [v],
        ),
        A = i.useCallback(async () => {
            if (null != t) {
                E(!0);
                try {
                    await (0, c.Wf)(t, 1);
                } finally {
                    E(!1);
                }
            }
        }, [t, E]),
        C = i.useCallback(async () => {
            if (null != t) {
                E(!0);
                try {
                    await (0, c.eT)(t);
                } finally {
                    E(!1);
                }
            }
        }, [t, E]),
        N = i.useCallback(async () => {
            if (null != t) {
                E(!0);
                try {
                    let e = Math.random();
                    await (0, c.Wf)(t, e);
                } finally {
                    E(!1);
                }
            }
        }, [t, E]),
        R = i.useCallback(
            (e) => {
                (0, l.Ew)(e) || null == n || n(e);
            },
            [n],
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
                                (0, r.jsx)(o.VcW, {
                                    "aria-label": "Quest ID",
                                    options: S,
                                    value: t,
                                    onChange: R,
                                    placeholder: "Select or enter Quest ID",
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
                                }),
                                (0, r.jsx)(o.hU, {
                                    onClick: m,
                                    "aria-label": _.intl.string(_.t.wzzjk5),
                                    icon: o.DuK,
                                    loading: T,
                                }),
                            ],
                        }),
                    }),
                }),
            }),
            null != t &&
                null != h &&
                (0, r.jsx)("div", {
                    className: p.controlsSection,
                    children: (0, r.jsxs)(o.hE2, {
                        className: p.controlButtons,
                        children: [
                            (0, r.jsx)(o.zxk, {
                                onClick: A,
                                disabled: g,
                                loading: g,
                                variant: "secondary",
                                text: "Complete Quest",
                            }),
                            (0, r.jsx)(o.zxk, {
                                onClick: C,
                                disabled: g,
                                loading: g,
                                variant: "secondary",
                                text: "Reset Quest",
                            }),
                            (0, r.jsx)(o.zxk, {
                                onClick: N,
                                disabled: g,
                                loading: g,
                                variant: "secondary",
                                text: "Random Progress",
                            }),
                            (0, r.jsx)(o.yRy, {
                                targetElementRef: O,
                                shouldShow: b,
                                onRequestClose: () => y(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: p.sharePopover,
                                        children: (0, r.jsx)("div", {
                                            className: p.copyInput,
                                            children: (0, r.jsx)(s.Z, {
                                                value: f.$w.SETTINGS_QUEST_PREVIEW_TOOL_2(t),
                                                text: "Copy link",
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, r.jsx)(o.hU, {
                                        buttonRef: O,
                                        onClick: () => y(!b),
                                        "aria-label": "Share quest link",
                                        icon: o.TIy,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != I ? (0, r.jsx)(d.W, { error: I }) : null,
            T ? (0, r.jsx)(o.$jN, {}) : null,
        ],
    });
};
