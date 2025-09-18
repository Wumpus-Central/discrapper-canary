n.d(t, { Z: () => _ }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(272008),
    l = n(569984),
    c = n(564034),
    u = n(253010),
    d = n(388032),
    f = n(982538);
let _ = function (e) {
    let { questId: t, setQuestId: n, quest: _, refreshQuest: p } = e,
        [h, m] = i.useState(!1),
        [g, E] = i.useState(null != t ? t : ""),
        b = (0, a.e7)([l.Z], () => (null != t ? l.Z.getFetchQuestPreviewError(t) : null), [t]),
        y = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]);
    i.useEffect(() => {
        E(null != t ? t : "");
    }, [t, E]);
    let O = i.useCallback(async () => {
            if (null != t) {
                m(!0);
                try {
                    await (0, s.Wf)(t, 1);
                } finally {
                    m(!1);
                }
            }
        }, [t, m]),
        v = i.useCallback(async () => {
            if (null != t) {
                m(!0);
                try {
                    await (0, s.eT)(t);
                } finally {
                    m(!1);
                }
            }
        }, [t, m]),
        I = i.useCallback(async () => {
            if (null != t) {
                m(!0);
                try {
                    let e = Math.random();
                    await (0, s.Wf)(t, e);
                } finally {
                    m(!1);
                }
            }
        }, [t, m]),
        T = i.useCallback(() => {
            let e = g.trim();
            "" !== e && null != n && n(e);
        }, [g, n]),
        S = i.useCallback(
            (e) => {
                "Enter" === e.key && T();
            },
            [T],
        );
    return (0, r.jsxs)(o.Zbd, {
        className: f.controlBar,
        children: [
            (0, r.jsx)("div", {
                className: f.topSection,
                children: (0, r.jsxs)("div", {
                    className: f.questSelectorContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: f.inputGroup,
                            children: [
                                (0, r.jsx)("div", {
                                    className: f.questInput,
                                    children: (0, r.jsx)(o.oil, {
                                        value: g,
                                        onChange: E,
                                        onKeyUp: S,
                                        placeholder: "Enter Quest ID",
                                    }),
                                }),
                                (0, r.jsx)(o.zxk, {
                                    onClick: T,
                                    disabled: "" === g.trim(),
                                    variant: "primary",
                                    text: "Load",
                                }),
                            ],
                        }),
                        null != t &&
                            null != _ &&
                            (0, r.jsxs)("div", {
                                className: f.currentQuestInfo,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: f.questName,
                                        children: [
                                            (0, r.jsx)("span", {
                                                className: f.questLabel,
                                                children: "Current Quest:",
                                            }),
                                            (0, r.jsx)("span", {
                                                className: f.questTitle,
                                                children: _.config.messages.questName,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(o.hU, {
                                        onClick: p,
                                        "aria-label": d.intl.string(d.t.wzzjk5),
                                        icon: o.DuK,
                                        loading: y,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            null != t &&
                null != _ &&
                (0, r.jsxs)("div", {
                    className: f.controlsSection,
                    children: [
                        (0, r.jsx)(c.i, {}),
                        (0, r.jsxs)(o.hE2, {
                            className: f.controlButtons,
                            children: [
                                (0, r.jsx)(o.zxk, {
                                    onClick: O,
                                    disabled: h,
                                    loading: h,
                                    variant: "secondary",
                                    text: "Complete Quest",
                                }),
                                (0, r.jsx)(o.zxk, {
                                    onClick: v,
                                    disabled: h,
                                    loading: h,
                                    variant: "secondary",
                                    text: "Reset Quest",
                                }),
                                (0, r.jsx)(o.zxk, {
                                    onClick: I,
                                    disabled: h,
                                    loading: h,
                                    variant: "secondary",
                                    text: "Random Progress",
                                }),
                            ],
                        }),
                    ],
                }),
            null != b ? (0, r.jsx)(u.W, { error: b }) : null,
            y ? (0, r.jsx)(o.$jN, {}) : null,
        ],
    });
};
